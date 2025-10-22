// Import the tracing module before everything else so it can prepare the hooks for the other libraries
import "./tracing";
import config from "./config";
import SocketIO from "socket.io";
import Express from "express";
import crypto from "crypto";
import http from "http";
import ExpressSession from "express-session";
import ConnectRedis from "connect-redis"
import { createClient } from "redis";
import { auth } from "express-openid-connect";
import intensConnection from "./connection";
import routes from "./routes";
import Logger from "./logger";
import sass  from "sass";

import { createProxyMiddleware } from "http-proxy-middleware";



// Start express server with SocketIO
let app = Express();
let server = new http.Server(app);
let ioServer = new SocketIO.Server(server, {
  path: `${config.basePath}/socket.io`,
  maxHttpBufferSize: 10e9,
  pingTimeout: 60000,
});
let io = ioServer.of("/sio/");

if (config.otel) {
  // Must be here before all the middlewares to prevent them from modifying the traces
  app.use(`${config.basePath}/traces`, createProxyMiddleware({
    target: config.otel.baseURL,
    changeOrigin: true,
    pathRewrite: {'^.*/traces': config.otel.path } 
  }));
}

// If we don't have a redis host, it should be true
let redisReady = !config.redisHost;
let serverReady = false;

let store: ExpressSession.Store;
if (config.redisHost) {
  let RedisStore = ConnectRedis(ExpressSession);
  let redisClient = createClient({
    legacyMode: true,
    password: config.redisPassword,
    socket: {
      host: config.redisHost,
      port: config.redisPort,
    }
  });

  redisClient.connect().then(() => {
    Logger.info("Connected to redis")
    redisReady = true;
  }).catch(message => {
    Logger.error(message);
    process.exit(1);
  });
  store = new RedisStore({ client: redisClient });
} else {
  store = new ExpressSession.MemoryStore();
}

let session = ExpressSession({
  name: `${config.containerType}_auth`,
  secret: "mGCYmt1+qGQZYpX35/CRtanHsMEKOCXYG4FpT64f",
  store,
  resave: true,
  saveUninitialized: false,
  rolling: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  },
  genid() {
    return crypto.randomUUID();
  }
});
app.set("trust proxy", true)
app.set("view engine", "pug");
app.use(session);
app.use(Express.json()); // for parsing application/json
app.use(Express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
if (config.oidc) {
  app.use(config.basePath, auth({
    issuerBaseURL: config.oidc.issuer,
    baseURL: config.baseURL,
    authRequired: false,
    authorizationParams: {
      response_type: "code",
    },
    clientSecret: config.oidc.clientSecret,
    clientID: config.oidc.client,
    secret: "dasklasdlkdsaljk",
    idpLogout: config.oidc.idpLogout,
    routes: {
      login: false,
      logout: `/oidc-logout`,
      postLogoutRedirect: `${config.baseURL}/`
    }
  }))
}
//
// convert a connect middleware to a Socket.IO middleware
const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);

io.use(wrap(session));

app.use(async (req, res, next) => {
  if (req.url.endsWith(".scss")) {
    sass.compileAsync(`${__dirname}/../public/${req.path.replace("/res/", "")}`).then(compiled => {
      res.header("Content-Type", "text/css");
      res.send(compiled.css);
    })
  } else {
    next();
  }
});

app.get("/healthz", (req, res) => {
  if (redisReady && serverReady) {
    res.send("Ready");
  } else {
    res.status(503).send("Not ready");
  }
})

intensConnection(ioServer, io);
routes(app);

server.listen(8000, () => {
  serverReady = true;
  Logger.info(`Listening on port 8000`);
});
