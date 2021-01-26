export enum AppCommonScreenSaverState {
    /**
     * Screensaver off
     * @since 2.3
     */
    SCREEN_SAVER_OFF = 0,

    /**
     * Screensaver on
     * @since 2.3
     */
    SCREEN_SAVER_ON = 1
}

export enum SsoLoginState {
    /**
     * Not logged in
     */
    SSO_NOT_LOGIN = 0,
    /**
     * Logged in
     */
    SSO_LOGIN = 1
}

export const {
    webapis,
    adinfo,
    appcommon,
    avinfo,
    avplay,
    avplaystore,
    billing,
    network,
    productinfo,
    sso,
    tvinfo,
    widgetdata,
    systeminfo,
    WebAPIException
} = window.webapis;
