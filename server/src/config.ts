// Remove trailing /
const baseURL = process.env.BASE_URL?.replace(/\/$/, "") || "";

export default {
  configServiceURL: process.env.CONFIG_CONTROLLER_URL || "http://config-service:3333",
  loginTimeout: 30, // seconds
  particles: process.env.PARTICLES || false,
  baseURL: baseURL,
  // Give empty fallback url in case baseURL is a subpath instead of an url
  basePath: new URL(baseURL, "http://empty").pathname.replace(/\/$/, ""),
  hideControlBar: process.env.HIDE_CONTROL_BAR || false,
  containerType: process.env.CONTAINER_TYPE || "intens",
  redisHost: process.env.REDIS_HOST || "",
  redisPort: Number(process.env.REDIS_PORT || 6379),
  redisPassword: process.env.REDIS_PASSWORD || "",

  INTENS_REQ_PORT: 15560,
  INTENS_SUB_PORT: 15561,
  INTENS_REQ_CTRL_PORT: 15562,

  APP_NAME: process.env.APP_NAME || "Webtens",
  BACKGROUND_COLOR: process.env.BACKGROUND_COLOR || "#3498db",
  LOGO_NAME: process.env.LOGO_NAME || "semafor",

  customStyles: process.env.CUSTOM_STYLES,
  customScripts: process.env.CUSTOM_SCRIPTS,
  loadingLogo: process.env.LOADING_LOGO,
  autologin: process.env.AUTOLOGIN,

  intensAppAlternativeValues: process.env.ALTERNATIVES ?
    Object.fromEntries(
      Object.keys(process.env)
        .filter(k => k.startsWith("ALTERNATIVE_"))
          .map(k => [k.replace(/^ALTERNATIVE_/, ""), process.env[k]])
    )
  : undefined,
  intensAppAlternativeLabel: process.env.ALTERNATIVES_LABEL || "",

  // Only define object if we got an issuer
  oidc: process.env.OIDC_ISSUER ? {
    issuer: process.env.OIDC_ISSUER,
    client: process.env.OIDC_CLIENT,
    clientSecret: process.env.OIDC_CLIENT_SECRET,
    idpLogout: !!(process.env.OIDC_IDP_LOGOUT || false)
  }: undefined,

  otel: process.env.OTEL_ENDPOINT ? {
    endpoint: process.env.OTEL_ENDPOINT,
    baseURL: new URL(process.env.OTEL_ENDPOINT).protocol + "//" + new URL(process.env.OTEL_ENDPOINT).host,
    path: new URL(process.env.OTEL_ENDPOINT).pathname,
  }: undefined
};
