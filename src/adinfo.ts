const { adinfo } = window.webapis;

export const { getVersion, isLATEnabled, getTIFA } = adinfo;

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
    SCREEN_SAVER_ON = 1,
}
