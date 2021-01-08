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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebAPIException = exports.systeminfo = exports.widgetdata = exports.tvinfo = exports.sso = exports.productinfo = exports.network = exports.billing = exports.avplaystore = exports.avplay = exports.avinfo = exports.appcommon = exports.adinfo = exports.webapis = exports.SsoLoginState = exports.TVServerType = exports.AVPlayEvent = exports.AVPlayError = exports.AVPlayStreamType = exports.AVPlayDrmOperation = exports.AVPlayDrmType = exports.AVPlayStreamingPropertyType = exports.AVPlayBufferSizeUnit = exports.AVPlayBufferOption = exports.AVPlayDisplayMode = exports.AVPlayPlayerState = exports.AppCommonScreenSaverState = void 0;
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
var TVServerType;
(function (TVServerType) {
    TVServerType["DEV"] = "DEV";
    TVServerType["PRD"] = "PRD";
})(TVServerType = exports.TVServerType || (exports.TVServerType = {}));
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
_a = window.webapis, exports.webapis = _a.webapis, exports.adinfo = _a.adinfo, exports.appcommon = _a.appcommon, exports.avinfo = _a.avinfo, exports.avplay = _a.avplay, exports.avplaystore = _a.avplaystore, exports.billing = _a.billing, exports.network = _a.network, exports.productinfo = _a.productinfo, exports.sso = _a.sso, exports.tvinfo = _a.tvinfo, exports.widgetdata = _a.widgetdata, exports.systeminfo = _a.systeminfo, exports.WebAPIException = _a.WebAPIException;


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