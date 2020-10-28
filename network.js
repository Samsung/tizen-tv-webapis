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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 7:
/*!******************************!*\
  !*** multi ./src/network.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/network.ts */"./src/network.ts");


/***/ })

/******/ })));