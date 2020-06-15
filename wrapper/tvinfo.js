const { tvinfo } = window.webapis;

const {
    getVersion,
    getMenuValue,
    addCaptionChangeListener,
    removeCaptionChangeListener,
    isTvsPicSizeResized,
    getTvInfoValue,
    showCaption,
    registerInAppCaptionControl,
    TvInfoMenuKey,
    TvInfoMenuValue,
    TvInfoKey,
    TvInfoValue
} = tvinfo;

module.exports = {
    getVersion,
    getMenuValue,
    addCaptionChangeListener,
    removeCaptionChangeListener,
    isTvsPicSizeResized,
    getTvInfoValue,
    showCaption,
    registerInAppCaptionControl,
    TvInfoMenuKey,
    TvInfoMenuValue,
    TvInfoKey,
    TvInfoValue
};
