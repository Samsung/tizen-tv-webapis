const { productinfo } = window.webapis;

export const {
    ProductInfoConfigKey,
    ProductInfoNoGlass3dSupport,
    ProductInfoSiServerType,
    getVersion,
    getFirmware,
    getDuid,
    getModelCode,
    getModel,
    getSmartTVServerType,
    getSmartTVServerVersion,
    getTunerEpop,
    isSoccerModeEnabled,
    isTtvSupported,
    isUdPanelSupported,
    is8KPanelSupported,
    getRealModel,
    isWallModel,
    getNoGlass3dSupport,
    getLocalSet,
    getSystemConfig,
    setSystemConfig,
    addSystemConfigChangeListener,
    removeSystemConfigChangeListener,
    isUHDAModel,
    isDisplayRotatorSupported
} = productinfo;
