(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/adinfo.ts":
/*!***********************!*\
  !*** ./src/adinfo.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppCommonScreenSaverState = exports.getTIFA = exports.isLATEnabled = exports.getVersion = void 0;
const { adinfo } = window.webapis;
exports.getVersion = adinfo.getVersion, exports.isLATEnabled = adinfo.isLATEnabled, exports.getTIFA = adinfo.getTIFA;
var AppCommonScreenSaverState;
(function (AppCommonScreenSaverState) {
    /**
     * Screensaver off
     * @since 2.3
     */
    AppCommonScreenSaverState[AppCommonScreenSaverState["SCREEN_SAVER_OFF"] = 0] = "SCREEN_SAVER_OFF";
    /**
     * Screensaver on
     * @since 2.3
     */
    AppCommonScreenSaverState[AppCommonScreenSaverState["SCREEN_SAVER_ON"] = 1] = "SCREEN_SAVER_ON";
})(AppCommonScreenSaverState = exports.AppCommonScreenSaverState || (exports.AppCommonScreenSaverState = {}));


/***/ }),

/***/ "./src/appcommon.ts":
/*!**************************!*\
  !*** ./src/appcommon.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppCommonScreenSaverState = exports.setScreenSaver = exports.getVersion = void 0;
const { appcommon } = window.webapis;
exports.getVersion = appcommon.getVersion, exports.setScreenSaver = appcommon.setScreenSaver, exports.AppCommonScreenSaverState = appcommon.AppCommonScreenSaverState;


/***/ }),

/***/ "./src/avinfo.ts":
/*!***********************!*\
  !*** ./src/avinfo.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isHdrTvSupport = exports.getDolbyDigitalCompMode = exports.getVersion = exports.AvInfoDigitalCompMode = void 0;
const { avinfo } = window.webapis;
exports.AvInfoDigitalCompMode = avinfo.AvInfoDigitalCompMode, exports.getVersion = avinfo.getVersion, exports.getDolbyDigitalCompMode = avinfo.getDolbyDigitalCompMode, exports.isHdrTvSupport = avinfo.isHdrTvSupport;


/***/ }),

/***/ "./src/avplay.ts":
/*!***********************!*\
  !*** ./src/avplay.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AVPlayEvent = exports.AVPlayError = exports.AVPlayStreamType = exports.AVPlayDrmOperation = exports.AVPlayDrmType = exports.AVPlayStreamingPropertyType = exports.AVPlayBufferSizeUnit = exports.AVPlayBufferOption = exports.AVPlayDisplayMode = exports.AVPlayPlayerState = exports.restoreAsync = exports.restore = exports.suspend = exports.getVersion = exports.getStreamingProperty = exports.setStreamingProperty = exports.getTotalTrackInfo = exports.getCurrentStreamInfo = exports.setSelectTrack = exports.setDisplayMethod = exports.setSubtitlePosition = exports.setExternalSubtitlePath = exports.setSilentSubtitle = exports.unsetSoundAnalysisListener = exports.setSoundAnalysisListener = exports.getUID = exports.setDrm = exports.setListener = exports.setSpeed = exports.setBufferingParam = exports.setTimeoutForBuffering = exports.getCurrentTime = exports.getDuration = exports.jumpBackward = exports.jumpForward = exports.pause = exports.getState = exports.stop = exports.seekTo = exports.play = exports.setDisplayRect = exports.prepareAsync = exports.prepare = exports.close = exports.open = void 0;
const { avplay } = window.webapis;
exports.open = avplay.open, exports.close = avplay.close, exports.prepare = avplay.prepare, exports.prepareAsync = avplay.prepareAsync, exports.setDisplayRect = avplay.setDisplayRect, exports.play = avplay.play, exports.seekTo = avplay.seekTo, exports.stop = avplay.stop, exports.getState = avplay.getState, exports.pause = avplay.pause, exports.jumpForward = avplay.jumpForward, exports.jumpBackward = avplay.jumpBackward, exports.getDuration = avplay.getDuration, exports.getCurrentTime = avplay.getCurrentTime, exports.setTimeoutForBuffering = avplay.setTimeoutForBuffering, exports.setBufferingParam = avplay.setBufferingParam, exports.setSpeed = avplay.setSpeed, exports.setListener = avplay.setListener, exports.setDrm = avplay.setDrm, exports.getUID = avplay.getUID, exports.setSoundAnalysisListener = avplay.setSoundAnalysisListener, exports.unsetSoundAnalysisListener = avplay.unsetSoundAnalysisListener, exports.setSilentSubtitle = avplay.setSilentSubtitle, exports.setExternalSubtitlePath = avplay.setExternalSubtitlePath, exports.setSubtitlePosition = avplay.setSubtitlePosition, exports.setDisplayMethod = avplay.setDisplayMethod, exports.setSelectTrack = avplay.setSelectTrack, exports.getCurrentStreamInfo = avplay.getCurrentStreamInfo, exports.getTotalTrackInfo = avplay.getTotalTrackInfo, exports.setStreamingProperty = avplay.setStreamingProperty, exports.getStreamingProperty = avplay.getStreamingProperty, exports.getVersion = avplay.getVersion, exports.suspend = avplay.suspend, exports.restore = avplay.restore, exports.restoreAsync = avplay.restoreAsync;
var AVPlayPlayerState;
(function (AVPlayPlayerState) {
    AVPlayPlayerState["NONE"] = "NONE";
    AVPlayPlayerState["IDLE"] = "IDLE";
    AVPlayPlayerState["READY"] = "READY";
    AVPlayPlayerState["PLAYING"] = "PLAYING";
    AVPlayPlayerState["PAUSED"] = "PAUSED";
})(AVPlayPlayerState = exports.AVPlayPlayerState || (exports.AVPlayPlayerState = {}));
var AVPlayDisplayMode;
(function (AVPlayDisplayMode) {
    AVPlayDisplayMode["PLAYER_DISPLAY_MODE_LETTER_BOX"] = "PLAYER_DISPLAY_MODE_LETTER_BOX";
    AVPlayDisplayMode["PLAYER_DISPLAY_MODE_FULL_SCREEN"] = "PLAYER_DISPLAY_MODE_FULL_SCREEN";
    AVPlayDisplayMode["PLAYER_DISPLAY_MODE_AUTO_ASPECT_RATIO"] = "PLAYER_DISPLAY_MODE_AUTO_ASPECT_RATIO";
})(AVPlayDisplayMode = exports.AVPlayDisplayMode || (exports.AVPlayDisplayMode = {}));
var AVPlayBufferOption;
(function (AVPlayBufferOption) {
    AVPlayBufferOption["PLAYER_BUFFER_FOR_PLAY"] = "PLAYER_BUFFER_FOR_PLAY";
    AVPlayBufferOption["PLAYER_BUFFER_FOR_RESUME"] = "PLAYER_BUFFER_FOR_RESUME";
})(AVPlayBufferOption = exports.AVPlayBufferOption || (exports.AVPlayBufferOption = {}));
var AVPlayBufferSizeUnit;
(function (AVPlayBufferSizeUnit) {
    AVPlayBufferSizeUnit["PLAYER_BUFFER_SIZE_IN_BYTE"] = "PLAYER_BUFFER_SIZE_IN_BYTE";
    AVPlayBufferSizeUnit["PLAYER_BUFFER_SIZE_IN_SECOND"] = "PLAYER_BUFFER_SIZE_IN_SECOND";
})(AVPlayBufferSizeUnit = exports.AVPlayBufferSizeUnit || (exports.AVPlayBufferSizeUnit = {}));
var AVPlayStreamingPropertyType;
(function (AVPlayStreamingPropertyType) {
    AVPlayStreamingPropertyType["COOKIE"] = "COOKIE";
    AVPlayStreamingPropertyType["USER_AGENT"] = "USER_AGENT";
    AVPlayStreamingPropertyType["PREBUFFER_MODE"] = "PREBUFFER_MODE";
    AVPlayStreamingPropertyType["ADAPTIVE_INFO"] = "ADAPTIVE_INFO";
    AVPlayStreamingPropertyType["SET_MODE_4K"] = "SET_MODE_4K";
    AVPlayStreamingPropertyType["PROPERTY_HD_AUDIO"] = "PROPERTY_HD_AUDIO";
    AVPlayStreamingPropertyType["LISTEN_SPARSE_TRACK"] = "LISTEN_SPARSE_TRACK";
    AVPlayStreamingPropertyType["IS_LIVE"] = "IS_LIVE";
    AVPlayStreamingPropertyType["AVAILABLE_BITRATE"] = "AVAILABLE_BITRATE";
    AVPlayStreamingPropertyType["GET_LIVE_DURATION"] = "GET_LIVE_DURATION";
    AVPlayStreamingPropertyType["CURRENT_BANDWIDTH"] = "CURRENT_BANDWIDTH";
    AVPlayStreamingPropertyType["WIDEVINE"] = "WIDEVINE";
    AVPlayStreamingPropertyType["SET_VR360_MODE"] = "SET_VR360_MODE";
    AVPlayStreamingPropertyType["USE_VIDEOMIXER"] = "USE_VIDEOMIXER";
    AVPlayStreamingPropertyType["SET_MIXEDFRAME"] = "SET_MIXEDFRAME";
    AVPlayStreamingPropertyType["PORTRAIT_MODE"] = "PORTRAIT_MODE";
})(AVPlayStreamingPropertyType = exports.AVPlayStreamingPropertyType || (exports.AVPlayStreamingPropertyType = {}));
var AVPlayDrmType;
(function (AVPlayDrmType) {
    AVPlayDrmType["PLAYREADY"] = "PLAYREADY";
    AVPlayDrmType["EME_PLAYREADY"] = "EME_PLAYREADY";
    AVPlayDrmType["VERIMATRIX"] = "VERIMATRIX";
    AVPlayDrmType["WIDEVINE_CDM"] = "WIDEVINE_CDM";
    AVPlayDrmType["EME_WIDEVINE_CDM"] = "EME_WIDEVINE_CDM";
})(AVPlayDrmType = exports.AVPlayDrmType || (exports.AVPlayDrmType = {}));
var AVPlayDrmOperation;
(function (AVPlayDrmOperation) {
    AVPlayDrmOperation["SetProperties"] = "SetProperties";
    AVPlayDrmOperation["InstallLicense"] = "InstallLicense";
    AVPlayDrmOperation["ProcessInitiator"] = "ProcessInitiator";
    AVPlayDrmOperation["GetUID"] = "GetUID";
    AVPlayDrmOperation["Initialize"] = "Initialize";
    AVPlayDrmOperation["Finalize"] = "Finalize";
    AVPlayDrmOperation["widevine_license_data"] = "widevine_license_data";
    AVPlayDrmOperation["widevine_app_session"] = "widevine_app_session";
    AVPlayDrmOperation["widevine_data_type"] = "widevine_data_type";
})(AVPlayDrmOperation = exports.AVPlayDrmOperation || (exports.AVPlayDrmOperation = {}));
var AVPlayStreamType;
(function (AVPlayStreamType) {
    AVPlayStreamType["VIDEO"] = "VIDEO";
    AVPlayStreamType["AUDIO"] = "AUDIO";
    AVPlayStreamType["TEXT"] = "TEXT";
})(AVPlayStreamType = exports.AVPlayStreamType || (exports.AVPlayStreamType = {}));
var AVPlayError;
(function (AVPlayError) {
    AVPlayError["PLAYER_ERROR_NONE"] = "PLAYER_ERROR_NONE";
    AVPlayError["PLAYER_ERROR_INVALID_PARAMETER"] = "PLAYER_ERROR_INVALID_PARAMETER";
    AVPlayError["PLAYER_ERROR_NO_SUCH_FILE"] = "PLAYER_ERROR_NO_SUCH_FILE";
    AVPlayError["PLAYER_ERROR_INVALID_OPERATION"] = "PLAYER_ERROR_INVALID_OPERATION";
    AVPlayError["PLAYER_ERROR_SEEK_FAILED"] = "PLAYER_ERROR_SEEK_FAILED";
    AVPlayError["PLAYER_ERROR_INVALID_STATE"] = "PLAYER_ERROR_INVALID_STATE";
    AVPlayError["PLAYER_ERROR_NOT_SUPPORTED_FILE"] = "PLAYER_ERROR_NOT_SUPPORTED_FILE";
    AVPlayError["PLAYER_ERROR_NOT_SUPPORTED_FORMAT"] = "PLAYER_ERROR_NOT_SUPPORTED_FORMAT";
    AVPlayError["PLAYER_ERROR_INVALID_URI"] = "PLAYER_ERROR_INVALID_URI";
    AVPlayError["PLAYER_ERROR_CONNECTION_FAILED"] = "PLAYER_ERROR_CONNECTION_FAILED";
    AVPlayError["PLAYER_ERROR_GENEREIC"] = "PLAYER_ERROR_GENEREIC";
})(AVPlayError = exports.AVPlayError || (exports.AVPlayError = {}));
var AVPlayEvent;
(function (AVPlayEvent) {
    AVPlayEvent["PLAYER_MSG_NONE"] = "PLAYER_MSG_NONE";
    AVPlayEvent["PLAYER_MSG_RESOLUTION_CHANGED"] = "PLAYER_MSG_RESOLUTION_CHANGED";
    AVPlayEvent["PLAYER_MSG_BITRATE_CHANGE"] = "PLAYER_MSG_BITRATE_CHANGE";
    AVPlayEvent["PLAYER_MSG_FRAGMENT_INFO"] = "PLAYER_MSG_FRAGMENT_INFO";
    AVPlayEvent["PLAYER_SPARSE_TRACK_DETECT"] = "PLAYER_SPARSE_TRACK_DETECT";
    AVPlayEvent["PLAYER_STREAMING_EVENT"] = "PLAYER_STREAMING_EVENT";
    AVPlayEvent["PLAYER_MSG_HTTP_ERROR_CODE"] = "PLAYER_MSG_HTTP_ERROR_CODE";
    AVPlayEvent["PLAYER_MSG_DRM_CHALLENGE_DATA"] = "PLAYER_MSG_DRM_CHALLENGE_DATA";
})(AVPlayEvent = exports.AVPlayEvent || (exports.AVPlayEvent = {}));


/***/ }),

/***/ "./src/avplaystore.ts":
/*!****************************!*\
  !*** ./src/avplaystore.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayer = void 0;
const { avplaystore } = window.webapis;
exports.getPlayer = avplaystore.getPlayer;


/***/ }),

/***/ "./src/billing.ts":
/*!************************!*\
  !*** ./src/billing.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TVServerType = exports.isServiceAvailable = exports.cancelSubscription = exports.getUserPurchaseList = exports.getServiceCountryAvailability = exports.verifyInvoice = exports.applyInvoice = exports.getProductsList = exports.buyItem = exports.getVersion = void 0;
const { billing } = window.webapis;
exports.getVersion = billing.getVersion, exports.buyItem = billing.buyItem, exports.getProductsList = billing.getProductsList, exports.applyInvoice = billing.applyInvoice, exports.verifyInvoice = billing.verifyInvoice, exports.getServiceCountryAvailability = billing.getServiceCountryAvailability, exports.getUserPurchaseList = billing.getUserPurchaseList, exports.cancelSubscription = billing.cancelSubscription, exports.isServiceAvailable = billing.isServiceAvailable;
var TVServerType;
(function (TVServerType) {
    TVServerType["DEV"] = "DEV";
    TVServerType["PRD"] = "PRD";
})(TVServerType = exports.TVServerType || (exports.TVServerType = {}));


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebAPIException = exports.widgetdata = exports.tvinfo = exports.sso = exports.productinfo = exports.network = exports.billing = exports.avplaystore = exports.avplay = exports.avinfo = exports.appcommon = exports.adinfo = exports.webapis = void 0;
const webapis = __importStar(__webpack_require__(/*! ./webapis */ "./src/webapis.ts"));
exports.webapis = webapis;
const adinfo = __importStar(__webpack_require__(/*! ./adinfo */ "./src/adinfo.ts"));
exports.adinfo = adinfo;
const appcommon = __importStar(__webpack_require__(/*! ./appcommon */ "./src/appcommon.ts"));
exports.appcommon = appcommon;
const avinfo = __importStar(__webpack_require__(/*! ./avinfo */ "./src/avinfo.ts"));
exports.avinfo = avinfo;
const avplay = __importStar(__webpack_require__(/*! ./avplay */ "./src/avplay.ts"));
exports.avplay = avplay;
const avplaystore = __importStar(__webpack_require__(/*! ./avplaystore */ "./src/avplaystore.ts"));
exports.avplaystore = avplaystore;
const billing = __importStar(__webpack_require__(/*! ./billing */ "./src/billing.ts"));
exports.billing = billing;
const network = __importStar(__webpack_require__(/*! ./network */ "./src/network.ts"));
exports.network = network;
const productinfo = __importStar(__webpack_require__(/*! ./productinfo */ "./src/productinfo.ts"));
exports.productinfo = productinfo;
const sso = __importStar(__webpack_require__(/*! ./sso */ "./src/sso.ts"));
exports.sso = sso;
const tvinfo = __importStar(__webpack_require__(/*! ./tvinfo */ "./src/tvinfo.ts"));
exports.tvinfo = tvinfo;
const widgetdata = __importStar(__webpack_require__(/*! ./widgetdata */ "./src/widgetdata.ts"));
exports.widgetdata = widgetdata;
const WebAPIException = __importStar(__webpack_require__(/*! ./webapiexception */ "./src/webapiexception.ts"));
exports.WebAPIException = WebAPIException;


/***/ }),

/***/ "./src/network.ts":
/*!************************!*\
  !*** ./src/network.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkWiFiEncryptionType = exports.NetworkWiFiSecurityMode = exports.NetworkState = exports.NetworkActiveConnectionType = exports.NetworkIpMode = exports.checkCurrentIpWith60Field = exports.getCurrentDhcpOption60Field = exports.removeDhcpOption60Field = exports.setDhcpOption60Field = exports.getSecondaryDns = exports.getWiFiEncryptionType = exports.getWiFiSecurityMode = exports.getWiFiSignalStrengthLevel = exports.getWiFiSsid = exports.removeNetworkStateChangeListener = exports.addNetworkStateChangeListener = exports.getActiveConnectionType = exports.getTVName = exports.getIp = exports.getDns = exports.getMac = exports.getGateway = exports.getSubnetMask = exports.getIpMode = exports.isConnectedToGateway = exports.getVersion = void 0;
const { network } = window.webapis;
exports.getVersion = network.getVersion, exports.isConnectedToGateway = network.isConnectedToGateway, exports.getIpMode = network.getIpMode, exports.getSubnetMask = network.getSubnetMask, exports.getGateway = network.getGateway, exports.getMac = network.getMac, exports.getDns = network.getDns, exports.getIp = network.getIp, exports.getTVName = network.getTVName, exports.getActiveConnectionType = network.getActiveConnectionType, exports.addNetworkStateChangeListener = network.addNetworkStateChangeListener, exports.removeNetworkStateChangeListener = network.removeNetworkStateChangeListener, exports.getWiFiSsid = network.getWiFiSsid, exports.getWiFiSignalStrengthLevel = network.getWiFiSignalStrengthLevel, exports.getWiFiSecurityMode = network.getWiFiSecurityMode, exports.getWiFiEncryptionType = network.getWiFiEncryptionType, exports.getSecondaryDns = network.getSecondaryDns, exports.setDhcpOption60Field = network.setDhcpOption60Field, exports.removeDhcpOption60Field = network.removeDhcpOption60Field, exports.getCurrentDhcpOption60Field = network.getCurrentDhcpOption60Field, exports.checkCurrentIpWith60Field = network.checkCurrentIpWith60Field, exports.NetworkIpMode = network.NetworkIpMode, exports.NetworkActiveConnectionType = network.NetworkActiveConnectionType, exports.NetworkState = network.NetworkState, exports.NetworkWiFiSecurityMode = network.NetworkWiFiSecurityMode, exports.NetworkWiFiEncryptionType = network.NetworkWiFiEncryptionType;


/***/ }),

/***/ "./src/productinfo.ts":
/*!****************************!*\
  !*** ./src/productinfo.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isDisplayRotatorSupported = exports.isUHDAModel = exports.removeSystemConfigChangeListener = exports.addSystemConfigChangeListener = exports.setSystemConfig = exports.getSystemConfig = exports.getLocalSet = exports.getNoGlass3dSupport = exports.isWallModel = exports.getRealModel = exports.is8KPanelSupported = exports.isUdPanelSupported = exports.isTtvSupported = exports.isSoccerModeEnabled = exports.getTunerEpop = exports.getSmartTVServerVersion = exports.getSmartTVServerType = exports.getModel = exports.getModelCode = exports.getDuid = exports.getFirmware = exports.getVersion = exports.ProductInfoSiServerType = exports.ProductInfoNoGlass3dSupport = exports.ProductInfoConfigKey = void 0;
const { productinfo } = window.webapis;
exports.ProductInfoConfigKey = productinfo.ProductInfoConfigKey, exports.ProductInfoNoGlass3dSupport = productinfo.ProductInfoNoGlass3dSupport, exports.ProductInfoSiServerType = productinfo.ProductInfoSiServerType, exports.getVersion = productinfo.getVersion, exports.getFirmware = productinfo.getFirmware, exports.getDuid = productinfo.getDuid, exports.getModelCode = productinfo.getModelCode, exports.getModel = productinfo.getModel, exports.getSmartTVServerType = productinfo.getSmartTVServerType, exports.getSmartTVServerVersion = productinfo.getSmartTVServerVersion, exports.getTunerEpop = productinfo.getTunerEpop, exports.isSoccerModeEnabled = productinfo.isSoccerModeEnabled, exports.isTtvSupported = productinfo.isTtvSupported, exports.isUdPanelSupported = productinfo.isUdPanelSupported, exports.is8KPanelSupported = productinfo.is8KPanelSupported, exports.getRealModel = productinfo.getRealModel, exports.isWallModel = productinfo.isWallModel, exports.getNoGlass3dSupport = productinfo.getNoGlass3dSupport, exports.getLocalSet = productinfo.getLocalSet, exports.getSystemConfig = productinfo.getSystemConfig, exports.setSystemConfig = productinfo.setSystemConfig, exports.addSystemConfigChangeListener = productinfo.addSystemConfigChangeListener, exports.removeSystemConfigChangeListener = productinfo.removeSystemConfigChangeListener, exports.isUHDAModel = productinfo.isUHDAModel, exports.isDisplayRotatorSupported = productinfo.isDisplayRotatorSupported;


/***/ }),

/***/ "./src/sso.ts":
/*!********************!*\
  !*** ./src/sso.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SsoLoginState = exports.showCreateAccountView = exports.getLoginStatus = exports.getLoginUid = exports.getGuid = exports.showAccountView = exports.getVersion = void 0;
const { sso } = window.webapis;
exports.getVersion = sso.getVersion, exports.showAccountView = sso.showAccountView, exports.getGuid = sso.getGuid, exports.getLoginUid = sso.getLoginUid, exports.getLoginStatus = sso.getLoginStatus, exports.showCreateAccountView = sso.showCreateAccountView;
var SsoLoginState;
(function (SsoLoginState) {
    /**
     * Not logged in
     */
    SsoLoginState[SsoLoginState["SSO_NOT_LOGIN"] = 0] = "SSO_NOT_LOGIN";
    /**
     * Logged in
     */
    SsoLoginState[SsoLoginState["SSO_LOGIN"] = 1] = "SSO_LOGIN";
})(SsoLoginState = exports.SsoLoginState || (exports.SsoLoginState = {}));


/***/ }),

/***/ "./src/tvinfo.ts":
/*!***********************!*\
  !*** ./src/tvinfo.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TvInfoValue = exports.TvInfoKey = exports.TvInfoMenuValue = exports.TvInfoMenuKey = exports.registerInAppCaptionControl = exports.showCaption = exports.getTvInfoValue = exports.isTvsPicSizeResized = exports.removeCaptionChangeListener = exports.addCaptionChangeListener = exports.getMenuValue = exports.getVersion = void 0;
const { tvinfo } = window.webapis;
exports.getVersion = tvinfo.getVersion, exports.getMenuValue = tvinfo.getMenuValue, exports.addCaptionChangeListener = tvinfo.addCaptionChangeListener, exports.removeCaptionChangeListener = tvinfo.removeCaptionChangeListener, exports.isTvsPicSizeResized = tvinfo.isTvsPicSizeResized, exports.getTvInfoValue = tvinfo.getTvInfoValue, exports.showCaption = tvinfo.showCaption, exports.registerInAppCaptionControl = tvinfo.registerInAppCaptionControl, exports.TvInfoMenuKey = tvinfo.TvInfoMenuKey, exports.TvInfoMenuValue = tvinfo.TvInfoMenuValue, exports.TvInfoKey = tvinfo.TvInfoKey, exports.TvInfoValue = tvinfo.TvInfoValue;


/***/ }),

/***/ "./src/webapiexception.ts":
/*!********************************!*\
  !*** ./src/webapiexception.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UNKNOWN_ERR = exports.SERVICE_NOT_AVAILABLE_ERR = exports.IO_ERR = exports.INVALID_VALUES_ERR = exports.DATA_CLONE_ERR = exports.INVALID_NODE_TYPE_ERR = exports.TIMEOUT_ERR = exports.QUOTA_EXCEEDED_ERR = exports.URL_MISMATCH_ERR = exports.ABORT_ERR = exports.NETWORK_ERR = exports.SECURITY_ERR = exports.TYPE_MISMATCH_ERR = exports.VALIDATION_ERR = exports.INVALID_ACCESS_ERR = exports.NAMESPACE_ERR = exports.INVALID_MODIFICATION_ERR = exports.SYNTAX_ERR = exports.INVALID_STATE_ERR = exports.INUSE_ATTRIBUTE_ERR = exports.NOT_SUPPORTED_ERR = exports.NOT_FOUND_ERR = exports.NO_MODIFICATION_ALLOWED_ERR = exports.NO_DATA_ALLOWED_ERR = exports.INVALID_CHARACTER_ERR = exports.WRONG_DOCUMENT_ERR = exports.HIERARCHY_REQUEST_ERR = exports.DOMSTRING_SIZE_ERR = exports.INDEX_SIZE_ERR = void 0;
const { WebAPIException } = window.webapis;
exports.INDEX_SIZE_ERR = WebAPIException.INDEX_SIZE_ERR, exports.DOMSTRING_SIZE_ERR = WebAPIException.DOMSTRING_SIZE_ERR, exports.HIERARCHY_REQUEST_ERR = WebAPIException.HIERARCHY_REQUEST_ERR, exports.WRONG_DOCUMENT_ERR = WebAPIException.WRONG_DOCUMENT_ERR, exports.INVALID_CHARACTER_ERR = WebAPIException.INVALID_CHARACTER_ERR, exports.NO_DATA_ALLOWED_ERR = WebAPIException.NO_DATA_ALLOWED_ERR, exports.NO_MODIFICATION_ALLOWED_ERR = WebAPIException.NO_MODIFICATION_ALLOWED_ERR, exports.NOT_FOUND_ERR = WebAPIException.NOT_FOUND_ERR, exports.NOT_SUPPORTED_ERR = WebAPIException.NOT_SUPPORTED_ERR, exports.INUSE_ATTRIBUTE_ERR = WebAPIException.INUSE_ATTRIBUTE_ERR, exports.INVALID_STATE_ERR = WebAPIException.INVALID_STATE_ERR, exports.SYNTAX_ERR = WebAPIException.SYNTAX_ERR, exports.INVALID_MODIFICATION_ERR = WebAPIException.INVALID_MODIFICATION_ERR, exports.NAMESPACE_ERR = WebAPIException.NAMESPACE_ERR, exports.INVALID_ACCESS_ERR = WebAPIException.INVALID_ACCESS_ERR, exports.VALIDATION_ERR = WebAPIException.VALIDATION_ERR, exports.TYPE_MISMATCH_ERR = WebAPIException.TYPE_MISMATCH_ERR, exports.SECURITY_ERR = WebAPIException.SECURITY_ERR, exports.NETWORK_ERR = WebAPIException.NETWORK_ERR, exports.ABORT_ERR = WebAPIException.ABORT_ERR, exports.URL_MISMATCH_ERR = WebAPIException.URL_MISMATCH_ERR, exports.QUOTA_EXCEEDED_ERR = WebAPIException.QUOTA_EXCEEDED_ERR, exports.TIMEOUT_ERR = WebAPIException.TIMEOUT_ERR, exports.INVALID_NODE_TYPE_ERR = WebAPIException.INVALID_NODE_TYPE_ERR, exports.DATA_CLONE_ERR = WebAPIException.DATA_CLONE_ERR, exports.INVALID_VALUES_ERR = WebAPIException.INVALID_VALUES_ERR, exports.IO_ERR = WebAPIException.IO_ERR, exports.SERVICE_NOT_AVAILABLE_ERR = WebAPIException.SERVICE_NOT_AVAILABLE_ERR, exports.UNKNOWN_ERR = WebAPIException.UNKNOWN_ERR;


/***/ }),

/***/ "./src/webapis.ts":
/*!************************!*\
  !*** ./src/webapis.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebAPIException = exports.widgetdata = exports.tvinfo = exports.sso = exports.productinfo = exports.network = exports.billing = exports.avplaystore = exports.avplay = exports.avinfo = exports.appcommon = exports.adinfo = void 0;
const adinfo = __importStar(__webpack_require__(/*! ./adinfo */ "./src/adinfo.ts"));
exports.adinfo = adinfo;
const appcommon = __importStar(__webpack_require__(/*! ./appcommon */ "./src/appcommon.ts"));
exports.appcommon = appcommon;
const avinfo = __importStar(__webpack_require__(/*! ./avinfo */ "./src/avinfo.ts"));
exports.avinfo = avinfo;
const avplay = __importStar(__webpack_require__(/*! ./avplay */ "./src/avplay.ts"));
exports.avplay = avplay;
const avplaystore = __importStar(__webpack_require__(/*! ./avplaystore */ "./src/avplaystore.ts"));
exports.avplaystore = avplaystore;
const billing = __importStar(__webpack_require__(/*! ./billing */ "./src/billing.ts"));
exports.billing = billing;
const network = __importStar(__webpack_require__(/*! ./network */ "./src/network.ts"));
exports.network = network;
const productinfo = __importStar(__webpack_require__(/*! ./productinfo */ "./src/productinfo.ts"));
exports.productinfo = productinfo;
const sso = __importStar(__webpack_require__(/*! ./sso */ "./src/sso.ts"));
exports.sso = sso;
const tvinfo = __importStar(__webpack_require__(/*! ./tvinfo */ "./src/tvinfo.ts"));
exports.tvinfo = tvinfo;
const widgetdata = __importStar(__webpack_require__(/*! ./widgetdata */ "./src/widgetdata.ts"));
exports.widgetdata = widgetdata;
const WebAPIException = __importStar(__webpack_require__(/*! ./webapiexception */ "./src/webapiexception.ts"));
exports.WebAPIException = WebAPIException;


/***/ }),

/***/ "./src/widgetdata.ts":
/*!***************************!*\
  !*** ./src/widgetdata.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.write = exports.read = exports.getVersion = void 0;
const { widgetdata } = window.webapis;
exports.getVersion = widgetdata.getVersion, exports.read = widgetdata.read, exports.write = widgetdata.write, exports.remove = widgetdata.remove;


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.ts */"./src/index.ts");


/***/ })

/******/ })));