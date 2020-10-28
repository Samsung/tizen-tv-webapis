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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 11:
/*!**************************************!*\
  !*** multi ./src/webapiexception.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/webapiexception.ts */"./src/webapiexception.ts");


/***/ })

/******/ })));