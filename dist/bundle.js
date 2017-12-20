/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 107);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(36),
    overRest = __webpack_require__(73),
    setToString = __webpack_require__(75);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(152),
    baseMatchesProperty = __webpack_require__(182),
    identity = __webpack_require__(36),
    isArray = __webpack_require__(6),
    property = __webpack_require__(191);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(117);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(43),
    isObjectLike = __webpack_require__(20);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(45),
    isFlattenable = __webpack_require__(121);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(69);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReferenceManager_1 = __webpack_require__(99);
var array = __webpack_require__(27);
var RenderEngine = (function () {
    function RenderEngine() {
        this.observers = [];
        this.services = [];
        this.isRunning = false;
        this.referenceManager = new ReferenceManager_1.ReferenceManager();
        this._scale = 1;
        if (RenderEngine._instance) {
            throw new Error("Error: Instantiation failed: Use GameEngine.getInstance() instead of new.");
        }
        RenderEngine._instance = this;
    }
    Object.defineProperty(RenderEngine.prototype, "scale", {
        get: function () {
            return this._scale;
        },
        set: function (scale) {
            this._scale = scale;
        },
        enumerable: true,
        configurable: true
    });
    RenderEngine.getInstance = function () {
        return RenderEngine._instance;
    };
    RenderEngine.prototype.setCanvas = function (canvas, context) {
        this.context = context;
        this.canvas = canvas;
    };
    /*
    * starts the render loop
    */
    RenderEngine.prototype.start = function () {
        var _this = this;
        this.isRunning = true;
        requestAnimationFrame(function () { _this.run(); });
    };
    /*
    * stops the render loop
    */
    RenderEngine.prototype.stop = function () {
        this.isRunning = false;
    };
    /*
    * controls the timing at which the tick is called,
    * for visuals we will rely on the screenrefreshrate from the browser
    */
    RenderEngine.prototype.run = function () {
        var _this = this;
        //do the timing and call tick a lot
        if (this.isRunning) {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.tick();
            requestAnimationFrame(function () { _this.run(); });
        }
    };
    /*
    * updates all of the view objects
    */
    RenderEngine.prototype.tick = function () {
        var _this = this;
        this.observers.forEach(function (obj, index) { return obj.render(_this.context, _this.canvas.width, _this.canvas.height); });
    };
    /*
    * register a view object to be updated by the game engine
    */
    RenderEngine.prototype.register = function (obj) {
        this.observers.push(obj);
    };
    /*
    * unregister a view object to be updated by the game engine
    */
    RenderEngine.prototype.unregister = function (obj) {
        array.pull(this.observers, obj);
        this.observers.forEach(function (observer) {
            observer.remove(obj);
        });
        this.services.forEach(function (service) {
            service.remove(obj);
        });
    };
    RenderEngine.prototype.addService = function (obj) {
        this.services.push(obj);
    };
    RenderEngine.prototype.addReferenceToStage = function (object, stage) {
        this.referenceManager.addReferenceToStage(object, stage);
    };
    RenderEngine.prototype.getReferencesForStage = function (stage) {
        return this.referenceManager.getReferencesForStage(stage);
    };
    RenderEngine._instance = new RenderEngine();
    return RenderEngine;
}());
exports.RenderEngine = RenderEngine;


/***/ }),
/* 11 */
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
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

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
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(22),
    isObjectLike = __webpack_require__(20);

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
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(127),
    getValue = __webpack_require__(130);

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(28),
    arrayIncludes = __webpack_require__(49),
    arrayIncludesWith = __webpack_require__(51),
    cacheHas = __webpack_require__(35),
    createSet = __webpack_require__(245),
    setToArray = __webpack_require__(52);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DoubleBufferedViewObject_1 = __webpack_require__(26);
var ClickableViewObject = (function (_super) {
    __extends(ClickableViewObject, _super);
    function ClickableViewObject(x, y, width, height, angle, drawingStrategy, clickStrategy, callback) {
        var _this = _super.call(this, x, y, width, height, angle, drawingStrategy) || this;
        _this.clickStrategy = clickStrategy;
        _this.callback = callback;
        return _this;
    }
    Object.defineProperty(ClickableViewObject.prototype, "clickStrategy", {
        get: function () {
            return this._clickStrategy;
        },
        set: function (strategy) {
            this._clickStrategy = strategy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClickableViewObject.prototype, "callback", {
        get: function () {
            return this._callback;
        },
        set: function (callback) {
            this._callback = callback;
        },
        enumerable: true,
        configurable: true
    });
    ClickableViewObject.prototype.click = function () {
        if (this.clickStrategy)
            this.clickStrategy.execute(this);
        if (this.callback)
            this.callback();
    };
    ClickableViewObject.prototype.getGlobalX = function () {
        return this.globalX();
    };
    ClickableViewObject.prototype.getGlobalY = function () {
        return this.globalY();
    };
    ClickableViewObject.prototype.getWidth = function () {
        return this.width;
    };
    ClickableViewObject.prototype.getHeight = function () {
        return this.height;
    };
    ClickableViewObject.prototype.accept = function (visitor) {
        //do nothing
    };
    return ClickableViewObject;
}(DoubleBufferedViewObject_1.DoubleBufferedViewObject));
exports.ClickableViewObject = ClickableViewObject;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReferenceManager_1 = __webpack_require__(99);
var array = __webpack_require__(27);
/*
* This class is a Singleton
*/
var GameEngine = (function () {
    function GameEngine() {
        this.isRunning = false;
        this.observers = [];
        this.tickLength = 33;
        this.referenceManager = new ReferenceManager_1.ReferenceManager();
        this.services = [];
        if (GameEngine._instance) {
            throw new Error("Error: Instantiation failed: Use GameEngine.getInstance() instead of new.");
        }
        GameEngine._instance = this;
        //this.register(this.collisionManager);
        //add collision manager to the ticks, add functions for adding and removing stuff
    }
    GameEngine.getInstance = function () {
        return GameEngine._instance;
    };
    /*
    * Starts the game loop
    */
    GameEngine.prototype.start = function () {
        //start loop the calls tick on a set interval
        this.isRunning = true;
        this.run();
    };
    /*
    * stops the game loop
    */
    GameEngine.prototype.stop = function () {
        //stop looping
        this.isRunning = false;
        clearInterval(this.interval);
    };
    /*
    * runs the game loop and sets the timing
    */
    GameEngine.prototype.run = function () {
        var _this = this;
        this.interval = setInterval(function () { _this.tick(); }, this.tickLength);
    };
    /*
     * Tick represents the passing of time in the game
     * and is used to progress the game through it's sequence
     */
    GameEngine.prototype.tick = function () {
        this.observers.forEach(function (obj, index) { return obj.tick(); });
        this.services.forEach(function (obj, index) { return obj.tick(); });
        //this.controllerManager.controllers.forEach((obj: IGameObject, index) => obj.tick());
        //GameMap.getInstance().printPositions();
    };
    /*
     * Register adds game objects to the list of observers
     * to be updated throught the game as time passes
     */
    GameEngine.prototype.register = function (obj) {
        this.observers.push(obj);
    };
    /*
     * Unregister removes game objects from being updated as time
     * progresses in the game
     */
    GameEngine.prototype.unregister = function (obj) {
        obj.dispose();
        array.pull(this.observers, obj);
        this.services.forEach(function (service) {
            service.remove(obj);
        });
    };
    GameEngine.prototype.addService = function (obj) {
        this.services.push(obj);
    };
    GameEngine.prototype.addReferenceToStage = function (object, stage) {
        this.referenceManager.addReferenceToStage(object, stage);
    };
    GameEngine.prototype.getReferencesForStage = function (stage) {
        return this.referenceManager.getReferencesForStage(stage);
    };
    GameEngine._instance = new GameEngine();
    return GameEngine;
}());
exports.GameEngine = GameEngine;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MapObject_1 = __webpack_require__(109);
var GameMap = (function () {
    function GameMap() {
        //private objects: [string, Coordinate];
        this.objects = [];
        if (GameMap._instance) {
            throw new Error("Error: Instantiation failed: Use GameEngine.getInstance() instead of new.");
        }
        GameMap._instance = this;
    }
    GameMap.getInstance = function () {
        return GameMap._instance;
    };
    GameMap.prototype.printPositions = function () {
        console.log("logging all map elements..");
        this.objects.forEach(function (element) {
            console.log(element.type, element.object.x, element.object.y);
        });
    };
    GameMap.prototype.addMapObject = function (object, type) {
        this.objects.push(new MapObject_1.MapObject(object, type));
    };
    GameMap.prototype.getAllOfType = function (type) {
        return this.objects.filter(function (object) {
            if (object.type == type)
                return object;
        });
    };
    GameMap.prototype.clearGameMap = function () {
        this.objects = [];
    };
    GameMap._instance = new GameMap();
    return GameMap;
}());
exports.GameMap = GameMap;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

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
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

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
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(13);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(23),
    getRawTag = __webpack_require__(115),
    objectToString = __webpack_require__(116);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

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
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(9);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(28),
    arrayIncludes = __webpack_require__(49),
    arrayIncludesWith = __webpack_require__(51),
    arrayMap = __webpack_require__(7),
    baseUnary = __webpack_require__(34),
    cacheHas = __webpack_require__(35);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ComposableViewObject_1 = __webpack_require__(98);
var DoubleBufferedViewObject = (function (_super) {
    __extends(DoubleBufferedViewObject, _super);
    function DoubleBufferedViewObject(x, y, width, height, angle, strategy) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.width = width;
        _this.height = height;
        _this.angle = angle;
        _this.drawingStrategy = strategy;
        _this.canvas = document.createElement('canvas');
        _this.canvas.width = width;
        _this.canvas.height = height;
        _this.context = _this.canvas.getContext('2d');
        _this.preRender();
        return _this;
    }
    Object.defineProperty(DoubleBufferedViewObject.prototype, "angle", {
        get: function () {
            return this._angle;
        },
        set: function (angle) {
            this._angle = angle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoubleBufferedViewObject.prototype, "drawingStrategy", {
        get: function () {
            return this._drawingStrategy;
        },
        set: function (strategy) {
            this._drawingStrategy = strategy;
        },
        enumerable: true,
        configurable: true
    });
    DoubleBufferedViewObject.prototype.render = function (context, width, height) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.angle);
        context.translate(-this.x, -this.y);
        this.drawingStrategy.draw(context, this.canvas, this.x, this.y, this.width, this.height);
        context.restore();
        this.postRender();
    };
    DoubleBufferedViewObject.prototype.postRender = function () {
        //do nothing
    };
    DoubleBufferedViewObject.prototype.globalX = function () {
        if (this.parent) {
            return this.x + this.parent.globalX() + this.drawingStrategy.calculateGlobalPositionXEffect(this.width);
        }
        else {
            return this.x + this.drawingStrategy.calculateGlobalPositionXEffect(this.width);
        }
    };
    DoubleBufferedViewObject.prototype.globalY = function () {
        if (this.parent) {
            return this.y + this.parent.globalY() + this.drawingStrategy.calculateGlobalPositionYEffect(this.height);
        }
        else {
            return this.y + this.drawingStrategy.calculateGlobalPositionYEffect(this.height);
        }
    };
    return DoubleBufferedViewObject;
}(ComposableViewObject_1.ComposableViewObject));
exports.DoubleBufferedViewObject = DoubleBufferedViewObject;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  'chunk': __webpack_require__(113),
  'compact': __webpack_require__(119),
  'concat': __webpack_require__(120),
  'difference': __webpack_require__(123),
  'differenceBy': __webpack_require__(151),
  'differenceWith': __webpack_require__(193),
  'drop': __webpack_require__(194),
  'dropRight': __webpack_require__(195),
  'dropRightWhile': __webpack_require__(196),
  'dropWhile': __webpack_require__(197),
  'fill': __webpack_require__(198),
  'findIndex': __webpack_require__(202),
  'findLastIndex': __webpack_require__(203),
  'first': __webpack_require__(204),
  'flatten': __webpack_require__(91),
  'flattenDeep': __webpack_require__(205),
  'flattenDepth': __webpack_require__(206),
  'fromPairs': __webpack_require__(207),
  'head': __webpack_require__(90),
  'indexOf': __webpack_require__(208),
  'initial': __webpack_require__(209),
  'intersection': __webpack_require__(210),
  'intersectionBy': __webpack_require__(211),
  'intersectionWith': __webpack_require__(212),
  'join': __webpack_require__(213),
  'last': __webpack_require__(8),
  'lastIndexOf': __webpack_require__(214),
  'nth': __webpack_require__(216),
  'pull': __webpack_require__(218),
  'pullAll': __webpack_require__(92),
  'pullAllBy': __webpack_require__(220),
  'pullAllWith': __webpack_require__(221),
  'pullAt': __webpack_require__(222),
  'remove': __webpack_require__(228),
  'reverse': __webpack_require__(229),
  'slice': __webpack_require__(230),
  'sortedIndex': __webpack_require__(231),
  'sortedIndexBy': __webpack_require__(232),
  'sortedIndexOf': __webpack_require__(233),
  'sortedLastIndex': __webpack_require__(234),
  'sortedLastIndexBy': __webpack_require__(235),
  'sortedLastIndexOf': __webpack_require__(236),
  'sortedUniq': __webpack_require__(237),
  'sortedUniqBy': __webpack_require__(238),
  'tail': __webpack_require__(239),
  'take': __webpack_require__(240),
  'takeRight': __webpack_require__(241),
  'takeRightWhile': __webpack_require__(242),
  'takeWhile': __webpack_require__(243),
  'union': __webpack_require__(244),
  'unionBy': __webpack_require__(247),
  'unionWith': __webpack_require__(248),
  'uniq': __webpack_require__(249),
  'uniqBy': __webpack_require__(250),
  'uniqWith': __webpack_require__(251),
  'unzip': __webpack_require__(59),
  'unzipWith': __webpack_require__(95),
  'without': __webpack_require__(252),
  'xor': __webpack_require__(253),
  'xorBy': __webpack_require__(254),
  'xorWith': __webpack_require__(255),
  'zip': __webpack_require__(256),
  'zipObject': __webpack_require__(257),
  'zipObjectDeep': __webpack_require__(259),
  'zipWith': __webpack_require__(261)
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(47),
    setCacheAdd = __webpack_require__(145),
    setCacheHas = __webpack_require__(146);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(14);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(135),
    listCacheDelete = __webpack_require__(136),
    listCacheGet = __webpack_require__(137),
    listCacheHas = __webpack_require__(138),
    listCacheSet = __webpack_require__(139);

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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(11);

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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(141);

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
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(6),
    isKey = __webpack_require__(54),
    stringToPath = __webpack_require__(183),
    toString = __webpack_require__(186);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(5);

/**
 * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
 * without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to query.
 * @param {Function} predicate The function invoked per iteration.
 * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the slice of `array`.
 */
function baseWhile(array, predicate, isDrop, fromRight) {
  var length = array.length,
      index = fromRight ? length : -1;

  while ((fromRight ? index-- : ++index < length) &&
    predicate(array[index], index, array)) {}

  return isDrop
    ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
    : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
}

module.exports = baseWhile;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var baseSortedIndexBy = __webpack_require__(58),
    identity = __webpack_require__(36),
    isSymbol = __webpack_require__(13);

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295,
    HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

/**
 * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
 * performs a binary search of `array` to determine the index at which `value`
 * should be inserted into `array` in order to maintain its sort order.
 *
 * @private
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @param {boolean} [retHighest] Specify returning the highest qualified index.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 */
function baseSortedIndex(array, value, retHighest) {
  var low = 0,
      high = array == null ? low : array.length;

  if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
    while (low < high) {
      var mid = (low + high) >>> 1,
          computed = array[mid];

      if (computed !== null && !isSymbol(computed) &&
          (retHighest ? (computed <= value) : (computed < value))) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return high;
  }
  return baseSortedIndexBy(array, value, identity, retHighest);
}

module.exports = baseSortedIndex;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MatchTemplater_1 = __webpack_require__(61);
var array = __webpack_require__(27);
var ScoreKeeper = (function () {
    function ScoreKeeper() {
        this._score = 0;
        this._hiscore = 0;
        this.scored = false;
        this.resetting = false;
        this.observers = [];
        if (ScoreKeeper._instance) {
            throw new Error("Error: Instantiation failed: Use ScoreKeeper.getInstance() instead of new.");
        }
        ScoreKeeper._instance = this;
        //this.register(this.collisionManager);
        //add collision manager to the ticks, add functions for adding and removing stuff
    }
    Object.defineProperty(ScoreKeeper.prototype, "score", {
        get: function () {
            return this._score;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScoreKeeper.prototype, "hiscore", {
        get: function () {
            return this._hiscore;
        },
        enumerable: true,
        configurable: true
    });
    ScoreKeeper.getInstance = function () {
        return ScoreKeeper._instance;
    };
    ScoreKeeper.prototype.incrementScore = function () {
        if (!this.scored) {
            this._score++;
            this.scored = true;
            this.updateObservers();
            MatchTemplater_1.MatchTemplater.getInstance().touchdown();
        }
    };
    ScoreKeeper.prototype.resetScore = function () {
        if (!this.resetting && !this.scored) {
            this.resetting = true;
            var score = this.score;
            if (this.score > this.hiscore)
                this._hiscore = this.score;
            this._score = 0;
            this.scored = false;
            this.updateObservers();
            MatchTemplater_1.MatchTemplater.getInstance().tackled(score, this.hiscore);
        }
    };
    ScoreKeeper.prototype.finishedResetting = function () {
        this.resetting = false;
    };
    ScoreKeeper.prototype.unlockScoring = function () {
        this.scored = false;
    };
    ScoreKeeper.prototype.lockScoring = function () {
        this.scored = true;
    };
    ScoreKeeper.prototype.updateObservers = function () {
        this.observers.forEach(function (observer) {
            observer.update();
        });
    };
    ScoreKeeper.prototype.register = function (observer) {
        this.observers.push(observer);
    };
    ScoreKeeper.prototype.unregister = function (observer) {
        array.pull(this.observers, observer);
    };
    ScoreKeeper._instance = new ScoreKeeper();
    return ScoreKeeper;
}());
exports.ScoreKeeper = ScoreKeeper;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PositionableGameObject_1 = __webpack_require__(111);
var CollidableGameObject = (function (_super) {
    __extends(CollidableGameObject, _super);
    function CollidableGameObject(x, y, width, height, type) {
        var _this = _super.call(this, x, y, width, height) || this;
        _this.type = type;
        return _this;
    }
    CollidableGameObject.prototype.setHitbox = function (hitbox) {
        this.hitbox = hitbox;
    };
    CollidableGameObject.prototype.getHitbox = function () {
        return this.hitbox;
    };
    CollidableGameObject.prototype.removeHitbox = function () {
        this.hitbox = null;
    };
    return CollidableGameObject;
}(PositionableGameObject_1.PositionableGameObject));
exports.CollidableGameObject = CollidableGameObject;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(11),
    isArrayLike = __webpack_require__(43),
    isIndex = __webpack_require__(12),
    isObject = __webpack_require__(19);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(68),
    isLength = __webpack_require__(44);

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
/* 44 */
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
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 45 */
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(122),
    isObjectLike = __webpack_require__(20);

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
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(124),
    mapCacheDelete = __webpack_require__(140),
    mapCacheGet = __webpack_require__(142),
    mapCacheHas = __webpack_require__(143),
    mapCacheSet = __webpack_require__(144);

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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(14),
    root = __webpack_require__(9);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(50);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(33),
    baseIsNaN = __webpack_require__(72),
    strictIndexOf = __webpack_require__(147);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(37),
    toKey = __webpack_require__(21);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(6),
    isSymbol = __webpack_require__(13);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(28),
    arrayIncludes = __webpack_require__(49),
    arrayIncludesWith = __webpack_require__(51),
    arrayMap = __webpack_require__(7),
    baseUnary = __webpack_require__(34),
    cacheHas = __webpack_require__(35);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * The base implementation of methods like `_.intersection`, without support
 * for iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */
function baseIntersection(arrays, iteratee, comparator) {
  var includes = comparator ? arrayIncludesWith : arrayIncludes,
      length = arrays[0].length,
      othLength = arrays.length,
      othIndex = othLength,
      caches = Array(othLength),
      maxLength = Infinity,
      result = [];

  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = arrayMap(array, baseUnary(iteratee));
    }
    maxLength = nativeMin(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
      ? new SetCache(othIndex && array)
      : undefined;
  }
  array = arrays[0];

  var index = -1,
      seen = caches[0];

  outer:
  while (++index < length && result.length < maxLength) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (!(seen
          ? cacheHas(seen, computed)
          : includes(result, computed, comparator)
        )) {
      othIndex = othLength;
      while (--othIndex) {
        var cache = caches[othIndex];
        if (!(cache
              ? cacheHas(cache, computed)
              : includes(arrays[othIndex], computed, comparator))
            ) {
          continue outer;
        }
      }
      if (seen) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseIntersection;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLikeObject = __webpack_require__(3);

/**
 * Casts `value` to an empty array if it's not an array like object.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array|Object} Returns the cast array-like object.
 */
function castArrayLikeObject(value) {
  return isArrayLikeObject(value) ? value : [];
}

module.exports = castArrayLikeObject;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(7),
    baseIndexOf = __webpack_require__(50),
    baseIndexOfWith = __webpack_require__(219),
    baseUnary = __webpack_require__(34),
    copyArray = __webpack_require__(70);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * The base implementation of `_.pullAllBy` without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns `array`.
 */
function basePullAll(array, values, iteratee, comparator) {
  var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
      index = -1,
      length = values.length,
      seen = array;

  if (array === values) {
    values = copyArray(values);
  }
  if (iteratee) {
    seen = arrayMap(array, baseUnary(iteratee));
  }
  while (++index < length) {
    var fromIndex = 0,
        value = values[index],
        computed = iteratee ? iteratee(value) : value;

    while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
      if (seen !== array) {
        splice.call(seen, fromIndex, 1);
      }
      splice.call(array, fromIndex, 1);
    }
  }
  return array;
}

module.exports = basePullAll;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(13);

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295,
    MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor,
    nativeMin = Math.min;

/**
 * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
 * which invokes `iteratee` for `value` and each element of `array` to compute
 * their sort ranking. The iteratee is invoked with one argument; (value).
 *
 * @private
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @param {Function} iteratee The iteratee invoked per element.
 * @param {boolean} [retHighest] Specify returning the highest qualified index.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 */
function baseSortedIndexBy(array, value, iteratee, retHighest) {
  value = iteratee(value);

  var low = 0,
      high = array == null ? 0 : array.length,
      valIsNaN = value !== value,
      valIsNull = value === null,
      valIsSymbol = isSymbol(value),
      valIsUndefined = value === undefined;

  while (low < high) {
    var mid = nativeFloor((low + high) / 2),
        computed = iteratee(array[mid]),
        othIsDefined = computed !== undefined,
        othIsNull = computed === null,
        othIsReflexive = computed === computed,
        othIsSymbol = isSymbol(computed);

    if (valIsNaN) {
      var setLow = retHighest || othIsReflexive;
    } else if (valIsUndefined) {
      setLow = othIsReflexive && (retHighest || othIsDefined);
    } else if (valIsNull) {
      setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
    } else if (valIsSymbol) {
      setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
    } else if (othIsNull || othIsSymbol) {
      setLow = false;
    } else {
      setLow = retHighest ? (computed <= value) : (computed < value);
    }
    if (setLow) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return nativeMin(high, MAX_ARRAY_INDEX);
}

module.exports = baseSortedIndexBy;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(25),
    arrayMap = __webpack_require__(7),
    baseProperty = __webpack_require__(89),
    baseTimes = __webpack_require__(81),
    isArrayLikeObject = __webpack_require__(3);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.zip` except that it accepts an array of grouped
 * elements and creates an array regrouping the elements to their pre-zip
 * configuration.
 *
 * @static
 * @memberOf _
 * @since 1.2.0
 * @category Array
 * @param {Array} array The array of grouped elements to process.
 * @returns {Array} Returns the new array of regrouped elements.
 * @example
 *
 * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
 * // => [['a', 1, true], ['b', 2, false]]
 *
 * _.unzip(zipped);
 * // => [['a', 'b'], [1, 2], [true, false]]
 */
function unzip(array) {
  if (!(array && array.length)) {
    return [];
  }
  var length = 0;
  array = arrayFilter(array, function(group) {
    if (isArrayLikeObject(group)) {
      length = nativeMax(group.length, length);
      return true;
    }
  });
  return baseTimes(length, function(index) {
    return arrayMap(array, baseProperty(index));
  });
}

module.exports = unzip;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(24),
    baseFlatten = __webpack_require__(4),
    baseUniq = __webpack_require__(15);

/**
 * The base implementation of methods like `_.xor`, without support for
 * iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of values.
 */
function baseXor(arrays, iteratee, comparator) {
  var length = arrays.length;
  if (length < 2) {
    return length ? baseUniq(arrays[0]) : [];
  }
  var index = -1,
      result = Array(length);

  while (++index < length) {
    var array = arrays[index],
        othIndex = -1;

    while (++othIndex < length) {
      if (othIndex != index) {
        result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
      }
    }
  }
  return baseUniq(baseFlatten(result, 1), iteratee, comparator);
}

module.exports = baseXor;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BottomLockPositioningDecorator_1 = __webpack_require__(262);
var ScoreViewObject_1 = __webpack_require__(264);
var StickerTextViewObject_1 = __webpack_require__(100);
var DebugViewObject_1 = __webpack_require__(265);
var RenderEngine_1 = __webpack_require__(10);
var HorizontalCenterPositioningDecorator_1 = __webpack_require__(63);
var TopLeftDrawingStrategy_1 = __webpack_require__(64);
var ButtonViewObject_1 = __webpack_require__(101);
var GameMap_1 = __webpack_require__(18);
var Route_1 = __webpack_require__(102);
var Coordinate_1 = __webpack_require__(65);
var GameEngine_1 = __webpack_require__(17);
var RouteDrawingStageVisitor_1 = __webpack_require__(266);
var RightLockPositioningDecorator_1 = __webpack_require__(270);
var ScoreKeeper_1 = __webpack_require__(40);
var LogoViewObject_1 = __webpack_require__(103);
var MatchTemplater = (function () {
    function MatchTemplater(gameView, playerFactory, playerVOFactory, fieldFactory, clickManager, collisionManager) {
        this.messages = [];
        this.blockers = [];
        this.blockerVOs = [];
        this.defenders = [];
        this.defenderVOs = [];
        this.playSelection = 0;
        this.blockerPositions = [];
        if (MatchTemplater._instance) {
            throw new Error("Error: Instantiation failed: Use MatchTemplater.getInstance() instead of new.");
        }
        this.gameView = gameView;
        this.playerFactory = playerFactory;
        this.playerVOFactory = playerVOFactory;
        this.fieldFactory = fieldFactory;
        this.clickManager = clickManager;
        this.collisionManager = collisionManager;
        MatchTemplater._instance = this;
    }
    MatchTemplater.getInstance = function () {
        return MatchTemplater._instance;
    };
    MatchTemplater.prototype.touchdown = function () {
        var _this = this;
        var startBanner = new StickerTextViewObject_1.StickerTextViewObject(0, 100, 320, 80, 0, new TopLeftDrawingStrategy_1.TopLeftDrawingStrategy(), null, null, 'Touchdown!');
        startBanner.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        startBanner.font = 'bold 48px Arial';
        this.gameView.addView(startBanner);
        RenderEngine_1.RenderEngine.getInstance().addReferenceToStage(startBanner, 'touchdownStage');
        setTimeout(function () {
            var refs = RenderEngine_1.RenderEngine.getInstance().getReferencesForStage('touchdownStage');
            refs.forEach(function (element) {
                RenderEngine_1.RenderEngine.getInstance().unregister(element);
            });
            _this.playSelectStage();
        }, 500);
    };
    MatchTemplater.prototype.tackled = function (score, hiscore) {
        var _this = this;
        var startBanner = new StickerTextViewObject_1.StickerTextViewObject(0, 100, 320, 80, 0, new TopLeftDrawingStrategy_1.TopLeftDrawingStrategy(), null, null, 'Tackled!');
        startBanner.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        startBanner.font = 'bold 48px Arial';
        startBanner.color = '#E68364';
        this.gameView.addView(startBanner);
        RenderEngine_1.RenderEngine.getInstance().addReferenceToStage(startBanner, 'tackledStage');
        setTimeout(function () {
            var refs = RenderEngine_1.RenderEngine.getInstance().getReferencesForStage('tackledStage');
            refs.forEach(function (element) {
                RenderEngine_1.RenderEngine.getInstance().unregister(element);
            });
            _this.gameOver(score, hiscore);
        }, 500);
    };
    MatchTemplater.prototype.gameOver = function (score, hiscore) {
        var _this = this;
        var backdrop = new StickerTextViewObject_1.StickerTextViewObject(0, 0, 320, 480, 0, new TopLeftDrawingStrategy_1.TopLeftDrawingStrategy(), null, null, ' ');
        backdrop.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        this.gameView.addView(backdrop);
        var gameOverBanner = new LogoViewObject_1.LogoViewObject(0, 120, 320, 80, 0, new TopLeftDrawingStrategy_1.TopLeftDrawingStrategy(), null, null, 'Game Over.');
        this.gameView.addView(gameOverBanner);
        var hiScore = new LogoViewObject_1.LogoViewObject(0, 190, 320, 80, 0, new TopLeftDrawingStrategy_1.TopLeftDrawingStrategy(), null, null, 'Hi-Score: ' + hiscore);
        hiScore.font = "bold 32px Arial";
        this.gameView.addView(hiScore);
        var scoreView = new LogoViewObject_1.LogoViewObject(0, 240, 320, 80, 0, new TopLeftDrawingStrategy_1.TopLeftDrawingStrategy(), null, null, 'Score: ' + score);
        scoreView.font = "bold 32px Arial";
        this.gameView.addView(scoreView);
        RenderEngine_1.RenderEngine.getInstance().addReferenceToStage(gameOverBanner, 'gameOverStage');
        RenderEngine_1.RenderEngine.getInstance().addReferenceToStage(hiScore, 'gameOverStage');
        RenderEngine_1.RenderEngine.getInstance().addReferenceToStage(scoreView, 'gameOverStage');
        RenderEngine_1.RenderEngine.getInstance().addReferenceToStage(backdrop, 'gameOverStage');
        var startButton = new ButtonViewObject_1.ButtonViewObject(10, 340, 150, 50, 0, new TopLeftDrawingStrategy_1.TopLeftDrawingStrategy(), null, 'Play Again', function () {
            var refs = RenderEngine_1.RenderEngine.getInstance().getReferencesForStage('gameOverStage');
            refs.forEach(function (element) {
                RenderEngine_1.RenderEngine.getInstance().unregister(element);
            });
            _this.playSelectStage();
        });
        var hcent = new HorizontalCenterPositioningDecorator_1.HorizontalCenterPositioningDecorator(startButton);
        this.gameView.addView(hcent);
        this.clickManager.addClickable(hcent);
        RenderEngine_1.RenderEngine.getInstance().addReferenceToStage(hcent, 'gameOverStage');
    };
    MatchTemplater.prototype.resetGame = function () {
        GameEngine_1.GameEngine.getInstance().stop();
        ScoreKeeper_1.ScoreKeeper.getInstance().unlockScoring();
        this.blockers.forEach(function (blocker) {
            GameEngine_1.GameEngine.getInstance().unregister(blocker);
        });
        this.defenders.forEach(function (defender) {
            GameEngine_1.GameEngine.getInstance().unregister(defender);
        });
        this.blockerVOs.forEach(function (blocker) {
            RenderEngine_1.RenderEngine.getInstance().unregister(blocker);
        });
        this.defenderVOs.forEach(function (defender) {
            RenderEngine_1.RenderEngine.getInstance().unregister(defender);
        });
        this.blockers = [];
        this.defenders = [];
        this.blockerVOs = [];
        this.defenderVOs = [];
        if (this.runner)
            GameEngine_1.GameEngine.getInstance().unregister(this.runner);
        if (this.runnerViewObject)
            RenderEngine_1.RenderEngine.getInstance().unregister(this.runnerViewObject);
        this.runner = null;
        this.runnerViewObject = null;
        this.collisionManager.dumpActiveHitboxes();
        GameMap_1.GameMap.getInstance().clearGameMap();
        this.runner = this.playerFactory.createRunner(160, 380, -90);
        this.runnerViewObject = this.playerVOFactory.CreateRunnerInArea(this.runner, this.gameView);
        ScoreKeeper_1.ScoreKeeper.getInstance().finishedResetting();
    };
    MatchTemplater.prototype.createGame = function () {
        //create the player you control youreself (runner)
        //
        //GameEngine.getInstance().stop();
        //add endzone to score in
        var endzone = this.fieldFactory.CreateEndZone(0, 0); //new Endzone(0,0,320,120,'endzone');
        //GameEngine.getInstance().register(endzone);
        //let endzoneVO = new DebugViewObject(endzone.x, endzone.y,endzone.width, endzone.height, 0, endzone, new TopLeftDrawingStrategy())
        //this.gameView.addView(endzoneVO);
        //create walls
        var wall1 = this.fieldFactory.CreateWall(-10, 0, 10, 480);
        var wall1VO = new DebugViewObject_1.DebugViewObject(wall1.x, wall1.y, wall1.width, wall1.height, 0, wall1, new TopLeftDrawingStrategy_1.TopLeftDrawingStrategy());
        this.gameView.addView(wall1VO);
        var wall2 = this.fieldFactory.CreateWall(320, 0, 10, 480);
        var wall2VO = new DebugViewObject_1.DebugViewObject(wall2.x, wall2.y, wall2.width, wall2.height, 0, wall2, new TopLeftDrawingStrategy_1.TopLeftDrawingStrategy());
        this.gameView.addView(wall2VO);
        var wall3 = this.fieldFactory.CreateWall(0, 480, 320, 10);
        var wall3VO = new DebugViewObject_1.DebugViewObject(wall3.x, wall3.y, wall3.width, wall3.height, 0, wall3, new TopLeftDrawingStrategy_1.TopLeftDrawingStrategy());
        this.gameView.addView(wall3VO);
        var scoreVO = new ScoreViewObject_1.ScoreViewObject(20, 0, 120, 40, 0, new TopLeftDrawingStrategy_1.TopLeftDrawingStrategy(), null, null);
        var bottomLockScore = new BottomLockPositioningDecorator_1.BottomLockPositioningDecorator(scoreVO, 10);
        this.gameView.addView(bottomLockScore);
        this.playSelectStage();
        // setTimeout(function(){
        //     let objects = GameEngine.getInstance().getReferencesForStage("gameplayStage");
        //     objects.forEach(object => {
        //         GameEngine.getInstance().unregister(object as IGameObject);
        //         //need to chekc that the hitboxes arent being ghosts lmao
        //     });
        // }, 10000);
    };
    MatchTemplater.prototype.playSelectStage = function () {
        var _this = this;
        this.resetGame();
        var blockerIndex = 0;
        this.blockerPositions = [
            [new Coordinate_1.Coordinate(110, 300), new Coordinate_1.Coordinate(145, 300), new Coordinate_1.Coordinate(180, 300), new Coordinate_1.Coordinate(215, 300)],
            [new Coordinate_1.Coordinate(70, 300), new Coordinate_1.Coordinate(105, 300), new Coordinate_1.Coordinate(140, 300), new Coordinate_1.Coordinate(200, 300)],
            [new Coordinate_1.Coordinate(120, 300), new Coordinate_1.Coordinate(185, 300), new Coordinate_1.Coordinate(220, 300), new Coordinate_1.Coordinate(255, 300)]
            //[new Coordinate(70, 300), new Coordinate(105, 300), new Coordinate(220, 300), new Coordinate(255, 300)],
        ];
        var blockerPositionIndex = Math.floor(Math.random() * this.blockerPositions.length);
        this.blockers.push(this.playerFactory.createBlocker(this.blockerPositions[blockerPositionIndex][0].x, this.blockerPositions[0][0].y, null, this.gameView));
        this.blockers.push(this.playerFactory.createBlocker(this.blockerPositions[blockerPositionIndex][1].x, this.blockerPositions[0][1].y, null, this.gameView));
        this.blockers.push(this.playerFactory.createBlocker(this.blockerPositions[blockerPositionIndex][2].x, this.blockerPositions[0][2].y, null, this.gameView));
        this.blockers.push(this.playerFactory.createBlocker(this.blockerPositions[blockerPositionIndex][3].x, this.blockerPositions[0][3].y, null, this.gameView));
        //create the view objects for each blocker 
        this.blockers.forEach(function (blocker) {
            _this.blockerVOs.push(_this.playerVOFactory.CreateBlockerInArea(blocker, _this.gameView));
        });
        // let leftButton = new ButtonViewObject(20,215,50,50,0,new TopLeftDrawingStrategy(), null, '<', () => {
        //     this.setPlay(this.playSelection - 1);
        //     this.changeBlockerLayout(this.playSelection);
        // });
        // let rightButton = new ButtonViewObject(250,215,50,50,0,new TopLeftDrawingStrategy(), null, '>', () => {
        //     this.setPlay(this.playSelection + 1);
        //     this.changeBlockerLayout(this.playSelection);
        // });
        // this.clickManager.addClickable(leftButton);
        // this.clickManager.addClickable(rightButton);
        // this.gameView.addView(leftButton);
        // this.gameView.addView(rightButton);
        // RenderEngine.getInstance().addReferenceToStage(leftButton, 'playSelectStage');
        // RenderEngine.getInstance().addReferenceToStage(rightButton, 'playSelectStage');
        // let selectButton = new ButtonViewObject(50,410,100,50,0,new TopLeftDrawingStrategy(), null, 'Select', () => {
        //     let refs = RenderEngine.getInstance().getReferencesForStage('playSelectStage');
        //     refs.forEach(element => {
        //         RenderEngine.getInstance().unregister(element as IViewObject);
        //     });
        //     this.messages.forEach(element =>{
        //         this.gameView.remove(element);
        //     });
        //     this.messages = [];
        //     this.routeDrawStage();
        // });
        // let hcent = new RightLockPositioningDecorator(selectButton, 25);
        // this.gameView.addView(hcent);
        // this.clickManager.addClickable(hcent);
        // RenderEngine.getInstance().addReferenceToStage(hcent, 'playSelectStage');
        // let text = new StickerTextViewObject(10,20, 280, 50, 0, new TopLeftDrawingStrategy(), null, null, "Tap Arrows to");
        // text.backgroundColor = '#2ecc71';
        // text.font = "bold 26px Arial"
        // let text2 = new StickerTextViewObject(10,60, 280, 50, 0, new TopLeftDrawingStrategy(), null, null, "Change Plays");
        // text2.backgroundColor = '#2ecc71';
        // text2.font = "bold 26px Arial";
        // this.messages.push(new HorizontalCenterPositioningDecorator(text));
        // this.gameView.addView(this.messages[0]);
        // this.messages.push(new HorizontalCenterPositioningDecorator(text2));
        // this.gameView.addView(this.messages[1]);
        //create defenders with routes
        var defenderPositions = [
            [new Coordinate_1.Coordinate(60, 260), new Coordinate_1.Coordinate(110, 260), new Coordinate_1.Coordinate(160, 260), new Coordinate_1.Coordinate(210, 260), new Coordinate_1.Coordinate(260, 260)],
            [new Coordinate_1.Coordinate(100, 260), new Coordinate_1.Coordinate(130, 260), new Coordinate_1.Coordinate(160, 260), new Coordinate_1.Coordinate(190, 260), new Coordinate_1.Coordinate(220, 260)],
            [new Coordinate_1.Coordinate(60, 160), new Coordinate_1.Coordinate(110, 260), new Coordinate_1.Coordinate(160, 260), new Coordinate_1.Coordinate(210, 260), new Coordinate_1.Coordinate(260, 160)],
            [new Coordinate_1.Coordinate(80, 260), new Coordinate_1.Coordinate(133, 260), new Coordinate_1.Coordinate(186, 260), new Coordinate_1.Coordinate(240, 260), new Coordinate_1.Coordinate(160, 160)],
            [new Coordinate_1.Coordinate(60, 260), new Coordinate_1.Coordinate(110, 260), new Coordinate_1.Coordinate(160, 260), new Coordinate_1.Coordinate(210, 260), new Coordinate_1.Coordinate(260, 260)],
            [new Coordinate_1.Coordinate(80, 260), new Coordinate_1.Coordinate(160, 260), new Coordinate_1.Coordinate(240, 260), new Coordinate_1.Coordinate(120, 160), new Coordinate_1.Coordinate(200, 160)]
        ];
        var defenderRoutes = [
            [new Coordinate_1.Coordinate(40, 0), new Coordinate_1.Coordinate(0, 40)],
            [new Coordinate_1.Coordinate(-40, 0), new Coordinate_1.Coordinate(0, 40)],
            [new Coordinate_1.Coordinate(0, 30)],
            [new Coordinate_1.Coordinate(30, 30)],
            [new Coordinate_1.Coordinate(-30, 30)],
            [new Coordinate_1.Coordinate(0, -60)],
        ];
        var defenderPositionIndex = Math.floor(Math.random() * defenderPositions.length);
        var _loop_1 = function (i) {
            console.log(defenderPositionIndex);
            route = defenderRoutes[Math.floor(Math.random() * defenderRoutes.length)];
            newRoute = [];
            route.forEach(function (coordinate) {
                newRoute.push(new Coordinate_1.Coordinate(coordinate.x + defenderPositions[defenderPositionIndex][i].x, coordinate.y + defenderPositions[defenderPositionIndex][i].y));
            });
            this_1.defenders.push(this_1.playerFactory.createDefender(defenderPositions[defenderPositionIndex][i].x, defenderPositions[defenderPositionIndex][i].y, new Route_1.Route(newRoute), this_1.gameView));
        };
        var this_1 = this, route, newRoute;
        for (var i = 0; i < 5; ++i) {
            _loop_1(i);
        }
        this.defenders.forEach(function (defender) {
            _this.defenderVOs.push(_this.playerVOFactory.CreateDefenderInArea(defender, _this.gameView));
        });
        // let startButton = new ButtonViewObject(50,410,100,50,0,new TopLeftDrawingStrategy(), null, 'Start', () => {
        //     GameEngine.getInstance().start();
        //     let refs = RenderEngine.getInstance().getReferencesForStage('routeStage');
        //     refs.forEach(element => {
        //         RenderEngine.getInstance().unregister(element as IViewObject);
        //     });
        //     this.messages.forEach(element =>{
        //         this.gameView.remove(element);
        //     });
        //     this.messages = [];
        // });
        // let hcent = new RightLockPositioningDecorator(startButton, 25);
        // this.gameView.addView(hcent);
        // this.clickManager.addClickable(hcent);
        // RenderEngine.getInstance().addReferenceToStage(hcent, 'routeStage');
        this.abilityDots = this.playerVOFactory.PlayAbilityDots(this.runner, this.gameView);
        this.CountdownStage();
    };
    MatchTemplater.prototype.CountdownStage = function () {
        var startBanner = new StickerTextViewObject_1.StickerTextViewObject(0, 100, 320, 80, 0, new TopLeftDrawingStrategy_1.TopLeftDrawingStrategy(), null, null, 'Get Ready...');
        startBanner.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        startBanner.font = 'bold 42px Arial';
        this.gameView.addView(startBanner);
        RenderEngine_1.RenderEngine.getInstance().addReferenceToStage(startBanner, 'routeStage');
        var count = 4;
        var counter = setInterval(function () {
            --count;
            if (count > 1) {
                startBanner.text = "Get Ready...";
            } //nothing{}
            else if (count == 1)
                startBanner.text = "Go!";
            else {
                clearInterval(counter);
                var refs = RenderEngine_1.RenderEngine.getInstance().getReferencesForStage('routeStage');
                refs.forEach(function (element) {
                    RenderEngine_1.RenderEngine.getInstance().unregister(element);
                });
                GameEngine_1.GameEngine.getInstance().start();
            }
        }, 300);
    };
    MatchTemplater.prototype.changeBlockerLayout = function (play) {
        //create blockers with aroutes
        for (var i = 0; i < this.blockers.length; ++i) {
            this.blockers[i].x = this.blockerPositions[play][i].x;
            this.blockers[i].y = this.blockerPositions[play][i].y;
        }
        this.blockerVOs.forEach(function (blockerVO) {
            blockerVO.update();
        });
    };
    MatchTemplater.prototype.routeDrawStage = function () {
        var _this = this;
        //create defenders with routes
        var defenderPositions = [
            [new Coordinate_1.Coordinate(60, 260), new Coordinate_1.Coordinate(110, 260), new Coordinate_1.Coordinate(160, 260), new Coordinate_1.Coordinate(210, 260), new Coordinate_1.Coordinate(260, 260)],
            [new Coordinate_1.Coordinate(100, 260), new Coordinate_1.Coordinate(130, 260), new Coordinate_1.Coordinate(160, 260), new Coordinate_1.Coordinate(190, 260), new Coordinate_1.Coordinate(220, 260)],
            [new Coordinate_1.Coordinate(60, 160), new Coordinate_1.Coordinate(110, 260), new Coordinate_1.Coordinate(160, 260), new Coordinate_1.Coordinate(210, 260), new Coordinate_1.Coordinate(260, 160)],
            [new Coordinate_1.Coordinate(80, 260), new Coordinate_1.Coordinate(133, 260), new Coordinate_1.Coordinate(186, 260), new Coordinate_1.Coordinate(240, 260), new Coordinate_1.Coordinate(160, 160)],
            [new Coordinate_1.Coordinate(60, 260), new Coordinate_1.Coordinate(110, 260), new Coordinate_1.Coordinate(160, 260), new Coordinate_1.Coordinate(210, 260), new Coordinate_1.Coordinate(260, 260)],
            [new Coordinate_1.Coordinate(80, 260), new Coordinate_1.Coordinate(160, 260), new Coordinate_1.Coordinate(240, 260), new Coordinate_1.Coordinate(120, 160), new Coordinate_1.Coordinate(200, 160)]
        ];
        var defenderRoutes = [
            [new Coordinate_1.Coordinate(40, 0), new Coordinate_1.Coordinate(0, 40)],
            [new Coordinate_1.Coordinate(-40, 0), new Coordinate_1.Coordinate(0, 40)],
            [new Coordinate_1.Coordinate(0, 30)],
            [new Coordinate_1.Coordinate(30, 30)],
            [new Coordinate_1.Coordinate(-30, 30)],
            [new Coordinate_1.Coordinate(0, -60)],
        ];
        var defenderPositionIndex = Math.floor(Math.random() * defenderPositions.length);
        var _loop_2 = function (i) {
            console.log(defenderPositionIndex);
            route = defenderRoutes[Math.floor(Math.random() * defenderRoutes.length)];
            newRoute = [];
            route.forEach(function (coordinate) {
                newRoute.push(new Coordinate_1.Coordinate(coordinate.x + defenderPositions[defenderPositionIndex][i].x, coordinate.y + defenderPositions[defenderPositionIndex][i].y));
            });
            this_2.defenders.push(this_2.playerFactory.createDefender(defenderPositions[defenderPositionIndex][i].x, defenderPositions[defenderPositionIndex][i].y, new Route_1.Route(newRoute), this_2.gameView));
        };
        var this_2 = this, route, newRoute;
        for (var i = 0; i < 5; ++i) {
            _loop_2(i);
        }
        this.defenders.forEach(function (defender) {
            _this.defenderVOs.push(_this.playerVOFactory.CreateDefenderInArea(defender, _this.gameView));
        });
        //create route drawing stuff
        var text = new StickerTextViewObject_1.StickerTextViewObject(10, 20, 280, 50, 0, new TopLeftDrawingStrategy_1.TopLeftDrawingStrategy(), null, null, "Tap Your Defenders");
        text.backgroundColor = '#2ecc71';
        text.font = "bold 26px Arial";
        var text2 = new StickerTextViewObject_1.StickerTextViewObject(10, 60, 280, 50, 0, new TopLeftDrawingStrategy_1.TopLeftDrawingStrategy(), null, null, "To Draw Their Routes");
        text2.backgroundColor = '#2ecc71';
        text2.font = "bold 26px Arial";
        this.messages.push(new HorizontalCenterPositioningDecorator_1.HorizontalCenterPositioningDecorator(text));
        this.gameView.addView(this.messages[0]);
        this.messages.push(new HorizontalCenterPositioningDecorator_1.HorizontalCenterPositioningDecorator(text2));
        this.gameView.addView(this.messages[1]);
        //this will moack stage 2 being hit where routes need to be drawn
        var visitor = new RouteDrawingStageVisitor_1.RouteDrawingStageVisitor(this.clickManager, this.gameView);
        this.blockerVOs.forEach(function (blockerVO) {
            blockerVO.accept(visitor);
        });
        //add start button
        var startButton = new ButtonViewObject_1.ButtonViewObject(50, 410, 100, 50, 0, new TopLeftDrawingStrategy_1.TopLeftDrawingStrategy(), null, 'Start', function () {
            GameEngine_1.GameEngine.getInstance().start();
            var refs = RenderEngine_1.RenderEngine.getInstance().getReferencesForStage('routeStage');
            refs.forEach(function (element) {
                RenderEngine_1.RenderEngine.getInstance().unregister(element);
            });
            _this.messages.forEach(function (element) {
                _this.gameView.remove(element);
            });
            _this.messages = [];
        });
        var hcent = new RightLockPositioningDecorator_1.RightLockPositioningDecorator(startButton, 25);
        this.gameView.addView(hcent);
        this.clickManager.addClickable(hcent);
        RenderEngine_1.RenderEngine.getInstance().addReferenceToStage(hcent, 'routeStage');
    };
    MatchTemplater.prototype.setPlay = function (number) {
        if (number < 0)
            this.playSelection = this.blockerPositions.length - 1;
        else if (number >= this.blockerPositions.length)
            this.playSelection = 0;
        else
            this.playSelection = number;
    };
    return MatchTemplater;
}());
exports.MatchTemplater = MatchTemplater;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ClickableViewObject_1 = __webpack_require__(16);
var PositioningDecorator = (function (_super) {
    __extends(PositioningDecorator, _super);
    function PositioningDecorator(view) {
        var _this = _super.call(this, view.x, view.y, view.width, view.y, view.angle, view.drawingStrategy, view.clickStrategy, view.callback) || this;
        _this.view = view;
        _this.x = view.x;
        _this.y = view.y;
        _this.width = view.width;
        _this.height = view.height;
        return _this;
        //trying to figure out the best way to create a decorator, this is the best solution I have found so far
    }
    Object.defineProperty(PositioningDecorator.prototype, "x", {
        get: function () {
            return this.view.x;
        },
        set: function (x) {
            if (this.view != null)
                this.view.x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PositioningDecorator.prototype, "y", {
        get: function () {
            return this.view.y;
        },
        set: function (y) {
            if (this.view != null)
                this.view.y = y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PositioningDecorator.prototype, "width", {
        get: function () {
            return this.view.width;
        },
        set: function (width) {
            if (this.view != null)
                this.view.width = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PositioningDecorator.prototype, "height", {
        get: function () {
            return this.view.height;
        },
        set: function (height) {
            if (this.view != null)
                this.view.height = height;
        },
        enumerable: true,
        configurable: true
    });
    PositioningDecorator.prototype.click = function () {
        this.view.click(); //.execute(this); //.click();
    };
    PositioningDecorator.prototype.accept = function (visitor) {
        this.view.accept(visitor);
    };
    return PositioningDecorator;
}(ClickableViewObject_1.ClickableViewObject));
exports.PositioningDecorator = PositioningDecorator;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PositioningDecorator_1 = __webpack_require__(62);
var HorizontalCenterPositioningDecorator = (function (_super) {
    __extends(HorizontalCenterPositioningDecorator, _super);
    function HorizontalCenterPositioningDecorator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.offsetX = 0;
        return _this;
    }
    HorizontalCenterPositioningDecorator.prototype.hover = function () {
        //do nothing
    };
    HorizontalCenterPositioningDecorator.prototype.preRender = function () {
        //do nothing
    };
    HorizontalCenterPositioningDecorator.prototype.render = function (context, width, height) {
        this.offsetX = width / 2 - this.width / 2;
        this.view.x = this.offsetX;
        this.view.render(context, width, height);
    };
    HorizontalCenterPositioningDecorator.prototype.update = function () {
        throw new Error("Method not implemented.");
    };
    HorizontalCenterPositioningDecorator.prototype.getGlobalX = function () {
        return this.offsetX + this.parent.x;
    };
    HorizontalCenterPositioningDecorator.prototype.accept = function (visitor) {
        this.view.accept(visitor);
    };
    return HorizontalCenterPositioningDecorator;
}(PositioningDecorator_1.PositioningDecorator));
exports.HorizontalCenterPositioningDecorator = HorizontalCenterPositioningDecorator;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TopLeftDrawingStrategy = (function () {
    function TopLeftDrawingStrategy() {
    }
    TopLeftDrawingStrategy.prototype.calculateGlobalPositionXEffect = function (width) {
        return 0;
    };
    TopLeftDrawingStrategy.prototype.calculateGlobalPositionYEffect = function (height) {
        return 0;
    };
    TopLeftDrawingStrategy.prototype.draw = function (context, canvas, x, y, width, height) {
        context.drawImage(canvas, x, y);
    };
    return TopLeftDrawingStrategy;
}());
exports.TopLeftDrawingStrategy = TopLeftDrawingStrategy;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Coordinate = (function () {
    function Coordinate(x, y) {
        this.x = x;
        this.y = y;
    }
    return Coordinate;
}());
exports.Coordinate = Coordinate;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Controller_1 = __webpack_require__(106);
var Coordinate_1 = __webpack_require__(65);
var RouteController = (function (_super) {
    __extends(RouteController, _super);
    //more to come, need ot think through collisions first
    function RouteController(subject, route, collisionManager) {
        var _this = _super.call(this, subject) || this;
        _this.started = true;
        _this.routeIndex = 0;
        _this.originalSpeed = 0;
        _this.route = route;
        _this.originalSpeed = subject.speed;
        _this.collisionManager = collisionManager;
        return _this;
    }
    Object.defineProperty(RouteController.prototype, "route", {
        get: function () {
            return this._route;
        },
        set: function (route) {
            this._route = route;
        },
        enumerable: true,
        configurable: true
    });
    RouteController.prototype.decide = function () {
        this.followRoute();
    };
    RouteController.prototype.act = function () {
        //add pre-emptive collision checking to avoid overlap;
        if (!this.collisionManager.collisionCheckAtPosition(this.subject, this.subject.x + this.subject.speed * Math.cos(this.subject.angle), this.subject.y)) {
            this.subject.x += this.subject.speed * Math.cos(this.subject.angle);
        }
        if (!this.collisionManager.collisionCheckAtPosition(this.subject, this.subject.x, this.subject.y + this.subject.speed * Math.sin(this.subject.angle))) {
            this.subject.y += this.subject.speed * Math.sin(this.subject.angle);
        }
    };
    RouteController.prototype.withinRange = function (number, rangeCenter, delta) {
        return number > (rangeCenter - delta) && number < (rangeCenter + delta);
    };
    RouteController.prototype.followRoute = function () {
        if (!this.routeComplete()) {
            var location_1 = new Coordinate_1.Coordinate(this.subject.x, this.subject.y);
            var destination = this.route.getPoint(this.routeIndex);
            if (this.withinRange(Math.round(location_1.x), Math.round(destination.x), this.subject.speed) && this.withinRange(Math.round(location_1.y), Math.round(destination.y), this.subject.speed)) {
                this.routeIndex++;
            }
            else {
                this.subject.angle = Math.atan2(destination.y - location_1.y, destination.x - location_1.x);
            }
        }
        else {
            //console.log('my route is complete');
        }
    };
    RouteController.prototype.calculateDistance = function (object) {
        return Math.sqrt(Math.pow(this.subject.x - object.object.x, 2) + Math.pow(this.subject.y - object.object.y, 2));
    };
    RouteController.prototype.routeComplete = function () {
        if (!this.route)
            return true;
        return this.routeIndex >= this.route.numPoints;
    };
    RouteController.prototype.endRoute = function () {
        if (this.route)
            this.routeIndex += this.route.numPoints;
    };
    return RouteController;
}(Controller_1.Controller));
exports.RouteController = RouteController;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Dimensionable = (function () {
    function Dimensionable() {
    }
    Object.defineProperty(Dimensionable.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dimensionable.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dimensionable.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (width) {
            this._width = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dimensionable.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (height) {
            this._height = height;
        },
        enumerable: true,
        configurable: true
    });
    return Dimensionable;
}());
exports.Dimensionable = Dimensionable;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(22),
    isObject = __webpack_require__(19);

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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(114)))

/***/ }),
/* 70 */
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
/* 71 */
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
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(74);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 74 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(148),
    shortOut = __webpack_require__(150);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(14);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(30),
    stackClear = __webpack_require__(154),
    stackDelete = __webpack_require__(155),
    stackGet = __webpack_require__(156),
    stackHas = __webpack_require__(157),
    stackSet = __webpack_require__(158);

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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(159),
    isObjectLike = __webpack_require__(20);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(28),
    arraySome = __webpack_require__(160),
    cacheHas = __webpack_require__(35);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(169),
    baseKeys = __webpack_require__(173),
    isArrayLike = __webpack_require__(43);

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
/* 81 */
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(9),
    stubFalse = __webpack_require__(170);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(83)(module)))

/***/ }),
/* 83 */
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(171),
    baseUnary = __webpack_require__(34),
    nodeUtil = __webpack_require__(172);

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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(14),
    root = __webpack_require__(9);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 87 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(53);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 89 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 90 */
/***/ (function(module, exports) {

/**
 * Gets the first element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * _.head([1, 2, 3]);
 * // => 1
 *
 * _.head([]);
 * // => undefined
 */
function head(array) {
  return (array && array.length) ? array[0] : undefined;
}

module.exports = head;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(4);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var basePullAll = __webpack_require__(57);

/**
 * This method is like `_.pull` except that it accepts an array of values to remove.
 *
 * **Note:** Unlike `_.difference`, this method mutates `array`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 *
 * _.pullAll(array, ['a', 'c']);
 * console.log(array);
 * // => ['b', 'b']
 */
function pullAll(array, values) {
  return (array && array.length && values && values.length)
    ? basePullAll(array, values)
    : array;
}

module.exports = pullAll;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var baseUnset = __webpack_require__(224),
    isIndex = __webpack_require__(12);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * The base implementation of `_.pullAt` without support for individual
 * indexes or capturing the removed elements.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {number[]} indexes The indexes of elements to remove.
 * @returns {Array} Returns `array`.
 */
function basePullAt(array, indexes) {
  var length = array ? indexes.length : 0,
      lastIndex = length - 1;

  while (length--) {
    var index = indexes[length];
    if (length == lastIndex || index !== previous) {
      var previous = index;
      if (isIndex(index)) {
        splice.call(array, index, 1);
      } else {
        baseUnset(array, index);
      }
    }
  }
  return array;
}

module.exports = basePullAt;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(11);

/**
 * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseSortedUniq(array, iteratee) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    if (!index || !eq(computed, seen)) {
      var seen = computed;
      result[resIndex++] = value === 0 ? 0 : value;
    }
  }
  return result;
}

module.exports = baseSortedUniq;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(74),
    arrayMap = __webpack_require__(7),
    unzip = __webpack_require__(59);

/**
 * This method is like `_.unzip` except that it accepts `iteratee` to specify
 * how regrouped values should be combined. The iteratee is invoked with the
 * elements of each group: (...group).
 *
 * @static
 * @memberOf _
 * @since 3.8.0
 * @category Array
 * @param {Array} array The array of grouped elements to process.
 * @param {Function} [iteratee=_.identity] The function to combine
 *  regrouped values.
 * @returns {Array} Returns the new array of regrouped elements.
 * @example
 *
 * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
 * // => [[1, 10, 100], [2, 20, 200]]
 *
 * _.unzipWith(zipped, _.add);
 * // => [3, 30, 300]
 */
function unzipWith(array, iteratee) {
  if (!(array && array.length)) {
    return [];
  }
  var result = unzip(array);
  if (iteratee == null) {
    return result;
  }
  return arrayMap(result, function(group) {
    return apply(iteratee, undefined, group);
  });
}

module.exports = unzipWith;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(258),
    eq = __webpack_require__(11);

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
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

/**
 * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
 *
 * @private
 * @param {Array} props The property identifiers.
 * @param {Array} values The property values.
 * @param {Function} assignFunc The function to assign values.
 * @returns {Object} Returns the new object.
 */
function baseZipObject(props, values, assignFunc) {
  var index = -1,
      length = props.length,
      valsLength = values.length,
      result = {};

  while (++index < length) {
    var value = index < valsLength ? values[index] : undefined;
    assignFunc(result, props[index], value);
  }
  return result;
}

module.exports = baseZipObject;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var RenderEngine_1 = __webpack_require__(10);
var Dimensionable_1 = __webpack_require__(67);
var ComposableViewObject = (function (_super) {
    __extends(ComposableViewObject, _super);
    function ComposableViewObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ComposableViewObject.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        set: function (parent) {
            this._parent = parent;
        },
        enumerable: true,
        configurable: true
    });
    ComposableViewObject.prototype.globalX = function () {
        if (this.parent) {
            return this.x + this.parent.globalX();
        }
        else {
            return this.x;
        }
    };
    ComposableViewObject.prototype.globalY = function () {
        if (this.parent) {
            return this.y + this.parent.globalY();
        }
        else {
            return this.y;
        }
    };
    ComposableViewObject.prototype.observableDisposed = function () {
        RenderEngine_1.RenderEngine.getInstance().unregister(this);
    };
    ComposableViewObject.prototype.remove = function (object) {
        //do nothing
    };
    return ComposableViewObject;
}(Dimensionable_1.Dimensionable));
exports.ComposableViewObject = ComposableViewObject;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StagedReference_1 = __webpack_require__(263);
var ReferenceManager = (function () {
    function ReferenceManager() {
        this.stagedReferences = [];
    }
    ReferenceManager.prototype.getReferencesForStage = function (stage) {
        var stageReferences = this.stagedReferences.filter(function (object) {
            if (object.stage == stage)
                return object;
        });
        //remove the refs
        var newStagedRefs = this.stagedReferences.filter(function (object) {
            if (object.stage != stage)
                return object;
        });
        this.stagedReferences = newStagedRefs;
        return stageReferences.map(function (object) {
            return object.object;
        });
    };
    ReferenceManager.prototype.addReferenceToStage = function (object, stage) {
        var reference = new StagedReference_1.StagedReference(object, stage); //might need to rework this to pass in a SR to start to properly link
        this.stagedReferences.push(reference);
    };
    return ReferenceManager;
}());
exports.ReferenceManager = ReferenceManager;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ClickableViewObject_1 = __webpack_require__(16);
var StickerTextViewObject = (function (_super) {
    __extends(StickerTextViewObject, _super);
    function StickerTextViewObject(x, y, width, height, angle, drawingStratgegy, clickStrategy, callback, text) {
        var _this = _super.call(this, x, y, width, height, angle, drawingStratgegy, clickStrategy, callback) || this;
        _this.text = text;
        _this.preRender();
        return _this;
    }
    Object.defineProperty(StickerTextViewObject.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (text) {
            this._text = text;
            this.preRender();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StickerTextViewObject.prototype, "font", {
        get: function () {
            return this._font;
        },
        set: function (font) {
            this._font = font;
            this.preRender();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StickerTextViewObject.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
            this.preRender();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StickerTextViewObject.prototype, "backgroundColor", {
        get: function () {
            return this._backgroundColor;
        },
        set: function (backgroundColor) {
            this._backgroundColor = backgroundColor;
            this.preRender();
        },
        enumerable: true,
        configurable: true
    });
    StickerTextViewObject.prototype.hover = function () {
        throw new Error("Method not implemented.");
    };
    StickerTextViewObject.prototype.preRender = function () {
        this.context.beginPath();
        this.context.clearRect(0, 0, this.width, this.height);
        if (this.backgroundColor)
            this.context.fillStyle = this.backgroundColor;
        else
            this.backgroundColor = 'black';
        this.context.fillRect(0, 0, this.width, this.height);
        if (this.font)
            this.context.font = this.font;
        else
            this.context.font = "bold 32px Arial";
        if (this.color)
            this.context.fillStyle = this.color;
        else
            this.context.fillStyle = "#ffffff";
        this.context.fillText(this.text, (this.width - this.context.measureText(this.text).width) / 2, (this.height + 40) / 2);
    };
    StickerTextViewObject.prototype.update = function () {
        throw new Error("Method not implemented.");
    };
    return StickerTextViewObject;
}(ClickableViewObject_1.ClickableViewObject));
exports.StickerTextViewObject = StickerTextViewObject;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ClickableViewObject_1 = __webpack_require__(16);
var ButtonViewObject = (function (_super) {
    __extends(ButtonViewObject, _super);
    function ButtonViewObject(x, y, width, height, angle, drawingStrategy, clickStrategy, text, callback) {
        var _this = _super.call(this, x, y, width, height, angle, drawingStrategy, clickStrategy, callback) || this;
        _this.isHovered = false;
        _this.text = text;
        _this.preRender();
        return _this;
    }
    Object.defineProperty(ButtonViewObject.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (text) {
            this._text = text;
        },
        enumerable: true,
        configurable: true
    });
    ButtonViewObject.prototype.preRender = function () {
        this.context.beginPath();
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.fillStyle = "#3498db";
        this.context.rect(0, 0, this.width, this.height);
        this.context.fill();
        //bottom side
        if (!this.isHovered) {
            this.context.beginPath();
            this.context.fillStyle = "#2980b9";
            this.context.rect(0, this.height / 10 * 9, this.width, this.height / 10);
            this.context.fill();
        }
        //text
        this.context.strokeStyle = "#c8f7c5";
        this.context.lineWidth = 10;
        this.context.rect(0, 0, this.width, this.height);
        //this.context.stroke();
        this.context.font = "24px Arial";
        this.context.fillStyle = "#ffffff";
        this.context.fillText(this.text, (this.width - this.context.measureText(this.text).width) / 2, (this.height + 12) / 2);
    };
    ButtonViewObject.prototype.update = function () {
        throw new Error("Method not implemented.");
    };
    ButtonViewObject.prototype.hover = function () {
        //get rid of bottom thing
        this.isHovered = true;
        this.preRender();
    };
    ButtonViewObject.prototype.postRender = function () {
        this.isHovered = false;
        this.preRender();
    };
    return ButtonViewObject;
}(ClickableViewObject_1.ClickableViewObject));
exports.ButtonViewObject = ButtonViewObject;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Route = (function () {
    //want to add a length value as well
    function Route(path) {
        this.points = path;
        this.numPoints = this.points.length;
    }
    Route.prototype.getPoint = function (index) {
        return this.points[index];
    };
    return Route;
}());
exports.Route = Route;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ClickableViewObject_1 = __webpack_require__(16);
var LogoViewObject = (function (_super) {
    __extends(LogoViewObject, _super);
    function LogoViewObject(x, y, width, height, angle, drawingStratgegy, clickStrategy, callback, text) {
        var _this = _super.call(this, x, y, width, height, angle, drawingStratgegy, clickStrategy, callback) || this;
        _this.text = text;
        _this.preRender();
        return _this;
    }
    Object.defineProperty(LogoViewObject.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (text) {
            this._text = text;
            this.preRender();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogoViewObject.prototype, "font", {
        get: function () {
            return this._font;
        },
        set: function (font) {
            this._font = font;
            this.preRender();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogoViewObject.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
            this.preRender();
        },
        enumerable: true,
        configurable: true
    });
    LogoViewObject.prototype.hover = function () {
        throw new Error("Method not implemented.");
    };
    LogoViewObject.prototype.preRender = function () {
        this.context.beginPath();
        this.context.clearRect(0, 0, this.width, this.height);
        if (this.font)
            this.context.font = this.font;
        else
            this.context.font = "bold 50px Arial";
        if (this.color)
            this.context.fillStyle = this.color;
        else
            this.context.fillStyle = "#ffffff";
        this.context.fillText(this.text, (this.width - this.context.measureText(this.text).width) / 2, (this.height + 12) / 2);
    };
    LogoViewObject.prototype.update = function () {
        throw new Error("Method not implemented.");
    };
    return LogoViewObject;
}(ClickableViewObject_1.ClickableViewObject));
exports.LogoViewObject = LogoViewObject;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ComposableView_1 = __webpack_require__(105);
var ComposableViewDecorator = (function (_super) {
    __extends(ComposableViewDecorator, _super);
    function ComposableViewDecorator(view) {
        var _this = _super.call(this, view.x, view.y, view.width, view.height) || this;
        _this.view = view;
        _this.x = view.x;
        _this.y = view.y;
        _this.width = view.width;
        _this.height = view.height;
        return _this;
        //trying to figure out the best way to create a decorator, this is the best solution I have found so far
    }
    Object.defineProperty(ComposableViewDecorator.prototype, "x", {
        get: function () {
            return this.view.x;
        },
        set: function (x) {
            if (this.view != null)
                this.view.x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComposableViewDecorator.prototype, "y", {
        get: function () {
            return this.view.y;
        },
        set: function (y) {
            if (this.view != null)
                this.view.y = y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComposableViewDecorator.prototype, "width", {
        get: function () {
            return this.view.width;
        },
        set: function (width) {
            if (this.view != null)
                this.view.width = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComposableViewDecorator.prototype, "height", {
        get: function () {
            return this.view.height;
        },
        set: function (height) {
            if (this.view != null)
                this.view.height = height;
        },
        enumerable: true,
        configurable: true
    });
    ComposableViewDecorator.prototype.remove = function (object) {
        this.view.remove(object);
    };
    ComposableViewDecorator.prototype.accept = function (visitor) {
        this.view.accept(visitor);
    };
    return ComposableViewDecorator;
}(ComposableView_1.ComposableView));
exports.ComposableViewDecorator = ComposableViewDecorator;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ComposableViewObject_1 = __webpack_require__(98);
var ComposableView = (function (_super) {
    __extends(ComposableView, _super);
    // get x(){
    //     return this._x * RenderEngine.getInstance().scale;
    // }
    // set x(x: number){
    //     this._x = x / RenderEngine.getInstance().scale;
    // }
    // get width(){
    //     console.log("widht",this._width);
    //     console.log("scale", RenderEngine.getInstance().scale);
    //     return this._width * RenderEngine.getInstance().scale;
    // }
    // set width(width: number){
    //     this._width = width / RenderEngine.getInstance().scale;
    // }
    // get y(){
    //     return this._y * RenderEngine.getInstance().scale;
    // }
    // set y(y: number){
    //     this._y = y / RenderEngine.getInstance().scale;
    // }
    // get height(){
    //     return this._height * RenderEngine.getInstance().scale;
    // }
    // set height(height: number){
    //     this._height = height / RenderEngine.getInstance().scale;
    // }
    function ComposableView(x, y, width, height) {
        var _this = _super.call(this) || this;
        _this.children = [];
        _this._x = x;
        _this._y = y;
        _this._width = width;
        _this._height = height;
        _this.canvas = document.createElement('canvas');
        _this.canvas.width = width;
        _this.canvas.height = height;
        _this.context = _this.canvas.getContext('2d');
        return _this;
    }
    ComposableView.prototype.render = function (context, width, height) {
        var _this = this;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.children.forEach(function (obj, index) { return obj.render(_this.context, _this.canvas.width, _this.canvas.height); });
        context.drawImage(this.canvas, this.x, this.y);
    };
    ComposableView.prototype.update = function () {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    };
    ComposableView.prototype.addView = function (viewObject) {
        viewObject.parent = this;
        this.children.push(viewObject);
    };
    ComposableView.prototype.remove = function (object) {
        this.children = this.children.filter(function (element) {
            if (element != object)
                return element;
        });
        this.children.forEach(function (child) {
            child.remove(object);
        });
    };
    ComposableView.prototype.accept = function (visitor) {
        this.children.forEach(function (child) {
            child.accept(visitor);
        });
    };
    return ComposableView;
}(ComposableViewObject_1.ComposableViewObject));
exports.ComposableView = ComposableView;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Controller = (function () {
    function Controller(subject) {
        this.active = true;
        this.colliding = false;
        this.subject = subject;
    }
    Controller.prototype.tick = function () {
        if (this.active)
            this.run();
    };
    Controller.prototype.run = function () {
        this.decide();
        this.act();
        this.colliding = false;
    };
    Controller.prototype.collide = function (object) {
        this.colliding = true;
    };
    Controller.prototype.deactivate = function () {
        this.active = false;
    };
    Controller.prototype.activate = function () {
        this.active = true;
    };
    Controller.prototype.dispose = function () {
        //do nothing
    };
    return Controller;
}());
exports.Controller = Controller;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FieldFactory_1 = __webpack_require__(108);
var FindMatchClickStrategy_1 = __webpack_require__(272);
var MatchTemplater_1 = __webpack_require__(61);
var HorizontalCenterPositioningDecorator_1 = __webpack_require__(63);
var LogoViewObject_1 = __webpack_require__(103);
var ClickableManager_1 = __webpack_require__(273);
var PauseViewObject_1 = __webpack_require__(274);
var PauseGameClickStrategy_1 = __webpack_require__(275);
var HorizontalCenterDecorator_1 = __webpack_require__(276);
var TopLeftDrawingStrategy_1 = __webpack_require__(64);
var ComposableView_1 = __webpack_require__(105);
var HitBoxFactory_1 = __webpack_require__(277);
var ControllerFactory_1 = __webpack_require__(279);
var CollisionManager_1 = __webpack_require__(285);
var GameEngine_1 = __webpack_require__(17);
var RenderEngine_1 = __webpack_require__(10);
var PlayerFactory_1 = __webpack_require__(286);
var FieldViewObject_1 = __webpack_require__(289);
var VerticalCenterDecorator_1 = __webpack_require__(290);
var ButtonViewObject_1 = __webpack_require__(101);
var PlayerViewObjectFactory_1 = __webpack_require__(291);
/*
 * Fetch our environment for our game and configure
 */
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var wrapper = document.getElementById("canvasWrapper");
canvas.height = wrapper.clientHeight;
canvas.width = wrapper.clientWidth;
var gameEngine = GameEngine_1.GameEngine.getInstance();
var renderEngine = RenderEngine_1.RenderEngine.getInstance();
var scale = 0;
function resize() {
    canvas.height = wrapper.clientHeight;
    canvas.width = wrapper.clientWidth;
    var yScale = canvas.height / 480;
    var xScale = canvas.width / 320;
    scale = (xScale <= yScale) ? xScale : yScale;
    console.log(scale);
    context.scale(scale, scale);
    renderEngine.scale = scale;
}
resize();
window.addEventListener('resize', resize);
/*
 * Declare game engines (constant because they will not be changed, also are singletons)
 */
renderEngine.scale = scale;
renderEngine.setCanvas(canvas, context);
//gameEngine.start();
renderEngine.start();
//services
var collisionManager = new CollisionManager_1.CollisionManager();
var clickManager = new ClickableManager_1.ClickableManager(canvas);
gameEngine.addService(collisionManager); //should be added first for consistent behaviour (no issue if its not really though)
renderEngine.addService(clickManager);
//factories
var hitBoxFactory = new HitBoxFactory_1.HitBoxFactory(collisionManager);
var controllerFactory = new ControllerFactory_1.ControllerFactory(collisionManager, clickManager);
var playerFactory = new PlayerFactory_1.PlayerFactory(hitBoxFactory, controllerFactory);
var playerViewObjectFactory = new PlayerViewObjectFactory_1.PlayerViewObjectFactory();
var fieldFactory = new FieldFactory_1.FieldFactory(hitBoxFactory, controllerFactory);
//create a composable view for game area to exist in
var gameArea = new ComposableView_1.ComposableView(0, 0, 320, 480);
var templater = new MatchTemplater_1.MatchTemplater(gameArea, playerFactory, playerViewObjectFactory, fieldFactory, clickManager, collisionManager);
var test2 = new VerticalCenterDecorator_1.VerticalCenterDecorator(gameArea);
var test = new HorizontalCenterDecorator_1.HorizontalCenterDecorator(test2);
renderEngine.register(test);
//just the field VO
var field = new FieldViewObject_1.FieldViewObject(0, 0, 320, 480, 0, new TopLeftDrawingStrategy_1.TopLeftDrawingStrategy());
gameArea.addView(field);
//pause button test
var pauseButton = new PauseViewObject_1.PauseViewObject(0, 0, 64, 64, 0, new TopLeftDrawingStrategy_1.TopLeftDrawingStrategy(), new PauseGameClickStrategy_1.PauseGameClickStrategy(), null);
clickManager.addClickable(pauseButton);
//gameArea.addView(pauseButton);
//logo
var logo = new LogoViewObject_1.LogoViewObject(0, 30, 300, 100, 0, new TopLeftDrawingStrategy_1.TopLeftDrawingStrategy(), new PauseGameClickStrategy_1.PauseGameClickStrategy(), null, 'WILDCAT!');
var logoCenter = new HorizontalCenterPositioningDecorator_1.HorizontalCenterPositioningDecorator(logo);
gameArea.addView(logoCenter);
RenderEngine_1.RenderEngine.getInstance().addReferenceToStage(logoCenter, 'menuStage');
//main menu buttons
var startButton = new ButtonViewObject_1.ButtonViewObject(100, 170, 200, 60, 0, new TopLeftDrawingStrategy_1.TopLeftDrawingStrategy(), new FindMatchClickStrategy_1.FindMatchClickStrategy(), "Single Player", null);
var startButtonCenter = new HorizontalCenterPositioningDecorator_1.HorizontalCenterPositioningDecorator(startButton);
clickManager.addClickable(startButtonCenter);
gameArea.addView(startButtonCenter);
RenderEngine_1.RenderEngine.getInstance().addReferenceToStage(startButtonCenter, 'menuStage');
var defenseButton = new ButtonViewObject_1.ButtonViewObject(100, 250, 200, 60, 0, new TopLeftDrawingStrategy_1.TopLeftDrawingStrategy(), new PauseGameClickStrategy_1.PauseGameClickStrategy(), "Instructions", null);
var defenseButtonCenter = new HorizontalCenterPositioningDecorator_1.HorizontalCenterPositioningDecorator(defenseButton);
clickManager.addClickable(defenseButtonCenter);
gameArea.addView(defenseButtonCenter);
RenderEngine_1.RenderEngine.getInstance().addReferenceToStage(defenseButtonCenter, 'menuStage');
// var testRouteRender = new RouteViewObject(0,0,gameArea.width, gameArea.height,0,new TopLeftDrawingStrategy());
// testRouteRender.updateRoute([new Coordinate(160,250), new Coordinate(160,150), new Coordinate(170,100)]);
// gameArea.addView(testRouteRender);
//create the player you control youreself (runner)
//PlayerFactory.createRunnerInArea(160,400, -90, gameArea);
// //create blockers with aroutes
// PlayerFactory.createBlockerInArea(110,300,new Route([new Coordinate(60,280)]), gameArea);
// PlayerFactory.createBlockerInArea(145,300,new Route([new Coordinate(110,280)]), gameArea);
// PlayerFactory.createBlockerInArea(180,300,new Route([new Coordinate(150,280)]), gameArea);
// PlayerFactory.createBlockerInArea(230,300,new Route([new Coordinate(260,280)]), gameArea);
// //create defenders with routes
// PlayerFactory.createDefenderInArea(60,250,new Route([new Coordinate(80,270)]), gameArea);
// PlayerFactory.createDefenderInArea(110,250,new Route([new Coordinate(130, 270)]), gameArea);
// PlayerFactory.createDefenderInArea(160,250,new Route([new Coordinate(160,150), new Coordinate(170,100)]), gameArea);
// PlayerFactory.createDefenderInArea(260,250,new Route([new Coordinate(240,270)]), gameArea);
// PlayerFactory.createDefenderInArea(210,250,new Route([new Coordinate(190,270)]), gameArea);


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameMap_1 = __webpack_require__(18);
var Endzone_1 = __webpack_require__(110);
var Wall_1 = __webpack_require__(271);
var FieldFactory = (function () {
    function FieldFactory(hitboxFactory, controllerFactory) {
        this.hitBoxFactory = hitboxFactory;
        this.controllerFactory = controllerFactory;
    }
    FieldFactory.prototype.CreateEndZone = function (x, y) {
        var endzone = new Endzone_1.Endzone(x, y, 320, 120, 'endzone');
        endzone.setHitbox(this.hitBoxFactory.CreatePassiveSquareHitBox(320, 120, endzone));
        //GameEngine.getInstance().register(player);
        GameMap_1.GameMap.getInstance().addMapObject(endzone, 'endzone');
        return endzone;
    };
    FieldFactory.prototype.CreateWall = function (x, y, width, height) {
        var wall = new Wall_1.Wall(x, y, width, height, 'wall');
        wall.setHitbox(this.hitBoxFactory.CreatePassiveSquareHitBox(width, height, wall));
        GameMap_1.GameMap.getInstance().addMapObject(wall, 'wall');
        return wall;
    };
    return FieldFactory;
}());
exports.FieldFactory = FieldFactory;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MapObject = (function () {
    function MapObject(object, type) {
        this.object = object;
        this.type = type;
    }
    return MapObject;
}());
exports.MapObject = MapObject;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CollidableGameObject_1 = __webpack_require__(41);
var ScoreKeeper_1 = __webpack_require__(40);
var Endzone = (function (_super) {
    __extends(Endzone, _super);
    function Endzone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Endzone.prototype.collide = function (object) {
        if (object.type == 'runner') {
            ScoreKeeper_1.ScoreKeeper.getInstance().incrementScore();
        }
    };
    Endzone.prototype.tick = function () {
        throw new Error("Method not implemented.");
    };
    return Endzone;
}(CollidableGameObject_1.CollidableGameObject));
exports.Endzone = Endzone;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ObservableGameObject_1 = __webpack_require__(112);
var PositionableGameObject = (function (_super) {
    __extends(PositionableGameObject, _super);
    function PositionableGameObject(x, y, width, height) {
        var _this = _super.call(this) || this;
        _this._angle = 0;
        _this.x = x;
        _this.y = y;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Object.defineProperty(PositionableGameObject.prototype, "angle", {
        get: function () {
            return this._angle;
        },
        set: function (angle) {
            this._angle = angle;
        },
        enumerable: true,
        configurable: true
    });
    PositionableGameObject.prototype.setSize = function (width, height) {
        this.width = width;
        this.height = height;
    };
    PositionableGameObject.prototype.setPosition = function (x, y) {
        this.x = x;
        this.y = y;
    };
    return PositionableGameObject;
}(ObservableGameObject_1.ObservableGameObject));
exports.PositionableGameObject = PositionableGameObject;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Dimensionable_1 = __webpack_require__(67);
var array = __webpack_require__(27);
var ObservableGameObject = (function (_super) {
    __extends(ObservableGameObject, _super);
    function ObservableGameObject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.observers = [];
        return _this;
    }
    ObservableGameObject.prototype.dispose = function () {
        this.updateObserversOfDispose();
    };
    ObservableGameObject.prototype.register = function (obj) {
        this.observers.push(obj);
    };
    ObservableGameObject.prototype.unregister = function (obj) {
        array.pull(this.observers, obj);
    };
    ObservableGameObject.prototype.updateObservers = function () {
        this.observers.forEach(function (obj, index) { return obj.update(); });
    };
    ObservableGameObject.prototype.updateObserversOfDispose = function () {
        this.observers.forEach(function (obj, index) { return obj.observableDisposed(); });
    };
    return ObservableGameObject;
}(Dimensionable_1.Dimensionable));
exports.ObservableGameObject = ObservableGameObject;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(5),
    isIterateeCall = __webpack_require__(42),
    toInteger = __webpack_require__(2);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size, guard) {
  if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
    size = 1;
  } else {
    size = nativeMax(toInteger(size), 0);
  }
  var length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  var index = 0,
      resIndex = 0,
      result = Array(nativeCeil(length / size));

  while (index < length) {
    result[resIndex++] = baseSlice(array, index, (index += size));
  }
  return result;
}

module.exports = chunk;


/***/ }),
/* 114 */
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
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(23);

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
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

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
/* 116 */
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
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(118);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19),
    isSymbol = __webpack_require__(13);

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
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
function compact(array) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = compact;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(45),
    baseFlatten = __webpack_require__(4),
    copyArray = __webpack_require__(70),
    isArray = __webpack_require__(6);

/**
 * Creates a new array concatenating `array` with any additional arrays
 * and/or values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to concatenate.
 * @param {...*} [values] The values to concatenate.
 * @returns {Array} Returns the new concatenated array.
 * @example
 *
 * var array = [1];
 * var other = _.concat(array, 2, [3], [[4]]);
 *
 * console.log(other);
 * // => [1, 2, 3, [4]]
 *
 * console.log(array);
 * // => [1]
 */
function concat() {
  var length = arguments.length;
  if (!length) {
    return [];
  }
  var args = Array(length - 1),
      array = arguments[0],
      index = length;

  while (index--) {
    args[index - 1] = arguments[index];
  }
  return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
}

module.exports = concat;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(23),
    isArguments = __webpack_require__(46),
    isArray = __webpack_require__(6);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(22),
    isObjectLike = __webpack_require__(20);

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
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(24),
    baseFlatten = __webpack_require__(4),
    baseRest = __webpack_require__(0),
    isArrayLikeObject = __webpack_require__(3);

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

module.exports = difference;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(125),
    ListCache = __webpack_require__(30),
    Map = __webpack_require__(48);

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
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(126),
    hashDelete = __webpack_require__(131),
    hashGet = __webpack_require__(132),
    hashHas = __webpack_require__(133),
    hashSet = __webpack_require__(134);

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
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(29);

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
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(68),
    isMasked = __webpack_require__(128),
    isObject = __webpack_require__(19),
    toSource = __webpack_require__(71);

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
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

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
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(129);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(9);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 130 */
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
/* 131 */
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
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(29);

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
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(29);

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
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(29);

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
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 135 */
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
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(31);

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
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(31);

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
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(31);

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
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(31);

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
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(32);

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
/* 141 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(32);

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
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(32);

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
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(32);

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
/* 145 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 146 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 147 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(149),
    defineProperty = __webpack_require__(76),
    identity = __webpack_require__(36);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 149 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 150 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(24),
    baseFlatten = __webpack_require__(4),
    baseIteratee = __webpack_require__(1),
    baseRest = __webpack_require__(0),
    isArrayLikeObject = __webpack_require__(3),
    last = __webpack_require__(8);

/**
 * This method is like `_.difference` except that it accepts `iteratee` which
 * is invoked for each element of `array` and `values` to generate the criterion
 * by which they're compared. The order and references of result values are
 * determined by the first array. The iteratee is invoked with one argument:
 * (value).
 *
 * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
 * // => [1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
 * // => [{ 'x': 2 }]
 */
var differenceBy = baseRest(function(array, values) {
  var iteratee = last(values);
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined;
  }
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), baseIteratee(iteratee, 2))
    : [];
});

module.exports = differenceBy;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(153),
    getMatchData = __webpack_require__(181),
    matchesStrictComparable = __webpack_require__(87);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(77),
    baseIsEqual = __webpack_require__(78);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(30);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 155 */
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
/* 156 */
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
/* 157 */
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
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(30),
    Map = __webpack_require__(48),
    MapCache = __webpack_require__(47);

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
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
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
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(77),
    equalArrays = __webpack_require__(79),
    equalByTag = __webpack_require__(161),
    equalObjects = __webpack_require__(164),
    getTag = __webpack_require__(177),
    isArray = __webpack_require__(6),
    isBuffer = __webpack_require__(82),
    isTypedArray = __webpack_require__(84);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 160 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(23),
    Uint8Array = __webpack_require__(162),
    eq = __webpack_require__(11),
    equalArrays = __webpack_require__(79),
    mapToArray = __webpack_require__(163),
    setToArray = __webpack_require__(52);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(9);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 163 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(165);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(166),
    getSymbols = __webpack_require__(167),
    keys = __webpack_require__(80);

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
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(45),
    isArray = __webpack_require__(6);

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
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(25),
    stubArray = __webpack_require__(168);

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
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 168 */
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
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(81),
    isArguments = __webpack_require__(46),
    isArray = __webpack_require__(6),
    isBuffer = __webpack_require__(82),
    isIndex = __webpack_require__(12),
    isTypedArray = __webpack_require__(84);

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
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 170 */
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
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(22),
    isLength = __webpack_require__(44),
    isObjectLike = __webpack_require__(20);

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
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(69);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(83)(module)))

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(174),
    nativeKeys = __webpack_require__(175);

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
/* 174 */
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
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(176);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 176 */
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
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(178),
    Map = __webpack_require__(48),
    Promise = __webpack_require__(179),
    Set = __webpack_require__(85),
    WeakMap = __webpack_require__(180),
    baseGetTag = __webpack_require__(22),
    toSource = __webpack_require__(71);

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
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(14),
    root = __webpack_require__(9);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(14),
    root = __webpack_require__(9);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(14),
    root = __webpack_require__(9);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(86),
    keys = __webpack_require__(80);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(78),
    get = __webpack_require__(88),
    hasIn = __webpack_require__(188),
    isKey = __webpack_require__(54),
    isStrictComparable = __webpack_require__(86),
    matchesStrictComparable = __webpack_require__(87),
    toKey = __webpack_require__(21);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(184);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(185);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(47);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(187);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(23),
    arrayMap = __webpack_require__(7),
    isArray = __webpack_require__(6),
    isSymbol = __webpack_require__(13);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(189),
    hasPath = __webpack_require__(190);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 189 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(37),
    isArguments = __webpack_require__(46),
    isArray = __webpack_require__(6),
    isIndex = __webpack_require__(12),
    isLength = __webpack_require__(44),
    toKey = __webpack_require__(21);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(89),
    basePropertyDeep = __webpack_require__(192),
    isKey = __webpack_require__(54),
    toKey = __webpack_require__(21);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(53);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(24),
    baseFlatten = __webpack_require__(4),
    baseRest = __webpack_require__(0),
    isArrayLikeObject = __webpack_require__(3),
    last = __webpack_require__(8);

/**
 * This method is like `_.difference` except that it accepts `comparator`
 * which is invoked to compare elements of `array` to `values`. The order and
 * references of result values are determined by the first array. The comparator
 * is invoked with two arguments: (arrVal, othVal).
 *
 * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 *
 * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
 * // => [{ 'x': 2, 'y': 1 }]
 */
var differenceWith = baseRest(function(array, values) {
  var comparator = last(values);
  if (isArrayLikeObject(comparator)) {
    comparator = undefined;
  }
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
    : [];
});

module.exports = differenceWith;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(5),
    toInteger = __webpack_require__(2);

/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.drop([1, 2, 3]);
 * // => [2, 3]
 *
 * _.drop([1, 2, 3], 2);
 * // => [3]
 *
 * _.drop([1, 2, 3], 5);
 * // => []
 *
 * _.drop([1, 2, 3], 0);
 * // => [1, 2, 3]
 */
function drop(array, n, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : toInteger(n);
  return baseSlice(array, n < 0 ? 0 : n, length);
}

module.exports = drop;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(5),
    toInteger = __webpack_require__(2);

/**
 * Creates a slice of `array` with `n` elements dropped from the end.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.dropRight([1, 2, 3]);
 * // => [1, 2]
 *
 * _.dropRight([1, 2, 3], 2);
 * // => [1]
 *
 * _.dropRight([1, 2, 3], 5);
 * // => []
 *
 * _.dropRight([1, 2, 3], 0);
 * // => [1, 2, 3]
 */
function dropRight(array, n, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : toInteger(n);
  n = length - n;
  return baseSlice(array, 0, n < 0 ? 0 : n);
}

module.exports = dropRight;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(1),
    baseWhile = __webpack_require__(38);

/**
 * Creates a slice of `array` excluding elements dropped from the end.
 * Elements are dropped until `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index, array).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ];
 *
 * _.dropRightWhile(users, function(o) { return !o.active; });
 * // => objects for ['barney']
 *
 * // The `_.matches` iteratee shorthand.
 * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
 * // => objects for ['barney', 'fred']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.dropRightWhile(users, ['active', false]);
 * // => objects for ['barney']
 *
 * // The `_.property` iteratee shorthand.
 * _.dropRightWhile(users, 'active');
 * // => objects for ['barney', 'fred', 'pebbles']
 */
function dropRightWhile(array, predicate) {
  return (array && array.length)
    ? baseWhile(array, baseIteratee(predicate, 3), true, true)
    : [];
}

module.exports = dropRightWhile;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(1),
    baseWhile = __webpack_require__(38);

/**
 * Creates a slice of `array` excluding elements dropped from the beginning.
 * Elements are dropped until `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index, array).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.dropWhile(users, function(o) { return !o.active; });
 * // => objects for ['pebbles']
 *
 * // The `_.matches` iteratee shorthand.
 * _.dropWhile(users, { 'user': 'barney', 'active': false });
 * // => objects for ['fred', 'pebbles']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.dropWhile(users, ['active', false]);
 * // => objects for ['pebbles']
 *
 * // The `_.property` iteratee shorthand.
 * _.dropWhile(users, 'active');
 * // => objects for ['barney', 'fred', 'pebbles']
 */
function dropWhile(array, predicate) {
  return (array && array.length)
    ? baseWhile(array, baseIteratee(predicate, 3), true)
    : [];
}

module.exports = dropWhile;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var baseFill = __webpack_require__(199),
    isIterateeCall = __webpack_require__(42);

/**
 * Fills elements of `array` with `value` from `start` up to, but not
 * including, `end`.
 *
 * **Note:** This method mutates `array`.
 *
 * @static
 * @memberOf _
 * @since 3.2.0
 * @category Array
 * @param {Array} array The array to fill.
 * @param {*} value The value to fill `array` with.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = [1, 2, 3];
 *
 * _.fill(array, 'a');
 * console.log(array);
 * // => ['a', 'a', 'a']
 *
 * _.fill(Array(3), 2);
 * // => [2, 2, 2]
 *
 * _.fill([4, 6, 8, 10], '*', 1, 3);
 * // => [4, '*', '*', 10]
 */
function fill(array, value, start, end) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
    start = 0;
    end = length;
  }
  return baseFill(array, value, start, end);
}

module.exports = fill;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(2),
    toLength = __webpack_require__(200);

/**
 * The base implementation of `_.fill` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to fill.
 * @param {*} value The value to fill `array` with.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns `array`.
 */
function baseFill(array, value, start, end) {
  var length = array.length;

  start = toInteger(start);
  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = (end === undefined || end > length) ? length : toInteger(end);
  if (end < 0) {
    end += length;
  }
  end = start > end ? 0 : toLength(end);
  while (start < end) {
    array[start++] = value;
  }
  return array;
}

module.exports = baseFill;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var baseClamp = __webpack_require__(201),
    toInteger = __webpack_require__(2);

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object.
 *
 * **Note:** This method is based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toLength(3.2);
 * // => 3
 *
 * _.toLength(Number.MIN_VALUE);
 * // => 0
 *
 * _.toLength(Infinity);
 * // => 4294967295
 *
 * _.toLength('3.2');
 * // => 3
 */
function toLength(value) {
  return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
}

module.exports = toLength;


/***/ }),
/* 201 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

module.exports = baseClamp;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(33),
    baseIteratee = __webpack_require__(1),
    toInteger = __webpack_require__(2);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(33),
    baseIteratee = __webpack_require__(1),
    toInteger = __webpack_require__(2);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * This method is like `_.findIndex` except that it iterates over elements
 * of `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=array.length-1] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ];
 *
 * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
 * // => 2
 *
 * // The `_.matches` iteratee shorthand.
 * _.findLastIndex(users, { 'user': 'barney', 'active': true });
 * // => 0
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findLastIndex(users, ['active', false]);
 * // => 2
 *
 * // The `_.property` iteratee shorthand.
 * _.findLastIndex(users, 'active');
 * // => 0
 */
function findLastIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = length - 1;
  if (fromIndex !== undefined) {
    index = toInteger(fromIndex);
    index = fromIndex < 0
      ? nativeMax(length + index, 0)
      : nativeMin(index, length - 1);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index, true);
}

module.exports = findLastIndex;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(90);


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(4);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Recursively flattens `array`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flattenDeep([1, [2, [3, [4]], 5]]);
 * // => [1, 2, 3, 4, 5]
 */
function flattenDeep(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, INFINITY) : [];
}

module.exports = flattenDeep;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(4),
    toInteger = __webpack_require__(2);

/**
 * Recursively flatten `array` up to `depth` times.
 *
 * @static
 * @memberOf _
 * @since 4.4.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @param {number} [depth=1] The maximum recursion depth.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * var array = [1, [2, [3, [4]], 5]];
 *
 * _.flattenDepth(array, 1);
 * // => [1, 2, [3, [4]], 5]
 *
 * _.flattenDepth(array, 2);
 * // => [1, 2, 3, [4], 5]
 */
function flattenDepth(array, depth) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  depth = depth === undefined ? 1 : toInteger(depth);
  return baseFlatten(array, depth);
}

module.exports = flattenDepth;


/***/ }),
/* 207 */
/***/ (function(module, exports) {

/**
 * The inverse of `_.toPairs`; this method returns an object composed
 * from key-value `pairs`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} pairs The key-value pairs.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.fromPairs([['a', 1], ['b', 2]]);
 * // => { 'a': 1, 'b': 2 }
 */
function fromPairs(pairs) {
  var index = -1,
      length = pairs == null ? 0 : pairs.length,
      result = {};

  while (++index < length) {
    var pair = pairs[index];
    result[pair[0]] = pair[1];
  }
  return result;
}

module.exports = fromPairs;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(50),
    toInteger = __webpack_require__(2);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Gets the index at which the first occurrence of `value` is found in `array`
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. If `fromIndex` is negative, it's used as the
 * offset from the end of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * _.indexOf([1, 2, 1, 2], 2);
 * // => 1
 *
 * // Search from the `fromIndex`.
 * _.indexOf([1, 2, 1, 2], 2, 2);
 * // => 3
 */
function indexOf(array, value, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseIndexOf(array, value, index);
}

module.exports = indexOf;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(5);

/**
 * Gets all but the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.initial([1, 2, 3]);
 * // => [1, 2]
 */
function initial(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseSlice(array, 0, -1) : [];
}

module.exports = initial;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(7),
    baseIntersection = __webpack_require__(55),
    baseRest = __webpack_require__(0),
    castArrayLikeObject = __webpack_require__(56);

/**
 * Creates an array of unique values that are included in all given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * _.intersection([2, 1], [2, 3]);
 * // => [2]
 */
var intersection = baseRest(function(arrays) {
  var mapped = arrayMap(arrays, castArrayLikeObject);
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped)
    : [];
});

module.exports = intersection;


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(7),
    baseIntersection = __webpack_require__(55),
    baseIteratee = __webpack_require__(1),
    baseRest = __webpack_require__(0),
    castArrayLikeObject = __webpack_require__(56),
    last = __webpack_require__(8);

/**
 * This method is like `_.intersection` except that it accepts `iteratee`
 * which is invoked for each element of each `arrays` to generate the criterion
 * by which they're compared. The order and references of result values are
 * determined by the first array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
 * // => [2.1]
 *
 * // The `_.property` iteratee shorthand.
 * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }]
 */
var intersectionBy = baseRest(function(arrays) {
  var iteratee = last(arrays),
      mapped = arrayMap(arrays, castArrayLikeObject);

  if (iteratee === last(mapped)) {
    iteratee = undefined;
  } else {
    mapped.pop();
  }
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped, baseIteratee(iteratee, 2))
    : [];
});

module.exports = intersectionBy;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(7),
    baseIntersection = __webpack_require__(55),
    baseRest = __webpack_require__(0),
    castArrayLikeObject = __webpack_require__(56),
    last = __webpack_require__(8);

/**
 * This method is like `_.intersection` except that it accepts `comparator`
 * which is invoked to compare elements of `arrays`. The order and references
 * of result values are determined by the first array. The comparator is
 * invoked with two arguments: (arrVal, othVal).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 *
 * _.intersectionWith(objects, others, _.isEqual);
 * // => [{ 'x': 1, 'y': 2 }]
 */
var intersectionWith = baseRest(function(arrays) {
  var comparator = last(arrays),
      mapped = arrayMap(arrays, castArrayLikeObject);

  comparator = typeof comparator == 'function' ? comparator : undefined;
  if (comparator) {
    mapped.pop();
  }
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped, undefined, comparator)
    : [];
});

module.exports = intersectionWith;


/***/ }),
/* 213 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeJoin = arrayProto.join;

/**
 * Converts all elements in `array` into a string separated by `separator`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to convert.
 * @param {string} [separator=','] The element separator.
 * @returns {string} Returns the joined string.
 * @example
 *
 * _.join(['a', 'b', 'c'], '~');
 * // => 'a~b~c'
 */
function join(array, separator) {
  return array == null ? '' : nativeJoin.call(array, separator);
}

module.exports = join;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(33),
    baseIsNaN = __webpack_require__(72),
    strictLastIndexOf = __webpack_require__(215),
    toInteger = __webpack_require__(2);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * This method is like `_.indexOf` except that it iterates over elements of
 * `array` from right to left.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=array.length-1] The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * _.lastIndexOf([1, 2, 1, 2], 2);
 * // => 3
 *
 * // Search from the `fromIndex`.
 * _.lastIndexOf([1, 2, 1, 2], 2, 2);
 * // => 1
 */
function lastIndexOf(array, value, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = length;
  if (fromIndex !== undefined) {
    index = toInteger(fromIndex);
    index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
  }
  return value === value
    ? strictLastIndexOf(array, value, index)
    : baseFindIndex(array, baseIsNaN, index, true);
}

module.exports = lastIndexOf;


/***/ }),
/* 215 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.lastIndexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictLastIndexOf(array, value, fromIndex) {
  var index = fromIndex + 1;
  while (index--) {
    if (array[index] === value) {
      return index;
    }
  }
  return index;
}

module.exports = strictLastIndexOf;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var baseNth = __webpack_require__(217),
    toInteger = __webpack_require__(2);

/**
 * Gets the element at index `n` of `array`. If `n` is negative, the nth
 * element from the end is returned.
 *
 * @static
 * @memberOf _
 * @since 4.11.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=0] The index of the element to return.
 * @returns {*} Returns the nth element of `array`.
 * @example
 *
 * var array = ['a', 'b', 'c', 'd'];
 *
 * _.nth(array, 1);
 * // => 'b'
 *
 * _.nth(array, -2);
 * // => 'c';
 */
function nth(array, n) {
  return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
}

module.exports = nth;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var isIndex = __webpack_require__(12);

/**
 * The base implementation of `_.nth` which doesn't coerce arguments.
 *
 * @private
 * @param {Array} array The array to query.
 * @param {number} n The index of the element to return.
 * @returns {*} Returns the nth element of `array`.
 */
function baseNth(array, n) {
  var length = array.length;
  if (!length) {
    return;
  }
  n += n < 0 ? length : 0;
  return isIndex(n, length) ? array[n] : undefined;
}

module.exports = baseNth;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(0),
    pullAll = __webpack_require__(92);

/**
 * Removes all given values from `array` using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
 * to remove elements from an array by predicate.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {...*} [values] The values to remove.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 *
 * _.pull(array, 'a', 'c');
 * console.log(array);
 * // => ['b', 'b']
 */
var pull = baseRest(pullAll);

module.exports = pull;


/***/ }),
/* 219 */
/***/ (function(module, exports) {

/**
 * This function is like `baseIndexOf` except that it accepts a comparator.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOfWith(array, value, fromIndex, comparator) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (comparator(array[index], value)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseIndexOfWith;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(1),
    basePullAll = __webpack_require__(57);

/**
 * This method is like `_.pullAll` except that it accepts `iteratee` which is
 * invoked for each element of `array` and `values` to generate the criterion
 * by which they're compared. The iteratee is invoked with one argument: (value).
 *
 * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
 *
 * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
 * console.log(array);
 * // => [{ 'x': 2 }]
 */
function pullAllBy(array, values, iteratee) {
  return (array && array.length && values && values.length)
    ? basePullAll(array, values, baseIteratee(iteratee, 2))
    : array;
}

module.exports = pullAllBy;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var basePullAll = __webpack_require__(57);

/**
 * This method is like `_.pullAll` except that it accepts `comparator` which
 * is invoked to compare elements of `array` to `values`. The comparator is
 * invoked with two arguments: (arrVal, othVal).
 *
 * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
 *
 * @static
 * @memberOf _
 * @since 4.6.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
 *
 * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
 * console.log(array);
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
 */
function pullAllWith(array, values, comparator) {
  return (array && array.length && values && values.length)
    ? basePullAll(array, values, undefined, comparator)
    : array;
}

module.exports = pullAllWith;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(7),
    baseAt = __webpack_require__(223),
    basePullAt = __webpack_require__(93),
    compareAscending = __webpack_require__(226),
    flatRest = __webpack_require__(227),
    isIndex = __webpack_require__(12);

/**
 * Removes elements from `array` corresponding to `indexes` and returns an
 * array of removed elements.
 *
 * **Note:** Unlike `_.at`, this method mutates `array`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {...(number|number[])} [indexes] The indexes of elements to remove.
 * @returns {Array} Returns the new array of removed elements.
 * @example
 *
 * var array = ['a', 'b', 'c', 'd'];
 * var pulled = _.pullAt(array, [1, 3]);
 *
 * console.log(array);
 * // => ['a', 'c']
 *
 * console.log(pulled);
 * // => ['b', 'd']
 */
var pullAt = flatRest(function(array, indexes) {
  var length = array == null ? 0 : array.length,
      result = baseAt(array, indexes);

  basePullAt(array, arrayMap(indexes, function(index) {
    return isIndex(index, length) ? +index : index;
  }).sort(compareAscending));

  return result;
});

module.exports = pullAt;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var get = __webpack_require__(88);

/**
 * The base implementation of `_.at` without support for individual paths.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {string[]} paths The property paths to pick.
 * @returns {Array} Returns the picked elements.
 */
function baseAt(object, paths) {
  var index = -1,
      length = paths.length,
      result = Array(length),
      skip = object == null;

  while (++index < length) {
    result[index] = skip ? undefined : get(object, paths[index]);
  }
  return result;
}

module.exports = baseAt;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(37),
    last = __webpack_require__(8),
    parent = __webpack_require__(225),
    toKey = __webpack_require__(21);

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(53),
    baseSlice = __webpack_require__(5);

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(13);

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(91),
    overRest = __webpack_require__(73),
    setToString = __webpack_require__(75);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(1),
    basePullAt = __webpack_require__(93);

/**
 * Removes all elements from `array` that `predicate` returns truthy for
 * and returns an array of the removed elements. The predicate is invoked
 * with three arguments: (value, index, array).
 *
 * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
 * to pull elements from an array by value.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new array of removed elements.
 * @example
 *
 * var array = [1, 2, 3, 4];
 * var evens = _.remove(array, function(n) {
 *   return n % 2 == 0;
 * });
 *
 * console.log(array);
 * // => [1, 3]
 *
 * console.log(evens);
 * // => [2, 4]
 */
function remove(array, predicate) {
  var result = [];
  if (!(array && array.length)) {
    return result;
  }
  var index = -1,
      indexes = [],
      length = array.length;

  predicate = baseIteratee(predicate, 3);
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result.push(value);
      indexes.push(index);
    }
  }
  basePullAt(array, indexes);
  return result;
}

module.exports = remove;


/***/ }),
/* 229 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeReverse = arrayProto.reverse;

/**
 * Reverses `array` so that the first element becomes the last, the second
 * element becomes the second to last, and so on.
 *
 * **Note:** This method mutates `array` and is based on
 * [`Array#reverse`](https://mdn.io/Array/reverse).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = [1, 2, 3];
 *
 * _.reverse(array);
 * // => [3, 2, 1]
 *
 * console.log(array);
 * // => [3, 2, 1]
 */
function reverse(array) {
  return array == null ? array : nativeReverse.call(array);
}

module.exports = reverse;


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(5),
    isIterateeCall = __webpack_require__(42),
    toInteger = __webpack_require__(2);

/**
 * Creates a slice of `array` from `start` up to, but not including, `end`.
 *
 * **Note:** This method is used instead of
 * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
 * returned.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function slice(array, start, end) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
    start = 0;
    end = length;
  }
  else {
    start = start == null ? 0 : toInteger(start);
    end = end === undefined ? length : toInteger(end);
  }
  return baseSlice(array, start, end);
}

module.exports = slice;


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var baseSortedIndex = __webpack_require__(39);

/**
 * Uses a binary search to determine the lowest index at which `value`
 * should be inserted into `array` in order to maintain its sort order.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 * @example
 *
 * _.sortedIndex([30, 50], 40);
 * // => 1
 */
function sortedIndex(array, value) {
  return baseSortedIndex(array, value);
}

module.exports = sortedIndex;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(1),
    baseSortedIndexBy = __webpack_require__(58);

/**
 * This method is like `_.sortedIndex` except that it accepts `iteratee`
 * which is invoked for `value` and each element of `array` to compute their
 * sort ranking. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 * @example
 *
 * var objects = [{ 'x': 4 }, { 'x': 5 }];
 *
 * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
 * // => 0
 */
function sortedIndexBy(array, value, iteratee) {
  return baseSortedIndexBy(array, value, baseIteratee(iteratee, 2));
}

module.exports = sortedIndexBy;


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var baseSortedIndex = __webpack_require__(39),
    eq = __webpack_require__(11);

/**
 * This method is like `_.indexOf` except that it performs a binary
 * search on a sorted `array`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
 * // => 1
 */
function sortedIndexOf(array, value) {
  var length = array == null ? 0 : array.length;
  if (length) {
    var index = baseSortedIndex(array, value);
    if (index < length && eq(array[index], value)) {
      return index;
    }
  }
  return -1;
}

module.exports = sortedIndexOf;


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var baseSortedIndex = __webpack_require__(39);

/**
 * This method is like `_.sortedIndex` except that it returns the highest
 * index at which `value` should be inserted into `array` in order to
 * maintain its sort order.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 * @example
 *
 * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
 * // => 4
 */
function sortedLastIndex(array, value) {
  return baseSortedIndex(array, value, true);
}

module.exports = sortedLastIndex;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(1),
    baseSortedIndexBy = __webpack_require__(58);

/**
 * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
 * which is invoked for `value` and each element of `array` to compute their
 * sort ranking. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 * @example
 *
 * var objects = [{ 'x': 4 }, { 'x': 5 }];
 *
 * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
 * // => 1
 *
 * // The `_.property` iteratee shorthand.
 * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
 * // => 1
 */
function sortedLastIndexBy(array, value, iteratee) {
  return baseSortedIndexBy(array, value, baseIteratee(iteratee, 2), true);
}

module.exports = sortedLastIndexBy;


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var baseSortedIndex = __webpack_require__(39),
    eq = __webpack_require__(11);

/**
 * This method is like `_.lastIndexOf` except that it performs a binary
 * search on a sorted `array`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
 * // => 3
 */
function sortedLastIndexOf(array, value) {
  var length = array == null ? 0 : array.length;
  if (length) {
    var index = baseSortedIndex(array, value, true) - 1;
    if (eq(array[index], value)) {
      return index;
    }
  }
  return -1;
}

module.exports = sortedLastIndexOf;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var baseSortedUniq = __webpack_require__(94);

/**
 * This method is like `_.uniq` except that it's designed and optimized
 * for sorted arrays.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.sortedUniq([1, 1, 2]);
 * // => [1, 2]
 */
function sortedUniq(array) {
  return (array && array.length)
    ? baseSortedUniq(array)
    : [];
}

module.exports = sortedUniq;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(1),
    baseSortedUniq = __webpack_require__(94);

/**
 * This method is like `_.uniqBy` except that it's designed and optimized
 * for sorted arrays.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
 * // => [1.1, 2.3]
 */
function sortedUniqBy(array, iteratee) {
  return (array && array.length)
    ? baseSortedUniq(array, baseIteratee(iteratee, 2))
    : [];
}

module.exports = sortedUniqBy;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(5);

/**
 * Gets all but the first element of `array`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.tail([1, 2, 3]);
 * // => [2, 3]
 */
function tail(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseSlice(array, 1, length) : [];
}

module.exports = tail;


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(5),
    toInteger = __webpack_require__(2);

/**
 * Creates a slice of `array` with `n` elements taken from the beginning.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.take([1, 2, 3]);
 * // => [1]
 *
 * _.take([1, 2, 3], 2);
 * // => [1, 2]
 *
 * _.take([1, 2, 3], 5);
 * // => [1, 2, 3]
 *
 * _.take([1, 2, 3], 0);
 * // => []
 */
function take(array, n, guard) {
  if (!(array && array.length)) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : toInteger(n);
  return baseSlice(array, 0, n < 0 ? 0 : n);
}

module.exports = take;


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(5),
    toInteger = __webpack_require__(2);

/**
 * Creates a slice of `array` with `n` elements taken from the end.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.takeRight([1, 2, 3]);
 * // => [3]
 *
 * _.takeRight([1, 2, 3], 2);
 * // => [2, 3]
 *
 * _.takeRight([1, 2, 3], 5);
 * // => [1, 2, 3]
 *
 * _.takeRight([1, 2, 3], 0);
 * // => []
 */
function takeRight(array, n, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : toInteger(n);
  n = length - n;
  return baseSlice(array, n < 0 ? 0 : n, length);
}

module.exports = takeRight;


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(1),
    baseWhile = __webpack_require__(38);

/**
 * Creates a slice of `array` with elements taken from the end. Elements are
 * taken until `predicate` returns falsey. The predicate is invoked with
 * three arguments: (value, index, array).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ];
 *
 * _.takeRightWhile(users, function(o) { return !o.active; });
 * // => objects for ['fred', 'pebbles']
 *
 * // The `_.matches` iteratee shorthand.
 * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
 * // => objects for ['pebbles']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.takeRightWhile(users, ['active', false]);
 * // => objects for ['fred', 'pebbles']
 *
 * // The `_.property` iteratee shorthand.
 * _.takeRightWhile(users, 'active');
 * // => []
 */
function takeRightWhile(array, predicate) {
  return (array && array.length)
    ? baseWhile(array, baseIteratee(predicate, 3), false, true)
    : [];
}

module.exports = takeRightWhile;


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(1),
    baseWhile = __webpack_require__(38);

/**
 * Creates a slice of `array` with elements taken from the beginning. Elements
 * are taken until `predicate` returns falsey. The predicate is invoked with
 * three arguments: (value, index, array).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.takeWhile(users, function(o) { return !o.active; });
 * // => objects for ['barney', 'fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.takeWhile(users, { 'user': 'barney', 'active': false });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.takeWhile(users, ['active', false]);
 * // => objects for ['barney', 'fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.takeWhile(users, 'active');
 * // => []
 */
function takeWhile(array, predicate) {
  return (array && array.length)
    ? baseWhile(array, baseIteratee(predicate, 3))
    : [];
}

module.exports = takeWhile;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(4),
    baseRest = __webpack_require__(0),
    baseUniq = __webpack_require__(15),
    isArrayLikeObject = __webpack_require__(3);

/**
 * Creates an array of unique values, in order, from all given arrays using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([2], [1, 2]);
 * // => [2, 1]
 */
var union = baseRest(function(arrays) {
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
});

module.exports = union;


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(85),
    noop = __webpack_require__(246),
    setToArray = __webpack_require__(52);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),
/* 246 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(4),
    baseIteratee = __webpack_require__(1),
    baseRest = __webpack_require__(0),
    baseUniq = __webpack_require__(15),
    isArrayLikeObject = __webpack_require__(3),
    last = __webpack_require__(8);

/**
 * This method is like `_.union` except that it accepts `iteratee` which is
 * invoked for each element of each `arrays` to generate the criterion by
 * which uniqueness is computed. Result values are chosen from the first
 * array in which the value occurs. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.unionBy([2.1], [1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
var unionBy = baseRest(function(arrays) {
  var iteratee = last(arrays);
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined;
  }
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), baseIteratee(iteratee, 2));
});

module.exports = unionBy;


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(4),
    baseRest = __webpack_require__(0),
    baseUniq = __webpack_require__(15),
    isArrayLikeObject = __webpack_require__(3),
    last = __webpack_require__(8);

/**
 * This method is like `_.union` except that it accepts `comparator` which
 * is invoked to compare elements of `arrays`. Result values are chosen from
 * the first array in which the value occurs. The comparator is invoked
 * with two arguments: (arrVal, othVal).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 *
 * _.unionWith(objects, others, _.isEqual);
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
 */
var unionWith = baseRest(function(arrays) {
  var comparator = last(arrays);
  comparator = typeof comparator == 'function' ? comparator : undefined;
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
});

module.exports = unionWith;


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var baseUniq = __webpack_require__(15);

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(1),
    baseUniq = __webpack_require__(15);

/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniqBy(array, iteratee) {
  return (array && array.length) ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
}

module.exports = uniqBy;


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

var baseUniq = __webpack_require__(15);

/**
 * This method is like `_.uniq` except that it accepts `comparator` which
 * is invoked to compare elements of `array`. The order of result values is
 * determined by the order they occur in the array.The comparator is invoked
 * with two arguments: (arrVal, othVal).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
 *
 * _.uniqWith(objects, _.isEqual);
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 */
function uniqWith(array, comparator) {
  comparator = typeof comparator == 'function' ? comparator : undefined;
  return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
}

module.exports = uniqWith;


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(24),
    baseRest = __webpack_require__(0),
    isArrayLikeObject = __webpack_require__(3);

/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.pull`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.xor
 * @example
 *
 * _.without([2, 1, 2, 3], 1, 2);
 * // => [3]
 */
var without = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, values)
    : [];
});

module.exports = without;


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(25),
    baseRest = __webpack_require__(0),
    baseXor = __webpack_require__(60),
    isArrayLikeObject = __webpack_require__(3);

/**
 * Creates an array of unique values that is the
 * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
 * of the given arrays. The order of result values is determined by the order
 * they occur in the arrays.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.without
 * @example
 *
 * _.xor([2, 1], [2, 3]);
 * // => [1, 3]
 */
var xor = baseRest(function(arrays) {
  return baseXor(arrayFilter(arrays, isArrayLikeObject));
});

module.exports = xor;


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(25),
    baseIteratee = __webpack_require__(1),
    baseRest = __webpack_require__(0),
    baseXor = __webpack_require__(60),
    isArrayLikeObject = __webpack_require__(3),
    last = __webpack_require__(8);

/**
 * This method is like `_.xor` except that it accepts `iteratee` which is
 * invoked for each element of each `arrays` to generate the criterion by
 * which by which they're compared. The order of result values is determined
 * by the order they occur in the arrays. The iteratee is invoked with one
 * argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
 * // => [1.2, 3.4]
 *
 * // The `_.property` iteratee shorthand.
 * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 2 }]
 */
var xorBy = baseRest(function(arrays) {
  var iteratee = last(arrays);
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined;
  }
  return baseXor(arrayFilter(arrays, isArrayLikeObject), baseIteratee(iteratee, 2));
});

module.exports = xorBy;


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(25),
    baseRest = __webpack_require__(0),
    baseXor = __webpack_require__(60),
    isArrayLikeObject = __webpack_require__(3),
    last = __webpack_require__(8);

/**
 * This method is like `_.xor` except that it accepts `comparator` which is
 * invoked to compare elements of `arrays`. The order of result values is
 * determined by the order they occur in the arrays. The comparator is invoked
 * with two arguments: (arrVal, othVal).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 *
 * _.xorWith(objects, others, _.isEqual);
 * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
 */
var xorWith = baseRest(function(arrays) {
  var comparator = last(arrays);
  comparator = typeof comparator == 'function' ? comparator : undefined;
  return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
});

module.exports = xorWith;


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(0),
    unzip = __webpack_require__(59);

/**
 * Creates an array of grouped elements, the first of which contains the
 * first elements of the given arrays, the second of which contains the
 * second elements of the given arrays, and so on.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to process.
 * @returns {Array} Returns the new array of grouped elements.
 * @example
 *
 * _.zip(['a', 'b'], [1, 2], [true, false]);
 * // => [['a', 1, true], ['b', 2, false]]
 */
var zip = baseRest(unzip);

module.exports = zip;


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(96),
    baseZipObject = __webpack_require__(97);

/**
 * This method is like `_.fromPairs` except that it accepts two arrays,
 * one of property identifiers and one of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 0.4.0
 * @category Array
 * @param {Array} [props=[]] The property identifiers.
 * @param {Array} [values=[]] The property values.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.zipObject(['a', 'b'], [1, 2]);
 * // => { 'a': 1, 'b': 2 }
 */
function zipObject(props, values) {
  return baseZipObject(props || [], values || [], assignValue);
}

module.exports = zipObject;


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(76);

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
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

var baseSet = __webpack_require__(260),
    baseZipObject = __webpack_require__(97);

/**
 * This method is like `_.zipObject` except that it supports property paths.
 *
 * @static
 * @memberOf _
 * @since 4.1.0
 * @category Array
 * @param {Array} [props=[]] The property identifiers.
 * @param {Array} [values=[]] The property values.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
 * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
 */
function zipObjectDeep(props, values) {
  return baseZipObject(props || [], values || [], baseSet);
}

module.exports = zipObjectDeep;


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(96),
    castPath = __webpack_require__(37),
    isIndex = __webpack_require__(12),
    isObject = __webpack_require__(19),
    toKey = __webpack_require__(21);

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(0),
    unzipWith = __webpack_require__(95);

/**
 * This method is like `_.zip` except that it accepts `iteratee` to specify
 * how grouped values should be combined. The iteratee is invoked with the
 * elements of each group: (...group).
 *
 * @static
 * @memberOf _
 * @since 3.8.0
 * @category Array
 * @param {...Array} [arrays] The arrays to process.
 * @param {Function} [iteratee=_.identity] The function to combine
 *  grouped values.
 * @returns {Array} Returns the new array of grouped elements.
 * @example
 *
 * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
 *   return a + b + c;
 * });
 * // => [111, 222]
 */
var zipWith = baseRest(function(arrays) {
  var length = arrays.length,
      iteratee = length > 1 ? arrays[length - 1] : undefined;

  iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
  return unzipWith(arrays, iteratee);
});

module.exports = zipWith;


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PositioningDecorator_1 = __webpack_require__(62);
var BottomLockPositioningDecorator = (function (_super) {
    __extends(BottomLockPositioningDecorator, _super);
    function BottomLockPositioningDecorator(view, bottomPadding) {
        var _this = _super.call(this, view) || this;
        _this.padding = 0;
        _this.offsetY = 0;
        _this.padding = bottomPadding;
        return _this;
    }
    BottomLockPositioningDecorator.prototype.hover = function () {
        //do nothing
    };
    BottomLockPositioningDecorator.prototype.preRender = function () {
        //do nothing
    };
    BottomLockPositioningDecorator.prototype.render = function (context, width, height) {
        this.offsetY = height - this.height - this.padding;
        this.view.y = this.offsetY;
        this.view.render(context, width, height);
    };
    BottomLockPositioningDecorator.prototype.update = function () {
        throw new Error("Method not implemented.");
    };
    BottomLockPositioningDecorator.prototype.getGlobalY = function () {
        return this.offsetY + this.parent.y;
    };
    BottomLockPositioningDecorator.prototype.accept = function (visitor) {
        this.view.accept(visitor);
    };
    return BottomLockPositioningDecorator;
}(PositioningDecorator_1.PositioningDecorator));
exports.BottomLockPositioningDecorator = BottomLockPositioningDecorator;


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StagedReference = (function () {
    function StagedReference(object, stage) {
        this.object = object;
        this.stage = stage;
    }
    return StagedReference;
}());
exports.StagedReference = StagedReference;


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ClickableViewObject_1 = __webpack_require__(16);
var ScoreKeeper_1 = __webpack_require__(40);
var ScoreViewObject = (function (_super) {
    __extends(ScoreViewObject, _super);
    function ScoreViewObject(x, y, width, height, angle, drawingStratgegy, clickStrategy, callback) {
        var _this = _super.call(this, x, y, width, height, angle, drawingStratgegy, clickStrategy, callback) || this;
        _this.score = 0;
        ScoreKeeper_1.ScoreKeeper.getInstance().register(_this);
        _this.update();
        return _this;
    }
    ScoreViewObject.prototype.preRender = function () {
        this.context.beginPath();
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.font = " bold 24px Arial";
        this.context.fillStyle = "#ffffff";
        this.context.fillText("Score: " + this.score, (this.width - this.context.measureText("Score: " + this.score).width) / 2, (this.height + 12) / 2);
    };
    ScoreViewObject.prototype.update = function () {
        this.score = ScoreKeeper_1.ScoreKeeper.getInstance().score;
        this.preRender();
    };
    ScoreViewObject.prototype.hover = function () {
        throw new Error('Not implemented yet.');
    };
    return ScoreViewObject;
}(ClickableViewObject_1.ClickableViewObject));
exports.ScoreViewObject = ScoreViewObject;


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DoubleBufferedViewObject_1 = __webpack_require__(26);
var DebugViewObject = (function (_super) {
    __extends(DebugViewObject, _super);
    function DebugViewObject(x, y, width, height, angle, subject, strategy) {
        var _this = _super.call(this, x, y, width, height, angle, strategy) || this;
        _this.subject = subject;
        _this.color = "pink";
        return _this;
    }
    Object.defineProperty(DebugViewObject.prototype, "subject", {
        get: function () {
            return this._subject;
        },
        set: function (subject) {
            this._subject = subject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugViewObject.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
            this.preRender();
        },
        enumerable: true,
        configurable: true
    });
    DebugViewObject.prototype.preRender = function () {
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.rect(0, 0, this.width, this.height);
        this.context.fill();
    };
    DebugViewObject.prototype.update = function () {
        this.height = this.subject.height;
        this.width = this.subject.width;
    };
    DebugViewObject.prototype.accept = function (visitor) {
        throw new Error("Method not implemented.");
    };
    return DebugViewObject;
}(DoubleBufferedViewObject_1.DoubleBufferedViewObject));
exports.DebugViewObject = DebugViewObject;


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DrawRouteClickStrategy_1 = __webpack_require__(267);
var RouteDrawingStageVisitor = (function () {
    function RouteDrawingStageVisitor(clickManager, gameArea) {
        this.clickManager = clickManager;
        this.gameArea = gameArea;
    }
    RouteDrawingStageVisitor.prototype.visitPlayerObject = function (subject) {
        console.log("visitingPlayerObject");
        subject.clickStrategy = new DrawRouteClickStrategy_1.DrawRouteClickStrategy(this.clickManager, this.gameArea);
        this.clickManager.addClickable(subject);
    };
    RouteDrawingStageVisitor.prototype.visitFieldObject = function (subject) {
        throw new Error("Method not implemented.");
    };
    return RouteDrawingStageVisitor;
}());
exports.RouteDrawingStageVisitor = RouteDrawingStageVisitor;


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var StickerTextViewObject_1 = __webpack_require__(100);
var HorizontalCenterPositioningDecorator_1 = __webpack_require__(63);
var RenderEngine_1 = __webpack_require__(10);
var RouteViewObject_1 = __webpack_require__(268);
var Coordinate_1 = __webpack_require__(65);
var ClickStrategy_1 = __webpack_require__(269);
var Route_1 = __webpack_require__(102);
var TopLeftDrawingStrategy_1 = __webpack_require__(64);
var DrawRouteClickStrategy = (function (_super) {
    __extends(DrawRouteClickStrategy, _super);
    function DrawRouteClickStrategy(clickableManager, gameArea) {
        var _this = _super.call(this) || this;
        _this.clickableManager = clickableManager;
        _this.gameArea = gameArea;
        console.log("created clickable ");
        return _this;
    }
    DrawRouteClickStrategy.prototype.execute = function (object) {
        console.log("draw route strategy called");
        //needs to go into a route drawing mode
        var route = [];
        this.player = object.subject;
        console.log("bloopely");
        route.push(new Coordinate_1.Coordinate(this.player.x, this.player.y));
        var routeView = new RouteViewObject_1.RouteViewObject(0, 0, this.gameArea.width, this.gameArea.height, 0, new TopLeftDrawingStrategy_1.TopLeftDrawingStrategy());
        RenderEngine_1.RenderEngine.getInstance().addReferenceToStage(routeView, 'routeStage');
        //this.clickableManager.clickInterceptor = new RouteClickHandler(this.player, route, routeView, this.gameArea, this.clickableManager, this);
        this.gameArea.addView(routeView);
        var text = new StickerTextViewObject_1.StickerTextViewObject(10, 20, 280, 50, 0, new TopLeftDrawingStrategy_1.TopLeftDrawingStrategy(), null, null, "Click Endzone");
        text.backgroundColor = '#2ecc71';
        var text2 = new StickerTextViewObject_1.StickerTextViewObject(10, 60, 280, 50, 0, new TopLeftDrawingStrategy_1.TopLeftDrawingStrategy(), null, null, "To Save Route");
        text2.backgroundColor = '#2ecc71';
        this.text = new HorizontalCenterPositioningDecorator_1.HorizontalCenterPositioningDecorator(text);
        this.gameArea.addView(this.text);
        this.text2 = new HorizontalCenterPositioningDecorator_1.HorizontalCenterPositioningDecorator(text2);
        this.gameArea.addView(this.text2);
        //grey out everything else and message that says click the player again to finalize the route
        //also create the route route view object
        //let controller = player.controller as RouteController;
        //controller.route = new Route(route);//TODO: fix 
    };
    DrawRouteClickStrategy.prototype.finish = function (route) {
        route.splice(0, 1);
        this.player.controller.route = new Route_1.Route(route);
        console.log(this.player.controller.route);
        this.gameArea.remove(this.text);
        this.gameArea.remove(this.text2);
    };
    return DrawRouteClickStrategy;
}(ClickStrategy_1.ClickStrategy));
exports.DrawRouteClickStrategy = DrawRouteClickStrategy;


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DoubleBufferedViewObject_1 = __webpack_require__(26);
var RouteViewObject = (function (_super) {
    __extends(RouteViewObject, _super);
    function RouteViewObject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.route = [];
        return _this;
    }
    RouteViewObject.prototype.preRender = function () {
        if (this.route && this.route.length > 1) {
            this.context.beginPath();
            this.context.moveTo(this.route[0].x, this.route[0].y);
            this.context.strokeStyle = "#ffff00";
            this.context.lineWidth = 8;
            for (var i = 1; i < this.route.length; ++i) {
                this.context.lineTo(this.route[i].x, this.route[i].y);
                this.context.stroke();
            }
        }
    };
    RouteViewObject.prototype.update = function () {
        this.preRender();
    };
    RouteViewObject.prototype.accept = function (visitor) {
        //do nothing
    };
    RouteViewObject.prototype.updateRoute = function (route) {
        this.route = route;
        this.update();
    };
    return RouteViewObject;
}(DoubleBufferedViewObject_1.DoubleBufferedViewObject));
exports.RouteViewObject = RouteViewObject;


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClickStrategy = (function () {
    function ClickStrategy() {
    }
    return ClickStrategy;
}());
exports.ClickStrategy = ClickStrategy;


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PositioningDecorator_1 = __webpack_require__(62);
var RightLockPositioningDecorator = (function (_super) {
    __extends(RightLockPositioningDecorator, _super);
    function RightLockPositioningDecorator(view, rightPadding) {
        var _this = _super.call(this, view) || this;
        _this.padding = 0;
        _this.offsetX = 0;
        _this.padding = rightPadding;
        return _this;
    }
    RightLockPositioningDecorator.prototype.hover = function () {
        //do nothing
    };
    RightLockPositioningDecorator.prototype.preRender = function () {
        //do nothing
    };
    RightLockPositioningDecorator.prototype.render = function (context, width, height) {
        this.offsetX = width - this.width - this.padding;
        this.view.x = this.offsetX;
        this.view.render(context, width, height);
    };
    RightLockPositioningDecorator.prototype.update = function () {
        throw new Error("Method not implemented.");
    };
    RightLockPositioningDecorator.prototype.getGlobalX = function () {
        return this.offsetX + this.parent.x;
    };
    RightLockPositioningDecorator.prototype.accept = function (visitor) {
        this.view.accept(visitor);
    };
    return RightLockPositioningDecorator;
}(PositioningDecorator_1.PositioningDecorator));
exports.RightLockPositioningDecorator = RightLockPositioningDecorator;


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CollidableGameObject_1 = __webpack_require__(41);
var Wall = (function (_super) {
    __extends(Wall, _super);
    function Wall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wall.prototype.tick = function () {
        //do nothing right now
    };
    Wall.prototype.collide = function (object) {
        // throw new Error('Not implemented yet.');
    };
    return Wall;
}(CollidableGameObject_1.CollidableGameObject));
exports.Wall = Wall;


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RenderEngine_1 = __webpack_require__(10);
var MatchTemplater_1 = __webpack_require__(61);
var FindMatchClickStrategy = (function () {
    function FindMatchClickStrategy() {
    }
    FindMatchClickStrategy.prototype.execute = function (object) {
        MatchTemplater_1.MatchTemplater.getInstance().createGame();
        //RenderEngine.getInstance().unregister(object as IViewObject);
        var refs = RenderEngine_1.RenderEngine.getInstance().getReferencesForStage('menuStage');
        refs.forEach(function (element) {
            RenderEngine_1.RenderEngine.getInstance().unregister(element);
        });
    };
    return FindMatchClickStrategy;
}());
exports.FindMatchClickStrategy = FindMatchClickStrategy;


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RenderEngine_1 = __webpack_require__(10);
var ClickableManager = (function () {
    function ClickableManager(canvas) {
        var _this = this;
        this.clickables = [];
        this.canvas = canvas;
        canvas.addEventListener('click', function (evt) {
            _this.clickEvents(evt);
        }, false);
        canvas.addEventListener('touchstart', function (evt) {
            _this.mouseDownEvents(evt);
        }, false);
        canvas.addEventListener('touchend', function (evt) {
            _this.mouseUpEvents(evt);
        }, false);
        // canvas.addEventListener('mouseover', (evt) => {
        //     this.hoverEvents(evt);
        // },false);
        // canvas.addEventListener('click', (evt) => {
        //     this.clickEvents(evt);
        // },false);
    }
    Object.defineProperty(ClickableManager.prototype, "scale", {
        get: function () {
            return RenderEngine_1.RenderEngine.getInstance().scale;
        },
        enumerable: true,
        configurable: true
    });
    ClickableManager.prototype.add = function (object) {
        try {
            this.clickables.push(object);
        }
        catch (err) {
            console.log("You can only add objects of type Clickable to the ClickableManager");
        }
    };
    ClickableManager.prototype.remove = function (object) {
        var clickable = object;
        this.clickables = this.clickables.filter(function (element) {
            if (element != clickable)
                return element;
        });
    };
    ClickableManager.prototype.mouseUpEvents = function (event) {
        var rect = this.canvas.getBoundingClientRect();
        if (this.clickInterceptor)
            this.clickInterceptor.handleMouseUp(0, 0);
    };
    ClickableManager.prototype.mouseDownEvents = function (event) {
        var rect = this.canvas.getBoundingClientRect();
        if (!event.targetTouches[0].clientX)
            return;
        var x = (event.targetTouches[0].clientX - rect.left) / this.scale;
        var y = (event.targetTouches[0].clientY - rect.top) / this.scale;
        if (this.clickInterceptor)
            this.clickInterceptor.handleMouseDown(x, y);
    };
    ClickableManager.prototype.clickEvents = function (event) {
        console.log(event.offsetX, event.offsetY);
        var x = event.offsetX / this.scale;
        var y = event.offsetY / this.scale;
        if (this.clickInterceptor)
            this.clickInterceptor.handleClick(x, y);
        this.clickables.forEach(function (obj, index) {
            if (x >= obj.getGlobalX() && x <= (obj.getGlobalX() + obj.getWidth()) &&
                y >= obj.getGlobalY() && y <= (obj.getGlobalY() + obj.getHeight())) {
                console.log("click match found ", obj);
                obj.click();
            }
            ;
            ///obj.click()
        });
    };
    // private hoverEvents(event: MouseEvent){
    //     //console.log(event.x, event.y)
    //     console.log(this.clickables);
    //     this.clickables.forEach((obj: Clickable, index) => {
    //         if(event.x >= obj.getGlobalX() && event.x <= (obj.getGlobalX() + obj.getWidth()) &&
    //             event.y >= obj.getGlobalY() && event.y <= (obj.getGlobalY() + obj.getHeight())) {
    //                 console.log("hover match found :)");
    //                 obj.hover();
    //             };
    //         ///obj.click()
    //     });
    // }
    ClickableManager.prototype.addClickable = function (clickable) {
        this.clickables.push(clickable);
    };
    return ClickableManager;
}());
exports.ClickableManager = ClickableManager;


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ClickableViewObject_1 = __webpack_require__(16);
var PauseViewObject = (function (_super) {
    __extends(PauseViewObject, _super);
    function PauseViewObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PauseViewObject.prototype.preRender = function () {
        //draw a beautiful pause button :p
        this.context.beginPath();
        this.context.rect(0, 0, this.width / 3, this.height);
        this.context.fill();
        this.context.rect(this.width / 3 * 2, 0, this.width / 3, this.height);
        this.context.fill();
    };
    PauseViewObject.prototype.update = function () {
        //probably do nothing?
        throw new Error("Method not implemented.");
    };
    PauseViewObject.prototype.hover = function () {
        //do nothing
    };
    return PauseViewObject;
}(ClickableViewObject_1.ClickableViewObject));
exports.PauseViewObject = PauseViewObject;


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameEngine_1 = __webpack_require__(17);
var PauseGameClickStrategy = (function () {
    function PauseGameClickStrategy() {
    }
    PauseGameClickStrategy.prototype.execute = function (object) {
        GameEngine_1.GameEngine.getInstance().stop();
    };
    return PauseGameClickStrategy;
}());
exports.PauseGameClickStrategy = PauseGameClickStrategy;


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ComposableViewDecorator_1 = __webpack_require__(104);
var RenderEngine_1 = __webpack_require__(10);
var HorizontalCenterDecorator = (function (_super) {
    __extends(HorizontalCenterDecorator, _super);
    function HorizontalCenterDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HorizontalCenterDecorator.prototype.render = function (context, width, height) {
        //can set x/y here
        this.view.x = (width / 2 - (this.width * RenderEngine_1.RenderEngine.getInstance().scale) / 2) / RenderEngine_1.RenderEngine.getInstance().scale;
        this.view.render(context, width, height);
    };
    return HorizontalCenterDecorator;
}(ComposableViewDecorator_1.ComposableViewDecorator));
exports.HorizontalCenterDecorator = HorizontalCenterDecorator;


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Hitbox_1 = __webpack_require__(278);
var HitBoxFactory = (function () {
    function HitBoxFactory(collisionManager) {
        this.collisionManager = collisionManager;
    }
    HitBoxFactory.prototype.CreateActiveSquareHitBox = function (width, height, subject) {
        var hitbox = new Hitbox_1.Hitbox(width, height, subject);
        this.collisionManager.addActiveHitbox(hitbox);
        return hitbox;
    };
    HitBoxFactory.prototype.CreatePassiveSquareHitBox = function (width, height, subject) {
        var hitbox = new Hitbox_1.Hitbox(width, height, subject);
        console.log("added passive hitbox");
        this.collisionManager.addPassiveHitbox(hitbox);
        return hitbox;
    };
    HitBoxFactory.prototype.CreateCircleHitBox = function () {
        throw Error("not yet implemented");
    };
    return HitBoxFactory;
}());
exports.HitBoxFactory = HitBoxFactory;


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Hitbox = (function () {
    function Hitbox(width, height, subject) {
        this._width = width;
        this._height = height;
        this._subject = subject;
    }
    Object.defineProperty(Hitbox.prototype, "subject", {
        get: function () {
            return this._subject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hitbox.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hitbox.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hitbox.prototype, "x", {
        get: function () {
            return this.subject.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hitbox.prototype, "y", {
        get: function () {
            return this.subject.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hitbox.prototype, "angle", {
        get: function () {
            return this.subject.angle;
        },
        enumerable: true,
        configurable: true
    });
    Hitbox.prototype.collide = function (hitbox) {
        this.subject.collide(hitbox.subject);
    };
    return Hitbox;
}());
exports.Hitbox = Hitbox;


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DefenderController_1 = __webpack_require__(280);
var BlockerController_1 = __webpack_require__(281);
var GameEngine_1 = __webpack_require__(17);
var InputController_1 = __webpack_require__(283);
var RouteController_1 = __webpack_require__(66);
var ControllerFactory = (function () {
    function ControllerFactory(collisionManager, clickableManager) {
        this.collisionManager = collisionManager;
        this.clickableManager = clickableManager;
    }
    ControllerFactory.prototype.createRouteController = function (subject, route) {
        var controller = new RouteController_1.RouteController(subject, route, this.collisionManager);
        GameEngine_1.GameEngine.getInstance().register(controller);
        return controller;
    };
    ControllerFactory.prototype.createInputController = function (subject) {
        var controller = new InputController_1.InputController(subject, this.collisionManager, this.clickableManager);
        GameEngine_1.GameEngine.getInstance().register(controller);
        return controller;
    };
    ControllerFactory.prototype.createBlockerController = function (subject, route) {
        var controller = new BlockerController_1.BlockerController(subject, route, this.collisionManager);
        GameEngine_1.GameEngine.getInstance().register(controller);
        return controller;
    };
    ControllerFactory.prototype.createDefenderController = function (subject, route) {
        var controller = new DefenderController_1.DefenderController(subject, route, this.collisionManager);
        GameEngine_1.GameEngine.getInstance().register(controller);
        return controller;
    };
    return ControllerFactory;
}());
exports.ControllerFactory = ControllerFactory;


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ScoreKeeper_1 = __webpack_require__(40);
var GameEngine_1 = __webpack_require__(17);
var GameMap_1 = __webpack_require__(18);
var RouteController_1 = __webpack_require__(66);
var DefenderController = (function (_super) {
    __extends(DefenderController, _super);
    function DefenderController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 1.5;
        _this.fps = 5;
        _this.counter = 0;
        _this.juked = 0;
        return _this;
    }
    DefenderController.prototype.decide = function () {
        if (this.colliding == false) {
            if (this.speed < this.originalSpeed - .01) {
                this.speed += .01;
            }
            this.subject.speed = this.speed;
        }
        if (this.counter % this.fps == 0) {
            if (!this.routeComplete()) {
                this.followRoute();
            }
            else {
                if (this.juked <= 0) {
                    //look for runner to tackle
                    var runners = GameMap_1.GameMap.getInstance().getAllOfType('runner');
                    var target = runners[0];
                    var distance = this.calculateDistance(target);
                    //based on distance we want to aim in front of the runner
                    //add some randomness into how good the players are at estimating maybe?
                    var newTargetX = distance / 2.5 * Math.cos(target.object.angle);
                    var newTargetY = distance / 2.5 * Math.sin(target.object.angle);
                    //target located now go towards it
                    this.subject.angle = Math.atan2((target.object.y + newTargetY) - this.subject.y, (target.object.x + newTargetX) - this.subject.x);
                }
            }
        }
        if (this.juked > 0)
            this.juked--;
    };
    DefenderController.prototype.collide = function (object) {
        if (object.type == 'blocker') {
            this.colliding = true;
            this.subject.speed = this.originalSpeed / 2.5;
            this.speed = 1.5;
            this.endRoute();
            //console.log('being slowed by a blocker!');
        }
        if (object.type == 'defender') {
            this.endRoute();
            //console.log('being slowed by a blocker!');
        }
        if (object.type == 'runner') {
            GameEngine_1.GameEngine.getInstance().stop();
            ScoreKeeper_1.ScoreKeeper.getInstance().resetScore();
        }
    };
    return DefenderController;
}(RouteController_1.RouteController));
exports.DefenderController = DefenderController;


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameMap_1 = __webpack_require__(18);
var RouteController_1 = __webpack_require__(66);
var BlockerHivemind_1 = __webpack_require__(282);
var BlockerController = (function (_super) {
    __extends(BlockerController, _super);
    function BlockerController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlockerController.prototype.decide = function () {
        var _this = this;
        if (this.colliding == false) {
            this.subject.speed = this.originalSpeed;
            BlockerHivemind_1.BlockerHivemind.getInstance().removeBlock(this.subject);
        }
        if (!this.routeComplete()) {
            this.followRoute();
        }
        else {
            //look for defenders to tackle
            var defenders = GameMap_1.GameMap.getInstance().getAllOfType('defender');
            //remove all already blocked ones here
            var blockedDefenders_1 = BlockerHivemind_1.BlockerHivemind.getInstance().getBlockeesImNotBlocking(this.subject);
            //console.log("blocked", blockedDefenders);
            var unblockedDefenders = defenders.filter(function (x) { return blockedDefenders_1.indexOf(x.object) == -1; });
            //console.log(defenders);
            //console.log("unblocked", unblockedDefenders);
            var min_1 = Number.MAX_VALUE;
            var target_1;
            unblockedDefenders.forEach(function (element) {
                var tmp = _this.calculateDistance(element);
                if (tmp < min_1) {
                    min_1 = tmp;
                    target_1 = element;
                }
            });
            var distance = this.calculateDistance(target_1);
            //based on distance we want to aim in front of the runner
            //add some randomness into how good the players are at estimating maybe?
            var newTargetX = distance / 2 * Math.cos(target_1.object.angle);
            var newTargetY = distance / 2 * Math.sin(target_1.object.angle);
            //target located now go towards it
            this.subject.angle = Math.atan2((target_1.object.y + newTargetY) - this.subject.y, (target_1.object.x + newTargetX) - this.subject.x);
        }
    };
    BlockerController.prototype.collide = function (object) {
        if (object.type == 'defender') {
            this.colliding = true;
            this.subject.speed = this.originalSpeed / 2;
            BlockerHivemind_1.BlockerHivemind.getInstance().nowBlocking(this.subject, object);
            this.endRoute();
            //console.log('harassing a defender!');
        }
        if (object.type == 'blocker') {
            this.endRoute();
            //console.log('harassing a defender!');
        }
    };
    return BlockerController;
}(RouteController_1.RouteController));
exports.BlockerController = BlockerController;


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BlockerHivemind = (function () {
    function BlockerHivemind() {
        this.blocks = [];
        if (BlockerHivemind._instance) {
            throw new Error("Error: Instantiation failed: Use BlockerHivemind.getInstance() instead of new.");
        }
        BlockerHivemind._instance = this;
    }
    BlockerHivemind.getInstance = function () {
        return BlockerHivemind._instance;
    };
    BlockerHivemind.prototype.nowBlocking = function (blocker, defender) {
        var alreadyInaBlock = false;
        this.blocks.forEach(function (block) {
            if (block[0] == blocker) {
                alreadyInaBlock = true;
            }
            if (block[1] == defender) {
                alreadyInaBlock = true;
            }
        });
        if (!alreadyInaBlock) {
            //console.log("BLOCK ADDED!!!");
            this.blocks.push([blocker, defender]);
            //console.log("blocks now",this.blocks);
        }
        //console.log("no add");
    };
    BlockerHivemind.prototype.removeBlock = function (blocker) {
        this.blocks = this.blocks.filter(function (block) {
            if (block[0] != blocker)
                return block;
        });
    };
    BlockerHivemind.prototype.getBlockeesImNotBlocking = function (blocker) {
        //console.log("before", this.blocks);
        var blocks = this.blocks.filter(function (block) {
            if (block[0] != blocker)
                return block;
        });
        //console.log("blocks", blocks);
        if (blocks.length > 0) {
            return blocks.map(function (block) {
                return block[1];
            });
        }
        else
            return [];
    };
    BlockerHivemind._instance = new BlockerHivemind();
    return BlockerHivemind;
}());
exports.BlockerHivemind = BlockerHivemind;


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameMap_1 = __webpack_require__(18);
var Controller_1 = __webpack_require__(106);
var TouchPlayHandler_1 = __webpack_require__(284);
var InputController = (function (_super) {
    __extends(InputController, _super);
    function InputController(subject, collisionManager, clickableManager) {
        var _this = _super.call(this, subject) || this;
        _this.angle = 0;
        _this.right = false;
        _this.left = false;
        _this.speed = 1.5;
        _this.turning = false;
        _this.releasedLeft = 0;
        _this.releasedRight = 0;
        _this.jumpLeft = 0;
        _this.jumpRight = 0;
        _this.jumped = 0;
        _this.collisionManager = collisionManager;
        _this.angle = _this.subject.angle * Math.PI / 180 || 0;
        _this.subject.angle = _this.angle;
        window.addEventListener('keydown', function (event) { _this.onKeyDown(event.keyCode); }, false);
        window.addEventListener('keyup', function (event) { _this.onKeyUp(event.keyCode); }, false);
        _this.touchHandler = new TouchPlayHandler_1.TouchPlayHandler(_this);
        clickableManager.clickInterceptor = _this.touchHandler;
        return _this;
    }
    InputController.prototype.onKeyDown = function (keyCode) {
        if (keyCode == 37) {
            this.left = true;
        }
        if (keyCode == 39) {
            this.right = true;
        }
    };
    InputController.prototype.onKeyUp = function (keyCode) {
        if (keyCode == 37) {
            this.left = false;
            this.releasedLeft = 3;
        }
        if (keyCode == 39) {
            this.right = false;
            this.releasedRight = 3;
        }
    };
    InputController.prototype.decide = function () {
        this.turning = false;
        if (this.right) {
            if (this.releasedRight > 0 && this.jumped <= 0) {
                this.jumpRight = 6;
                this.jumped = 60;
                this.releasedRight = 0;
                this.juked();
                return;
            }
            this.angle += (5 - this.subject.speed) * 2 * Math.PI / 180;
            this.turning = true;
        }
        if (this.left) {
            if (this.releasedLeft > 0 && this.jumped <= 0) {
                this.jumpLeft = 6;
                this.jumped = 60;
                this.releasedLeft = 0;
                this.juked();
                return;
            }
            this.angle -= (5 - this.subject.speed) * 2 * Math.PI / 180;
            this.turning = true;
        }
        this.subject.angle = this.angle;
        if (this.releasedLeft > 0)
            this.releasedLeft--;
        if (this.releasedRight > 0)
            this.releasedRight--;
        if (this.jumped > 0)
            this.jumped--;
    };
    InputController.prototype.act = function () {
        //console.log(this.jump);
        if (this.jumpLeft > 0 || this.jumpRight > 0) {
            if (this.jumpLeft > 0) {
                var angle = this.subject.angle - (60 * Math.PI / 180);
                if (!this.collisionManager.collisionCheckAtPosition(this.subject, this.subject.x + this.subject.speed * Math.cos(this.subject.angle), this.subject.y)
                    && !this.collisionManager.wallCollisionCheckAtPosition(this.subject, this.subject.x + this.subject.speed * Math.cos(this.subject.angle), this.subject.y)) {
                    this.subject.x += 3 * Math.cos(angle);
                }
                if (!this.collisionManager.collisionCheckAtPosition(this.subject, this.subject.x, this.subject.y + this.subject.speed * Math.sin(this.subject.angle))
                    && !this.collisionManager.wallCollisionCheckAtPosition(this.subject, this.subject.x, this.subject.y + this.subject.speed * Math.sin(this.subject.angle))) {
                    this.subject.y += 3 * Math.sin(angle);
                }
                this.jumpLeft--;
            }
            if (this.jumpRight > 0) {
                var angle = this.subject.angle + (60 * Math.PI / 180);
                if (!this.collisionManager.collisionCheckAtPosition(this.subject, this.subject.x + this.subject.speed * Math.cos(this.subject.angle), this.subject.y)
                    && !this.collisionManager.wallCollisionCheckAtPosition(this.subject, this.subject.x + this.subject.speed * Math.cos(this.subject.angle), this.subject.y)) {
                    this.subject.x += 3 * Math.cos(angle);
                }
                if (!this.collisionManager.collisionCheckAtPosition(this.subject, this.subject.x, this.subject.y + this.subject.speed * Math.sin(this.subject.angle))
                    && !this.collisionManager.wallCollisionCheckAtPosition(this.subject, this.subject.x, this.subject.y + this.subject.speed * Math.sin(this.subject.angle))) {
                    this.subject.y += 3 * Math.sin(angle);
                }
                this.jumpRight--;
            }
        }
        else {
            if (this.turning) {
                if (this.speed > 1.3)
                    this.speed -= .015;
            }
            else {
                if (this.speed < this.subject.speed - ((this.speed * 2) / 75))
                    this.speed += ((this.speed * 2) / 75);
            }
            //console.log(this.speed);
            //console.log(this.subject.x + (this.subject.speed * Math.cos(this.angle)));
            // this.subject.x += this.subject.speed * Math.cos(this.angle);
            // this.subject.y += this.subject.speed * Math.sin(this.angle);
            if (!this.collisionManager.collisionCheckAtPosition(this.subject, this.subject.x + this.subject.speed * Math.cos(this.subject.angle), this.subject.y)
                && !this.collisionManager.wallCollisionCheckAtPosition(this.subject, this.subject.x + this.subject.speed * Math.cos(this.subject.angle), this.subject.y)) {
                this.subject.x += this.speed * Math.cos(this.subject.angle);
            }
            if (!this.collisionManager.collisionCheckAtPosition(this.subject, this.subject.x, this.subject.y + this.subject.speed * Math.sin(this.subject.angle))
                && !this.collisionManager.wallCollisionCheckAtPosition(this.subject, this.subject.x, this.subject.y + this.subject.speed * Math.sin(this.subject.angle))) {
                this.subject.y += this.speed * Math.sin(this.subject.angle);
            }
        }
    };
    InputController.prototype.collide = function (object) {
    };
    InputController.prototype.juked = function () {
        var defenders = GameMap_1.GameMap.getInstance().getAllOfType('defender');
        defenders.forEach(function (defender) {
            defender.object.controller.juked = 15;
        });
    };
    return InputController;
}(Controller_1.Controller));
exports.InputController = InputController;


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TouchPlayHandler = (function () {
    function TouchPlayHandler(inputController) {
        this.inputController = inputController;
    }
    TouchPlayHandler.prototype.handleClick = function (x, y) {
        console.log(event);
        //do nothing
    };
    TouchPlayHandler.prototype.handleMouseDown = function (x, y) {
        console.log(event);
        if (x > 160) {
            this.inputController.onKeyDown(39);
        }
        if (x < 160) {
            this.inputController.onKeyDown(37);
        }
    };
    TouchPlayHandler.prototype.handleMouseUp = function (x, y) {
        this.inputController.onKeyUp(39);
        this.inputController.onKeyUp(37);
    };
    return TouchPlayHandler;
}());
exports.TouchPlayHandler = TouchPlayHandler;


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CollisionManager = (function () {
    function CollisionManager() {
        this.activeCollidables = [];
        this.passiveCollidables = [];
    }
    //there has been some pivot on how this works, and could all be eventually superceded by IAT
    //however for now active hitboxes will be circular and passive collision will be a square collision
    //I think this provides the most adaptability while not overcomplicating code
    //square hitboxs (not rotation support), eventual plan is to implement intersecting axis
    // tick(): void {
    //     for(let i = 0; i < this.activeCollidables.length; ++i){
    //         let object1: Hitbox = this.activeCollidables[i];
    //         //active v passive collisions
    //         for(let j = 0; j < this.passiveCollidables.length; ++j){
    //             let object2: Hitbox = this.passiveCollidables[j];
    //             if (object1.x <= object2.x + object2.width  && object1.x + object1.width  >= object2.x &&
    //                 object1.y <= object2.y + object2.height && object1.y + object1.height >= object2.y){
    //                 // collision
    //                 console.log('collision with passive');
    //                 object1.collide(object2);
    //                 object2.collide(object1);
    //             }
    //         }
    //         //active v active collisions
    //         for(let j = i + 1; j < this.activeCollidables.length; ++j){
    //             let object2: Hitbox = this.activeCollidables[j];
    //             if (object1.x <= object2.x + object2.width  && object1.x + object1.width  >= object2.x &&
    //                 object1.y <= object2.y + object2.height && object1.y + object1.height >= object2.y){
    //                 // collision
    //                 console.log('collision with active');
    //                 object1.collide(object2);
    //                 object2.collide(object1);
    //             }
    //         }
    //     }
    // }
    CollisionManager.prototype.tick = function () {
        for (var i = 0; i < this.activeCollidables.length; ++i) {
            var object1 = this.activeCollidables[i];
            //active v passive collisions
            for (var j = 0; j < this.passiveCollidables.length; ++j) {
                var object2 = this.passiveCollidables[j];
                if (object1.x - object1.width / 2 <= object2.x + object2.width && object1.x + object1.width / 2 >= object2.x &&
                    object1.y - object1.height / 2 <= object2.y + object2.height && object1.y + object1.height / 2 >= object2.y) {
                    // collision
                    console.log('collision with passive');
                    object1.collide(object2);
                    object2.collide(object1);
                }
            }
            //NOTE: Below is the circular collision code
            // for(let j = 0; j < this.passiveCollidables.length; ++j){
            //     let object2: Hitbox = this.passiveCollidables[j];
            //     var dx = object1.x - object2.x;
            //     var dy = object1.y - object2.y;
            //     var distance = Math.sqrt(dx * dx + dy * dy);
            //     if (distance < object1.width/2 + object2.width/2 + 1) {
            //         // collision detected!
            //         // collision
            //         //console.log('collision with passive');
            //         object1.collide(object2);
            //         object2.collide(object1);
            //     }
            // }
            //active v active collisions
            for (var j = i + 1; j < this.activeCollidables.length; ++j) {
                var object2 = this.activeCollidables[j];
                var dx = object1.x - object2.x;
                var dy = object1.y - object2.y;
                var distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < object1.width / 2 + object2.width / 2 + 1) {
                    // collision detected!
                    // collision
                    //console.log('collision with active');
                    object1.collide(object2);
                    object2.collide(object1);
                }
            }
        }
    };
    CollisionManager.prototype.addActiveHitbox = function (hitbox) {
        this.activeCollidables.push(hitbox);
    };
    CollisionManager.prototype.addPassiveHitbox = function (hitbox) {
        this.passiveCollidables.push(hitbox);
    };
    CollisionManager.prototype.wallCollisionCheckAtPosition = function (object, x, y) {
        for (var j = 0; j < this.passiveCollidables.length; ++j) {
            var object2 = this.passiveCollidables[j];
            if (x - object.width / 2 <= object2.x + object2.width && x + object.width / 2 >= object2.x &&
                y - object.height / 2 <= object2.y + object2.height && y + object.height / 2 >= object2.y) {
                // collision
                //console.log('collision with passive');
                //console.log("player", object.x, object.width);
                //console.log(object2.x, object2.width);
                if (object2.subject.type == 'wall')
                    return true;
                //object.collide(object2);
                //object2.collide(object);
            }
        }
        return false;
    };
    CollisionManager.prototype.collisionCheckAtPosition = function (object, x, y) {
        //active v active collisions
        for (var i = 0; i < this.activeCollidables.length; ++i) {
            var object2 = this.activeCollidables[i];
            if (object.getHitbox() != object2) {
                var dx = x - object2.x;
                var dy = y - object2.y;
                var distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < object.width / 2 + object2.width / 2) {
                    // collision detected!
                    // collision
                    //console.log('collision check came back as true');
                    return true;
                }
            }
            else {
                //console.log("omg im finding myself");
            }
        }
        return false;
    };
    CollisionManager.prototype.add = function (object) {
        throw new Error('Not implemented yet.');
    };
    CollisionManager.prototype.dumpActiveHitboxes = function () {
        this.activeCollidables = [];
    };
    CollisionManager.prototype.remove = function (object) {
        var gameObject = object;
        if (!gameObject.getHitbox)
            return;
        console.log(gameObject);
        console.log(this.activeCollidables);
        this.activeCollidables = this.activeCollidables.filter(function (element) {
            if (element != gameObject.getHitbox())
                return element;
        });
        console.log('after removing collidable');
        console.log(this.activeCollidables);
        this.passiveCollidables = this.passiveCollidables.filter(function (element) {
            if (element != gameObject.getHitbox())
                return element;
        });
    };
    return CollisionManager;
}());
exports.CollisionManager = CollisionManager;


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameMap_1 = __webpack_require__(18);
var GameEngine_1 = __webpack_require__(17);
var Player_1 = __webpack_require__(287);
var PlayerFactory = (function () {
    function PlayerFactory(hitboxFactory, controllerFactory) {
        this.hitBoxFactory = hitboxFactory;
        this.controllerFactory = controllerFactory;
    }
    PlayerFactory.prototype.createRunner = function (x, y, angle) {
        var player = new Player_1.Player(x, y, 16, 16, 'runner', 2.1);
        player.angle = angle;
        player.setHitbox(this.hitBoxFactory.CreateActiveSquareHitBox(16, 16, player));
        var controller = this.controllerFactory.createInputController(player);
        player.controller = controller;
        GameEngine_1.GameEngine.getInstance().register(player);
        GameMap_1.GameMap.getInstance().addMapObject(player, 'runner');
        return player;
    };
    PlayerFactory.prototype.createBlocker = function (x, y, route, area) {
        var player = new Player_1.Player(x, y, 16, 16, 'blocker', 1.5);
        player.setHitbox(this.hitBoxFactory.CreateActiveSquareHitBox(16, 16, player));
        var controller = this.controllerFactory.createBlockerController(player, route);
        player.controller = controller;
        GameEngine_1.GameEngine.getInstance().register(player);
        GameMap_1.GameMap.getInstance().addMapObject(player, 'blocker');
        return player;
    };
    PlayerFactory.prototype.createDefender = function (x, y, route, area) {
        var player = new Player_1.Player(x, y, 16, 16, 'defender', 1.8);
        GameEngine_1.GameEngine.getInstance().addReferenceToStage(player, "gameplayStage");
        player.setHitbox(this.hitBoxFactory.CreateActiveSquareHitBox(16, 16, player));
        var controller = this.controllerFactory.createDefenderController(player, route);
        player.controller = controller;
        GameEngine_1.GameEngine.getInstance().register(player);
        GameMap_1.GameMap.getInstance().addMapObject(player, 'defender');
        return player;
    };
    PlayerFactory.removeDefenderInArea = function (player, area) {
        // player.setHitbox(HitBoxFactory.CreateActiveSquareHitBox(16,16,player));
        // let controller = ControllerFactory.createDefenderController(player, route);
        // player.setController(controller);
        // GameEngine.getInstance().register(player);
        // let playerVO = new SquarePlayerViewObject(x,y,16,16,0,player, new CenterDrawingStrategy());
        // playerVO.color = '#e74c3c';
        // player.register(playerVO);
        // area.addView(playerVO);
        // GameMap.getInstance().addMapObject(player, 'defender');
        // return player;
    };
    return PlayerFactory;
}());
exports.PlayerFactory = PlayerFactory;


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ControllableGameObeject_1 = __webpack_require__(288);
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Player.prototype.collide = function (object) {
        //console.log("colliding", this.x);
        //this.x = 100;
        //GameEngine.getInstance().stop();
        this.controller.collide(object);
    };
    Player.prototype.tick = function () {
        //this.x += 1;
        this.updateObservers();
    };
    return Player;
}(ControllableGameObeject_1.ControllableGameObject));
exports.Player = Player;


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameEngine_1 = __webpack_require__(17);
var CollidableGameObject_1 = __webpack_require__(41);
var ControllableGameObject = (function (_super) {
    __extends(ControllableGameObject, _super);
    function ControllableGameObject(x, y, width, height, type, speed) {
        var _this = _super.call(this, x, y, width, height, type) || this;
        _this.speed = speed;
        return _this;
    }
    Object.defineProperty(ControllableGameObject.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (speed) {
            this._speed = speed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControllableGameObject.prototype, "controller", {
        get: function () {
            return this._controller;
        },
        set: function (controller) {
            this._controller = controller;
        },
        enumerable: true,
        configurable: true
    });
    ControllableGameObject.prototype.removeController = function () {
        this._controller = null;
    };
    ControllableGameObject.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        GameEngine_1.GameEngine.getInstance().unregister(this.controller);
    };
    return ControllableGameObject;
}(CollidableGameObject_1.CollidableGameObject));
exports.ControllableGameObject = ControllableGameObject;


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DoubleBufferedViewObject_1 = __webpack_require__(26);
var FieldViewObject = (function (_super) {
    __extends(FieldViewObject, _super);
    function FieldViewObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldViewObject.prototype.preRender = function () {
        //white lines around field
        for (var i = 0; i < 4; ++i) {
            this.context.beginPath();
            i % 2 == 0 ? this.context.fillStyle = '#2ecc71' : this.context.fillStyle = '#00b168';
            this.context.rect(0, this.height / 4 * i, this.width, this.height / 4);
            this.context.fill();
            this.context.closePath();
        }
        this.context.beginPath();
        this.context.rect(0, 0, this.width, this.height);
        this.context.lineWidth = 16;
        this.context.strokeStyle = 'white';
        this.context.stroke();
        this.context.closePath();
        this.context.beginPath();
        this.context.rect(5, this.height / 4 - 3, 1, 1);
        this.context.lineWidth = 4;
        this.context.strokeStyle = 'orange';
        this.context.stroke();
        this.context.closePath();
        this.context.beginPath();
        this.context.rect(this.width - 6, this.height / 4 - 3, 1, 1);
        this.context.lineWidth = 4;
        this.context.strokeStyle = 'orange';
        this.context.stroke();
        this.context.closePath();
        this.context.beginPath();
        //this.context.clearRect(0,0,this.width,this.height); 
        this.context.font = " bold 50px Arial";
        this.context.fillStyle = "#00b168";
        this.context.fillText('WILDCAT!', (this.width - this.context.measureText('WILDCAT!').width) / 2, 82);
        this.context.closePath();
    };
    FieldViewObject.prototype.update = function () {
        throw new Error("Method not implemented.");
        //possible set to cheering or set to something else
    };
    FieldViewObject.prototype.accept = function (visitor) {
        visitor.visitFieldObject(this);
    };
    return FieldViewObject;
}(DoubleBufferedViewObject_1.DoubleBufferedViewObject));
exports.FieldViewObject = FieldViewObject;


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var RenderEngine_1 = __webpack_require__(10);
var ComposableViewDecorator_1 = __webpack_require__(104);
var VerticalCenterDecorator = (function (_super) {
    __extends(VerticalCenterDecorator, _super);
    function VerticalCenterDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VerticalCenterDecorator.prototype.render = function (context, width, height) {
        //can set x/y here
        this.view.y = (height / 2 - (this.height * RenderEngine_1.RenderEngine.getInstance().scale) / 2) / RenderEngine_1.RenderEngine.getInstance().scale;
        this.view.render(context, width, height);
    };
    return VerticalCenterDecorator;
}(ComposableViewDecorator_1.ComposableViewDecorator));
exports.VerticalCenterDecorator = VerticalCenterDecorator;


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CenterDrawingStrategy_1 = __webpack_require__(292);
var SquarePlayerViewObject_1 = __webpack_require__(293);
var AbilityDots_1 = __webpack_require__(294);
var PlayerViewObjectFactory = (function () {
    function PlayerViewObjectFactory() {
    }
    PlayerViewObjectFactory.prototype.CreateRunnerInArea = function (runner, area) {
        var playerVO = new SquarePlayerViewObject_1.SquarePlayerViewObject(runner.x, runner.y, 16, 16, 0, runner, new CenterDrawingStrategy_1.CenterDrawingStrategy());
        playerVO.color = '#3498db';
        playerVO.outline = '#ffffff';
        runner.register(playerVO);
        area.addView(playerVO);
        return playerVO;
    };
    PlayerViewObjectFactory.prototype.PlayAbilityDots = function (runner, area) {
        var abilityDots = new AbilityDots_1.AbilityDots(runner.x, runner.y + 14, 14, 3, 0, new CenterDrawingStrategy_1.CenterDrawingStrategy(), runner);
        runner.register(abilityDots);
        area.addView(abilityDots);
        return abilityDots;
    };
    PlayerViewObjectFactory.prototype.CreateBlockerInArea = function (blocker, area) {
        var playerVO = new SquarePlayerViewObject_1.SquarePlayerViewObject(blocker.x, blocker.y, 16, 16, 0, blocker, new CenterDrawingStrategy_1.CenterDrawingStrategy());
        playerVO.color = '#3498db';
        blocker.register(playerVO);
        area.addView(playerVO);
        return playerVO;
    };
    PlayerViewObjectFactory.prototype.CreateDefenderInArea = function (defender, area) {
        var playerVO = new SquarePlayerViewObject_1.SquarePlayerViewObject(defender.x, defender.y, 16, 16, 0, defender, new CenterDrawingStrategy_1.CenterDrawingStrategy());
        playerVO.color = '#e74c3c';
        defender.register(playerVO);
        area.addView(playerVO);
        return playerVO;
    };
    return PlayerViewObjectFactory;
}());
exports.PlayerViewObjectFactory = PlayerViewObjectFactory;


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CenterDrawingStrategy = (function () {
    function CenterDrawingStrategy() {
    }
    CenterDrawingStrategy.prototype.calculateGlobalPositionXEffect = function (width) {
        return width / 2 * -1;
    };
    CenterDrawingStrategy.prototype.calculateGlobalPositionYEffect = function (height) {
        return height / 2 * -1;
    };
    CenterDrawingStrategy.prototype.draw = function (context, canvas, x, y, width, height) {
        context.drawImage(canvas, x - width / 2, y - height / 2);
    };
    return CenterDrawingStrategy;
}());
exports.CenterDrawingStrategy = CenterDrawingStrategy;


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ClickableViewObject_1 = __webpack_require__(16);
var SquarePlayerViewObject = (function (_super) {
    __extends(SquarePlayerViewObject, _super);
    function SquarePlayerViewObject(x, y, width, height, angle, subject, strategy) {
        var _this = _super.call(this, x, y, width, height, angle, strategy, null, null) || this;
        _this._color = 'white';
        _this._outline = 'black';
        _this.subject = subject;
        _this.angle = _this.subject.angle;
        return _this;
    }
    Object.defineProperty(SquarePlayerViewObject.prototype, "subject", {
        get: function () {
            return this._subject;
        },
        set: function (subject) {
            this._subject = subject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SquarePlayerViewObject.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
            this.preRender();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SquarePlayerViewObject.prototype, "outline", {
        get: function () {
            return this._outline;
        },
        set: function (outline) {
            this._outline = outline;
            this.preRender();
        },
        enumerable: true,
        configurable: true
    });
    SquarePlayerViewObject.prototype.preRender = function () {
        this.context.beginPath();
        if (this.color) {
            this.context.fillStyle = this.color;
            this.context.rect(0, 0, this.width, this.height);
            this.context.fill();
        }
        if (this.outline) {
            this.context.strokeStyle = this.outline;
        }
        this.context.rect(0, 0, this.width, this.height);
        this.context.stroke();
    };
    SquarePlayerViewObject.prototype.update = function () {
        this.x = this.subject.x;
        this.y = this.subject.y;
        this.angle = this.subject.angle;
    };
    SquarePlayerViewObject.prototype.accept = function (visitor) {
        visitor.visitPlayerObject(this);
    };
    SquarePlayerViewObject.prototype.hover = function () {
        throw new Error("Method not implemented.");
    };
    return SquarePlayerViewObject;
}(ClickableViewObject_1.ClickableViewObject));
exports.SquarePlayerViewObject = SquarePlayerViewObject;


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DoubleBufferedViewObject_1 = __webpack_require__(26);
var AbilityDots = (function (_super) {
    __extends(AbilityDots, _super);
    function AbilityDots(x, y, width, height, angle, drawingStrategy, subject) {
        var _this = _super.call(this, x, y, width, height, angle, drawingStrategy) || this;
        _this.cooldown = 0;
        _this.uses = 2;
        _this.subject = subject;
        _this.preRender();
        return _this;
    }
    AbilityDots.prototype.preRender = function () {
        //bar bg
        this.context.beginPath();
        this.context.fillStyle = 'black';
        this.context.rect(0, 0, this.width, this.height); // Outer circle 
        this.context.fill();
        this.context.closePath();
        //bar
        this.context.beginPath();
        this.context.fillStyle = 'white';
        console.log('cooldown', this.cooldown);
        this.context.rect(0, 0, this.width * ((60 - this.cooldown) / 60), this.height);
        this.context.fill();
        this.context.closePath();
    };
    AbilityDots.prototype.update = function () {
        this.x = this.subject.x;
        this.y = this.subject.y + 14;
        if (this.subject.controller.jumped > 0) {
            this.cooldown = this.subject.controller.jumped;
            this.preRender();
        }
        else {
            this.cooldown = 0;
        }
    };
    AbilityDots.prototype.accept = function (visitor) {
        throw new Error("Method not implemented.");
    };
    return AbilityDots;
}(DoubleBufferedViewObject_1.DoubleBufferedViewObject));
exports.AbilityDots = AbilityDots;


/***/ })
/******/ ]);