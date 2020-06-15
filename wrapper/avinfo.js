const { avinfo } = window.webapis;

const {
    AvInfoDigitalCompMode,
    getVersion,
    getDolbyDigitalCompMode,
    isHdrTvSupport
} = avinfo;

module.exports = {
    AvInfoDigitalCompMode,
    getVersion,
    getDolbyDigitalCompMode,
    isHdrTvSupport
};
