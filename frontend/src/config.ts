const BACKEND_PORT = 8080
// the current url but with the port replaced
const BACKEND_URL_DEV = window.location.protocol + '//' + window.location.hostname + ':' + BACKEND_PORT

export const getBackendUrl = new URL(
  import.meta.env.DEV
    ? BACKEND_URL_DEV
    : `${location.protocol}//${location.hostname}:${location.port}`
);
export const getBaseUrl = () => {
  if (location.port === "3000") {
    return BACKEND_URL_DEV;
  }
  let base_url = "/" + location.pathname.split("/")[1].toString();
  return base_url == "/ui" ? "" : base_url;
};

interface Config {
  otel: boolean
  hideControlBar: boolean
  loadingLogo: string
  background: string
  customStyles?: string
  customScripts?: string
}

let initialized = false;
let configQueue = null;
let configProps: Config = {
  otel: false,
  hideControlBar: false,
  loadingLogo: "semafor.png"
}

export const getConfig = async () => {
  if (!initialized) {
    initialized = true
    configQueue = (async () => {
      const response = await fetch(`${getBaseUrl()}/ui/config`)
      try {
        configProps = await response.json();
      } catch (e) {
        if (!import.meta.env.DEV) console.error("Error fetching config", e)
      }
    })()
  }
  await configQueue
  return configProps
}
