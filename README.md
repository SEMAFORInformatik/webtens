# Webtens

## Environment variables

| Variable              | Description                                                                                                 |
| --------------------- | ----------------------------------------------------------------------------------------------------------- |
| CONFIG_CONTROLLER_URL | Url of the config-service endpoint                                                                          |
| PARTICLES             | Display particles and background on login screen                                                            |
| BASE_URL              | Base URL of the application. Can be a subpath or full URL. (Full URL required for OIDC login)               |
| CONTAINER_TYPE        | Internal name of the intens application to run                                                              |
| REDIS_HOST            | Host of the redis server to store session cookies in. Setting this enables Redis session storage            |
| REDIS_PORT            | Port of the redis server                                                                                    |
| REDIS_PASSWORD        | Password of the redis server                                                                                |
| APP_NAME              | Name of the application to display on the server                                                            |
| BACKGROUND_COLOR      | Color of the login screen background                                                                        |
| LOGO_NAME             | Name of the logo to display                                                                                 |
| OIDC_ISSUER           | Issuer for the OIDC login                                                                                   |
| OIDC_CLIENT           | OIDC client registered in the issuer                                                                        |
| OIDC_CLIENT_SECRET    | OIDC client secret                                                                                          |
| CUSTOM_STYLES         | Name of a custom stylesheet to apply. It will take files from the `custom` folder inside the public folder. |
| CUSTOM_SCRIPTS        | Same as with CUSTOM_STYLES but for JavaScript                                                               |
| ALTERNATIVES          | Enable setting options for the started application on the login screen.                                     |
| ALTERNATIVES_*        | Options to pass to the config-controller if the user selects the checkbox on login.                         |
| ALTERNATIVES_LABEL    | Label for the checkbox on the login screen.                                                                 |
