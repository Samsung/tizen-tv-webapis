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
exports.WebAPIException = exports.systeminfo = exports.widgetdata = exports.tvinfo = exports.sso = exports.productinfo = exports.network = exports.billing = exports.avplaystore = exports.avplay = exports.avinfo = exports.appcommon = exports.adinfo = exports.webapis = exports.SsoLoginState = exports.TvInfoValue = exports.TvInfoKey = exports.TvInfoMenuValue = exports.TvInfoMenuKey = exports.ProductInfoSiServerType = exports.ProductInfoNoGlass3dSupport = exports.ProductInfoConfigKey = exports.NetworkWiFiEncryptionType = exports.NetworkWiFiSecurityMode = exports.NetworkState = exports.NetworkActiveConnectionType = exports.NetworkIpMode = exports.AvInfoDigitalCompMode = exports.AppCommonScreenSaverState = void 0;
var AppCommonScreenSaverState;
(function (AppCommonScreenSaverState) {
    AppCommonScreenSaverState[AppCommonScreenSaverState["SCREEN_SAVER_OFF"] = 0] = "SCREEN_SAVER_OFF";
    AppCommonScreenSaverState[AppCommonScreenSaverState["SCREEN_SAVER_ON"] = 1] = "SCREEN_SAVER_ON";
})(AppCommonScreenSaverState = exports.AppCommonScreenSaverState || (exports.AppCommonScreenSaverState = {}));
var AvInfoDigitalCompMode;
(function (AvInfoDigitalCompMode) {
    AvInfoDigitalCompMode[AvInfoDigitalCompMode["DOLBY_DIGITAL_COMP_MODE_LINE"] = 0] = "DOLBY_DIGITAL_COMP_MODE_LINE";
    AvInfoDigitalCompMode[AvInfoDigitalCompMode["DOLBY_DIGITAL_COMP_MODE_RF"] = 1] = "DOLBY_DIGITAL_COMP_MODE_RF";
})(AvInfoDigitalCompMode = exports.AvInfoDigitalCompMode || (exports.AvInfoDigitalCompMode = {}));
var NetworkIpMode;
(function (NetworkIpMode) {
    NetworkIpMode[NetworkIpMode["NONE"] = 0] = "NONE";
    NetworkIpMode[NetworkIpMode["STATIC"] = 1] = "STATIC";
    NetworkIpMode[NetworkIpMode["DYNAMIC"] = 2] = "DYNAMIC";
    NetworkIpMode[NetworkIpMode["AUTO"] = 3] = "AUTO";
    NetworkIpMode[NetworkIpMode["FIXED"] = 4] = "FIXED";
    NetworkIpMode[NetworkIpMode["UNKNOWN"] = 5] = "UNKNOWN";
})(NetworkIpMode = exports.NetworkIpMode || (exports.NetworkIpMode = {}));
var NetworkActiveConnectionType;
(function (NetworkActiveConnectionType) {
    NetworkActiveConnectionType[NetworkActiveConnectionType["DISCONNECTED"] = 0] = "DISCONNECTED";
    NetworkActiveConnectionType[NetworkActiveConnectionType["WIFI"] = 1] = "WIFI";
    NetworkActiveConnectionType[NetworkActiveConnectionType["CELLULAR"] = 2] = "CELLULAR";
    NetworkActiveConnectionType[NetworkActiveConnectionType["ETHERNET"] = 3] = "ETHERNET";
})(NetworkActiveConnectionType = exports.NetworkActiveConnectionType || (exports.NetworkActiveConnectionType = {}));
var NetworkState;
(function (NetworkState) {
    NetworkState[NetworkState["LAN_CABLE_ATTACHED"] = 1] = "LAN_CABLE_ATTACHED";
    NetworkState[NetworkState["LAN_CABLE_DETACHED"] = 2] = "LAN_CABLE_DETACHED";
    NetworkState[NetworkState["LAN_CABLE_STATE_UNKNOWN"] = 3] = "LAN_CABLE_STATE_UNKNOWN";
    NetworkState[NetworkState["GATEWAY_CONNECTED"] = 4] = "GATEWAY_CONNECTED";
    NetworkState[NetworkState["GATEWAY_DISCONNECTED"] = 5] = "GATEWAY_DISCONNECTED";
    NetworkState[NetworkState["WIFI_MODULE_STATE_ATTACHED"] = 6] = "WIFI_MODULE_STATE_ATTACHED";
    NetworkState[NetworkState["WIFI_MODULE_STATE_DETACHED"] = 7] = "WIFI_MODULE_STATE_DETACHED";
    NetworkState[NetworkState["WIFI_MODULE_STATE_UNKNOWN"] = 8] = "WIFI_MODULE_STATE_UNKNOWN";
})(NetworkState = exports.NetworkState || (exports.NetworkState = {}));
var NetworkWiFiSecurityMode;
(function (NetworkWiFiSecurityMode) {
    NetworkWiFiSecurityMode[NetworkWiFiSecurityMode["WEP"] = 1] = "WEP";
    NetworkWiFiSecurityMode[NetworkWiFiSecurityMode["WPA_PSK"] = 2] = "WPA_PSK";
    NetworkWiFiSecurityMode[NetworkWiFiSecurityMode["WPA2_PSK"] = 3] = "WPA2_PSK";
    NetworkWiFiSecurityMode[NetworkWiFiSecurityMode["EAP"] = 4] = "EAP";
    NetworkWiFiSecurityMode[NetworkWiFiSecurityMode["NONE"] = 5] = "NONE";
    NetworkWiFiSecurityMode[NetworkWiFiSecurityMode["UNKNOWN"] = 6] = "UNKNOWN";
})(NetworkWiFiSecurityMode = exports.NetworkWiFiSecurityMode || (exports.NetworkWiFiSecurityMode = {}));
var NetworkWiFiEncryptionType;
(function (NetworkWiFiEncryptionType) {
    NetworkWiFiEncryptionType[NetworkWiFiEncryptionType["WEP"] = 1] = "WEP";
    NetworkWiFiEncryptionType[NetworkWiFiEncryptionType["TKIP"] = 2] = "TKIP";
    NetworkWiFiEncryptionType[NetworkWiFiEncryptionType["AES"] = 3] = "AES";
    NetworkWiFiEncryptionType[NetworkWiFiEncryptionType["TKIP_AES_MIXED"] = 4] = "TKIP_AES_MIXED";
    NetworkWiFiEncryptionType[NetworkWiFiEncryptionType["NONE"] = 5] = "NONE";
    NetworkWiFiEncryptionType[NetworkWiFiEncryptionType["UNKNOWN"] = 6] = "UNKNOWN";
})(NetworkWiFiEncryptionType = exports.NetworkWiFiEncryptionType || (exports.NetworkWiFiEncryptionType = {}));
var ProductInfoConfigKey;
(function (ProductInfoConfigKey) {
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_DATA_SERVICE"] = 0] = "CONFIG_KEY_DATA_SERVICE";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_SERVICE_COUNTRY"] = 1] = "CONFIG_KEY_SERVICE_COUNTRY";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_SHOPLOGO"] = 2] = "CONFIG_KEY_SHOPLOGO";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_CHANNELBOUND_APPS_TICKER"] = 3] = "CONFIG_KEY_CHANNELBOUND_APPS_TICKER";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_SUPPORT_SOCCER_PANEL"] = 4] = "CONFIG_KEY_SUPPORT_SOCCER_PANEL";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_SUPPORT_ONTV_PANEL"] = 5] = "CONFIG_KEY_SUPPORT_ONTV_PANEL";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_SUPPORT_NEWSON_PANEL"] = 6] = "CONFIG_KEY_SUPPORT_NEWSON_PANEL";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_SUPPORT_MYCONTENTS_PANEL"] = 7] = "CONFIG_KEY_SUPPORT_MYCONTENTS_PANEL";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_SUPPORT_GAME_PANEL"] = 8] = "CONFIG_KEY_SUPPORT_GAME_PANEL";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_SUPPORT_CLIPS_PANEL"] = 9] = "CONFIG_KEY_SUPPORT_CLIPS_PANEL";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_SUPPORT_APPS_PANEL"] = 10] = "CONFIG_KEY_SUPPORT_APPS_PANEL";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_SYSTEM_PNP_COUNTRY"] = 11] = "CONFIG_KEY_SYSTEM_PNP_COUNTRY";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_PIN"] = 12] = "CONFIG_KEY_PIN";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_ACRCT"] = 13] = "CONFIG_GPMURL_KEY_ACRCT";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_AM"] = 14] = "CONFIG_GPMURL_KEY_AM";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_AQUA"] = 15] = "CONFIG_GPMURL_KEY_AQUA";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_APPS"] = 16] = "CONFIG_GPMURL_KEY_APPS";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_CDS"] = 17] = "CONFIG_GPMURL_KEY_CDS";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_CLIPS"] = 18] = "CONFIG_GPMURL_KEY_CLIPS";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_EMP"] = 19] = "CONFIG_GPMURL_KEY_EMP";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_EXPLORER3D"] = 20] = "CONFIG_GPMURL_KEY_EXPLORER3D";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_FITNESS"] = 21] = "CONFIG_GPMURL_KEY_FITNESS";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_FKP"] = 22] = "CONFIG_GPMURL_KEY_FKP";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_GAME"] = 23] = "CONFIG_GPMURL_KEY_GAME";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_GEO"] = 24] = "CONFIG_GPMURL_KEY_GEO";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_HA"] = 25] = "CONFIG_GPMURL_KEY_HA";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_HBBTV"] = 26] = "CONFIG_GPMURL_KEY_HBBTV";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_IMS"] = 27] = "CONFIG_GPMURL_KEY_IMS";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_KBO"] = 28] = "CONFIG_GPMURL_KEY_KBO";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_KIDS"] = 29] = "CONFIG_GPMURL_KEY_KIDS";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_NOTICE"] = 30] = "CONFIG_GPMURL_KEY_NOTICE";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_LC"] = 31] = "CONFIG_GPMURL_KEY_LC";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_MSVC"] = 32] = "CONFIG_GPMURL_KEY_MSVC";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_NCS"] = 33] = "CONFIG_GPMURL_KEY_NCS";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_NEWSON"] = 34] = "CONFIG_GPMURL_KEY_NEWSON";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_ONTV"] = 35] = "CONFIG_GPMURL_KEY_ONTV";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_PUSH"] = 36] = "CONFIG_GPMURL_KEY_PUSH";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_RM"] = 37] = "CONFIG_GPMURL_KEY_RM";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_SAPPHIRE"] = 38] = "CONFIG_GPMURL_KEY_SAPPHIRE";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_SAS"] = 39] = "CONFIG_GPMURL_KEY_SAS";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_SCS"] = 40] = "CONFIG_GPMURL_KEY_SCS";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_SEARCHALL"] = 41] = "CONFIG_GPMURL_KEY_SEARCHALL";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_SHS"] = 42] = "CONFIG_GPMURL_KEY_SHS";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_SOCCER"] = 43] = "CONFIG_GPMURL_KEY_SOCCER";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_SSO"] = 44] = "CONFIG_GPMURL_KEY_SSO";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_STS"] = 45] = "CONFIG_GPMURL_KEY_STS";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_TWITTERGW"] = 46] = "CONFIG_GPMURL_KEY_TWITTERGW";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_ACCESSIBILITY_TTS"] = 47] = "CONFIG_KEY_ACCESSIBILITY_TTS";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_MW_MSO_CONFIG"] = 48] = "CONFIG_KEY_MW_MSO_CONFIG";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_EXTRA"] = 49] = "CONFIG_GPMURL_KEY_EXTRA";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_MUSIC"] = 50] = "CONFIG_GPMURL_KEY_MUSIC";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_ACTIVE_CATEGORY"] = 51] = "CONFIG_KEY_ACTIVE_CATEGORY";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_MUTE"] = 52] = "CONFIG_KEY_MUTE";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_OSD_NUMBERPAD"] = 53] = "CONFIG_KEY_OSD_NUMBERPAD";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_OSD_VIRTUALREMOTE"] = 54] = "CONFIG_KEY_OSD_VIRTUALREMOTE";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_STATUS_NETFLIX"] = 55] = "CONFIG_KEY_STATUS_NETFLIX";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_MULTIVIEW_INFO"] = 56] = "CONFIG_KEY_MULTIVIEW_INFO";
})(ProductInfoConfigKey = exports.ProductInfoConfigKey || (exports.ProductInfoConfigKey = {}));
var ProductInfoNoGlass3dSupport;
(function (ProductInfoNoGlass3dSupport) {
    ProductInfoNoGlass3dSupport[ProductInfoNoGlass3dSupport["NO_GLASS_3D_NOT_SUPPORTED"] = 0] = "NO_GLASS_3D_NOT_SUPPORTED";
    ProductInfoNoGlass3dSupport[ProductInfoNoGlass3dSupport["NO_GLASS_3D_SUPPORTED"] = 1] = "NO_GLASS_3D_SUPPORTED";
})(ProductInfoNoGlass3dSupport = exports.ProductInfoNoGlass3dSupport || (exports.ProductInfoNoGlass3dSupport = {}));
var ProductInfoSiServerType;
(function (ProductInfoSiServerType) {
    ProductInfoSiServerType[ProductInfoSiServerType["SI_TYPE_OPERATIING_SERVER"] = 0] = "SI_TYPE_OPERATIING_SERVER";
    ProductInfoSiServerType[ProductInfoSiServerType["SI_TYPE_DEVELOPMENT_SERVER"] = 1] = "SI_TYPE_DEVELOPMENT_SERVER";
    ProductInfoSiServerType[ProductInfoSiServerType["SI_TYPE_DEVELOPING_SERVER"] = 2] = "SI_TYPE_DEVELOPING_SERVER";
})(ProductInfoSiServerType = exports.ProductInfoSiServerType || (exports.ProductInfoSiServerType = {}));
var TvInfoMenuKey;
(function (TvInfoMenuKey) {
    TvInfoMenuKey[TvInfoMenuKey["CAPTION_ONOFF_KEY"] = 0] = "CAPTION_ONOFF_KEY";
    TvInfoMenuKey[TvInfoMenuKey["CAPTION_MODE_KEY"] = 1] = "CAPTION_MODE_KEY";
    TvInfoMenuKey[TvInfoMenuKey["CAPTION_FONT_SIZE_KEY"] = 2] = "CAPTION_FONT_SIZE_KEY";
    TvInfoMenuKey[TvInfoMenuKey["CAPTION_FONT_STYLE_KEY"] = 3] = "CAPTION_FONT_STYLE_KEY";
    TvInfoMenuKey[TvInfoMenuKey["CAPTION_FG_COLOR_KEY"] = 4] = "CAPTION_FG_COLOR_KEY";
    TvInfoMenuKey[TvInfoMenuKey["CAPTION_FG_OPACITY_KEY"] = 5] = "CAPTION_FG_OPACITY_KEY";
    TvInfoMenuKey[TvInfoMenuKey["CAPTION_BG_COLOR_KEY"] = 6] = "CAPTION_BG_COLOR_KEY";
    TvInfoMenuKey[TvInfoMenuKey["CAPTION_BG_OPACITY_KEY"] = 7] = "CAPTION_BG_OPACITY_KEY";
    TvInfoMenuKey[TvInfoMenuKey["CAPTION_EDGE_TYPE_KEY"] = 8] = "CAPTION_EDGE_TYPE_KEY";
    TvInfoMenuKey[TvInfoMenuKey["CAPTION_EDGE_COLOR_KEY"] = 9] = "CAPTION_EDGE_COLOR_KEY";
    TvInfoMenuKey[TvInfoMenuKey["CAPTION_WINDOW_COLOR_KEY"] = 10] = "CAPTION_WINDOW_COLOR_KEY";
    TvInfoMenuKey[TvInfoMenuKey["CAPTION_WINDOW_OPACITY_KEY"] = 11] = "CAPTION_WINDOW_OPACITY_KEY";
    TvInfoMenuKey[TvInfoMenuKey["ACCESSIBILITY_FOCUS_ZOOM"] = 12] = "ACCESSIBILITY_FOCUS_ZOOM";
    TvInfoMenuKey[TvInfoMenuKey["ACCESSIBILITY_HIGH_CONTRAST"] = 13] = "ACCESSIBILITY_HIGH_CONTRAST";
    TvInfoMenuKey[TvInfoMenuKey["SMARTHUB_CHANNEL_BOUND_APPS_TICKER"] = 14] = "SMARTHUB_CHANNEL_BOUND_APPS_TICKER";
    TvInfoMenuKey[TvInfoMenuKey["VOICE_GUIDE_KEY"] = 15] = "VOICE_GUIDE_KEY";
    TvInfoMenuKey[TvInfoMenuKey["SUBTITLE_ONOFF_KEY"] = 16] = "SUBTITLE_ONOFF_KEY";
    TvInfoMenuKey[TvInfoMenuKey["SUBTITLE_MODE_KEY"] = 17] = "SUBTITLE_MODE_KEY";
    TvInfoMenuKey[TvInfoMenuKey["PRIMARY_AUDIO_LANGUAGE_KEY"] = 18] = "PRIMARY_AUDIO_LANGUAGE_KEY";
    TvInfoMenuKey[TvInfoMenuKey["SECONDARY_AUDIO_LANGUAGE_KEY"] = 19] = "SECONDARY_AUDIO_LANGUAGE_KEY";
    TvInfoMenuKey[TvInfoMenuKey["ACCESSIBILITY_VOICE_GUIDE_SPEED"] = 20] = "ACCESSIBILITY_VOICE_GUIDE_SPEED";
    TvInfoMenuKey[TvInfoMenuKey["CAPTION_STYLE_KEY"] = 21] = "CAPTION_STYLE_KEY";
})(TvInfoMenuKey = exports.TvInfoMenuKey || (exports.TvInfoMenuKey = {}));
var TvInfoMenuValue;
(function (TvInfoMenuValue) {
    TvInfoMenuValue[TvInfoMenuValue["OFF"] = 0] = "OFF";
    TvInfoMenuValue[TvInfoMenuValue["ON"] = 1] = "ON";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_OFF"] = 0] = "CAPTION_OFF";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_ON"] = 1] = "CAPTION_ON";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_DEFAULT"] = 0] = "CAPTION_MODE_DEFAULT";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_SERVICE1"] = 1] = "CAPTION_MODE_SERVICE1";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_SERVICE2"] = 2] = "CAPTION_MODE_SERVICE2";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_SERVICE3"] = 3] = "CAPTION_MODE_SERVICE3";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_SERVICE4"] = 4] = "CAPTION_MODE_SERVICE4";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_SERVICE5"] = 5] = "CAPTION_MODE_SERVICE5";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_SERVICE6"] = 6] = "CAPTION_MODE_SERVICE6";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_CC1"] = 7] = "CAPTION_MODE_CC1";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_CC2"] = 8] = "CAPTION_MODE_CC2";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_CC3"] = 9] = "CAPTION_MODE_CC3";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_CC4"] = 10] = "CAPTION_MODE_CC4";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_TEXT1"] = 11] = "CAPTION_MODE_TEXT1";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_TEXT2"] = 12] = "CAPTION_MODE_TEXT2";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_TEXT3"] = 13] = "CAPTION_MODE_TEXT3";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_TEXT4"] = 14] = "CAPTION_MODE_TEXT4";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_SIZE_DEFAULT"] = 0] = "CAPTION_SIZE_DEFAULT";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_SIZE_SMALL"] = 1] = "CAPTION_SIZE_SMALL";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_SIZE_STANDARD"] = 2] = "CAPTION_SIZE_STANDARD";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_SIZE_LARGE"] = 3] = "CAPTION_SIZE_LARGE";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_SIZE_EXTRA_LARGE"] = 4] = "CAPTION_SIZE_EXTRA_LARGE";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_FONT_DEFAULT"] = 0] = "CAPTION_FONT_DEFAULT";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_FONT_STYLE0"] = 1] = "CAPTION_FONT_STYLE0";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_FONT_STYLE1"] = 2] = "CAPTION_FONT_STYLE1";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_FONT_STYLE2"] = 3] = "CAPTION_FONT_STYLE2";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_FONT_STYLE3"] = 4] = "CAPTION_FONT_STYLE3";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_FONT_STYLE4"] = 5] = "CAPTION_FONT_STYLE4";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_FONT_STYLE5"] = 6] = "CAPTION_FONT_STYLE5";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_FONT_STYLE6"] = 7] = "CAPTION_FONT_STYLE6";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_COLOR_DEFAULT"] = 0] = "CAPTION_COLOR_DEFAULT";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_COLOR_WHITE"] = 1] = "CAPTION_COLOR_WHITE";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_COLOR_BLACK"] = 2] = "CAPTION_COLOR_BLACK";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_COLOR_RED"] = 3] = "CAPTION_COLOR_RED";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_COLOR_GREEN"] = 4] = "CAPTION_COLOR_GREEN";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_COLOR_BLUE"] = 5] = "CAPTION_COLOR_BLUE";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_COLOR_YELLOW"] = 6] = "CAPTION_COLOR_YELLOW";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_COLOR_MAGENTA"] = 7] = "CAPTION_COLOR_MAGENTA";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_COLOR_CYAN"] = 8] = "CAPTION_COLOR_CYAN";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_OPACITY_SOLID"] = 0] = "CAPTION_OPACITY_SOLID";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_OPACITY_FLASH"] = 1] = "CAPTION_OPACITY_FLASH";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_OPACITY_TRANSLUCENT"] = 2] = "CAPTION_OPACITY_TRANSLUCENT";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_OPACITY_TRANSPARENT"] = 3] = "CAPTION_OPACITY_TRANSPARENT";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_OPACITY_DEFAULT"] = 4] = "CAPTION_OPACITY_DEFAULT";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_OPACITY_HIGHLY_TRANSLUCENT"] = 5] = "CAPTION_OPACITY_HIGHLY_TRANSLUCENT";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_OPACITY_SLIGHTLY_TRANSLUCENT"] = 6] = "CAPTION_OPACITY_SLIGHTLY_TRANSLUCENT";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_EDGE_NONE"] = 0] = "CAPTION_EDGE_NONE";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_EDGE_RAISED"] = 1] = "CAPTION_EDGE_RAISED";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_EDGE_DEPRESSED"] = 2] = "CAPTION_EDGE_DEPRESSED";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_EDGE_UNIFORM"] = 3] = "CAPTION_EDGE_UNIFORM";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_EDGE_DROP_SHADOWED"] = 4] = "CAPTION_EDGE_DROP_SHADOWED";
    TvInfoMenuValue[TvInfoMenuValue["SUBTITLE_NORMAL"] = 0] = "SUBTITLE_NORMAL";
    TvInfoMenuValue[TvInfoMenuValue["SUBTITLE_HEARING_IMMPEARED"] = 1] = "SUBTITLE_HEARING_IMMPEARED";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_AFR"] = "AFR";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_AKA"] = "AKA";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_AMH"] = "AMH";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_ARA"] = "ARA";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_ASM"] = "ASM";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_BEN"] = "BEN";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_BUL"] = "BUL";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_CAT"] = "CAT";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_CHI"] = "CHI";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_CMN"] = "CMN";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_CZE"] = "CZE";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_DAG"] = "DAG";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_DAN"] = "DAN";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_DUT"] = "DUT";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_ENG"] = "ENG";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_EST"] = "EST";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_EUS"] = "EUS";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_EWE"] = "EWE";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_FIN"] = "FIN";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_FRE"] = "FRE";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_GAA"] = "GAA";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_GER"] = "GER";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_GLA"] = "GLA";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_GLG"] = "GLG";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_GOS"] = "GOS";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_GRE"] = "GRE";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_GUJ"] = "GUJ";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_HAU"] = "HAU";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_HEB"] = "HEB";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_HIN"] = "HIN";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_HRV"] = "HRV";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_HUN"] = "HUN";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_IGB"] = "IGB";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_IND"] = "IND";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_IRI"] = "IRI";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_ITA"] = "ITA";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_JPN"] = "JPN";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_KAN"] = "KAN";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_KOK"] = "KOK";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_KOR"] = "KOR";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_LAV"] = "LAV";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_LIT"] = "LIT";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_MAL"] = "MAL";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_MAO"] = "MAO";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_MAR"] = "MAR";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_MSA"] = "MSA";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_NBL"] = "NBL";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_NOR"] = "NOR";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_NSO"] = "NSO";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_NZI"] = "NZI";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_ORI"] = "ORI";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_PAN"] = "PAN";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_PER"] = "PER";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_POL"] = "POL";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_POR"] = "POR";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_QAA"] = "QAA";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_QAB"] = "QAB";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_QAC"] = "QAC";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_ROM"] = "ROM";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_RUS"] = "RUS";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_SLK"] = "SLK";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_SOT"] = "SOT";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_SPA"] = "SPA";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_SRP"] = "SRP";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_SSW"] = "SSW";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_SWA"] = "SWA";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_SWE"] = "SWE";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_TAM"] = "TAM";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_TEL"] = "TEL";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_THA"] = "THA";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_TSN"] = "TSN";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_TSO"] = "TSO";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_TUR"] = "TUR";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_TWI"] = "TWI";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_UKR"] = "UKR";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_VAL"] = "VAL";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_VEN"] = "VEN";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_VIE"] = "VIE";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_WEL"] = "WEL";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_XHO"] = "XHO";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_XSM"] = "XSM";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_YOR"] = "YOR";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_YUE"] = "YUE";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_ZHO"] = "ZHO";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_ZUL"] = "ZUL";
    TvInfoMenuValue["VOICEGUIDE_SPEED_VERY_FAST"] = "VERY_FAST";
    TvInfoMenuValue["VOICEGUIDE_SPEED_FAST"] = "FAST";
    TvInfoMenuValue["VOICEGUIDE_SPEED_NORMAL"] = "NORMAL";
    TvInfoMenuValue["VOICEGUIDE_SPEED_SLOW"] = "SLOW";
    TvInfoMenuValue["VOICEGUIDE_SPEED_VERY_SLOW"] = "VERY_SLOW";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_STYLE_DEFAULT"] = 0] = "CAPTION_STYLE_DEFAULT";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_STYLE_BOLD"] = 1] = "CAPTION_STYLE_BOLD";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_STYLE_ITALIC"] = 2] = "CAPTION_STYLE_ITALIC";
})(TvInfoMenuValue = exports.TvInfoMenuValue || (exports.TvInfoMenuValue = {}));
var TvInfoKey;
(function (TvInfoKey) {
    TvInfoKey[TvInfoKey["TV_VIEWER_BG_EXECUTABLE"] = 0] = "TV_VIEWER_BG_EXECUTABLE";
})(TvInfoKey = exports.TvInfoKey || (exports.TvInfoKey = {}));
var TvInfoValue;
(function (TvInfoValue) {
    TvInfoValue[TvInfoValue["TV_VIEWER_BG_NOT_EXECUTABLE"] = 0] = "TV_VIEWER_BG_NOT_EXECUTABLE";
    TvInfoValue[TvInfoValue["TV_VIEWER_BG_EXECUTABLE"] = 1] = "TV_VIEWER_BG_EXECUTABLE";
})(TvInfoValue = exports.TvInfoValue || (exports.TvInfoValue = {}));
var SsoLoginState;
(function (SsoLoginState) {
    SsoLoginState[SsoLoginState["SSO_NOT_LOGIN"] = 0] = "SSO_NOT_LOGIN";
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