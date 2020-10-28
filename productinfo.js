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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 8:
/*!**********************************!*\
  !*** multi ./src/productinfo.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/productinfo.ts */"./src/productinfo.ts");


/***/ })

/******/ })));