import express from "express";
import otel, {SpanKind} from "@opentelemetry/api";
import Fs from "fs/promises"
import * as zmq from "zeromq"
import config from "./config"
import Logger from "./logger";
import IntensInstance from "./intensInstances";
import { intensTracer } from "./tracing";

declare module "express-session" {
  interface Session {
    loggedIn: boolean;
    username: string;
    application: string;
  }
}

export const isAuthenticated = async (req: express.Request) => {
  const oidcAllowed = req?.oidc?.isAuthenticated() && await new Promise(resolve => {
    req.oidc.fetchUserInfo().then(() => resolve(true)).catch(() => resolve(false))
  })
  return oidcAllowed || req.session?.loggedIn
};

const requiresAuth = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (await isAuthenticated(req)) {
    next()
  } else {
    try {
      await req.oidc.accessToken.refresh()
      next();
      return;
    } catch {
      res.redirect(`${config.baseURL}/login`)
    }
  }
};

export default (app: express.Application) => {
  app.use((_, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'unsafe-eval' 'self' 'unsafe-inline' data: blob: https://fonts.googleapis.com https://fonts.gstatic.com")
    next();
  });

  app.get(`${config.basePath}/`, (_, res) => {
    res.redirect(`${config.baseURL}/login`)
  });

  app.use(`${config.basePath}/res/`, express.static(`${__dirname}/../public`));

  // Login
  app.post(`${config.basePath}/login`, async (req, res) => {
    const username = req.body.username;
    Logger.info({ username }, "Attempting login")
    await new Promise(resolve => req.session.regenerate(resolve));
    const instance = new IntensInstance(req.sessionID, req.body.alternatives, req.body.utcOffset)
    let { ip } = await instance.getDataWait()

    if (!ip) {
      res.render("login", {
        appName: config.APP_NAME,
        backgroundColor: config.BACKGROUND_COLOR,
        logoName: config.LOGO_NAME,
        username: username,
        oidc: !!req.oidc,
        error: "Failed to get Intens application",
        alternatives: config.intensAppAlternativeLabel,
      });
      return;
    }

    Logger.info({ username, instance: req.sessionID }, "Got intens instance");

    const error = await instance.login(req.body.username, req.body.password, req.body.language)

    if (error) {
      Logger.warn({ username, response: error }, "Login failed");
      req.session.loggedIn = false;
      req.session.username = null;
      res.render("login", {
        appName: config.APP_NAME,
        backgroundColor: config.BACKGROUND_COLOR,
        logoName: config.LOGO_NAME,
        username: req.body.username,
        oidc: !!req.oidc,
        particles: config.particles,
        alternatives: config.intensAppAlternativeLabel,
        error,
      });
      // Delete the instance again if it wasn't successful
      instance.release();
    } else {
      Logger.info({ username, instance: req.sessionID }, "logged in")
      req.session.loggedIn = true;
      req.session.username = req.body.username;
      req.session.application = config.containerType;
      const response = await fetch(
        `${config.configServiceURL}/app/${config.containerType}/${req.sessionID}`
        , { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username }) });
      res.redirect(`${config.baseURL}/ui/`);
    }
  });

  app.get(`${config.basePath}/login`, async (req, res) => {
    if (await isAuthenticated(req)) {
      // Redirect to /ui/ if already logged in
      res.redirect(`${config.baseURL}/ui/`);
    } else if (config.autologin) {
      res.redirect(`${config.baseURL}/oidc-login`);
    } else {

      res.setHeader("Content-Security-Policy", "default-src 'self' 'unsafe-eval' https://use.fontawesome.com 'unsafe-inline' data:")
      res.render("login", {
        appName: config.APP_NAME,
        backgroundColor: config.BACKGROUND_COLOR,
        logoName: config.LOGO_NAME,
        oidc: !!req.oidc,
        particles: config.particles,
        alternatives: config.intensAppAlternativeLabel,
      });
    }
  });

  // cookie refresh route
  app.get(`${config.basePath}/refresh`, requiresAuth, (_, res) => {
    res.send("OK");
  });

  app.get(`${config.basePath}/oidc-login`, (req, res) => {
    if (res.oidc) {
      let returnTo = `${config.basePath}/ui/`
      if (req.query.alternatives) returnTo += `?alt`
      res.oidc.login({
        returnTo
      })
    } else {
      res.status(404).send("OIDC not enabled")
    }
  })

  app.get(`${config.basePath}/oidc-session`, (req, res) => {
    if (res.oidc) {
      res.send(req.oidc?.accessToken.access_token || "empty")
    } else {
      res.status(404).send("OIDC not enabled")
    }
  })

  app.post(`${config.basePath}/oidc-refresh`, async (req, res) => {
    if (req.oidc) {
      try {
        const token = await req.oidc.accessToken.refresh()
        const sessionID = req.oidc.idTokenClaims.sid as string
        res.send(token.access_token)
      } catch (e) {
        Logger.error(e);
        res.status(400).send("error");
      }
    } else {
      res.status(404).send("OIDC not enabled")
    }
  });

  app.get(`${config.basePath}/logout`, requiresAuth, async (req, res) => {
    let sessionID = "";
    let username = "";
    if (req.oidc) {
      sessionID = req.oidc.idTokenClaims.sid as string;
      username = req.oidc.idTokenClaims.preferred_username;
    } else {
      sessionID = req.sessionID;
      username = req.session.username
    }
    Logger.info({ username, sessionID}, `Logged out`);
    await new IntensInstance(sessionID).release()
    if (req.oidc) {
      res.redirect(`${config.basePath}/oidc-logout`)
    } else {
      req.session.loggedIn = false;
      req.session.username = null;
      // Generate a new sessionID for our user
      req.session.regenerate(() => {
        res.redirect(`${config.baseURL}/login`);
      })
    }
  });

  app.get(`${config.basePath}/ui/config`, (_, res) => {
    // cors headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
    res.send({
      otel: !!config.otel,
      hideControlBar: config.hideControlBar,
      customStyles: config.customStyles,
      customScripts: config.customScripts,
      loadingLogo: config.loadingLogo,
      background: config.BACKGROUND_COLOR
    })
  })

  app.get(`${config.basePath}/userfiles/:user/:file`, requiresAuth, async (req, res) => {
    if (req.params.user !== req.session.username && req.params.user !== (await req.oidc.fetchUserInfo()).preferred_username) {
      Logger.warn({ username: req.session.username }, `Attempted to download file of other user ${req.params.user}`)
      res.status(403).send("Only the specified user can access this file")
      return
    }
    const fileName = `/tmp/userfiles/${req.params.user}/${req.params.file}`
    try {
      await Fs.access(fileName)
      Logger.info({ username: req.params.user }, `Downloading file ${req.params.file}`);
      res.setHeader("Content-Type", "application/octet-stream").sendFile(fileName, () => {
        Fs.rm(fileName);
      })
    } catch (_) {
      res.type("text/plain").send(`File not found: ${req.params.file}`).status(404)
    }
  });

  app.use(`${config.basePath}/ui/`, requiresAuth, express.static(`${__dirname}/../../dist`));
};
