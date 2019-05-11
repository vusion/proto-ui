/*! Packed by Vusion. */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("ProtoUI", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["ProtoUI"] = factory(require("vue"));
	else
		root["ProtoUI"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_lRwf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonpProtoUI"];
/******/ 	window["webpackJsonpProtoUI"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = "text/javascript";
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "chunk." + ({}[chunkId]||chunkId) + "." + {"0":"b19ea9a33a02f96e"}[chunkId] + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "++4C":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-tooltip_3jRELIND","arrow":"u-tooltip_arrow_3jRELIND"};

/***/ }),

/***/ "+i3O":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-form_item_mYlfDeuD","label":"u-form_item_label_mYlfDeuD","field":"u-form_item_field_mYlfDeuD","message":"u-form_item_message_mYlfDeuD"};

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("jkrl");
module.exports = __webpack_require__("JkW7");


/***/ }),

/***/ "0Sdb":
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "0eq4":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var freeGlobal = __webpack_require__("4uwL");

/** Detect free variable `exports`. */
var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("0Sdb")(module)))

/***/ }),

/***/ "0y3C":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-circular-progress_2trhN8qx","svg":"u-circular-progress_svg_2trhN8qx","track":"u-circular-progress_track_2trhN8qx","trail":"u-circular-progress_trail_2trhN8qx","text":"u-circular-progress_text_2trhN8qx"};

/***/ }),

/***/ "1+hL":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-cascade-select_1unRwGE4"};

/***/ }),

/***/ "1FL0":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("ClFK"),
    Map = __webpack_require__("8axh"),
    MapCache = __webpack_require__("RWOR");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;

/***/ }),

/***/ "1cvr":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-sidebar_divider_1s2XgjOW"};

/***/ }),

/***/ "1gbg":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-toast_BhUDD5mD","item":"u-toast_item_BhUDD5mD","close":"u-toast_close_BhUDD5mD"};

/***/ }),

/***/ "1jLI":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;

/***/ }),

/***/ "1xXH":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"m-complex_1O2ULqeL"};

/***/ }),

/***/ "2Exp":
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__("74R7");

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

module.exports = isMasked;

/***/ }),

/***/ "2HK7":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("AhZp");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;

/***/ }),

/***/ "2wsl":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("6M3H"),
    root = __webpack_require__("G7OI");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;

/***/ }),

/***/ "2wwT":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"clearable":"u-input_clearable_ZGo4mKV-","root":"u-input_ZGo4mKV-","input":"u-input_input_ZGo4mKV-","baseline":"u-input_baseline_ZGo4mKV-","placeholder":"u-input_placeholder_ZGo4mKV-"};

/***/ }),

/***/ "3EcN":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var root = __webpack_require__("G7OI"),
    stubFalse = __webpack_require__("4QqF");

/** Detect free variable `exports`. */
var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("0Sdb")(module)))

/***/ }),

/***/ "3TMU":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("u2T1"),
    isObject = __webpack_require__("8JGq");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
    if (!isObject(value)) {
        return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

/***/ }),

/***/ "4Bks":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("i2mB");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

/***/ }),

/***/ "4FRd":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("6M3H"),
    root = __webpack_require__("G7OI");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;

/***/ }),

/***/ "4NTF":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("DEgf"),
    cloneDataView = __webpack_require__("ZcvT"),
    cloneRegExp = __webpack_require__("YjkK"),
    cloneSymbol = __webpack_require__("mLJa"),
    cloneTypedArray = __webpack_require__("EwoJ");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag:case float64Tag:
    case int8Tag:case int16Tag:case int32Tag:
    case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor();

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor();

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;

/***/ }),

/***/ "4QqF":
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

/***/ }),

/***/ "4uwL":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("HLoC")))

/***/ }),

/***/ "4zFP":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;

/***/ }),

/***/ "55Kj":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"m-group_xvkkPnL4","head":"m-group_head_xvkkPnL4","text":"m-group_text_xvkkPnL4","body":"m-group_body_xvkkPnL4","expander":"m-group_expander_xvkkPnL4","extra":"m-group_extra_xvkkPnL4"};

/***/ }),

/***/ "5Xbz":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;

/***/ }),

/***/ "5hXN":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-list_item_1q9MVCn2"};

/***/ }),

/***/ "5l6N":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-grid-layout_column_kFpRoXz6"};

/***/ }),

/***/ "5vQW":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("Ceww");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;

/***/ }),

/***/ "6M3H":
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__("bmBY"),
    getValue = __webpack_require__("T6JL");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

/***/ }),

/***/ "6S3C":
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

/***/ }),

/***/ "74R7":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("G7OI");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;

/***/ }),

/***/ "7I7t":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"m-parent_387c7kxu"};

/***/ }),

/***/ "7Pzf":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("AhZp");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

/***/ }),

/***/ "80El":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-grid-layout_row_kFpRoXz6"};

/***/ }),

/***/ "8JGq":
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),

/***/ "8axh":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("6M3H"),
    root = __webpack_require__("G7OI");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;

/***/ }),

/***/ "8cZL":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("usMA"),
    arrayEach = __webpack_require__("5Xbz"),
    assignValue = __webpack_require__("PwjO"),
    baseAssign = __webpack_require__("Bjzc"),
    baseAssignIn = __webpack_require__("M86A"),
    cloneBuffer = __webpack_require__("b6Tt"),
    copyArray = __webpack_require__("LSVj"),
    copySymbols = __webpack_require__("lfdT"),
    copySymbolsIn = __webpack_require__("rrHG"),
    getAllKeys = __webpack_require__("z1gT"),
    getAllKeysIn = __webpack_require__("Fmje"),
    getTag = __webpack_require__("LRJZ"),
    initCloneArray = __webpack_require__("KZlJ"),
    initCloneByTag = __webpack_require__("4NTF"),
    initCloneObject = __webpack_require__("Bkv6"),
    isArray = __webpack_require__("M1nh"),
    isBuffer = __webpack_require__("3EcN"),
    isMap = __webpack_require__("tPom"),
    isObject = __webpack_require__("8JGq"),
    isSet = __webpack_require__("C7Dk"),
    keys = __webpack_require__("F3rR");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function (subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });

    return result;
  }

  if (isMap(value)) {
    value.forEach(function (subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });

    return result;
  }

  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;

/***/ }),

/***/ "91ky":
/***/ (function(module, exports) {

module.exports = {"dialog":"Dialog","ok":"OK","cancel":"Cancel"}

/***/ }),

/***/ "9B/7":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"m-root_3TMk6PhN"};

/***/ }),

/***/ "9WiH":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"listView":"u-transfer_listView_3bPgaAld","buttons":"u-transfer_buttons_3bPgaAld","button":"u-transfer_button_3bPgaAld"};

/***/ }),

/***/ "ADVv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"m-multiplex_item_-HB7Y2R1"};

/***/ }),

/***/ "AhZp":
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__("T94g");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;

/***/ }),

/***/ "AvpS":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-drawer_2AdI7j8K","drawer":"u-drawer_drawer_2AdI7j8K","head":"u-drawer_head_2AdI7j8K","title":"u-drawer_title_2AdI7j8K","close":"u-drawer_close_2AdI7j8K","body":"u-drawer_body_2AdI7j8K","foot":"u-drawer_foot_2AdI7j8K"};

/***/ }),

/***/ "BaXm":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-navbar_item_1r-oD5i-"};

/***/ }),

/***/ "Bjzc":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("icO0"),
    keys = __webpack_require__("F3rR");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;

/***/ }),

/***/ "Bkv6":
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__("qfmJ"),
    getPrototype = __webpack_require__("Ya8b"),
    isPrototype = __webpack_require__("wMqM");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
    return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}

module.exports = initCloneObject;

/***/ }),

/***/ "BpIZ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-table_23nnpFRH"};

/***/ }),

/***/ "BrFj":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"m-complex_item_1O2ULqeL"};

/***/ }),

/***/ "C7Dk":
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__("lZY7"),
    baseUnary = __webpack_require__("a7Aj"),
    nodeUtil = __webpack_require__("0eq4");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;

/***/ }),

/***/ "CNkw":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-table-view_filters_3R_Ckir_"};

/***/ }),

/***/ "CSRe":
/***/ (function(module, exports) {

module.exports = {"emptyText":"无匹配数据"}

/***/ }),

/***/ "CSiQ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-badge_1tokp8xU","value":"u-badge_value_1tokp8xU"};

/***/ }),

/***/ "Ceww":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("6M3H");

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

module.exports = defineProperty;

/***/ }),

/***/ "ClFK":
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__("Vaxj"),
    listCacheDelete = __webpack_require__("2HK7"),
    listCacheGet = __webpack_require__("eS0v"),
    listCacheHas = __webpack_require__("7Pzf"),
    listCacheSet = __webpack_require__("NIfW");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;

/***/ }),

/***/ "CxG4":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("i2mB");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

/***/ }),

/***/ "D1Tf":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("ClFK");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

module.exports = stackClear;

/***/ }),

/***/ "DEgf":
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__("fVHz");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;

/***/ }),

/***/ "DMXm":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-sidebar_item_1s2XgjOW"};

/***/ }),

/***/ "DR95":
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),

/***/ "E7Ig":
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__("wwex"),
    ListCache = __webpack_require__("ClFK"),
    Map = __webpack_require__("8axh");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

module.exports = mapCacheClear;

/***/ }),

/***/ "E897":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"item":"u-pagination_item_1dXWlKds","root":"u-pagination_1dXWlKds"};

/***/ }),

/***/ "EwoJ":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("DEgf");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;

/***/ }),

/***/ "F3rR":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__("gFpg"),
    baseKeys = __webpack_require__("jmgJ"),
    isArrayLike = __webpack_require__("tEV9");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;

/***/ }),

/***/ "FKEm":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),

/***/ "FKbo":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

/***/ }),

/***/ "FRRE":
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

module.exports = isKeyable;

/***/ }),

/***/ "FYPy":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"m-multiplex_-HB7Y2R1"};

/***/ }),

/***/ "Fmje":
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__("GR4z"),
    getSymbolsIn = __webpack_require__("a7d+"),
    keysIn = __webpack_require__("Wuw/");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;

/***/ }),

/***/ "Fxmo":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-crumb_item_1SP0CVmb","link":"u-crumb_item_link_1SP0CVmb","disabled":"u-crumb_item_disabled_1SP0CVmb"};

/***/ }),

/***/ "G7OI":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var freeGlobal = __webpack_require__("4uwL");

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

/***/ }),

/***/ "GC8L":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"u-number-input_button_1BRQCkCN","root":"u-number-input_1BRQCkCN"};

/***/ }),

/***/ "GR4z":
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__("HMD2"),
    isArray = __webpack_require__("M1nh");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;

/***/ }),

/***/ "GSzw":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-button_XSpb-BxQ"};

/***/ }),

/***/ "GV1v":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("u2T1"),
    isObjectLike = __webpack_require__("c/Dk");

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
    return typeof value == 'number' || isObjectLike(value) && baseGetTag(value) == numberTag;
}

module.exports = isNumber;

/***/ }),

/***/ "H52n":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-tree-view_node_2rS8f6Tx","item":"u-tree-view_node_item_2rS8f6Tx","sub":"u-tree-view_node_sub_2rS8f6Tx","back":"u-tree-view_node_back_2rS8f6Tx","expander":"u-tree-view_node_expander_2rS8f6Tx","text":"u-tree-view_node_text_2rS8f6Tx"};

/***/ }),

/***/ "HLoC":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "HMD2":
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;

/***/ }),

/***/ "Ha8T":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-popup_EHF4zkx5","head":"u-popup_head_EHF4zkx5","title":"u-popup_title_EHF4zkx5","body":"u-popup_body_EHF4zkx5","foot":"u-popup_foot_EHF4zkx5","arrow":"u-popup_arrow_EHF4zkx5"};

/***/ }),

/***/ "Hdif":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-logo_13ZLQpjw","sub":"u-logo_sub_13ZLQpjw"};

/***/ }),

/***/ "Hs1Z":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-radios_3nuwLjlI"};

/***/ }),

/***/ "I22y":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-navbar_divider_1r-oD5i-"};

/***/ }),

/***/ "I4jp":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("6M3H");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var utils_namespaceObject = {};
__webpack_require__.d(utils_namespaceObject, "DataSource", function() { return utils_DataSource; });
__webpack_require__.d(utils_namespaceObject, "addClass", function() { return addClass; });
__webpack_require__.d(utils_namespaceObject, "removeClass", function() { return removeClass; });
__webpack_require__.d(utils_namespaceObject, "hasClass", function() { return hasClass; });
__webpack_require__.d(utils_namespaceObject, "getRect", function() { return getRect; });
__webpack_require__.d(utils_namespaceObject, "getPosition", function() { return getPosition; });
__webpack_require__.d(utils_namespaceObject, "getSize", function() { return getSize; });
__webpack_require__.d(utils_namespaceObject, "isInRect", function() { return isInRect; });
__webpack_require__.d(utils_namespaceObject, "getComputedStyle", function() { return getComputedStyle; });
__webpack_require__.d(utils_namespaceObject, "roundToFirst", function() { return roundToFirst; });
__webpack_require__.d(utils_namespaceObject, "getFixedCount", function() { return getFixedCount; });
__webpack_require__.d(utils_namespaceObject, "Formatter", function() { return Formatter; });
__webpack_require__.d(utils_namespaceObject, "noopFormatter", function() { return noopFormatter; });
__webpack_require__.d(utils_namespaceObject, "DateFormatter", function() { return DateFormatter; });
__webpack_require__.d(utils_namespaceObject, "dateFormatter", function() { return dateFormatter; });
__webpack_require__.d(utils_namespaceObject, "NumberFormatter", function() { return NumberFormatter; });
__webpack_require__.d(utils_namespaceObject, "numberFormatter", function() { return numberFormatter; });
__webpack_require__.d(utils_namespaceObject, "PlaceholderFormatter", function() { return PlaceholderFormatter; });
__webpack_require__.d(utils_namespaceObject, "placeholderFormatter", function() { return placeholderFormatter; });
__webpack_require__.d(utils_namespaceObject, "parseFormatters", function() { return parseFormatters; });
__webpack_require__.d(utils_namespaceObject, "select", function() { return select_select; });
__webpack_require__.d(utils_namespaceObject, "copy", function() { return clipboard_copy; });
var directives_namespaceObject = {};
__webpack_require__.d(directives_namespaceObject, "tooltip", function() { return v_tooltip; });
__webpack_require__.d(directives_namespaceObject, "clickOutside", function() { return clickOutside; });
__webpack_require__.d(directives_namespaceObject, "repeatClick", function() { return repeatClick; });
__webpack_require__.d(directives_namespaceObject, "focus", function() { return v_focus_focus; });
__webpack_require__.d(directives_namespaceObject, "href", function() { return href; });
__webpack_require__.d(directives_namespaceObject, "to", function() { return to; });
__webpack_require__.d(directives_namespaceObject, "ellipsisTitle", function() { return ellipsisTitle; });

// EXTERNAL MODULE: ./src/base/index.css
var base = __webpack_require__("Vpw6");
var base_default = /*#__PURE__*/__webpack_require__.n(base);

// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/e-ripple.vue/index.js
var ERipple = {
    name: 'e-ripple',
    props: {
        reference: { type: [String], default: 'parent' }
    },
    data: function data() {
        return {
            referenceEl: undefined
        };
    },
    mounted: function mounted() {
        this.referenceEl = this.$el.parentElement;

        var computedStyle = window.getComputedStyle(this.referenceEl);
        if (computedStyle.overflow !== 'hidden') this.referenceEl.style.overflow = 'hidden';
        if (computedStyle.position === 'static') this.referenceEl.style.position = 'relative';

        this.referenceEl.addEventListener('click', this.onClick);
    },
    destroyed: function destroyed() {
        this.referenceEl.removeEventListener('click', this.onClick);
    },

    methods: {
        onClick: function onClick(e) {
            this.$el.removeAttribute('animated');
            var pos = this.referenceEl.getBoundingClientRect();
            this.$el.style.left = e.clientX - pos.left + 'px';
            this.$el.style.top = e.clientY - pos.top + 'px';
            this.$el.setAttribute('animated', 'animated');
        }
    }
};

/* harmony default export */ var e_ripple_vue = (ERipple);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-236a4c70","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/e-ripple.vue/index.html
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:_vm.$style.root},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_e_ripple_vue = (esExports);
// CONCATENATED MODULE: ./src/components/e-ripple.vue/index.js
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__("Tbo7");
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(e_ripple_vue, components_e_ripple_vue, __vue_template_functional__, __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ var src_components_e_ripple_vue = (Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/e-watermark.vue/index.js
var EWatermark = {
    name: 'e-watermark',
    props: {
        text: { type: String, default: 'text' },
        markSize: { type: Number, default: 120 },
        opacity: { type: Number, default: 0.1 },
        image: { type: [HTMLImageElement, HTMLVideoElement, HTMLCanvasElement, window.SVGImageElement, window.ImageBitmap, window.OffscreenCanvas] }
    },
    watch: {
        text: function text() {
            var _this = this;

            setTimeout(function () {
                _this.redrawMark();
                _this.redraw();
            }, 100);
        }
    },
    mounted: function mounted() {
        this.drawMark();
        this.redraw();
        window.addEventListener('resize', this.redraw);
    },
    destroyed: function destroyed() {
        window.removeEventListener('resize', this.redraw);
    },

    methods: {
        drawMark: function drawMark() {
            var markEl = this.$refs.mark;
            var width = markEl.width;
            var height = markEl.height;
            var ctx = markEl.getContext('2d');

            ctx.translate(width / 2, height / 2);
            ctx.scale(2, 2);
            ctx.rotate(-Math.PI / 6);
            ctx.fillStyle = 'black';
            ctx.font = '14px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(this.text, 0, 0);

            return markEl;
        },
        redrawMark: function redrawMark() {
            var markEl = this.$refs.mark;
            var ctx = markEl.getContext('2d');
            var width = markEl.width;
            var height = markEl.height;
            ctx.clearRect(-width, -height, width * 2, height * 2);
            ctx.fillText(this.text, 0, 0);
        },
        draw: function draw(image) {
            var canvasEl = this.$refs.canvas;
            var width = canvasEl.width = canvasEl.clientWidth * 2;
            var height = canvasEl.height = canvasEl.clientHeight * 2;
            var ctx = canvasEl.getContext('2d');

            var markHeight = this.markSize * 2;
            var markWidth = this.markSize * Math.sqrt(3) * 2;
            for (var i = 0; i < width; i += markWidth) {
                for (var j = 0; j < height; j += markHeight) {
                    ctx.drawImage(image, i, j, markWidth, markHeight);
                }
            }
        },
        redraw: function redraw() {
            var image = this.image || this.$refs.mark;
            this.draw(image);
        }
    }
};

/* harmony default export */ var e_watermark_vue = (EWatermark);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-6b8f8bf0","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/e-watermark.vue/index.html
var e_watermark_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_c('canvas',{ref:"canvas",class:_vm.$style.canvas,style:({ opacity: _vm.opacity })}),_c('canvas',{ref:"mark",class:_vm.$style.mark,attrs:{"width":_vm.markSize * 2 * Math.sqrt(3),"height":_vm.markSize * 2}})])}
var e_watermark_vue_staticRenderFns = []
var e_watermark_vue_esExports = { render: e_watermark_vue_render, staticRenderFns: e_watermark_vue_staticRenderFns }
/* harmony default export */ var components_e_watermark_vue = (e_watermark_vue_esExports);
// CONCATENATED MODULE: ./src/components/e-watermark.vue/index.js
var e_watermark_vue_cssModules = {};
function e_watermark_vue_injectStyle (ssrContext) {
e_watermark_vue_cssModules['$style'] = __webpack_require__("R9F4");
  this['$style'] = e_watermark_vue_cssModules['$style']

}
var e_watermark_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var e_watermark_vue___vue_template_functional__ = false
/* styles */
var e_watermark_vue___vue_css__ = e_watermark_vue_injectStyle
/* scopeId */
var e_watermark_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var e_watermark_vue___vue_module_identifier__ = null
var e_watermark_vue_Component = e_watermark_vue_normalizeComponent(e_watermark_vue, components_e_watermark_vue, e_watermark_vue___vue_template_functional__, e_watermark_vue___vue_css__, e_watermark_vue___vue_scopeId__, e_watermark_vue___vue_module_identifier__)
/* harmony default export */ var src_components_e_watermark_vue = (e_watermark_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/f-collapse-transition.vue/index.js
var FCollapseTransition = {
    name: 'f-collapse-transition',
    functional: true,
    render: function render(h, _ref) {
        var children = _ref.children;

        var old = {};

        return h('transition', {
            on: {
                beforeEnter: function beforeEnter(el) {
                    old.paddingTop = el.style.paddingTop;
                    old.paddingBottom = el.style.paddingBottom;

                    el.style.height = '0';
                    el.style.paddingTop = 0;
                    el.style.paddingBottom = 0;
                },
                enter: function enter(el) {
                    old.overflow = el.style.overflow;

                    el.style.height = el.scrollHeight ? el.scrollHeight + 'px' : '';
                    el.style.paddingTop = old.paddingTop;
                    el.style.paddingBottom = old.paddingBottom;

                    el.style.overflow = 'hidden';
                },
                afterEnter: function afterEnter(el) {
                    el.style.height = '';
                    el.style.overflow = old.overflow;
                },
                beforeLeave: function beforeLeave(el) {
                    old.paddingTop = el.style.paddingTop;
                    old.paddingBottom = el.style.paddingBottom;
                    old.overflow = el.style.overflow;

                    el.style.height = el.scrollHeight + 'px';
                    el.style.overflow = 'hidden';
                },
                leave: function leave(el) {
                    if (el.scrollHeight) {
                        el.style.height = 0;
                        el.style.paddingTop = 0;
                        el.style.paddingBottom = 0;
                    }
                },
                afterLeave: function afterLeave(el) {
                    el.style.height = '';
                    el.style.overflow = old.overflow;
                    el.style.paddingTop = old.paddingTop;
                    el.style.paddingBottom = old.paddingBottom;
                }
            }
        }, children);
    }
};

/* harmony default export */ var f_collapse_transition_vue = (FCollapseTransition);
// CONCATENATED MODULE: ./src/components/f-collapse-transition.vue/index.js
var f_collapse_transition_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var __vue_html__ = null
/* template functional */
var f_collapse_transition_vue___vue_template_functional__ = false
/* styles */
var f_collapse_transition_vue___vue_css__ = null
/* scopeId */
var f_collapse_transition_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var f_collapse_transition_vue___vue_module_identifier__ = null
var f_collapse_transition_vue_Component = f_collapse_transition_vue_normalizeComponent(f_collapse_transition_vue, __vue_html__, f_collapse_transition_vue___vue_template_functional__, f_collapse_transition_vue___vue_css__, f_collapse_transition_vue___vue_scopeId__, f_collapse_transition_vue___vue_module_identifier__)
/* harmony default export */ var components_f_collapse_transition_vue = (f_collapse_transition_vue_Component.exports);
// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue__ = __webpack_require__("lRwf");
var external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default = /*#__PURE__*/__webpack_require__.n(external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue__);

// CONCATENATED MODULE: ./src/components/f-draggable.vue/manager.js
/* harmony default export */ var manager = ({
    dragging: false,
    value: undefined,
    proxy: undefined,
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    startX: 0,
    startY: 0,
    dragX: 0,
    dragY: 0,
    startLeft: 0,
    startTop: 0,
    dragLeft: 0,
    dragTop: 0,
    droppable: undefined,
    droppables: []
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/f-draggable.vue/index.js



var FDraggable = {
    name: 'f-draggable',
    props: {
        value: null,
        source: { type: [String, HTMLElement, Function], default: 'self', validator: function validator(value) {
                if (typeof value !== 'string') return true;else return ['self', 'parent', '$parent', 'offset-parent', 'context-parent', 'prev', 'next'].includes(value);
            } },
        transfer: { type: [String, HTMLElement], default: 'clone', validator: function validator(value) {
                if (typeof value !== 'string') return true;else return ['self', 'parent', 'clone'].includes(value);
            } },
        immediate: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        constraint: Function
    },
    render: function render(h) {
        return this.$slots.default ? this.$slots.default[0] : h('div');
    },
    data: function data() {
        return {
            sourceEl: undefined
        };
    },

    watch: {
        disabled: function disabled(_disabled) {
            this.watchDisabled(_disabled);
        }
    },
    mounted: function mounted() {
        this.sourceEl = this.getSourceEl();

        // 虽然 Vue 中一般子组件比父组件先 mounted，
        // 但这里必须放到 mounted。不然可能在 v-if 的情况下出不来。。
        /* eslint-disable consistent-this */
        var parentVM = this;
        this.childVM = new external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a({
            name: 'f-draggable-child',
            parent: parentVM,
            render: function render(h) {
                return parentVM.$slots.transfer && parentVM.$slots.transfer[0];
            }
        });
        this.childVM.parentVM = parentVM;
        this.childVM.$mount();

        this.watchDisabled(this.disabled);
        this.sourceEl.addEventListener('mousedown', this.onMouseDown);
    },
    beforeUpdate: function beforeUpdate() {
        this.childVM.$forceUpdate();
    },
    beforeDestroy: function beforeDestroy() {
        this.childVM = this.childVM && this.childVM.$destroy();
    },

    methods: {
        watchDisabled: function watchDisabled(disabled) {
            if (disabled) this.sourceEl.removeAttribute && this.sourceEl.removeAttribute('draggable');else this.sourceEl.setAttribute && this.sourceEl.setAttribute('draggable', 'draggable');
        },
        getSourceEl: function getSourceEl() {
            var _this = this;

            if (this.source instanceof HTMLElement) return this.source;else if (this.source instanceof Function) return this.source(this.$el);else if (this.$el) {
                if (this.source === 'self') return this.$el;else if (this.source === 'parent') return this.$el.parentElement;else if (this.source === '$parent') return this.$parent.$el;else if (this.source === 'offset-parent') return this.$el.offsetParent;else if (this.source === 'context-parent') {
                    // 求上下文中的 parent
                    if (this.$parent === this.$vnode.context) return this.$el.parentElement;

                    // Vue 的 vnode.parent 没有连接起来，需要自己找，不知道有没有更好的方法
                    var parentVNode = this.$parent._vnode;
                    while (parentVNode && !parentVNode.children.includes(this.$vnode)) {
                        parentVNode = parentVNode.children.find(function (child) {
                            return child.elm.contains(_this.$el);
                        });
                    } // if (!parentVNode)
                    if (parentVNode.context === this.$vnode.context) return parentVNode.elm;

                    // 否则，找第一个上下文一致的组件
                    var parentVM = this.$parent;
                    while (parentVM && parentVM.$vnode.context !== this.$vnode.context) {
                        parentVM = parentVM.$parent;
                    }return parentVM.$el;
                } else if (this.source === 'prev') return this.$el.previousElementSibling;else if (this.source === 'next') return this.$el.nextElementSibling;
            }
        },
        getTransferEl: function getTransferEl() {
            var transferEl = void 0;
            var sourceEl = this.sourceEl;

            if (this.$slots.transfer) transferEl = this.childVM.$el;else if (this.transfer instanceof HTMLElement) transferEl = this.transfer;else if (this.transfer === 'self') transferEl = this.$el;else if (this.transfer === 'source') transferEl = sourceEl;else if (this.transfer === 'clone') transferEl = sourceEl.cloneNode(true);

            if (this.$slots.transfer || this.transfer === 'clone') {
                var rect = sourceEl.getBoundingClientRect();
                this.setTransferFixed(transferEl, rect);
                transferEl.style.width = rect.width + 'px';
                transferEl.style.height = rect.height + 'px';
                sourceEl.parentElement.appendChild(transferEl);
            }

            transferEl && this.initTransfer(transferEl);
            return transferEl;
        },
        initTransfer: function initTransfer(transfer) {
            // 如果position为static，则设置为relative，保证可以移动
            if (window.getComputedStyle(transfer, 'position') === 'static') transfer.style.position = 'relative';
        },
        setTransferFixed: function setTransferFixed(transfer) {
            var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { left: 0, top: 0 };

            transfer.style.left = position.left + 'px';
            transfer.style.top = position.top + 'px';
            transfer.style.zIndex = '9999';
            transfer.style.position = 'fixed';
            transfer.style.display = '';
        },
        onMouseDown: function onMouseDown(e) {
            if (this.disabled) return;

            e.preventDefault();

            Object.assign(manager, {
                screenX: e.screenX,
                screenY: e.screenY,
                clientX: e.clientX,
                clientY: e.clientY,
                pageX: e.pageX,
                pageY: e.pageY,
                startX: e.clientX,
                startY: e.clientY,
                dragX: 0,
                dragY: 0
            });

            window.addEventListener('mousemove', this.onMouseMove);
            window.addEventListener('mouseup', this.onMouseUp);

            this.immediate && this.onMouseMoveStart(e);
        },
        onMouseMove: function onMouseMove(e) {
            e.preventDefault();

            Object.assign(manager, {
                screenX: e.screenX,
                screenY: e.screenY,
                clientX: e.clientX,
                clientY: e.clientY,
                pageX: e.pageX,
                pageY: e.pageY,
                dragX: e.clientX - manager.startX,
                dragY: e.clientY - manager.startY
            });

            manager.dragging === false ? this.onMouseMoveStart(e) : this.onMouseMoving(e);
        },
        onMouseMoveStart: function onMouseMoveStart(e, override) {
            var transferEl = this.getTransferEl();

            // 代理元素的位置从MouseMoveStart开始算，这样在MouseDown中也可以预先处理位置
            // 获取初始的left和top值
            var style = transferEl ? window.getComputedStyle(transferEl) : {};
            style = { left: style.left, top: style.top };
            if (!style.left || style.left === 'auto') style.left = '0px';
            if (!style.top || style.top === 'auto') style.top = '0px';
            style.left = +style.left.slice(0, -2);
            style.top = +style.top.slice(0, -2);

            Object.assign(manager, {
                dragging: true,
                transferEl: transferEl,
                value: this.value,
                startLeft: style.left,
                startTop: style.top,
                droppable: undefined
            });

            manager.left = manager.startLeft;
            manager.top = manager.startTop;

            !override && this.dragStart();
        },
        onMouseMoving: function onMouseMoving(e) {
            // 拖拽约束
            var next = (this.constraint || this.defaultConstraint)(manager);

            // 设置位置
            if (manager.transferEl) {
                manager.transferEl.style.left = next.left + 'px';
                manager.transferEl.style.top = next.top + 'px';
            }

            // 更新当前位置
            manager.left = next.left;
            manager.top = next.top;

            this.drag();
            if (!manager.dragging) return;

            // for Droppable
            var pointEl = null;
            if (manager.transferEl) {
                manager.transferEl.style.display = 'none';
                pointEl = document.elementFromPoint(e.clientX, e.clientY);
                manager.transferEl.style.display = '';
            } else pointEl = document.elementFromPoint(e.clientX, e.clientY);

            var pointDroppable = null;
            // while (pointEl) {
            pointDroppable = manager.droppables.find(function (droppable) {
                return droppable.$el && droppable.$el.contains(pointEl);
            });

            // if (pointDroppable)
            //     break;
            // else
            //     pointEl = pointEl.parentElement;
            // }

            if (manager.droppable !== pointDroppable) {
                manager.droppable && manager.droppable.dragLeave(this);
                if (!manager.dragging) return;
                pointDroppable && pointDroppable.dragEnter(this);
                manager.droppable = pointDroppable;
            }

            // dragEnter之后也要dragOver
            pointDroppable && pointDroppable.dragOver(this);
        },
        onMouseUp: function onMouseUp(e) {
            window.removeEventListener('mousemove', this.onMouseMove);
            window.removeEventListener('mouseup', this.onMouseUp);

            if (manager.dragging) {
                manager.droppable && manager.droppable.drop(this);
                this.cancel();
            }
        },
        defaultConstraint: function defaultConstraint(params) {
            return {
                left: params.startLeft + params.dragX,
                top: params.startTop + params.dragY
            };
        },
        cancel: function cancel() {
            this.dragEnd();

            Object.assign(manager, {
                dragging: false,
                value: undefined,
                transferEl: undefined,
                range: undefined,
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                startX: 0,
                startY: 0,
                dragX: 0,
                dragY: 0,
                startLeft: 0,
                startTop: 0,
                left: 0,
                top: 0,
                droppable: undefined
            });
        },
        dragStart: function dragStart() {
            var sourceEl = this.sourceEl;
            sourceEl.setAttribute('draggable-source', 'draggable-source');
            manager.transferEl && manager.transferEl.setAttribute('draggable-transfer', 'draggable-transfer');

            var cancel = false;
            this.$emit('dragstart', Object.assign({
                originVM: this,
                sourceEl: sourceEl,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            }, manager), this);

            if (cancel) return this.cancel();
        },
        drag: function drag() {
            this.$emit('drag', Object.assign({
                originVM: this,
                sourceEl: this.sourceEl
            }, manager), this);
        },
        dragEnd: function dragEnd() {
            var sourceEl = this.sourceEl;
            sourceEl && sourceEl.removeAttribute('draggable-source');

            this.$emit('dragend', Object.assign({
                originVM: this,
                sourceEl: sourceEl
            }, manager), this);

            if (manager.transferEl) {
                if (this.$slots.transfer || this.transfer === 'clone') manager.transferEl.parentElement.removeChild(manager.transferEl);

                manager.transferEl.removeAttribute('draggable-transfer');
            }
        }
    }
};

/* harmony default export */ var f_draggable_vue = (FDraggable);
// CONCATENATED MODULE: ./src/components/f-draggable.vue/index.js
var f_draggable_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var f_draggable_vue___vue_html__ = null
/* template functional */
var f_draggable_vue___vue_template_functional__ = false
/* styles */
var f_draggable_vue___vue_css__ = null
/* scopeId */
var f_draggable_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var f_draggable_vue___vue_module_identifier__ = null
var f_draggable_vue_Component = f_draggable_vue_normalizeComponent(f_draggable_vue, f_draggable_vue___vue_html__, f_draggable_vue___vue_template_functional__, f_draggable_vue___vue_css__, f_draggable_vue___vue_scopeId__, f_draggable_vue___vue_module_identifier__)
/* harmony default export */ var components_f_draggable_vue = (f_draggable_vue_Component.exports);
// CONCATENATED MODULE: ./src/utils/DataSource/index.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var solveCondition = function solveCondition(condition, obj) {
    if (Array.isArray(condition)) return condition.some(function (cond) {
        return solveCondition(cond, obj);
    });else if ((typeof condition === 'undefined' ? 'undefined' : _typeof(condition)) === 'object') {
        return Object.keys(condition).every(function (key) {
            var expression = condition[key];
            if ((typeof expression === 'undefined' ? 'undefined' : _typeof(expression)) !== 'object') expression = ['=', expression];
            if (Array.isArray(expression)) {
                expression = {
                    operator: expression[0],
                    value: expression[1]
                };
            }

            var sourceValue = obj[key];
            var targetValue = expression.value;
            if (expression.caseInsensitive) {
                sourceValue = typeof sourceValue === 'string' ? sourceValue.toLowerCase() : sourceValue;
                targetValue = typeof targetValue === 'string' ? targetValue.toLowerCase() : targetValue;
            }

            if (typeof expression.operator === 'function') return expression.operator(sourceValue, targetValue, expression);else if (expression.operator === '=' || expression.operator === '==' || expression.operator === 'eq') return sourceValue === targetValue;else if (expression.operator === '!=' || expression.operator === 'neq') return sourceValue !== targetValue;else if (expression.operator === '<' || expression.operator === 'lt') return sourceValue < targetValue;else if (expression.operator === '<=' || expression.operator === 'lte') return sourceValue <= targetValue;else if (expression.operator === '>' || expression.operator === 'gt') return sourceValue > targetValue;else if (expression.operator === '>=' || expression.operator === 'gte') return sourceValue >= targetValue;else if (expression.operator === 'includes') return sourceValue.includes(targetValue);else if (expression.operator === 'startsWith') return sourceValue.startsWith(targetValue);else if (expression.operator === 'endsWith') return sourceValue.endsWith(targetValue);else throw new TypeError('Unknown operator in conditions!');
        });
    } else throw new TypeError('Condition must be a Object or Array!');
};

/**
 * @example 作为简单的 query
 * const dataSource = new DataSource();
 * dataSource.query({
 *     paging,
 *     sorting,
 *     filtering,
 * }).then();
 *
 * @example 作为状态储存
 * const dataSource = new DataSource();
 * dataSource.filter();
 *
 */

var VueDataSource = external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a.extend({
    data: function data() {
        return {
            data: [],
            cache: true,
            viewMode: 'page',
            paging: undefined, // @TODO
            sorting: undefined, // @readonly
            filtering: undefined, // @readonly
            // grouping: undefined,
            remote: false,
            remotePaging: false,
            remoteSorting: false,
            remoteFiltering: false,
            // remoteGrouping: false,
            // ------
            arrangedData: [], // 整理过的数据，用于缓存过滤和排序行为。比如多次获取分页的话，没有必要重新整理
            arranged: false,
            prependedData: [],
            dirty: false,
            originTotal: Infinity, // @readonly - originTotal 作为很重要的判断有没有加载完所有数据的依据
            initialLoaded: false,
            params: {}
        };
    },

    computed: {
        offset: function offset() {
            return this.paging ? (this.paging.number - 1) * this.paging.size : 0;
        },
        limit: function limit() {
            return this.paging ? this.paging.size : Infinity;
        },
        total: function total() {
            if (this.remotePaging) return this.originTotal === Infinity ? this.data.length : this.originTotal;else return this.arrangedData.length;
        },
        totalPage: function totalPage() {
            var totalPage = Math.ceil(this.total / this.paging.size);
            if (!this.paging || totalPage === Infinity || totalPage === 0) return 1;else return totalPage;
        },
        viewData: function viewData() {
            if (this.paging) {
                if (this.viewMode === 'more') return this.arrangedData.slice(0, this.offset + this.limit);else return this.arrangedData.slice(this.offset, this.offset + this.limit);
            } else return this.arrangedData;
        }
    },
    // paging, sorting, filtering 暂不用 watch
    created: function created() {
        this.remote = !!this._load;
        // 传 data 为本地数据模式，此时已知所有数据
        if (!this.remote) {
            this.initialLoaded = true;
            this.originTotal = this.data.length;
            this.arrange();
        }
    },

    methods: {
        arrange: function arrange() {
            var _this = this;

            var arrangedData = Array.from(this.data);

            if (this.remotePaging) return this.arrangedData = arrangedData;

            var filtering = this.filtering;
            if (!this.remoteFiltering && filtering && Object.keys(filtering).length) arrangedData = arrangedData.filter(function (item) {
                return solveCondition(filtering, item);
            });

            var sorting = this.sorting;
            if (!this.remoteSorting && sorting && sorting.field) {
                var field = sorting.field;
                var orderSign = sorting.order === 'asc' ? 1 : -1;
                if (sorting.compare) arrangedData.sort(function (item1, item2) {
                    return sorting.compare(item1[field], item2[field], orderSign);
                });else arrangedData.sort(function (item1, item2) {
                    return _this.defaultCompare(item1[field], item2[field], orderSign);
                });
            }

            this.arrangedData = arrangedData;
        },
        _process: function _process(data) {
            return data;
        },
        clearLocalData: function clearLocalData() {
            this.data = [];
            this.arrangedData = [];
            this.originTotal = Infinity;
            this.arranged = false;
            this.initialLoaded = false;
        },
        mustRemote: function mustRemote(offset, newOffset) {
            return !this.hasAllRemoteData(offset, newOffset) // 没有全部的远程数据
            || this.params.hasOwnProperty('filtering') && this.remoteFiltering || this.params.hasOwnProperty('sorting') && this.remoteSorting;
        },

        /**
         * 根据 viewData，是否还有数据
         * @param {Number} offset - 位置
         */
        hasMore: function hasMore(offset) {
            if (offset === undefined || offset === Infinity) offset = this.offset + this.limit;
            return offset < this.prependedData.length + this.originTotal;
        },

        /**
         * 是否还有远程数据
         * @param {Number} offset - 位置
         */
        hasAllRemoteData: function hasAllRemoteData(offset, newOffset) {
            if (!this.remote) return true;
            if (!this.remotePaging) return this.data.length >= this.originTotal;

            offset += this.prependedData.length;
            newOffset += this.prependedData.length;
            for (var i = offset; i < newOffset; i++) {
                if (!this.data[i]) return false;
            }return true;
        },
        hasChanges: function hasChanges() {
            return false;
        },
        defaultCompare: function defaultCompare(a, b, sign) {
            if (a === b) return 0;else return a > b ? sign : -sign;
        },
        _getExtraParams: function _getExtraParams() {
            return undefined;
        },
        slice: function slice(offset, newOffset) {
            return this.arrangedData.slice(offset, newOffset);
        },

        // _load(params)
        load: function load(offset, limit) {
            var _this2 = this;

            if (offset === undefined) offset = this.offset;
            if (limit === undefined) limit = this.limit;
            var newOffset = offset + limit;

            var queryChanged = Object.keys(this.params).length;
            // 调用前端缓存数据
            if (!this.remote || this.cache && !this.mustRemote(offset, newOffset)) {
                // 没有缓存数据或者有新的请求参数时，再尝试重新过滤和排序
                if (queryChanged) {
                    this.arrange();
                    this.params = {};
                }
                return Promise.resolve(this.arrangedData.slice(offset, newOffset));
            }

            // 调用后端数据
            // 如果有新的 query 参数的变更，则清除缓存
            if (queryChanged) {
                this.clearLocalData();
                this.params = {};
            }
            var paging = Object.assign({ offset: offset - this.prependedData.length, limit: this.limit }, this.paging);

            var params = Object.assign({
                paging: paging,
                sorting: this.sorting,
                filtering: this.filtering
            }, this._getExtraParams());

            return this._load(params).then(function (result) {
                _this2.initialLoaded = true;

                if (!_this2.remotePaging) {
                    // 没有后端分页，认为是全部数据
                    if (result instanceof Array) {
                        // 只返回数组，没有 total 字段
                        _this2.originTotal = result.length;
                        _this2.data = _this2._process(result);
                    } else if (result instanceof Object) {
                        // 返回 { total, data }
                        _this2.originTotal = result.total;
                        _this2.data = _this2._process(result.data);
                    } // 否则什么都不做

                    _this2.arrange();
                    return _this2.arrangedData.slice(offset, newOffset);
                } else {
                    var partialData = void 0;

                    if (result instanceof Array) {
                        // 只返回数组，没有 total 字段
                        if (!result.length) // 没有数据了，则记录下总数
                            _this2.originTotal = _this2.data.length;else partialData = _this2._process(result);
                    } else if (result instanceof Object) {
                        // 返回 { total, data }
                        _this2.originTotal = result.total;
                        partialData = _this2._process(result.data);
                    } // 否则什么都不做

                    for (var i = 0; i < limit; i++) {
                        var item = partialData[i];
                        if (item) _this2.data[offset + i] = item;
                    }

                    _this2.arrange();
                    return partialData;
                }
            });
        },
        loadMore: function loadMore() {
            var _this3 = this;

            if (!this.hasMore()) return Promise.resolve([]);else return this.load(this.offset + this.limit).then(function () {
                return _this3.paging.number++;
            });
        },
        reload: function reload() {
            this.clearLocalData();
            this.load();
        },
        page: function page(paging) {
            this.paging = paging;
        },
        sort: function sort(sorting) {
            this.sorting = sorting;
            this.params.sorting = sorting;
        },
        filter: function filter(filtering) {
            this.filtering = filtering;
            this.params.filtering = filtering;
        },

        // query(params) {
        //     this.params = params;
        //     return this;
        // },
        prepend: function prepend(item) {
            this.data.unshift(item);
            this.prependedData.unshift(item);
            this.arrange();
        },
        add: function add(item) {
            this.data.push(item);
            this.arrange();
        },
        get: function get() {
            // 获取某一项
        },
        update: function update() {
            // 更新某一项
        },
        remove: function remove() {
            // 删除某一项
        },
        save: function save() {
            // 保存
        }
    }
});

function DataSource(options) {
    var _data = {};
    var methods = {};

    Object.keys(options).forEach(function (key) {
        var option = options[key];
        if (typeof option === 'function') methods['_' + key] = option;else _data[key] = option;
    });

    // if (options.data)
    //     data.data = methods._process ? methods._process(options.data) : Array.from(options.data);

    VueDataSource.call(this, {
        data: function data() {
            return _data;
        },

        methods: methods
    });
}

DataSource.prototype = Object.create(VueDataSource.prototype);
// DataSource.prototype.constructor = DataSource;

/* harmony default export */ var utils_DataSource = (DataSource);
// CONCATENATED MODULE: ./src/utils/Formatters/Formatter.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Formatter = function () {
    function Formatter() {
        _classCallCheck(this, Formatter);

        this.reversible = true;
        this.format = this.format.bind(this);
        this.parse = this.parse.bind(this);
    }

    _createClass(Formatter, [{
        key: "format",
        value: function format(value) {
            return value;
        }
    }, {
        key: "parse",
        value: function parse(value) {
            return value;
        }
    }]);

    return Formatter;
}();

var noopFormatter = new Formatter();

/* harmony default export */ var Formatters_Formatter = (Formatter);
// CONCATENATED MODULE: ./src/utils/Formatters/DateFormatter.js
var DateFormatter__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function DateFormatter__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



/**
 * @TODO: use moment or some other library
 */

var fix = function fix(num) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    return String(num).padStart(length, '0');
};

var replacers = {
    yyyy: function yyyy(date) {
        return date.getFullYear();
    },
    MM: function MM(date) {
        return fix(date.getMonth() + 1);
    },
    dd: function dd(date) {
        return fix(date.getDate());
    },
    HH: function HH(date) {
        return fix(date.getHours());
    },
    mm: function mm(date) {
        return fix(date.getMinutes());
    },
    ss: function ss(date) {
        return fix(date.getSeconds());
    },
    ms: function ms(date) {
        return fix(date.getMilliseconds(), 3);
    }
};
var trunk = new RegExp(Object.keys(replacers).join('|'), 'g');

var DateFormatter = function (_Formatter) {
    _inherits(DateFormatter, _Formatter);

    function DateFormatter() {
        var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'yyyy-MM-dd HH:mm:ss';

        DateFormatter__classCallCheck(this, DateFormatter);

        var _this = _possibleConstructorReturn(this, (DateFormatter.__proto__ || Object.getPrototypeOf(DateFormatter)).call(this));

        _this.pattern = pattern;
        return _this;
    }

    DateFormatter__createClass(DateFormatter, [{
        key: 'format',
        value: function format(value, pattern) {
            pattern = pattern || this.pattern;

            if (value && !isNaN(value)) value = +value;
            var date = new Date(value);
            if (String(date) === 'Invalid Date') return value;

            return pattern.replace(trunk, function (cap) {
                return replacers[cap] ? replacers[cap](date) : '';
            });
        }
    }, {
        key: 'parse',
        value: function parse(value, pattern) {
            pattern = pattern || this.pattern;

            return new Date(value);
        }
    }]);

    return DateFormatter;
}(Formatters_Formatter);

var dateFormatter = new DateFormatter();

/* harmony default export */ var Formatters_DateFormatter = (DateFormatter);
// CONCATENATED MODULE: ./src/utils/Formatters/NumberFormatter.js
var NumberFormatter__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function NumberFormatter__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NumberFormatter__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function NumberFormatter__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var NumberFormatter = function (_Formatter) {
    NumberFormatter__inherits(NumberFormatter, _Formatter);

    function NumberFormatter() {
        var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0';

        NumberFormatter__classCallCheck(this, NumberFormatter);

        var _this = NumberFormatter__possibleConstructorReturn(this, (NumberFormatter.__proto__ || Object.getPrototypeOf(NumberFormatter)).call(this));

        _this.pattern = pattern;
        return _this;
    }

    NumberFormatter__createClass(NumberFormatter, [{
        key: 'format',
        value: function format(value, pattern) {
            pattern = pattern || this.pattern;

            var number = (pattern.match(/[0#.,]+/) || ['0'])[0];
            var parts = number.split('.');
            var fill = (parts[0].match(/0+$/) || ['0'])[0].length;
            var fixed = parts[1] ? parts[1].length : 0;
            var comma = pattern.includes(',');

            value = value.toFixed(fixed).padStart(fixed ? fill + 1 + fixed : fill, '0');
            if (comma) value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return pattern.replace(/[0#.,]+/, value);
        }
    }, {
        key: 'parse',
        value: function parse(value, pattern) {
            pattern = pattern || this.pattern;

            var number = (String(value).match(/[0-9.,]+/) || ['0'])[0];
            return +number.replace(/,/g, '');
        }
    }]);

    return NumberFormatter;
}(Formatters_Formatter);

var numberFormatter = new NumberFormatter();

/* harmony default export */ var Formatters_NumberFormatter = (NumberFormatter);
// CONCATENATED MODULE: ./src/utils/Formatters/PlaceholderFormatter.js
var PlaceholderFormatter__typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var PlaceholderFormatter__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function PlaceholderFormatter__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PlaceholderFormatter__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function PlaceholderFormatter__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var PlaceholderFormatter = function (_Formatter) {
    PlaceholderFormatter__inherits(PlaceholderFormatter, _Formatter);

    function PlaceholderFormatter() {
        var placeholder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '-';

        PlaceholderFormatter__classCallCheck(this, PlaceholderFormatter);

        var _this = PlaceholderFormatter__possibleConstructorReturn(this, (PlaceholderFormatter.__proto__ || Object.getPrototypeOf(PlaceholderFormatter)).call(this));

        _this.reversible = false;
        _this.placeholder = placeholder;
        return _this;
    }

    PlaceholderFormatter__createClass(PlaceholderFormatter, [{
        key: 'format',
        value: function format(value, placeholder) {
            placeholder = placeholder || this.placeholder;

            if ((typeof value === 'undefined' ? 'undefined' : PlaceholderFormatter__typeof(value)) === 'object' || Array.isArray(value)) return this.placeholder;else if (typeof value === 'number' && isNaN(value)) return this.placeholder;else if (value === '' || value === undefined) return this.placeholder;else return value;
        }
    }, {
        key: 'parse',
        value: function parse(value, placeholder) {
            placeholder = placeholder || this.placeholder;
            console.warn('[proto-ui]', 'Parsed value may not be correct because PlaceholderFormatter is not reversible.');

            if (value === this.placeholder) return '';else return value;
        }
    }]);

    return PlaceholderFormatter;
}(Formatters_Formatter);

var placeholderFormatter = new PlaceholderFormatter();

/* harmony default export */ var Formatters_PlaceholderFormatter = (PlaceholderFormatter);
// CONCATENATED MODULE: ./src/utils/Formatters/formatterParser.js
/** Copy from vue/src/compiler/parser/filter-parser.js */





var registedFormatters = {
    noop: noopFormatter,
    placeholder: placeholderFormatter,
    date: dateFormatter,
    number: numberFormatter
};

var validDivisionCharRE = /[\w).+\-_$\]]/;

function wrapFormatter(exp, filter) {
    var i = filter.indexOf('(');
    if (i < 0) {
        // _f: resolveFilter
        return '_f("' + filter + '")(' + exp + ')';
    } else {
        var name = filter.slice(0, i);
        var args = filter.slice(i + 1);
        return '_f("' + name + '")(' + exp + (args !== ')' ? ',' + args : args);
    }
}

function _parseFormatters(exp) {
    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c = void 0;
    var prev = void 0;
    var i = void 0;
    var expression = void 0;
    var filters = void 0;

    for (i = 0; i < exp.length; i++) {
        prev = c;
        c = exp.charCodeAt(i);
        if (inSingle) {
            if (c === 0x27 && prev !== 0x5C) inSingle = false;
        } else if (inDouble) {
            if (c === 0x22 && prev !== 0x5C) inDouble = false;
        } else if (inTemplateString) {
            if (c === 0x60 && prev !== 0x5C) inTemplateString = false;
        } else if (inRegex) {
            if (c === 0x2f && prev !== 0x5C) inRegex = false;
        } else if (c === 0x7C // pipe
        && exp.charCodeAt(i + 1) !== 0x7C && exp.charCodeAt(i - 1) !== 0x7C && !curly && !square && !paren) {
            if (expression === undefined) {
                // first filter, end of expression
                lastFilterIndex = i + 1;
                expression = exp.slice(0, i).trim();
            } else {
                pushFilter();
            }
        } else {
            switch (c) {
                case 0x22:
                    inDouble = true;break; // "
                case 0x27:
                    inSingle = true;break; // '
                case 0x60:
                    inTemplateString = true;break; // `
                case 0x28:
                    paren++;break; // (
                case 0x29:
                    paren--;break; // )
                case 0x5B:
                    square++;break; // [
                case 0x5D:
                    square--;break; // ]
                case 0x7B:
                    curly++;break; // {
                case 0x7D:
                    curly--;break; // }
            }
            if (c === 0x2f) {
                // /
                var j = i - 1;
                var p = void 0;
                // find first non-whitespace prev char
                for (; j >= 0; j--) {
                    p = exp.charAt(j);
                    if (p !== ' ') break;
                }
                if (!p || !validDivisionCharRE.test(p)) {
                    inRegex = true;
                }
            }
        }
    }

    if (expression === undefined) {
        expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
        pushFilter();
    }

    function pushFilter() {
        (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
        lastFilterIndex = i + 1;
    }

    if (filters) {
        for (i = 0; i < filters.length; i++) {
            expression = wrapFormatter(expression, filters[i]);
        }
    }

    return expression;
}

function parseFormatters(exp) {
    var expression = _parseFormatters('$$VALUE$$ | ' + exp);
    var _f = function _f(name) {
        return registedFormatters[name].format;
    };

    /* eslint-disable no-new-func */
    return Function('_f', '$$VALUE$$', 'return ' + expression).bind(null, _f);
}
// CONCATENATED MODULE: ./src/utils/Formatters/index.js
/**
 * @discuss Which is better?
 * FriendlyFormatter.format(value);    // Class static methods
 * FriendlyFormatter.getInstance().format(value);    // Too long
 * friendlyFormatter.format(value);    // Simple instance
 */







// CONCATENATED MODULE: ./src/utils/dom/index.js
function addClass(node, className) {
    var full = ' ' + (node.className || '') + ' ';
    if (!full.includes(' ' + className + ' ')) node.className = (full + className).trim();
}

function removeClass(node, className) {
    var full = ' ' + (node.className || '') + ' ';
    node.className = full.replace(' ' + className + ' ', ' ').trim();
}

function hasClass(node, className) {
    var full = ' ' + (node.className || '') + ' ';
    return full.includes(' ' + className + ' ');
}
// CONCATENATED MODULE: ./src/utils/style/index.js
function getRect(el) {
    return el.getBoundingClientRect();
}

function getPosition(el) {
    var rect = getRect(el);
    return { left: rect.left, top: rect.top };
}

function getSize(el) {
    var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'outside';

    if (mode === 'inside') return { width: el.clientWidth, height: el.clientHeight };else if (mode === 'center') return { width: (el.clientWidth + el.offsetWidth) / 2, height: (el.offsetHeight + el.clientHeight) / 2 };else if (mode === 'outside') return { width: el.offsetWidth, height: el.offsetHeight };
}

function isInRect(position, rect) {
    if (!position || !rect) return false;

    return position.left > rect.left && position.left < rect.left + rect.width && position.top > rect.top && position.top < rect.top + rect.height;
}

function getComputedStyle(el, property) {
    var computedStyle = window.getComputedStyle(el, null);
    return property ? computedStyle[property] : computedStyle;
}
// CONCATENATED MODULE: ./src/utils/math/index.js
var roundToFirst = function roundToFirst(num) {
    if (num >= 1) {
        var power = Math.pow(10, String(Math.round(num)).length - 1);
        return Math.round(num / power) * power;
    } else if (num > 0) return +num.toFixed(String(num).match(/^0\.0*/)[0].length - 1);else // 不解决0或负数
        return num;
};

var getFixedCount = function getFixedCount(num) {
    var m = String(num).match(/\.\d+/);
    return m ? m[0].length - 1 : 0;
};
// CONCATENATED MODULE: ./src/utils/edit/select.js
/**
 * https://github.com/zenorocha/select/blob/master/src/select.js
 */

function select_select(element) {
    var selectedText = void 0;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    } else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var readonly = element.hasAttribute('readonly');

        if (!readonly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!readonly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    } else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

/* harmony default export */ var edit_select = (select_select);
// CONCATENATED MODULE: ./src/utils/edit/clipboard.js
/**
 * https://github.com/zenorocha/clipboard.js/blob/master/src/clipboard-action.js
 */



var clipboard = {
    fakeElem: undefined,
    container: undefined,
    init: function init() {
        this.container = document.body;
        if (!this.fakeElem) this.initFake();
    },
    initFake: function initFake() {
        var isRTL = document.documentElement.getAttribute('dir') === 'rtl';

        this.removeFake();

        this.fakeElem = document.createElement('textarea');
        // Prevent zooming on iOS
        this.fakeElem.style.fontSize = '12pt';
        // Reset box model
        this.fakeElem.style.border = '0';
        this.fakeElem.style.padding = '0';
        this.fakeElem.style.margin = '0';
        // Move element out of screen horizontally
        this.fakeElem.style.position = 'absolute';
        this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
        // Move element to the same position vertically
        var yPosition = window.pageYOffset || document.documentElement.scrollTop;
        this.fakeElem.style.top = yPosition + 'px';

        this.container.appendChild(this.fakeElem);
    },
    removeFake: function removeFake() {
        if (this.fakeElem) {
            this.container.removeChild(this.fakeElem);
            this.fakeElem = undefined;
        }
    },
    destroy: function destroy() {
        this.removeFake();
    },
    copy: function copy(text) {
        this.fakeElem.value = text;
        edit_select(this.fakeElem);

        var succeeded = void 0;

        try {
            succeeded = document.execCommand('copy');
        } catch (err) {
            succeeded = false;
        }

        return succeeded;
    }
};

/**
 * @param { Element | String } text - target or text
 */
function clipboard_copy(text) {
    var target = void 0;
    if (text instanceof HTMLElement) target = text;else {
        if (!clipboard.fakeElem) clipboard.init();
        target = clipboard.fakeElem;
        target.value = text;
    }

    edit_select(target);

    var succeeded = void 0;
    try {
        succeeded = document.execCommand('copy');
    } catch (err) {
        succeeded = false;
    }

    return succeeded;
}
// CONCATENATED MODULE: ./src/utils/edit/index.js


// CONCATENATED MODULE: ./src/utils/index.js






// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/f-dragger.vue/index.js
var f_dragger_vue__typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





var FDragger = {
    name: 'f-dragger',
    extends: components_f_draggable_vue,
    props: {
        axis: { type: String, default: 'both', validator: function validator(value) {
                return ['both', 'horizontal', 'vertical'].includes(value);
            } },
        grid: { type: Object, default: function _default() {
                return { x: 0, y: 0 };
            } },
        range: [String, Object],
        rangeMode: { type: String, default: 'inside', validator: function validator(value) {
                return ['inside', 'center', 'outside'].includes(value);
            } },
        transfer: { type: [String, Element], default: 'self' }
    },
    methods: {
        getRange: function getRange(transferEl) {
            var range = void 0;

            if (f_dragger_vue__typeof(this.range) === 'object') range = this.range;else if (this.range === 'offset-parent') {
                if (window.getComputedStyle(transferEl, 'position') !== 'absolute') transferEl.style.position = 'absolute';

                var offsetParent = transferEl.offsetParent;
                range = Object.assign({ left: 0, top: 0 }, getSize(offsetParent, this.rangeMode));
            } else if (this.range === 'window') {
                if (window.getComputedStyle(transferEl, 'position') !== 'fixed') transferEl.style.position = 'fixed';

                range = { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };
            }

            if (range) {
                if (range.width !== undefined && range.height !== undefined) {
                    range.right = range.left + range.width;
                    range.bottom = range.top + range.height;
                } else if (range.right !== undefined && range.bottom !== undefined) {
                    range.width = range.right - range.left;
                    range.height = range.bottom - range.top;
                }
            }

            return range;
        },
        onMouseMoveStart: function onMouseMoveStart(e) {
            var transferEl = this.getTransferEl();

            // 代理元素的位置从MouseMoveStart开始算，这样在MouseDown中也可以预先处理位置
            // 获取初始的left和top值
            var style = transferEl ? window.getComputedStyle(transferEl) : {};
            style = { left: style.left, top: style.top };
            if (!style.left || style.left === 'auto') style.left = '0px';
            if (!style.top || style.top === 'auto') style.top = '0px';
            style.left = +style.left.slice(0, -2);
            style.top = +style.top.slice(0, -2);

            if (transferEl) {
                manager.range = this.getRange(transferEl);

                var rect = transferEl.getBoundingClientRect();

                if (this.axis === 'both' || this.axis === 'horizontal') {
                    if (!(rect.left <= e.clientX && e.clientX < rect.left + rect.width)) style.left += e.clientX - rect.left - rect.width / 2;
                }
                if (this.axis === 'both' || this.axis === 'vertical') {
                    if (!(rect.top <= e.clientY && e.clientY < rect.top + rect.height)) style.top += e.clientY - rect.top - rect.height / 2;
                }

                var next = (this.constraint || this.defaultConstraint)({
                    startLeft: style.left,
                    startTop: style.top,
                    dragX: 0,
                    dragY: 0
                });

                transferEl.style.left = next.left + 'px';
                transferEl.style.top = next.top + 'px';
            }

            Object.assign(manager, {
                dragging: true,
                transferEl: transferEl,
                value: this.value,
                startLeft: style.left,
                startTop: style.top,
                droppable: undefined
            });

            manager.left = manager.startLeft;
            manager.top = manager.startTop;

            this.dragStart();
        },
        defaultConstraint: function defaultConstraint(params) {
            var next = {
                left: params.startLeft + params.dragX,
                top: params.startTop + params.dragY
            };

            // 范围约束
            if (params.range) {
                if (this.rangeMode === 'inside') {
                    next.left = Math.min(Math.max(params.range.left, next.left), params.range.right - manager.transferEl.offsetWidth);
                    next.top = Math.min(Math.max(params.range.top, next.top), params.range.bottom - manager.transferEl.offsetHeight);
                } else if (this.rangeMode === 'center') {
                    next.left = Math.min(Math.max(params.range.left, next.left), params.range.right);
                    next.top = Math.min(Math.max(params.range.top, next.top), params.range.bottom);
                } else if (this.rangeMode === 'outside') {
                    next.left = Math.min(Math.max(params.range.left - manager.transferEl.offsetWidth, next.left), params.range.right);
                    next.top = Math.min(Math.max(params.range.top - manager.transferEl.offsetHeight, next.top), params.range.bottom);
                }
            }

            // 网格约束
            var grid = this.grid;
            grid.x && (next.left = Math.round(next.left / grid.x) * grid.x);
            grid.y && (next.top = Math.round(next.top / grid.y) * grid.y);

            // 轴向约束
            if (this.axis === 'vertical') next.left = params.startLeft;
            if (this.axis === 'horizontal') next.top = params.startTop;

            return next;
        }
    }
};

/* harmony default export */ var f_dragger_vue = (FDragger);
// CONCATENATED MODULE: ./src/components/f-dragger.vue/index.js
var f_dragger_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var f_dragger_vue___vue_html__ = null
/* template functional */
var f_dragger_vue___vue_template_functional__ = false
/* styles */
var f_dragger_vue___vue_css__ = null
/* scopeId */
var f_dragger_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var f_dragger_vue___vue_module_identifier__ = null
var f_dragger_vue_Component = f_dragger_vue_normalizeComponent(f_dragger_vue, f_dragger_vue___vue_html__, f_dragger_vue___vue_template_functional__, f_dragger_vue___vue_css__, f_dragger_vue___vue_scopeId__, f_dragger_vue___vue_module_identifier__)
/* harmony default export */ var components_f_dragger_vue = (f_dragger_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/f-droppable.vue/index.js


var FDroppable = {
    name: 'f-droppable',
    props: {
        target: { type: [String, HTMLElement, Function], default: 'self', validator: function validator(value) {
                if (typeof value !== 'string') return true;else return ['self', 'parent', '$parent', 'context-parent', 'prev', 'next'].includes(value);
            } },
        disabled: { type: Boolean, default: false }
    },
    render: function render() {
        return this.$slots.default && this.$slots.default[0];
    },
    data: function data() {
        return {
            targetEl: undefined
        };
    },

    watch: {
        disabled: function disabled(_disabled) {
            this.watchDisabled(_disabled);
        }
    },
    created: function created() {
        manager.droppables.push(this);
    },
    mounted: function mounted() {
        this.targetEl = this.getTargetEl();
        this.watchDisabled(this.disabled);
    },
    destroyed: function destroyed() {
        manager.droppables.splice(manager.droppables.indexOf(this), 1);
    },

    methods: {
        watchDisabled: function watchDisabled(disabled) {
            if (disabled) this.targetEl.removeAttribute && this.targetEl.removeAttribute('droppable');else this.targetEl.setAttribute && this.targetEl.setAttribute('droppable', 'droppable');
        },
        getTargetEl: function getTargetEl() {
            var _this = this;

            if (this.target instanceof HTMLElement) return this.target;else if (this.target instanceof Function) return this.target(this.$el);else if (this.$el) {
                if (this.target === 'self') return this.$el;else if (this.target === 'parent') return this.$el.parentElement;else if (this.target === '$parent') return this.$parent.$el;else if (this.target === 'offset-parent') return this.$el.offsetParent;else if (this.target === 'context-parent') {
                    // 求上下文中的 parent
                    if (this.$parent === this.$vnode.context) return this.$el.parentElement;

                    // Vue 的 vnode.parent 没有连接起来，需要自己找，不知道有没有更好的方法
                    var parentVNode = this.$parent._vnode;
                    while (parentVNode && !parentVNode.children.includes(this.$vnode)) {
                        parentVNode = parentVNode.children.find(function (child) {
                            return child.elm.contains(_this.$el);
                        });
                    } // if (!parentVNode)
                    if (parentVNode.context === this.$vnode.context) return parentVNode.elm;

                    // 否则，找第一个上下文一致的组件
                    var parentVM = this.$parent;
                    while (parentVM && parentVM.$vnode.context !== this.$vnode.context) {
                        parentVM = parentVM.$parent;
                    }return parentVM.$el;
                } else if (this.target === 'prev') return this.$el.previousElementSibling;else if (this.target === 'next') return this.$el.nextElementSibling;
            }
        },
        dragEnter: function dragEnter(originVM) {
            var targetEl = this.targetEl;
            targetEl.setAttribute('droppable-target', 'droppable-target');

            var cancel = false;
            this.$emit('dragenter', Object.assign({
                originVM: originVM,
                sourceEl: originVM.$el,
                targetEl: targetEl,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            }, manager), this);

            if (cancel) return originVM.cancel();
        },
        dragLeave: function dragLeave(originVM) {
            var targetEl = this.targetEl;
            targetEl.removeAttribute('droppable-target');

            var cancel = false;
            this.$emit('dragleave', Object.assign({
                originVM: originVM,
                sourceEl: originVM.$el,
                targetEl: targetEl,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            }, manager), this);

            if (cancel) return originVM.cancel();
        },
        dragOver: function dragOver(originVM) {
            var targetEl = this.targetEl;
            var rect = targetEl.getBoundingClientRect();

            var cancel = false;
            this.$emit('dragover', Object.assign({
                originVM: originVM,
                sourceEl: originVM.$el,
                targetEl: targetEl,
                ratioX: (manager.clientX - rect.left) / rect.width,
                ratioY: (manager.clientY - rect.top) / rect.height,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            }, manager), this);

            if (cancel) return originVM.cancel();
        },
        drop: function drop(originVM) {
            var targetEl = this.targetEl;
            targetEl.removeAttribute('droppable-target');
            var rect = targetEl.getBoundingClientRect();

            this.$emit('drop', Object.assign({
                originVM: originVM,
                sourceEl: originVM.$el,
                targetEl: targetEl,
                ratioX: (manager.clientX - rect.left) / rect.width,
                ratioY: (manager.clientY - rect.top) / rect.height
            }, manager), this);
        }
    }
};

/* harmony default export */ var f_droppable_vue = (FDroppable);
// CONCATENATED MODULE: ./src/components/f-droppable.vue/index.js
var f_droppable_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var f_droppable_vue___vue_html__ = null
/* template functional */
var f_droppable_vue___vue_template_functional__ = false
/* styles */
var f_droppable_vue___vue_css__ = null
/* scopeId */
var f_droppable_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var f_droppable_vue___vue_module_identifier__ = null
var f_droppable_vue_Component = f_droppable_vue_normalizeComponent(f_droppable_vue, f_droppable_vue___vue_html__, f_droppable_vue___vue_template_functional__, f_droppable_vue___vue_css__, f_droppable_vue___vue_scopeId__, f_droppable_vue___vue_module_identifier__)
/* harmony default export */ var components_f_droppable_vue = (f_droppable_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/f-forbidden.vue/index.js
var FForbidden = {
    name: 'f-forbidden',
    template: '<div></div>',
    props: {
        contextmenu: { type: Boolean, default: false },
        select: { type: Boolean, default: false },
        copy: { type: Boolean, default: false },
        saveKey: { type: Boolean, default: false },
        devtoolsKey: { type: Boolean, default: false }
    },
    created: function created() {
        window.addEventListener('contextmenu', this.onContextMenu);
        window.addEventListener('selectstart', this.onSelectStart);
        window.addEventListener('copy', this.onCopy);
        window.addEventListener('keydown', this.onKeyDown);
        // this.save && this.addNoScript();
    },
    destroyed: function destroyed() {
        window.removeEventListener('contextmenu', this.onContextMenu);
        window.removeEventListener('selectstart', this.onSelectStart);
        window.removeEventListener('copy', this.onCopy);
        window.removeEventListener('keydown', this.onKeyDown);
        // this.save && this.removeNoScript();
    },

    methods: {
        onContextMenu: function onContextMenu(e) {
            if (!this.contextmenu) return;
            e.preventDefault();
            this.$emit('contextmenu', e, this);
        },
        onSelectStart: function onSelectStart(e) {
            if (!this.select) return;
            e.preventDefault();
            this.$emit('select', e, this);
        },
        onCopy: function onCopy(e) {
            if (!this.copy) return;
            e.preventDefault();
            this.$emit('copy', e, this);
        },
        onKeyDown: function onKeyDown(e) {
            var isMac = navigator.platform.includes('Mac');
            if (this.saveKey) {
                // isMac ? Cmd + S : Ctrl + S
                if ((isMac ? e.metaKey : e.ctrlKey) && e.keyCode === 83) {
                    e.preventDefault();
                    this.$emit('save-key', e, this);
                }
            }

            if (this.devtoolsKey) {
                // (isMac ? Cmd + Option : Ctrl + Shift) + (I || J)
                if ((isMac ? e.metaKey && e.altKey : e.ctrlKey && e.shiftKey) && (e.keyCode === 73 || e.keyCode === 74)) {
                    e.preventDefault();
                    this.$emit('devtools-key', e, this);
                }
                // F12
                if (e.keyCode === 123) {
                    e.preventDefault();
                    this.$emit('devtools-key', e, this);
                }
            }
        },
        addNoScript: function addNoScript() {
            var noScript = document.createElement('noscript');
            var iframe = document.createElement('iframe');
            iframe.src = '*.htm';
            noScript.appendChild(iframe);
            document.body.appendChild(noScript);
            this.noScript = noScript;
        },
        removeNoScript: function removeNoScript() {
            document.body.removeChild(this.noScript);
        }
    }
};

/* harmony default export */ var f_forbidden_vue = (FForbidden);
// CONCATENATED MODULE: ./src/components/f-forbidden.vue/index.js
var f_forbidden_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var f_forbidden_vue___vue_html__ = null
/* template functional */
var f_forbidden_vue___vue_template_functional__ = false
/* styles */
var f_forbidden_vue___vue_css__ = null
/* scopeId */
var f_forbidden_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var f_forbidden_vue___vue_module_identifier__ = null
var f_forbidden_vue_Component = f_forbidden_vue_normalizeComponent(f_forbidden_vue, f_forbidden_vue___vue_html__, f_forbidden_vue___vue_template_functional__, f_forbidden_vue___vue_css__, f_forbidden_vue___vue_scopeId__, f_forbidden_vue___vue_module_identifier__)
/* harmony default export */ var components_f_forbidden_vue = (f_forbidden_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/f-render.vue/index.js
var FRender = {
    name: 'f-render',
    functional: true,
    props: {
        vnode: null
    },
    render: function render(h, context) {
        return context.props.vnode || context.children;
    }
};

/* harmony default export */ var f_render_vue = (FRender);
// CONCATENATED MODULE: ./src/components/f-render.vue/index.js
var f_render_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var f_render_vue___vue_html__ = null
/* template functional */
var f_render_vue___vue_template_functional__ = false
/* styles */
var f_render_vue___vue_css__ = null
/* scopeId */
var f_render_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var f_render_vue___vue_module_identifier__ = null
var f_render_vue_Component = f_render_vue_normalizeComponent(f_render_vue, f_render_vue___vue_html__, f_render_vue___vue_template_functional__, f_render_vue___vue_css__, f_render_vue___vue_scopeId__, f_render_vue___vue_module_identifier__)
/* harmony default export */ var components_f_render_vue = (f_render_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/i-icon.vue/index.js
var IIcon = {
    name: 'i-icon'
};

/* harmony default export */ var i_icon_vue = (IIcon);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-cc4cfcf0","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/i-icon.vue/index.html
var i_icon_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{class:_vm.$style.root})}
var i_icon_vue_staticRenderFns = []
var i_icon_vue_esExports = { render: i_icon_vue_render, staticRenderFns: i_icon_vue_staticRenderFns }
/* harmony default export */ var components_i_icon_vue = (i_icon_vue_esExports);
// CONCATENATED MODULE: ./src/components/i-icon.vue/index.js
var i_icon_vue_cssModules = {};
function i_icon_vue_injectStyle (ssrContext) {
i_icon_vue_cssModules['$style'] = __webpack_require__("R43W");
  this['$style'] = i_icon_vue_cssModules['$style']

}
var i_icon_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var i_icon_vue___vue_template_functional__ = false
/* styles */
var i_icon_vue___vue_css__ = i_icon_vue_injectStyle
/* scopeId */
var i_icon_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var i_icon_vue___vue_module_identifier__ = null
var i_icon_vue_Component = i_icon_vue_normalizeComponent(i_icon_vue, components_i_icon_vue, i_icon_vue___vue_template_functional__, i_icon_vue___vue_css__, i_icon_vue___vue_scopeId__, i_icon_vue___vue_module_identifier__)
/* harmony default export */ var src_components_i_icon_vue = (i_icon_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/m-emitter.vue/index.js
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _broadcast = function _broadcast(condition, eventName) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
    }

    this.$children.forEach(function ($child) {
        if (condition($child)) $child.$emit.apply($child, [eventName].concat(args));else _broadcast.apply($child, [condition, eventName].concat(args));
    });
};

var MEmitter = {
    name: 'm-emitter',
    methods: {
        /**
         * @deprecated
         */
        dispatch: function dispatch(condition, eventName) {
            var _$parent;

            if (typeof condition === 'string') {
                var name = condition;
                condition = function condition($parent) {
                    return $parent.$options.name === name;
                };
            }

            var $parent = this.$parent || this.$root;
            while ($parent && !condition($parent)) {
                $parent = $parent.$parent;
            }
            for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                args[_key2 - 2] = arguments[_key2];
            }

            $parent && (_$parent = $parent).$emit.apply(_$parent, [eventName].concat(_toConsumableArray(args)));
        },

        /**
         * @deprecated
         */
        broadcast: function broadcast(condition, eventName) {
            if (typeof condition === 'string') {
                var name = condition;
                condition = function condition($child) {
                    return $child.$options.name === name;
                };
            }

            for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
                args[_key3 - 2] = arguments[_key3];
            }

            _broadcast.apply(this, [condition, eventName].concat(args));
        },
        $dispatch: function $dispatch() {
            this.dispatch.apply(this, arguments);
        },
        $broadcast: function $broadcast() {
            this.broadcast.apply(this, arguments);
        },
        $contact: function $contact(condition, callback) {
            if (typeof condition === 'string') {
                var name = condition;
                condition = function condition($parent) {
                    return $parent.$options.name === name;
                };
            }

            var $parent = this.$parent || this.$root;
            while ($parent && !condition($parent)) {
                $parent = $parent.$parent;
            }$parent && callback($parent);
        },
        $emitPrevent: function $emitPrevent(name, $event, senderVM) {
            var cancel = false;

            for (var _len4 = arguments.length, args = Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
                args[_key4 - 3] = arguments[_key4];
            }

            this.$emit.apply(this, [name, Object.assign({
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            }, $event), senderVM].concat(_toConsumableArray(args)));
            return cancel;
        }
    }
};

/* harmony default export */ var m_emitter_vue = (MEmitter);
// CONCATENATED MODULE: ./src/components/m-emitter.vue/index.js
var m_emitter_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var m_emitter_vue___vue_html__ = null
/* template functional */
var m_emitter_vue___vue_template_functional__ = false
/* styles */
var m_emitter_vue___vue_css__ = null
/* scopeId */
var m_emitter_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var m_emitter_vue___vue_module_identifier__ = null
var m_emitter_vue_Component = m_emitter_vue_normalizeComponent(m_emitter_vue, m_emitter_vue___vue_html__, m_emitter_vue___vue_template_functional__, m_emitter_vue___vue_css__, m_emitter_vue___vue_scopeId__, m_emitter_vue___vue_module_identifier__)
/* harmony default export */ var components_m_emitter_vue = (m_emitter_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/m-parent.vue/m-child.vue/index.js


var MChild = {
    name: 'm-child',
    parentName: 'm-parent',
    groupName: 'm-group',
    mixins: [components_m_emitter_vue],
    data: function data() {
        return {
            parentVM: undefined,
            groupVM: undefined
        };
    },
    created: function created() {
        var _this = this;

        !this.parentVM && this.$contact(this.$options.parentName, function (parentVM) {
            _this.parentVM = parentVM;
            parentVM.itemVMs.push(_this);
        });
        !this.groupVM && this.$contact(this.$options.groupName, function (groupVM) {
            _this.groupVM = groupVM;
            groupVM.itemVMs.push(_this);
        });
    },
    destroyed: function destroyed() {
        var _this2 = this;

        this.$contact(this.$options.parentName, function (parentVM) {
            parentVM.itemVMs.splice(parentVM.itemVMs.indexOf(_this2), 1);
            _this2.parentVM = undefined;
        });
        this.$contact(this.$options.groupName, function (groupVM) {
            groupVM.itemVMs.splice(groupVM.itemVMs.indexOf(_this2), 1);
            _this2.groupVM = undefined;
        });
    }
};

/* harmony default export */ var m_child_vue = (MChild);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-1bdafef3","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/m-parent.vue/m-child.vue/index.html
var m_child_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_vm._t("default")],2)}
var m_child_vue_staticRenderFns = []
var m_child_vue_esExports = { render: m_child_vue_render, staticRenderFns: m_child_vue_staticRenderFns }
/* harmony default export */ var m_parent_vue_m_child_vue = (m_child_vue_esExports);
// CONCATENATED MODULE: ./src/components/m-parent.vue/m-child.vue/index.js
var m_child_vue_cssModules = {};
function m_child_vue_injectStyle (ssrContext) {
m_child_vue_cssModules['$style'] = __webpack_require__("cR36");
  this['$style'] = m_child_vue_cssModules['$style']

}
var m_child_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var m_child_vue___vue_template_functional__ = false
/* styles */
var m_child_vue___vue_css__ = m_child_vue_injectStyle
/* scopeId */
var m_child_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var m_child_vue___vue_module_identifier__ = null
var m_child_vue_Component = m_child_vue_normalizeComponent(m_child_vue, m_parent_vue_m_child_vue, m_child_vue___vue_template_functional__, m_child_vue___vue_css__, m_child_vue___vue_scopeId__, m_child_vue___vue_module_identifier__)
/* harmony default export */ var components_m_parent_vue_m_child_vue = (m_child_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/m-parent.vue/index.js
var MParent = {
    name: 'm-parent',
    groupName: 'm-group',
    childName: 'm-child',
    data: function data() {
        return {
            groupVMs: [],
            itemVMs: []
        };
    }
};



/* harmony default export */ var m_parent_vue = (MParent);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-0a445f39","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/m-parent.vue/index.html
var m_parent_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_vm._t("default")],2)}
var m_parent_vue_staticRenderFns = []
var m_parent_vue_esExports = { render: m_parent_vue_render, staticRenderFns: m_parent_vue_staticRenderFns }
/* harmony default export */ var components_m_parent_vue = (m_parent_vue_esExports);
// CONCATENATED MODULE: ./src/components/m-parent.vue/index.js
var m_parent_vue_cssModules = {};
function m_parent_vue_injectStyle (ssrContext) {
m_parent_vue_cssModules['$style'] = __webpack_require__("7I7t");
  this['$style'] = m_parent_vue_cssModules['$style']

}
var m_parent_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var m_parent_vue___vue_template_functional__ = false
/* styles */
var m_parent_vue___vue_css__ = m_parent_vue_injectStyle
/* scopeId */
var m_parent_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var m_parent_vue___vue_module_identifier__ = null
var m_parent_vue_Component = m_parent_vue_normalizeComponent(m_parent_vue, components_m_parent_vue, m_parent_vue___vue_template_functional__, m_parent_vue___vue_css__, m_parent_vue___vue_scopeId__, m_parent_vue___vue_module_identifier__)
/* harmony default export */ var src_components_m_parent_vue = (m_parent_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-link.vue/index.js
var ULink = {
    name: 'u-link',
    props: {
        href: String,
        target: { type: String, default: '_self' },
        to: [String, Object],
        replace: { type: Boolean, default: false },
        append: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    computed: {
        /**
         * 使用`to`时，也产生一个链接，尽可能向原生的`<a>`靠近
         */
        currentHref: function currentHref() {
            if (this.href !== undefined) return this.href;else if (this.$router && this.to !== undefined) return this.$router.resolve(this.to, this.$route, this.append).href;else return undefined;
        },
        listeners: function listeners() {
            var listeners = Object.assign({}, this.$listeners);
            delete listeners.click;
            return listeners;
        }
    },
    methods: {
        onClick: function onClick(e) {
            if (this.disabled) return e.preventDefault();

            this.$emit('click', e, this);

            if (this.target !== '_self') return;

            // 使用`to`的时候走`$router`，否则走原生
            if (this.href === undefined) {
                // 使用浏览器的一些快捷键时，走原生
                // @TODO: 考虑使用快捷键抛出事件，阻止流程的需求
                if (e.ctrlKey || e.shiftKey || e.metaKey || e.altKey) return;

                e.preventDefault();
                this.navigate();
            }
        },
        navigate: function navigate() {
            if (this.to === undefined) return;

            if (!this.$router) return console.warn('[proto-ui]', 'Cannot find vue-router.');

            var cancel = false;
            this.$emit('before-navigate', {
                to: this.to,
                replace: this.replace,
                append: this.append,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            }, this);
            if (cancel) return;

            var $router = this.$router;

            var _$router$resolve = $router.resolve(this.to, this.$route, this.append),
                location = _$router$resolve.location;

            this.replace ? $router.replace(location) : $router.push(location);

            this.$emit('navigate', {
                to: this.to,
                replace: this.replace,
                append: this.append
            }, this);
        }
    }
};

/* harmony default export */ var u_link_vue = (ULink);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-bf0ba196","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-link.vue/index.html
var u_link_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',_vm._g({class:_vm.$style.root,attrs:{"href":_vm.currentHref,"target":_vm.target,"disabled":_vm.disabled},on:{"click":_vm.onClick}},_vm.listeners),[_vm._t("default")],2)}
var u_link_vue_staticRenderFns = []
var u_link_vue_esExports = { render: u_link_vue_render, staticRenderFns: u_link_vue_staticRenderFns }
/* harmony default export */ var components_u_link_vue = (u_link_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-link.vue/index.js
var u_link_vue_cssModules = {};
function u_link_vue_injectStyle (ssrContext) {
u_link_vue_cssModules['$style'] = __webpack_require__("TUmp");
  this['$style'] = u_link_vue_cssModules['$style']

}
var u_link_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_link_vue___vue_template_functional__ = false
/* styles */
var u_link_vue___vue_css__ = u_link_vue_injectStyle
/* scopeId */
var u_link_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_link_vue___vue_module_identifier__ = null
var u_link_vue_Component = u_link_vue_normalizeComponent(u_link_vue, components_u_link_vue, u_link_vue___vue_template_functional__, u_link_vue___vue_css__, u_link_vue___vue_scopeId__, u_link_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_link_vue = (u_link_vue_Component.exports);
// CONCATENATED MODULE: ./src/directives/v-click-outside/index.js
var clickOutside = {
    bind: function bind(el, binding) {
        var handler = function handler(e) {
            if (el.contains(e.target)) return false;
            if (binding.expression) binding.value(e);
        };
        el.__clickOutsideHandler__ = handler;
        document.addEventListener('click', handler);
    },
    unbind: function unbind(el, binding) {
        document.removeEventListener('click', el.__clickOutsideHandler__);
        delete el.__clickOutsideHandler__;
    }
};
// CONCATENATED MODULE: ./src/utils/event/index.js
var event_event = {
    on: function on(element, type, listener, options) {
        element.addEventListener(type, listener, options);
        return function () {
            return event_event.off(element, type, listener, options);
        };
    },
    off: function off(element, type, listener, options) {
        element.removeEventListener(type, listener, options);
    },
    once: function once(el, type, listener) {
        var fn = function fn() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            listener.apply(this, args);
            event_event.off(el, type, fn);
        };
        event_event.on(el, type, fn);
    }
};

/* harmony default export */ var utils_event = (event_event);
// CONCATENATED MODULE: ./src/directives/v-repeat-click/index.js


var repeatClick = {
    bind: function bind(el, binding, vnode) {
        var wait = +binding.arg || 400;
        var interval = 100;
        var handler = vnode.context[binding.expression];
        var pressing = false;
        var timer = void 0;

        var fn = function fn() {
            if (!pressing) return;

            handler();
            timer = setTimeout(fn, interval);
        };

        utils_event.on(el, 'mousedown', function (e) {
            // self 和 prevent 有个顺序问题，所以用 for 循环
            var modifiers = Object.keys(binding.modifiers);
            for (var i = 0; i < modifiers.length; i++) {
                var modifier = modifiers[i];
                if (modifier === 'self' && e.target !== el) return;else if (modifier === 'stop') e.stopPropagation();else if (modifier === 'prevent') e.preventDefault();
            }

            // @TODO: 自定义指令其他相关
            if (e.button !== 0) return;

            utils_event.once(document, 'mouseup', function () {
                return pressing = false;
            });
            clearTimeout(timer);
            pressing = true;
            handler();
            timer = setTimeout(fn, wait);
        }, {
            capture: binding.modifiers.capture,
            once: binding.modifiers.once,
            passive: binding.modifiers.passive
        });
    }
};
// CONCATENATED MODULE: ./src/directives/v-focus/index.js
var v_focus_focus = {
    inserted: function inserted(el, binding) {
        if (!!binding.value || binding.value === undefined) el.focus();
    }
};
// CONCATENATED MODULE: ./src/directives/link.js
/**
 * 给任意元素添加`<a>`链接效果
 * 该指令适合在某些场景下临时使用，推荐直接使用`<u-link>`或者从`<m-router-item>`继承新组件
 * @modifier blank - 是否打开新的窗口
 */
var href = {
    bind: function bind(el, binding) {
        el.dataset = el.dataset || {};
        el.dataset.href = binding.value;

        el.addEventListener('click', function (e) {
            if (binding.modifiers.blank) window.open(el.dataset.href);else location.href = el.dataset.href;
        });
    },
    update: function update(el, binding) {
        el.dataset.href = binding.value;
    }
};

/**
 * 给任意元素添加`<router-link>`的`to`效果
 * 该指令适合在某些场景下临时使用，推荐直接使用`<u-link>`或者从`<m-router-item>`继承新组件
 * @modifier replace - History 使用`push`方式还是`replace`方式
 */
var to = {
    bind: function bind(el, binding, vnode) {
        el.dataset = el.dataset || {};
        el.dataset.to = binding.value;

        var $router = vnode.componentInstance.$router;
        if (!$router) return console.warn('[proto-ui] Use `v-to` but cannot find vue router.');

        el.addEventListener('click', function (e) {
            binding.modifiers.replace ? $router.replace(el.dataset.to) : $router.push(el.dataset.to);
        });
    },
    update: function update(el, binding) {
        el.dataset.to = binding.value;
    }
};
// CONCATENATED MODULE: ./src/directives/ellipsis.js
/**
 * 给包含`ellipsis`样式并且带有过长文本的元素自动添加`title`提示
 */
var ellipsisTitle = {
    bind: function bind(el, binding) {
        el.addEventListener('mouseenter', function (e) {
            // 如果判断已存在`title`属性而不添加`title`的话，会导致`<u-select>`在某些场景下`value`不变`text`变，而`title`不会更新
            var style = window.getComputedStyle(el);
            var title = binding.value || el.innerText;
            if (style.overflow === 'hidden' && style.textOverflow === 'ellipsis' && style.whiteSpace === 'nowrap' && el.scrollWidth > el.offsetWidth) el.setAttribute('title', title);
        });
    }
};
// CONCATENATED MODULE: ./src/components/u-tooltip.vue/v-tooltip.js


/**
 * 给任意元素添加`<u-tooltip>`工具提示效果
 * @value 需要绑定的内容
 */
var directive = {
    handle: function handle(binding) {
        var data = {
            content: binding.value,
            trigger: undefined,
            placement: undefined,
            size: undefined,
            followCursor: binding.modifiers.cursor
        };

        Object.keys(binding.modifiers).forEach(function (key) {
            if (['click', 'hover', 'right-click', 'double-click', 'manual'].includes(key)) data.trigger = key;
            if (/^(top|bottom|left|right)(-start|-end)?$/.test(key)) data.placement = key;
            if (/^(mini|small|normal|large|huge|auto)(-(mini|small|normal|large|huge|auto))?$/.test(key)) data.size = key;
        });

        return data;
    },
    bind: function bind(el, binding) {
        var data = el['v-tooltip'] = Object.assign(el['v-tooltip'] || {}, directive.handle(binding));

        var UTooltip = external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a.component('UTooltip') || external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a.component('u-tooltip');
        el.tooltipVM = new UTooltip({
            propsData: Object.assign({
                reference: el
            }, data)
        }).$mount();
    },
    update: function update(el, binding) {
        var data = el['v-tooltip'] = Object.assign(el['v-tooltip'] || {}, directive.handle(binding));
        if (el.tooltipVM) Object.assign(el.tooltipVM, data);
    },
    unbind: function unbind(el, binding) {
        el.tooltipVM && el.tooltipVM.$destroy();
    }
};

/* harmony default export */ var v_tooltip = (directive);
// CONCATENATED MODULE: ./src/directives/index.js










// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/m-singlex.vue/item.vue/index.js




var MSinglexItem = {
    name: 'm-singlex-item',
    parentName: 'm-singlex',
    groupName: 'm-singlex-group',
    mixins: [MChild, src_components_u_link_vue],
    directives: { ellipsisTitle: ellipsisTitle },
    props: {
        value: null,
        disabled: { type: Boolean, default: false },
        item: Object,
        exact: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            // @inherit: parentVM: undefined,
        };
    },

    computed: {
        isSelected: function isSelected() {
            return this.parentVM && this.parentVM.selectedVM === this;
        },
        active: function active() {
            if (this.to === undefined) return;

            if (!this.$router) return console.warn('[proto-ui] Use `<m-router-item>` but cannot find vue router.');

            var current = this.$route;
            var location = this.$router.resolve(this.to).location;

            return this.exact ? location.path === current.path : (current.path + '/').startsWith(location.path + '/');
        }
    },
    methods: {
        onClick: function onClick(e) {
            if (this.disabled || this.parentVM.readonly || this.parentVM.disabled) return e.preventDefault();

            src_components_u_link_vue.methods.onClick.call(this, e);
        },
        select: function select(e) {
            if (this.disabled || this.parentVM.readonly || this.parentVM.disabled) return;

            this.$emit('click', e, this);

            var cancel = false;
            this.$emit('before-select', {
                value: this.value,
                item: this.item,
                itemVM: this,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            }, this);
            if (cancel) return;

            this.parentVM.select(this);
        }
    }
};

/* harmony default export */ var item_vue = (MSinglexItem);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-0204e8e0","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/m-singlex.vue/item.vue/index.html
var item_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',_vm._g({directives:[{name:"ellipsis-title",rawName:"v-ellipsis-title"}],class:_vm.$style.root,attrs:{"selected":_vm.parentVM.router ? _vm.active : _vm.isSelected,"readonly":_vm.parentVM.readonly,"disabled":_vm.disabled || _vm.parentVM.disabled,"href":_vm.currentHref,"target":_vm.target},on:{"click":function($event){_vm.parentVM.router ? _vm.onClick($event) : _vm.select($event)}}},_vm.listeners),[_vm._t("default")],2)}
var item_vue_staticRenderFns = []
var item_vue_esExports = { render: item_vue_render, staticRenderFns: item_vue_staticRenderFns }
/* harmony default export */ var m_singlex_vue_item_vue = (item_vue_esExports);
// CONCATENATED MODULE: ./src/components/m-singlex.vue/item.vue/index.js
var item_vue_cssModules = {};
function item_vue_injectStyle (ssrContext) {
item_vue_cssModules['$style'] = __webpack_require__("x3ha");
  this['$style'] = item_vue_cssModules['$style']

}
var item_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var item_vue___vue_template_functional__ = false
/* styles */
var item_vue___vue_css__ = item_vue_injectStyle
/* scopeId */
var item_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var item_vue___vue_module_identifier__ = null
var item_vue_Component = item_vue_normalizeComponent(item_vue, m_singlex_vue_item_vue, item_vue___vue_template_functional__, item_vue___vue_css__, item_vue___vue_scopeId__, item_vue___vue_module_identifier__)
/* harmony default export */ var components_m_singlex_vue_item_vue = (item_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/m-singlex.vue/index.js



var MSinglex = {
    name: 'm-singlex',
    groupName: 'm-singlex-group',
    childName: 'm-singlex-item',
    mixins: [components_m_emitter_vue, MParent],
    props: {
        value: null,
        autoSelect: { type: Boolean, default: false },
        cancelable: { type: Boolean, default: false },
        router: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            // @inherit: groupVMs: [],
            // @inherit: itemVMs: [],
            selectedVM: undefined
        };
    },

    watch: {
        value: function value(_value) {
            // 无需剪枝
            this.watchValue(_value);
        },
        selectedVM: function selectedVM(_selectedVM, oldVM) {
            var value = _selectedVM ? _selectedVM.value : undefined;
            var oldValue = oldVM ? oldVM.value : undefined;
            if (value === oldValue) return;

            this.$emit('change', {
                value: value,
                oldValue: oldValue,
                item: _selectedVM ? _selectedVM.item : undefined,
                oldItem: oldVM && oldVM.item,
                itemVM: _selectedVM,
                oldVM: oldVM
            }, this);
        },

        // This method just run once after pushing many itemVMs
        itemVMs: function itemVMs(_itemVMs) {
            if (!_itemVMs.includes(this.selectedVM)) {
                if (!this.router) {
                    // 更新列表之后，原来的选择可能已不存在，这里暂存然后重新查找一遍
                    var value = this.selectedVM ? this.selectedVM.value : this.value;
                    this.selectedVM = undefined;
                    this.watchValue(value);
                } else {
                    this.selectedVM = this.itemVMs.find(function (itemVM) {
                        return itemVM.active;
                    });
                }
            }
        }
    },
    // mounted() {
    // Don't need trigger `value` watcher at mounted hook.
    // Because there's a watcher for itemVMs.
    // this.watchValue(this.value);
    // },
    methods: {
        watchValue: function watchValue(value) {
            if (this.selectedVM && this.selectedVM.value === value) // 下面需要走 value === undefined
                return;
            if (value === undefined) {
                if (this.autoSelect && !this.placeholder) // this.placeholder for select...
                    this.selectedVM = this.itemVMs.find(function (itemVM) {
                        return !itemVM.disabled;
                    }) || undefined;else this.selectedVM = undefined;
            } else {
                this.selectedVM = this.itemVMs.find(function (itemVM) {
                    return itemVM.value === value;
                });
                this.selectedVM && this.selectedVM.groupVM && this.selectedVM.groupVM.toggle(true);
            }
        },
        select: function select(itemVM, cancelable) {
            // Check if enabled
            if (this.readonly || this.disabled || itemVM && itemVM.disabled) return;

            // Prevent replication
            var oldValue = this.value;
            var oldVM = this.selectedVM;
            if (cancelable === undefined) cancelable = this.cancelable;
            if (!cancelable && itemVM === oldVM) return;

            // Emit a `before-` event with preventDefault()
            if (this.$emitPrevent('before-select', {
                value: itemVM && itemVM.value,
                oldValue: oldValue,
                itemVM: itemVM,
                item: itemVM && itemVM.item,
                oldVM: oldVM,
                oldItem: oldVM && oldVM.item
            }, this)) return;

            if (cancelable && itemVM === oldVM) this.selectedVM = undefined;else this.selectedVM = itemVM;

            // Assign and sync `value`
            var value = this.selectedVM && this.selectedVM.value;
            var selectedItem = this.selectedVM && this.selectedVM.item;
            this.$emit('input', value, this);
            this.$emit('update:value', value, this);

            // Emit `after-` events
            this.$emit('select', {
                value: value,
                oldValue: oldValue,
                selectedVM: this.selectedVM,
                selectedItem: selectedItem,
                itemVM: itemVM,
                item: itemVM && itemVM.item,
                oldVM: oldVM,
                oldItem: oldVM && oldVM.item
            }, this);
        }
    }
};



/* harmony default export */ var m_singlex_vue = (MSinglex);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-1624597e","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/m-singlex.vue/index.html
var m_singlex_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{class:_vm.$style.root,attrs:{"readonly":_vm.readonly,"disabled":_vm.disabled}},[_vm._t("default")],2)}
var m_singlex_vue_staticRenderFns = []
var m_singlex_vue_esExports = { render: m_singlex_vue_render, staticRenderFns: m_singlex_vue_staticRenderFns }
/* harmony default export */ var components_m_singlex_vue = (m_singlex_vue_esExports);
// CONCATENATED MODULE: ./src/components/m-singlex.vue/index.js
var m_singlex_vue_cssModules = {};
function m_singlex_vue_injectStyle (ssrContext) {
m_singlex_vue_cssModules['$style'] = __webpack_require__("RaKF");
  this['$style'] = m_singlex_vue_cssModules['$style']

}
var m_singlex_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var m_singlex_vue___vue_template_functional__ = false
/* styles */
var m_singlex_vue___vue_css__ = m_singlex_vue_injectStyle
/* scopeId */
var m_singlex_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var m_singlex_vue___vue_module_identifier__ = null
var m_singlex_vue_Component = m_singlex_vue_normalizeComponent(m_singlex_vue, components_m_singlex_vue, m_singlex_vue___vue_template_functional__, m_singlex_vue___vue_css__, m_singlex_vue___vue_scopeId__, m_singlex_vue___vue_module_identifier__)
/* harmony default export */ var src_components_m_singlex_vue = (m_singlex_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/m-multiplex.vue/item.vue/index.js



var MMultiplexItem = {
    name: 'm-multiplex-item',
    parentName: 'm-multiplex',
    groupName: 'm-multiplex-group',
    mixins: [MChild],
    directives: { ellipsisTitle: ellipsisTitle },
    props: {
        value: null,
        selected: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        item: Object
    },
    data: function data() {
        return {
            currentSelected: this.selected
            // @inherit: parentVM: undefined,
        };
    },

    watch: {
        selected: function selected(_selected) {
            this.currentSelected = _selected;
            this.parentVM && this.parentVM.watchSelectedChange(this);
        }
    },
    methods: {
        select: function select(e) {
            if (this.disabled || this.parentVM.readonly || this.parentVM.disabled) return;

            this.$emit('click', e, this);

            var cancel = false;
            this.$emit('before-select', {
                value: this.value,
                item: this.item,
                itemVM: this,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            }, this);
            if (cancel) return;

            this.parentVM.select(this);
        }
    }
};

/* harmony default export */ var m_multiplex_vue_item_vue = (MMultiplexItem);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-ce24bce0","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/m-multiplex.vue/item.vue/index.html
var m_multiplex_vue_item_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"ellipsis-title",rawName:"v-ellipsis-title"}],class:_vm.$style.root,attrs:{"selected":_vm.currentSelected,"readonly":_vm.parentVM.readonly,"disabled":_vm.disabled || _vm.parentVM.disabled},on:{"click":function($event){return _vm.select($event)}}},[_vm._t("default")],2)}
var m_multiplex_vue_item_vue_staticRenderFns = []
var m_multiplex_vue_item_vue_esExports = { render: m_multiplex_vue_item_vue_render, staticRenderFns: m_multiplex_vue_item_vue_staticRenderFns }
/* harmony default export */ var components_m_multiplex_vue_item_vue = (m_multiplex_vue_item_vue_esExports);
// CONCATENATED MODULE: ./src/components/m-multiplex.vue/item.vue/index.js
var m_multiplex_vue_item_vue_cssModules = {};
function m_multiplex_vue_item_vue_injectStyle (ssrContext) {
m_multiplex_vue_item_vue_cssModules['$style'] = __webpack_require__("ADVv");
  this['$style'] = m_multiplex_vue_item_vue_cssModules['$style']

}
var m_multiplex_vue_item_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var m_multiplex_vue_item_vue___vue_template_functional__ = false
/* styles */
var m_multiplex_vue_item_vue___vue_css__ = m_multiplex_vue_item_vue_injectStyle
/* scopeId */
var m_multiplex_vue_item_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var m_multiplex_vue_item_vue___vue_module_identifier__ = null
var m_multiplex_vue_item_vue_Component = m_multiplex_vue_item_vue_normalizeComponent(m_multiplex_vue_item_vue, components_m_multiplex_vue_item_vue, m_multiplex_vue_item_vue___vue_template_functional__, m_multiplex_vue_item_vue___vue_css__, m_multiplex_vue_item_vue___vue_scopeId__, m_multiplex_vue_item_vue___vue_module_identifier__)
/* harmony default export */ var src_components_m_multiplex_vue_item_vue = (m_multiplex_vue_item_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/m-multiplex.vue/index.js



var MMultiplex = {
    name: 'm-multiplex',
    groupName: 'm-multiplex-group',
    childName: 'm-multiplex-item',
    mixins: [components_m_emitter_vue, MParent],
    model: {
        prop: 'values',
        event: 'input'
    },
    props: {
        values: Array,
        keepOrder: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            // @inherit: groupVMs: [],
            // @inherit: itemVMs: [],
            selectedVMs: []
        };
    },

    watch: {
        values: function values(_values, oldValues) {
            if (!Array.isArray(_values)) throw new Error('`values` should be an Array!');

            // @TODO: 因为是同一个数组。。没有好的剪枝方法
            // if (values !== oldValues && values.length === oldValues.length
            //     && values.every((val, index) => val === oldValues[index]))
            //     return;

            this.watchValues(_values);
        },
        selectedVMs: function selectedVMs(_selectedVMs, oldVMs) {
            // const oldValues = oldVMs.map((itemVM) => itemVM.value);
            var values = _selectedVMs.map(function (itemVM) {
                return itemVM.value;
            });

            // @TODO: 因为是同一个数组。。没有好的剪枝方法
            // if (values.length === oldValues.length && values.every((val, index) => val === oldValues[index]))
            //     return;

            var selectedItems = _selectedVMs.map(function (itemVM) {
                return itemVM.item;
            });
            this.$emit('change', {
                values: values,
                // @TODO: oldValues,
                items: selectedItems,
                itemVMs: _selectedVMs
            });
        },

        // This method just run once after pushing many itemVMs
        itemVMs: function itemVMs() {
            // 更新列表之后，原来的选择可能已不存在，这里需要重新查找一遍
            this.watchValues(this.values);
        }
    },
    // mounted() {
    // Don't need trigger `values` watcher at mounted hook.
    // Because there's a watcher for itemVMs.
    // this.watchValues(this.values);
    // },
    methods: {
        watchValues: function watchValues(values) {
            var _this = this;

            var selectedVMs = [];
            if (values) {
                if (!this.keepOrder) {
                    values.forEach(function (val) {
                        var itemVM = _this.itemVMs.find(function (itemVM) {
                            return itemVM.value === val;
                        });
                        itemVM && selectedVMs.push(itemVM);
                    });
                } else {
                    this.itemVMs.forEach(function (itemVM) {
                        if (values.includes(itemVM.value)) selectedVMs.push(itemVM);
                    });
                }
                // 必须单独指定一遍，因为有取消掉的
                this.itemVMs.forEach(function (itemVM) {
                    return itemVM.currentSelected = values.includes(itemVM.value);
                });
            } else {
                this.itemVMs.forEach(function (itemVM) {
                    return itemVM.currentSelected && selectedVMs.push(itemVM);
                });
            }
            this.selectedVMs = selectedVMs;
        },
        watchSelectedChange: function watchSelectedChange(selectedVM) {
            if (!this.keepOrder) {
                var index = this.selectedVMs.indexOf(selectedVM);
                if (selectedVM.currentSelected && !~index) this.selectedVMs.push(selectedVM);else if (!selectedVM.currentSelected && ~index) this.selectedVMs.splice(index, 1);
            } else this.selectedVMs = this.itemVMs.filter(function (itemVM) {
                return itemVM.currentSelected;
            });
        },
        select: function select(itemVM, selected) {
            // Check if enabled
            if (this.readonly || this.disabled || !itemVM || itemVM.disabled) return;

            // Method overloading
            if (selected === undefined) selected = !itemVM.currentSelected;

            // Prevent replication
            if (itemVM.currentSelected === selected) return;

            var oldValues = this.values;
            var oldVMs = this.selectedVMs;
            var oldItems = oldVMs.map(function (itemVM) {
                return itemVM.item;
            });

            // Emit a `before-` event with preventDefault()
            if (this.$emitPrevent('before-select', {
                selected: selected,
                item: itemVM && itemVM.item,
                itemVM: itemVM,
                oldValues: oldValues,
                oldItems: oldItems,
                oldVMs: oldVMs
            }, this)) return;

            // Assign and sync `selected`
            itemVM.currentSelected = selected;
            itemVM.$emit('update:selected', selected);
            this.watchSelectedChange(itemVM);

            // Assign and sync `values`
            var selectedVMs = this.selectedVMs;
            var values = selectedVMs.map(function (itemVM) {
                return itemVM.value;
            });
            var selectedItems = selectedVMs.map(function (itemVM) {
                return itemVM.item;
            });
            this.$emit('input', values, this);
            this.$emit('update:values', values, this);

            this.$emit('select', {
                selected: itemVM.currentSelected,
                item: itemVM.item,
                itemVM: itemVM,
                values: values,
                oldValues: oldValues,
                items: selectedItems,
                oldItems: oldItems,
                itemVMs: selectedVMs,
                oldVMs: oldVMs
            }, this);
        }
    }
};



/* harmony default export */ var m_multiplex_vue = (MMultiplex);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-4b3a5342","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/m-multiplex.vue/index.html
var m_multiplex_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,attrs:{"readonly":_vm.readonly,"disabled":_vm.disabled}},[_vm._t("default")],2)}
var m_multiplex_vue_staticRenderFns = []
var m_multiplex_vue_esExports = { render: m_multiplex_vue_render, staticRenderFns: m_multiplex_vue_staticRenderFns }
/* harmony default export */ var components_m_multiplex_vue = (m_multiplex_vue_esExports);
// CONCATENATED MODULE: ./src/components/m-multiplex.vue/index.js
var m_multiplex_vue_cssModules = {};
function m_multiplex_vue_injectStyle (ssrContext) {
m_multiplex_vue_cssModules['$style'] = __webpack_require__("FYPy");
  this['$style'] = m_multiplex_vue_cssModules['$style']

}
var m_multiplex_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var m_multiplex_vue___vue_template_functional__ = false
/* styles */
var m_multiplex_vue___vue_css__ = m_multiplex_vue_injectStyle
/* scopeId */
var m_multiplex_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var m_multiplex_vue___vue_module_identifier__ = null
var m_multiplex_vue_Component = m_multiplex_vue_normalizeComponent(m_multiplex_vue, components_m_multiplex_vue, m_multiplex_vue___vue_template_functional__, m_multiplex_vue___vue_css__, m_multiplex_vue___vue_scopeId__, m_multiplex_vue___vue_module_identifier__)
/* harmony default export */ var src_components_m_multiplex_vue = (m_multiplex_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/m-complex.vue/item.vue/index.js




var MComplexItem = {
    name: 'm-complex-item',
    parentName: 'm-complex',
    groupName: 'm-complex-group',
    mixins: [MSinglexItem, MMultiplexItem],
    directives: { ellipsisTitle: ellipsisTitle }
    // props: {
    //     @inherit: value: null,
    //     @inherit: selected: { type: Boolean, default: false },
    //     @inherit: disabled: { type: Boolean, default: false },
    //     @inherit: item: Object,
    // },
    // data() {
    //     return {
    //         @inherit: currentSelected: this.selected,
    //         @inherit: parentVM: undefined,
    //     };
    // },
};

/* harmony default export */ var m_complex_vue_item_vue = (MComplexItem);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-3d154850","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/m-complex.vue/item.vue/index.html
var m_complex_vue_item_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"ellipsis-title",rawName:"v-ellipsis-title"}],class:_vm.$style.root,attrs:{"selected":_vm.parentVM.multiple ? _vm.currentSelected : _vm.isSelected,"readonly":_vm.parentVM.readonly,"disabled":_vm.disabled || _vm.parentVM.disabled},on:{"click":function($event){_vm.parentVM.router ? _vm.onClick($event) : _vm.select($event)}}},[_vm._t("default")],2)}
var m_complex_vue_item_vue_staticRenderFns = []
var m_complex_vue_item_vue_esExports = { render: m_complex_vue_item_vue_render, staticRenderFns: m_complex_vue_item_vue_staticRenderFns }
/* harmony default export */ var components_m_complex_vue_item_vue = (m_complex_vue_item_vue_esExports);
// CONCATENATED MODULE: ./src/components/m-complex.vue/item.vue/index.js
var m_complex_vue_item_vue_cssModules = {};
function m_complex_vue_item_vue_injectStyle (ssrContext) {
m_complex_vue_item_vue_cssModules['$style'] = __webpack_require__("BrFj");
  this['$style'] = m_complex_vue_item_vue_cssModules['$style']

}
var m_complex_vue_item_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var m_complex_vue_item_vue___vue_template_functional__ = false
/* styles */
var m_complex_vue_item_vue___vue_css__ = m_complex_vue_item_vue_injectStyle
/* scopeId */
var m_complex_vue_item_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var m_complex_vue_item_vue___vue_module_identifier__ = null
var m_complex_vue_item_vue_Component = m_complex_vue_item_vue_normalizeComponent(m_complex_vue_item_vue, components_m_complex_vue_item_vue, m_complex_vue_item_vue___vue_template_functional__, m_complex_vue_item_vue___vue_css__, m_complex_vue_item_vue___vue_scopeId__, m_complex_vue_item_vue___vue_module_identifier__)
/* harmony default export */ var src_components_m_complex_vue_item_vue = (m_complex_vue_item_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/m-complex.vue/index.js



var MComplex = {
    name: 'm-complex',
    groupName: 'm-complex-group',
    childName: 'm-complex-item',
    mixins: [src_components_m_singlex_vue, src_components_m_multiplex_vue],
    model: {
        prop: 'value',
        event: 'input'
    },
    props: {
        // @inherit: value: null,
        // @inherit: values: Array,
        // @inherit: autoSelect: { type: Boolean, default: false },
        // @inherit: cancelable: { type: Boolean, default: false },
        // @inherit: router: { type: Boolean, default: false },
        multiple: { type: Boolean, default: false }
        // @inherit: keepOrder: { type: Boolean, default: false },
        // @inherit: readonly: { type: Boolean, default: false },
        // @inherit: disabled: { type: Boolean, default: false },
    },
    data: function data() {
        return {
            // @inherit: groupVMs: [],
            // @inherit: itemVMs: [],
            // @inherit: selectedVM: undefined,
            // @inherit: selectedVMs: undefined,
            currentMultiple: this.multiple
        };
    },

    watch: {
        multiple: function multiple(_multiple) {
            this.currentMultiple = _multiple;
        },

        // This method just run once after pushing many itemVMs
        itemVMs: function itemVMs(_itemVMs, oldVMs) {
            (this.currentMultiple ? src_components_m_multiplex_vue : src_components_m_singlex_vue).watch.itemVMs.call(this, _itemVMs, oldVMs);
        }
    },
    methods: {
        select: function select(itemVM, selected) {
            (this.currentMultiple ? src_components_m_multiplex_vue : src_components_m_singlex_vue).methods.select.call(this, itemVM, selected);
        }
    }
};



/* harmony default export */ var m_complex_vue = (MComplex);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-2a7fa025","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/m-complex.vue/index.html
var m_complex_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,attrs:{"readonly":_vm.readonly,"disabled":_vm.disabled}},[_vm._t("default")],2)}
var m_complex_vue_staticRenderFns = []
var m_complex_vue_esExports = { render: m_complex_vue_render, staticRenderFns: m_complex_vue_staticRenderFns }
/* harmony default export */ var components_m_complex_vue = (m_complex_vue_esExports);
// CONCATENATED MODULE: ./src/components/m-complex.vue/index.js
var m_complex_vue_cssModules = {};
function m_complex_vue_injectStyle (ssrContext) {
m_complex_vue_cssModules['$style'] = __webpack_require__("1xXH");
  this['$style'] = m_complex_vue_cssModules['$style']

}
var m_complex_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var m_complex_vue___vue_template_functional__ = false
/* styles */
var m_complex_vue___vue_css__ = m_complex_vue_injectStyle
/* scopeId */
var m_complex_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var m_complex_vue___vue_module_identifier__ = null
var m_complex_vue_Component = m_complex_vue_normalizeComponent(m_complex_vue, components_m_complex_vue, m_complex_vue___vue_template_functional__, m_complex_vue___vue_css__, m_complex_vue___vue_scopeId__, m_complex_vue___vue_module_identifier__)
/* harmony default export */ var src_components_m_complex_vue = (m_complex_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/m-field.vue/index.js


var MField = {
    name: 'm-field',
    isField: true,
    mixins: [components_m_emitter_vue],
    data: function data() {
        return {
            formItemVM: undefined
        };
    },
    created: function created() {
        var _this = this;

        this.dispatch(function ($parent) {
            return $parent.$options.name && $parent.$options.name.startsWith('u-form-item') || $parent.$options.isField;
        }, 'add-field-vm', this);
        this.$on('input', function (value) {
            return _this.formItemVM && _this.formItemVM.$emit('input', value);
        });
        this.$on('change', function ($event) {
            return _this.formItemVM && _this.formItemVM.$emit('change', $event);
        });
        this.$on('focus', function () {
            return _this.formItemVM && _this.formItemVM.$emit('focus');
        });
        this.$on('blur', function () {
            return _this.formItemVM && _this.formItemVM.$emit('blur');
        });
    },
    destroyed: function destroyed() {
        this.formItemVM && this.formItemVM.$emit('remove-field-vm', this);
    }
};

/* harmony default export */ var m_field_vue = (MField);
// CONCATENATED MODULE: ./src/components/m-field.vue/index.js
var m_field_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var m_field_vue___vue_html__ = null
/* template functional */
var m_field_vue___vue_template_functional__ = false
/* styles */
var m_field_vue___vue_css__ = null
/* scopeId */
var m_field_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var m_field_vue___vue_module_identifier__ = null
var m_field_vue_Component = m_field_vue_normalizeComponent(m_field_vue, m_field_vue___vue_html__, m_field_vue___vue_template_functional__, m_field_vue___vue_css__, m_field_vue___vue_scopeId__, m_field_vue___vue_module_identifier__)
/* harmony default export */ var components_m_field_vue = (m_field_vue_Component.exports);
// CONCATENATED MODULE: ./src/components/m-pub-sub.vue/pubsub.js
var topics = {};

/* harmony default export */ var pubsub = ({
    publish: function publish(topic, data) {
        if (!topics[topic]) topics[topic] = [];else topics[topic].forEach(function (func) {
            return func(data);
        });
        // Record the last data
        topics[topic].lastData = data;
    },
    unpublish: function unpublish(topic) {
        if (topics[topic]) delete topics[topic].lastData;
    },
    subscribe: function subscribe(topic, func) {
        if (!topics[topic]) topics[topic] = [];else if ('lastData' in topics[topic]) func(topics[topic].lastData);
        topics[topic].push(func);
    },
    unsubscribe: function unsubscribe(topic, func) {
        if (topics[topic]) topics[topic].splice(topics[topic].indexOf(func), 1);
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/m-pub-sub.vue/index.js


var MPublisher = {
    created: function created() {
        var _this = this;

        var pubs = this.$options.publish;
        if (!pubs) return;
        Object.keys(pubs).forEach(function (topic) {
            var pub = pubs[topic];
            if (typeof pub === 'string' || typeof pub === 'function') pub = { expOrFn: pub };

            _this.$watch(pub.expOrFn, function (value) {
                pubsub.publish(topic, value);
            }, { deep: pub.deep, immediate: pub.immediate });
        });
    },
    beforeDestroy: function beforeDestroy() {
        var pubs = this.$options.publish;
        if (!pubs) return;
        Object.keys(pubs).forEach(function (topic) {
            pubsub.unpublish(topic);
        });
    }
};

var MSubscriber = {
    created: function created() {
        var _this2 = this;

        var subs = this.$options.subscribe;
        if (!subs) return;
        this.$options.subscriptions = {};
        Object.keys(subs).forEach(function (topic) {
            var sub = subs[topic];
            if (typeof sub === 'function') sub = { handler: sub.bind(_this2) };else if (typeof sub === 'string') sub = { handler: _this2[sub] };else sub.handler = sub.handler.bind(_this2);

            var _handler = void 0;
            if (sub.once) {
                _handler = function handler() {
                    pubsub.unsubscribe(topic, _handler);
                    return sub.handler();
                };
            } else _handler = sub.handler;

            _this2.$options.subscriptions[topic] = _handler;

            pubsub.subscribe(topic, _handler);
        });
    },
    beforeDestroy: function beforeDestroy() {
        var _this3 = this;

        var subs = this.$options.subscribe;
        if (!subs) return;
        Object.keys(subs).forEach(function (topic) {
            pubsub.unsubscribe(topic, _this3.$options.subscriptions[topic]);
        });
    }
};

var MPubSub = {
    mixins: [MSubscriber, MPublisher]
};

/* harmony default export */ var m_pub_sub_vue = (MPubSub);
// CONCATENATED MODULE: ./src/components/m-pub-sub.vue/index.js
var m_pub_sub_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var m_pub_sub_vue___vue_html__ = null
/* template functional */
var m_pub_sub_vue___vue_template_functional__ = false
/* styles */
var m_pub_sub_vue___vue_css__ = null
/* scopeId */
var m_pub_sub_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var m_pub_sub_vue___vue_module_identifier__ = null
var m_pub_sub_vue_Component = m_pub_sub_vue_normalizeComponent(m_pub_sub_vue, m_pub_sub_vue___vue_html__, m_pub_sub_vue___vue_template_functional__, m_pub_sub_vue___vue_css__, m_pub_sub_vue___vue_scopeId__, m_pub_sub_vue___vue_module_identifier__)
/* harmony default export */ var components_m_pub_sub_vue = (m_pub_sub_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/m-group.vue/parent.vue/index.js
var MGroupParent = {
    name: 'm-group-parent',
    props: {
        collapsible: { type: Boolean, default: false },
        accordion: { type: Boolean, default: false },
        expandTrigger: { type: String, default: 'click' }
    },
    methods: {
        onToggle: function onToggle(groupVM, expanded) {
            this.$emit('toggle', {
                expanded: expanded,
                groupVM: groupVM
            }, this);
        },
        toggleAll: function toggleAll(expanded) {
            this.groupVMs.forEach(function (groupVM) {
                return groupVM.toggle(expanded);
            });
        }
    }
};

/* harmony default export */ var parent_vue = (MGroupParent);
// CONCATENATED MODULE: ./src/components/m-group.vue/parent.vue/index.js
var parent_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var parent_vue___vue_html__ = null
/* template functional */
var parent_vue___vue_template_functional__ = false
/* styles */
var parent_vue___vue_css__ = null
/* scopeId */
var parent_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var parent_vue___vue_module_identifier__ = null
var parent_vue_Component = parent_vue_normalizeComponent(parent_vue, parent_vue___vue_html__, parent_vue___vue_template_functional__, parent_vue___vue_css__, parent_vue___vue_scopeId__, parent_vue___vue_module_identifier__)
/* harmony default export */ var m_group_vue_parent_vue = (parent_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/m-group.vue/index.js


var MGroup = {
    name: 'm-group',
    parentName: 'm-parent',
    childName: 'm-child',
    mixins: [components_m_emitter_vue],
    props: {
        title: String,
        collapsible: { type: Boolean, default: undefined },
        expanded: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            parentVM: undefined,
            itemVMs: [],
            currentExpanded: this.expanded
        };
    },

    computed: {
        currentCollapsible: function currentCollapsible() {
            return this.collapsible === undefined && this.parentVM ? this.parentVM.collapsible : this.collapsible;
        }
    },
    watch: {
        expanded: function expanded(_expanded) {
            this.currentExpanded = _expanded;
        }
    },
    created: function created() {
        var _this = this;

        this.$contact(this.$options.parentName, function (parentVM) {
            _this.parentVM = parentVM;
            parentVM.groupVMs.push(_this);
        });
    },
    destroyed: function destroyed() {
        var _this2 = this;

        this.$contact(this.$options.parentName, function (parentVM) {
            parentVM.groupVMs.splice(parentVM.groupVMs.indexOf(_this2), 1);
            _this2.parentVM = undefined;
        });
    },

    methods: {
        toggle: function toggle(expanded) {
            var _this3 = this;

            if (this.disabled || this.parentVM.readonly || this.parentVM.disabled) return;

            var oldExpanded = this.currentExpanded;

            if (expanded === undefined) expanded = !this.currentExpanded;

            if (expanded === oldExpanded) return;

            var cancel = false;
            this.$emit('before-toggle', {
                expanded: expanded,
                groupVM: this,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            }, this);
            if (cancel) return;

            this.currentExpanded = expanded;
            this.$emit('update:expanded', expanded, this);

            if (this.parentVM.accordion) {
                this.parentVM.groupVMs.forEach(function (groupVM) {
                    if (groupVM !== _this3) {
                        groupVM.currentExpanded = false;
                        groupVM.$emit('update:expanded', false);
                    }
                });
            }

            this.$emit('toggle', {
                expanded: expanded,
                groupVM: this
            }, this);

            this.parentVM.onToggle({
                expanded: expanded,
                groupVM: this
            });
        }
    }
};



/* harmony default export */ var m_group_vue = (MGroup);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-88d8287a","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/m-group.vue/index.html
var m_group_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,attrs:{"disabled":_vm.disabled,"expanded":_vm.currentExpanded}},[_c('div',{class:_vm.$style.head,on:{"click":function($event){_vm.parentVM.expandTrigger === 'click' && _vm.toggle()}}},[_c('div',{directives:[{name:"ellipsis-title",rawName:"v-ellipsis-title"}],class:_vm.$style.title},[_vm._t("title",[_vm._v(_vm._s(_vm.title))])],2),(_vm.currentCollapsible)?_c('span',{class:_vm.$style.expander,attrs:{"expanded":_vm.currentExpanded},on:{"click":function($event){_vm.parentVM.expandTrigger === 'click-expander' && ($event.stopPropagation(), _vm.toggle())}}}):_vm._e(),_c('span',{class:_vm.$style.extra},[_vm._t("extra")],2)]),_c('f-collapse-transition',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentCollapsible ? _vm.currentExpanded : true),expression:"currentCollapsible ? currentExpanded : true"}],class:_vm.$style.body},[_vm._t("default")],2)])],1)}
var m_group_vue_staticRenderFns = []
var m_group_vue_esExports = { render: m_group_vue_render, staticRenderFns: m_group_vue_staticRenderFns }
/* harmony default export */ var components_m_group_vue = (m_group_vue_esExports);
// CONCATENATED MODULE: ./src/components/m-group.vue/index.js
var m_group_vue_cssModules = {};
function m_group_vue_injectStyle (ssrContext) {
m_group_vue_cssModules['$style'] = __webpack_require__("55Kj");
  this['$style'] = m_group_vue_cssModules['$style']

}
var m_group_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var m_group_vue___vue_template_functional__ = false
/* styles */
var m_group_vue___vue_css__ = m_group_vue_injectStyle
/* scopeId */
var m_group_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var m_group_vue___vue_module_identifier__ = null
var m_group_vue_Component = m_group_vue_normalizeComponent(m_group_vue, components_m_group_vue, m_group_vue___vue_template_functional__, m_group_vue___vue_css__, m_group_vue___vue_scopeId__, m_group_vue___vue_module_identifier__)
/* harmony default export */ var src_components_m_group_vue = (m_group_vue_Component.exports);
// EXTERNAL MODULE: ./node_modules/_@vusion_popper.js@1.14.1@@vusion/popper.js/dist/esm/popper.js
var popper = __webpack_require__("ba1e");

// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/m-popper.vue/index.js
var m_popper_vue__typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





var MPopper = {
    name: 'm-popper',
    mixins: [components_m_emitter_vue],
    props: {
        opened: { type: Boolean, default: false },
        trigger: { type: String, default: 'click' },
        reference: { type: [String, HTMLElement, Function], default: 'context-parent', validator: function validator(value) {
                if (typeof value !== 'string') return true;else return ['parent', '$parent', 'context-parent', 'prev', 'next'].includes(value);
            } },
        placement: {
            type: String, default: 'bottom-start',
            validator: function validator(value) {
                return (/^(top|bottom|left|right)(-start|-end)?$/.test(value)
                );
            }
        },
        hoverDelay: { type: Number, default: 0 },
        hideDelay: { type: Number, default: 0 },
        appendTo: { type: String, default: 'body', validator: function validator(value) {
                return ['body', 'reference'].includes(value);
            } },
        boundariesElement: { default: 'window' },
        arrowElement: { type: String, default: '[u-arrow]' },
        escapeWithReference: { type: Boolean, default: true },
        followCursor: { type: [Boolean, Number, Object], default: false },
        offset: { type: [Number, String], default: 0 },
        options: {
            type: Object,
            default: function _default() {
                return {
                    modifiers: {}
                };
            }
        },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            currentOpened: this.opened,
            referenceEl: undefined,
            triggers: [], // 所有的触发器，为了方便，第一项始终为默认的
            // popper: undefined,
            // 在出现滚动条的时候 需要特殊处理下
            offEvents: []
        };
    },

    computed: {
        currentFollowCursor: function currentFollowCursor() {
            if (m_popper_vue__typeof(this.followCursor) === 'object') return this.followCursor;else {
                var followCursor = void 0;

                if (typeof this.followCursor === 'boolean') followCursor = { offsetX: 10, offsetY: 10 };else if (typeof this.followCursor === 'number') followCursor = { offsetX: this.followCursor, offsetY: this.followCursor };

                if (this.placement.startsWith('top')) followCursor.offsetY = -followCursor.offsetY;
                if (this.placement.startsWith('left')) followCursor.offsetX = -followCursor.offsetX;
                if (this.placement === 'top' || this.placement === 'bottom') followCursor.offsetX = 0;
                if (this.placement === 'top-end' || this.placement === 'bottom-end') followCursor.offsetX = -followCursor.offsetX;
                if (this.placement === 'left' || this.placement === 'right') followCursor.offsetY = 0;
                if (this.placement === 'left-end' || this.placement === 'right-end') followCursor.offsetY = -followCursor.offsetY;

                return followCursor;
            }
        }
    },
    watch: {
        opened: function opened(_opened) {
            this.currentOpened = _opened;
        },
        currentOpened: function currentOpened(_currentOpened) {
            // 不直接用样式的显隐，而是用 popper 的 create 和 destroy，是因为 popper 有可能是从不同的地方触发的，reference 对象会变
            if (_currentOpened) {
                this.createPopper();
                this.$emit('open', undefined, this);
            } else {
                this.destroyPopper();
                this.$emit('close', undefined, this);
            }
        },
        reference: function reference() {
            this.referenceEl = this.getReferenceEl();
        }
    },
    mounted: function mounted() {
        // 字符串类型的 reference 只有首次获取是有效的，因为之后节点会被插到别的地方
        this.referenceEl = this.getReferenceEl();
        this.addTrigger(this.referenceEl, this.trigger);

        this.currentOpened && this.createPopper();
    },
    beforeDestroy: function beforeDestroy() {
        this.destroyPopper();
        // 取消绑定事件
        this.offEvents.forEach(function (off) {
            return off();
        });
    },

    methods: {
        getOptions: function getOptions() {
            var options = Object.assign({}, this.options, {
                placement: this.placement
            });

            // 自定义options 传入offset值情况
            if (!options.modifiers.offset && this.offset) {
                options.modifiers.offset = {
                    offset: this.offset
                };
            }

            options.escapeWithReference = this.escapeWithReference;

            options.modifiers.arrow = { element: this.arrowElement };
            options.modifiers.preventOverflow = { boundariesElement: this.boundariesElement };

            return options;
        },
        getReferenceEl: function getReferenceEl() {
            var _this = this;

            if (this.reference instanceof HTMLElement) return this.reference;else if (this.reference instanceof Function) return this.reference(this.$el);else if (this.$el) {
                if (this.reference === 'parent') return this.$el.parentElement;else if (this.reference === '$parent') return this.$parent.$el;else if (this.reference === 'context-parent') {
                    // 求上下文中的 parent
                    if (this.$parent === this.$vnode.context) return this.$el.parentElement;

                    // Vue 的 vnode.parent 没有连接起来，需要自己找，不知道有没有更好的方法
                    var parentVNode = this.$parent._vnode;
                    while (parentVNode && !parentVNode.children.includes(this.$vnode)) {
                        parentVNode = parentVNode.children.find(function (child) {
                            return child.elm.contains(_this.$el);
                        });
                    } // if (!parentVNode)
                    if (parentVNode.context === this.$vnode.context) return parentVNode.elm;

                    // 否则，找第一个上下文一致的组件
                    var parentVM = this.$parent;
                    while (parentVM && parentVM.$vnode.context !== this.$vnode.context) {
                        parentVM = parentVM.$parent;
                    }return parentVM.$el;
                } else if (this.reference === 'prev') return this.$el.previousElementSibling;else if (this.reference === 'next') return this.$el.nextElementSibling;
            }
        },

        /**
         * 添加触发器时，绑定事件
         */
        addTrigger: function addTrigger(el, event) {
            var _this2 = this;

            var popperEl = this.$el;
            // @TODO: support directives
            var arr = event.split('.');
            event = arr[0];

            this.triggers.push({ el: el, event: event });

            // 绑定事件
            this.followCursor && this.offEvents.push(utils_event.on(document, 'mousemove', function (e) {
                return _this2.updatePositionByCursor(e, el);
            }));

            if (event === 'click') this.offEvents.push(utils_event.on(el, 'click', function (e) {
                if (arr[1] === 'stop') e.stopPropagation();else if (arr[1] === 'prevent') e.preventDefault();
                _this2.toggle();
                _this2.followCursor && _this2.$nextTick(function () {
                    return _this2.updatePositionByCursor(e, el);
                });
            }));else if (event === 'hover') {
                var timer = void 0;
                this.offEvents.push(utils_event.on(el, 'mouseenter', function (e) {
                    timer = clearTimeout(timer);
                    setTimeout(function () {
                        _this2.open();
                        _this2.followCursor && _this2.$nextTick(function () {
                            return _this2.updatePositionByCursor(e, el);
                        });
                    }, _this2.hoverDelay);
                }));
                this.offEvents.push(utils_event.on(document, 'mouseover', function (e) {
                    if (_this2.currentOpened && !timer && !el.contains(e.target) && !popperEl.contains(e.target)) timer = setTimeout(function () {
                        return _this2.close();
                    }, _this2.hideDelay);
                }));
            } else if (event === 'double-click') this.offEvents.push(utils_event.on(el, 'dblclick', function (e) {
                _this2.toggle();
                _this2.followCursor && _this2.$nextTick(function () {
                    return _this2.updatePositionByCursor(e, el);
                });
            }));else if (event === 'right-click') {
                this.offEvents.push(utils_event.on(el, 'contextmenu', function (e) {
                    e.preventDefault();
                    _this2.toggle();
                    _this2.followCursor && _this2.$nextTick(function () {
                        return _this2.updatePositionByCursor(e, el);
                    });
                }));
            }
            // @TODO: 有没有必要搞 focus-in
            this.offEvents.push(utils_event.on(document, 'mousedown', function (e) {
                !el.contains(e.target) && !popperEl.contains(e.target) && _this2.close();
            }));
        },
        createPopper: function createPopper() {
            var referenceEl = this.referenceEl;
            var popperEl = this.$el;
            if (this.appendTo === 'body') document.body.appendChild(popperEl);else if (this.appendTo === 'reference') referenceEl.appendChild(popperEl);

            var options = this.getOptions();
            this.popper = new popper["a" /* default */](referenceEl, popperEl, options);
        },
        update: function update() {
            this.popper && this.popper.update();
        },
        scheduleUpdate: function scheduleUpdate() {
            this.popper && this.popper.scheduleUpdate();
        },
        destroyPopper: function destroyPopper() {
            var referenceEl = this.referenceEl;
            var popperEl = this.$el;
            if (this.appendTo === 'body') popperEl.parentElement === document.body && document.body.removeChild(popperEl);else if (this.appendTo === 'reference') popperEl.parentElement === referenceEl && referenceEl.removeChild(popperEl);

            this.popper && this.popper.destroy();
            this.popper = undefined;
        },
        updatePositionByCursor: function updatePositionByCursor(e, el) {
            // @TODO: 两种 offset 属性有些冗余
            if (e.target !== el || !this.popper) return;

            var top = e.clientY + this.currentFollowCursor.offsetY;
            var left = e.clientX + this.currentFollowCursor.offsetX;
            var right = e.clientX + this.currentFollowCursor.offsetX;
            var bottom = e.clientY + this.currentFollowCursor.offsetY;

            this.popper.reference = {
                getBoundingClientRect: function getBoundingClientRect() {
                    return {
                        width: 0,
                        height: 0,
                        top: top,
                        left: left,
                        right: right,
                        bottom: bottom
                    };
                },
                clientWidth: 0,
                clientHeight: 0
            };
            this.popper.scheduleUpdate();
        },
        open: function open() {
            // Check if enabled
            if (this.disabled) return;

            // Prevent replication
            if (this.currentOpened) return;

            // Emit a `before-` event with preventDefault()
            if (this.$emitPrevent('before-open', undefined, this)) return;

            // Assign and sync `opened`
            this.currentOpened = true;
            this.$emit('update:opened', true, this);

            // Emit `after-` events
            // this.$emit('open', undefined, this);
        },
        close: function close() {
            // Check if enabled
            if (this.disabled) return;

            // Prevent replication
            if (!this.currentOpened) return;

            // Emit a `before-` event with preventDefault()
            if (this.$emitPrevent('before-close', undefined, this)) return;

            // Assign and sync `opened`
            this.currentOpened = false;
            this.$emit('update:opened', false, this);

            // Emit `after-` events
            // this.$emit('close', undefined, this);
        },
        toggle: function toggle(opened) {
            // Method overloading
            if (opened === undefined) opened = !this.currentOpened;

            // @deprecated start
            if (this.disabled) return;
            var oldOpened = this.currentOpened;
            if (opened === oldOpened) return;

            if (this.$emitPrevent('before-toggle', { opened: opened }, this)) return;

            opened ? this.open() : this.close();

            this.$emit('toggle', { opened: opened }, this);
            // @deprecated end
        }
    }
};

/* harmony default export */ var m_popper_vue = (MPopper);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-2d174135","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/m-popper.vue/index.html
var m_popper_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g({directives:[{name:"show",rawName:"v-show",value:(_vm.currentOpened),expression:"currentOpened"}],class:_vm.$style.root},_vm.$listeners),[_vm._t("default")],2)}
var m_popper_vue_staticRenderFns = []
var m_popper_vue_esExports = { render: m_popper_vue_render, staticRenderFns: m_popper_vue_staticRenderFns }
/* harmony default export */ var components_m_popper_vue = (m_popper_vue_esExports);
// CONCATENATED MODULE: ./src/components/m-popper.vue/index.js
var m_popper_vue_cssModules = {};
function m_popper_vue_injectStyle (ssrContext) {
m_popper_vue_cssModules['$style'] = __webpack_require__("pZsv");
  this['$style'] = m_popper_vue_cssModules['$style']

}
var m_popper_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var m_popper_vue___vue_template_functional__ = false
/* styles */
var m_popper_vue___vue_css__ = m_popper_vue_injectStyle
/* scopeId */
var m_popper_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var m_popper_vue___vue_module_identifier__ = null
var m_popper_vue_Component = m_popper_vue_normalizeComponent(m_popper_vue, components_m_popper_vue, m_popper_vue___vue_template_functional__, m_popper_vue___vue_css__, m_popper_vue___vue_scopeId__, m_popper_vue___vue_module_identifier__)
/* harmony default export */ var src_components_m_popper_vue = (m_popper_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/m-root.vue/m-node.vue/index.js


var MNode = {
    name: 'm-node',
    rootName: 'm-root',
    mixins: [components_m_emitter_vue],
    props: {
        text: String
    },
    data: function data() {
        return {
            nodeVMs: [],
            rootVM: undefined,
            parentVM: undefined
        };
    },
    created: function created() {
        var _this = this;

        !this.parentVM && this.$contact(this.$options.name, function (parentVM) {
            _this.parentVM = parentVM;
            _this.rootVM = parentVM.rootVM;
            parentVM.nodeVMs.push(_this);
        });
        // 顺序不能换
        !this.parentVM && this.$contact(this.$options.rootName, function (rootVM) {
            _this.rootVM = rootVM;
            rootVM.nodeVMs.push(_this);
        });
    },
    destroyed: function destroyed() {
        var _this2 = this;

        this.$contact(this.$options.rootName, function (rootVM) {
            rootVM.nodeVMs.splice(rootVM.nodeVMs.indexOf(_this2), 1);
            _this2.rootVM = undefined;
        });
        this.$contact(this.$options.name, function (parentVM) {
            parentVM.nodeVMs.splice(parentVM.nodeVMs.indexOf(_this2), 1);
            _this2.rootVM = undefined;
            _this2.parentVM = undefined;
        });
    }
};

/* harmony default export */ var m_node_vue = (MNode);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-1f654bbf","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/m-root.vue/m-node.vue/index.html
var m_node_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_c('div',{class:_vm.$style.text},[_vm._v(_vm._s(_vm.text))]),_c('div',{class:_vm.$style.sub},[_vm._t("default")],2)])}
var m_node_vue_staticRenderFns = []
var m_node_vue_esExports = { render: m_node_vue_render, staticRenderFns: m_node_vue_staticRenderFns }
/* harmony default export */ var m_root_vue_m_node_vue = (m_node_vue_esExports);
// CONCATENATED MODULE: ./src/components/m-root.vue/m-node.vue/index.js
var m_node_vue_cssModules = {};
function m_node_vue_injectStyle (ssrContext) {
m_node_vue_cssModules['$style'] = __webpack_require__("KjY2");
  this['$style'] = m_node_vue_cssModules['$style']

}
var m_node_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var m_node_vue___vue_template_functional__ = false
/* styles */
var m_node_vue___vue_css__ = m_node_vue_injectStyle
/* scopeId */
var m_node_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var m_node_vue___vue_module_identifier__ = null
var m_node_vue_Component = m_node_vue_normalizeComponent(m_node_vue, m_root_vue_m_node_vue, m_node_vue___vue_template_functional__, m_node_vue___vue_css__, m_node_vue___vue_scopeId__, m_node_vue___vue_module_identifier__)
/* harmony default export */ var components_m_root_vue_m_node_vue = (m_node_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/m-root.vue/index.js
var MRoot = {
    name: 'm-root',
    nodeName: 'm-node',
    data: function data() {
        return {
            nodeVMs: []
        };
    },

    methods: {
        walk: function walk(func) {
            var queue = [];
            queue = queue.concat(this.nodeVMs);
            var nodeVM = void 0;
            while (nodeVM = queue.shift()) {
                queue = queue.concat(nodeVM.nodeVMs);
                var result = func(nodeVM);
                if (result !== undefined) return result;
            }
        },
        find: function find(func) {
            return this.walk(function (nodeVM) {
                if (func(nodeVM)) return nodeVM;
            });
        }
    }
};



/* harmony default export */ var m_root_vue = (MRoot);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-bd06a794","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/m-root.vue/index.html
var m_root_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_vm._t("default")],2)}
var m_root_vue_staticRenderFns = []
var m_root_vue_esExports = { render: m_root_vue_render, staticRenderFns: m_root_vue_staticRenderFns }
/* harmony default export */ var components_m_root_vue = (m_root_vue_esExports);
// CONCATENATED MODULE: ./src/components/m-root.vue/index.js
var m_root_vue_cssModules = {};
function m_root_vue_injectStyle (ssrContext) {
m_root_vue_cssModules['$style'] = __webpack_require__("9B/7");
  this['$style'] = m_root_vue_cssModules['$style']

}
var m_root_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var m_root_vue___vue_template_functional__ = false
/* styles */
var m_root_vue___vue_css__ = m_root_vue_injectStyle
/* scopeId */
var m_root_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var m_root_vue___vue_module_identifier__ = null
var m_root_vue_Component = m_root_vue_normalizeComponent(m_root_vue, components_m_root_vue, m_root_vue___vue_template_functional__, m_root_vue___vue_css__, m_root_vue___vue_scopeId__, m_root_vue___vue_module_identifier__)
/* harmony default export */ var src_components_m_root_vue = (m_root_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-article.vue/index.js
var UArticle = {
    name: 'u-article'
};

/* harmony default export */ var u_article_vue = (UArticle);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-0233e750","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-article.vue/index.html
var u_article_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{class:_vm.$style.root},[_vm._t("default")],2)}
var u_article_vue_staticRenderFns = []
var u_article_vue_esExports = { render: u_article_vue_render, staticRenderFns: u_article_vue_staticRenderFns }
/* harmony default export */ var components_u_article_vue = (u_article_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-article.vue/index.js
var u_article_vue_cssModules = {};
function u_article_vue_injectStyle (ssrContext) {
u_article_vue_cssModules['$style'] = __webpack_require__("ZjDy");
  this['$style'] = u_article_vue_cssModules['$style']

}
var u_article_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_article_vue___vue_template_functional__ = false
/* styles */
var u_article_vue___vue_css__ = u_article_vue_injectStyle
/* scopeId */
var u_article_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_article_vue___vue_module_identifier__ = null
var u_article_vue_Component = u_article_vue_normalizeComponent(u_article_vue, components_u_article_vue, u_article_vue___vue_template_functional__, u_article_vue___vue_css__, u_article_vue___vue_scopeId__, u_article_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_article_vue = (u_article_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-badge.vue/index.js
var UBadge = {
    name: 'u-badge',
    props: {
        value: [Number, String],
        max: { type: Number, default: 99 }
    },
    computed: {
        currentValue: function currentValue() {
            if (typeof this.value !== 'number') return this.value;else return this.value > this.max ? this.max + '+' : this.value;
        }
    }
};

/* harmony default export */ var u_badge_vue = (UBadge);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-28a0f020","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-badge.vue/index.html
var u_badge_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_vm._t("default"),(_vm.currentValue)?_c('span',{class:_vm.$style.value},[_vm._v(_vm._s(_vm.currentValue))]):_vm._e()],2)}
var u_badge_vue_staticRenderFns = []
var u_badge_vue_esExports = { render: u_badge_vue_render, staticRenderFns: u_badge_vue_staticRenderFns }
/* harmony default export */ var components_u_badge_vue = (u_badge_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-badge.vue/index.js
var u_badge_vue_cssModules = {};
function u_badge_vue_injectStyle (ssrContext) {
u_badge_vue_cssModules['$style'] = __webpack_require__("CSiQ");
  this['$style'] = u_badge_vue_cssModules['$style']

}
var u_badge_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_badge_vue___vue_template_functional__ = false
/* styles */
var u_badge_vue___vue_css__ = u_badge_vue_injectStyle
/* scopeId */
var u_badge_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_badge_vue___vue_module_identifier__ = null
var u_badge_vue_Component = u_badge_vue_normalizeComponent(u_badge_vue, components_u_badge_vue, u_badge_vue___vue_template_functional__, u_badge_vue___vue_css__, u_badge_vue___vue_scopeId__, u_badge_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_badge_vue = (u_badge_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-block.vue/index.js
var UBlock = {
    name: 'u-block'
};

/* harmony default export */ var u_block_vue = (UBlock);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-32bcdf42","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-block.vue/index.html
var u_block_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_vm._t("default")],2)}
var u_block_vue_staticRenderFns = []
var u_block_vue_esExports = { render: u_block_vue_render, staticRenderFns: u_block_vue_staticRenderFns }
/* harmony default export */ var components_u_block_vue = (u_block_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-block.vue/index.js
var u_block_vue_cssModules = {};
function u_block_vue_injectStyle (ssrContext) {
u_block_vue_cssModules['$style'] = __webpack_require__("tZEi");
  this['$style'] = u_block_vue_cssModules['$style']

}
var u_block_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_block_vue___vue_template_functional__ = false
/* styles */
var u_block_vue___vue_css__ = u_block_vue_injectStyle
/* scopeId */
var u_block_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_block_vue___vue_module_identifier__ = null
var u_block_vue_Component = u_block_vue_normalizeComponent(u_block_vue, components_u_block_vue, u_block_vue___vue_template_functional__, u_block_vue___vue_css__, u_block_vue___vue_scopeId__, u_block_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_block_vue = (u_block_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-button.vue/index.js


var UButton = {
    name: 'u-button',
    extends: src_components_u_link_vue
};

/* harmony default export */ var u_button_vue = (UButton);
// CONCATENATED MODULE: ./src/components/u-button.vue/index.js
var u_button_vue_cssModules = {};
function u_button_vue_injectStyle (ssrContext) {
u_button_vue_cssModules['$style'] = __webpack_require__("GSzw");
  this['$style'] = u_button_vue_cssModules['$style']

}
var u_button_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var u_button_vue___vue_html__ = null
/* template functional */
var u_button_vue___vue_template_functional__ = false
/* styles */
var u_button_vue___vue_css__ = u_button_vue_injectStyle
/* scopeId */
var u_button_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_button_vue___vue_module_identifier__ = null
var u_button_vue_Component = u_button_vue_normalizeComponent(u_button_vue, u_button_vue___vue_html__, u_button_vue___vue_template_functional__, u_button_vue___vue_css__, u_button_vue___vue_scopeId__, u_button_vue___vue_module_identifier__)
/* harmony default export */ var components_u_button_vue = (u_button_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-carousel.vue/item.vue/index.js


var UCarouselItem = {
    name: 'u-carousel-item',
    parentName: 'u-carousel',
    extends: MSinglexItem,
    props: {
        title: String
    },
    computed: {
        animation: function animation() {
            return this.parentVM && this.parentVM.animation;
        },
        selected: function selected() {
            if (this.parentVM) return this.parentVM.router ? this.active : this.parentVM.selectedVM === this;
        }
    },
    methods: {
        onAnimationStart: function onAnimationStart() {
            this.parentVM.animating = true;
        },
        onAnimationEnd: function onAnimationEnd() {
            this.parentVM.animating = false;
        }
    }
};

/* harmony default export */ var u_carousel_vue_item_vue = (UCarouselItem);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-0b7b4c92","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-carousel.vue/item.vue/index.html
var u_carousel_vue_item_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.animation}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!!_vm.selected),expression:"!!selected"}],class:_vm.$style.root,attrs:{"animation":_vm.animation}},[_c('div',{class:_vm.$style.body},[_vm._t("default")],2)])])}
var u_carousel_vue_item_vue_staticRenderFns = []
var u_carousel_vue_item_vue_esExports = { render: u_carousel_vue_item_vue_render, staticRenderFns: u_carousel_vue_item_vue_staticRenderFns }
/* harmony default export */ var components_u_carousel_vue_item_vue = (u_carousel_vue_item_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-carousel.vue/item.vue/index.js
var u_carousel_vue_item_vue_cssModules = {};
function u_carousel_vue_item_vue_injectStyle (ssrContext) {
u_carousel_vue_item_vue_cssModules['$style'] = __webpack_require__("jp/I");
  this['$style'] = u_carousel_vue_item_vue_cssModules['$style']

}
var u_carousel_vue_item_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_carousel_vue_item_vue___vue_template_functional__ = false
/* styles */
var u_carousel_vue_item_vue___vue_css__ = u_carousel_vue_item_vue_injectStyle
/* scopeId */
var u_carousel_vue_item_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_carousel_vue_item_vue___vue_module_identifier__ = null
var u_carousel_vue_item_vue_Component = u_carousel_vue_item_vue_normalizeComponent(u_carousel_vue_item_vue, components_u_carousel_vue_item_vue, u_carousel_vue_item_vue___vue_template_functional__, u_carousel_vue_item_vue___vue_css__, u_carousel_vue_item_vue___vue_scopeId__, u_carousel_vue_item_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_carousel_vue_item_vue = (u_carousel_vue_item_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-carousel.vue/index.js


var UCarousel = {
    name: 'u-carousel',
    childName: 'u-carousel-item',
    extends: MSinglex,
    props: {
        autoSelect: { type: Boolean, default: true },
        value: null,
        autoplay: { type: Boolean, default: true }, // Same with <video>
        loop: { type: Boolean, default: true },
        interval: { type: Number, default: 4000, validator: function validator(value) {
                return Number.isInteger(value) && value >= 0;
            } },
        direction: { type: String, default: 'right' },
        animation: String,
        // duration: { type: Number, default: 1000, validator: (value) => Number.isInteger(value) && value >= 0 },
        router: { type: Boolean, default: false },
        hideButtons: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            animating: true
        };
    },

    computed: {
        selectedIndex: {
            get: function get() {
                return this.itemVMs.indexOf(this.selectedVM);
            },
            set: function set(index) {
                this.selectedVM = this.itemVMs[index];
            }
        }
    },
    created: function created() {
        var _this = this;

        this.$on('select', function ($event) {
            clearTimeout(_this.timer);
            _this.router && $event.itemVM.navigate();
            _this.play();
        });
    },
    mounted: function mounted() {
        this.play();
    },

    methods: {
        prev: function prev() {
            clearTimeout(this.timer);
            var length = this.itemVMs.length;
            this.selectedIndex = (this.selectedIndex - 1 + length) % length;
            this.play();
        },
        next: function next() {
            clearTimeout(this.timer);
            var length = this.itemVMs.length;
            var index = this.selectedIndex + 1;
            if (!this.loop && index >= length) return;
            this.selectedIndex = index % length;
            this.play();
        },
        play: function play() {
            var _this2 = this;

            if (!this.autoplay) return;

            this.timer = setTimeout(function () {
                _this2.next();
            }, this.interval);
        }
    }
};



/* harmony default export */ var u_carousel_vue = (UCarousel);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-157e7548","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-carousel.vue/index.html
var u_carousel_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_c('div',{class:_vm.$style.body},[_vm._t("default")],2),_c('nav',{class:_vm.$style.nav},_vm._l((_vm.itemVMs),function(itemVM){return _c('a',{class:_vm.$style['nav-item'],attrs:{"title":itemVM.title,"selected":_vm.router ? itemVM.active : itemVM === _vm.selectedVM},on:{"click":function($event){return _vm.select(itemVM)}}})}),0),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.hideButtons && !(!_vm.loop && _vm.selectedIndex === 0)),expression:"!hideButtons && !(!loop && selectedIndex === 0)"}],class:_vm.$style.button,attrs:{"role":"prev"},on:{"click":function($event){return _vm.prev()}}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.hideButtons && !(!_vm.loop && _vm.selectedIndex === _vm.itemVMs.length - 1)),expression:"!hideButtons && !(!loop && selectedIndex === itemVMs.length - 1)"}],class:_vm.$style.button,attrs:{"role":"next"},on:{"click":function($event){return _vm.next()}}})])}
var u_carousel_vue_staticRenderFns = []
var u_carousel_vue_esExports = { render: u_carousel_vue_render, staticRenderFns: u_carousel_vue_staticRenderFns }
/* harmony default export */ var components_u_carousel_vue = (u_carousel_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-carousel.vue/index.js
var u_carousel_vue_cssModules = {};
function u_carousel_vue_injectStyle (ssrContext) {
u_carousel_vue_cssModules['$style'] = __webpack_require__("y5c0");
  this['$style'] = u_carousel_vue_cssModules['$style']

}
var u_carousel_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_carousel_vue___vue_template_functional__ = false
/* styles */
var u_carousel_vue___vue_css__ = u_carousel_vue_injectStyle
/* scopeId */
var u_carousel_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_carousel_vue___vue_module_identifier__ = null
var u_carousel_vue_Component = u_carousel_vue_normalizeComponent(u_carousel_vue, components_u_carousel_vue, u_carousel_vue___vue_template_functional__, u_carousel_vue___vue_css__, u_carousel_vue___vue_scopeId__, u_carousel_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_carousel_vue = (u_carousel_vue_Component.exports);
// EXTERNAL MODULE: ./node_modules/_lodash@4.17.11@lodash/isNumber.js
var isNumber = __webpack_require__("GV1v");
var isNumber_default = /*#__PURE__*/__webpack_require__.n(isNumber);

// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-cascade-select.vue/index.js



var UCascadeSelect = {
    name: 'u-cascade-select',
    mixins: [components_m_field_vue],
    props: {
        data: Array,
        value: String,
        categories: { type: Array, default: function _default() {
                return [];
            }
        },
        autoSelect: { type: Boolean, default: true },
        hideEmpty: { type: Boolean, default: false },
        converter: { type: [String, Object], default: 'join' },
        field: { type: String, default: 'text' },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        var _this = this;

        var data = {
            currentData: this.data,
            values: [],
            lists: [],
            currentConverter: {}
        };

        if (this.converter instanceof Object) data.currentConverter = this.converter;else if (this.converter === 'last-value') {
            data.currentConverter = {
                get: function get(values) {
                    return values[values.length - 1];
                },

                set: function set(value) {
                    var values = [];

                    var findValues = function findValues(list, level) {
                        if (!list || level >= _this.categories.length) return;

                        for (var i = 0; i < list.length; i++) {
                            var item = list[i];
                            values.push(item.value);

                            if (level === _this.categories.length - 1 && item.value === value) // 最后一个元素，且值相等，则找到路径
                                return true;else if (item.children && findValues(item.children, level + 1)) return true;else values.pop();
                        }
                    };

                    findValues(_this.currentData, 0);
                    return values;
                }
            };
        } else if (this.converter.startsWith('join')) {
            var m = this.converter.match(/^join(\.number)?(:.+)?$/);
            if (!m) throw new Error('converter format error');

            var number = !!m[1];
            var sep = m[2] ? m[2].slice(1) : ',';

            data.currentConverter = {
                get: function get(values) {
                    return values.join(sep);
                },
                set: function set(value) {
                    var values = value ? value.split(sep) : [];
                    return number ? values.map(function (i) {
                        return +i;
                    }) : values;
                }
            };
        }

        // 首次传入需要从`value`中得出`values`
        data.values = data.currentConverter.set(this.value);

        return data;
    },

    watch: {
        data: function data(_data, oldData) {
            this.currentData = _data;
        },
        currentData: function currentData(_currentData) {
            // @TODO: 该不该用 map 来查找 value
            this.lists = [];
            this.values = this.currentConverter.set(this.value);
            this.setList(_currentData, 0);
            var value = this.currentConverter.get(this.values);
            this.$emit('input', value, this);
            this.$emit('update:value', value, this);
        },
        value: function value(_value, oldValue) {
            if (_value !== this.currentConverter.get(this.values)) {
                this.lists = [];
                this.values = this.currentConverter.set(_value);
                this.setList(this.currentData, 0);
            }

            var oldValues = this.values;
            this.$emit('change', {
                value: _value,
                oldValue: oldValue,
                values: this.values,
                oldValues: oldValues
            }, this);
        }
    },
    created: function created() {
        this.setList(this.currentData, 0);
        // 如果没有传入 value，并且选择了 autoSelect，则自动触发一次同步事件
        if (this.autoSelect && this.value === undefined) {
            var value = this.currentConverter.get(this.values);
            if (value !== '') {
                this.$emit('input', value, this);
                this.$emit('update:value', value, this);
            }
        }
    },

    methods: {
        /**
         * 设置列表
         * @param {Array} list 需要设置的列表
         * @param {Number} level 当前级别
         */
        setList: function setList(list, level) {
            // 递归结束条件
            // if (level >= this.categories.length)
            //     return;

            this.lists.splice(level, this.values.length, list);

            var value = this.values[level];
            var item = void 0;
            if (list && list.length) {
                item = list.find(function (item) {
                    return (item.exist === undefined || !!item.exist === true) && !item.disabled && item.value === value;
                });

                // 当找不到与 value 对应的 item 时
                // 如果设置了自动选择，并且没有设置 placeholder 的情况下
                // 自动选择第一个显示并且非禁用的项
                if (!item && this.autoSelect && this.categories[level].placeholder === undefined) {
                    var index = 0;
                    for (var i = 0; i < list.length; i++) {
                        var _item = list[i];
                        // 自动过滤禁用与不存在的项
                        if (!(_item.exist === undefined || !!_item.exist === true) || _item.disabled) continue;

                        index = i;
                        if (isNumber_default()(value) && isNumber_default()(_item.value) && value > _item.value) continue;else break;
                    }
                    item = list[index];
                }
            }

            if (item) {
                this.values.splice(level, 1, item.value);
                // 继续处理下一级
                level < this.categories.length && this.setList(item.children, level + 1);
            } else {
                this.values.splice(level, this.values.length);
            }
        },
        onSelect: function onSelect($event, level) {
            this.setList($event.item ? $event.item.children : undefined, level + 1);

            var value = this.currentConverter.get(this.values);
            this.$emit('input', value, this);
            this.$emit('update:value', value, this);
            this.$emit('select', {
                level: level,
                value: value,
                values: Array.from(this.values),
                item: $event.item,
                itemVM: $event.itemVM
            }, this);
        }
    }
};

/* harmony default export */ var u_cascade_select_vue = (UCascadeSelect);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-6a0feea4","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-cascade-select.vue/index.html
var u_cascade_select_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-linear-layout',{class:_vm.$style.root},_vm._l((_vm.categories),function(category,level){return (_vm.lists[level] || !_vm.hideEmpty)?_c('u-select',{key:level,attrs:{"field":_vm.field,"readonly":_vm.readonly,"disabled":_vm.disabled,"placeholder":category.placeholder},on:{"select":function($event){return _vm.onSelect($event, level)}},model:{value:(_vm.values[level]),callback:function ($$v) {_vm.$set(_vm.values, level, $$v)},expression:"values[level]"}},_vm._l((_vm.lists[level]),function(item){return (item.exist === undefined || !!item.exist === true)?_c('u-select-item',{key:item.value,attrs:{"value":item.value,"item":item,"disabled":item.disabled}},[_vm._t("text",[_vm._v(_vm._s(item[_vm.field]))],{"item":item,"level":level})],2):_vm._e()}),1):_vm._e()}),1)}
var u_cascade_select_vue_staticRenderFns = []
var u_cascade_select_vue_esExports = { render: u_cascade_select_vue_render, staticRenderFns: u_cascade_select_vue_staticRenderFns }
/* harmony default export */ var components_u_cascade_select_vue = (u_cascade_select_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-cascade-select.vue/index.js
var u_cascade_select_vue_cssModules = {};
function u_cascade_select_vue_injectStyle (ssrContext) {
u_cascade_select_vue_cssModules['$style'] = __webpack_require__("1+hL");
  this['$style'] = u_cascade_select_vue_cssModules['$style']

}
var u_cascade_select_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_cascade_select_vue___vue_template_functional__ = false
/* styles */
var u_cascade_select_vue___vue_css__ = u_cascade_select_vue_injectStyle
/* scopeId */
var u_cascade_select_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_cascade_select_vue___vue_module_identifier__ = null
var u_cascade_select_vue_Component = u_cascade_select_vue_normalizeComponent(u_cascade_select_vue, components_u_cascade_select_vue, u_cascade_select_vue___vue_template_functional__, u_cascade_select_vue___vue_css__, u_cascade_select_vue___vue_scopeId__, u_cascade_select_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_cascade_select_vue = (u_cascade_select_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-checkbox.vue/index.js



var UCheckbox = {
    name: 'u-checkbox',
    parentName: 'u-checkboxes',
    mixins: [MChild, components_m_field_vue],
    props: {
        value: { type: Boolean, default: false },
        label: null,
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            parentVM: undefined,
            currentValue: this.value
        };
    },

    computed: {
        listeners: function listeners() {
            var listeners = Object.assign({}, this.$listeners);
            ['focus', 'blur', 'update:value'].forEach(function (prop) {
                delete listeners[prop];
            });
            return listeners;
        }
    },
    watch: {
        value: function value(_value) {
            this.currentValue = _value;
        },
        currentValue: function currentValue(value, oldValue) {
            this.$emit('change', { value: value, oldValue: oldValue });
        }
    },
    methods: {
        onFocus: function onFocus(e) {
            this.$emit('focus', e);
        },
        onBlur: function onBlur(e) {
            this.$emit('blur', e);
        },
        check: function check() {
            if (this.readonly || this.disabled) return;

            var oldValue = this.currentValue;
            var value = !this.currentValue;

            if (this.parentVM && !this.parentVM.canCheck({
                value: value,
                oldValue: oldValue,
                label: this.label,
                itemVM: this
            })) return;

            var cancel = false;
            this.$emit('before-check', {
                value: value,
                oldValue: oldValue,
                label: this.label,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            });
            if (cancel) return;

            this.currentValue = value;

            this.$emit('input', value);
            this.$emit('update:value', value);
            this.$emit('check', { value: value, oldValue: oldValue });

            this.parentVM && this.parentVM.onCheck({
                value: value,
                oldValue: oldValue,
                label: this.label,
                itemVM: this
            });
        }
    }
};

/* harmony default export */ var u_checkbox_vue = (UCheckbox);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-ffbf98f8","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-checkbox.vue/index.html
var u_checkbox_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',_vm._g({class:_vm.$style.root,attrs:{"disabled":_vm.disabled,"tabindex":"0"},on:{"click":function($event){return _vm.check()},"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])){ return null; }$event.preventDefault();},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])){ return null; }$event.preventDefault();return _vm.check()},"focus":_vm.onFocus,"blur":_vm.onBlur}},_vm.listeners),[_c('span',{class:_vm.$style.box,attrs:{"status":String(_vm.currentValue),"disabled":_vm.disabled}}),_vm._t("default")],2)}
var u_checkbox_vue_staticRenderFns = []
var u_checkbox_vue_esExports = { render: u_checkbox_vue_render, staticRenderFns: u_checkbox_vue_staticRenderFns }
/* harmony default export */ var components_u_checkbox_vue = (u_checkbox_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-checkbox.vue/index.js
var u_checkbox_vue_cssModules = {};
function u_checkbox_vue_injectStyle (ssrContext) {
u_checkbox_vue_cssModules['$style'] = __webpack_require__("rb+g");
  this['$style'] = u_checkbox_vue_cssModules['$style']

}
var u_checkbox_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_checkbox_vue___vue_template_functional__ = false
/* styles */
var u_checkbox_vue___vue_css__ = u_checkbox_vue_injectStyle
/* scopeId */
var u_checkbox_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_checkbox_vue___vue_module_identifier__ = null
var u_checkbox_vue_Component = u_checkbox_vue_normalizeComponent(u_checkbox_vue, components_u_checkbox_vue, u_checkbox_vue___vue_template_functional__, u_checkbox_vue___vue_css__, u_checkbox_vue___vue_scopeId__, u_checkbox_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_checkbox_vue = (u_checkbox_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-checkboxes.vue/index.js



var UCheckboxes = {
    name: 'u-checkboxes',
    childName: 'u-checkbox',
    mixins: [MParent, components_m_field_vue],
    props: {
        value: Array,
        min: { type: Number, default: 0 },
        max: { type: Number, default: Infinity },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            currentValue: this.value,
            itemVMs: []
        };
    },
    mounted: function mounted() {
        this.watchValue(this.value);
    },

    watch: {
        value: function value(_value) {
            this.watchValue(_value);
        },
        currentValue: function currentValue(value, oldValue) {
            this.$emit('change', {
                value: value,
                oldValue: oldValue
            });
        },
        itemVMs: function itemVMs() {
            this.watchValue(this.value);
        }
    },
    methods: {
        watchValue: function watchValue(value) {
            if (value) {
                this.currentValue = value;
                this.itemVMs.forEach(function (itemVM) {
                    return itemVM.currentValue = value.includes(itemVM.label);
                });
            } else {
                var _value2 = [];
                this.itemVMs.forEach(function (itemVM) {
                    return itemVM.currentValue && _value2.push(itemVM.label);
                });
                this.currentValue = _value2;
            }
        },
        canCheck: function canCheck($event) {
            if (this.readonly || this.disabled) return false;

            var value = $event.value;
            var label = $event.itemVM.label;
            if (value && !this.currentValue.includes(label)) {
                var length = this.currentValue.length + 1;
                return this.min <= length && length <= this.max;
            } else if (!value && this.currentValue.includes(label)) {
                var _length = this.currentValue.length - 1;
                return this.min <= _length && _length <= this.max;
            }
        },
        onCheck: function onCheck($event) {
            var value = $event.value;
            var label = $event.itemVM.label;

            if (value && !this.currentValue.includes(label)) this.currentValue.push(label);else if (!value && this.currentValue.includes(label)) this.currentValue.splice(this.currentValue.indexOf(label), 1);

            this.$emit('input', this.currentValue);
            this.$emit('update:value', this.currentValue);
            this.$emit('check', {
                value: this.currentValue,
                itemVM: $event.itemVM
            });
        }
    }
};

/* harmony default export */ var u_checkboxes_vue = (UCheckboxes);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-e840f36c","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-checkboxes.vue/index.html
var u_checkboxes_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_vm._t("default")],2)}
var u_checkboxes_vue_staticRenderFns = []
var u_checkboxes_vue_esExports = { render: u_checkboxes_vue_render, staticRenderFns: u_checkboxes_vue_staticRenderFns }
/* harmony default export */ var components_u_checkboxes_vue = (u_checkboxes_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-checkboxes.vue/index.js
var u_checkboxes_vue_cssModules = {};
function u_checkboxes_vue_injectStyle (ssrContext) {
u_checkboxes_vue_cssModules['$style'] = __webpack_require__("b/5c");
  this['$style'] = u_checkboxes_vue_cssModules['$style']

}
var u_checkboxes_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_checkboxes_vue___vue_template_functional__ = false
/* styles */
var u_checkboxes_vue___vue_css__ = u_checkboxes_vue_injectStyle
/* scopeId */
var u_checkboxes_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_checkboxes_vue___vue_module_identifier__ = null
var u_checkboxes_vue_Component = u_checkboxes_vue_normalizeComponent(u_checkboxes_vue, components_u_checkboxes_vue, u_checkboxes_vue___vue_template_functional__, u_checkboxes_vue___vue_css__, u_checkboxes_vue___vue_scopeId__, u_checkboxes_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_checkboxes_vue = (u_checkboxes_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-circular-progress.vue/index.js
var UCircularProgress = {
    name: 'u-circular-progress',
    props: {
        percent: { type: Number, default: 0 }
    },
    data: function data() {
        return {
            radius: 45
        };
    },

    computed: {
        strokeDasharray: function strokeDasharray() {
            return 2 * Math.PI * this.radius * this.percent * 0.01 + 'px 1000px';
        }
    }
};

/* harmony default export */ var u_circular_progress_vue = (UCircularProgress);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-1c43e0cc","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-circular-progress.vue/index.html
var u_circular_progress_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_c('svg',{class:_vm.$style.svg,attrs:{"viewBox":"0 0 100 100"}},[_c('g',{attrs:{"transform":"translate(50, 50) rotate(-90)"}},[_c('circle',{class:_vm.$style.track,attrs:{"cx":"0","cy":"0","r":_vm.radius}}),_c('circle',{class:_vm.$style.trail,style:({ strokeDasharray: _vm.strokeDasharray }),attrs:{"cx":"0","cy":"0","r":_vm.radius}})])]),_c('div',{class:_vm.$style.text},[_vm._t("default",[_vm._v(_vm._s(_vm.percent + '%'))])],2)])}
var u_circular_progress_vue_staticRenderFns = []
var u_circular_progress_vue_esExports = { render: u_circular_progress_vue_render, staticRenderFns: u_circular_progress_vue_staticRenderFns }
/* harmony default export */ var components_u_circular_progress_vue = (u_circular_progress_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-circular-progress.vue/index.js
var u_circular_progress_vue_cssModules = {};
function u_circular_progress_vue_injectStyle (ssrContext) {
u_circular_progress_vue_cssModules['$style'] = __webpack_require__("0y3C");
  this['$style'] = u_circular_progress_vue_cssModules['$style']

}
var u_circular_progress_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_circular_progress_vue___vue_template_functional__ = false
/* styles */
var u_circular_progress_vue___vue_css__ = u_circular_progress_vue_injectStyle
/* scopeId */
var u_circular_progress_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_circular_progress_vue___vue_module_identifier__ = null
var u_circular_progress_vue_Component = u_circular_progress_vue_normalizeComponent(u_circular_progress_vue, components_u_circular_progress_vue, u_circular_progress_vue___vue_template_functional__, u_circular_progress_vue___vue_css__, u_circular_progress_vue___vue_scopeId__, u_circular_progress_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_circular_progress_vue = (u_circular_progress_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-collapse.vue/item.vue/index.js


var UCollapseItem = {
    name: 'u-collapse-item',
    parentName: 'u-collapse',
    mixins: [MChild],
    props: {
        title: String,
        expanded: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            // @inherit: parentVM: undefined,
            currentExpanded: this.expanded
        };
    },

    watch: {
        expanded: function expanded(_expanded) {
            this.currentExpanded = _expanded;
        }
    },
    methods: {
        expand: function expand() {
            var _this = this;

            if (this.disabled || this.parentVM.disabled) return;
            if (this.currentExpanded) return;

            if (this.$emitPrevent('before-expand', {}, this)) return;

            this.currentExpanded = true;
            this.$emit('update:expanded', true, this);

            if (this.parentVM.accordion) {
                this.parentVM.itemVMs.forEach(function (itemVM) {
                    if (itemVM !== _this && itemVM.currentExpanded) itemVM.collapse();
                });
            }

            this.$emit('expand', {}, this);
            this.parentVM.onItemExpand(this);
        },
        collapse: function collapse() {
            if (this.disabled || this.parentVM.disabled) return;
            if (!this.currentExpanded) return;

            if (this.$emitPrevent('before-collapse', {}, this)) return;

            this.currentExpanded = false;
            this.$emit('update:expanded', false, this);

            this.$emit('collapse', {}, this);
            this.parentVM.collapse(this);
        },
        toggle: function toggle(expanded) {
            if (expanded === undefined) expanded = !this.currentExpanded;
            expanded ? this.expand() : this.collapse();
        }
    }
};

/* harmony default export */ var u_collapse_vue_item_vue = (UCollapseItem);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-78d3f59c","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-collapse.vue/item.vue/index.html
var u_collapse_vue_item_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,attrs:{"disabled":_vm.disabled}},[_c('div',{class:_vm.$style.head,on:{"click":function($event){_vm.parentVM.expandTrigger === 'click' && _vm.toggle()}}},[_c('div',{class:_vm.$style.title},[_vm._t("title",[_vm._v(_vm._s(_vm.title))])],2),_c('span',{class:_vm.$style.expander,attrs:{"expanded":_vm.currentExpanded},on:{"click":function($event){_vm.parentVM.expandTrigger === 'click-expander' && ($event.stopPropagation(), _vm.toggle())}}}),_c('span',{class:_vm.$style.extra},[_vm._t("extra")],2)]),_c('f-collapse-transition',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentExpanded),expression:"currentExpanded"}],class:_vm.$style.body},[_vm._t("default")],2)])],1)}
var u_collapse_vue_item_vue_staticRenderFns = []
var u_collapse_vue_item_vue_esExports = { render: u_collapse_vue_item_vue_render, staticRenderFns: u_collapse_vue_item_vue_staticRenderFns }
/* harmony default export */ var components_u_collapse_vue_item_vue = (u_collapse_vue_item_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-collapse.vue/item.vue/index.js
var u_collapse_vue_item_vue_cssModules = {};
function u_collapse_vue_item_vue_injectStyle (ssrContext) {
u_collapse_vue_item_vue_cssModules['$style'] = __webpack_require__("gCkD");
  this['$style'] = u_collapse_vue_item_vue_cssModules['$style']

}
var u_collapse_vue_item_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_collapse_vue_item_vue___vue_template_functional__ = false
/* styles */
var u_collapse_vue_item_vue___vue_css__ = u_collapse_vue_item_vue_injectStyle
/* scopeId */
var u_collapse_vue_item_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_collapse_vue_item_vue___vue_module_identifier__ = null
var u_collapse_vue_item_vue_Component = u_collapse_vue_item_vue_normalizeComponent(u_collapse_vue_item_vue, components_u_collapse_vue_item_vue, u_collapse_vue_item_vue___vue_template_functional__, u_collapse_vue_item_vue___vue_css__, u_collapse_vue_item_vue___vue_scopeId__, u_collapse_vue_item_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_collapse_vue_item_vue = (u_collapse_vue_item_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-collapse.vue/index.js


var UCollapse = {
    name: 'u-collapse',
    childName: 'u-collapse-item',
    mixins: [MParent],
    props: {
        accordion: { type: Boolean, default: false },
        expandTrigger: { type: String, default: 'click' },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            // @inherit: itemVMs: [],
        };
    },

    methods: {
        onItemExpand: function onItemExpand(itemVM) {
            this.$emit('expand', {
                itemVM: itemVM
            }, this);
        },
        onItemCollapse: function onItemCollapse(itemVM) {
            this.$emit('collapse', {
                itemVM: itemVM
            }, this);
        },
        expand: function expand(itemVM) {
            itemVM.expand();
        },
        collapse: function collapse(itemVM) {
            itemVM.collapse();
        },
        expandAll: function expandAll() {
            this.itemVMs.forEach(function (itemVM) {
                return itemVM.expand();
            });
        },
        collapseAll: function collapseAll() {
            this.itemVMs.forEach(function (itemVM) {
                return itemVM.collapse();
            });
        }
    }
};



/* harmony default export */ var u_collapse_vue = (UCollapse);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-094ca100","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-collapse.vue/index.html
var u_collapse_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_vm._t("default")],2)}
var u_collapse_vue_staticRenderFns = []
var u_collapse_vue_esExports = { render: u_collapse_vue_render, staticRenderFns: u_collapse_vue_staticRenderFns }
/* harmony default export */ var components_u_collapse_vue = (u_collapse_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-collapse.vue/index.js
var u_collapse_vue_cssModules = {};
function u_collapse_vue_injectStyle (ssrContext) {
u_collapse_vue_cssModules['$style'] = __webpack_require__("ddk0");
  this['$style'] = u_collapse_vue_cssModules['$style']

}
var u_collapse_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_collapse_vue___vue_template_functional__ = false
/* styles */
var u_collapse_vue___vue_css__ = u_collapse_vue_injectStyle
/* scopeId */
var u_collapse_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_collapse_vue___vue_module_identifier__ = null
var u_collapse_vue_Component = u_collapse_vue_normalizeComponent(u_collapse_vue, components_u_collapse_vue, u_collapse_vue___vue_template_functional__, u_collapse_vue___vue_css__, u_collapse_vue___vue_scopeId__, u_collapse_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_collapse_vue = (u_collapse_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-combo-slider.vue/index.js


var UComboSlider = {
    name: 'u-combo-slider',
    mixins: [components_m_field_vue],
    props: {
        value: { type: Number, default: 0 },
        min: { type: Number, default: 0 },
        max: { type: Number, default: 100 },
        step: { type: Number, default: 1, validator: function validator(step) {
                return step >= 0;
            } },
        precision: { type: Number, default: 1, validator: function validator(precision) {
                return precision > 0;
            } },
        range: { type: Array, default: function _default() {
                return [];
            }
        },
        formatter: { type: [String, Object] },
        fixOn: { type: String, default: 'blur' },
        hideButtons: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            currentValue: this.value
        };
    },

    watch: {
        value: function value(_value) {
            this.currentValue = _value;
        },
        currentValue: function currentValue(_currentValue, oldValue) {
            this.$emit('change', {
                value: _currentValue,
                oldValue: oldValue
            }, this);
        }
    },
    computed: {
        numberMin: function numberMin() {
            return Math.max(this.min, this.range[0] === undefined ? -Infinity : this.range[0]);
        },
        numberMax: function numberMax() {
            return Math.min(this.max, this.range[1] === undefined ? Infinity : this.range[1]);
        }
    },
    methods: {
        onInput: function onInput(value) {
            this.currentValue = value;
            this.$emit('input', value, this);
            this.$emit('update:value', value, this);
        },
        onSlide: function onSlide($event) {
            this.$emit('slide', $event, this);
        }
    }
};

/* harmony default export */ var u_combo_slider_vue = (UComboSlider);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-3351925e","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-combo-slider.vue/index.html
var u_combo_slider_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_c('u-slider',{class:_vm.$style.slider,attrs:{"value":_vm.currentValue,"min":_vm.min,"max":_vm.max,"step":_vm.step,"range":_vm.range,"precision":_vm.precision,"readonly":_vm.readonly,"disabled":_vm.disabled},on:{"input":_vm.onInput,"slide":_vm.onSlide}}),_c('u-number-input',{class:_vm.$style.input,attrs:{"value":_vm.currentValue,"min":_vm.numberMin,"max":_vm.numberMax,"step":_vm.step || 1,"precision":_vm.precision,"formatter":_vm.formatter,"fix-on":_vm.fixOn,"hide-buttons":_vm.hideButtons,"readonly":_vm.readonly,"disabled":_vm.disabled},on:{"change":function($event){return _vm.onInput($event.value)}}}),_vm._t("default")],2)}
var u_combo_slider_vue_staticRenderFns = []
var u_combo_slider_vue_esExports = { render: u_combo_slider_vue_render, staticRenderFns: u_combo_slider_vue_staticRenderFns }
/* harmony default export */ var components_u_combo_slider_vue = (u_combo_slider_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-combo-slider.vue/index.js
var u_combo_slider_vue_cssModules = {};
function u_combo_slider_vue_injectStyle (ssrContext) {
u_combo_slider_vue_cssModules['$style'] = __webpack_require__("qaEo");
  this['$style'] = u_combo_slider_vue_cssModules['$style']

}
var u_combo_slider_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_combo_slider_vue___vue_template_functional__ = false
/* styles */
var u_combo_slider_vue___vue_css__ = u_combo_slider_vue_injectStyle
/* scopeId */
var u_combo_slider_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_combo_slider_vue___vue_module_identifier__ = null
var u_combo_slider_vue_Component = u_combo_slider_vue_normalizeComponent(u_combo_slider_vue, components_u_combo_slider_vue, u_combo_slider_vue___vue_template_functional__, u_combo_slider_vue___vue_css__, u_combo_slider_vue___vue_scopeId__, u_combo_slider_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_combo_slider_vue = (u_combo_slider_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-crumb.vue/item.vue/index.js



var UCrumbItem = {
    name: 'u-crumb-item',
    parentName: 'u-crumb',
    mixins: [MChild, src_components_u_link_vue],
    props: {
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            // @inherit: parentVM: undefined,
        };
    }
};

/* harmony default export */ var u_crumb_vue_item_vue = (UCrumbItem);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-41f5f8f8","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-crumb.vue/item.vue/index.html
var u_crumb_vue_item_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[(_vm.disabled)?_c('span',{class:_vm.$style.disabled},[_vm._t("default")],2):_c('a',_vm._g({class:_vm.$style.link,attrs:{"href":_vm.currentHref,"target":_vm.target,"disabled":_vm.disabled},on:{"click":_vm.onClick}},_vm.listeners),[_vm._t("default")],2)])}
var u_crumb_vue_item_vue_staticRenderFns = []
var u_crumb_vue_item_vue_esExports = { render: u_crumb_vue_item_vue_render, staticRenderFns: u_crumb_vue_item_vue_staticRenderFns }
/* harmony default export */ var components_u_crumb_vue_item_vue = (u_crumb_vue_item_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-crumb.vue/item.vue/index.js
var u_crumb_vue_item_vue_cssModules = {};
function u_crumb_vue_item_vue_injectStyle (ssrContext) {
u_crumb_vue_item_vue_cssModules['$style'] = __webpack_require__("Fxmo");
  this['$style'] = u_crumb_vue_item_vue_cssModules['$style']

}
var u_crumb_vue_item_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_crumb_vue_item_vue___vue_template_functional__ = false
/* styles */
var u_crumb_vue_item_vue___vue_css__ = u_crumb_vue_item_vue_injectStyle
/* scopeId */
var u_crumb_vue_item_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_crumb_vue_item_vue___vue_module_identifier__ = null
var u_crumb_vue_item_vue_Component = u_crumb_vue_item_vue_normalizeComponent(u_crumb_vue_item_vue, components_u_crumb_vue_item_vue, u_crumb_vue_item_vue___vue_template_functional__, u_crumb_vue_item_vue___vue_css__, u_crumb_vue_item_vue___vue_scopeId__, u_crumb_vue_item_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_crumb_vue_item_vue = (u_crumb_vue_item_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-crumb.vue/index.js


var UCrumb = {
    name: 'u-crumb',
    childName: 'u-crumb-item',
    mixins: [MParent],
    data: function data() {
        return {
            // @inherit: itemVMs: [],
        };
    }
};



/* harmony default export */ var u_crumb_vue = (UCrumb);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-8e4ea6f6","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-crumb.vue/index.html
var u_crumb_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{class:_vm.$style.root},[_vm._t("default")],2)}
var u_crumb_vue_staticRenderFns = []
var u_crumb_vue_esExports = { render: u_crumb_vue_render, staticRenderFns: u_crumb_vue_staticRenderFns }
/* harmony default export */ var components_u_crumb_vue = (u_crumb_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-crumb.vue/index.js
var u_crumb_vue_cssModules = {};
function u_crumb_vue_injectStyle (ssrContext) {
u_crumb_vue_cssModules['$style'] = __webpack_require__("T3pd");
  this['$style'] = u_crumb_vue_cssModules['$style']

}
var u_crumb_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_crumb_vue___vue_template_functional__ = false
/* styles */
var u_crumb_vue___vue_css__ = u_crumb_vue_injectStyle
/* scopeId */
var u_crumb_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_crumb_vue___vue_module_identifier__ = null
var u_crumb_vue_Component = u_crumb_vue_normalizeComponent(u_crumb_vue, components_u_crumb_vue, u_crumb_vue___vue_template_functional__, u_crumb_vue___vue_css__, u_crumb_vue___vue_scopeId__, u_crumb_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_crumb_vue = (u_crumb_vue_Component.exports);
// EXTERNAL MODULE: ./src/components/u-modal.vue/i18n/en-US.json
var en_US = __webpack_require__("91ky");
var en_US_default = /*#__PURE__*/__webpack_require__.n(en_US);

// EXTERNAL MODULE: ./src/components/u-modal.vue/i18n/zh-CN.json
var zh_CN = __webpack_require__("Y/yL");
var zh_CN_default = /*#__PURE__*/__webpack_require__.n(zh_CN);

// CONCATENATED MODULE: ./src/components/u-modal.vue/i18n/index.js



/* harmony default export */ var i18n = ({
    messages: {
        'en-US': en_US_default.a,
        'zh-CN': zh_CN_default.a
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-modal.vue/index.js


var UModal = {
    name: 'u-modal',
    i18n: i18n,
    props: {
        visible: { type: Boolean, default: false },
        title: { type: String, default: function _default() {
                return this.$t('dialog');
            }
        },
        content: String,
        okButton: { type: String, default: function _default() {
                return this.$t('ok');
            }
        },
        cancelButton: { type: String, default: function _default() {
                return this.$t('cancel');
            }
        },
        static: { type: Boolean, default: false },
        maskClosable: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            currentVisible: this.visible
        };
    },

    watch: {
        visible: function visible(_visible) {
            this.currentVisible = _visible;
        },
        currentVisible: function currentVisible(visible) {
            var _this = this;

            visible && this.$nextTick(function () {
                return _this.$refs.root.focus();
            });
        }
    },
    mounted: function mounted() {
        if (!this.static) document.body.appendChild(this.$el);
    },

    methods: {
        open: function open() {
            if (!this.$el) this.$mount(document.createElement('div'));

            this.currentVisible = true;
            this.$emit('update:visible', true, this);
            this.$emit('open', this);
        },
        close: function close(ok) {
            var cancel = false;
            this.$emit('before-close', {
                ok: ok,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            }, this);
            if (cancel) return;

            this.currentVisible = false;
            this.$emit('update:visible', false, this);
            this.$emit('close', {
                ok: ok
            }, this);
        },
        ok: function ok() {
            this.$emit('ok', undefined, this);
            this.close(true);
        },
        cancel: function cancel() {
            this.$emit('cancel', undefined, this);
            this.close(false);
        }
    },
    install: function install(Vue, id) {
        var Ctor = Vue.component(id);
        if (!Ctor) return;

        UModal.alert = function (content, title) {
            new Ctor({
                propsData: { content: content, title: title, cancelButton: '' }
            }).open();
        };

        UModal.confirm = function (content, title) {
            return new Promise(function (resolve, reject) {
                var instance = new Ctor({
                    propsData: { content: content, title: title }
                });
                instance.$on('ok', function () {
                    return resolve();
                });
                instance.$on('cancel', function () {
                    return reject();
                });
                instance.open();
            });
        };

        Vue.prototype.$alert = UModal.alert;
        Vue.prototype.$confirm = UModal.confirm;
    }
};

/* harmony default export */ var u_modal_vue = (UModal);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-59f1d917","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-modal.vue/index.html
var u_modal_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.currentVisible)?_c('div',{ref:"root",class:_vm.$style.root,attrs:{"static":_vm.static,"tabindex":"1"},on:{"click":function($event){_vm.maskClosable && _vm.cancel()},"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.cancel()}}},[_c('div',_vm._g(_vm._b({class:_vm.$style.dialog,on:{"click":function($event){$event.stopPropagation();}}},'div',_vm.$attrs,false),_vm.$listeners),[_vm._t("dialog",[_c('div',{class:_vm.$style.head},[_vm._t("head",[(_vm.title)?_c('div',{class:_vm.$style.title},[_vm._t("title",[_vm._v(_vm._s(_vm.title))])],2):_vm._e(),_c('a',{class:_vm.$style.close,on:{"click":function($event){return _vm.cancel()}}})])],2),_c('div',{class:_vm.$style.body},[_vm._t("default",[_vm._v(_vm._s(_vm.content))])],2),(_vm.okButton || _vm.cancelButton)?_c('div',{class:_vm.$style.foot},[_vm._t("foot",[_c('u-linear-layout',[(_vm.okButton)?_c('u-button',{class:_vm.$style.button,attrs:{"color":"primary"},on:{"click":function($event){return _vm.ok()}}},[_vm._v(_vm._s(_vm.okButton))]):_vm._e(),(_vm.cancelButton)?_c('u-button',{class:_vm.$style.button,on:{"click":function($event){return _vm.cancel()}}},[_vm._v(_vm._s(_vm.cancelButton))]):_vm._e()],1)])],2):_vm._e()])],2)]):_vm._e()}
var u_modal_vue_staticRenderFns = []
var u_modal_vue_esExports = { render: u_modal_vue_render, staticRenderFns: u_modal_vue_staticRenderFns }
/* harmony default export */ var components_u_modal_vue = (u_modal_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-modal.vue/index.js
var u_modal_vue_cssModules = {};
function u_modal_vue_injectStyle (ssrContext) {
u_modal_vue_cssModules['$style'] = __webpack_require__("NbvL");
  this['$style'] = u_modal_vue_cssModules['$style']

}
var u_modal_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_modal_vue___vue_template_functional__ = false
/* styles */
var u_modal_vue___vue_css__ = u_modal_vue_injectStyle
/* scopeId */
var u_modal_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_modal_vue___vue_module_identifier__ = null
var u_modal_vue_Component = u_modal_vue_normalizeComponent(u_modal_vue, components_u_modal_vue, u_modal_vue___vue_template_functional__, u_modal_vue___vue_css__, u_modal_vue___vue_scopeId__, u_modal_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_modal_vue = (u_modal_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-drawer.vue/index.js


var UDrawer = {
    name: 'u-drawer',
    extends: src_components_u_modal_vue,
    props: {
        placement: { type: String, default: 'left' },
        maskClosable: { type: Boolean, default: true }
    },
    data: function data() {
        return {
            drawerVisible: this.visible
        };
    },

    watch: {
        // @TODO: 为了让两个动画错开的临时解决方案
        currentVisible: function currentVisible(_currentVisible) {
            var _this = this;

            this.$nextTick(function () {
                return _this.drawerVisible = _currentVisible;
            });
        }
    }
};

/* harmony default export */ var u_drawer_vue = (UDrawer);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-93f5d562","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-drawer.vue/index.html
var u_drawer_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade-fast"}},[(_vm.currentVisible)?_c('div',{ref:"root",class:_vm.$style.root,attrs:{"placement":_vm.placement,"tabindex":"1"},on:{"click":function($event){_vm.maskClosable && _vm.cancel()},"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.cancel()}}},[_c('transition',{attrs:{"name":'fly-' + _vm.placement}},[_c('div',_vm._g(_vm._b({directives:[{name:"show",rawName:"v-show",value:(_vm.drawerVisible),expression:"drawerVisible"}],class:_vm.$style.drawer,on:{"click":function($event){$event.stopPropagation();}}},'div',_vm.$attrs,false),_vm.$listeners),[_vm._t("drawer",[_c('div',{class:_vm.$style.head},[_vm._t("head",[(_vm.title)?_c('div',{class:_vm.$style.title},[_vm._t("title",[_vm._v(_vm._s(_vm.title))])],2):_vm._e(),_c('a',{class:_vm.$style.close,on:{"click":function($event){return _vm.cancel()}}})])],2),_c('div',{class:_vm.$style.body},[_vm._t("default",[_vm._v(_vm._s(_vm.content))])],2),(_vm.okButton || _vm.cancelButton)?_c('div',{class:_vm.$style.foot},[_vm._t("foot",[_c('u-linear-layout',[(_vm.okButton)?_c('u-button',{class:_vm.$style.button,attrs:{"color":"primary"},on:{"click":function($event){return _vm.ok()}}},[_vm._v(_vm._s(_vm.okButton))]):_vm._e(),(_vm.cancelButton)?_c('u-button',{class:_vm.$style.button,on:{"click":function($event){return _vm.cancel()}}},[_vm._v(_vm._s(_vm.cancelButton))]):_vm._e()],1)])],2):_vm._e()])],2)])],1):_vm._e()])}
var u_drawer_vue_staticRenderFns = []
var u_drawer_vue_esExports = { render: u_drawer_vue_render, staticRenderFns: u_drawer_vue_staticRenderFns }
/* harmony default export */ var components_u_drawer_vue = (u_drawer_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-drawer.vue/index.js
var u_drawer_vue_cssModules = {};
function u_drawer_vue_injectStyle (ssrContext) {
u_drawer_vue_cssModules['$style'] = __webpack_require__("AvpS");
  this['$style'] = u_drawer_vue_cssModules['$style']

}
var u_drawer_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_drawer_vue___vue_template_functional__ = false
/* styles */
var u_drawer_vue___vue_css__ = u_drawer_vue_injectStyle
/* scopeId */
var u_drawer_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_drawer_vue___vue_module_identifier__ = null
var u_drawer_vue_Component = u_drawer_vue_normalizeComponent(u_drawer_vue, components_u_drawer_vue, u_drawer_vue___vue_template_functional__, u_drawer_vue___vue_css__, u_drawer_vue___vue_scopeId__, u_drawer_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_drawer_vue = (u_drawer_vue_Component.exports);
// EXTERNAL MODULE: ./node_modules/_lodash@4.17.11@lodash/cloneDeep.js
var cloneDeep = __webpack_require__("PkDv");
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);

// EXTERNAL MODULE: ./node_modules/_vusion-async-validator@1.8.8@vusion-async-validator/dist/bundle.js
var bundle = __webpack_require__("OyTA");
var bundle_default = /*#__PURE__*/__webpack_require__.n(bundle);

// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-form.vue/item.vue/index.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var UFormItem = {
    name: 'u-form-item',
    mixins: [components_m_emitter_vue],
    props: {
        name: String,
        label: String,
        title: String,
        rules: Array,
        ignoreRules: { type: Boolean, default: false },
        message: String,
        required: { type: Boolean, default: false },
        labelSize: String
    },
    data: function data() {
        return {
            value: undefined,
            state: '',
            color: '',
            currentMessage: this.message,
            inputing: false,
            parentVM: undefined,
            fieldVM: undefined
        };
    },

    computed: {
        currentRules: function currentRules() {
            return this.rules || this.parentVM && this.parentVM.rules && this.parentVM.rules[this.name];
        },
        currentRequired: function currentRequired() {
            return this.required || this.currentRules && this.currentRules.some(function (rule) {
                return rule.required;
            });
        },
        currentLabelSize: function currentLabelSize() {
            return this.labelSize || this.parentVM && this.parentVM.labelSize || 'auto';
        }
    },
    created: function created() {
        var _this = this;

        this.dispatch('u-form', 'add-item-vm', this);
        this.$on('add-field-vm', function (fieldVM) {
            // 一个`<u-form-item>`中，只注册一个`fieldVM`，其他的忽略
            if (_this.fieldVM) return;
            _this.fieldVM = fieldVM;
            fieldVM.formItemVM = _this;
            _this.value = fieldVM.value;
            // 初始化的时候自行验证一次。Fix #23
            _this.validate('submit', true).catch(function (errors) {
                return errors;
            });
        });
        this.$on('remove-field-vm', function (fieldVM) {
            _this.fieldVM = undefined;
            fieldVM.formItemVM = undefined;
        });
        this.$on('input', this.onInput);
        this.$on('change', this.onChange);
        this.$on('focus', this.onFocus);
        this.$on('blur', this.onBlur);
    },
    destroyed: function destroyed() {
        this.dispatch('u-form', 'remove-item-vm', this);
    },

    methods: {
        onInput: function onInput(value) {
            var _this2 = this;

            this.inputing = true;
            this.value = value;
            this.$nextTick(function () {
                _this2.validate('input').catch(function (errors) {
                    return errors;
                });
                _this2.inputing = false;
            });
        },
        onChange: function onChange($event) {
            this.value = $event.value;
            !this.inputing && this.validate('submit', true).catch(function (errors) {
                return errors;
            });
        },
        onFocus: function onFocus() {
            this.color = 'focus';
            this.currentMessage = this.message;
        },
        onBlur: function onBlur() {
            var _this3 = this;

            this.color = this.state = '';
            this.$nextTick(function () {
                return _this3.validate('blur').catch(function (errors) {
                    return errors;
                });
            });
        },
        validate: function validate() {
            var _this4 = this;

            var trigger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'submit';
            var silent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var rules = this.currentRules;
            rules = rules && rules.filter(function (item) {
                return !item.ignore;
            }).filter(function (rule) {
                return (rule.trigger + '+submit').includes(trigger);
            });
            if (this.ignoreRules || !rules || !rules.length) {
                this.color = this.currentMessage = '';
                this.dispatch('u-form', 'validate-item-vm', true);
                return Promise.resolve();
            }

            this.state = 'validating';
            if (!silent) this.color = this.state;else this.color = this.currentMessage = '';

            var name = this.name || 'field';
            var validator = new bundle_default.a(_defineProperty({}, name, rules));

            return new Promise(function (resolve, reject) {
                validator.validate(_defineProperty({}, name, _this4.value), { firstFields: true }, function (errors, fields) {
                    _this4.state = errors ? 'error' : 'success';
                    if (!silent) {
                        _this4.color = _this4.state;
                        _this4.currentMessage = errors ? errors[0].message : _this4.message;
                    }

                    _this4.dispatch('u-form', 'validate-item-vm', !errors);
                    errors ? reject(errors) : resolve();
                });
            });
        }
    }
};

/* harmony default export */ var u_form_vue_item_vue = (UFormItem);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-e0a5392c","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-form.vue/item.vue/index.html
var u_form_vue_item_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,attrs:{"label-size":_vm.currentLabelSize}},[_c('label',{directives:[{name:"show",rawName:"v-show",value:(_vm.label || _vm.title || _vm.currentLabelSize !== 'auto'),expression:"label || title || currentLabelSize !== 'auto'"}],class:_vm.$style.label,attrs:{"required":_vm.currentRequired}},[_vm._v(_vm._s(_vm.label || _vm.title))]),_c('div',{class:_vm.$style.field},[_vm._t("default"),(_vm.currentMessage)?_c('span',{class:_vm.$style.message,attrs:{"color":_vm.color}},[_vm._v(_vm._s(_vm.currentMessage))]):_vm._e()],2)])}
var u_form_vue_item_vue_staticRenderFns = []
var u_form_vue_item_vue_esExports = { render: u_form_vue_item_vue_render, staticRenderFns: u_form_vue_item_vue_staticRenderFns }
/* harmony default export */ var components_u_form_vue_item_vue = (u_form_vue_item_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-form.vue/item.vue/index.js
var u_form_vue_item_vue_cssModules = {};
function u_form_vue_item_vue_injectStyle (ssrContext) {
u_form_vue_item_vue_cssModules['$style'] = __webpack_require__("+i3O");
  this['$style'] = u_form_vue_item_vue_cssModules['$style']

}
var u_form_vue_item_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_form_vue_item_vue___vue_template_functional__ = false
/* styles */
var u_form_vue_item_vue___vue_css__ = u_form_vue_item_vue_injectStyle
/* scopeId */
var u_form_vue_item_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_form_vue_item_vue___vue_module_identifier__ = null
var u_form_vue_item_vue_Component = u_form_vue_item_vue_normalizeComponent(u_form_vue_item_vue, components_u_form_vue_item_vue, u_form_vue_item_vue___vue_template_functional__, u_form_vue_item_vue___vue_css__, u_form_vue_item_vue___vue_scopeId__, u_form_vue_item_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_form_vue_item_vue = (u_form_vue_item_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-form.vue/index.js
var u_form_vue__typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var UForm = {
    name: 'u-form',
    props: {
        model: Object,
        rules: Object,
        layout: { type: String, default: 'block' },
        labelSize: { type: String, default: 'normal' }
    },
    data: function data() {
        return {
            // @TODO: Optimize
            state: '',
            itemVMs: [],
            comparedModel: null
        };
    },
    created: function created() {
        var _this = this;

        this.$on('add-item-vm', function (itemVM) {
            itemVM.parentVM = _this;
            _this.itemVMs.push(itemVM);
        });
        this.$on('remove-item-vm', function (itemVM) {
            itemVM.parentVM = undefined;
            _this.itemVMs.splice(_this.itemVMs.indexOf(itemVM), 1);
        });
        this.$on('validate-item-vm', function () {
            _this.state = _this.getState();
            _this.$emit('validate', {
                valid: _this.state === 'success'
            }, _this);
        });
    },

    watch: {
        model: {
            handler: function handler(val) {
                if (this.comparedModel) {
                    // @TODO: 考虑到 @change 事件是基于子组件的 @change 事件的，所以 @modify 命名分开
                    this.$emit('modify', {
                        modified: this.deepCompare(val, this.comparedModel)
                    }, this);
                }
            },

            deep: true
        }
    },
    methods: {
        validate: function validate() {
            var silent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            return Promise.all(this.itemVMs.map(function (itemVM) {
                return itemVM.validate('submit', silent).catch(function (errors) {
                    return errors;
                });
            })).then(function (results) {
                if (results.some(function (result) {
                    return !!result;
                })) throw results;
            });
        },
        validateItem: function validateItem(name) {
            var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'submit';
            var silent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            var itemVM = this.itemVMs.find(function (itemVM) {
                return itemVM.name === name;
            });
            if (itemVM) return itemVM.validate(trigger, silent);
        },
        getState: function getState() {
            var STATE_LEVEL = {
                '': 4,
                focus: 3,
                validating: 2,
                error: 1,
                success: 0
            };

            var state = 'success';
            this.itemVMs.forEach(function (itemVM) {
                if (itemVM.currentRules && STATE_LEVEL[itemVM.state] > STATE_LEVEL[state]) state = itemVM.state;
            });

            return state;
        },
        record: function record() {
            this.comparedModel = cloneDeep_default()(this.model);
        },
        deepCompare: function deepCompare() {
            var _this2 = this;

            var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var compare = arguments[1];

            if (!compare) return false;
            if ((typeof o === 'undefined' ? 'undefined' : u_form_vue__typeof(o)) === 'object' && o !== null) {
                if (Array.isArray(o)) return o.length !== compare.length || o.some(function (m, i) {
                    return _this2.deepCompare(m, compare[i]);
                });else return Object.keys(o).some(function (key) {
                    return _this2.deepCompare(o[key], compare[key]);
                });
            } else return o !== compare;
        }
    }
};



/* harmony default export */ var u_form_vue = (UForm);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-6f0a61f5","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-form.vue/index.html
var u_form_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,attrs:{"layout":_vm.layout},on:{"submit":function($event){$event.preventDefault();}}},[_vm._t("default")],2)}
var u_form_vue_staticRenderFns = []
var u_form_vue_esExports = { render: u_form_vue_render, staticRenderFns: u_form_vue_staticRenderFns }
/* harmony default export */ var components_u_form_vue = (u_form_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-form.vue/index.js
var u_form_vue_cssModules = {};
function u_form_vue_injectStyle (ssrContext) {
u_form_vue_cssModules['$style'] = __webpack_require__("dsLM");
  this['$style'] = u_form_vue_cssModules['$style']

}
var u_form_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_form_vue___vue_template_functional__ = false
/* styles */
var u_form_vue___vue_css__ = u_form_vue_injectStyle
/* scopeId */
var u_form_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_form_vue___vue_module_identifier__ = null
var u_form_vue_Component = u_form_vue_normalizeComponent(u_form_vue, components_u_form_vue, u_form_vue___vue_template_functional__, u_form_vue___vue_css__, u_form_vue___vue_scopeId__, u_form_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_form_vue = (u_form_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-grid-layout.vue/row.vue/index.js
var UGridLayoutRow = {
    name: 'u-grid-layout-row',
    props: {
        repeat: { type: Number, default: 12 }
    }
};

/* harmony default export */ var row_vue = (UGridLayoutRow);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-b41211b8","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-grid-layout.vue/row.vue/index.html
var row_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_vm._t("default")],2)}
var row_vue_staticRenderFns = []
var row_vue_esExports = { render: row_vue_render, staticRenderFns: row_vue_staticRenderFns }
/* harmony default export */ var u_grid_layout_vue_row_vue = (row_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-grid-layout.vue/row.vue/index.js
var row_vue_cssModules = {};
function row_vue_injectStyle (ssrContext) {
row_vue_cssModules['$style'] = __webpack_require__("80El");
  this['$style'] = row_vue_cssModules['$style']

}
var row_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var row_vue___vue_template_functional__ = false
/* styles */
var row_vue___vue_css__ = row_vue_injectStyle
/* scopeId */
var row_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var row_vue___vue_module_identifier__ = null
var row_vue_Component = row_vue_normalizeComponent(row_vue, u_grid_layout_vue_row_vue, row_vue___vue_template_functional__, row_vue___vue_css__, row_vue___vue_scopeId__, row_vue___vue_module_identifier__)
/* harmony default export */ var components_u_grid_layout_vue_row_vue = (row_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-grid-layout.vue/column.vue/index.js
var breakpoints = [{ name: 'Huge', width: 1440 }, { name: 'Large', width: 1200 }, { name: 'Medium', width: 960 }, { name: 'Small', width: 768 }, { name: 'Mini', width: 480 }];

var UGridLayoutColumn = {
    name: 'u-grid-layout-column',
    props: {
        span: { type: Number, default: 1 },
        pull: Number,
        push: Number,
        offset: Number,
        mediaMini: Number,
        mediaSmall: Number,
        mediaMedium: Number,
        mediaLarge: Number,
        mediaHuge: Number
    },
    data: function data() {
        return {
            parentVM: this.$parent,
            currentSpan: this.span
        };
    },
    created: function created() {
        window.addEventListener('resize', this.onResize);
        this.onResize();
    },
    destroyed: function destroyed() {
        window.removeEventListener('resize', this.onResize);
    },

    computed: {
        stack: function stack() {
            var _this = this;

            return breakpoints.map(function (point) {
                return { name: point.name, width: point.width, span: _this['media' + point.name] };
            }).filter(function (point) {
                return point.span !== undefined;
            });
        },
        commonStyle: function commonStyle() {
            var left = this.push ? this.getPercent(this.push) : 'auto';
            var right = this.pull ? this.getPercent(this.pull) : 'auto';
            var marginLeft = this.getPercent(this.offset);
            return { right: right, left: left, marginLeft: marginLeft };
        },
        responsiveStyle: function responsiveStyle() {
            var width = this.currentSpan ? this.getPercent(this.currentSpan) : 'auto';
            return { width: width };
        }
    },
    watch: {
        currentSpan: function currentSpan(span, oldSpan) {
            this.$emit('responsive', {
                span: span,
                oldSpan: oldSpan
            }, this);
        }
    },
    methods: {
        getPercent: function getPercent(numerator, denominator) {
            denominator = denominator || this.parentVM.repeat;
            return numerator / denominator * 100 + '%';
        },
        onResize: function onResize() {
            var stack = this.stack;
            if (!stack.length) return;

            var span = this.span;
            var width = window.innerWidth;
            stack.forEach(function (point, index) {
                if (width <= point.width && point.span !== undefined) span = point.span;
            });
            this.currentSpan = span;
        }
    }
};

/* harmony default export */ var column_vue = (UGridLayoutColumn);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-36804a9e","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-grid-layout.vue/column.vue/index.html
var column_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,style:([_vm.commonStyle, _vm.responsiveStyle])},[_vm._t("default")],2)}
var column_vue_staticRenderFns = []
var column_vue_esExports = { render: column_vue_render, staticRenderFns: column_vue_staticRenderFns }
/* harmony default export */ var u_grid_layout_vue_column_vue = (column_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-grid-layout.vue/column.vue/index.js
var column_vue_cssModules = {};
function column_vue_injectStyle (ssrContext) {
column_vue_cssModules['$style'] = __webpack_require__("5l6N");
  this['$style'] = column_vue_cssModules['$style']

}
var column_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var column_vue___vue_template_functional__ = false
/* styles */
var column_vue___vue_css__ = column_vue_injectStyle
/* scopeId */
var column_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var column_vue___vue_module_identifier__ = null
var column_vue_Component = column_vue_normalizeComponent(column_vue, u_grid_layout_vue_column_vue, column_vue___vue_template_functional__, column_vue___vue_css__, column_vue___vue_scopeId__, column_vue___vue_module_identifier__)
/* harmony default export */ var components_u_grid_layout_vue_column_vue = (column_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-grid-layout.vue/index.js
var UGridLayout = {
    name: 'u-grid-layout',
    props: {
        repeat: { type: Number, default: 12 }
    }
};




/* harmony default export */ var u_grid_layout_vue = (UGridLayout);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-470c7044","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-grid-layout.vue/index.html
var u_grid_layout_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_vm._t("default")],2)}
var u_grid_layout_vue_staticRenderFns = []
var u_grid_layout_vue_esExports = { render: u_grid_layout_vue_render, staticRenderFns: u_grid_layout_vue_staticRenderFns }
/* harmony default export */ var components_u_grid_layout_vue = (u_grid_layout_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-grid-layout.vue/index.js
var u_grid_layout_vue_cssModules = {};
function u_grid_layout_vue_injectStyle (ssrContext) {
u_grid_layout_vue_cssModules['$style'] = __webpack_require__("QoRe");
  this['$style'] = u_grid_layout_vue_cssModules['$style']

}
var u_grid_layout_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_grid_layout_vue___vue_template_functional__ = false
/* styles */
var u_grid_layout_vue___vue_css__ = u_grid_layout_vue_injectStyle
/* scopeId */
var u_grid_layout_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_grid_layout_vue___vue_module_identifier__ = null
var u_grid_layout_vue_Component = u_grid_layout_vue_normalizeComponent(u_grid_layout_vue, components_u_grid_layout_vue, u_grid_layout_vue___vue_template_functional__, u_grid_layout_vue___vue_css__, u_grid_layout_vue___vue_scopeId__, u_grid_layout_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_grid_layout_vue = (u_grid_layout_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-input.vue/index.js



var UInput = {
    name: 'u-input',
    mixins: [components_m_field_vue],
    directives: { focus: v_focus_focus },
    props: {
        value: [String, Number],
        defaultValue: [String, Number],
        color: String,
        placeholder: String,
        clearable: { type: Boolean, default: false },
        autofocus: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        posternReadonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            focused: false,
            currentValue: this.value,
            currentColor: this.color,
            compositionInputing: false
        };
    },

    computed: {
        listeners: function listeners() {
            var listeners = Object.assign({}, this.$listeners);
            ['input', 'change', 'focus', 'blur', 'update:value'].forEach(function (prop) {
                delete listeners[prop];
            });
            return listeners;
        }
    },
    watch: {
        value: function value(_value) {
            this.currentValue = _value;
        },
        currentValue: function currentValue(value, oldValue) {
            this.$emit('change', { value: value, oldValue: oldValue }, this);
        },
        color: function color(_color) {
            this.currentColor = _color;
        }
    },
    methods: {
        onInput: function onInput(e) {
            if (!this.compositionInputing) {
                this.currentValue = e.target.value;
                this.$emit('input', this.currentValue, this);
                this.$emit('update:value', this.currentValue, this);
            }
        },
        onFocus: function onFocus(e) {
            this.focused = true;
            this.$emit('focus', e, this);
        },
        onBlur: function onBlur(e) {
            this.focused = false;
            this.$emit('blur', e, this);
        },
        onCompositionEnd: function onCompositionEnd(e) {
            // 中文输入的时候，会先触发onInput事件，再触发此事件，导致不能捕捉到中文输入
            // 因此需要特殊处理，此时compositionInputing值为true
            this.compositionInputing = false;
            this.currentValue = e.target.value;
            this.$emit('input', this.currentValue, this);
            this.$emit('update:value', this.currentValue, this);
        },
        focus: function focus() {
            this.$refs.input.focus();
        },
        blur: function blur() {
            this.$refs.input.blur();
        },
        clear: function clear() {
            if (this.readonly || this.disabled) return;

            var oldValue = this.currentValue;

            var cancel = false;
            this.$emit('before-clear', {
                oldValue: oldValue,
                value: undefined,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            });
            if (cancel) return;

            this.currentValue = undefined;
            this.$emit('input', undefined, this);
            this.$emit('update:value', undefined, this);
            this.focus();

            this.$emit('clear', {
                oldValue: oldValue,
                value: undefined
            }, this);
        },
        reset: function reset() {
            var oldValue = this.currentValue;

            var cancel = false;
            this.$emit('before-reset', {
                oldValue: oldValue,
                value: this.defaultValue,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            });
            if (cancel) return;

            this.currentValue = this.defaultValue;
            this.$emit('input', this.defaultValue, this);
            this.$emit('update:value', this.defaultValue, this);

            this.$emit('reset', {
                oldValue: oldValue,
                value: this.defaultValue
            }, this);
        }
    }
};

/* harmony default export */ var u_input_vue = (UInput);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-23c9bbb8","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-input.vue/index.html
var u_input_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,attrs:{"readonly":_vm.readonly,"disabled":_vm.disabled,"color":_vm.currentColor || this.formItemVM && this.formItemVM.color,"focus":_vm.focused,"clearable":_vm.clearable && _vm.currentValue},on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }!_vm.focused && _vm.focus()}}},[_c('span',{class:_vm.$style.baseline},[_vm._v("b")]),_c('span',{class:_vm.$style.placeholder},[_vm._v(_vm._s(_vm.currentValue ? '' : _vm.placeholder))]),_c('input',_vm._g(_vm._b({directives:[{name:"focus",rawName:"v-focus",value:(_vm.autofocus),expression:"autofocus"}],ref:"input",class:_vm.$style.input,attrs:{"placeholder":_vm.placeholder,"readonly":_vm.readonly || _vm.posternReadonly,"disabled":_vm.disabled},domProps:{"value":_vm.currentValue},on:{"input":_vm.onInput,"focus":_vm.onFocus,"blur":_vm.onBlur,"compositionstart":function($event){_vm.compositionInputing = true},"compositionend":_vm.onCompositionEnd}},'input',_vm.$attrs,false),_vm.listeners)),_vm._t("default"),(_vm.clearable && _vm.currentValue)?_c('span',{class:_vm.$style.clearable,on:{"click":function($event){$event.stopPropagation();return _vm.clear($event)}}}):_vm._e()],2)}
var u_input_vue_staticRenderFns = []
var u_input_vue_esExports = { render: u_input_vue_render, staticRenderFns: u_input_vue_staticRenderFns }
/* harmony default export */ var components_u_input_vue = (u_input_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-input.vue/index.js
var u_input_vue_cssModules = {};
function u_input_vue_injectStyle (ssrContext) {
u_input_vue_cssModules['$style'] = __webpack_require__("2wwT");
  this['$style'] = u_input_vue_cssModules['$style']

}
var u_input_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_input_vue___vue_template_functional__ = false
/* styles */
var u_input_vue___vue_css__ = u_input_vue_injectStyle
/* scopeId */
var u_input_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_input_vue___vue_module_identifier__ = null
var u_input_vue_Component = u_input_vue_normalizeComponent(u_input_vue, components_u_input_vue, u_input_vue___vue_template_functional__, u_input_vue___vue_css__, u_input_vue___vue_scopeId__, u_input_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_input_vue = (u_input_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-label.vue/index.js
var ULabel = {
    name: 'u-label'
};

/* harmony default export */ var u_label_vue = (ULabel);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-7ed80158","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-label.vue/index.html
var u_label_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',_vm._g({class:_vm.$style.root},_vm.$listeners),[_vm._t("default")],2)}
var u_label_vue_staticRenderFns = []
var u_label_vue_esExports = { render: u_label_vue_render, staticRenderFns: u_label_vue_staticRenderFns }
/* harmony default export */ var components_u_label_vue = (u_label_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-label.vue/index.js
var u_label_vue_cssModules = {};
function u_label_vue_injectStyle (ssrContext) {
u_label_vue_cssModules['$style'] = __webpack_require__("da8S");
  this['$style'] = u_label_vue_cssModules['$style']

}
var u_label_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_label_vue___vue_template_functional__ = false
/* styles */
var u_label_vue___vue_css__ = u_label_vue_injectStyle
/* scopeId */
var u_label_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_label_vue___vue_module_identifier__ = null
var u_label_vue_Component = u_label_vue_normalizeComponent(u_label_vue, components_u_label_vue, u_label_vue___vue_template_functional__, u_label_vue___vue_css__, u_label_vue___vue_scopeId__, u_label_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_label_vue = (u_label_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-linear-layout.vue/index.js
var ULinearLayout = {
    name: 'u-linear-layout',
    props: {
        direction: { default: 'horizontal', validator: function validator(value) {
                return ['horizontal', 'vertical'].includes(value);
            } }
    }
};

/* harmony default export */ var u_linear_layout_vue = (ULinearLayout);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-de043b14","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-linear-layout.vue/index.html
var u_linear_layout_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,attrs:{"direction":_vm.direction}},[_vm._t("default")],2)}
var u_linear_layout_vue_staticRenderFns = []
var u_linear_layout_vue_esExports = { render: u_linear_layout_vue_render, staticRenderFns: u_linear_layout_vue_staticRenderFns }
/* harmony default export */ var components_u_linear_layout_vue = (u_linear_layout_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-linear-layout.vue/index.js
var u_linear_layout_vue_cssModules = {};
function u_linear_layout_vue_injectStyle (ssrContext) {
u_linear_layout_vue_cssModules['$style'] = __webpack_require__("tyM4");
  this['$style'] = u_linear_layout_vue_cssModules['$style']

}
var u_linear_layout_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_linear_layout_vue___vue_template_functional__ = false
/* styles */
var u_linear_layout_vue___vue_css__ = u_linear_layout_vue_injectStyle
/* scopeId */
var u_linear_layout_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_linear_layout_vue___vue_module_identifier__ = null
var u_linear_layout_vue_Component = u_linear_layout_vue_normalizeComponent(u_linear_layout_vue, components_u_linear_layout_vue, u_linear_layout_vue___vue_template_functional__, u_linear_layout_vue___vue_css__, u_linear_layout_vue___vue_scopeId__, u_linear_layout_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_linear_layout_vue = (u_linear_layout_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-linear-progress.vue/index.js
var ULinearProgress = {
    name: 'u-linear-progress',
    props: {
        percent: { type: Number, default: 0 }
    }
};

/* harmony default export */ var u_linear_progress_vue = (ULinearProgress);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-110e1b73","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-linear-progress.vue/index.html
var u_linear_progress_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_c('div',{class:_vm.$style.track},[_c('div',{class:_vm.$style.trail,style:({ width: _vm.percent + '%' })})]),_vm._t("default")],2)}
var u_linear_progress_vue_staticRenderFns = []
var u_linear_progress_vue_esExports = { render: u_linear_progress_vue_render, staticRenderFns: u_linear_progress_vue_staticRenderFns }
/* harmony default export */ var components_u_linear_progress_vue = (u_linear_progress_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-linear-progress.vue/index.js
var u_linear_progress_vue_cssModules = {};
function u_linear_progress_vue_injectStyle (ssrContext) {
u_linear_progress_vue_cssModules['$style'] = __webpack_require__("hsqN");
  this['$style'] = u_linear_progress_vue_cssModules['$style']

}
var u_linear_progress_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_linear_progress_vue___vue_template_functional__ = false
/* styles */
var u_linear_progress_vue___vue_css__ = u_linear_progress_vue_injectStyle
/* scopeId */
var u_linear_progress_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_linear_progress_vue___vue_module_identifier__ = null
var u_linear_progress_vue_Component = u_linear_progress_vue_normalizeComponent(u_linear_progress_vue, components_u_linear_progress_vue, u_linear_progress_vue___vue_template_functional__, u_linear_progress_vue___vue_css__, u_linear_progress_vue___vue_scopeId__, u_linear_progress_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_linear_progress_vue = (u_linear_progress_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-list.vue/item.vue/index.js


var UListItem = {
    name: 'u-list-item',
    parentName: 'u-list',
    mixins: [MChild]
};

/* harmony default export */ var u_list_vue_item_vue = (UListItem);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-216180f7","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-list.vue/item.vue/index.html
var u_list_vue_item_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:_vm.$style.root},[_vm._t("default")],2)}
var u_list_vue_item_vue_staticRenderFns = []
var u_list_vue_item_vue_esExports = { render: u_list_vue_item_vue_render, staticRenderFns: u_list_vue_item_vue_staticRenderFns }
/* harmony default export */ var components_u_list_vue_item_vue = (u_list_vue_item_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-list.vue/item.vue/index.js
var u_list_vue_item_vue_cssModules = {};
function u_list_vue_item_vue_injectStyle (ssrContext) {
u_list_vue_item_vue_cssModules['$style'] = __webpack_require__("5hXN");
  this['$style'] = u_list_vue_item_vue_cssModules['$style']

}
var u_list_vue_item_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_list_vue_item_vue___vue_template_functional__ = false
/* styles */
var u_list_vue_item_vue___vue_css__ = u_list_vue_item_vue_injectStyle
/* scopeId */
var u_list_vue_item_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_list_vue_item_vue___vue_module_identifier__ = null
var u_list_vue_item_vue_Component = u_list_vue_item_vue_normalizeComponent(u_list_vue_item_vue, components_u_list_vue_item_vue, u_list_vue_item_vue___vue_template_functional__, u_list_vue_item_vue___vue_css__, u_list_vue_item_vue___vue_scopeId__, u_list_vue_item_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_list_vue_item_vue = (u_list_vue_item_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-list.vue/index.js


var UList = {
    name: 'u-list',
    childName: 'u-list-item',
    mixins: [MParent],
    props: {
        type: String
    }
};



/* harmony default export */ var u_list_vue = (UList);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-1fe4a5d4","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-list.vue/index.html
var u_list_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{class:_vm.$style.root,style:({ listStyleType: _vm.type })},[_vm._t("default")],2)}
var u_list_vue_staticRenderFns = []
var u_list_vue_esExports = { render: u_list_vue_render, staticRenderFns: u_list_vue_staticRenderFns }
/* harmony default export */ var components_u_list_vue = (u_list_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-list.vue/index.js
var u_list_vue_cssModules = {};
function u_list_vue_injectStyle (ssrContext) {
u_list_vue_cssModules['$style'] = __webpack_require__("yche");
  this['$style'] = u_list_vue_cssModules['$style']

}
var u_list_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_list_vue___vue_template_functional__ = false
/* styles */
var u_list_vue___vue_css__ = u_list_vue_injectStyle
/* scopeId */
var u_list_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_list_vue___vue_module_identifier__ = null
var u_list_vue_Component = u_list_vue_normalizeComponent(u_list_vue, components_u_list_vue, u_list_vue___vue_template_functional__, u_list_vue___vue_css__, u_list_vue___vue_scopeId__, u_list_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_list_vue = (u_list_vue_Component.exports);
// EXTERNAL MODULE: ./node_modules/_lodash@4.17.11@lodash/debounce.js
var debounce = __webpack_require__("yRAu");
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);

// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-list-view.vue/item.vue/index.js

// import { ellipsisTitle } from '../../../directives';

var UListViewItem = {
    name: 'u-list-view-item',
    parentName: 'u-list-view',
    groupName: 'u-list-view-group',
    extends: MComplexItem
};

/* harmony default export */ var u_list_view_vue_item_vue = (UListViewItem);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-4c7ee33a","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-list-view.vue/item.vue/index.html
var u_list_view_vue_item_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"ellipsis-title",rawName:"v-ellipsis-title"}],class:_vm.$style.root,attrs:{"selected":_vm.parentVM.multiple ? _vm.currentSelected : _vm.isSelected,"readonly":_vm.parentVM.readonly,"disabled":_vm.disabled || _vm.parentVM.disabled},on:{"click":_vm.select}},[_vm._t("default")],2)}
var u_list_view_vue_item_vue_staticRenderFns = []
var u_list_view_vue_item_vue_esExports = { render: u_list_view_vue_item_vue_render, staticRenderFns: u_list_view_vue_item_vue_staticRenderFns }
/* harmony default export */ var components_u_list_view_vue_item_vue = (u_list_view_vue_item_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-list-view.vue/item.vue/index.js
var u_list_view_vue_item_vue_cssModules = {};
function u_list_view_vue_item_vue_injectStyle (ssrContext) {
u_list_view_vue_item_vue_cssModules['$style'] = __webpack_require__("Mr8e");
  this['$style'] = u_list_view_vue_item_vue_cssModules['$style']

}
var u_list_view_vue_item_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_list_view_vue_item_vue___vue_template_functional__ = false
/* styles */
var u_list_view_vue_item_vue___vue_css__ = u_list_view_vue_item_vue_injectStyle
/* scopeId */
var u_list_view_vue_item_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_list_view_vue_item_vue___vue_module_identifier__ = null
var u_list_view_vue_item_vue_Component = u_list_view_vue_item_vue_normalizeComponent(u_list_view_vue_item_vue, components_u_list_view_vue_item_vue, u_list_view_vue_item_vue___vue_template_functional__, u_list_view_vue_item_vue___vue_css__, u_list_view_vue_item_vue___vue_scopeId__, u_list_view_vue_item_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_list_view_vue_item_vue = (u_list_view_vue_item_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-list-view.vue/group.vue/index.js


var UListViewGroup = {
    name: 'u-list-view-group',
    parentName: 'u-list-view',
    childName: 'u-list-view-item',
    mixins: [MGroup]
};

/* harmony default export */ var group_vue = (UListViewGroup);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-2737fbb3","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-list-view.vue/group.vue/index.html
var group_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,attrs:{"disabled":_vm.disabled}},[_c('div',{class:_vm.$style.head,on:{"click":function($event){_vm.parentVM.expandTrigger === 'click' && _vm.toggle()}}},[_c('div',{class:_vm.$style.title},[_vm._t("title",[_vm._v(_vm._s(_vm.title))])],2),(_vm.currentCollapsible)?_c('span',{class:_vm.$style.expander,attrs:{"expanded":_vm.currentExpanded},on:{"click":function($event){_vm.parentVM.expandTrigger === 'click-expander' && ($event.stopPropagation(), _vm.toggle())}}}):_vm._e(),_c('span',{class:_vm.$style.extra},[_vm._t("extra")],2)]),_c('f-collapse-transition',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentCollapsible ? _vm.currentExpanded : true),expression:"currentCollapsible ? currentExpanded : true"}],class:_vm.$style.body},[_vm._t("default")],2)])],1)}
var group_vue_staticRenderFns = []
var group_vue_esExports = { render: group_vue_render, staticRenderFns: group_vue_staticRenderFns }
/* harmony default export */ var u_list_view_vue_group_vue = (group_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-list-view.vue/group.vue/index.js
var group_vue_cssModules = {};
function group_vue_injectStyle (ssrContext) {
group_vue_cssModules['$style'] = __webpack_require__("QWy2");
  this['$style'] = group_vue_cssModules['$style']

}
var group_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var group_vue___vue_template_functional__ = false
/* styles */
var group_vue___vue_css__ = group_vue_injectStyle
/* scopeId */
var group_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var group_vue___vue_module_identifier__ = null
var group_vue_Component = group_vue_normalizeComponent(group_vue, u_list_view_vue_group_vue, group_vue___vue_template_functional__, group_vue___vue_css__, group_vue___vue_scopeId__, group_vue___vue_module_identifier__)
/* harmony default export */ var components_u_list_view_vue_group_vue = (group_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-list-view.vue/divider.vue/index.js
var UListViewDivider = {
    name: 'u-list-view-divider'
};

/* harmony default export */ var divider_vue = (UListViewDivider);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-23b3817a","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-list-view.vue/divider.vue/index.html
var divider_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root})}
var divider_vue_staticRenderFns = []
var divider_vue_esExports = { render: divider_vue_render, staticRenderFns: divider_vue_staticRenderFns }
/* harmony default export */ var u_list_view_vue_divider_vue = (divider_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-list-view.vue/divider.vue/index.js
var divider_vue_cssModules = {};
function divider_vue_injectStyle (ssrContext) {
divider_vue_cssModules['$style'] = __webpack_require__("TzkQ");
  this['$style'] = divider_vue_cssModules['$style']

}
var divider_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var divider_vue___vue_template_functional__ = false
/* styles */
var divider_vue___vue_css__ = divider_vue_injectStyle
/* scopeId */
var divider_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var divider_vue___vue_module_identifier__ = null
var divider_vue_Component = divider_vue_normalizeComponent(divider_vue, u_list_view_vue_divider_vue, divider_vue___vue_template_functional__, divider_vue___vue_css__, divider_vue___vue_scopeId__, divider_vue___vue_module_identifier__)
/* harmony default export */ var components_u_list_view_vue_divider_vue = (divider_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-list-view.vue/index.js






var UListView = {
    name: 'u-list-view',
    groupName: 'u-list-view-group',
    childName: 'u-list-view-item',
    mixins: [MComplex, MGroupParent, components_m_field_vue],
    props: {
        // @inherit: value: null,
        // @inherit: values: Array,
        field: { type: String, default: 'text' },
        data: Array,
        dataSource: [utils_DataSource, Function, Object],
        // @inherit: cancelable: { type: Boolean, default: false },
        // @inherit: multiple: { type: Boolean, default: false },
        // @inherit: collapsible: { type: Boolean, default: false },
        // @inherit: accordion: { type: Boolean, default: false },
        // @inherit: expandTrigger: { type: String, default: 'click' },
        // @inherit: readonly: { type: Boolean, default: false },
        // @inherit: disabled: { type: Boolean, default: false },
        loadingText: { type: String, default: '加载中...' },
        initialLoad: { type: Boolean, default: true },
        pageable: { type: Boolean, default: false },
        pageSize: { type: Number, default: 50 },
        remotePaging: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            ChildComponent: this.$options.childName,
            // @inherit: groupVMs: [],
            // @inherit: itemVMs: [],
            // @inherit: selectedVM: undefined,
            // @inherit: selectedVMs: undefined,
            // @inherit: currentMultiple: this.multiple,
            currentDataSource: undefined,
            loading: false
        };
    },

    computed: {
        currentData: function currentData() {
            return this.currentDataSource && this.currentDataSource.viewData;
        },
        paging: function paging() {
            if (this.pageable) {
                var paging = {};
                paging.size = this.pageSize;
                paging.number = paging.number || 1;
                return paging;
            } else return undefined;
        }
    },
    watch: {
        data: function data(_data) {
            this.handleData();
        },
        dataSource: function dataSource(_dataSource) {
            this.handleData();
        },

        // paging(paging) {
        //     this.page()
        // },
        itemVMs: function itemVMs(_itemVMs, oldVMs) {
            if (this.data || this.dataSource) return;

            MComplex.watch.itemVMs.call(this, _itemVMs, oldVMs);
        }
    },
    created: function created() {
        var _this = this;

        this.debouncedLoad = debounce_default()(this.load, 300);
        this.currentDataSource = this.normalizeDataSource(this.dataSource || this.data);
        if (this.currentDataSource && this.initialLoad) {
            this.load().then(function () {
                // 更新列表之后，原来的选择可能已不存在，这里暂存然后重新查找一遍
                MComplex.watch.itemVMs.call(_this, _this.itemVMs);
            });
        }
    },

    methods: {
        handleData: function handleData() {
            var _this2 = this;

            // @TODO: undefined or null
            this.currentDataSource = this.normalizeDataSource(this.dataSource || this.data);
            this.load().then(function () {
                // 更新列表之后，原来的选择可能已不存在，这里暂存然后重新查找一遍
                MComplex.watch.itemVMs.call(_this2, _this2.itemVMs);
            });
        },
        getExtraParams: function getExtraParams() {
            return undefined;
        },
        getDataSourceOptions: function getDataSourceOptions() {
            return {
                viewMode: 'more',
                paging: this.paging,
                remotePaging: this.remotePaging,
                getExtraParams: this.getExtraParams
            };
        },
        normalizeDataSource: function normalizeDataSource(dataSource) {
            var options = this.getDataSourceOptions();

            if (dataSource instanceof utils_DataSource) return dataSource;else if (dataSource instanceof Array) {
                options.data = Array.from(dataSource);
                return new utils_DataSource(options);
            } else if (dataSource instanceof Function) {
                options.load = function load(params) {
                    var _this3 = this;

                    var result = dataSource(params);

                    if (result instanceof Promise) return result.catch(function () {
                        return _this3.loading = false;
                    });else if (result instanceof Array) return Promise.resolve(result);else throw new TypeError('Wrong type of `dataSource.fetch` result!');
                };
                return new utils_DataSource(options);
            } else if (dataSource instanceof Object) {
                return new utils_DataSource(Object.assign(options, dataSource));
            } else return undefined;
        },
        shift: function shift(count) {
            var selectedIndex = this.itemVMs.indexOf(this.selectedVM);
            if (count > 0) {
                for (var i = selectedIndex + count; i < this.itemVMs.length; i++) {
                    var itemVM = this.itemVMs[i];
                    if (!itemVM.disabled) {
                        this.selectedVM = itemVM;
                        this.$emit('shift', {
                            selectedIndex: selectedIndex,
                            selectedVM: itemVM,
                            value: itemVM.value
                        }, this);
                        this.ensureFocusedInView();
                        break;
                    }
                }
            } else if (count < 0) {
                if (selectedIndex === -1) selectedIndex = this.itemVMs.length;
                for (var _i = selectedIndex + count; _i >= 0; _i--) {
                    var _itemVM = this.itemVMs[_i];
                    if (!_itemVM.disabled) {
                        this.selectedVM = _itemVM;
                        this.$emit('shift', {
                            selectedIndex: selectedIndex,
                            selectedVM: _itemVM,
                            value: _itemVM.value
                        }, this);
                        this.ensureFocusedInView();
                        break;
                    }
                }
            }
        },
        ensureFocusedInView: function ensureFocusedInView(natural) {
            var focusedVM = this.focusedVM || this.selectedVM;
            if (!focusedVM) return;
            var focusedEl = focusedVM.$el;
            if (!focusedEl) return;
            var parentEl = focusedEl.parentElement;
            if (!parentEl) return;

            var selectedIndex = this.itemVMs.indexOf(focusedVM);
            if (parentEl.scrollTop < focusedEl.offsetTop + focusedEl.offsetHeight - parentEl.clientHeight) {
                if (natural) parentEl.scrollTop = focusedEl.offsetTop - focusedEl.offsetHeight;else parentEl.scrollTop = focusedEl.offsetTop + focusedEl.offsetHeight - parentEl.clientHeight;
                if (selectedIndex === this.itemVMs.length - 1) {
                    this.pageable && this.debouncedLoad(true);
                    // 保证显示加载中，但又不是全部数据
                    this.$nextTick(function () {
                        return parentEl.scrollTop = parentEl.scrollHeight - parentEl.clientHeight;
                    });
                }
            }
            if (parentEl.scrollTop > focusedEl.offsetTop) parentEl.scrollTop = focusedEl.offsetTop;
        },
        ensureSelectedInItemVMs: function ensureSelectedInItemVMs() {
            var _this4 = this;

            if (this.multiple) {
                var _loop = function _loop(i) {
                    var oldVM = _this4.selectedVMs[i];
                    if (!_this4.itemVMs.includes(oldVM)) {
                        var selectedVM = _this4.itemVMs.find(function (itemVM) {
                            return itemVM.value === oldVM.value;
                        });
                        if (selectedVM) {
                            _this4.selectedVMs[i] = selectedVM;
                            selectedVM.currentSelected = true;
                        }
                    }
                };

                for (var i = 0; i < this.selectedVMs.length; i++) {
                    _loop(i);
                }
            } else {
                if (this.selectedVM && !this.itemVMs.includes(this.selectedVM)) {
                    var selectedVM = this.itemVMs.find(function (itemVM) {
                        return itemVM.value === _this4.selectedVM.value;
                    });
                    if (selectedVM) this.selectedVM = selectedVM;
                }
            }
            // MComplex.watch.itemVMs.call(this, this.itemVMs);
        },
        load: function load(more) {
            var _this5 = this;

            var dataSource = this.currentDataSource;
            if (!dataSource) return;
            if (this.loading) return Promise.resolve();
            if (this.$emitPrevent('before-load', undefined, this)) return;

            this.loading = true;
            return dataSource[more ? 'loadMore' : 'load']().then(function (data) {
                _this5.loading = false;
                _this5.ensureSelectedInItemVMs();

                _this5.$emit('load', undefined, _this5);
                return data;
            }).catch(function () {
                return _this5.loading = false;
            });
        },
        reload: function reload() {
            this.currentDataSource.clearLocalData();
            this.load();
        },
        onScroll: function onScroll(e) {
            if (!this.pageable) return;

            var el = e.target;
            if (el.scrollHeight === el.scrollTop + el.clientHeight && this.currentDataSource && this.currentDataSource.hasMore()) this.debouncedLoad(true);
        }
    }
};





/* harmony default export */ var u_list_view_vue = (UListView);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-086f36ac","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-list-view.vue/index.html
var u_list_view_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,attrs:{"readonly":_vm.readonly,"disabled":_vm.disabled,"tabindex":_vm.readonly || _vm.disabled ? '' : 0},on:{"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();return _vm.shift(-1)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.shift(+1)}],"scroll":function($event){$event.stopPropagation();return _vm.onScroll($event)}}},[_vm._t("default"),(_vm.currentData)?_vm._l((_vm.currentData),function(item){return _c(_vm.ChildComponent,{key:item.value,tag:"component",attrs:{"value":item.value,"disabled":item.disabled || _vm.disabled,"item":item}},[_vm._v(_vm._s(item[_vm.field]))])}):_vm._e(),(_vm.loading)?_c('div',{class:_vm.$style.status,attrs:{"status":"loading"}},[_vm._t("loading",[_c('u-spinner'),_vm._v(" "+_vm._s(_vm.loadingText))])],2):_vm._e()],2)}
var u_list_view_vue_staticRenderFns = []
var u_list_view_vue_esExports = { render: u_list_view_vue_render, staticRenderFns: u_list_view_vue_staticRenderFns }
/* harmony default export */ var components_u_list_view_vue = (u_list_view_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-list-view.vue/index.js
var u_list_view_vue_cssModules = {};
function u_list_view_vue_injectStyle (ssrContext) {
u_list_view_vue_cssModules['$style'] = __webpack_require__("NLcR");
  this['$style'] = u_list_view_vue_cssModules['$style']

}
var u_list_view_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_list_view_vue___vue_template_functional__ = false
/* styles */
var u_list_view_vue___vue_css__ = u_list_view_vue_injectStyle
/* scopeId */
var u_list_view_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_list_view_vue___vue_module_identifier__ = null
var u_list_view_vue_Component = u_list_view_vue_normalizeComponent(u_list_view_vue, components_u_list_view_vue, u_list_view_vue___vue_template_functional__, u_list_view_vue___vue_css__, u_list_view_vue___vue_scopeId__, u_list_view_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_list_view_vue = (u_list_view_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-loading.vue/index.js
var ULoading = {
    name: 'u-loading'
};

/* harmony default export */ var u_loading_vue = (ULoading);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-60e98d84","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-loading.vue/index.html
var u_loading_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_c('div',{class:_vm.$style.body},[_c('div',{class:_vm.$style.icon},[_c('u-spinner')],1),_c('div',{class:_vm.$style.text},[_vm._t("default")],2)])])}
var u_loading_vue_staticRenderFns = []
var u_loading_vue_esExports = { render: u_loading_vue_render, staticRenderFns: u_loading_vue_staticRenderFns }
/* harmony default export */ var components_u_loading_vue = (u_loading_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-loading.vue/index.js
var u_loading_vue_cssModules = {};
function u_loading_vue_injectStyle (ssrContext) {
u_loading_vue_cssModules['$style'] = __webpack_require__("Ud43");
  this['$style'] = u_loading_vue_cssModules['$style']

}
var u_loading_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_loading_vue___vue_template_functional__ = false
/* styles */
var u_loading_vue___vue_css__ = u_loading_vue_injectStyle
/* scopeId */
var u_loading_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_loading_vue___vue_module_identifier__ = null
var u_loading_vue_Component = u_loading_vue_normalizeComponent(u_loading_vue, components_u_loading_vue, u_loading_vue___vue_template_functional__, u_loading_vue___vue_css__, u_loading_vue___vue_scopeId__, u_loading_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_loading_vue = (u_loading_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-logo.vue/index.js


var ULogo = {
    name: 'u-logo',
    extends: src_components_u_link_vue,
    props: {
        href: { type: String, default: '/' }
    }
};

/* harmony default export */ var u_logo_vue = (ULogo);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-2e0f0148","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-logo.vue/index.html
var u_logo_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',_vm._g({class:_vm.$style.root,attrs:{"href":_vm.currentHref,"target":_vm.target,"disabled":_vm.disabled},on:{"click":_vm.onClick}},_vm.listeners),[_c('span',{class:_vm.$style.sub},[_vm._t("default")],2)])}
var u_logo_vue_staticRenderFns = []
var u_logo_vue_esExports = { render: u_logo_vue_render, staticRenderFns: u_logo_vue_staticRenderFns }
/* harmony default export */ var components_u_logo_vue = (u_logo_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-logo.vue/index.js
var u_logo_vue_cssModules = {};
function u_logo_vue_injectStyle (ssrContext) {
u_logo_vue_cssModules['$style'] = __webpack_require__("Hdif");
  this['$style'] = u_logo_vue_cssModules['$style']

}
var u_logo_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_logo_vue___vue_template_functional__ = false
/* styles */
var u_logo_vue___vue_css__ = u_logo_vue_injectStyle
/* scopeId */
var u_logo_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_logo_vue___vue_module_identifier__ = null
var u_logo_vue_Component = u_logo_vue_normalizeComponent(u_logo_vue, components_u_logo_vue, u_logo_vue___vue_template_functional__, u_logo_vue___vue_css__, u_logo_vue___vue_scopeId__, u_logo_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_logo_vue = (u_logo_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-menu.vue/item.vue/index.js


var UMenuItem = {
    name: 'u-menu-item',
    parentName: 'u-menu',
    groupName: 'u-menu-group',
    extends: MSinglexItem,
    computed: {
        listeners: function listeners() {
            var listeners = Object.assign({}, this.$listeners);
            delete listeners.click;
            return listeners;
        }
    },
    watch: {
        active: function active(_active) {
            this.watchActive(_active);
        }
    },
    mounted: function mounted() {
        this.watchActive(this.active);
    },

    methods: {
        watchActive: function watchActive(active) {
            // active && this.groupVM && this.groupVM.toggle(true);
        }
    }
};

/* harmony default export */ var u_menu_vue_item_vue = (UMenuItem);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-f3f06352","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-menu.vue/item.vue/index.html
var u_menu_vue_item_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',_vm._g({directives:[{name:"ellipsis-title",rawName:"v-ellipsis-title"}],class:_vm.$style.root,attrs:{"selected":_vm.parentVM.router ? _vm.active : _vm.isSelected,"readonly":_vm.parentVM.readonly,"disabled":_vm.disabled || _vm.parentVM.disabled,"href":_vm.currentHref,"target":_vm.target,"has-sub":!!_vm.$slots.sub},on:{"click":function($event){_vm.parentVM.router ? _vm.onClick($event) : _vm.select($event)}}},_vm.listeners),[_vm._t("default"),_c('div',{class:_vm.$style.sub},[_vm._t("sub")],2)],2)}
var u_menu_vue_item_vue_staticRenderFns = []
var u_menu_vue_item_vue_esExports = { render: u_menu_vue_item_vue_render, staticRenderFns: u_menu_vue_item_vue_staticRenderFns }
/* harmony default export */ var components_u_menu_vue_item_vue = (u_menu_vue_item_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-menu.vue/item.vue/index.js
var u_menu_vue_item_vue_cssModules = {};
function u_menu_vue_item_vue_injectStyle (ssrContext) {
u_menu_vue_item_vue_cssModules['$style'] = __webpack_require__("Lb/e");
  this['$style'] = u_menu_vue_item_vue_cssModules['$style']

}
var u_menu_vue_item_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_menu_vue_item_vue___vue_template_functional__ = false
/* styles */
var u_menu_vue_item_vue___vue_css__ = u_menu_vue_item_vue_injectStyle
/* scopeId */
var u_menu_vue_item_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_menu_vue_item_vue___vue_module_identifier__ = null
var u_menu_vue_item_vue_Component = u_menu_vue_item_vue_normalizeComponent(u_menu_vue_item_vue, components_u_menu_vue_item_vue, u_menu_vue_item_vue___vue_template_functional__, u_menu_vue_item_vue___vue_css__, u_menu_vue_item_vue___vue_scopeId__, u_menu_vue_item_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_menu_vue_item_vue = (u_menu_vue_item_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-menu.vue/group.vue/index.js


var UMenuGroup = {
    name: 'u-menu-group',
    parentName: 'u-menu',
    childName: 'u-menu-item',
    extends: MGroup
};

/* harmony default export */ var u_menu_vue_group_vue = (UMenuGroup);
// CONCATENATED MODULE: ./src/components/u-menu.vue/group.vue/index.js
var u_menu_vue_group_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var group_vue___vue_html__ = null
/* template functional */
var u_menu_vue_group_vue___vue_template_functional__ = false
/* styles */
var u_menu_vue_group_vue___vue_css__ = null
/* scopeId */
var u_menu_vue_group_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_menu_vue_group_vue___vue_module_identifier__ = null
var u_menu_vue_group_vue_Component = u_menu_vue_group_vue_normalizeComponent(u_menu_vue_group_vue, group_vue___vue_html__, u_menu_vue_group_vue___vue_template_functional__, u_menu_vue_group_vue___vue_css__, u_menu_vue_group_vue___vue_scopeId__, u_menu_vue_group_vue___vue_module_identifier__)
/* harmony default export */ var components_u_menu_vue_group_vue = (u_menu_vue_group_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-menu.vue/divider.vue/index.js
var UMenuDivider = {
    name: 'u-menu-divider',
    parentName: 'u-menu'
};

/* harmony default export */ var u_menu_vue_divider_vue = (UMenuDivider);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-1c82feba","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-menu.vue/divider.vue/index.html
var u_menu_vue_divider_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root})}
var u_menu_vue_divider_vue_staticRenderFns = []
var u_menu_vue_divider_vue_esExports = { render: u_menu_vue_divider_vue_render, staticRenderFns: u_menu_vue_divider_vue_staticRenderFns }
/* harmony default export */ var components_u_menu_vue_divider_vue = (u_menu_vue_divider_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-menu.vue/divider.vue/index.js
var u_menu_vue_divider_vue_cssModules = {};
function u_menu_vue_divider_vue_injectStyle (ssrContext) {
u_menu_vue_divider_vue_cssModules['$style'] = __webpack_require__("TAt7");
  this['$style'] = u_menu_vue_divider_vue_cssModules['$style']

}
var u_menu_vue_divider_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_menu_vue_divider_vue___vue_template_functional__ = false
/* styles */
var u_menu_vue_divider_vue___vue_css__ = u_menu_vue_divider_vue_injectStyle
/* scopeId */
var u_menu_vue_divider_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_menu_vue_divider_vue___vue_module_identifier__ = null
var u_menu_vue_divider_vue_Component = u_menu_vue_divider_vue_normalizeComponent(u_menu_vue_divider_vue, components_u_menu_vue_divider_vue, u_menu_vue_divider_vue___vue_template_functional__, u_menu_vue_divider_vue___vue_css__, u_menu_vue_divider_vue___vue_scopeId__, u_menu_vue_divider_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_menu_vue_divider_vue = (u_menu_vue_divider_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-menu.vue/index.js


var UMenu = {
    name: 'u-menu',
    groupName: 'u-menu-group',
    childName: 'u-menu-item',
    extends: src_components_m_singlex_vue,
    props: {
        router: { type: Boolean, default: true }
    },
    data: function data() {
        return {
            parentVM: undefined
        };
    },
    created: function created() {
        var _this = this;

        var popperChildVM = this.$parent;
        while (popperChildVM && popperChildVM.$options.name !== 'm-popper-child') {
            popperChildVM = popperChildVM.$parent;
        }if (popperChildVM && popperChildVM.parentVM) this.parentVM = popperChildVM.parentVM;

        this.$on('select', function (_ref) {
            var itemVM = _ref.itemVM;

            _this.router && itemVM.navigate();
            // this.parentVM && this.parentVM.toggle(false);
        });
    }
};





/* harmony default export */ var u_menu_vue = (UMenu);
// CONCATENATED MODULE: ./src/components/u-menu.vue/index.js
var u_menu_vue_cssModules = {};
function u_menu_vue_injectStyle (ssrContext) {
u_menu_vue_cssModules['$style'] = __webpack_require__("ce+E");
  this['$style'] = u_menu_vue_cssModules['$style']

}
var u_menu_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var u_menu_vue___vue_html__ = null
/* template functional */
var u_menu_vue___vue_template_functional__ = false
/* styles */
var u_menu_vue___vue_css__ = u_menu_vue_injectStyle
/* scopeId */
var u_menu_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_menu_vue___vue_module_identifier__ = null
var u_menu_vue_Component = u_menu_vue_normalizeComponent(u_menu_vue, u_menu_vue___vue_html__, u_menu_vue___vue_template_functional__, u_menu_vue___vue_css__, u_menu_vue___vue_scopeId__, u_menu_vue___vue_module_identifier__)
/* harmony default export */ var components_u_menu_vue = (u_menu_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-navbar.vue/item.vue/index.js


var UNavbarItem = {
    name: 'u-navbar-item',
    parentName: 'u-navbar',
    extends: MSinglexItem
};

/* harmony default export */ var u_navbar_vue_item_vue = (UNavbarItem);
// CONCATENATED MODULE: ./src/components/u-navbar.vue/item.vue/index.js
var u_navbar_vue_item_vue_cssModules = {};
function u_navbar_vue_item_vue_injectStyle (ssrContext) {
u_navbar_vue_item_vue_cssModules['$style'] = __webpack_require__("BaXm");
  this['$style'] = u_navbar_vue_item_vue_cssModules['$style']

}
var u_navbar_vue_item_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var item_vue___vue_html__ = null
/* template functional */
var u_navbar_vue_item_vue___vue_template_functional__ = false
/* styles */
var u_navbar_vue_item_vue___vue_css__ = u_navbar_vue_item_vue_injectStyle
/* scopeId */
var u_navbar_vue_item_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_navbar_vue_item_vue___vue_module_identifier__ = null
var u_navbar_vue_item_vue_Component = u_navbar_vue_item_vue_normalizeComponent(u_navbar_vue_item_vue, item_vue___vue_html__, u_navbar_vue_item_vue___vue_template_functional__, u_navbar_vue_item_vue___vue_css__, u_navbar_vue_item_vue___vue_scopeId__, u_navbar_vue_item_vue___vue_module_identifier__)
/* harmony default export */ var components_u_navbar_vue_item_vue = (u_navbar_vue_item_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-navbar.vue/divider.vue/index.js
var UNavbarDivider = {
    name: 'u-navbar-divider'
};

/* harmony default export */ var u_navbar_vue_divider_vue = (UNavbarDivider);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-1773fe5e","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-navbar.vue/divider.vue/index.html
var u_navbar_vue_divider_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root})}
var u_navbar_vue_divider_vue_staticRenderFns = []
var u_navbar_vue_divider_vue_esExports = { render: u_navbar_vue_divider_vue_render, staticRenderFns: u_navbar_vue_divider_vue_staticRenderFns }
/* harmony default export */ var components_u_navbar_vue_divider_vue = (u_navbar_vue_divider_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-navbar.vue/divider.vue/index.js
var u_navbar_vue_divider_vue_cssModules = {};
function u_navbar_vue_divider_vue_injectStyle (ssrContext) {
u_navbar_vue_divider_vue_cssModules['$style'] = __webpack_require__("I22y");
  this['$style'] = u_navbar_vue_divider_vue_cssModules['$style']

}
var u_navbar_vue_divider_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_navbar_vue_divider_vue___vue_template_functional__ = false
/* styles */
var u_navbar_vue_divider_vue___vue_css__ = u_navbar_vue_divider_vue_injectStyle
/* scopeId */
var u_navbar_vue_divider_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_navbar_vue_divider_vue___vue_module_identifier__ = null
var u_navbar_vue_divider_vue_Component = u_navbar_vue_divider_vue_normalizeComponent(u_navbar_vue_divider_vue, components_u_navbar_vue_divider_vue, u_navbar_vue_divider_vue___vue_template_functional__, u_navbar_vue_divider_vue___vue_css__, u_navbar_vue_divider_vue___vue_scopeId__, u_navbar_vue_divider_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_navbar_vue_divider_vue = (u_navbar_vue_divider_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-navbar.vue/dropdown.vue/index.js
var UNavbarDropdown = {
    name: 'u-navbar-dropdown',
    parentName: 'u-navbar',
    props: {
        title: String,
        trigger: { type: String, default: 'hover' },
        placement: {
            type: String, default: 'bottom-start',
            validator: function validator(value) {
                return (/^(top|bottom|left|right)(-start|-end)?$/.test(value)
                );
            }
        },
        disabled: { type: Boolean, default: false }
    }
};

/* harmony default export */ var dropdown_vue = (UNavbarDropdown);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-4cc9f9cc","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-navbar.vue/dropdown.vue/index.html
var dropdown_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,attrs:{"disabled":_vm.disabled}},[_c('div',{class:_vm.$style.title},[_vm._t("title",[_vm._v(_vm._s(_vm.title))])],2),_c('m-popper',{class:_vm.$style.popper,attrs:{"trigger":_vm.trigger,"placement":_vm.placement,"disabled":_vm.disabled,"append-to":"reference"}},[_vm._t("default")],2)],1)}
var dropdown_vue_staticRenderFns = []
var dropdown_vue_esExports = { render: dropdown_vue_render, staticRenderFns: dropdown_vue_staticRenderFns }
/* harmony default export */ var u_navbar_vue_dropdown_vue = (dropdown_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-navbar.vue/dropdown.vue/index.js
var dropdown_vue_cssModules = {};
function dropdown_vue_injectStyle (ssrContext) {
dropdown_vue_cssModules['$style'] = __webpack_require__("n/lM");
  this['$style'] = dropdown_vue_cssModules['$style']

}
var dropdown_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var dropdown_vue___vue_template_functional__ = false
/* styles */
var dropdown_vue___vue_css__ = dropdown_vue_injectStyle
/* scopeId */
var dropdown_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var dropdown_vue___vue_module_identifier__ = null
var dropdown_vue_Component = dropdown_vue_normalizeComponent(dropdown_vue, u_navbar_vue_dropdown_vue, dropdown_vue___vue_template_functional__, dropdown_vue___vue_css__, dropdown_vue___vue_scopeId__, dropdown_vue___vue_module_identifier__)
/* harmony default export */ var components_u_navbar_vue_dropdown_vue = (dropdown_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-navbar.vue/menu.vue/item.vue/index.js


var UNavbarMenuItem = {
    name: 'u-navbar-menu-item',
    parentName: 'u-navbar-menu',
    groupName: 'u-navbar-menu-group',
    extends: UMenuItem
};

/* harmony default export */ var menu_vue_item_vue = (UNavbarMenuItem);
// CONCATENATED MODULE: ./src/components/u-navbar.vue/menu.vue/item.vue/index.js
var menu_vue_item_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var menu_vue_item_vue___vue_html__ = null
/* template functional */
var menu_vue_item_vue___vue_template_functional__ = false
/* styles */
var menu_vue_item_vue___vue_css__ = null
/* scopeId */
var menu_vue_item_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var menu_vue_item_vue___vue_module_identifier__ = null
var menu_vue_item_vue_Component = menu_vue_item_vue_normalizeComponent(menu_vue_item_vue, menu_vue_item_vue___vue_html__, menu_vue_item_vue___vue_template_functional__, menu_vue_item_vue___vue_css__, menu_vue_item_vue___vue_scopeId__, menu_vue_item_vue___vue_module_identifier__)
/* harmony default export */ var u_navbar_vue_menu_vue_item_vue = (menu_vue_item_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-navbar.vue/menu.vue/group.vue/index.js


var UNavbarMenuGroup = {
    name: 'u-navbar-menu-group',
    childName: 'u-navbar-menu-item',
    extends: UMenuGroup
};

/* harmony default export */ var menu_vue_group_vue = (UNavbarMenuGroup);
// CONCATENATED MODULE: ./src/components/u-navbar.vue/menu.vue/group.vue/index.js
var menu_vue_group_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var menu_vue_group_vue___vue_html__ = null
/* template functional */
var menu_vue_group_vue___vue_template_functional__ = false
/* styles */
var menu_vue_group_vue___vue_css__ = null
/* scopeId */
var menu_vue_group_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var menu_vue_group_vue___vue_module_identifier__ = null
var menu_vue_group_vue_Component = menu_vue_group_vue_normalizeComponent(menu_vue_group_vue, menu_vue_group_vue___vue_html__, menu_vue_group_vue___vue_template_functional__, menu_vue_group_vue___vue_css__, menu_vue_group_vue___vue_scopeId__, menu_vue_group_vue___vue_module_identifier__)
/* harmony default export */ var u_navbar_vue_menu_vue_group_vue = (menu_vue_group_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-navbar.vue/menu.vue/divider.vue/index.js


var UNavbarMenuDivider = {
    name: 'u-navbar-menu-divider',
    parentName: 'u-navbar-menu',
    extends: UMenuDivider
};

/* harmony default export */ var menu_vue_divider_vue = (UNavbarMenuDivider);
// CONCATENATED MODULE: ./src/components/u-navbar.vue/menu.vue/divider.vue/index.js
var menu_vue_divider_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var divider_vue___vue_html__ = null
/* template functional */
var menu_vue_divider_vue___vue_template_functional__ = false
/* styles */
var menu_vue_divider_vue___vue_css__ = null
/* scopeId */
var menu_vue_divider_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var menu_vue_divider_vue___vue_module_identifier__ = null
var menu_vue_divider_vue_Component = menu_vue_divider_vue_normalizeComponent(menu_vue_divider_vue, divider_vue___vue_html__, menu_vue_divider_vue___vue_template_functional__, menu_vue_divider_vue___vue_css__, menu_vue_divider_vue___vue_scopeId__, menu_vue_divider_vue___vue_module_identifier__)
/* harmony default export */ var u_navbar_vue_menu_vue_divider_vue = (menu_vue_divider_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-navbar.vue/menu.vue/index.js


var UNavbarMenu = {
    name: 'u-navbar-menu',
    groupName: 'u-navbar-menu-group',
    childName: 'u-navbar-menu-item',
    extends: components_u_menu_vue
};





/* harmony default export */ var menu_vue = (UNavbarMenu);
// CONCATENATED MODULE: ./src/components/u-navbar.vue/menu.vue/index.js
var menu_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var menu_vue___vue_html__ = null
/* template functional */
var menu_vue___vue_template_functional__ = false
/* styles */
var menu_vue___vue_css__ = null
/* scopeId */
var menu_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var menu_vue___vue_module_identifier__ = null
var menu_vue_Component = menu_vue_normalizeComponent(menu_vue, menu_vue___vue_html__, menu_vue___vue_template_functional__, menu_vue___vue_css__, menu_vue___vue_scopeId__, menu_vue___vue_module_identifier__)
/* harmony default export */ var u_navbar_vue_menu_vue = (menu_vue_Component.exports);
// EXTERNAL MODULE: ./src/components/u-select.vue/i18n/en-US.json
var i18n_en_US = __webpack_require__("glep");
var i18n_en_US_default = /*#__PURE__*/__webpack_require__.n(i18n_en_US);

// EXTERNAL MODULE: ./src/components/u-select.vue/i18n/zh-CN.json
var i18n_zh_CN = __webpack_require__("CSRe");
var i18n_zh_CN_default = /*#__PURE__*/__webpack_require__.n(i18n_zh_CN);

// CONCATENATED MODULE: ./src/components/u-select.vue/i18n/index.js



/* harmony default export */ var u_select_vue_i18n = ({
    messages: {
        'en-US': i18n_en_US_default.a,
        'zh-CN': i18n_zh_CN_default.a
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-select.vue/item.vue/index.js


var USelectItem = {
    name: 'u-select-item',
    parentName: 'u-select',
    groupName: 'u-select-group',
    extends: UListViewItem,
    computed: {
        isFocused: function isFocused() {
            return this.parentVM && this.parentVM.focusedVM === this;
        },
        currentText: function currentText() {
            return this.$slots.default[0] && this.$slots.default[0].text;
        }
    },
    methods: {
        hover: function hover() {
            this.parentVM && (this.parentVM.focusedVM = this);
        }
    }
};

/* harmony default export */ var u_select_vue_item_vue = (USelectItem);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-9dec8d36","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-select.vue/item.vue/index.html
var u_select_vue_item_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"ellipsis-title",rawName:"v-ellipsis-title"}],class:_vm.$style.root,attrs:{"selected":_vm.parentVM.multiple ? _vm.currentSelected : _vm.isSelected,"focused":_vm.isFocused,"readonly":_vm.parentVM.readonly,"disabled":_vm.disabled || _vm.parentVM.disabled},on:{"mouseenter":_vm.hover,"click":_vm.select}},[_vm._t("default")],2)}
var u_select_vue_item_vue_staticRenderFns = []
var u_select_vue_item_vue_esExports = { render: u_select_vue_item_vue_render, staticRenderFns: u_select_vue_item_vue_staticRenderFns }
/* harmony default export */ var components_u_select_vue_item_vue = (u_select_vue_item_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-select.vue/item.vue/index.js
var u_select_vue_item_vue_cssModules = {};
function u_select_vue_item_vue_injectStyle (ssrContext) {
u_select_vue_item_vue_cssModules['$style'] = __webpack_require__("TkWg");
  this['$style'] = u_select_vue_item_vue_cssModules['$style']

}
var u_select_vue_item_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_select_vue_item_vue___vue_template_functional__ = false
/* styles */
var u_select_vue_item_vue___vue_css__ = u_select_vue_item_vue_injectStyle
/* scopeId */
var u_select_vue_item_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_select_vue_item_vue___vue_module_identifier__ = null
var u_select_vue_item_vue_Component = u_select_vue_item_vue_normalizeComponent(u_select_vue_item_vue, components_u_select_vue_item_vue, u_select_vue_item_vue___vue_template_functional__, u_select_vue_item_vue___vue_css__, u_select_vue_item_vue___vue_scopeId__, u_select_vue_item_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_select_vue_item_vue = (u_select_vue_item_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-select.vue/group.vue/index.js


var USelectGroup = {
    name: 'u-select-group',
    parentName: 'u-select',
    extends: UListViewGroup
};

/* harmony default export */ var u_select_vue_group_vue = (USelectGroup);
// CONCATENATED MODULE: ./src/components/u-select.vue/group.vue/index.js
var u_select_vue_group_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var u_select_vue_group_vue___vue_html__ = null
/* template functional */
var u_select_vue_group_vue___vue_template_functional__ = false
/* styles */
var u_select_vue_group_vue___vue_css__ = null
/* scopeId */
var u_select_vue_group_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_select_vue_group_vue___vue_module_identifier__ = null
var u_select_vue_group_vue_Component = u_select_vue_group_vue_normalizeComponent(u_select_vue_group_vue, u_select_vue_group_vue___vue_html__, u_select_vue_group_vue___vue_template_functional__, u_select_vue_group_vue___vue_css__, u_select_vue_group_vue___vue_scopeId__, u_select_vue_group_vue___vue_module_identifier__)
/* harmony default export */ var components_u_select_vue_group_vue = (u_select_vue_group_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-select.vue/divider.vue/index.js


var USelectDivider = {
    name: 'u-select-divider',
    extends: UListViewDivider
};

/* harmony default export */ var u_select_vue_divider_vue = (USelectDivider);
// CONCATENATED MODULE: ./src/components/u-select.vue/divider.vue/index.js
var u_select_vue_divider_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var u_select_vue_divider_vue___vue_html__ = null
/* template functional */
var u_select_vue_divider_vue___vue_template_functional__ = false
/* styles */
var u_select_vue_divider_vue___vue_css__ = null
/* scopeId */
var u_select_vue_divider_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_select_vue_divider_vue___vue_module_identifier__ = null
var u_select_vue_divider_vue_Component = u_select_vue_divider_vue_normalizeComponent(u_select_vue_divider_vue, u_select_vue_divider_vue___vue_html__, u_select_vue_divider_vue___vue_template_functional__, u_select_vue_divider_vue___vue_css__, u_select_vue_divider_vue___vue_scopeId__, u_select_vue_divider_vue___vue_module_identifier__)
/* harmony default export */ var components_u_select_vue_divider_vue = (u_select_vue_divider_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-select.vue/index.js




var USelect = {
    name: 'u-select',
    childName: 'u-select-item',
    groupName: 'u-select-group',
    extends: UListView,
    i18n: u_select_vue_i18n,
    directives: { ellipsisTitle: ellipsisTitle },
    props: {
        // @inherit: value: { type: String, default: '' },
        // @inherit: values: Array,
        // @inherit: field: { type: String, default: 'text' },
        // @inherit: data: Array,
        // @inherit: dataSource: [DataSource, Function, Object],
        // @inherit: cancelable: { type: Boolean, default: false },
        // @inherit: multiple: { type: Boolean, default: false },
        // @inherit: keepOrder: { type: Boolean, default: false },
        multipleAppearance: { type: String, default: 'tags' },
        tagsOverflow: { type: String, default: 'visible' },
        autoSelect: { type: Boolean, default: false },
        placeholder: { type: String, default: '请选择' },
        clearable: { type: Boolean, default: false },
        filterable: { type: Boolean, default: false },
        matchMethod: { type: [String, Function], default: 'includes' },
        caseSensitive: { type: Boolean, default: false },
        // @inherit: loadingText: { type: String, default: '加载中...' },
        emptyText: { type: String, default: function _default() {
                return this.$t('emptyText');
            }
        },
        // @inherit: initialLoad: { type: Boolean, default: true },
        // @inherit: pageable: { type: Boolean, default: false },
        // @inherit: pageSize: { type: Number, default: 50 },
        // @inherit: remotePaging: { type: Boolean, default: false },
        remoteFiltering: { type: Boolean, default: false },
        autoComplete: { type: Boolean, default: false },
        opened: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            // @inherit: ChildComponent: this.$options.childName,
            // @inherit: groupVMs: [],
            // @inherit: itemVMs: [],
            // @inherit: selectedVM: undefined,
            // @inherit: selectedVMs: undefined,
            focusedVM: undefined,
            // @inherit: currentMultiple: this.multiple,
            // @inherit: currentDataSource: undefined,
            // @inherit: loading: false,
            currentText: '', // 显示文本
            filterText: '', // 过滤文本，只有 input 时会改变它
            preventBlur: false,
            inputWidth: 20
        };
    },

    computed: {
        filtering: function filtering() {
            return {
                text: {
                    operator: this.matchMethod,
                    value: this.filterText,
                    caseInsensitive: !this.caseSensitive
                }
            };
        }
    },
    watch: {
        value: function value(_value) {
            // 无需剪枝
            this.watchValue(_value);
        },
        filterText: function filterText(_filterText) {
            this.inputWidth = _filterText.length * 12 + 20;
        }
    },
    created: function created() {
        var _this = this;

        this.$watch('selectedVM', function (selectedVM) {
            _this.currentText = _this.selectedVM ? _this.selectedVM.currentText : '';
        });
        this.$watch('selectedVMs', function (selectedVMs) {
            _this.currentText = selectedVMs.map(function (itemVM) {
                return itemVM.currentText;
            }).join(', ');
            _this.$refs.popper.currentOpened && _this.$refs.popper.scheduleUpdate();
        });
        this.$on('select', function ($event) {
            if (!_this.multiple) _this.close();
            if (_this.filterable) {
                _this.filterText = _this.selectedVM ? _this.selectedVM.currentText : '';
                setTimeout(function () {
                    _this.$refs.input.focus();
                    setTimeout(function () {
                        var inputEl = _this.$refs.input.$refs.input;
                        inputEl.setSelectionRange(inputEl.value.length, inputEl.value.length);
                    });
                });
            }
        });
    },

    methods: {
        getExtraParams: function getExtraParams() {
            return {
                filterText: this.filterText
            };
        },
        getDataSourceOptions: function getDataSourceOptions() {
            return {
                viewMode: 'more',
                paging: this.paging,
                remotePaging: this.remotePaging,
                filtering: this.filtering,
                remoteFiltering: this.remoteFiltering,
                getExtraParams: this.getExtraParams
            };
        },
        shift: function shift(count) {
            var focusedIndex = this.itemVMs.indexOf(this.focusedVM || this.selectedVM);
            if (count > 0) {
                for (var i = focusedIndex + count; i < this.itemVMs.length; i++) {
                    var itemVM = this.itemVMs[i];
                    if (!itemVM.disabled) {
                        this.focusedVM = itemVM;
                        this.$emit('shift', {
                            focusedIndex: focusedIndex,
                            focusedVM: itemVM,
                            value: itemVM.value
                        }, this);
                        this.ensureFocusedInView();
                        break;
                    }
                }
            } else if (count < 0) {
                if (focusedIndex === -1) focusedIndex = this.itemVMs.length;
                for (var _i = focusedIndex + count; _i >= 0; _i--) {
                    var _itemVM = this.itemVMs[_i];
                    if (!_itemVM.disabled) {
                        this.focusedVM = _itemVM;
                        this.$emit('shift', {
                            focusedIndex: focusedIndex,
                            focusedVM: _itemVM,
                            value: _itemVM.value
                        }, this);
                        this.ensureFocusedInView();
                        break;
                    }
                }
            }
        },
        open: function open() {
            this.$refs.popper && this.$refs.popper.open();
        },
        close: function close() {
            this.$refs.popper && this.$refs.popper.close();
        },
        toggle: function toggle(opened) {
            this.$refs.popper && this.$refs.popper.toggle(opened);
        },
        onOpen: function onOpen($event) {
            var _this2 = this;

            // 刚打开时，除非是没有加载，否则保留上次的 filter 过的数据
            if (this.filterable && !this.currentDataSource.initialLoaded) {
                this.load().then(function () {
                    _this2.ensureFocusedInView(true);
                    _this2.$refs.input.focus();
                });
            } else setTimeout(function () {
                return _this2.ensureFocusedInView(true);
            });

            this.$emit('open', $event, this);
        },
        onClose: function onClose($event) {
            this.focusedVM = undefined;
            this.$emit('close', $event, this);
        },
        fastLoad: function fastLoad(more, keep) {
            this.currentDataSource.filter(this.filtering);
            return this.currentDataSource.mustRemote() ? this.debouncedLoad(more, keep) : this.load(more, keep);
        },
        load: function load(more, keep) {
            var _this3 = this;

            var dataSource = this.currentDataSource;
            if (!dataSource) return;
            if (this.loading) return Promise.resolve();
            // @TODO: dataSource 的多次 promise 必须串行
            // return this.promiseSequence = this.promiseSequence.then(() => {
            this.loading = true;
            return dataSource[more ? 'loadMore' : 'load']().then(function (data) {
                _this3.loading = false;
                _this3.ensureSelectedInItemVMs();
                _this3.$refs.popper.currentOpened && _this3.$refs.popper.scheduleUpdate();
                return data;
            }).catch(function () {
                return _this3.loading = false;
            });
            // });
        },
        onFocus: function onFocus() {
            // @disabled
        },
        onInput: function onInput(value) {
            if (!this.filterable) return;
            this.currentText = value;
            // value.split(',')
            if (this.$emitPrevent('before-filter', { filterText: value }, this)) return;

            this.filterText = value;
            this.fastLoad(false, true);
            this.open();
        },
        onBlur: function onBlur() {
            var _this4 = this;

            if (!this.filterable) return;

            // 这边必须要用 setTimeout，$nextTick 也不行，需要保证在 @select 之后完成
            setTimeout(function () {
                if (_this4.preventBlur) return _this4.preventBlur = false;
                _this4.selectByText(_this4.filterText);
            }, 200);
        },
        selectByText: function selectByText(text) {
            var _this5 = this;

            if (this.multiple) {
                var oldVMs = this.selectedVMs;
                var selectedVM = this.itemVMs.find(function (itemVM) {
                    return itemVM.currentText === text;
                });

                // 如果没有匹配项则恢复到上一个状态
                if (!selectedVM && text) {
                    if (this.autoComplete) {
                        this.prependItem(text);
                        this.$nextTick(function () {
                            return _this5.select(_this5.itemVMs[0], true);
                        });
                    } else {
                        this.filterText = '';
                        this.fastLoad(); // ensure
                    }
                } else {
                    if (oldVMs.some(function (itemVM) {
                        return itemVM.currentText === text;
                    })) {
                        this.filterText = '';
                        this.fastLoad(); // ensure
                        return;
                    }
                    this.select(selectedVM, true);
                }
            } else {
                var oldVM = this.selectedVM;
                if (!oldVM && !text) return;else if (oldVM && text === oldVM.currentText) return this.ensureSelectedInItemVMs();

                var _selectedVM = this.itemVMs.find(function (itemVM) {
                    return itemVM.currentText === text;
                });

                // 如果没有匹配项则恢复到上一个状态
                if (!_selectedVM && text) {
                    if (this.autoComplete) {
                        this.prependItem(text);
                        this.$nextTick(function () {
                            return _this5.select(_this5.itemVMs[0], false);
                        });
                    } else {
                        this.filterText = oldVM ? oldVM.currentText : '';
                        this.fastLoad(); // ensure
                    }
                } else this.select(_selectedVM, false);
            }
        },
        prependItem: function prependItem(text) {
            this.currentDataSource.prepend({ text: text, value: text });
        },
        onEnter: function onEnter() {
            if (this.focusedVM) this.select(this.focusedVM);
            this.close();
        },
        onInputEnter: function onInputEnter() {
            if (this.focusedVM) this.select(this.focusedVM);else this.selectByText(this.filterText);
            this.close();
        },
        onInputDelete: function onInputDelete() {
            if (this.filterable && this.filterText === '') {
                if (!this.selectedVMs.length) return;
                var lastItemVM = this.selectedVMs[this.selectedVMs.length - 1];
                this.select(lastItemVM, false);
            }
        },
        clear: function clear() {
            this.preventBlur = true;

            if (this.multiple) {
                var oldValues = this.values;
                var values = [];

                if (this.$emitPrevent('before-clear', { oldValues: oldValues, values: values }, this)) return;

                this.selectedVMs.forEach(function (itemVM) {
                    return itemVM.currentSelected = false;
                });
                this.selectedVMs = [];
                this.filterText = '';
                this.fastLoad();
                this.$emit('update:values', values, this);

                this.$emit('clear', {
                    oldValues: oldValues,
                    values: values
                }, this);
            } else {
                var oldValue = this.value;
                var value = undefined;

                if (this.$emitPrevent('before-clear', { oldValue: oldValue, value: value }, this)) return;

                this.selectedVM = undefined;
                this.filterText = '';
                this.fastLoad();
                this.$emit('input', value, this);
                this.$emit('update:value', value, this);

                this.$emit('clear', {
                    oldValue: oldValue,
                    value: value
                }, this);
            }

            this.focus();
        },
        focus: function focus() {
            if (this.filterable) this.$refs.input.focus();
        },
        blur: function blur() {
            if (this.filterable) this.$refs.input.blur();
        }
    }
};





/* harmony default export */ var u_select_vue = (USelect);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-334a91eb","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-select.vue/index.html
var u_select_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,attrs:{"readonly":_vm.readonly,"disabled":_vm.disabled,"clearable":_vm.clearable && !!_vm.currentText,"multiple":_vm.multiple,"multiple-tags":_vm.multiple && this.multipleAppearance === 'tags',"tabindex":_vm.readonly || _vm.disabled ? '' : 0},on:{"click":_vm.focus,"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();_vm.$refs.popper.currentOpened ? _vm.shift(-1) : _vm.open()},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();_vm.$refs.popper.currentOpened ? _vm.shift(+1) : _vm.open()},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.stopPropagation();return _vm.onEnter($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }$event.stopPropagation();_vm.close(), _vm.filterText = ''}]}},[_c('span',{class:_vm.$style.baseline},[_vm._v("b")]),_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.filterText && (_vm.multiple ? !_vm.selectedVMs.length : !_vm.selectedVM)),expression:"!filterText && (multiple ? !selectedVMs.length : !selectedVM)"}],class:_vm.$style.placeholder},[_vm._v(_vm._s(_vm.placeholder))]),_c('div',{directives:[{name:"ellipsis-title",rawName:"v-ellipsis-title"}],class:_vm.$style.text,attrs:{"tags-overflow":_vm.tagsOverflow}},[(!_vm.multiple && !_vm.filterable)?_c('f-render',{attrs:{"vnode":_vm.selectedVM && _vm.selectedVM.$slots.default}}):(this.multipleAppearance === 'text')?_c('span',[_vm._v(_vm._s(_vm.currentText))]):(this.multipleAppearance === 'tags')?[(_vm.tagsOverflow === 'hidden' || _vm.tagsOverflow === 'visible')?_vm._l((_vm.selectedVMs),function(itemVM){return _c('span',{key:itemVM.value,class:_vm.$style.tag},[_c('span',{class:_vm.$style['tag-text']},[_vm._v(_vm._s(itemVM.currentText))]),_c('span',{class:_vm.$style['tag-remove'],on:{"click":function($event){$event.stopPropagation();return _vm.select(itemVM, false)}}})])}):(_vm.tagsOverflow === 'collapse')?[(_vm.selectedVMs[0])?_c('span',{key:_vm.selectedVMs[0].value,class:_vm.$style.tag},[_c('span',{class:_vm.$style['tag-text']},[_vm._v(_vm._s(_vm.selectedVMs[0].currentText))]),_c('span',{class:_vm.$style['tag-remove'],on:{"click":function($event){$event.stopPropagation();return _vm.select(_vm.selectedVMs[0], false)}}})]):_vm._e(),(_vm.selectedVMs.length > 1)?_c('span',{class:_vm.$style.tag},[_c('span',{class:_vm.$style['tag-text']},[_vm._v("+"+_vm._s(_vm.selectedVMs.length - 1))])]):_vm._e()]:_vm._e()]:_vm._e(),(_vm.filterable)?_c('u-input',{ref:"input",class:_vm.$style.input,style:({ width: _vm.multiple && (_vm.inputWidth + 'px') }),attrs:{"readonly":_vm.readonly,"disabled":_vm.disabled,"placeholder":_vm.multiple && _vm.selectedVMs.length ? '' : _vm.placeholder,"filterable":_vm.filterable,"multiple-tags":_vm.multiple && this.multipleAppearance === 'tags',"value":_vm.filterable ? _vm.filterText : _vm.currentText},on:{"input":_vm.onInput,"focus":_vm.onFocus,"blur":_vm.onBlur,"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.stopPropagation();return _vm.onInputEnter($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"delete",[8,46],$event.key,["Backspace","Delete","Del"])){ return null; }$event.stopPropagation();return _vm.onInputDelete($event)}]}}):_vm._e()],2),(_vm.clearable && !!_vm.currentText)?_c('span',{class:_vm.$style.clearable,on:{"click":_vm.clear}}):_vm._e(),_c('m-popper',{ref:"popper",class:_vm.$style.popper,attrs:{"append-to":"reference","disabled":_vm.readonly || _vm.disabled},on:{"update:opened":function($event){return _vm.$emit('update:opened', $event, this)},"before-open":function($event){return _vm.$emit('before-open', $event, this)},"before-close":function($event){return _vm.$emit('before-close', $event, this)},"open":_vm.onOpen,"close":_vm.onClose,"before-toggle":function($event){return _vm.$emit('before-toggle', $event, this)},"toggle":function($event){return _vm.$emit('toggle', $event, this)},"click":function($event){$event.stopPropagation();},"scroll":function($event){$event.stopPropagation();return _vm.onScroll($event)}}},[_vm._t("default"),(_vm.currentData)?_vm._l((_vm.currentData),function(item,index){return (_vm.currentData)?_c(_vm.ChildComponent,{key:_vm.filterable ? item.value + index : item.value,tag:"component",attrs:{"value":item.value,"disabled":item.disabled || _vm.disabled,"item":item}},[_vm._v(_vm._s(item[_vm.field]))]):_vm._e()}):_vm._e(),(_vm.loading)?_c('div',{class:_vm.$style.status,attrs:{"status":"loading"}},[_vm._t("loading",[_c('u-spinner'),_vm._v(" "+_vm._s(_vm.loadingText))])],2):_vm._e()],2)],1)}
var u_select_vue_staticRenderFns = []
var u_select_vue_esExports = { render: u_select_vue_render, staticRenderFns: u_select_vue_staticRenderFns }
/* harmony default export */ var components_u_select_vue = (u_select_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-select.vue/index.js
var u_select_vue_cssModules = {};
function u_select_vue_injectStyle (ssrContext) {
u_select_vue_cssModules['$style'] = __webpack_require__("PP8O");
  this['$style'] = u_select_vue_cssModules['$style']

}
var u_select_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_select_vue___vue_template_functional__ = false
/* styles */
var u_select_vue___vue_css__ = u_select_vue_injectStyle
/* scopeId */
var u_select_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_select_vue___vue_module_identifier__ = null
var u_select_vue_Component = u_select_vue_normalizeComponent(u_select_vue, components_u_select_vue, u_select_vue___vue_template_functional__, u_select_vue___vue_css__, u_select_vue___vue_scopeId__, u_select_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_select_vue = (u_select_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-navbar.vue/select.vue/item.vue/index.js


var UNavbarSelectItem = {
    name: 'u-navbar-select-item',
    parentName: 'u-navbar-select',
    groupName: 'u-navbar-select-group',
    extends: USelectItem
};

/* harmony default export */ var select_vue_item_vue = (UNavbarSelectItem);
// CONCATENATED MODULE: ./src/components/u-navbar.vue/select.vue/item.vue/index.js
var select_vue_item_vue_cssModules = {};
function select_vue_item_vue_injectStyle (ssrContext) {
select_vue_item_vue_cssModules['$style'] = __webpack_require__("aNuv");
  this['$style'] = select_vue_item_vue_cssModules['$style']

}
var select_vue_item_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var select_vue_item_vue___vue_html__ = null
/* template functional */
var select_vue_item_vue___vue_template_functional__ = false
/* styles */
var select_vue_item_vue___vue_css__ = select_vue_item_vue_injectStyle
/* scopeId */
var select_vue_item_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var select_vue_item_vue___vue_module_identifier__ = null
var select_vue_item_vue_Component = select_vue_item_vue_normalizeComponent(select_vue_item_vue, select_vue_item_vue___vue_html__, select_vue_item_vue___vue_template_functional__, select_vue_item_vue___vue_css__, select_vue_item_vue___vue_scopeId__, select_vue_item_vue___vue_module_identifier__)
/* harmony default export */ var u_navbar_vue_select_vue_item_vue = (select_vue_item_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-navbar.vue/select.vue/group.vue/index.js


var UNavbarSelectGroup = {
    name: 'u-navbar-select-group',
    childName: 'u-navbar-select-item',
    extends: USelectGroup
};

/* harmony default export */ var select_vue_group_vue = (UNavbarSelectGroup);
// CONCATENATED MODULE: ./src/components/u-navbar.vue/select.vue/group.vue/index.js
var select_vue_group_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var select_vue_group_vue___vue_html__ = null
/* template functional */
var select_vue_group_vue___vue_template_functional__ = false
/* styles */
var select_vue_group_vue___vue_css__ = null
/* scopeId */
var select_vue_group_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var select_vue_group_vue___vue_module_identifier__ = null
var select_vue_group_vue_Component = select_vue_group_vue_normalizeComponent(select_vue_group_vue, select_vue_group_vue___vue_html__, select_vue_group_vue___vue_template_functional__, select_vue_group_vue___vue_css__, select_vue_group_vue___vue_scopeId__, select_vue_group_vue___vue_module_identifier__)
/* harmony default export */ var u_navbar_vue_select_vue_group_vue = (select_vue_group_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-navbar.vue/select.vue/divider.vue/index.js


var UNavbarSelectDivider = {
    name: 'u-navbar-select-divider',
    parentName: 'u-navbar-select',
    extends: USelectDivider
};

/* harmony default export */ var select_vue_divider_vue = (UNavbarSelectDivider);
// CONCATENATED MODULE: ./src/components/u-navbar.vue/select.vue/divider.vue/index.js
var select_vue_divider_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var select_vue_divider_vue___vue_html__ = null
/* template functional */
var select_vue_divider_vue___vue_template_functional__ = false
/* styles */
var select_vue_divider_vue___vue_css__ = null
/* scopeId */
var select_vue_divider_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var select_vue_divider_vue___vue_module_identifier__ = null
var select_vue_divider_vue_Component = select_vue_divider_vue_normalizeComponent(select_vue_divider_vue, select_vue_divider_vue___vue_html__, select_vue_divider_vue___vue_template_functional__, select_vue_divider_vue___vue_css__, select_vue_divider_vue___vue_scopeId__, select_vue_divider_vue___vue_module_identifier__)
/* harmony default export */ var u_navbar_vue_select_vue_divider_vue = (select_vue_divider_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-navbar.vue/select.vue/index.js


var UNavbarSelect = {
    name: 'u-navbar-select',
    groupName: 'u-navbar-select-group',
    childName: 'u-navbar-select-item',
    extends: USelect
};





/* harmony default export */ var select_vue = (UNavbarSelect);
// CONCATENATED MODULE: ./src/components/u-navbar.vue/select.vue/index.js
var select_vue_cssModules = {};
function select_vue_injectStyle (ssrContext) {
select_vue_cssModules['$style'] = __webpack_require__("hmTu");
  this['$style'] = select_vue_cssModules['$style']

}
var select_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var select_vue___vue_html__ = null
/* template functional */
var select_vue___vue_template_functional__ = false
/* styles */
var select_vue___vue_css__ = select_vue_injectStyle
/* scopeId */
var select_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var select_vue___vue_module_identifier__ = null
var select_vue_Component = select_vue_normalizeComponent(select_vue, select_vue___vue_html__, select_vue___vue_template_functional__, select_vue___vue_css__, select_vue___vue_scopeId__, select_vue___vue_module_identifier__)
/* harmony default export */ var u_navbar_vue_select_vue = (select_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-navbar.vue/index.js


var UNavbar = {
    name: 'u-navbar',
    childName: 'u-navbar-item',
    extends: MSinglex,
    props: {
        router: { type: Boolean, default: true }
    },
    created: function created() {
        var _this = this;

        this.$on('select', function (_ref) {
            var itemVM = _ref.itemVM;
            return _this.router && itemVM.navigate();
        });
    }
};







/* harmony default export */ var u_navbar_vue = (UNavbar);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-4a8d3404","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-navbar.vue/index.html
var u_navbar_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,attrs:{"readonly":_vm.readonly,"disabled":_vm.disabled}},[_c('div',{class:_vm.$style.left},[_vm._t("left")],2),_c('div',{class:_vm.$style.right},[_vm._t("right")],2),_c('nav',{class:_vm.$style.middle},[_vm._t("default")],2)])}
var u_navbar_vue_staticRenderFns = []
var u_navbar_vue_esExports = { render: u_navbar_vue_render, staticRenderFns: u_navbar_vue_staticRenderFns }
/* harmony default export */ var components_u_navbar_vue = (u_navbar_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-navbar.vue/index.js
var u_navbar_vue_cssModules = {};
function u_navbar_vue_injectStyle (ssrContext) {
u_navbar_vue_cssModules['$style'] = __webpack_require__("zjLE");
  this['$style'] = u_navbar_vue_cssModules['$style']

}
var u_navbar_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_navbar_vue___vue_template_functional__ = false
/* styles */
var u_navbar_vue___vue_css__ = u_navbar_vue_injectStyle
/* scopeId */
var u_navbar_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_navbar_vue___vue_module_identifier__ = null
var u_navbar_vue_Component = u_navbar_vue_normalizeComponent(u_navbar_vue, components_u_navbar_vue, u_navbar_vue___vue_template_functional__, u_navbar_vue___vue_css__, u_navbar_vue___vue_scopeId__, u_navbar_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_navbar_vue = (u_navbar_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-number-input.vue/index.js





var UNumberInput = {
    name: 'u-number-input',
    mixins: [components_m_field_vue],
    directives: { repeatClick: repeatClick },
    props: {
        // 只能传入数字
        value: { type: [Number, String], default: 0 },
        defaultValue: Number,
        min: { type: Number, default: -Infinity },
        max: { type: Number, default: Infinity },
        step: { type: Number, default: 1, validator: function validator(step) {
                return step >= 0;
            } },
        precision: { type: Number, default: 1, validator: function validator(precision) {
                return precision > 0;
            } },
        formatter: { type: [String, Object] },
        fixOn: { type: String, default: 'blur' },
        hideButtons: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        var data = {
            currentValue: this.fix(this.value),
            // 格式化后的 value，与`<input>`中的实际值保持一致
            formattedValue: this.value,
            currentFormatter: undefined
        };

        if (this.formatter instanceof Object) data.currentFormatter = this.formatter;else if (typeof this.formatter === 'string') data.currentFormatter = new NumberFormatter(this.formatter);else data.currentFormatter = noopFormatter;

        // 初始值需要在最小值和最大值范围之内
        data.formattedValue = data.currentFormatter.format(data.currentValue);

        return data;
    },

    computed: {
        listeners: function listeners() {
            var listeners = Object.assign({}, this.$listeners);
            ['input', 'change', 'focus', 'blur', 'update:value'].forEach(function (prop) {
                delete listeners[prop];
            });
            return listeners;
        }
    },
    watch: {
        value: function value(_value, oldValue) {
            this.currentValue = this.fix(_value);
            this.formattedValue = this.currentFormatter.format(_value);
        }
    },
    created: function created() {
        this.debouncedInput = debounce_default()(this.input, 400);
        this.$emit('change', {
            value: this.fix(this.value),
            oldValue: undefined,
            formattedValue: this.fix(this.currentFormatter.format(this.value))
        }, this);
    },

    methods: {
        fix: function fix(value) {
            // 为空时使用默认值
            if (typeof value === 'string' && value.trim() === '' || value === null) value = this.defaultValue !== undefined ? this.defaultValue : this.currentValue || 0;else if (isNaN(value)) value = this.currentValue || this.defaultValue || 0;
            value = +value;
            // 精度约束
            value = Math.round(value / this.precision) * this.precision;
            // 最大最小约束
            value = Math.min(Math.max(this.min, value), this.max);
            // 保留小数位数
            value = +value.toFixed(this.precision < 1 ? -Math.floor(Math.log10(this.precision)) : 0);
            return value;
        },

        /**
         * 单纯输入
         * @param {*} value 输入值
         */
        input: function input(value) {
            if (this.readonly || this.disabled) return;
            value = this.fix(value);

            var oldValue = this.currentValue;
            this.currentValue = value;
            this.formattedValue = this.currentFormatter.format(value);
            this.$refs.input.currentValue = this.formattedValue;

            this.$emit('input', value, this);
            this.$emit('update:value', value, this);
            this.$emit('change', {
                value: value,
                oldValue: oldValue,
                formattedValue: this.formattedValue
            }, this);
        },

        /**
         * 按上下按钮发送 adjust 事件
         * @param {*} value
         */
        adjust: function adjust(value) {
            var oldValue = this.currentValue;

            var cancel = false;
            this.$emit('before-adjust', {
                value: value,
                oldValue: oldValue,
                formattedValue: this.currentFormatter.format(value),
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            }, this);
            if (cancel) return;

            this.input(value);
            this.$emit('adjust', {
                value: this.currentValue,
                oldValue: oldValue,
                formattedValue: this.formattedValue
            }, this);
        },
        increase: function increase() {
            this.adjust(+this.currentValue + this.step);
        },
        decrease: function decrease() {
            this.adjust(+this.currentValue - this.step);
        },
        onInput: function onInput(value) {
            if (this.fixOn === 'input') this.debouncedInput(this.currentFormatter.parse(value));else if (this.fixOn === 'blur') {
                // 这种情况下直接透传
                this.formattedValue = value;
                this.$emit('input', value, this);
                this.$emit('update:value', value, this);
                // @change 与 @input 保持一致
                this.$emit('change', {
                    value: value,
                    oldValue: this.currentValue,
                    formattedValue: this.currentFormatter.format(value)
                }, this);
            }
        },
        onFocus: function onFocus(e) {
            this.$emit('focus', e, this);
        },
        onBlur: function onBlur(e) {
            if (this.fixOn === 'blur') this.input(this.currentFormatter.parse(this.formattedValue));

            this.$emit('blur', e, this);
        },
        reset: function reset() {
            var oldValue = this.currentValue;

            var cancel = false;
            this.$emit('before-reset', {
                oldValue: oldValue,
                value: this.defaultValue,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            });
            if (cancel) return;

            this.currentValue = this.defaultValue;
            this.formattedValue = this.currentFormatter.format(this.defaultValue);
            this.$emit('input', this.defaultValue, this);
            this.$emit('update:value', this.defaultValue, this);

            this.$emit('reset', {
                oldValue: oldValue,
                value: this.defaultValue
            }, this);

            this.$emit('change', {
                value: this.defaultValue,
                oldValue: oldValue,
                formattedValue: this.formattedValue
            });
        }
    }
};

/* harmony default export */ var u_number_input_vue = (UNumberInput);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-2907e5d6","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-number-input.vue/index.html
var u_number_input_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-input',_vm._g(_vm._b({ref:"input",class:_vm.$style.root,attrs:{"value":_vm.formattedValue,"readonly":_vm.readonly,"disabled":_vm.disabled},on:{"input":_vm.onInput,"focus":_vm.onFocus,"blur":_vm.onBlur},nativeOn:{"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }return _vm.increase($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }return _vm.decrease($event)}]}},'u-input',_vm.$attrs,false),_vm.listeners),[(!_vm.hideButtons)?_c('span',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.increase),expression:"increase"}],class:_vm.$style.button,attrs:{"disabled":_vm.currentValue >= _vm.max,"role":"up","tabindex":"0"},on:{"keydown":function($event){$event.preventDefault();}}}):_vm._e(),(!_vm.hideButtons)?_c('span',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.decrease),expression:"decrease"}],class:_vm.$style.button,attrs:{"disabled":_vm.currentValue <= _vm.min,"role":"down","tabindex":"0"},on:{"keydown":function($event){$event.preventDefault();}}}):_vm._e(),_vm._t("default")],2)}
var u_number_input_vue_staticRenderFns = []
var u_number_input_vue_esExports = { render: u_number_input_vue_render, staticRenderFns: u_number_input_vue_staticRenderFns }
/* harmony default export */ var components_u_number_input_vue = (u_number_input_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-number-input.vue/index.js
var u_number_input_vue_cssModules = {};
function u_number_input_vue_injectStyle (ssrContext) {
u_number_input_vue_cssModules['$style'] = __webpack_require__("GC8L");
  this['$style'] = u_number_input_vue_cssModules['$style']

}
var u_number_input_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_number_input_vue___vue_template_functional__ = false
/* styles */
var u_number_input_vue___vue_css__ = u_number_input_vue_injectStyle
/* scopeId */
var u_number_input_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_number_input_vue___vue_module_identifier__ = null
var u_number_input_vue_Component = u_number_input_vue_normalizeComponent(u_number_input_vue, components_u_number_input_vue, u_number_input_vue___vue_template_functional__, u_number_input_vue___vue_css__, u_number_input_vue___vue_scopeId__, u_number_input_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_number_input_vue = (u_number_input_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-pagination.vue/index.js
var UPagination = {
    name: 'u-pagination',
    props: {
        total: { type: Number, default: 11, validator: function validator(value) {
                return Number.isInteger(value) && value >= 0;
            } },
        page: { type: Number, default: 1, validator: function validator(value) {
                return Number.isInteger(value) && value > 0;
            } },
        side: { type: Number, default: 2, validator: function validator(value) {
                return Number.isInteger(value) && value > 0;
            } },
        around: { type: Number, default: 5, validator: function validator(value) {
                return Number.isInteger(value) && value > 0 && value % 2 === 1;
            } },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            currentPage: this.page
        };
    },

    watch: {
        page: function page(_page) {
            this.currentPage = _page;
        },
        currentPage: function currentPage(page, oldPage) {
            this.$emit('change', { page: page, oldPage: oldPage }, this);
        }
    },
    computed: {
        pages: function pages() {
            var pages = [];

            var part = this.around >> 1;
            var start = this.currentPage - part;
            var end = start + this.around - 1;
            if (start < 1) {
                end += 1 - start;
                start = 1;
            } else if (end > this.total) {
                start -= end - this.total;
                end = this.total;
            }

            start = Math.max(1, Math.min(start, this.total - this.side + 1));
            end = Math.min(this.total, Math.max(end, this.side));

            var page = 1;
            while (page <= this.total) {
                if (page <= this.side || page >= start && page <= end || page > this.total - this.side) pages.push(page);else {
                    pages.push(undefined);

                    if (page < start) page = start - 1;
                    if (page > end) page = this.total - this.side;
                }

                page++;
            }

            return pages;
        }
    },
    methods: {
        select: function select(page) {
            if (this.readonly || this.disabled) return;

            if (page < 1 || page > this.total || page === this.currentPage) return;

            var oldPage = this.currentPage;

            var cancel = false;
            this.$emit('before-select', {
                page: page,
                oldPage: oldPage,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            }, this);
            if (cancel) return;

            this.currentPage = page;

            this.$emit('update:page', page, this);
            this.$emit('select', {
                page: page,
                oldPage: oldPage
            }, this);
        }
    }
};

/* harmony default export */ var u_pagination_vue = (UPagination);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-33dbba9f","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-pagination.vue/index.html
var u_pagination_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{class:_vm.$style.root,attrs:{"disabled":_vm.disabled}},[_c('a',{class:_vm.$style.item,attrs:{"role":"prev","disabled":_vm.currentPage <= 1},on:{"click":function($event){return _vm.select(_vm.currentPage - 1)}}}),_vm._l((_vm.pages),function(page){return [(page)?_c('a',{class:_vm.$style.item,attrs:{"selected":_vm.currentPage === page},on:{"click":function($event){return _vm.select(page)}}},[_vm._v(_vm._s(page))]):_c('a',{class:_vm.$style.item,attrs:{"role":"blank"}},[_vm._v("...")])]}),_c('a',{class:_vm.$style.item,attrs:{"role":"next","disabled":_vm.currentPage >= _vm.total},on:{"click":function($event){return _vm.select(_vm.currentPage + 1)}}}),_vm._t("default")],2)}
var u_pagination_vue_staticRenderFns = []
var u_pagination_vue_esExports = { render: u_pagination_vue_render, staticRenderFns: u_pagination_vue_staticRenderFns }
/* harmony default export */ var components_u_pagination_vue = (u_pagination_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-pagination.vue/index.js
var u_pagination_vue_cssModules = {};
function u_pagination_vue_injectStyle (ssrContext) {
u_pagination_vue_cssModules['$style'] = __webpack_require__("E897");
  this['$style'] = u_pagination_vue_cssModules['$style']

}
var u_pagination_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_pagination_vue___vue_template_functional__ = false
/* styles */
var u_pagination_vue___vue_css__ = u_pagination_vue_injectStyle
/* scopeId */
var u_pagination_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_pagination_vue___vue_module_identifier__ = null
var u_pagination_vue_Component = u_pagination_vue_normalizeComponent(u_pagination_vue, components_u_pagination_vue, u_pagination_vue___vue_template_functional__, u_pagination_vue___vue_css__, u_pagination_vue___vue_scopeId__, u_pagination_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_pagination_vue = (u_pagination_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-popup.vue/index.js


var UPopup = {
    name: 'u-popup',
    extends: src_components_m_popper_vue,
    props: {
        title: String,
        content: String,
        // @inherit: opened
        // @inherit: trigger: { type: String, default: 'click' },
        // @inherit: placement: { type: String, default: 'bottom-start' },
        // @inherit: reference: HTMLElement, // 为了方便生成指令
        // @inherit: followCursor: { type: [Boolean, Number, Object], default: false },
        // @inherit: hideDelay: { type: Number, default: 0 },
        // @inherit: offset: { type: String, default: '0' },
        disabled: { type: Boolean, default: false },
        mergeBorders: { type: Boolean, default: true }
    }
};

/* harmony default export */ var u_popup_vue = (UPopup);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-173ef00b","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-popup.vue/index.html
var u_popup_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentOpened),expression:"currentOpened"}],class:_vm.$style.root,attrs:{"merge-borders":_vm.mergeBorders}},[_c('span',{class:_vm.$style.arrow}),_vm._t("root",[(_vm.title || _vm.$slots.head || _vm.$slots.title)?_c('div',{class:_vm.$style.head},[_vm._t("head",[_c('div',{class:_vm.$style.title},[_vm._t("title",[_vm._v(_vm._s(_vm.title))])],2)])],2):_vm._e(),(_vm.content || _vm.$slots.body || _vm.$slots.default)?_c('div',{class:_vm.$style.body},[_vm._t("body",[_vm._t("default",[_vm._v(_vm._s(_vm.content))])])],2):_vm._e(),(_vm.$slots.foot)?_c('div',{class:_vm.$style.foot},[_vm._t("foot")],2):_vm._e()])],2)}
var u_popup_vue_staticRenderFns = []
var u_popup_vue_esExports = { render: u_popup_vue_render, staticRenderFns: u_popup_vue_staticRenderFns }
/* harmony default export */ var components_u_popup_vue = (u_popup_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-popup.vue/index.js
var u_popup_vue_cssModules = {};
function u_popup_vue_injectStyle (ssrContext) {
u_popup_vue_cssModules['$style'] = __webpack_require__("Ha8T");
  this['$style'] = u_popup_vue_cssModules['$style']

}
var u_popup_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_popup_vue___vue_template_functional__ = false
/* styles */
var u_popup_vue___vue_css__ = u_popup_vue_injectStyle
/* scopeId */
var u_popup_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_popup_vue___vue_module_identifier__ = null
var u_popup_vue_Component = u_popup_vue_normalizeComponent(u_popup_vue, components_u_popup_vue, u_popup_vue___vue_template_functional__, u_popup_vue___vue_css__, u_popup_vue___vue_scopeId__, u_popup_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_popup_vue = (u_popup_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-radios.vue/radio.vue/index.js



var URadio = {
    name: 'u-radio',
    parentName: 'u-radios',
    mixins: [MChild, components_m_field_vue],
    props: {
        value: { type: Boolean, default: false },
        label: null,
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            // inherit: parentVM: undefined,
        };
    },

    computed: {
        listeners: function listeners() {
            var listeners = Object.assign({}, this.$listeners);
            delete listeners.focus;
            delete listeners.blur;
            return listeners;
        },
        selected: function selected() {
            return this.parentVM ? this.parentVM.selectedVM === this : this.value;
        },
        currentDisabled: function currentDisabled() {
            return this.disabled || this.parentVM && this.parentVM.disabled;
        }
    },
    methods: {
        onFocus: function onFocus(e) {
            this.$emit('focus', e, this);
        },
        onBlur: function onBlur(e) {
            this.$emit('blur', e, this);
        },
        select: function select() {
            if (this.readonly || this.disabled) return;
            if (this.parentVM && (this.parentVM.readonly || this.parentVM.disabled)) return;

            var cancel = false;
            this.$emit('before-select', {
                label: this.label,
                itemVM: this,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            }, this);
            if (cancel) return;

            this.parentVM && this.parentVM.select(this);
        }
    }
};

/* harmony default export */ var radio_vue = (URadio);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-49d7140e","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-radios.vue/radio.vue/index.html
var radio_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',_vm._g({class:_vm.$style.root,attrs:{"disabled":_vm.currentDisabled,"tabindex":"0"},on:{"click":function($event){return _vm.select()},"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])){ return null; }$event.preventDefault();},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])){ return null; }$event.preventDefault();return _vm.select()},"focus":_vm.onFocus,"blur":_vm.onBlur}},_vm.listeners),[_c('span',{class:_vm.$style.radio,attrs:{"selected":_vm.selected,"disabled":_vm.currentDisabled}}),_vm._t("default")],2)}
var radio_vue_staticRenderFns = []
var radio_vue_esExports = { render: radio_vue_render, staticRenderFns: radio_vue_staticRenderFns }
/* harmony default export */ var u_radios_vue_radio_vue = (radio_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-radios.vue/radio.vue/index.js
var radio_vue_cssModules = {};
function radio_vue_injectStyle (ssrContext) {
radio_vue_cssModules['$style'] = __webpack_require__("yydL");
  this['$style'] = radio_vue_cssModules['$style']

}
var radio_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var radio_vue___vue_template_functional__ = false
/* styles */
var radio_vue___vue_css__ = radio_vue_injectStyle
/* scopeId */
var radio_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var radio_vue___vue_module_identifier__ = null
var radio_vue_Component = radio_vue_normalizeComponent(radio_vue, u_radios_vue_radio_vue, radio_vue___vue_template_functional__, radio_vue___vue_css__, radio_vue___vue_scopeId__, radio_vue___vue_module_identifier__)
/* harmony default export */ var components_u_radios_vue_radio_vue = (radio_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-radios.vue/index.js



var URadios = {
    name: 'u-radios',
    childName: 'u-radio',
    mixins: [MParent, components_m_field_vue],
    props: {
        value: null,
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            // inherit: itemVMs: [],
            selectedVM: undefined
        };
    },

    watch: {
        value: function value(_value, oldValue) {
            this.watchValue(_value);
        },
        selectedVM: function selectedVM(_selectedVM, oldVM) {
            this.$emit('change', {
                value: _selectedVM ? _selectedVM.label : undefined,
                oldValue: oldVM ? oldVM.label : undefined,
                item: _selectedVM ? _selectedVM.item : undefined,
                itemVM: _selectedVM
            }, this);
        },
        itemVMs: function itemVMs() {
            this.selectedVM = undefined;
            this.watchValue(this.value);
        }
    },
    mounted: function mounted() {
        this.watchValue(this.value);
    },

    methods: {
        watchValue: function watchValue(value) {
            if (this.selectedVM && this.selectedVM.label === value) return;
            if (value === undefined) this.selectedVM = undefined;else this.selectedVM = this.itemVMs.find(function (itemVM) {
                return itemVM.label === value;
            });
        },
        select: function select(itemVM) {
            if (this.readonly || this.disabled) return;

            var oldValue = this.value;

            var cancel = false;
            this.$emit('before-select', {
                value: itemVM && itemVM.label,
                oldValue: oldValue,
                itemVM: itemVM,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            }, this);
            if (cancel) return;

            if (this.cancelable && this.selectedVM === itemVM) this.selectedVM = undefined;else this.selectedVM = itemVM;

            var value = this.selectedVM && this.selectedVM.label;

            this.$emit('input', value, this);
            this.$emit('update:value', value, this);
            this.$emit('select', {
                value: value,
                oldValue: oldValue,
                itemVM: this.selectedVM
            }, this);
        }
    }
};



/* harmony default export */ var u_radios_vue = (URadios);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-cd29ed1a","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-radios.vue/index.html
var u_radios_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_vm._t("default")],2)}
var u_radios_vue_staticRenderFns = []
var u_radios_vue_esExports = { render: u_radios_vue_render, staticRenderFns: u_radios_vue_staticRenderFns }
/* harmony default export */ var components_u_radios_vue = (u_radios_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-radios.vue/index.js
var u_radios_vue_cssModules = {};
function u_radios_vue_injectStyle (ssrContext) {
u_radios_vue_cssModules['$style'] = __webpack_require__("Hs1Z");
  this['$style'] = u_radios_vue_cssModules['$style']

}
var u_radios_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_radios_vue___vue_template_functional__ = false
/* styles */
var u_radios_vue___vue_css__ = u_radios_vue_injectStyle
/* scopeId */
var u_radios_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_radios_vue___vue_module_identifier__ = null
var u_radios_vue_Component = u_radios_vue_normalizeComponent(u_radios_vue, components_u_radios_vue, u_radios_vue___vue_template_functional__, u_radios_vue___vue_css__, u_radios_vue___vue_scopeId__, u_radios_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_radios_vue = (u_radios_vue_Component.exports);
// EXTERNAL MODULE: ./src/components/u-region-select.vue/i18n/en-US.json
var u_region_select_vue_i18n_en_US = __webpack_require__("w4Yw");
var u_region_select_vue_i18n_en_US_default = /*#__PURE__*/__webpack_require__.n(u_region_select_vue_i18n_en_US);

// EXTERNAL MODULE: ./src/components/u-region-select.vue/i18n/zh-CN.json
var u_region_select_vue_i18n_zh_CN = __webpack_require__("ZWAe");
var u_region_select_vue_i18n_zh_CN_default = /*#__PURE__*/__webpack_require__.n(u_region_select_vue_i18n_zh_CN);

// CONCATENATED MODULE: ./src/components/u-region-select.vue/i18n/index.js



/* harmony default export */ var u_region_select_vue_i18n = ({
    messages: {
        'en-US': u_region_select_vue_i18n_en_US_default.a,
        'zh-CN': u_region_select_vue_i18n_zh_CN_default.a
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-region-select.vue/index.js



var URegionSelect = {
    name: 'u-region-select',
    extends: src_components_u_cascade_select_vue,
    i18n: u_region_select_vue_i18n,
    props: {
        field: { type: String, default: 'value' },
        categories: { type: Array, default: function _default() {
                return [{ label: this.$t('province') }, { label: this.$t('city') }, { label: this.$t('district') }];
            }
        }
    },
    created: function created() {
        var _this = this;

        __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "/6lY")).then(function (region) {
            return _this.currentData = region;
        });
    }
};

/* harmony default export */ var u_region_select_vue = (URegionSelect);
// CONCATENATED MODULE: ./src/components/u-region-select.vue/index.js
var u_region_select_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var u_region_select_vue___vue_html__ = null
/* template functional */
var u_region_select_vue___vue_template_functional__ = false
/* styles */
var u_region_select_vue___vue_css__ = null
/* scopeId */
var u_region_select_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_region_select_vue___vue_module_identifier__ = null
var u_region_select_vue_Component = u_region_select_vue_normalizeComponent(u_region_select_vue, u_region_select_vue___vue_html__, u_region_select_vue___vue_template_functional__, u_region_select_vue___vue_css__, u_region_select_vue___vue_scopeId__, u_region_select_vue___vue_module_identifier__)
/* harmony default export */ var components_u_region_select_vue = (u_region_select_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-sample.vue/index.js
var USample = {
    name: 'u-sample'
};

/* harmony default export */ var u_sample_vue = (USample);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-7b2347ae","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-sample.vue/index.html
var u_sample_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_vm._t("default")],2)}
var u_sample_vue_staticRenderFns = []
var u_sample_vue_esExports = { render: u_sample_vue_render, staticRenderFns: u_sample_vue_staticRenderFns }
/* harmony default export */ var components_u_sample_vue = (u_sample_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-sample.vue/index.js
var u_sample_vue_cssModules = {};
function u_sample_vue_injectStyle (ssrContext) {
u_sample_vue_cssModules['$style'] = __webpack_require__("f3yU");
  this['$style'] = u_sample_vue_cssModules['$style']

}
var u_sample_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_sample_vue___vue_template_functional__ = false
/* styles */
var u_sample_vue___vue_css__ = u_sample_vue_injectStyle
/* scopeId */
var u_sample_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_sample_vue___vue_module_identifier__ = null
var u_sample_vue_Component = u_sample_vue_normalizeComponent(u_sample_vue, components_u_sample_vue, u_sample_vue___vue_template_functional__, u_sample_vue___vue_css__, u_sample_vue___vue_scopeId__, u_sample_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_sample_vue = (u_sample_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-sidebar.vue/item.vue/index.js


var USidebarItem = {
    name: 'u-sidebar-item',
    parentName: 'u-sidebar',
    groupName: 'u-sidebar-group',
    extends: MSinglexItem,
    watch: {
        active: function active(_active) {
            this.watchActive(_active);
        }
    },
    mounted: function mounted() {
        this.watchActive(this.active);
    },

    methods: {
        watchActive: function watchActive(active) {
            active && this.groupVM && this.groupVM.toggle(true);
        }
    }
};

/* harmony default export */ var u_sidebar_vue_item_vue = (USidebarItem);
// CONCATENATED MODULE: ./src/components/u-sidebar.vue/item.vue/index.js
var u_sidebar_vue_item_vue_cssModules = {};
function u_sidebar_vue_item_vue_injectStyle (ssrContext) {
u_sidebar_vue_item_vue_cssModules['$style'] = __webpack_require__("DMXm");
  this['$style'] = u_sidebar_vue_item_vue_cssModules['$style']

}
var u_sidebar_vue_item_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var u_sidebar_vue_item_vue___vue_html__ = null
/* template functional */
var u_sidebar_vue_item_vue___vue_template_functional__ = false
/* styles */
var u_sidebar_vue_item_vue___vue_css__ = u_sidebar_vue_item_vue_injectStyle
/* scopeId */
var u_sidebar_vue_item_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_sidebar_vue_item_vue___vue_module_identifier__ = null
var u_sidebar_vue_item_vue_Component = u_sidebar_vue_item_vue_normalizeComponent(u_sidebar_vue_item_vue, u_sidebar_vue_item_vue___vue_html__, u_sidebar_vue_item_vue___vue_template_functional__, u_sidebar_vue_item_vue___vue_css__, u_sidebar_vue_item_vue___vue_scopeId__, u_sidebar_vue_item_vue___vue_module_identifier__)
/* harmony default export */ var components_u_sidebar_vue_item_vue = (u_sidebar_vue_item_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-sidebar.vue/group.vue/index.js


var USidebarGroup = {
    name: 'u-sidebar-group',
    parentName: 'u-sidebar',
    childName: 'u-sidebar-item',
    extends: MGroup
};

/* harmony default export */ var u_sidebar_vue_group_vue = (USidebarGroup);
// CONCATENATED MODULE: ./src/components/u-sidebar.vue/group.vue/index.js
var u_sidebar_vue_group_vue_cssModules = {};
function u_sidebar_vue_group_vue_injectStyle (ssrContext) {
u_sidebar_vue_group_vue_cssModules['$style'] = __webpack_require__("nwPy");
  this['$style'] = u_sidebar_vue_group_vue_cssModules['$style']

}
var u_sidebar_vue_group_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var u_sidebar_vue_group_vue___vue_html__ = null
/* template functional */
var u_sidebar_vue_group_vue___vue_template_functional__ = false
/* styles */
var u_sidebar_vue_group_vue___vue_css__ = u_sidebar_vue_group_vue_injectStyle
/* scopeId */
var u_sidebar_vue_group_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_sidebar_vue_group_vue___vue_module_identifier__ = null
var u_sidebar_vue_group_vue_Component = u_sidebar_vue_group_vue_normalizeComponent(u_sidebar_vue_group_vue, u_sidebar_vue_group_vue___vue_html__, u_sidebar_vue_group_vue___vue_template_functional__, u_sidebar_vue_group_vue___vue_css__, u_sidebar_vue_group_vue___vue_scopeId__, u_sidebar_vue_group_vue___vue_module_identifier__)
/* harmony default export */ var components_u_sidebar_vue_group_vue = (u_sidebar_vue_group_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-sidebar.vue/divider.vue/index.js
var USidebarDivider = {
    name: 'u-sidebar-divider'
};

/* harmony default export */ var u_sidebar_vue_divider_vue = (USidebarDivider);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-5b9cb090","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-sidebar.vue/divider.vue/index.html
var u_sidebar_vue_divider_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root})}
var u_sidebar_vue_divider_vue_staticRenderFns = []
var u_sidebar_vue_divider_vue_esExports = { render: u_sidebar_vue_divider_vue_render, staticRenderFns: u_sidebar_vue_divider_vue_staticRenderFns }
/* harmony default export */ var components_u_sidebar_vue_divider_vue = (u_sidebar_vue_divider_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-sidebar.vue/divider.vue/index.js
var u_sidebar_vue_divider_vue_cssModules = {};
function u_sidebar_vue_divider_vue_injectStyle (ssrContext) {
u_sidebar_vue_divider_vue_cssModules['$style'] = __webpack_require__("1cvr");
  this['$style'] = u_sidebar_vue_divider_vue_cssModules['$style']

}
var u_sidebar_vue_divider_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_sidebar_vue_divider_vue___vue_template_functional__ = false
/* styles */
var u_sidebar_vue_divider_vue___vue_css__ = u_sidebar_vue_divider_vue_injectStyle
/* scopeId */
var u_sidebar_vue_divider_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_sidebar_vue_divider_vue___vue_module_identifier__ = null
var u_sidebar_vue_divider_vue_Component = u_sidebar_vue_divider_vue_normalizeComponent(u_sidebar_vue_divider_vue, components_u_sidebar_vue_divider_vue, u_sidebar_vue_divider_vue___vue_template_functional__, u_sidebar_vue_divider_vue___vue_css__, u_sidebar_vue_divider_vue___vue_scopeId__, u_sidebar_vue_divider_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_sidebar_vue_divider_vue = (u_sidebar_vue_divider_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-sidebar.vue/index.js



var USidebar = {
    name: 'u-sidebar',
    groupName: 'u-sidebar-group',
    childName: 'u-sidebar-item',
    mixins: [src_components_m_singlex_vue, MGroupParent],
    props: {
        router: { type: Boolean, default: true }
    },
    created: function created() {
        var _this = this;

        this.$on('select', function (_ref) {
            var itemVM = _ref.itemVM;
            return _this.router && itemVM.navigate();
        });
    }
};





/* harmony default export */ var u_sidebar_vue = (USidebar);
// CONCATENATED MODULE: ./src/components/u-sidebar.vue/index.js
var u_sidebar_vue_cssModules = {};
function u_sidebar_vue_injectStyle (ssrContext) {
u_sidebar_vue_cssModules['$style'] = __webpack_require__("p5qf");
  this['$style'] = u_sidebar_vue_cssModules['$style']

}
var u_sidebar_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var u_sidebar_vue___vue_html__ = null
/* template functional */
var u_sidebar_vue___vue_template_functional__ = false
/* styles */
var u_sidebar_vue___vue_css__ = u_sidebar_vue_injectStyle
/* scopeId */
var u_sidebar_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_sidebar_vue___vue_module_identifier__ = null
var u_sidebar_vue_Component = u_sidebar_vue_normalizeComponent(u_sidebar_vue, u_sidebar_vue___vue_html__, u_sidebar_vue___vue_template_functional__, u_sidebar_vue___vue_css__, u_sidebar_vue___vue_scopeId__, u_sidebar_vue___vue_module_identifier__)
/* harmony default export */ var components_u_sidebar_vue = (u_sidebar_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-slider.vue/index.js


var USlider = {
    name: 'u-slider',
    mixins: [components_m_field_vue],
    props: {
        value: { type: Number, default: 0 },
        min: { type: Number, default: 0 },
        max: { type: Number, default: 100 },
        step: { type: Number, default: 1 },
        precision: { type: Number, default: 1, validator: function validator(precision) {
                return precision > 0;
            } },
        // @TODO: 以后再考虑复杂的范围情况
        range: { type: Array, default: function _default() {
                return [];
            }
        },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            currentValue: this.value,
            currentRange: this.normalizeRange(this.range),
            grid: { x: 0, y: 0 },
            handleEl: undefined
        };
    },

    watch: {
        value: function value(_value) {
            this.currentValue = _value;
            this.handleEl.style.left = this.percent + '%';
        },
        currentValue: function currentValue(value, oldValue) {
            value = +value;

            this.$emit('change', { value: value, oldValue: oldValue }, this);
        },
        range: function range(_range) {
            this.currentRange = this.normalizeRange(_range);
        },
        min: function min(value) {
            this.handleEl.style.left = this.percent + '%';
        },
        max: function max(value) {
            this.handleEl.style.left = this.percent + '%';
        }
    },
    computed: {
        percent: {
            get: function get() {
                return (this.currentValue - this.min) / (this.max - this.min) * 100;
            },
            set: function set(percent) {
                var value = this.fix(+this.min + (this.max - this.min) * percent / 100);

                this.currentValue = value;
                this.$emit('input', value, this);
                this.$emit('update:value', value, this);
            }
        },
        rangeStartPercent: function rangeStartPercent() {
            var start = Math.max(this.currentRange[0], this.min);
            return (start - this.min) / (this.max - this.min) * 100;
        },
        rangeEndPercent: function rangeEndPercent() {
            var end = Math.min(this.currentRange[1], this.max);
            return (this.max - end) / (this.max - this.min) * 100;
        }
    },
    mounted: function mounted() {
        this.handleEl = this.$refs.handle;
        this.handleEl.style.left = this.percent + '%';
    },

    methods: {
        normalizeRange: function normalizeRange(range) {
            range = Array.from(range);
            if (range[0] === undefined) range[0] = -Infinity;
            if (range[1] === undefined) range[1] = Infinity;
            return range;
        },
        fix: function fix(value) {
            // 刻度约束
            this.step && (value = Math.round(value / this.step) * this.step);
            // 范围约束
            value = Math.min(Math.max(this.currentRange[0], value), this.currentRange[1]);
            // 最大最小约束
            value = Math.min(Math.max(this.min, value), this.max);
            // 保留小数位数
            value = +value.toFixed(this.precision < 1 ? -Math.log10(this.precision) : 0);
            return value;
        },
        onDragStart: function onDragStart($event) {
            this.grid.x = this.step / (this.max - this.min) * $event.range.width;

            var oldValue = this.currentValue;
            this.percent = $event.left / $event.range.width * 100;
            var percent = this.percent;
            this.handleEl.style.left = percent + '%';
            this.$emit('slide', {
                oldValue: oldValue,
                value: this.currentValue,
                percent: percent
            }, this);
        },
        onDrag: function onDrag($event) {
            var oldValue = this.currentValue;
            this.percent = $event.left / $event.range.width * 100;
            var percent = this.percent;
            this.handleEl.style.left = percent + '%';
            this.$emit('slide', {
                oldValue: oldValue,
                value: this.currentValue,
                percent: percent
            }, this);
        }
    }
};

/* harmony default export */ var u_slider_vue = (USlider);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-414d4ae2","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-slider.vue/index.html
var u_slider_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,attrs:{"disabled":_vm.disabled}},[_c('div',{class:_vm.$style.body},[_c('div',{class:_vm.$style.track},[_c('div',{class:_vm.$style.trail,style:({ width: _vm.percent + '%' })}),(_vm.rangeStartPercent)?_c('div',{class:_vm.$style.bound,style:({ width: _vm.rangeStartPercent + '%' }),attrs:{"role":"start"}}):_vm._e(),(_vm.rangeEndPercent)?_c('div',{class:_vm.$style.bound,style:({ width: _vm.rangeEndPercent + '%' }),attrs:{"role":"end"}}):_vm._e()]),_c('f-dragger',{attrs:{"disabled":_vm.readonly || _vm.disabled,"immediate":"","axis":"horizontal","grid":_vm.grid,"source":"offset-parent","range":"offset-parent","range-mode":"center"},on:{"dragstart":function($event){return _vm.onDragStart($event)},"drag":function($event){return _vm.onDrag($event)}}},[_c('div',{ref:"handle",class:_vm.$style.handle})])],1)])}
var u_slider_vue_staticRenderFns = []
var u_slider_vue_esExports = { render: u_slider_vue_render, staticRenderFns: u_slider_vue_staticRenderFns }
/* harmony default export */ var components_u_slider_vue = (u_slider_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-slider.vue/index.js
var u_slider_vue_cssModules = {};
function u_slider_vue_injectStyle (ssrContext) {
u_slider_vue_cssModules['$style'] = __webpack_require__("QBxi");
  this['$style'] = u_slider_vue_cssModules['$style']

}
var u_slider_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_slider_vue___vue_template_functional__ = false
/* styles */
var u_slider_vue___vue_css__ = u_slider_vue_injectStyle
/* scopeId */
var u_slider_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_slider_vue___vue_module_identifier__ = null
var u_slider_vue_Component = u_slider_vue_normalizeComponent(u_slider_vue, components_u_slider_vue, u_slider_vue___vue_template_functional__, u_slider_vue___vue_css__, u_slider_vue___vue_scopeId__, u_slider_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_slider_vue = (u_slider_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-spinner.vue/index.js
var USpinner = {
    name: 'u-spinner'
};

/* harmony default export */ var u_spinner_vue = (USpinner);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-8efd372c","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-spinner.vue/index.html
var u_spinner_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_vm._t("default")],2)}
var u_spinner_vue_staticRenderFns = []
var u_spinner_vue_esExports = { render: u_spinner_vue_render, staticRenderFns: u_spinner_vue_staticRenderFns }
/* harmony default export */ var components_u_spinner_vue = (u_spinner_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-spinner.vue/index.js
var u_spinner_vue_cssModules = {};
function u_spinner_vue_injectStyle (ssrContext) {
u_spinner_vue_cssModules['$style'] = __webpack_require__("jT7S");
  this['$style'] = u_spinner_vue_cssModules['$style']

}
var u_spinner_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_spinner_vue___vue_template_functional__ = false
/* styles */
var u_spinner_vue___vue_css__ = u_spinner_vue_injectStyle
/* scopeId */
var u_spinner_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_spinner_vue___vue_module_identifier__ = null
var u_spinner_vue_Component = u_spinner_vue_normalizeComponent(u_spinner_vue, components_u_spinner_vue, u_spinner_vue___vue_template_functional__, u_spinner_vue___vue_css__, u_spinner_vue___vue_scopeId__, u_spinner_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_spinner_vue = (u_spinner_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-tabs.vue/tab.vue/index.js


var UTab = {
    name: 'u-tab',
    parentName: 'u-tabs',
    extends: MSinglexItem,
    props: {
        title: String,
        /* @TODO: Remove this option */
        hidden: { type: Boolean, default: false }
    },
    computed: {
        selected: function selected() {
            if (this.parentVM) return this.parentVM.router ? this.active : this.parentVM.selectedVM === this;
        }
    }
};

/* harmony default export */ var tab_vue = (UTab);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-9e42f138","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-tabs.vue/tab.vue/index.html
var tab_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.selected),expression:"selected"}]},[_vm._t("default")],2)}
var tab_vue_staticRenderFns = []
var tab_vue_esExports = { render: tab_vue_render, staticRenderFns: tab_vue_staticRenderFns }
/* harmony default export */ var u_tabs_vue_tab_vue = (tab_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-tabs.vue/tab.vue/index.js
var tab_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var tab_vue___vue_template_functional__ = false
/* styles */
var tab_vue___vue_css__ = null
/* scopeId */
var tab_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var tab_vue___vue_module_identifier__ = null
var tab_vue_Component = tab_vue_normalizeComponent(tab_vue, u_tabs_vue_tab_vue, tab_vue___vue_template_functional__, tab_vue___vue_css__, tab_vue___vue_scopeId__, tab_vue___vue_module_identifier__)
/* harmony default export */ var components_u_tabs_vue_tab_vue = (tab_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-tabs.vue/index.js


var UTabs = {
    name: 'u-tabs',
    childName: 'u-tab',
    extends: MSinglex,
    props: {
        autoSelect: { type: Boolean, default: true },
        closable: { type: Boolean, default: false },
        router: { type: Boolean, default: false }
    },
    created: function created() {
        var _this = this;

        this.$on('select', function ($event) {
            _this.router && $event.itemVM.navigate();
        });
    },

    methods: {
        close: function close(itemVM) {
            if (this.readonly || this.disabled || itemVM.disabled) return;

            var oldValue = this.value;

            var cancel = false;
            this.$emit('before-close', {
                value: itemVM && itemVM.value,
                oldValue: oldValue,
                itemVM: itemVM,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            }, this);
            if (cancel) return;

            itemVM.parentVM = undefined;
            var index = this.itemVMs.indexOf(itemVM);
            this.itemVMs.splice(index, 1);

            cancel = false;
            this.$emit('close', {
                value: itemVM && itemVM.value,
                oldValue: oldValue,
                itemVM: itemVM,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            }, this);
            if (cancel) return;

            if (this.selectedVM === itemVM) {
                this.selectedVM = this.itemVMs[index] || this.itemVMs[index - 1];
                var value = this.selectedVM && this.selectedVM.value;
                this.$emit('input', value, this);
                this.$emit('update:value', value, this);
            }
        }
    }
};



/* harmony default export */ var u_tabs_vue = (UTabs);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-456ee2ed","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-tabs.vue/index.html
var u_tabs_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,attrs:{"disabled":_vm.disabled}},[_c('nav',{class:_vm.$style.head},[_vm._l((_vm.itemVMs),function(itemVM){return _c('a',{directives:[{name:"show",rawName:"v-show",value:(!itemVM.hidden),expression:"!itemVM.hidden"}],class:_vm.$style.item,attrs:{"title":itemVM.title,"selected":_vm.router ? itemVM.active : itemVM === _vm.selectedVM,"disabled":itemVM.disabled || _vm.disabled},on:{"click":function($event){return _vm.select(itemVM)}}},[_c('span',{class:_vm.$style.title},[_c('f-render',{attrs:{"vnode":itemVM.$slots.title}},[_vm._v(_vm._s(itemVM.title))])],1),(_vm.closable)?_c('span',{class:_vm.$style.close,on:{"click":function($event){$event.stopPropagation();return _vm.close(itemVM)}}}):_vm._e()])}),_c('span',{class:_vm.$style.extra},[_vm._t("extra")],2)],2),_c('div',{class:_vm.$style.body},[_vm._t("default")],2)])}
var u_tabs_vue_staticRenderFns = []
var u_tabs_vue_esExports = { render: u_tabs_vue_render, staticRenderFns: u_tabs_vue_staticRenderFns }
/* harmony default export */ var components_u_tabs_vue = (u_tabs_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-tabs.vue/index.js
var u_tabs_vue_cssModules = {};
function u_tabs_vue_injectStyle (ssrContext) {
u_tabs_vue_cssModules['$style'] = __webpack_require__("ggS9");
  this['$style'] = u_tabs_vue_cssModules['$style']

}
var u_tabs_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_tabs_vue___vue_template_functional__ = false
/* styles */
var u_tabs_vue___vue_css__ = u_tabs_vue_injectStyle
/* scopeId */
var u_tabs_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_tabs_vue___vue_module_identifier__ = null
var u_tabs_vue_Component = u_tabs_vue_normalizeComponent(u_tabs_vue, components_u_tabs_vue, u_tabs_vue___vue_template_functional__, u_tabs_vue___vue_css__, u_tabs_vue___vue_scopeId__, u_tabs_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_tabs_vue = (u_tabs_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-steps.vue/step.vue/index.js


var UStep = {
    name: 'u-step',
    parentName: 'u-steps',
    extends: UTab,
    props: {
        value: { type: Number, default: 0 }
    },
    computed: {
        index: function index() {
            return this.parentVM.itemVMs.indexOf(this);
        }
    }
};

/* harmony default export */ var step_vue = (UStep);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-250051cb","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-steps.vue/step.vue/index.html
var step_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.selected),expression:"selected"}]},[_vm._t("default")],2)}
var step_vue_staticRenderFns = []
var step_vue_esExports = { render: step_vue_render, staticRenderFns: step_vue_staticRenderFns }
/* harmony default export */ var u_steps_vue_step_vue = (step_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-steps.vue/step.vue/index.js
var step_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var step_vue___vue_template_functional__ = false
/* styles */
var step_vue___vue_css__ = null
/* scopeId */
var step_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var step_vue___vue_module_identifier__ = null
var step_vue_Component = step_vue_normalizeComponent(step_vue, u_steps_vue_step_vue, step_vue___vue_template_functional__, step_vue___vue_css__, step_vue___vue_scopeId__, step_vue___vue_module_identifier__)
/* harmony default export */ var components_u_steps_vue_step_vue = (step_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-steps.vue/index.js


var USteps = {
    name: 'u-steps',
    childName: 'u-step',
    extends: UTabs,
    props: {
        value: { type: Number, default: 0 },
        readonly: { type: Boolean, default: true },
        layout: { type: String, default: 'block' },
        size: String
    },
    watch: {
        // This method just run once after pushing many itemVMs
        itemVMs: function itemVMs() {
            // 更新列表之后，原来的选择可以已不存在，这里暂存然后重新查找一遍
            var value = this.selectedVM ? this.selectedVM.index : this.value;
            this.selectedVM = undefined;
            this.watchValue(value);
        }
    },
    computed: {
        itemWidth: function itemWidth() {
            if (this.size === 'auto') return 1 / this.itemVMs.length * 100 + '%';else return undefined;
        }
    },
    methods: {
        watchValue: function watchValue(value) {
            if (this.selectedVM && this.selectedVM.index === value) return;
            if (value === undefined) this.selectedVM = this.autoSelect ? this.itemVMs[0] : undefined;else {
                this.selectedVM = this.itemVMs.find(function (itemVM) {
                    return itemVM.index === value;
                });
                this.selectedVM && this.selectedVM.groupVM && this.selectedVM.groupVM.toggle(true);
            }
        },
        select: function select(itemVM) {
            if (this.readonly || this.disabled || itemVM && itemVM.disabled) return;

            var oldValue = this.value;

            if (this.$emitPrevent('before-select', {
                value: itemVM && itemVM.index,
                oldValue: oldValue,
                item: itemVM && itemVM.item,
                itemVM: itemVM
            }, this)) return;

            if (this.cancelable && this.selectedVM === itemVM) this.selectedVM = undefined;else this.selectedVM = itemVM;

            var value = this.selectedVM && this.selectedVM.index;
            var item = this.selectedVM && this.selectedVM.item;

            this.$emit('input', value, this);
            this.$emit('update:value', value, this);
            this.$emit('select', {
                value: value,
                oldValue: oldValue,
                item: item,
                itemVM: this.selectedVM
            }, this);
        }
    }
};



/* harmony default export */ var u_steps_vue = (USteps);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-0cbc87c8","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-steps.vue/index.html
var u_steps_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,attrs:{"readonly":_vm.readonly,"disabled":_vm.disabled,"size":_vm.size}},[_c('nav',{class:_vm.$style.head},_vm._l((_vm.itemVMs),function(itemVM,index){return _c('a',{directives:[{name:"show",rawName:"v-show",value:(!itemVM.hidden),expression:"!itemVM.hidden"}],class:_vm.$style.item,style:({ width: _vm.itemWidth }),attrs:{"title":itemVM.title,"passed":_vm.selectedVM && index <= _vm.selectedVM.index,"selected":_vm.selectedVM && index === _vm.selectedVM.index,"disabled":itemVM.disabled || _vm.disabled}},[_c('div',{class:_vm.$style['item-body'],on:{"click":function($event){return _vm.select(itemVM)}}},[_c('span',{class:_vm.$style.radio}),_c('span',{class:_vm.$style.title},[_c('f-render',{attrs:{"vnode":itemVM.$slots.title}},[_vm._v(_vm._s(itemVM.title))])],1)])])}),0),_c('div',{class:_vm.$style.body},[_vm._t("default")],2)])}
var u_steps_vue_staticRenderFns = []
var u_steps_vue_esExports = { render: u_steps_vue_render, staticRenderFns: u_steps_vue_staticRenderFns }
/* harmony default export */ var components_u_steps_vue = (u_steps_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-steps.vue/index.js
var u_steps_vue_cssModules = {};
function u_steps_vue_injectStyle (ssrContext) {
u_steps_vue_cssModules['$style'] = __webpack_require__("cOE1");
  this['$style'] = u_steps_vue_cssModules['$style']

}
var u_steps_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_steps_vue___vue_template_functional__ = false
/* styles */
var u_steps_vue___vue_css__ = u_steps_vue_injectStyle
/* scopeId */
var u_steps_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_steps_vue___vue_module_identifier__ = null
var u_steps_vue_Component = u_steps_vue_normalizeComponent(u_steps_vue, components_u_steps_vue, u_steps_vue___vue_template_functional__, u_steps_vue___vue_css__, u_steps_vue___vue_scopeId__, u_steps_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_steps_vue = (u_steps_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-switch.vue/index.js


var USwitch = {
    name: 'u-switch',
    mixins: [components_m_field_vue],
    props: {
        value: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            currentValue: this.value
        };
    },

    computed: {
        listeners: function listeners() {
            var listeners = Object.assign({}, this.$listeners);
            ['focus', 'blur', 'update:value'].forEach(function (prop) {
                delete listeners[prop];
            });
            return listeners;
        }
    },
    watch: {
        value: function value(_value) {
            this.currentValue = _value;
        },
        currentValue: function currentValue(value, oldValue) {
            this.$emit('change', { value: value, oldValue: oldValue }, this);
        }
    },
    methods: {
        onFocus: function onFocus(e) {
            this.$emit('focus', e, this);
        },
        onBlur: function onBlur(e) {
            this.$emit('blur', e, this);
        },
        toggle: function toggle(value) {
            // Check if enabled
            if (this.readonly || this.disabled) return;

            // Method overloading
            if (value === undefined) value = !this.currentValue;

            // Prevent replication
            var oldValue = this.currentValue;
            if (value === oldValue) return;

            // Emit a `before-` event with preventDefault()
            if (this.$emitPrevent('before-toggle', { value: value, oldValue: oldValue }, this)) return;

            // Assign and sync `value`
            this.currentValue = value;
            this.$emit('input', value, this);
            this.$emit('update:value', value, this);

            // Emit `after-` events
            if (value) this.$emit('on', undefined, this);else this.$emit('off', undefined, this);
            this.$emit('toggle', { value: value, oldValue: oldValue }, this);
        }
    }
};

/* harmony default export */ var u_switch_vue = (USwitch);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-71afac14","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-switch.vue/index.html
var u_switch_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',_vm._g({class:_vm.$style.root,attrs:{"checked":_vm.currentValue,"disabled":_vm.disabled,"tabindex":"0"},on:{"click":function($event){return _vm.toggle()},"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])){ return null; }$event.preventDefault();},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])){ return null; }$event.preventDefault();return _vm.toggle()},"focus":_vm.onFocus,"blur":_vm.onBlur}},_vm.listeners),[_c('span',{class:_vm.$style.button}),_c('span',{class:_vm.$style.text},[_vm._t("default")],2)])}
var u_switch_vue_staticRenderFns = []
var u_switch_vue_esExports = { render: u_switch_vue_render, staticRenderFns: u_switch_vue_staticRenderFns }
/* harmony default export */ var components_u_switch_vue = (u_switch_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-switch.vue/index.js
var u_switch_vue_cssModules = {};
function u_switch_vue_injectStyle (ssrContext) {
u_switch_vue_cssModules['$style'] = __webpack_require__("cI4t");
  this['$style'] = u_switch_vue_cssModules['$style']

}
var u_switch_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_switch_vue___vue_template_functional__ = false
/* styles */
var u_switch_vue___vue_css__ = u_switch_vue_injectStyle
/* scopeId */
var u_switch_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_switch_vue___vue_module_identifier__ = null
var u_switch_vue_Component = u_switch_vue_normalizeComponent(u_switch_vue, components_u_switch_vue, u_switch_vue___vue_template_functional__, u_switch_vue___vue_css__, u_switch_vue___vue_scopeId__, u_switch_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_switch_vue = (u_switch_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-table.vue/index.js
var UTable = {
    name: 'u-table'
};

/* harmony default export */ var u_table_vue = (UTable);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-82cb5e40","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-table.vue/index.html
var u_table_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{class:_vm.$style.root},[_vm._t("default")],2)}
var u_table_vue_staticRenderFns = []
var u_table_vue_esExports = { render: u_table_vue_render, staticRenderFns: u_table_vue_staticRenderFns }
/* harmony default export */ var components_u_table_vue = (u_table_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-table.vue/index.js
var u_table_vue_cssModules = {};
function u_table_vue_injectStyle (ssrContext) {
u_table_vue_cssModules['$style'] = __webpack_require__("BpIZ");
  this['$style'] = u_table_vue_cssModules['$style']

}
var u_table_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_table_vue___vue_template_functional__ = false
/* styles */
var u_table_vue___vue_css__ = u_table_vue_injectStyle
/* scopeId */
var u_table_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_table_vue___vue_module_identifier__ = null
var u_table_vue_Component = u_table_vue_normalizeComponent(u_table_vue, components_u_table_vue, u_table_vue___vue_template_functional__, u_table_vue___vue_css__, u_table_vue___vue_scopeId__, u_table_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_table_vue = (u_table_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-table-view.vue/column.vue/index.js
var column_vue__typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };




var UTableViewColumn = {
    name: 'u-table-view-column',
    parentName: 'u-table-view',
    mixins: [MEmitter],
    props: {
        type: String,
        startIndex: { type: Number, default: 1 },
        title: String,
        field: String,
        width: [String, Number],
        fixed: { type: Boolean, default: false },
        sortable: { type: Boolean, default: false },
        sortCompare: { type: Function },
        defaultOrder: String,
        filters: { type: Array },
        ellipsis: { type: Boolean, default: false },
        formatter: { type: [String, Object, Function, Formatter], default: 'placeholder' },
        hidden: { type: Boolean, default: false }
    },
    data: function data() {
        var data = {
            parentVM: undefined,
            filterVM: undefined,
            currentWidth: this.width === undefined ? undefined : this.width + '',
            computedWidth: this.width === undefined ? undefined : this.width + '',
            currentFormatter: undefined
        };

        if (column_vue__typeof(this.formatter) === 'object') data.currentFormatter = this.formatter;else if (typeof this.formatter === 'string') {
            data.currentFormatter = {
                _format: parseFormatters(this.formatter),
                format: function format(value) {
                    return this._format(value);
                }
            };
        } else if (typeof this.formatter === 'function') {
            data.currentFormatter = {
                format: this.formatter
            };
        } else data.currentFormatter = placeholderFormatter;

        return data;
    },
    created: function created() {
        var _this = this;

        !this.parentVM && this.$contact(this.$options.parentName, function (parentVM) {
            _this.parentVM = parentVM;
            parentVM.columnVMs.push(_this);
        });
    },
    destroyed: function destroyed() {
        var _this2 = this;

        this.$contact(this.$options.parentName, function (parentVM) {
            parentVM.columnVMs.splice(parentVM.columnVMs.indexOf(_this2), 1);
            _this2.parentVM = undefined;
        });
    }
};

/* harmony default export */ var u_table_view_vue_column_vue = (UTableViewColumn);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-2efb48f0","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-table-view.vue/column.vue/index.html
var u_table_view_vue_column_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (false)?_c('div',[_vm._t("title"),_vm._t("cell"),_vm._t("default")],2):_vm._e()}
var u_table_view_vue_column_vue_staticRenderFns = []
var u_table_view_vue_column_vue_esExports = { render: u_table_view_vue_column_vue_render, staticRenderFns: u_table_view_vue_column_vue_staticRenderFns }
/* harmony default export */ var components_u_table_view_vue_column_vue = (u_table_view_vue_column_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-table-view.vue/column.vue/index.js
var u_table_view_vue_column_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_table_view_vue_column_vue___vue_template_functional__ = false
/* styles */
var u_table_view_vue_column_vue___vue_css__ = null
/* scopeId */
var u_table_view_vue_column_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_table_view_vue_column_vue___vue_module_identifier__ = null
var u_table_view_vue_column_vue_Component = u_table_view_vue_column_vue_normalizeComponent(u_table_view_vue_column_vue, components_u_table_view_vue_column_vue, u_table_view_vue_column_vue___vue_template_functional__, u_table_view_vue_column_vue___vue_css__, u_table_view_vue_column_vue___vue_scopeId__, u_table_view_vue_column_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_table_view_vue_column_vue = (u_table_view_vue_column_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-table-view.vue/filters.vue/filter.vue/index.js


var UTableViewFilter = {
    name: 'u-table-view-filter',
    parentName: 'u-table-view-filters',
    extends: MComplexItem
};

/* harmony default export */ var filter_vue = (UTableViewFilter);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-563c7391","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-table-view.vue/filters.vue/filter.vue/index.html
var filter_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"ellipsis-title",rawName:"v-ellipsis-title"}],class:_vm.$style.root,attrs:{"selected":_vm.parentVM.multiple ? _vm.currentSelected : _vm.isSelected,"disabled":_vm.disabled || _vm.parentVM.disabled},on:{"click":_vm.select}},[_vm._t("default")],2)}
var filter_vue_staticRenderFns = []
var filter_vue_esExports = { render: filter_vue_render, staticRenderFns: filter_vue_staticRenderFns }
/* harmony default export */ var filters_vue_filter_vue = (filter_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-table-view.vue/filters.vue/filter.vue/index.js
var filter_vue_cssModules = {};
function filter_vue_injectStyle (ssrContext) {
filter_vue_cssModules['$style'] = __webpack_require__("iBgl");
  this['$style'] = filter_vue_cssModules['$style']

}
var filter_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var filter_vue___vue_template_functional__ = false
/* styles */
var filter_vue___vue_css__ = filter_vue_injectStyle
/* scopeId */
var filter_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var filter_vue___vue_module_identifier__ = null
var filter_vue_Component = filter_vue_normalizeComponent(filter_vue, filters_vue_filter_vue, filter_vue___vue_template_functional__, filter_vue___vue_css__, filter_vue___vue_scopeId__, filter_vue___vue_module_identifier__)
/* harmony default export */ var u_table_view_vue_filters_vue_filter_vue = (filter_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-table-view.vue/filters.vue/index.js


var UTableViewFilters = {
    name: 'u-table-view-filters',
    childName: 'u-table-view-filter',
    extends: MComplex,
    props: {
        // @inherit: value: { type: String, default: '' },
        // @inherit: field: { type: String, default: 'text' },
        // @inherit: data: Array,
        // @inherit: cancelable: { type: Boolean, default: false },
        // @inherit: multiple: { type: Boolean, default: false },
        // @inherit: keepOrder: { type: Boolean, default: false },
        // : { type: Boolean, default: false },
    },
    data: function data() {
        return {
            columnVM: undefined
        };
    },
    created: function created() {
        var _this = this;

        this.$on('select', function () {
            if (!_this.multiple) _this.close();
        });
    },

    methods: {
        open: function open() {
            this.$refs.popper && this.$refs.popper.open();
        },
        close: function close() {
            this.$refs.popper && this.$refs.popper.close();
        },
        toggle: function toggle(opened) {
            this.$refs.popper && this.$refs.popper.toggle(opened);
        }
    }
    // created() {
    //     !this.columnVM && this.$contact('u-table-view-column', (columnVM) => {
    //         this.columnVM = columnVM;
    //         columnVM.filterVM = this;
    //     });
    // },
    // destroyed() {
    //     !this.columnVM && this.$contact('u-table-view-column', (columnVM) => {
    //         columnVM.filterVM = undefined;
    //         this.columnVM = undefined;
    //     });
    // },
};



/* harmony default export */ var filters_vue = (UTableViewFilters);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-701a4746","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-table-view.vue/filters.vue/index.html
var filters_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('m-popper',{ref:"popper",class:_vm.$style.root,attrs:{"placement":"bottom-end","disabled":_vm.disabled}},[_vm._t("default")],2)}
var filters_vue_staticRenderFns = []
var filters_vue_esExports = { render: filters_vue_render, staticRenderFns: filters_vue_staticRenderFns }
/* harmony default export */ var u_table_view_vue_filters_vue = (filters_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-table-view.vue/filters.vue/index.js
var filters_vue_cssModules = {};
function filters_vue_injectStyle (ssrContext) {
filters_vue_cssModules['$style'] = __webpack_require__("CNkw");
  this['$style'] = filters_vue_cssModules['$style']

}
var filters_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var filters_vue___vue_template_functional__ = false
/* styles */
var filters_vue___vue_css__ = filters_vue_injectStyle
/* scopeId */
var filters_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var filters_vue___vue_module_identifier__ = null
var filters_vue_Component = filters_vue_normalizeComponent(filters_vue, u_table_view_vue_filters_vue, filters_vue___vue_template_functional__, filters_vue___vue_css__, filters_vue___vue_scopeId__, filters_vue___vue_module_identifier__)
/* harmony default export */ var components_u_table_view_vue_filters_vue = (filters_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-table-view.vue/index.js
function u_table_view_vue__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var UTableView = {
    name: 'u-table-view',
    mixins: [components_m_emitter_vue],
    props: {
        data: Array,
        dataSource: [utils_DataSource, Function, Object],
        title: String,
        titleAlignment: { type: String, default: 'center' },
        border: { type: Boolean, default: false },
        loading: { type: Boolean, default: false },
        loadingText: { type: String, default: '正在加载中...' },
        error: { type: Boolean, default: false },
        errorText: { type: String, default: '加载失败，请重试' },
        emptyText: { type: String, default: '暂无数据' },

        // formatter: { type: [String, Function], default: 'text' },
        initialLoad: { type: Boolean, default: true },
        pageable: { type: Boolean, default: false },
        pageSize: { type: Number, default: 20 },
        pageNumber: { type: Number, default: 1 },
        sorting: Object,
        defaultOrder: { type: String, default: 'desc' },
        sortTrigger: { type: String, default: 'icon' },
        filtering: Object,
        remotePaging: { type: Boolean, default: false },
        remoteSorting: { type: Boolean, default: false },
        remoteFiltering: { type: Boolean, default: false },
        mouseWheel: { type: String, default: 'vertical' },
        /* Selection Props */
        valueField: String,
        value: null,
        values: Array,
        selectable: { type: Boolean, default: false },
        cancelable: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        /* Others */
        resizable: { type: Boolean, default: false },
        resizeRemaining: { type: String, default: 'sequence' }
    },
    data: function data() {
        return {
            columnVMs: [],
            tableWidth: undefined,
            bodyHeight: undefined,
            // currentData: this.data && Array.from(this.data),
            currentDataSource: undefined,
            currentLoading: this.loading,
            tableMetaList: [{
                position: 'static'
            }],
            scrollXStart: true,
            scrollXEnd: true,
            /* Selection Data */
            selectedItem: undefined,
            currentValues: this.values || []
        };
    },

    computed: {
        currentData: function currentData() {
            return this.currentDataSource && this.currentDataSource.viewData;
        },
        visibleColumnVMs: function visibleColumnVMs() {
            return this.columnVMs.filter(function (columnVM) {
                return !columnVM.hidden;
            });
        },
        paging: function paging() {
            if (this.pageable) {
                var paging = {};
                paging.size = this.pageSize;
                paging.number = paging.number || 1;
                return paging;
            } else return undefined;
        },
        currentSorting: function currentSorting() {
            return this.currentDataSource.sorting;
        },
        allChecked: function allChecked() {
            if (!this.currentData) return;

            var checkedLength = 0;
            this.currentData.forEach(function (item) {
                if (item.checked) checkedLength++;
            });

            if (checkedLength === 0) return false;else if (checkedLength === this.currentData.length) return true;else return null;
        }
    },
    watch: {
        data: function data(_data) {
            this.handleData();
        },
        dataSource: function dataSource(_dataSource) {
            this.handleData();
        },
        loading: function loading(_loading) {
            this.currentLoading = _loading;
        },

        sorting: {
            deep: true,
            handler: function handler(sorting, oldSorting) {
                this.sort(sorting);
            }
        },
        filtering: {
            deep: true,
            handler: function handler(filtering, oldFiltering) {
                this.filter(filtering);
            }
        },
        /* Selection Watchers */
        value: function value(_value) {
            this.watchValue(_value);
        },
        selectedItem: function selectedItem(item, oldItem) {
            var value = item ? item[this.valueField] : undefined;
            var oldValue = oldItem ? oldItem[this.valueField] : undefined;
            if (value === oldValue) return;

            this.$emit('change', {
                value: value,
                oldValue: oldValue,
                item: item,
                oldItem: oldItem
            }, this);
        },
        values: function values(_values) {
            this.watchValues(_values);
        },
        currentValues: function currentValues(values, oldValues) {
            this.$emit('change', {
                values: values,
                oldValues: oldValues
            });
        }
    },
    created: function created() {
        var _this = this;

        // @TODO: this.pageNumber
        this.$watch('pageNumber', function (number) {
            _this.page(number);
        });

        this.currentDataSource = this.normalizeDataSource(this.dataSource || this.data);
        this.initialLoad && this.load();

        this.debouncedSyncBodyScroll = debounce_default()(this.syncBodyScroll, 40, {
            leading: true,
            trailing: true
        });
    },
    mounted: function mounted() {
        if (this.data) this.processData(this.data);
        this.watchValue(this.value);
        this.watchValues(this.values);
        this.handleResize();
        window.addEventListener('resize', this.resize);
        // this.mouseWheel === 'horizontal' && window.addEventListener('mousewheel', this.onMouseWheel);
    },

    methods: {
        processData: function processData(data) {
            var _this2 = this;

            var selectable = this.visibleColumnVMs.some(function (columnVM) {
                return columnVM.type === 'radio';
            });
            var checkable = this.visibleColumnVMs.some(function (columnVM) {
                return columnVM.type === 'checkbox';
            });
            // const expandable = this.visibleColumnVMs.some((columnVM) => columnVM.type === 'expander');

            if (selectable) {
                data.forEach(function (item) {
                    if (!item.hasOwnProperty('disabled')) _this2.$set(item, 'disabled', false);
                });
            }

            if (checkable) {
                data.forEach(function (item) {
                    if (!item.hasOwnProperty('checked')) _this2.$set(item, 'checked', false);
                    if (!item.hasOwnProperty('disabled')) _this2.$set(item, 'disabled', false);
                });
            }

            return data;
        },
        handleData: function handleData() {
            this.currentDataSource = this.normalizeDataSource(this.dataSource || this.data);
            this.handleResize();
        },
        getExtraParams: function getExtraParams() {
            return undefined;
        },
        getDataSourceOptions: function getDataSourceOptions() {
            return {
                viewMode: 'page',
                paging: this.paging,
                sorting: this.sorting,
                filtering: this.filtering,
                remotePaging: this.remotePaging,
                remoteSorting: this.remoteSorting,
                remoteFiltering: this.remoteFiltering,
                getExtraParams: this.getExtraParams,
                process: this.processData
            };
        },
        normalizeDataSource: function normalizeDataSource(dataSource) {
            var options = this.getDataSourceOptions();

            if (dataSource instanceof utils_DataSource) return dataSource;else if (dataSource instanceof Array) {
                options.data = Array.from(dataSource);
                return new utils_DataSource(options);
            } else if (dataSource instanceof Function) {
                options.load = function load(params) {
                    var _this3 = this;

                    var result = dataSource(params);

                    if (result instanceof Promise) return result.catch(function () {
                        return _this3.currentLoading = false;
                    });else if (result instanceof Array) return Promise.resolve(result);else throw new TypeError('Wrong type of `dataSource.load` result!');
                };
                return new utils_DataSource(options);
            } else if (dataSource instanceof Object) {
                return new utils_DataSource(Object.assign(options, dataSource));
            } else return undefined;
        },
        handleResize: function handleResize() {
            var _this4 = this;

            // 判断是否会出现水平滚动条
            // let parentWidth = this.$el.offsetWidth;
            // let tableWidth = this.$refs.body.offsetWidth;
            // // 初始表格是隐藏的需要特殊处理，因为此时上面两个值为0
            // if (parentWidth === 0)
            //     parentWidth = tableWidth = this.$refs.root.parentNode.offsetWidth;

            // let percentWidthSum = 0;
            // percentColumnVMs.forEach((columnVM) => {
            //     const width = parseFloat(columnVM.currentWidth) / 100 * parentWidth;
            //     columnVM.computedWidth = width;
            //     percentWidthSum += width;
            // });

            // let valueWidthSum = 0;
            // valueColumns.forEach((item) => valueWidthSum += parseFloat(item.copyWidth));

            setTimeout(function () {
                var rootWidth = _this4.$el.offsetWidth;

                // 分别获取有百分比、具体数值和无 width 的列
                var percentColumnVMs = [];
                var valueColumnVMs = [];
                var noWidthColumnVMs = [];
                // 统计固定列的数量
                var fixedLeftCount = 0;
                var fixedRightCount = 0;
                var lastIsFixed = false;

                _this4.visibleColumnVMs.forEach(function (columnVM, index) {
                    if (!columnVM.currentWidth) noWidthColumnVMs.push(columnVM);else if (String(columnVM.currentWidth).endsWith('%')) percentColumnVMs.push(columnVM);else valueColumnVMs.push(columnVM);

                    if (columnVM.fixed) {
                        if (index === 0) fixedLeftCount = 1;else if (!fixedRightCount && lastIsFixed) fixedLeftCount++;else if (!lastIsFixed) fixedRightCount = 1;else fixedRightCount++;
                    }
                    lastIsFixed = columnVM.fixed;
                });

                // 全部都是百分数的情况，按比例缩小
                if (percentColumnVMs.length === _this4.visibleColumnVMs.length) {
                    var sumWidth = percentColumnVMs.reduce(function (prev, columnVM) {
                        return prev + parseFloat(columnVM.currentWidth);
                    }, 0);
                    if (sumWidth !== 100) {
                        percentColumnVMs.forEach(function (columnVM) {
                            columnVM.currentWidth = parseFloat(columnVM.currentWidth) / sumWidth * 100 + '%';
                        });
                    }
                }
                // 全部都是数值的情况，按实际大小

                var percentWidthSum = percentColumnVMs.reduce(function (prev, columnVM) {
                    columnVM.computedWidth = parseFloat(columnVM.currentWidth) * rootWidth / 100;
                    return prev + columnVM.computedWidth;
                }, 0);
                var valueWidthSum = valueColumnVMs.reduce(function (prev, columnVM) {
                    columnVM.computedWidth = parseFloat(columnVM.currentWidth);
                    return prev + columnVM.computedWidth;
                }, 0);
                var remainingWidth = rootWidth - percentWidthSum - valueWidthSum;

                if (remainingWidth > 0 && noWidthColumnVMs.length) {
                    var averageWidth = remainingWidth / noWidthColumnVMs.length;
                    noWidthColumnVMs.forEach(function (columnVM) {
                        return columnVM.computedWidth = averageWidth;
                    });
                }

                // 如果所有列均有值，则总宽度有超出的可能。否则总宽度为根节点的宽度。
                var tableWidth = '';
                if (_this4.visibleColumnVMs.every(function (columnVM) {
                    return columnVM.currentWidth;
                })) {
                    tableWidth = _this4.visibleColumnVMs.reduce(function (prev, columnVM) {
                        if (String(columnVM.currentWidth).endsWith('%')) return prev + parseFloat(columnVM.currentWidth) * rootWidth / 100;else return prev + columnVM.computedWidth;
                    }, 0);

                    _this4.tableWidth = tableWidth;
                } else _this4.tableWidth = tableWidth = rootWidth; // @important: Work with overflow-x: hidden to prevent two horizontal scrollbar

                var tableMetaList = [_this4.tableMetaList[0]];
                if (fixedLeftCount) {
                    tableMetaList.push({
                        position: 'left',
                        width: _this4.visibleColumnVMs.slice(0, fixedLeftCount).reduce(function (prev, columnVM) {
                            return prev + columnVM.computedWidth;
                        }, 0)
                    });
                }
                if (fixedRightCount && tableWidth > rootWidth) {
                    // 表格太短时，不固定右侧列
                    tableMetaList.push({
                        position: 'right',
                        width: _this4.visibleColumnVMs.slice(-fixedRightCount).reduce(function (prev, columnVM) {
                            return prev + columnVM.computedWidth;
                        }, 0)
                    });
                }
                _this4.tableMetaList = tableMetaList;

                /**
                 * 根节点高度优先，头部固定，计算身体高度
                 */
                if (_this4.$el.style.height !== '' && _this4.$el.style.height !== 'auto' || _this4.$el.style.maxHeight !== '' && _this4.$el.style.maxHeight !== 'auto') {
                    var rootHeight = _this4.$el.offsetHeight;
                    var titleHeight = _this4.$refs.title ? _this4.$refs.title.offsetHeight : 0;
                    var headHeight = _this4.$refs.head[0] ? _this4.$refs.head[0].offsetHeight : 0;
                    _this4.bodyHeight = rootHeight - titleHeight - headHeight;
                }

                _this4.$emit('resize', undefined, _this4);
            });
        },
        onResizerDragStart: function onResizerDragStart($event, columnVM) {
            this.visibleColumnVMs.forEach(function (columnVM) {
                columnVM.currentWidth = columnVM.computedWidth;
                columnVM.oldWidth = columnVM.computedWidth;
            });
        },
        onResizerDrag: function onResizerDrag($event, columnVM, index) {
            var minWidth = 44;

            var rootWidth = this.$el.offsetWidth;
            var beforeWidth = 0;
            for (var i = 0; i < index; i++) {
                beforeWidth += this.visibleColumnVMs[i].computedWidth;
            }var maxWidth = rootWidth - beforeWidth - (this.visibleColumnVMs.length - 1 - index) * minWidth;

            var width = Math.max(minWidth, Math.min(columnVM.oldWidth + $event.dragX, maxWidth));
            var remainingWidth = width - columnVM.computedWidth;

            columnVM.currentWidth = columnVM.computedWidth = width;

            if (this.resizeRemaining === 'sequence') {
                for (var _i = index + 1; _i < this.visibleColumnVMs.length; _i++) {
                    if (remainingWidth === 0) break;

                    var _columnVM = this.visibleColumnVMs[_i];
                    if (_columnVM.computedWidth - remainingWidth >= minWidth) {
                        _columnVM.currentWidth = _columnVM.computedWidth -= remainingWidth;
                        remainingWidth = 0;
                    } else {
                        remainingWidth -= _columnVM.computedWidth - minWidth;
                        _columnVM.currentWidth = _columnVM.computedWidth = minWidth;
                    }
                }
            } else if (this.resizeRemaining === 'average') {
                /* eslint-disable no-inner-declarations */
                var _distributeInAverage = function _distributeInAverage(columnVMs) {
                    var averageWidth = remainingWidth / columnVMs.length;
                    var wideColumnVMs = [];

                    columnVMs.forEach(function (columnVM) {
                        if (columnVM.computedWidth - averageWidth >= minWidth) {
                            columnVM.currentWidth = columnVM.computedWidth -= averageWidth;
                            remainingWidth -= averageWidth;
                            wideColumnVMs.push(columnVM);
                        } else {
                            remainingWidth -= columnVM.computedWidth - minWidth;
                            columnVM.currentWidth = columnVM.computedWidth = minWidth;
                        }
                    });

                    if (Math.abs(remainingWidth) >= 1 && wideColumnVMs.length) _distributeInAverage(wideColumnVMs);
                };

                _distributeInAverage(this.visibleColumnVMs.slice(index + 1));
                columnVM.currentWidth = columnVM.computedWidth -= remainingWidth;
            }

            $event.transferEl.style.left = '';
        },
        onResizerDragEnd: function onResizerDragEnd($event, columnVM, index) {
            this.handleResize();
            this.$emit('resize', {
                columnVM: columnVM,
                index: index,
                width: columnVM.computedWidth,
                oldWidth: columnVM.oldWidth
            });
        },
        onTableScroll: function onTableScroll(e) {
            this.scrollXStart = e.target.scrollLeft === 0;
            this.scrollXEnd = e.target.scrollLeft >= e.target.scrollWidth - e.target.clientWidth;
        },
        syncBodyScroll: function syncBodyScroll(scrollTop, target) {
            this.$refs.body[0] && this.$refs.body[0] !== target && (this.$refs.body[0].scrollTop = scrollTop);
            this.$refs.body[1] && this.$refs.body[1] !== target && (this.$refs.body[1].scrollTop = scrollTop);
            this.$refs.body[2] && this.$refs.body[2] !== target && (this.$refs.body[2].scrollTop = scrollTop);
        },
        onBodyScroll: function onBodyScroll(e) {
            this.debouncedSyncBodyScroll(e.target.scrollTop, e.target);
        },
        onMouseWheel: function onMouseWheel(e) {
            // const direction = e.wheelDelta > 0 ? -1 : 1;
            // const rootWidth = this.$refs.root.offsetWidth;
            // const scrollWidth = this.$refs.table[0].scrollWidth;
            // const diffWidth = scrollWidth - rootWidth;
            // console.log(e);
            // if (tableWidth > parentWidth && this.over) {
            //     e.preventDefault();
            //     if (this.$refs.body.parentNode.scrollLeft >= diffWidth && direction === 1)
            //         this.$refs.body.parentNode.scrollLeft = diffWidth;
            //     else if (this.$refs.body.parentNode.scrollLeft < 0 && direction === -1)
            //         this.$refs.body.parentNode.scrollLeft = 0;
            //     else if (direction === -1)
            //         this.$refs.body.parentNode.scrollLeft += -50;
            //     else
            //         this.$refs.body.parentNode.scrollLeft += 50;
            // }
        },
        load: function load() {
            var _this5 = this;

            var dataSource = this.currentDataSource;
            if (!dataSource) return;
            if (this.$emitPrevent('before-load', undefined, this)) return;

            this.currentLoading = true;
            dataSource.load().then(function (data) {
                // 防止同步数据使页面抖动
                // setTimeout(() => this.currentData = data);
                _this5.currentLoading = false;
                if (_this5.currentDataSource.paging.number > _this5.currentDataSource.totalPage) _this5.page(1);

                _this5.$emit('load', undefined, _this5);
                return data;
            }).catch(function () {
                return _this5.currentLoading = false;
            });
        },
        reload: function reload() {
            this.currentDataSource.clearLocalData();
            this.load();
        },
        page: function page(number) {
            var paging = {
                size: this.pageSize,
                number: number,
                oldNumber: this.currentDataSource.paging.number
            };
            if (this.$emitPrevent('before-page', paging, this)) return;

            this.currentDataSource.page(paging);
            this.load();
            this.$emit('page', paging, this);
            this.$emit('update:page-number', number, this);
        },
        onClickSort: function onClickSort(columnVM) {
            var order = void 0;
            var sorting = this.currentSorting;
            if (!sorting) sorting = { field: undefined, order: columnVM.defaultOrder || this.defaultOrder };
            if (sorting.field === columnVM.field) order = sorting.order === 'asc' ? 'desc' : 'asc';else order = columnVM.defaultOrder || this.defaultOrder;
            this.sort(columnVM.field, order, columnVM.sortCompare);
        },
        sort: function sort(field) {
            var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';
            var compare = arguments[2];

            var sorting = { field: field, order: order, compare: compare };
            if (this.$emitPrevent('before-sort', sorting, this)) return;

            this.currentDataSource.sort(sorting);
            this.load();
            this.$emit('sort', sorting, this);
            this.$emit('update:sorting', sorting, this);
        },
        onSelectFilters: function onSelectFilters(field, $event) {
            var filtering = $event.value || $event.value === 0 ? u_table_view_vue__defineProperty({}, field, $event.value) : undefined;
            this.filter(filtering);
        },
        getFiltersValue: function getFiltersValue(field) {
            var filtering = this.currentDataSource.filtering;
            if (!filtering) return undefined;

            var filterField = Object.keys(filtering)[0];
            if (filterField !== field) return undefined;else return filtering[field];
        },
        filter: function filter(filtering) {
            if (this.$emitPrevent('before-filter', filtering, this)) return;

            this.currentDataSource.filter(filtering);
            this.load();
            this.$emit('filter', filtering, this);
            this.$emit('update:filtering', filtering, this);
        },

        /* Selection Methods */
        watchValue: function watchValue(value) {
            var _this6 = this;

            if (this.selectedItem && this.selectedItem[this.valueField] === value) return;
            if (value === undefined) this.selectedItem = undefined;else {
                this.selectedItem = this.currentData.find(function (item) {
                    return item[_this6.valueField] === value;
                });
                // @TODO: Group
            }
        },
        watchValues: function watchValues(values) {
            var _this7 = this;

            if (!this.valueField) return;
            if (values) {
                this.currentValues = values;
                this.currentData.forEach(function (item) {
                    return item.checked = values.includes(item[_this7.valueField]);
                });
            } else {
                var _values2 = [];
                this.currentData.forEach(function (item) {
                    return item.checked && _values2.push(item[_this7.valueField]);
                });
                this.currentValues = _values2;
            }
        },
        select: function select(item, cancelable) {
            // Check if enabled
            if (this.readonly || this.disabled || item.disabled) return;

            // Prevent replication
            var oldValue = this.value;
            var oldItem = this.selectedItem;
            if (cancelable === undefined) cancelable = this.cancelable;
            if (!cancelable && item === oldItem) return;

            // Emit a `before-` event with preventDefault()
            if (this.$emitPrevent('before-select', {
                value: item && item.value,
                oldValue: oldValue,
                item: item,
                oldItem: oldItem
            }, this)) return;

            if (cancelable && item === oldItem) this.selectedItem = undefined;else this.selectedItem = item;

            // Assign and sync `value`
            var value = this.selectedItem && this.selectedItem[this.valueField];
            this.$emit('input', value, this);
            this.$emit('update:value', value, this);

            // Emit `after-` events
            this.$emit('select', {
                value: value,
                oldValue: oldValue,
                selectedItem: this.selectedItem,
                item: item,
                oldItem: oldItem
            }, this);
        },
        check: function check(item, checked) {
            // Check if enabled
            if (this.readonly || this.disabled || item.disabled) return;

            // Method overloading
            if (checked === undefined) checked = !item.checked;

            // Prevent replication
            if (item.checked === checked) return;

            var oldValues = this.values ? Array.from(this.values) : this.values;
            // Emit a `before-` event with preventDefault()
            // if (this.$emitPrevent('before-check', {
            //     oldValues,
            //     checked,
            //     item,
            // }, this))
            //     return;

            // Assign and sync `checked`
            item.checked = checked;

            if (this.valueField) {
                var label = item[this.valueField];
                if (checked && !this.currentValues.includes(label)) this.currentValues.push(label);else if (!checked && this.currentValues.includes(label)) this.currentValues.splice(this.currentValues.indexOf(label), 1);
            }

            this.$emit('update:values', this.currentValues, this);
            this.$emit('check', {
                values: this.currentValues,
                oldValues: oldValues,
                item: item,
                checked: checked
            }, this);
        },
        checkAll: function checkAll(checked) {
            var _this8 = this;

            // Check if enabled
            if (this.readonly || this.disabled) return;

            var oldValues = this.values ? Array.from(this.values) : this.values;
            this.currentData.forEach(function (item) {
                if (item.disabled) return;

                item.checked = checked;

                if (_this8.valueField) {
                    var label = item[_this8.valueField];
                    if (checked && !_this8.currentValues.includes(label)) _this8.currentValues.push(label);else if (!checked && _this8.currentValues.includes(label)) _this8.currentValues.splice(_this8.currentValues.indexOf(label), 1);
                }
            });

            this.$emit('update:values', this.currentValues, this);
            this.$emit('check', {
                values: this.currentValues,
                oldValues: oldValues,
                checked: checked
            }, this);
        }
    }
};




/* harmony default export */ var u_table_view_vue = (UTableView);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-8af64fca","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-table-view.vue/index.html
var u_table_view_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"root",class:_vm.$style.root,attrs:{"border":_vm.border}},[(_vm.title)?_c('div',{ref:"title",class:_vm.$style.title,style:({ textAlign: _vm.titleAlignment })},[_vm._t("title",[_vm._v(_vm._s(_vm.title))])],2):_vm._e(),_vm._l((_vm.tableMetaList),function(tableMeta){return _c('div',{key:tableMeta.position,class:_vm.$style.table,style:({ width: tableMeta.position !== 'static' && (tableMeta.width + 'px') }),attrs:{"position":tableMeta.position,"shadow":(tableMeta.position === 'left' && !_vm.scrollXStart) || (tableMeta.position === 'right' && !_vm.scrollXEnd)},on:{"scroll":_vm.onTableScroll}},[_c('div',{ref:"head",refInFor:true,class:_vm.$style.head,style:({ width: _vm.tableWidth + 'px' })},[_c('u-table',_vm._b({class:_vm.$style['head-table']},'u-table',_vm.$attrs,false),[_c('colgroup',_vm._l((_vm.visibleColumnVMs),function(columnVM){return _c('col',{attrs:{"width":columnVM.computedWidth}})}),0),_c('thead',[_c('tr',_vm._l((_vm.visibleColumnVMs),function(columnVM,index){return _c('th',{class:_vm.$style['head-title'],attrs:{"sortable":columnVM.sortable},on:{"click":function($event){columnVM.sortable && _vm.sortTrigger === 'head' && _vm.onClickSort(columnVM)}}},[(columnVM.type === 'checkbox')?_c('span',[_c('u-checkbox',{attrs:{"value":_vm.allChecked},on:{"check":function($event){return _vm.checkAll($event.value)}}})],1):_vm._e(),(columnVM.$scopedSlots.title)?_c('f-render',{attrs:{"vnode":columnVM.$scopedSlots.title({ columnVM: columnVM, index: index })}}):(columnVM.$slots.title)?_c('f-render',{attrs:{"vnode":columnVM.$slots.title}}):_c('span',[_vm._v(_vm._s(columnVM.title))]),(columnVM.sortable)?_c('span',{class:_vm.$style.sort,attrs:{"sorting":_vm.currentSorting && _vm.currentSorting.field === columnVM.field,"order":_vm.currentSorting && _vm.currentSorting.order},on:{"click":function($event){_vm.sortTrigger === 'icon' && ($event.stopPropagation(), _vm.onClickSort(columnVM))}}}):_vm._e(),(columnVM.filters)?_c('span',{class:_vm.$style.filter},[_c('u-table-view-filters',{attrs:{"value":_vm.getFiltersValue(columnVM.field)},on:{"select":function($event){return _vm.onSelectFilters(columnVM.field, $event)}}},_vm._l((columnVM.filters),function(filter){return _c('u-table-view-filter',{key:filter.value,attrs:{"value":filter.value}},[_vm._v(_vm._s(filter.text))])}),1)],1):_vm._e(),(_vm.resizable && index !== _vm.visibleColumnVMs.length - 1)?_c('f-dragger',{attrs:{"axis":"horizontal"},on:{"dragstart":function($event){return _vm.onResizerDragStart($event, columnVM)},"drag":function($event){return _vm.onResizerDrag($event, columnVM, index)},"dragend":function($event){return _vm.onResizerDragEnd($event, columnVM, index)}}},[_c('div',{class:_vm.$style.resizer})]):_vm._e()],1)}),0)])])],1),_c('div',{ref:"body",refInFor:true,class:_vm.$style.body,style:({ width: _vm.tableWidth + 'px', height: _vm.bodyHeight + 'px' }),on:{"scroll":_vm.onBodyScroll}},[_c('u-table',_vm._b({ref:"bodyTable",refInFor:true,class:_vm.$style['body-table']},'u-table',_vm.$attrs,false),[_c('colgroup',_vm._l((_vm.visibleColumnVMs),function(columnVM){return _c('col',{attrs:{"width":columnVM.computedWidth}})}),0),_c('tbody',[(_vm.currentData === undefined || _vm.currentLoading)?_c('tr',[_c('td',{class:_vm.$style.center,attrs:{"colspan":_vm.visibleColumnVMs.length}},[_vm._t("loading",[_c('u-spinner'),_vm._v(" "+_vm._s(_vm.loadingText))])],2)]):(_vm.currentData === null || _vm.error)?_c('tr',[_c('td',{class:_vm.$style.center,attrs:{"colspan":_vm.visibleColumnVMs.length}},[_vm._t("error",[_vm._v(_vm._s(_vm.errorText))])],2)]):(!_vm.currentData.length)?_c('tr',[_c('td',{class:_vm.$style.center,attrs:{"colspan":_vm.visibleColumnVMs.length}},[_vm._t("empty",[_vm._v(_vm._s(_vm.emptyText))])],2)]):_vm._l((_vm.currentData),function(item,index){return _c('tr',{key:item[_vm.valueField],class:_vm.$style.row,attrs:{"selected":_vm.selectable && _vm.selectedItem === item},on:{"click":function($event){_vm.selectable && _vm.select(item)}}},_vm._l((_vm.visibleColumnVMs),function(columnVM){return _c('td',{directives:[{name:"ellipsis-title",rawName:"v-ellipsis-title"}],class:_vm.$style.cell,attrs:{"ellipsis":columnVM.ellipsis}},[(columnVM.type === 'index')?_c('span',[_vm._v(_vm._s(columnVM.startIndex + index))]):(columnVM.type === 'radio')?_c('span',[_c('u-radio',{attrs:{"value":_vm.selectedItem === item,"disabled":item.disabled},nativeOn:{"click":function($event){return _vm.select(item)}}})],1):(columnVM.type === 'checkbox')?_c('span',[_c('u-checkbox',{attrs:{"value":item.checked,"label":item[_vm.valueField],"disabled":item.disabled},on:{"check":function($event){return _vm.check(item, $event.value)}}})],1):(columnVM.$scopedSlots.cell)?_c('f-render',{attrs:{"vnode":columnVM.$scopedSlots.cell({ item: item, value: item[columnVM.field], columnVM: columnVM, index: index })}}):(columnVM.$slots.cell)?_c('f-render',{attrs:{"vnode":columnVM.$slots.cell}}):_c('span',[_vm._v(_vm._s(columnVM.currentFormatter.format(item[columnVM.field])))])],1)}),0)})],2)])],1)])}),(_vm.pageable)?_c('u-pagination',{class:_vm.$style.pagination,attrs:{"total":_vm.currentDataSource.totalPage,"page":_vm.currentDataSource.paging.number},on:{"change":function($event){return _vm.page($event.page)}}}):_vm._e(),_c('div',[_vm._t("default")],2)],2)}
var u_table_view_vue_staticRenderFns = []
var u_table_view_vue_esExports = { render: u_table_view_vue_render, staticRenderFns: u_table_view_vue_staticRenderFns }
/* harmony default export */ var components_u_table_view_vue = (u_table_view_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-table-view.vue/index.js
var u_table_view_vue_cssModules = {};
function u_table_view_vue_injectStyle (ssrContext) {
u_table_view_vue_cssModules['$style'] = __webpack_require__("NTHQ");
  this['$style'] = u_table_view_vue_cssModules['$style']

}
var u_table_view_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_table_view_vue___vue_template_functional__ = false
/* styles */
var u_table_view_vue___vue_css__ = u_table_view_vue_injectStyle
/* scopeId */
var u_table_view_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_table_view_vue___vue_module_identifier__ = null
var u_table_view_vue_Component = u_table_view_vue_normalizeComponent(u_table_view_vue, components_u_table_view_vue, u_table_view_vue___vue_template_functional__, u_table_view_vue___vue_css__, u_table_view_vue___vue_scopeId__, u_table_view_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_table_view_vue = (u_table_view_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-text.vue/index.js
var UText = {
    name: 'u-text'
};

/* harmony default export */ var u_text_vue = (UText);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-11acd5f0","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-text.vue/index.html
var u_text_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:_vm.$style.root},[_vm._t("default")],2)}
var u_text_vue_staticRenderFns = []
var u_text_vue_esExports = { render: u_text_vue_render, staticRenderFns: u_text_vue_staticRenderFns }
/* harmony default export */ var components_u_text_vue = (u_text_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-text.vue/index.js
var u_text_vue_cssModules = {};
function u_text_vue_injectStyle (ssrContext) {
u_text_vue_cssModules['$style'] = __webpack_require__("R9el");
  this['$style'] = u_text_vue_cssModules['$style']

}
var u_text_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_text_vue___vue_template_functional__ = false
/* styles */
var u_text_vue___vue_css__ = u_text_vue_injectStyle
/* scopeId */
var u_text_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_text_vue___vue_module_identifier__ = null
var u_text_vue_Component = u_text_vue_normalizeComponent(u_text_vue, components_u_text_vue, u_text_vue___vue_template_functional__, u_text_vue___vue_css__, u_text_vue___vue_scopeId__, u_text_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_text_vue = (u_text_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-textarea.vue/index.js



var UTextarea = {
    name: 'u-textarea',
    extends: src_components_u_input_vue,
    props: {
        resize: { type: String, default: 'vertical', validator: function validator(value) {
                return ['none', 'horizontal', 'vertical', 'both'].includes(value);
            } }
    },
    data: function data() {
        return {
            startWidth: 0,
            startHeight: 0,
            width: '',
            height: ''
        };
    },

    methods: {
        onDragStart: function onDragStart() {
            var size = getSize(this.$refs.root);
            this.startWidth = size.width;
            this.startHeight = size.height;
        },
        onDrag: function onDrag($event) {
            if (this.resize === 'horizontal' || this.resize === 'both') this.width = this.startWidth + $event.dragX + 'px';
            if (this.resize === 'vertical' || this.resize === 'both') this.height = this.startHeight + $event.dragY + 'px';
            this.$refs.handle.style.left = 'auto';
            this.$refs.handle.style.top = 'auto';
        }
    }
};

/* harmony default export */ var u_textarea_vue = (UTextarea);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-682cf95e","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-textarea.vue/index.html
var u_textarea_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"root",class:_vm.$style.root,style:({ width: _vm.width, height: _vm.height }),attrs:{"readonly":_vm.readonly,"disabled":_vm.disabled,"color":_vm.currentColor || this.formItemVM && this.formItemVM.color,"focus":_vm.focused},on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }!_vm.focused && _vm.focus()}}},[_c('span',{class:_vm.$style.baseline},[_vm._v("b")]),_c('span',{class:_vm.$style.placeholder},[_vm._v(_vm._s(_vm.currentValue ? '' : _vm.placeholder))]),_c('textarea',_vm._g(_vm._b({directives:[{name:"focus",rawName:"v-focus",value:(_vm.autofocus),expression:"autofocus"}],ref:"input",class:_vm.$style.input,attrs:{"placeholder":_vm.placeholder,"readonly":_vm.readonly,"disabled":_vm.disabled},domProps:{"value":_vm.currentValue},on:{"input":_vm.onInput,"focus":_vm.onFocus,"blur":_vm.onBlur,"compositionstart":function($event){_vm.compositionInputing = true},"compositionend":_vm.onCompositionEnd}},'textarea',_vm.$attrs,false),_vm.listeners)),_vm._t("default"),(_vm.clearable && _vm.currentValue)?_c('span',{class:_vm.$style.clearable,on:{"click":function($event){$event.stopPropagation();return _vm.clear($event)}}}):_vm._e(),_c('f-dragger',{attrs:{"disabled":_vm.readonly || _vm.disabled},on:{"dragstart":_vm.onDragStart,"drag":_vm.onDrag}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.resize !== 'none'),expression:"resize !== 'none'"}],ref:"handle",class:_vm.$style.handle})])],2)}
var u_textarea_vue_staticRenderFns = []
var u_textarea_vue_esExports = { render: u_textarea_vue_render, staticRenderFns: u_textarea_vue_staticRenderFns }
/* harmony default export */ var components_u_textarea_vue = (u_textarea_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-textarea.vue/index.js
var u_textarea_vue_cssModules = {};
function u_textarea_vue_injectStyle (ssrContext) {
u_textarea_vue_cssModules['$style'] = __webpack_require__("kXUk");
  this['$style'] = u_textarea_vue_cssModules['$style']

}
var u_textarea_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_textarea_vue___vue_template_functional__ = false
/* styles */
var u_textarea_vue___vue_css__ = u_textarea_vue_injectStyle
/* scopeId */
var u_textarea_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_textarea_vue___vue_module_identifier__ = null
var u_textarea_vue_Component = u_textarea_vue_normalizeComponent(u_textarea_vue, components_u_textarea_vue, u_textarea_vue___vue_template_functional__, u_textarea_vue___vue_css__, u_textarea_vue___vue_scopeId__, u_textarea_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_textarea_vue = (u_textarea_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-toast.vue/index.js
var UToast = {
    name: 'u-toast',
    props: {
        position: { type: String, default: 'top-center' },
        single: { type: Boolean, default: false },
        duration: { type: Number, default: 2000 },
        color: { type: String, default: 'default' },
        text: String,
        closable: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            items: []
        };
    },
    mounted: function mounted() {
        if (this.position !== 'static') document.body.appendChild(this.$el);
    },

    methods: {
        show: function show(text, duration, color) {
            if (!this.$el) this.$mount(document.createElement('div'));

            this.open({
                text: text || this.text,
                color: color,
                duration: duration === undefined ? this.duration : duration
            });
        },
        open: function open(options) {
            var _this = this;

            if (this.single && this.items[0]) {
                Object.assign(this.items[0], options);
                this.items[0].counter++;
            } else {
                this.items.unshift(options);
                this.items[0].counter = 0;
            }

            var item = this.items[0];

            if (item.duration) {
                setTimeout(function () {
                    if (!item.counter) _this.close(item);else item.counter--;
                }, item.duration);
            }

            this.$emit('open', item, this);
        },
        close: function close(item) {
            var cancel = false;
            this.$emit('before-close', Object.assign({
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            }, item), this);
            if (cancel) return;

            var index = this.items.indexOf(item);
            ~index && this.items.splice(index, 1);

            this.$emit('close', item, this);
        },

        /**
         * @method closeAll() 关闭所有消息
         * @return {void}
         */
        closeAll: function closeAll() {
            this.items = [];
        },
        success: function success(message, duration) {
            this.show(message, duration, 'success');
        },
        warning: function warning(message, duration) {
            this.show(message, duration, 'warning');
        },
        info: function info(message, duration) {
            this.show(message, duration, 'info');
        },
        error: function error(message, duration) {
            this.show(message, duration, 'error');
        }
    },
    install: function install(Vue, id) {
        var Ctor = Vue.component(id);
        if (!Ctor) return;

        Vue.prototype.$toast = UToast.toast = new Ctor();

        var METHODS = ['show', 'closeAll', 'success', 'warning', 'info', 'error'];
        METHODS.forEach(function (method) {
            return UToast[method] = UToast.toast[method].bind(UToast.toast);
        });
    }
};

/* harmony default export */ var u_toast_vue = (UToast);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-026330e0","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-toast.vue/index.html
var u_toast_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,attrs:{"position":_vm.position}},_vm._l((_vm.items),function(item){return _c('div',{class:_vm.$style.item,attrs:{"color":item.color}},[_vm._t("default",[_vm._v(_vm._s(item.text))],{"item":item}),(_vm.closable)?_c('a',{class:_vm.$style.close,on:{"click":function($event){return _vm.close(item)}}}):_vm._e()],2)}),0)}
var u_toast_vue_staticRenderFns = []
var u_toast_vue_esExports = { render: u_toast_vue_render, staticRenderFns: u_toast_vue_staticRenderFns }
/* harmony default export */ var components_u_toast_vue = (u_toast_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-toast.vue/index.js
var u_toast_vue_cssModules = {};
function u_toast_vue_injectStyle (ssrContext) {
u_toast_vue_cssModules['$style'] = __webpack_require__("1gbg");
  this['$style'] = u_toast_vue_cssModules['$style']

}
var u_toast_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_toast_vue___vue_template_functional__ = false
/* styles */
var u_toast_vue___vue_css__ = u_toast_vue_injectStyle
/* scopeId */
var u_toast_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_toast_vue___vue_module_identifier__ = null
var u_toast_vue_Component = u_toast_vue_normalizeComponent(u_toast_vue, components_u_toast_vue, u_toast_vue___vue_template_functional__, u_toast_vue___vue_css__, u_toast_vue___vue_scopeId__, u_toast_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_toast_vue = (u_toast_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-tooltip.vue/index.js


var u_tooltip_vue_UTooltip = {
    name: 'u-tooltip',
    extends: src_components_m_popper_vue,
    props: {
        content: String,
        // @inherit: opened
        trigger: { type: String, default: 'hover' },
        placement: { type: String, default: 'bottom' }
        // @inherit: reference
        // @inhreit: hideDelay
        // @inherit: boundariesElement
        // @inherit: followCursor
        // @inherit: offset
        // @inherit: disabled
    }
};

/* harmony default export */ var u_tooltip_vue = (u_tooltip_vue_UTooltip);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-f127b2bc","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-tooltip.vue/index.html
var u_tooltip_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentOpened && (_vm.$slots.default || _vm.content)),expression:"currentOpened && ($slots.default || content)"}],class:_vm.$style.root},[_c('div',{class:_vm.$style.arrow}),_c('div',{class:[_vm.$style.body, _vm.$style.wrap]},[_vm._t("body",[_vm._t("default",[_vm._v(_vm._s(_vm.content))])])],2)])}
var u_tooltip_vue_staticRenderFns = []
var u_tooltip_vue_esExports = { render: u_tooltip_vue_render, staticRenderFns: u_tooltip_vue_staticRenderFns }
/* harmony default export */ var components_u_tooltip_vue = (u_tooltip_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-tooltip.vue/index.js
var u_tooltip_vue_cssModules = {};
function u_tooltip_vue_injectStyle (ssrContext) {
u_tooltip_vue_cssModules['$style'] = __webpack_require__("++4C");
  this['$style'] = u_tooltip_vue_cssModules['$style']

}
var u_tooltip_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_tooltip_vue___vue_template_functional__ = false
/* styles */
var u_tooltip_vue___vue_css__ = u_tooltip_vue_injectStyle
/* scopeId */
var u_tooltip_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_tooltip_vue___vue_module_identifier__ = null
var u_tooltip_vue_Component = u_tooltip_vue_normalizeComponent(u_tooltip_vue, components_u_tooltip_vue, u_tooltip_vue___vue_template_functional__, u_tooltip_vue___vue_css__, u_tooltip_vue___vue_scopeId__, u_tooltip_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_tooltip_vue = (u_tooltip_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-transfer.vue/index.js
var UTransfer = {
    name: 'u-transfer',
    props: {
        source: { type: Array, default: function _default() {
                return [];
            } },
        target: { type: Array, default: function _default() {
                return [];
            } }
    },
    data: function data() {
        return {
            sourceValues: [],
            targetValues: []
        };
    },

    methods: {
        reverse: function reverse() {
            var transfer = [];
            for (var i = 0; i < this.target.length; i++) {
                var item = this.target[i];
                if (this.targetValues.includes(item.value)) {
                    this.target.splice(i--, 1);
                    this.source.push(item);
                    transfer.push(item);
                }
            }
            var transferValues = Array.from(this.targetValues);
            this.targetValues = [];
            this.$emit('transfer', {
                source: this.source,
                target: this.target,
                transfer: transfer,
                transferValues: transferValues
            }, this);
            this.$emit('change', {
                source: this.source,
                target: this.target,
                transfer: transfer,
                transferValues: transferValues
            }, this);
        },
        forward: function forward() {
            var transfer = [];
            for (var i = 0; i < this.source.length; i++) {
                var item = this.source[i];
                if (this.sourceValues.includes(item.value)) {
                    this.source.splice(i--, 1);
                    this.target.push(item);
                    transfer.push(item);
                }
            }
            var transferValues = Array.from(this.sourceValues);
            this.sourceValues = [];
            this.$emit('transfer', {
                source: this.source,
                target: this.target,
                transfer: transfer,
                transferValues: transferValues
            }, this);
            this.$emit('change', {
                source: this.source,
                target: this.target,
                transfer: transfer,
                transferValues: transferValues
            }, this);
        }
    }
};

/* harmony default export */ var u_transfer_vue = (UTransfer);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-3ef95c6c","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-transfer.vue/index.html
var u_transfer_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_c('u-list-view',{class:_vm.$style.listView,attrs:{"multiple":"","data":_vm.source},model:{value:(_vm.sourceValues),callback:function ($$v) {_vm.sourceValues=$$v},expression:"sourceValues"}}),_c('div',{class:_vm.$style.buttons},[_c('span',{class:_vm.$style.button,attrs:{"role":"reverse","disabled":!_vm.targetValues.length},on:{"click":_vm.reverse}}),_c('span',{class:_vm.$style.button,attrs:{"role":"forward","disabled":!_vm.sourceValues.length},on:{"click":_vm.forward}})]),_c('u-list-view',{class:_vm.$style.listView,attrs:{"multiple":"","data":_vm.target},model:{value:(_vm.targetValues),callback:function ($$v) {_vm.targetValues=$$v},expression:"targetValues"}}),_vm._t("default")],2)}
var u_transfer_vue_staticRenderFns = []
var u_transfer_vue_esExports = { render: u_transfer_vue_render, staticRenderFns: u_transfer_vue_staticRenderFns }
/* harmony default export */ var components_u_transfer_vue = (u_transfer_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-transfer.vue/index.js
var u_transfer_vue_cssModules = {};
function u_transfer_vue_injectStyle (ssrContext) {
u_transfer_vue_cssModules['$style'] = __webpack_require__("9WiH");
  this['$style'] = u_transfer_vue_cssModules['$style']

}
var u_transfer_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_transfer_vue___vue_template_functional__ = false
/* styles */
var u_transfer_vue___vue_css__ = u_transfer_vue_injectStyle
/* scopeId */
var u_transfer_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_transfer_vue___vue_module_identifier__ = null
var u_transfer_vue_Component = u_transfer_vue_normalizeComponent(u_transfer_vue, components_u_transfer_vue, u_transfer_vue___vue_template_functional__, u_transfer_vue___vue_css__, u_transfer_vue___vue_scopeId__, u_transfer_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_transfer_vue = (u_transfer_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-tree-view.vue/node.vue/index.js


var UTreeViewNode = {
    name: 'u-tree-view-node',
    rootName: 'u-tree-view',
    mixins: [MNode],
    props: {
        data: Array,
        text: String,
        value: null,
        expanded: { type: Boolean, default: false },
        checked: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        node: Object
    },
    data: function data() {
        return {
            // @inherit: nodeVMs: [],
            // @inherit: rootVM: undefined,
            // @inherit: parentVM: undefined,
            currentExpanded: this.expanded,
            currentChecked: this.checked
        };
    },

    computed: {
        selected: function selected() {
            return this.rootVM.selectedVM === this;
        },
        currentDisabled: function currentDisabled() {
            return this.disabled || this.rootVM.disabled || this.parentVM && this.parentVM.currentDisabled;
        }
    },
    watch: {
        expanded: function expanded(_expanded) {
            this.currentExpanded = _expanded;
        },
        checked: function checked(_checked) {
            this.currentChecked = _checked;
        }
    },
    methods: {
        select: function select() {
            if (this.currentDisabled || this.rootVM.readonly) return;

            var cancel = false;
            this.$emit('before-select', {
                value: this.value,
                node: this.node,
                nodeVM: this,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            }, this);
            if (cancel) return;

            this.rootVM.select(this);
        },
        toggle: function toggle(expanded) {
            var _this = this;

            if (this.currentDisabled || this.rootVM.readonly) return;

            var oldExpanded = this.currentExpanded;

            if (expanded === undefined) expanded = !this.currentExpanded;

            if (expanded === oldExpanded) return;

            var cancel = false;
            this.$emit('before-toggle', {
                expanded: expanded,
                node: this.node,
                nodeVM: this,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            }, this);
            if (cancel) return;

            this.currentExpanded = expanded;
            this.$emit('update:expanded', expanded, this);

            if (this.rootVM.accordion) {
                (this.parentVM || this.rootVM).nodeVMs.forEach(function (nodeVM) {
                    if (nodeVM !== _this) {
                        nodeVM.currentExpanded = false;
                        nodeVM.$emit('update:expanded', false);
                    }
                });
            }

            this.$emit('toggle', {
                expanded: expanded,
                node: this.node,
                nodeVM: this
            }, this);

            this.rootVM.onToggle(this, expanded);
        },
        checkRecursively: function checkRecursively(checked) {
            var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'up+down';

            this.currentChecked = checked;
            this.$emit('update:checked', checked, this);

            if (checked && !this.rootVM.currentValues.includes(this.value) && !this.nodeVMs.length) this.rootVM.currentValues.push(this.value);else if (!checked && this.rootVM.currentValues.includes(this.value)) this.rootVM.currentValues.splice(this.rootVM.currentValues.indexOf(this.value), 1);

            // down
            if (direction.includes('down')) {
                this.nodeVMs.forEach(function (nodeVM) {
                    !nodeVM.currentDisabled && nodeVM.checkRecursively(checked, 'down');
                });
            }

            // up
            var parentVM = this.parentVM;
            if (direction.includes('up') && parentVM) {
                var count = 0;
                parentVM.nodeVMs.forEach(function (nodeVM) {
                    if (nodeVM.currentChecked) count++;else if (nodeVM.currentChecked === null) count += 0.5;
                });

                if (count === 0) parentVM.checkRecursively(false, 'up');else if (count === parentVM.nodeVMs.length) parentVM.checkRecursively(true, 'up');else parentVM.checkRecursively(null, 'up');
            }
        },
        check: function check(checked) {
            var oldChecked = this.currentChecked;

            this.checkRecursively(checked);

            this.$emit('check', {
                checked: checked,
                oldChecked: oldChecked,
                node: this.node,
                nodeVM: this
            }, this);

            this.rootVM.onCheck(this, checked, oldChecked);
        }
    }
};

/* harmony default export */ var node_vue = (UTreeViewNode);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-538dc13e","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-tree-view.vue/node.vue/index.html
var node_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_c('div',{class:_vm.$style.item,attrs:{"selected":_vm.selected,"readonly":_vm.rootVM.readonly,"disabled":_vm.currentDisabled,"tabindex":_vm.disabled || _vm.rootVM.readonly || _vm.rootVM.disabled ? '' : 0},on:{"click":function($event){_vm.select(), _vm.rootVM.expandTrigger === 'click' && _vm.toggle()},"keyup":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.select()},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }return _vm.toggle(false)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"right",39,$event.key,["Right","ArrowRight"])){ return null; }if('button' in $event && $event.button !== 2){ return null; }return _vm.toggle(true)}]}},[_c('div',{class:_vm.$style.back}),(_vm.data || _vm.nodeVMs.length)?_c('div',{class:_vm.$style.expander,attrs:{"expanded":_vm.currentExpanded},on:{"click":function($event){_vm.rootVM.expandTrigger === 'click-expander' && ($event.stopPropagation(), _vm.toggle())}}}):_vm._e(),_c('div',{class:_vm.$style.text},[(_vm.rootVM.checkable)?_c('u-checkbox',{attrs:{"value":_vm.currentChecked,"disabled":_vm.currentDisabled},on:{"check":function($event){return _vm.check($event.value)}},nativeOn:{"click":function($event){$event.stopPropagation();}}}):_vm._e(),_c('u-tree-view-text',{attrs:{"data":_vm.data,"text":_vm.text,"value":_vm.value,"expanded":_vm.currentExpanded,"checked":_vm.currentChecked,"disabled":_vm.currentDisabled,"node":_vm.node}})],1)]),_c('f-collapse-transition',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentExpanded),expression:"currentExpanded"}],class:_vm.$style.sub},[_vm._l((_vm.data),function(node){return (_vm.data)?_c('u-tree-view-node',{key:node.key,attrs:{"text":node[_vm.rootVM.field],"value":node.value,"expanded":node.expanded,"checked":node.checked,"disabled":node.disabled,"data":node.children,"node":node},on:{"update:expanded":function($event){return _vm.$set(node, "expanded", $event)},"update:checked":function($event){return _vm.$set(node, "checked", $event)}}}):_vm._e()}),_vm._t("default")],2)])],1)}
var node_vue_staticRenderFns = []
var node_vue_esExports = { render: node_vue_render, staticRenderFns: node_vue_staticRenderFns }
/* harmony default export */ var u_tree_view_vue_node_vue = (node_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-tree-view.vue/node.vue/index.js
var node_vue_cssModules = {};
function node_vue_injectStyle (ssrContext) {
node_vue_cssModules['$style'] = __webpack_require__("H52n");
  this['$style'] = node_vue_cssModules['$style']

}
var node_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var node_vue___vue_template_functional__ = false
/* styles */
var node_vue___vue_css__ = node_vue_injectStyle
/* scopeId */
var node_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var node_vue___vue_module_identifier__ = null
var node_vue_Component = node_vue_normalizeComponent(node_vue, u_tree_view_vue_node_vue, node_vue___vue_template_functional__, node_vue___vue_css__, node_vue___vue_scopeId__, node_vue___vue_module_identifier__)
/* harmony default export */ var components_u_tree_view_vue_node_vue = (node_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-tree-view.vue/text.vue/index.js
var UTreeViewText = {
    name: 'u-tree-view-text',
    props: {
        data: Array,
        text: String,
        value: null,
        expanded: { type: Boolean, default: false },
        checked: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        node: Object
    },
    render: function render(h) {
        var rootVM = this.$parent.rootVM;
        if (rootVM.$scopedSlots.text) {
            return rootVM.$scopedSlots.text({
                data: this.data,
                text: this.text,
                value: this.value,
                expanded: this.expanded,
                checked: this.checked,
                disabled: this.disabled,
                node: this.node
            });
        } else if (rootVM.$slots.text) return rootVM.$slots.text[0];else return h('span', this.text);
    }
};

/* harmony default export */ var text_vue = (UTreeViewText);
// CONCATENATED MODULE: ./src/components/u-tree-view.vue/text.vue/index.js
var text_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */
var text_vue___vue_html__ = null
/* template functional */
var text_vue___vue_template_functional__ = false
/* styles */
var text_vue___vue_css__ = null
/* scopeId */
var text_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var text_vue___vue_module_identifier__ = null
var text_vue_Component = text_vue_normalizeComponent(text_vue, text_vue___vue_html__, text_vue___vue_template_functional__, text_vue___vue_css__, text_vue___vue_scopeId__, text_vue___vue_module_identifier__)
/* harmony default export */ var u_tree_view_vue_text_vue = (text_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-tree-view.vue/index.js



var UTreeView = {
    name: 'u-tree-view',
    nodeName: 'u-tree-view-node',
    mixins: [MRoot, components_m_field_vue],
    props: {
        data: Array,
        value: null,
        values: Array,
        field: { type: String, default: 'text' },
        cancelable: { type: Boolean, default: false },
        checkable: { type: Boolean, default: false },
        accordion: { type: Boolean, default: false },
        expandTrigger: { type: String, default: 'click' },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            ChildComponent: this.$options.nodeName, // easy for SubComponent inheriting
            // @inherit: nodeVMs: [],
            selectedVM: undefined,
            currentValues: this.values || []
        };
    },

    watch: {
        // It is dynamic to find selected item by value
        // so using watcher is better than computed property.
        value: function value(_value, oldValue) {
            this.watchValue(_value);
        },
        selectedVM: function selectedVM(_selectedVM, oldVM) {
            this.$emit('change', {
                value: _selectedVM ? _selectedVM.value : undefined,
                oldValue: oldVM ? oldVM.value : undefined,
                node: _selectedVM ? _selectedVM.node : undefined,
                oldNode: oldVM ? oldVM.node : undefined,
                nodeVM: _selectedVM,
                oldVM: oldVM
            }, this);
        },
        values: function values(_values) {
            this.watchValues(_values);
        },

        // currentValues(values, oldValues) {
        //     this.$emit('change', {
        //         values,
        //         oldValues,
        //     });
        // },
        // This method just run once after pushing many nodeVMs
        nodeVMs: function nodeVMs() {
            this.selectedVM = undefined;
            this.watchValue(this.value);
        }
    },
    mounted: function mounted() {
        // Must trigger `value` watcher at mounted hook.
        // If not, nodeVMs have not been pushed.
        this.watchValue(this.value);
        this.watchValues(this.values);
    },

    methods: {
        watchValue: function watchValue(value) {
            if (this.selectedVM && this.selectedVM.value === value) return;
            if (value === undefined) this.selectedVM = undefined;else {
                this.selectedVM = this.find(function (nodeVM) {
                    return nodeVM.value === value;
                });
                if (this.selectedVM) {
                    var nodeVM = this.selectedVM.parentVM;
                    while (nodeVM !== this.rootVM) {
                        nodeVM.currentExpanded = true;
                        nodeVM = nodeVM.parentVM;
                    }
                }
            }
        },
        watchValues: function watchValues(values) {
            if (values) {
                this.currentValues = values;
                this.walk(function (nodeVM) {
                    if (values.includes(nodeVM.value)) nodeVM.check(true);
                });
            } else {
                var _values2 = [];
                this.walk(function (nodeVM) {
                    if (nodeVM.currentChecked && !nodeVM.nodeVMs.length) _values2.push(nodeVM.value);
                });
                this.currentValues = _values2;
            }
        },
        select: function select(nodeVM) {
            if (this.readonly || this.disabled) return;

            var oldValue = this.value;
            var oldVM = this.selectedVM;

            var cancel = false;
            this.$emit('before-select', {
                value: nodeVM && nodeVM.value,
                oldValue: oldValue,
                node: nodeVM && nodeVM.node,
                oldNode: oldVM && oldVM.node,
                nodeVM: nodeVM,
                oldVM: oldVM,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            }, this);
            if (cancel) return;

            if (this.cancelable && this.selectedVM === nodeVM) this.selectedVM = undefined;else this.selectedVM = nodeVM;

            var value = this.selectedVM && this.selectedVM.value;
            var node = this.selectedVM && this.selectedVM.node;

            this.$emit('input', value, this);
            this.$emit('update:value', value, this);
            this.$emit('select', {
                value: value,
                oldValue: oldValue,
                node: node,
                oldNode: oldVM && oldVM.node,
                nodeVM: nodeVM,
                oldVM: oldVM
            }, this);
        },
        onToggle: function onToggle(nodeVM, expanded) {
            this.$emit('toggle', {
                expanded: expanded,
                node: nodeVM.node,
                nodeVM: nodeVM
            }, this);
        },
        toggleAll: function toggleAll(expanded) {
            this.walk(function (nodeVM) {
                return nodeVM.toggle(expanded);
            });
            // @TODO: Only one event
        },
        onCheck: function onCheck(nodeVM, checked, oldChecked) {
            this.$emit('check', {
                checked: checked,
                oldChecked: oldChecked,
                node: nodeVM.node,
                nodeVM: nodeVM,
                values: this.currentValues
                // @TODO: oldValues
            }, this);
        },
        checkAll: function checkAll(checked) {
            this.nodeVMs.forEach(function (nodeVM) {
                return !nodeVM.currentDisabled && nodeVM.checkRecursively(checked);
            });

            this.$emit('check', {
                checked: checked
            }, this);
        }
    }
};




/* harmony default export */ var u_tree_view_vue = (UTreeView);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-4db99154","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-tree-view.vue/index.html
var u_tree_view_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,attrs:{"readonly":_vm.readonly,"disabled":_vm.disabled}},[_vm._l((_vm.data),function(node){return (_vm.data)?_c(_vm.ChildComponent,{key:node.key,tag:"component",attrs:{"text":node[_vm.field],"value":node.value,"expanded":node.expanded,"checked":node.checked,"disabled":node.disabled,"data":node.children,"node":node},on:{"update:expanded":function($event){return _vm.$set(node, "expanded", $event)},"update:checked":function($event){return _vm.$set(node, "checked", $event)}}}):_vm._e()}),_vm._t("default")],2)}
var u_tree_view_vue_staticRenderFns = []
var u_tree_view_vue_esExports = { render: u_tree_view_vue_render, staticRenderFns: u_tree_view_vue_staticRenderFns }
/* harmony default export */ var components_u_tree_view_vue = (u_tree_view_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-tree-view.vue/index.js
var u_tree_view_vue_cssModules = {};
function u_tree_view_vue_injectStyle (ssrContext) {
u_tree_view_vue_cssModules['$style'] = __webpack_require__("vvct");
  this['$style'] = u_tree_view_vue_cssModules['$style']

}
var u_tree_view_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_tree_view_vue___vue_template_functional__ = false
/* styles */
var u_tree_view_vue___vue_css__ = u_tree_view_vue_injectStyle
/* scopeId */
var u_tree_view_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_tree_view_vue___vue_module_identifier__ = null
var u_tree_view_vue_Component = u_tree_view_vue_normalizeComponent(u_tree_view_vue, components_u_tree_view_vue, u_tree_view_vue___vue_template_functional__, u_tree_view_vue___vue_css__, u_tree_view_vue___vue_scopeId__, u_tree_view_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_tree_view_vue = (u_tree_view_vue_Component.exports);
// EXTERNAL MODULE: ./src/components/u-uploader.vue/i18n/en-US.json
var u_uploader_vue_i18n_en_US = __webpack_require__("O69Z");
var u_uploader_vue_i18n_en_US_default = /*#__PURE__*/__webpack_require__.n(u_uploader_vue_i18n_en_US);

// EXTERNAL MODULE: ./src/components/u-uploader.vue/i18n/zh-CN.json
var u_uploader_vue_i18n_zh_CN = __webpack_require__("Kjk/");
var u_uploader_vue_i18n_zh_CN_default = /*#__PURE__*/__webpack_require__.n(u_uploader_vue_i18n_zh_CN);

// CONCATENATED MODULE: ./src/components/u-uploader.vue/i18n/index.js



/* harmony default export */ var u_uploader_vue_i18n = ({
    messages: {
        'en-US': u_uploader_vue_i18n_en_US_default.a,
        'zh-CN': u_uploader_vue_i18n_zh_CN_default.a
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_babel-loader@7.1.5@babel-loader/lib!./src/components/u-uploader.vue/index.js


var SIZE_UNITS = {
    kB: 1024,
    MB: Math.pow(1024, 2),
    GB: Math.pow(1024, 3),
    TB: Math.pow(1024, 4)
};

var UUploader = {
    name: 'u-uploader',
    i18n: u_uploader_vue_i18n,
    props: {
        url: String,
        dataType: { type: String, default: 'json' },
        data: { type: Object, default: function _default() {
                return {};
            } },
        name: { type: String, default: 'file' },
        extensions: { type: [String, Array], default: '' },
        maxSize: { type: [String, Number], default: Infinity },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            contentType: 'multipart/form-data',
            sending: false,
            file: {},
            tempId: new Date().getTime()
        };
    },

    methods: {
        /**
         * @method upload() 弹出文件对话框并且上传文件
         * @public
         * @return {void}
         */
        upload: function upload() {
            if (this.disabled || this.sending) return;

            this.$refs.file.value = '';
            this.$refs.file.click();
        },

        /**
         * @method checkExtensions(file) 检查扩展名
         * @private
         * @param  {File} file 文件对象
         * @return {boolean} 返回是否通过验证
         */
        checkExtensions: function checkExtensions(file) {
            if (!this.extensions) return true;

            var fileName = file.name;
            var extName = fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length).toLowerCase();

            var extensions = this.extensions;
            if (typeof extensions === 'string') extensions = extensions.split(',');

            if (extensions.includes(extName)) return true;

            /**
             * @event error 上传错误时触发
             * @property {object} name ExtensionError
             * @property {object} message 错误信息
             * @property {object} extensions 可上传的扩展名
             */
            this.$emit('error', {
                name: 'ExtensionError',
                message: this.$t('extensionError', { extensions: extensions.join(', ') }),
                extensions: extensions
            }, this);

            return false;
        },

        /**
         * @method checkSize(file) 检查文件大小
         * @private
         * @param  {File} file 文件对象
         * @return {boolean} 返回是否通过验证
         */
        checkSize: function checkSize(file) {
            if (this.maxSize === Infinity) return true;

            var maxSize = void 0;
            if (!isNaN(this.maxSize)) maxSize = +this.maxSize;else {
                var unit = this.maxSize.slice(-2);
                if (!SIZE_UNITS[unit]) throw new Error('Unknown unit!');

                maxSize = this.maxSize.slice(0, -2) * SIZE_UNITS[unit];
            }

            if (file.size <= maxSize) return true;

            /**
             * @event error 上传错误时触发
             * @property {object} name SizeError
             * @property {object} message 错误信息
             * @property {object} maxSize 可上传的最大文件大小
             * @property {object} size 当前文件大小
             */
            this.$emit('error', {
                name: 'SizeError',
                message: '文件大小超出限制！',
                maxSize: this.maxSize,
                size: file.size
            }, this);

            return false;
        },

        /**
         * @method submit() 提交表单
         * @private
         * @return {void}
         */
        submit: function submit() {
            var _this = this;

            var file = this.$refs.file.files ? this.$refs.file.files[0] : {
                name: this.$refs.file.value,
                size: 0
            };

            if (!file || !file.name || !this.checkExtensions(file) || !this.checkSize(file)) return;

            var fileName = file.name;
            this.file = {
                name: fileName,
                extName: fileName.includes('.') ? fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length).toLowerCase() : undefined,
                size: file.size
            };

            if (typeof FormData === 'undefined') {
                // IE9 不支持 XHR2 相关功能
                /**
                 * @event sending 发送前触发
                 * @property {object} data 待发送的数据
                 */
                var cancel = false;
                this.$emit('before-send', {
                    data: this.data,
                    file: file,
                    files: this.$refs.file.files,
                    preventDefault: function preventDefault() {
                        return cancel = true;
                    }
                }, this);
                if (cancel) return;

                this.sending = true;
                this.$refs.form.submit();
            } else {
                var xhr = new XMLHttpRequest();
                var formData = new FormData(this.$refs.form);

                xhr.open('POST', this.url);
                xhr.upload.onprogress = function (e) {
                    if (e.lengthComputable) {
                        /**
                        * @event progress 发送中触发
                        * @property {object} data 待发送的数据
                        */
                        this.$emit('progress', {
                            loaded: e.loaded,
                            total: e.total
                        }, this);
                    }
                }.bind(this);

                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) _this.onLoad(xhr.responseText, xhr.responseXML);else {
                            if (!_this.sending) return;
                            _this.sending = false;
                            _this.file = null;
                            _this.$emit('error', {
                                name: 'ResponseError',
                                message: 'No responseText!'
                            }, _this);
                        }
                    }
                };

                /**
                 * @event sending 发送前触发
                 * @property {object} data 待发送的数据
                 */
                var _cancel = false;
                this.$emit('before-send', {
                    data: this.data,
                    file: file,
                    files: this.$refs.file.files,
                    xhr: xhr,
                    formData: formData,
                    preventDefault: function preventDefault() {
                        return _cancel = true;
                    }
                }, this);
                if (_cancel) return;

                this.sending = true;
                xhr.send(formData);
            }

            this.$emit('send', {
                data: this.data,
                file: file,
                files: this.$refs.file.files
            }, this);
        },

        /**
         * @method onLoad() 接收数据回调
         * @private
         * @return {void}
         */
        onLoad: function onLoad(responseText, responseXML) {
            var $iframe = this.$refs.iframe;
            var file = this.file;

            if (!this.sending) return;
            this.sending = false;
            this.file = null;

            var xml = {};

            if (!!responseText || !!responseXML) {
                // ajax上传时数据处理
                xml.responseText = responseText;
                xml.responseXML = responseXML;
            } else {
                if ($iframe.contentWindow) {
                    xml.responseText = $iframe.contentWindow.document.body ? $iframe.contentWindow.document.body.innerText : null;
                    xml.responseXML = $iframe.contentWindow.document.XMLDocument ? $iframe.contentWindow.document.XMLDocument : $iframe.contentWindow.document;
                } else if ($iframe.contentDocument) {
                    xml.responseText = $iframe.contentDocument.document.body ? $iframe.contentDocument.document.body.innerText : null;
                    xml.responseXML = $iframe.contentDocument.document.XMLDocument ? $iframe.contentDocument.document.XMLDocument : $iframe.contentDocument.document;
                }
            }

            if (!xml.responseText) {
                /**
                 * @event error 上传错误时触发
                 * @property {object} name ResponseError
                 * @property {object} message 错误信息
                 */
                return this.$emit('error', {
                    name: 'ResponseError',
                    message: 'No responseText!'
                }, this);
            }

            /**
             * @event complete 上传完成时触发
             * @property {object} xml 返回的xml
             */
            this.$emit('complete', {
                xml: xml
            }, this);

            /**
             * @event success 上传成功时触发
             * @property {object} data 返回的数据
             */
            this.$emit('success', {
                data: this.parseData(xml, this.dataType),
                file: file
            }, this);
        },

        /**
         * @method parseData(xml, type) 解析接收的数据
         * @private
         * @param  {object} xml 接收的xml
         * @param  {object} type 数据类型
         * @return {object|string} 解析后的数据
         */
        parseData: function parseData(xml, type) {
            if (type === 'text') return xml.responseText;else if (type === 'xml') return xml.responseXML;else if (type === 'json') {
                var data = xml.responseText;
                try {
                    data = JSON.parse(data);
                } catch (e) {}

                return data;
                // danger，暂时不开启
                // } else if (type === 'script')
                //     return eval(xml.responseText);
            } else return xml.responseText;
        }
    }
};

/* harmony default export */ var u_uploader_vue = (UUploader);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/_@vusion_vue-loader@14.2.1@@vusion/vue-loader/lib/template-compiler?{"id":"data-v-3d939c7e","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/components/u-uploader.vue/index.html
var u_uploader_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_c('div',{on:{"click":function($event){return _vm.upload()}}},[_vm._t("default")],2),_c('form',{ref:"form",class:_vm.$style.form,attrs:{"method":"POST","action":_vm.url,"target":'iframe'+ _vm.tempId,"enctype":_vm.contentType}},[(!_vm.sending)?_c('input',{ref:"file",class:_vm.$style.input,attrs:{"type":"file","name":_vm.name},on:{"change":function($event){return _vm.submit()}}}):_vm._e(),_vm._l((Object.keys(_vm.data)),function(key){return _c('input',{attrs:{"type":"hidden","name":key},domProps:{"value":_vm.data[key]}})})],2),_c('iframe',{ref:"iframe",class:_vm.$style.iframe,attrs:{"name":'iframe'+ _vm.tempId},on:{"load":function($event){return _vm.onLoad()}}})])}
var u_uploader_vue_staticRenderFns = []
var u_uploader_vue_esExports = { render: u_uploader_vue_render, staticRenderFns: u_uploader_vue_staticRenderFns }
/* harmony default export */ var components_u_uploader_vue = (u_uploader_vue_esExports);
// CONCATENATED MODULE: ./src/components/u-uploader.vue/index.js
var u_uploader_vue_cssModules = {};
function u_uploader_vue_injectStyle (ssrContext) {
u_uploader_vue_cssModules['$style'] = __webpack_require__("UgC+");
  this['$style'] = u_uploader_vue_cssModules['$style']

}
var u_uploader_vue_normalizeComponent = __webpack_require__("Lw5P");
/* script */


/* template */

/* template functional */
var u_uploader_vue___vue_template_functional__ = false
/* styles */
var u_uploader_vue___vue_css__ = u_uploader_vue_injectStyle
/* scopeId */
var u_uploader_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_uploader_vue___vue_module_identifier__ = null
var u_uploader_vue_Component = u_uploader_vue_normalizeComponent(u_uploader_vue, components_u_uploader_vue, u_uploader_vue___vue_template_functional__, u_uploader_vue___vue_css__, u_uploader_vue___vue_scopeId__, u_uploader_vue___vue_module_identifier__)
/* harmony default export */ var src_components_u_uploader_vue = (u_uploader_vue_Component.exports);
// CONCATENATED MODULE: ./src/components/index.js




































































// EXTERNAL MODULE: ./src/filters/index.js
var filters = __webpack_require__("Q0Ca");
var filters_default = /*#__PURE__*/__webpack_require__.n(filters);

// EXTERNAL MODULE: ./node_modules/_vusion-utils@0.3.2@vusion-utils/src/index.js
var src = __webpack_require__("jkUl");
var src_default = /*#__PURE__*/__webpack_require__.n(src);

// CONCATENATED MODULE: ./src/index.js









// CONCATENATED MODULE: ./index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "directives", function() { return directives_namespaceObject; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "filters", function() { return filters; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utils", function() { return utils_namespaceObject; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "install", function() { return src["install"]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ERipple", function() { return ERipple; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "EWatermark", function() { return EWatermark; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FCollapseTransition", function() { return FCollapseTransition; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FDraggable", function() { return FDraggable; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FDragger", function() { return FDragger; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FDroppable", function() { return FDroppable; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FForbidden", function() { return FForbidden; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FRender", function() { return FRender; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IIcon", function() { return IIcon; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MEmitter", function() { return MEmitter; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MComplex", function() { return MComplex; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MComplexItem", function() { return MComplexItem; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MField", function() { return MField; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MMultiplex", function() { return MMultiplex; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MMultiplexItem", function() { return MMultiplexItem; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MParent", function() { return MParent; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MChild", function() { return MChild; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MPublisher", function() { return MPublisher; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MSubscriber", function() { return MSubscriber; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MPubSub", function() { return MPubSub; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MGroup", function() { return MGroup; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MGroupParent", function() { return MGroupParent; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MPopper", function() { return MPopper; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MRoot", function() { return MRoot; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MNode", function() { return MNode; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MSinglex", function() { return MSinglex; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MSinglexItem", function() { return MSinglexItem; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UArticle", function() { return UArticle; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UBadge", function() { return UBadge; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UBlock", function() { return UBlock; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UButton", function() { return UButton; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UCarousel", function() { return UCarousel; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UCarouselItem", function() { return UCarouselItem; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UCascadeSelect", function() { return UCascadeSelect; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UCheckbox", function() { return UCheckbox; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UCheckboxes", function() { return UCheckboxes; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UCircularProgress", function() { return UCircularProgress; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UCollapse", function() { return UCollapse; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UCollapseItem", function() { return UCollapseItem; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UComboSlider", function() { return UComboSlider; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UCrumb", function() { return UCrumb; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UCrumbItem", function() { return UCrumbItem; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UDrawer", function() { return UDrawer; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UForm", function() { return UForm; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UFormItem", function() { return UFormItem; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UGridLayout", function() { return UGridLayout; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UGridLayoutRow", function() { return UGridLayoutRow; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UGridLayoutColumn", function() { return UGridLayoutColumn; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UInput", function() { return UInput; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ULabel", function() { return ULabel; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ULinearLayout", function() { return ULinearLayout; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ULinearProgress", function() { return ULinearProgress; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ULink", function() { return ULink; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UList", function() { return UList; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UListItem", function() { return UListItem; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UListView", function() { return UListView; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UListViewItem", function() { return UListViewItem; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UListViewGroup", function() { return UListViewGroup; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UListViewDivider", function() { return UListViewDivider; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ULoading", function() { return ULoading; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ULogo", function() { return ULogo; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UMenu", function() { return UMenu; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UMenuItem", function() { return UMenuItem; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UMenuGroup", function() { return UMenuGroup; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UMenuDivider", function() { return UMenuDivider; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UModal", function() { return UModal; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UNavbar", function() { return UNavbar; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UNumberInput", function() { return UNumberInput; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UPagination", function() { return UPagination; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UPopup", function() { return UPopup; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "URadios", function() { return URadios; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "URadio", function() { return URadio; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "URegionSelect", function() { return URegionSelect; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "USample", function() { return USample; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "USelect", function() { return USelect; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "USelectItem", function() { return USelectItem; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "USelectGroup", function() { return USelectGroup; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "USelectDivider", function() { return USelectDivider; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "USidebar", function() { return USidebar; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "USidebarItem", function() { return USidebarItem; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "USidebarGroup", function() { return USidebarGroup; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "USidebarDivider", function() { return USidebarDivider; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "USlider", function() { return USlider; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "USpinner", function() { return USpinner; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "USteps", function() { return USteps; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UStep", function() { return UStep; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "USwitch", function() { return USwitch; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UTable", function() { return UTable; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UTableView", function() { return UTableView; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UTableViewColumn", function() { return UTableViewColumn; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UTableViewFilters", function() { return UTableViewFilters; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UTabs", function() { return UTabs; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UTab", function() { return UTab; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UText", function() { return UText; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UTextarea", function() { return UTextarea; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UToast", function() { return UToast; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UTooltip", function() { return u_tooltip_vue_UTooltip; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UTransfer", function() { return UTransfer; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UTreeView", function() { return UTreeView; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UTreeViewNode", function() { return UTreeViewNode; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UTreeViewText", function() { return UTreeViewText; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UUploader", function() { return UUploader; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UNavbarItem", function() { return UNavbarItem; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UNavbarDivider", function() { return UNavbarDivider; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UNavbarDropdown", function() { return UNavbarDropdown; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UNavbarMenu", function() { return UNavbarMenu; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UNavbarMenuItem", function() { return UNavbarMenuItem; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UNavbarMenuGroup", function() { return UNavbarMenuGroup; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UNavbarMenuDivider", function() { return UNavbarMenuDivider; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UNavbarSelect", function() { return UNavbarSelect; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UNavbarSelectItem", function() { return UNavbarSelectItem; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UNavbarSelectGroup", function() { return UNavbarSelectGroup; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UNavbarSelectDivider", function() { return UNavbarSelectDivider; });


/***/ }),

/***/ "JqIi":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__("jt2e"),
    root = typeof window === 'undefined' ? global : window,
    vendors = ['moz', 'webkit'],
    suffix = 'AnimationFrame',
    raf = root['request' + suffix],
    caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

for (var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix];
  caf = root[vendors[i] + 'Cancel' + suffix] || root[vendors[i] + 'CancelRequest' + suffix];
}

// Some versions of FF have rAF but not cAF
if (!raf || !caf) {
  var last = 0,
      id = 0,
      queue = [],
      frameDuration = 1000 / 60;

  raf = function raf(callback) {
    if (queue.length === 0) {
      var _now = now(),
          next = Math.max(0, frameDuration - (_now - last));
      last = next + _now;
      setTimeout(function () {
        var cp = queue.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0;
        for (var i = 0; i < cp.length; i++) {
          if (!cp[i].cancelled) {
            try {
              cp[i].callback(last);
            } catch (e) {
              setTimeout(function () {
                throw e;
              }, 0);
            }
          }
        }
      }, Math.round(next));
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    });
    return id;
  };

  caf = function caf(handle) {
    for (var i = 0; i < queue.length; i++) {
      if (queue[i].handle === handle) {
        queue[i].cancelled = true;
      }
    }
  };
}

module.exports = function (fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn);
};
module.exports.cancel = function () {
  caf.apply(root, arguments);
};
module.exports.polyfill = function (object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf;
  object.cancelAnimationFrame = caf;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("HLoC")))

/***/ }),

/***/ "KZlJ":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;

/***/ }),

/***/ "KjY2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"m-root_m-node_3TMk6PhN","text":"m-root_m-node_text_3TMk6PhN"};

/***/ }),

/***/ "Kjk/":
/***/ (function(module, exports) {

module.exports = {"extensionError":"只能上传{extensions}类型的文件！"}

/***/ }),

/***/ "KnU3":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("6M3H"),
    root = __webpack_require__("G7OI");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;

/***/ }),

/***/ "LRJZ":
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__("xbgg"),
    Map = __webpack_require__("8axh"),
    Promise = __webpack_require__("KnU3"),
    Set = __webpack_require__("2wsl"),
    WeakMap = __webpack_require__("4FRd"),
    baseGetTag = __webpack_require__("u2T1"),
    toSource = __webpack_require__("O9B1");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
    getTag = function getTag(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
            switch (ctorString) {
                case dataViewCtorString:
                    return dataViewTag;
                case mapCtorString:
                    return mapTag;
                case promiseCtorString:
                    return promiseTag;
                case setCtorString:
                    return setTag;
                case weakMapCtorString:
                    return weakMapTag;
            }
        }
        return result;
    };
}

module.exports = getTag;

/***/ }),

/***/ "LSVj":
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;

/***/ }),

/***/ "Lb/e":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-menu_item_35B8IUms","sub":"u-menu_item_sub_35B8IUms"};

/***/ }),

/***/ "Lw5P":
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "M1nh":
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;

/***/ }),

/***/ "M86A":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("icO0"),
    keysIn = __webpack_require__("Wuw/");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;

/***/ }),

/***/ "MXfR":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("i2mB");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

/***/ }),

/***/ "Mr8e":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-list-view_item_3IaPQN-Z"};

/***/ }),

/***/ "NIfW":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("AhZp");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;

/***/ }),

/***/ "NLcR":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-list-view_3IaPQN-Z","status":"u-list-view_status_3IaPQN-Z"};

/***/ }),

/***/ "NNjl":
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__("rvZ6"),
    stubArray = __webpack_require__("uSg+");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;

/***/ }),

/***/ "NTHQ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"sort":"u-table-view_sort_3R_Ckir_","filter":"u-table-view_filter_3R_Ckir_","root":"u-table-view_3R_Ckir_","title":"u-table-view_title_3R_Ckir_","table":"u-table-view_table_3R_Ckir_","head":"u-table-view_head_3R_Ckir_","head-title":"u-table-view_head-title_3R_Ckir_","extra":"u-table-view_extra_3R_Ckir_","body":"u-table-view_body_3R_Ckir_","center":"u-table-view_center_3R_Ckir_","resizer":"u-table-view_resizer_3R_Ckir_","cell":"u-table-view_cell_3R_Ckir_","pagination":"u-table-view_pagination_3R_Ckir_","row":"u-table-view_row_3R_Ckir_"};

/***/ }),

/***/ "NbvL":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-modal_2sWJNXzn","dialog":"u-modal_dialog_2sWJNXzn","head":"u-modal_head_2sWJNXzn","title":"u-modal_title_2sWJNXzn","close":"u-modal_close_2sWJNXzn","body":"u-modal_body_2sWJNXzn","foot":"u-modal_foot_2sWJNXzn"};

/***/ }),

/***/ "O69Z":
/***/ (function(module, exports) {

module.exports = {"extensionError":"Only {extensions} files are permitted to upload!"}

/***/ }),

/***/ "O9B1":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;

/***/ }),

/***/ "OyTA":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["async-validator"] = factory();else root["AsyncValidator"] = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 3);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* WEBPACK VAR INJECTION */
      (function (process) {
        /* unused harmony export warning */
        /* harmony export (immutable) */__webpack_exports__["d"] = format;
        /* harmony export (immutable) */__webpack_exports__["e"] = isEmptyValue;
        /* unused harmony export isEmptyObject */
        /* harmony export (immutable) */__webpack_exports__["a"] = asyncMap;
        /* harmony export (immutable) */__webpack_exports__["b"] = complementError;
        /* harmony export (immutable) */__webpack_exports__["c"] = deepMerge;
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
          return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        } : function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        };

        var formatRegExp = /%[sdj%]/g;

        var warning = function warning() {};

        // don't print warning message when in production env or node runtime
        if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
          warning = function warning(type, errors) {
            if (typeof console !== 'undefined' && console.warn) {
              if (errors.every(function (e) {
                return typeof e === 'string';
              })) {
                console.warn(type, errors);
              }
            }
          };
        }

        function format() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var i = 1;
          var f = args[0];
          var len = args.length;
          if (typeof f === 'function') {
            return f.apply(null, args.slice(1));
          }
          if (typeof f === 'string') {
            var str = String(f).replace(formatRegExp, function (x) {
              if (x === '%%') {
                return '%';
              }
              if (i >= len) {
                return x;
              }
              switch (x) {
                case '%s':
                  return String(args[i++]);
                case '%d':
                  return Number(args[i++]);
                case '%j':
                  try {
                    return JSON.stringify(args[i++]);
                  } catch (_) {
                    return '[Circular]';
                  }
                  break;
                default:
                  return x;
              }
            });
            for (var arg = args[i]; i < len; arg = args[++i]) {
              str += ' ' + arg;
            }
            return str;
          }
          return f;
        }

        function isNativeStringType(type) {
          return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
        }

        function isEmptyValue(value, type) {
          if (value === undefined || value === null) {
            return true;
          }
          if (type === 'array' && Array.isArray(value) && !value.length) {
            return true;
          }
          if (isNativeStringType(type) && typeof value === 'string' && !value) {
            return true;
          }
          return false;
        }

        function isEmptyObject(obj) {
          return Object.keys(obj).length === 0;
        }

        function asyncParallelArray(arr, func, callback) {
          var results = [];
          var total = 0;
          var arrLength = arr.length;

          function count(errors) {
            results.push.apply(results, errors);
            total++;
            if (total === arrLength) {
              callback(results);
            }
          }

          arr.forEach(function (a) {
            func(a, count);
          });
        }

        function asyncSerialArray(arr, func, callback) {
          var index = 0;
          var arrLength = arr.length;

          function next(errors) {
            if (errors && errors.length) {
              callback(errors);
              return;
            }
            var original = index;
            index = index + 1;
            if (original < arrLength) {
              func(arr[original], next);
            } else {
              callback([]);
            }
          }

          next([]);
        }

        function flattenObjArr(objArr) {
          var ret = [];
          Object.keys(objArr).forEach(function (k) {
            ret.push.apply(ret, objArr[k]);
          });
          return ret;
        }

        function asyncMap(objArr, option, func, callback) {
          if (option.first) {
            var flattenArr = flattenObjArr(objArr);
            return asyncSerialArray(flattenArr, func, callback);
          }
          var firstFields = option.firstFields || [];
          if (firstFields === true) {
            firstFields = Object.keys(objArr);
          }
          var objArrKeys = Object.keys(objArr);
          var objArrLength = objArrKeys.length;
          var total = 0;
          var results = [];
          var next = function next(errors) {
            results.push.apply(results, errors);
            total++;
            if (total === objArrLength) {
              callback(results);
            }
          };
          objArrKeys.forEach(function (key) {
            var arr = objArr[key];
            if (firstFields.indexOf(key) !== -1) {
              asyncSerialArray(arr, func, next);
            } else {
              asyncParallelArray(arr, func, next);
            }
          });
        }

        function complementError(rule) {
          return function (oe) {
            if (oe && (typeof oe === 'undefined' ? 'undefined' : _typeof(oe)) === 'object') {
              oe.field = oe.field || rule.fullField;
              return oe;
            }
            return {
              message: typeof oe === 'string' ? oe : undefined,
              field: oe.field || rule.fullField
            };
          };
        }

        function deepMerge(target, source) {
          if (source) {
            for (var s in source) {
              if (source.hasOwnProperty(s)) {
                var value = source[s];
                if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && _typeof(target[s]) === 'object') {
                  target[s] = _extends({}, target[s], value);
                } else {
                  target[s] = value;
                }
              }
            }
          }
          return target;
        }
        /* WEBPACK VAR INJECTION */
      }).call(__webpack_exports__, __webpack_require__(5));

      /***/
    },
    /* 1 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__required__ = __webpack_require__(2);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__whitespace__ = __webpack_require__(8);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(9);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__range__ = __webpack_require__(10);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__enum__ = __webpack_require__(11);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__pattern__ = __webpack_require__(12);

      /* harmony default export */__webpack_exports__["a"] = {
        required: __WEBPACK_IMPORTED_MODULE_0__required__["a" /* default */],
        whitespace: __WEBPACK_IMPORTED_MODULE_1__whitespace__["a" /* default */],
        type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
        range: __WEBPACK_IMPORTED_MODULE_3__range__["a" /* default */],
        enum: __WEBPACK_IMPORTED_MODULE_4__enum__["a" /* default */],
        pattern: __WEBPACK_IMPORTED_MODULE_5__pattern__["a" /* default */]
      };

      /***/
    },
    /* 2 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

      /**
       *  Rule for validating required fields.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param source The source object being validated.
       *  @param errors An array of errors that this rule may add
       *  validation errors to.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function required(rule, value, source, errors, options, type) {
        if (rule.required && (!source.hasOwnProperty(rule.field) || __WEBPACK_IMPORTED_MODULE_0__util__["e" /* isEmptyValue */](value, type || rule.type))) {
          errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages.required, rule.fullField));
        }
      }

      /* harmony default export */__webpack_exports__["a"] = required;

      /***/
    },
    /* 3 */
    /***/function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(4);

      /***/
    },
    /* 4 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__validator___ = __webpack_require__(6);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__messages__ = __webpack_require__(26);
      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      };

      /**
       *  Encapsulates a validation schema.
       *
       *  @param descriptor An object declaring validation rules
       *  for this schema.
       */
      function Schema(descriptor) {
        this.rules = null;
        this._messages = __WEBPACK_IMPORTED_MODULE_2__messages__["a" /* messages */];
        this.define(descriptor);
      }

      Schema.prototype = {
        messages: function messages(_messages) {
          if (_messages) {
            this._messages = Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* deepMerge */])(Object(__WEBPACK_IMPORTED_MODULE_2__messages__["b" /* newMessages */])(), _messages);
          }
          return this._messages;
        },
        define: function define(rules) {
          if (!rules) {
            throw new Error('Cannot configure a schema with no rules');
          }
          if ((typeof rules === 'undefined' ? 'undefined' : _typeof(rules)) !== 'object' || Array.isArray(rules)) {
            throw new Error('Rules must be an object');
          }
          this.rules = {};
          var z = void 0;
          var item = void 0;
          for (z in rules) {
            if (rules.hasOwnProperty(z)) {
              item = rules[z];
              this.rules[z] = Array.isArray(item) ? item : [item];
            }
          }
        },
        validate: function validate(source_) {
          var _this = this;

          var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var oc = arguments[2];

          var source = source_;
          var options = o;
          var callback = oc;
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          if (!this.rules || Object.keys(this.rules).length === 0) {
            if (callback) {
              callback();
            }
            return;
          }
          function complete(results) {
            var i = void 0;
            var field = void 0;
            var errors = [];
            var fields = {};

            function add(e) {
              if (Array.isArray(e)) {
                errors = errors.concat.apply(errors, e);
              } else {
                errors.push(e);
              }
            }

            for (i = 0; i < results.length; i++) {
              add(results[i]);
            }
            if (!errors.length) {
              errors = null;
              fields = null;
            } else {
              for (i = 0; i < errors.length; i++) {
                field = errors[i].field;
                fields[field] = fields[field] || [];
                fields[field].push(errors[i]);
              }
            }
            callback(errors, fields);
          }

          if (options.messages) {
            var messages = this.messages();
            if (messages === __WEBPACK_IMPORTED_MODULE_2__messages__["a" /* messages */]) {
              messages = Object(__WEBPACK_IMPORTED_MODULE_2__messages__["b" /* newMessages */])();
            }
            Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* deepMerge */])(messages, options.messages);
            options.messages = messages;
          } else {
            options.messages = this.messages();
          }
          var arr = void 0;
          var value = void 0;
          var series = {};
          var keys = options.keys || Object.keys(this.rules);
          keys.forEach(function (z) {
            arr = _this.rules[z];
            value = source[z];
            arr.forEach(function (r) {
              var rule = r;
              if (typeof rule.transform === 'function') {
                if (source === source_) {
                  source = _extends({}, source);
                }
                value = source[z] = rule.transform(value);
              }
              if (typeof rule === 'function') {
                rule = {
                  validator: rule
                };
              } else {
                rule = _extends({}, rule);
              }
              rule.validator = _this.getValidationMethod(rule);
              rule.field = z;
              rule.fullField = rule.fullField || z;
              rule.type = _this.getType(rule);
              if (!rule.validator) {
                return;
              }
              series[z] = series[z] || [];
              series[z].push({
                rule: rule,
                value: value,
                source: source,
                field: z
              });
            });
          });
          var errorFields = {};
          Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* asyncMap */])(series, options, function (data, doIt) {
            var rule = data.rule;
            var deep = (rule.type === 'object' || rule.type === 'array') && (_typeof(rule.fields) === 'object' || _typeof(rule.defaultField) === 'object');
            deep = deep && (rule.required || !rule.required && data.value);
            rule.field = data.field;
            function addFullfield(key, schema) {
              return _extends({}, schema, {
                fullField: rule.fullField + '.' + key
              });
            }

            function cb() {
              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

              var errors = e;
              if (!Array.isArray(errors)) {
                errors = [errors];
              }
              if (errors.length) {
                errors = errors.map(function (error) {
                  return true;
                });
              }
              if (errors.length && rule.message) {
                errors = [].concat(rule.message);
              }

              errors = errors.map(Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* complementError */])(rule));

              if (options.first && errors.length) {
                errorFields[rule.field] = 1;
                return doIt(errors);
              }
              if (!deep) {
                doIt(errors);
              } else {
                // if rule is required but the target object
                // does not exist fail at the rule level and don't
                // go deeper
                if (rule.required && !data.value) {
                  if (rule.message) {
                    errors = [].concat(rule.message).map(Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* complementError */])(rule));
                  } else if (options.error) {
                    errors = [options.error(rule, Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */])(options.messages.required, rule.field))];
                  } else {
                    errors = [];
                  }
                  return doIt(errors);
                }

                var fieldsSchema = {};
                if (rule.defaultField) {
                  for (var k in data.value) {
                    if (data.value.hasOwnProperty(k)) {
                      fieldsSchema[k] = rule.defaultField;
                    }
                  }
                }
                fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
                for (var f in fieldsSchema) {
                  if (fieldsSchema.hasOwnProperty(f)) {
                    var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
                    fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
                  }
                }
                var schema = new Schema(fieldsSchema);
                schema.messages(options.messages);
                if (data.rule.options) {
                  data.rule.options.messages = options.messages;
                  data.rule.options.error = options.error;
                }
                schema.validate(data.value, data.rule.options || options, function (errs) {
                  doIt(errs && errs.length ? errors.concat(errs) : errs);
                });
              }
            }

            var res = rule.validator(rule, data.value, cb, data.source, options);
            if (res && res.then) {
              res.then(function () {
                return cb();
              }, function (e) {
                return cb(e);
              });
            }
          }, function (results) {
            complete(results);
          });
        },
        getType: function getType(rule) {
          if (rule.type === undefined && rule.pattern instanceof RegExp) {
            rule.type = 'pattern';
          }
          if (typeof rule.validator !== 'function' && rule.type && !__WEBPACK_IMPORTED_MODULE_1__validator___["a" /* default */].hasOwnProperty(rule.type)) {
            throw new Error(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */])('Unknown rule type %s', rule.type));
          }
          return rule.type || 'string';
        },
        getValidationMethod: function getValidationMethod(rule) {
          if (typeof rule.validator === 'function') {
            return rule.validator;
          }
          var keys = Object.keys(rule);
          var messageIndex = keys.indexOf('message');
          if (messageIndex !== -1) {
            keys.splice(messageIndex, 1);
          }
          if (keys.length === 1 && keys[0] === 'required') {
            return __WEBPACK_IMPORTED_MODULE_1__validator___["a" /* default */].required;
          }
          return __WEBPACK_IMPORTED_MODULE_1__validator___["a" /* default */][this.getType(rule)] || false;
        }
      };

      Schema.register = function register(type, validator) {
        if (typeof validator !== 'function') {
          throw new Error('Cannot register a validator by type, validator is not a function');
        }
        __WEBPACK_IMPORTED_MODULE_1__validator___["a" /* default */][type] = validator;
      };

      Schema.messages = __WEBPACK_IMPORTED_MODULE_2__messages__["a" /* messages */];

      /* harmony default export */__webpack_exports__["default"] = Schema;

      /***/
    },
    /* 5 */
    /***/function (module, exports) {

      // shim for using process in browser
      var process = module.exports = {};

      // cached from whatever global is present so that test runners that stub it
      // don't break things.  But we need to wrap it in a try catch in case it is
      // wrapped in strict mode code which doesn't define any globals.  It's inside a
      // function because try/catches deoptimize in certain engines.

      var cachedSetTimeout;
      var cachedClearTimeout;

      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }
      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }
      (function () {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;

      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }

      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }

      process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };

      // v8 likes predictible objects
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = ''; // empty string to avoid regexp issues
      process.versions = {};

      function noop() {}

      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;

      process.listeners = function (name) {
        return [];
      };

      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };

      process.cwd = function () {
        return '/';
      };
      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };
      process.umask = function () {
        return 0;
      };

      /***/
    },
    /* 6 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__string__ = __webpack_require__(7);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__method__ = __webpack_require__(13);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__(14);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__boolean__ = __webpack_require__(15);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__regexp__ = __webpack_require__(16);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__integer__ = __webpack_require__(17);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__float__ = __webpack_require__(18);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__array__ = __webpack_require__(19);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__object__ = __webpack_require__(20);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_9__enum__ = __webpack_require__(21);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_10__pattern__ = __webpack_require__(22);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_11__date__ = __webpack_require__(23);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_12__required__ = __webpack_require__(24);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_13__type__ = __webpack_require__(25);

      /* harmony default export */__webpack_exports__["a"] = {
        string: __WEBPACK_IMPORTED_MODULE_0__string__["a" /* default */],
        method: __WEBPACK_IMPORTED_MODULE_1__method__["a" /* default */],
        number: __WEBPACK_IMPORTED_MODULE_2__number__["a" /* default */],
        boolean: __WEBPACK_IMPORTED_MODULE_3__boolean__["a" /* default */],
        regexp: __WEBPACK_IMPORTED_MODULE_4__regexp__["a" /* default */],
        integer: __WEBPACK_IMPORTED_MODULE_5__integer__["a" /* default */],
        float: __WEBPACK_IMPORTED_MODULE_6__float__["a" /* default */],
        array: __WEBPACK_IMPORTED_MODULE_7__array__["a" /* default */],
        object: __WEBPACK_IMPORTED_MODULE_8__object__["a" /* default */],
        enum: __WEBPACK_IMPORTED_MODULE_9__enum__["a" /* default */],
        pattern: __WEBPACK_IMPORTED_MODULE_10__pattern__["a" /* default */],
        date: __WEBPACK_IMPORTED_MODULE_11__date__["a" /* default */],
        url: __WEBPACK_IMPORTED_MODULE_13__type__["a" /* default */],
        hex: __WEBPACK_IMPORTED_MODULE_13__type__["a" /* default */],
        email: __WEBPACK_IMPORTED_MODULE_13__type__["a" /* default */],
        required: __WEBPACK_IMPORTED_MODULE_12__required__["a" /* default */]
      };

      /***/
    },
    /* 7 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);

      /**
       *  Performs validation for string types.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param callback The callback function.
       *  @param source The source object being validated.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function string(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value, 'string') && !rule.required) {
            return callback();
          }
          __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options, 'string');
          if (!Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value, 'string')) {
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].range(rule, value, source, errors, options);
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].pattern(rule, value, source, errors, options);
            if (rule.whitespace === true) {
              __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].whitespace(rule, value, source, errors, options);
            }
          }
        }
        callback(errors);
      }

      /* harmony default export */__webpack_exports__["a"] = string;

      /***/
    },
    /* 8 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

      /**
       *  Rule for validating whitespace.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param source The source object being validated.
       *  @param errors An array of errors that this rule may add
       *  validation errors to.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function whitespace(rule, value, source, errors, options) {
        if (/^\s+$/.test(value) || value === '') {
          errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages.whitespace, rule.fullField));
        }
      }

      /* harmony default export */__webpack_exports__["a"] = whitespace;

      /***/
    },
    /* 9 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__required__ = __webpack_require__(2);
      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      };

      /* eslint max-len:0 */

      var pattern = {
        // http://emailregex.com/
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        url: new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i'),
        hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
      };

      var types = {
        integer: function integer(value) {
          return types.number(value) && parseInt(value, 10) === value;
        },
        float: function float(value) {
          return types.number(value) && !types.integer(value);
        },
        array: function array(value) {
          return Array.isArray(value);
        },
        regexp: function regexp(value) {
          if (value instanceof RegExp) {
            return true;
          }
          try {
            return !!new RegExp(value);
          } catch (e) {
            return false;
          }
        },
        date: function date(value) {
          return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function';
        },
        number: function number(value) {
          if (isNaN(value)) {
            return false;
          }
          return typeof value === 'number';
        },
        object: function object(value) {
          return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && !types.array(value);
        },
        method: function method(value) {
          return typeof value === 'function';
        },
        email: function email(value) {
          return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
        },
        url: function url(value) {
          return typeof value === 'string' && !!value.match(pattern.url);
        },
        hex: function hex(value) {
          return typeof value === 'string' && !!value.match(pattern.hex);
        }
      };

      /**
       *  Rule for validating the type of a value.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param source The source object being validated.
       *  @param errors An array of errors that this rule may add
       *  validation errors to.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function type(rule, value, source, errors, options) {
        if (rule.required && value === undefined) {
          Object(__WEBPACK_IMPORTED_MODULE_1__required__["a" /* default */])(rule, value, source, errors, options);
          return;
        }
        var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
        var ruleType = rule.type;
        if (custom.indexOf(ruleType) > -1) {
          if (!types[ruleType](value)) {
            errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages.types[ruleType], rule.fullField, rule.type));
          }
          // straight typeof check
        } else if (ruleType && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== rule.type) {
          errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages.types[ruleType], rule.fullField, rule.type));
        }
      }

      /* harmony default export */__webpack_exports__["a"] = type;

      /***/
    },
    /* 10 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

      /**
       *  Rule for validating minimum and maximum allowed values.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param source The source object being validated.
       *  @param errors An array of errors that this rule may add
       *  validation errors to.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function range(rule, value, source, errors, options) {
        var len = typeof rule.len === 'number';
        var min = typeof rule.min === 'number';
        var max = typeof rule.max === 'number';
        var val = value;
        var key = null;
        var num = typeof value === 'number';
        var str = typeof value === 'string';
        var arr = Array.isArray(value);
        if (num) {
          key = 'number';
        } else if (str) {
          key = 'string';
        } else if (arr) {
          key = 'array';
        }
        // if the value is not of a supported type for range validation
        // the validation rule rule should use the
        // type property to also test for a particular type
        if (!key) {
          return false;
        }
        if (str || arr) {
          val = value.length;
        }
        if (len) {
          if (val !== rule.len) {
            errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages[key].len, rule.fullField, rule.len));
          }
        } else if (min && !max && val < rule.min) {
          errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages[key].min, rule.fullField, rule.min));
        } else if (max && !min && val > rule.max) {
          errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages[key].max, rule.fullField, rule.max));
        } else if (min && max && (val < rule.min || val > rule.max)) {
          errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages[key].range, rule.fullField, rule.min, rule.max));
        }
      }

      /* harmony default export */__webpack_exports__["a"] = range;

      /***/
    },
    /* 11 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

      var ENUM = 'enum';

      /**
       *  Rule for validating a value exists in an enumerable list.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param source The source object being validated.
       *  @param errors An array of errors that this rule may add
       *  validation errors to.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function enumerable(rule, value, source, errors, options) {
        rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
        if (rule[ENUM].indexOf(value) === -1) {
          errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
        }
      }

      /* harmony default export */__webpack_exports__["a"] = enumerable;

      /***/
    },
    /* 12 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

      /**
       *  Rule for validating a regular expression pattern.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param source The source object being validated.
       *  @param errors An array of errors that this rule may add
       *  validation errors to.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function pattern(rule, value, source, errors, options) {
        if (rule.pattern) {
          if (rule.pattern instanceof RegExp) {
            // if a RegExp instance is passed, reset `lastIndex` in case its `global`
            // flag is accidentally set to `true`, which in a validation scenario
            // is not necessary and the result might be misleading
            rule.pattern.lastIndex = 0;
            if (!rule.pattern.test(value)) {
              errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
            }
          } else if (typeof rule.pattern === 'string') {
            var _pattern = new RegExp(rule.pattern);
            if (!_pattern.test(value)) {
              errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
            }
          }
        }
      }

      /* harmony default export */__webpack_exports__["a"] = pattern;

      /***/
    },
    /* 13 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);

      /**
       *  Validates a function.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param callback The callback function.
       *  @param source The source object being validated.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function method(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value) && !rule.required) {
            return callback();
          }
          __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
          if (value !== undefined) {
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
          }
        }
        callback(errors);
      }

      /* harmony default export */__webpack_exports__["a"] = method;

      /***/
    },
    /* 14 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);

      /**
       *  Validates a number.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param callback The callback function.
       *  @param source The source object being validated.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function number(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value) && !rule.required) {
            return callback();
          }
          __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
          if (value !== undefined) {
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].range(rule, value, source, errors, options);
          }
        }
        callback(errors);
      }

      /* harmony default export */__webpack_exports__["a"] = number;

      /***/
    },
    /* 15 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__rule___ = __webpack_require__(1);

      /**
       *  Validates a boolean.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param callback The callback function.
       *  @param source The source object being validated.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function boolean(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (Object(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* isEmptyValue */])(value) && !rule.required) {
            return callback();
          }
          __WEBPACK_IMPORTED_MODULE_1__rule___["a" /* default */].required(rule, value, source, errors, options);
          if (value !== undefined) {
            __WEBPACK_IMPORTED_MODULE_1__rule___["a" /* default */].type(rule, value, source, errors, options);
          }
        }
        callback(errors);
      }

      /* harmony default export */__webpack_exports__["a"] = boolean;

      /***/
    },
    /* 16 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);

      /**
       *  Validates the regular expression type.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param callback The callback function.
       *  @param source The source object being validated.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function regexp(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value) && !rule.required) {
            return callback();
          }
          __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
          if (!Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value)) {
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
          }
        }
        callback(errors);
      }

      /* harmony default export */__webpack_exports__["a"] = regexp;

      /***/
    },
    /* 17 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);

      /**
       *  Validates a number is an integer.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param callback The callback function.
       *  @param source The source object being validated.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function integer(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value) && !rule.required) {
            return callback();
          }
          __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
          if (value !== undefined) {
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].range(rule, value, source, errors, options);
          }
        }
        callback(errors);
      }

      /* harmony default export */__webpack_exports__["a"] = integer;

      /***/
    },
    /* 18 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);

      /**
       *  Validates a number is a floating point number.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param callback The callback function.
       *  @param source The source object being validated.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function floatFn(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value) && !rule.required) {
            return callback();
          }
          __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
          if (value !== undefined) {
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].range(rule, value, source, errors, options);
          }
        }
        callback(errors);
      }

      /* harmony default export */__webpack_exports__["a"] = floatFn;

      /***/
    },
    /* 19 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);

      /**
       *  Validates an array.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param callback The callback function.
       *  @param source The source object being validated.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function array(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value, 'array') && !rule.required) {
            return callback();
          }
          __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options, 'array');
          if (!Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value, 'array')) {
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].range(rule, value, source, errors, options);
          }
        }
        callback(errors);
      }

      /* harmony default export */__webpack_exports__["a"] = array;

      /***/
    },
    /* 20 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);

      /**
       *  Validates an object.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param callback The callback function.
       *  @param source The source object being validated.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function object(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value) && !rule.required) {
            return callback();
          }
          __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
          if (value !== undefined) {
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
          }
        }
        callback(errors);
      }

      /* harmony default export */__webpack_exports__["a"] = object;

      /***/
    },
    /* 21 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);

      var ENUM = 'enum';

      /**
       *  Validates an enumerable list.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param callback The callback function.
       *  @param source The source object being validated.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function enumerable(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value) && !rule.required) {
            return callback();
          }
          __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
          if (value) {
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */][ENUM](rule, value, source, errors, options);
          }
        }
        callback(errors);
      }

      /* harmony default export */__webpack_exports__["a"] = enumerable;

      /***/
    },
    /* 22 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);

      /**
       *  Validates a regular expression pattern.
       *
       *  Performs validation when a rule only contains
       *  a pattern property but is not declared as a string type.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param callback The callback function.
       *  @param source The source object being validated.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function pattern(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value, 'string') && !rule.required) {
            return callback();
          }
          __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
          if (!Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value, 'string')) {
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].pattern(rule, value, source, errors, options);
          }
        }
        callback(errors);
      }

      /* harmony default export */__webpack_exports__["a"] = pattern;

      /***/
    },
    /* 23 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);

      function date(rule, value, callback, source, options) {
        // console.log('integer rule called %j', rule);
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        // console.log('validate on %s value', value);
        if (validate) {
          if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value) && !rule.required) {
            return callback();
          }
          __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
          if (!Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value)) {
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
            if (value) {
              __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].range(rule, value.getTime(), source, errors, options);
            }
          }
        }
        callback(errors);
      }

      /* harmony default export */__webpack_exports__["a"] = date;

      /***/
    },
    /* 24 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(1);
      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      };

      function required(rule, value, callback, source, options) {
        var errors = [];
        var type = Array.isArray(value) ? 'array' : typeof value === 'undefined' ? 'undefined' : _typeof(value);
        __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options, type);
        callback(errors);
      }

      /* harmony default export */__webpack_exports__["a"] = required;

      /***/
    },
    /* 25 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);

      function type(rule, value, callback, source, options) {
        var ruleType = rule.type;
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value, ruleType) && !rule.required) {
            return callback();
          }
          __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options, ruleType);
          if (!Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value, ruleType)) {
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
          }
        }
        callback(errors);
      }

      /* harmony default export */__webpack_exports__["a"] = type;

      /***/
    },
    /* 26 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (immutable) */
      __webpack_exports__["b"] = newMessages;
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "a", function () {
        return messages;
      });
      function newMessages() {
        return {
          default: 'Validation error on field %s',
          required: '%s is required',
          enum: '%s must be one of %s',
          whitespace: '%s cannot be empty',
          date: {
            format: '%s date %s is invalid for format %s',
            parse: '%s date could not be parsed, %s is invalid ',
            invalid: '%s date %s is invalid'
          },
          types: {
            string: '%s is not a %s',
            method: '%s is not a %s (function)',
            array: '%s is not an %s',
            object: '%s is not an %s',
            number: '%s is not a %s',
            date: '%s is not a %s',
            boolean: '%s is not a %s',
            integer: '%s is not an %s',
            float: '%s is not a %s',
            regexp: '%s is not a valid %s',
            email: '%s is not a valid %s',
            url: '%s is not a valid %s',
            hex: '%s is not a valid %s'
          },
          string: {
            len: '%s must be exactly %s characters',
            min: '%s must be at least %s characters',
            max: '%s cannot be longer than %s characters',
            range: '%s must be between %s and %s characters'
          },
          number: {
            len: '%s must equal %s',
            min: '%s cannot be less than %s',
            max: '%s cannot be greater than %s',
            range: '%s must be between %s and %s'
          },
          array: {
            len: '%s must be exactly %s in length',
            min: '%s cannot be less than %s in length',
            max: '%s cannot be greater than %s in length',
            range: '%s must be between %s and %s in length'
          },
          pattern: {
            mismatch: '%s value %s does not match pattern %s'
          },
          clone: function clone() {
            var cloned = JSON.parse(JSON.stringify(this));
            cloned.clone = this.clone;
            return cloned;
          }
        };
      }

      var messages = newMessages();

      /***/
    }]
    /******/)
  );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("0Sdb")(module)))

/***/ }),

/***/ "PP8O":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"clearable":"u-select_clearable_12tiTkDI","root":"u-select_12tiTkDI","tag-remove":"u-select_tag-remove_12tiTkDI","baseline":"u-select_baseline_12tiTkDI","placeholder":"u-select_placeholder_12tiTkDI","text":"u-select_text_12tiTkDI","tag":"u-select_tag_12tiTkDI","input":"u-select_input_12tiTkDI","popper":"u-select_popper_12tiTkDI","status":"u-select_status_12tiTkDI"};

/***/ }),

/***/ "PkDv":
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__("8cZL");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;

/***/ }),

/***/ "PlVZ":
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__("LRJZ"),
    isObjectLike = __webpack_require__("c/Dk");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;

/***/ }),

/***/ "PwjO":
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__("5vQW"),
    eq = __webpack_require__("T94g");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;

/***/ }),

/***/ "Q0Ca":
/***/ (function(module, exports) {



/***/ }),

/***/ "QBxi":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-slider_1kE0FMDD","body":"u-slider_body_1kE0FMDD","track":"u-slider_track_1kE0FMDD","trail":"u-slider_trail_1kE0FMDD","bound":"u-slider_bound_1kE0FMDD","handle":"u-slider_handle_1kE0FMDD"};

/***/ }),

/***/ "QRjK":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "QWy2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-list-view_group_3IaPQN-Z","head":"u-list-view_group_head_3IaPQN-Z","text":"u-list-view_group_text_3IaPQN-Z","body":"u-list-view_group_body_3IaPQN-Z","expander":"u-list-view_group_expander_3IaPQN-Z","extra":"u-list-view_group_extra_3IaPQN-Z"};

/***/ }),

/***/ "QYjG":
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__("YO39"),
    baseUnary = __webpack_require__("a7Aj"),
    nodeUtil = __webpack_require__("0eq4");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;

/***/ }),

/***/ "QjHm":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

/***/ }),

/***/ "QoRe":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-grid-layout_kFpRoXz6","column":"u-grid-layout_column_kFpRoXz6"};

/***/ }),

/***/ "R43W":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"i-icon_3g1fVXe1"};

/***/ }),

/***/ "R9F4":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"e-watermark_t7HD-Xfd","canvas":"e-watermark_canvas_t7HD-Xfd","mark":"e-watermark_mark_t7HD-Xfd"};

/***/ }),

/***/ "R9el":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-text_2jU3BPVe"};

/***/ }),

/***/ "RWOR":
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__("E7Ig"),
    mapCacheDelete = __webpack_require__("MXfR"),
    mapCacheGet = __webpack_require__("z55k"),
    mapCacheHas = __webpack_require__("4Bks"),
    mapCacheSet = __webpack_require__("CxG4");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;

/***/ }),

/***/ "RaKF":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"m-singlex_2iB4HxRd"};

/***/ }),

/***/ "T3pd":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-crumb_1SP0CVmb"};

/***/ }),

/***/ "T6JL":
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

/***/ }),

/***/ "T94g":
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

module.exports = eq;

/***/ }),

/***/ "TAt7":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-menu_divider_35B8IUms"};

/***/ }),

/***/ "TUmp":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-link_1kwfhlPk"};

/***/ }),

/***/ "Tbo7":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"e-ripple_3fp7CO6_","reference":"e-ripple_reference_3fp7CO6_"};

/***/ }),

/***/ "TkWg":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-select_item_12tiTkDI"};

/***/ }),

/***/ "TzkQ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-list-view_divider_3IaPQN-Z"};

/***/ }),

/***/ "Ud43":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-loading_U21w9l1a","icon":"u-loading_icon_U21w9l1a","body":"u-loading_body_U21w9l1a"};

/***/ }),

/***/ "UgC+":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-uploader_2oZi0c3a","iframe":"u-uploader_iframe_2oZi0c3a","form":"u-uploader_form_2oZi0c3a","input":"u-uploader_input_2oZi0c3a"};

/***/ }),

/***/ "Unbz":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("G7OI");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function now() {
  return root.Date.now();
};

module.exports = now;

/***/ }),

/***/ "Uyw1":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("8JGq"),
    isSymbol = __webpack_require__("cC8b");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = toNumber;

/***/ }),

/***/ "Vaxj":
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

/***/ }),

/***/ "Vpw6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "WSuG":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("I4jp");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

/***/ }),

/***/ "Wuw/":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__("gFpg"),
    baseKeysIn = __webpack_require__("syEQ"),
    isArrayLike = __webpack_require__("tEV9");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;

/***/ }),

/***/ "Xor5":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("I4jp");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

/***/ }),

/***/ "Xvt7":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__("eX1V");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;

/***/ }),

/***/ "Y/yL":
/***/ (function(module, exports) {

module.exports = {"dialog":"提示","ok":"确定","cancel":"取消"}

/***/ }),

/***/ "YO39":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("u2T1"),
    isLength = __webpack_require__("FKbo"),
    isObjectLike = __webpack_require__("c/Dk");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

/***/ }),

/***/ "Ya8b":
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__("6S3C");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;

/***/ }),

/***/ "YjkK":
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;

/***/ }),

/***/ "ZS6Z":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("I4jp");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

/***/ }),

/***/ "ZWAe":
/***/ (function(module, exports) {

module.exports = {"province":"省","city":"市","district":"区"}

/***/ }),

/***/ "ZcvT":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("DEgf");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;

/***/ }),

/***/ "ZjDy":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-article_1qHStZ5W"};

/***/ }),

/***/ "a7Aj":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

module.exports = baseUnary;

/***/ }),

/***/ "a7d+":
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__("HMD2"),
    getPrototype = __webpack_require__("Ya8b"),
    getSymbols = __webpack_require__("NNjl"),
    stubArray = __webpack_require__("uSg+");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function (object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;

/***/ }),

/***/ "aNuv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-navbar_select_item_1r-oD5i-"};

/***/ }),

/***/ "aqWe":
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

/***/ }),

/***/ "b/5c":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-checkboxes_3310lB7I"};

/***/ }),

/***/ "b6Tt":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var root = __webpack_require__("G7OI");

/** Detect free variable `exports`. */
var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("0Sdb")(module)))

/***/ }),

/***/ "ba1e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_raf__ = __webpack_require__("JqIi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_raf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_raf__);
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
var isIE = function () {
  var ua = navigator.userAgent;
  var isIE11 = /Trident/.test(ua);
  var isIE10 = /MSIE 10/.test(ua);
  var isIE9 = /MSIE 9/.test(ua);

  return function (version) {
    if (version === 11) {
      return isIE11;
    }
    if (version === 10) {
      return isIE10;
    }
    if (version === 9) {
      return isIE9;
    }
    return isIE11 || isIE10 || isIE9;
  };
}();

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var type = arguments[3];

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && parent.nodeName === 'HTML') {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if ((isIE10 || isIE(9) && type === 'reference') && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition, 'reference');
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // floor sides to avoid blurry text
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.floor(popper.top),
    bottom: Math.floor(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = isIE(9) ? 'translate(' + left + 'px, ' + top + 'px)' : 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);
  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
__WEBPACK_IMPORTED_MODULE_0_raf___default.a.polyfill();

var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */

Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["a"] = (Popper);
//# sourceMappingURL=popper.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("HLoC")))

/***/ }),

/***/ "bmBY":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("3TMU"),
    isMasked = __webpack_require__("2Exp"),
    isObject = __webpack_require__("8JGq"),
    toSource = __webpack_require__("O9B1");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

/***/ }),

/***/ "c/Dk":
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

module.exports = isObjectLike;

/***/ }),

/***/ "cC8b":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var baseGetTag = __webpack_require__("u2T1"),
    isObjectLike = __webpack_require__("c/Dk");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

module.exports = isSymbol;

/***/ }),

/***/ "cI4t":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-switch_2iV03KvG","button":"u-switch_button_2iV03KvG","text":"u-switch_text_2iV03KvG"};

/***/ }),

/***/ "cOE1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-steps_k2gEahJU","head":"u-steps_head_k2gEahJU","item":"u-steps_item_k2gEahJU","item-body":"u-steps_item-body_k2gEahJU","radio":"u-steps_radio_k2gEahJU","title":"u-steps_title_k2gEahJU","body":"u-steps_body_k2gEahJU"};

/***/ }),

/***/ "cR36":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"m-parent_m-child_387c7kxu"};

/***/ }),

/***/ "ce+E":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-menu_35B8IUms"};

/***/ }),

/***/ "da8S":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-label_dToDQ7RP"};

/***/ }),

/***/ "ddk0":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-collapse_3XHwveoE"};

/***/ }),

/***/ "dsLM":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-form_mYlfDeuD"};

/***/ }),

/***/ "eS0v":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("AhZp");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

/***/ }),

/***/ "eX1V":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("G7OI");

/** Built-in value references. */
var _Symbol = root.Symbol;

module.exports = _Symbol;

/***/ }),

/***/ "f3yU":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-sample_1IDVCCRu"};

/***/ }),

/***/ "fVHz":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("G7OI");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;

/***/ }),

/***/ "fvDA":
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__("6S3C");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;

/***/ }),

/***/ "gCkD":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-collapse_item_3XHwveoE","head":"u-collapse_item_head_3XHwveoE","body":"u-collapse_item_body_3XHwveoE","expander":"u-collapse_item_expander_3XHwveoE","extra":"u-collapse_item_extra_3XHwveoE"};

/***/ }),

/***/ "gFpg":
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__("1jLI"),
    isArguments = __webpack_require__("z6LN"),
    isArray = __webpack_require__("M1nh"),
    isBuffer = __webpack_require__("3EcN"),
    isIndex = __webpack_require__("DR95"),
    isTypedArray = __webpack_require__("QYjG");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
    // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' ||
    // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') ||
    // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
    // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;

/***/ }),

/***/ "ggS9":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-tabs_33L2I1QU","head":"u-tabs_head_33L2I1QU","item":"u-tabs_item_33L2I1QU","close":"u-tabs_close_33L2I1QU","body":"u-tabs_body_33L2I1QU","extra":"u-tabs_extra_33L2I1QU"};

/***/ }),

/***/ "glep":
/***/ (function(module, exports) {

module.exports = {"emptyText":"No matching data"}

/***/ }),

/***/ "h9iv":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("I4jp");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

/***/ }),

/***/ "hmTu":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"clearable":"u-navbar_select_clearable_1r-oD5i-","root":"u-navbar_select_1r-oD5i-","tag-remove":"u-navbar_select_tag-remove_1r-oD5i-","baseline":"u-navbar_select_baseline_1r-oD5i-","placeholder":"u-navbar_select_placeholder_1r-oD5i-","text":"u-navbar_select_text_1r-oD5i-","tag":"u-navbar_select_tag_1r-oD5i-","input":"u-navbar_select_input_1r-oD5i-","popper":"u-navbar_select_popper_1r-oD5i-","status":"u-navbar_select_status_1r-oD5i-"};

/***/ }),

/***/ "hsqN":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-linear-progress_2S1VzfdD","track":"u-linear-progress_track_2S1VzfdD","trail":"u-linear-progress_trail_2S1VzfdD"};

/***/ }),

/***/ "i2mB":
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__("FRRE");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

module.exports = getMapData;

/***/ }),

/***/ "iBgl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-table-view_filters_filter_3R_Ckir_"};

/***/ }),

/***/ "icO0":
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__("PwjO"),
    baseAssignValue = __webpack_require__("5vQW");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;

/***/ }),

/***/ "jT7S":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-spinner_2FEs3KZl","spin":"u-spinner_spin_2FEs3KZl"};

/***/ }),

/***/ "jkUl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.installComponents = installComponents;
exports.installDirectives = installDirectives;
exports.installFilters = installFilters;
exports.install = install;
/**
 * 在 Vue 中安装组件
 * @param {Object|Array} Components - 组件集合
 * @param {Vue} Vue
 */
function installComponents(Vue, Components) {
    var caseRE = /^[A-Z]/;
    Object.keys(Components).forEach(function (key) {
        if (!caseRE.test(key)) // 如果为大写则是组件
            return;
        Vue.component(key, Components[key]);
    });
}

/**
 * 在 Vue 中安装指令
 * @param {Object} directives - 指令集合
 * @param {Vue} Vue - 全局的 Vue
 */
function installDirectives(Vue, directives) {
    Object.keys(directives).forEach(function (key) {
        return Vue.directive(key, directives[key]);
    });
}

/**
 * 在 Vue 中安装过滤器
 * @param {Object} filters - 过滤器集合
 * @param {Vue} Vue - 全局的 Vue
 */
function installFilters(Vue, filters) {
    Object.keys(filters).forEach(function (key) {
        return Vue.filter(key, filters[key]);
    });
}

/**
 * 在 Vue 中安装组件库
 * @param {Vue} Vue - 全局的 Vue
 * @param {Object} library - 包含组件，指令，过滤器
 */
function install(Vue, library) {
    // Compability i18n
    Vue.prototype.$t = Vue.prototype.$t || function (key) {
        return this.$options.i18n.messages['zh-CN'][key];
    };

    // Fix watch strategies
    var strategies = Vue.config.optionMergeStrategies;
    strategies.watch = strategies.methods;

    if (!library) library = this; // eslint-disable-line

    installComponents(Vue, library);
    library.directives && installDirectives(Vue, library.directives);
    library.filters && installFilters(Vue, library.filters);
}

/***/ }),

/***/ "jkrl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "jmgJ":
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__("wMqM"),
    nativeKeys = __webpack_require__("fvDA");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;

/***/ }),

/***/ "jp/I":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-carousel_item_248Ah073","body":"u-carousel_item_body_248Ah073"};

/***/ }),

/***/ "jt2e":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
(function () {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if (typeof performance !== "undefined" && performance !== null && performance.now) {
    module.exports = function () {
      return performance.now();
    };
  } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
    module.exports = function () {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function getNanoSeconds() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function () {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function () {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }
}).call(this);

//# sourceMappingURL=performance-now.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("QRjK")))

/***/ }),

/***/ "kXUk":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"clearable":"u-textarea_clearable_3AS2pCWT","root":"u-textarea_3AS2pCWT","input":"u-textarea_input_3AS2pCWT","baseline":"u-textarea_baseline_3AS2pCWT","placeholder":"u-textarea_placeholder_3AS2pCWT","handle":"u-textarea_handle_3AS2pCWT"};

/***/ }),

/***/ "lRwf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lRwf__;

/***/ }),

/***/ "lZY7":
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__("LRJZ"),
    isObjectLike = __webpack_require__("c/Dk");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;

/***/ }),

/***/ "lfdT":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("icO0"),
    getSymbols = __webpack_require__("NNjl");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;

/***/ }),

/***/ "m7YH":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("u2T1"),
    isObjectLike = __webpack_require__("c/Dk");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

/***/ }),

/***/ "mLJa":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__("eX1V");

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;

/***/ }),

/***/ "n/lM":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-navbar_dropdown_1r-oD5i-","popper":"u-navbar_dropdown_popper_1r-oD5i-"};

/***/ }),

/***/ "nwPy":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-sidebar_group_1s2XgjOW","head":"u-sidebar_group_head_1s2XgjOW","text":"u-sidebar_group_text_1s2XgjOW","expander":"u-sidebar_group_expander_1s2XgjOW"};

/***/ }),

/***/ "p5qf":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-sidebar_1s2XgjOW"};

/***/ }),

/***/ "pZsv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"m-popper_17ZihZDE"};

/***/ }),

/***/ "qaEo":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-combo-slider_3jj7aBqw","slider":"u-combo-slider_slider_3jj7aBqw","input":"u-combo-slider_input_3jj7aBqw"};

/***/ }),

/***/ "qfmJ":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("8JGq");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = function () {
  function object() {}
  return function (proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

module.exports = baseCreate;

/***/ }),

/***/ "rb+g":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"box":"u-checkbox_box_1ZLy-2rn","root":"u-checkbox_1ZLy-2rn"};

/***/ }),

/***/ "rlUA":
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;

/***/ }),

/***/ "rrHG":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("icO0"),
    getSymbolsIn = __webpack_require__("a7d+");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;

/***/ }),

/***/ "rvZ6":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;

/***/ }),

/***/ "syEQ":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("8JGq"),
    isPrototype = __webpack_require__("wMqM"),
    nativeKeysIn = __webpack_require__("rlUA");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;

/***/ }),

/***/ "tEV9":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("3TMU"),
    isLength = __webpack_require__("FKbo");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

/***/ }),

/***/ "tPom":
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__("PlVZ"),
    baseUnary = __webpack_require__("a7Aj"),
    nodeUtil = __webpack_require__("0eq4");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;

/***/ }),

/***/ "tZEi":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-block_1dboq07_"};

/***/ }),

/***/ "tyM4":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-linear-layout_1OVyNte9"};

/***/ }),

/***/ "u2T1":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__("eX1V"),
    getRawTag = __webpack_require__("Xvt7"),
    objectToString = __webpack_require__("FKEm");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),

/***/ "uSg+":
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;

/***/ }),

/***/ "usMA":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("ClFK"),
    stackClear = __webpack_require__("D1Tf"),
    stackDelete = __webpack_require__("4zFP"),
    stackGet = __webpack_require__("aqWe"),
    stackHas = __webpack_require__("vvyx"),
    stackSet = __webpack_require__("1FL0");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;

/***/ }),

/***/ "vvct":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-tree-view_2rS8f6Tx"};

/***/ }),

/***/ "vvyx":
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

/***/ }),

/***/ "w4Yw":
/***/ (function(module, exports) {

module.exports = {"province":"Province","city":"City","district":"District"}

/***/ }),

/***/ "wMqM":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

  return value === proto;
}

module.exports = isPrototype;

/***/ }),

/***/ "wwex":
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__("WSuG"),
    hashDelete = __webpack_require__("QjHm"),
    hashGet = __webpack_require__("Xor5"),
    hashHas = __webpack_require__("h9iv"),
    hashSet = __webpack_require__("ZS6Z");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;

/***/ }),

/***/ "x3ha":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"m-singlex_item_2iB4HxRd"};

/***/ }),

/***/ "xbgg":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("6M3H"),
    root = __webpack_require__("G7OI");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;

/***/ }),

/***/ "y5c0":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-carousel_248Ah073","body":"u-carousel_body_248Ah073","nav":"u-carousel_nav_248Ah073","nav-item":"u-carousel_nav-item_248Ah073","button":"u-carousel_button_248Ah073"};

/***/ }),

/***/ "yRAu":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("8JGq"),
    now = __webpack_require__("Unbz"),
    toNumber = __webpack_require__("Uyw1");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;

/***/ }),

/***/ "yche":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-list_1q9MVCn2","item":"u-list_item_1q9MVCn2"};

/***/ }),

/***/ "yydL":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-radios_radio_3nuwLjlI","radio":"u-radios_radio_radio_3nuwLjlI"};

/***/ }),

/***/ "z1gT":
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__("GR4z"),
    getSymbols = __webpack_require__("NNjl"),
    keys = __webpack_require__("F3rR");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;

/***/ }),

/***/ "z55k":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("i2mB");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

/***/ }),

/***/ "z6LN":
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__("m7YH"),
    isObjectLike = __webpack_require__("c/Dk");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function () {
    return arguments;
}()) ? baseIsArguments : function (value) {
    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;

/***/ }),

/***/ "zjLE":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"u-navbar_1r-oD5i-","left":"u-navbar_left_1r-oD5i-","middle":"u-navbar_middle_1r-oD5i-","right":"u-navbar_right_1r-oD5i-","item":"u-navbar_item_1r-oD5i-"};

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map