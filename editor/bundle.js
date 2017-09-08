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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

function arrayToString(a) {
    return "[" + a.join(", ") + "]";
}

String.prototype.seed = String.prototype.seed || Math.round(Math.random() * Math.pow(2, 32));

String.prototype.hashCode = function () {
    var remainder,
        bytes,
        h1,
        h1b,
        c1,
        c1b,
        c2,
        c2b,
        k1,
        i,
        key = this.toString();

    remainder = key.length & 3; // key.length % 4
    bytes = key.length - remainder;
    h1 = String.prototype.seed;
    c1 = 0xcc9e2d51;
    c2 = 0x1b873593;
    i = 0;

    while (i < bytes) {
        k1 = key.charCodeAt(i) & 0xff | (key.charCodeAt(++i) & 0xff) << 8 | (key.charCodeAt(++i) & 0xff) << 16 | (key.charCodeAt(++i) & 0xff) << 24;
        ++i;

        k1 = (k1 & 0xffff) * c1 + (((k1 >>> 16) * c1 & 0xffff) << 16) & 0xffffffff;
        k1 = k1 << 15 | k1 >>> 17;
        k1 = (k1 & 0xffff) * c2 + (((k1 >>> 16) * c2 & 0xffff) << 16) & 0xffffffff;

        h1 ^= k1;
        h1 = h1 << 13 | h1 >>> 19;
        h1b = (h1 & 0xffff) * 5 + (((h1 >>> 16) * 5 & 0xffff) << 16) & 0xffffffff;
        h1 = (h1b & 0xffff) + 0x6b64 + (((h1b >>> 16) + 0xe654 & 0xffff) << 16);
    }

    k1 = 0;

    switch (remainder) {
        case 3:
            k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
        case 2:
            k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
        case 1:
            k1 ^= key.charCodeAt(i) & 0xff;

            k1 = (k1 & 0xffff) * c1 + (((k1 >>> 16) * c1 & 0xffff) << 16) & 0xffffffff;
            k1 = k1 << 15 | k1 >>> 17;
            k1 = (k1 & 0xffff) * c2 + (((k1 >>> 16) * c2 & 0xffff) << 16) & 0xffffffff;
            h1 ^= k1;
    }

    h1 ^= key.length;

    h1 ^= h1 >>> 16;
    h1 = (h1 & 0xffff) * 0x85ebca6b + (((h1 >>> 16) * 0x85ebca6b & 0xffff) << 16) & 0xffffffff;
    h1 ^= h1 >>> 13;
    h1 = (h1 & 0xffff) * 0xc2b2ae35 + (((h1 >>> 16) * 0xc2b2ae35 & 0xffff) << 16) & 0xffffffff;
    h1 ^= h1 >>> 16;

    return h1 >>> 0;
};

function standardEqualsFunction(a, b) {
    return a.equals(b);
}

function standardHashCodeFunction(a) {
    return a.hashCode();
}

function Set(hashFunction, equalsFunction) {
    this.data = {};
    this.hashFunction = hashFunction || standardHashCodeFunction;
    this.equalsFunction = equalsFunction || standardEqualsFunction;
    return this;
}

Object.defineProperty(Set.prototype, "length", {
    get: function get() {
        var l = 0;
        for (var key in this.data) {
            if (key.indexOf("hash_") === 0) {
                l = l + this.data[key].length;
            }
        }
        return l;
    }
});

Set.prototype.add = function (value) {
    var hash = this.hashFunction(value);
    var key = "hash_" + hash;
    if (key in this.data) {
        var values = this.data[key];
        for (var i = 0; i < values.length; i++) {
            if (this.equalsFunction(value, values[i])) {
                return values[i];
            }
        }
        values.push(value);
        return value;
    } else {
        this.data[key] = [value];
        return value;
    }
};

Set.prototype.contains = function (value) {
    return this.get(value) != null;
};

Set.prototype.get = function (value) {
    var hash = this.hashFunction(value);
    var key = "hash_" + hash;
    if (key in this.data) {
        var values = this.data[key];
        for (var i = 0; i < values.length; i++) {
            if (this.equalsFunction(value, values[i])) {
                return values[i];
            }
        }
    }
    return null;
};

Set.prototype.values = function () {
    var l = [];
    for (var key in this.data) {
        if (key.indexOf("hash_") === 0) {
            l = l.concat(this.data[key]);
        }
    }
    return l;
};

Set.prototype.toString = function () {
    return arrayToString(this.values());
};

function BitSet() {
    this.data = [];
    return this;
}

BitSet.prototype.add = function (value) {
    this.data[value] = true;
};

BitSet.prototype.or = function (set) {
    var bits = this;
    Object.keys(set.data).map(function (alt) {
        bits.add(alt);
    });
};

BitSet.prototype.remove = function (value) {
    delete this.data[value];
};

BitSet.prototype.contains = function (value) {
    return this.data[value] === true;
};

BitSet.prototype.values = function () {
    return Object.keys(this.data);
};

BitSet.prototype.minValue = function () {
    return Math.min.apply(null, this.values());
};

BitSet.prototype.hashCode = function () {
    var hash = new Hash();
    hash.update(this.values());
    return hash.finish();
};

BitSet.prototype.equals = function (other) {
    if (!(other instanceof BitSet)) {
        return false;
    }
    return this.hashCode() === other.hashCode();
};

Object.defineProperty(BitSet.prototype, "length", {
    get: function get() {
        return this.values().length;
    }
});

BitSet.prototype.toString = function () {
    return "{" + this.values().join(", ") + "}";
};

function Map(hashFunction, equalsFunction) {
    this.data = {};
    this.hashFunction = hashFunction || standardHashCodeFunction;
    this.equalsFunction = equalsFunction || standardEqualsFunction;
    return this;
}

Object.defineProperty(Map.prototype, "length", {
    get: function get() {
        var l = 0;
        for (var hashKey in this.data) {
            if (hashKey.indexOf("hash_") === 0) {
                l = l + this.data[hashKey].length;
            }
        }
        return l;
    }
});

Map.prototype.put = function (key, value) {
    var hashKey = "hash_" + this.hashFunction(key);
    if (hashKey in this.data) {
        var entries = this.data[hashKey];
        for (var i = 0; i < entries.length; i++) {
            var entry = entries[i];
            if (this.equalsFunction(key, entry.key)) {
                var oldValue = entry.value;
                entry.value = value;
                return oldValue;
            }
        }
        entries.push({ key: key, value: value });
        return value;
    } else {
        this.data[hashKey] = [{ key: key, value: value }];
        return value;
    }
};

Map.prototype.containsKey = function (key) {
    var hashKey = "hash_" + this.hashFunction(key);
    if (hashKey in this.data) {
        var entries = this.data[hashKey];
        for (var i = 0; i < entries.length; i++) {
            var entry = entries[i];
            if (this.equalsFunction(key, entry.key)) return true;
        }
    }
    return false;
};

Map.prototype.get = function (key) {
    var hashKey = "hash_" + this.hashFunction(key);
    if (hashKey in this.data) {
        var entries = this.data[hashKey];
        for (var i = 0; i < entries.length; i++) {
            var entry = entries[i];
            if (this.equalsFunction(key, entry.key)) return entry.value;
        }
    }
    return null;
};

Map.prototype.entries = function () {
    var l = [];
    for (var key in this.data) {
        if (key.indexOf("hash_") === 0) {
            l = l.concat(this.data[key]);
        }
    }
    return l;
};

Map.prototype.getKeys = function () {
    return this.entries().map(function (e) {
        return e.key;
    });
};

Map.prototype.getValues = function () {
    return this.entries().map(function (e) {
        return e.value;
    });
};

Map.prototype.toString = function () {
    var ss = this.entries().map(function (entry) {
        return '{' + entry.key + ':' + entry.value + '}';
    });
    return '[' + ss.join(", ") + ']';
};

function AltDict() {
    this.data = {};
    return this;
}

AltDict.prototype.get = function (key) {
    key = "k-" + key;
    if (key in this.data) {
        return this.data[key];
    } else {
        return null;
    }
};

AltDict.prototype.put = function (key, value) {
    key = "k-" + key;
    this.data[key] = value;
};

AltDict.prototype.values = function () {
    var data = this.data;
    var keys = Object.keys(this.data);
    return keys.map(function (key) {
        return data[key];
    });
};

function DoubleDict() {
    return this;
}

function Hash() {
    this.count = 0;
    this.hash = 0;
    return this;
}

Hash.prototype.update = function () {
    for (var i = 0; i < arguments.length; i++) {
        var value = arguments[i];
        if (value == null) continue;
        if (Array.isArray(value)) this.update.apply(value);else {
            var k = 0;
            switch (typeof value === "undefined" ? "undefined" : _typeof(value)) {
                case 'undefined':
                case 'function':
                    continue;
                case 'number':
                case 'boolean':
                    k = value;
                    break;
                case 'string':
                    k = value.hashCode();
                    break;
                default:
                    value.updateHashCode(this);
                    continue;
            }
            k = k * 0xCC9E2D51;
            k = k << 15 | k >>> 32 - 15;
            k = k * 0x1B873593;
            this.count = this.count + 1;
            var hash = this.hash ^ k;
            hash = hash << 13 | hash >>> 32 - 13;
            hash = hash * 5 + 0xE6546B64;
            this.hash = hash;
        }
    }
};

Hash.prototype.finish = function () {
    var hash = this.hash ^ this.count * 4;
    hash = hash ^ hash >>> 16;
    hash = hash * 0x85EBCA6B;
    hash = hash ^ hash >>> 13;
    hash = hash * 0xC2B2AE35;
    hash = hash ^ hash >>> 16;
    return hash;
};

function hashStuff() {
    var hash = new Hash();
    hash.update.apply(arguments);
    return hash.finish();
}

DoubleDict.prototype.get = function (a, b) {
    var d = this[a] || null;
    return d === null ? null : d[b] || null;
};

DoubleDict.prototype.set = function (a, b, o) {
    var d = this[a] || null;
    if (d === null) {
        d = {};
        this[a] = d;
    }
    d[b] = o;
};

function escapeWhitespace(s, escapeSpaces) {
    s = s.replace("\t", "\\t");
    s = s.replace("\n", "\\n");
    s = s.replace("\r", "\\r");
    if (escapeSpaces) {
        s = s.replace(" ", "\xB7");
    }
    return s;
}

function titleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1);
    });
};

function equalArrays(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) return false;
    if (a == b) return true;
    if (a.length != b.length) return false;
    for (var i = 0; i < a.length; i++) {
        if (a[i] == b[i]) continue;
        if (!a[i].equals(b[i])) return false;
    }
    return true;
};

exports.Hash = Hash;
exports.Set = Set;
exports.Map = Map;
exports.BitSet = BitSet;
exports.AltDict = AltDict;
exports.DoubleDict = DoubleDict;
exports.hashStuff = hashStuff;
exports.escapeWhitespace = escapeWhitespace;
exports.arrayToString = arrayToString;
exports.titleCase = titleCase;
exports.equalArrays = equalArrays;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
//

// A token has properties: text, type, line, character position in the line
// (so we can ignore tabs), token channel, index, and source from which
// we obtained this token.

function Token() {
	this.source = null;
	this.type = null; // token type of the token
	this.channel = null; // The parser ignores everything not on DEFAULT_CHANNEL
	this.start = null; // optional; return -1 if not implemented.
	this.stop = null; // optional; return -1 if not implemented.
	this.tokenIndex = null; // from 0..n-1 of the token object in the input stream
	this.line = null; // line=1..n of the 1st character
	this.column = null; // beginning of the line at which it occurs, 0..n-1
	this._text = null; // text of the token.
	return this;
}

Token.INVALID_TYPE = 0;

// During lookahead operations, this "token" signifies we hit rule end ATN state
// and did not follow it despite needing to.
Token.EPSILON = -2;

Token.MIN_USER_TOKEN_TYPE = 1;

Token.EOF = -1;

// All tokens go to the parser (unless skip() is called in that rule)
// on a particular "channel". The parser tunes to a particular channel
// so that whitespace etc... can go to the parser on a "hidden" channel.

Token.DEFAULT_CHANNEL = 0;

// Anything on different channel than DEFAULT_CHANNEL is not parsed
// by parser.

Token.HIDDEN_CHANNEL = 1;

// Explicitly set the text for this token. If {code text} is not
// {@code null}, then {@link //getText} will return this value rather than
// extracting the text from the input.
//
// @param text The explicit text of the token, or {@code null} if the text
// should be obtained from the input along with the start and stop indexes
// of the token.

Object.defineProperty(Token.prototype, "text", {
	get: function get() {
		return this._text;
	},
	set: function set(text) {
		this._text = text;
	}
});

Token.prototype.getTokenSource = function () {
	return this.source[0];
};

Token.prototype.getInputStream = function () {
	return this.source[1];
};

function CommonToken(source, type, channel, start, stop) {
	Token.call(this);
	this.source = source !== undefined ? source : CommonToken.EMPTY_SOURCE;
	this.type = type !== undefined ? type : null;
	this.channel = channel !== undefined ? channel : Token.DEFAULT_CHANNEL;
	this.start = start !== undefined ? start : -1;
	this.stop = stop !== undefined ? stop : -1;
	this.tokenIndex = -1;
	if (this.source[0] !== null) {
		this.line = source[0].line;
		this.column = source[0].column;
	} else {
		this.column = -1;
	}
	return this;
}

CommonToken.prototype = Object.create(Token.prototype);
CommonToken.prototype.constructor = CommonToken;

// An empty {@link Pair} which is used as the default value of
// {@link //source} for tokens that do not have a source.
CommonToken.EMPTY_SOURCE = [null, null];

// Constructs a new {@link CommonToken} as a copy of another {@link Token}.
//
// <p>
// If {@code oldToken} is also a {@link CommonToken} instance, the newly
// constructed token will share a reference to the {@link //text} field and
// the {@link Pair} stored in {@link //source}. Otherwise, {@link //text} will
// be assigned the result of calling {@link //getText}, and {@link //source}
// will be constructed from the result of {@link Token//getTokenSource} and
// {@link Token//getInputStream}.</p>
//
// @param oldToken The token to copy.
//
CommonToken.prototype.clone = function () {
	var t = new CommonToken(this.source, this.type, this.channel, this.start, this.stop);
	t.tokenIndex = this.tokenIndex;
	t.line = this.line;
	t.column = this.column;
	t.text = this.text;
	return t;
};

Object.defineProperty(CommonToken.prototype, "text", {
	get: function get() {
		if (this._text !== null) {
			return this._text;
		}
		var input = this.getInputStream();
		if (input === null) {
			return null;
		}
		var n = input.size;
		if (this.start < n && this.stop < n) {
			return input.getText(this.start, this.stop);
		} else {
			return "<EOF>";
		}
	},
	set: function set(text) {
		this._text = text;
	}
});

CommonToken.prototype.toString = function () {
	var txt = this.text;
	if (txt !== null) {
		txt = txt.replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t");
	} else {
		txt = "<no text>";
	}
	return "[@" + this.tokenIndex + "," + this.start + ":" + this.stop + "='" + txt + "',<" + this.type + ">" + (this.channel > 0 ? ",channel=" + this.channel : "") + "," + this.line + ":" + this.column + "]";
};

exports.Token = Token;
exports.CommonToken = CommonToken;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

/*jslint smarttabs:true */

var Token = __webpack_require__(1).Token;

/* stop is not included! */
function Interval(start, stop) {
	this.start = start;
	this.stop = stop;
	return this;
}

Interval.prototype.contains = function (item) {
	return item >= this.start && item < this.stop;
};

Interval.prototype.toString = function () {
	if (this.start === this.stop - 1) {
		return this.start.toString();
	} else {
		return this.start.toString() + ".." + (this.stop - 1).toString();
	}
};

Object.defineProperty(Interval.prototype, "length", {
	get: function get() {
		return this.stop - this.start;
	}
});

function IntervalSet() {
	this.intervals = null;
	this.readOnly = false;
}

IntervalSet.prototype.first = function (v) {
	if (this.intervals === null || this.intervals.length === 0) {
		return Token.INVALID_TYPE;
	} else {
		return this.intervals[0].start;
	}
};

IntervalSet.prototype.addOne = function (v) {
	this.addInterval(new Interval(v, v + 1));
};

IntervalSet.prototype.addRange = function (l, h) {
	this.addInterval(new Interval(l, h + 1));
};

IntervalSet.prototype.addInterval = function (v) {
	if (this.intervals === null) {
		this.intervals = [];
		this.intervals.push(v);
	} else {
		// find insert pos
		for (var k = 0; k < this.intervals.length; k++) {
			var i = this.intervals[k];
			// distinct range -> insert
			if (v.stop < i.start) {
				this.intervals.splice(k, 0, v);
				return;
			}
			// contiguous range -> adjust
			else if (v.stop === i.start) {
					this.intervals[k].start = v.start;
					return;
				}
				// overlapping range -> adjust and reduce
				else if (v.start <= i.stop) {
						this.intervals[k] = new Interval(Math.min(i.start, v.start), Math.max(i.stop, v.stop));
						this.reduce(k);
						return;
					}
		}
		// greater than any existing
		this.intervals.push(v);
	}
};

IntervalSet.prototype.addSet = function (other) {
	if (other.intervals !== null) {
		for (var k = 0; k < other.intervals.length; k++) {
			var i = other.intervals[k];
			this.addInterval(new Interval(i.start, i.stop));
		}
	}
	return this;
};

IntervalSet.prototype.reduce = function (k) {
	// only need to reduce if k is not the last
	if (k < this.intervalslength - 1) {
		var l = this.intervals[k];
		var r = this.intervals[k + 1];
		// if r contained in l
		if (l.stop >= r.stop) {
			this.intervals.pop(k + 1);
			this.reduce(k);
		} else if (l.stop >= r.start) {
			this.intervals[k] = new Interval(l.start, r.stop);
			this.intervals.pop(k + 1);
		}
	}
};

IntervalSet.prototype.complement = function (start, stop) {
	var result = new IntervalSet();
	result.addInterval(new Interval(start, stop + 1));
	for (var i = 0; i < this.intervals.length; i++) {
		result.removeRange(this.intervals[i]);
	}
	return result;
};

IntervalSet.prototype.contains = function (item) {
	if (this.intervals === null) {
		return false;
	} else {
		for (var k = 0; k < this.intervals.length; k++) {
			if (this.intervals[k].contains(item)) {
				return true;
			}
		}
		return false;
	}
};

Object.defineProperty(IntervalSet.prototype, "length", {
	get: function get() {
		var len = 0;
		this.intervals.map(function (i) {
			len += i.length;
		});
		return len;
	}
});

IntervalSet.prototype.removeRange = function (v) {
	if (v.start === v.stop - 1) {
		this.removeOne(v.start);
	} else if (this.intervals !== null) {
		var k = 0;
		for (var n = 0; n < this.intervals.length; n++) {
			var i = this.intervals[k];
			// intervals are ordered
			if (v.stop <= i.start) {
				return;
			}
			// check for including range, split it
			else if (v.start > i.start && v.stop < i.stop) {
					this.intervals[k] = new Interval(i.start, v.start);
					var x = new Interval(v.stop, i.stop);
					this.intervals.splice(k, 0, x);
					return;
				}
				// check for included range, remove it
				else if (v.start <= i.start && v.stop >= i.stop) {
						this.intervals.splice(k, 1);
						k = k - 1; // need another pass
					}
					// check for lower boundary
					else if (v.start < i.stop) {
							this.intervals[k] = new Interval(i.start, v.start);
						}
						// check for upper boundary
						else if (v.stop < i.stop) {
								this.intervals[k] = new Interval(v.stop, i.stop);
							}
			k += 1;
		}
	}
};

IntervalSet.prototype.removeOne = function (v) {
	if (this.intervals !== null) {
		for (var k = 0; k < this.intervals.length; k++) {
			var i = this.intervals[k];
			// intervals is ordered
			if (v < i.start) {
				return;
			}
			// check for single value range
			else if (v === i.start && v === i.stop - 1) {
					this.intervals.splice(k, 1);
					return;
				}
				// check for lower boundary
				else if (v === i.start) {
						this.intervals[k] = new Interval(i.start + 1, i.stop);
						return;
					}
					// check for upper boundary
					else if (v === i.stop - 1) {
							this.intervals[k] = new Interval(i.start, i.stop - 1);
							return;
						}
						// split existing range
						else if (v < i.stop - 1) {
								var x = new Interval(i.start, v);
								i.start = v + 1;
								this.intervals.splice(k, 0, x);
								return;
							}
		}
	}
};

IntervalSet.prototype.toString = function (literalNames, symbolicNames, elemsAreChar) {
	literalNames = literalNames || null;
	symbolicNames = symbolicNames || null;
	elemsAreChar = elemsAreChar || false;
	if (this.intervals === null) {
		return "{}";
	} else if (literalNames !== null || symbolicNames !== null) {
		return this.toTokenString(literalNames, symbolicNames);
	} else if (elemsAreChar) {
		return this.toCharString();
	} else {
		return this.toIndexString();
	}
};

IntervalSet.prototype.toCharString = function () {
	var names = [];
	for (var i = 0; i < this.intervals.length; i++) {
		var v = this.intervals[i];
		if (v.stop === v.start + 1) {
			if (v.start === Token.EOF) {
				names.push("<EOF>");
			} else {
				names.push("'" + String.fromCharCode(v.start) + "'");
			}
		} else {
			names.push("'" + String.fromCharCode(v.start) + "'..'" + String.fromCharCode(v.stop - 1) + "'");
		}
	}
	if (names.length > 1) {
		return "{" + names.join(", ") + "}";
	} else {
		return names[0];
	}
};

IntervalSet.prototype.toIndexString = function () {
	var names = [];
	for (var i = 0; i < this.intervals.length; i++) {
		var v = this.intervals[i];
		if (v.stop === v.start + 1) {
			if (v.start === Token.EOF) {
				names.push("<EOF>");
			} else {
				names.push(v.start.toString());
			}
		} else {
			names.push(v.start.toString() + ".." + (v.stop - 1).toString());
		}
	}
	if (names.length > 1) {
		return "{" + names.join(", ") + "}";
	} else {
		return names[0];
	}
};

IntervalSet.prototype.toTokenString = function (literalNames, symbolicNames) {
	var names = [];
	for (var i = 0; i < this.intervals.length; i++) {
		var v = this.intervals[i];
		for (var j = v.start; j < v.stop; j++) {
			names.push(this.elementName(literalNames, symbolicNames, j));
		}
	}
	if (names.length > 1) {
		return "{" + names.join(", ") + "}";
	} else {
		return names[0];
	}
};

IntervalSet.prototype.elementName = function (literalNames, symbolicNames, a) {
	if (a === Token.EOF) {
		return "<EOF>";
	} else if (a === Token.EPSILON) {
		return "<EPSILON>";
	} else {
		return literalNames[a] || symbolicNames[a];
	}
};

exports.Interval = Interval;
exports.IntervalSet = IntervalSet;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

// The root of the ANTLR exception hierarchy. In general, ANTLR tracks just
//  3 kinds of errors: prediction errors, failed predicate errors, and
//  mismatched input errors. In each case, the parser knows where it is
//  in the input, where it is in the ATN, the rule invocation stack,
//  and what kind of problem occurred.

var PredicateTransition = __webpack_require__(7).PredicateTransition;

function RecognitionException(params) {
    Error.call(this);
    if (!!Error.captureStackTrace) {
        Error.captureStackTrace(this, RecognitionException);
    } else {
        var stack = new Error().stack;
    }
    this.message = params.message;
    this.recognizer = params.recognizer;
    this.input = params.input;
    this.ctx = params.ctx;
    // The current {@link Token} when an error occurred. Since not all streams
    // support accessing symbols by index, we have to track the {@link Token}
    // instance itself.
    this.offendingToken = null;
    // Get the ATN state number the parser was in at the time the error
    // occurred. For {@link NoViableAltException} and
    // {@link LexerNoViableAltException} exceptions, this is the
    // {@link DecisionState} number. For others, it is the state whose outgoing
    // edge we couldn't match.
    this.offendingState = -1;
    if (this.recognizer !== null) {
        this.offendingState = this.recognizer.state;
    }
    return this;
}

RecognitionException.prototype = Object.create(Error.prototype);
RecognitionException.prototype.constructor = RecognitionException;

// <p>If the state number is not known, this method returns -1.</p>

//
// Gets the set of input symbols which could potentially follow the
// previously matched symbol at the time this exception was thrown.
//
// <p>If the set of expected tokens is not known and could not be computed,
// this method returns {@code null}.</p>
//
// @return The set of token types that could potentially follow the current
// state in the ATN, or {@code null} if the information is not available.
// /
RecognitionException.prototype.getExpectedTokens = function () {
    if (this.recognizer !== null) {
        return this.recognizer.atn.getExpectedTokens(this.offendingState, this.ctx);
    } else {
        return null;
    }
};

RecognitionException.prototype.toString = function () {
    return this.message;
};

function LexerNoViableAltException(lexer, input, startIndex, deadEndConfigs) {
    RecognitionException.call(this, { message: "", recognizer: lexer, input: input, ctx: null });
    this.startIndex = startIndex;
    this.deadEndConfigs = deadEndConfigs;
    return this;
}

LexerNoViableAltException.prototype = Object.create(RecognitionException.prototype);
LexerNoViableAltException.prototype.constructor = LexerNoViableAltException;

LexerNoViableAltException.prototype.toString = function () {
    var symbol = "";
    if (this.startIndex >= 0 && this.startIndex < this.input.size) {
        symbol = this.input.getText((this.startIndex, this.startIndex));
    }
    return "LexerNoViableAltException" + symbol;
};

// Indicates that the parser could not decide which of two or more paths
// to take based upon the remaining input. It tracks the starting token
// of the offending input and also knows where the parser was
// in the various paths when the error. Reported by reportNoViableAlternative()
//
function NoViableAltException(recognizer, input, startToken, offendingToken, deadEndConfigs, ctx) {
    ctx = ctx || recognizer._ctx;
    offendingToken = offendingToken || recognizer.getCurrentToken();
    startToken = startToken || recognizer.getCurrentToken();
    input = input || recognizer.getInputStream();
    RecognitionException.call(this, { message: "", recognizer: recognizer, input: input, ctx: ctx });
    // Which configurations did we try at input.index() that couldn't match
    // input.LT(1)?//
    this.deadEndConfigs = deadEndConfigs;
    // The token object at the start index; the input stream might
    // not be buffering tokens so get a reference to it. (At the
    // time the error occurred, of course the stream needs to keep a
    // buffer all of the tokens but later we might not have access to those.)
    this.startToken = startToken;
    this.offendingToken = offendingToken;
}

NoViableAltException.prototype = Object.create(RecognitionException.prototype);
NoViableAltException.prototype.constructor = NoViableAltException;

// This signifies any kind of mismatched input exceptions such as
// when the current input does not match the expected token.
//
function InputMismatchException(recognizer) {
    RecognitionException.call(this, { message: "", recognizer: recognizer, input: recognizer.getInputStream(), ctx: recognizer._ctx });
    this.offendingToken = recognizer.getCurrentToken();
}

InputMismatchException.prototype = Object.create(RecognitionException.prototype);
InputMismatchException.prototype.constructor = InputMismatchException;

// A semantic predicate failed during validation. Validation of predicates
// occurs when normally parsing the alternative just like matching a token.
// Disambiguating predicate evaluation occurs when we test a predicate during
// prediction.

function FailedPredicateException(recognizer, predicate, message) {
    RecognitionException.call(this, { message: this.formatMessage(predicate, message || null), recognizer: recognizer,
        input: recognizer.getInputStream(), ctx: recognizer._ctx });
    var s = recognizer._interp.atn.states[recognizer.state];
    var trans = s.transitions[0];
    if (trans instanceof PredicateTransition) {
        this.ruleIndex = trans.ruleIndex;
        this.predicateIndex = trans.predIndex;
    } else {
        this.ruleIndex = 0;
        this.predicateIndex = 0;
    }
    this.predicate = predicate;
    this.offendingToken = recognizer.getCurrentToken();
    return this;
}

FailedPredicateException.prototype = Object.create(RecognitionException.prototype);
FailedPredicateException.prototype.constructor = FailedPredicateException;

FailedPredicateException.prototype.formatMessage = function (predicate, message) {
    if (message !== null) {
        return message;
    } else {
        return "failed predicate: {" + predicate + "}?";
    }
};

function ParseCancellationException() {
    Error.call(this);
    Error.captureStackTrace(this, ParseCancellationException);
    return this;
}

ParseCancellationException.prototype = Object.create(Error.prototype);
ParseCancellationException.prototype.constructor = ParseCancellationException;

exports.RecognitionException = RecognitionException;
exports.NoViableAltException = NoViableAltException;
exports.LexerNoViableAltException = LexerNoViableAltException;
exports.InputMismatchException = InputMismatchException;
exports.FailedPredicateException = FailedPredicateException;
exports.ParseCancellationException = ParseCancellationException;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
///

// The basic notion of a tree has a parent, a payload, and a list of children.
//  It is the most abstract interface for all the trees used by ANTLR.
///

var Token = __webpack_require__(1).Token;
var Interval = __webpack_require__(2).Interval;
var INVALID_INTERVAL = new Interval(-1, -2);
var Utils = __webpack_require__(0);

function Tree() {
	return this;
}

function SyntaxTree() {
	Tree.call(this);
	return this;
}

SyntaxTree.prototype = Object.create(Tree.prototype);
SyntaxTree.prototype.constructor = SyntaxTree;

function ParseTree() {
	SyntaxTree.call(this);
	return this;
}

ParseTree.prototype = Object.create(SyntaxTree.prototype);
ParseTree.prototype.constructor = ParseTree;

function RuleNode() {
	ParseTree.call(this);
	return this;
}

RuleNode.prototype = Object.create(ParseTree.prototype);
RuleNode.prototype.constructor = RuleNode;

function TerminalNode() {
	ParseTree.call(this);
	return this;
}

TerminalNode.prototype = Object.create(ParseTree.prototype);
TerminalNode.prototype.constructor = TerminalNode;

function ErrorNode() {
	TerminalNode.call(this);
	return this;
}

ErrorNode.prototype = Object.create(TerminalNode.prototype);
ErrorNode.prototype.constructor = ErrorNode;

function ParseTreeVisitor() {
	return this;
}

ParseTreeVisitor.prototype.visit = function (ctx) {
	if (Array.isArray(ctx)) {
		return ctx.map(function (child) {
			return child.accept(this);
		}, this);
	} else {
		return ctx.accept(this);
	}
};

ParseTreeVisitor.prototype.visitChildren = function (ctx) {
	return this.visit(ctx.children);
};

ParseTreeVisitor.prototype.visitTerminal = function (node) {};

ParseTreeVisitor.prototype.visitErrorNode = function (node) {};

function ParseTreeListener() {
	return this;
}

ParseTreeListener.prototype.visitTerminal = function (node) {};

ParseTreeListener.prototype.visitErrorNode = function (node) {};

ParseTreeListener.prototype.enterEveryRule = function (node) {};

ParseTreeListener.prototype.exitEveryRule = function (node) {};

function TerminalNodeImpl(symbol) {
	TerminalNode.call(this);
	this.parentCtx = null;
	this.symbol = symbol;
	return this;
}

TerminalNodeImpl.prototype = Object.create(TerminalNode.prototype);
TerminalNodeImpl.prototype.constructor = TerminalNodeImpl;

TerminalNodeImpl.prototype.getChild = function (i) {
	return null;
};

TerminalNodeImpl.prototype.getSymbol = function () {
	return this.symbol;
};

TerminalNodeImpl.prototype.getParent = function () {
	return this.parentCtx;
};

TerminalNodeImpl.prototype.getPayload = function () {
	return this.symbol;
};

TerminalNodeImpl.prototype.getSourceInterval = function () {
	if (this.symbol === null) {
		return INVALID_INTERVAL;
	}
	var tokenIndex = this.symbol.tokenIndex;
	return new Interval(tokenIndex, tokenIndex);
};

TerminalNodeImpl.prototype.getChildCount = function () {
	return 0;
};

TerminalNodeImpl.prototype.accept = function (visitor) {
	return visitor.visitTerminal(this);
};

TerminalNodeImpl.prototype.getText = function () {
	return this.symbol.text;
};

TerminalNodeImpl.prototype.toString = function () {
	if (this.symbol.type === Token.EOF) {
		return "<EOF>";
	} else {
		return this.symbol.text;
	}
};

// Represents a token that was consumed during resynchronization
// rather than during a valid match operation. For example,
// we will create this kind of a node during single token insertion
// and deletion as well as during "consume until error recovery set"
// upon no viable alternative exceptions.

function ErrorNodeImpl(token) {
	TerminalNodeImpl.call(this, token);
	return this;
}

ErrorNodeImpl.prototype = Object.create(TerminalNodeImpl.prototype);
ErrorNodeImpl.prototype.constructor = ErrorNodeImpl;

ErrorNodeImpl.prototype.isErrorNode = function () {
	return true;
};

ErrorNodeImpl.prototype.accept = function (visitor) {
	return visitor.visitErrorNode(this);
};

function ParseTreeWalker() {
	return this;
}

ParseTreeWalker.prototype.walk = function (listener, t) {
	var errorNode = t instanceof ErrorNode || t.isErrorNode !== undefined && t.isErrorNode();
	if (errorNode) {
		listener.visitErrorNode(t);
	} else if (t instanceof TerminalNode) {
		listener.visitTerminal(t);
	} else {
		this.enterRule(listener, t);
		for (var i = 0; i < t.getChildCount(); i++) {
			var child = t.getChild(i);
			this.walk(listener, child);
		}
		this.exitRule(listener, t);
	}
};
//
// The discovery of a rule node, involves sending two events: the generic
// {@link ParseTreeListener//enterEveryRule} and a
// {@link RuleContext}-specific event. First we trigger the generic and then
// the rule specific. We to them in reverse order upon finishing the node.
//
ParseTreeWalker.prototype.enterRule = function (listener, r) {
	var ctx = r.getRuleContext();
	listener.enterEveryRule(ctx);
	ctx.enterRule(listener);
};

ParseTreeWalker.prototype.exitRule = function (listener, r) {
	var ctx = r.getRuleContext();
	ctx.exitRule(listener);
	listener.exitEveryRule(ctx);
};

ParseTreeWalker.DEFAULT = new ParseTreeWalker();

exports.RuleNode = RuleNode;
exports.ErrorNode = ErrorNode;
exports.TerminalNode = TerminalNode;
exports.ErrorNodeImpl = ErrorNodeImpl;
exports.TerminalNodeImpl = TerminalNodeImpl;
exports.ParseTreeListener = ParseTreeListener;
exports.ParseTreeVisitor = ParseTreeVisitor;
exports.ParseTreeWalker = ParseTreeWalker;
exports.INVALID_INTERVAL = INVALID_INTERVAL;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
//

// The following images show the relation of states and
// {@link ATNState//transitions} for various grammar constructs.
//
// <ul>
//
// <li>Solid edges marked with an &//0949; indicate a required
// {@link EpsilonTransition}.</li>
//
// <li>Dashed edges indicate locations where any transition derived from
// {@link Transition} might appear.</li>
//
// <li>Dashed nodes are place holders for either a sequence of linked
// {@link BasicState} states or the inclusion of a block representing a nested
// construct in one of the forms below.</li>
//
// <li>Nodes showing multiple outgoing alternatives with a {@code ...} support
// any number of alternatives (one or more). Nodes without the {@code ...} only
// support the exact number of alternatives shown in the diagram.</li>
//
// </ul>
//
// <h2>Basic Blocks</h2>
//
// <h3>Rule</h3>
//
// <embed src="images/Rule.svg" type="image/svg+xml"/>
//
// <h3>Block of 1 or more alternatives</h3>
//
// <embed src="images/Block.svg" type="image/svg+xml"/>
//
// <h2>Greedy Loops</h2>
//
// <h3>Greedy Closure: {@code (...)*}</h3>
//
// <embed src="images/ClosureGreedy.svg" type="image/svg+xml"/>
//
// <h3>Greedy Positive Closure: {@code (...)+}</h3>
//
// <embed src="images/PositiveClosureGreedy.svg" type="image/svg+xml"/>
//
// <h3>Greedy Optional: {@code (...)?}</h3>
//
// <embed src="images/OptionalGreedy.svg" type="image/svg+xml"/>
//
// <h2>Non-Greedy Loops</h2>
//
// <h3>Non-Greedy Closure: {@code (...)*?}</h3>
//
// <embed src="images/ClosureNonGreedy.svg" type="image/svg+xml"/>
//
// <h3>Non-Greedy Positive Closure: {@code (...)+?}</h3>
//
// <embed src="images/PositiveClosureNonGreedy.svg" type="image/svg+xml"/>
//
// <h3>Non-Greedy Optional: {@code (...)??}</h3>
//
// <embed src="images/OptionalNonGreedy.svg" type="image/svg+xml"/>
//

var INITIAL_NUM_TRANSITIONS = 4;

function ATNState() {
  // Which ATN are we in?
  this.atn = null;
  this.stateNumber = ATNState.INVALID_STATE_NUMBER;
  this.stateType = null;
  this.ruleIndex = 0; // at runtime, we don't have Rule objects
  this.epsilonOnlyTransitions = false;
  // Track the transitions emanating from this ATN state.
  this.transitions = [];
  // Used to cache lookahead during parsing, not used during construction
  this.nextTokenWithinRule = null;
  return this;
}

// constants for serialization
ATNState.INVALID_TYPE = 0;
ATNState.BASIC = 1;
ATNState.RULE_START = 2;
ATNState.BLOCK_START = 3;
ATNState.PLUS_BLOCK_START = 4;
ATNState.STAR_BLOCK_START = 5;
ATNState.TOKEN_START = 6;
ATNState.RULE_STOP = 7;
ATNState.BLOCK_END = 8;
ATNState.STAR_LOOP_BACK = 9;
ATNState.STAR_LOOP_ENTRY = 10;
ATNState.PLUS_LOOP_BACK = 11;
ATNState.LOOP_END = 12;

ATNState.serializationNames = ["INVALID", "BASIC", "RULE_START", "BLOCK_START", "PLUS_BLOCK_START", "STAR_BLOCK_START", "TOKEN_START", "RULE_STOP", "BLOCK_END", "STAR_LOOP_BACK", "STAR_LOOP_ENTRY", "PLUS_LOOP_BACK", "LOOP_END"];

ATNState.INVALID_STATE_NUMBER = -1;

ATNState.prototype.toString = function () {
  return this.stateNumber;
};

ATNState.prototype.equals = function (other) {
  if (other instanceof ATNState) {
    return this.stateNumber === other.stateNumber;
  } else {
    return false;
  }
};

ATNState.prototype.isNonGreedyExitState = function () {
  return false;
};

ATNState.prototype.addTransition = function (trans, index) {
  if (index === undefined) {
    index = -1;
  }
  if (this.transitions.length === 0) {
    this.epsilonOnlyTransitions = trans.isEpsilon;
  } else if (this.epsilonOnlyTransitions !== trans.isEpsilon) {
    this.epsilonOnlyTransitions = false;
  }
  if (index === -1) {
    this.transitions.push(trans);
  } else {
    this.transitions.splice(index, 1, trans);
  }
};

function BasicState() {
  ATNState.call(this);
  this.stateType = ATNState.BASIC;
  return this;
}

BasicState.prototype = Object.create(ATNState.prototype);
BasicState.prototype.constructor = BasicState;

function DecisionState() {
  ATNState.call(this);
  this.decision = -1;
  this.nonGreedy = false;
  return this;
}

DecisionState.prototype = Object.create(ATNState.prototype);
DecisionState.prototype.constructor = DecisionState;

//  The start of a regular {@code (...)} block.
function BlockStartState() {
  DecisionState.call(this);
  this.endState = null;
  return this;
}

BlockStartState.prototype = Object.create(DecisionState.prototype);
BlockStartState.prototype.constructor = BlockStartState;

function BasicBlockStartState() {
  BlockStartState.call(this);
  this.stateType = ATNState.BLOCK_START;
  return this;
}

BasicBlockStartState.prototype = Object.create(BlockStartState.prototype);
BasicBlockStartState.prototype.constructor = BasicBlockStartState;

// Terminal node of a simple {@code (a|b|c)} block.
function BlockEndState() {
  ATNState.call(this);
  this.stateType = ATNState.BLOCK_END;
  this.startState = null;
  return this;
}

BlockEndState.prototype = Object.create(ATNState.prototype);
BlockEndState.prototype.constructor = BlockEndState;

// The last node in the ATN for a rule, unless that rule is the start symbol.
//  In that case, there is one transition to EOF. Later, we might encode
//  references to all calls to this rule to compute FOLLOW sets for
//  error handling.
//
function RuleStopState() {
  ATNState.call(this);
  this.stateType = ATNState.RULE_STOP;
  return this;
}

RuleStopState.prototype = Object.create(ATNState.prototype);
RuleStopState.prototype.constructor = RuleStopState;

function RuleStartState() {
  ATNState.call(this);
  this.stateType = ATNState.RULE_START;
  this.stopState = null;
  this.isPrecedenceRule = false;
  return this;
}

RuleStartState.prototype = Object.create(ATNState.prototype);
RuleStartState.prototype.constructor = RuleStartState;

// Decision state for {@code A+} and {@code (A|B)+}.  It has two transitions:
//  one to the loop back to start of the block and one to exit.
//
function PlusLoopbackState() {
  DecisionState.call(this);
  this.stateType = ATNState.PLUS_LOOP_BACK;
  return this;
}

PlusLoopbackState.prototype = Object.create(DecisionState.prototype);
PlusLoopbackState.prototype.constructor = PlusLoopbackState;

// Start of {@code (A|B|...)+} loop. Technically a decision state, but
//  we don't use for code generation; somebody might need it, so I'm defining
//  it for completeness. In reality, the {@link PlusLoopbackState} node is the
//  real decision-making note for {@code A+}.
//
function PlusBlockStartState() {
  BlockStartState.call(this);
  this.stateType = ATNState.PLUS_BLOCK_START;
  this.loopBackState = null;
  return this;
}

PlusBlockStartState.prototype = Object.create(BlockStartState.prototype);
PlusBlockStartState.prototype.constructor = PlusBlockStartState;

// The block that begins a closure loop.
function StarBlockStartState() {
  BlockStartState.call(this);
  this.stateType = ATNState.STAR_BLOCK_START;
  return this;
}

StarBlockStartState.prototype = Object.create(BlockStartState.prototype);
StarBlockStartState.prototype.constructor = StarBlockStartState;

function StarLoopbackState() {
  ATNState.call(this);
  this.stateType = ATNState.STAR_LOOP_BACK;
  return this;
}

StarLoopbackState.prototype = Object.create(ATNState.prototype);
StarLoopbackState.prototype.constructor = StarLoopbackState;

function StarLoopEntryState() {
  DecisionState.call(this);
  this.stateType = ATNState.STAR_LOOP_ENTRY;
  this.loopBackState = null;
  // Indicates whether this state can benefit from a precedence DFA during SLL decision making.
  this.isPrecedenceDecision = null;
  return this;
}

StarLoopEntryState.prototype = Object.create(DecisionState.prototype);
StarLoopEntryState.prototype.constructor = StarLoopEntryState;

// Mark the end of a * or + loop.
function LoopEndState() {
  ATNState.call(this);
  this.stateType = ATNState.LOOP_END;
  this.loopBackState = null;
  return this;
}

LoopEndState.prototype = Object.create(ATNState.prototype);
LoopEndState.prototype.constructor = LoopEndState;

// The Tokens rule start state linking to each lexer rule start state */
function TokensStartState() {
  DecisionState.call(this);
  this.stateType = ATNState.TOKEN_START;
  return this;
}

TokensStartState.prototype = Object.create(DecisionState.prototype);
TokensStartState.prototype.constructor = TokensStartState;

exports.ATNState = ATNState;
exports.BasicState = BasicState;
exports.DecisionState = DecisionState;
exports.BlockStartState = BlockStartState;
exports.BlockEndState = BlockEndState;
exports.LoopEndState = LoopEndState;
exports.RuleStartState = RuleStartState;
exports.RuleStopState = RuleStopState;
exports.TokensStartState = TokensStartState;
exports.PlusLoopbackState = PlusLoopbackState;
exports.StarLoopbackState = StarLoopbackState;
exports.StarLoopEntryState = StarLoopEntryState;
exports.PlusBlockStartState = PlusBlockStartState;
exports.StarBlockStartState = StarBlockStartState;
exports.BasicBlockStartState = BasicBlockStartState;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
///

var RuleContext = __webpack_require__(15).RuleContext;
var Hash = __webpack_require__(0).Hash;

function PredictionContext(cachedHashCode) {
	this.cachedHashCode = cachedHashCode;
}

// Represents {@code $} in local context prediction, which means wildcard.
// {@code//+x =//}.
// /
PredictionContext.EMPTY = null;

// Represents {@code $} in an array in full context mode, when {@code $}
// doesn't mean wildcard: {@code $ + x = [$,x]}. Here,
// {@code $} = {@link //EMPTY_RETURN_STATE}.
// /
PredictionContext.EMPTY_RETURN_STATE = 0x7FFFFFFF;

PredictionContext.globalNodeCount = 1;
PredictionContext.id = PredictionContext.globalNodeCount;

// Stores the computed hash code of this {@link PredictionContext}. The hash
// code is computed in parts to match the following reference algorithm.
//
// <pre>
// private int referenceHashCode() {
// int hash = {@link MurmurHash//initialize MurmurHash.initialize}({@link
// //INITIAL_HASH});
//
// for (int i = 0; i &lt; {@link //size()}; i++) {
// hash = {@link MurmurHash//update MurmurHash.update}(hash, {@link //getParent
// getParent}(i));
// }
//
// for (int i = 0; i &lt; {@link //size()}; i++) {
// hash = {@link MurmurHash//update MurmurHash.update}(hash, {@link
// //getReturnState getReturnState}(i));
// }
//
// hash = {@link MurmurHash//finish MurmurHash.finish}(hash, 2// {@link
// //size()});
// return hash;
// }
// </pre>
// /

// This means only the {@link //EMPTY} context is in set.
PredictionContext.prototype.isEmpty = function () {
	return this === PredictionContext.EMPTY;
};

PredictionContext.prototype.hasEmptyPath = function () {
	return this.getReturnState(this.length - 1) === PredictionContext.EMPTY_RETURN_STATE;
};

PredictionContext.prototype.hashCode = function () {
	return this.cachedHashCode;
};

PredictionContext.prototype.updateHashCode = function (hash) {
	hash.update(this.cachedHashCode);
};
/*
function calculateHashString(parent, returnState) {
	return "" + parent + returnState;
}
*/

// Used to cache {@link PredictionContext} objects. Its used for the shared
// context cash associated with contexts in DFA states. This cache
// can be used for both lexers and parsers.

function PredictionContextCache() {
	this.cache = {};
	return this;
}

// Add a context to the cache and return it. If the context already exists,
// return that one instead and do not add a new context to the cache.
// Protect shared cache from unsafe thread access.
//
PredictionContextCache.prototype.add = function (ctx) {
	if (ctx === PredictionContext.EMPTY) {
		return PredictionContext.EMPTY;
	}
	var existing = this.cache[ctx] || null;
	if (existing !== null) {
		return existing;
	}
	this.cache[ctx] = ctx;
	return ctx;
};

PredictionContextCache.prototype.get = function (ctx) {
	return this.cache[ctx] || null;
};

Object.defineProperty(PredictionContextCache.prototype, "length", {
	get: function get() {
		return this.cache.length;
	}
});

function SingletonPredictionContext(parent, returnState) {
	var hashCode = 0;
	if (parent !== null) {
		var hash = new Hash();
		hash.update(parent, returnState);
		hashCode = hash.finish();
	}
	PredictionContext.call(this, hashCode);
	this.parentCtx = parent;
	this.returnState = returnState;
}

SingletonPredictionContext.prototype = Object.create(PredictionContext.prototype);
SingletonPredictionContext.prototype.contructor = SingletonPredictionContext;

SingletonPredictionContext.create = function (parent, returnState) {
	if (returnState === PredictionContext.EMPTY_RETURN_STATE && parent === null) {
		// someone can pass in the bits of an array ctx that mean $
		return PredictionContext.EMPTY;
	} else {
		return new SingletonPredictionContext(parent, returnState);
	}
};

Object.defineProperty(SingletonPredictionContext.prototype, "length", {
	get: function get() {
		return 1;
	}
});

SingletonPredictionContext.prototype.getParent = function (index) {
	return this.parentCtx;
};

SingletonPredictionContext.prototype.getReturnState = function (index) {
	return this.returnState;
};

SingletonPredictionContext.prototype.equals = function (other) {
	if (this === other) {
		return true;
	} else if (!(other instanceof SingletonPredictionContext)) {
		return false;
	} else if (this.hashCode() !== other.hashCode()) {
		return false; // can't be same if hash is different
	} else {
		if (this.returnState !== other.returnState) return false;else if (this.parentCtx == null) return other.parentCtx == null;else return this.parentCtx.equals(other.parentCtx);
	}
};

SingletonPredictionContext.prototype.toString = function () {
	var up = this.parentCtx === null ? "" : this.parentCtx.toString();
	if (up.length === 0) {
		if (this.returnState === PredictionContext.EMPTY_RETURN_STATE) {
			return "$";
		} else {
			return "" + this.returnState;
		}
	} else {
		return "" + this.returnState + " " + up;
	}
};

function EmptyPredictionContext() {
	SingletonPredictionContext.call(this, null, PredictionContext.EMPTY_RETURN_STATE);
	return this;
}

EmptyPredictionContext.prototype = Object.create(SingletonPredictionContext.prototype);
EmptyPredictionContext.prototype.constructor = EmptyPredictionContext;

EmptyPredictionContext.prototype.isEmpty = function () {
	return true;
};

EmptyPredictionContext.prototype.getParent = function (index) {
	return null;
};

EmptyPredictionContext.prototype.getReturnState = function (index) {
	return this.returnState;
};

EmptyPredictionContext.prototype.equals = function (other) {
	return this === other;
};

EmptyPredictionContext.prototype.toString = function () {
	return "$";
};

PredictionContext.EMPTY = new EmptyPredictionContext();

function ArrayPredictionContext(parents, returnStates) {
	// Parent can be null only if full ctx mode and we make an array
	// from {@link //EMPTY} and non-empty. We merge {@link //EMPTY} by using
	// null parent and
	// returnState == {@link //EMPTY_RETURN_STATE}.
	var h = new Hash();
	h.update(parents, returnStates);
	var hashCode = h.finish();
	PredictionContext.call(this, hashCode);
	this.parents = parents;
	this.returnStates = returnStates;
	return this;
}

ArrayPredictionContext.prototype = Object.create(PredictionContext.prototype);
ArrayPredictionContext.prototype.constructor = ArrayPredictionContext;

ArrayPredictionContext.prototype.isEmpty = function () {
	// since EMPTY_RETURN_STATE can only appear in the last position, we
	// don't need to verify that size==1
	return this.returnStates[0] === PredictionContext.EMPTY_RETURN_STATE;
};

Object.defineProperty(ArrayPredictionContext.prototype, "length", {
	get: function get() {
		return this.returnStates.length;
	}
});

ArrayPredictionContext.prototype.getParent = function (index) {
	return this.parents[index];
};

ArrayPredictionContext.prototype.getReturnState = function (index) {
	return this.returnStates[index];
};

ArrayPredictionContext.prototype.equals = function (other) {
	if (this === other) {
		return true;
	} else if (!(other instanceof ArrayPredictionContext)) {
		return false;
	} else if (this.hashCode() !== other.hashCode()) {
		return false; // can't be same if hash is different
	} else {
		return this.returnStates === other.returnStates && this.parents === other.parents;
	}
};

ArrayPredictionContext.prototype.toString = function () {
	if (this.isEmpty()) {
		return "[]";
	} else {
		var s = "[";
		for (var i = 0; i < this.returnStates.length; i++) {
			if (i > 0) {
				s = s + ", ";
			}
			if (this.returnStates[i] === PredictionContext.EMPTY_RETURN_STATE) {
				s = s + "$";
				continue;
			}
			s = s + this.returnStates[i];
			if (this.parents[i] !== null) {
				s = s + " " + this.parents[i];
			} else {
				s = s + "null";
			}
		}
		return s + "]";
	}
};

// Convert a {@link RuleContext} tree to a {@link PredictionContext} graph.
// Return {@link //EMPTY} if {@code outerContext} is empty or null.
// /
function predictionContextFromRuleContext(atn, outerContext) {
	if (outerContext === undefined || outerContext === null) {
		outerContext = RuleContext.EMPTY;
	}
	// if we are in RuleContext of start rule, s, then PredictionContext
	// is EMPTY. Nobody called us. (if we are empty, return empty)
	if (outerContext.parentCtx === null || outerContext === RuleContext.EMPTY) {
		return PredictionContext.EMPTY;
	}
	// If we have a parent, convert it to a PredictionContext graph
	var parent = predictionContextFromRuleContext(atn, outerContext.parentCtx);
	var state = atn.states[outerContext.invokingState];
	var transition = state.transitions[0];
	return SingletonPredictionContext.create(parent, transition.followState.stateNumber);
}
/*
function calculateListsHashString(parents, returnStates) {
	var s = "";
	parents.map(function(p) {
		s = s + p;
	});
	returnStates.map(function(r) {
		s = s + r;
	});
	return s;
}
*/
function merge(a, b, rootIsWildcard, mergeCache) {
	// share same graph if both same
	if (a === b) {
		return a;
	}
	if (a instanceof SingletonPredictionContext && b instanceof SingletonPredictionContext) {
		return mergeSingletons(a, b, rootIsWildcard, mergeCache);
	}
	// At least one of a or b is array
	// If one is $ and rootIsWildcard, return $ as// wildcard
	if (rootIsWildcard) {
		if (a instanceof EmptyPredictionContext) {
			return a;
		}
		if (b instanceof EmptyPredictionContext) {
			return b;
		}
	}
	// convert singleton so both are arrays to normalize
	if (a instanceof SingletonPredictionContext) {
		a = new ArrayPredictionContext([a.getParent()], [a.returnState]);
	}
	if (b instanceof SingletonPredictionContext) {
		b = new ArrayPredictionContext([b.getParent()], [b.returnState]);
	}
	return mergeArrays(a, b, rootIsWildcard, mergeCache);
}

//
// Merge two {@link SingletonPredictionContext} instances.
//
// <p>Stack tops equal, parents merge is same; return left graph.<br>
// <embed src="images/SingletonMerge_SameRootSamePar.svg"
// type="image/svg+xml"/></p>
//
// <p>Same stack top, parents differ; merge parents giving array node, then
// remainders of those graphs. A new root node is created to point to the
// merged parents.<br>
// <embed src="images/SingletonMerge_SameRootDiffPar.svg"
// type="image/svg+xml"/></p>
//
// <p>Different stack tops pointing to same parent. Make array node for the
// root where both element in the root point to the same (original)
// parent.<br>
// <embed src="images/SingletonMerge_DiffRootSamePar.svg"
// type="image/svg+xml"/></p>
//
// <p>Different stack tops pointing to different parents. Make array node for
// the root where each element points to the corresponding original
// parent.<br>
// <embed src="images/SingletonMerge_DiffRootDiffPar.svg"
// type="image/svg+xml"/></p>
//
// @param a the first {@link SingletonPredictionContext}
// @param b the second {@link SingletonPredictionContext}
// @param rootIsWildcard {@code true} if this is a local-context merge,
// otherwise false to indicate a full-context merge
// @param mergeCache
// /
function mergeSingletons(a, b, rootIsWildcard, mergeCache) {
	if (mergeCache !== null) {
		var previous = mergeCache.get(a, b);
		if (previous !== null) {
			return previous;
		}
		previous = mergeCache.get(b, a);
		if (previous !== null) {
			return previous;
		}
	}

	var rootMerge = mergeRoot(a, b, rootIsWildcard);
	if (rootMerge !== null) {
		if (mergeCache !== null) {
			mergeCache.set(a, b, rootMerge);
		}
		return rootMerge;
	}
	if (a.returnState === b.returnState) {
		var parent = merge(a.parentCtx, b.parentCtx, rootIsWildcard, mergeCache);
		// if parent is same as existing a or b parent or reduced to a parent,
		// return it
		if (parent === a.parentCtx) {
			return a; // ax + bx = ax, if a=b
		}
		if (parent === b.parentCtx) {
			return b; // ax + bx = bx, if a=b
		}
		// else: ax + ay = a'[x,y]
		// merge parents x and y, giving array node with x,y then remainders
		// of those graphs. dup a, a' points at merged array
		// new joined parent so create new singleton pointing to it, a'
		var spc = SingletonPredictionContext.create(parent, a.returnState);
		if (mergeCache !== null) {
			mergeCache.set(a, b, spc);
		}
		return spc;
	} else {
		// a != b payloads differ
		// see if we can collapse parents due to $+x parents if local ctx
		var singleParent = null;
		if (a === b || a.parentCtx !== null && a.parentCtx === b.parentCtx) {
			// ax +
			// bx =
			// [a,b]x
			singleParent = a.parentCtx;
		}
		if (singleParent !== null) {
			// parents are same
			// sort payloads and use same parent
			var payloads = [a.returnState, b.returnState];
			if (a.returnState > b.returnState) {
				payloads[0] = b.returnState;
				payloads[1] = a.returnState;
			}
			var parents = [singleParent, singleParent];
			var apc = new ArrayPredictionContext(parents, payloads);
			if (mergeCache !== null) {
				mergeCache.set(a, b, apc);
			}
			return apc;
		}
		// parents differ and can't merge them. Just pack together
		// into array; can't merge.
		// ax + by = [ax,by]
		var payloads = [a.returnState, b.returnState];
		var parents = [a.parentCtx, b.parentCtx];
		if (a.returnState > b.returnState) {
			// sort by payload
			payloads[0] = b.returnState;
			payloads[1] = a.returnState;
			parents = [b.parentCtx, a.parentCtx];
		}
		var a_ = new ArrayPredictionContext(parents, payloads);
		if (mergeCache !== null) {
			mergeCache.set(a, b, a_);
		}
		return a_;
	}
}

//
// Handle case where at least one of {@code a} or {@code b} is
// {@link //EMPTY}. In the following diagrams, the symbol {@code $} is used
// to represent {@link //EMPTY}.
//
// <h2>Local-Context Merges</h2>
//
// <p>These local-context merge operations are used when {@code rootIsWildcard}
// is true.</p>
//
// <p>{@link //EMPTY} is superset of any graph; return {@link //EMPTY}.<br>
// <embed src="images/LocalMerge_EmptyRoot.svg" type="image/svg+xml"/></p>
//
// <p>{@link //EMPTY} and anything is {@code //EMPTY}, so merged parent is
// {@code //EMPTY}; return left graph.<br>
// <embed src="images/LocalMerge_EmptyParent.svg" type="image/svg+xml"/></p>
//
// <p>Special case of last merge if local context.<br>
// <embed src="images/LocalMerge_DiffRoots.svg" type="image/svg+xml"/></p>
//
// <h2>Full-Context Merges</h2>
//
// <p>These full-context merge operations are used when {@code rootIsWildcard}
// is false.</p>
//
// <p><embed src="images/FullMerge_EmptyRoots.svg" type="image/svg+xml"/></p>
//
// <p>Must keep all contexts; {@link //EMPTY} in array is a special value (and
// null parent).<br>
// <embed src="images/FullMerge_EmptyRoot.svg" type="image/svg+xml"/></p>
//
// <p><embed src="images/FullMerge_SameRoot.svg" type="image/svg+xml"/></p>
//
// @param a the first {@link SingletonPredictionContext}
// @param b the second {@link SingletonPredictionContext}
// @param rootIsWildcard {@code true} if this is a local-context merge,
// otherwise false to indicate a full-context merge
// /
function mergeRoot(a, b, rootIsWildcard) {
	if (rootIsWildcard) {
		if (a === PredictionContext.EMPTY) {
			return PredictionContext.EMPTY; // // + b =//
		}
		if (b === PredictionContext.EMPTY) {
			return PredictionContext.EMPTY; // a +// =//
		}
	} else {
		if (a === PredictionContext.EMPTY && b === PredictionContext.EMPTY) {
			return PredictionContext.EMPTY; // $ + $ = $
		} else if (a === PredictionContext.EMPTY) {
			// $ + x = [$,x]
			var payloads = [b.returnState, PredictionContext.EMPTY_RETURN_STATE];
			var parents = [b.parentCtx, null];
			return new ArrayPredictionContext(parents, payloads);
		} else if (b === PredictionContext.EMPTY) {
			// x + $ = [$,x] ($ is always first if present)
			var payloads = [a.returnState, PredictionContext.EMPTY_RETURN_STATE];
			var parents = [a.parentCtx, null];
			return new ArrayPredictionContext(parents, payloads);
		}
	}
	return null;
}

//
// Merge two {@link ArrayPredictionContext} instances.
//
// <p>Different tops, different parents.<br>
// <embed src="images/ArrayMerge_DiffTopDiffPar.svg" type="image/svg+xml"/></p>
//
// <p>Shared top, same parents.<br>
// <embed src="images/ArrayMerge_ShareTopSamePar.svg" type="image/svg+xml"/></p>
//
// <p>Shared top, different parents.<br>
// <embed src="images/ArrayMerge_ShareTopDiffPar.svg" type="image/svg+xml"/></p>
//
// <p>Shared top, all shared parents.<br>
// <embed src="images/ArrayMerge_ShareTopSharePar.svg"
// type="image/svg+xml"/></p>
//
// <p>Equal tops, merge parents and reduce top to
// {@link SingletonPredictionContext}.<br>
// <embed src="images/ArrayMerge_EqualTop.svg" type="image/svg+xml"/></p>
// /
function mergeArrays(a, b, rootIsWildcard, mergeCache) {
	if (mergeCache !== null) {
		var previous = mergeCache.get(a, b);
		if (previous !== null) {
			return previous;
		}
		previous = mergeCache.get(b, a);
		if (previous !== null) {
			return previous;
		}
	}
	// merge sorted payloads a + b => M
	var i = 0; // walks a
	var j = 0; // walks b
	var k = 0; // walks target M array

	var mergedReturnStates = [];
	var mergedParents = [];
	// walk and merge to yield mergedParents, mergedReturnStates
	while (i < a.returnStates.length && j < b.returnStates.length) {
		var a_parent = a.parents[i];
		var b_parent = b.parents[j];
		if (a.returnStates[i] === b.returnStates[j]) {
			// same payload (stack tops are equal), must yield merged singleton
			var payload = a.returnStates[i];
			// $+$ = $
			var bothDollars = payload === PredictionContext.EMPTY_RETURN_STATE && a_parent === null && b_parent === null;
			var ax_ax = a_parent !== null && b_parent !== null && a_parent === b_parent; // ax+ax
			// ->
			// ax
			if (bothDollars || ax_ax) {
				mergedParents[k] = a_parent; // choose left
				mergedReturnStates[k] = payload;
			} else {
				// ax+ay -> a'[x,y]
				var mergedParent = merge(a_parent, b_parent, rootIsWildcard, mergeCache);
				mergedParents[k] = mergedParent;
				mergedReturnStates[k] = payload;
			}
			i += 1; // hop over left one as usual
			j += 1; // but also skip one in right side since we merge
		} else if (a.returnStates[i] < b.returnStates[j]) {
			// copy a[i] to M
			mergedParents[k] = a_parent;
			mergedReturnStates[k] = a.returnStates[i];
			i += 1;
		} else {
			// b > a, copy b[j] to M
			mergedParents[k] = b_parent;
			mergedReturnStates[k] = b.returnStates[j];
			j += 1;
		}
		k += 1;
	}
	// copy over any payloads remaining in either array
	if (i < a.returnStates.length) {
		for (var p = i; p < a.returnStates.length; p++) {
			mergedParents[k] = a.parents[p];
			mergedReturnStates[k] = a.returnStates[p];
			k += 1;
		}
	} else {
		for (var p = j; p < b.returnStates.length; p++) {
			mergedParents[k] = b.parents[p];
			mergedReturnStates[k] = b.returnStates[p];
			k += 1;
		}
	}
	// trim merged if we combined a few that had same stack tops
	if (k < mergedParents.length) {
		// write index < last position; trim
		if (k === 1) {
			// for just one merged element, return singleton top
			var a_ = SingletonPredictionContext.create(mergedParents[0], mergedReturnStates[0]);
			if (mergeCache !== null) {
				mergeCache.set(a, b, a_);
			}
			return a_;
		}
		mergedParents = mergedParents.slice(0, k);
		mergedReturnStates = mergedReturnStates.slice(0, k);
	}

	var M = new ArrayPredictionContext(mergedParents, mergedReturnStates);

	// if we created same array as a or b, return that instead
	// TODO: track whether this is possible above during merge sort for speed
	if (M === a) {
		if (mergeCache !== null) {
			mergeCache.set(a, b, a);
		}
		return a;
	}
	if (M === b) {
		if (mergeCache !== null) {
			mergeCache.set(a, b, b);
		}
		return b;
	}
	combineCommonParents(mergedParents);

	if (mergeCache !== null) {
		mergeCache.set(a, b, M);
	}
	return M;
}

//
// Make pass over all <em>M</em> {@code parents}; merge any {@code equals()}
// ones.
// /
function combineCommonParents(parents) {
	var uniqueParents = {};

	for (var p = 0; p < parents.length; p++) {
		var parent = parents[p];
		if (!(parent in uniqueParents)) {
			uniqueParents[parent] = parent;
		}
	}
	for (var q = 0; q < parents.length; q++) {
		parents[q] = uniqueParents[parents[q]];
	}
}

function getCachedPredictionContext(context, contextCache, visited) {
	if (context.isEmpty()) {
		return context;
	}
	var existing = visited[context] || null;
	if (existing !== null) {
		return existing;
	}
	existing = contextCache.get(context);
	if (existing !== null) {
		visited[context] = existing;
		return existing;
	}
	var changed = false;
	var parents = [];
	for (var i = 0; i < parents.length; i++) {
		var parent = getCachedPredictionContext(context.getParent(i), contextCache, visited);
		if (changed || parent !== context.getParent(i)) {
			if (!changed) {
				parents = [];
				for (var j = 0; j < context.length; j++) {
					parents[j] = context.getParent(j);
				}
				changed = true;
			}
			parents[i] = parent;
		}
	}
	if (!changed) {
		contextCache.add(context);
		visited[context] = context;
		return context;
	}
	var updated = null;
	if (parents.length === 0) {
		updated = PredictionContext.EMPTY;
	} else if (parents.length === 1) {
		updated = SingletonPredictionContext.create(parents[0], context.getReturnState(0));
	} else {
		updated = new ArrayPredictionContext(parents, context.returnStates);
	}
	contextCache.add(updated);
	visited[updated] = updated;
	visited[context] = updated;

	return updated;
}

// ter's recursive version of Sam's getAllNodes()
function getAllContextNodes(context, nodes, visited) {
	if (nodes === null) {
		nodes = [];
		return getAllContextNodes(context, nodes, visited);
	} else if (visited === null) {
		visited = {};
		return getAllContextNodes(context, nodes, visited);
	} else {
		if (context === null || visited[context] !== null) {
			return nodes;
		}
		visited[context] = context;
		nodes.push(context);
		for (var i = 0; i < context.length; i++) {
			getAllContextNodes(context.getParent(i), nodes, visited);
		}
		return nodes;
	}
}

exports.merge = merge;
exports.PredictionContext = PredictionContext;
exports.PredictionContextCache = PredictionContextCache;
exports.SingletonPredictionContext = SingletonPredictionContext;
exports.predictionContextFromRuleContext = predictionContextFromRuleContext;
exports.getCachedPredictionContext = getCachedPredictionContext;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
//

//  An ATN transition between any two ATN states.  Subclasses define
//  atom, set, epsilon, action, predicate, rule transitions.
//
//  <p>This is a one way link.  It emanates from a state (usually via a list of
//  transitions) and has a target state.</p>
//
//  <p>Since we never have to change the ATN transitions once we construct it,
//  we can fix these transitions as specific classes. The DFA transitions
//  on the other hand need to update the labels as it adds transitions to
//  the states. We'll use the term Edge for the DFA to distinguish them from
//  ATN transitions.</p>

var Token = __webpack_require__(1).Token;
var Interval = __webpack_require__(2).Interval;
var IntervalSet = __webpack_require__(2).IntervalSet;
var Predicate = __webpack_require__(10).Predicate;
var PrecedencePredicate = __webpack_require__(10).PrecedencePredicate;

function Transition(target) {
  // The target of this transition.
  if (target === undefined || target === null) {
    throw "target cannot be null.";
  }
  this.target = target;
  // Are we epsilon, action, sempred?
  this.isEpsilon = false;
  this.label = null;
  return this;
}
// constants for serialization
Transition.EPSILON = 1;
Transition.RANGE = 2;
Transition.RULE = 3;
Transition.PREDICATE = 4; // e.g., {isType(input.LT(1))}?
Transition.ATOM = 5;
Transition.ACTION = 6;
Transition.SET = 7; // ~(A|B) or ~atom, wildcard, which convert to next 2
Transition.NOT_SET = 8;
Transition.WILDCARD = 9;
Transition.PRECEDENCE = 10;

Transition.serializationNames = ["INVALID", "EPSILON", "RANGE", "RULE", "PREDICATE", "ATOM", "ACTION", "SET", "NOT_SET", "WILDCARD", "PRECEDENCE"];

Transition.serializationTypes = {
  EpsilonTransition: Transition.EPSILON,
  RangeTransition: Transition.RANGE,
  RuleTransition: Transition.RULE,
  PredicateTransition: Transition.PREDICATE,
  AtomTransition: Transition.ATOM,
  ActionTransition: Transition.ACTION,
  SetTransition: Transition.SET,
  NotSetTransition: Transition.NOT_SET,
  WildcardTransition: Transition.WILDCARD,
  PrecedencePredicateTransition: Transition.PRECEDENCE
};

// TODO: make all transitions sets? no, should remove set edges
function AtomTransition(target, label) {
  Transition.call(this, target);
  this.label_ = label; // The token type or character value; or, signifies special label.
  this.label = this.makeLabel();
  this.serializationType = Transition.ATOM;
  return this;
}

AtomTransition.prototype = Object.create(Transition.prototype);
AtomTransition.prototype.constructor = AtomTransition;

AtomTransition.prototype.makeLabel = function () {
  var s = new IntervalSet();
  s.addOne(this.label_);
  return s;
};

AtomTransition.prototype.matches = function (symbol, minVocabSymbol, maxVocabSymbol) {
  return this.label_ === symbol;
};

AtomTransition.prototype.toString = function () {
  return this.label_;
};

function RuleTransition(ruleStart, ruleIndex, precedence, followState) {
  Transition.call(this, ruleStart);
  this.ruleIndex = ruleIndex; // ptr to the rule definition object for this rule ref
  this.precedence = precedence;
  this.followState = followState; // what node to begin computations following ref to rule
  this.serializationType = Transition.RULE;
  this.isEpsilon = true;
  return this;
}

RuleTransition.prototype = Object.create(Transition.prototype);
RuleTransition.prototype.constructor = RuleTransition;

RuleTransition.prototype.matches = function (symbol, minVocabSymbol, maxVocabSymbol) {
  return false;
};

function EpsilonTransition(target, outermostPrecedenceReturn) {
  Transition.call(this, target);
  this.serializationType = Transition.EPSILON;
  this.isEpsilon = true;
  this.outermostPrecedenceReturn = outermostPrecedenceReturn;
  return this;
}

EpsilonTransition.prototype = Object.create(Transition.prototype);
EpsilonTransition.prototype.constructor = EpsilonTransition;

EpsilonTransition.prototype.matches = function (symbol, minVocabSymbol, maxVocabSymbol) {
  return false;
};

EpsilonTransition.prototype.toString = function () {
  return "epsilon";
};

function RangeTransition(target, start, stop) {
  Transition.call(this, target);
  this.serializationType = Transition.RANGE;
  this.start = start;
  this.stop = stop;
  this.label = this.makeLabel();
  return this;
}

RangeTransition.prototype = Object.create(Transition.prototype);
RangeTransition.prototype.constructor = RangeTransition;

RangeTransition.prototype.makeLabel = function () {
  var s = new IntervalSet();
  s.addRange(this.start, this.stop);
  return s;
};

RangeTransition.prototype.matches = function (symbol, minVocabSymbol, maxVocabSymbol) {
  return symbol >= this.start && symbol <= this.stop;
};

RangeTransition.prototype.toString = function () {
  return "'" + String.fromCharCode(this.start) + "'..'" + String.fromCharCode(this.stop) + "'";
};

function AbstractPredicateTransition(target) {
  Transition.call(this, target);
  return this;
}

AbstractPredicateTransition.prototype = Object.create(Transition.prototype);
AbstractPredicateTransition.prototype.constructor = AbstractPredicateTransition;

function PredicateTransition(target, ruleIndex, predIndex, isCtxDependent) {
  AbstractPredicateTransition.call(this, target);
  this.serializationType = Transition.PREDICATE;
  this.ruleIndex = ruleIndex;
  this.predIndex = predIndex;
  this.isCtxDependent = isCtxDependent; // e.g., $i ref in pred
  this.isEpsilon = true;
  return this;
}

PredicateTransition.prototype = Object.create(AbstractPredicateTransition.prototype);
PredicateTransition.prototype.constructor = PredicateTransition;

PredicateTransition.prototype.matches = function (symbol, minVocabSymbol, maxVocabSymbol) {
  return false;
};

PredicateTransition.prototype.getPredicate = function () {
  return new Predicate(this.ruleIndex, this.predIndex, this.isCtxDependent);
};

PredicateTransition.prototype.toString = function () {
  return "pred_" + this.ruleIndex + ":" + this.predIndex;
};

function ActionTransition(target, ruleIndex, actionIndex, isCtxDependent) {
  Transition.call(this, target);
  this.serializationType = Transition.ACTION;
  this.ruleIndex = ruleIndex;
  this.actionIndex = actionIndex === undefined ? -1 : actionIndex;
  this.isCtxDependent = isCtxDependent === undefined ? false : isCtxDependent; // e.g., $i ref in pred
  this.isEpsilon = true;
  return this;
}

ActionTransition.prototype = Object.create(Transition.prototype);
ActionTransition.prototype.constructor = ActionTransition;

ActionTransition.prototype.matches = function (symbol, minVocabSymbol, maxVocabSymbol) {
  return false;
};

ActionTransition.prototype.toString = function () {
  return "action_" + this.ruleIndex + ":" + this.actionIndex;
};

// A transition containing a set of values.
function SetTransition(target, set) {
  Transition.call(this, target);
  this.serializationType = Transition.SET;
  if (set !== undefined && set !== null) {
    this.label = set;
  } else {
    this.label = new IntervalSet();
    this.label.addOne(Token.INVALID_TYPE);
  }
  return this;
}

SetTransition.prototype = Object.create(Transition.prototype);
SetTransition.prototype.constructor = SetTransition;

SetTransition.prototype.matches = function (symbol, minVocabSymbol, maxVocabSymbol) {
  return this.label.contains(symbol);
};

SetTransition.prototype.toString = function () {
  return this.label.toString();
};

function NotSetTransition(target, set) {
  SetTransition.call(this, target, set);
  this.serializationType = Transition.NOT_SET;
  return this;
}

NotSetTransition.prototype = Object.create(SetTransition.prototype);
NotSetTransition.prototype.constructor = NotSetTransition;

NotSetTransition.prototype.matches = function (symbol, minVocabSymbol, maxVocabSymbol) {
  return symbol >= minVocabSymbol && symbol <= maxVocabSymbol && !SetTransition.prototype.matches.call(this, symbol, minVocabSymbol, maxVocabSymbol);
};

NotSetTransition.prototype.toString = function () {
  return '~' + SetTransition.prototype.toString.call(this);
};

function WildcardTransition(target) {
  Transition.call(this, target);
  this.serializationType = Transition.WILDCARD;
  return this;
}

WildcardTransition.prototype = Object.create(Transition.prototype);
WildcardTransition.prototype.constructor = WildcardTransition;

WildcardTransition.prototype.matches = function (symbol, minVocabSymbol, maxVocabSymbol) {
  return symbol >= minVocabSymbol && symbol <= maxVocabSymbol;
};

WildcardTransition.prototype.toString = function () {
  return ".";
};

function PrecedencePredicateTransition(target, precedence) {
  AbstractPredicateTransition.call(this, target);
  this.serializationType = Transition.PRECEDENCE;
  this.precedence = precedence;
  this.isEpsilon = true;
  return this;
}

PrecedencePredicateTransition.prototype = Object.create(AbstractPredicateTransition.prototype);
PrecedencePredicateTransition.prototype.constructor = PrecedencePredicateTransition;

PrecedencePredicateTransition.prototype.matches = function (symbol, minVocabSymbol, maxVocabSymbol) {
  return false;
};

PrecedencePredicateTransition.prototype.getPredicate = function () {
  return new PrecedencePredicate(this.precedence);
};

PrecedencePredicateTransition.prototype.toString = function () {
  return this.precedence + " >= _p";
};

exports.Transition = Transition;
exports.AtomTransition = AtomTransition;
exports.SetTransition = SetTransition;
exports.NotSetTransition = NotSetTransition;
exports.RuleTransition = RuleTransition;
exports.ActionTransition = ActionTransition;
exports.EpsilonTransition = EpsilonTransition;
exports.RangeTransition = RangeTransition;
exports.WildcardTransition = WildcardTransition;
exports.PredicateTransition = PredicateTransition;
exports.PrecedencePredicateTransition = PrecedencePredicateTransition;
exports.AbstractPredicateTransition = AbstractPredicateTransition;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

var LL1Analyzer = __webpack_require__(56).LL1Analyzer;
var IntervalSet = __webpack_require__(2).IntervalSet;

function ATN(grammarType, maxTokenType) {

    // Used for runtime deserialization of ATNs from strings///
    // The type of the ATN.
    this.grammarType = grammarType;
    // The maximum value for any symbol recognized by a transition in the ATN.
    this.maxTokenType = maxTokenType;
    this.states = [];
    // Each subrule/rule is a decision point and we must track them so we
    //  can go back later and build DFA predictors for them.  This includes
    //  all the rules, subrules, optional blocks, ()+, ()* etc...
    this.decisionToState = [];
    // Maps from rule index to starting state number.
    this.ruleToStartState = [];
    // Maps from rule index to stop state number.
    this.ruleToStopState = null;
    this.modeNameToStartState = {};
    // For lexer ATNs, this maps the rule index to the resulting token type.
    // For parser ATNs, this maps the rule index to the generated bypass token
    // type if the
    // {@link ATNDeserializationOptions//isGenerateRuleBypassTransitions}
    // deserialization option was specified; otherwise, this is {@code null}.
    this.ruleToTokenType = null;
    // For lexer ATNs, this is an array of {@link LexerAction} objects which may
    // be referenced by action transitions in the ATN.
    this.lexerActions = null;
    this.modeToStartState = [];

    return this;
}

// Compute the set of valid tokens that can occur starting in state {@code s}.
//  If {@code ctx} is null, the set of tokens will not include what can follow
//  the rule surrounding {@code s}. In other words, the set will be
//  restricted to tokens reachable staying within {@code s}'s rule.
ATN.prototype.nextTokensInContext = function (s, ctx) {
    var anal = new LL1Analyzer(this);
    return anal.LOOK(s, null, ctx);
};

// Compute the set of valid tokens that can occur starting in {@code s} and
// staying in same rule. {@link Token//EPSILON} is in set if we reach end of
// rule.
ATN.prototype.nextTokensNoContext = function (s) {
    if (s.nextTokenWithinRule !== null) {
        return s.nextTokenWithinRule;
    }
    s.nextTokenWithinRule = this.nextTokensInContext(s, null);
    s.nextTokenWithinRule.readOnly = true;
    return s.nextTokenWithinRule;
};

ATN.prototype.nextTokens = function (s, ctx) {
    if (ctx === undefined) {
        return this.nextTokensNoContext(s);
    } else {
        return this.nextTokensInContext(s, ctx);
    }
};

ATN.prototype.addState = function (state) {
    if (state !== null) {
        state.atn = this;
        state.stateNumber = this.states.length;
    }
    this.states.push(state);
};

ATN.prototype.removeState = function (state) {
    this.states[state.stateNumber] = null; // just free mem, don't shift states in list
};

ATN.prototype.defineDecisionState = function (s) {
    this.decisionToState.push(s);
    s.decision = this.decisionToState.length - 1;
    return s.decision;
};

ATN.prototype.getDecisionState = function (decision) {
    if (this.decisionToState.length === 0) {
        return null;
    } else {
        return this.decisionToState[decision];
    }
};

// Computes the set of input symbols which could follow ATN state number
// {@code stateNumber} in the specified full {@code context}. This method
// considers the complete parser context, but does not evaluate semantic
// predicates (i.e. all predicates encountered during the calculation are
// assumed true). If a path in the ATN exists from the starting state to the
// {@link RuleStopState} of the outermost context without matching any
// symbols, {@link Token//EOF} is added to the returned set.
//
// <p>If {@code context} is {@code null}, it is treated as
// {@link ParserRuleContext//EMPTY}.</p>
//
// @param stateNumber the ATN state number
// @param context the full parse context
// @return The set of potentially valid input symbols which could follow the
// specified state in the specified context.
// @throws IllegalArgumentException if the ATN does not contain a state with
// number {@code stateNumber}
var Token = __webpack_require__(1).Token;

ATN.prototype.getExpectedTokens = function (stateNumber, ctx) {
    if (stateNumber < 0 || stateNumber >= this.states.length) {
        throw "Invalid state number.";
    }
    var s = this.states[stateNumber];
    var following = this.nextTokens(s);
    if (!following.contains(Token.EPSILON)) {
        return following;
    }
    var expected = new IntervalSet();
    expected.addSet(following);
    expected.removeOne(Token.EPSILON);
    while (ctx !== null && ctx.invokingState >= 0 && following.contains(Token.EPSILON)) {
        var invokingState = this.states[ctx.invokingState];
        var rt = invokingState.transitions[0];
        following = this.nextTokens(rt.followState);
        expected.addSet(following);
        expected.removeOne(Token.EPSILON);
        ctx = ctx.parentCtx;
    }
    if (following.contains(Token.EPSILON)) {
        expected.addOne(Token.EOF);
    }
    return expected;
};

ATN.INVALID_ALT_NUMBER = 0;

exports.ATN = ATN;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

//
// Specialized {@link Set}{@code <}{@link ATNConfig}{@code >} that can track
// info about the set, with support for combining similar configurations using a
// graph-structured stack.
///

var ATN = __webpack_require__(8).ATN;
var Utils = __webpack_require__(0);
var Hash = Utils.Hash;
var Set = Utils.Set;
var SemanticContext = __webpack_require__(10).SemanticContext;
var merge = __webpack_require__(6).merge;

function hashATNConfig(c) {
	return c.hashCodeForConfigSet();
}

function equalATNConfigs(a, b) {
	if (a === b) {
		return true;
	} else if (a === null || b === null) {
		return false;
	} else return a.equalsForConfigSet(b);
}

function ATNConfigSet(fullCtx) {
	//
	// The reason that we need this is because we don't want the hash map to use
	// the standard hash code and equals. We need all configurations with the
	// same
	// {@code (s,i,_,semctx)} to be equal. Unfortunately, this key effectively
	// doubles
	// the number of objects associated with ATNConfigs. The other solution is
	// to
	// use a hash table that lets us specify the equals/hashcode operation.
	// All configs but hashed by (s, i, _, pi) not including context. Wiped out
	// when we go readonly as this set becomes a DFA state.
	this.configLookup = new Set(hashATNConfig, equalATNConfigs);
	// Indicates that this configuration set is part of a full context
	// LL prediction. It will be used to determine how to merge $. With SLL
	// it's a wildcard whereas it is not for LL context merge.
	this.fullCtx = fullCtx === undefined ? true : fullCtx;
	// Indicates that the set of configurations is read-only. Do not
	// allow any code to manipulate the set; DFA states will point at
	// the sets and they must not change. This does not protect the other
	// fields; in particular, conflictingAlts is set after
	// we've made this readonly.
	this.readOnly = false;
	// Track the elements as they are added to the set; supports get(i)///
	this.configs = [];

	// TODO: these fields make me pretty uncomfortable but nice to pack up info
	// together, saves recomputation
	// TODO: can we track conflicts as they are added to save scanning configs
	// later?
	this.uniqueAlt = 0;
	this.conflictingAlts = null;

	// Used in parser and lexer. In lexer, it indicates we hit a pred
	// while computing a closure operation. Don't make a DFA state from this.
	this.hasSemanticContext = false;
	this.dipsIntoOuterContext = false;

	this.cachedHashCode = -1;

	return this;
}

// Adding a new config means merging contexts with existing configs for
// {@code (s, i, pi, _)}, where {@code s} is the
// {@link ATNConfig//state}, {@code i} is the {@link ATNConfig//alt}, and
// {@code pi} is the {@link ATNConfig//semanticContext}. We use
// {@code (s,i,pi)} as key.
//
// <p>This method updates {@link //dipsIntoOuterContext} and
// {@link //hasSemanticContext} when necessary.</p>
// /
ATNConfigSet.prototype.add = function (config, mergeCache) {
	if (mergeCache === undefined) {
		mergeCache = null;
	}
	if (this.readOnly) {
		throw "This set is readonly";
	}
	if (config.semanticContext !== SemanticContext.NONE) {
		this.hasSemanticContext = true;
	}
	if (config.reachesIntoOuterContext > 0) {
		this.dipsIntoOuterContext = true;
	}
	var existing = this.configLookup.add(config);
	if (existing === config) {
		this.cachedHashCode = -1;
		this.configs.push(config); // track order here
		return true;
	}
	// a previous (s,i,pi,_), merge with it and save result
	var rootIsWildcard = !this.fullCtx;
	var merged = merge(existing.context, config.context, rootIsWildcard, mergeCache);
	// no need to check for existing.context, config.context in cache
	// since only way to create new graphs is "call rule" and here. We
	// cache at both places.
	existing.reachesIntoOuterContext = Math.max(existing.reachesIntoOuterContext, config.reachesIntoOuterContext);
	// make sure to preserve the precedence filter suppression during the merge
	if (config.precedenceFilterSuppressed) {
		existing.precedenceFilterSuppressed = true;
	}
	existing.context = merged; // replace context; no need to alt mapping
	return true;
};

ATNConfigSet.prototype.getStates = function () {
	var states = new Set();
	for (var i = 0; i < this.configs.length; i++) {
		states.add(this.configs[i].state);
	}
	return states;
};

ATNConfigSet.prototype.getPredicates = function () {
	var preds = [];
	for (var i = 0; i < this.configs.length; i++) {
		var c = this.configs[i].semanticContext;
		if (c !== SemanticContext.NONE) {
			preds.push(c.semanticContext);
		}
	}
	return preds;
};

Object.defineProperty(ATNConfigSet.prototype, "items", {
	get: function get() {
		return this.configs;
	}
});

ATNConfigSet.prototype.optimizeConfigs = function (interpreter) {
	if (this.readOnly) {
		throw "This set is readonly";
	}
	if (this.configLookup.length === 0) {
		return;
	}
	for (var i = 0; i < this.configs.length; i++) {
		var config = this.configs[i];
		config.context = interpreter.getCachedContext(config.context);
	}
};

ATNConfigSet.prototype.addAll = function (coll) {
	for (var i = 0; i < coll.length; i++) {
		this.add(coll[i]);
	}
	return false;
};

ATNConfigSet.prototype.equals = function (other) {
	return this === other || other instanceof ATNConfigSet && Utils.equalArrays(this.configs, other.configs) && this.fullCtx === other.fullCtx && this.uniqueAlt === other.uniqueAlt && this.conflictingAlts === other.conflictingAlts && this.hasSemanticContext === other.hasSemanticContext && this.dipsIntoOuterContext === other.dipsIntoOuterContext;
};

ATNConfigSet.prototype.hashCode = function () {
	var hash = new Hash();
	this.updateHashCode(hash);
	return hash.finish();
};

ATNConfigSet.prototype.updateHashCode = function (hash) {
	if (this.readOnly) {
		if (this.cachedHashCode === -1) {
			var hash = new Hash();
			hash.update(this.configs);
			this.cachedHashCode = hash.finish();
		}
		hash.update(this.cachedHashCode);
	} else {
		hash.update(this.configs);
	}
};

Object.defineProperty(ATNConfigSet.prototype, "length", {
	get: function get() {
		return this.configs.length;
	}
});

ATNConfigSet.prototype.isEmpty = function () {
	return this.configs.length === 0;
};

ATNConfigSet.prototype.contains = function (item) {
	if (this.configLookup === null) {
		throw "This method is not implemented for readonly sets.";
	}
	return this.configLookup.contains(item);
};

ATNConfigSet.prototype.containsFast = function (item) {
	if (this.configLookup === null) {
		throw "This method is not implemented for readonly sets.";
	}
	return this.configLookup.containsFast(item);
};

ATNConfigSet.prototype.clear = function () {
	if (this.readOnly) {
		throw "This set is readonly";
	}
	this.configs = [];
	this.cachedHashCode = -1;
	this.configLookup = new Set();
};

ATNConfigSet.prototype.setReadonly = function (readOnly) {
	this.readOnly = readOnly;
	if (readOnly) {
		this.configLookup = null; // can't mod, no need for lookup cache
	}
};

ATNConfigSet.prototype.toString = function () {
	return Utils.arrayToString(this.configs) + (this.hasSemanticContext ? ",hasSemanticContext=" + this.hasSemanticContext : "") + (this.uniqueAlt !== ATN.INVALID_ALT_NUMBER ? ",uniqueAlt=" + this.uniqueAlt : "") + (this.conflictingAlts !== null ? ",conflictingAlts=" + this.conflictingAlts : "") + (this.dipsIntoOuterContext ? ",dipsIntoOuterContext" : "");
};

function OrderedATNConfigSet() {
	ATNConfigSet.call(this);
	this.configLookup = new Set();
	return this;
}

OrderedATNConfigSet.prototype = Object.create(ATNConfigSet.prototype);
OrderedATNConfigSet.prototype.constructor = OrderedATNConfigSet;

exports.ATNConfigSet = ATNConfigSet;
exports.OrderedATNConfigSet = OrderedATNConfigSet;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
//

// A tree structure used to record the semantic context in which
//  an ATN configuration is valid.  It's either a single predicate,
//  a conjunction {@code p1&&p2}, or a sum of products {@code p1||p2}.
//
//  <p>I have scoped the {@link AND}, {@link OR}, and {@link Predicate} subclasses of
//  {@link SemanticContext} within the scope of this outer class.</p>
//

var Set = __webpack_require__(0).Set;
var Hash = __webpack_require__(0).Hash;

function SemanticContext() {
	return this;
}

SemanticContext.prototype.hashCode = function () {
	var hash = new Hash();
	this.updateHashCode(hash);
	return hash.finish();
};

// For context independent predicates, we evaluate them without a local
// context (i.e., null context). That way, we can evaluate them without
// having to create proper rule-specific context during prediction (as
// opposed to the parser, which creates them naturally). In a practical
// sense, this avoids a cast exception from RuleContext to myruleContext.
//
// <p>For context dependent predicates, we must pass in a local context so that
// references such as $arg evaluate properly as _localctx.arg. We only
// capture context dependent predicates in the context in which we begin
// prediction, so we passed in the outer context here in case of context
// dependent predicate evaluation.</p>
//
SemanticContext.prototype.evaluate = function (parser, outerContext) {};

//
// Evaluate the precedence predicates for the context and reduce the result.
//
// @param parser The parser instance.
// @param outerContext The current parser context object.
// @return The simplified semantic context after precedence predicates are
// evaluated, which will be one of the following values.
// <ul>
// <li>{@link //NONE}: if the predicate simplifies to {@code true} after
// precedence predicates are evaluated.</li>
// <li>{@code null}: if the predicate simplifies to {@code false} after
// precedence predicates are evaluated.</li>
// <li>{@code this}: if the semantic context is not changed as a result of
// precedence predicate evaluation.</li>
// <li>A non-{@code null} {@link SemanticContext}: the new simplified
// semantic context after precedence predicates are evaluated.</li>
// </ul>
//
SemanticContext.prototype.evalPrecedence = function (parser, outerContext) {
	return this;
};

SemanticContext.andContext = function (a, b) {
	if (a === null || a === SemanticContext.NONE) {
		return b;
	}
	if (b === null || b === SemanticContext.NONE) {
		return a;
	}
	var result = new AND(a, b);
	if (result.opnds.length === 1) {
		return result.opnds[0];
	} else {
		return result;
	}
};

SemanticContext.orContext = function (a, b) {
	if (a === null) {
		return b;
	}
	if (b === null) {
		return a;
	}
	if (a === SemanticContext.NONE || b === SemanticContext.NONE) {
		return SemanticContext.NONE;
	}
	var result = new OR(a, b);
	if (result.opnds.length === 1) {
		return result.opnds[0];
	} else {
		return result;
	}
};

function Predicate(ruleIndex, predIndex, isCtxDependent) {
	SemanticContext.call(this);
	this.ruleIndex = ruleIndex === undefined ? -1 : ruleIndex;
	this.predIndex = predIndex === undefined ? -1 : predIndex;
	this.isCtxDependent = isCtxDependent === undefined ? false : isCtxDependent; // e.g., $i ref in pred
	return this;
}

Predicate.prototype = Object.create(SemanticContext.prototype);
Predicate.prototype.constructor = Predicate;

//The default {@link SemanticContext}, which is semantically equivalent to
//a predicate of the form {@code {true}?}.
//
SemanticContext.NONE = new Predicate();

Predicate.prototype.evaluate = function (parser, outerContext) {
	var localctx = this.isCtxDependent ? outerContext : null;
	return parser.sempred(localctx, this.ruleIndex, this.predIndex);
};

Predicate.prototype.updateHashCode = function (hash) {
	hash.update(this.ruleIndex, this.predIndex, this.isCtxDependent);
};

Predicate.prototype.equals = function (other) {
	if (this === other) {
		return true;
	} else if (!(other instanceof Predicate)) {
		return false;
	} else {
		return this.ruleIndex === other.ruleIndex && this.predIndex === other.predIndex && this.isCtxDependent === other.isCtxDependent;
	}
};

Predicate.prototype.toString = function () {
	return "{" + this.ruleIndex + ":" + this.predIndex + "}?";
};

function PrecedencePredicate(precedence) {
	SemanticContext.call(this);
	this.precedence = precedence === undefined ? 0 : precedence;
}

PrecedencePredicate.prototype = Object.create(SemanticContext.prototype);
PrecedencePredicate.prototype.constructor = PrecedencePredicate;

PrecedencePredicate.prototype.evaluate = function (parser, outerContext) {
	return parser.precpred(outerContext, this.precedence);
};

PrecedencePredicate.prototype.evalPrecedence = function (parser, outerContext) {
	if (parser.precpred(outerContext, this.precedence)) {
		return SemanticContext.NONE;
	} else {
		return null;
	}
};

PrecedencePredicate.prototype.compareTo = function (other) {
	return this.precedence - other.precedence;
};

PrecedencePredicate.prototype.updateHashCode = function (hash) {
	hash.update(31);
};

PrecedencePredicate.prototype.equals = function (other) {
	if (this === other) {
		return true;
	} else if (!(other instanceof PrecedencePredicate)) {
		return false;
	} else {
		return this.precedence === other.precedence;
	}
};

PrecedencePredicate.prototype.toString = function () {
	return "{" + this.precedence + ">=prec}?";
};

PrecedencePredicate.filterPrecedencePredicates = function (set) {
	var result = [];
	set.values().map(function (context) {
		if (context instanceof PrecedencePredicate) {
			result.push(context);
		}
	});
	return result;
};

// A semantic context which is true whenever none of the contained contexts
// is false.
//
function AND(a, b) {
	SemanticContext.call(this);
	var operands = new Set();
	if (a instanceof AND) {
		a.opnds.map(function (o) {
			operands.add(o);
		});
	} else {
		operands.add(a);
	}
	if (b instanceof AND) {
		b.opnds.map(function (o) {
			operands.add(o);
		});
	} else {
		operands.add(b);
	}
	var precedencePredicates = PrecedencePredicate.filterPrecedencePredicates(operands);
	if (precedencePredicates.length > 0) {
		// interested in the transition with the lowest precedence
		var reduced = null;
		precedencePredicates.map(function (p) {
			if (reduced === null || p.precedence < reduced.precedence) {
				reduced = p;
			}
		});
		operands.add(reduced);
	}
	this.opnds = operands.values();
	return this;
}

AND.prototype = Object.create(SemanticContext.prototype);
AND.prototype.constructor = AND;

AND.prototype.equals = function (other) {
	if (this === other) {
		return true;
	} else if (!(other instanceof AND)) {
		return false;
	} else {
		return this.opnds === other.opnds;
	}
};

AND.prototype.updateHashCode = function (hash) {
	hash.update(this.opnds, "AND");
};
//
// {@inheritDoc}
//
// <p>
// The evaluation of predicates by this context is short-circuiting, but
// unordered.</p>
//
AND.prototype.evaluate = function (parser, outerContext) {
	for (var i = 0; i < this.opnds.length; i++) {
		if (!this.opnds[i].evaluate(parser, outerContext)) {
			return false;
		}
	}
	return true;
};

AND.prototype.evalPrecedence = function (parser, outerContext) {
	var differs = false;
	var operands = [];
	for (var i = 0; i < this.opnds.length; i++) {
		var context = this.opnds[i];
		var evaluated = context.evalPrecedence(parser, outerContext);
		differs |= evaluated !== context;
		if (evaluated === null) {
			// The AND context is false if any element is false
			return null;
		} else if (evaluated !== SemanticContext.NONE) {
			// Reduce the result by skipping true elements
			operands.push(evaluated);
		}
	}
	if (!differs) {
		return this;
	}
	if (operands.length === 0) {
		// all elements were true, so the AND context is true
		return SemanticContext.NONE;
	}
	var result = null;
	operands.map(function (o) {
		result = result === null ? o : SemanticContext.andContext(result, o);
	});
	return result;
};

AND.prototype.toString = function () {
	var s = "";
	this.opnds.map(function (o) {
		s += "&& " + o.toString();
	});
	return s.length > 3 ? s.slice(3) : s;
};

//
// A semantic context which is true whenever at least one of the contained
// contexts is true.
//
function OR(a, b) {
	SemanticContext.call(this);
	var operands = new Set();
	if (a instanceof OR) {
		a.opnds.map(function (o) {
			operands.add(o);
		});
	} else {
		operands.add(a);
	}
	if (b instanceof OR) {
		b.opnds.map(function (o) {
			operands.add(o);
		});
	} else {
		operands.add(b);
	}

	var precedencePredicates = PrecedencePredicate.filterPrecedencePredicates(operands);
	if (precedencePredicates.length > 0) {
		// interested in the transition with the highest precedence
		var s = precedencePredicates.sort(function (a, b) {
			return a.compareTo(b);
		});
		var reduced = s[s.length - 1];
		operands.add(reduced);
	}
	this.opnds = operands.values();
	return this;
}

OR.prototype = Object.create(SemanticContext.prototype);
OR.prototype.constructor = OR;

OR.prototype.constructor = function (other) {
	if (this === other) {
		return true;
	} else if (!(other instanceof OR)) {
		return false;
	} else {
		return this.opnds === other.opnds;
	}
};

OR.prototype.updateHashCode = function (hash) {
	hash.update(this.opnds, "OR");
};

// <p>
// The evaluation of predicates by this context is short-circuiting, but
// unordered.</p>
//
OR.prototype.evaluate = function (parser, outerContext) {
	for (var i = 0; i < this.opnds.length; i++) {
		if (this.opnds[i].evaluate(parser, outerContext)) {
			return true;
		}
	}
	return false;
};

OR.prototype.evalPrecedence = function (parser, outerContext) {
	var differs = false;
	var operands = [];
	for (var i = 0; i < this.opnds.length; i++) {
		var context = this.opnds[i];
		var evaluated = context.evalPrecedence(parser, outerContext);
		differs |= evaluated !== context;
		if (evaluated === SemanticContext.NONE) {
			// The OR context is true if any element is true
			return SemanticContext.NONE;
		} else if (evaluated !== null) {
			// Reduce the result by skipping false elements
			operands.push(evaluated);
		}
	}
	if (!differs) {
		return this;
	}
	if (operands.length === 0) {
		// all elements were false, so the OR context is false
		return null;
	}
	var result = null;
	operands.map(function (o) {
		return result === null ? o : SemanticContext.orContext(result, o);
	});
	return result;
};

OR.prototype.toString = function () {
	var s = "";
	this.opnds.map(function (o) {
		s += "|| " + o.toString();
	});
	return s.length > 3 ? s.slice(3) : s;
};

exports.SemanticContext = SemanticContext;
exports.PrecedencePredicate = PrecedencePredicate;
exports.Predicate = Predicate;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
///

var ATNConfigSet = __webpack_require__(9).ATNConfigSet;
var Utils = __webpack_require__(0);
var Hash = Utils.Hash;
var Set = Utils.Set;

// Map a predicate to a predicted alternative.///

function PredPrediction(pred, alt) {
	this.alt = alt;
	this.pred = pred;
	return this;
}

PredPrediction.prototype.toString = function () {
	return "(" + this.pred + ", " + this.alt + ")";
};

// A DFA state represents a set of possible ATN configurations.
// As Aho, Sethi, Ullman p. 117 says "The DFA uses its state
// to keep track of all possible states the ATN can be in after
// reading each input symbol. That is to say, after reading
// input a1a2..an, the DFA is in a state that represents the
// subset T of the states of the ATN that are reachable from the
// ATN's start state along some path labeled a1a2..an."
// In conventional NFA&rarr;DFA conversion, therefore, the subset T
// would be a bitset representing the set of states the
// ATN could be in. We need to track the alt predicted by each
// state as well, however. More importantly, we need to maintain
// a stack of states, tracking the closure operations as they
// jump from rule to rule, emulating rule invocations (method calls).
// I have to add a stack to simulate the proper lookahead sequences for
// the underlying LL grammar from which the ATN was derived.
//
// <p>I use a set of ATNConfig objects not simple states. An ATNConfig
// is both a state (ala normal conversion) and a RuleContext describing
// the chain of rules (if any) followed to arrive at that state.</p>
//
// <p>A DFA state may have multiple references to a particular state,
// but with different ATN contexts (with same or different alts)
// meaning that state was reached via a different set of rule invocations.</p>
// /

function DFAState(stateNumber, configs) {
	if (stateNumber === null) {
		stateNumber = -1;
	}
	if (configs === null) {
		configs = new ATNConfigSet();
	}
	this.stateNumber = stateNumber;
	this.configs = configs;
	// {@code edges[symbol]} points to target of symbol. Shift up by 1 so (-1)
	// {@link Token//EOF} maps to {@code edges[0]}.
	this.edges = null;
	this.isAcceptState = false;
	// if accept state, what ttype do we match or alt do we predict?
	// This is set to {@link ATN//INVALID_ALT_NUMBER} when {@link
	// //predicates}{@code !=null} or
	// {@link //requiresFullContext}.
	this.prediction = 0;
	this.lexerActionExecutor = null;
	// Indicates that this state was created during SLL prediction that
	// discovered a conflict between the configurations in the state. Future
	// {@link ParserATNSimulator//execATN} invocations immediately jumped doing
	// full context prediction if this field is true.
	this.requiresFullContext = false;
	// During SLL parsing, this is a list of predicates associated with the
	// ATN configurations of the DFA state. When we have predicates,
	// {@link //requiresFullContext} is {@code false} since full context
	// prediction evaluates predicates
	// on-the-fly. If this is not null, then {@link //prediction} is
	// {@link ATN//INVALID_ALT_NUMBER}.
	//
	// <p>We only use these for non-{@link //requiresFullContext} but
	// conflicting states. That
	// means we know from the context (it's $ or we don't dip into outer
	// context) that it's an ambiguity not a conflict.</p>
	//
	// <p>This list is computed by {@link
	// ParserATNSimulator//predicateDFAState}.</p>
	this.predicates = null;
	return this;
}

// Get the set of all alts mentioned by all ATN configurations in this
// DFA state.
DFAState.prototype.getAltSet = function () {
	var alts = new Set();
	if (this.configs !== null) {
		for (var i = 0; i < this.configs.length; i++) {
			var c = this.configs[i];
			alts.add(c.alt);
		}
	}
	if (alts.length === 0) {
		return null;
	} else {
		return alts;
	}
};

// Two {@link DFAState} instances are equal if their ATN configuration sets
// are the same. This method is used to see if a state already exists.
//
// <p>Because the number of alternatives and number of ATN configurations are
// finite, there is a finite number of DFA states that can be processed.
// This is necessary to show that the algorithm terminates.</p>
//
// <p>Cannot test the DFA state numbers here because in
// {@link ParserATNSimulator//addDFAState} we need to know if any other state
// exists that has this exact set of ATN configurations. The
// {@link //stateNumber} is irrelevant.</p>
DFAState.prototype.equals = function (other) {
	// compare set of ATN configurations in this set with other
	return this === other || other instanceof DFAState && this.configs.equals(other.configs);
};

DFAState.prototype.toString = function () {
	var s = "" + this.stateNumber + ":" + this.configs;
	if (this.isAcceptState) {
		s = s + "=>";
		if (this.predicates !== null) s = s + this.predicates;else s = s + this.prediction;
	}
	return s;
};

DFAState.prototype.hashCode = function () {
	var hash = new Hash();
	hash.update(this.configs);
	if (this.isAcceptState) {
		if (this.predicates !== null) hash.update(this.predicates);else hash.update(this.prediction);
	}
	return hash.finish();
};

exports.DFAState = DFAState;
exports.PredPrediction = PredPrediction;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

// Provides an empty default implementation of {@link ANTLRErrorListener}. The
// default implementation of each method does nothing, but can be overridden as
// necessary.

function ErrorListener() {
  return this;
}

ErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {};

ErrorListener.prototype.reportAmbiguity = function (recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {};

ErrorListener.prototype.reportAttemptingFullContext = function (recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {};

ErrorListener.prototype.reportContextSensitivity = function (recognizer, dfa, startIndex, stopIndex, prediction, configs) {};

function ConsoleErrorListener() {
  ErrorListener.call(this);
  return this;
}

ConsoleErrorListener.prototype = Object.create(ErrorListener.prototype);
ConsoleErrorListener.prototype.constructor = ConsoleErrorListener;

//
// Provides a default instance of {@link ConsoleErrorListener}.
//
ConsoleErrorListener.INSTANCE = new ConsoleErrorListener();

//
// {@inheritDoc}
//
// <p>
// This implementation prints messages to {@link System//err} containing the
// values of {@code line}, {@code charPositionInLine}, and {@code msg} using
// the following format.</p>
//
// <pre>
// line <em>line</em>:<em>charPositionInLine</em> <em>msg</em>
// </pre>
//
ConsoleErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {
  console.error("line " + line + ":" + column + " " + msg);
};

function ProxyErrorListener(delegates) {
  ErrorListener.call(this);
  if (delegates === null) {
    throw "delegates";
  }
  this.delegates = delegates;
  return this;
}

ProxyErrorListener.prototype = Object.create(ErrorListener.prototype);
ProxyErrorListener.prototype.constructor = ProxyErrorListener;

ProxyErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {
  this.delegates.map(function (d) {
    d.syntaxError(recognizer, offendingSymbol, line, column, msg, e);
  });
};

ProxyErrorListener.prototype.reportAmbiguity = function (recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
  this.delegates.map(function (d) {
    d.reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs);
  });
};

ProxyErrorListener.prototype.reportAttemptingFullContext = function (recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
  this.delegates.map(function (d) {
    d.reportAttemptingFullContext(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs);
  });
};

ProxyErrorListener.prototype.reportContextSensitivity = function (recognizer, dfa, startIndex, stopIndex, prediction, configs) {
  this.delegates.map(function (d) {
    d.reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, prediction, configs);
  });
};

exports.ErrorListener = ErrorListener;
exports.ConsoleErrorListener = ConsoleErrorListener;
exports.ProxyErrorListener = ProxyErrorListener;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
//

var Token = __webpack_require__(1).Token;
__webpack_require__(25);
__webpack_require__(26);

// Vacuum all input from a string and then treat it like a buffer.

function _loadString(stream, decodeToUnicodeCodePoints) {
	stream._index = 0;
	stream.data = [];
	if (stream.decodeToUnicodeCodePoints) {
		for (var i = 0; i < stream.strdata.length;) {
			var codePoint = stream.strdata.codePointAt(i);
			stream.data.push(codePoint);
			i += codePoint <= 0xFFFF ? 1 : 2;
		}
	} else {
		for (var i = 0; i < stream.strdata.length; i++) {
			var codeUnit = stream.strdata.charCodeAt(i);
			stream.data.push(codeUnit);
		}
	}
	stream._size = stream.data.length;
}

// If decodeToUnicodeCodePoints is true, the input is treated
// as a series of Unicode code points.
//
// Otherwise, the input is treated as a series of 16-bit UTF-16 code
// units.
function InputStream(data, decodeToUnicodeCodePoints) {
	this.name = "<empty>";
	this.strdata = data;
	this.decodeToUnicodeCodePoints = decodeToUnicodeCodePoints || false;
	_loadString(this);
	return this;
}

Object.defineProperty(InputStream.prototype, "index", {
	get: function get() {
		return this._index;
	}
});

Object.defineProperty(InputStream.prototype, "size", {
	get: function get() {
		return this._size;
	}
});

// Reset the stream so that it's in the same state it was
// when the object was created *except* the data array is not
// touched.
//
InputStream.prototype.reset = function () {
	this._index = 0;
};

InputStream.prototype.consume = function () {
	if (this._index >= this._size) {
		// assert this.LA(1) == Token.EOF
		throw "cannot consume EOF";
	}
	this._index += 1;
};

InputStream.prototype.LA = function (offset) {
	if (offset === 0) {
		return 0; // undefined
	}
	if (offset < 0) {
		offset += 1; // e.g., translate LA(-1) to use offset=0
	}
	var pos = this._index + offset - 1;
	if (pos < 0 || pos >= this._size) {
		// invalid
		return Token.EOF;
	}
	return this.data[pos];
};

InputStream.prototype.LT = function (offset) {
	return this.LA(offset);
};

// mark/release do nothing; we have entire buffer
InputStream.prototype.mark = function () {
	return -1;
};

InputStream.prototype.release = function (marker) {};

// consume() ahead until p==_index; can't just set p=_index as we must
// update line and column. If we seek backwards, just set p
//
InputStream.prototype.seek = function (_index) {
	if (_index <= this._index) {
		this._index = _index; // just jump; don't update stream state (line,
		// ...)
		return;
	}
	// seek forward
	this._index = Math.min(_index, this._size);
};

InputStream.prototype.getText = function (start, stop) {
	if (stop >= this._size) {
		stop = this._size - 1;
	}
	if (start >= this._size) {
		return "";
	} else {
		if (this.decodeToUnicodeCodePoints) {
			var result = "";
			for (var i = start; i <= stop; i++) {
				result += String.fromCodePoint(this.data[i]);
			}
			return result;
		} else {
			return this.strdata.slice(start, stop + 1);
		}
	}
};

InputStream.prototype.toString = function () {
	return this.strdata;
};

exports.InputStream = InputStream;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
///

// A lexer is recognizer that draws input symbols from a character stream.
//  lexer grammars result in a subclass of this object. A Lexer object
//  uses simplified match() and error recovery mechanisms in the interest of speed.

var Token = __webpack_require__(1).Token;
var Recognizer = __webpack_require__(28).Recognizer;
var CommonTokenFactory = __webpack_require__(55).CommonTokenFactory;
var RecognitionException = __webpack_require__(3).RecognitionException;
var LexerNoViableAltException = __webpack_require__(3).LexerNoViableAltException;

function TokenSource() {
	return this;
}

function Lexer(input) {
	Recognizer.call(this);
	this._input = input;
	this._factory = CommonTokenFactory.DEFAULT;
	this._tokenFactorySourcePair = [this, input];

	this._interp = null; // child classes must populate this

	// The goal of all lexer rules/methods is to create a token object.
	// this is an instance variable as multiple rules may collaborate to
	// create a single token. nextToken will return this object after
	// matching lexer rule(s). If you subclass to allow multiple token
	// emissions, then set this to the last token to be matched or
	// something nonnull so that the auto token emit mechanism will not
	// emit another token.
	this._token = null;

	// What character index in the stream did the current token start at?
	// Needed, for example, to get the text for current token. Set at
	// the start of nextToken.
	this._tokenStartCharIndex = -1;

	// The line on which the first character of the token resides///
	this._tokenStartLine = -1;

	// The character position of first character within the line///
	this._tokenStartColumn = -1;

	// Once we see EOF on char stream, next token will be EOF.
	// If you have DONE : EOF ; then you see DONE EOF.
	this._hitEOF = false;

	// The channel number for the current token///
	this._channel = Token.DEFAULT_CHANNEL;

	// The token type for the current token///
	this._type = Token.INVALID_TYPE;

	this._modeStack = [];
	this._mode = Lexer.DEFAULT_MODE;

	// You can set the text for the current token to override what is in
	// the input char buffer. Use setText() or can set this instance var.
	// /
	this._text = null;

	return this;
}

Lexer.prototype = Object.create(Recognizer.prototype);
Lexer.prototype.constructor = Lexer;

Lexer.DEFAULT_MODE = 0;
Lexer.MORE = -2;
Lexer.SKIP = -3;

Lexer.DEFAULT_TOKEN_CHANNEL = Token.DEFAULT_CHANNEL;
Lexer.HIDDEN = Token.HIDDEN_CHANNEL;
Lexer.MIN_CHAR_VALUE = 0x0000;
Lexer.MAX_CHAR_VALUE = 0x10FFFF;

Lexer.prototype.reset = function () {
	// wack Lexer state variables
	if (this._input !== null) {
		this._input.seek(0); // rewind the input
	}
	this._token = null;
	this._type = Token.INVALID_TYPE;
	this._channel = Token.DEFAULT_CHANNEL;
	this._tokenStartCharIndex = -1;
	this._tokenStartColumn = -1;
	this._tokenStartLine = -1;
	this._text = null;

	this._hitEOF = false;
	this._mode = Lexer.DEFAULT_MODE;
	this._modeStack = [];

	this._interp.reset();
};

// Return a token from this source; i.e., match a token on the char stream.
Lexer.prototype.nextToken = function () {
	if (this._input === null) {
		throw "nextToken requires a non-null input stream.";
	}

	// Mark start location in char stream so unbuffered streams are
	// guaranteed at least have text of current token
	var tokenStartMarker = this._input.mark();
	try {
		while (true) {
			if (this._hitEOF) {
				this.emitEOF();
				return this._token;
			}
			this._token = null;
			this._channel = Token.DEFAULT_CHANNEL;
			this._tokenStartCharIndex = this._input.index;
			this._tokenStartColumn = this._interp.column;
			this._tokenStartLine = this._interp.line;
			this._text = null;
			var continueOuter = false;
			while (true) {
				this._type = Token.INVALID_TYPE;
				var ttype = Lexer.SKIP;
				try {
					ttype = this._interp.match(this._input, this._mode);
				} catch (e) {
					if (e instanceof RecognitionException) {
						this.notifyListeners(e); // report error
						this.recover(e);
					} else {
						console.log(e.stack);
						throw e;
					}
				}
				if (this._input.LA(1) === Token.EOF) {
					this._hitEOF = true;
				}
				if (this._type === Token.INVALID_TYPE) {
					this._type = ttype;
				}
				if (this._type === Lexer.SKIP) {
					continueOuter = true;
					break;
				}
				if (this._type !== Lexer.MORE) {
					break;
				}
			}
			if (continueOuter) {
				continue;
			}
			if (this._token === null) {
				this.emit();
			}
			return this._token;
		}
	} finally {
		// make sure we release marker after match or
		// unbuffered char stream will keep buffering
		this._input.release(tokenStartMarker);
	}
};

// Instruct the lexer to skip creating a token for current lexer rule
// and look for another token. nextToken() knows to keep looking when
// a lexer rule finishes with token set to SKIP_TOKEN. Recall that
// if token==null at end of any token rule, it creates one for you
// and emits it.
// /
Lexer.prototype.skip = function () {
	this._type = Lexer.SKIP;
};

Lexer.prototype.more = function () {
	this._type = Lexer.MORE;
};

Lexer.prototype.mode = function (m) {
	this._mode = m;
};

Lexer.prototype.pushMode = function (m) {
	if (this._interp.debug) {
		console.log("pushMode " + m);
	}
	this._modeStack.push(this._mode);
	this.mode(m);
};

Lexer.prototype.popMode = function () {
	if (this._modeStack.length === 0) {
		throw "Empty Stack";
	}
	if (this._interp.debug) {
		console.log("popMode back to " + this._modeStack.slice(0, -1));
	}
	this.mode(this._modeStack.pop());
	return this._mode;
};

// Set the char stream and reset the lexer
Object.defineProperty(Lexer.prototype, "inputStream", {
	get: function get() {
		return this._input;
	},
	set: function set(input) {
		this._input = null;
		this._tokenFactorySourcePair = [this, this._input];
		this.reset();
		this._input = input;
		this._tokenFactorySourcePair = [this, this._input];
	}
});

Object.defineProperty(Lexer.prototype, "sourceName", {
	get: function sourceName() {
		return this._input.sourceName;
	}
});

// By default does not support multiple emits per nextToken invocation
// for efficiency reasons. Subclass and override this method, nextToken,
// and getToken (to push tokens into a list and pull from that list
// rather than a single variable as this implementation does).
// /
Lexer.prototype.emitToken = function (token) {
	this._token = token;
};

// The standard method called to automatically emit a token at the
// outermost lexical rule. The token object should point into the
// char buffer start..stop. If there is a text override in 'text',
// use that to set the token's text. Override this method to emit
// custom Token objects or provide a new factory.
// /
Lexer.prototype.emit = function () {
	var t = this._factory.create(this._tokenFactorySourcePair, this._type, this._text, this._channel, this._tokenStartCharIndex, this.getCharIndex() - 1, this._tokenStartLine, this._tokenStartColumn);
	this.emitToken(t);
	return t;
};

Lexer.prototype.emitEOF = function () {
	var cpos = this.column;
	var lpos = this.line;
	var eof = this._factory.create(this._tokenFactorySourcePair, Token.EOF, null, Token.DEFAULT_CHANNEL, this._input.index, this._input.index - 1, lpos, cpos);
	this.emitToken(eof);
	return eof;
};

Object.defineProperty(Lexer.prototype, "type", {
	get: function get() {
		return this.type;
	},
	set: function set(type) {
		this._type = type;
	}
});

Object.defineProperty(Lexer.prototype, "line", {
	get: function get() {
		return this._interp.line;
	},
	set: function set(line) {
		this._interp.line = line;
	}
});

Object.defineProperty(Lexer.prototype, "column", {
	get: function get() {
		return this._interp.column;
	},
	set: function set(column) {
		this._interp.column = column;
	}
});

// What is the index of the current character of lookahead?///
Lexer.prototype.getCharIndex = function () {
	return this._input.index;
};

// Return the text matched so far for the current token or any text override.
//Set the complete text of this token; it wipes any previous changes to the text.
Object.defineProperty(Lexer.prototype, "text", {
	get: function get() {
		if (this._text !== null) {
			return this._text;
		} else {
			return this._interp.getText(this._input);
		}
	},
	set: function set(text) {
		this._text = text;
	}
});
// Return a list of all Token objects in input char stream.
// Forces load of all tokens. Does not include EOF token.
// /
Lexer.prototype.getAllTokens = function () {
	var tokens = [];
	var t = this.nextToken();
	while (t.type !== Token.EOF) {
		tokens.push(t);
		t = this.nextToken();
	}
	return tokens;
};

Lexer.prototype.notifyListeners = function (e) {
	var start = this._tokenStartCharIndex;
	var stop = this._input.index;
	var text = this._input.getText(start, stop);
	var msg = "token recognition error at: '" + this.getErrorDisplay(text) + "'";
	var listener = this.getErrorListenerDispatch();
	listener.syntaxError(this, null, this._tokenStartLine, this._tokenStartColumn, msg, e);
};

Lexer.prototype.getErrorDisplay = function (s) {
	var d = [];
	for (var i = 0; i < s.length; i++) {
		d.push(s[i]);
	}
	return d.join('');
};

Lexer.prototype.getErrorDisplayForChar = function (c) {
	if (c.charCodeAt(0) === Token.EOF) {
		return "<EOF>";
	} else if (c === '\n') {
		return "\\n";
	} else if (c === '\t') {
		return "\\t";
	} else if (c === '\r') {
		return "\\r";
	} else {
		return c;
	}
};

Lexer.prototype.getCharErrorDisplay = function (c) {
	return "'" + this.getErrorDisplayForChar(c) + "'";
};

// Lexers can normally match any char in it's vocabulary after matching
// a token, so do the easy thing and just kill a character and hope
// it all works out. You can instead use the rule invocation stack
// to do sophisticated error recovery if you are in a fragment rule.
// /
Lexer.prototype.recover = function (re) {
	if (this._input.LA(1) !== Token.EOF) {
		if (re instanceof LexerNoViableAltException) {
			// skip a char and try again
			this._interp.consume(this._input);
		} else {
			// TODO: Do we lose character or line position information?
			this._input.consume();
		}
	}
};

exports.Lexer = Lexer;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
///

//  A rule context is a record of a single rule invocation. It knows
//  which context invoked it, if any. If there is no parent context, then
//  naturally the invoking state is not valid.  The parent link
//  provides a chain upwards from the current rule invocation to the root
//  of the invocation tree, forming a stack. We actually carry no
//  information about the rule associated with this context (except
//  when parsing). We keep only the state number of the invoking state from
//  the ATN submachine that invoked this. Contrast this with the s
//  pointer inside ParserRuleContext that tracks the current state
//  being "executed" for the current rule.
//
//  The parent contexts are useful for computing lookahead sets and
//  getting error information.
//
//  These objects are used during parsing and prediction.
//  For the special case of parsers, we use the subclass
//  ParserRuleContext.
//
//  @see ParserRuleContext
///

var RuleNode = __webpack_require__(4).RuleNode;
var INVALID_INTERVAL = __webpack_require__(4).INVALID_INTERVAL;
var INVALID_ALT_NUMBER = __webpack_require__(8).INVALID_ALT_NUMBER;

function RuleContext(parent, invokingState) {
	RuleNode.call(this);
	// What context invoked this rule?
	this.parentCtx = parent || null;
	// What state invoked the rule associated with this context?
	// The "return address" is the followState of invokingState
	// If parent is null, this should be -1.
	this.invokingState = invokingState || -1;
	return this;
}

RuleContext.prototype = Object.create(RuleNode.prototype);
RuleContext.prototype.constructor = RuleContext;

RuleContext.prototype.depth = function () {
	var n = 0;
	var p = this;
	while (p !== null) {
		p = p.parentCtx;
		n += 1;
	}
	return n;
};

// A context is empty if there is no invoking state; meaning nobody call
// current context.
RuleContext.prototype.isEmpty = function () {
	return this.invokingState === -1;
};

// satisfy the ParseTree / SyntaxTree interface

RuleContext.prototype.getSourceInterval = function () {
	return INVALID_INTERVAL;
};

RuleContext.prototype.getRuleContext = function () {
	return this;
};

RuleContext.prototype.getPayload = function () {
	return this;
};

// Return the combined text of all child nodes. This method only considers
// tokens which have been added to the parse tree.
// <p>
// Since tokens on hidden channels (e.g. whitespace or comments) are not
// added to the parse trees, they will not appear in the output of this
// method.
// /
RuleContext.prototype.getText = function () {
	if (this.getChildCount() === 0) {
		return "";
	} else {
		return this.children.map(function (child) {
			return child.getText();
		}).join("");
	}
};

// For rule associated with this parse tree internal node, return
// the outer alternative number used to match the input. Default
// implementation does not compute nor store this alt num. Create
// a subclass of ParserRuleContext with backing field and set
// option contextSuperClass.
// to set it.
RuleContext.prototype.getAltNumber = function () {
	return INVALID_ALT_NUMBER;
};

// Set the outer alternative number for this context node. Default
// implementation does nothing to avoid backing field overhead for
// trees that don't need it.  Create
// a subclass of ParserRuleContext with backing field and set
// option contextSuperClass.
RuleContext.prototype.setAltNumber = function (altNumber) {};

RuleContext.prototype.getChild = function (i) {
	return null;
};

RuleContext.prototype.getChildCount = function () {
	return 0;
};

RuleContext.prototype.accept = function (visitor) {
	return visitor.visitChildren(this);
};

//need to manage circular dependencies, so export now
exports.RuleContext = RuleContext;
var Trees = __webpack_require__(30).Trees;

// Print out a whole tree, not just a node, in LISP format
// (root child1 .. childN). Print just a node if this is a leaf.
//

RuleContext.prototype.toStringTree = function (ruleNames, recog) {
	return Trees.toStringTree(this, ruleNames, recog);
};

RuleContext.prototype.toString = function (ruleNames, stop) {
	ruleNames = ruleNames || null;
	stop = stop || null;
	var p = this;
	var s = "[";
	while (p !== null && p !== stop) {
		if (ruleNames === null) {
			if (!p.isEmpty()) {
				s += p.invokingState;
			}
		} else {
			var ri = p.ruleIndex;
			var ruleName = ri >= 0 && ri < ruleNames.length ? ruleNames[ri] : "" + ri;
			s += ruleName;
		}
		if (p.parentCtx !== null && (ruleNames !== null || !p.parentCtx.isEmpty())) {
			s += " ";
		}
		p = p.parentCtx;
	}
	s += "]";
	return s;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
///

// A tuple: (ATN state, predicted alt, syntactic, semantic context).
//  The syntactic context is a graph-structured stack node whose
//  path(s) to the root is the rule invocation(s)
//  chain used to arrive at the state.  The semantic context is
//  the tree of semantic predicates encountered before reaching
//  an ATN state.
///

var DecisionState = __webpack_require__(5).DecisionState;
var SemanticContext = __webpack_require__(10).SemanticContext;
var Hash = __webpack_require__(0).Hash;

function checkParams(params, isCfg) {
    if (params === null) {
        var result = { state: null, alt: null, context: null, semanticContext: null };
        if (isCfg) {
            result.reachesIntoOuterContext = 0;
        }
        return result;
    } else {
        var props = {};
        props.state = params.state || null;
        props.alt = params.alt === undefined ? null : params.alt;
        props.context = params.context || null;
        props.semanticContext = params.semanticContext || null;
        if (isCfg) {
            props.reachesIntoOuterContext = params.reachesIntoOuterContext || 0;
            props.precedenceFilterSuppressed = params.precedenceFilterSuppressed || false;
        }
        return props;
    }
}

function ATNConfig(params, config) {
    this.checkContext(params, config);
    params = checkParams(params);
    config = checkParams(config, true);
    // The ATN state associated with this configuration///
    this.state = params.state !== null ? params.state : config.state;
    // What alt (or lexer rule) is predicted by this configuration///
    this.alt = params.alt !== null ? params.alt : config.alt;
    // The stack of invoking states leading to the rule/states associated
    //  with this config.  We track only those contexts pushed during
    //  execution of the ATN simulator.
    this.context = params.context !== null ? params.context : config.context;
    this.semanticContext = params.semanticContext !== null ? params.semanticContext : config.semanticContext !== null ? config.semanticContext : SemanticContext.NONE;
    // We cannot execute predicates dependent upon local context unless
    // we know for sure we are in the correct context. Because there is
    // no way to do this efficiently, we simply cannot evaluate
    // dependent predicates unless we are in the rule that initially
    // invokes the ATN simulator.
    //
    // closure() tracks the depth of how far we dip into the
    // outer context: depth &gt; 0.  Note that it may not be totally
    // accurate depth since I don't ever decrement. TODO: make it a boolean then
    this.reachesIntoOuterContext = config.reachesIntoOuterContext;
    this.precedenceFilterSuppressed = config.precedenceFilterSuppressed;
    return this;
}

ATNConfig.prototype.checkContext = function (params, config) {
    if ((params.context === null || params.context === undefined) && (config === null || config.context === null || config.context === undefined)) {
        this.context = null;
    }
};

ATNConfig.prototype.hashCode = function () {
    var hash = new Hash();
    this.updateHashCode(hash);
    return hash.finish();
};

ATNConfig.prototype.updateHashCode = function (hash) {
    hash.update(this.state.stateNumber, this.alt, this.context, this.semanticContext);
};

// An ATN configuration is equal to another if both have
//  the same state, they predict the same alternative, and
//  syntactic/semantic contexts are the same.

ATNConfig.prototype.equals = function (other) {
    if (this === other) {
        return true;
    } else if (!(other instanceof ATNConfig)) {
        return false;
    } else {
        return this.state.stateNumber === other.state.stateNumber && this.alt === other.alt && (this.context === null ? other.context === null : this.context.equals(other.context)) && this.semanticContext.equals(other.semanticContext) && this.precedenceFilterSuppressed === other.precedenceFilterSuppressed;
    }
};

ATNConfig.prototype.hashCodeForConfigSet = function () {
    var hash = new Hash();
    hash.update(this.state.stateNumber, this.alt, this.semanticContext);
    return hash.finish();
};

ATNConfig.prototype.equalsForConfigSet = function (other) {
    if (this === other) {
        return true;
    } else if (!(other instanceof ATNConfig)) {
        return false;
    } else {
        return this.state.stateNumber === other.state.stateNumber && this.alt === other.alt && this.semanticContext.equals(other.semanticContext);
    }
};

ATNConfig.prototype.toString = function () {
    return "(" + this.state + "," + this.alt + (this.context !== null ? ",[" + this.context.toString() + "]" : "") + (this.semanticContext !== SemanticContext.NONE ? "," + this.semanticContext.toString() : "") + (this.reachesIntoOuterContext > 0 ? ",up=" + this.reachesIntoOuterContext : "") + ")";
};

function LexerATNConfig(params, config) {
    ATNConfig.call(this, params, config);

    // This is the backing field for {@link //getLexerActionExecutor}.
    var lexerActionExecutor = params.lexerActionExecutor || null;
    this.lexerActionExecutor = lexerActionExecutor || (config !== null ? config.lexerActionExecutor : null);
    this.passedThroughNonGreedyDecision = config !== null ? this.checkNonGreedyDecision(config, this.state) : false;
    return this;
}

LexerATNConfig.prototype = Object.create(ATNConfig.prototype);
LexerATNConfig.prototype.constructor = LexerATNConfig;

LexerATNConfig.prototype.updateHashCode = function (hash) {
    hash.update(this.state.stateNumber, this.alt, this.context, this.semanticContext, this.passedThroughNonGreedyDecision, this.lexerActionExecutor);
};

LexerATNConfig.prototype.equals = function (other) {
    return this === other || other instanceof LexerATNConfig && this.passedThroughNonGreedyDecision == other.passedThroughNonGreedyDecision && (this.lexerActionExecutor ? this.lexerActionExecutor.equals(other.lexerActionExecutor) : !other.lexerActionExecutor) && ATNConfig.prototype.equals.call(this, other);
};

LexerATNConfig.prototype.hashCodeForConfigSet = LexerATNConfig.prototype.hashCode;

LexerATNConfig.prototype.equalsForConfigSet = LexerATNConfig.prototype.equals;

LexerATNConfig.prototype.checkNonGreedyDecision = function (source, target) {
    return source.passedThroughNonGreedyDecision || target instanceof DecisionState && target.nonGreedy;
};

exports.ATNConfig = ATNConfig;
exports.LexerATNConfig = LexerATNConfig;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
exports.atn = __webpack_require__(58);
exports.codepointat = __webpack_require__(25);
exports.dfa = __webpack_require__(63);
exports.fromcodepoint = __webpack_require__(26);
exports.tree = __webpack_require__(29);
exports.error = __webpack_require__(65);
exports.Token = __webpack_require__(1).Token;
exports.CharStreams = __webpack_require__(67).CharStreams;
exports.CommonToken = __webpack_require__(1).CommonToken;
exports.InputStream = __webpack_require__(13).InputStream;
exports.FileStream = __webpack_require__(68).FileStream;
exports.CommonTokenStream = __webpack_require__(27).CommonTokenStream;
exports.Lexer = __webpack_require__(14).Lexer;
exports.Parser = __webpack_require__(69).Parser;
var pc = __webpack_require__(6);
exports.PredictionContextCache = pc.PredictionContextCache;
exports.ParserRuleContext = __webpack_require__(19).ParserRuleContext;
exports.Interval = __webpack_require__(2).Interval;
exports.Utils = __webpack_require__(0);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

// A DFA walker that knows how to dump them to serialized strings.#/


function DFASerializer(dfa, literalNames, symbolicNames) {
    this.dfa = dfa;
    this.literalNames = literalNames || [];
    this.symbolicNames = symbolicNames || [];
    return this;
}

DFASerializer.prototype.toString = function () {
    if (this.dfa.s0 === null) {
        return null;
    }
    var buf = "";
    var states = this.dfa.sortedStates();
    for (var i = 0; i < states.length; i++) {
        var s = states[i];
        if (s.edges !== null) {
            var n = s.edges.length;
            for (var j = 0; j < n; j++) {
                var t = s.edges[j] || null;
                if (t !== null && t.stateNumber !== 0x7FFFFFFF) {
                    buf = buf.concat(this.getStateString(s));
                    buf = buf.concat("-");
                    buf = buf.concat(this.getEdgeLabel(j));
                    buf = buf.concat("->");
                    buf = buf.concat(this.getStateString(t));
                    buf = buf.concat('\n');
                }
            }
        }
    }
    return buf.length === 0 ? null : buf;
};

DFASerializer.prototype.getEdgeLabel = function (i) {
    if (i === 0) {
        return "EOF";
    } else if (this.literalNames !== null || this.symbolicNames !== null) {
        return this.literalNames[i - 1] || this.symbolicNames[i - 1];
    } else {
        return String.fromCharCode(i - 1);
    }
};

DFASerializer.prototype.getStateString = function (s) {
    var baseStateStr = (s.isAcceptState ? ":" : "") + "s" + s.stateNumber + (s.requiresFullContext ? "^" : "");
    if (s.isAcceptState) {
        if (s.predicates !== null) {
            return baseStateStr + "=>" + s.predicates.toString();
        } else {
            return baseStateStr + "=>" + s.prediction.toString();
        }
    } else {
        return baseStateStr;
    }
};

function LexerDFASerializer(dfa) {
    DFASerializer.call(this, dfa, null);
    return this;
}

LexerDFASerializer.prototype = Object.create(DFASerializer.prototype);
LexerDFASerializer.prototype.constructor = LexerDFASerializer;

LexerDFASerializer.prototype.getEdgeLabel = function (i) {
    return "'" + String.fromCharCode(i) + "'";
};

exports.DFASerializer = DFASerializer;
exports.LexerDFASerializer = LexerDFASerializer;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

//* A rule invocation record for parsing.
//
//  Contains all of the information about the current rule not stored in the
//  RuleContext. It handles parse tree children list, Any ATN state
//  tracing, and the default values available for rule indications:
//  start, stop, rule index, current alt number, current
//  ATN state.
//
//  Subclasses made for each rule and grammar track the parameters,
//  return values, locals, and labels specific to that rule. These
//  are the objects that are returned from rules.
//
//  Note text is not an actual field of a rule return value; it is computed
//  from start and stop using the input stream's toString() method.  I
//  could add a ctor to this so that we can pass in and store the input
//  stream, but I'm not sure we want to do that.  It would seem to be undefined
//  to get the .text property anyway if the rule matches tokens from multiple
//  input streams.
//
//  I do not use getters for fields of objects that are used simply to
//  group values such as this aggregate.  The getters/setters are there to
//  satisfy the superclass interface.

var RuleContext = __webpack_require__(15).RuleContext;
var Tree = __webpack_require__(4);
var INVALID_INTERVAL = Tree.INVALID_INTERVAL;
var TerminalNode = Tree.TerminalNode;
var TerminalNodeImpl = Tree.TerminalNodeImpl;
var ErrorNodeImpl = Tree.ErrorNodeImpl;
var Interval = __webpack_require__(2).Interval;

function ParserRuleContext(parent, invokingStateNumber) {
  parent = parent || null;
  invokingStateNumber = invokingStateNumber || null;
  RuleContext.call(this, parent, invokingStateNumber);
  this.ruleIndex = -1;
  // * If we are debugging or building a parse tree for a visitor,
  // we need to track all of the tokens and rule invocations associated
  // with this rule's context. This is empty for parsing w/o tree constr.
  // operation because we don't the need to track the details about
  // how we parse this rule.
  // /
  this.children = null;
  this.start = null;
  this.stop = null;
  // The exception that forced this rule to return. If the rule successfully
  // completed, this is {@code null}.
  this.exception = null;
}

ParserRuleContext.prototype = Object.create(RuleContext.prototype);
ParserRuleContext.prototype.constructor = ParserRuleContext;

// * COPY a ctx (I'm deliberately not using copy constructor)///
ParserRuleContext.prototype.copyFrom = function (ctx) {
  // from RuleContext
  this.parentCtx = ctx.parentCtx;
  this.invokingState = ctx.invokingState;
  this.children = null;
  this.start = ctx.start;
  this.stop = ctx.stop;
  // copy any error nodes to alt label node
  if (ctx.children) {
    this.children = [];
    // reset parent pointer for any error nodes
    ctx.children.map(function (child) {
      if (child instanceof ErrorNodeImpl) {
        this.children.push(child);
        child.parentCtx = this;
      }
    }, this);
  }
};

// Double dispatch methods for listeners
ParserRuleContext.prototype.enterRule = function (listener) {};

ParserRuleContext.prototype.exitRule = function (listener) {};

// * Does not set parent link; other add methods do that///
ParserRuleContext.prototype.addChild = function (child) {
  if (this.children === null) {
    this.children = [];
  }
  this.children.push(child);
  return child;
};

// * Used by enterOuterAlt to toss out a RuleContext previously added as
// we entered a rule. If we have // label, we will need to remove
// generic ruleContext object.
// /
ParserRuleContext.prototype.removeLastChild = function () {
  if (this.children !== null) {
    this.children.pop();
  }
};

ParserRuleContext.prototype.addTokenNode = function (token) {
  var node = new TerminalNodeImpl(token);
  this.addChild(node);
  node.parentCtx = this;
  return node;
};

ParserRuleContext.prototype.addErrorNode = function (badToken) {
  var node = new ErrorNodeImpl(badToken);
  this.addChild(node);
  node.parentCtx = this;
  return node;
};

ParserRuleContext.prototype.getChild = function (i, type) {
  type = type || null;
  if (this.children === null || i < 0 || i >= this.children.length) {
    return null;
  }
  if (type === null) {
    return this.children[i];
  } else {
    for (var j = 0; j < this.children.length; j++) {
      var child = this.children[j];
      if (child instanceof type) {
        if (i === 0) {
          return child;
        } else {
          i -= 1;
        }
      }
    }
    return null;
  }
};

ParserRuleContext.prototype.getToken = function (ttype, i) {
  if (this.children === null || i < 0 || i >= this.children.length) {
    return null;
  }
  for (var j = 0; j < this.children.length; j++) {
    var child = this.children[j];
    if (child instanceof TerminalNode) {
      if (child.symbol.type === ttype) {
        if (i === 0) {
          return child;
        } else {
          i -= 1;
        }
      }
    }
  }
  return null;
};

ParserRuleContext.prototype.getTokens = function (ttype) {
  if (this.children === null) {
    return [];
  } else {
    var tokens = [];
    for (var j = 0; j < this.children.length; j++) {
      var child = this.children[j];
      if (child instanceof TerminalNode) {
        if (child.symbol.type === ttype) {
          tokens.push(child);
        }
      }
    }
    return tokens;
  }
};

ParserRuleContext.prototype.getTypedRuleContext = function (ctxType, i) {
  return this.getChild(i, ctxType);
};

ParserRuleContext.prototype.getTypedRuleContexts = function (ctxType) {
  if (this.children === null) {
    return [];
  } else {
    var contexts = [];
    for (var j = 0; j < this.children.length; j++) {
      var child = this.children[j];
      if (child instanceof ctxType) {
        contexts.push(child);
      }
    }
    return contexts;
  }
};

ParserRuleContext.prototype.getChildCount = function () {
  if (this.children === null) {
    return 0;
  } else {
    return this.children.length;
  }
};

ParserRuleContext.prototype.getSourceInterval = function () {
  if (this.start === null || this.stop === null) {
    return INVALID_INTERVAL;
  } else {
    return new Interval(this.start.tokenIndex, this.stop.tokenIndex);
  }
};

RuleContext.EMPTY = new ParserRuleContext();

function InterpreterRuleContext(parent, invokingStateNumber, ruleIndex) {
  ParserRuleContext.call(parent, invokingStateNumber);
  this.ruleIndex = ruleIndex;
  return this;
}

InterpreterRuleContext.prototype = Object.create(ParserRuleContext.prototype);
InterpreterRuleContext.prototype.constructor = InterpreterRuleContext;

exports.ParserRuleContext = ParserRuleContext;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var freeGlobal = __webpack_require__(45);

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__(23);

/** Built-in value references. */
var _Symbol = root.Symbol;

module.exports = _Symbol;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*! https://mths.be/codepointat v0.2.0 by @mathias */
if (!String.prototype.codePointAt) {
	(function () {
		'use strict'; // needed to support `apply`/`call` with `undefined`/`null`

		var defineProperty = function () {
			// IE 8 only supports `Object.defineProperty` on DOM elements
			try {
				var object = {};
				var $defineProperty = Object.defineProperty;
				var result = $defineProperty(object, object, object) && $defineProperty;
			} catch (error) {}
			return result;
		}();
		var codePointAt = function codePointAt(position) {
			if (this == null) {
				throw TypeError();
			}
			var string = String(this);
			var size = string.length;
			// `ToInteger`
			var index = position ? Number(position) : 0;
			if (index != index) {
				// better `isNaN`
				index = 0;
			}
			// Account for out-of-bounds indices:
			if (index < 0 || index >= size) {
				return undefined;
			}
			// Get the first code unit
			var first = string.charCodeAt(index);
			var second;
			if ( // check if it’s the start of a surrogate pair
			first >= 0xD800 && first <= 0xDBFF && // high surrogate
			size > index + 1 // there is a next code unit
			) {
					second = string.charCodeAt(index + 1);
					if (second >= 0xDC00 && second <= 0xDFFF) {
						// low surrogate
						// https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
						return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
					}
				}
			return first;
		};
		if (defineProperty) {
			defineProperty(String.prototype, 'codePointAt', {
				'value': codePointAt,
				'configurable': true,
				'writable': true
			});
		} else {
			String.prototype.codePointAt = codePointAt;
		}
	})();
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*! https://mths.be/fromcodepoint v0.2.1 by @mathias */
if (!String.fromCodePoint) {
	(function () {
		var defineProperty = function () {
			// IE 8 only supports `Object.defineProperty` on DOM elements
			try {
				var object = {};
				var $defineProperty = Object.defineProperty;
				var result = $defineProperty(object, object, object) && $defineProperty;
			} catch (error) {}
			return result;
		}();
		var stringFromCharCode = String.fromCharCode;
		var floor = Math.floor;
		var fromCodePoint = function fromCodePoint(_) {
			var MAX_SIZE = 0x4000;
			var codeUnits = [];
			var highSurrogate;
			var lowSurrogate;
			var index = -1;
			var length = arguments.length;
			if (!length) {
				return '';
			}
			var result = '';
			while (++index < length) {
				var codePoint = Number(arguments[index]);
				if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
				codePoint < 0 || // not a valid Unicode code point
				codePoint > 0x10FFFF || // not a valid Unicode code point
				floor(codePoint) != codePoint // not an integer
				) {
						throw RangeError('Invalid code point: ' + codePoint);
					}
				if (codePoint <= 0xFFFF) {
					// BMP code point
					codeUnits.push(codePoint);
				} else {
					// Astral code point; split in surrogate halves
					// https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
					codePoint -= 0x10000;
					highSurrogate = (codePoint >> 10) + 0xD800;
					lowSurrogate = codePoint % 0x400 + 0xDC00;
					codeUnits.push(highSurrogate, lowSurrogate);
				}
				if (index + 1 == length || codeUnits.length > MAX_SIZE) {
					result += stringFromCharCode.apply(null, codeUnits);
					codeUnits.length = 0;
				}
			}
			return result;
		};
		if (defineProperty) {
			defineProperty(String, 'fromCodePoint', {
				'value': fromCodePoint,
				'configurable': true,
				'writable': true
			});
		} else {
			String.fromCodePoint = fromCodePoint;
		}
	})();
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
///

//
// This class extends {@link BufferedTokenStream} with functionality to filter
// token streams to tokens on a particular channel (tokens where
// {@link Token//getChannel} returns a particular value).
//
// <p>
// This token stream provides access to all tokens by index or when calling
// methods like {@link //getText}. The channel filtering is only used for code
// accessing tokens via the lookahead methods {@link //LA}, {@link //LT}, and
// {@link //LB}.</p>
//
// <p>
// By default, tokens are placed on the default channel
// ({@link Token//DEFAULT_CHANNEL}), but may be reassigned by using the
// {@code ->channel(HIDDEN)} lexer command, or by using an embedded action to
// call {@link Lexer//setChannel}.
// </p>
//
// <p>
// Note: lexer rules which use the {@code ->skip} lexer command or call
// {@link Lexer//skip} do not produce tokens at all, so input text matched by
// such a rule will not be available as part of the token stream, regardless of
// channel.</p>
///

var Token = __webpack_require__(1).Token;
var BufferedTokenStream = __webpack_require__(54).BufferedTokenStream;

function CommonTokenStream(lexer, channel) {
    BufferedTokenStream.call(this, lexer);
    this.channel = channel === undefined ? Token.DEFAULT_CHANNEL : channel;
    return this;
}

CommonTokenStream.prototype = Object.create(BufferedTokenStream.prototype);
CommonTokenStream.prototype.constructor = CommonTokenStream;

CommonTokenStream.prototype.adjustSeekIndex = function (i) {
    return this.nextTokenOnChannel(i, this.channel);
};

CommonTokenStream.prototype.LB = function (k) {
    if (k === 0 || this.index - k < 0) {
        return null;
    }
    var i = this.index;
    var n = 1;
    // find k good tokens looking backwards
    while (n <= k) {
        // skip off-channel tokens
        i = this.previousTokenOnChannel(i - 1, this.channel);
        n += 1;
    }
    if (i < 0) {
        return null;
    }
    return this.tokens[i];
};

CommonTokenStream.prototype.LT = function (k) {
    this.lazyInit();
    if (k === 0) {
        return null;
    }
    if (k < 0) {
        return this.LB(-k);
    }
    var i = this.index;
    var n = 1; // we know tokens[pos] is a good one
    // find k good tokens
    while (n < k) {
        // skip off-channel tokens, but make sure to not look past EOF
        if (this.sync(i + 1)) {
            i = this.nextTokenOnChannel(i + 1, this.channel);
        }
        n += 1;
    }
    return this.tokens[i];
};

// Count EOF just once.///
CommonTokenStream.prototype.getNumberOfOnChannelTokens = function () {
    var n = 0;
    this.fill();
    for (var i = 0; i < this.tokens.length; i++) {
        var t = this.tokens[i];
        if (t.channel === this.channel) {
            n += 1;
        }
        if (t.type === Token.EOF) {
            break;
        }
    }
    return n;
};

exports.CommonTokenStream = CommonTokenStream;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
//

var Token = __webpack_require__(1).Token;
var ConsoleErrorListener = __webpack_require__(12).ConsoleErrorListener;
var ProxyErrorListener = __webpack_require__(12).ProxyErrorListener;

function Recognizer() {
    this._listeners = [ConsoleErrorListener.INSTANCE];
    this._interp = null;
    this._stateNumber = -1;
    return this;
}

Recognizer.tokenTypeMapCache = {};
Recognizer.ruleIndexMapCache = {};

Recognizer.prototype.checkVersion = function (toolVersion) {
    var runtimeVersion = "4.7";
    if (runtimeVersion !== toolVersion) {
        console.log("ANTLR runtime and generated code versions disagree: " + runtimeVersion + "!=" + toolVersion);
    }
};

Recognizer.prototype.addErrorListener = function (listener) {
    this._listeners.push(listener);
};

Recognizer.prototype.removeErrorListeners = function () {
    this._listeners = [];
};

Recognizer.prototype.getTokenTypeMap = function () {
    var tokenNames = this.getTokenNames();
    if (tokenNames === null) {
        throw "The current recognizer does not provide a list of token names.";
    }
    var result = this.tokenTypeMapCache[tokenNames];
    if (result === undefined) {
        result = tokenNames.reduce(function (o, k, i) {
            o[k] = i;
        });
        result.EOF = Token.EOF;
        this.tokenTypeMapCache[tokenNames] = result;
    }
    return result;
};

// Get a map from rule names to rule indexes.
//
// <p>Used for XPath and tree pattern compilation.</p>
//
Recognizer.prototype.getRuleIndexMap = function () {
    var ruleNames = this.ruleNames;
    if (ruleNames === null) {
        throw "The current recognizer does not provide a list of rule names.";
    }
    var result = this.ruleIndexMapCache[ruleNames];
    if (result === undefined) {
        result = ruleNames.reduce(function (o, k, i) {
            o[k] = i;
        });
        this.ruleIndexMapCache[ruleNames] = result;
    }
    return result;
};

Recognizer.prototype.getTokenType = function (tokenName) {
    var ttype = this.getTokenTypeMap()[tokenName];
    if (ttype !== undefined) {
        return ttype;
    } else {
        return Token.INVALID_TYPE;
    }
};

// What is the error header, normally line/character position information?//
Recognizer.prototype.getErrorHeader = function (e) {
    var line = e.getOffendingToken().line;
    var column = e.getOffendingToken().column;
    return "line " + line + ":" + column;
};

// How should a token be displayed in an error message? The default
//  is to display just the text, but during development you might
//  want to have a lot of information spit out.  Override in that case
//  to use t.toString() (which, for CommonToken, dumps everything about
//  the token). This is better than forcing you to override a method in
//  your token objects because you don't have to go modify your lexer
//  so that it creates a new Java type.
//
// @deprecated This method is not called by the ANTLR 4 Runtime. Specific
// implementations of {@link ANTLRErrorStrategy} may provide a similar
// feature when necessary. For example, see
// {@link DefaultErrorStrategy//getTokenErrorDisplay}.
//
Recognizer.prototype.getTokenErrorDisplay = function (t) {
    if (t === null) {
        return "<no token>";
    }
    var s = t.text;
    if (s === null) {
        if (t.type === Token.EOF) {
            s = "<EOF>";
        } else {
            s = "<" + t.type + ">";
        }
    }
    s = s.replace("\n", "\\n").replace("\r", "\\r").replace("\t", "\\t");
    return "'" + s + "'";
};

Recognizer.prototype.getErrorListenerDispatch = function () {
    return new ProxyErrorListener(this._listeners);
};

// subclass needs to override these if there are sempreds or actions
// that the ATN interp needs to execute
Recognizer.prototype.sempred = function (localctx, ruleIndex, actionIndex) {
    return true;
};

Recognizer.prototype.precpred = function (localctx, precedence) {
    return true;
};

//Indicate that the recognizer has changed internal state that is
//consistent with the ATN state passed in.  This way we always know
//where we are in the ATN as the parser goes along. The rule
//context objects form a stack that lets us see the stack of
//invoking rules. Combine this and we have complete ATN
//configuration information.

Object.defineProperty(Recognizer.prototype, "state", {
    get: function get() {
        return this._stateNumber;
    },
    set: function set(state) {
        this._stateNumber = state;
    }
});

exports.Recognizer = Recognizer;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

var Tree = __webpack_require__(4);
exports.Trees = __webpack_require__(30).Trees;
exports.RuleNode = Tree.RuleNode;
exports.ParseTreeListener = Tree.ParseTreeListener;
exports.ParseTreeVisitor = Tree.ParseTreeVisitor;
exports.ParseTreeWalker = Tree.ParseTreeWalker;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

var Utils = __webpack_require__(0);
var Token = __webpack_require__(1).Token;
var RuleNode = __webpack_require__(4).RuleNode;
var ErrorNode = __webpack_require__(4).ErrorNode;
var TerminalNode = __webpack_require__(4).TerminalNode;
var ParserRuleContext = __webpack_require__(19).ParserRuleContext;
var RuleContext = __webpack_require__(15).RuleContext;
var INVALID_ALT_NUMBER = __webpack_require__(8).INVALID_ALT_NUMBER;

/** A set of utility routines useful for all kinds of ANTLR trees. */
function Trees() {}

// Print out a whole tree in LISP form. {@link //getNodeText} is used on the
//  node payloads to get the text for the nodes.  Detect
//  parse trees and extract data appropriately.
Trees.toStringTree = function (tree, ruleNames, recog) {
    ruleNames = ruleNames || null;
    recog = recog || null;
    if (recog !== null) {
        ruleNames = recog.ruleNames;
    }
    var s = Trees.getNodeText(tree, ruleNames);
    s = Utils.escapeWhitespace(s, false);
    var c = tree.getChildCount();
    if (c === 0) {
        return s;
    }
    var res = "(" + s + ' ';
    if (c > 0) {
        s = Trees.toStringTree(tree.getChild(0), ruleNames);
        res = res.concat(s);
    }
    for (var i = 1; i < c; i++) {
        s = Trees.toStringTree(tree.getChild(i), ruleNames);
        res = res.concat(' ' + s);
    }
    res = res.concat(")");
    return res;
};

Trees.getNodeText = function (t, ruleNames, recog) {
    ruleNames = ruleNames || null;
    recog = recog || null;
    if (recog !== null) {
        ruleNames = recog.ruleNames;
    }
    if (ruleNames !== null) {
        if (t instanceof RuleContext) {
            var altNumber = t.getAltNumber();
            if (altNumber != INVALID_ALT_NUMBER) {
                return ruleNames[t.ruleIndex] + ":" + altNumber;
            }
            return ruleNames[t.ruleIndex];
        } else if (t instanceof ErrorNode) {
            return t.toString();
        } else if (t instanceof TerminalNode) {
            if (t.symbol !== null) {
                return t.symbol.text;
            }
        }
    }
    // no recog for rule names
    var payload = t.getPayload();
    if (payload instanceof Token) {
        return payload.text;
    }
    return t.getPayload().toString();
};

// Return ordered list of all children of this node
Trees.getChildren = function (t) {
    var list = [];
    for (var i = 0; i < t.getChildCount(); i++) {
        list.push(t.getChild(i));
    }
    return list;
};

// Return a list of all ancestors of this node.  The first node of
//  list is the root and the last is the parent of this node.
//
Trees.getAncestors = function (t) {
    var ancestors = [];
    t = t.getParent();
    while (t !== null) {
        ancestors = [t].concat(ancestors);
        t = t.getParent();
    }
    return ancestors;
};

Trees.findAllTokenNodes = function (t, ttype) {
    return Trees.findAllNodes(t, ttype, true);
};

Trees.findAllRuleNodes = function (t, ruleIndex) {
    return Trees.findAllNodes(t, ruleIndex, false);
};

Trees.findAllNodes = function (t, index, findTokens) {
    var nodes = [];
    Trees._findAllNodes(t, index, findTokens, nodes);
    return nodes;
};

Trees._findAllNodes = function (t, index, findTokens, nodes) {
    // check this node (the root) first
    if (findTokens && t instanceof TerminalNode) {
        if (t.symbol.type === index) {
            nodes.push(t);
        }
    } else if (!findTokens && t instanceof ParserRuleContext) {
        if (t.ruleIndex === index) {
            nodes.push(t);
        }
    }
    // check children
    for (var i = 0; i < t.getChildCount(); i++) {
        Trees._findAllNodes(t.getChild(i), index, findTokens, nodes);
    }
};

Trees.descendants = function (t) {
    var nodes = [t];
    for (var i = 0; i < t.getChildCount(); i++) {
        nodes = nodes.concat(Trees.descendants(t.getChild(i)));
    }
    return nodes;
};

exports.Trees = Trees;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

var Token = __webpack_require__(1).Token;
var ATN = __webpack_require__(8).ATN;
var ATNType = __webpack_require__(59).ATNType;
var ATNStates = __webpack_require__(5);
var ATNState = ATNStates.ATNState;
var BasicState = ATNStates.BasicState;
var DecisionState = ATNStates.DecisionState;
var BlockStartState = ATNStates.BlockStartState;
var BlockEndState = ATNStates.BlockEndState;
var LoopEndState = ATNStates.LoopEndState;
var RuleStartState = ATNStates.RuleStartState;
var RuleStopState = ATNStates.RuleStopState;
var TokensStartState = ATNStates.TokensStartState;
var PlusLoopbackState = ATNStates.PlusLoopbackState;
var StarLoopbackState = ATNStates.StarLoopbackState;
var StarLoopEntryState = ATNStates.StarLoopEntryState;
var PlusBlockStartState = ATNStates.PlusBlockStartState;
var StarBlockStartState = ATNStates.StarBlockStartState;
var BasicBlockStartState = ATNStates.BasicBlockStartState;
var Transitions = __webpack_require__(7);
var Transition = Transitions.Transition;
var AtomTransition = Transitions.AtomTransition;
var SetTransition = Transitions.SetTransition;
var NotSetTransition = Transitions.NotSetTransition;
var RuleTransition = Transitions.RuleTransition;
var RangeTransition = Transitions.RangeTransition;
var ActionTransition = Transitions.ActionTransition;
var EpsilonTransition = Transitions.EpsilonTransition;
var WildcardTransition = Transitions.WildcardTransition;
var PredicateTransition = Transitions.PredicateTransition;
var PrecedencePredicateTransition = Transitions.PrecedencePredicateTransition;
var IntervalSet = __webpack_require__(2).IntervalSet;
var Interval = __webpack_require__(2).Interval;
var ATNDeserializationOptions = __webpack_require__(32).ATNDeserializationOptions;
var LexerActions = __webpack_require__(33);
var LexerActionType = LexerActions.LexerActionType;
var LexerSkipAction = LexerActions.LexerSkipAction;
var LexerChannelAction = LexerActions.LexerChannelAction;
var LexerCustomAction = LexerActions.LexerCustomAction;
var LexerMoreAction = LexerActions.LexerMoreAction;
var LexerTypeAction = LexerActions.LexerTypeAction;
var LexerPushModeAction = LexerActions.LexerPushModeAction;
var LexerPopModeAction = LexerActions.LexerPopModeAction;
var LexerModeAction = LexerActions.LexerModeAction;
// This is the earliest supported serialized UUID.
// stick to serialized version for now, we don't need a UUID instance
var BASE_SERIALIZED_UUID = "AADB8D7E-AEEF-4415-AD2B-8204D6CF042E";

//
// This UUID indicates the serialized ATN contains two sets of
// IntervalSets, where the second set's values are encoded as
// 32-bit integers to support the full Unicode SMP range up to U+10FFFF.
//
var ADDED_UNICODE_SMP = "59627784-3BE5-417A-B9EB-8131A7286089";

// This list contains all of the currently supported UUIDs, ordered by when
// the feature first appeared in this branch.
var SUPPORTED_UUIDS = [BASE_SERIALIZED_UUID, ADDED_UNICODE_SMP];

var SERIALIZED_VERSION = 3;

// This is the current serialized UUID.
var SERIALIZED_UUID = ADDED_UNICODE_SMP;

function initArray(length, value) {
    var tmp = [];
    tmp[length - 1] = value;
    return tmp.map(function (i) {
        return value;
    });
}

function ATNDeserializer(options) {

    if (options === undefined || options === null) {
        options = ATNDeserializationOptions.defaultOptions;
    }
    this.deserializationOptions = options;
    this.stateFactories = null;
    this.actionFactories = null;

    return this;
}

// Determines if a particular serialized representation of an ATN supports
// a particular feature, identified by the {@link UUID} used for serializing
// the ATN at the time the feature was first introduced.
//
// @param feature The {@link UUID} marking the first time the feature was
// supported in the serialized ATN.
// @param actualUuid The {@link UUID} of the actual serialized ATN which is
// currently being deserialized.
// @return {@code true} if the {@code actualUuid} value represents a
// serialized ATN at or after the feature identified by {@code feature} was
// introduced; otherwise, {@code false}.

ATNDeserializer.prototype.isFeatureSupported = function (feature, actualUuid) {
    var idx1 = SUPPORTED_UUIDS.indexOf(feature);
    if (idx1 < 0) {
        return false;
    }
    var idx2 = SUPPORTED_UUIDS.indexOf(actualUuid);
    return idx2 >= idx1;
};

ATNDeserializer.prototype.deserialize = function (data) {
    this.reset(data);
    this.checkVersion();
    this.checkUUID();
    var atn = this.readATN();
    this.readStates(atn);
    this.readRules(atn);
    this.readModes(atn);
    var sets = [];
    // First, deserialize sets with 16-bit arguments <= U+FFFF.
    this.readSets(atn, sets, this.readInt.bind(this));
    // Next, if the ATN was serialized with the Unicode SMP feature,
    // deserialize sets with 32-bit arguments <= U+10FFFF.
    if (this.isFeatureSupported(ADDED_UNICODE_SMP, this.uuid)) {
        this.readSets(atn, sets, this.readInt32.bind(this));
    }
    this.readEdges(atn, sets);
    this.readDecisions(atn);
    this.readLexerActions(atn);
    this.markPrecedenceDecisions(atn);
    this.verifyATN(atn);
    if (this.deserializationOptions.generateRuleBypassTransitions && atn.grammarType === ATNType.PARSER) {
        this.generateRuleBypassTransitions(atn);
        // re-verify after modification
        this.verifyATN(atn);
    }
    return atn;
};

ATNDeserializer.prototype.reset = function (data) {
    var adjust = function adjust(c) {
        var v = c.charCodeAt(0);
        return v > 1 ? v - 2 : -1;
    };
    var temp = data.split("").map(adjust);
    // don't adjust the first value since that's the version number
    temp[0] = data.charCodeAt(0);
    this.data = temp;
    this.pos = 0;
};

ATNDeserializer.prototype.checkVersion = function () {
    var version = this.readInt();
    if (version !== SERIALIZED_VERSION) {
        throw "Could not deserialize ATN with version " + version + " (expected " + SERIALIZED_VERSION + ").";
    }
};

ATNDeserializer.prototype.checkUUID = function () {
    var uuid = this.readUUID();
    if (SUPPORTED_UUIDS.indexOf(uuid) < 0) {
        throw "Could not deserialize ATN with UUID: " + uuid + " (expected " + SERIALIZED_UUID + " or a legacy UUID).", uuid, SERIALIZED_UUID;
    }
    this.uuid = uuid;
};

ATNDeserializer.prototype.readATN = function () {
    var grammarType = this.readInt();
    var maxTokenType = this.readInt();
    return new ATN(grammarType, maxTokenType);
};

ATNDeserializer.prototype.readStates = function (atn) {
    var j, pair, stateNumber;
    var loopBackStateNumbers = [];
    var endStateNumbers = [];
    var nstates = this.readInt();
    for (var i = 0; i < nstates; i++) {
        var stype = this.readInt();
        // ignore bad type of states
        if (stype === ATNState.INVALID_TYPE) {
            atn.addState(null);
            continue;
        }
        var ruleIndex = this.readInt();
        if (ruleIndex === 0xFFFF) {
            ruleIndex = -1;
        }
        var s = this.stateFactory(stype, ruleIndex);
        if (stype === ATNState.LOOP_END) {
            // special case
            var loopBackStateNumber = this.readInt();
            loopBackStateNumbers.push([s, loopBackStateNumber]);
        } else if (s instanceof BlockStartState) {
            var endStateNumber = this.readInt();
            endStateNumbers.push([s, endStateNumber]);
        }
        atn.addState(s);
    }
    // delay the assignment of loop back and end states until we know all the
    // state instances have been initialized
    for (j = 0; j < loopBackStateNumbers.length; j++) {
        pair = loopBackStateNumbers[j];
        pair[0].loopBackState = atn.states[pair[1]];
    }

    for (j = 0; j < endStateNumbers.length; j++) {
        pair = endStateNumbers[j];
        pair[0].endState = atn.states[pair[1]];
    }

    var numNonGreedyStates = this.readInt();
    for (j = 0; j < numNonGreedyStates; j++) {
        stateNumber = this.readInt();
        atn.states[stateNumber].nonGreedy = true;
    }

    var numPrecedenceStates = this.readInt();
    for (j = 0; j < numPrecedenceStates; j++) {
        stateNumber = this.readInt();
        atn.states[stateNumber].isPrecedenceRule = true;
    }
};

ATNDeserializer.prototype.readRules = function (atn) {
    var i;
    var nrules = this.readInt();
    if (atn.grammarType === ATNType.LEXER) {
        atn.ruleToTokenType = initArray(nrules, 0);
    }
    atn.ruleToStartState = initArray(nrules, 0);
    for (i = 0; i < nrules; i++) {
        var s = this.readInt();
        var startState = atn.states[s];
        atn.ruleToStartState[i] = startState;
        if (atn.grammarType === ATNType.LEXER) {
            var tokenType = this.readInt();
            if (tokenType === 0xFFFF) {
                tokenType = Token.EOF;
            }
            atn.ruleToTokenType[i] = tokenType;
        }
    }
    atn.ruleToStopState = initArray(nrules, 0);
    for (i = 0; i < atn.states.length; i++) {
        var state = atn.states[i];
        if (!(state instanceof RuleStopState)) {
            continue;
        }
        atn.ruleToStopState[state.ruleIndex] = state;
        atn.ruleToStartState[state.ruleIndex].stopState = state;
    }
};

ATNDeserializer.prototype.readModes = function (atn) {
    var nmodes = this.readInt();
    for (var i = 0; i < nmodes; i++) {
        var s = this.readInt();
        atn.modeToStartState.push(atn.states[s]);
    }
};

ATNDeserializer.prototype.readSets = function (atn, sets, readUnicode) {
    var m = this.readInt();
    for (var i = 0; i < m; i++) {
        var iset = new IntervalSet();
        sets.push(iset);
        var n = this.readInt();
        var containsEof = this.readInt();
        if (containsEof !== 0) {
            iset.addOne(-1);
        }
        for (var j = 0; j < n; j++) {
            var i1 = readUnicode();
            var i2 = readUnicode();
            iset.addRange(i1, i2);
        }
    }
};

ATNDeserializer.prototype.readEdges = function (atn, sets) {
    var i, j, state, trans, target;
    var nedges = this.readInt();
    for (i = 0; i < nedges; i++) {
        var src = this.readInt();
        var trg = this.readInt();
        var ttype = this.readInt();
        var arg1 = this.readInt();
        var arg2 = this.readInt();
        var arg3 = this.readInt();
        trans = this.edgeFactory(atn, ttype, src, trg, arg1, arg2, arg3, sets);
        var srcState = atn.states[src];
        srcState.addTransition(trans);
    }
    // edges for rule stop states can be derived, so they aren't serialized
    for (i = 0; i < atn.states.length; i++) {
        state = atn.states[i];
        for (j = 0; j < state.transitions.length; j++) {
            var t = state.transitions[j];
            if (!(t instanceof RuleTransition)) {
                continue;
            }
            var outermostPrecedenceReturn = -1;
            if (atn.ruleToStartState[t.target.ruleIndex].isPrecedenceRule) {
                if (t.precedence === 0) {
                    outermostPrecedenceReturn = t.target.ruleIndex;
                }
            }

            trans = new EpsilonTransition(t.followState, outermostPrecedenceReturn);
            atn.ruleToStopState[t.target.ruleIndex].addTransition(trans);
        }
    }

    for (i = 0; i < atn.states.length; i++) {
        state = atn.states[i];
        if (state instanceof BlockStartState) {
            // we need to know the end state to set its start state
            if (state.endState === null) {
                throw "IllegalState";
            }
            // block end states can only be associated to a single block start
            // state
            if (state.endState.startState !== null) {
                throw "IllegalState";
            }
            state.endState.startState = state;
        }
        if (state instanceof PlusLoopbackState) {
            for (j = 0; j < state.transitions.length; j++) {
                target = state.transitions[j].target;
                if (target instanceof PlusBlockStartState) {
                    target.loopBackState = state;
                }
            }
        } else if (state instanceof StarLoopbackState) {
            for (j = 0; j < state.transitions.length; j++) {
                target = state.transitions[j].target;
                if (target instanceof StarLoopEntryState) {
                    target.loopBackState = state;
                }
            }
        }
    }
};

ATNDeserializer.prototype.readDecisions = function (atn) {
    var ndecisions = this.readInt();
    for (var i = 0; i < ndecisions; i++) {
        var s = this.readInt();
        var decState = atn.states[s];
        atn.decisionToState.push(decState);
        decState.decision = i;
    }
};

ATNDeserializer.prototype.readLexerActions = function (atn) {
    if (atn.grammarType === ATNType.LEXER) {
        var count = this.readInt();
        atn.lexerActions = initArray(count, null);
        for (var i = 0; i < count; i++) {
            var actionType = this.readInt();
            var data1 = this.readInt();
            if (data1 === 0xFFFF) {
                data1 = -1;
            }
            var data2 = this.readInt();
            if (data2 === 0xFFFF) {
                data2 = -1;
            }
            var lexerAction = this.lexerActionFactory(actionType, data1, data2);
            atn.lexerActions[i] = lexerAction;
        }
    }
};

ATNDeserializer.prototype.generateRuleBypassTransitions = function (atn) {
    var i;
    var count = atn.ruleToStartState.length;
    for (i = 0; i < count; i++) {
        atn.ruleToTokenType[i] = atn.maxTokenType + i + 1;
    }
    for (i = 0; i < count; i++) {
        this.generateRuleBypassTransition(atn, i);
    }
};

ATNDeserializer.prototype.generateRuleBypassTransition = function (atn, idx) {
    var i, state;
    var bypassStart = new BasicBlockStartState();
    bypassStart.ruleIndex = idx;
    atn.addState(bypassStart);

    var bypassStop = new BlockEndState();
    bypassStop.ruleIndex = idx;
    atn.addState(bypassStop);

    bypassStart.endState = bypassStop;
    atn.defineDecisionState(bypassStart);

    bypassStop.startState = bypassStart;

    var excludeTransition = null;
    var endState = null;

    if (atn.ruleToStartState[idx].isPrecedenceRule) {
        // wrap from the beginning of the rule to the StarLoopEntryState
        endState = null;
        for (i = 0; i < atn.states.length; i++) {
            state = atn.states[i];
            if (this.stateIsEndStateFor(state, idx)) {
                endState = state;
                excludeTransition = state.loopBackState.transitions[0];
                break;
            }
        }
        if (excludeTransition === null) {
            throw "Couldn't identify final state of the precedence rule prefix section.";
        }
    } else {
        endState = atn.ruleToStopState[idx];
    }

    // all non-excluded transitions that currently target end state need to
    // target blockEnd instead
    for (i = 0; i < atn.states.length; i++) {
        state = atn.states[i];
        for (var j = 0; j < state.transitions.length; j++) {
            var transition = state.transitions[j];
            if (transition === excludeTransition) {
                continue;
            }
            if (transition.target === endState) {
                transition.target = bypassStop;
            }
        }
    }

    // all transitions leaving the rule start state need to leave blockStart
    // instead
    var ruleToStartState = atn.ruleToStartState[idx];
    var count = ruleToStartState.transitions.length;
    while (count > 0) {
        bypassStart.addTransition(ruleToStartState.transitions[count - 1]);
        ruleToStartState.transitions = ruleToStartState.transitions.slice(-1);
    }
    // link the new states
    atn.ruleToStartState[idx].addTransition(new EpsilonTransition(bypassStart));
    bypassStop.addTransition(new EpsilonTransition(endState));

    var matchState = new BasicState();
    atn.addState(matchState);
    matchState.addTransition(new AtomTransition(bypassStop, atn.ruleToTokenType[idx]));
    bypassStart.addTransition(new EpsilonTransition(matchState));
};

ATNDeserializer.prototype.stateIsEndStateFor = function (state, idx) {
    if (state.ruleIndex !== idx) {
        return null;
    }
    if (!(state instanceof StarLoopEntryState)) {
        return null;
    }
    var maybeLoopEndState = state.transitions[state.transitions.length - 1].target;
    if (!(maybeLoopEndState instanceof LoopEndState)) {
        return null;
    }
    if (maybeLoopEndState.epsilonOnlyTransitions && maybeLoopEndState.transitions[0].target instanceof RuleStopState) {
        return state;
    } else {
        return null;
    }
};

//
// Analyze the {@link StarLoopEntryState} states in the specified ATN to set
// the {@link StarLoopEntryState//isPrecedenceDecision} field to the
// correct value.
//
// @param atn The ATN.
//
ATNDeserializer.prototype.markPrecedenceDecisions = function (atn) {
    for (var i = 0; i < atn.states.length; i++) {
        var state = atn.states[i];
        if (!(state instanceof StarLoopEntryState)) {
            continue;
        }
        // We analyze the ATN to determine if this ATN decision state is the
        // decision for the closure block that determines whether a
        // precedence rule should continue or complete.
        //
        if (atn.ruleToStartState[state.ruleIndex].isPrecedenceRule) {
            var maybeLoopEndState = state.transitions[state.transitions.length - 1].target;
            if (maybeLoopEndState instanceof LoopEndState) {
                if (maybeLoopEndState.epsilonOnlyTransitions && maybeLoopEndState.transitions[0].target instanceof RuleStopState) {
                    state.isPrecedenceDecision = true;
                }
            }
        }
    }
};

ATNDeserializer.prototype.verifyATN = function (atn) {
    if (!this.deserializationOptions.verifyATN) {
        return;
    }
    // verify assumptions
    for (var i = 0; i < atn.states.length; i++) {
        var state = atn.states[i];
        if (state === null) {
            continue;
        }
        this.checkCondition(state.epsilonOnlyTransitions || state.transitions.length <= 1);
        if (state instanceof PlusBlockStartState) {
            this.checkCondition(state.loopBackState !== null);
        } else if (state instanceof StarLoopEntryState) {
            this.checkCondition(state.loopBackState !== null);
            this.checkCondition(state.transitions.length === 2);
            if (state.transitions[0].target instanceof StarBlockStartState) {
                this.checkCondition(state.transitions[1].target instanceof LoopEndState);
                this.checkCondition(!state.nonGreedy);
            } else if (state.transitions[0].target instanceof LoopEndState) {
                this.checkCondition(state.transitions[1].target instanceof StarBlockStartState);
                this.checkCondition(state.nonGreedy);
            } else {
                throw "IllegalState";
            }
        } else if (state instanceof StarLoopbackState) {
            this.checkCondition(state.transitions.length === 1);
            this.checkCondition(state.transitions[0].target instanceof StarLoopEntryState);
        } else if (state instanceof LoopEndState) {
            this.checkCondition(state.loopBackState !== null);
        } else if (state instanceof RuleStartState) {
            this.checkCondition(state.stopState !== null);
        } else if (state instanceof BlockStartState) {
            this.checkCondition(state.endState !== null);
        } else if (state instanceof BlockEndState) {
            this.checkCondition(state.startState !== null);
        } else if (state instanceof DecisionState) {
            this.checkCondition(state.transitions.length <= 1 || state.decision >= 0);
        } else {
            this.checkCondition(state.transitions.length <= 1 || state instanceof RuleStopState);
        }
    }
};

ATNDeserializer.prototype.checkCondition = function (condition, message) {
    if (!condition) {
        if (message === undefined || message === null) {
            message = "IllegalState";
        }
        throw message;
    }
};

ATNDeserializer.prototype.readInt = function () {
    return this.data[this.pos++];
};

ATNDeserializer.prototype.readInt32 = function () {
    var low = this.readInt();
    var high = this.readInt();
    return low | high << 16;
};

ATNDeserializer.prototype.readLong = function () {
    var low = this.readInt32();
    var high = this.readInt32();
    return low & 0x00000000FFFFFFFF | high << 32;
};

function createByteToHex() {
    var bth = [];
    for (var i = 0; i < 256; i++) {
        bth[i] = (i + 0x100).toString(16).substr(1).toUpperCase();
    }
    return bth;
}

var byteToHex = createByteToHex();

ATNDeserializer.prototype.readUUID = function () {
    var bb = [];
    for (var i = 7; i >= 0; i--) {
        var int = this.readInt();
        /* jshint bitwise: false */
        bb[2 * i + 1] = int & 0xFF;
        bb[2 * i] = int >> 8 & 0xFF;
    }
    return byteToHex[bb[0]] + byteToHex[bb[1]] + byteToHex[bb[2]] + byteToHex[bb[3]] + '-' + byteToHex[bb[4]] + byteToHex[bb[5]] + '-' + byteToHex[bb[6]] + byteToHex[bb[7]] + '-' + byteToHex[bb[8]] + byteToHex[bb[9]] + '-' + byteToHex[bb[10]] + byteToHex[bb[11]] + byteToHex[bb[12]] + byteToHex[bb[13]] + byteToHex[bb[14]] + byteToHex[bb[15]];
};

ATNDeserializer.prototype.edgeFactory = function (atn, type, src, trg, arg1, arg2, arg3, sets) {
    var target = atn.states[trg];
    switch (type) {
        case Transition.EPSILON:
            return new EpsilonTransition(target);
        case Transition.RANGE:
            return arg3 !== 0 ? new RangeTransition(target, Token.EOF, arg2) : new RangeTransition(target, arg1, arg2);
        case Transition.RULE:
            return new RuleTransition(atn.states[arg1], arg2, arg3, target);
        case Transition.PREDICATE:
            return new PredicateTransition(target, arg1, arg2, arg3 !== 0);
        case Transition.PRECEDENCE:
            return new PrecedencePredicateTransition(target, arg1);
        case Transition.ATOM:
            return arg3 !== 0 ? new AtomTransition(target, Token.EOF) : new AtomTransition(target, arg1);
        case Transition.ACTION:
            return new ActionTransition(target, arg1, arg2, arg3 !== 0);
        case Transition.SET:
            return new SetTransition(target, sets[arg1]);
        case Transition.NOT_SET:
            return new NotSetTransition(target, sets[arg1]);
        case Transition.WILDCARD:
            return new WildcardTransition(target);
        default:
            throw "The specified transition type: " + type + " is not valid.";
    }
};

ATNDeserializer.prototype.stateFactory = function (type, ruleIndex) {
    if (this.stateFactories === null) {
        var sf = [];
        sf[ATNState.INVALID_TYPE] = null;
        sf[ATNState.BASIC] = function () {
            return new BasicState();
        };
        sf[ATNState.RULE_START] = function () {
            return new RuleStartState();
        };
        sf[ATNState.BLOCK_START] = function () {
            return new BasicBlockStartState();
        };
        sf[ATNState.PLUS_BLOCK_START] = function () {
            return new PlusBlockStartState();
        };
        sf[ATNState.STAR_BLOCK_START] = function () {
            return new StarBlockStartState();
        };
        sf[ATNState.TOKEN_START] = function () {
            return new TokensStartState();
        };
        sf[ATNState.RULE_STOP] = function () {
            return new RuleStopState();
        };
        sf[ATNState.BLOCK_END] = function () {
            return new BlockEndState();
        };
        sf[ATNState.STAR_LOOP_BACK] = function () {
            return new StarLoopbackState();
        };
        sf[ATNState.STAR_LOOP_ENTRY] = function () {
            return new StarLoopEntryState();
        };
        sf[ATNState.PLUS_LOOP_BACK] = function () {
            return new PlusLoopbackState();
        };
        sf[ATNState.LOOP_END] = function () {
            return new LoopEndState();
        };
        this.stateFactories = sf;
    }
    if (type > this.stateFactories.length || this.stateFactories[type] === null) {
        throw "The specified state type " + type + " is not valid.";
    } else {
        var s = this.stateFactories[type]();
        if (s !== null) {
            s.ruleIndex = ruleIndex;
            return s;
        }
    }
};

ATNDeserializer.prototype.lexerActionFactory = function (type, data1, data2) {
    if (this.actionFactories === null) {
        var af = [];
        af[LexerActionType.CHANNEL] = function (data1, data2) {
            return new LexerChannelAction(data1);
        };
        af[LexerActionType.CUSTOM] = function (data1, data2) {
            return new LexerCustomAction(data1, data2);
        };
        af[LexerActionType.MODE] = function (data1, data2) {
            return new LexerModeAction(data1);
        };
        af[LexerActionType.MORE] = function (data1, data2) {
            return LexerMoreAction.INSTANCE;
        };
        af[LexerActionType.POP_MODE] = function (data1, data2) {
            return LexerPopModeAction.INSTANCE;
        };
        af[LexerActionType.PUSH_MODE] = function (data1, data2) {
            return new LexerPushModeAction(data1);
        };
        af[LexerActionType.SKIP] = function (data1, data2) {
            return LexerSkipAction.INSTANCE;
        };
        af[LexerActionType.TYPE] = function (data1, data2) {
            return new LexerTypeAction(data1);
        };
        this.actionFactories = af;
    }
    if (type > this.actionFactories.length || this.actionFactories[type] === null) {
        throw "The specified lexer action type " + type + " is not valid.";
    } else {
        return this.actionFactories[type](data1, data2);
    }
};

exports.ATNDeserializer = ATNDeserializer;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

function ATNDeserializationOptions(copyFrom) {
  if (copyFrom === undefined) {
    copyFrom = null;
  }
  this.readOnly = false;
  this.verifyATN = copyFrom === null ? true : copyFrom.verifyATN;
  this.generateRuleBypassTransitions = copyFrom === null ? false : copyFrom.generateRuleBypassTransitions;

  return this;
}

ATNDeserializationOptions.defaultOptions = new ATNDeserializationOptions();
ATNDeserializationOptions.defaultOptions.readOnly = true;

//    def __setattr__(self, key, value):
//        if key!="readOnly" and self.readOnly:
//            raise Exception("The object is read only.")
//        super(type(self), self).__setattr__(key,value)

exports.ATNDeserializationOptions = ATNDeserializationOptions;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
//

function LexerActionType() {}

LexerActionType.CHANNEL = 0; //The type of a {@link LexerChannelAction} action.
LexerActionType.CUSTOM = 1; //The type of a {@link LexerCustomAction} action.
LexerActionType.MODE = 2; //The type of a {@link LexerModeAction} action.
LexerActionType.MORE = 3; //The type of a {@link LexerMoreAction} action.
LexerActionType.POP_MODE = 4; //The type of a {@link LexerPopModeAction} action.
LexerActionType.PUSH_MODE = 5; //The type of a {@link LexerPushModeAction} action.
LexerActionType.SKIP = 6; //The type of a {@link LexerSkipAction} action.
LexerActionType.TYPE = 7; //The type of a {@link LexerTypeAction} action.

function LexerAction(action) {
    this.actionType = action;
    this.isPositionDependent = false;
    return this;
}

LexerAction.prototype.hashCode = function () {
    var hash = new Hash();
    this.updateHashCode(hash);
    return hash.finish();
};

LexerAction.prototype.updateHashCode = function (hash) {
    hash.update(this.actionType);
};

LexerAction.prototype.equals = function (other) {
    return this === other;
};

//
// Implements the {@code skip} lexer action by calling {@link Lexer//skip}.
//
// <p>The {@code skip} command does not have any parameters, so this action is
// implemented as a singleton instance exposed by {@link //INSTANCE}.</p>
function LexerSkipAction() {
    LexerAction.call(this, LexerActionType.SKIP);
    return this;
}

LexerSkipAction.prototype = Object.create(LexerAction.prototype);
LexerSkipAction.prototype.constructor = LexerSkipAction;

// Provides a singleton instance of this parameterless lexer action.
LexerSkipAction.INSTANCE = new LexerSkipAction();

LexerSkipAction.prototype.execute = function (lexer) {
    lexer.skip();
};

LexerSkipAction.prototype.toString = function () {
    return "skip";
};

//  Implements the {@code type} lexer action by calling {@link Lexer//setType}
// with the assigned type.
function LexerTypeAction(type) {
    LexerAction.call(this, LexerActionType.TYPE);
    this.type = type;
    return this;
}

LexerTypeAction.prototype = Object.create(LexerAction.prototype);
LexerTypeAction.prototype.constructor = LexerTypeAction;

LexerTypeAction.prototype.execute = function (lexer) {
    lexer.type = this.type;
};

LexerTypeAction.prototype.updateHashCode = function (hash) {
    hash.update(this.actionType, this.type);
};

LexerTypeAction.prototype.equals = function (other) {
    if (this === other) {
        return true;
    } else if (!(other instanceof LexerTypeAction)) {
        return false;
    } else {
        return this.type === other.type;
    }
};

LexerTypeAction.prototype.toString = function () {
    return "type(" + this.type + ")";
};

// Implements the {@code pushMode} lexer action by calling
// {@link Lexer//pushMode} with the assigned mode.
function LexerPushModeAction(mode) {
    LexerAction.call(this, LexerActionType.PUSH_MODE);
    this.mode = mode;
    return this;
}

LexerPushModeAction.prototype = Object.create(LexerAction.prototype);
LexerPushModeAction.prototype.constructor = LexerPushModeAction;

// <p>This action is implemented by calling {@link Lexer//pushMode} with the
// value provided by {@link //getMode}.</p>
LexerPushModeAction.prototype.execute = function (lexer) {
    lexer.pushMode(this.mode);
};

LexerPushModeAction.prototype.updateHashCode = function (hash) {
    hash.update(this.actionType, this.mode);
};

LexerPushModeAction.prototype.equals = function (other) {
    if (this === other) {
        return true;
    } else if (!(other instanceof LexerPushModeAction)) {
        return false;
    } else {
        return this.mode === other.mode;
    }
};

LexerPushModeAction.prototype.toString = function () {
    return "pushMode(" + this.mode + ")";
};

// Implements the {@code popMode} lexer action by calling {@link Lexer//popMode}.
//
// <p>The {@code popMode} command does not have any parameters, so this action is
// implemented as a singleton instance exposed by {@link //INSTANCE}.</p>
function LexerPopModeAction() {
    LexerAction.call(this, LexerActionType.POP_MODE);
    return this;
}

LexerPopModeAction.prototype = Object.create(LexerAction.prototype);
LexerPopModeAction.prototype.constructor = LexerPopModeAction;

LexerPopModeAction.INSTANCE = new LexerPopModeAction();

// <p>This action is implemented by calling {@link Lexer//popMode}.</p>
LexerPopModeAction.prototype.execute = function (lexer) {
    lexer.popMode();
};

LexerPopModeAction.prototype.toString = function () {
    return "popMode";
};

// Implements the {@code more} lexer action by calling {@link Lexer//more}.
//
// <p>The {@code more} command does not have any parameters, so this action is
// implemented as a singleton instance exposed by {@link //INSTANCE}.</p>
function LexerMoreAction() {
    LexerAction.call(this, LexerActionType.MORE);
    return this;
}

LexerMoreAction.prototype = Object.create(LexerAction.prototype);
LexerMoreAction.prototype.constructor = LexerMoreAction;

LexerMoreAction.INSTANCE = new LexerMoreAction();

// <p>This action is implemented by calling {@link Lexer//popMode}.</p>
LexerMoreAction.prototype.execute = function (lexer) {
    lexer.more();
};

LexerMoreAction.prototype.toString = function () {
    return "more";
};

// Implements the {@code mode} lexer action by calling {@link Lexer//mode} with
// the assigned mode.
function LexerModeAction(mode) {
    LexerAction.call(this, LexerActionType.MODE);
    this.mode = mode;
    return this;
}

LexerModeAction.prototype = Object.create(LexerAction.prototype);
LexerModeAction.prototype.constructor = LexerModeAction;

// <p>This action is implemented by calling {@link Lexer//mode} with the
// value provided by {@link //getMode}.</p>
LexerModeAction.prototype.execute = function (lexer) {
    lexer.mode(this.mode);
};

LexerModeAction.prototype.updateHashCode = function (hash) {
    hash.update(this.actionType, this.mode);
};

LexerModeAction.prototype.equals = function (other) {
    if (this === other) {
        return true;
    } else if (!(other instanceof LexerModeAction)) {
        return false;
    } else {
        return this.mode === other.mode;
    }
};

LexerModeAction.prototype.toString = function () {
    return "mode(" + this.mode + ")";
};

// Executes a custom lexer action by calling {@link Recognizer//action} with the
// rule and action indexes assigned to the custom action. The implementation of
// a custom action is added to the generated code for the lexer in an override
// of {@link Recognizer//action} when the grammar is compiled.
//
// <p>This class may represent embedded actions created with the <code>{...}</code>
// syntax in ANTLR 4, as well as actions created for lexer commands where the
// command argument could not be evaluated when the grammar was compiled.</p>


// Constructs a custom lexer action with the specified rule and action
// indexes.
//
// @param ruleIndex The rule index to use for calls to
// {@link Recognizer//action}.
// @param actionIndex The action index to use for calls to
// {@link Recognizer//action}.

function LexerCustomAction(ruleIndex, actionIndex) {
    LexerAction.call(this, LexerActionType.CUSTOM);
    this.ruleIndex = ruleIndex;
    this.actionIndex = actionIndex;
    this.isPositionDependent = true;
    return this;
}

LexerCustomAction.prototype = Object.create(LexerAction.prototype);
LexerCustomAction.prototype.constructor = LexerCustomAction;

// <p>Custom actions are implemented by calling {@link Lexer//action} with the
// appropriate rule and action indexes.</p>
LexerCustomAction.prototype.execute = function (lexer) {
    lexer.action(null, this.ruleIndex, this.actionIndex);
};

LexerCustomAction.prototype.updateHashCode = function (hash) {
    hash.update(this.actionType, this.ruleIndex, this.actionIndex);
};

LexerCustomAction.prototype.equals = function (other) {
    if (this === other) {
        return true;
    } else if (!(other instanceof LexerCustomAction)) {
        return false;
    } else {
        return this.ruleIndex === other.ruleIndex && this.actionIndex === other.actionIndex;
    }
};

// Implements the {@code channel} lexer action by calling
// {@link Lexer//setChannel} with the assigned channel.
// Constructs a new {@code channel} action with the specified channel value.
// @param channel The channel value to pass to {@link Lexer//setChannel}.
function LexerChannelAction(channel) {
    LexerAction.call(this, LexerActionType.CHANNEL);
    this.channel = channel;
    return this;
}

LexerChannelAction.prototype = Object.create(LexerAction.prototype);
LexerChannelAction.prototype.constructor = LexerChannelAction;

// <p>This action is implemented by calling {@link Lexer//setChannel} with the
// value provided by {@link //getChannel}.</p>
LexerChannelAction.prototype.execute = function (lexer) {
    lexer._channel = this.channel;
};

LexerChannelAction.prototype.updateHashCode = function (hash) {
    hash.update(this.actionType, this.channel);
};

LexerChannelAction.prototype.equals = function (other) {
    if (this === other) {
        return true;
    } else if (!(other instanceof LexerChannelAction)) {
        return false;
    } else {
        return this.channel === other.channel;
    }
};

LexerChannelAction.prototype.toString = function () {
    return "channel(" + this.channel + ")";
};

// This implementation of {@link LexerAction} is used for tracking input offsets
// for position-dependent actions within a {@link LexerActionExecutor}.
//
// <p>This action is not serialized as part of the ATN, and is only required for
// position-dependent lexer actions which appear at a location other than the
// end of a rule. For more information about DFA optimizations employed for
// lexer actions, see {@link LexerActionExecutor//append} and
// {@link LexerActionExecutor//fixOffsetBeforeMatch}.</p>

// Constructs a new indexed custom action by associating a character offset
// with a {@link LexerAction}.
//
// <p>Note: This class is only required for lexer actions for which
// {@link LexerAction//isPositionDependent} returns {@code true}.</p>
//
// @param offset The offset into the input {@link CharStream}, relative to
// the token start index, at which the specified lexer action should be
// executed.
// @param action The lexer action to execute at a particular offset in the
// input {@link CharStream}.
function LexerIndexedCustomAction(offset, action) {
    LexerAction.call(this, action.actionType);
    this.offset = offset;
    this.action = action;
    this.isPositionDependent = true;
    return this;
}

LexerIndexedCustomAction.prototype = Object.create(LexerAction.prototype);
LexerIndexedCustomAction.prototype.constructor = LexerIndexedCustomAction;

// <p>This method calls {@link //execute} on the result of {@link //getAction}
// using the provided {@code lexer}.</p>
LexerIndexedCustomAction.prototype.execute = function (lexer) {
    // assume the input stream position was properly set by the calling code
    this.action.execute(lexer);
};

LexerIndexedCustomAction.prototype.updateHashCode = function (hash) {
    hash.update(this.actionType, this.offset, this.action);
};

LexerIndexedCustomAction.prototype.equals = function (other) {
    if (this === other) {
        return true;
    } else if (!(other instanceof LexerIndexedCustomAction)) {
        return false;
    } else {
        return this.offset === other.offset && this.action === other.action;
    }
};

exports.LexerActionType = LexerActionType;
exports.LexerSkipAction = LexerSkipAction;
exports.LexerChannelAction = LexerChannelAction;
exports.LexerCustomAction = LexerCustomAction;
exports.LexerIndexedCustomAction = LexerIndexedCustomAction;
exports.LexerMoreAction = LexerMoreAction;
exports.LexerTypeAction = LexerTypeAction;
exports.LexerPushModeAction = LexerPushModeAction;
exports.LexerPopModeAction = LexerPopModeAction;
exports.LexerModeAction = LexerModeAction;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
///

var DFAState = __webpack_require__(11).DFAState;
var ATNConfigSet = __webpack_require__(9).ATNConfigSet;
var getCachedPredictionContext = __webpack_require__(6).getCachedPredictionContext;

function ATNSimulator(atn, sharedContextCache) {

    // The context cache maps all PredictionContext objects that are ==
    //  to a single cached copy. This cache is shared across all contexts
    //  in all ATNConfigs in all DFA states.  We rebuild each ATNConfigSet
    //  to use only cached nodes/graphs in addDFAState(). We don't want to
    //  fill this during closure() since there are lots of contexts that
    //  pop up but are not used ever again. It also greatly slows down closure().
    //
    //  <p>This cache makes a huge difference in memory and a little bit in speed.
    //  For the Java grammar on java.*, it dropped the memory requirements
    //  at the end from 25M to 16M. We don't store any of the full context
    //  graphs in the DFA because they are limited to local context only,
    //  but apparently there's a lot of repetition there as well. We optimize
    //  the config contexts before storing the config set in the DFA states
    //  by literally rebuilding them with cached subgraphs only.</p>
    //
    //  <p>I tried a cache for use during closure operations, that was
    //  whacked after each adaptivePredict(). It cost a little bit
    //  more time I think and doesn't save on the overall footprint
    //  so it's not worth the complexity.</p>
    ///
    this.atn = atn;
    this.sharedContextCache = sharedContextCache;
    return this;
}

// Must distinguish between missing edge and edge we know leads nowhere///
ATNSimulator.ERROR = new DFAState(0x7FFFFFFF, new ATNConfigSet());

ATNSimulator.prototype.getCachedContext = function (context) {
    if (this.sharedContextCache === null) {
        return context;
    }
    var visited = {};
    return getCachedPredictionContext(context, this.sharedContextCache, visited);
};

exports.ATNSimulator = ATNSimulator;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
//
//
// This enumeration defines the prediction modes available in ANTLR 4 along with
// utility methods for analyzing configuration sets for conflicts and/or
// ambiguities.

var Set = __webpack_require__(0).Set;
var Map = __webpack_require__(0).Map;
var BitSet = __webpack_require__(0).BitSet;
var AltDict = __webpack_require__(0).AltDict;
var ATN = __webpack_require__(8).ATN;
var RuleStopState = __webpack_require__(5).RuleStopState;
var ATNConfigSet = __webpack_require__(9).ATNConfigSet;
var ATNConfig = __webpack_require__(16).ATNConfig;
var SemanticContext = __webpack_require__(10).SemanticContext;
var Hash = __webpack_require__(0).Hash;
var hashStuff = __webpack_require__(0).hashStuff;
var equalArrays = __webpack_require__(0).equalArrays;

function PredictionMode() {
    return this;
}

//
// The SLL(*) prediction mode. This prediction mode ignores the current
// parser context when making predictions. This is the fastest prediction
// mode, and provides correct results for many grammars. This prediction
// mode is more powerful than the prediction mode provided by ANTLR 3, but
// may result in syntax errors for grammar and input combinations which are
// not SLL.
//
// <p>
// When using this prediction mode, the parser will either return a correct
// parse tree (i.e. the same parse tree that would be returned with the
// {@link //LL} prediction mode), or it will report a syntax error. If a
// syntax error is encountered when using the {@link //SLL} prediction mode,
// it may be due to either an actual syntax error in the input or indicate
// that the particular combination of grammar and input requires the more
// powerful {@link //LL} prediction abilities to complete successfully.</p>
//
// <p>
// This prediction mode does not provide any guarantees for prediction
// behavior for syntactically-incorrect inputs.</p>
//
PredictionMode.SLL = 0;
//
// The LL(*) prediction mode. This prediction mode allows the current parser
// context to be used for resolving SLL conflicts that occur during
// prediction. This is the fastest prediction mode that guarantees correct
// parse results for all combinations of grammars with syntactically correct
// inputs.
//
// <p>
// When using this prediction mode, the parser will make correct decisions
// for all syntactically-correct grammar and input combinations. However, in
// cases where the grammar is truly ambiguous this prediction mode might not
// report a precise answer for <em>exactly which</em> alternatives are
// ambiguous.</p>
//
// <p>
// This prediction mode does not provide any guarantees for prediction
// behavior for syntactically-incorrect inputs.</p>
//
PredictionMode.LL = 1;
//
// The LL(*) prediction mode with exact ambiguity detection. In addition to
// the correctness guarantees provided by the {@link //LL} prediction mode,
// this prediction mode instructs the prediction algorithm to determine the
// complete and exact set of ambiguous alternatives for every ambiguous
// decision encountered while parsing.
//
// <p>
// This prediction mode may be used for diagnosing ambiguities during
// grammar development. Due to the performance overhead of calculating sets
// of ambiguous alternatives, this prediction mode should be avoided when
// the exact results are not necessary.</p>
//
// <p>
// This prediction mode does not provide any guarantees for prediction
// behavior for syntactically-incorrect inputs.</p>
//
PredictionMode.LL_EXACT_AMBIG_DETECTION = 2;

//
// Computes the SLL prediction termination condition.
//
// <p>
// This method computes the SLL prediction termination condition for both of
// the following cases.</p>
//
// <ul>
// <li>The usual SLL+LL fallback upon SLL conflict</li>
// <li>Pure SLL without LL fallback</li>
// </ul>
//
// <p><strong>COMBINED SLL+LL PARSING</strong></p>
//
// <p>When LL-fallback is enabled upon SLL conflict, correct predictions are
// ensured regardless of how the termination condition is computed by this
// method. Due to the substantially higher cost of LL prediction, the
// prediction should only fall back to LL when the additional lookahead
// cannot lead to a unique SLL prediction.</p>
//
// <p>Assuming combined SLL+LL parsing, an SLL configuration set with only
// conflicting subsets should fall back to full LL, even if the
// configuration sets don't resolve to the same alternative (e.g.
// {@code {1,2}} and {@code {3,4}}. If there is at least one non-conflicting
// configuration, SLL could continue with the hopes that more lookahead will
// resolve via one of those non-conflicting configurations.</p>
//
// <p>Here's the prediction termination rule them: SLL (for SLL+LL parsing)
// stops when it sees only conflicting configuration subsets. In contrast,
// full LL keeps going when there is uncertainty.</p>
//
// <p><strong>HEURISTIC</strong></p>
//
// <p>As a heuristic, we stop prediction when we see any conflicting subset
// unless we see a state that only has one alternative associated with it.
// The single-alt-state thing lets prediction continue upon rules like
// (otherwise, it would admit defeat too soon):</p>
//
// <p>{@code [12|1|[], 6|2|[], 12|2|[]]. s : (ID | ID ID?) ';' ;}</p>
//
// <p>When the ATN simulation reaches the state before {@code ';'}, it has a
// DFA state that looks like: {@code [12|1|[], 6|2|[], 12|2|[]]}. Naturally
// {@code 12|1|[]} and {@code 12|2|[]} conflict, but we cannot stop
// processing this node because alternative to has another way to continue,
// via {@code [6|2|[]]}.</p>
//
// <p>It also let's us continue for this rule:</p>
//
// <p>{@code [1|1|[], 1|2|[], 8|3|[]] a : A | A | A B ;}</p>
//
// <p>After matching input A, we reach the stop state for rule A, state 1.
// State 8 is the state right before B. Clearly alternatives 1 and 2
// conflict and no amount of further lookahead will separate the two.
// However, alternative 3 will be able to continue and so we do not stop
// working on this state. In the previous example, we're concerned with
// states associated with the conflicting alternatives. Here alt 3 is not
// associated with the conflicting configs, but since we can continue
// looking for input reasonably, don't declare the state done.</p>
//
// <p><strong>PURE SLL PARSING</strong></p>
//
// <p>To handle pure SLL parsing, all we have to do is make sure that we
// combine stack contexts for configurations that differ only by semantic
// predicate. From there, we can do the usual SLL termination heuristic.</p>
//
// <p><strong>PREDICATES IN SLL+LL PARSING</strong></p>
//
// <p>SLL decisions don't evaluate predicates until after they reach DFA stop
// states because they need to create the DFA cache that works in all
// semantic situations. In contrast, full LL evaluates predicates collected
// during start state computation so it can ignore predicates thereafter.
// This means that SLL termination detection can totally ignore semantic
// predicates.</p>
//
// <p>Implementation-wise, {@link ATNConfigSet} combines stack contexts but not
// semantic predicate contexts so we might see two configurations like the
// following.</p>
//
// <p>{@code (s, 1, x, {}), (s, 1, x', {p})}</p>
//
// <p>Before testing these configurations against others, we have to merge
// {@code x} and {@code x'} (without modifying the existing configurations).
// For example, we test {@code (x+x')==x''} when looking for conflicts in
// the following configurations.</p>
//
// <p>{@code (s, 1, x, {}), (s, 1, x', {p}), (s, 2, x'', {})}</p>
//
// <p>If the configuration set has predicates (as indicated by
// {@link ATNConfigSet//hasSemanticContext}), this algorithm makes a copy of
// the configurations to strip out all of the predicates so that a standard
// {@link ATNConfigSet} will merge everything ignoring predicates.</p>
//
PredictionMode.hasSLLConflictTerminatingPrediction = function (mode, configs) {
    // Configs in rule stop states indicate reaching the end of the decision
    // rule (local context) or end of start rule (full context). If all
    // configs meet this condition, then none of the configurations is able
    // to match additional input so we terminate prediction.
    //
    if (PredictionMode.allConfigsInRuleStopStates(configs)) {
        return true;
    }
    // pure SLL mode parsing
    if (mode === PredictionMode.SLL) {
        // Don't bother with combining configs from different semantic
        // contexts if we can fail over to full LL; costs more time
        // since we'll often fail over anyway.
        if (configs.hasSemanticContext) {
            // dup configs, tossing out semantic predicates
            var dup = new ATNConfigSet();
            for (var i = 0; i < configs.items.length; i++) {
                var c = configs.items[i];
                c = new ATNConfig({ semanticContext: SemanticContext.NONE }, c);
                dup.add(c);
            }
            configs = dup;
        }
        // now we have combined contexts for configs with dissimilar preds
    }
    // pure SLL or combined SLL+LL mode parsing
    var altsets = PredictionMode.getConflictingAltSubsets(configs);
    return PredictionMode.hasConflictingAltSet(altsets) && !PredictionMode.hasStateAssociatedWithOneAlt(configs);
};

// Checks if any configuration in {@code configs} is in a
// {@link RuleStopState}. Configurations meeting this condition have reached
// the end of the decision rule (local context) or end of start rule (full
// context).
//
// @param configs the configuration set to test
// @return {@code true} if any configuration in {@code configs} is in a
// {@link RuleStopState}, otherwise {@code false}
PredictionMode.hasConfigInRuleStopState = function (configs) {
    for (var i = 0; i < configs.items.length; i++) {
        var c = configs.items[i];
        if (c.state instanceof RuleStopState) {
            return true;
        }
    }
    return false;
};

// Checks if all configurations in {@code configs} are in a
// {@link RuleStopState}. Configurations meeting this condition have reached
// the end of the decision rule (local context) or end of start rule (full
// context).
//
// @param configs the configuration set to test
// @return {@code true} if all configurations in {@code configs} are in a
// {@link RuleStopState}, otherwise {@code false}
PredictionMode.allConfigsInRuleStopStates = function (configs) {
    for (var i = 0; i < configs.items.length; i++) {
        var c = configs.items[i];
        if (!(c.state instanceof RuleStopState)) {
            return false;
        }
    }
    return true;
};

//
// Full LL prediction termination.
//
// <p>Can we stop looking ahead during ATN simulation or is there some
// uncertainty as to which alternative we will ultimately pick, after
// consuming more input? Even if there are partial conflicts, we might know
// that everything is going to resolve to the same minimum alternative. That
// means we can stop since no more lookahead will change that fact. On the
// other hand, there might be multiple conflicts that resolve to different
// minimums. That means we need more look ahead to decide which of those
// alternatives we should predict.</p>
//
// <p>The basic idea is to split the set of configurations {@code C}, into
// conflicting subsets {@code (s, _, ctx, _)} and singleton subsets with
// non-conflicting configurations. Two configurations conflict if they have
// identical {@link ATNConfig//state} and {@link ATNConfig//context} values
// but different {@link ATNConfig//alt} value, e.g. {@code (s, i, ctx, _)}
// and {@code (s, j, ctx, _)} for {@code i!=j}.</p>
//
// <p>Reduce these configuration subsets to the set of possible alternatives.
// You can compute the alternative subsets in one pass as follows:</p>
//
// <p>{@code A_s,ctx = {i | (s, i, ctx, _)}} for each configuration in
// {@code C} holding {@code s} and {@code ctx} fixed.</p>
//
// <p>Or in pseudo-code, for each configuration {@code c} in {@code C}:</p>
//
// <pre>
// map[c] U= c.{@link ATNConfig//alt alt} // map hash/equals uses s and x, not
// alt and not pred
// </pre>
//
// <p>The values in {@code map} are the set of {@code A_s,ctx} sets.</p>
//
// <p>If {@code |A_s,ctx|=1} then there is no conflict associated with
// {@code s} and {@code ctx}.</p>
//
// <p>Reduce the subsets to singletons by choosing a minimum of each subset. If
// the union of these alternative subsets is a singleton, then no amount of
// more lookahead will help us. We will always pick that alternative. If,
// however, there is more than one alternative, then we are uncertain which
// alternative to predict and must continue looking for resolution. We may
// or may not discover an ambiguity in the future, even if there are no
// conflicting subsets this round.</p>
//
// <p>The biggest sin is to terminate early because it means we've made a
// decision but were uncertain as to the eventual outcome. We haven't used
// enough lookahead. On the other hand, announcing a conflict too late is no
// big deal; you will still have the conflict. It's just inefficient. It
// might even look until the end of file.</p>
//
// <p>No special consideration for semantic predicates is required because
// predicates are evaluated on-the-fly for full LL prediction, ensuring that
// no configuration contains a semantic context during the termination
// check.</p>
//
// <p><strong>CONFLICTING CONFIGS</strong></p>
//
// <p>Two configurations {@code (s, i, x)} and {@code (s, j, x')}, conflict
// when {@code i!=j} but {@code x=x'}. Because we merge all
// {@code (s, i, _)} configurations together, that means that there are at
// most {@code n} configurations associated with state {@code s} for
// {@code n} possible alternatives in the decision. The merged stacks
// complicate the comparison of configuration contexts {@code x} and
// {@code x'}. Sam checks to see if one is a subset of the other by calling
// merge and checking to see if the merged result is either {@code x} or
// {@code x'}. If the {@code x} associated with lowest alternative {@code i}
// is the superset, then {@code i} is the only possible prediction since the
// others resolve to {@code min(i)} as well. However, if {@code x} is
// associated with {@code j>i} then at least one stack configuration for
// {@code j} is not in conflict with alternative {@code i}. The algorithm
// should keep going, looking for more lookahead due to the uncertainty.</p>
//
// <p>For simplicity, I'm doing a equality check between {@code x} and
// {@code x'} that lets the algorithm continue to consume lookahead longer
// than necessary. The reason I like the equality is of course the
// simplicity but also because that is the test you need to detect the
// alternatives that are actually in conflict.</p>
//
// <p><strong>CONTINUE/STOP RULE</strong></p>
//
// <p>Continue if union of resolved alternative sets from non-conflicting and
// conflicting alternative subsets has more than one alternative. We are
// uncertain about which alternative to predict.</p>
//
// <p>The complete set of alternatives, {@code [i for (_,i,_)]}, tells us which
// alternatives are still in the running for the amount of input we've
// consumed at this point. The conflicting sets let us to strip away
// configurations that won't lead to more states because we resolve
// conflicts to the configuration with a minimum alternate for the
// conflicting set.</p>
//
// <p><strong>CASES</strong></p>
//
// <ul>
//
// <li>no conflicts and more than 1 alternative in set =&gt; continue</li>
//
// <li> {@code (s, 1, x)}, {@code (s, 2, x)}, {@code (s, 3, z)},
// {@code (s', 1, y)}, {@code (s', 2, y)} yields non-conflicting set
// {@code {3}} U conflicting sets {@code min({1,2})} U {@code min({1,2})} =
// {@code {1,3}} =&gt; continue
// </li>
//
// <li>{@code (s, 1, x)}, {@code (s, 2, x)}, {@code (s', 1, y)},
// {@code (s', 2, y)}, {@code (s'', 1, z)} yields non-conflicting set
// {@code {1}} U conflicting sets {@code min({1,2})} U {@code min({1,2})} =
// {@code {1}} =&gt; stop and predict 1</li>
//
// <li>{@code (s, 1, x)}, {@code (s, 2, x)}, {@code (s', 1, y)},
// {@code (s', 2, y)} yields conflicting, reduced sets {@code {1}} U
// {@code {1}} = {@code {1}} =&gt; stop and predict 1, can announce
// ambiguity {@code {1,2}}</li>
//
// <li>{@code (s, 1, x)}, {@code (s, 2, x)}, {@code (s', 2, y)},
// {@code (s', 3, y)} yields conflicting, reduced sets {@code {1}} U
// {@code {2}} = {@code {1,2}} =&gt; continue</li>
//
// <li>{@code (s, 1, x)}, {@code (s, 2, x)}, {@code (s', 3, y)},
// {@code (s', 4, y)} yields conflicting, reduced sets {@code {1}} U
// {@code {3}} = {@code {1,3}} =&gt; continue</li>
//
// </ul>
//
// <p><strong>EXACT AMBIGUITY DETECTION</strong></p>
//
// <p>If all states report the same conflicting set of alternatives, then we
// know we have the exact ambiguity set.</p>
//
// <p><code>|A_<em>i</em>|&gt;1</code> and
// <code>A_<em>i</em> = A_<em>j</em></code> for all <em>i</em>, <em>j</em>.</p>
//
// <p>In other words, we continue examining lookahead until all {@code A_i}
// have more than one alternative and all {@code A_i} are the same. If
// {@code A={{1,2}, {1,3}}}, then regular LL prediction would terminate
// because the resolved set is {@code {1}}. To determine what the real
// ambiguity is, we have to know whether the ambiguity is between one and
// two or one and three so we keep going. We can only stop prediction when
// we need exact ambiguity detection when the sets look like
// {@code A={{1,2}}} or {@code {{1,2},{1,2}}}, etc...</p>
//
PredictionMode.resolvesToJustOneViableAlt = function (altsets) {
    return PredictionMode.getSingleViableAlt(altsets);
};

//
// Determines if every alternative subset in {@code altsets} contains more
// than one alternative.
//
// @param altsets a collection of alternative subsets
// @return {@code true} if every {@link BitSet} in {@code altsets} has
// {@link BitSet//cardinality cardinality} &gt; 1, otherwise {@code false}
//
PredictionMode.allSubsetsConflict = function (altsets) {
    return !PredictionMode.hasNonConflictingAltSet(altsets);
};
//
// Determines if any single alternative subset in {@code altsets} contains
// exactly one alternative.
//
// @param altsets a collection of alternative subsets
// @return {@code true} if {@code altsets} contains a {@link BitSet} with
// {@link BitSet//cardinality cardinality} 1, otherwise {@code false}
//
PredictionMode.hasNonConflictingAltSet = function (altsets) {
    for (var i = 0; i < altsets.length; i++) {
        var alts = altsets[i];
        if (alts.length === 1) {
            return true;
        }
    }
    return false;
};

//
// Determines if any single alternative subset in {@code altsets} contains
// more than one alternative.
//
// @param altsets a collection of alternative subsets
// @return {@code true} if {@code altsets} contains a {@link BitSet} with
// {@link BitSet//cardinality cardinality} &gt; 1, otherwise {@code false}
//
PredictionMode.hasConflictingAltSet = function (altsets) {
    for (var i = 0; i < altsets.length; i++) {
        var alts = altsets[i];
        if (alts.length > 1) {
            return true;
        }
    }
    return false;
};

//
// Determines if every alternative subset in {@code altsets} is equivalent.
//
// @param altsets a collection of alternative subsets
// @return {@code true} if every member of {@code altsets} is equal to the
// others, otherwise {@code false}
//
PredictionMode.allSubsetsEqual = function (altsets) {
    var first = null;
    for (var i = 0; i < altsets.length; i++) {
        var alts = altsets[i];
        if (first === null) {
            first = alts;
        } else if (alts !== first) {
            return false;
        }
    }
    return true;
};

//
// Returns the unique alternative predicted by all alternative subsets in
// {@code altsets}. If no such alternative exists, this method returns
// {@link ATN//INVALID_ALT_NUMBER}.
//
// @param altsets a collection of alternative subsets
//
PredictionMode.getUniqueAlt = function (altsets) {
    var all = PredictionMode.getAlts(altsets);
    if (all.length === 1) {
        return all.minValue();
    } else {
        return ATN.INVALID_ALT_NUMBER;
    }
};

// Gets the complete set of represented alternatives for a collection of
// alternative subsets. This method returns the union of each {@link BitSet}
// in {@code altsets}.
//
// @param altsets a collection of alternative subsets
// @return the set of represented alternatives in {@code altsets}
//
PredictionMode.getAlts = function (altsets) {
    var all = new BitSet();
    altsets.map(function (alts) {
        all.or(alts);
    });
    return all;
};

//
// This function gets the conflicting alt subsets from a configuration set.
// For each configuration {@code c} in {@code configs}:
//
// <pre>
// map[c] U= c.{@link ATNConfig//alt alt} // map hash/equals uses s and x, not
// alt and not pred
// </pre>

PredictionMode.getConflictingAltSubsets = function (configs) {
    var configToAlts = new Map();
    configToAlts.hashFunction = function (cfg) {
        hashStuff(cfg.state.stateNumber, cfg.context);
    };
    configToAlts.equalsFunction = function (c1, c2) {
        return c1.state.stateNumber == c2.state.stateNumber && c1.context.equals(c2.context);
    };
    configs.items.map(function (cfg) {
        var alts = configToAlts.get(cfg);
        if (alts === null) {
            alts = new BitSet();
            configToAlts.put(cfg, alts);
        }
        alts.add(cfg.alt);
    });
    return configToAlts.getValues();
};

//
// Get a map from state to alt subset from a configuration set. For each
// configuration {@code c} in {@code configs}:
//
// <pre>
// map[c.{@link ATNConfig//state state}] U= c.{@link ATNConfig//alt alt}
// </pre>
//
PredictionMode.getStateToAltMap = function (configs) {
    var m = new AltDict();
    configs.items.map(function (c) {
        var alts = m.get(c.state);
        if (alts === null) {
            alts = new BitSet();
            m.put(c.state, alts);
        }
        alts.add(c.alt);
    });
    return m;
};

PredictionMode.hasStateAssociatedWithOneAlt = function (configs) {
    var values = PredictionMode.getStateToAltMap(configs).values();
    for (var i = 0; i < values.length; i++) {
        if (values[i].length === 1) {
            return true;
        }
    }
    return false;
};

PredictionMode.getSingleViableAlt = function (altsets) {
    var result = null;
    for (var i = 0; i < altsets.length; i++) {
        var alts = altsets[i];
        var minAlt = alts.minValue();
        if (result === null) {
            result = minAlt;
        } else if (result !== minAlt) {
            // more than 1 viable alt
            return ATN.INVALID_ALT_NUMBER;
        }
    }
    return result;
};

exports.PredictionMode = PredictionMode;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
//

var Token = __webpack_require__(1).Token;
var Errors = __webpack_require__(3);
var NoViableAltException = Errors.NoViableAltException;
var InputMismatchException = Errors.InputMismatchException;
var FailedPredicateException = Errors.FailedPredicateException;
var ParseCancellationException = Errors.ParseCancellationException;
var ATNState = __webpack_require__(5).ATNState;
var Interval = __webpack_require__(2).Interval;
var IntervalSet = __webpack_require__(2).IntervalSet;

function ErrorStrategy() {}

ErrorStrategy.prototype.reset = function (recognizer) {};

ErrorStrategy.prototype.recoverInline = function (recognizer) {};

ErrorStrategy.prototype.recover = function (recognizer, e) {};

ErrorStrategy.prototype.sync = function (recognizer) {};

ErrorStrategy.prototype.inErrorRecoveryMode = function (recognizer) {};

ErrorStrategy.prototype.reportError = function (recognizer) {};

// This is the default implementation of {@link ANTLRErrorStrategy} used for
// error reporting and recovery in ANTLR parsers.
//
function DefaultErrorStrategy() {
    ErrorStrategy.call(this);
    // Indicates whether the error strategy is currently "recovering from an
    // error". This is used to suppress reporting multiple error messages while
    // attempting to recover from a detected syntax error.
    //
    // @see //inErrorRecoveryMode
    //
    this.errorRecoveryMode = false;

    // The index into the input stream where the last error occurred.
    // This is used to prevent infinite loops where an error is found
    // but no token is consumed during recovery...another error is found,
    // ad nauseum. This is a failsafe mechanism to guarantee that at least
    // one token/tree node is consumed for two errors.
    //
    this.lastErrorIndex = -1;
    this.lastErrorStates = null;
    return this;
}

DefaultErrorStrategy.prototype = Object.create(ErrorStrategy.prototype);
DefaultErrorStrategy.prototype.constructor = DefaultErrorStrategy;

// <p>The default implementation simply calls {@link //endErrorCondition} to
// ensure that the handler is not in error recovery mode.</p>
DefaultErrorStrategy.prototype.reset = function (recognizer) {
    this.endErrorCondition(recognizer);
};

//
// This method is called to enter error recovery mode when a recognition
// exception is reported.
//
// @param recognizer the parser instance
//
DefaultErrorStrategy.prototype.beginErrorCondition = function (recognizer) {
    this.errorRecoveryMode = true;
};

DefaultErrorStrategy.prototype.inErrorRecoveryMode = function (recognizer) {
    return this.errorRecoveryMode;
};

//
// This method is called to leave error recovery mode after recovering from
// a recognition exception.
//
// @param recognizer
//
DefaultErrorStrategy.prototype.endErrorCondition = function (recognizer) {
    this.errorRecoveryMode = false;
    this.lastErrorStates = null;
    this.lastErrorIndex = -1;
};

//
// {@inheritDoc}
//
// <p>The default implementation simply calls {@link //endErrorCondition}.</p>
//
DefaultErrorStrategy.prototype.reportMatch = function (recognizer) {
    this.endErrorCondition(recognizer);
};

//
// {@inheritDoc}
//
// <p>The default implementation returns immediately if the handler is already
// in error recovery mode. Otherwise, it calls {@link //beginErrorCondition}
// and dispatches the reporting task based on the runtime type of {@code e}
// according to the following table.</p>
//
// <ul>
// <li>{@link NoViableAltException}: Dispatches the call to
// {@link //reportNoViableAlternative}</li>
// <li>{@link InputMismatchException}: Dispatches the call to
// {@link //reportInputMismatch}</li>
// <li>{@link FailedPredicateException}: Dispatches the call to
// {@link //reportFailedPredicate}</li>
// <li>All other types: calls {@link Parser//notifyErrorListeners} to report
// the exception</li>
// </ul>
//
DefaultErrorStrategy.prototype.reportError = function (recognizer, e) {
    // if we've already reported an error and have not matched a token
    // yet successfully, don't report any errors.
    if (this.inErrorRecoveryMode(recognizer)) {
        return; // don't report spurious errors
    }
    this.beginErrorCondition(recognizer);
    if (e instanceof NoViableAltException) {
        this.reportNoViableAlternative(recognizer, e);
    } else if (e instanceof InputMismatchException) {
        this.reportInputMismatch(recognizer, e);
    } else if (e instanceof FailedPredicateException) {
        this.reportFailedPredicate(recognizer, e);
    } else {
        console.log("unknown recognition error type: " + e.constructor.name);
        console.log(e.stack);
        recognizer.notifyErrorListeners(e.getOffendingToken(), e.getMessage(), e);
    }
};
//
// {@inheritDoc}
//
// <p>The default implementation resynchronizes the parser by consuming tokens
// until we find one in the resynchronization set--loosely the set of tokens
// that can follow the current rule.</p>
//
DefaultErrorStrategy.prototype.recover = function (recognizer, e) {
    if (this.lastErrorIndex === recognizer.getInputStream().index && this.lastErrorStates !== null && this.lastErrorStates.indexOf(recognizer.state) >= 0) {
        // uh oh, another error at same token index and previously-visited
        // state in ATN; must be a case where LT(1) is in the recovery
        // token set so nothing got consumed. Consume a single token
        // at least to prevent an infinite loop; this is a failsafe.
        recognizer.consume();
    }
    this.lastErrorIndex = recognizer._input.index;
    if (this.lastErrorStates === null) {
        this.lastErrorStates = [];
    }
    this.lastErrorStates.push(recognizer.state);
    var followSet = this.getErrorRecoverySet(recognizer);
    this.consumeUntil(recognizer, followSet);
};

// The default implementation of {@link ANTLRErrorStrategy//sync} makes sure
// that the current lookahead symbol is consistent with what were expecting
// at this point in the ATN. You can call this anytime but ANTLR only
// generates code to check before subrules/loops and each iteration.
//
// <p>Implements Jim Idle's magic sync mechanism in closures and optional
// subrules. E.g.,</p>
//
// <pre>
// a : sync ( stuff sync )* ;
// sync : {consume to what can follow sync} ;
// </pre>
//
// At the start of a sub rule upon error, {@link //sync} performs single
// token deletion, if possible. If it can't do that, it bails on the current
// rule and uses the default error recovery, which consumes until the
// resynchronization set of the current rule.
//
// <p>If the sub rule is optional ({@code (...)?}, {@code (...)*}, or block
// with an empty alternative), then the expected set includes what follows
// the subrule.</p>
//
// <p>During loop iteration, it consumes until it sees a token that can start a
// sub rule or what follows loop. Yes, that is pretty aggressive. We opt to
// stay in the loop as long as possible.</p>
//
// <p><strong>ORIGINS</strong></p>
//
// <p>Previous versions of ANTLR did a poor job of their recovery within loops.
// A single mismatch token or missing token would force the parser to bail
// out of the entire rules surrounding the loop. So, for rule</p>
//
// <pre>
// classDef : 'class' ID '{' member* '}'
// </pre>
//
// input with an extra token between members would force the parser to
// consume until it found the next class definition rather than the next
// member definition of the current class.
//
// <p>This functionality cost a little bit of effort because the parser has to
// compare token set at the start of the loop and at each iteration. If for
// some reason speed is suffering for you, you can turn off this
// functionality by simply overriding this method as a blank { }.</p>
//
DefaultErrorStrategy.prototype.sync = function (recognizer) {
    // If already recovering, don't try to sync
    if (this.inErrorRecoveryMode(recognizer)) {
        return;
    }
    var s = recognizer._interp.atn.states[recognizer.state];
    var la = recognizer.getTokenStream().LA(1);
    // try cheaper subset first; might get lucky. seems to shave a wee bit off
    var nextTokens = recognizer.atn.nextTokens(s);
    if (nextTokens.contains(Token.EPSILON) || nextTokens.contains(la)) {
        return;
    }
    switch (s.stateType) {
        case ATNState.BLOCK_START:
        case ATNState.STAR_BLOCK_START:
        case ATNState.PLUS_BLOCK_START:
        case ATNState.STAR_LOOP_ENTRY:
            // report error and recover if possible
            if (this.singleTokenDeletion(recognizer) !== null) {
                return;
            } else {
                throw new InputMismatchException(recognizer);
            }
            break;
        case ATNState.PLUS_LOOP_BACK:
        case ATNState.STAR_LOOP_BACK:
            this.reportUnwantedToken(recognizer);
            var expecting = new IntervalSet();
            expecting.addSet(recognizer.getExpectedTokens());
            var whatFollowsLoopIterationOrRule = expecting.addSet(this.getErrorRecoverySet(recognizer));
            this.consumeUntil(recognizer, whatFollowsLoopIterationOrRule);
            break;
        default:
        // do nothing if we can't identify the exact kind of ATN state
    }
};

// This is called by {@link //reportError} when the exception is a
// {@link NoViableAltException}.
//
// @see //reportError
//
// @param recognizer the parser instance
// @param e the recognition exception
//
DefaultErrorStrategy.prototype.reportNoViableAlternative = function (recognizer, e) {
    var tokens = recognizer.getTokenStream();
    var input;
    if (tokens !== null) {
        if (e.startToken.type === Token.EOF) {
            input = "<EOF>";
        } else {
            input = tokens.getText(new Interval(e.startToken, e.offendingToken));
        }
    } else {
        input = "<unknown input>";
    }
    var msg = "no viable alternative at input " + this.escapeWSAndQuote(input);
    recognizer.notifyErrorListeners(msg, e.offendingToken, e);
};

//
// This is called by {@link //reportError} when the exception is an
// {@link InputMismatchException}.
//
// @see //reportError
//
// @param recognizer the parser instance
// @param e the recognition exception
//
DefaultErrorStrategy.prototype.reportInputMismatch = function (recognizer, e) {
    var msg = "mismatched input " + this.getTokenErrorDisplay(e.offendingToken) + " expecting " + e.getExpectedTokens().toString(recognizer.literalNames, recognizer.symbolicNames);
    recognizer.notifyErrorListeners(msg, e.offendingToken, e);
};

//
// This is called by {@link //reportError} when the exception is a
// {@link FailedPredicateException}.
//
// @see //reportError
//
// @param recognizer the parser instance
// @param e the recognition exception
//
DefaultErrorStrategy.prototype.reportFailedPredicate = function (recognizer, e) {
    var ruleName = recognizer.ruleNames[recognizer._ctx.ruleIndex];
    var msg = "rule " + ruleName + " " + e.message;
    recognizer.notifyErrorListeners(msg, e.offendingToken, e);
};

// This method is called to report a syntax error which requires the removal
// of a token from the input stream. At the time this method is called, the
// erroneous symbol is current {@code LT(1)} symbol and has not yet been
// removed from the input stream. When this method returns,
// {@code recognizer} is in error recovery mode.
//
// <p>This method is called when {@link //singleTokenDeletion} identifies
// single-token deletion as a viable recovery strategy for a mismatched
// input error.</p>
//
// <p>The default implementation simply returns if the handler is already in
// error recovery mode. Otherwise, it calls {@link //beginErrorCondition} to
// enter error recovery mode, followed by calling
// {@link Parser//notifyErrorListeners}.</p>
//
// @param recognizer the parser instance
//
DefaultErrorStrategy.prototype.reportUnwantedToken = function (recognizer) {
    if (this.inErrorRecoveryMode(recognizer)) {
        return;
    }
    this.beginErrorCondition(recognizer);
    var t = recognizer.getCurrentToken();
    var tokenName = this.getTokenErrorDisplay(t);
    var expecting = this.getExpectedTokens(recognizer);
    var msg = "extraneous input " + tokenName + " expecting " + expecting.toString(recognizer.literalNames, recognizer.symbolicNames);
    recognizer.notifyErrorListeners(msg, t, null);
};
// This method is called to report a syntax error which requires the
// insertion of a missing token into the input stream. At the time this
// method is called, the missing token has not yet been inserted. When this
// method returns, {@code recognizer} is in error recovery mode.
//
// <p>This method is called when {@link //singleTokenInsertion} identifies
// single-token insertion as a viable recovery strategy for a mismatched
// input error.</p>
//
// <p>The default implementation simply returns if the handler is already in
// error recovery mode. Otherwise, it calls {@link //beginErrorCondition} to
// enter error recovery mode, followed by calling
// {@link Parser//notifyErrorListeners}.</p>
//
// @param recognizer the parser instance
//
DefaultErrorStrategy.prototype.reportMissingToken = function (recognizer) {
    if (this.inErrorRecoveryMode(recognizer)) {
        return;
    }
    this.beginErrorCondition(recognizer);
    var t = recognizer.getCurrentToken();
    var expecting = this.getExpectedTokens(recognizer);
    var msg = "missing " + expecting.toString(recognizer.literalNames, recognizer.symbolicNames) + " at " + this.getTokenErrorDisplay(t);
    recognizer.notifyErrorListeners(msg, t, null);
};

// <p>The default implementation attempts to recover from the mismatched input
// by using single token insertion and deletion as described below. If the
// recovery attempt fails, this method throws an
// {@link InputMismatchException}.</p>
//
// <p><strong>EXTRA TOKEN</strong> (single token deletion)</p>
//
// <p>{@code LA(1)} is not what we are looking for. If {@code LA(2)} has the
// right token, however, then assume {@code LA(1)} is some extra spurious
// token and delete it. Then consume and return the next token (which was
// the {@code LA(2)} token) as the successful result of the match operation.</p>
//
// <p>This recovery strategy is implemented by {@link
// //singleTokenDeletion}.</p>
//
// <p><strong>MISSING TOKEN</strong> (single token insertion)</p>
//
// <p>If current token (at {@code LA(1)}) is consistent with what could come
// after the expected {@code LA(1)} token, then assume the token is missing
// and use the parser's {@link TokenFactory} to create it on the fly. The
// "insertion" is performed by returning the created token as the successful
// result of the match operation.</p>
//
// <p>This recovery strategy is implemented by {@link
// //singleTokenInsertion}.</p>
//
// <p><strong>EXAMPLE</strong></p>
//
// <p>For example, Input {@code i=(3;} is clearly missing the {@code ')'}. When
// the parser returns from the nested call to {@code expr}, it will have
// call chain:</p>
//
// <pre>
// stat &rarr; expr &rarr; atom
// </pre>
//
// and it will be trying to match the {@code ')'} at this point in the
// derivation:
//
// <pre>
// =&gt; ID '=' '(' INT ')' ('+' atom)* ';'
// ^
// </pre>
//
// The attempt to match {@code ')'} will fail when it sees {@code ';'} and
// call {@link //recoverInline}. To recover, it sees that {@code LA(1)==';'}
// is in the set of tokens that can follow the {@code ')'} token reference
// in rule {@code atom}. It can assume that you forgot the {@code ')'}.
//
DefaultErrorStrategy.prototype.recoverInline = function (recognizer) {
    // SINGLE TOKEN DELETION
    var matchedSymbol = this.singleTokenDeletion(recognizer);
    if (matchedSymbol !== null) {
        // we have deleted the extra token.
        // now, move past ttype token as if all were ok
        recognizer.consume();
        return matchedSymbol;
    }
    // SINGLE TOKEN INSERTION
    if (this.singleTokenInsertion(recognizer)) {
        return this.getMissingSymbol(recognizer);
    }
    // even that didn't work; must throw the exception
    throw new InputMismatchException(recognizer);
};

//
// This method implements the single-token insertion inline error recovery
// strategy. It is called by {@link //recoverInline} if the single-token
// deletion strategy fails to recover from the mismatched input. If this
// method returns {@code true}, {@code recognizer} will be in error recovery
// mode.
//
// <p>This method determines whether or not single-token insertion is viable by
// checking if the {@code LA(1)} input symbol could be successfully matched
// if it were instead the {@code LA(2)} symbol. If this method returns
// {@code true}, the caller is responsible for creating and inserting a
// token with the correct type to produce this behavior.</p>
//
// @param recognizer the parser instance
// @return {@code true} if single-token insertion is a viable recovery
// strategy for the current mismatched input, otherwise {@code false}
//
DefaultErrorStrategy.prototype.singleTokenInsertion = function (recognizer) {
    var currentSymbolType = recognizer.getTokenStream().LA(1);
    // if current token is consistent with what could come after current
    // ATN state, then we know we're missing a token; error recovery
    // is free to conjure up and insert the missing token
    var atn = recognizer._interp.atn;
    var currentState = atn.states[recognizer.state];
    var next = currentState.transitions[0].target;
    var expectingAtLL2 = atn.nextTokens(next, recognizer._ctx);
    if (expectingAtLL2.contains(currentSymbolType)) {
        this.reportMissingToken(recognizer);
        return true;
    } else {
        return false;
    }
};

// This method implements the single-token deletion inline error recovery
// strategy. It is called by {@link //recoverInline} to attempt to recover
// from mismatched input. If this method returns null, the parser and error
// handler state will not have changed. If this method returns non-null,
// {@code recognizer} will <em>not</em> be in error recovery mode since the
// returned token was a successful match.
//
// <p>If the single-token deletion is successful, this method calls
// {@link //reportUnwantedToken} to report the error, followed by
// {@link Parser//consume} to actually "delete" the extraneous token. Then,
// before returning {@link //reportMatch} is called to signal a successful
// match.</p>
//
// @param recognizer the parser instance
// @return the successfully matched {@link Token} instance if single-token
// deletion successfully recovers from the mismatched input, otherwise
// {@code null}
//
DefaultErrorStrategy.prototype.singleTokenDeletion = function (recognizer) {
    var nextTokenType = recognizer.getTokenStream().LA(2);
    var expecting = this.getExpectedTokens(recognizer);
    if (expecting.contains(nextTokenType)) {
        this.reportUnwantedToken(recognizer);
        // print("recoverFromMismatchedToken deleting " \
        // + str(recognizer.getTokenStream().LT(1)) \
        // + " since " + str(recognizer.getTokenStream().LT(2)) \
        // + " is what we want", file=sys.stderr)
        recognizer.consume(); // simply delete extra token
        // we want to return the token we're actually matching
        var matchedSymbol = recognizer.getCurrentToken();
        this.reportMatch(recognizer); // we know current token is correct
        return matchedSymbol;
    } else {
        return null;
    }
};

// Conjure up a missing token during error recovery.
//
// The recognizer attempts to recover from single missing
// symbols. But, actions might refer to that missing symbol.
// For example, x=ID {f($x);}. The action clearly assumes
// that there has been an identifier matched previously and that
// $x points at that token. If that token is missing, but
// the next token in the stream is what we want we assume that
// this token is missing and we keep going. Because we
// have to return some token to replace the missing token,
// we have to conjure one up. This method gives the user control
// over the tokens returned for missing tokens. Mostly,
// you will want to create something special for identifier
// tokens. For literals such as '{' and ',', the default
// action in the parser or tree parser works. It simply creates
// a CommonToken of the appropriate type. The text will be the token.
// If you change what tokens must be created by the lexer,
// override this method to create the appropriate tokens.
//
DefaultErrorStrategy.prototype.getMissingSymbol = function (recognizer) {
    var currentSymbol = recognizer.getCurrentToken();
    var expecting = this.getExpectedTokens(recognizer);
    var expectedTokenType = expecting.first(); // get any element
    var tokenText;
    if (expectedTokenType === Token.EOF) {
        tokenText = "<missing EOF>";
    } else {
        tokenText = "<missing " + recognizer.literalNames[expectedTokenType] + ">";
    }
    var current = currentSymbol;
    var lookback = recognizer.getTokenStream().LT(-1);
    if (current.type === Token.EOF && lookback !== null) {
        current = lookback;
    }
    return recognizer.getTokenFactory().create(current.source, expectedTokenType, tokenText, Token.DEFAULT_CHANNEL, -1, -1, current.line, current.column);
};

DefaultErrorStrategy.prototype.getExpectedTokens = function (recognizer) {
    return recognizer.getExpectedTokens();
};

// How should a token be displayed in an error message? The default
// is to display just the text, but during development you might
// want to have a lot of information spit out. Override in that case
// to use t.toString() (which, for CommonToken, dumps everything about
// the token). This is better than forcing you to override a method in
// your token objects because you don't have to go modify your lexer
// so that it creates a new Java type.
//
DefaultErrorStrategy.prototype.getTokenErrorDisplay = function (t) {
    if (t === null) {
        return "<no token>";
    }
    var s = t.text;
    if (s === null) {
        if (t.type === Token.EOF) {
            s = "<EOF>";
        } else {
            s = "<" + t.type + ">";
        }
    }
    return this.escapeWSAndQuote(s);
};

DefaultErrorStrategy.prototype.escapeWSAndQuote = function (s) {
    s = s.replace(/\n/g, "\\n");
    s = s.replace(/\r/g, "\\r");
    s = s.replace(/\t/g, "\\t");
    return "'" + s + "'";
};

// Compute the error recovery set for the current rule. During
// rule invocation, the parser pushes the set of tokens that can
// follow that rule reference on the stack; this amounts to
// computing FIRST of what follows the rule reference in the
// enclosing rule. See LinearApproximator.FIRST().
// This local follow set only includes tokens
// from within the rule; i.e., the FIRST computation done by
// ANTLR stops at the end of a rule.
//
// EXAMPLE
//
// When you find a "no viable alt exception", the input is not
// consistent with any of the alternatives for rule r. The best
// thing to do is to consume tokens until you see something that
// can legally follow a call to r//or* any rule that called r.
// You don't want the exact set of viable next tokens because the
// input might just be missing a token--you might consume the
// rest of the input looking for one of the missing tokens.
//
// Consider grammar:
//
// a : '[' b ']'
// | '(' b ')'
// ;
// b : c '^' INT ;
// c : ID
// | INT
// ;
//
// At each rule invocation, the set of tokens that could follow
// that rule is pushed on a stack. Here are the various
// context-sensitive follow sets:
//
// FOLLOW(b1_in_a) = FIRST(']') = ']'
// FOLLOW(b2_in_a) = FIRST(')') = ')'
// FOLLOW(c_in_b) = FIRST('^') = '^'
//
// Upon erroneous input "[]", the call chain is
//
// a -> b -> c
//
// and, hence, the follow context stack is:
//
// depth follow set start of rule execution
// 0 <EOF> a (from main())
// 1 ']' b
// 2 '^' c
//
// Notice that ')' is not included, because b would have to have
// been called from a different context in rule a for ')' to be
// included.
//
// For error recovery, we cannot consider FOLLOW(c)
// (context-sensitive or otherwise). We need the combined set of
// all context-sensitive FOLLOW sets--the set of all tokens that
// could follow any reference in the call chain. We need to
// resync to one of those tokens. Note that FOLLOW(c)='^' and if
// we resync'd to that token, we'd consume until EOF. We need to
// sync to context-sensitive FOLLOWs for a, b, and c: {']','^'}.
// In this case, for input "[]", LA(1) is ']' and in the set, so we would
// not consume anything. After printing an error, rule c would
// return normally. Rule b would not find the required '^' though.
// At this point, it gets a mismatched token error and throws an
// exception (since LA(1) is not in the viable following token
// set). The rule exception handler tries to recover, but finds
// the same recovery set and doesn't consume anything. Rule b
// exits normally returning to rule a. Now it finds the ']' (and
// with the successful match exits errorRecovery mode).
//
// So, you can see that the parser walks up the call chain looking
// for the token that was a member of the recovery set.
//
// Errors are not generated in errorRecovery mode.
//
// ANTLR's error recovery mechanism is based upon original ideas:
//
// "Algorithms + Data Structures = Programs" by Niklaus Wirth
//
// and
//
// "A note on error recovery in recursive descent parsers":
// http://portal.acm.org/citation.cfm?id=947902.947905
//
// Later, Josef Grosch had some good ideas:
//
// "Efficient and Comfortable Error Recovery in Recursive Descent
// Parsers":
// ftp://www.cocolab.com/products/cocktail/doca4.ps/ell.ps.zip
//
// Like Grosch I implement context-sensitive FOLLOW sets that are combined
// at run-time upon error to avoid overhead during parsing.
//
DefaultErrorStrategy.prototype.getErrorRecoverySet = function (recognizer) {
    var atn = recognizer._interp.atn;
    var ctx = recognizer._ctx;
    var recoverSet = new IntervalSet();
    while (ctx !== null && ctx.invokingState >= 0) {
        // compute what follows who invoked us
        var invokingState = atn.states[ctx.invokingState];
        var rt = invokingState.transitions[0];
        var follow = atn.nextTokens(rt.followState);
        recoverSet.addSet(follow);
        ctx = ctx.parentCtx;
    }
    recoverSet.removeOne(Token.EPSILON);
    return recoverSet;
};

// Consume tokens until one matches the given token set.//
DefaultErrorStrategy.prototype.consumeUntil = function (recognizer, set) {
    var ttype = recognizer.getTokenStream().LA(1);
    while (ttype !== Token.EOF && !set.contains(ttype)) {
        recognizer.consume();
        ttype = recognizer.getTokenStream().LA(1);
    }
};

//
// This implementation of {@link ANTLRErrorStrategy} responds to syntax errors
// by immediately canceling the parse operation with a
// {@link ParseCancellationException}. The implementation ensures that the
// {@link ParserRuleContext//exception} field is set for all parse tree nodes
// that were not completed prior to encountering the error.
//
// <p>
// This error strategy is useful in the following scenarios.</p>
//
// <ul>
// <li><strong>Two-stage parsing:</strong> This error strategy allows the first
// stage of two-stage parsing to immediately terminate if an error is
// encountered, and immediately fall back to the second stage. In addition to
// avoiding wasted work by attempting to recover from errors here, the empty
// implementation of {@link BailErrorStrategy//sync} improves the performance of
// the first stage.</li>
// <li><strong>Silent validation:</strong> When syntax errors are not being
// reported or logged, and the parse result is simply ignored if errors occur,
// the {@link BailErrorStrategy} avoids wasting work on recovering from errors
// when the result will be ignored either way.</li>
// </ul>
//
// <p>
// {@code myparser.setErrorHandler(new BailErrorStrategy());}</p>
//
// @see Parser//setErrorHandler(ANTLRErrorStrategy)
//
function BailErrorStrategy() {
    DefaultErrorStrategy.call(this);
    return this;
}

BailErrorStrategy.prototype = Object.create(DefaultErrorStrategy.prototype);
BailErrorStrategy.prototype.constructor = BailErrorStrategy;

// Instead of recovering from exception {@code e}, re-throw it wrapped
// in a {@link ParseCancellationException} so it is not caught by the
// rule function catches. Use {@link Exception//getCause()} to get the
// original {@link RecognitionException}.
//
BailErrorStrategy.prototype.recover = function (recognizer, e) {
    var context = recognizer._ctx;
    while (context !== null) {
        context.exception = e;
        context = context.parentCtx;
    }
    throw new ParseCancellationException(e);
};

// Make sure we don't attempt to recover inline; if the parser
// successfully recovers, it won't throw an exception.
//
BailErrorStrategy.prototype.recoverInline = function (recognizer) {
    this.recover(recognizer, new InputMismatchException(recognizer));
};

// Make sure we don't attempt to recover from problems in subrules.//
BailErrorStrategy.prototype.sync = function (recognizer) {
    // pass
};

exports.BailErrorStrategy = BailErrorStrategy;
exports.DefaultErrorStrategy = DefaultErrorStrategy;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Generated from lib/Expr.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = __webpack_require__(17);

// This class defines a complete listener for a parse tree produced by ExprParser.
function ExprListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ExprListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ExprListener.prototype.constructor = ExprListener;

// Enter a parse tree produced by ExprParser#prog.
ExprListener.prototype.enterProg = function (ctx) {};

// Exit a parse tree produced by ExprParser#prog.
ExprListener.prototype.exitProg = function (ctx) {};

// Enter a parse tree produced by ExprParser#paren.
ExprListener.prototype.enterParen = function (ctx) {};

// Exit a parse tree produced by ExprParser#paren.
ExprListener.prototype.exitParen = function (ctx) {};

// Enter a parse tree produced by ExprParser#compare.
ExprListener.prototype.enterCompare = function (ctx) {};

// Exit a parse tree produced by ExprParser#compare.
ExprListener.prototype.exitCompare = function (ctx) {};

// Enter a parse tree produced by ExprParser#blank.
ExprListener.prototype.enterBlank = function (ctx) {};

// Exit a parse tree produced by ExprParser#blank.
ExprListener.prototype.exitBlank = function (ctx) {};

// Enter a parse tree produced by ExprParser#or.
ExprListener.prototype.enterOr = function (ctx) {};

// Exit a parse tree produced by ExprParser#or.
ExprListener.prototype.exitOr = function (ctx) {};

// Enter a parse tree produced by ExprParser#func.
ExprListener.prototype.enterFunc = function (ctx) {};

// Exit a parse tree produced by ExprParser#func.
ExprListener.prototype.exitFunc = function (ctx) {};

// Enter a parse tree produced by ExprParser#and.
ExprListener.prototype.enterAnd = function (ctx) {};

// Exit a parse tree produced by ExprParser#and.
ExprListener.prototype.exitAnd = function (ctx) {};

exports.ExprListener = ExprListener;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _brace = __webpack_require__(40);

var _brace2 = _interopRequireDefault(_brace);

__webpack_require__(42);

var _debounce = __webpack_require__(43);

var _debounce2 = _interopRequireDefault(_debounce);

__webpack_require__(52);

var _validate = __webpack_require__(53);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var editor = _brace2.default.edit("editor");
var session = editor.getSession();
editor.setTheme("ace/theme/chrome");
session.setMode("ace/mode/my-mode");
var Range = _brace2.default.acequire('ace/range').Range;

var markers = [];

function validateInput() {
    var errors = (0, _validate2.default)(editor.getValue());
    markers.forEach(function (marker) {
        return session.removeMarker(marker);
    });
    markers = [];
    session.setAnnotations(errors.map(function (error) {
        return {
            row: error.line,
            column: error.column,
            text: error.text,
            type: "error" // also warning and information
        };
    }));

    errors.forEach(function (error) {
        markers.push(session.addMarker(new Range(error.line, error.column, error.line, error.column + error.length), "lint-mark-error", false));
    });
}

var debounced = (0, _debounce2.default)(validateInput, 500);
session.on('change', debounced);

// document.getElementById('btnRun').onclick = () => {
//     run(editor.getValue()).then(val => alert('result: ' + val));
// };

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2010, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** *//**
 * Define a module along with a payload
 * @param module a name for the payload
 * @param payload a function to call with (acequire, exports, module) params
 */(function(){var ACE_NAMESPACE="ace";var global=function(){return this;}();if(!global&&typeof window!="undefined")global=window;// strict mode
if(!ACE_NAMESPACE&&typeof acequirejs!=="undefined")return;var define=function define(module,deps,payload){if(typeof module!=="string"){if(define.original)define.original.apply(this,arguments);else{console.error("dropping module because define wasn\'t a string.");console.trace();}return;}if(arguments.length==2)payload=deps;if(!define.modules[module]){define.payloads[module]=payload;define.modules[module]=null;}};define.modules={};define.payloads={};/**
 * Get at functionality define()ed using the function above
 */var _acequire=function _acequire(parentId,module,callback){if(typeof module==="string"){var payload=lookup(parentId,module);if(payload!=undefined){callback&&callback();return payload;}}else if(Object.prototype.toString.call(module)==="[object Array]"){var params=[];for(var i=0,l=module.length;i<l;++i){var dep=lookup(parentId,module[i]);if(dep==undefined&&acequire.original)return;params.push(dep);}return callback&&callback.apply(null,params)||true;}};var acequire=function acequire(module,callback){var packagedModule=_acequire("",module,callback);if(packagedModule==undefined&&acequire.original)return acequire.original.apply(this,arguments);return packagedModule;};var normalizeModule=function normalizeModule(parentId,moduleName){// normalize plugin acequires
if(moduleName.indexOf("!")!==-1){var chunks=moduleName.split("!");return normalizeModule(parentId,chunks[0])+"!"+normalizeModule(parentId,chunks[1]);}// normalize relative acequires
if(moduleName.charAt(0)=="."){var base=parentId.split("/").slice(0,-1).join("/");moduleName=base+"/"+moduleName;while(moduleName.indexOf(".")!==-1&&previous!=moduleName){var previous=moduleName;moduleName=moduleName.replace(/\/\.\//,"/").replace(/[^\/]+\/\.\.\//,"");}}return moduleName;};/**
 * Internal function to lookup moduleNames and resolve them by calling the
 * definition function if needed.
 */var lookup=function lookup(parentId,moduleName){moduleName=normalizeModule(parentId,moduleName);var module=define.modules[moduleName];if(!module){module=define.payloads[moduleName];if(typeof module==='function'){var exports={};var mod={id:moduleName,uri:'',exports:exports,packaged:true};var req=function req(module,callback){return _acequire(moduleName,module,callback);};var returnValue=module(req,exports,mod);exports=returnValue||mod.exports;define.modules[moduleName]=exports;delete define.payloads[moduleName];}module=define.modules[moduleName]=exports||module;}return module;};function exportAce(ns){var root=global;if(ns){if(!global[ns])global[ns]={};root=global[ns];}if(!root.define||!root.define.packaged){define.original=root.define;root.define=define;root.define.packaged=true;}if(!root.acequire||!root.acequire.packaged){acequire.original=root.acequire;root.acequire=acequire;root.acequire.packaged=true;}}exportAce(ACE_NAMESPACE);})();ace.define("ace/lib/regexp",["require","exports","module"],function(acequire,exports,module){"use strict";var real={exec:RegExp.prototype.exec,test:RegExp.prototype.test,match:String.prototype.match,replace:String.prototype.replace,split:String.prototype.split},compliantExecNpcg=real.exec.call(/()??/,"")[1]===undefined,// check `exec` handling of nonparticipating capturing groups
compliantLastIndexIncrement=function(){var x=/^/g;real.test.call(x,"");return!x.lastIndex;}();if(compliantLastIndexIncrement&&compliantExecNpcg)return;RegExp.prototype.exec=function(str){var match=real.exec.apply(this,arguments),name,r2;if(typeof str=='string'&&match){if(!compliantExecNpcg&&match.length>1&&indexOf(match,"")>-1){r2=RegExp(this.source,real.replace.call(getNativeFlags(this),"g",""));real.replace.call(str.slice(match.index),r2,function(){for(var i=1;i<arguments.length-2;i++){if(arguments[i]===undefined)match[i]=undefined;}});}if(this._xregexp&&this._xregexp.captureNames){for(var i=1;i<match.length;i++){name=this._xregexp.captureNames[i-1];if(name)match[name]=match[i];}}if(!compliantLastIndexIncrement&&this.global&&!match[0].length&&this.lastIndex>match.index)this.lastIndex--;}return match;};if(!compliantLastIndexIncrement){RegExp.prototype.test=function(str){var match=real.exec.call(this,str);if(match&&this.global&&!match[0].length&&this.lastIndex>match.index)this.lastIndex--;return!!match;};}function getNativeFlags(regex){return(regex.global?"g":"")+(regex.ignoreCase?"i":"")+(regex.multiline?"m":"")+(regex.extended?"x":"")+(// Proposed for ES4; included in AS3
regex.sticky?"y":"");}function indexOf(array,item,from){if(Array.prototype.indexOf)// Use the native array method if available
return array.indexOf(item,from);for(var i=from||0;i<array.length;i++){if(array[i]===item)return i;}return-1;}});ace.define("ace/lib/es5-shim",["require","exports","module"],function(acequire,exports,module){function Empty(){}if(!Function.prototype.bind){Function.prototype.bind=function bind(that){// .length is 1
var target=this;if(typeof target!="function"){throw new TypeError("Function.prototype.bind called on incompatible "+target);}var args=slice.call(arguments,1);// for normal call
var bound=function bound(){if(this instanceof bound){var result=target.apply(this,args.concat(slice.call(arguments)));if(Object(result)===result){return result;}return this;}else{return target.apply(that,args.concat(slice.call(arguments)));}};if(target.prototype){Empty.prototype=target.prototype;bound.prototype=new Empty();Empty.prototype=null;}return bound;};}var call=Function.prototype.call;var prototypeOfArray=Array.prototype;var prototypeOfObject=Object.prototype;var slice=prototypeOfArray.slice;var _toString=call.bind(prototypeOfObject.toString);var owns=call.bind(prototypeOfObject.hasOwnProperty);var defineGetter;var defineSetter;var lookupGetter;var lookupSetter;var supportsAccessors;if(supportsAccessors=owns(prototypeOfObject,"__defineGetter__")){defineGetter=call.bind(prototypeOfObject.__defineGetter__);defineSetter=call.bind(prototypeOfObject.__defineSetter__);lookupGetter=call.bind(prototypeOfObject.__lookupGetter__);lookupSetter=call.bind(prototypeOfObject.__lookupSetter__);}if([1,2].splice(0).length!=2){if(function(){// test IE < 9 to splice bug - see issue #138
function makeArray(l){var a=new Array(l+2);a[0]=a[1]=0;return a;}var array=[],lengthBefore;array.splice.apply(array,makeArray(20));array.splice.apply(array,makeArray(26));lengthBefore=array.length;//46
array.splice(5,0,"XXX");// add one element
lengthBefore+1==array.length;if(lengthBefore+1==array.length){return true;// has right splice implementation without bugs
}}()){//IE 6/7
var array_splice=Array.prototype.splice;Array.prototype.splice=function(start,deleteCount){if(!arguments.length){return[];}else{return array_splice.apply(this,[start===void 0?0:start,deleteCount===void 0?this.length-start:deleteCount].concat(slice.call(arguments,2)));}};}else{//IE8
Array.prototype.splice=function(pos,removeCount){var length=this.length;if(pos>0){if(pos>length)pos=length;}else if(pos==void 0){pos=0;}else if(pos<0){pos=Math.max(length+pos,0);}if(!(pos+removeCount<length))removeCount=length-pos;var removed=this.slice(pos,pos+removeCount);var insert=slice.call(arguments,2);var add=insert.length;if(pos===length){if(add){this.push.apply(this,insert);}}else{var remove=Math.min(removeCount,length-pos);var tailOldPos=pos+remove;var tailNewPos=tailOldPos+add-remove;var tailCount=length-tailOldPos;var lengthAfterRemove=length-remove;if(tailNewPos<tailOldPos){// case A
for(var i=0;i<tailCount;++i){this[tailNewPos+i]=this[tailOldPos+i];}}else if(tailNewPos>tailOldPos){// case B
for(i=tailCount;i--;){this[tailNewPos+i]=this[tailOldPos+i];}}// else, add == remove (nothing to do)
if(add&&pos===lengthAfterRemove){this.length=lengthAfterRemove;// truncate array
this.push.apply(this,insert);}else{this.length=lengthAfterRemove+add;// reserves space
for(i=0;i<add;++i){this[pos+i]=insert[i];}}}return removed;};}}if(!Array.isArray){Array.isArray=function isArray(obj){return _toString(obj)=="[object Array]";};}var boxedString=Object("a"),splitString=boxedString[0]!="a"||!(0 in boxedString);if(!Array.prototype.forEach){Array.prototype.forEach=function forEach(fun/*, thisp*/){var object=toObject(this),self=splitString&&_toString(this)=="[object String]"?this.split(""):object,thisp=arguments[1],i=-1,length=self.length>>>0;if(_toString(fun)!="[object Function]"){throw new TypeError();// TODO message
}while(++i<length){if(i in self){fun.call(thisp,self[i],i,object);}}};}if(!Array.prototype.map){Array.prototype.map=function map(fun/*, thisp*/){var object=toObject(this),self=splitString&&_toString(this)=="[object String]"?this.split(""):object,length=self.length>>>0,result=Array(length),thisp=arguments[1];if(_toString(fun)!="[object Function]"){throw new TypeError(fun+" is not a function");}for(var i=0;i<length;i++){if(i in self)result[i]=fun.call(thisp,self[i],i,object);}return result;};}if(!Array.prototype.filter){Array.prototype.filter=function filter(fun/*, thisp */){var object=toObject(this),self=splitString&&_toString(this)=="[object String]"?this.split(""):object,length=self.length>>>0,result=[],value,thisp=arguments[1];if(_toString(fun)!="[object Function]"){throw new TypeError(fun+" is not a function");}for(var i=0;i<length;i++){if(i in self){value=self[i];if(fun.call(thisp,value,i,object)){result.push(value);}}}return result;};}if(!Array.prototype.every){Array.prototype.every=function every(fun/*, thisp */){var object=toObject(this),self=splitString&&_toString(this)=="[object String]"?this.split(""):object,length=self.length>>>0,thisp=arguments[1];if(_toString(fun)!="[object Function]"){throw new TypeError(fun+" is not a function");}for(var i=0;i<length;i++){if(i in self&&!fun.call(thisp,self[i],i,object)){return false;}}return true;};}if(!Array.prototype.some){Array.prototype.some=function some(fun/*, thisp */){var object=toObject(this),self=splitString&&_toString(this)=="[object String]"?this.split(""):object,length=self.length>>>0,thisp=arguments[1];if(_toString(fun)!="[object Function]"){throw new TypeError(fun+" is not a function");}for(var i=0;i<length;i++){if(i in self&&fun.call(thisp,self[i],i,object)){return true;}}return false;};}if(!Array.prototype.reduce){Array.prototype.reduce=function reduce(fun/*, initial*/){var object=toObject(this),self=splitString&&_toString(this)=="[object String]"?this.split(""):object,length=self.length>>>0;if(_toString(fun)!="[object Function]"){throw new TypeError(fun+" is not a function");}if(!length&&arguments.length==1){throw new TypeError("reduce of empty array with no initial value");}var i=0;var result;if(arguments.length>=2){result=arguments[1];}else{do{if(i in self){result=self[i++];break;}if(++i>=length){throw new TypeError("reduce of empty array with no initial value");}}while(true);}for(;i<length;i++){if(i in self){result=fun.call(void 0,result,self[i],i,object);}}return result;};}if(!Array.prototype.reduceRight){Array.prototype.reduceRight=function reduceRight(fun/*, initial*/){var object=toObject(this),self=splitString&&_toString(this)=="[object String]"?this.split(""):object,length=self.length>>>0;if(_toString(fun)!="[object Function]"){throw new TypeError(fun+" is not a function");}if(!length&&arguments.length==1){throw new TypeError("reduceRight of empty array with no initial value");}var result,i=length-1;if(arguments.length>=2){result=arguments[1];}else{do{if(i in self){result=self[i--];break;}if(--i<0){throw new TypeError("reduceRight of empty array with no initial value");}}while(true);}do{if(i in this){result=fun.call(void 0,result,self[i],i,object);}}while(i--);return result;};}if(!Array.prototype.indexOf||[0,1].indexOf(1,2)!=-1){Array.prototype.indexOf=function indexOf(sought/*, fromIndex */){var self=splitString&&_toString(this)=="[object String]"?this.split(""):toObject(this),length=self.length>>>0;if(!length){return-1;}var i=0;if(arguments.length>1){i=toInteger(arguments[1]);}i=i>=0?i:Math.max(0,length+i);for(;i<length;i++){if(i in self&&self[i]===sought){return i;}}return-1;};}if(!Array.prototype.lastIndexOf||[0,1].lastIndexOf(0,-3)!=-1){Array.prototype.lastIndexOf=function lastIndexOf(sought/*, fromIndex */){var self=splitString&&_toString(this)=="[object String]"?this.split(""):toObject(this),length=self.length>>>0;if(!length){return-1;}var i=length-1;if(arguments.length>1){i=Math.min(i,toInteger(arguments[1]));}i=i>=0?i:length-Math.abs(i);for(;i>=0;i--){if(i in self&&sought===self[i]){return i;}}return-1;};}if(!Object.getPrototypeOf){Object.getPrototypeOf=function getPrototypeOf(object){return object.__proto__||(object.constructor?object.constructor.prototype:prototypeOfObject);};}if(!Object.getOwnPropertyDescriptor){var ERR_NON_OBJECT="Object.getOwnPropertyDescriptor called on a "+"non-object: ";Object.getOwnPropertyDescriptor=function getOwnPropertyDescriptor(object,property){if((typeof object==="undefined"?"undefined":_typeof(object))!="object"&&typeof object!="function"||object===null)throw new TypeError(ERR_NON_OBJECT+object);if(!owns(object,property))return;var descriptor,getter,setter;descriptor={enumerable:true,configurable:true};if(supportsAccessors){var prototype=object.__proto__;object.__proto__=prototypeOfObject;var getter=lookupGetter(object,property);var setter=lookupSetter(object,property);object.__proto__=prototype;if(getter||setter){if(getter)descriptor.get=getter;if(setter)descriptor.set=setter;return descriptor;}}descriptor.value=object[property];return descriptor;};}if(!Object.getOwnPropertyNames){Object.getOwnPropertyNames=function getOwnPropertyNames(object){return Object.keys(object);};}if(!Object.create){var createEmpty;if(Object.prototype.__proto__===null){createEmpty=function createEmpty(){return{"__proto__":null};};}else{createEmpty=function createEmpty(){var empty={};for(var i in empty){empty[i]=null;}empty.constructor=empty.hasOwnProperty=empty.propertyIsEnumerable=empty.isPrototypeOf=empty.toLocaleString=empty.toString=empty.valueOf=empty.__proto__=null;return empty;};}Object.create=function create(prototype,properties){var object;if(prototype===null){object=createEmpty();}else{if((typeof prototype==="undefined"?"undefined":_typeof(prototype))!="object")throw new TypeError("typeof prototype["+(typeof prototype==="undefined"?"undefined":_typeof(prototype))+"] != 'object'");var Type=function Type(){};Type.prototype=prototype;object=new Type();object.__proto__=prototype;}if(properties!==void 0)Object.defineProperties(object,properties);return object;};}function doesDefinePropertyWork(object){try{Object.defineProperty(object,"sentinel",{});return"sentinel"in object;}catch(exception){}}if(Object.defineProperty){var definePropertyWorksOnObject=doesDefinePropertyWork({});var definePropertyWorksOnDom=typeof document=="undefined"||doesDefinePropertyWork(document.createElement("div"));if(!definePropertyWorksOnObject||!definePropertyWorksOnDom){var definePropertyFallback=Object.defineProperty;}}if(!Object.defineProperty||definePropertyFallback){var ERR_NON_OBJECT_DESCRIPTOR="Property description must be an object: ";var ERR_NON_OBJECT_TARGET="Object.defineProperty called on non-object: ";var ERR_ACCESSORS_NOT_SUPPORTED="getters & setters can not be defined "+"on this javascript engine";Object.defineProperty=function defineProperty(object,property,descriptor){if((typeof object==="undefined"?"undefined":_typeof(object))!="object"&&typeof object!="function"||object===null)throw new TypeError(ERR_NON_OBJECT_TARGET+object);if((typeof descriptor==="undefined"?"undefined":_typeof(descriptor))!="object"&&typeof descriptor!="function"||descriptor===null)throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR+descriptor);if(definePropertyFallback){try{return definePropertyFallback.call(Object,object,property,descriptor);}catch(exception){}}if(owns(descriptor,"value")){if(supportsAccessors&&(lookupGetter(object,property)||lookupSetter(object,property))){var prototype=object.__proto__;object.__proto__=prototypeOfObject;delete object[property];object[property]=descriptor.value;object.__proto__=prototype;}else{object[property]=descriptor.value;}}else{if(!supportsAccessors)throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);if(owns(descriptor,"get"))defineGetter(object,property,descriptor.get);if(owns(descriptor,"set"))defineSetter(object,property,descriptor.set);}return object;};}if(!Object.defineProperties){Object.defineProperties=function defineProperties(object,properties){for(var property in properties){if(owns(properties,property))Object.defineProperty(object,property,properties[property]);}return object;};}if(!Object.seal){Object.seal=function seal(object){return object;};}if(!Object.freeze){Object.freeze=function freeze(object){return object;};}try{Object.freeze(function(){});}catch(exception){Object.freeze=function freeze(freezeObject){return function freeze(object){if(typeof object=="function"){return object;}else{return freezeObject(object);}};}(Object.freeze);}if(!Object.preventExtensions){Object.preventExtensions=function preventExtensions(object){return object;};}if(!Object.isSealed){Object.isSealed=function isSealed(object){return false;};}if(!Object.isFrozen){Object.isFrozen=function isFrozen(object){return false;};}if(!Object.isExtensible){Object.isExtensible=function isExtensible(object){if(Object(object)===object){throw new TypeError();// TODO message
}var name='';while(owns(object,name)){name+='?';}object[name]=true;var returnValue=owns(object,name);delete object[name];return returnValue;};}if(!Object.keys){var hasDontEnumBug=true,dontEnums=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],dontEnumsLength=dontEnums.length;for(var key in{"toString":null}){hasDontEnumBug=false;}Object.keys=function keys(object){if((typeof object==="undefined"?"undefined":_typeof(object))!="object"&&typeof object!="function"||object===null){throw new TypeError("Object.keys called on a non-object");}var keys=[];for(var name in object){if(owns(object,name)){keys.push(name);}}if(hasDontEnumBug){for(var i=0,ii=dontEnumsLength;i<ii;i++){var dontEnum=dontEnums[i];if(owns(object,dontEnum)){keys.push(dontEnum);}}}return keys;};}if(!Date.now){Date.now=function now(){return new Date().getTime();};}var ws="\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003"+"\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028"+"\u2029\uFEFF";if(!String.prototype.trim||ws.trim()){ws="["+ws+"]";var trimBeginRegexp=new RegExp("^"+ws+ws+"*"),trimEndRegexp=new RegExp(ws+ws+"*$");String.prototype.trim=function trim(){return String(this).replace(trimBeginRegexp,"").replace(trimEndRegexp,"");};}function toInteger(n){n=+n;if(n!==n){// isNaN
n=0;}else if(n!==0&&n!==1/0&&n!==-(1/0)){n=(n>0||-1)*Math.floor(Math.abs(n));}return n;}function isPrimitive(input){var type=typeof input==="undefined"?"undefined":_typeof(input);return input===null||type==="undefined"||type==="boolean"||type==="number"||type==="string";}function toPrimitive(input){var val,valueOf,toString;if(isPrimitive(input)){return input;}valueOf=input.valueOf;if(typeof valueOf==="function"){val=valueOf.call(input);if(isPrimitive(val)){return val;}}toString=input.toString;if(typeof toString==="function"){val=toString.call(input);if(isPrimitive(val)){return val;}}throw new TypeError();}var toObject=function toObject(o){if(o==null){// this matches both null and undefined
throw new TypeError("can't convert "+o+" to object");}return Object(o);};});ace.define("ace/lib/fixoldbrowsers",["require","exports","module","ace/lib/regexp","ace/lib/es5-shim"],function(acequire,exports,module){"use strict";acequire("./regexp");acequire("./es5-shim");});ace.define("ace/lib/dom",["require","exports","module"],function(acequire,exports,module){"use strict";var XHTML_NS="http://www.w3.org/1999/xhtml";exports.getDocumentHead=function(doc){if(!doc)doc=document;return doc.head||doc.getElementsByTagName("head")[0]||doc.documentElement;};exports.createElement=function(tag,ns){return document.createElementNS?document.createElementNS(ns||XHTML_NS,tag):document.createElement(tag);};exports.hasCssClass=function(el,name){var classes=(el.className+"").split(/\s+/g);return classes.indexOf(name)!==-1;};exports.addCssClass=function(el,name){if(!exports.hasCssClass(el,name)){el.className+=" "+name;}};exports.removeCssClass=function(el,name){var classes=el.className.split(/\s+/g);while(true){var index=classes.indexOf(name);if(index==-1){break;}classes.splice(index,1);}el.className=classes.join(" ");};exports.toggleCssClass=function(el,name){var classes=el.className.split(/\s+/g),add=true;while(true){var index=classes.indexOf(name);if(index==-1){break;}add=false;classes.splice(index,1);}if(add)classes.push(name);el.className=classes.join(" ");return add;};exports.setCssClass=function(node,className,include){if(include){exports.addCssClass(node,className);}else{exports.removeCssClass(node,className);}};exports.hasCssString=function(id,doc){var index=0,sheets;doc=doc||document;if(doc.createStyleSheet&&(sheets=doc.styleSheets)){while(index<sheets.length){if(sheets[index++].owningElement.id===id)return true;}}else if(sheets=doc.getElementsByTagName("style")){while(index<sheets.length){if(sheets[index++].id===id)return true;}}return false;};exports.importCssString=function importCssString(cssText,id,doc){doc=doc||document;if(id&&exports.hasCssString(id,doc))return null;var style;if(id)cssText+="\n/*# sourceURL=ace/css/"+id+" */";if(doc.createStyleSheet){style=doc.createStyleSheet();style.cssText=cssText;if(id)style.owningElement.id=id;}else{style=exports.createElement("style");style.appendChild(doc.createTextNode(cssText));if(id)style.id=id;exports.getDocumentHead(doc).appendChild(style);}};exports.importCssStylsheet=function(uri,doc){if(doc.createStyleSheet){doc.createStyleSheet(uri);}else{var link=exports.createElement('link');link.rel='stylesheet';link.href=uri;exports.getDocumentHead(doc).appendChild(link);}};exports.getInnerWidth=function(element){return parseInt(exports.computedStyle(element,"paddingLeft"),10)+parseInt(exports.computedStyle(element,"paddingRight"),10)+element.clientWidth;};exports.getInnerHeight=function(element){return parseInt(exports.computedStyle(element,"paddingTop"),10)+parseInt(exports.computedStyle(element,"paddingBottom"),10)+element.clientHeight;};exports.scrollbarWidth=function(document){var inner=exports.createElement("ace_inner");inner.style.width="100%";inner.style.minWidth="0px";inner.style.height="200px";inner.style.display="block";var outer=exports.createElement("ace_outer");var style=outer.style;style.position="absolute";style.left="-10000px";style.overflow="hidden";style.width="200px";style.minWidth="0px";style.height="150px";style.display="block";outer.appendChild(inner);var body=document.documentElement;body.appendChild(outer);var noScrollbar=inner.offsetWidth;style.overflow="scroll";var withScrollbar=inner.offsetWidth;if(noScrollbar==withScrollbar){withScrollbar=outer.clientWidth;}body.removeChild(outer);return noScrollbar-withScrollbar;};if(typeof document=="undefined"){exports.importCssString=function(){};return;}if(window.pageYOffset!==undefined){exports.getPageScrollTop=function(){return window.pageYOffset;};exports.getPageScrollLeft=function(){return window.pageXOffset;};}else{exports.getPageScrollTop=function(){return document.body.scrollTop;};exports.getPageScrollLeft=function(){return document.body.scrollLeft;};}if(window.getComputedStyle)exports.computedStyle=function(element,style){if(style)return(window.getComputedStyle(element,"")||{})[style]||"";return window.getComputedStyle(element,"")||{};};else exports.computedStyle=function(element,style){if(style)return element.currentStyle[style];return element.currentStyle;};exports.setInnerHtml=function(el,innerHtml){var element=el.cloneNode(false);//document.createElement("div");
element.innerHTML=innerHtml;el.parentNode.replaceChild(element,el);return element;};if("textContent"in document.documentElement){exports.setInnerText=function(el,innerText){el.textContent=innerText;};exports.getInnerText=function(el){return el.textContent;};}else{exports.setInnerText=function(el,innerText){el.innerText=innerText;};exports.getInnerText=function(el){return el.innerText;};}exports.getParentWindow=function(document){return document.defaultView||document.parentWindow;};});ace.define("ace/lib/oop",["require","exports","module"],function(acequire,exports,module){"use strict";exports.inherits=function(ctor,superCtor){ctor.super_=superCtor;ctor.prototype=Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:false,writable:true,configurable:true}});};exports.mixin=function(obj,mixin){for(var key in mixin){obj[key]=mixin[key];}return obj;};exports.implement=function(proto,mixin){exports.mixin(proto,mixin);};});ace.define("ace/lib/keys",["require","exports","module","ace/lib/fixoldbrowsers","ace/lib/oop"],function(acequire,exports,module){"use strict";acequire("./fixoldbrowsers");var oop=acequire("./oop");var Keys=function(){var ret={MODIFIER_KEYS:{16:'Shift',17:'Ctrl',18:'Alt',224:'Meta'},KEY_MODS:{"ctrl":1,"alt":2,"option":2,"shift":4,"super":8,"meta":8,"command":8,"cmd":8},FUNCTION_KEYS:{8:"Backspace",9:"Tab",13:"Return",19:"Pause",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"Print",45:"Insert",46:"Delete",96:"Numpad0",97:"Numpad1",98:"Numpad2",99:"Numpad3",100:"Numpad4",101:"Numpad5",102:"Numpad6",103:"Numpad7",104:"Numpad8",105:"Numpad9",'-13':"NumpadEnter",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"Numlock",145:"Scrolllock"},PRINTABLE_KEYS:{32:' ',48:'0',49:'1',50:'2',51:'3',52:'4',53:'5',54:'6',55:'7',56:'8',57:'9',59:';',61:'=',65:'a',66:'b',67:'c',68:'d',69:'e',70:'f',71:'g',72:'h',73:'i',74:'j',75:'k',76:'l',77:'m',78:'n',79:'o',80:'p',81:'q',82:'r',83:'s',84:'t',85:'u',86:'v',87:'w',88:'x',89:'y',90:'z',107:'+',109:'-',110:'.',186:';',187:'=',188:',',189:'-',190:'.',191:'/',192:'`',219:'[',220:'\\',221:']',222:"'",111:'/',106:'*'}};var name,i;for(i in ret.FUNCTION_KEYS){name=ret.FUNCTION_KEYS[i].toLowerCase();ret[name]=parseInt(i,10);}for(i in ret.PRINTABLE_KEYS){name=ret.PRINTABLE_KEYS[i].toLowerCase();ret[name]=parseInt(i,10);}oop.mixin(ret,ret.MODIFIER_KEYS);oop.mixin(ret,ret.PRINTABLE_KEYS);oop.mixin(ret,ret.FUNCTION_KEYS);ret.enter=ret["return"];ret.escape=ret.esc;ret.del=ret["delete"];ret[173]='-';(function(){var mods=["cmd","ctrl","alt","shift"];for(var i=Math.pow(2,mods.length);i--;){ret.KEY_MODS[i]=mods.filter(function(x){return i&ret.KEY_MODS[x];}).join("-")+"-";}})();ret.KEY_MODS[0]="";ret.KEY_MODS[-1]="input-";return ret;}();oop.mixin(exports,Keys);exports.keyCodeToString=function(keyCode){var keyString=Keys[keyCode];if(typeof keyString!="string")keyString=String.fromCharCode(keyCode);return keyString.toLowerCase();};});ace.define("ace/lib/useragent",["require","exports","module"],function(acequire,exports,module){"use strict";exports.OS={LINUX:"LINUX",MAC:"MAC",WINDOWS:"WINDOWS"};exports.getOS=function(){if(exports.isMac){return exports.OS.MAC;}else if(exports.isLinux){return exports.OS.LINUX;}else{return exports.OS.WINDOWS;}};if((typeof navigator==="undefined"?"undefined":_typeof(navigator))!="object")return;var os=(navigator.platform.match(/mac|win|linux/i)||["other"])[0].toLowerCase();var ua=navigator.userAgent;exports.isWin=os=="win";exports.isMac=os=="mac";exports.isLinux=os=="linux";exports.isIE=navigator.appName=="Microsoft Internet Explorer"||navigator.appName.indexOf("MSAppHost")>=0?parseFloat((ua.match(/(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/)||[])[1]):parseFloat((ua.match(/(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/)||[])[1]);// for ie
exports.isOldIE=exports.isIE&&exports.isIE<9;exports.isGecko=exports.isMozilla=(window.Controllers||window.controllers)&&window.navigator.product==="Gecko";exports.isOldGecko=exports.isGecko&&parseInt((ua.match(/rv:(\d+)/)||[])[1],10)<4;exports.isOpera=window.opera&&Object.prototype.toString.call(window.opera)=="[object Opera]";exports.isWebKit=parseFloat(ua.split("WebKit/")[1])||undefined;exports.isChrome=parseFloat(ua.split(" Chrome/")[1])||undefined;exports.isAIR=ua.indexOf("AdobeAIR")>=0;exports.isIPad=ua.indexOf("iPad")>=0;exports.isTouchPad=ua.indexOf("TouchPad")>=0;exports.isChromeOS=ua.indexOf(" CrOS ")>=0;});ace.define("ace/lib/event",["require","exports","module","ace/lib/keys","ace/lib/useragent"],function(acequire,exports,module){"use strict";var keys=acequire("./keys");var useragent=acequire("./useragent");var pressedKeys=null;var ts=0;exports.addListener=function(elem,type,callback){if(elem.addEventListener){return elem.addEventListener(type,callback,false);}if(elem.attachEvent){var wrapper=function wrapper(){callback.call(elem,window.event);};callback._wrapper=wrapper;elem.attachEvent("on"+type,wrapper);}};exports.removeListener=function(elem,type,callback){if(elem.removeEventListener){return elem.removeEventListener(type,callback,false);}if(elem.detachEvent){elem.detachEvent("on"+type,callback._wrapper||callback);}};exports.stopEvent=function(e){exports.stopPropagation(e);exports.preventDefault(e);return false;};exports.stopPropagation=function(e){if(e.stopPropagation)e.stopPropagation();else e.cancelBubble=true;};exports.preventDefault=function(e){if(e.preventDefault)e.preventDefault();else e.returnValue=false;};exports.getButton=function(e){if(e.type=="dblclick")return 0;if(e.type=="contextmenu"||useragent.isMac&&e.ctrlKey&&!e.altKey&&!e.shiftKey)return 2;if(e.preventDefault){return e.button;}else{return{1:0,2:2,4:1}[e.button];}};exports.capture=function(el,eventHandler,releaseCaptureHandler){function onMouseUp(e){eventHandler&&eventHandler(e);releaseCaptureHandler&&releaseCaptureHandler(e);exports.removeListener(document,"mousemove",eventHandler,true);exports.removeListener(document,"mouseup",onMouseUp,true);exports.removeListener(document,"dragstart",onMouseUp,true);}exports.addListener(document,"mousemove",eventHandler,true);exports.addListener(document,"mouseup",onMouseUp,true);exports.addListener(document,"dragstart",onMouseUp,true);return onMouseUp;};exports.addTouchMoveListener=function(el,callback){if("ontouchmove"in el){var startx,starty;exports.addListener(el,"touchstart",function(e){var touchObj=e.changedTouches[0];startx=touchObj.clientX;starty=touchObj.clientY;});exports.addListener(el,"touchmove",function(e){var factor=1,touchObj=e.changedTouches[0];e.wheelX=-(touchObj.clientX-startx)/factor;e.wheelY=-(touchObj.clientY-starty)/factor;startx=touchObj.clientX;starty=touchObj.clientY;callback(e);});}};exports.addMouseWheelListener=function(el,callback){if("onmousewheel"in el){exports.addListener(el,"mousewheel",function(e){var factor=8;if(e.wheelDeltaX!==undefined){e.wheelX=-e.wheelDeltaX/factor;e.wheelY=-e.wheelDeltaY/factor;}else{e.wheelX=0;e.wheelY=-e.wheelDelta/factor;}callback(e);});}else if("onwheel"in el){exports.addListener(el,"wheel",function(e){var factor=0.35;switch(e.deltaMode){case e.DOM_DELTA_PIXEL:e.wheelX=e.deltaX*factor||0;e.wheelY=e.deltaY*factor||0;break;case e.DOM_DELTA_LINE:case e.DOM_DELTA_PAGE:e.wheelX=(e.deltaX||0)*5;e.wheelY=(e.deltaY||0)*5;break;}callback(e);});}else{exports.addListener(el,"DOMMouseScroll",function(e){if(e.axis&&e.axis==e.HORIZONTAL_AXIS){e.wheelX=(e.detail||0)*5;e.wheelY=0;}else{e.wheelX=0;e.wheelY=(e.detail||0)*5;}callback(e);});}};exports.addMultiMouseDownListener=function(elements,timeouts,eventHandler,callbackName){var clicks=0;var startX,startY,timer;var eventNames={2:"dblclick",3:"tripleclick",4:"quadclick"};function onMousedown(e){if(exports.getButton(e)!==0){clicks=0;}else if(e.detail>1){clicks++;if(clicks>4)clicks=1;}else{clicks=1;}if(useragent.isIE){var isNewClick=Math.abs(e.clientX-startX)>5||Math.abs(e.clientY-startY)>5;if(!timer||isNewClick)clicks=1;if(timer)clearTimeout(timer);timer=setTimeout(function(){timer=null;},timeouts[clicks-1]||600);if(clicks==1){startX=e.clientX;startY=e.clientY;}}e._clicks=clicks;eventHandler[callbackName]("mousedown",e);if(clicks>4)clicks=0;else if(clicks>1)return eventHandler[callbackName](eventNames[clicks],e);}function onDblclick(e){clicks=2;if(timer)clearTimeout(timer);timer=setTimeout(function(){timer=null;},timeouts[clicks-1]||600);eventHandler[callbackName]("mousedown",e);eventHandler[callbackName](eventNames[clicks],e);}if(!Array.isArray(elements))elements=[elements];elements.forEach(function(el){exports.addListener(el,"mousedown",onMousedown);if(useragent.isOldIE)exports.addListener(el,"dblclick",onDblclick);});};var getModifierHash=useragent.isMac&&useragent.isOpera&&!("KeyboardEvent"in window)?function(e){return 0|(e.metaKey?1:0)|(e.altKey?2:0)|(e.shiftKey?4:0)|(e.ctrlKey?8:0);}:function(e){return 0|(e.ctrlKey?1:0)|(e.altKey?2:0)|(e.shiftKey?4:0)|(e.metaKey?8:0);};exports.getModifierString=function(e){return keys.KEY_MODS[getModifierHash(e)];};function normalizeCommandKeys(callback,e,keyCode){var hashId=getModifierHash(e);if(!useragent.isMac&&pressedKeys){if(e.getModifierState&&(e.getModifierState("OS")||e.getModifierState("Win")))hashId|=8;if(pressedKeys.altGr){if((3&hashId)!=3)pressedKeys.altGr=0;else return;}if(keyCode===18||keyCode===17){var location="location"in e?e.location:e.keyLocation;if(keyCode===17&&location===1){if(pressedKeys[keyCode]==1)ts=e.timeStamp;}else if(keyCode===18&&hashId===3&&location===2){var dt=e.timeStamp-ts;if(dt<50)pressedKeys.altGr=true;}}}if(keyCode in keys.MODIFIER_KEYS){keyCode=-1;}if(hashId&8&&keyCode>=91&&keyCode<=93){keyCode=-1;}if(!hashId&&keyCode===13){var location="location"in e?e.location:e.keyLocation;if(location===3){callback(e,hashId,-keyCode);if(e.defaultPrevented)return;}}if(useragent.isChromeOS&&hashId&8){callback(e,hashId,keyCode);if(e.defaultPrevented)return;else hashId&=~8;}if(!hashId&&!(keyCode in keys.FUNCTION_KEYS)&&!(keyCode in keys.PRINTABLE_KEYS)){return false;}return callback(e,hashId,keyCode);}exports.addCommandKeyListener=function(el,callback){var addListener=exports.addListener;if(useragent.isOldGecko||useragent.isOpera&&!("KeyboardEvent"in window)){var lastKeyDownKeyCode=null;addListener(el,"keydown",function(e){lastKeyDownKeyCode=e.keyCode;});addListener(el,"keypress",function(e){return normalizeCommandKeys(callback,e,lastKeyDownKeyCode);});}else{var lastDefaultPrevented=null;addListener(el,"keydown",function(e){pressedKeys[e.keyCode]=(pressedKeys[e.keyCode]||0)+1;var result=normalizeCommandKeys(callback,e,e.keyCode);lastDefaultPrevented=e.defaultPrevented;return result;});addListener(el,"keypress",function(e){if(lastDefaultPrevented&&(e.ctrlKey||e.altKey||e.shiftKey||e.metaKey)){exports.stopEvent(e);lastDefaultPrevented=null;}});addListener(el,"keyup",function(e){pressedKeys[e.keyCode]=null;});if(!pressedKeys){resetPressedKeys();addListener(window,"focus",resetPressedKeys);}}};function resetPressedKeys(){pressedKeys=Object.create(null);}if((typeof window==="undefined"?"undefined":_typeof(window))=="object"&&window.postMessage&&!useragent.isOldIE){var postMessageId=1;exports.nextTick=function(callback,win){win=win||window;var messageName="zero-timeout-message-"+postMessageId;exports.addListener(win,"message",function listener(e){if(e.data==messageName){exports.stopPropagation(e);exports.removeListener(win,"message",listener);callback();}});win.postMessage(messageName,"*");};}exports.nextFrame=(typeof window==="undefined"?"undefined":_typeof(window))=="object"&&(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame);if(exports.nextFrame)exports.nextFrame=exports.nextFrame.bind(window);else exports.nextFrame=function(callback){setTimeout(callback,17);};});ace.define("ace/lib/lang",["require","exports","module"],function(acequire,exports,module){"use strict";exports.last=function(a){return a[a.length-1];};exports.stringReverse=function(string){return string.split("").reverse().join("");};exports.stringRepeat=function(string,count){var result='';while(count>0){if(count&1)result+=string;if(count>>=1)string+=string;}return result;};var trimBeginRegexp=/^\s\s*/;var trimEndRegexp=/\s\s*$/;exports.stringTrimLeft=function(string){return string.replace(trimBeginRegexp,'');};exports.stringTrimRight=function(string){return string.replace(trimEndRegexp,'');};exports.copyObject=function(obj){var copy={};for(var key in obj){copy[key]=obj[key];}return copy;};exports.copyArray=function(array){var copy=[];for(var i=0,l=array.length;i<l;i++){if(array[i]&&_typeof(array[i])=="object")copy[i]=this.copyObject(array[i]);else copy[i]=array[i];}return copy;};exports.deepCopy=function deepCopy(obj){if((typeof obj==="undefined"?"undefined":_typeof(obj))!=="object"||!obj)return obj;var copy;if(Array.isArray(obj)){copy=[];for(var key=0;key<obj.length;key++){copy[key]=deepCopy(obj[key]);}return copy;}if(Object.prototype.toString.call(obj)!=="[object Object]")return obj;copy={};for(var key in obj){copy[key]=deepCopy(obj[key]);}return copy;};exports.arrayToMap=function(arr){var map={};for(var i=0;i<arr.length;i++){map[arr[i]]=1;}return map;};exports.createMap=function(props){var map=Object.create(null);for(var i in props){map[i]=props[i];}return map;};exports.arrayRemove=function(array,value){for(var i=0;i<=array.length;i++){if(value===array[i]){array.splice(i,1);}}};exports.escapeRegExp=function(str){return str.replace(/([.*+?^${}()|[\]\/\\])/g,'\\$1');};exports.escapeHTML=function(str){return str.replace(/&/g,"&#38;").replace(/"/g,"&#34;").replace(/'/g,"&#39;").replace(/</g,"&#60;");};exports.getMatchOffsets=function(string,regExp){var matches=[];string.replace(regExp,function(str){matches.push({offset:arguments[arguments.length-2],length:str.length});});return matches;};exports.deferredCall=function(fcn){var timer=null;var callback=function callback(){timer=null;fcn();};var deferred=function deferred(timeout){deferred.cancel();timer=setTimeout(callback,timeout||0);return deferred;};deferred.schedule=deferred;deferred.call=function(){this.cancel();fcn();return deferred;};deferred.cancel=function(){clearTimeout(timer);timer=null;return deferred;};deferred.isPending=function(){return timer;};return deferred;};exports.delayedCall=function(fcn,defaultTimeout){var timer=null;var callback=function callback(){timer=null;fcn();};var _self=function _self(timeout){if(timer==null)timer=setTimeout(callback,timeout||defaultTimeout);};_self.delay=function(timeout){timer&&clearTimeout(timer);timer=setTimeout(callback,timeout||defaultTimeout);};_self.schedule=_self;_self.call=function(){this.cancel();fcn();};_self.cancel=function(){timer&&clearTimeout(timer);timer=null;};_self.isPending=function(){return timer;};return _self;};});ace.define("ace/keyboard/textinput",["require","exports","module","ace/lib/event","ace/lib/useragent","ace/lib/dom","ace/lib/lang"],function(acequire,exports,module){"use strict";var event=acequire("../lib/event");var useragent=acequire("../lib/useragent");var dom=acequire("../lib/dom");var lang=acequire("../lib/lang");var BROKEN_SETDATA=useragent.isChrome<18;var USE_IE_MIME_TYPE=useragent.isIE;var TextInput=function TextInput(parentNode,host){var text=dom.createElement("textarea");text.className="ace_text-input";if(useragent.isTouchPad)text.setAttribute("x-palm-disable-auto-cap",true);text.setAttribute("wrap","off");text.setAttribute("autocorrect","off");text.setAttribute("autocapitalize","off");text.setAttribute("spellcheck",false);text.style.opacity="0";if(useragent.isOldIE)text.style.top="-1000px";parentNode.insertBefore(text,parentNode.firstChild);var PLACEHOLDER="\x01\x01";var copied=false;var pasted=false;var inComposition=false;var tempStyle='';var isSelectionEmpty=true;try{var isFocused=document.activeElement===text;}catch(e){}event.addListener(text,"blur",function(e){host.onBlur(e);isFocused=false;});event.addListener(text,"focus",function(e){isFocused=true;host.onFocus(e);resetSelection();});this.focus=function(){if(tempStyle)return text.focus();var top=text.style.top;text.style.position="fixed";text.style.top="0px";text.focus();setTimeout(function(){text.style.position="";if(text.style.top=="0px")text.style.top=top;},0);};this.blur=function(){text.blur();};this.isFocused=function(){return isFocused;};var syncSelection=lang.delayedCall(function(){isFocused&&resetSelection(isSelectionEmpty);});var syncValue=lang.delayedCall(function(){if(!inComposition){text.value=PLACEHOLDER;isFocused&&resetSelection();}});function resetSelection(isEmpty){if(inComposition)return;inComposition=true;if(inputHandler){selectionStart=0;selectionEnd=isEmpty?0:text.value.length-1;}else{var selectionStart=isEmpty?2:1;var selectionEnd=2;}try{text.setSelectionRange(selectionStart,selectionEnd);}catch(e){}inComposition=false;}function resetValue(){if(inComposition)return;text.value=PLACEHOLDER;if(useragent.isWebKit)syncValue.schedule();}useragent.isWebKit||host.addEventListener('changeSelection',function(){if(host.selection.isEmpty()!=isSelectionEmpty){isSelectionEmpty=!isSelectionEmpty;syncSelection.schedule();}});resetValue();if(isFocused)host.onFocus();var isAllSelected=function isAllSelected(text){return text.selectionStart===0&&text.selectionEnd===text.value.length;};if(!text.setSelectionRange&&text.createTextRange){text.setSelectionRange=function(selectionStart,selectionEnd){var range=this.createTextRange();range.collapse(true);range.moveStart('character',selectionStart);range.moveEnd('character',selectionEnd);range.select();};isAllSelected=function isAllSelected(text){try{var range=text.ownerDocument.selection.createRange();}catch(e){}if(!range||range.parentElement()!=text)return false;return range.text==text.value;};}if(useragent.isOldIE){var inPropertyChange=false;var onPropertyChange=function onPropertyChange(e){if(inPropertyChange)return;var data=text.value;if(inComposition||!data||data==PLACEHOLDER)return;if(e&&data==PLACEHOLDER[0])return syncProperty.schedule();sendText(data);inPropertyChange=true;resetValue();inPropertyChange=false;};var syncProperty=lang.delayedCall(onPropertyChange);event.addListener(text,"propertychange",onPropertyChange);var keytable={13:1,27:1};event.addListener(text,"keyup",function(e){if(inComposition&&(!text.value||keytable[e.keyCode]))setTimeout(onCompositionEnd,0);if((text.value.charCodeAt(0)||0)<129){return syncProperty.call();}inComposition?onCompositionUpdate():onCompositionStart();});event.addListener(text,"keydown",function(e){syncProperty.schedule(50);});}var onSelect=function onSelect(e){if(copied){copied=false;}else if(isAllSelected(text)){host.selectAll();resetSelection();}else if(inputHandler){resetSelection(host.selection.isEmpty());}};var inputHandler=null;this.setInputHandler=function(cb){inputHandler=cb;};this.getInputHandler=function(){return inputHandler;};var afterContextMenu=false;var sendText=function sendText(data){if(inputHandler){data=inputHandler(data);inputHandler=null;}if(pasted){resetSelection();if(data)host.onPaste(data);pasted=false;}else if(data==PLACEHOLDER.charAt(0)){if(afterContextMenu)host.execCommand("del",{source:"ace"});else// some versions of android do not fire keydown when pressing backspace
host.execCommand("backspace",{source:"ace"});}else{if(data.substring(0,2)==PLACEHOLDER)data=data.substr(2);else if(data.charAt(0)==PLACEHOLDER.charAt(0))data=data.substr(1);else if(data.charAt(data.length-1)==PLACEHOLDER.charAt(0))data=data.slice(0,-1);if(data.charAt(data.length-1)==PLACEHOLDER.charAt(0))data=data.slice(0,-1);if(data)host.onTextInput(data);}if(afterContextMenu)afterContextMenu=false;};var onInput=function onInput(e){if(inComposition)return;var data=text.value;sendText(data);resetValue();};var handleClipboardData=function handleClipboardData(e,data,forceIEMime){var clipboardData=e.clipboardData||window.clipboardData;if(!clipboardData||BROKEN_SETDATA)return;var mime=USE_IE_MIME_TYPE||forceIEMime?"Text":"text/plain";try{if(data){return clipboardData.setData(mime,data)!==false;}else{return clipboardData.getData(mime);}}catch(e){if(!forceIEMime)return handleClipboardData(e,data,true);}};var doCopy=function doCopy(e,isCut){var data=host.getCopyText();if(!data)return event.preventDefault(e);if(handleClipboardData(e,data)){isCut?host.onCut():host.onCopy();event.preventDefault(e);}else{copied=true;text.value=data;text.select();setTimeout(function(){copied=false;resetValue();resetSelection();isCut?host.onCut():host.onCopy();});}};var onCut=function onCut(e){doCopy(e,true);};var onCopy=function onCopy(e){doCopy(e,false);};var onPaste=function onPaste(e){var data=handleClipboardData(e);if(typeof data=="string"){if(data)host.onPaste(data,e);if(useragent.isIE)setTimeout(resetSelection);event.preventDefault(e);}else{text.value="";pasted=true;}};event.addCommandKeyListener(text,host.onCommandKey.bind(host));event.addListener(text,"select",onSelect);event.addListener(text,"input",onInput);event.addListener(text,"cut",onCut);event.addListener(text,"copy",onCopy);event.addListener(text,"paste",onPaste);if(!('oncut'in text)||!('oncopy'in text)||!('onpaste'in text)){event.addListener(parentNode,"keydown",function(e){if(useragent.isMac&&!e.metaKey||!e.ctrlKey)return;switch(e.keyCode){case 67:onCopy(e);break;case 86:onPaste(e);break;case 88:onCut(e);break;}});}var onCompositionStart=function onCompositionStart(e){if(inComposition||!host.onCompositionStart||host.$readOnly)return;inComposition={};inComposition.canUndo=host.session.$undoManager;host.onCompositionStart();setTimeout(onCompositionUpdate,0);host.on("mousedown",onCompositionEnd);if(inComposition.canUndo&&!host.selection.isEmpty()){host.insert("");host.session.markUndoGroup();host.selection.clearSelection();}host.session.markUndoGroup();};var onCompositionUpdate=function onCompositionUpdate(){if(!inComposition||!host.onCompositionUpdate||host.$readOnly)return;var val=text.value.replace(/\x01/g,"");if(inComposition.lastValue===val)return;host.onCompositionUpdate(val);if(inComposition.lastValue)host.undo();if(inComposition.canUndo)inComposition.lastValue=val;if(inComposition.lastValue){var r=host.selection.getRange();host.insert(inComposition.lastValue);host.session.markUndoGroup();inComposition.range=host.selection.getRange();host.selection.setRange(r);host.selection.clearSelection();}};var onCompositionEnd=function onCompositionEnd(e){if(!host.onCompositionEnd||host.$readOnly)return;var c=inComposition;inComposition=false;var timer=setTimeout(function(){timer=null;var str=text.value.replace(/\x01/g,"");if(inComposition)return;else if(str==c.lastValue)resetValue();else if(!c.lastValue&&str){resetValue();sendText(str);}});inputHandler=function compositionInputHandler(str){if(timer)clearTimeout(timer);str=str.replace(/\x01/g,"");if(str==c.lastValue)return"";if(c.lastValue&&timer)host.undo();return str;};host.onCompositionEnd();host.removeListener("mousedown",onCompositionEnd);if(e.type=="compositionend"&&c.range){host.selection.setRange(c.range);}if(useragent.isChrome&&useragent.isChrome>=53){onInput();}};var syncComposition=lang.delayedCall(onCompositionUpdate,50);event.addListener(text,"compositionstart",onCompositionStart);if(useragent.isGecko){event.addListener(text,"text",function(){syncComposition.schedule();});}else{event.addListener(text,"keyup",function(){syncComposition.schedule();});event.addListener(text,"keydown",function(){syncComposition.schedule();});}event.addListener(text,"compositionend",onCompositionEnd);this.getElement=function(){return text;};this.setReadOnly=function(readOnly){text.readOnly=readOnly;};this.onContextMenu=function(e){afterContextMenu=true;resetSelection(host.selection.isEmpty());host._emit("nativecontextmenu",{target:host,domEvent:e});this.moveToMouse(e,true);};this.moveToMouse=function(e,bringToFront){if(!bringToFront&&useragent.isOldIE)return;if(!tempStyle)tempStyle=text.style.cssText;text.style.cssText=(bringToFront?"z-index:100000;":"")+"height:"+text.style.height+";"+(useragent.isIE?"opacity:0.1;":"");var rect=host.container.getBoundingClientRect();var style=dom.computedStyle(host.container);var top=rect.top+(parseInt(style.borderTopWidth)||0);var left=rect.left+(parseInt(rect.borderLeftWidth)||0);var maxTop=rect.bottom-top-text.clientHeight-2;var move=function move(e){text.style.left=e.clientX-left-2+"px";text.style.top=Math.min(e.clientY-top-2,maxTop)+"px";};move(e);if(e.type!="mousedown")return;if(host.renderer.$keepTextAreaAtCursor)host.renderer.$keepTextAreaAtCursor=null;clearTimeout(closeTimeout);if(useragent.isWin&&!useragent.isOldIE)event.capture(host.container,move,onContextMenuClose);};this.onContextMenuClose=onContextMenuClose;var closeTimeout;function onContextMenuClose(){clearTimeout(closeTimeout);closeTimeout=setTimeout(function(){if(tempStyle){text.style.cssText=tempStyle;tempStyle='';}if(host.renderer.$keepTextAreaAtCursor==null){host.renderer.$keepTextAreaAtCursor=true;host.renderer.$moveTextAreaToCursor();}},useragent.isOldIE?200:0);}var onContextMenu=function onContextMenu(e){host.textInput.onContextMenu(e);onContextMenuClose();};event.addListener(text,"mouseup",onContextMenu);event.addListener(text,"mousedown",function(e){e.preventDefault();onContextMenuClose();});event.addListener(host.renderer.scroller,"contextmenu",onContextMenu);event.addListener(text,"contextmenu",onContextMenu);};exports.TextInput=TextInput;});ace.define("ace/mouse/default_handlers",["require","exports","module","ace/lib/dom","ace/lib/event","ace/lib/useragent"],function(acequire,exports,module){"use strict";var dom=acequire("../lib/dom");var event=acequire("../lib/event");var useragent=acequire("../lib/useragent");var DRAG_OFFSET=0;// pixels
function DefaultHandlers(mouseHandler){mouseHandler.$clickSelection=null;var editor=mouseHandler.editor;editor.setDefaultHandler("mousedown",this.onMouseDown.bind(mouseHandler));editor.setDefaultHandler("dblclick",this.onDoubleClick.bind(mouseHandler));editor.setDefaultHandler("tripleclick",this.onTripleClick.bind(mouseHandler));editor.setDefaultHandler("quadclick",this.onQuadClick.bind(mouseHandler));editor.setDefaultHandler("mousewheel",this.onMouseWheel.bind(mouseHandler));editor.setDefaultHandler("touchmove",this.onTouchMove.bind(mouseHandler));var exports=["select","startSelect","selectEnd","selectAllEnd","selectByWordsEnd","selectByLinesEnd","dragWait","dragWaitEnd","focusWait"];exports.forEach(function(x){mouseHandler[x]=this[x];},this);mouseHandler.selectByLines=this.extendSelectionBy.bind(mouseHandler,"getLineRange");mouseHandler.selectByWords=this.extendSelectionBy.bind(mouseHandler,"getWordRange");}(function(){this.onMouseDown=function(ev){var inSelection=ev.inSelection();var pos=ev.getDocumentPosition();this.mousedownEvent=ev;var editor=this.editor;var button=ev.getButton();if(button!==0){var selectionRange=editor.getSelectionRange();var selectionEmpty=selectionRange.isEmpty();editor.$blockScrolling++;if(selectionEmpty||button==1)editor.selection.moveToPosition(pos);editor.$blockScrolling--;if(button==2)editor.textInput.onContextMenu(ev.domEvent);return;// stopping event here breaks contextmenu on ff mac
}this.mousedownEvent.time=Date.now();if(inSelection&&!editor.isFocused()){editor.focus();if(this.$focusTimout&&!this.$clickSelection&&!editor.inMultiSelectMode){this.setState("focusWait");this.captureMouse(ev);return;}}this.captureMouse(ev);this.startSelect(pos,ev.domEvent._clicks>1);return ev.preventDefault();};this.startSelect=function(pos,waitForClickSelection){pos=pos||this.editor.renderer.screenToTextCoordinates(this.x,this.y);var editor=this.editor;editor.$blockScrolling++;if(this.mousedownEvent.getShiftKey())editor.selection.selectToPosition(pos);else if(!waitForClickSelection)editor.selection.moveToPosition(pos);if(!waitForClickSelection)this.select();if(editor.renderer.scroller.setCapture){editor.renderer.scroller.setCapture();}editor.setStyle("ace_selecting");this.setState("select");editor.$blockScrolling--;};this.select=function(){var anchor,editor=this.editor;var cursor=editor.renderer.screenToTextCoordinates(this.x,this.y);editor.$blockScrolling++;if(this.$clickSelection){var cmp=this.$clickSelection.comparePoint(cursor);if(cmp==-1){anchor=this.$clickSelection.end;}else if(cmp==1){anchor=this.$clickSelection.start;}else{var orientedRange=calcRangeOrientation(this.$clickSelection,cursor);cursor=orientedRange.cursor;anchor=orientedRange.anchor;}editor.selection.setSelectionAnchor(anchor.row,anchor.column);}editor.selection.selectToPosition(cursor);editor.$blockScrolling--;editor.renderer.scrollCursorIntoView();};this.extendSelectionBy=function(unitName){var anchor,editor=this.editor;var cursor=editor.renderer.screenToTextCoordinates(this.x,this.y);var range=editor.selection[unitName](cursor.row,cursor.column);editor.$blockScrolling++;if(this.$clickSelection){var cmpStart=this.$clickSelection.comparePoint(range.start);var cmpEnd=this.$clickSelection.comparePoint(range.end);if(cmpStart==-1&&cmpEnd<=0){anchor=this.$clickSelection.end;if(range.end.row!=cursor.row||range.end.column!=cursor.column)cursor=range.start;}else if(cmpEnd==1&&cmpStart>=0){anchor=this.$clickSelection.start;if(range.start.row!=cursor.row||range.start.column!=cursor.column)cursor=range.end;}else if(cmpStart==-1&&cmpEnd==1){cursor=range.end;anchor=range.start;}else{var orientedRange=calcRangeOrientation(this.$clickSelection,cursor);cursor=orientedRange.cursor;anchor=orientedRange.anchor;}editor.selection.setSelectionAnchor(anchor.row,anchor.column);}editor.selection.selectToPosition(cursor);editor.$blockScrolling--;editor.renderer.scrollCursorIntoView();};this.selectEnd=this.selectAllEnd=this.selectByWordsEnd=this.selectByLinesEnd=function(){this.$clickSelection=null;this.editor.unsetStyle("ace_selecting");if(this.editor.renderer.scroller.releaseCapture){this.editor.renderer.scroller.releaseCapture();}};this.focusWait=function(){var distance=calcDistance(this.mousedownEvent.x,this.mousedownEvent.y,this.x,this.y);var time=Date.now();if(distance>DRAG_OFFSET||time-this.mousedownEvent.time>this.$focusTimout)this.startSelect(this.mousedownEvent.getDocumentPosition());};this.onDoubleClick=function(ev){var pos=ev.getDocumentPosition();var editor=this.editor;var session=editor.session;var range=session.getBracketRange(pos);if(range){if(range.isEmpty()){range.start.column--;range.end.column++;}this.setState("select");}else{range=editor.selection.getWordRange(pos.row,pos.column);this.setState("selectByWords");}this.$clickSelection=range;this.select();};this.onTripleClick=function(ev){var pos=ev.getDocumentPosition();var editor=this.editor;this.setState("selectByLines");var range=editor.getSelectionRange();if(range.isMultiLine()&&range.contains(pos.row,pos.column)){this.$clickSelection=editor.selection.getLineRange(range.start.row);this.$clickSelection.end=editor.selection.getLineRange(range.end.row).end;}else{this.$clickSelection=editor.selection.getLineRange(pos.row);}this.select();};this.onQuadClick=function(ev){var editor=this.editor;editor.selectAll();this.$clickSelection=editor.getSelectionRange();this.setState("selectAll");};this.onMouseWheel=function(ev){if(ev.getAccelKey())return;if(ev.getShiftKey()&&ev.wheelY&&!ev.wheelX){ev.wheelX=ev.wheelY;ev.wheelY=0;}var t=ev.domEvent.timeStamp;var dt=t-(this.$lastScrollTime||0);var editor=this.editor;var isScrolable=editor.renderer.isScrollableBy(ev.wheelX*ev.speed,ev.wheelY*ev.speed);if(isScrolable||dt<200){this.$lastScrollTime=t;editor.renderer.scrollBy(ev.wheelX*ev.speed,ev.wheelY*ev.speed);return ev.stop();}};this.onTouchMove=function(ev){var t=ev.domEvent.timeStamp;var dt=t-(this.$lastScrollTime||0);var editor=this.editor;var isScrolable=editor.renderer.isScrollableBy(ev.wheelX*ev.speed,ev.wheelY*ev.speed);if(isScrolable||dt<200){this.$lastScrollTime=t;editor.renderer.scrollBy(ev.wheelX*ev.speed,ev.wheelY*ev.speed);return ev.stop();}};}).call(DefaultHandlers.prototype);exports.DefaultHandlers=DefaultHandlers;function calcDistance(ax,ay,bx,by){return Math.sqrt(Math.pow(bx-ax,2)+Math.pow(by-ay,2));}function calcRangeOrientation(range,cursor){if(range.start.row==range.end.row)var cmp=2*cursor.column-range.start.column-range.end.column;else if(range.start.row==range.end.row-1&&!range.start.column&&!range.end.column)var cmp=cursor.column-4;else var cmp=2*cursor.row-range.start.row-range.end.row;if(cmp<0)return{cursor:range.start,anchor:range.end};else return{cursor:range.end,anchor:range.start};}});ace.define("ace/tooltip",["require","exports","module","ace/lib/oop","ace/lib/dom"],function(acequire,exports,module){"use strict";var oop=acequire("./lib/oop");var dom=acequire("./lib/dom");function Tooltip(parentNode){this.isOpen=false;this.$element=null;this.$parentNode=parentNode;}(function(){this.$init=function(){this.$element=dom.createElement("div");this.$element.className="ace_tooltip";this.$element.style.display="none";this.$parentNode.appendChild(this.$element);return this.$element;};this.getElement=function(){return this.$element||this.$init();};this.setText=function(text){dom.setInnerText(this.getElement(),text);};this.setHtml=function(html){this.getElement().innerHTML=html;};this.setPosition=function(x,y){this.getElement().style.left=x+"px";this.getElement().style.top=y+"px";};this.setClassName=function(className){dom.addCssClass(this.getElement(),className);};this.show=function(text,x,y){if(text!=null)this.setText(text);if(x!=null&&y!=null)this.setPosition(x,y);if(!this.isOpen){this.getElement().style.display="block";this.isOpen=true;}};this.hide=function(){if(this.isOpen){this.getElement().style.display="none";this.isOpen=false;}};this.getHeight=function(){return this.getElement().offsetHeight;};this.getWidth=function(){return this.getElement().offsetWidth;};}).call(Tooltip.prototype);exports.Tooltip=Tooltip;});ace.define("ace/mouse/default_gutter_handler",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/event","ace/tooltip"],function(acequire,exports,module){"use strict";var dom=acequire("../lib/dom");var oop=acequire("../lib/oop");var event=acequire("../lib/event");var Tooltip=acequire("../tooltip").Tooltip;function GutterHandler(mouseHandler){var editor=mouseHandler.editor;var gutter=editor.renderer.$gutterLayer;var tooltip=new GutterTooltip(editor.container);mouseHandler.editor.setDefaultHandler("guttermousedown",function(e){if(!editor.isFocused()||e.getButton()!=0)return;var gutterRegion=gutter.getRegion(e);if(gutterRegion=="foldWidgets")return;var row=e.getDocumentPosition().row;var selection=editor.session.selection;if(e.getShiftKey())selection.selectTo(row,0);else{if(e.domEvent.detail==2){editor.selectAll();return e.preventDefault();}mouseHandler.$clickSelection=editor.selection.getLineRange(row);}mouseHandler.setState("selectByLines");mouseHandler.captureMouse(e);return e.preventDefault();});var tooltipTimeout,mouseEvent,tooltipAnnotation;function showTooltip(){var row=mouseEvent.getDocumentPosition().row;var annotation=gutter.$annotations[row];if(!annotation)return hideTooltip();var maxRow=editor.session.getLength();if(row==maxRow){var screenRow=editor.renderer.pixelToScreenCoordinates(0,mouseEvent.y).row;var pos=mouseEvent.$pos;if(screenRow>editor.session.documentToScreenRow(pos.row,pos.column))return hideTooltip();}if(tooltipAnnotation==annotation)return;tooltipAnnotation=annotation.text.join("<br/>");tooltip.setHtml(tooltipAnnotation);tooltip.show();editor._signal("showGutterTooltip",tooltip);editor.on("mousewheel",hideTooltip);if(mouseHandler.$tooltipFollowsMouse){moveTooltip(mouseEvent);}else{var gutterElement=mouseEvent.domEvent.target;var rect=gutterElement.getBoundingClientRect();var style=tooltip.getElement().style;style.left=rect.right+"px";style.top=rect.bottom+"px";}}function hideTooltip(){if(tooltipTimeout)tooltipTimeout=clearTimeout(tooltipTimeout);if(tooltipAnnotation){tooltip.hide();tooltipAnnotation=null;editor._signal("hideGutterTooltip",tooltip);editor.removeEventListener("mousewheel",hideTooltip);}}function moveTooltip(e){tooltip.setPosition(e.x,e.y);}mouseHandler.editor.setDefaultHandler("guttermousemove",function(e){var target=e.domEvent.target||e.domEvent.srcElement;if(dom.hasCssClass(target,"ace_fold-widget"))return hideTooltip();if(tooltipAnnotation&&mouseHandler.$tooltipFollowsMouse)moveTooltip(e);mouseEvent=e;if(tooltipTimeout)return;tooltipTimeout=setTimeout(function(){tooltipTimeout=null;if(mouseEvent&&!mouseHandler.isMousePressed)showTooltip();else hideTooltip();},50);});event.addListener(editor.renderer.$gutter,"mouseout",function(e){mouseEvent=null;if(!tooltipAnnotation||tooltipTimeout)return;tooltipTimeout=setTimeout(function(){tooltipTimeout=null;hideTooltip();},50);});editor.on("changeSession",hideTooltip);}function GutterTooltip(parentNode){Tooltip.call(this,parentNode);}oop.inherits(GutterTooltip,Tooltip);(function(){this.setPosition=function(x,y){var windowWidth=window.innerWidth||document.documentElement.clientWidth;var windowHeight=window.innerHeight||document.documentElement.clientHeight;var width=this.getWidth();var height=this.getHeight();x+=15;y+=15;if(x+width>windowWidth){x-=x+width-windowWidth;}if(y+height>windowHeight){y-=20+height;}Tooltip.prototype.setPosition.call(this,x,y);};}).call(GutterTooltip.prototype);exports.GutterHandler=GutterHandler;});ace.define("ace/mouse/mouse_event",["require","exports","module","ace/lib/event","ace/lib/useragent"],function(acequire,exports,module){"use strict";var event=acequire("../lib/event");var useragent=acequire("../lib/useragent");var MouseEvent=exports.MouseEvent=function(domEvent,editor){this.domEvent=domEvent;this.editor=editor;this.x=this.clientX=domEvent.clientX;this.y=this.clientY=domEvent.clientY;this.$pos=null;this.$inSelection=null;this.propagationStopped=false;this.defaultPrevented=false;};(function(){this.stopPropagation=function(){event.stopPropagation(this.domEvent);this.propagationStopped=true;};this.preventDefault=function(){event.preventDefault(this.domEvent);this.defaultPrevented=true;};this.stop=function(){this.stopPropagation();this.preventDefault();};this.getDocumentPosition=function(){if(this.$pos)return this.$pos;this.$pos=this.editor.renderer.screenToTextCoordinates(this.clientX,this.clientY);return this.$pos;};this.inSelection=function(){if(this.$inSelection!==null)return this.$inSelection;var editor=this.editor;var selectionRange=editor.getSelectionRange();if(selectionRange.isEmpty())this.$inSelection=false;else{var pos=this.getDocumentPosition();this.$inSelection=selectionRange.contains(pos.row,pos.column);}return this.$inSelection;};this.getButton=function(){return event.getButton(this.domEvent);};this.getShiftKey=function(){return this.domEvent.shiftKey;};this.getAccelKey=useragent.isMac?function(){return this.domEvent.metaKey;}:function(){return this.domEvent.ctrlKey;};}).call(MouseEvent.prototype);});ace.define("ace/mouse/dragdrop_handler",["require","exports","module","ace/lib/dom","ace/lib/event","ace/lib/useragent"],function(acequire,exports,module){"use strict";var dom=acequire("../lib/dom");var event=acequire("../lib/event");var useragent=acequire("../lib/useragent");var AUTOSCROLL_DELAY=200;var SCROLL_CURSOR_DELAY=200;var SCROLL_CURSOR_HYSTERESIS=5;function DragdropHandler(mouseHandler){var editor=mouseHandler.editor;var blankImage=dom.createElement("img");blankImage.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";if(useragent.isOpera)blankImage.style.cssText="width:1px;height:1px;position:fixed;top:0;left:0;z-index:2147483647;opacity:0;";var exports=["dragWait","dragWaitEnd","startDrag","dragReadyEnd","onMouseDrag"];exports.forEach(function(x){mouseHandler[x]=this[x];},this);editor.addEventListener("mousedown",this.onMouseDown.bind(mouseHandler));var mouseTarget=editor.container;var dragSelectionMarker,x,y;var timerId,range;var dragCursor,counter=0;var dragOperation;var isInternal;var autoScrollStartTime;var cursorMovedTime;var cursorPointOnCaretMoved;this.onDragStart=function(e){if(this.cancelDrag||!mouseTarget.draggable){var self=this;setTimeout(function(){self.startSelect();self.captureMouse(e);},0);return e.preventDefault();}range=editor.getSelectionRange();var dataTransfer=e.dataTransfer;dataTransfer.effectAllowed=editor.getReadOnly()?"copy":"copyMove";if(useragent.isOpera){editor.container.appendChild(blankImage);blankImage.scrollTop=0;}dataTransfer.setDragImage&&dataTransfer.setDragImage(blankImage,0,0);if(useragent.isOpera){editor.container.removeChild(blankImage);}dataTransfer.clearData();dataTransfer.setData("Text",editor.session.getTextRange());isInternal=true;this.setState("drag");};this.onDragEnd=function(e){mouseTarget.draggable=false;isInternal=false;this.setState(null);if(!editor.getReadOnly()){var dropEffect=e.dataTransfer.dropEffect;if(!dragOperation&&dropEffect=="move")editor.session.remove(editor.getSelectionRange());editor.renderer.$cursorLayer.setBlinking(true);}this.editor.unsetStyle("ace_dragging");this.editor.renderer.setCursorStyle("");};this.onDragEnter=function(e){if(editor.getReadOnly()||!canAccept(e.dataTransfer))return;x=e.clientX;y=e.clientY;if(!dragSelectionMarker)addDragMarker();counter++;e.dataTransfer.dropEffect=dragOperation=getDropEffect(e);return event.preventDefault(e);};this.onDragOver=function(e){if(editor.getReadOnly()||!canAccept(e.dataTransfer))return;x=e.clientX;y=e.clientY;if(!dragSelectionMarker){addDragMarker();counter++;}if(onMouseMoveTimer!==null)onMouseMoveTimer=null;e.dataTransfer.dropEffect=dragOperation=getDropEffect(e);return event.preventDefault(e);};this.onDragLeave=function(e){counter--;if(counter<=0&&dragSelectionMarker){clearDragMarker();dragOperation=null;return event.preventDefault(e);}};this.onDrop=function(e){if(!dragCursor)return;var dataTransfer=e.dataTransfer;if(isInternal){switch(dragOperation){case"move":if(range.contains(dragCursor.row,dragCursor.column)){range={start:dragCursor,end:dragCursor};}else{range=editor.moveText(range,dragCursor);}break;case"copy":range=editor.moveText(range,dragCursor,true);break;}}else{var dropData=dataTransfer.getData('Text');range={start:dragCursor,end:editor.session.insert(dragCursor,dropData)};editor.focus();dragOperation=null;}clearDragMarker();return event.preventDefault(e);};event.addListener(mouseTarget,"dragstart",this.onDragStart.bind(mouseHandler));event.addListener(mouseTarget,"dragend",this.onDragEnd.bind(mouseHandler));event.addListener(mouseTarget,"dragenter",this.onDragEnter.bind(mouseHandler));event.addListener(mouseTarget,"dragover",this.onDragOver.bind(mouseHandler));event.addListener(mouseTarget,"dragleave",this.onDragLeave.bind(mouseHandler));event.addListener(mouseTarget,"drop",this.onDrop.bind(mouseHandler));function scrollCursorIntoView(cursor,prevCursor){var now=Date.now();var vMovement=!prevCursor||cursor.row!=prevCursor.row;var hMovement=!prevCursor||cursor.column!=prevCursor.column;if(!cursorMovedTime||vMovement||hMovement){editor.$blockScrolling+=1;editor.moveCursorToPosition(cursor);editor.$blockScrolling-=1;cursorMovedTime=now;cursorPointOnCaretMoved={x:x,y:y};}else{var distance=calcDistance(cursorPointOnCaretMoved.x,cursorPointOnCaretMoved.y,x,y);if(distance>SCROLL_CURSOR_HYSTERESIS){cursorMovedTime=null;}else if(now-cursorMovedTime>=SCROLL_CURSOR_DELAY){editor.renderer.scrollCursorIntoView();cursorMovedTime=null;}}}function autoScroll(cursor,prevCursor){var now=Date.now();var lineHeight=editor.renderer.layerConfig.lineHeight;var characterWidth=editor.renderer.layerConfig.characterWidth;var editorRect=editor.renderer.scroller.getBoundingClientRect();var offsets={x:{left:x-editorRect.left,right:editorRect.right-x},y:{top:y-editorRect.top,bottom:editorRect.bottom-y}};var nearestXOffset=Math.min(offsets.x.left,offsets.x.right);var nearestYOffset=Math.min(offsets.y.top,offsets.y.bottom);var scrollCursor={row:cursor.row,column:cursor.column};if(nearestXOffset/characterWidth<=2){scrollCursor.column+=offsets.x.left<offsets.x.right?-3:+2;}if(nearestYOffset/lineHeight<=1){scrollCursor.row+=offsets.y.top<offsets.y.bottom?-1:+1;}var vScroll=cursor.row!=scrollCursor.row;var hScroll=cursor.column!=scrollCursor.column;var vMovement=!prevCursor||cursor.row!=prevCursor.row;if(vScroll||hScroll&&!vMovement){if(!autoScrollStartTime)autoScrollStartTime=now;else if(now-autoScrollStartTime>=AUTOSCROLL_DELAY)editor.renderer.scrollCursorIntoView(scrollCursor);}else{autoScrollStartTime=null;}}function onDragInterval(){var prevCursor=dragCursor;dragCursor=editor.renderer.screenToTextCoordinates(x,y);scrollCursorIntoView(dragCursor,prevCursor);autoScroll(dragCursor,prevCursor);}function addDragMarker(){range=editor.selection.toOrientedRange();dragSelectionMarker=editor.session.addMarker(range,"ace_selection",editor.getSelectionStyle());editor.clearSelection();if(editor.isFocused())editor.renderer.$cursorLayer.setBlinking(false);clearInterval(timerId);onDragInterval();timerId=setInterval(onDragInterval,20);counter=0;event.addListener(document,"mousemove",onMouseMove);}function clearDragMarker(){clearInterval(timerId);editor.session.removeMarker(dragSelectionMarker);dragSelectionMarker=null;editor.$blockScrolling+=1;editor.selection.fromOrientedRange(range);editor.$blockScrolling-=1;if(editor.isFocused()&&!isInternal)editor.renderer.$cursorLayer.setBlinking(!editor.getReadOnly());range=null;dragCursor=null;counter=0;autoScrollStartTime=null;cursorMovedTime=null;event.removeListener(document,"mousemove",onMouseMove);}var onMouseMoveTimer=null;function onMouseMove(){if(onMouseMoveTimer==null){onMouseMoveTimer=setTimeout(function(){if(onMouseMoveTimer!=null&&dragSelectionMarker)clearDragMarker();},20);}}function canAccept(dataTransfer){var types=dataTransfer.types;return!types||Array.prototype.some.call(types,function(type){return type=='text/plain'||type=='Text';});}function getDropEffect(e){var copyAllowed=['copy','copymove','all','uninitialized'];var moveAllowed=['move','copymove','linkmove','all','uninitialized'];var copyModifierState=useragent.isMac?e.altKey:e.ctrlKey;var effectAllowed="uninitialized";try{effectAllowed=e.dataTransfer.effectAllowed.toLowerCase();}catch(e){}var dropEffect="none";if(copyModifierState&&copyAllowed.indexOf(effectAllowed)>=0)dropEffect="copy";else if(moveAllowed.indexOf(effectAllowed)>=0)dropEffect="move";else if(copyAllowed.indexOf(effectAllowed)>=0)dropEffect="copy";return dropEffect;}}(function(){this.dragWait=function(){var interval=Date.now()-this.mousedownEvent.time;if(interval>this.editor.getDragDelay())this.startDrag();};this.dragWaitEnd=function(){var target=this.editor.container;target.draggable=false;this.startSelect(this.mousedownEvent.getDocumentPosition());this.selectEnd();};this.dragReadyEnd=function(e){this.editor.renderer.$cursorLayer.setBlinking(!this.editor.getReadOnly());this.editor.unsetStyle("ace_dragging");this.editor.renderer.setCursorStyle("");this.dragWaitEnd();};this.startDrag=function(){this.cancelDrag=false;var editor=this.editor;var target=editor.container;target.draggable=true;editor.renderer.$cursorLayer.setBlinking(false);editor.setStyle("ace_dragging");var cursorStyle=useragent.isWin?"default":"move";editor.renderer.setCursorStyle(cursorStyle);this.setState("dragReady");};this.onMouseDrag=function(e){var target=this.editor.container;if(useragent.isIE&&this.state=="dragReady"){var distance=calcDistance(this.mousedownEvent.x,this.mousedownEvent.y,this.x,this.y);if(distance>3)target.dragDrop();}if(this.state==="dragWait"){var distance=calcDistance(this.mousedownEvent.x,this.mousedownEvent.y,this.x,this.y);if(distance>0){target.draggable=false;this.startSelect(this.mousedownEvent.getDocumentPosition());}}};this.onMouseDown=function(e){if(!this.$dragEnabled)return;this.mousedownEvent=e;var editor=this.editor;var inSelection=e.inSelection();var button=e.getButton();var clickCount=e.domEvent.detail||1;if(clickCount===1&&button===0&&inSelection){if(e.editor.inMultiSelectMode&&(e.getAccelKey()||e.getShiftKey()))return;this.mousedownEvent.time=Date.now();var eventTarget=e.domEvent.target||e.domEvent.srcElement;if("unselectable"in eventTarget)eventTarget.unselectable="on";if(editor.getDragDelay()){if(useragent.isWebKit){this.cancelDrag=true;var mouseTarget=editor.container;mouseTarget.draggable=true;}this.setState("dragWait");}else{this.startDrag();}this.captureMouse(e,this.onMouseDrag.bind(this));e.defaultPrevented=true;}};}).call(DragdropHandler.prototype);function calcDistance(ax,ay,bx,by){return Math.sqrt(Math.pow(bx-ax,2)+Math.pow(by-ay,2));}exports.DragdropHandler=DragdropHandler;});ace.define("ace/lib/net",["require","exports","module","ace/lib/dom"],function(acequire,exports,module){"use strict";var dom=acequire("./dom");exports.get=function(url,callback){var xhr=new XMLHttpRequest();xhr.open('GET',url,true);xhr.onreadystatechange=function(){if(xhr.readyState===4){callback(xhr.responseText);}};xhr.send(null);};exports.loadScript=function(path,callback){var head=dom.getDocumentHead();var s=document.createElement('script');s.src=path;head.appendChild(s);s.onload=s.onreadystatechange=function(_,isAbort){if(isAbort||!s.readyState||s.readyState=="loaded"||s.readyState=="complete"){s=s.onload=s.onreadystatechange=null;if(!isAbort)callback();}};};exports.qualifyURL=function(url){var a=document.createElement('a');a.href=url;return a.href;};});ace.define("ace/lib/event_emitter",["require","exports","module"],function(acequire,exports,module){"use strict";var EventEmitter={};var stopPropagation=function stopPropagation(){this.propagationStopped=true;};var preventDefault=function preventDefault(){this.defaultPrevented=true;};EventEmitter._emit=EventEmitter._dispatchEvent=function(eventName,e){this._eventRegistry||(this._eventRegistry={});this._defaultHandlers||(this._defaultHandlers={});var listeners=this._eventRegistry[eventName]||[];var defaultHandler=this._defaultHandlers[eventName];if(!listeners.length&&!defaultHandler)return;if((typeof e==="undefined"?"undefined":_typeof(e))!="object"||!e)e={};if(!e.type)e.type=eventName;if(!e.stopPropagation)e.stopPropagation=stopPropagation;if(!e.preventDefault)e.preventDefault=preventDefault;listeners=listeners.slice();for(var i=0;i<listeners.length;i++){listeners[i](e,this);if(e.propagationStopped)break;}if(defaultHandler&&!e.defaultPrevented)return defaultHandler(e,this);};EventEmitter._signal=function(eventName,e){var listeners=(this._eventRegistry||{})[eventName];if(!listeners)return;listeners=listeners.slice();for(var i=0;i<listeners.length;i++){listeners[i](e,this);}};EventEmitter.once=function(eventName,callback){var _self=this;callback&&this.addEventListener(eventName,function newCallback(){_self.removeEventListener(eventName,newCallback);callback.apply(null,arguments);});};EventEmitter.setDefaultHandler=function(eventName,callback){var handlers=this._defaultHandlers;if(!handlers)handlers=this._defaultHandlers={_disabled_:{}};if(handlers[eventName]){var old=handlers[eventName];var disabled=handlers._disabled_[eventName];if(!disabled)handlers._disabled_[eventName]=disabled=[];disabled.push(old);var i=disabled.indexOf(callback);if(i!=-1)disabled.splice(i,1);}handlers[eventName]=callback;};EventEmitter.removeDefaultHandler=function(eventName,callback){var handlers=this._defaultHandlers;if(!handlers)return;var disabled=handlers._disabled_[eventName];if(handlers[eventName]==callback){var old=handlers[eventName];if(disabled)this.setDefaultHandler(eventName,disabled.pop());}else if(disabled){var i=disabled.indexOf(callback);if(i!=-1)disabled.splice(i,1);}};EventEmitter.on=EventEmitter.addEventListener=function(eventName,callback,capturing){this._eventRegistry=this._eventRegistry||{};var listeners=this._eventRegistry[eventName];if(!listeners)listeners=this._eventRegistry[eventName]=[];if(listeners.indexOf(callback)==-1)listeners[capturing?"unshift":"push"](callback);return callback;};EventEmitter.off=EventEmitter.removeListener=EventEmitter.removeEventListener=function(eventName,callback){this._eventRegistry=this._eventRegistry||{};var listeners=this._eventRegistry[eventName];if(!listeners)return;var index=listeners.indexOf(callback);if(index!==-1)listeners.splice(index,1);};EventEmitter.removeAllListeners=function(eventName){if(this._eventRegistry)this._eventRegistry[eventName]=[];};exports.EventEmitter=EventEmitter;});ace.define("ace/lib/app_config",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"],function(acequire,exports,module){"no use strict";var oop=acequire("./oop");var EventEmitter=acequire("./event_emitter").EventEmitter;var optionsProvider={setOptions:function setOptions(optList){Object.keys(optList).forEach(function(key){this.setOption(key,optList[key]);},this);},getOptions:function getOptions(optionNames){var result={};if(!optionNames){optionNames=Object.keys(this.$options);}else if(!Array.isArray(optionNames)){result=optionNames;optionNames=Object.keys(result);}optionNames.forEach(function(key){result[key]=this.getOption(key);},this);return result;},setOption:function setOption(name,value){if(this["$"+name]===value)return;var opt=this.$options[name];if(!opt){return warn('misspelled option "'+name+'"');}if(opt.forwardTo)return this[opt.forwardTo]&&this[opt.forwardTo].setOption(name,value);if(!opt.handlesSet)this["$"+name]=value;if(opt&&opt.set)opt.set.call(this,value);},getOption:function getOption(name){var opt=this.$options[name];if(!opt){return warn('misspelled option "'+name+'"');}if(opt.forwardTo)return this[opt.forwardTo]&&this[opt.forwardTo].getOption(name);return opt&&opt.get?opt.get.call(this):this["$"+name];}};function warn(message){if(typeof console!="undefined"&&console.warn)console.warn.apply(console,arguments);}function reportError(msg,data){var e=new Error(msg);e.data=data;if((typeof console==="undefined"?"undefined":_typeof(console))=="object"&&console.error)console.error(e);setTimeout(function(){throw e;});}var AppConfig=function AppConfig(){this.$defaultOptions={};};(function(){oop.implement(this,EventEmitter);this.defineOptions=function(obj,path,options){if(!obj.$options)this.$defaultOptions[path]=obj.$options={};Object.keys(options).forEach(function(key){var opt=options[key];if(typeof opt=="string")opt={forwardTo:opt};opt.name||(opt.name=key);obj.$options[opt.name]=opt;if("initialValue"in opt)obj["$"+opt.name]=opt.initialValue;});oop.implement(obj,optionsProvider);return this;};this.resetOptions=function(obj){Object.keys(obj.$options).forEach(function(key){var opt=obj.$options[key];if("value"in opt)obj.setOption(key,opt.value);});};this.setDefaultValue=function(path,name,value){var opts=this.$defaultOptions[path]||(this.$defaultOptions[path]={});if(opts[name]){if(opts.forwardTo)this.setDefaultValue(opts.forwardTo,name,value);else opts[name].value=value;}};this.setDefaultValues=function(path,optionHash){Object.keys(optionHash).forEach(function(key){this.setDefaultValue(path,key,optionHash[key]);},this);};this.warn=warn;this.reportError=reportError;}).call(AppConfig.prototype);exports.AppConfig=AppConfig;});ace.define("ace/config",["require","exports","module","ace/lib/lang","ace/lib/oop","ace/lib/net","ace/lib/app_config"],function(acequire,exports,module){"no use strict";var lang=acequire("./lib/lang");var oop=acequire("./lib/oop");var net=acequire("./lib/net");var AppConfig=acequire("./lib/app_config").AppConfig;module.exports=exports=new AppConfig();var global=function(){return this||typeof window!="undefined"&&window;}();var options={packaged:false,workerPath:null,modePath:null,themePath:null,basePath:"",suffix:".js",$moduleUrls:{}};exports.get=function(key){if(!options.hasOwnProperty(key))throw new Error("Unknown config key: "+key);return options[key];};exports.set=function(key,value){if(!options.hasOwnProperty(key))throw new Error("Unknown config key: "+key);options[key]=value;};exports.all=function(){return lang.copyObject(options);};exports.moduleUrl=function(name,component){if(options.$moduleUrls[name])return options.$moduleUrls[name];var parts=name.split("/");component=component||parts[parts.length-2]||"";var sep=component=="snippets"?"/":"-";var base=parts[parts.length-1];if(component=="worker"&&sep=="-"){var re=new RegExp("^"+component+"[\\-_]|[\\-_]"+component+"$","g");base=base.replace(re,"");}if((!base||base==component)&&parts.length>1)base=parts[parts.length-2];var path=options[component+"Path"];if(path==null){path=options.basePath;}else if(sep=="/"){component=sep="";}if(path&&path.slice(-1)!="/")path+="/";return path+component+sep+base+this.get("suffix");};exports.setModuleUrl=function(name,subst){return options.$moduleUrls[name]=subst;};exports.$loading={};exports.loadModule=function(moduleName,onLoad){var module,moduleType;if(Array.isArray(moduleName)){moduleType=moduleName[0];moduleName=moduleName[1];}try{module=acequire(moduleName);}catch(e){}if(module&&!exports.$loading[moduleName])return onLoad&&onLoad(module);if(!exports.$loading[moduleName])exports.$loading[moduleName]=[];exports.$loading[moduleName].push(onLoad);if(exports.$loading[moduleName].length>1)return;var afterLoad=function afterLoad(){acequire([moduleName],function(module){exports._emit("load.module",{name:moduleName,module:module});var listeners=exports.$loading[moduleName];exports.$loading[moduleName]=null;listeners.forEach(function(onLoad){onLoad&&onLoad(module);});});};if(!exports.get("packaged"))return afterLoad();net.loadScript(exports.moduleUrl(moduleName,moduleType),afterLoad);};init(true);function init(packaged){if(!global||!global.document)return;options.packaged=packaged||acequire.packaged||module.packaged||global.define&&__webpack_require__(20).packaged;var scriptOptions={};var scriptUrl="";var currentScript=document.currentScript||document._currentScript;// native or polyfill
var currentDocument=currentScript&&currentScript.ownerDocument||document;var scripts=currentDocument.getElementsByTagName("script");for(var i=0;i<scripts.length;i++){var script=scripts[i];var src=script.src||script.getAttribute("src");if(!src)continue;var attributes=script.attributes;for(var j=0,l=attributes.length;j<l;j++){var attr=attributes[j];if(attr.name.indexOf("data-ace-")===0){scriptOptions[deHyphenate(attr.name.replace(/^data-ace-/,""))]=attr.value;}}var m=src.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/);if(m)scriptUrl=m[1];}if(scriptUrl){scriptOptions.base=scriptOptions.base||scriptUrl;scriptOptions.packaged=true;}scriptOptions.basePath=scriptOptions.base;scriptOptions.workerPath=scriptOptions.workerPath||scriptOptions.base;scriptOptions.modePath=scriptOptions.modePath||scriptOptions.base;scriptOptions.themePath=scriptOptions.themePath||scriptOptions.base;delete scriptOptions.base;for(var key in scriptOptions){if(typeof scriptOptions[key]!=="undefined")exports.set(key,scriptOptions[key]);}}exports.init=init;function deHyphenate(str){return str.replace(/-(.)/g,function(m,m1){return m1.toUpperCase();});}});ace.define("ace/mouse/mouse_handler",["require","exports","module","ace/lib/event","ace/lib/useragent","ace/mouse/default_handlers","ace/mouse/default_gutter_handler","ace/mouse/mouse_event","ace/mouse/dragdrop_handler","ace/config"],function(acequire,exports,module){"use strict";var event=acequire("../lib/event");var useragent=acequire("../lib/useragent");var DefaultHandlers=acequire("./default_handlers").DefaultHandlers;var DefaultGutterHandler=acequire("./default_gutter_handler").GutterHandler;var MouseEvent=acequire("./mouse_event").MouseEvent;var DragdropHandler=acequire("./dragdrop_handler").DragdropHandler;var config=acequire("../config");var MouseHandler=function MouseHandler(editor){var _self=this;this.editor=editor;new DefaultHandlers(this);new DefaultGutterHandler(this);new DragdropHandler(this);var focusEditor=function focusEditor(e){var windowBlurred=!document.hasFocus||!document.hasFocus()||!editor.isFocused()&&document.activeElement==(editor.textInput&&editor.textInput.getElement());if(windowBlurred)window.focus();editor.focus();};var mouseTarget=editor.renderer.getMouseEventTarget();event.addListener(mouseTarget,"click",this.onMouseEvent.bind(this,"click"));event.addListener(mouseTarget,"mousemove",this.onMouseMove.bind(this,"mousemove"));event.addMultiMouseDownListener([mouseTarget,editor.renderer.scrollBarV&&editor.renderer.scrollBarV.inner,editor.renderer.scrollBarH&&editor.renderer.scrollBarH.inner,editor.textInput&&editor.textInput.getElement()].filter(Boolean),[400,300,250],this,"onMouseEvent");event.addMouseWheelListener(editor.container,this.onMouseWheel.bind(this,"mousewheel"));event.addTouchMoveListener(editor.container,this.onTouchMove.bind(this,"touchmove"));var gutterEl=editor.renderer.$gutter;event.addListener(gutterEl,"mousedown",this.onMouseEvent.bind(this,"guttermousedown"));event.addListener(gutterEl,"click",this.onMouseEvent.bind(this,"gutterclick"));event.addListener(gutterEl,"dblclick",this.onMouseEvent.bind(this,"gutterdblclick"));event.addListener(gutterEl,"mousemove",this.onMouseEvent.bind(this,"guttermousemove"));event.addListener(mouseTarget,"mousedown",focusEditor);event.addListener(gutterEl,"mousedown",focusEditor);if(useragent.isIE&&editor.renderer.scrollBarV){event.addListener(editor.renderer.scrollBarV.element,"mousedown",focusEditor);event.addListener(editor.renderer.scrollBarH.element,"mousedown",focusEditor);}editor.on("mousemove",function(e){if(_self.state||_self.$dragDelay||!_self.$dragEnabled)return;var character=editor.renderer.screenToTextCoordinates(e.x,e.y);var range=editor.session.selection.getRange();var renderer=editor.renderer;if(!range.isEmpty()&&range.insideStart(character.row,character.column)){renderer.setCursorStyle("default");}else{renderer.setCursorStyle("");}});};(function(){this.onMouseEvent=function(name,e){this.editor._emit(name,new MouseEvent(e,this.editor));};this.onMouseMove=function(name,e){var listeners=this.editor._eventRegistry&&this.editor._eventRegistry.mousemove;if(!listeners||!listeners.length)return;this.editor._emit(name,new MouseEvent(e,this.editor));};this.onMouseWheel=function(name,e){var mouseEvent=new MouseEvent(e,this.editor);mouseEvent.speed=this.$scrollSpeed*2;mouseEvent.wheelX=e.wheelX;mouseEvent.wheelY=e.wheelY;this.editor._emit(name,mouseEvent);};this.onTouchMove=function(name,e){var mouseEvent=new MouseEvent(e,this.editor);mouseEvent.speed=1;//this.$scrollSpeed * 2;
mouseEvent.wheelX=e.wheelX;mouseEvent.wheelY=e.wheelY;this.editor._emit(name,mouseEvent);};this.setState=function(state){this.state=state;};this.captureMouse=function(ev,mouseMoveHandler){this.x=ev.x;this.y=ev.y;this.isMousePressed=true;var renderer=this.editor.renderer;if(renderer.$keepTextAreaAtCursor)renderer.$keepTextAreaAtCursor=null;var self=this;var onMouseMove=function onMouseMove(e){if(!e)return;if(useragent.isWebKit&&!e.which&&self.releaseMouse)return self.releaseMouse();self.x=e.clientX;self.y=e.clientY;mouseMoveHandler&&mouseMoveHandler(e);self.mouseEvent=new MouseEvent(e,self.editor);self.$mouseMoved=true;};var onCaptureEnd=function onCaptureEnd(e){clearInterval(timerId);onCaptureInterval();self[self.state+"End"]&&self[self.state+"End"](e);self.state="";if(renderer.$keepTextAreaAtCursor==null){renderer.$keepTextAreaAtCursor=true;renderer.$moveTextAreaToCursor();}self.isMousePressed=false;self.$onCaptureMouseMove=self.releaseMouse=null;e&&self.onMouseEvent("mouseup",e);};var onCaptureInterval=function onCaptureInterval(){self[self.state]&&self[self.state]();self.$mouseMoved=false;};if(useragent.isOldIE&&ev.domEvent.type=="dblclick"){return setTimeout(function(){onCaptureEnd(ev);});}self.$onCaptureMouseMove=onMouseMove;self.releaseMouse=event.capture(this.editor.container,onMouseMove,onCaptureEnd);var timerId=setInterval(onCaptureInterval,20);};this.releaseMouse=null;this.cancelContextMenu=function(){var stop=function(e){if(e&&e.domEvent&&e.domEvent.type!="contextmenu")return;this.editor.off("nativecontextmenu",stop);if(e&&e.domEvent)event.stopEvent(e.domEvent);}.bind(this);setTimeout(stop,10);this.editor.on("nativecontextmenu",stop);};}).call(MouseHandler.prototype);config.defineOptions(MouseHandler.prototype,"mouseHandler",{scrollSpeed:{initialValue:2},dragDelay:{initialValue:useragent.isMac?150:0},dragEnabled:{initialValue:true},focusTimout:{initialValue:0},tooltipFollowsMouse:{initialValue:true}});exports.MouseHandler=MouseHandler;});ace.define("ace/mouse/fold_handler",["require","exports","module"],function(acequire,exports,module){"use strict";function FoldHandler(editor){editor.on("click",function(e){var position=e.getDocumentPosition();var session=editor.session;var fold=session.getFoldAt(position.row,position.column,1);if(fold){if(e.getAccelKey())session.removeFold(fold);else session.expandFold(fold);e.stop();}});editor.on("gutterclick",function(e){var gutterRegion=editor.renderer.$gutterLayer.getRegion(e);if(gutterRegion=="foldWidgets"){var row=e.getDocumentPosition().row;var session=editor.session;if(session.foldWidgets&&session.foldWidgets[row])editor.session.onFoldWidgetClick(row,e);if(!editor.isFocused())editor.focus();e.stop();}});editor.on("gutterdblclick",function(e){var gutterRegion=editor.renderer.$gutterLayer.getRegion(e);if(gutterRegion=="foldWidgets"){var row=e.getDocumentPosition().row;var session=editor.session;var data=session.getParentFoldRangeData(row,true);var range=data.range||data.firstRange;if(range){row=range.start.row;var fold=session.getFoldAt(row,session.getLine(row).length,1);if(fold){session.removeFold(fold);}else{session.addFold("...",range);editor.renderer.scrollCursorIntoView({row:range.start.row,column:0});}}e.stop();}});}exports.FoldHandler=FoldHandler;});ace.define("ace/keyboard/keybinding",["require","exports","module","ace/lib/keys","ace/lib/event"],function(acequire,exports,module){"use strict";var keyUtil=acequire("../lib/keys");var event=acequire("../lib/event");var KeyBinding=function KeyBinding(editor){this.$editor=editor;this.$data={editor:editor};this.$handlers=[];this.setDefaultHandler(editor.commands);};(function(){this.setDefaultHandler=function(kb){this.removeKeyboardHandler(this.$defaultHandler);this.$defaultHandler=kb;this.addKeyboardHandler(kb,0);};this.setKeyboardHandler=function(kb){var h=this.$handlers;if(h[h.length-1]==kb)return;while(h[h.length-1]&&h[h.length-1]!=this.$defaultHandler){this.removeKeyboardHandler(h[h.length-1]);}this.addKeyboardHandler(kb,1);};this.addKeyboardHandler=function(kb,pos){if(!kb)return;if(typeof kb=="function"&&!kb.handleKeyboard)kb.handleKeyboard=kb;var i=this.$handlers.indexOf(kb);if(i!=-1)this.$handlers.splice(i,1);if(pos==undefined)this.$handlers.push(kb);else this.$handlers.splice(pos,0,kb);if(i==-1&&kb.attach)kb.attach(this.$editor);};this.removeKeyboardHandler=function(kb){var i=this.$handlers.indexOf(kb);if(i==-1)return false;this.$handlers.splice(i,1);kb.detach&&kb.detach(this.$editor);return true;};this.getKeyboardHandler=function(){return this.$handlers[this.$handlers.length-1];};this.getStatusText=function(){var data=this.$data;var editor=data.editor;return this.$handlers.map(function(h){return h.getStatusText&&h.getStatusText(editor,data)||"";}).filter(Boolean).join(" ");};this.$callKeyboardHandlers=function(hashId,keyString,keyCode,e){var toExecute;var success=false;var commands=this.$editor.commands;for(var i=this.$handlers.length;i--;){toExecute=this.$handlers[i].handleKeyboard(this.$data,hashId,keyString,keyCode,e);if(!toExecute||!toExecute.command)continue;if(toExecute.command=="null"){success=true;}else{success=commands.exec(toExecute.command,this.$editor,toExecute.args,e);}if(success&&e&&hashId!=-1&&toExecute.passEvent!=true&&toExecute.command.passEvent!=true){event.stopEvent(e);}if(success)break;}if(!success&&hashId==-1){toExecute={command:"insertstring"};success=commands.exec("insertstring",this.$editor,keyString);}if(success&&this.$editor._signal)this.$editor._signal("keyboardActivity",toExecute);return success;};this.onCommandKey=function(e,hashId,keyCode){var keyString=keyUtil.keyCodeToString(keyCode);this.$callKeyboardHandlers(hashId,keyString,keyCode,e);};this.onTextInput=function(text){this.$callKeyboardHandlers(-1,text);};}).call(KeyBinding.prototype);exports.KeyBinding=KeyBinding;});ace.define("ace/range",["require","exports","module"],function(acequire,exports,module){"use strict";var comparePoints=function comparePoints(p1,p2){return p1.row-p2.row||p1.column-p2.column;};var Range=function Range(startRow,startColumn,endRow,endColumn){this.start={row:startRow,column:startColumn};this.end={row:endRow,column:endColumn};};(function(){this.isEqual=function(range){return this.start.row===range.start.row&&this.end.row===range.end.row&&this.start.column===range.start.column&&this.end.column===range.end.column;};this.toString=function(){return"Range: ["+this.start.row+"/"+this.start.column+"] -> ["+this.end.row+"/"+this.end.column+"]";};this.contains=function(row,column){return this.compare(row,column)==0;};this.compareRange=function(range){var cmp,end=range.end,start=range.start;cmp=this.compare(end.row,end.column);if(cmp==1){cmp=this.compare(start.row,start.column);if(cmp==1){return 2;}else if(cmp==0){return 1;}else{return 0;}}else if(cmp==-1){return-2;}else{cmp=this.compare(start.row,start.column);if(cmp==-1){return-1;}else if(cmp==1){return 42;}else{return 0;}}};this.comparePoint=function(p){return this.compare(p.row,p.column);};this.containsRange=function(range){return this.comparePoint(range.start)==0&&this.comparePoint(range.end)==0;};this.intersects=function(range){var cmp=this.compareRange(range);return cmp==-1||cmp==0||cmp==1;};this.isEnd=function(row,column){return this.end.row==row&&this.end.column==column;};this.isStart=function(row,column){return this.start.row==row&&this.start.column==column;};this.setStart=function(row,column){if((typeof row==="undefined"?"undefined":_typeof(row))=="object"){this.start.column=row.column;this.start.row=row.row;}else{this.start.row=row;this.start.column=column;}};this.setEnd=function(row,column){if((typeof row==="undefined"?"undefined":_typeof(row))=="object"){this.end.column=row.column;this.end.row=row.row;}else{this.end.row=row;this.end.column=column;}};this.inside=function(row,column){if(this.compare(row,column)==0){if(this.isEnd(row,column)||this.isStart(row,column)){return false;}else{return true;}}return false;};this.insideStart=function(row,column){if(this.compare(row,column)==0){if(this.isEnd(row,column)){return false;}else{return true;}}return false;};this.insideEnd=function(row,column){if(this.compare(row,column)==0){if(this.isStart(row,column)){return false;}else{return true;}}return false;};this.compare=function(row,column){if(!this.isMultiLine()){if(row===this.start.row){return column<this.start.column?-1:column>this.end.column?1:0;}}if(row<this.start.row)return-1;if(row>this.end.row)return 1;if(this.start.row===row)return column>=this.start.column?0:-1;if(this.end.row===row)return column<=this.end.column?0:1;return 0;};this.compareStart=function(row,column){if(this.start.row==row&&this.start.column==column){return-1;}else{return this.compare(row,column);}};this.compareEnd=function(row,column){if(this.end.row==row&&this.end.column==column){return 1;}else{return this.compare(row,column);}};this.compareInside=function(row,column){if(this.end.row==row&&this.end.column==column){return 1;}else if(this.start.row==row&&this.start.column==column){return-1;}else{return this.compare(row,column);}};this.clipRows=function(firstRow,lastRow){if(this.end.row>lastRow)var end={row:lastRow+1,column:0};else if(this.end.row<firstRow)var end={row:firstRow,column:0};if(this.start.row>lastRow)var start={row:lastRow+1,column:0};else if(this.start.row<firstRow)var start={row:firstRow,column:0};return Range.fromPoints(start||this.start,end||this.end);};this.extend=function(row,column){var cmp=this.compare(row,column);if(cmp==0)return this;else if(cmp==-1)var start={row:row,column:column};else var end={row:row,column:column};return Range.fromPoints(start||this.start,end||this.end);};this.isEmpty=function(){return this.start.row===this.end.row&&this.start.column===this.end.column;};this.isMultiLine=function(){return this.start.row!==this.end.row;};this.clone=function(){return Range.fromPoints(this.start,this.end);};this.collapseRows=function(){if(this.end.column==0)return new Range(this.start.row,0,Math.max(this.start.row,this.end.row-1),0);else return new Range(this.start.row,0,this.end.row,0);};this.toScreenRange=function(session){var screenPosStart=session.documentToScreenPosition(this.start);var screenPosEnd=session.documentToScreenPosition(this.end);return new Range(screenPosStart.row,screenPosStart.column,screenPosEnd.row,screenPosEnd.column);};this.moveBy=function(row,column){this.start.row+=row;this.start.column+=column;this.end.row+=row;this.end.column+=column;};}).call(Range.prototype);Range.fromPoints=function(start,end){return new Range(start.row,start.column,end.row,end.column);};Range.comparePoints=comparePoints;Range.comparePoints=function(p1,p2){return p1.row-p2.row||p1.column-p2.column;};exports.Range=Range;});ace.define("ace/selection",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/lib/event_emitter","ace/range"],function(acequire,exports,module){"use strict";var oop=acequire("./lib/oop");var lang=acequire("./lib/lang");var EventEmitter=acequire("./lib/event_emitter").EventEmitter;var Range=acequire("./range").Range;var Selection=function Selection(session){this.session=session;this.doc=session.getDocument();this.clearSelection();this.lead=this.selectionLead=this.doc.createAnchor(0,0);this.anchor=this.selectionAnchor=this.doc.createAnchor(0,0);var self=this;this.lead.on("change",function(e){self._emit("changeCursor");if(!self.$isEmpty)self._emit("changeSelection");if(!self.$keepDesiredColumnOnChange&&e.old.column!=e.value.column)self.$desiredColumn=null;});this.selectionAnchor.on("change",function(){if(!self.$isEmpty)self._emit("changeSelection");});};(function(){oop.implement(this,EventEmitter);this.isEmpty=function(){return this.$isEmpty||this.anchor.row==this.lead.row&&this.anchor.column==this.lead.column;};this.isMultiLine=function(){if(this.isEmpty()){return false;}return this.getRange().isMultiLine();};this.getCursor=function(){return this.lead.getPosition();};this.setSelectionAnchor=function(row,column){this.anchor.setPosition(row,column);if(this.$isEmpty){this.$isEmpty=false;this._emit("changeSelection");}};this.getSelectionAnchor=function(){if(this.$isEmpty)return this.getSelectionLead();else return this.anchor.getPosition();};this.getSelectionLead=function(){return this.lead.getPosition();};this.shiftSelection=function(columns){if(this.$isEmpty){this.moveCursorTo(this.lead.row,this.lead.column+columns);return;}var anchor=this.getSelectionAnchor();var lead=this.getSelectionLead();var isBackwards=this.isBackwards();if(!isBackwards||anchor.column!==0)this.setSelectionAnchor(anchor.row,anchor.column+columns);if(isBackwards||lead.column!==0){this.$moveSelection(function(){this.moveCursorTo(lead.row,lead.column+columns);});}};this.isBackwards=function(){var anchor=this.anchor;var lead=this.lead;return anchor.row>lead.row||anchor.row==lead.row&&anchor.column>lead.column;};this.getRange=function(){var anchor=this.anchor;var lead=this.lead;if(this.isEmpty())return Range.fromPoints(lead,lead);if(this.isBackwards()){return Range.fromPoints(lead,anchor);}else{return Range.fromPoints(anchor,lead);}};this.clearSelection=function(){if(!this.$isEmpty){this.$isEmpty=true;this._emit("changeSelection");}};this.selectAll=function(){var lastRow=this.doc.getLength()-1;this.setSelectionAnchor(0,0);this.moveCursorTo(lastRow,this.doc.getLine(lastRow).length);};this.setRange=this.setSelectionRange=function(range,reverse){if(reverse){this.setSelectionAnchor(range.end.row,range.end.column);this.selectTo(range.start.row,range.start.column);}else{this.setSelectionAnchor(range.start.row,range.start.column);this.selectTo(range.end.row,range.end.column);}if(this.getRange().isEmpty())this.$isEmpty=true;this.$desiredColumn=null;};this.$moveSelection=function(mover){var lead=this.lead;if(this.$isEmpty)this.setSelectionAnchor(lead.row,lead.column);mover.call(this);};this.selectTo=function(row,column){this.$moveSelection(function(){this.moveCursorTo(row,column);});};this.selectToPosition=function(pos){this.$moveSelection(function(){this.moveCursorToPosition(pos);});};this.moveTo=function(row,column){this.clearSelection();this.moveCursorTo(row,column);};this.moveToPosition=function(pos){this.clearSelection();this.moveCursorToPosition(pos);};this.selectUp=function(){this.$moveSelection(this.moveCursorUp);};this.selectDown=function(){this.$moveSelection(this.moveCursorDown);};this.selectRight=function(){this.$moveSelection(this.moveCursorRight);};this.selectLeft=function(){this.$moveSelection(this.moveCursorLeft);};this.selectLineStart=function(){this.$moveSelection(this.moveCursorLineStart);};this.selectLineEnd=function(){this.$moveSelection(this.moveCursorLineEnd);};this.selectFileEnd=function(){this.$moveSelection(this.moveCursorFileEnd);};this.selectFileStart=function(){this.$moveSelection(this.moveCursorFileStart);};this.selectWordRight=function(){this.$moveSelection(this.moveCursorWordRight);};this.selectWordLeft=function(){this.$moveSelection(this.moveCursorWordLeft);};this.getWordRange=function(row,column){if(typeof column=="undefined"){var cursor=row||this.lead;row=cursor.row;column=cursor.column;}return this.session.getWordRange(row,column);};this.selectWord=function(){this.setSelectionRange(this.getWordRange());};this.selectAWord=function(){var cursor=this.getCursor();var range=this.session.getAWordRange(cursor.row,cursor.column);this.setSelectionRange(range);};this.getLineRange=function(row,excludeLastChar){var rowStart=typeof row=="number"?row:this.lead.row;var rowEnd;var foldLine=this.session.getFoldLine(rowStart);if(foldLine){rowStart=foldLine.start.row;rowEnd=foldLine.end.row;}else{rowEnd=rowStart;}if(excludeLastChar===true)return new Range(rowStart,0,rowEnd,this.session.getLine(rowEnd).length);else return new Range(rowStart,0,rowEnd+1,0);};this.selectLine=function(){this.setSelectionRange(this.getLineRange());};this.moveCursorUp=function(){this.moveCursorBy(-1,0);};this.moveCursorDown=function(){this.moveCursorBy(1,0);};this.moveCursorLeft=function(){var cursor=this.lead.getPosition(),fold;if(fold=this.session.getFoldAt(cursor.row,cursor.column,-1)){this.moveCursorTo(fold.start.row,fold.start.column);}else if(cursor.column===0){if(cursor.row>0){this.moveCursorTo(cursor.row-1,this.doc.getLine(cursor.row-1).length);}}else{var tabSize=this.session.getTabSize();if(this.session.isTabStop(cursor)&&this.doc.getLine(cursor.row).slice(cursor.column-tabSize,cursor.column).split(" ").length-1==tabSize)this.moveCursorBy(0,-tabSize);else this.moveCursorBy(0,-1);}};this.moveCursorRight=function(){var cursor=this.lead.getPosition(),fold;if(fold=this.session.getFoldAt(cursor.row,cursor.column,1)){this.moveCursorTo(fold.end.row,fold.end.column);}else if(this.lead.column==this.doc.getLine(this.lead.row).length){if(this.lead.row<this.doc.getLength()-1){this.moveCursorTo(this.lead.row+1,0);}}else{var tabSize=this.session.getTabSize();var cursor=this.lead;if(this.session.isTabStop(cursor)&&this.doc.getLine(cursor.row).slice(cursor.column,cursor.column+tabSize).split(" ").length-1==tabSize)this.moveCursorBy(0,tabSize);else this.moveCursorBy(0,1);}};this.moveCursorLineStart=function(){var row=this.lead.row;var column=this.lead.column;var screenRow=this.session.documentToScreenRow(row,column);var firstColumnPosition=this.session.screenToDocumentPosition(screenRow,0);var beforeCursor=this.session.getDisplayLine(row,null,firstColumnPosition.row,firstColumnPosition.column);var leadingSpace=beforeCursor.match(/^\s*/);if(leadingSpace[0].length!=column&&!this.session.$useEmacsStyleLineStart)firstColumnPosition.column+=leadingSpace[0].length;this.moveCursorToPosition(firstColumnPosition);};this.moveCursorLineEnd=function(){var lead=this.lead;var lineEnd=this.session.getDocumentLastRowColumnPosition(lead.row,lead.column);if(this.lead.column==lineEnd.column){var line=this.session.getLine(lineEnd.row);if(lineEnd.column==line.length){var textEnd=line.search(/\s+$/);if(textEnd>0)lineEnd.column=textEnd;}}this.moveCursorTo(lineEnd.row,lineEnd.column);};this.moveCursorFileEnd=function(){var row=this.doc.getLength()-1;var column=this.doc.getLine(row).length;this.moveCursorTo(row,column);};this.moveCursorFileStart=function(){this.moveCursorTo(0,0);};this.moveCursorLongWordRight=function(){var row=this.lead.row;var column=this.lead.column;var line=this.doc.getLine(row);var rightOfCursor=line.substring(column);var match;this.session.nonTokenRe.lastIndex=0;this.session.tokenRe.lastIndex=0;var fold=this.session.getFoldAt(row,column,1);if(fold){this.moveCursorTo(fold.end.row,fold.end.column);return;}if(match=this.session.nonTokenRe.exec(rightOfCursor)){column+=this.session.nonTokenRe.lastIndex;this.session.nonTokenRe.lastIndex=0;rightOfCursor=line.substring(column);}if(column>=line.length){this.moveCursorTo(row,line.length);this.moveCursorRight();if(row<this.doc.getLength()-1)this.moveCursorWordRight();return;}if(match=this.session.tokenRe.exec(rightOfCursor)){column+=this.session.tokenRe.lastIndex;this.session.tokenRe.lastIndex=0;}this.moveCursorTo(row,column);};this.moveCursorLongWordLeft=function(){var row=this.lead.row;var column=this.lead.column;var fold;if(fold=this.session.getFoldAt(row,column,-1)){this.moveCursorTo(fold.start.row,fold.start.column);return;}var str=this.session.getFoldStringAt(row,column,-1);if(str==null){str=this.doc.getLine(row).substring(0,column);}var leftOfCursor=lang.stringReverse(str);var match;this.session.nonTokenRe.lastIndex=0;this.session.tokenRe.lastIndex=0;if(match=this.session.nonTokenRe.exec(leftOfCursor)){column-=this.session.nonTokenRe.lastIndex;leftOfCursor=leftOfCursor.slice(this.session.nonTokenRe.lastIndex);this.session.nonTokenRe.lastIndex=0;}if(column<=0){this.moveCursorTo(row,0);this.moveCursorLeft();if(row>0)this.moveCursorWordLeft();return;}if(match=this.session.tokenRe.exec(leftOfCursor)){column-=this.session.tokenRe.lastIndex;this.session.tokenRe.lastIndex=0;}this.moveCursorTo(row,column);};this.$shortWordEndIndex=function(rightOfCursor){var match,index=0,ch;var whitespaceRe=/\s/;var tokenRe=this.session.tokenRe;tokenRe.lastIndex=0;if(match=this.session.tokenRe.exec(rightOfCursor)){index=this.session.tokenRe.lastIndex;}else{while((ch=rightOfCursor[index])&&whitespaceRe.test(ch)){index++;}if(index<1){tokenRe.lastIndex=0;while((ch=rightOfCursor[index])&&!tokenRe.test(ch)){tokenRe.lastIndex=0;index++;if(whitespaceRe.test(ch)){if(index>2){index--;break;}else{while((ch=rightOfCursor[index])&&whitespaceRe.test(ch)){index++;}if(index>2)break;}}}}}tokenRe.lastIndex=0;return index;};this.moveCursorShortWordRight=function(){var row=this.lead.row;var column=this.lead.column;var line=this.doc.getLine(row);var rightOfCursor=line.substring(column);var fold=this.session.getFoldAt(row,column,1);if(fold)return this.moveCursorTo(fold.end.row,fold.end.column);if(column==line.length){var l=this.doc.getLength();do{row++;rightOfCursor=this.doc.getLine(row);}while(row<l&&/^\s*$/.test(rightOfCursor));if(!/^\s+/.test(rightOfCursor))rightOfCursor="";column=0;}var index=this.$shortWordEndIndex(rightOfCursor);this.moveCursorTo(row,column+index);};this.moveCursorShortWordLeft=function(){var row=this.lead.row;var column=this.lead.column;var fold;if(fold=this.session.getFoldAt(row,column,-1))return this.moveCursorTo(fold.start.row,fold.start.column);var line=this.session.getLine(row).substring(0,column);if(column===0){do{row--;line=this.doc.getLine(row);}while(row>0&&/^\s*$/.test(line));column=line.length;if(!/\s+$/.test(line))line="";}var leftOfCursor=lang.stringReverse(line);var index=this.$shortWordEndIndex(leftOfCursor);return this.moveCursorTo(row,column-index);};this.moveCursorWordRight=function(){if(this.session.$selectLongWords)this.moveCursorLongWordRight();else this.moveCursorShortWordRight();};this.moveCursorWordLeft=function(){if(this.session.$selectLongWords)this.moveCursorLongWordLeft();else this.moveCursorShortWordLeft();};this.moveCursorBy=function(rows,chars){var screenPos=this.session.documentToScreenPosition(this.lead.row,this.lead.column);if(chars===0){if(this.$desiredColumn)screenPos.column=this.$desiredColumn;else this.$desiredColumn=screenPos.column;}var docPos=this.session.screenToDocumentPosition(screenPos.row+rows,screenPos.column);if(rows!==0&&chars===0&&docPos.row===this.lead.row&&docPos.column===this.lead.column){if(this.session.lineWidgets&&this.session.lineWidgets[docPos.row]){if(docPos.row>0||rows>0)docPos.row++;}}this.moveCursorTo(docPos.row,docPos.column+chars,chars===0);};this.moveCursorToPosition=function(position){this.moveCursorTo(position.row,position.column);};this.moveCursorTo=function(row,column,keepDesiredColumn){var fold=this.session.getFoldAt(row,column,1);if(fold){row=fold.start.row;column=fold.start.column;}this.$keepDesiredColumnOnChange=true;this.lead.setPosition(row,column);this.$keepDesiredColumnOnChange=false;if(!keepDesiredColumn)this.$desiredColumn=null;};this.moveCursorToScreen=function(row,column,keepDesiredColumn){var pos=this.session.screenToDocumentPosition(row,column);this.moveCursorTo(pos.row,pos.column,keepDesiredColumn);};this.detach=function(){this.lead.detach();this.anchor.detach();this.session=this.doc=null;};this.fromOrientedRange=function(range){this.setSelectionRange(range,range.cursor==range.start);this.$desiredColumn=range.desiredColumn||this.$desiredColumn;};this.toOrientedRange=function(range){var r=this.getRange();if(range){range.start.column=r.start.column;range.start.row=r.start.row;range.end.column=r.end.column;range.end.row=r.end.row;}else{range=r;}range.cursor=this.isBackwards()?range.start:range.end;range.desiredColumn=this.$desiredColumn;return range;};this.getRangeOfMovements=function(func){var start=this.getCursor();try{func(this);var end=this.getCursor();return Range.fromPoints(start,end);}catch(e){return Range.fromPoints(start,start);}finally{this.moveCursorToPosition(start);}};this.toJSON=function(){if(this.rangeCount){var data=this.ranges.map(function(r){var r1=r.clone();r1.isBackwards=r.cursor==r.start;return r1;});}else{var data=this.getRange();data.isBackwards=this.isBackwards();}return data;};this.fromJSON=function(data){if(data.start==undefined){if(this.rangeList){this.toSingleRange(data[0]);for(var i=data.length;i--;){var r=Range.fromPoints(data[i].start,data[i].end);if(data[i].isBackwards)r.cursor=r.start;this.addRange(r,true);}return;}else data=data[0];}if(this.rangeList)this.toSingleRange(data);this.setSelectionRange(data,data.isBackwards);};this.isEqual=function(data){if((data.length||this.rangeCount)&&data.length!=this.rangeCount)return false;if(!data.length||!this.ranges)return this.getRange().isEqual(data);for(var i=this.ranges.length;i--;){if(!this.ranges[i].isEqual(data[i]))return false;}return true;};}).call(Selection.prototype);exports.Selection=Selection;});ace.define("ace/tokenizer",["require","exports","module","ace/config"],function(acequire,exports,module){"use strict";var config=acequire("./config");var MAX_TOKEN_COUNT=2000;var Tokenizer=function Tokenizer(rules){this.states=rules;this.regExps={};this.matchMappings={};for(var key in this.states){var state=this.states[key];var ruleRegExps=[];var matchTotal=0;var mapping=this.matchMappings[key]={defaultToken:"text"};var flag="g";var splitterRurles=[];for(var i=0;i<state.length;i++){var rule=state[i];if(rule.defaultToken)mapping.defaultToken=rule.defaultToken;if(rule.caseInsensitive)flag="gi";if(rule.regex==null)continue;if(rule.regex instanceof RegExp)rule.regex=rule.regex.toString().slice(1,-1);var adjustedregex=rule.regex;var matchcount=new RegExp("(?:("+adjustedregex+")|(.))").exec("a").length-2;if(Array.isArray(rule.token)){if(rule.token.length==1||matchcount==1){rule.token=rule.token[0];}else if(matchcount-1!=rule.token.length){this.reportError("number of classes and regexp groups doesn't match",{rule:rule,groupCount:matchcount-1});rule.token=rule.token[0];}else{rule.tokenArray=rule.token;rule.token=null;rule.onMatch=this.$arrayTokens;}}else if(typeof rule.token=="function"&&!rule.onMatch){if(matchcount>1)rule.onMatch=this.$applyToken;else rule.onMatch=rule.token;}if(matchcount>1){if(/\\\d/.test(rule.regex)){adjustedregex=rule.regex.replace(/\\([0-9]+)/g,function(match,digit){return"\\"+(parseInt(digit,10)+matchTotal+1);});}else{matchcount=1;adjustedregex=this.removeCapturingGroups(rule.regex);}if(!rule.splitRegex&&typeof rule.token!="string")splitterRurles.push(rule);// flag will be known only at the very end
}mapping[matchTotal]=i;matchTotal+=matchcount;ruleRegExps.push(adjustedregex);if(!rule.onMatch)rule.onMatch=null;}if(!ruleRegExps.length){mapping[0]=0;ruleRegExps.push("$");}splitterRurles.forEach(function(rule){rule.splitRegex=this.createSplitterRegexp(rule.regex,flag);},this);this.regExps[key]=new RegExp("("+ruleRegExps.join(")|(")+")|($)",flag);}};(function(){this.$setMaxTokenCount=function(m){MAX_TOKEN_COUNT=m|0;};this.$applyToken=function(str){var values=this.splitRegex.exec(str).slice(1);var types=this.token.apply(this,values);if(typeof types==="string")return[{type:types,value:str}];var tokens=[];for(var i=0,l=types.length;i<l;i++){if(values[i])tokens[tokens.length]={type:types[i],value:values[i]};}return tokens;};this.$arrayTokens=function(str){if(!str)return[];var values=this.splitRegex.exec(str);if(!values)return"text";var tokens=[];var types=this.tokenArray;for(var i=0,l=types.length;i<l;i++){if(values[i+1])tokens[tokens.length]={type:types[i],value:values[i+1]};}return tokens;};this.removeCapturingGroups=function(src){var r=src.replace(/\[(?:\\.|[^\]])*?\]|\\.|\(\?[:=!]|(\()/g,function(x,y){return y?"(?:":x;});return r;};this.createSplitterRegexp=function(src,flag){if(src.indexOf("(?=")!=-1){var stack=0;var inChClass=false;var lastCapture={};src.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g,function(m,esc,parenOpen,parenClose,square,index){if(inChClass){inChClass=square!="]";}else if(square){inChClass=true;}else if(parenClose){if(stack==lastCapture.stack){lastCapture.end=index+1;lastCapture.stack=-1;}stack--;}else if(parenOpen){stack++;if(parenOpen.length!=1){lastCapture.stack=stack;lastCapture.start=index;}}return m;});if(lastCapture.end!=null&&/^\)*$/.test(src.substr(lastCapture.end)))src=src.substring(0,lastCapture.start)+src.substr(lastCapture.end);}if(src.charAt(0)!="^")src="^"+src;if(src.charAt(src.length-1)!="$")src+="$";return new RegExp(src,(flag||"").replace("g",""));};this.getLineTokens=function(line,startState){if(startState&&typeof startState!="string"){var stack=startState.slice(0);startState=stack[0];if(startState==="#tmp"){stack.shift();startState=stack.shift();}}else var stack=[];var currentState=startState||"start";var state=this.states[currentState];if(!state){currentState="start";state=this.states[currentState];}var mapping=this.matchMappings[currentState];var re=this.regExps[currentState];re.lastIndex=0;var match,tokens=[];var lastIndex=0;var matchAttempts=0;var token={type:null,value:""};while(match=re.exec(line)){var type=mapping.defaultToken;var rule=null;var value=match[0];var index=re.lastIndex;if(index-value.length>lastIndex){var skipped=line.substring(lastIndex,index-value.length);if(token.type==type){token.value+=skipped;}else{if(token.type)tokens.push(token);token={type:type,value:skipped};}}for(var i=0;i<match.length-2;i++){if(match[i+1]===undefined)continue;rule=state[mapping[i]];if(rule.onMatch)type=rule.onMatch(value,currentState,stack);else type=rule.token;if(rule.next){if(typeof rule.next=="string"){currentState=rule.next;}else{currentState=rule.next(currentState,stack);}state=this.states[currentState];if(!state){this.reportError("state doesn't exist",currentState);currentState="start";state=this.states[currentState];}mapping=this.matchMappings[currentState];lastIndex=index;re=this.regExps[currentState];re.lastIndex=index;}break;}if(value){if(typeof type==="string"){if((!rule||rule.merge!==false)&&token.type===type){token.value+=value;}else{if(token.type)tokens.push(token);token={type:type,value:value};}}else if(type){if(token.type)tokens.push(token);token={type:null,value:""};for(var i=0;i<type.length;i++){tokens.push(type[i]);}}}if(lastIndex==line.length)break;lastIndex=index;if(matchAttempts++>MAX_TOKEN_COUNT){if(matchAttempts>2*line.length){this.reportError("infinite loop with in ace tokenizer",{startState:startState,line:line});}while(lastIndex<line.length){if(token.type)tokens.push(token);token={value:line.substring(lastIndex,lastIndex+=2000),type:"overflow"};}currentState="start";stack=[];break;}}if(token.type)tokens.push(token);if(stack.length>1){if(stack[0]!==currentState)stack.unshift("#tmp",currentState);}return{tokens:tokens,state:stack.length?stack:currentState};};this.reportError=config.reportError;}).call(Tokenizer.prototype);exports.Tokenizer=Tokenizer;});ace.define("ace/mode/text_highlight_rules",["require","exports","module","ace/lib/lang"],function(acequire,exports,module){"use strict";var lang=acequire("../lib/lang");var TextHighlightRules=function TextHighlightRules(){this.$rules={"start":[{token:"empty_line",regex:'^$'},{defaultToken:"text"}]};};(function(){this.addRules=function(rules,prefix){if(!prefix){for(var key in rules){this.$rules[key]=rules[key];}return;}for(var key in rules){var state=rules[key];for(var i=0;i<state.length;i++){var rule=state[i];if(rule.next||rule.onMatch){if(typeof rule.next=="string"){if(rule.next.indexOf(prefix)!==0)rule.next=prefix+rule.next;}if(rule.nextState&&rule.nextState.indexOf(prefix)!==0)rule.nextState=prefix+rule.nextState;}}this.$rules[prefix+key]=state;}};this.getRules=function(){return this.$rules;};this.embedRules=function(HighlightRules,prefix,escapeRules,states,append){var embedRules=typeof HighlightRules=="function"?new HighlightRules().getRules():HighlightRules;if(states){for(var i=0;i<states.length;i++){states[i]=prefix+states[i];}}else{states=[];for(var key in embedRules){states.push(prefix+key);}}this.addRules(embedRules,prefix);if(escapeRules){var addRules=Array.prototype[append?"push":"unshift"];for(var i=0;i<states.length;i++){addRules.apply(this.$rules[states[i]],lang.deepCopy(escapeRules));}}if(!this.$embeds)this.$embeds=[];this.$embeds.push(prefix);};this.getEmbeds=function(){return this.$embeds;};var pushState=function pushState(currentState,stack){if(currentState!="start"||stack.length)stack.unshift(this.nextState,currentState);return this.nextState;};var popState=function popState(currentState,stack){stack.shift();return stack.shift()||"start";};this.normalizeRules=function(){var id=0;var rules=this.$rules;function processState(key){var state=rules[key];state.processed=true;for(var i=0;i<state.length;i++){var rule=state[i];var toInsert=null;if(Array.isArray(rule)){toInsert=rule;rule={};}if(!rule.regex&&rule.start){rule.regex=rule.start;if(!rule.next)rule.next=[];rule.next.push({defaultToken:rule.token},{token:rule.token+".end",regex:rule.end||rule.start,next:"pop"});rule.token=rule.token+".start";rule.push=true;}var next=rule.next||rule.push;if(next&&Array.isArray(next)){var stateName=rule.stateName;if(!stateName){stateName=rule.token;if(typeof stateName!="string")stateName=stateName[0]||"";if(rules[stateName])stateName+=id++;}rules[stateName]=next;rule.next=stateName;processState(stateName);}else if(next=="pop"){rule.next=popState;}if(rule.push){rule.nextState=rule.next||rule.push;rule.next=pushState;delete rule.push;}if(rule.rules){for(var r in rule.rules){if(rules[r]){if(rules[r].push)rules[r].push.apply(rules[r],rule.rules[r]);}else{rules[r]=rule.rules[r];}}}var includeName=typeof rule=="string"?rule:typeof rule.include=="string"?rule.include:"";if(includeName){toInsert=rules[includeName];}if(toInsert){var args=[i,1].concat(toInsert);if(rule.noEscape)args=args.filter(function(x){return!x.next;});state.splice.apply(state,args);i--;}if(rule.keywordMap){rule.token=this.createKeywordMapper(rule.keywordMap,rule.defaultToken||"text",rule.caseInsensitive);delete rule.defaultToken;}}}Object.keys(rules).forEach(processState,this);};this.createKeywordMapper=function(map,defaultToken,ignoreCase,splitChar){var keywords=Object.create(null);Object.keys(map).forEach(function(className){var a=map[className];if(ignoreCase)a=a.toLowerCase();var list=a.split(splitChar||"|");for(var i=list.length;i--;){keywords[list[i]]=className;}});if(Object.getPrototypeOf(keywords)){keywords.__proto__=null;}this.$keywordList=Object.keys(keywords);map=null;return ignoreCase?function(value){return keywords[value.toLowerCase()]||defaultToken;}:function(value){return keywords[value]||defaultToken;};};this.getKeywords=function(){return this.$keywords;};}).call(TextHighlightRules.prototype);exports.TextHighlightRules=TextHighlightRules;});ace.define("ace/mode/behaviour",["require","exports","module"],function(acequire,exports,module){"use strict";var Behaviour=function Behaviour(){this.$behaviours={};};(function(){this.add=function(name,action,callback){switch(undefined){case this.$behaviours:this.$behaviours={};case this.$behaviours[name]:this.$behaviours[name]={};}this.$behaviours[name][action]=callback;};this.addBehaviours=function(behaviours){for(var key in behaviours){for(var action in behaviours[key]){this.add(key,action,behaviours[key][action]);}}};this.remove=function(name){if(this.$behaviours&&this.$behaviours[name]){delete this.$behaviours[name];}};this.inherit=function(mode,filter){if(typeof mode==="function"){var behaviours=new mode().getBehaviours(filter);}else{var behaviours=mode.getBehaviours(filter);}this.addBehaviours(behaviours);};this.getBehaviours=function(filter){if(!filter){return this.$behaviours;}else{var ret={};for(var i=0;i<filter.length;i++){if(this.$behaviours[filter[i]]){ret[filter[i]]=this.$behaviours[filter[i]];}}return ret;}};}).call(Behaviour.prototype);exports.Behaviour=Behaviour;});ace.define("ace/token_iterator",["require","exports","module"],function(acequire,exports,module){"use strict";var TokenIterator=function TokenIterator(session,initialRow,initialColumn){this.$session=session;this.$row=initialRow;this.$rowTokens=session.getTokens(initialRow);var token=session.getTokenAt(initialRow,initialColumn);this.$tokenIndex=token?token.index:-1;};(function(){this.stepBackward=function(){this.$tokenIndex-=1;while(this.$tokenIndex<0){this.$row-=1;if(this.$row<0){this.$row=0;return null;}this.$rowTokens=this.$session.getTokens(this.$row);this.$tokenIndex=this.$rowTokens.length-1;}return this.$rowTokens[this.$tokenIndex];};this.stepForward=function(){this.$tokenIndex+=1;var rowCount;while(this.$tokenIndex>=this.$rowTokens.length){this.$row+=1;if(!rowCount)rowCount=this.$session.getLength();if(this.$row>=rowCount){this.$row=rowCount-1;return null;}this.$rowTokens=this.$session.getTokens(this.$row);this.$tokenIndex=0;}return this.$rowTokens[this.$tokenIndex];};this.getCurrentToken=function(){return this.$rowTokens[this.$tokenIndex];};this.getCurrentTokenRow=function(){return this.$row;};this.getCurrentTokenColumn=function(){var rowTokens=this.$rowTokens;var tokenIndex=this.$tokenIndex;var column=rowTokens[tokenIndex].start;if(column!==undefined)return column;column=0;while(tokenIndex>0){tokenIndex-=1;column+=rowTokens[tokenIndex].value.length;}return column;};this.getCurrentTokenPosition=function(){return{row:this.$row,column:this.getCurrentTokenColumn()};};}).call(TokenIterator.prototype);exports.TokenIterator=TokenIterator;});ace.define("ace/mode/behaviour/cstyle",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"],function(acequire,exports,module){"use strict";var oop=acequire("../../lib/oop");var Behaviour=acequire("../behaviour").Behaviour;var TokenIterator=acequire("../../token_iterator").TokenIterator;var lang=acequire("../../lib/lang");var SAFE_INSERT_IN_TOKENS=["text","paren.rparen","punctuation.operator"];var SAFE_INSERT_BEFORE_TOKENS=["text","paren.rparen","punctuation.operator","comment"];var context;var contextCache={};var initContext=function initContext(editor){var id=-1;if(editor.multiSelect){id=editor.selection.index;if(contextCache.rangeCount!=editor.multiSelect.rangeCount)contextCache={rangeCount:editor.multiSelect.rangeCount};}if(contextCache[id])return context=contextCache[id];context=contextCache[id]={autoInsertedBrackets:0,autoInsertedRow:-1,autoInsertedLineEnd:"",maybeInsertedBrackets:0,maybeInsertedRow:-1,maybeInsertedLineStart:"",maybeInsertedLineEnd:""};};var getWrapped=function getWrapped(selection,selected,opening,closing){var rowDiff=selection.end.row-selection.start.row;return{text:opening+selected+closing,selection:[0,selection.start.column+1,rowDiff,selection.end.column+(rowDiff?0:1)]};};var CstyleBehaviour=function CstyleBehaviour(){this.add("braces","insertion",function(state,action,editor,session,text){var cursor=editor.getCursorPosition();var line=session.doc.getLine(cursor.row);if(text=='{'){initContext(editor);var selection=editor.getSelectionRange();var selected=session.doc.getTextRange(selection);if(selected!==""&&selected!=="{"&&editor.getWrapBehavioursEnabled()){return getWrapped(selection,selected,'{','}');}else if(CstyleBehaviour.isSaneInsertion(editor,session)){if(/[\]\}\)]/.test(line[cursor.column])||editor.inMultiSelectMode){CstyleBehaviour.recordAutoInsert(editor,session,"}");return{text:'{}',selection:[1,1]};}else{CstyleBehaviour.recordMaybeInsert(editor,session,"{");return{text:'{',selection:[1,1]};}}}else if(text=='}'){initContext(editor);var rightChar=line.substring(cursor.column,cursor.column+1);if(rightChar=='}'){var matching=session.$findOpeningBracket('}',{column:cursor.column+1,row:cursor.row});if(matching!==null&&CstyleBehaviour.isAutoInsertedClosing(cursor,line,text)){CstyleBehaviour.popAutoInsertedClosing();return{text:'',selection:[1,1]};}}}else if(text=="\n"||text=="\r\n"){initContext(editor);var closing="";if(CstyleBehaviour.isMaybeInsertedClosing(cursor,line)){closing=lang.stringRepeat("}",context.maybeInsertedBrackets);CstyleBehaviour.clearMaybeInsertedClosing();}var rightChar=line.substring(cursor.column,cursor.column+1);if(rightChar==='}'){var openBracePos=session.findMatchingBracket({row:cursor.row,column:cursor.column+1},'}');if(!openBracePos)return null;var next_indent=this.$getIndent(session.getLine(openBracePos.row));}else if(closing){var next_indent=this.$getIndent(line);}else{CstyleBehaviour.clearMaybeInsertedClosing();return;}var indent=next_indent+session.getTabString();return{text:'\n'+indent+'\n'+next_indent+closing,selection:[1,indent.length,1,indent.length]};}else{CstyleBehaviour.clearMaybeInsertedClosing();}});this.add("braces","deletion",function(state,action,editor,session,range){var selected=session.doc.getTextRange(range);if(!range.isMultiLine()&&selected=='{'){initContext(editor);var line=session.doc.getLine(range.start.row);var rightChar=line.substring(range.end.column,range.end.column+1);if(rightChar=='}'){range.end.column++;return range;}else{context.maybeInsertedBrackets--;}}});this.add("parens","insertion",function(state,action,editor,session,text){if(text=='('){initContext(editor);var selection=editor.getSelectionRange();var selected=session.doc.getTextRange(selection);if(selected!==""&&editor.getWrapBehavioursEnabled()){return getWrapped(selection,selected,'(',')');}else if(CstyleBehaviour.isSaneInsertion(editor,session)){CstyleBehaviour.recordAutoInsert(editor,session,")");return{text:'()',selection:[1,1]};}}else if(text==')'){initContext(editor);var cursor=editor.getCursorPosition();var line=session.doc.getLine(cursor.row);var rightChar=line.substring(cursor.column,cursor.column+1);if(rightChar==')'){var matching=session.$findOpeningBracket(')',{column:cursor.column+1,row:cursor.row});if(matching!==null&&CstyleBehaviour.isAutoInsertedClosing(cursor,line,text)){CstyleBehaviour.popAutoInsertedClosing();return{text:'',selection:[1,1]};}}}});this.add("parens","deletion",function(state,action,editor,session,range){var selected=session.doc.getTextRange(range);if(!range.isMultiLine()&&selected=='('){initContext(editor);var line=session.doc.getLine(range.start.row);var rightChar=line.substring(range.start.column+1,range.start.column+2);if(rightChar==')'){range.end.column++;return range;}}});this.add("brackets","insertion",function(state,action,editor,session,text){if(text=='['){initContext(editor);var selection=editor.getSelectionRange();var selected=session.doc.getTextRange(selection);if(selected!==""&&editor.getWrapBehavioursEnabled()){return getWrapped(selection,selected,'[',']');}else if(CstyleBehaviour.isSaneInsertion(editor,session)){CstyleBehaviour.recordAutoInsert(editor,session,"]");return{text:'[]',selection:[1,1]};}}else if(text==']'){initContext(editor);var cursor=editor.getCursorPosition();var line=session.doc.getLine(cursor.row);var rightChar=line.substring(cursor.column,cursor.column+1);if(rightChar==']'){var matching=session.$findOpeningBracket(']',{column:cursor.column+1,row:cursor.row});if(matching!==null&&CstyleBehaviour.isAutoInsertedClosing(cursor,line,text)){CstyleBehaviour.popAutoInsertedClosing();return{text:'',selection:[1,1]};}}}});this.add("brackets","deletion",function(state,action,editor,session,range){var selected=session.doc.getTextRange(range);if(!range.isMultiLine()&&selected=='['){initContext(editor);var line=session.doc.getLine(range.start.row);var rightChar=line.substring(range.start.column+1,range.start.column+2);if(rightChar==']'){range.end.column++;return range;}}});this.add("string_dquotes","insertion",function(state,action,editor,session,text){if(text=='"'||text=="'"){if(this.lineCommentStart&&this.lineCommentStart.indexOf(text)!=-1)return;initContext(editor);var quote=text;var selection=editor.getSelectionRange();var selected=session.doc.getTextRange(selection);if(selected!==""&&selected!=="'"&&selected!='"'&&editor.getWrapBehavioursEnabled()){return getWrapped(selection,selected,quote,quote);}else if(!selected){var cursor=editor.getCursorPosition();var line=session.doc.getLine(cursor.row);var leftChar=line.substring(cursor.column-1,cursor.column);var rightChar=line.substring(cursor.column,cursor.column+1);var token=session.getTokenAt(cursor.row,cursor.column);var rightToken=session.getTokenAt(cursor.row,cursor.column+1);if(leftChar=="\\"&&token&&/escape/.test(token.type))return null;var stringBefore=token&&/string|escape/.test(token.type);var stringAfter=!rightToken||/string|escape/.test(rightToken.type);var pair;if(rightChar==quote){pair=stringBefore!==stringAfter;if(pair&&/string\.end/.test(rightToken.type))pair=false;}else{if(stringBefore&&!stringAfter)return null;// wrap string with different quote
if(stringBefore&&stringAfter)return null;// do not pair quotes inside strings
var wordRe=session.$mode.tokenRe;wordRe.lastIndex=0;var isWordBefore=wordRe.test(leftChar);wordRe.lastIndex=0;var isWordAfter=wordRe.test(leftChar);if(isWordBefore||isWordAfter)return null;// before or after alphanumeric
if(rightChar&&!/[\s;,.})\]\\]/.test(rightChar))return null;// there is rightChar and it isn't closing
pair=true;}return{text:pair?quote+quote:"",selection:[1,1]};}}});this.add("string_dquotes","deletion",function(state,action,editor,session,range){var selected=session.doc.getTextRange(range);if(!range.isMultiLine()&&(selected=='"'||selected=="'")){initContext(editor);var line=session.doc.getLine(range.start.row);var rightChar=line.substring(range.start.column+1,range.start.column+2);if(rightChar==selected){range.end.column++;return range;}}});};CstyleBehaviour.isSaneInsertion=function(editor,session){var cursor=editor.getCursorPosition();var iterator=new TokenIterator(session,cursor.row,cursor.column);if(!this.$matchTokenType(iterator.getCurrentToken()||"text",SAFE_INSERT_IN_TOKENS)){var iterator2=new TokenIterator(session,cursor.row,cursor.column+1);if(!this.$matchTokenType(iterator2.getCurrentToken()||"text",SAFE_INSERT_IN_TOKENS))return false;}iterator.stepForward();return iterator.getCurrentTokenRow()!==cursor.row||this.$matchTokenType(iterator.getCurrentToken()||"text",SAFE_INSERT_BEFORE_TOKENS);};CstyleBehaviour.$matchTokenType=function(token,types){return types.indexOf(token.type||token)>-1;};CstyleBehaviour.recordAutoInsert=function(editor,session,bracket){var cursor=editor.getCursorPosition();var line=session.doc.getLine(cursor.row);if(!this.isAutoInsertedClosing(cursor,line,context.autoInsertedLineEnd[0]))context.autoInsertedBrackets=0;context.autoInsertedRow=cursor.row;context.autoInsertedLineEnd=bracket+line.substr(cursor.column);context.autoInsertedBrackets++;};CstyleBehaviour.recordMaybeInsert=function(editor,session,bracket){var cursor=editor.getCursorPosition();var line=session.doc.getLine(cursor.row);if(!this.isMaybeInsertedClosing(cursor,line))context.maybeInsertedBrackets=0;context.maybeInsertedRow=cursor.row;context.maybeInsertedLineStart=line.substr(0,cursor.column)+bracket;context.maybeInsertedLineEnd=line.substr(cursor.column);context.maybeInsertedBrackets++;};CstyleBehaviour.isAutoInsertedClosing=function(cursor,line,bracket){return context.autoInsertedBrackets>0&&cursor.row===context.autoInsertedRow&&bracket===context.autoInsertedLineEnd[0]&&line.substr(cursor.column)===context.autoInsertedLineEnd;};CstyleBehaviour.isMaybeInsertedClosing=function(cursor,line){return context.maybeInsertedBrackets>0&&cursor.row===context.maybeInsertedRow&&line.substr(cursor.column)===context.maybeInsertedLineEnd&&line.substr(0,cursor.column)==context.maybeInsertedLineStart;};CstyleBehaviour.popAutoInsertedClosing=function(){context.autoInsertedLineEnd=context.autoInsertedLineEnd.substr(1);context.autoInsertedBrackets--;};CstyleBehaviour.clearMaybeInsertedClosing=function(){if(context){context.maybeInsertedBrackets=0;context.maybeInsertedRow=-1;}};oop.inherits(CstyleBehaviour,Behaviour);exports.CstyleBehaviour=CstyleBehaviour;});ace.define("ace/unicode",["require","exports","module"],function(acequire,exports,module){"use strict";exports.packages={};addUnicodePackage({L:"0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",Ll:"0061-007A00AA00B500BA00DF-00F600F8-00FF01010103010501070109010B010D010F01110113011501170119011B011D011F01210123012501270129012B012D012F01310133013501370138013A013C013E014001420144014601480149014B014D014F01510153015501570159015B015D015F01610163016501670169016B016D016F0171017301750177017A017C017E-0180018301850188018C018D019201950199-019B019E01A101A301A501A801AA01AB01AD01B001B401B601B901BA01BD-01BF01C601C901CC01CE01D001D201D401D601D801DA01DC01DD01DF01E101E301E501E701E901EB01ED01EF01F001F301F501F901FB01FD01FF02010203020502070209020B020D020F02110213021502170219021B021D021F02210223022502270229022B022D022F02310233-0239023C023F0240024202470249024B024D024F-02930295-02AF037103730377037B-037D039003AC-03CE03D003D103D5-03D703D903DB03DD03DF03E103E303E503E703E903EB03ED03EF-03F303F503F803FB03FC0430-045F04610463046504670469046B046D046F04710473047504770479047B047D047F0481048B048D048F04910493049504970499049B049D049F04A104A304A504A704A904AB04AD04AF04B104B304B504B704B904BB04BD04BF04C204C404C604C804CA04CC04CE04CF04D104D304D504D704D904DB04DD04DF04E104E304E504E704E904EB04ED04EF04F104F304F504F704F904FB04FD04FF05010503050505070509050B050D050F05110513051505170519051B051D051F0521052305250561-05871D00-1D2B1D62-1D771D79-1D9A1E011E031E051E071E091E0B1E0D1E0F1E111E131E151E171E191E1B1E1D1E1F1E211E231E251E271E291E2B1E2D1E2F1E311E331E351E371E391E3B1E3D1E3F1E411E431E451E471E491E4B1E4D1E4F1E511E531E551E571E591E5B1E5D1E5F1E611E631E651E671E691E6B1E6D1E6F1E711E731E751E771E791E7B1E7D1E7F1E811E831E851E871E891E8B1E8D1E8F1E911E931E95-1E9D1E9F1EA11EA31EA51EA71EA91EAB1EAD1EAF1EB11EB31EB51EB71EB91EBB1EBD1EBF1EC11EC31EC51EC71EC91ECB1ECD1ECF1ED11ED31ED51ED71ED91EDB1EDD1EDF1EE11EE31EE51EE71EE91EEB1EED1EEF1EF11EF31EF51EF71EF91EFB1EFD1EFF-1F071F10-1F151F20-1F271F30-1F371F40-1F451F50-1F571F60-1F671F70-1F7D1F80-1F871F90-1F971FA0-1FA71FB0-1FB41FB61FB71FBE1FC2-1FC41FC61FC71FD0-1FD31FD61FD71FE0-1FE71FF2-1FF41FF61FF7210A210E210F2113212F21342139213C213D2146-2149214E21842C30-2C5E2C612C652C662C682C6A2C6C2C712C732C742C76-2C7C2C812C832C852C872C892C8B2C8D2C8F2C912C932C952C972C992C9B2C9D2C9F2CA12CA32CA52CA72CA92CAB2CAD2CAF2CB12CB32CB52CB72CB92CBB2CBD2CBF2CC12CC32CC52CC72CC92CCB2CCD2CCF2CD12CD32CD52CD72CD92CDB2CDD2CDF2CE12CE32CE42CEC2CEE2D00-2D25A641A643A645A647A649A64BA64DA64FA651A653A655A657A659A65BA65DA65FA663A665A667A669A66BA66DA681A683A685A687A689A68BA68DA68FA691A693A695A697A723A725A727A729A72BA72DA72F-A731A733A735A737A739A73BA73DA73FA741A743A745A747A749A74BA74DA74FA751A753A755A757A759A75BA75DA75FA761A763A765A767A769A76BA76DA76FA771-A778A77AA77CA77FA781A783A785A787A78CFB00-FB06FB13-FB17FF41-FF5A",Lu:"0041-005A00C0-00D600D8-00DE01000102010401060108010A010C010E01100112011401160118011A011C011E01200122012401260128012A012C012E01300132013401360139013B013D013F0141014301450147014A014C014E01500152015401560158015A015C015E01600162016401660168016A016C016E017001720174017601780179017B017D018101820184018601870189-018B018E-0191019301940196-0198019C019D019F01A001A201A401A601A701A901AC01AE01AF01B1-01B301B501B701B801BC01C401C701CA01CD01CF01D101D301D501D701D901DB01DE01E001E201E401E601E801EA01EC01EE01F101F401F6-01F801FA01FC01FE02000202020402060208020A020C020E02100212021402160218021A021C021E02200222022402260228022A022C022E02300232023A023B023D023E02410243-02460248024A024C024E03700372037603860388-038A038C038E038F0391-03A103A3-03AB03CF03D2-03D403D803DA03DC03DE03E003E203E403E603E803EA03EC03EE03F403F703F903FA03FD-042F04600462046404660468046A046C046E04700472047404760478047A047C047E0480048A048C048E04900492049404960498049A049C049E04A004A204A404A604A804AA04AC04AE04B004B204B404B604B804BA04BC04BE04C004C104C304C504C704C904CB04CD04D004D204D404D604D804DA04DC04DE04E004E204E404E604E804EA04EC04EE04F004F204F404F604F804FA04FC04FE05000502050405060508050A050C050E05100512051405160518051A051C051E0520052205240531-055610A0-10C51E001E021E041E061E081E0A1E0C1E0E1E101E121E141E161E181E1A1E1C1E1E1E201E221E241E261E281E2A1E2C1E2E1E301E321E341E361E381E3A1E3C1E3E1E401E421E441E461E481E4A1E4C1E4E1E501E521E541E561E581E5A1E5C1E5E1E601E621E641E661E681E6A1E6C1E6E1E701E721E741E761E781E7A1E7C1E7E1E801E821E841E861E881E8A1E8C1E8E1E901E921E941E9E1EA01EA21EA41EA61EA81EAA1EAC1EAE1EB01EB21EB41EB61EB81EBA1EBC1EBE1EC01EC21EC41EC61EC81ECA1ECC1ECE1ED01ED21ED41ED61ED81EDA1EDC1EDE1EE01EE21EE41EE61EE81EEA1EEC1EEE1EF01EF21EF41EF61EF81EFA1EFC1EFE1F08-1F0F1F18-1F1D1F28-1F2F1F38-1F3F1F48-1F4D1F591F5B1F5D1F5F1F68-1F6F1FB8-1FBB1FC8-1FCB1FD8-1FDB1FE8-1FEC1FF8-1FFB21022107210B-210D2110-211221152119-211D212421262128212A-212D2130-2133213E213F214521832C00-2C2E2C602C62-2C642C672C692C6B2C6D-2C702C722C752C7E-2C802C822C842C862C882C8A2C8C2C8E2C902C922C942C962C982C9A2C9C2C9E2CA02CA22CA42CA62CA82CAA2CAC2CAE2CB02CB22CB42CB62CB82CBA2CBC2CBE2CC02CC22CC42CC62CC82CCA2CCC2CCE2CD02CD22CD42CD62CD82CDA2CDC2CDE2CE02CE22CEB2CEDA640A642A644A646A648A64AA64CA64EA650A652A654A656A658A65AA65CA65EA662A664A666A668A66AA66CA680A682A684A686A688A68AA68CA68EA690A692A694A696A722A724A726A728A72AA72CA72EA732A734A736A738A73AA73CA73EA740A742A744A746A748A74AA74CA74EA750A752A754A756A758A75AA75CA75EA760A762A764A766A768A76AA76CA76EA779A77BA77DA77EA780A782A784A786A78BFF21-FF3A",Lt:"01C501C801CB01F21F88-1F8F1F98-1F9F1FA8-1FAF1FBC1FCC1FFC",Lm:"02B0-02C102C6-02D102E0-02E402EC02EE0374037A0559064006E506E607F407F507FA081A0824082809710E460EC610FC17D718431AA71C78-1C7D1D2C-1D611D781D9B-1DBF2071207F2090-20942C7D2D6F2E2F30053031-3035303B309D309E30FC-30FEA015A4F8-A4FDA60CA67FA717-A71FA770A788A9CFAA70AADDFF70FF9EFF9F",Lo:"01BB01C0-01C3029405D0-05EA05F0-05F20621-063F0641-064A066E066F0671-06D306D506EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA0800-08150904-0939093D09500958-096109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E450E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10D0-10FA1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317DC1820-18421844-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C771CE9-1CEC1CEE-1CF12135-21382D30-2D652D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE3006303C3041-3096309F30A1-30FA30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A014A016-A48CA4D0-A4F7A500-A60BA610-A61FA62AA62BA66EA6A0-A6E5A7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2AA00-AA28AA40-AA42AA44-AA4BAA60-AA6FAA71-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADBAADCABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF66-FF6FFF71-FF9DFFA0-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",M:"0300-036F0483-04890591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DE-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0903093C093E-094E0951-0955096209630981-098309BC09BE-09C409C709C809CB-09CD09D709E209E30A01-0A030A3C0A3E-0A420A470A480A4B-0A4D0A510A700A710A750A81-0A830ABC0ABE-0AC50AC7-0AC90ACB-0ACD0AE20AE30B01-0B030B3C0B3E-0B440B470B480B4B-0B4D0B560B570B620B630B820BBE-0BC20BC6-0BC80BCA-0BCD0BD70C01-0C030C3E-0C440C46-0C480C4A-0C4D0C550C560C620C630C820C830CBC0CBE-0CC40CC6-0CC80CCA-0CCD0CD50CD60CE20CE30D020D030D3E-0D440D46-0D480D4A-0D4D0D570D620D630D820D830DCA0DCF-0DD40DD60DD8-0DDF0DF20DF30E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F3E0F3F0F71-0F840F860F870F90-0F970F99-0FBC0FC6102B-103E1056-1059105E-10601062-10641067-106D1071-10741082-108D108F109A-109D135F1712-17141732-1734175217531772177317B6-17D317DD180B-180D18A91920-192B1930-193B19B0-19C019C819C91A17-1A1B1A55-1A5E1A60-1A7C1A7F1B00-1B041B34-1B441B6B-1B731B80-1B821BA1-1BAA1C24-1C371CD0-1CD21CD4-1CE81CED1CF21DC0-1DE61DFD-1DFF20D0-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66F-A672A67CA67DA6F0A6F1A802A806A80BA823-A827A880A881A8B4-A8C4A8E0-A8F1A926-A92DA947-A953A980-A983A9B3-A9C0AA29-AA36AA43AA4CAA4DAA7BAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE3-ABEAABECABEDFB1EFE00-FE0FFE20-FE26",Mn:"0300-036F0483-04870591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DF-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0902093C0941-0948094D0951-095509620963098109BC09C1-09C409CD09E209E30A010A020A3C0A410A420A470A480A4B-0A4D0A510A700A710A750A810A820ABC0AC1-0AC50AC70AC80ACD0AE20AE30B010B3C0B3F0B41-0B440B4D0B560B620B630B820BC00BCD0C3E-0C400C46-0C480C4A-0C4D0C550C560C620C630CBC0CBF0CC60CCC0CCD0CE20CE30D41-0D440D4D0D620D630DCA0DD2-0DD40DD60E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F71-0F7E0F80-0F840F860F870F90-0F970F99-0FBC0FC6102D-10301032-10371039103A103D103E10581059105E-10601071-1074108210851086108D109D135F1712-17141732-1734175217531772177317B7-17BD17C617C9-17D317DD180B-180D18A91920-19221927192819321939-193B1A171A181A561A58-1A5E1A601A621A65-1A6C1A73-1A7C1A7F1B00-1B031B341B36-1B3A1B3C1B421B6B-1B731B801B811BA2-1BA51BA81BA91C2C-1C331C361C371CD0-1CD21CD4-1CE01CE2-1CE81CED1DC0-1DE61DFD-1DFF20D0-20DC20E120E5-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66FA67CA67DA6F0A6F1A802A806A80BA825A826A8C4A8E0-A8F1A926-A92DA947-A951A980-A982A9B3A9B6-A9B9A9BCAA29-AA2EAA31AA32AA35AA36AA43AA4CAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE5ABE8ABEDFB1EFE00-FE0FFE20-FE26",Mc:"0903093E-09400949-094C094E0982098309BE-09C009C709C809CB09CC09D70A030A3E-0A400A830ABE-0AC00AC90ACB0ACC0B020B030B3E0B400B470B480B4B0B4C0B570BBE0BBF0BC10BC20BC6-0BC80BCA-0BCC0BD70C01-0C030C41-0C440C820C830CBE0CC0-0CC40CC70CC80CCA0CCB0CD50CD60D020D030D3E-0D400D46-0D480D4A-0D4C0D570D820D830DCF-0DD10DD8-0DDF0DF20DF30F3E0F3F0F7F102B102C10311038103B103C105610571062-10641067-106D108310841087-108C108F109A-109C17B617BE-17C517C717C81923-19261929-192B193019311933-193819B0-19C019C819C91A19-1A1B1A551A571A611A631A641A6D-1A721B041B351B3B1B3D-1B411B431B441B821BA11BA61BA71BAA1C24-1C2B1C341C351CE11CF2A823A824A827A880A881A8B4-A8C3A952A953A983A9B4A9B5A9BAA9BBA9BD-A9C0AA2FAA30AA33AA34AA4DAA7BABE3ABE4ABE6ABE7ABE9ABEAABEC",Me:"0488048906DE20DD-20E020E2-20E4A670-A672",N:"0030-003900B200B300B900BC-00BE0660-066906F0-06F907C0-07C90966-096F09E6-09EF09F4-09F90A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BF20C66-0C6F0C78-0C7E0CE6-0CEF0D66-0D750E50-0E590ED0-0ED90F20-0F331040-10491090-10991369-137C16EE-16F017E0-17E917F0-17F91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C5920702074-20792080-20892150-21822185-21892460-249B24EA-24FF2776-27932CFD30073021-30293038-303A3192-31953220-32293251-325F3280-328932B1-32BFA620-A629A6E6-A6EFA830-A835A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",Nd:"0030-00390660-066906F0-06F907C0-07C90966-096F09E6-09EF0A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BEF0C66-0C6F0CE6-0CEF0D66-0D6F0E50-0E590ED0-0ED90F20-0F291040-10491090-109917E0-17E91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C59A620-A629A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",Nl:"16EE-16F02160-21822185-218830073021-30293038-303AA6E6-A6EF",No:"00B200B300B900BC-00BE09F4-09F90BF0-0BF20C78-0C7E0D70-0D750F2A-0F331369-137C17F0-17F920702074-20792080-20892150-215F21892460-249B24EA-24FF2776-27932CFD3192-31953220-32293251-325F3280-328932B1-32BFA830-A835",P:"0021-00230025-002A002C-002F003A003B003F0040005B-005D005F007B007D00A100AB00B700BB00BF037E0387055A-055F0589058A05BE05C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F3A-0F3D0F850FD0-0FD4104A-104F10FB1361-13681400166D166E169B169C16EB-16ED1735173617D4-17D617D8-17DA1800-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD32010-20272030-20432045-20512053-205E207D207E208D208E2329232A2768-277527C527C627E6-27EF2983-299829D8-29DB29FC29FD2CF9-2CFC2CFE2CFF2E00-2E2E2E302E313001-30033008-30113014-301F3030303D30A030FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFD3EFD3FFE10-FE19FE30-FE52FE54-FE61FE63FE68FE6AFE6BFF01-FF03FF05-FF0AFF0C-FF0FFF1AFF1BFF1FFF20FF3B-FF3DFF3FFF5BFF5DFF5F-FF65",Pd:"002D058A05BE140018062010-20152E172E1A301C303030A0FE31FE32FE58FE63FF0D",Ps:"0028005B007B0F3A0F3C169B201A201E2045207D208D23292768276A276C276E27702772277427C527E627E827EA27EC27EE2983298529872989298B298D298F299129932995299729D829DA29FC2E222E242E262E283008300A300C300E3010301430163018301A301DFD3EFE17FE35FE37FE39FE3BFE3DFE3FFE41FE43FE47FE59FE5BFE5DFF08FF3BFF5BFF5FFF62",Pe:"0029005D007D0F3B0F3D169C2046207E208E232A2769276B276D276F27712773277527C627E727E927EB27ED27EF298429862988298A298C298E2990299229942996299829D929DB29FD2E232E252E272E293009300B300D300F3011301530173019301B301E301FFD3FFE18FE36FE38FE3AFE3CFE3EFE40FE42FE44FE48FE5AFE5CFE5EFF09FF3DFF5DFF60FF63",Pi:"00AB2018201B201C201F20392E022E042E092E0C2E1C2E20",Pf:"00BB2019201D203A2E032E052E0A2E0D2E1D2E21",Pc:"005F203F20402054FE33FE34FE4D-FE4FFF3F",Po:"0021-00230025-0027002A002C002E002F003A003B003F0040005C00A100B700BF037E0387055A-055F058905C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F850FD0-0FD4104A-104F10FB1361-1368166D166E16EB-16ED1735173617D4-17D617D8-17DA1800-18051807-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD3201620172020-20272030-2038203B-203E2041-20432047-205120532055-205E2CF9-2CFC2CFE2CFF2E002E012E06-2E082E0B2E0E-2E162E182E192E1B2E1E2E1F2E2A-2E2E2E302E313001-3003303D30FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFE10-FE16FE19FE30FE45FE46FE49-FE4CFE50-FE52FE54-FE57FE5F-FE61FE68FE6AFE6BFF01-FF03FF05-FF07FF0AFF0CFF0EFF0FFF1AFF1BFF1FFF20FF3CFF61FF64FF65",S:"0024002B003C-003E005E0060007C007E00A2-00A900AC00AE-00B100B400B600B800D700F702C2-02C502D2-02DF02E5-02EB02ED02EF-02FF03750384038503F604820606-0608060B060E060F06E906FD06FE07F609F209F309FA09FB0AF10B700BF3-0BFA0C7F0CF10CF20D790E3F0F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-139917DB194019E0-19FF1B61-1B6A1B74-1B7C1FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE20442052207A-207C208A-208C20A0-20B8210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B2140-2144214A-214D214F2190-2328232B-23E82400-24262440-244A249C-24E92500-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE27C0-27C427C7-27CA27CC27D0-27E527F0-29822999-29D729DC-29FB29FE-2B4C2B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F309B309C319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A700-A716A720A721A789A78AA828-A82BA836-A839AA77-AA79FB29FDFCFDFDFE62FE64-FE66FE69FF04FF0BFF1C-FF1EFF3EFF40FF5CFF5EFFE0-FFE6FFE8-FFEEFFFCFFFD",Sm:"002B003C-003E007C007E00AC00B100D700F703F60606-060820442052207A-207C208A-208C2140-2144214B2190-2194219A219B21A021A321A621AE21CE21CF21D221D421F4-22FF2308-230B23202321237C239B-23B323DC-23E125B725C125F8-25FF266F27C0-27C427C7-27CA27CC27D0-27E527F0-27FF2900-29822999-29D729DC-29FB29FE-2AFF2B30-2B442B47-2B4CFB29FE62FE64-FE66FF0BFF1C-FF1EFF5CFF5EFFE2FFE9-FFEC",Sc:"002400A2-00A5060B09F209F309FB0AF10BF90E3F17DB20A0-20B8A838FDFCFE69FF04FFE0FFE1FFE5FFE6",Sk:"005E006000A800AF00B400B802C2-02C502D2-02DF02E5-02EB02ED02EF-02FF0375038403851FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE309B309CA700-A716A720A721A789A78AFF3EFF40FFE3",So:"00A600A700A900AE00B000B60482060E060F06E906FD06FE07F609FA0B700BF3-0BF80BFA0C7F0CF10CF20D790F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-1399194019E0-19FF1B61-1B6A1B74-1B7C210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B214A214C214D214F2195-2199219C-219F21A121A221A421A521A7-21AD21AF-21CD21D021D121D321D5-21F32300-2307230C-231F2322-2328232B-237B237D-239A23B4-23DB23E2-23E82400-24262440-244A249C-24E92500-25B625B8-25C025C2-25F72600-266E2670-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE2800-28FF2B00-2B2F2B452B462B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A828-A82BA836A837A839AA77-AA79FDFDFFE4FFE8FFEDFFEEFFFCFFFD",Z:"002000A01680180E2000-200A20282029202F205F3000",Zs:"002000A01680180E2000-200A202F205F3000",Zl:"2028",Zp:"2029",C:"0000-001F007F-009F00AD03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-0605061C061D0620065F06DD070E070F074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17B417B517DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF200B-200F202A-202E2060-206F20722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-F8FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFD-FF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFFBFFFEFFFF",Cc:"0000-001F007F-009F",Cf:"00AD0600-060306DD070F17B417B5200B-200F202A-202E2060-2064206A-206FFEFFFFF9-FFFB",Co:"E000-F8FF",Cs:"D800-DFFF",Cn:"03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-05FF06040605061C061D0620065F070E074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF2065-206920722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-D7FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFDFEFEFF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFF8FFFEFFFF"});function addUnicodePackage(pack){var codePoint=/\w{4}/g;for(var name in pack){exports.packages[name]=pack[name].replace(codePoint,"\\u$&");}}});ace.define("ace/mode/text",["require","exports","module","ace/tokenizer","ace/mode/text_highlight_rules","ace/mode/behaviour/cstyle","ace/unicode","ace/lib/lang","ace/token_iterator","ace/range"],function(acequire,exports,module){"use strict";var Tokenizer=acequire("../tokenizer").Tokenizer;var TextHighlightRules=acequire("./text_highlight_rules").TextHighlightRules;var CstyleBehaviour=acequire("./behaviour/cstyle").CstyleBehaviour;var unicode=acequire("../unicode");var lang=acequire("../lib/lang");var TokenIterator=acequire("../token_iterator").TokenIterator;var Range=acequire("../range").Range;var Mode=function Mode(){this.HighlightRules=TextHighlightRules;};(function(){this.$defaultBehaviour=new CstyleBehaviour();this.tokenRe=new RegExp("^["+unicode.packages.L+unicode.packages.Mn+unicode.packages.Mc+unicode.packages.Nd+unicode.packages.Pc+"\\$_]+","g");this.nonTokenRe=new RegExp("^(?:[^"+unicode.packages.L+unicode.packages.Mn+unicode.packages.Mc+unicode.packages.Nd+unicode.packages.Pc+"\\$_]|\\s])+","g");this.getTokenizer=function(){if(!this.$tokenizer){this.$highlightRules=this.$highlightRules||new this.HighlightRules(this.$highlightRuleConfig);this.$tokenizer=new Tokenizer(this.$highlightRules.getRules());}return this.$tokenizer;};this.lineCommentStart="";this.blockComment="";this.toggleCommentLines=function(state,session,startRow,endRow){var doc=session.doc;var ignoreBlankLines=true;var shouldRemove=true;var minIndent=Infinity;var tabSize=session.getTabSize();var insertAtTabStop=false;if(!this.lineCommentStart){if(!this.blockComment)return false;var lineCommentStart=this.blockComment.start;var lineCommentEnd=this.blockComment.end;var regexpStart=new RegExp("^(\\s*)(?:"+lang.escapeRegExp(lineCommentStart)+")");var regexpEnd=new RegExp("(?:"+lang.escapeRegExp(lineCommentEnd)+")\\s*$");var comment=function comment(line,i){if(testRemove(line,i))return;if(!ignoreBlankLines||/\S/.test(line)){doc.insertInLine({row:i,column:line.length},lineCommentEnd);doc.insertInLine({row:i,column:minIndent},lineCommentStart);}};var uncomment=function uncomment(line,i){var m;if(m=line.match(regexpEnd))doc.removeInLine(i,line.length-m[0].length,line.length);if(m=line.match(regexpStart))doc.removeInLine(i,m[1].length,m[0].length);};var testRemove=function testRemove(line,row){if(regexpStart.test(line))return true;var tokens=session.getTokens(row);for(var i=0;i<tokens.length;i++){if(tokens[i].type==="comment")return true;}};}else{if(Array.isArray(this.lineCommentStart)){var regexpStart=this.lineCommentStart.map(lang.escapeRegExp).join("|");var lineCommentStart=this.lineCommentStart[0];}else{var regexpStart=lang.escapeRegExp(this.lineCommentStart);var lineCommentStart=this.lineCommentStart;}regexpStart=new RegExp("^(\\s*)(?:"+regexpStart+") ?");insertAtTabStop=session.getUseSoftTabs();var uncomment=function uncomment(line,i){var m=line.match(regexpStart);if(!m)return;var start=m[1].length,end=m[0].length;if(!shouldInsertSpace(line,start,end)&&m[0][end-1]==" ")end--;doc.removeInLine(i,start,end);};var commentWithSpace=lineCommentStart+" ";var comment=function comment(line,i){if(!ignoreBlankLines||/\S/.test(line)){if(shouldInsertSpace(line,minIndent,minIndent))doc.insertInLine({row:i,column:minIndent},commentWithSpace);else doc.insertInLine({row:i,column:minIndent},lineCommentStart);}};var testRemove=function testRemove(line,i){return regexpStart.test(line);};var shouldInsertSpace=function shouldInsertSpace(line,before,after){var spaces=0;while(before--&&line.charAt(before)==" "){spaces++;}if(spaces%tabSize!=0)return false;var spaces=0;while(line.charAt(after++)==" "){spaces++;}if(tabSize>2)return spaces%tabSize!=tabSize-1;else return spaces%tabSize==0;return true;};}function iter(fun){for(var i=startRow;i<=endRow;i++){fun(doc.getLine(i),i);}}var minEmptyLength=Infinity;iter(function(line,i){var indent=line.search(/\S/);if(indent!==-1){if(indent<minIndent)minIndent=indent;if(shouldRemove&&!testRemove(line,i))shouldRemove=false;}else if(minEmptyLength>line.length){minEmptyLength=line.length;}});if(minIndent==Infinity){minIndent=minEmptyLength;ignoreBlankLines=false;shouldRemove=false;}if(insertAtTabStop&&minIndent%tabSize!=0)minIndent=Math.floor(minIndent/tabSize)*tabSize;iter(shouldRemove?uncomment:comment);};this.toggleBlockComment=function(state,session,range,cursor){var comment=this.blockComment;if(!comment)return;if(!comment.start&&comment[0])comment=comment[0];var iterator=new TokenIterator(session,cursor.row,cursor.column);var token=iterator.getCurrentToken();var sel=session.selection;var initialRange=session.selection.toOrientedRange();var startRow,colDiff;if(token&&/comment/.test(token.type)){var startRange,endRange;while(token&&/comment/.test(token.type)){var i=token.value.indexOf(comment.start);if(i!=-1){var row=iterator.getCurrentTokenRow();var column=iterator.getCurrentTokenColumn()+i;startRange=new Range(row,column,row,column+comment.start.length);break;}token=iterator.stepBackward();}var iterator=new TokenIterator(session,cursor.row,cursor.column);var token=iterator.getCurrentToken();while(token&&/comment/.test(token.type)){var i=token.value.indexOf(comment.end);if(i!=-1){var row=iterator.getCurrentTokenRow();var column=iterator.getCurrentTokenColumn()+i;endRange=new Range(row,column,row,column+comment.end.length);break;}token=iterator.stepForward();}if(endRange)session.remove(endRange);if(startRange){session.remove(startRange);startRow=startRange.start.row;colDiff=-comment.start.length;}}else{colDiff=comment.start.length;startRow=range.start.row;session.insert(range.end,comment.end);session.insert(range.start,comment.start);}if(initialRange.start.row==startRow)initialRange.start.column+=colDiff;if(initialRange.end.row==startRow)initialRange.end.column+=colDiff;session.selection.fromOrientedRange(initialRange);};this.getNextLineIndent=function(state,line,tab){return this.$getIndent(line);};this.checkOutdent=function(state,line,input){return false;};this.autoOutdent=function(state,doc,row){};this.$getIndent=function(line){return line.match(/^\s*/)[0];};this.createWorker=function(session){return null;};this.createModeDelegates=function(mapping){this.$embeds=[];this.$modes={};for(var i in mapping){if(mapping[i]){this.$embeds.push(i);this.$modes[i]=new mapping[i]();}}var delegations=["toggleBlockComment","toggleCommentLines","getNextLineIndent","checkOutdent","autoOutdent","transformAction","getCompletions"];for(var i=0;i<delegations.length;i++){(function(scope){var functionName=delegations[i];var defaultHandler=scope[functionName];scope[delegations[i]]=function(){return this.$delegator(functionName,arguments,defaultHandler);};})(this);}};this.$delegator=function(method,args,defaultHandler){var state=args[0];if(typeof state!="string")state=state[0];for(var i=0;i<this.$embeds.length;i++){if(!this.$modes[this.$embeds[i]])continue;var split=state.split(this.$embeds[i]);if(!split[0]&&split[1]){args[0]=split[1];var mode=this.$modes[this.$embeds[i]];return mode[method].apply(mode,args);}}var ret=defaultHandler.apply(this,args);return defaultHandler?ret:undefined;};this.transformAction=function(state,action,editor,session,param){if(this.$behaviour){var behaviours=this.$behaviour.getBehaviours();for(var key in behaviours){if(behaviours[key][action]){var ret=behaviours[key][action].apply(this,arguments);if(ret){return ret;}}}}};this.getKeywords=function(append){if(!this.completionKeywords){var rules=this.$tokenizer.rules;var completionKeywords=[];for(var rule in rules){var ruleItr=rules[rule];for(var r=0,l=ruleItr.length;r<l;r++){if(typeof ruleItr[r].token==="string"){if(/keyword|support|storage/.test(ruleItr[r].token))completionKeywords.push(ruleItr[r].regex);}else if(_typeof(ruleItr[r].token)==="object"){for(var a=0,aLength=ruleItr[r].token.length;a<aLength;a++){if(/keyword|support|storage/.test(ruleItr[r].token[a])){var rule=ruleItr[r].regex.match(/\(.+?\)/g)[a];completionKeywords.push(rule.substr(1,rule.length-2));}}}}}this.completionKeywords=completionKeywords;}if(!append)return this.$keywordList;return completionKeywords.concat(this.$keywordList||[]);};this.$createKeywordList=function(){if(!this.$highlightRules)this.getTokenizer();return this.$keywordList=this.$highlightRules.$keywordList||[];};this.getCompletions=function(state,session,pos,prefix){var keywords=this.$keywordList||this.$createKeywordList();return keywords.map(function(word){return{name:word,value:word,score:0,meta:"keyword"};});};this.$id="ace/mode/text";}).call(Mode.prototype);exports.Mode=Mode;});ace.define("ace/apply_delta",["require","exports","module"],function(acequire,exports,module){"use strict";function throwDeltaError(delta,errorText){console.log("Invalid Delta:",delta);throw"Invalid Delta: "+errorText;}function positionInDocument(docLines,position){return position.row>=0&&position.row<docLines.length&&position.column>=0&&position.column<=docLines[position.row].length;}function validateDelta(docLines,delta){if(delta.action!="insert"&&delta.action!="remove")throwDeltaError(delta,"delta.action must be 'insert' or 'remove'");if(!(delta.lines instanceof Array))throwDeltaError(delta,"delta.lines must be an Array");if(!delta.start||!delta.end)throwDeltaError(delta,"delta.start/end must be an present");var start=delta.start;if(!positionInDocument(docLines,delta.start))throwDeltaError(delta,"delta.start must be contained in document");var end=delta.end;if(delta.action=="remove"&&!positionInDocument(docLines,end))throwDeltaError(delta,"delta.end must contained in document for 'remove' actions");var numRangeRows=end.row-start.row;var numRangeLastLineChars=end.column-(numRangeRows==0?start.column:0);if(numRangeRows!=delta.lines.length-1||delta.lines[numRangeRows].length!=numRangeLastLineChars)throwDeltaError(delta,"delta.range must match delta lines");}exports.applyDelta=function(docLines,delta,doNotValidate){var row=delta.start.row;var startColumn=delta.start.column;var line=docLines[row]||"";switch(delta.action){case"insert":var lines=delta.lines;if(lines.length===1){docLines[row]=line.substring(0,startColumn)+delta.lines[0]+line.substring(startColumn);}else{var args=[row,1].concat(delta.lines);docLines.splice.apply(docLines,args);docLines[row]=line.substring(0,startColumn)+docLines[row];docLines[row+delta.lines.length-1]+=line.substring(startColumn);}break;case"remove":var endColumn=delta.end.column;var endRow=delta.end.row;if(row===endRow){docLines[row]=line.substring(0,startColumn)+line.substring(endColumn);}else{docLines.splice(row,endRow-row+1,line.substring(0,startColumn)+docLines[endRow].substring(endColumn));}break;}};});ace.define("ace/anchor",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"],function(acequire,exports,module){"use strict";var oop=acequire("./lib/oop");var EventEmitter=acequire("./lib/event_emitter").EventEmitter;var Anchor=exports.Anchor=function(doc,row,column){this.$onChange=this.onChange.bind(this);this.attach(doc);if(typeof column=="undefined")this.setPosition(row.row,row.column);else this.setPosition(row,column);};(function(){oop.implement(this,EventEmitter);this.getPosition=function(){return this.$clipPositionToDocument(this.row,this.column);};this.getDocument=function(){return this.document;};this.$insertRight=false;this.onChange=function(delta){if(delta.start.row==delta.end.row&&delta.start.row!=this.row)return;if(delta.start.row>this.row)return;var point=$getTransformedPoint(delta,{row:this.row,column:this.column},this.$insertRight);this.setPosition(point.row,point.column,true);};function $pointsInOrder(point1,point2,equalPointsInOrder){var bColIsAfter=equalPointsInOrder?point1.column<=point2.column:point1.column<point2.column;return point1.row<point2.row||point1.row==point2.row&&bColIsAfter;}function $getTransformedPoint(delta,point,moveIfEqual){var deltaIsInsert=delta.action=="insert";var deltaRowShift=(deltaIsInsert?1:-1)*(delta.end.row-delta.start.row);var deltaColShift=(deltaIsInsert?1:-1)*(delta.end.column-delta.start.column);var deltaStart=delta.start;var deltaEnd=deltaIsInsert?deltaStart:delta.end;// Collapse insert range.
if($pointsInOrder(point,deltaStart,moveIfEqual)){return{row:point.row,column:point.column};}if($pointsInOrder(deltaEnd,point,!moveIfEqual)){return{row:point.row+deltaRowShift,column:point.column+(point.row==deltaEnd.row?deltaColShift:0)};}return{row:deltaStart.row,column:deltaStart.column};}this.setPosition=function(row,column,noClip){var pos;if(noClip){pos={row:row,column:column};}else{pos=this.$clipPositionToDocument(row,column);}if(this.row==pos.row&&this.column==pos.column)return;var old={row:this.row,column:this.column};this.row=pos.row;this.column=pos.column;this._signal("change",{old:old,value:pos});};this.detach=function(){this.document.removeEventListener("change",this.$onChange);};this.attach=function(doc){this.document=doc||this.document;this.document.on("change",this.$onChange);};this.$clipPositionToDocument=function(row,column){var pos={};if(row>=this.document.getLength()){pos.row=Math.max(0,this.document.getLength()-1);pos.column=this.document.getLine(pos.row).length;}else if(row<0){pos.row=0;pos.column=0;}else{pos.row=row;pos.column=Math.min(this.document.getLine(pos.row).length,Math.max(0,column));}if(column<0)pos.column=0;return pos;};}).call(Anchor.prototype);});ace.define("ace/document",["require","exports","module","ace/lib/oop","ace/apply_delta","ace/lib/event_emitter","ace/range","ace/anchor"],function(acequire,exports,module){"use strict";var oop=acequire("./lib/oop");var applyDelta=acequire("./apply_delta").applyDelta;var EventEmitter=acequire("./lib/event_emitter").EventEmitter;var Range=acequire("./range").Range;var Anchor=acequire("./anchor").Anchor;var Document=function Document(textOrLines){this.$lines=[""];if(textOrLines.length===0){this.$lines=[""];}else if(Array.isArray(textOrLines)){this.insertMergedLines({row:0,column:0},textOrLines);}else{this.insert({row:0,column:0},textOrLines);}};(function(){oop.implement(this,EventEmitter);this.setValue=function(text){var len=this.getLength()-1;this.remove(new Range(0,0,len,this.getLine(len).length));this.insert({row:0,column:0},text);};this.getValue=function(){return this.getAllLines().join(this.getNewLineCharacter());};this.createAnchor=function(row,column){return new Anchor(this,row,column);};if("aaa".split(/a/).length===0){this.$split=function(text){return text.replace(/\r\n|\r/g,"\n").split("\n");};}else{this.$split=function(text){return text.split(/\r\n|\r|\n/);};}this.$detectNewLine=function(text){var match=text.match(/^.*?(\r\n|\r|\n)/m);this.$autoNewLine=match?match[1]:"\n";this._signal("changeNewLineMode");};this.getNewLineCharacter=function(){switch(this.$newLineMode){case"windows":return"\r\n";case"unix":return"\n";default:return this.$autoNewLine||"\n";}};this.$autoNewLine="";this.$newLineMode="auto";this.setNewLineMode=function(newLineMode){if(this.$newLineMode===newLineMode)return;this.$newLineMode=newLineMode;this._signal("changeNewLineMode");};this.getNewLineMode=function(){return this.$newLineMode;};this.isNewLine=function(text){return text=="\r\n"||text=="\r"||text=="\n";};this.getLine=function(row){return this.$lines[row]||"";};this.getLines=function(firstRow,lastRow){return this.$lines.slice(firstRow,lastRow+1);};this.getAllLines=function(){return this.getLines(0,this.getLength());};this.getLength=function(){return this.$lines.length;};this.getTextRange=function(range){return this.getLinesForRange(range).join(this.getNewLineCharacter());};this.getLinesForRange=function(range){var lines;if(range.start.row===range.end.row){lines=[this.getLine(range.start.row).substring(range.start.column,range.end.column)];}else{lines=this.getLines(range.start.row,range.end.row);lines[0]=(lines[0]||"").substring(range.start.column);var l=lines.length-1;if(range.end.row-range.start.row==l)lines[l]=lines[l].substring(0,range.end.column);}return lines;};this.insertLines=function(row,lines){console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead.");return this.insertFullLines(row,lines);};this.removeLines=function(firstRow,lastRow){console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead.");return this.removeFullLines(firstRow,lastRow);};this.insertNewLine=function(position){console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead.");return this.insertMergedLines(position,["",""]);};this.insert=function(position,text){if(this.getLength()<=1)this.$detectNewLine(text);return this.insertMergedLines(position,this.$split(text));};this.insertInLine=function(position,text){var start=this.clippedPos(position.row,position.column);var end=this.pos(position.row,position.column+text.length);this.applyDelta({start:start,end:end,action:"insert",lines:[text]},true);return this.clonePos(end);};this.clippedPos=function(row,column){var length=this.getLength();if(row===undefined){row=length;}else if(row<0){row=0;}else if(row>=length){row=length-1;column=undefined;}var line=this.getLine(row);if(column==undefined)column=line.length;column=Math.min(Math.max(column,0),line.length);return{row:row,column:column};};this.clonePos=function(pos){return{row:pos.row,column:pos.column};};this.pos=function(row,column){return{row:row,column:column};};this.$clipPosition=function(position){var length=this.getLength();if(position.row>=length){position.row=Math.max(0,length-1);position.column=this.getLine(length-1).length;}else{position.row=Math.max(0,position.row);position.column=Math.min(Math.max(position.column,0),this.getLine(position.row).length);}return position;};this.insertFullLines=function(row,lines){row=Math.min(Math.max(row,0),this.getLength());var column=0;if(row<this.getLength()){lines=lines.concat([""]);column=0;}else{lines=[""].concat(lines);row--;column=this.$lines[row].length;}this.insertMergedLines({row:row,column:column},lines);};this.insertMergedLines=function(position,lines){var start=this.clippedPos(position.row,position.column);var end={row:start.row+lines.length-1,column:(lines.length==1?start.column:0)+lines[lines.length-1].length};this.applyDelta({start:start,end:end,action:"insert",lines:lines});return this.clonePos(end);};this.remove=function(range){var start=this.clippedPos(range.start.row,range.start.column);var end=this.clippedPos(range.end.row,range.end.column);this.applyDelta({start:start,end:end,action:"remove",lines:this.getLinesForRange({start:start,end:end})});return this.clonePos(start);};this.removeInLine=function(row,startColumn,endColumn){var start=this.clippedPos(row,startColumn);var end=this.clippedPos(row,endColumn);this.applyDelta({start:start,end:end,action:"remove",lines:this.getLinesForRange({start:start,end:end})},true);return this.clonePos(start);};this.removeFullLines=function(firstRow,lastRow){firstRow=Math.min(Math.max(0,firstRow),this.getLength()-1);lastRow=Math.min(Math.max(0,lastRow),this.getLength()-1);var deleteFirstNewLine=lastRow==this.getLength()-1&&firstRow>0;var deleteLastNewLine=lastRow<this.getLength()-1;var startRow=deleteFirstNewLine?firstRow-1:firstRow;var startCol=deleteFirstNewLine?this.getLine(startRow).length:0;var endRow=deleteLastNewLine?lastRow+1:lastRow;var endCol=deleteLastNewLine?0:this.getLine(endRow).length;var range=new Range(startRow,startCol,endRow,endCol);var deletedLines=this.$lines.slice(firstRow,lastRow+1);this.applyDelta({start:range.start,end:range.end,action:"remove",lines:this.getLinesForRange(range)});return deletedLines;};this.removeNewLine=function(row){if(row<this.getLength()-1&&row>=0){this.applyDelta({start:this.pos(row,this.getLine(row).length),end:this.pos(row+1,0),action:"remove",lines:["",""]});}};this.replace=function(range,text){if(!(range instanceof Range))range=Range.fromPoints(range.start,range.end);if(text.length===0&&range.isEmpty())return range.start;if(text==this.getTextRange(range))return range.end;this.remove(range);var end;if(text){end=this.insert(range.start,text);}else{end=range.start;}return end;};this.applyDeltas=function(deltas){for(var i=0;i<deltas.length;i++){this.applyDelta(deltas[i]);}};this.revertDeltas=function(deltas){for(var i=deltas.length-1;i>=0;i--){this.revertDelta(deltas[i]);}};this.applyDelta=function(delta,doNotValidate){var isInsert=delta.action=="insert";if(isInsert?delta.lines.length<=1&&!delta.lines[0]:!Range.comparePoints(delta.start,delta.end)){return;}if(isInsert&&delta.lines.length>20000)this.$splitAndapplyLargeDelta(delta,20000);applyDelta(this.$lines,delta,doNotValidate);this._signal("change",delta);};this.$splitAndapplyLargeDelta=function(delta,MAX){var lines=delta.lines;var l=lines.length;var row=delta.start.row;var column=delta.start.column;var from=0,to=0;do{from=to;to+=MAX-1;var chunk=lines.slice(from,to);if(to>l){delta.lines=chunk;delta.start.row=row+from;delta.start.column=column;break;}chunk.push("");this.applyDelta({start:this.pos(row+from,column),end:this.pos(row+to,column=0),action:delta.action,lines:chunk},true);}while(true);};this.revertDelta=function(delta){this.applyDelta({start:this.clonePos(delta.start),end:this.clonePos(delta.end),action:delta.action=="insert"?"remove":"insert",lines:delta.lines.slice()});};this.indexToPosition=function(index,startRow){var lines=this.$lines||this.getAllLines();var newlineLength=this.getNewLineCharacter().length;for(var i=startRow||0,l=lines.length;i<l;i++){index-=lines[i].length+newlineLength;if(index<0)return{row:i,column:index+lines[i].length+newlineLength};}return{row:l-1,column:lines[l-1].length};};this.positionToIndex=function(pos,startRow){var lines=this.$lines||this.getAllLines();var newlineLength=this.getNewLineCharacter().length;var index=0;var row=Math.min(pos.row,lines.length);for(var i=startRow||0;i<row;++i){index+=lines[i].length+newlineLength;}return index+pos.column;};}).call(Document.prototype);exports.Document=Document;});ace.define("ace/background_tokenizer",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"],function(acequire,exports,module){"use strict";var oop=acequire("./lib/oop");var EventEmitter=acequire("./lib/event_emitter").EventEmitter;var BackgroundTokenizer=function BackgroundTokenizer(tokenizer,editor){this.running=false;this.lines=[];this.states=[];this.currentLine=0;this.tokenizer=tokenizer;var self=this;this.$worker=function(){if(!self.running){return;}var workerStart=new Date();var currentLine=self.currentLine;var endLine=-1;var doc=self.doc;var startLine=currentLine;while(self.lines[currentLine]){currentLine++;}var len=doc.getLength();var processedLines=0;self.running=false;while(currentLine<len){self.$tokenizeRow(currentLine);endLine=currentLine;do{currentLine++;}while(self.lines[currentLine]);processedLines++;if(processedLines%5===0&&new Date()-workerStart>20){self.running=setTimeout(self.$worker,20);break;}}self.currentLine=currentLine;if(startLine<=endLine)self.fireUpdateEvent(startLine,endLine);};};(function(){oop.implement(this,EventEmitter);this.setTokenizer=function(tokenizer){this.tokenizer=tokenizer;this.lines=[];this.states=[];this.start(0);};this.setDocument=function(doc){this.doc=doc;this.lines=[];this.states=[];this.stop();};this.fireUpdateEvent=function(firstRow,lastRow){var data={first:firstRow,last:lastRow};this._signal("update",{data:data});};this.start=function(startRow){this.currentLine=Math.min(startRow||0,this.currentLine,this.doc.getLength());this.lines.splice(this.currentLine,this.lines.length);this.states.splice(this.currentLine,this.states.length);this.stop();this.running=setTimeout(this.$worker,700);};this.scheduleStart=function(){if(!this.running)this.running=setTimeout(this.$worker,700);};this.$updateOnChange=function(delta){var startRow=delta.start.row;var len=delta.end.row-startRow;if(len===0){this.lines[startRow]=null;}else if(delta.action=="remove"){this.lines.splice(startRow,len+1,null);this.states.splice(startRow,len+1,null);}else{var args=Array(len+1);args.unshift(startRow,1);this.lines.splice.apply(this.lines,args);this.states.splice.apply(this.states,args);}this.currentLine=Math.min(startRow,this.currentLine,this.doc.getLength());this.stop();};this.stop=function(){if(this.running)clearTimeout(this.running);this.running=false;};this.getTokens=function(row){return this.lines[row]||this.$tokenizeRow(row);};this.getState=function(row){if(this.currentLine==row)this.$tokenizeRow(row);return this.states[row]||"start";};this.$tokenizeRow=function(row){var line=this.doc.getLine(row);var state=this.states[row-1];var data=this.tokenizer.getLineTokens(line,state,row);if(this.states[row]+""!==data.state+""){this.states[row]=data.state;this.lines[row+1]=null;if(this.currentLine>row+1)this.currentLine=row+1;}else if(this.currentLine==row){this.currentLine=row+1;}return this.lines[row]=data.tokens;};}).call(BackgroundTokenizer.prototype);exports.BackgroundTokenizer=BackgroundTokenizer;});ace.define("ace/search_highlight",["require","exports","module","ace/lib/lang","ace/lib/oop","ace/range"],function(acequire,exports,module){"use strict";var lang=acequire("./lib/lang");var oop=acequire("./lib/oop");var Range=acequire("./range").Range;var SearchHighlight=function SearchHighlight(regExp,clazz,type){this.setRegexp(regExp);this.clazz=clazz;this.type=type||"text";};(function(){this.MAX_RANGES=500;this.setRegexp=function(regExp){if(this.regExp+""==regExp+"")return;this.regExp=regExp;this.cache=[];};this.update=function(html,markerLayer,session,config){if(!this.regExp)return;var start=config.firstRow,end=config.lastRow;for(var i=start;i<=end;i++){var ranges=this.cache[i];if(ranges==null){ranges=lang.getMatchOffsets(session.getLine(i),this.regExp);if(ranges.length>this.MAX_RANGES)ranges=ranges.slice(0,this.MAX_RANGES);ranges=ranges.map(function(match){return new Range(i,match.offset,i,match.offset+match.length);});this.cache[i]=ranges.length?ranges:"";}for(var j=ranges.length;j--;){markerLayer.drawSingleLineMarker(html,ranges[j].toScreenRange(session),this.clazz,config);}}};}).call(SearchHighlight.prototype);exports.SearchHighlight=SearchHighlight;});ace.define("ace/edit_session/fold_line",["require","exports","module","ace/range"],function(acequire,exports,module){"use strict";var Range=acequire("../range").Range;function FoldLine(foldData,folds){this.foldData=foldData;if(Array.isArray(folds)){this.folds=folds;}else{folds=this.folds=[folds];}var last=folds[folds.length-1];this.range=new Range(folds[0].start.row,folds[0].start.column,last.end.row,last.end.column);this.start=this.range.start;this.end=this.range.end;this.folds.forEach(function(fold){fold.setFoldLine(this);},this);}(function(){this.shiftRow=function(shift){this.start.row+=shift;this.end.row+=shift;this.folds.forEach(function(fold){fold.start.row+=shift;fold.end.row+=shift;});};this.addFold=function(fold){if(fold.sameRow){if(fold.start.row<this.startRow||fold.endRow>this.endRow){throw new Error("Can't add a fold to this FoldLine as it has no connection");}this.folds.push(fold);this.folds.sort(function(a,b){return-a.range.compareEnd(b.start.row,b.start.column);});if(this.range.compareEnd(fold.start.row,fold.start.column)>0){this.end.row=fold.end.row;this.end.column=fold.end.column;}else if(this.range.compareStart(fold.end.row,fold.end.column)<0){this.start.row=fold.start.row;this.start.column=fold.start.column;}}else if(fold.start.row==this.end.row){this.folds.push(fold);this.end.row=fold.end.row;this.end.column=fold.end.column;}else if(fold.end.row==this.start.row){this.folds.unshift(fold);this.start.row=fold.start.row;this.start.column=fold.start.column;}else{throw new Error("Trying to add fold to FoldRow that doesn't have a matching row");}fold.foldLine=this;};this.containsRow=function(row){return row>=this.start.row&&row<=this.end.row;};this.walk=function(callback,endRow,endColumn){var lastEnd=0,folds=this.folds,fold,cmp,stop,isNewRow=true;if(endRow==null){endRow=this.end.row;endColumn=this.end.column;}for(var i=0;i<folds.length;i++){fold=folds[i];cmp=fold.range.compareStart(endRow,endColumn);if(cmp==-1){callback(null,endRow,endColumn,lastEnd,isNewRow);return;}stop=callback(null,fold.start.row,fold.start.column,lastEnd,isNewRow);stop=!stop&&callback(fold.placeholder,fold.start.row,fold.start.column,lastEnd);if(stop||cmp===0){return;}isNewRow=!fold.sameRow;lastEnd=fold.end.column;}callback(null,endRow,endColumn,lastEnd,isNewRow);};this.getNextFoldTo=function(row,column){var fold,cmp;for(var i=0;i<this.folds.length;i++){fold=this.folds[i];cmp=fold.range.compareEnd(row,column);if(cmp==-1){return{fold:fold,kind:"after"};}else if(cmp===0){return{fold:fold,kind:"inside"};}}return null;};this.addRemoveChars=function(row,column,len){var ret=this.getNextFoldTo(row,column),fold,folds;if(ret){fold=ret.fold;if(ret.kind=="inside"&&fold.start.column!=column&&fold.start.row!=row){window.console&&window.console.log(row,column,fold);}else if(fold.start.row==row){folds=this.folds;var i=folds.indexOf(fold);if(i===0){this.start.column+=len;}for(i;i<folds.length;i++){fold=folds[i];fold.start.column+=len;if(!fold.sameRow){return;}fold.end.column+=len;}this.end.column+=len;}}};this.split=function(row,column){var pos=this.getNextFoldTo(row,column);if(!pos||pos.kind=="inside")return null;var fold=pos.fold;var folds=this.folds;var foldData=this.foldData;var i=folds.indexOf(fold);var foldBefore=folds[i-1];this.end.row=foldBefore.end.row;this.end.column=foldBefore.end.column;folds=folds.splice(i,folds.length-i);var newFoldLine=new FoldLine(foldData,folds);foldData.splice(foldData.indexOf(this)+1,0,newFoldLine);return newFoldLine;};this.merge=function(foldLineNext){var folds=foldLineNext.folds;for(var i=0;i<folds.length;i++){this.addFold(folds[i]);}var foldData=this.foldData;foldData.splice(foldData.indexOf(foldLineNext),1);};this.toString=function(){var ret=[this.range.toString()+": ["];this.folds.forEach(function(fold){ret.push("  "+fold.toString());});ret.push("]");return ret.join("\n");};this.idxToPosition=function(idx){var lastFoldEndColumn=0;for(var i=0;i<this.folds.length;i++){var fold=this.folds[i];idx-=fold.start.column-lastFoldEndColumn;if(idx<0){return{row:fold.start.row,column:fold.start.column+idx};}idx-=fold.placeholder.length;if(idx<0){return fold.start;}lastFoldEndColumn=fold.end.column;}return{row:this.end.row,column:this.end.column+idx};};}).call(FoldLine.prototype);exports.FoldLine=FoldLine;});ace.define("ace/range_list",["require","exports","module","ace/range"],function(acequire,exports,module){"use strict";var Range=acequire("./range").Range;var comparePoints=Range.comparePoints;var RangeList=function RangeList(){this.ranges=[];};(function(){this.comparePoints=comparePoints;this.pointIndex=function(pos,excludeEdges,startIndex){var list=this.ranges;for(var i=startIndex||0;i<list.length;i++){var range=list[i];var cmpEnd=comparePoints(pos,range.end);if(cmpEnd>0)continue;var cmpStart=comparePoints(pos,range.start);if(cmpEnd===0)return excludeEdges&&cmpStart!==0?-i-2:i;if(cmpStart>0||cmpStart===0&&!excludeEdges)return i;return-i-1;}return-i-1;};this.add=function(range){var excludeEdges=!range.isEmpty();var startIndex=this.pointIndex(range.start,excludeEdges);if(startIndex<0)startIndex=-startIndex-1;var endIndex=this.pointIndex(range.end,excludeEdges,startIndex);if(endIndex<0)endIndex=-endIndex-1;else endIndex++;return this.ranges.splice(startIndex,endIndex-startIndex,range);};this.addList=function(list){var removed=[];for(var i=list.length;i--;){removed.push.apply(removed,this.add(list[i]));}return removed;};this.substractPoint=function(pos){var i=this.pointIndex(pos);if(i>=0)return this.ranges.splice(i,1);};this.merge=function(){var removed=[];var list=this.ranges;list=list.sort(function(a,b){return comparePoints(a.start,b.start);});var next=list[0],range;for(var i=1;i<list.length;i++){range=next;next=list[i];var cmp=comparePoints(range.end,next.start);if(cmp<0)continue;if(cmp==0&&!range.isEmpty()&&!next.isEmpty())continue;if(comparePoints(range.end,next.end)<0){range.end.row=next.end.row;range.end.column=next.end.column;}list.splice(i,1);removed.push(next);next=range;i--;}this.ranges=list;return removed;};this.contains=function(row,column){return this.pointIndex({row:row,column:column})>=0;};this.containsPoint=function(pos){return this.pointIndex(pos)>=0;};this.rangeAtPoint=function(pos){var i=this.pointIndex(pos);if(i>=0)return this.ranges[i];};this.clipRows=function(startRow,endRow){var list=this.ranges;if(list[0].start.row>endRow||list[list.length-1].start.row<startRow)return[];var startIndex=this.pointIndex({row:startRow,column:0});if(startIndex<0)startIndex=-startIndex-1;var endIndex=this.pointIndex({row:endRow,column:0},startIndex);if(endIndex<0)endIndex=-endIndex-1;var clipped=[];for(var i=startIndex;i<endIndex;i++){clipped.push(list[i]);}return clipped;};this.removeAll=function(){return this.ranges.splice(0,this.ranges.length);};this.attach=function(session){if(this.session)this.detach();this.session=session;this.onChange=this.$onChange.bind(this);this.session.on('change',this.onChange);};this.detach=function(){if(!this.session)return;this.session.removeListener('change',this.onChange);this.session=null;};this.$onChange=function(delta){if(delta.action=="insert"){var start=delta.start;var end=delta.end;}else{var end=delta.start;var start=delta.end;}var startRow=start.row;var endRow=end.row;var lineDif=endRow-startRow;var colDiff=-start.column+end.column;var ranges=this.ranges;for(var i=0,n=ranges.length;i<n;i++){var r=ranges[i];if(r.end.row<startRow)continue;if(r.start.row>startRow)break;if(r.start.row==startRow&&r.start.column>=start.column){if(r.start.column==start.column&&this.$insertRight){}else{r.start.column+=colDiff;r.start.row+=lineDif;}}if(r.end.row==startRow&&r.end.column>=start.column){if(r.end.column==start.column&&this.$insertRight){continue;}if(r.end.column==start.column&&colDiff>0&&i<n-1){if(r.end.column>r.start.column&&r.end.column==ranges[i+1].start.column)r.end.column-=colDiff;}r.end.column+=colDiff;r.end.row+=lineDif;}}if(lineDif!=0&&i<n){for(;i<n;i++){var r=ranges[i];r.start.row+=lineDif;r.end.row+=lineDif;}}};}).call(RangeList.prototype);exports.RangeList=RangeList;});ace.define("ace/edit_session/fold",["require","exports","module","ace/range","ace/range_list","ace/lib/oop"],function(acequire,exports,module){"use strict";var Range=acequire("../range").Range;var RangeList=acequire("../range_list").RangeList;var oop=acequire("../lib/oop");var Fold=exports.Fold=function(range,placeholder){this.foldLine=null;this.placeholder=placeholder;this.range=range;this.start=range.start;this.end=range.end;this.sameRow=range.start.row==range.end.row;this.subFolds=this.ranges=[];};oop.inherits(Fold,RangeList);(function(){this.toString=function(){return'"'+this.placeholder+'" '+this.range.toString();};this.setFoldLine=function(foldLine){this.foldLine=foldLine;this.subFolds.forEach(function(fold){fold.setFoldLine(foldLine);});};this.clone=function(){var range=this.range.clone();var fold=new Fold(range,this.placeholder);this.subFolds.forEach(function(subFold){fold.subFolds.push(subFold.clone());});fold.collapseChildren=this.collapseChildren;return fold;};this.addSubFold=function(fold){if(this.range.isEqual(fold))return;if(!this.range.containsRange(fold))throw new Error("A fold can't intersect already existing fold"+fold.range+this.range);consumeRange(fold,this.start);var row=fold.start.row,column=fold.start.column;for(var i=0,cmp=-1;i<this.subFolds.length;i++){cmp=this.subFolds[i].range.compare(row,column);if(cmp!=1)break;}var afterStart=this.subFolds[i];if(cmp==0)return afterStart.addSubFold(fold);var row=fold.range.end.row,column=fold.range.end.column;for(var j=i,cmp=-1;j<this.subFolds.length;j++){cmp=this.subFolds[j].range.compare(row,column);if(cmp!=1)break;}var afterEnd=this.subFolds[j];if(cmp==0)throw new Error("A fold can't intersect already existing fold"+fold.range+this.range);var consumedFolds=this.subFolds.splice(i,j-i,fold);fold.setFoldLine(this.foldLine);return fold;};this.restoreRange=function(range){return restoreRange(range,this.start);};}).call(Fold.prototype);function consumePoint(point,anchor){point.row-=anchor.row;if(point.row==0)point.column-=anchor.column;}function consumeRange(range,anchor){consumePoint(range.start,anchor);consumePoint(range.end,anchor);}function restorePoint(point,anchor){if(point.row==0)point.column+=anchor.column;point.row+=anchor.row;}function restoreRange(range,anchor){restorePoint(range.start,anchor);restorePoint(range.end,anchor);}});ace.define("ace/edit_session/folding",["require","exports","module","ace/range","ace/edit_session/fold_line","ace/edit_session/fold","ace/token_iterator"],function(acequire,exports,module){"use strict";var Range=acequire("../range").Range;var FoldLine=acequire("./fold_line").FoldLine;var Fold=acequire("./fold").Fold;var TokenIterator=acequire("../token_iterator").TokenIterator;function Folding(){this.getFoldAt=function(row,column,side){var foldLine=this.getFoldLine(row);if(!foldLine)return null;var folds=foldLine.folds;for(var i=0;i<folds.length;i++){var fold=folds[i];if(fold.range.contains(row,column)){if(side==1&&fold.range.isEnd(row,column)){continue;}else if(side==-1&&fold.range.isStart(row,column)){continue;}return fold;}}};this.getFoldsInRange=function(range){var start=range.start;var end=range.end;var foldLines=this.$foldData;var foundFolds=[];start.column+=1;end.column-=1;for(var i=0;i<foldLines.length;i++){var cmp=foldLines[i].range.compareRange(range);if(cmp==2){continue;}else if(cmp==-2){break;}var folds=foldLines[i].folds;for(var j=0;j<folds.length;j++){var fold=folds[j];cmp=fold.range.compareRange(range);if(cmp==-2){break;}else if(cmp==2){continue;}else if(cmp==42){break;}foundFolds.push(fold);}}start.column-=1;end.column+=1;return foundFolds;};this.getFoldsInRangeList=function(ranges){if(Array.isArray(ranges)){var folds=[];ranges.forEach(function(range){folds=folds.concat(this.getFoldsInRange(range));},this);}else{var folds=this.getFoldsInRange(ranges);}return folds;};this.getAllFolds=function(){var folds=[];var foldLines=this.$foldData;for(var i=0;i<foldLines.length;i++){for(var j=0;j<foldLines[i].folds.length;j++){folds.push(foldLines[i].folds[j]);}}return folds;};this.getFoldStringAt=function(row,column,trim,foldLine){foldLine=foldLine||this.getFoldLine(row);if(!foldLine)return null;var lastFold={end:{column:0}};var str,fold;for(var i=0;i<foldLine.folds.length;i++){fold=foldLine.folds[i];var cmp=fold.range.compareEnd(row,column);if(cmp==-1){str=this.getLine(fold.start.row).substring(lastFold.end.column,fold.start.column);break;}else if(cmp===0){return null;}lastFold=fold;}if(!str)str=this.getLine(fold.start.row).substring(lastFold.end.column);if(trim==-1)return str.substring(0,column-lastFold.end.column);else if(trim==1)return str.substring(column-lastFold.end.column);else return str;};this.getFoldLine=function(docRow,startFoldLine){var foldData=this.$foldData;var i=0;if(startFoldLine)i=foldData.indexOf(startFoldLine);if(i==-1)i=0;for(i;i<foldData.length;i++){var foldLine=foldData[i];if(foldLine.start.row<=docRow&&foldLine.end.row>=docRow){return foldLine;}else if(foldLine.end.row>docRow){return null;}}return null;};this.getNextFoldLine=function(docRow,startFoldLine){var foldData=this.$foldData;var i=0;if(startFoldLine)i=foldData.indexOf(startFoldLine);if(i==-1)i=0;for(i;i<foldData.length;i++){var foldLine=foldData[i];if(foldLine.end.row>=docRow){return foldLine;}}return null;};this.getFoldedRowCount=function(first,last){var foldData=this.$foldData,rowCount=last-first+1;for(var i=0;i<foldData.length;i++){var foldLine=foldData[i],end=foldLine.end.row,start=foldLine.start.row;if(end>=last){if(start<last){if(start>=first)rowCount-=last-start;else rowCount=0;// in one fold
}break;}else if(end>=first){if(start>=first)// fold inside range
rowCount-=end-start;else rowCount-=end-first+1;}}return rowCount;};this.$addFoldLine=function(foldLine){this.$foldData.push(foldLine);this.$foldData.sort(function(a,b){return a.start.row-b.start.row;});return foldLine;};this.addFold=function(placeholder,range){var foldData=this.$foldData;var added=false;var fold;if(placeholder instanceof Fold)fold=placeholder;else{fold=new Fold(range,placeholder);fold.collapseChildren=range.collapseChildren;}this.$clipRangeToDocument(fold.range);var startRow=fold.start.row;var startColumn=fold.start.column;var endRow=fold.end.row;var endColumn=fold.end.column;if(!(startRow<endRow||startRow==endRow&&startColumn<=endColumn-2))throw new Error("The range has to be at least 2 characters width");var startFold=this.getFoldAt(startRow,startColumn,1);var endFold=this.getFoldAt(endRow,endColumn,-1);if(startFold&&endFold==startFold)return startFold.addSubFold(fold);if(startFold&&!startFold.range.isStart(startRow,startColumn))this.removeFold(startFold);if(endFold&&!endFold.range.isEnd(endRow,endColumn))this.removeFold(endFold);var folds=this.getFoldsInRange(fold.range);if(folds.length>0){this.removeFolds(folds);folds.forEach(function(subFold){fold.addSubFold(subFold);});}for(var i=0;i<foldData.length;i++){var foldLine=foldData[i];if(endRow==foldLine.start.row){foldLine.addFold(fold);added=true;break;}else if(startRow==foldLine.end.row){foldLine.addFold(fold);added=true;if(!fold.sameRow){var foldLineNext=foldData[i+1];if(foldLineNext&&foldLineNext.start.row==endRow){foldLine.merge(foldLineNext);break;}}break;}else if(endRow<=foldLine.start.row){break;}}if(!added)foldLine=this.$addFoldLine(new FoldLine(this.$foldData,fold));if(this.$useWrapMode)this.$updateWrapData(foldLine.start.row,foldLine.start.row);else this.$updateRowLengthCache(foldLine.start.row,foldLine.start.row);this.$modified=true;this._signal("changeFold",{data:fold,action:"add"});return fold;};this.addFolds=function(folds){folds.forEach(function(fold){this.addFold(fold);},this);};this.removeFold=function(fold){var foldLine=fold.foldLine;var startRow=foldLine.start.row;var endRow=foldLine.end.row;var foldLines=this.$foldData;var folds=foldLine.folds;if(folds.length==1){foldLines.splice(foldLines.indexOf(foldLine),1);}else if(foldLine.range.isEnd(fold.end.row,fold.end.column)){folds.pop();foldLine.end.row=folds[folds.length-1].end.row;foldLine.end.column=folds[folds.length-1].end.column;}else if(foldLine.range.isStart(fold.start.row,fold.start.column)){folds.shift();foldLine.start.row=folds[0].start.row;foldLine.start.column=folds[0].start.column;}else if(fold.sameRow){folds.splice(folds.indexOf(fold),1);}else{var newFoldLine=foldLine.split(fold.start.row,fold.start.column);folds=newFoldLine.folds;folds.shift();newFoldLine.start.row=folds[0].start.row;newFoldLine.start.column=folds[0].start.column;}if(!this.$updating){if(this.$useWrapMode)this.$updateWrapData(startRow,endRow);else this.$updateRowLengthCache(startRow,endRow);}this.$modified=true;this._signal("changeFold",{data:fold,action:"remove"});};this.removeFolds=function(folds){var cloneFolds=[];for(var i=0;i<folds.length;i++){cloneFolds.push(folds[i]);}cloneFolds.forEach(function(fold){this.removeFold(fold);},this);this.$modified=true;};this.expandFold=function(fold){this.removeFold(fold);fold.subFolds.forEach(function(subFold){fold.restoreRange(subFold);this.addFold(subFold);},this);if(fold.collapseChildren>0){this.foldAll(fold.start.row+1,fold.end.row,fold.collapseChildren-1);}fold.subFolds=[];};this.expandFolds=function(folds){folds.forEach(function(fold){this.expandFold(fold);},this);};this.unfold=function(location,expandInner){var range,folds;if(location==null){range=new Range(0,0,this.getLength(),0);expandInner=true;}else if(typeof location=="number")range=new Range(location,0,location,this.getLine(location).length);else if("row"in location)range=Range.fromPoints(location,location);else range=location;folds=this.getFoldsInRangeList(range);if(expandInner){this.removeFolds(folds);}else{var subFolds=folds;while(subFolds.length){this.expandFolds(subFolds);subFolds=this.getFoldsInRangeList(range);}}if(folds.length)return folds;};this.isRowFolded=function(docRow,startFoldRow){return!!this.getFoldLine(docRow,startFoldRow);};this.getRowFoldEnd=function(docRow,startFoldRow){var foldLine=this.getFoldLine(docRow,startFoldRow);return foldLine?foldLine.end.row:docRow;};this.getRowFoldStart=function(docRow,startFoldRow){var foldLine=this.getFoldLine(docRow,startFoldRow);return foldLine?foldLine.start.row:docRow;};this.getFoldDisplayLine=function(foldLine,endRow,endColumn,startRow,startColumn){if(startRow==null)startRow=foldLine.start.row;if(startColumn==null)startColumn=0;if(endRow==null)endRow=foldLine.end.row;if(endColumn==null)endColumn=this.getLine(endRow).length;var doc=this.doc;var textLine="";foldLine.walk(function(placeholder,row,column,lastColumn){if(row<startRow)return;if(row==startRow){if(column<startColumn)return;lastColumn=Math.max(startColumn,lastColumn);}if(placeholder!=null){textLine+=placeholder;}else{textLine+=doc.getLine(row).substring(lastColumn,column);}},endRow,endColumn);return textLine;};this.getDisplayLine=function(row,endColumn,startRow,startColumn){var foldLine=this.getFoldLine(row);if(!foldLine){var line;line=this.doc.getLine(row);return line.substring(startColumn||0,endColumn||line.length);}else{return this.getFoldDisplayLine(foldLine,row,endColumn,startRow,startColumn);}};this.$cloneFoldData=function(){var fd=[];fd=this.$foldData.map(function(foldLine){var folds=foldLine.folds.map(function(fold){return fold.clone();});return new FoldLine(fd,folds);});return fd;};this.toggleFold=function(tryToUnfold){var selection=this.selection;var range=selection.getRange();var fold;var bracketPos;if(range.isEmpty()){var cursor=range.start;fold=this.getFoldAt(cursor.row,cursor.column);if(fold){this.expandFold(fold);return;}else if(bracketPos=this.findMatchingBracket(cursor)){if(range.comparePoint(bracketPos)==1){range.end=bracketPos;}else{range.start=bracketPos;range.start.column++;range.end.column--;}}else if(bracketPos=this.findMatchingBracket({row:cursor.row,column:cursor.column+1})){if(range.comparePoint(bracketPos)==1)range.end=bracketPos;else range.start=bracketPos;range.start.column++;}else{range=this.getCommentFoldRange(cursor.row,cursor.column)||range;}}else{var folds=this.getFoldsInRange(range);if(tryToUnfold&&folds.length){this.expandFolds(folds);return;}else if(folds.length==1){fold=folds[0];}}if(!fold)fold=this.getFoldAt(range.start.row,range.start.column);if(fold&&fold.range.toString()==range.toString()){this.expandFold(fold);return;}var placeholder="...";if(!range.isMultiLine()){placeholder=this.getTextRange(range);if(placeholder.length<4)return;placeholder=placeholder.trim().substring(0,2)+"..";}this.addFold(placeholder,range);};this.getCommentFoldRange=function(row,column,dir){var iterator=new TokenIterator(this,row,column);var token=iterator.getCurrentToken();if(token&&/^comment|string/.test(token.type)){var range=new Range();var re=new RegExp(token.type.replace(/\..*/,"\\."));if(dir!=1){do{token=iterator.stepBackward();}while(token&&re.test(token.type));iterator.stepForward();}range.start.row=iterator.getCurrentTokenRow();range.start.column=iterator.getCurrentTokenColumn()+2;iterator=new TokenIterator(this,row,column);if(dir!=-1){do{token=iterator.stepForward();}while(token&&re.test(token.type));token=iterator.stepBackward();}else token=iterator.getCurrentToken();range.end.row=iterator.getCurrentTokenRow();range.end.column=iterator.getCurrentTokenColumn()+token.value.length-2;return range;}};this.foldAll=function(startRow,endRow,depth){if(depth==undefined)depth=100000;// JSON.stringify doesn't hanle Infinity
var foldWidgets=this.foldWidgets;if(!foldWidgets)return;// mode doesn't support folding
endRow=endRow||this.getLength();startRow=startRow||0;for(var row=startRow;row<endRow;row++){if(foldWidgets[row]==null)foldWidgets[row]=this.getFoldWidget(row);if(foldWidgets[row]!="start")continue;var range=this.getFoldWidgetRange(row);if(range&&range.isMultiLine()&&range.end.row<=endRow&&range.start.row>=startRow){row=range.end.row;try{var fold=this.addFold("...",range);if(fold)fold.collapseChildren=depth;}catch(e){}}}};this.$foldStyles={"manual":1,"markbegin":1,"markbeginend":1};this.$foldStyle="markbegin";this.setFoldStyle=function(style){if(!this.$foldStyles[style])throw new Error("invalid fold style: "+style+"["+Object.keys(this.$foldStyles).join(", ")+"]");if(this.$foldStyle==style)return;this.$foldStyle=style;if(style=="manual")this.unfold();var mode=this.$foldMode;this.$setFolding(null);this.$setFolding(mode);};this.$setFolding=function(foldMode){if(this.$foldMode==foldMode)return;this.$foldMode=foldMode;this.off('change',this.$updateFoldWidgets);this.off('tokenizerUpdate',this.$tokenizerUpdateFoldWidgets);this._signal("changeAnnotation");if(!foldMode||this.$foldStyle=="manual"){this.foldWidgets=null;return;}this.foldWidgets=[];this.getFoldWidget=foldMode.getFoldWidget.bind(foldMode,this,this.$foldStyle);this.getFoldWidgetRange=foldMode.getFoldWidgetRange.bind(foldMode,this,this.$foldStyle);this.$updateFoldWidgets=this.updateFoldWidgets.bind(this);this.$tokenizerUpdateFoldWidgets=this.tokenizerUpdateFoldWidgets.bind(this);this.on('change',this.$updateFoldWidgets);this.on('tokenizerUpdate',this.$tokenizerUpdateFoldWidgets);};this.getParentFoldRangeData=function(row,ignoreCurrent){var fw=this.foldWidgets;if(!fw||ignoreCurrent&&fw[row])return{};var i=row-1,firstRange;while(i>=0){var c=fw[i];if(c==null)c=fw[i]=this.getFoldWidget(i);if(c=="start"){var range=this.getFoldWidgetRange(i);if(!firstRange)firstRange=range;if(range&&range.end.row>=row)break;}i--;}return{range:i!==-1&&range,firstRange:firstRange};};this.onFoldWidgetClick=function(row,e){e=e.domEvent;var options={children:e.shiftKey,all:e.ctrlKey||e.metaKey,siblings:e.altKey};var range=this.$toggleFoldWidget(row,options);if(!range){var el=e.target||e.srcElement;if(el&&/ace_fold-widget/.test(el.className))el.className+=" ace_invalid";}};this.$toggleFoldWidget=function(row,options){if(!this.getFoldWidget)return;var type=this.getFoldWidget(row);var line=this.getLine(row);var dir=type==="end"?-1:1;var fold=this.getFoldAt(row,dir===-1?0:line.length,dir);if(fold){if(options.children||options.all)this.removeFold(fold);else this.expandFold(fold);return fold;}var range=this.getFoldWidgetRange(row,true);if(range&&!range.isMultiLine()){fold=this.getFoldAt(range.start.row,range.start.column,1);if(fold&&range.isEqual(fold.range)){this.removeFold(fold);return fold;}}if(options.siblings){var data=this.getParentFoldRangeData(row);if(data.range){var startRow=data.range.start.row+1;var endRow=data.range.end.row;}this.foldAll(startRow,endRow,options.all?10000:0);}else if(options.children){endRow=range?range.end.row:this.getLength();this.foldAll(row+1,endRow,options.all?10000:0);}else if(range){if(options.all)range.collapseChildren=10000;this.addFold("...",range);}return range;};this.toggleFoldWidget=function(toggleParent){var row=this.selection.getCursor().row;row=this.getRowFoldStart(row);var range=this.$toggleFoldWidget(row,{});if(range)return;var data=this.getParentFoldRangeData(row,true);range=data.range||data.firstRange;if(range){row=range.start.row;var fold=this.getFoldAt(row,this.getLine(row).length,1);if(fold){this.removeFold(fold);}else{this.addFold("...",range);}}};this.updateFoldWidgets=function(delta){var firstRow=delta.start.row;var len=delta.end.row-firstRow;if(len===0){this.foldWidgets[firstRow]=null;}else if(delta.action=='remove'){this.foldWidgets.splice(firstRow,len+1,null);}else{var args=Array(len+1);args.unshift(firstRow,1);this.foldWidgets.splice.apply(this.foldWidgets,args);}};this.tokenizerUpdateFoldWidgets=function(e){var rows=e.data;if(rows.first!=rows.last){if(this.foldWidgets.length>rows.first)this.foldWidgets.splice(rows.first,this.foldWidgets.length);}};}exports.Folding=Folding;});ace.define("ace/edit_session/bracket_match",["require","exports","module","ace/token_iterator","ace/range"],function(acequire,exports,module){"use strict";var TokenIterator=acequire("../token_iterator").TokenIterator;var Range=acequire("../range").Range;function BracketMatch(){this.findMatchingBracket=function(position,chr){if(position.column==0)return null;var charBeforeCursor=chr||this.getLine(position.row).charAt(position.column-1);if(charBeforeCursor=="")return null;var match=charBeforeCursor.match(/([\(\[\{])|([\)\]\}])/);if(!match)return null;if(match[1])return this.$findClosingBracket(match[1],position);else return this.$findOpeningBracket(match[2],position);};this.getBracketRange=function(pos){var line=this.getLine(pos.row);var before=true,range;var chr=line.charAt(pos.column-1);var match=chr&&chr.match(/([\(\[\{])|([\)\]\}])/);if(!match){chr=line.charAt(pos.column);pos={row:pos.row,column:pos.column+1};match=chr&&chr.match(/([\(\[\{])|([\)\]\}])/);before=false;}if(!match)return null;if(match[1]){var bracketPos=this.$findClosingBracket(match[1],pos);if(!bracketPos)return null;range=Range.fromPoints(pos,bracketPos);if(!before){range.end.column++;range.start.column--;}range.cursor=range.end;}else{var bracketPos=this.$findOpeningBracket(match[2],pos);if(!bracketPos)return null;range=Range.fromPoints(bracketPos,pos);if(!before){range.start.column++;range.end.column--;}range.cursor=range.start;}return range;};this.$brackets={")":"(","(":")","]":"[","[":"]","{":"}","}":"{"};this.$findOpeningBracket=function(bracket,position,typeRe){var openBracket=this.$brackets[bracket];var depth=1;var iterator=new TokenIterator(this,position.row,position.column);var token=iterator.getCurrentToken();if(!token)token=iterator.stepForward();if(!token)return;if(!typeRe){typeRe=new RegExp("(\\.?"+token.type.replace(".","\\.").replace("rparen",".paren").replace(/\b(?:end)\b/,"(?:start|begin|end)")+")+");}var valueIndex=position.column-iterator.getCurrentTokenColumn()-2;var value=token.value;while(true){while(valueIndex>=0){var chr=value.charAt(valueIndex);if(chr==openBracket){depth-=1;if(depth==0){return{row:iterator.getCurrentTokenRow(),column:valueIndex+iterator.getCurrentTokenColumn()};}}else if(chr==bracket){depth+=1;}valueIndex-=1;}do{token=iterator.stepBackward();}while(token&&!typeRe.test(token.type));if(token==null)break;value=token.value;valueIndex=value.length-1;}return null;};this.$findClosingBracket=function(bracket,position,typeRe){var closingBracket=this.$brackets[bracket];var depth=1;var iterator=new TokenIterator(this,position.row,position.column);var token=iterator.getCurrentToken();if(!token)token=iterator.stepForward();if(!token)return;if(!typeRe){typeRe=new RegExp("(\\.?"+token.type.replace(".","\\.").replace("lparen",".paren").replace(/\b(?:start|begin)\b/,"(?:start|begin|end)")+")+");}var valueIndex=position.column-iterator.getCurrentTokenColumn();while(true){var value=token.value;var valueLength=value.length;while(valueIndex<valueLength){var chr=value.charAt(valueIndex);if(chr==closingBracket){depth-=1;if(depth==0){return{row:iterator.getCurrentTokenRow(),column:valueIndex+iterator.getCurrentTokenColumn()};}}else if(chr==bracket){depth+=1;}valueIndex+=1;}do{token=iterator.stepForward();}while(token&&!typeRe.test(token.type));if(token==null)break;valueIndex=0;}return null;};}exports.BracketMatch=BracketMatch;});ace.define("ace/edit_session",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/config","ace/lib/event_emitter","ace/selection","ace/mode/text","ace/range","ace/document","ace/background_tokenizer","ace/search_highlight","ace/edit_session/folding","ace/edit_session/bracket_match"],function(acequire,exports,module){"use strict";var oop=acequire("./lib/oop");var lang=acequire("./lib/lang");var config=acequire("./config");var EventEmitter=acequire("./lib/event_emitter").EventEmitter;var Selection=acequire("./selection").Selection;var TextMode=acequire("./mode/text").Mode;var Range=acequire("./range").Range;var Document=acequire("./document").Document;var BackgroundTokenizer=acequire("./background_tokenizer").BackgroundTokenizer;var SearchHighlight=acequire("./search_highlight").SearchHighlight;var EditSession=function EditSession(text,mode){this.$breakpoints=[];this.$decorations=[];this.$frontMarkers={};this.$backMarkers={};this.$markerId=1;this.$undoSelect=true;this.$foldData=[];this.id="session"+ ++EditSession.$uid;this.$foldData.toString=function(){return this.join("\n");};this.on("changeFold",this.onChangeFold.bind(this));this.$onChange=this.onChange.bind(this);if((typeof text==="undefined"?"undefined":_typeof(text))!="object"||!text.getLine)text=new Document(text);this.setDocument(text);this.selection=new Selection(this);config.resetOptions(this);this.setMode(mode);config._signal("session",this);};(function(){oop.implement(this,EventEmitter);this.setDocument=function(doc){if(this.doc)this.doc.removeListener("change",this.$onChange);this.doc=doc;doc.on("change",this.$onChange);if(this.bgTokenizer)this.bgTokenizer.setDocument(this.getDocument());this.resetCaches();};this.getDocument=function(){return this.doc;};this.$resetRowCache=function(docRow){if(!docRow){this.$docRowCache=[];this.$screenRowCache=[];return;}var l=this.$docRowCache.length;var i=this.$getRowCacheIndex(this.$docRowCache,docRow)+1;if(l>i){this.$docRowCache.splice(i,l);this.$screenRowCache.splice(i,l);}};this.$getRowCacheIndex=function(cacheArray,val){var low=0;var hi=cacheArray.length-1;while(low<=hi){var mid=low+hi>>1;var c=cacheArray[mid];if(val>c)low=mid+1;else if(val<c)hi=mid-1;else return mid;}return low-1;};this.resetCaches=function(){this.$modified=true;this.$wrapData=[];this.$rowLengthCache=[];this.$resetRowCache(0);if(this.bgTokenizer)this.bgTokenizer.start(0);};this.onChangeFold=function(e){var fold=e.data;this.$resetRowCache(fold.start.row);};this.onChange=function(delta){this.$modified=true;this.$resetRowCache(delta.start.row);var removedFolds=this.$updateInternalDataOnChange(delta);if(!this.$fromUndo&&this.$undoManager&&!delta.ignore){this.$deltasDoc.push(delta);if(removedFolds&&removedFolds.length!=0){this.$deltasFold.push({action:"removeFolds",folds:removedFolds});}this.$informUndoManager.schedule();}this.bgTokenizer&&this.bgTokenizer.$updateOnChange(delta);this._signal("change",delta);};this.setValue=function(text){this.doc.setValue(text);this.selection.moveTo(0,0);this.$resetRowCache(0);this.$deltas=[];this.$deltasDoc=[];this.$deltasFold=[];this.setUndoManager(this.$undoManager);this.getUndoManager().reset();};this.getValue=this.toString=function(){return this.doc.getValue();};this.getSelection=function(){return this.selection;};this.getState=function(row){return this.bgTokenizer.getState(row);};this.getTokens=function(row){return this.bgTokenizer.getTokens(row);};this.getTokenAt=function(row,column){var tokens=this.bgTokenizer.getTokens(row);var token,c=0;if(column==null){i=tokens.length-1;c=this.getLine(row).length;}else{for(var i=0;i<tokens.length;i++){c+=tokens[i].value.length;if(c>=column)break;}}token=tokens[i];if(!token)return null;token.index=i;token.start=c-token.value.length;return token;};this.setUndoManager=function(undoManager){this.$undoManager=undoManager;this.$deltas=[];this.$deltasDoc=[];this.$deltasFold=[];if(this.$informUndoManager)this.$informUndoManager.cancel();if(undoManager){var self=this;this.$syncInformUndoManager=function(){self.$informUndoManager.cancel();if(self.$deltasFold.length){self.$deltas.push({group:"fold",deltas:self.$deltasFold});self.$deltasFold=[];}if(self.$deltasDoc.length){self.$deltas.push({group:"doc",deltas:self.$deltasDoc});self.$deltasDoc=[];}if(self.$deltas.length>0){undoManager.execute({action:"aceupdate",args:[self.$deltas,self],merge:self.mergeUndoDeltas});}self.mergeUndoDeltas=false;self.$deltas=[];};this.$informUndoManager=lang.delayedCall(this.$syncInformUndoManager);}};this.markUndoGroup=function(){if(this.$syncInformUndoManager)this.$syncInformUndoManager();};this.$defaultUndoManager={undo:function undo(){},redo:function redo(){},reset:function reset(){}};this.getUndoManager=function(){return this.$undoManager||this.$defaultUndoManager;};this.getTabString=function(){if(this.getUseSoftTabs()){return lang.stringRepeat(" ",this.getTabSize());}else{return"\t";}};this.setUseSoftTabs=function(val){this.setOption("useSoftTabs",val);};this.getUseSoftTabs=function(){return this.$useSoftTabs&&!this.$mode.$indentWithTabs;};this.setTabSize=function(tabSize){this.setOption("tabSize",tabSize);};this.getTabSize=function(){return this.$tabSize;};this.isTabStop=function(position){return this.$useSoftTabs&&position.column%this.$tabSize===0;};this.$overwrite=false;this.setOverwrite=function(overwrite){this.setOption("overwrite",overwrite);};this.getOverwrite=function(){return this.$overwrite;};this.toggleOverwrite=function(){this.setOverwrite(!this.$overwrite);};this.addGutterDecoration=function(row,className){if(!this.$decorations[row])this.$decorations[row]="";this.$decorations[row]+=" "+className;this._signal("changeBreakpoint",{});};this.removeGutterDecoration=function(row,className){this.$decorations[row]=(this.$decorations[row]||"").replace(" "+className,"");this._signal("changeBreakpoint",{});};this.getBreakpoints=function(){return this.$breakpoints;};this.setBreakpoints=function(rows){this.$breakpoints=[];for(var i=0;i<rows.length;i++){this.$breakpoints[rows[i]]="ace_breakpoint";}this._signal("changeBreakpoint",{});};this.clearBreakpoints=function(){this.$breakpoints=[];this._signal("changeBreakpoint",{});};this.setBreakpoint=function(row,className){if(className===undefined)className="ace_breakpoint";if(className)this.$breakpoints[row]=className;else delete this.$breakpoints[row];this._signal("changeBreakpoint",{});};this.clearBreakpoint=function(row){delete this.$breakpoints[row];this._signal("changeBreakpoint",{});};this.addMarker=function(range,clazz,type,inFront){var id=this.$markerId++;var marker={range:range,type:type||"line",renderer:typeof type=="function"?type:null,clazz:clazz,inFront:!!inFront,id:id};if(inFront){this.$frontMarkers[id]=marker;this._signal("changeFrontMarker");}else{this.$backMarkers[id]=marker;this._signal("changeBackMarker");}return id;};this.addDynamicMarker=function(marker,inFront){if(!marker.update)return;var id=this.$markerId++;marker.id=id;marker.inFront=!!inFront;if(inFront){this.$frontMarkers[id]=marker;this._signal("changeFrontMarker");}else{this.$backMarkers[id]=marker;this._signal("changeBackMarker");}return marker;};this.removeMarker=function(markerId){var marker=this.$frontMarkers[markerId]||this.$backMarkers[markerId];if(!marker)return;var markers=marker.inFront?this.$frontMarkers:this.$backMarkers;if(marker){delete markers[markerId];this._signal(marker.inFront?"changeFrontMarker":"changeBackMarker");}};this.getMarkers=function(inFront){return inFront?this.$frontMarkers:this.$backMarkers;};this.highlight=function(re){if(!this.$searchHighlight){var highlight=new SearchHighlight(null,"ace_selected-word","text");this.$searchHighlight=this.addDynamicMarker(highlight);}this.$searchHighlight.setRegexp(re);};this.highlightLines=function(startRow,endRow,clazz,inFront){if(typeof endRow!="number"){clazz=endRow;endRow=startRow;}if(!clazz)clazz="ace_step";var range=new Range(startRow,0,endRow,Infinity);range.id=this.addMarker(range,clazz,"fullLine",inFront);return range;};this.setAnnotations=function(annotations){this.$annotations=annotations;this._signal("changeAnnotation",{});};this.getAnnotations=function(){return this.$annotations||[];};this.clearAnnotations=function(){this.setAnnotations([]);};this.$detectNewLine=function(text){var match=text.match(/^.*?(\r?\n)/m);if(match){this.$autoNewLine=match[1];}else{this.$autoNewLine="\n";}};this.getWordRange=function(row,column){var line=this.getLine(row);var inToken=false;if(column>0)inToken=!!line.charAt(column-1).match(this.tokenRe);if(!inToken)inToken=!!line.charAt(column).match(this.tokenRe);if(inToken)var re=this.tokenRe;else if(/^\s+$/.test(line.slice(column-1,column+1)))var re=/\s/;else var re=this.nonTokenRe;var start=column;if(start>0){do{start--;}while(start>=0&&line.charAt(start).match(re));start++;}var end=column;while(end<line.length&&line.charAt(end).match(re)){end++;}return new Range(row,start,row,end);};this.getAWordRange=function(row,column){var wordRange=this.getWordRange(row,column);var line=this.getLine(wordRange.end.row);while(line.charAt(wordRange.end.column).match(/[ \t]/)){wordRange.end.column+=1;}return wordRange;};this.setNewLineMode=function(newLineMode){this.doc.setNewLineMode(newLineMode);};this.getNewLineMode=function(){return this.doc.getNewLineMode();};this.setUseWorker=function(useWorker){this.setOption("useWorker",useWorker);};this.getUseWorker=function(){return this.$useWorker;};this.onReloadTokenizer=function(e){var rows=e.data;this.bgTokenizer.start(rows.first);this._signal("tokenizerUpdate",e);};this.$modes={};this.$mode=null;this.$modeId=null;this.setMode=function(mode,cb){if(mode&&(typeof mode==="undefined"?"undefined":_typeof(mode))==="object"){if(mode.getTokenizer)return this.$onChangeMode(mode);var options=mode;var path=options.path;}else{path=mode||"ace/mode/text";}if(!this.$modes["ace/mode/text"])this.$modes["ace/mode/text"]=new TextMode();if(this.$modes[path]&&!options){this.$onChangeMode(this.$modes[path]);cb&&cb();return;}this.$modeId=path;config.loadModule(["mode",path],function(m){if(this.$modeId!==path)return cb&&cb();if(this.$modes[path]&&!options){this.$onChangeMode(this.$modes[path]);}else if(m&&m.Mode){m=new m.Mode(options);if(!options){this.$modes[path]=m;m.$id=path;}this.$onChangeMode(m);}cb&&cb();}.bind(this));if(!this.$mode)this.$onChangeMode(this.$modes["ace/mode/text"],true);};this.$onChangeMode=function(mode,$isPlaceholder){if(!$isPlaceholder)this.$modeId=mode.$id;if(this.$mode===mode)return;this.$mode=mode;this.$stopWorker();if(this.$useWorker)this.$startWorker();var tokenizer=mode.getTokenizer();if(tokenizer.addEventListener!==undefined){var onReloadTokenizer=this.onReloadTokenizer.bind(this);tokenizer.addEventListener("update",onReloadTokenizer);}if(!this.bgTokenizer){this.bgTokenizer=new BackgroundTokenizer(tokenizer);var _self=this;this.bgTokenizer.addEventListener("update",function(e){_self._signal("tokenizerUpdate",e);});}else{this.bgTokenizer.setTokenizer(tokenizer);}this.bgTokenizer.setDocument(this.getDocument());this.tokenRe=mode.tokenRe;this.nonTokenRe=mode.nonTokenRe;if(!$isPlaceholder){if(mode.attachToSession)mode.attachToSession(this);this.$options.wrapMethod.set.call(this,this.$wrapMethod);this.$setFolding(mode.foldingRules);this.bgTokenizer.start(0);this._emit("changeMode");}};this.$stopWorker=function(){if(this.$worker){this.$worker.terminate();this.$worker=null;}};this.$startWorker=function(){try{this.$worker=this.$mode.createWorker(this);}catch(e){config.warn("Could not load worker",e);this.$worker=null;}};this.getMode=function(){return this.$mode;};this.$scrollTop=0;this.setScrollTop=function(scrollTop){if(this.$scrollTop===scrollTop||isNaN(scrollTop))return;this.$scrollTop=scrollTop;this._signal("changeScrollTop",scrollTop);};this.getScrollTop=function(){return this.$scrollTop;};this.$scrollLeft=0;this.setScrollLeft=function(scrollLeft){if(this.$scrollLeft===scrollLeft||isNaN(scrollLeft))return;this.$scrollLeft=scrollLeft;this._signal("changeScrollLeft",scrollLeft);};this.getScrollLeft=function(){return this.$scrollLeft;};this.getScreenWidth=function(){this.$computeWidth();if(this.lineWidgets)return Math.max(this.getLineWidgetMaxWidth(),this.screenWidth);return this.screenWidth;};this.getLineWidgetMaxWidth=function(){if(this.lineWidgetsWidth!=null)return this.lineWidgetsWidth;var width=0;this.lineWidgets.forEach(function(w){if(w&&w.screenWidth>width)width=w.screenWidth;});return this.lineWidgetWidth=width;};this.$computeWidth=function(force){if(this.$modified||force){this.$modified=false;if(this.$useWrapMode)return this.screenWidth=this.$wrapLimit;var lines=this.doc.getAllLines();var cache=this.$rowLengthCache;var longestScreenLine=0;var foldIndex=0;var foldLine=this.$foldData[foldIndex];var foldStart=foldLine?foldLine.start.row:Infinity;var len=lines.length;for(var i=0;i<len;i++){if(i>foldStart){i=foldLine.end.row+1;if(i>=len)break;foldLine=this.$foldData[foldIndex++];foldStart=foldLine?foldLine.start.row:Infinity;}if(cache[i]==null)cache[i]=this.$getStringScreenWidth(lines[i])[0];if(cache[i]>longestScreenLine)longestScreenLine=cache[i];}this.screenWidth=longestScreenLine;}};this.getLine=function(row){return this.doc.getLine(row);};this.getLines=function(firstRow,lastRow){return this.doc.getLines(firstRow,lastRow);};this.getLength=function(){return this.doc.getLength();};this.getTextRange=function(range){return this.doc.getTextRange(range||this.selection.getRange());};this.insert=function(position,text){return this.doc.insert(position,text);};this.remove=function(range){return this.doc.remove(range);};this.removeFullLines=function(firstRow,lastRow){return this.doc.removeFullLines(firstRow,lastRow);};this.undoChanges=function(deltas,dontSelect){if(!deltas.length)return;this.$fromUndo=true;var lastUndoRange=null;for(var i=deltas.length-1;i!=-1;i--){var delta=deltas[i];if(delta.group=="doc"){this.doc.revertDeltas(delta.deltas);lastUndoRange=this.$getUndoSelection(delta.deltas,true,lastUndoRange);}else{delta.deltas.forEach(function(foldDelta){this.addFolds(foldDelta.folds);},this);}}this.$fromUndo=false;lastUndoRange&&this.$undoSelect&&!dontSelect&&this.selection.setSelectionRange(lastUndoRange);return lastUndoRange;};this.redoChanges=function(deltas,dontSelect){if(!deltas.length)return;this.$fromUndo=true;var lastUndoRange=null;for(var i=0;i<deltas.length;i++){var delta=deltas[i];if(delta.group=="doc"){this.doc.applyDeltas(delta.deltas);lastUndoRange=this.$getUndoSelection(delta.deltas,false,lastUndoRange);}}this.$fromUndo=false;lastUndoRange&&this.$undoSelect&&!dontSelect&&this.selection.setSelectionRange(lastUndoRange);return lastUndoRange;};this.setUndoSelect=function(enable){this.$undoSelect=enable;};this.$getUndoSelection=function(deltas,isUndo,lastUndoRange){function isInsert(delta){return isUndo?delta.action!=="insert":delta.action==="insert";}var delta=deltas[0];var range,point;var lastDeltaIsInsert=false;if(isInsert(delta)){range=Range.fromPoints(delta.start,delta.end);lastDeltaIsInsert=true;}else{range=Range.fromPoints(delta.start,delta.start);lastDeltaIsInsert=false;}for(var i=1;i<deltas.length;i++){delta=deltas[i];if(isInsert(delta)){point=delta.start;if(range.compare(point.row,point.column)==-1){range.setStart(point);}point=delta.end;if(range.compare(point.row,point.column)==1){range.setEnd(point);}lastDeltaIsInsert=true;}else{point=delta.start;if(range.compare(point.row,point.column)==-1){range=Range.fromPoints(delta.start,delta.start);}lastDeltaIsInsert=false;}}if(lastUndoRange!=null){if(Range.comparePoints(lastUndoRange.start,range.start)===0){lastUndoRange.start.column+=range.end.column-range.start.column;lastUndoRange.end.column+=range.end.column-range.start.column;}var cmp=lastUndoRange.compareRange(range);if(cmp==1){range.setStart(lastUndoRange.start);}else if(cmp==-1){range.setEnd(lastUndoRange.end);}}return range;};this.replace=function(range,text){return this.doc.replace(range,text);};this.moveText=function(fromRange,toPosition,copy){var text=this.getTextRange(fromRange);var folds=this.getFoldsInRange(fromRange);var toRange=Range.fromPoints(toPosition,toPosition);if(!copy){this.remove(fromRange);var rowDiff=fromRange.start.row-fromRange.end.row;var collDiff=rowDiff?-fromRange.end.column:fromRange.start.column-fromRange.end.column;if(collDiff){if(toRange.start.row==fromRange.end.row&&toRange.start.column>fromRange.end.column)toRange.start.column+=collDiff;if(toRange.end.row==fromRange.end.row&&toRange.end.column>fromRange.end.column)toRange.end.column+=collDiff;}if(rowDiff&&toRange.start.row>=fromRange.end.row){toRange.start.row+=rowDiff;toRange.end.row+=rowDiff;}}toRange.end=this.insert(toRange.start,text);if(folds.length){var oldStart=fromRange.start;var newStart=toRange.start;var rowDiff=newStart.row-oldStart.row;var collDiff=newStart.column-oldStart.column;this.addFolds(folds.map(function(x){x=x.clone();if(x.start.row==oldStart.row)x.start.column+=collDiff;if(x.end.row==oldStart.row)x.end.column+=collDiff;x.start.row+=rowDiff;x.end.row+=rowDiff;return x;}));}return toRange;};this.indentRows=function(startRow,endRow,indentString){indentString=indentString.replace(/\t/g,this.getTabString());for(var row=startRow;row<=endRow;row++){this.doc.insertInLine({row:row,column:0},indentString);}};this.outdentRows=function(range){var rowRange=range.collapseRows();var deleteRange=new Range(0,0,0,0);var size=this.getTabSize();for(var i=rowRange.start.row;i<=rowRange.end.row;++i){var line=this.getLine(i);deleteRange.start.row=i;deleteRange.end.row=i;for(var j=0;j<size;++j){if(line.charAt(j)!=' ')break;}if(j<size&&line.charAt(j)=='\t'){deleteRange.start.column=j;deleteRange.end.column=j+1;}else{deleteRange.start.column=0;deleteRange.end.column=j;}this.remove(deleteRange);}};this.$moveLines=function(firstRow,lastRow,dir){firstRow=this.getRowFoldStart(firstRow);lastRow=this.getRowFoldEnd(lastRow);if(dir<0){var row=this.getRowFoldStart(firstRow+dir);if(row<0)return 0;var diff=row-firstRow;}else if(dir>0){var row=this.getRowFoldEnd(lastRow+dir);if(row>this.doc.getLength()-1)return 0;var diff=row-lastRow;}else{firstRow=this.$clipRowToDocument(firstRow);lastRow=this.$clipRowToDocument(lastRow);var diff=lastRow-firstRow+1;}var range=new Range(firstRow,0,lastRow,Number.MAX_VALUE);var folds=this.getFoldsInRange(range).map(function(x){x=x.clone();x.start.row+=diff;x.end.row+=diff;return x;});var lines=dir==0?this.doc.getLines(firstRow,lastRow):this.doc.removeFullLines(firstRow,lastRow);this.doc.insertFullLines(firstRow+diff,lines);folds.length&&this.addFolds(folds);return diff;};this.moveLinesUp=function(firstRow,lastRow){return this.$moveLines(firstRow,lastRow,-1);};this.moveLinesDown=function(firstRow,lastRow){return this.$moveLines(firstRow,lastRow,1);};this.duplicateLines=function(firstRow,lastRow){return this.$moveLines(firstRow,lastRow,0);};this.$clipRowToDocument=function(row){return Math.max(0,Math.min(row,this.doc.getLength()-1));};this.$clipColumnToRow=function(row,column){if(column<0)return 0;return Math.min(this.doc.getLine(row).length,column);};this.$clipPositionToDocument=function(row,column){column=Math.max(0,column);if(row<0){row=0;column=0;}else{var len=this.doc.getLength();if(row>=len){row=len-1;column=this.doc.getLine(len-1).length;}else{column=Math.min(this.doc.getLine(row).length,column);}}return{row:row,column:column};};this.$clipRangeToDocument=function(range){if(range.start.row<0){range.start.row=0;range.start.column=0;}else{range.start.column=this.$clipColumnToRow(range.start.row,range.start.column);}var len=this.doc.getLength()-1;if(range.end.row>len){range.end.row=len;range.end.column=this.doc.getLine(len).length;}else{range.end.column=this.$clipColumnToRow(range.end.row,range.end.column);}return range;};this.$wrapLimit=80;this.$useWrapMode=false;this.$wrapLimitRange={min:null,max:null};this.setUseWrapMode=function(useWrapMode){if(useWrapMode!=this.$useWrapMode){this.$useWrapMode=useWrapMode;this.$modified=true;this.$resetRowCache(0);if(useWrapMode){var len=this.getLength();this.$wrapData=Array(len);this.$updateWrapData(0,len-1);}this._signal("changeWrapMode");}};this.getUseWrapMode=function(){return this.$useWrapMode;};this.setWrapLimitRange=function(min,max){if(this.$wrapLimitRange.min!==min||this.$wrapLimitRange.max!==max){this.$wrapLimitRange={min:min,max:max};this.$modified=true;if(this.$useWrapMode)this._signal("changeWrapMode");}};this.adjustWrapLimit=function(desiredLimit,$printMargin){var limits=this.$wrapLimitRange;if(limits.max<0)limits={min:$printMargin,max:$printMargin};var wrapLimit=this.$constrainWrapLimit(desiredLimit,limits.min,limits.max);if(wrapLimit!=this.$wrapLimit&&wrapLimit>1){this.$wrapLimit=wrapLimit;this.$modified=true;if(this.$useWrapMode){this.$updateWrapData(0,this.getLength()-1);this.$resetRowCache(0);this._signal("changeWrapLimit");}return true;}return false;};this.$constrainWrapLimit=function(wrapLimit,min,max){if(min)wrapLimit=Math.max(min,wrapLimit);if(max)wrapLimit=Math.min(max,wrapLimit);return wrapLimit;};this.getWrapLimit=function(){return this.$wrapLimit;};this.setWrapLimit=function(limit){this.setWrapLimitRange(limit,limit);};this.getWrapLimitRange=function(){return{min:this.$wrapLimitRange.min,max:this.$wrapLimitRange.max};};this.$updateInternalDataOnChange=function(delta){var useWrapMode=this.$useWrapMode;var action=delta.action;var start=delta.start;var end=delta.end;var firstRow=start.row;var lastRow=end.row;var len=lastRow-firstRow;var removedFolds=null;this.$updating=true;if(len!=0){if(action==="remove"){this[useWrapMode?"$wrapData":"$rowLengthCache"].splice(firstRow,len);var foldLines=this.$foldData;removedFolds=this.getFoldsInRange(delta);this.removeFolds(removedFolds);var foldLine=this.getFoldLine(end.row);var idx=0;if(foldLine){foldLine.addRemoveChars(end.row,end.column,start.column-end.column);foldLine.shiftRow(-len);var foldLineBefore=this.getFoldLine(firstRow);if(foldLineBefore&&foldLineBefore!==foldLine){foldLineBefore.merge(foldLine);foldLine=foldLineBefore;}idx=foldLines.indexOf(foldLine)+1;}for(idx;idx<foldLines.length;idx++){var foldLine=foldLines[idx];if(foldLine.start.row>=end.row){foldLine.shiftRow(-len);}}lastRow=firstRow;}else{var args=Array(len);args.unshift(firstRow,0);var arr=useWrapMode?this.$wrapData:this.$rowLengthCache;arr.splice.apply(arr,args);var foldLines=this.$foldData;var foldLine=this.getFoldLine(firstRow);var idx=0;if(foldLine){var cmp=foldLine.range.compareInside(start.row,start.column);if(cmp==0){foldLine=foldLine.split(start.row,start.column);if(foldLine){foldLine.shiftRow(len);foldLine.addRemoveChars(lastRow,0,end.column-start.column);}}else if(cmp==-1){foldLine.addRemoveChars(firstRow,0,end.column-start.column);foldLine.shiftRow(len);}idx=foldLines.indexOf(foldLine)+1;}for(idx;idx<foldLines.length;idx++){var foldLine=foldLines[idx];if(foldLine.start.row>=firstRow){foldLine.shiftRow(len);}}}}else{len=Math.abs(delta.start.column-delta.end.column);if(action==="remove"){removedFolds=this.getFoldsInRange(delta);this.removeFolds(removedFolds);len=-len;}var foldLine=this.getFoldLine(firstRow);if(foldLine){foldLine.addRemoveChars(firstRow,start.column,len);}}if(useWrapMode&&this.$wrapData.length!=this.doc.getLength()){console.error("doc.getLength() and $wrapData.length have to be the same!");}this.$updating=false;if(useWrapMode)this.$updateWrapData(firstRow,lastRow);else this.$updateRowLengthCache(firstRow,lastRow);return removedFolds;};this.$updateRowLengthCache=function(firstRow,lastRow,b){this.$rowLengthCache[firstRow]=null;this.$rowLengthCache[lastRow]=null;};this.$updateWrapData=function(firstRow,lastRow){var lines=this.doc.getAllLines();var tabSize=this.getTabSize();var wrapData=this.$wrapData;var wrapLimit=this.$wrapLimit;var tokens;var foldLine;var row=firstRow;lastRow=Math.min(lastRow,lines.length-1);while(row<=lastRow){foldLine=this.getFoldLine(row,foldLine);if(!foldLine){tokens=this.$getDisplayTokens(lines[row]);wrapData[row]=this.$computeWrapSplits(tokens,wrapLimit,tabSize);row++;}else{tokens=[];foldLine.walk(function(placeholder,row,column,lastColumn){var walkTokens;if(placeholder!=null){walkTokens=this.$getDisplayTokens(placeholder,tokens.length);walkTokens[0]=PLACEHOLDER_START;for(var i=1;i<walkTokens.length;i++){walkTokens[i]=PLACEHOLDER_BODY;}}else{walkTokens=this.$getDisplayTokens(lines[row].substring(lastColumn,column),tokens.length);}tokens=tokens.concat(walkTokens);}.bind(this),foldLine.end.row,lines[foldLine.end.row].length+1);wrapData[foldLine.start.row]=this.$computeWrapSplits(tokens,wrapLimit,tabSize);row=foldLine.end.row+1;}}};var CHAR=1,CHAR_EXT=2,PLACEHOLDER_START=3,PLACEHOLDER_BODY=4,PUNCTUATION=9,SPACE=10,TAB=11,TAB_SPACE=12;this.$computeWrapSplits=function(tokens,wrapLimit,tabSize){if(tokens.length==0){return[];}var splits=[];var displayLength=tokens.length;var lastSplit=0,lastDocSplit=0;var isCode=this.$wrapAsCode;var indentedSoftWrap=this.$indentedSoftWrap;var maxIndent=wrapLimit<=Math.max(2*tabSize,8)||indentedSoftWrap===false?0:Math.floor(wrapLimit/2);function getWrapIndent(){var indentation=0;if(maxIndent===0)return indentation;if(indentedSoftWrap){for(var i=0;i<tokens.length;i++){var token=tokens[i];if(token==SPACE)indentation+=1;else if(token==TAB)indentation+=tabSize;else if(token==TAB_SPACE)continue;else break;}}if(isCode&&indentedSoftWrap!==false)indentation+=tabSize;return Math.min(indentation,maxIndent);}function addSplit(screenPos){var displayed=tokens.slice(lastSplit,screenPos);var len=displayed.length;displayed.join("").replace(/12/g,function(){len-=1;}).replace(/2/g,function(){len-=1;});if(!splits.length){indent=getWrapIndent();splits.indent=indent;}lastDocSplit+=len;splits.push(lastDocSplit);lastSplit=screenPos;}var indent=0;while(displayLength-lastSplit>wrapLimit-indent){var split=lastSplit+wrapLimit-indent;if(tokens[split-1]>=SPACE&&tokens[split]>=SPACE){addSplit(split);continue;}if(tokens[split]==PLACEHOLDER_START||tokens[split]==PLACEHOLDER_BODY){for(split;split!=lastSplit-1;split--){if(tokens[split]==PLACEHOLDER_START){break;}}if(split>lastSplit){addSplit(split);continue;}split=lastSplit+wrapLimit;for(split;split<tokens.length;split++){if(tokens[split]!=PLACEHOLDER_BODY){break;}}if(split==tokens.length){break;// Breaks the while-loop.
}addSplit(split);continue;}var minSplit=Math.max(split-(wrapLimit-(wrapLimit>>2)),lastSplit-1);while(split>minSplit&&tokens[split]<PLACEHOLDER_START){split--;}if(isCode){while(split>minSplit&&tokens[split]<PLACEHOLDER_START){split--;}while(split>minSplit&&tokens[split]==PUNCTUATION){split--;}}else{while(split>minSplit&&tokens[split]<SPACE){split--;}}if(split>minSplit){addSplit(++split);continue;}split=lastSplit+wrapLimit;if(tokens[split]==CHAR_EXT)split--;addSplit(split-indent);}return splits;};this.$getDisplayTokens=function(str,offset){var arr=[];var tabSize;offset=offset||0;for(var i=0;i<str.length;i++){var c=str.charCodeAt(i);if(c==9){tabSize=this.getScreenTabSize(arr.length+offset);arr.push(TAB);for(var n=1;n<tabSize;n++){arr.push(TAB_SPACE);}}else if(c==32){arr.push(SPACE);}else if(c>39&&c<48||c>57&&c<64){arr.push(PUNCTUATION);}else if(c>=0x1100&&isFullWidth(c)){arr.push(CHAR,CHAR_EXT);}else{arr.push(CHAR);}}return arr;};this.$getStringScreenWidth=function(str,maxScreenColumn,screenColumn){if(maxScreenColumn==0)return[0,0];if(maxScreenColumn==null)maxScreenColumn=Infinity;screenColumn=screenColumn||0;var c,column;for(column=0;column<str.length;column++){c=str.charCodeAt(column);if(c==9){screenColumn+=this.getScreenTabSize(screenColumn);}else if(c>=0x1100&&isFullWidth(c)){screenColumn+=2;}else{screenColumn+=1;}if(screenColumn>maxScreenColumn){break;}}return[screenColumn,column];};this.lineWidgets=null;this.getRowLength=function(row){if(this.lineWidgets)var h=this.lineWidgets[row]&&this.lineWidgets[row].rowCount||0;else h=0;if(!this.$useWrapMode||!this.$wrapData[row]){return 1+h;}else{return this.$wrapData[row].length+1+h;}};this.getRowLineCount=function(row){if(!this.$useWrapMode||!this.$wrapData[row]){return 1;}else{return this.$wrapData[row].length+1;}};this.getRowWrapIndent=function(screenRow){if(this.$useWrapMode){var pos=this.screenToDocumentPosition(screenRow,Number.MAX_VALUE);var splits=this.$wrapData[pos.row];return splits.length&&splits[0]<pos.column?splits.indent:0;}else{return 0;}};this.getScreenLastRowColumn=function(screenRow){var pos=this.screenToDocumentPosition(screenRow,Number.MAX_VALUE);return this.documentToScreenColumn(pos.row,pos.column);};this.getDocumentLastRowColumn=function(docRow,docColumn){var screenRow=this.documentToScreenRow(docRow,docColumn);return this.getScreenLastRowColumn(screenRow);};this.getDocumentLastRowColumnPosition=function(docRow,docColumn){var screenRow=this.documentToScreenRow(docRow,docColumn);return this.screenToDocumentPosition(screenRow,Number.MAX_VALUE/10);};this.getRowSplitData=function(row){if(!this.$useWrapMode){return undefined;}else{return this.$wrapData[row];}};this.getScreenTabSize=function(screenColumn){return this.$tabSize-screenColumn%this.$tabSize;};this.screenToDocumentRow=function(screenRow,screenColumn){return this.screenToDocumentPosition(screenRow,screenColumn).row;};this.screenToDocumentColumn=function(screenRow,screenColumn){return this.screenToDocumentPosition(screenRow,screenColumn).column;};this.screenToDocumentPosition=function(screenRow,screenColumn){if(screenRow<0)return{row:0,column:0};var line;var docRow=0;var docColumn=0;var column;var row=0;var rowLength=0;var rowCache=this.$screenRowCache;var i=this.$getRowCacheIndex(rowCache,screenRow);var l=rowCache.length;if(l&&i>=0){var row=rowCache[i];var docRow=this.$docRowCache[i];var doCache=screenRow>rowCache[l-1];}else{var doCache=!l;}var maxRow=this.getLength()-1;var foldLine=this.getNextFoldLine(docRow);var foldStart=foldLine?foldLine.start.row:Infinity;while(row<=screenRow){rowLength=this.getRowLength(docRow);if(row+rowLength>screenRow||docRow>=maxRow){break;}else{row+=rowLength;docRow++;if(docRow>foldStart){docRow=foldLine.end.row+1;foldLine=this.getNextFoldLine(docRow,foldLine);foldStart=foldLine?foldLine.start.row:Infinity;}}if(doCache){this.$docRowCache.push(docRow);this.$screenRowCache.push(row);}}if(foldLine&&foldLine.start.row<=docRow){line=this.getFoldDisplayLine(foldLine);docRow=foldLine.start.row;}else if(row+rowLength<=screenRow||docRow>maxRow){return{row:maxRow,column:this.getLine(maxRow).length};}else{line=this.getLine(docRow);foldLine=null;}var wrapIndent=0;if(this.$useWrapMode){var splits=this.$wrapData[docRow];if(splits){var splitIndex=Math.floor(screenRow-row);column=splits[splitIndex];if(splitIndex>0&&splits.length){wrapIndent=splits.indent;docColumn=splits[splitIndex-1]||splits[splits.length-1];line=line.substring(docColumn);}}}docColumn+=this.$getStringScreenWidth(line,screenColumn-wrapIndent)[1];if(this.$useWrapMode&&docColumn>=column)docColumn=column-1;if(foldLine)return foldLine.idxToPosition(docColumn);return{row:docRow,column:docColumn};};this.documentToScreenPosition=function(docRow,docColumn){if(typeof docColumn==="undefined")var pos=this.$clipPositionToDocument(docRow.row,docRow.column);else pos=this.$clipPositionToDocument(docRow,docColumn);docRow=pos.row;docColumn=pos.column;var screenRow=0;var foldStartRow=null;var fold=null;fold=this.getFoldAt(docRow,docColumn,1);if(fold){docRow=fold.start.row;docColumn=fold.start.column;}var rowEnd,row=0;var rowCache=this.$docRowCache;var i=this.$getRowCacheIndex(rowCache,docRow);var l=rowCache.length;if(l&&i>=0){var row=rowCache[i];var screenRow=this.$screenRowCache[i];var doCache=docRow>rowCache[l-1];}else{var doCache=!l;}var foldLine=this.getNextFoldLine(row);var foldStart=foldLine?foldLine.start.row:Infinity;while(row<docRow){if(row>=foldStart){rowEnd=foldLine.end.row+1;if(rowEnd>docRow)break;foldLine=this.getNextFoldLine(rowEnd,foldLine);foldStart=foldLine?foldLine.start.row:Infinity;}else{rowEnd=row+1;}screenRow+=this.getRowLength(row);row=rowEnd;if(doCache){this.$docRowCache.push(row);this.$screenRowCache.push(screenRow);}}var textLine="";if(foldLine&&row>=foldStart){textLine=this.getFoldDisplayLine(foldLine,docRow,docColumn);foldStartRow=foldLine.start.row;}else{textLine=this.getLine(docRow).substring(0,docColumn);foldStartRow=docRow;}var wrapIndent=0;if(this.$useWrapMode){var wrapRow=this.$wrapData[foldStartRow];if(wrapRow){var screenRowOffset=0;while(textLine.length>=wrapRow[screenRowOffset]){screenRow++;screenRowOffset++;}textLine=textLine.substring(wrapRow[screenRowOffset-1]||0,textLine.length);wrapIndent=screenRowOffset>0?wrapRow.indent:0;}}return{row:screenRow,column:wrapIndent+this.$getStringScreenWidth(textLine)[0]};};this.documentToScreenColumn=function(row,docColumn){return this.documentToScreenPosition(row,docColumn).column;};this.documentToScreenRow=function(docRow,docColumn){return this.documentToScreenPosition(docRow,docColumn).row;};this.getScreenLength=function(){var screenRows=0;var fold=null;if(!this.$useWrapMode){screenRows=this.getLength();var foldData=this.$foldData;for(var i=0;i<foldData.length;i++){fold=foldData[i];screenRows-=fold.end.row-fold.start.row;}}else{var lastRow=this.$wrapData.length;var row=0,i=0;var fold=this.$foldData[i++];var foldStart=fold?fold.start.row:Infinity;while(row<lastRow){var splits=this.$wrapData[row];screenRows+=splits?splits.length+1:1;row++;if(row>foldStart){row=fold.end.row+1;fold=this.$foldData[i++];foldStart=fold?fold.start.row:Infinity;}}}if(this.lineWidgets)screenRows+=this.$getWidgetScreenLength();return screenRows;};this.$setFontMetrics=function(fm){if(!this.$enableVarChar)return;this.$getStringScreenWidth=function(str,maxScreenColumn,screenColumn){if(maxScreenColumn===0)return[0,0];if(!maxScreenColumn)maxScreenColumn=Infinity;screenColumn=screenColumn||0;var c,column;for(column=0;column<str.length;column++){c=str.charAt(column);if(c==="\t"){screenColumn+=this.getScreenTabSize(screenColumn);}else{screenColumn+=fm.getCharacterWidth(c);}if(screenColumn>maxScreenColumn){break;}}return[screenColumn,column];};};this.destroy=function(){if(this.bgTokenizer){this.bgTokenizer.setDocument(null);this.bgTokenizer=null;}this.$stopWorker();};function isFullWidth(c){if(c<0x1100)return false;return c>=0x1100&&c<=0x115F||c>=0x11A3&&c<=0x11A7||c>=0x11FA&&c<=0x11FF||c>=0x2329&&c<=0x232A||c>=0x2E80&&c<=0x2E99||c>=0x2E9B&&c<=0x2EF3||c>=0x2F00&&c<=0x2FD5||c>=0x2FF0&&c<=0x2FFB||c>=0x3000&&c<=0x303E||c>=0x3041&&c<=0x3096||c>=0x3099&&c<=0x30FF||c>=0x3105&&c<=0x312D||c>=0x3131&&c<=0x318E||c>=0x3190&&c<=0x31BA||c>=0x31C0&&c<=0x31E3||c>=0x31F0&&c<=0x321E||c>=0x3220&&c<=0x3247||c>=0x3250&&c<=0x32FE||c>=0x3300&&c<=0x4DBF||c>=0x4E00&&c<=0xA48C||c>=0xA490&&c<=0xA4C6||c>=0xA960&&c<=0xA97C||c>=0xAC00&&c<=0xD7A3||c>=0xD7B0&&c<=0xD7C6||c>=0xD7CB&&c<=0xD7FB||c>=0xF900&&c<=0xFAFF||c>=0xFE10&&c<=0xFE19||c>=0xFE30&&c<=0xFE52||c>=0xFE54&&c<=0xFE66||c>=0xFE68&&c<=0xFE6B||c>=0xFF01&&c<=0xFF60||c>=0xFFE0&&c<=0xFFE6;}}).call(EditSession.prototype);acequire("./edit_session/folding").Folding.call(EditSession.prototype);acequire("./edit_session/bracket_match").BracketMatch.call(EditSession.prototype);config.defineOptions(EditSession.prototype,"session",{wrap:{set:function set(value){if(!value||value=="off")value=false;else if(value=="free")value=true;else if(value=="printMargin")value=-1;else if(typeof value=="string")value=parseInt(value,10)||false;if(this.$wrap==value)return;this.$wrap=value;if(!value){this.setUseWrapMode(false);}else{var col=typeof value=="number"?value:null;this.setWrapLimitRange(col,col);this.setUseWrapMode(true);}},get:function get(){if(this.getUseWrapMode()){if(this.$wrap==-1)return"printMargin";if(!this.getWrapLimitRange().min)return"free";return this.$wrap;}return"off";},handlesSet:true},wrapMethod:{set:function set(val){val=val=="auto"?this.$mode.type!="text":val!="text";if(val!=this.$wrapAsCode){this.$wrapAsCode=val;if(this.$useWrapMode){this.$modified=true;this.$resetRowCache(0);this.$updateWrapData(0,this.getLength()-1);}}},initialValue:"auto"},indentedSoftWrap:{initialValue:true},firstLineNumber:{set:function set(){this._signal("changeBreakpoint");},initialValue:1},useWorker:{set:function set(useWorker){this.$useWorker=useWorker;this.$stopWorker();if(useWorker)this.$startWorker();},initialValue:true},useSoftTabs:{initialValue:true},tabSize:{set:function set(tabSize){if(isNaN(tabSize)||this.$tabSize===tabSize)return;this.$modified=true;this.$rowLengthCache=[];this.$tabSize=tabSize;this._signal("changeTabSize");},initialValue:4,handlesSet:true},overwrite:{set:function set(val){this._signal("changeOverwrite");},initialValue:false},newLineMode:{set:function set(val){this.doc.setNewLineMode(val);},get:function get(){return this.doc.getNewLineMode();},handlesSet:true},mode:{set:function set(val){this.setMode(val);},get:function get(){return this.$modeId;}}});exports.EditSession=EditSession;});ace.define("ace/search",["require","exports","module","ace/lib/lang","ace/lib/oop","ace/range"],function(acequire,exports,module){"use strict";var lang=acequire("./lib/lang");var oop=acequire("./lib/oop");var Range=acequire("./range").Range;var Search=function Search(){this.$options={};};(function(){this.set=function(options){oop.mixin(this.$options,options);return this;};this.getOptions=function(){return lang.copyObject(this.$options);};this.setOptions=function(options){this.$options=options;};this.find=function(session){var options=this.$options;var iterator=this.$matchIterator(session,options);if(!iterator)return false;var firstRange=null;iterator.forEach(function(range,row,offset){if(!range.start){var column=range.offset+(offset||0);firstRange=new Range(row,column,row,column+range.length);if(!range.length&&options.start&&options.start.start&&options.skipCurrent!=false&&firstRange.isEqual(options.start)){firstRange=null;return false;}}else firstRange=range;return true;});return firstRange;};this.findAll=function(session){var options=this.$options;if(!options.needle)return[];this.$assembleRegExp(options);var range=options.range;var lines=range?session.getLines(range.start.row,range.end.row):session.doc.getAllLines();var ranges=[];var re=options.re;if(options.$isMultiLine){var len=re.length;var maxRow=lines.length-len;var prevRange;outer:for(var row=re.offset||0;row<=maxRow;row++){for(var j=0;j<len;j++){if(lines[row+j].search(re[j])==-1)continue outer;}var startLine=lines[row];var line=lines[row+len-1];var startIndex=startLine.length-startLine.match(re[0])[0].length;var endIndex=line.match(re[len-1])[0].length;if(prevRange&&prevRange.end.row===row&&prevRange.end.column>startIndex){continue;}ranges.push(prevRange=new Range(row,startIndex,row+len-1,endIndex));if(len>2)row=row+len-2;}}else{for(var i=0;i<lines.length;i++){var matches=lang.getMatchOffsets(lines[i],re);for(var j=0;j<matches.length;j++){var match=matches[j];ranges.push(new Range(i,match.offset,i,match.offset+match.length));}}}if(range){var startColumn=range.start.column;var endColumn=range.start.column;var i=0,j=ranges.length-1;while(i<j&&ranges[i].start.column<startColumn&&ranges[i].start.row==range.start.row){i++;}while(i<j&&ranges[j].end.column>endColumn&&ranges[j].end.row==range.end.row){j--;}ranges=ranges.slice(i,j+1);for(i=0,j=ranges.length;i<j;i++){ranges[i].start.row+=range.start.row;ranges[i].end.row+=range.start.row;}}return ranges;};this.replace=function(input,replacement){var options=this.$options;var re=this.$assembleRegExp(options);if(options.$isMultiLine)return replacement;if(!re)return;var match=re.exec(input);if(!match||match[0].length!=input.length)return null;replacement=input.replace(re,replacement);if(options.preserveCase){replacement=replacement.split("");for(var i=Math.min(input.length,input.length);i--;){var ch=input[i];if(ch&&ch.toLowerCase()!=ch)replacement[i]=replacement[i].toUpperCase();else replacement[i]=replacement[i].toLowerCase();}replacement=replacement.join("");}return replacement;};this.$matchIterator=function(session,options){var re=this.$assembleRegExp(options);if(!re)return false;var callback;if(options.$isMultiLine){var len=re.length;var matchIterator=function matchIterator(line,row,offset){var startIndex=line.search(re[0]);if(startIndex==-1)return;for(var i=1;i<len;i++){line=session.getLine(row+i);if(line.search(re[i])==-1)return;}var endIndex=line.match(re[len-1])[0].length;var range=new Range(row,startIndex,row+len-1,endIndex);if(re.offset==1){range.start.row--;range.start.column=Number.MAX_VALUE;}else if(offset)range.start.column+=offset;if(callback(range))return true;};}else if(options.backwards){var matchIterator=function matchIterator(line,row,startIndex){var matches=lang.getMatchOffsets(line,re);for(var i=matches.length-1;i>=0;i--){if(callback(matches[i],row,startIndex))return true;}};}else{var matchIterator=function matchIterator(line,row,startIndex){var matches=lang.getMatchOffsets(line,re);for(var i=0;i<matches.length;i++){if(callback(matches[i],row,startIndex))return true;}};}var lineIterator=this.$lineIterator(session,options);return{forEach:function forEach(_callback){callback=_callback;lineIterator.forEach(matchIterator);}};};this.$assembleRegExp=function(options,$disableFakeMultiline){if(options.needle instanceof RegExp)return options.re=options.needle;var needle=options.needle;if(!options.needle)return options.re=false;if(!options.regExp)needle=lang.escapeRegExp(needle);if(options.wholeWord)needle=addWordBoundary(needle,options);var modifier=options.caseSensitive?"gm":"gmi";options.$isMultiLine=!$disableFakeMultiline&&/[\n\r]/.test(needle);if(options.$isMultiLine)return options.re=this.$assembleMultilineRegExp(needle,modifier);try{var re=new RegExp(needle,modifier);}catch(e){re=false;}return options.re=re;};this.$assembleMultilineRegExp=function(needle,modifier){var parts=needle.replace(/\r\n|\r|\n/g,"$\n^").split("\n");var re=[];for(var i=0;i<parts.length;i++){try{re.push(new RegExp(parts[i],modifier));}catch(e){return false;}}if(parts[0]==""){re.shift();re.offset=1;}else{re.offset=0;}return re;};this.$lineIterator=function(session,options){var backwards=options.backwards==true;var skipCurrent=options.skipCurrent!=false;var range=options.range;var start=options.start;if(!start)start=range?range[backwards?"end":"start"]:session.selection.getRange();if(start.start)start=start[skipCurrent!=backwards?"end":"start"];var firstRow=range?range.start.row:0;var lastRow=range?range.end.row:session.getLength()-1;var forEach=backwards?function(callback){var row=start.row;var line=session.getLine(row).substring(0,start.column);if(callback(line,row))return;for(row--;row>=firstRow;row--){if(callback(session.getLine(row),row))return;}if(options.wrap==false)return;for(row=lastRow,firstRow=start.row;row>=firstRow;row--){if(callback(session.getLine(row),row))return;}}:function(callback){var row=start.row;var line=session.getLine(row).substr(start.column);if(callback(line,row,start.column))return;for(row=row+1;row<=lastRow;row++){if(callback(session.getLine(row),row))return;}if(options.wrap==false)return;for(row=firstRow,lastRow=start.row;row<=lastRow;row++){if(callback(session.getLine(row),row))return;}};return{forEach:forEach};};}).call(Search.prototype);function addWordBoundary(needle,options){function wordBoundary(c){if(/\w/.test(c)||options.regExp)return"\\b";return"";}return wordBoundary(needle[0])+needle+wordBoundary(needle[needle.length-1]);}exports.Search=Search;});ace.define("ace/keyboard/hash_handler",["require","exports","module","ace/lib/keys","ace/lib/useragent"],function(acequire,exports,module){"use strict";var keyUtil=acequire("../lib/keys");var useragent=acequire("../lib/useragent");var KEY_MODS=keyUtil.KEY_MODS;function HashHandler(config,platform){this.platform=platform||(useragent.isMac?"mac":"win");this.commands={};this.commandKeyBinding={};this.addCommands(config);this.$singleCommand=true;}function MultiHashHandler(config,platform){HashHandler.call(this,config,platform);this.$singleCommand=false;}MultiHashHandler.prototype=HashHandler.prototype;(function(){this.addCommand=function(command){if(this.commands[command.name])this.removeCommand(command);this.commands[command.name]=command;if(command.bindKey)this._buildKeyHash(command);};this.removeCommand=function(command,keepCommand){var name=command&&(typeof command==='string'?command:command.name);command=this.commands[name];if(!keepCommand)delete this.commands[name];var ckb=this.commandKeyBinding;for(var keyId in ckb){var cmdGroup=ckb[keyId];if(cmdGroup==command){delete ckb[keyId];}else if(Array.isArray(cmdGroup)){var i=cmdGroup.indexOf(command);if(i!=-1){cmdGroup.splice(i,1);if(cmdGroup.length==1)ckb[keyId]=cmdGroup[0];}}}};this.bindKey=function(key,command,position){if((typeof key==="undefined"?"undefined":_typeof(key))=="object"&&key){if(position==undefined)position=key.position;key=key[this.platform];}if(!key)return;if(typeof command=="function")return this.addCommand({exec:command,bindKey:key,name:command.name||key});key.split("|").forEach(function(keyPart){var chain="";if(keyPart.indexOf(" ")!=-1){var parts=keyPart.split(/\s+/);keyPart=parts.pop();parts.forEach(function(keyPart){var binding=this.parseKeys(keyPart);var id=KEY_MODS[binding.hashId]+binding.key;chain+=(chain?" ":"")+id;this._addCommandToBinding(chain,"chainKeys");},this);chain+=" ";}var binding=this.parseKeys(keyPart);var id=KEY_MODS[binding.hashId]+binding.key;this._addCommandToBinding(chain+id,command,position);},this);};function getPosition(command){return(typeof command==="undefined"?"undefined":_typeof(command))=="object"&&command.bindKey&&command.bindKey.position||0;}this._addCommandToBinding=function(keyId,command,position){var ckb=this.commandKeyBinding,i;if(!command){delete ckb[keyId];}else if(!ckb[keyId]||this.$singleCommand){ckb[keyId]=command;}else{if(!Array.isArray(ckb[keyId])){ckb[keyId]=[ckb[keyId]];}else if((i=ckb[keyId].indexOf(command))!=-1){ckb[keyId].splice(i,1);}if(typeof position!="number"){if(position||command.isDefault)position=-100;else position=getPosition(command);}var commands=ckb[keyId];for(i=0;i<commands.length;i++){var other=commands[i];var otherPos=getPosition(other);if(otherPos>position)break;}commands.splice(i,0,command);}};this.addCommands=function(commands){commands&&Object.keys(commands).forEach(function(name){var command=commands[name];if(!command)return;if(typeof command==="string")return this.bindKey(command,name);if(typeof command==="function")command={exec:command};if((typeof command==="undefined"?"undefined":_typeof(command))!=="object")return;if(!command.name)command.name=name;this.addCommand(command);},this);};this.removeCommands=function(commands){Object.keys(commands).forEach(function(name){this.removeCommand(commands[name]);},this);};this.bindKeys=function(keyList){Object.keys(keyList).forEach(function(key){this.bindKey(key,keyList[key]);},this);};this._buildKeyHash=function(command){this.bindKey(command.bindKey,command);};this.parseKeys=function(keys){var parts=keys.toLowerCase().split(/[\-\+]([\-\+])?/).filter(function(x){return x;});var key=parts.pop();var keyCode=keyUtil[key];if(keyUtil.FUNCTION_KEYS[keyCode])key=keyUtil.FUNCTION_KEYS[keyCode].toLowerCase();else if(!parts.length)return{key:key,hashId:-1};else if(parts.length==1&&parts[0]=="shift")return{key:key.toUpperCase(),hashId:-1};var hashId=0;for(var i=parts.length;i--;){var modifier=keyUtil.KEY_MODS[parts[i]];if(modifier==null){if(typeof console!="undefined")console.error("invalid modifier "+parts[i]+" in "+keys);return false;}hashId|=modifier;}return{key:key,hashId:hashId};};this.findKeyCommand=function findKeyCommand(hashId,keyString){var key=KEY_MODS[hashId]+keyString;return this.commandKeyBinding[key];};this.handleKeyboard=function(data,hashId,keyString,keyCode){if(keyCode<0)return;var key=KEY_MODS[hashId]+keyString;var command=this.commandKeyBinding[key];if(data.$keyChain){data.$keyChain+=" "+key;command=this.commandKeyBinding[data.$keyChain]||command;}if(command){if(command=="chainKeys"||command[command.length-1]=="chainKeys"){data.$keyChain=data.$keyChain||key;return{command:"null"};}}if(data.$keyChain){if((!hashId||hashId==4)&&keyString.length==1)data.$keyChain=data.$keyChain.slice(0,-key.length-1);// wait for input
else if(hashId==-1||keyCode>0)data.$keyChain="";// reset keyChain
}return{command:command};};this.getStatusText=function(editor,data){return data.$keyChain||"";};}).call(HashHandler.prototype);exports.HashHandler=HashHandler;exports.MultiHashHandler=MultiHashHandler;});ace.define("ace/commands/command_manager",["require","exports","module","ace/lib/oop","ace/keyboard/hash_handler","ace/lib/event_emitter"],function(acequire,exports,module){"use strict";var oop=acequire("../lib/oop");var MultiHashHandler=acequire("../keyboard/hash_handler").MultiHashHandler;var EventEmitter=acequire("../lib/event_emitter").EventEmitter;var CommandManager=function CommandManager(platform,commands){MultiHashHandler.call(this,commands,platform);this.byName=this.commands;this.setDefaultHandler("exec",function(e){return e.command.exec(e.editor,e.args||{});});};oop.inherits(CommandManager,MultiHashHandler);(function(){oop.implement(this,EventEmitter);this.exec=function(command,editor,args){if(Array.isArray(command)){for(var i=command.length;i--;){if(this.exec(command[i],editor,args))return true;}return false;}if(typeof command==="string")command=this.commands[command];if(!command)return false;if(editor&&editor.$readOnly&&!command.readOnly)return false;var e={editor:editor,command:command,args:args};e.returnValue=this._emit("exec",e);this._signal("afterExec",e);return e.returnValue===false?false:true;};this.toggleRecording=function(editor){if(this.$inReplay)return;editor&&editor._emit("changeStatus");if(this.recording){this.macro.pop();this.removeEventListener("exec",this.$addCommandToMacro);if(!this.macro.length)this.macro=this.oldMacro;return this.recording=false;}if(!this.$addCommandToMacro){this.$addCommandToMacro=function(e){this.macro.push([e.command,e.args]);}.bind(this);}this.oldMacro=this.macro;this.macro=[];this.on("exec",this.$addCommandToMacro);return this.recording=true;};this.replay=function(editor){if(this.$inReplay||!this.macro)return;if(this.recording)return this.toggleRecording(editor);try{this.$inReplay=true;this.macro.forEach(function(x){if(typeof x=="string")this.exec(x,editor);else this.exec(x[0],editor,x[1]);},this);}finally{this.$inReplay=false;}};this.trimMacro=function(m){return m.map(function(x){if(typeof x[0]!="string")x[0]=x[0].name;if(!x[1])x=x[0];return x;});};}).call(CommandManager.prototype);exports.CommandManager=CommandManager;});ace.define("ace/commands/default_commands",["require","exports","module","ace/lib/lang","ace/config","ace/range"],function(acequire,exports,module){"use strict";var lang=acequire("../lib/lang");var config=acequire("../config");var Range=acequire("../range").Range;function bindKey(win,mac){return{win:win,mac:mac};}exports.commands=[{name:"showSettingsMenu",bindKey:bindKey("Ctrl-,","Command-,"),exec:function exec(editor){config.loadModule("ace/ext/settings_menu",function(module){module.init(editor);editor.showSettingsMenu();});},readOnly:true},{name:"goToNextError",bindKey:bindKey("Alt-E","F4"),exec:function exec(editor){config.loadModule("ace/ext/error_marker",function(module){module.showErrorMarker(editor,1);});},scrollIntoView:"animate",readOnly:true},{name:"goToPreviousError",bindKey:bindKey("Alt-Shift-E","Shift-F4"),exec:function exec(editor){config.loadModule("ace/ext/error_marker",function(module){module.showErrorMarker(editor,-1);});},scrollIntoView:"animate",readOnly:true},{name:"selectall",bindKey:bindKey("Ctrl-A","Command-A"),exec:function exec(editor){editor.selectAll();},readOnly:true},{name:"centerselection",bindKey:bindKey(null,"Ctrl-L"),exec:function exec(editor){editor.centerSelection();},readOnly:true},{name:"gotoline",bindKey:bindKey("Ctrl-L","Command-L"),exec:function exec(editor){var line=parseInt(prompt("Enter line number:"),10);if(!isNaN(line)){editor.gotoLine(line);}},readOnly:true},{name:"fold",bindKey:bindKey("Alt-L|Ctrl-F1","Command-Alt-L|Command-F1"),exec:function exec(editor){editor.session.toggleFold(false);},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:true},{name:"unfold",bindKey:bindKey("Alt-Shift-L|Ctrl-Shift-F1","Command-Alt-Shift-L|Command-Shift-F1"),exec:function exec(editor){editor.session.toggleFold(true);},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:true},{name:"toggleFoldWidget",bindKey:bindKey("F2","F2"),exec:function exec(editor){editor.session.toggleFoldWidget();},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:true},{name:"toggleParentFoldWidget",bindKey:bindKey("Alt-F2","Alt-F2"),exec:function exec(editor){editor.session.toggleFoldWidget(true);},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:true},{name:"foldall",bindKey:bindKey(null,"Ctrl-Command-Option-0"),exec:function exec(editor){editor.session.foldAll();},scrollIntoView:"center",readOnly:true},{name:"foldOther",bindKey:bindKey("Alt-0","Command-Option-0"),exec:function exec(editor){editor.session.foldAll();editor.session.unfold(editor.selection.getAllRanges());},scrollIntoView:"center",readOnly:true},{name:"unfoldall",bindKey:bindKey("Alt-Shift-0","Command-Option-Shift-0"),exec:function exec(editor){editor.session.unfold();},scrollIntoView:"center",readOnly:true},{name:"findnext",bindKey:bindKey("Ctrl-K","Command-G"),exec:function exec(editor){editor.findNext();},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:true},{name:"findprevious",bindKey:bindKey("Ctrl-Shift-K","Command-Shift-G"),exec:function exec(editor){editor.findPrevious();},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:true},{name:"selectOrFindNext",bindKey:bindKey("Alt-K","Ctrl-G"),exec:function exec(editor){if(editor.selection.isEmpty())editor.selection.selectWord();else editor.findNext();},readOnly:true},{name:"selectOrFindPrevious",bindKey:bindKey("Alt-Shift-K","Ctrl-Shift-G"),exec:function exec(editor){if(editor.selection.isEmpty())editor.selection.selectWord();else editor.findPrevious();},readOnly:true},{name:"find",bindKey:bindKey("Ctrl-F","Command-F"),exec:function exec(editor){config.loadModule("ace/ext/searchbox",function(e){e.Search(editor);});},readOnly:true},{name:"overwrite",bindKey:"Insert",exec:function exec(editor){editor.toggleOverwrite();},readOnly:true},{name:"selecttostart",bindKey:bindKey("Ctrl-Shift-Home","Command-Shift-Home|Command-Shift-Up"),exec:function exec(editor){editor.getSelection().selectFileStart();},multiSelectAction:"forEach",readOnly:true,scrollIntoView:"animate",aceCommandGroup:"fileJump"},{name:"gotostart",bindKey:bindKey("Ctrl-Home","Command-Home|Command-Up"),exec:function exec(editor){editor.navigateFileStart();},multiSelectAction:"forEach",readOnly:true,scrollIntoView:"animate",aceCommandGroup:"fileJump"},{name:"selectup",bindKey:bindKey("Shift-Up","Shift-Up|Ctrl-Shift-P"),exec:function exec(editor){editor.getSelection().selectUp();},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:true},{name:"golineup",bindKey:bindKey("Up","Up|Ctrl-P"),exec:function exec(editor,args){editor.navigateUp(args.times);},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:true},{name:"selecttoend",bindKey:bindKey("Ctrl-Shift-End","Command-Shift-End|Command-Shift-Down"),exec:function exec(editor){editor.getSelection().selectFileEnd();},multiSelectAction:"forEach",readOnly:true,scrollIntoView:"animate",aceCommandGroup:"fileJump"},{name:"gotoend",bindKey:bindKey("Ctrl-End","Command-End|Command-Down"),exec:function exec(editor){editor.navigateFileEnd();},multiSelectAction:"forEach",readOnly:true,scrollIntoView:"animate",aceCommandGroup:"fileJump"},{name:"selectdown",bindKey:bindKey("Shift-Down","Shift-Down|Ctrl-Shift-N"),exec:function exec(editor){editor.getSelection().selectDown();},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:true},{name:"golinedown",bindKey:bindKey("Down","Down|Ctrl-N"),exec:function exec(editor,args){editor.navigateDown(args.times);},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:true},{name:"selectwordleft",bindKey:bindKey("Ctrl-Shift-Left","Option-Shift-Left"),exec:function exec(editor){editor.getSelection().selectWordLeft();},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:true},{name:"gotowordleft",bindKey:bindKey("Ctrl-Left","Option-Left"),exec:function exec(editor){editor.navigateWordLeft();},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:true},{name:"selecttolinestart",bindKey:bindKey("Alt-Shift-Left","Command-Shift-Left|Ctrl-Shift-A"),exec:function exec(editor){editor.getSelection().selectLineStart();},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:true},{name:"gotolinestart",bindKey:bindKey("Alt-Left|Home","Command-Left|Home|Ctrl-A"),exec:function exec(editor){editor.navigateLineStart();},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:true},{name:"selectleft",bindKey:bindKey("Shift-Left","Shift-Left|Ctrl-Shift-B"),exec:function exec(editor){editor.getSelection().selectLeft();},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:true},{name:"gotoleft",bindKey:bindKey("Left","Left|Ctrl-B"),exec:function exec(editor,args){editor.navigateLeft(args.times);},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:true},{name:"selectwordright",bindKey:bindKey("Ctrl-Shift-Right","Option-Shift-Right"),exec:function exec(editor){editor.getSelection().selectWordRight();},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:true},{name:"gotowordright",bindKey:bindKey("Ctrl-Right","Option-Right"),exec:function exec(editor){editor.navigateWordRight();},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:true},{name:"selecttolineend",bindKey:bindKey("Alt-Shift-Right","Command-Shift-Right|Shift-End|Ctrl-Shift-E"),exec:function exec(editor){editor.getSelection().selectLineEnd();},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:true},{name:"gotolineend",bindKey:bindKey("Alt-Right|End","Command-Right|End|Ctrl-E"),exec:function exec(editor){editor.navigateLineEnd();},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:true},{name:"selectright",bindKey:bindKey("Shift-Right","Shift-Right"),exec:function exec(editor){editor.getSelection().selectRight();},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:true},{name:"gotoright",bindKey:bindKey("Right","Right|Ctrl-F"),exec:function exec(editor,args){editor.navigateRight(args.times);},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:true},{name:"selectpagedown",bindKey:"Shift-PageDown",exec:function exec(editor){editor.selectPageDown();},readOnly:true},{name:"pagedown",bindKey:bindKey(null,"Option-PageDown"),exec:function exec(editor){editor.scrollPageDown();},readOnly:true},{name:"gotopagedown",bindKey:bindKey("PageDown","PageDown|Ctrl-V"),exec:function exec(editor){editor.gotoPageDown();},readOnly:true},{name:"selectpageup",bindKey:"Shift-PageUp",exec:function exec(editor){editor.selectPageUp();},readOnly:true},{name:"pageup",bindKey:bindKey(null,"Option-PageUp"),exec:function exec(editor){editor.scrollPageUp();},readOnly:true},{name:"gotopageup",bindKey:"PageUp",exec:function exec(editor){editor.gotoPageUp();},readOnly:true},{name:"scrollup",bindKey:bindKey("Ctrl-Up",null),exec:function exec(e){e.renderer.scrollBy(0,-2*e.renderer.layerConfig.lineHeight);},readOnly:true},{name:"scrolldown",bindKey:bindKey("Ctrl-Down",null),exec:function exec(e){e.renderer.scrollBy(0,2*e.renderer.layerConfig.lineHeight);},readOnly:true},{name:"selectlinestart",bindKey:"Shift-Home",exec:function exec(editor){editor.getSelection().selectLineStart();},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:true},{name:"selectlineend",bindKey:"Shift-End",exec:function exec(editor){editor.getSelection().selectLineEnd();},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:true},{name:"togglerecording",bindKey:bindKey("Ctrl-Alt-E","Command-Option-E"),exec:function exec(editor){editor.commands.toggleRecording(editor);},readOnly:true},{name:"replaymacro",bindKey:bindKey("Ctrl-Shift-E","Command-Shift-E"),exec:function exec(editor){editor.commands.replay(editor);},readOnly:true},{name:"jumptomatching",bindKey:bindKey("Ctrl-P","Ctrl-P"),exec:function exec(editor){editor.jumpToMatching();},multiSelectAction:"forEach",scrollIntoView:"animate",readOnly:true},{name:"selecttomatching",bindKey:bindKey("Ctrl-Shift-P","Ctrl-Shift-P"),exec:function exec(editor){editor.jumpToMatching(true);},multiSelectAction:"forEach",scrollIntoView:"animate",readOnly:true},{name:"expandToMatching",bindKey:bindKey("Ctrl-Shift-M","Ctrl-Shift-M"),exec:function exec(editor){editor.jumpToMatching(true,true);},multiSelectAction:"forEach",scrollIntoView:"animate",readOnly:true},{name:"passKeysToBrowser",bindKey:bindKey(null,null),exec:function exec(){},passEvent:true,readOnly:true},{name:"copy",exec:function exec(editor){},readOnly:true},{name:"cut",exec:function exec(editor){var range=editor.getSelectionRange();editor._emit("cut",range);if(!editor.selection.isEmpty()){editor.session.remove(range);editor.clearSelection();}},scrollIntoView:"cursor",multiSelectAction:"forEach"},{name:"paste",exec:function exec(editor,args){editor.$handlePaste(args);},scrollIntoView:"cursor"},{name:"removeline",bindKey:bindKey("Ctrl-D","Command-D"),exec:function exec(editor){editor.removeLines();},scrollIntoView:"cursor",multiSelectAction:"forEachLine"},{name:"duplicateSelection",bindKey:bindKey("Ctrl-Shift-D","Command-Shift-D"),exec:function exec(editor){editor.duplicateSelection();},scrollIntoView:"cursor",multiSelectAction:"forEach"},{name:"sortlines",bindKey:bindKey("Ctrl-Alt-S","Command-Alt-S"),exec:function exec(editor){editor.sortLines();},scrollIntoView:"selection",multiSelectAction:"forEachLine"},{name:"togglecomment",bindKey:bindKey("Ctrl-/","Command-/"),exec:function exec(editor){editor.toggleCommentLines();},multiSelectAction:"forEachLine",scrollIntoView:"selectionPart"},{name:"toggleBlockComment",bindKey:bindKey("Ctrl-Shift-/","Command-Shift-/"),exec:function exec(editor){editor.toggleBlockComment();},multiSelectAction:"forEach",scrollIntoView:"selectionPart"},{name:"modifyNumberUp",bindKey:bindKey("Ctrl-Shift-Up","Alt-Shift-Up"),exec:function exec(editor){editor.modifyNumber(1);},scrollIntoView:"cursor",multiSelectAction:"forEach"},{name:"modifyNumberDown",bindKey:bindKey("Ctrl-Shift-Down","Alt-Shift-Down"),exec:function exec(editor){editor.modifyNumber(-1);},scrollIntoView:"cursor",multiSelectAction:"forEach"},{name:"replace",bindKey:bindKey("Ctrl-H","Command-Option-F"),exec:function exec(editor){config.loadModule("ace/ext/searchbox",function(e){e.Search(editor,true);});}},{name:"undo",bindKey:bindKey("Ctrl-Z","Command-Z"),exec:function exec(editor){editor.undo();}},{name:"redo",bindKey:bindKey("Ctrl-Shift-Z|Ctrl-Y","Command-Shift-Z|Command-Y"),exec:function exec(editor){editor.redo();}},{name:"copylinesup",bindKey:bindKey("Alt-Shift-Up","Command-Option-Up"),exec:function exec(editor){editor.copyLinesUp();},scrollIntoView:"cursor"},{name:"movelinesup",bindKey:bindKey("Alt-Up","Option-Up"),exec:function exec(editor){editor.moveLinesUp();},scrollIntoView:"cursor"},{name:"copylinesdown",bindKey:bindKey("Alt-Shift-Down","Command-Option-Down"),exec:function exec(editor){editor.copyLinesDown();},scrollIntoView:"cursor"},{name:"movelinesdown",bindKey:bindKey("Alt-Down","Option-Down"),exec:function exec(editor){editor.moveLinesDown();},scrollIntoView:"cursor"},{name:"del",bindKey:bindKey("Delete","Delete|Ctrl-D|Shift-Delete"),exec:function exec(editor){editor.remove("right");},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"backspace",bindKey:bindKey("Shift-Backspace|Backspace","Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"),exec:function exec(editor){editor.remove("left");},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"cut_or_delete",bindKey:bindKey("Shift-Delete",null),exec:function exec(editor){if(editor.selection.isEmpty()){editor.remove("left");}else{return false;}},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removetolinestart",bindKey:bindKey("Alt-Backspace","Command-Backspace"),exec:function exec(editor){editor.removeToLineStart();},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removetolineend",bindKey:bindKey("Alt-Delete","Ctrl-K"),exec:function exec(editor){editor.removeToLineEnd();},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removewordleft",bindKey:bindKey("Ctrl-Backspace","Alt-Backspace|Ctrl-Alt-Backspace"),exec:function exec(editor){editor.removeWordLeft();},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removewordright",bindKey:bindKey("Ctrl-Delete","Alt-Delete"),exec:function exec(editor){editor.removeWordRight();},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"outdent",bindKey:bindKey("Shift-Tab","Shift-Tab"),exec:function exec(editor){editor.blockOutdent();},multiSelectAction:"forEach",scrollIntoView:"selectionPart"},{name:"indent",bindKey:bindKey("Tab","Tab"),exec:function exec(editor){editor.indent();},multiSelectAction:"forEach",scrollIntoView:"selectionPart"},{name:"blockoutdent",bindKey:bindKey("Ctrl-[","Ctrl-["),exec:function exec(editor){editor.blockOutdent();},multiSelectAction:"forEachLine",scrollIntoView:"selectionPart"},{name:"blockindent",bindKey:bindKey("Ctrl-]","Ctrl-]"),exec:function exec(editor){editor.blockIndent();},multiSelectAction:"forEachLine",scrollIntoView:"selectionPart"},{name:"insertstring",exec:function exec(editor,str){editor.insert(str);},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"inserttext",exec:function exec(editor,args){editor.insert(lang.stringRepeat(args.text||"",args.times||1));},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"splitline",bindKey:bindKey(null,"Ctrl-O"),exec:function exec(editor){editor.splitLine();},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"transposeletters",bindKey:bindKey("Ctrl-T","Ctrl-T"),exec:function exec(editor){editor.transposeLetters();},multiSelectAction:function multiSelectAction(editor){editor.transposeSelections(1);},scrollIntoView:"cursor"},{name:"touppercase",bindKey:bindKey("Ctrl-U","Ctrl-U"),exec:function exec(editor){editor.toUpperCase();},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"tolowercase",bindKey:bindKey("Ctrl-Shift-U","Ctrl-Shift-U"),exec:function exec(editor){editor.toLowerCase();},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"expandtoline",bindKey:bindKey("Ctrl-Shift-L","Command-Shift-L"),exec:function exec(editor){var range=editor.selection.getRange();range.start.column=range.end.column=0;range.end.row++;editor.selection.setRange(range,false);},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:true},{name:"joinlines",bindKey:bindKey(null,null),exec:function exec(editor){var isBackwards=editor.selection.isBackwards();var selectionStart=isBackwards?editor.selection.getSelectionLead():editor.selection.getSelectionAnchor();var selectionEnd=isBackwards?editor.selection.getSelectionAnchor():editor.selection.getSelectionLead();var firstLineEndCol=editor.session.doc.getLine(selectionStart.row).length;var selectedText=editor.session.doc.getTextRange(editor.selection.getRange());var selectedCount=selectedText.replace(/\n\s*/," ").length;var insertLine=editor.session.doc.getLine(selectionStart.row);for(var i=selectionStart.row+1;i<=selectionEnd.row+1;i++){var curLine=lang.stringTrimLeft(lang.stringTrimRight(editor.session.doc.getLine(i)));if(curLine.length!==0){curLine=" "+curLine;}insertLine+=curLine;}if(selectionEnd.row+1<editor.session.doc.getLength()-1){insertLine+=editor.session.doc.getNewLineCharacter();}editor.clearSelection();editor.session.doc.replace(new Range(selectionStart.row,0,selectionEnd.row+2,0),insertLine);if(selectedCount>0){editor.selection.moveCursorTo(selectionStart.row,selectionStart.column);editor.selection.selectTo(selectionStart.row,selectionStart.column+selectedCount);}else{firstLineEndCol=editor.session.doc.getLine(selectionStart.row).length>firstLineEndCol?firstLineEndCol+1:firstLineEndCol;editor.selection.moveCursorTo(selectionStart.row,firstLineEndCol);}},multiSelectAction:"forEach",readOnly:true},{name:"invertSelection",bindKey:bindKey(null,null),exec:function exec(editor){var endRow=editor.session.doc.getLength()-1;var endCol=editor.session.doc.getLine(endRow).length;var ranges=editor.selection.rangeList.ranges;var newRanges=[];if(ranges.length<1){ranges=[editor.selection.getRange()];}for(var i=0;i<ranges.length;i++){if(i==ranges.length-1){if(!(ranges[i].end.row===endRow&&ranges[i].end.column===endCol)){newRanges.push(new Range(ranges[i].end.row,ranges[i].end.column,endRow,endCol));}}if(i===0){if(!(ranges[i].start.row===0&&ranges[i].start.column===0)){newRanges.push(new Range(0,0,ranges[i].start.row,ranges[i].start.column));}}else{newRanges.push(new Range(ranges[i-1].end.row,ranges[i-1].end.column,ranges[i].start.row,ranges[i].start.column));}}editor.exitMultiSelectMode();editor.clearSelection();for(var i=0;i<newRanges.length;i++){editor.selection.addRange(newRanges[i],false);}},readOnly:true,scrollIntoView:"none"}];});ace.define("ace/editor",["require","exports","module","ace/lib/fixoldbrowsers","ace/lib/oop","ace/lib/dom","ace/lib/lang","ace/lib/useragent","ace/keyboard/textinput","ace/mouse/mouse_handler","ace/mouse/fold_handler","ace/keyboard/keybinding","ace/edit_session","ace/search","ace/range","ace/lib/event_emitter","ace/commands/command_manager","ace/commands/default_commands","ace/config","ace/token_iterator"],function(acequire,exports,module){"use strict";acequire("./lib/fixoldbrowsers");var oop=acequire("./lib/oop");var dom=acequire("./lib/dom");var lang=acequire("./lib/lang");var useragent=acequire("./lib/useragent");var TextInput=acequire("./keyboard/textinput").TextInput;var MouseHandler=acequire("./mouse/mouse_handler").MouseHandler;var FoldHandler=acequire("./mouse/fold_handler").FoldHandler;var KeyBinding=acequire("./keyboard/keybinding").KeyBinding;var EditSession=acequire("./edit_session").EditSession;var Search=acequire("./search").Search;var Range=acequire("./range").Range;var EventEmitter=acequire("./lib/event_emitter").EventEmitter;var CommandManager=acequire("./commands/command_manager").CommandManager;var defaultCommands=acequire("./commands/default_commands").commands;var config=acequire("./config");var TokenIterator=acequire("./token_iterator").TokenIterator;var Editor=function Editor(renderer,session){var container=renderer.getContainerElement();this.container=container;this.renderer=renderer;this.commands=new CommandManager(useragent.isMac?"mac":"win",defaultCommands);this.textInput=new TextInput(renderer.getTextAreaContainer(),this);this.renderer.textarea=this.textInput.getElement();this.keyBinding=new KeyBinding(this);this.$mouseHandler=new MouseHandler(this);new FoldHandler(this);this.$blockScrolling=0;this.$search=new Search().set({wrap:true});this.$historyTracker=this.$historyTracker.bind(this);this.commands.on("exec",this.$historyTracker);this.$initOperationListeners();this._$emitInputEvent=lang.delayedCall(function(){this._signal("input",{});if(this.session&&this.session.bgTokenizer)this.session.bgTokenizer.scheduleStart();}.bind(this));this.on("change",function(_,_self){_self._$emitInputEvent.schedule(31);});this.setSession(session||new EditSession(""));config.resetOptions(this);config._signal("editor",this);};(function(){oop.implement(this,EventEmitter);this.$initOperationListeners=function(){function last(a){return a[a.length-1];}this.selections=[];this.commands.on("exec",this.startOperation.bind(this),true);this.commands.on("afterExec",this.endOperation.bind(this),true);this.$opResetTimer=lang.delayedCall(this.endOperation.bind(this));this.on("change",function(){this.curOp||this.startOperation();this.curOp.docChanged=true;}.bind(this),true);this.on("changeSelection",function(){this.curOp||this.startOperation();this.curOp.selectionChanged=true;}.bind(this),true);};this.curOp=null;this.prevOp={};this.startOperation=function(commadEvent){if(this.curOp){if(!commadEvent||this.curOp.command)return;this.prevOp=this.curOp;}if(!commadEvent){this.previousCommand=null;commadEvent={};}this.$opResetTimer.schedule();this.curOp={command:commadEvent.command||{},args:commadEvent.args,scrollTop:this.renderer.scrollTop};if(this.curOp.command.name&&this.curOp.command.scrollIntoView!==undefined)this.$blockScrolling++;};this.endOperation=function(e){if(this.curOp){if(e&&e.returnValue===false)return this.curOp=null;this._signal("beforeEndOperation");var command=this.curOp.command;if(command.name&&this.$blockScrolling>0)this.$blockScrolling--;var scrollIntoView=command&&command.scrollIntoView;if(scrollIntoView){switch(scrollIntoView){case"center-animate":scrollIntoView="animate";case"center":this.renderer.scrollCursorIntoView(null,0.5);break;case"animate":case"cursor":this.renderer.scrollCursorIntoView();break;case"selectionPart":var range=this.selection.getRange();var config=this.renderer.layerConfig;if(range.start.row>=config.lastRow||range.end.row<=config.firstRow){this.renderer.scrollSelectionIntoView(this.selection.anchor,this.selection.lead);}break;default:break;}if(scrollIntoView=="animate")this.renderer.animateScrolling(this.curOp.scrollTop);}this.prevOp=this.curOp;this.curOp=null;}};this.$mergeableCommands=["backspace","del","insertstring"];this.$historyTracker=function(e){if(!this.$mergeUndoDeltas)return;var prev=this.prevOp;var mergeableCommands=this.$mergeableCommands;var shouldMerge=prev.command&&e.command.name==prev.command.name;if(e.command.name=="insertstring"){var text=e.args;if(this.mergeNextCommand===undefined)this.mergeNextCommand=true;shouldMerge=shouldMerge&&this.mergeNextCommand// previous command allows to coalesce with
&&(!/\s/.test(text)||/\s/.test(prev.args));// previous insertion was of same type
this.mergeNextCommand=true;}else{shouldMerge=shouldMerge&&mergeableCommands.indexOf(e.command.name)!==-1;// the command is mergeable
}if(this.$mergeUndoDeltas!="always"&&Date.now()-this.sequenceStartTime>2000){shouldMerge=false;// the sequence is too long
}if(shouldMerge)this.session.mergeUndoDeltas=true;else if(mergeableCommands.indexOf(e.command.name)!==-1)this.sequenceStartTime=Date.now();};this.setKeyboardHandler=function(keyboardHandler,cb){if(keyboardHandler&&typeof keyboardHandler==="string"){this.$keybindingId=keyboardHandler;var _self=this;config.loadModule(["keybinding",keyboardHandler],function(module){if(_self.$keybindingId==keyboardHandler)_self.keyBinding.setKeyboardHandler(module&&module.handler);cb&&cb();});}else{this.$keybindingId=null;this.keyBinding.setKeyboardHandler(keyboardHandler);cb&&cb();}};this.getKeyboardHandler=function(){return this.keyBinding.getKeyboardHandler();};this.setSession=function(session){if(this.session==session)return;if(this.curOp)this.endOperation();this.curOp={};var oldSession=this.session;if(oldSession){this.session.off("change",this.$onDocumentChange);this.session.off("changeMode",this.$onChangeMode);this.session.off("tokenizerUpdate",this.$onTokenizerUpdate);this.session.off("changeTabSize",this.$onChangeTabSize);this.session.off("changeWrapLimit",this.$onChangeWrapLimit);this.session.off("changeWrapMode",this.$onChangeWrapMode);this.session.off("changeFold",this.$onChangeFold);this.session.off("changeFrontMarker",this.$onChangeFrontMarker);this.session.off("changeBackMarker",this.$onChangeBackMarker);this.session.off("changeBreakpoint",this.$onChangeBreakpoint);this.session.off("changeAnnotation",this.$onChangeAnnotation);this.session.off("changeOverwrite",this.$onCursorChange);this.session.off("changeScrollTop",this.$onScrollTopChange);this.session.off("changeScrollLeft",this.$onScrollLeftChange);var selection=this.session.getSelection();selection.off("changeCursor",this.$onCursorChange);selection.off("changeSelection",this.$onSelectionChange);}this.session=session;if(session){this.$onDocumentChange=this.onDocumentChange.bind(this);session.on("change",this.$onDocumentChange);this.renderer.setSession(session);this.$onChangeMode=this.onChangeMode.bind(this);session.on("changeMode",this.$onChangeMode);this.$onTokenizerUpdate=this.onTokenizerUpdate.bind(this);session.on("tokenizerUpdate",this.$onTokenizerUpdate);this.$onChangeTabSize=this.renderer.onChangeTabSize.bind(this.renderer);session.on("changeTabSize",this.$onChangeTabSize);this.$onChangeWrapLimit=this.onChangeWrapLimit.bind(this);session.on("changeWrapLimit",this.$onChangeWrapLimit);this.$onChangeWrapMode=this.onChangeWrapMode.bind(this);session.on("changeWrapMode",this.$onChangeWrapMode);this.$onChangeFold=this.onChangeFold.bind(this);session.on("changeFold",this.$onChangeFold);this.$onChangeFrontMarker=this.onChangeFrontMarker.bind(this);this.session.on("changeFrontMarker",this.$onChangeFrontMarker);this.$onChangeBackMarker=this.onChangeBackMarker.bind(this);this.session.on("changeBackMarker",this.$onChangeBackMarker);this.$onChangeBreakpoint=this.onChangeBreakpoint.bind(this);this.session.on("changeBreakpoint",this.$onChangeBreakpoint);this.$onChangeAnnotation=this.onChangeAnnotation.bind(this);this.session.on("changeAnnotation",this.$onChangeAnnotation);this.$onCursorChange=this.onCursorChange.bind(this);this.session.on("changeOverwrite",this.$onCursorChange);this.$onScrollTopChange=this.onScrollTopChange.bind(this);this.session.on("changeScrollTop",this.$onScrollTopChange);this.$onScrollLeftChange=this.onScrollLeftChange.bind(this);this.session.on("changeScrollLeft",this.$onScrollLeftChange);this.selection=session.getSelection();this.selection.on("changeCursor",this.$onCursorChange);this.$onSelectionChange=this.onSelectionChange.bind(this);this.selection.on("changeSelection",this.$onSelectionChange);this.onChangeMode();this.$blockScrolling+=1;this.onCursorChange();this.$blockScrolling-=1;this.onScrollTopChange();this.onScrollLeftChange();this.onSelectionChange();this.onChangeFrontMarker();this.onChangeBackMarker();this.onChangeBreakpoint();this.onChangeAnnotation();this.session.getUseWrapMode()&&this.renderer.adjustWrapLimit();this.renderer.updateFull();}else{this.selection=null;this.renderer.setSession(session);}this._signal("changeSession",{session:session,oldSession:oldSession});this.curOp=null;oldSession&&oldSession._signal("changeEditor",{oldEditor:this});session&&session._signal("changeEditor",{editor:this});};this.getSession=function(){return this.session;};this.setValue=function(val,cursorPos){this.session.doc.setValue(val);if(!cursorPos)this.selectAll();else if(cursorPos==1)this.navigateFileEnd();else if(cursorPos==-1)this.navigateFileStart();return val;};this.getValue=function(){return this.session.getValue();};this.getSelection=function(){return this.selection;};this.resize=function(force){this.renderer.onResize(force);};this.setTheme=function(theme,cb){this.renderer.setTheme(theme,cb);};this.getTheme=function(){return this.renderer.getTheme();};this.setStyle=function(style){this.renderer.setStyle(style);};this.unsetStyle=function(style){this.renderer.unsetStyle(style);};this.getFontSize=function(){return this.getOption("fontSize")||dom.computedStyle(this.container,"fontSize");};this.setFontSize=function(size){this.setOption("fontSize",size);};this.$highlightBrackets=function(){if(this.session.$bracketHighlight){this.session.removeMarker(this.session.$bracketHighlight);this.session.$bracketHighlight=null;}if(this.$highlightPending){return;}var self=this;this.$highlightPending=true;setTimeout(function(){self.$highlightPending=false;var session=self.session;if(!session||!session.bgTokenizer)return;var pos=session.findMatchingBracket(self.getCursorPosition());if(pos){var range=new Range(pos.row,pos.column,pos.row,pos.column+1);}else if(session.$mode.getMatching){var range=session.$mode.getMatching(self.session);}if(range)session.$bracketHighlight=session.addMarker(range,"ace_bracket","text");},50);};this.$highlightTags=function(){if(this.$highlightTagPending)return;var self=this;this.$highlightTagPending=true;setTimeout(function(){self.$highlightTagPending=false;var session=self.session;if(!session||!session.bgTokenizer)return;var pos=self.getCursorPosition();var iterator=new TokenIterator(self.session,pos.row,pos.column);var token=iterator.getCurrentToken();if(!token||!/\b(?:tag-open|tag-name)/.test(token.type)){session.removeMarker(session.$tagHighlight);session.$tagHighlight=null;return;}if(token.type.indexOf("tag-open")!=-1){token=iterator.stepForward();if(!token)return;}var tag=token.value;var depth=0;var prevToken=iterator.stepBackward();if(prevToken.value=='<'){do{prevToken=token;token=iterator.stepForward();if(token&&token.value===tag&&token.type.indexOf('tag-name')!==-1){if(prevToken.value==='<'){depth++;}else if(prevToken.value==='</'){depth--;}}}while(token&&depth>=0);}else{do{token=prevToken;prevToken=iterator.stepBackward();if(token&&token.value===tag&&token.type.indexOf('tag-name')!==-1){if(prevToken.value==='<'){depth++;}else if(prevToken.value==='</'){depth--;}}}while(prevToken&&depth<=0);iterator.stepForward();}if(!token){session.removeMarker(session.$tagHighlight);session.$tagHighlight=null;return;}var row=iterator.getCurrentTokenRow();var column=iterator.getCurrentTokenColumn();var range=new Range(row,column,row,column+token.value.length);var sbm=session.$backMarkers[session.$tagHighlight];if(session.$tagHighlight&&sbm!=undefined&&range.compareRange(sbm.range)!==0){session.removeMarker(session.$tagHighlight);session.$tagHighlight=null;}if(range&&!session.$tagHighlight)session.$tagHighlight=session.addMarker(range,"ace_bracket","text");},50);};this.focus=function(){var _self=this;setTimeout(function(){_self.textInput.focus();});this.textInput.focus();};this.isFocused=function(){return this.textInput.isFocused();};this.blur=function(){this.textInput.blur();};this.onFocus=function(e){if(this.$isFocused)return;this.$isFocused=true;this.renderer.showCursor();this.renderer.visualizeFocus();this._emit("focus",e);};this.onBlur=function(e){if(!this.$isFocused)return;this.$isFocused=false;this.renderer.hideCursor();this.renderer.visualizeBlur();this._emit("blur",e);};this.$cursorChange=function(){this.renderer.updateCursor();};this.onDocumentChange=function(delta){var wrap=this.session.$useWrapMode;var lastRow=delta.start.row==delta.end.row?delta.end.row:Infinity;this.renderer.updateLines(delta.start.row,lastRow,wrap);this._signal("change",delta);this.$cursorChange();this.$updateHighlightActiveLine();};this.onTokenizerUpdate=function(e){var rows=e.data;this.renderer.updateLines(rows.first,rows.last);};this.onScrollTopChange=function(){this.renderer.scrollToY(this.session.getScrollTop());};this.onScrollLeftChange=function(){this.renderer.scrollToX(this.session.getScrollLeft());};this.onCursorChange=function(){this.$cursorChange();if(!this.$blockScrolling){config.warn("Automatically scrolling cursor into view after selection change","this will be disabled in the next version","set editor.$blockScrolling = Infinity to disable this message");this.renderer.scrollCursorIntoView();}this.$highlightBrackets();this.$highlightTags();this.$updateHighlightActiveLine();this._signal("changeSelection");};this.$updateHighlightActiveLine=function(){var session=this.getSession();var highlight;if(this.$highlightActiveLine){if(this.$selectionStyle!="line"||!this.selection.isMultiLine())highlight=this.getCursorPosition();if(this.renderer.$maxLines&&this.session.getLength()===1&&!(this.renderer.$minLines>1))highlight=false;}if(session.$highlightLineMarker&&!highlight){session.removeMarker(session.$highlightLineMarker.id);session.$highlightLineMarker=null;}else if(!session.$highlightLineMarker&&highlight){var range=new Range(highlight.row,highlight.column,highlight.row,Infinity);range.id=session.addMarker(range,"ace_active-line","screenLine");session.$highlightLineMarker=range;}else if(highlight){session.$highlightLineMarker.start.row=highlight.row;session.$highlightLineMarker.end.row=highlight.row;session.$highlightLineMarker.start.column=highlight.column;session._signal("changeBackMarker");}};this.onSelectionChange=function(e){var session=this.session;if(session.$selectionMarker){session.removeMarker(session.$selectionMarker);}session.$selectionMarker=null;if(!this.selection.isEmpty()){var range=this.selection.getRange();var style=this.getSelectionStyle();session.$selectionMarker=session.addMarker(range,"ace_selection",style);}else{this.$updateHighlightActiveLine();}var re=this.$highlightSelectedWord&&this.$getSelectionHighLightRegexp();this.session.highlight(re);this._signal("changeSelection");};this.$getSelectionHighLightRegexp=function(){var session=this.session;var selection=this.getSelectionRange();if(selection.isEmpty()||selection.isMultiLine())return;var startOuter=selection.start.column-1;var endOuter=selection.end.column+1;var line=session.getLine(selection.start.row);var lineCols=line.length;var needle=line.substring(Math.max(startOuter,0),Math.min(endOuter,lineCols));if(startOuter>=0&&/^[\w\d]/.test(needle)||endOuter<=lineCols&&/[\w\d]$/.test(needle))return;needle=line.substring(selection.start.column,selection.end.column);if(!/^[\w\d]+$/.test(needle))return;var re=this.$search.$assembleRegExp({wholeWord:true,caseSensitive:true,needle:needle});return re;};this.onChangeFrontMarker=function(){this.renderer.updateFrontMarkers();};this.onChangeBackMarker=function(){this.renderer.updateBackMarkers();};this.onChangeBreakpoint=function(){this.renderer.updateBreakpoints();};this.onChangeAnnotation=function(){this.renderer.setAnnotations(this.session.getAnnotations());};this.onChangeMode=function(e){this.renderer.updateText();this._emit("changeMode",e);};this.onChangeWrapLimit=function(){this.renderer.updateFull();};this.onChangeWrapMode=function(){this.renderer.onResize(true);};this.onChangeFold=function(){this.$updateHighlightActiveLine();this.renderer.updateFull();};this.getSelectedText=function(){return this.session.getTextRange(this.getSelectionRange());};this.getCopyText=function(){var text=this.getSelectedText();this._signal("copy",text);return text;};this.onCopy=function(){this.commands.exec("copy",this);};this.onCut=function(){this.commands.exec("cut",this);};this.onPaste=function(text,event){var e={text:text,event:event};this.commands.exec("paste",this,e);};this.$handlePaste=function(e){if(typeof e=="string")e={text:e};this._signal("paste",e);var text=e.text;if(!this.inMultiSelectMode||this.inVirtualSelectionMode){this.insert(text);}else{var lines=text.split(/\r\n|\r|\n/);var ranges=this.selection.rangeList.ranges;if(lines.length>ranges.length||lines.length<2||!lines[1])return this.commands.exec("insertstring",this,text);for(var i=ranges.length;i--;){var range=ranges[i];if(!range.isEmpty())this.session.remove(range);this.session.insert(range.start,lines[i]);}}};this.execCommand=function(command,args){return this.commands.exec(command,this,args);};this.insert=function(text,pasted){var session=this.session;var mode=session.getMode();var cursor=this.getCursorPosition();if(this.getBehavioursEnabled()&&!pasted){var transform=mode.transformAction(session.getState(cursor.row),'insertion',this,session,text);if(transform){if(text!==transform.text){this.session.mergeUndoDeltas=false;this.$mergeNextCommand=false;}text=transform.text;}}if(text=="\t")text=this.session.getTabString();if(!this.selection.isEmpty()){var range=this.getSelectionRange();cursor=this.session.remove(range);this.clearSelection();}else if(this.session.getOverwrite()){var range=new Range.fromPoints(cursor,cursor);range.end.column+=text.length;this.session.remove(range);}if(text=="\n"||text=="\r\n"){var line=session.getLine(cursor.row);if(cursor.column>line.search(/\S|$/)){var d=line.substr(cursor.column).search(/\S|$/);session.doc.removeInLine(cursor.row,cursor.column,cursor.column+d);}}this.clearSelection();var start=cursor.column;var lineState=session.getState(cursor.row);var line=session.getLine(cursor.row);var shouldOutdent=mode.checkOutdent(lineState,line,text);var end=session.insert(cursor,text);if(transform&&transform.selection){if(transform.selection.length==2){// Transform relative to the current column
this.selection.setSelectionRange(new Range(cursor.row,start+transform.selection[0],cursor.row,start+transform.selection[1]));}else{// Transform relative to the current row.
this.selection.setSelectionRange(new Range(cursor.row+transform.selection[0],transform.selection[1],cursor.row+transform.selection[2],transform.selection[3]));}}if(session.getDocument().isNewLine(text)){var lineIndent=mode.getNextLineIndent(lineState,line.slice(0,cursor.column),session.getTabString());session.insert({row:cursor.row+1,column:0},lineIndent);}if(shouldOutdent)mode.autoOutdent(lineState,session,cursor.row);};this.onTextInput=function(text){this.keyBinding.onTextInput(text);};this.onCommandKey=function(e,hashId,keyCode){this.keyBinding.onCommandKey(e,hashId,keyCode);};this.setOverwrite=function(overwrite){this.session.setOverwrite(overwrite);};this.getOverwrite=function(){return this.session.getOverwrite();};this.toggleOverwrite=function(){this.session.toggleOverwrite();};this.setScrollSpeed=function(speed){this.setOption("scrollSpeed",speed);};this.getScrollSpeed=function(){return this.getOption("scrollSpeed");};this.setDragDelay=function(dragDelay){this.setOption("dragDelay",dragDelay);};this.getDragDelay=function(){return this.getOption("dragDelay");};this.setSelectionStyle=function(val){this.setOption("selectionStyle",val);};this.getSelectionStyle=function(){return this.getOption("selectionStyle");};this.setHighlightActiveLine=function(shouldHighlight){this.setOption("highlightActiveLine",shouldHighlight);};this.getHighlightActiveLine=function(){return this.getOption("highlightActiveLine");};this.setHighlightGutterLine=function(shouldHighlight){this.setOption("highlightGutterLine",shouldHighlight);};this.getHighlightGutterLine=function(){return this.getOption("highlightGutterLine");};this.setHighlightSelectedWord=function(shouldHighlight){this.setOption("highlightSelectedWord",shouldHighlight);};this.getHighlightSelectedWord=function(){return this.$highlightSelectedWord;};this.setAnimatedScroll=function(shouldAnimate){this.renderer.setAnimatedScroll(shouldAnimate);};this.getAnimatedScroll=function(){return this.renderer.getAnimatedScroll();};this.setShowInvisibles=function(showInvisibles){this.renderer.setShowInvisibles(showInvisibles);};this.getShowInvisibles=function(){return this.renderer.getShowInvisibles();};this.setDisplayIndentGuides=function(display){this.renderer.setDisplayIndentGuides(display);};this.getDisplayIndentGuides=function(){return this.renderer.getDisplayIndentGuides();};this.setShowPrintMargin=function(showPrintMargin){this.renderer.setShowPrintMargin(showPrintMargin);};this.getShowPrintMargin=function(){return this.renderer.getShowPrintMargin();};this.setPrintMarginColumn=function(showPrintMargin){this.renderer.setPrintMarginColumn(showPrintMargin);};this.getPrintMarginColumn=function(){return this.renderer.getPrintMarginColumn();};this.setReadOnly=function(readOnly){this.setOption("readOnly",readOnly);};this.getReadOnly=function(){return this.getOption("readOnly");};this.setBehavioursEnabled=function(enabled){this.setOption("behavioursEnabled",enabled);};this.getBehavioursEnabled=function(){return this.getOption("behavioursEnabled");};this.setWrapBehavioursEnabled=function(enabled){this.setOption("wrapBehavioursEnabled",enabled);};this.getWrapBehavioursEnabled=function(){return this.getOption("wrapBehavioursEnabled");};this.setShowFoldWidgets=function(show){this.setOption("showFoldWidgets",show);};this.getShowFoldWidgets=function(){return this.getOption("showFoldWidgets");};this.setFadeFoldWidgets=function(fade){this.setOption("fadeFoldWidgets",fade);};this.getFadeFoldWidgets=function(){return this.getOption("fadeFoldWidgets");};this.remove=function(dir){if(this.selection.isEmpty()){if(dir=="left")this.selection.selectLeft();else this.selection.selectRight();}var range=this.getSelectionRange();if(this.getBehavioursEnabled()){var session=this.session;var state=session.getState(range.start.row);var new_range=session.getMode().transformAction(state,'deletion',this,session,range);if(range.end.column===0){var text=session.getTextRange(range);if(text[text.length-1]=="\n"){var line=session.getLine(range.end.row);if(/^\s+$/.test(line)){range.end.column=line.length;}}}if(new_range)range=new_range;}this.session.remove(range);this.clearSelection();};this.removeWordRight=function(){if(this.selection.isEmpty())this.selection.selectWordRight();this.session.remove(this.getSelectionRange());this.clearSelection();};this.removeWordLeft=function(){if(this.selection.isEmpty())this.selection.selectWordLeft();this.session.remove(this.getSelectionRange());this.clearSelection();};this.removeToLineStart=function(){if(this.selection.isEmpty())this.selection.selectLineStart();this.session.remove(this.getSelectionRange());this.clearSelection();};this.removeToLineEnd=function(){if(this.selection.isEmpty())this.selection.selectLineEnd();var range=this.getSelectionRange();if(range.start.column==range.end.column&&range.start.row==range.end.row){range.end.column=0;range.end.row++;}this.session.remove(range);this.clearSelection();};this.splitLine=function(){if(!this.selection.isEmpty()){this.session.remove(this.getSelectionRange());this.clearSelection();}var cursor=this.getCursorPosition();this.insert("\n");this.moveCursorToPosition(cursor);};this.transposeLetters=function(){if(!this.selection.isEmpty()){return;}var cursor=this.getCursorPosition();var column=cursor.column;if(column===0)return;var line=this.session.getLine(cursor.row);var swap,range;if(column<line.length){swap=line.charAt(column)+line.charAt(column-1);range=new Range(cursor.row,column-1,cursor.row,column+1);}else{swap=line.charAt(column-1)+line.charAt(column-2);range=new Range(cursor.row,column-2,cursor.row,column);}this.session.replace(range,swap);};this.toLowerCase=function(){var originalRange=this.getSelectionRange();if(this.selection.isEmpty()){this.selection.selectWord();}var range=this.getSelectionRange();var text=this.session.getTextRange(range);this.session.replace(range,text.toLowerCase());this.selection.setSelectionRange(originalRange);};this.toUpperCase=function(){var originalRange=this.getSelectionRange();if(this.selection.isEmpty()){this.selection.selectWord();}var range=this.getSelectionRange();var text=this.session.getTextRange(range);this.session.replace(range,text.toUpperCase());this.selection.setSelectionRange(originalRange);};this.indent=function(){var session=this.session;var range=this.getSelectionRange();if(range.start.row<range.end.row){var rows=this.$getSelectedRows();session.indentRows(rows.first,rows.last,"\t");return;}else if(range.start.column<range.end.column){var text=session.getTextRange(range);if(!/^\s+$/.test(text)){var rows=this.$getSelectedRows();session.indentRows(rows.first,rows.last,"\t");return;}}var line=session.getLine(range.start.row);var position=range.start;var size=session.getTabSize();var column=session.documentToScreenColumn(position.row,position.column);if(this.session.getUseSoftTabs()){var count=size-column%size;var indentString=lang.stringRepeat(" ",count);}else{var count=column%size;while(line[range.start.column-1]==" "&&count){range.start.column--;count--;}this.selection.setSelectionRange(range);indentString="\t";}return this.insert(indentString);};this.blockIndent=function(){var rows=this.$getSelectedRows();this.session.indentRows(rows.first,rows.last,"\t");};this.blockOutdent=function(){var selection=this.session.getSelection();this.session.outdentRows(selection.getRange());};this.sortLines=function(){var rows=this.$getSelectedRows();var session=this.session;var lines=[];for(i=rows.first;i<=rows.last;i++){lines.push(session.getLine(i));}lines.sort(function(a,b){if(a.toLowerCase()<b.toLowerCase())return-1;if(a.toLowerCase()>b.toLowerCase())return 1;return 0;});var deleteRange=new Range(0,0,0,0);for(var i=rows.first;i<=rows.last;i++){var line=session.getLine(i);deleteRange.start.row=i;deleteRange.end.row=i;deleteRange.end.column=line.length;session.replace(deleteRange,lines[i-rows.first]);}};this.toggleCommentLines=function(){var state=this.session.getState(this.getCursorPosition().row);var rows=this.$getSelectedRows();this.session.getMode().toggleCommentLines(state,this.session,rows.first,rows.last);};this.toggleBlockComment=function(){var cursor=this.getCursorPosition();var state=this.session.getState(cursor.row);var range=this.getSelectionRange();this.session.getMode().toggleBlockComment(state,this.session,range,cursor);};this.getNumberAt=function(row,column){var _numberRx=/[\-]?[0-9]+(?:\.[0-9]+)?/g;_numberRx.lastIndex=0;var s=this.session.getLine(row);while(_numberRx.lastIndex<column){var m=_numberRx.exec(s);if(m.index<=column&&m.index+m[0].length>=column){var number={value:m[0],start:m.index,end:m.index+m[0].length};return number;}}return null;};this.modifyNumber=function(amount){var row=this.selection.getCursor().row;var column=this.selection.getCursor().column;var charRange=new Range(row,column-1,row,column);var c=this.session.getTextRange(charRange);if(!isNaN(parseFloat(c))&&isFinite(c)){var nr=this.getNumberAt(row,column);if(nr){var fp=nr.value.indexOf(".")>=0?nr.start+nr.value.indexOf(".")+1:nr.end;var decimals=nr.start+nr.value.length-fp;var t=parseFloat(nr.value);t*=Math.pow(10,decimals);if(fp!==nr.end&&column<fp){amount*=Math.pow(10,nr.end-column-1);}else{amount*=Math.pow(10,nr.end-column);}t+=amount;t/=Math.pow(10,decimals);var nnr=t.toFixed(decimals);var replaceRange=new Range(row,nr.start,row,nr.end);this.session.replace(replaceRange,nnr);this.moveCursorTo(row,Math.max(nr.start+1,column+nnr.length-nr.value.length));}}};this.removeLines=function(){var rows=this.$getSelectedRows();this.session.removeFullLines(rows.first,rows.last);this.clearSelection();};this.duplicateSelection=function(){var sel=this.selection;var doc=this.session;var range=sel.getRange();var reverse=sel.isBackwards();if(range.isEmpty()){var row=range.start.row;doc.duplicateLines(row,row);}else{var point=reverse?range.start:range.end;var endPoint=doc.insert(point,doc.getTextRange(range),false);range.start=point;range.end=endPoint;sel.setSelectionRange(range,reverse);}};this.moveLinesDown=function(){this.$moveLines(1,false);};this.moveLinesUp=function(){this.$moveLines(-1,false);};this.moveText=function(range,toPosition,copy){return this.session.moveText(range,toPosition,copy);};this.copyLinesUp=function(){this.$moveLines(-1,true);};this.copyLinesDown=function(){this.$moveLines(1,true);};this.$moveLines=function(dir,copy){var rows,moved;var selection=this.selection;if(!selection.inMultiSelectMode||this.inVirtualSelectionMode){var range=selection.toOrientedRange();rows=this.$getSelectedRows(range);moved=this.session.$moveLines(rows.first,rows.last,copy?0:dir);if(copy&&dir==-1)moved=0;range.moveBy(moved,0);selection.fromOrientedRange(range);}else{var ranges=selection.rangeList.ranges;selection.rangeList.detach(this.session);this.inVirtualSelectionMode=true;var diff=0;var totalDiff=0;var l=ranges.length;for(var i=0;i<l;i++){var rangeIndex=i;ranges[i].moveBy(diff,0);rows=this.$getSelectedRows(ranges[i]);var first=rows.first;var last=rows.last;while(++i<l){if(totalDiff)ranges[i].moveBy(totalDiff,0);var subRows=this.$getSelectedRows(ranges[i]);if(copy&&subRows.first!=last)break;else if(!copy&&subRows.first>last+1)break;last=subRows.last;}i--;diff=this.session.$moveLines(first,last,copy?0:dir);if(copy&&dir==-1)rangeIndex=i+1;while(rangeIndex<=i){ranges[rangeIndex].moveBy(diff,0);rangeIndex++;}if(!copy)diff=0;totalDiff+=diff;}selection.fromOrientedRange(selection.ranges[0]);selection.rangeList.attach(this.session);this.inVirtualSelectionMode=false;}};this.$getSelectedRows=function(range){range=(range||this.getSelectionRange()).collapseRows();return{first:this.session.getRowFoldStart(range.start.row),last:this.session.getRowFoldEnd(range.end.row)};};this.onCompositionStart=function(text){this.renderer.showComposition(this.getCursorPosition());};this.onCompositionUpdate=function(text){this.renderer.setCompositionText(text);};this.onCompositionEnd=function(){this.renderer.hideComposition();};this.getFirstVisibleRow=function(){return this.renderer.getFirstVisibleRow();};this.getLastVisibleRow=function(){return this.renderer.getLastVisibleRow();};this.isRowVisible=function(row){return row>=this.getFirstVisibleRow()&&row<=this.getLastVisibleRow();};this.isRowFullyVisible=function(row){return row>=this.renderer.getFirstFullyVisibleRow()&&row<=this.renderer.getLastFullyVisibleRow();};this.$getVisibleRowCount=function(){return this.renderer.getScrollBottomRow()-this.renderer.getScrollTopRow()+1;};this.$moveByPage=function(dir,select){var renderer=this.renderer;var config=this.renderer.layerConfig;var rows=dir*Math.floor(config.height/config.lineHeight);this.$blockScrolling++;if(select===true){this.selection.$moveSelection(function(){this.moveCursorBy(rows,0);});}else if(select===false){this.selection.moveCursorBy(rows,0);this.selection.clearSelection();}this.$blockScrolling--;var scrollTop=renderer.scrollTop;renderer.scrollBy(0,rows*config.lineHeight);if(select!=null)renderer.scrollCursorIntoView(null,0.5);renderer.animateScrolling(scrollTop);};this.selectPageDown=function(){this.$moveByPage(1,true);};this.selectPageUp=function(){this.$moveByPage(-1,true);};this.gotoPageDown=function(){this.$moveByPage(1,false);};this.gotoPageUp=function(){this.$moveByPage(-1,false);};this.scrollPageDown=function(){this.$moveByPage(1);};this.scrollPageUp=function(){this.$moveByPage(-1);};this.scrollToRow=function(row){this.renderer.scrollToRow(row);};this.scrollToLine=function(line,center,animate,callback){this.renderer.scrollToLine(line,center,animate,callback);};this.centerSelection=function(){var range=this.getSelectionRange();var pos={row:Math.floor(range.start.row+(range.end.row-range.start.row)/2),column:Math.floor(range.start.column+(range.end.column-range.start.column)/2)};this.renderer.alignCursor(pos,0.5);};this.getCursorPosition=function(){return this.selection.getCursor();};this.getCursorPositionScreen=function(){return this.session.documentToScreenPosition(this.getCursorPosition());};this.getSelectionRange=function(){return this.selection.getRange();};this.selectAll=function(){this.$blockScrolling+=1;this.selection.selectAll();this.$blockScrolling-=1;};this.clearSelection=function(){this.selection.clearSelection();};this.moveCursorTo=function(row,column){this.selection.moveCursorTo(row,column);};this.moveCursorToPosition=function(pos){this.selection.moveCursorToPosition(pos);};this.jumpToMatching=function(select,expand){var cursor=this.getCursorPosition();var iterator=new TokenIterator(this.session,cursor.row,cursor.column);var prevToken=iterator.getCurrentToken();var token=prevToken||iterator.stepForward();if(!token)return;var matchType;var found=false;var depth={};var i=cursor.column-token.start;var bracketType;var brackets={")":"(","(":"(","]":"[","[":"[","{":"{","}":"{"};do{if(token.value.match(/[{}()\[\]]/g)){for(;i<token.value.length&&!found;i++){if(!brackets[token.value[i]]){continue;}bracketType=brackets[token.value[i]]+'.'+token.type.replace("rparen","lparen");if(isNaN(depth[bracketType])){depth[bracketType]=0;}switch(token.value[i]){case'(':case'[':case'{':depth[bracketType]++;break;case')':case']':case'}':depth[bracketType]--;if(depth[bracketType]===-1){matchType='bracket';found=true;}break;}}}else if(token&&token.type.indexOf('tag-name')!==-1){if(isNaN(depth[token.value])){depth[token.value]=0;}if(prevToken.value==='<'){depth[token.value]++;}else if(prevToken.value==='</'){depth[token.value]--;}if(depth[token.value]===-1){matchType='tag';found=true;}}if(!found){prevToken=token;token=iterator.stepForward();i=0;}}while(token&&!found);if(!matchType)return;var range,pos;if(matchType==='bracket'){range=this.session.getBracketRange(cursor);if(!range){range=new Range(iterator.getCurrentTokenRow(),iterator.getCurrentTokenColumn()+i-1,iterator.getCurrentTokenRow(),iterator.getCurrentTokenColumn()+i-1);pos=range.start;if(expand||pos.row===cursor.row&&Math.abs(pos.column-cursor.column)<2)range=this.session.getBracketRange(pos);}}else if(matchType==='tag'){if(token&&token.type.indexOf('tag-name')!==-1)var tag=token.value;else return;range=new Range(iterator.getCurrentTokenRow(),iterator.getCurrentTokenColumn()-2,iterator.getCurrentTokenRow(),iterator.getCurrentTokenColumn()-2);if(range.compare(cursor.row,cursor.column)===0){found=false;do{token=prevToken;prevToken=iterator.stepBackward();if(prevToken){if(prevToken.type.indexOf('tag-close')!==-1){range.setEnd(iterator.getCurrentTokenRow(),iterator.getCurrentTokenColumn()+1);}if(token.value===tag&&token.type.indexOf('tag-name')!==-1){if(prevToken.value==='<'){depth[tag]++;}else if(prevToken.value==='</'){depth[tag]--;}if(depth[tag]===0)found=true;}}}while(prevToken&&!found);}if(token&&token.type.indexOf('tag-name')){pos=range.start;if(pos.row==cursor.row&&Math.abs(pos.column-cursor.column)<2)pos=range.end;}}pos=range&&range.cursor||pos;if(pos){if(select){if(range&&expand){this.selection.setRange(range);}else if(range&&range.isEqual(this.getSelectionRange())){this.clearSelection();}else{this.selection.selectTo(pos.row,pos.column);}}else{this.selection.moveTo(pos.row,pos.column);}}};this.gotoLine=function(lineNumber,column,animate){this.selection.clearSelection();this.session.unfold({row:lineNumber-1,column:column||0});this.$blockScrolling+=1;this.exitMultiSelectMode&&this.exitMultiSelectMode();this.moveCursorTo(lineNumber-1,column||0);this.$blockScrolling-=1;if(!this.isRowFullyVisible(lineNumber-1))this.scrollToLine(lineNumber-1,true,animate);};this.navigateTo=function(row,column){this.selection.moveTo(row,column);};this.navigateUp=function(times){if(this.selection.isMultiLine()&&!this.selection.isBackwards()){var selectionStart=this.selection.anchor.getPosition();return this.moveCursorToPosition(selectionStart);}this.selection.clearSelection();this.selection.moveCursorBy(-times||-1,0);};this.navigateDown=function(times){if(this.selection.isMultiLine()&&this.selection.isBackwards()){var selectionEnd=this.selection.anchor.getPosition();return this.moveCursorToPosition(selectionEnd);}this.selection.clearSelection();this.selection.moveCursorBy(times||1,0);};this.navigateLeft=function(times){if(!this.selection.isEmpty()){var selectionStart=this.getSelectionRange().start;this.moveCursorToPosition(selectionStart);}else{times=times||1;while(times--){this.selection.moveCursorLeft();}}this.clearSelection();};this.navigateRight=function(times){if(!this.selection.isEmpty()){var selectionEnd=this.getSelectionRange().end;this.moveCursorToPosition(selectionEnd);}else{times=times||1;while(times--){this.selection.moveCursorRight();}}this.clearSelection();};this.navigateLineStart=function(){this.selection.moveCursorLineStart();this.clearSelection();};this.navigateLineEnd=function(){this.selection.moveCursorLineEnd();this.clearSelection();};this.navigateFileEnd=function(){this.selection.moveCursorFileEnd();this.clearSelection();};this.navigateFileStart=function(){this.selection.moveCursorFileStart();this.clearSelection();};this.navigateWordRight=function(){this.selection.moveCursorWordRight();this.clearSelection();};this.navigateWordLeft=function(){this.selection.moveCursorWordLeft();this.clearSelection();};this.replace=function(replacement,options){if(options)this.$search.set(options);var range=this.$search.find(this.session);var replaced=0;if(!range)return replaced;if(this.$tryReplace(range,replacement)){replaced=1;}if(range!==null){this.selection.setSelectionRange(range);this.renderer.scrollSelectionIntoView(range.start,range.end);}return replaced;};this.replaceAll=function(replacement,options){if(options){this.$search.set(options);}var ranges=this.$search.findAll(this.session);var replaced=0;if(!ranges.length)return replaced;this.$blockScrolling+=1;var selection=this.getSelectionRange();this.selection.moveTo(0,0);for(var i=ranges.length-1;i>=0;--i){if(this.$tryReplace(ranges[i],replacement)){replaced++;}}this.selection.setSelectionRange(selection);this.$blockScrolling-=1;return replaced;};this.$tryReplace=function(range,replacement){var input=this.session.getTextRange(range);replacement=this.$search.replace(input,replacement);if(replacement!==null){range.end=this.session.replace(range,replacement);return range;}else{return null;}};this.getLastSearchOptions=function(){return this.$search.getOptions();};this.find=function(needle,options,animate){if(!options)options={};if(typeof needle=="string"||needle instanceof RegExp)options.needle=needle;else if((typeof needle==="undefined"?"undefined":_typeof(needle))=="object")oop.mixin(options,needle);var range=this.selection.getRange();if(options.needle==null){needle=this.session.getTextRange(range)||this.$search.$options.needle;if(!needle){range=this.session.getWordRange(range.start.row,range.start.column);needle=this.session.getTextRange(range);}this.$search.set({needle:needle});}this.$search.set(options);if(!options.start)this.$search.set({start:range});var newRange=this.$search.find(this.session);if(options.preventScroll)return newRange;if(newRange){this.revealRange(newRange,animate);return newRange;}if(options.backwards)range.start=range.end;else range.end=range.start;this.selection.setRange(range);};this.findNext=function(options,animate){this.find({skipCurrent:true,backwards:false},options,animate);};this.findPrevious=function(options,animate){this.find(options,{skipCurrent:true,backwards:true},animate);};this.revealRange=function(range,animate){this.$blockScrolling+=1;this.session.unfold(range);this.selection.setSelectionRange(range);this.$blockScrolling-=1;var scrollTop=this.renderer.scrollTop;this.renderer.scrollSelectionIntoView(range.start,range.end,0.5);if(animate!==false)this.renderer.animateScrolling(scrollTop);};this.undo=function(){this.$blockScrolling++;this.session.getUndoManager().undo();this.$blockScrolling--;this.renderer.scrollCursorIntoView(null,0.5);};this.redo=function(){this.$blockScrolling++;this.session.getUndoManager().redo();this.$blockScrolling--;this.renderer.scrollCursorIntoView(null,0.5);};this.destroy=function(){this.renderer.destroy();this._signal("destroy",this);if(this.session){this.session.destroy();}};this.setAutoScrollEditorIntoView=function(enable){if(!enable)return;var rect;var self=this;var shouldScroll=false;if(!this.$scrollAnchor)this.$scrollAnchor=document.createElement("div");var scrollAnchor=this.$scrollAnchor;scrollAnchor.style.cssText="position:absolute";this.container.insertBefore(scrollAnchor,this.container.firstChild);var onChangeSelection=this.on("changeSelection",function(){shouldScroll=true;});var onBeforeRender=this.renderer.on("beforeRender",function(){if(shouldScroll)rect=self.renderer.container.getBoundingClientRect();});var onAfterRender=this.renderer.on("afterRender",function(){if(shouldScroll&&rect&&(self.isFocused()||self.searchBox&&self.searchBox.isFocused())){var renderer=self.renderer;var pos=renderer.$cursorLayer.$pixelPos;var config=renderer.layerConfig;var top=pos.top-config.offset;if(pos.top>=0&&top+rect.top<0){shouldScroll=true;}else if(pos.top<config.height&&pos.top+rect.top+config.lineHeight>window.innerHeight){shouldScroll=false;}else{shouldScroll=null;}if(shouldScroll!=null){scrollAnchor.style.top=top+"px";scrollAnchor.style.left=pos.left+"px";scrollAnchor.style.height=config.lineHeight+"px";scrollAnchor.scrollIntoView(shouldScroll);}shouldScroll=rect=null;}});this.setAutoScrollEditorIntoView=function(enable){if(enable)return;delete this.setAutoScrollEditorIntoView;this.off("changeSelection",onChangeSelection);this.renderer.off("afterRender",onAfterRender);this.renderer.off("beforeRender",onBeforeRender);};};this.$resetCursorStyle=function(){var style=this.$cursorStyle||"ace";var cursorLayer=this.renderer.$cursorLayer;if(!cursorLayer)return;cursorLayer.setSmoothBlinking(/smooth/.test(style));cursorLayer.isBlinking=!this.$readOnly&&style!="wide";dom.setCssClass(cursorLayer.element,"ace_slim-cursors",/slim/.test(style));};}).call(Editor.prototype);config.defineOptions(Editor.prototype,"editor",{selectionStyle:{set:function set(style){this.onSelectionChange();this._signal("changeSelectionStyle",{data:style});},initialValue:"line"},highlightActiveLine:{set:function set(){this.$updateHighlightActiveLine();},initialValue:true},highlightSelectedWord:{set:function set(shouldHighlight){this.$onSelectionChange();},initialValue:true},readOnly:{set:function set(readOnly){this.$resetCursorStyle();},initialValue:false},cursorStyle:{set:function set(val){this.$resetCursorStyle();},values:["ace","slim","smooth","wide"],initialValue:"ace"},mergeUndoDeltas:{values:[false,true,"always"],initialValue:true},behavioursEnabled:{initialValue:true},wrapBehavioursEnabled:{initialValue:true},autoScrollEditorIntoView:{set:function set(val){this.setAutoScrollEditorIntoView(val);}},keyboardHandler:{set:function set(val){this.setKeyboardHandler(val);},get:function get(){return this.keybindingId;},handlesSet:true},hScrollBarAlwaysVisible:"renderer",vScrollBarAlwaysVisible:"renderer",highlightGutterLine:"renderer",animatedScroll:"renderer",showInvisibles:"renderer",showPrintMargin:"renderer",printMarginColumn:"renderer",printMargin:"renderer",fadeFoldWidgets:"renderer",showFoldWidgets:"renderer",showLineNumbers:"renderer",showGutter:"renderer",displayIndentGuides:"renderer",fontSize:"renderer",fontFamily:"renderer",maxLines:"renderer",minLines:"renderer",scrollPastEnd:"renderer",fixedWidthGutter:"renderer",theme:"renderer",scrollSpeed:"$mouseHandler",dragDelay:"$mouseHandler",dragEnabled:"$mouseHandler",focusTimout:"$mouseHandler",tooltipFollowsMouse:"$mouseHandler",firstLineNumber:"session",overwrite:"session",newLineMode:"session",useWorker:"session",useSoftTabs:"session",tabSize:"session",wrap:"session",indentedSoftWrap:"session",foldStyle:"session",mode:"session"});exports.Editor=Editor;});ace.define("ace/undomanager",["require","exports","module"],function(acequire,exports,module){"use strict";var UndoManager=function UndoManager(){this.reset();};(function(){this.execute=function(options){var deltaSets=options.args[0];this.$doc=options.args[1];if(options.merge&&this.hasUndo()){this.dirtyCounter--;deltaSets=this.$undoStack.pop().concat(deltaSets);}this.$undoStack.push(deltaSets);this.$redoStack=[];if(this.dirtyCounter<0){this.dirtyCounter=NaN;}this.dirtyCounter++;};this.undo=function(dontSelect){var deltaSets=this.$undoStack.pop();var undoSelectionRange=null;if(deltaSets){undoSelectionRange=this.$doc.undoChanges(deltaSets,dontSelect);this.$redoStack.push(deltaSets);this.dirtyCounter--;}return undoSelectionRange;};this.redo=function(dontSelect){var deltaSets=this.$redoStack.pop();var redoSelectionRange=null;if(deltaSets){redoSelectionRange=this.$doc.redoChanges(this.$deserializeDeltas(deltaSets),dontSelect);this.$undoStack.push(deltaSets);this.dirtyCounter++;}return redoSelectionRange;};this.reset=function(){this.$undoStack=[];this.$redoStack=[];this.dirtyCounter=0;};this.hasUndo=function(){return this.$undoStack.length>0;};this.hasRedo=function(){return this.$redoStack.length>0;};this.markClean=function(){this.dirtyCounter=0;};this.isClean=function(){return this.dirtyCounter===0;};this.$serializeDeltas=function(deltaSets){return cloneDeltaSetsObj(deltaSets,$serializeDelta);};this.$deserializeDeltas=function(deltaSets){return cloneDeltaSetsObj(deltaSets,$deserializeDelta);};function $serializeDelta(delta){return{action:delta.action,start:delta.start,end:delta.end,lines:delta.lines.length==1?null:delta.lines,text:delta.lines.length==1?delta.lines[0]:null};}function $deserializeDelta(delta){return{action:delta.action,start:delta.start,end:delta.end,lines:delta.lines||[delta.text]};}function cloneDeltaSetsObj(deltaSets_old,fnGetModifiedDelta){var deltaSets_new=new Array(deltaSets_old.length);for(var i=0;i<deltaSets_old.length;i++){var deltaSet_old=deltaSets_old[i];var deltaSet_new={group:deltaSet_old.group,deltas:new Array(deltaSet_old.length)};for(var j=0;j<deltaSet_old.deltas.length;j++){var delta_old=deltaSet_old.deltas[j];deltaSet_new.deltas[j]=fnGetModifiedDelta(delta_old);}deltaSets_new[i]=deltaSet_new;}return deltaSets_new;}}).call(UndoManager.prototype);exports.UndoManager=UndoManager;});ace.define("ace/layer/gutter",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/lang","ace/lib/event_emitter"],function(acequire,exports,module){"use strict";var dom=acequire("../lib/dom");var oop=acequire("../lib/oop");var lang=acequire("../lib/lang");var EventEmitter=acequire("../lib/event_emitter").EventEmitter;var Gutter=function Gutter(parentEl){this.element=dom.createElement("div");this.element.className="ace_layer ace_gutter-layer";parentEl.appendChild(this.element);this.setShowFoldWidgets(this.$showFoldWidgets);this.gutterWidth=0;this.$annotations=[];this.$updateAnnotations=this.$updateAnnotations.bind(this);this.$cells=[];};(function(){oop.implement(this,EventEmitter);this.setSession=function(session){if(this.session)this.session.removeEventListener("change",this.$updateAnnotations);this.session=session;if(session)session.on("change",this.$updateAnnotations);};this.addGutterDecoration=function(row,className){if(window.console)console.warn&&console.warn("deprecated use session.addGutterDecoration");this.session.addGutterDecoration(row,className);};this.removeGutterDecoration=function(row,className){if(window.console)console.warn&&console.warn("deprecated use session.removeGutterDecoration");this.session.removeGutterDecoration(row,className);};this.setAnnotations=function(annotations){this.$annotations=[];for(var i=0;i<annotations.length;i++){var annotation=annotations[i];var row=annotation.row;var rowInfo=this.$annotations[row];if(!rowInfo)rowInfo=this.$annotations[row]={text:[]};var annoText=annotation.text;annoText=annoText?lang.escapeHTML(annoText):annotation.html||"";if(rowInfo.text.indexOf(annoText)===-1)rowInfo.text.push(annoText);var type=annotation.type;if(type=="error")rowInfo.className=" ace_error";else if(type=="warning"&&rowInfo.className!=" ace_error")rowInfo.className=" ace_warning";else if(type=="info"&&!rowInfo.className)rowInfo.className=" ace_info";}};this.$updateAnnotations=function(delta){if(!this.$annotations.length)return;var firstRow=delta.start.row;var len=delta.end.row-firstRow;if(len===0){}else if(delta.action=='remove'){this.$annotations.splice(firstRow,len+1,null);}else{var args=new Array(len+1);args.unshift(firstRow,1);this.$annotations.splice.apply(this.$annotations,args);}};this.update=function(config){var session=this.session;var firstRow=config.firstRow;var lastRow=Math.min(config.lastRow+config.gutterOffset,// needed to compensate for hor scollbar
session.getLength()-1);var fold=session.getNextFoldLine(firstRow);var foldStart=fold?fold.start.row:Infinity;var foldWidgets=this.$showFoldWidgets&&session.foldWidgets;var breakpoints=session.$breakpoints;var decorations=session.$decorations;var firstLineNumber=session.$firstLineNumber;var lastLineNumber=0;var gutterRenderer=session.gutterRenderer||this.$renderer;var cell=null;var index=-1;var row=firstRow;while(true){if(row>foldStart){row=fold.end.row+1;fold=session.getNextFoldLine(row,fold);foldStart=fold?fold.start.row:Infinity;}if(row>lastRow){while(this.$cells.length>index+1){cell=this.$cells.pop();this.element.removeChild(cell.element);}break;}cell=this.$cells[++index];if(!cell){cell={element:null,textNode:null,foldWidget:null};cell.element=dom.createElement("div");cell.textNode=document.createTextNode('');cell.element.appendChild(cell.textNode);this.element.appendChild(cell.element);this.$cells[index]=cell;}var className="ace_gutter-cell ";if(breakpoints[row])className+=breakpoints[row];if(decorations[row])className+=decorations[row];if(this.$annotations[row])className+=this.$annotations[row].className;if(cell.element.className!=className)cell.element.className=className;var height=session.getRowLength(row)*config.lineHeight+"px";if(height!=cell.element.style.height)cell.element.style.height=height;if(foldWidgets){var c=foldWidgets[row];if(c==null)c=foldWidgets[row]=session.getFoldWidget(row);}if(c){if(!cell.foldWidget){cell.foldWidget=dom.createElement("span");cell.element.appendChild(cell.foldWidget);}var className="ace_fold-widget ace_"+c;if(c=="start"&&row==foldStart&&row<fold.end.row)className+=" ace_closed";else className+=" ace_open";if(cell.foldWidget.className!=className)cell.foldWidget.className=className;var height=config.lineHeight+"px";if(cell.foldWidget.style.height!=height)cell.foldWidget.style.height=height;}else{if(cell.foldWidget){cell.element.removeChild(cell.foldWidget);cell.foldWidget=null;}}var text=lastLineNumber=gutterRenderer?gutterRenderer.getText(session,row):row+firstLineNumber;if(text!=cell.textNode.data)cell.textNode.data=text;row++;}this.element.style.height=config.minHeight+"px";if(this.$fixedWidth||session.$useWrapMode)lastLineNumber=session.getLength()+firstLineNumber;var gutterWidth=gutterRenderer?gutterRenderer.getWidth(session,lastLineNumber,config):lastLineNumber.toString().length*config.characterWidth;var padding=this.$padding||this.$computePadding();gutterWidth+=padding.left+padding.right;if(gutterWidth!==this.gutterWidth&&!isNaN(gutterWidth)){this.gutterWidth=gutterWidth;this.element.style.width=Math.ceil(this.gutterWidth)+"px";this._emit("changeGutterWidth",gutterWidth);}};this.$fixedWidth=false;this.$showLineNumbers=true;this.$renderer="";this.setShowLineNumbers=function(show){this.$renderer=!show&&{getWidth:function getWidth(){return"";},getText:function getText(){return"";}};};this.getShowLineNumbers=function(){return this.$showLineNumbers;};this.$showFoldWidgets=true;this.setShowFoldWidgets=function(show){if(show)dom.addCssClass(this.element,"ace_folding-enabled");else dom.removeCssClass(this.element,"ace_folding-enabled");this.$showFoldWidgets=show;this.$padding=null;};this.getShowFoldWidgets=function(){return this.$showFoldWidgets;};this.$computePadding=function(){if(!this.element.firstChild)return{left:0,right:0};var style=dom.computedStyle(this.element.firstChild);this.$padding={};this.$padding.left=parseInt(style.paddingLeft)+1||0;this.$padding.right=parseInt(style.paddingRight)||0;return this.$padding;};this.getRegion=function(point){var padding=this.$padding||this.$computePadding();var rect=this.element.getBoundingClientRect();if(point.x<padding.left+rect.left)return"markers";if(this.$showFoldWidgets&&point.x>rect.right-padding.right)return"foldWidgets";};}).call(Gutter.prototype);exports.Gutter=Gutter;});ace.define("ace/layer/marker",["require","exports","module","ace/range","ace/lib/dom"],function(acequire,exports,module){"use strict";var Range=acequire("../range").Range;var dom=acequire("../lib/dom");var Marker=function Marker(parentEl){this.element=dom.createElement("div");this.element.className="ace_layer ace_marker-layer";parentEl.appendChild(this.element);};(function(){this.$padding=0;this.setPadding=function(padding){this.$padding=padding;};this.setSession=function(session){this.session=session;};this.setMarkers=function(markers){this.markers=markers;};this.update=function(config){var config=config||this.config;if(!config)return;this.config=config;var html=[];for(var key in this.markers){var marker=this.markers[key];if(!marker.range){marker.update(html,this,this.session,config);continue;}var range=marker.range.clipRows(config.firstRow,config.lastRow);if(range.isEmpty())continue;range=range.toScreenRange(this.session);if(marker.renderer){var top=this.$getTop(range.start.row,config);var left=this.$padding+range.start.column*config.characterWidth;marker.renderer(html,range,left,top,config);}else if(marker.type=="fullLine"){this.drawFullLineMarker(html,range,marker.clazz,config);}else if(marker.type=="screenLine"){this.drawScreenLineMarker(html,range,marker.clazz,config);}else if(range.isMultiLine()){if(marker.type=="text")this.drawTextMarker(html,range,marker.clazz,config);else this.drawMultiLineMarker(html,range,marker.clazz,config);}else{this.drawSingleLineMarker(html,range,marker.clazz+" ace_start"+" ace_br15",config);}}this.element.innerHTML=html.join("");};this.$getTop=function(row,layerConfig){return(row-layerConfig.firstRowScreen)*layerConfig.lineHeight;};function getBorderClass(tl,tr,br,bl){return(tl?1:0)|(tr?2:0)|(br?4:0)|(bl?8:0);}this.drawTextMarker=function(stringBuilder,range,clazz,layerConfig,extraStyle){var session=this.session;var start=range.start.row;var end=range.end.row;var row=start;var prev=0;var curr=0;var next=session.getScreenLastRowColumn(row);var lineRange=new Range(row,range.start.column,row,curr);for(;row<=end;row++){lineRange.start.row=lineRange.end.row=row;lineRange.start.column=row==start?range.start.column:session.getRowWrapIndent(row);lineRange.end.column=next;prev=curr;curr=next;next=row+1<end?session.getScreenLastRowColumn(row+1):row==end?0:range.end.column;this.drawSingleLineMarker(stringBuilder,lineRange,clazz+(row==start?" ace_start":"")+" ace_br"+getBorderClass(row==start||row==start+1&&range.start.column,prev<curr,curr>next,row==end),layerConfig,row==end?0:1,extraStyle);}};this.drawMultiLineMarker=function(stringBuilder,range,clazz,config,extraStyle){var padding=this.$padding;var height=config.lineHeight;var top=this.$getTop(range.start.row,config);var left=padding+range.start.column*config.characterWidth;extraStyle=extraStyle||"";stringBuilder.push("<div class='",clazz," ace_br1 ace_start' style='","height:",height,"px;","right:0;","top:",top,"px;","left:",left,"px;",extraStyle,"'></div>");top=this.$getTop(range.end.row,config);var width=range.end.column*config.characterWidth;stringBuilder.push("<div class='",clazz," ace_br12' style='","height:",height,"px;","width:",width,"px;","top:",top,"px;","left:",padding,"px;",extraStyle,"'></div>");height=(range.end.row-range.start.row-1)*config.lineHeight;if(height<=0)return;top=this.$getTop(range.start.row+1,config);var radiusClass=(range.start.column?1:0)|(range.end.column?0:8);stringBuilder.push("<div class='",clazz,radiusClass?" ace_br"+radiusClass:"","' style='","height:",height,"px;","right:0;","top:",top,"px;","left:",padding,"px;",extraStyle,"'></div>");};this.drawSingleLineMarker=function(stringBuilder,range,clazz,config,extraLength,extraStyle){var height=config.lineHeight;var width=(range.end.column+(extraLength||0)-range.start.column)*config.characterWidth;var top=this.$getTop(range.start.row,config);var left=this.$padding+range.start.column*config.characterWidth;stringBuilder.push("<div class='",clazz,"' style='","height:",height,"px;","width:",width,"px;","top:",top,"px;","left:",left,"px;",extraStyle||"","'></div>");};this.drawFullLineMarker=function(stringBuilder,range,clazz,config,extraStyle){var top=this.$getTop(range.start.row,config);var height=config.lineHeight;if(range.start.row!=range.end.row)height+=this.$getTop(range.end.row,config)-top;stringBuilder.push("<div class='",clazz,"' style='","height:",height,"px;","top:",top,"px;","left:0;right:0;",extraStyle||"","'></div>");};this.drawScreenLineMarker=function(stringBuilder,range,clazz,config,extraStyle){var top=this.$getTop(range.start.row,config);var height=config.lineHeight;stringBuilder.push("<div class='",clazz,"' style='","height:",height,"px;","top:",top,"px;","left:0;right:0;",extraStyle||"","'></div>");};}).call(Marker.prototype);exports.Marker=Marker;});ace.define("ace/layer/text",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/lang","ace/lib/useragent","ace/lib/event_emitter"],function(acequire,exports,module){"use strict";var oop=acequire("../lib/oop");var dom=acequire("../lib/dom");var lang=acequire("../lib/lang");var useragent=acequire("../lib/useragent");var EventEmitter=acequire("../lib/event_emitter").EventEmitter;var Text=function Text(parentEl){this.element=dom.createElement("div");this.element.className="ace_layer ace_text-layer";parentEl.appendChild(this.element);this.$updateEolChar=this.$updateEolChar.bind(this);};(function(){oop.implement(this,EventEmitter);this.EOF_CHAR="\xB6";this.EOL_CHAR_LF="\xAC";this.EOL_CHAR_CRLF="\xa4";this.EOL_CHAR=this.EOL_CHAR_LF;this.TAB_CHAR="\u2014";//"\u21E5";
this.SPACE_CHAR="\xB7";this.$padding=0;this.$updateEolChar=function(){var EOL_CHAR=this.session.doc.getNewLineCharacter()=="\n"?this.EOL_CHAR_LF:this.EOL_CHAR_CRLF;if(this.EOL_CHAR!=EOL_CHAR){this.EOL_CHAR=EOL_CHAR;return true;}};this.setPadding=function(padding){this.$padding=padding;this.element.style.padding="0 "+padding+"px";};this.getLineHeight=function(){return this.$fontMetrics.$characterSize.height||0;};this.getCharacterWidth=function(){return this.$fontMetrics.$characterSize.width||0;};this.$setFontMetrics=function(measure){this.$fontMetrics=measure;this.$fontMetrics.on("changeCharacterSize",function(e){this._signal("changeCharacterSize",e);}.bind(this));this.$pollSizeChanges();};this.checkForSizeChanges=function(){this.$fontMetrics.checkForSizeChanges();};this.$pollSizeChanges=function(){return this.$pollSizeChangesTimer=this.$fontMetrics.$pollSizeChanges();};this.setSession=function(session){this.session=session;if(session)this.$computeTabString();};this.showInvisibles=false;this.setShowInvisibles=function(showInvisibles){if(this.showInvisibles==showInvisibles)return false;this.showInvisibles=showInvisibles;this.$computeTabString();return true;};this.displayIndentGuides=true;this.setDisplayIndentGuides=function(display){if(this.displayIndentGuides==display)return false;this.displayIndentGuides=display;this.$computeTabString();return true;};this.$tabStrings=[];this.onChangeTabSize=this.$computeTabString=function(){var tabSize=this.session.getTabSize();this.tabSize=tabSize;var tabStr=this.$tabStrings=[0];for(var i=1;i<tabSize+1;i++){if(this.showInvisibles){tabStr.push("<span class='ace_invisible ace_invisible_tab'>"+lang.stringRepeat(this.TAB_CHAR,i)+"</span>");}else{tabStr.push(lang.stringRepeat(" ",i));}}if(this.displayIndentGuides){this.$indentGuideRe=/\s\S| \t|\t |\s$/;var className="ace_indent-guide";var spaceClass="";var tabClass="";if(this.showInvisibles){className+=" ace_invisible";spaceClass=" ace_invisible_space";tabClass=" ace_invisible_tab";var spaceContent=lang.stringRepeat(this.SPACE_CHAR,this.tabSize);var tabContent=lang.stringRepeat(this.TAB_CHAR,this.tabSize);}else{var spaceContent=lang.stringRepeat(" ",this.tabSize);var tabContent=spaceContent;}this.$tabStrings[" "]="<span class='"+className+spaceClass+"'>"+spaceContent+"</span>";this.$tabStrings["\t"]="<span class='"+className+tabClass+"'>"+tabContent+"</span>";}};this.updateLines=function(config,firstRow,lastRow){if(this.config.lastRow!=config.lastRow||this.config.firstRow!=config.firstRow){this.scrollLines(config);}this.config=config;var first=Math.max(firstRow,config.firstRow);var last=Math.min(lastRow,config.lastRow);var lineElements=this.element.childNodes;var lineElementsIdx=0;for(var row=config.firstRow;row<first;row++){var foldLine=this.session.getFoldLine(row);if(foldLine){if(foldLine.containsRow(first)){first=foldLine.start.row;break;}else{row=foldLine.end.row;}}lineElementsIdx++;}var row=first;var foldLine=this.session.getNextFoldLine(row);var foldStart=foldLine?foldLine.start.row:Infinity;while(true){if(row>foldStart){row=foldLine.end.row+1;foldLine=this.session.getNextFoldLine(row,foldLine);foldStart=foldLine?foldLine.start.row:Infinity;}if(row>last)break;var lineElement=lineElements[lineElementsIdx++];if(lineElement){var html=[];this.$renderLine(html,row,!this.$useLineGroups(),row==foldStart?foldLine:false);lineElement.style.height=config.lineHeight*this.session.getRowLength(row)+"px";lineElement.innerHTML=html.join("");}row++;}};this.scrollLines=function(config){var oldConfig=this.config;this.config=config;if(!oldConfig||oldConfig.lastRow<config.firstRow)return this.update(config);if(config.lastRow<oldConfig.firstRow)return this.update(config);var el=this.element;if(oldConfig.firstRow<config.firstRow)for(var row=this.session.getFoldedRowCount(oldConfig.firstRow,config.firstRow-1);row>0;row--){el.removeChild(el.firstChild);}if(oldConfig.lastRow>config.lastRow)for(var row=this.session.getFoldedRowCount(config.lastRow+1,oldConfig.lastRow);row>0;row--){el.removeChild(el.lastChild);}if(config.firstRow<oldConfig.firstRow){var fragment=this.$renderLinesFragment(config,config.firstRow,oldConfig.firstRow-1);if(el.firstChild)el.insertBefore(fragment,el.firstChild);else el.appendChild(fragment);}if(config.lastRow>oldConfig.lastRow){var fragment=this.$renderLinesFragment(config,oldConfig.lastRow+1,config.lastRow);el.appendChild(fragment);}};this.$renderLinesFragment=function(config,firstRow,lastRow){var fragment=this.element.ownerDocument.createDocumentFragment();var row=firstRow;var foldLine=this.session.getNextFoldLine(row);var foldStart=foldLine?foldLine.start.row:Infinity;while(true){if(row>foldStart){row=foldLine.end.row+1;foldLine=this.session.getNextFoldLine(row,foldLine);foldStart=foldLine?foldLine.start.row:Infinity;}if(row>lastRow)break;var container=dom.createElement("div");var html=[];this.$renderLine(html,row,false,row==foldStart?foldLine:false);container.innerHTML=html.join("");if(this.$useLineGroups()){container.className='ace_line_group';fragment.appendChild(container);container.style.height=config.lineHeight*this.session.getRowLength(row)+"px";}else{while(container.firstChild){fragment.appendChild(container.firstChild);}}row++;}return fragment;};this.update=function(config){this.config=config;var html=[];var firstRow=config.firstRow,lastRow=config.lastRow;var row=firstRow;var foldLine=this.session.getNextFoldLine(row);var foldStart=foldLine?foldLine.start.row:Infinity;while(true){if(row>foldStart){row=foldLine.end.row+1;foldLine=this.session.getNextFoldLine(row,foldLine);foldStart=foldLine?foldLine.start.row:Infinity;}if(row>lastRow)break;if(this.$useLineGroups())html.push("<div class='ace_line_group' style='height:",config.lineHeight*this.session.getRowLength(row),"px'>");this.$renderLine(html,row,false,row==foldStart?foldLine:false);if(this.$useLineGroups())html.push("</div>");// end the line group
row++;}this.element.innerHTML=html.join("");};this.$textToken={"text":true,"rparen":true,"lparen":true};this.$renderToken=function(stringBuilder,screenColumn,token,value){var self=this;var replaceReg=/\t|&|<|>|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\u3000\uFEFF\uFFF9-\uFFFC])|[\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3000-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]/g;var replaceFunc=function replaceFunc(c,a,b,tabIdx,idx4){if(a){return self.showInvisibles?"<span class='ace_invisible ace_invisible_space'>"+lang.stringRepeat(self.SPACE_CHAR,c.length)+"</span>":c;}else if(c=="&"){return"&#38;";}else if(c=="<"){return"&#60;";}else if(c==">"){return"&#62;";}else if(c=="\t"){var tabSize=self.session.getScreenTabSize(screenColumn+tabIdx);screenColumn+=tabSize-1;return self.$tabStrings[tabSize];}else if(c=="\u3000"){var classToUse=self.showInvisibles?"ace_cjk ace_invisible ace_invisible_space":"ace_cjk";var space=self.showInvisibles?self.SPACE_CHAR:"";screenColumn+=1;return"<span class='"+classToUse+"' style='width:"+self.config.characterWidth*2+"px'>"+space+"</span>";}else if(b){return"<span class='ace_invisible ace_invisible_space ace_invalid'>"+self.SPACE_CHAR+"</span>";}else{screenColumn+=1;return"<span class='ace_cjk' style='width:"+self.config.characterWidth*2+"px'>"+c+"</span>";}};var output=value.replace(replaceReg,replaceFunc);if(!this.$textToken[token.type]){var classes="ace_"+token.type.replace(/\./g," ace_");var style="";if(token.type=="fold")style=" style='width:"+token.value.length*this.config.characterWidth+"px;' ";stringBuilder.push("<span class='",classes,"'",style,">",output,"</span>");}else{stringBuilder.push(output);}return screenColumn+value.length;};this.renderIndentGuide=function(stringBuilder,value,max){var cols=value.search(this.$indentGuideRe);if(cols<=0||cols>=max)return value;if(value[0]==" "){cols-=cols%this.tabSize;stringBuilder.push(lang.stringRepeat(this.$tabStrings[" "],cols/this.tabSize));return value.substr(cols);}else if(value[0]=="\t"){stringBuilder.push(lang.stringRepeat(this.$tabStrings["\t"],cols));return value.substr(cols);}return value;};this.$renderWrappedLine=function(stringBuilder,tokens,splits,onlyContents){var chars=0;var split=0;var splitChars=splits[0];var screenColumn=0;for(var i=0;i<tokens.length;i++){var token=tokens[i];var value=token.value;if(i==0&&this.displayIndentGuides){chars=value.length;value=this.renderIndentGuide(stringBuilder,value,splitChars);if(!value)continue;chars-=value.length;}if(chars+value.length<splitChars){screenColumn=this.$renderToken(stringBuilder,screenColumn,token,value);chars+=value.length;}else{while(chars+value.length>=splitChars){screenColumn=this.$renderToken(stringBuilder,screenColumn,token,value.substring(0,splitChars-chars));value=value.substring(splitChars-chars);chars=splitChars;if(!onlyContents){stringBuilder.push("</div>","<div class='ace_line' style='height:",this.config.lineHeight,"px'>");}stringBuilder.push(lang.stringRepeat("\xa0",splits.indent));split++;screenColumn=0;splitChars=splits[split]||Number.MAX_VALUE;}if(value.length!=0){chars+=value.length;screenColumn=this.$renderToken(stringBuilder,screenColumn,token,value);}}}};this.$renderSimpleLine=function(stringBuilder,tokens){var screenColumn=0;var token=tokens[0];var value=token.value;if(this.displayIndentGuides)value=this.renderIndentGuide(stringBuilder,value);if(value)screenColumn=this.$renderToken(stringBuilder,screenColumn,token,value);for(var i=1;i<tokens.length;i++){token=tokens[i];value=token.value;screenColumn=this.$renderToken(stringBuilder,screenColumn,token,value);}};this.$renderLine=function(stringBuilder,row,onlyContents,foldLine){if(!foldLine&&foldLine!=false)foldLine=this.session.getFoldLine(row);if(foldLine)var tokens=this.$getFoldLineTokens(row,foldLine);else var tokens=this.session.getTokens(row);if(!onlyContents){stringBuilder.push("<div class='ace_line' style='height:",this.config.lineHeight*(this.$useLineGroups()?1:this.session.getRowLength(row)),"px'>");}if(tokens.length){var splits=this.session.getRowSplitData(row);if(splits&&splits.length)this.$renderWrappedLine(stringBuilder,tokens,splits,onlyContents);else this.$renderSimpleLine(stringBuilder,tokens);}if(this.showInvisibles){if(foldLine)row=foldLine.end.row;stringBuilder.push("<span class='ace_invisible ace_invisible_eol'>",row==this.session.getLength()-1?this.EOF_CHAR:this.EOL_CHAR,"</span>");}if(!onlyContents)stringBuilder.push("</div>");};this.$getFoldLineTokens=function(row,foldLine){var session=this.session;var renderTokens=[];function addTokens(tokens,from,to){var idx=0,col=0;while(col+tokens[idx].value.length<from){col+=tokens[idx].value.length;idx++;if(idx==tokens.length)return;}if(col!=from){var value=tokens[idx].value.substring(from-col);if(value.length>to-from)value=value.substring(0,to-from);renderTokens.push({type:tokens[idx].type,value:value});col=from+value.length;idx+=1;}while(col<to&&idx<tokens.length){var value=tokens[idx].value;if(value.length+col>to){renderTokens.push({type:tokens[idx].type,value:value.substring(0,to-col)});}else renderTokens.push(tokens[idx]);col+=value.length;idx+=1;}}var tokens=session.getTokens(row);foldLine.walk(function(placeholder,row,column,lastColumn,isNewRow){if(placeholder!=null){renderTokens.push({type:"fold",value:placeholder});}else{if(isNewRow)tokens=session.getTokens(row);if(tokens.length)addTokens(tokens,lastColumn,column);}},foldLine.end.row,this.session.getLine(foldLine.end.row).length);return renderTokens;};this.$useLineGroups=function(){return this.session.getUseWrapMode();};this.destroy=function(){clearInterval(this.$pollSizeChangesTimer);if(this.$measureNode)this.$measureNode.parentNode.removeChild(this.$measureNode);delete this.$measureNode;};}).call(Text.prototype);exports.Text=Text;});ace.define("ace/layer/cursor",["require","exports","module","ace/lib/dom"],function(acequire,exports,module){"use strict";var dom=acequire("../lib/dom");var isIE8;var Cursor=function Cursor(parentEl){this.element=dom.createElement("div");this.element.className="ace_layer ace_cursor-layer";parentEl.appendChild(this.element);if(isIE8===undefined)isIE8=!("opacity"in this.element.style);this.isVisible=false;this.isBlinking=true;this.blinkInterval=1000;this.smoothBlinking=false;this.cursors=[];this.cursor=this.addCursor();dom.addCssClass(this.element,"ace_hidden-cursors");this.$updateCursors=(isIE8?this.$updateVisibility:this.$updateOpacity).bind(this);};(function(){this.$updateVisibility=function(val){var cursors=this.cursors;for(var i=cursors.length;i--;){cursors[i].style.visibility=val?"":"hidden";}};this.$updateOpacity=function(val){var cursors=this.cursors;for(var i=cursors.length;i--;){cursors[i].style.opacity=val?"":"0";}};this.$padding=0;this.setPadding=function(padding){this.$padding=padding;};this.setSession=function(session){this.session=session;};this.setBlinking=function(blinking){if(blinking!=this.isBlinking){this.isBlinking=blinking;this.restartTimer();}};this.setBlinkInterval=function(blinkInterval){if(blinkInterval!=this.blinkInterval){this.blinkInterval=blinkInterval;this.restartTimer();}};this.setSmoothBlinking=function(smoothBlinking){if(smoothBlinking!=this.smoothBlinking&&!isIE8){this.smoothBlinking=smoothBlinking;dom.setCssClass(this.element,"ace_smooth-blinking",smoothBlinking);this.$updateCursors(true);this.$updateCursors=this.$updateOpacity.bind(this);this.restartTimer();}};this.addCursor=function(){var el=dom.createElement("div");el.className="ace_cursor";this.element.appendChild(el);this.cursors.push(el);return el;};this.removeCursor=function(){if(this.cursors.length>1){var el=this.cursors.pop();el.parentNode.removeChild(el);return el;}};this.hideCursor=function(){this.isVisible=false;dom.addCssClass(this.element,"ace_hidden-cursors");this.restartTimer();};this.showCursor=function(){this.isVisible=true;dom.removeCssClass(this.element,"ace_hidden-cursors");this.restartTimer();};this.restartTimer=function(){var update=this.$updateCursors;clearInterval(this.intervalId);clearTimeout(this.timeoutId);if(this.smoothBlinking){dom.removeCssClass(this.element,"ace_smooth-blinking");}update(true);if(!this.isBlinking||!this.blinkInterval||!this.isVisible)return;if(this.smoothBlinking){setTimeout(function(){dom.addCssClass(this.element,"ace_smooth-blinking");}.bind(this));}var blink=function(){this.timeoutId=setTimeout(function(){update(false);},0.6*this.blinkInterval);}.bind(this);this.intervalId=setInterval(function(){update(true);blink();},this.blinkInterval);blink();};this.getPixelPosition=function(position,onScreen){if(!this.config||!this.session)return{left:0,top:0};if(!position)position=this.session.selection.getCursor();var pos=this.session.documentToScreenPosition(position);var cursorLeft=this.$padding+pos.column*this.config.characterWidth;var cursorTop=(pos.row-(onScreen?this.config.firstRowScreen:0))*this.config.lineHeight;return{left:cursorLeft,top:cursorTop};};this.update=function(config){this.config=config;var selections=this.session.$selectionMarkers;var i=0,cursorIndex=0;if(selections===undefined||selections.length===0){selections=[{cursor:null}];}for(var i=0,n=selections.length;i<n;i++){var pixelPos=this.getPixelPosition(selections[i].cursor,true);if((pixelPos.top>config.height+config.offset||pixelPos.top<0)&&i>1){continue;}var style=(this.cursors[cursorIndex++]||this.addCursor()).style;if(!this.drawCursor){style.left=pixelPos.left+"px";style.top=pixelPos.top+"px";style.width=config.characterWidth+"px";style.height=config.lineHeight+"px";}else{this.drawCursor(style,pixelPos,config,selections[i],this.session);}}while(this.cursors.length>cursorIndex){this.removeCursor();}var overwrite=this.session.getOverwrite();this.$setOverwrite(overwrite);this.$pixelPos=pixelPos;this.restartTimer();};this.drawCursor=null;this.$setOverwrite=function(overwrite){if(overwrite!=this.overwrite){this.overwrite=overwrite;if(overwrite)dom.addCssClass(this.element,"ace_overwrite-cursors");else dom.removeCssClass(this.element,"ace_overwrite-cursors");}};this.destroy=function(){clearInterval(this.intervalId);clearTimeout(this.timeoutId);};}).call(Cursor.prototype);exports.Cursor=Cursor;});ace.define("ace/scrollbar",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/event","ace/lib/event_emitter"],function(acequire,exports,module){"use strict";var oop=acequire("./lib/oop");var dom=acequire("./lib/dom");var event=acequire("./lib/event");var EventEmitter=acequire("./lib/event_emitter").EventEmitter;var MAX_SCROLL_H=0x8000;var ScrollBar=function ScrollBar(parent){this.element=dom.createElement("div");this.element.className="ace_scrollbar ace_scrollbar"+this.classSuffix;this.inner=dom.createElement("div");this.inner.className="ace_scrollbar-inner";this.element.appendChild(this.inner);parent.appendChild(this.element);this.setVisible(false);this.skipEvent=false;event.addListener(this.element,"scroll",this.onScroll.bind(this));event.addListener(this.element,"mousedown",event.preventDefault);};(function(){oop.implement(this,EventEmitter);this.setVisible=function(isVisible){this.element.style.display=isVisible?"":"none";this.isVisible=isVisible;this.coeff=1;};}).call(ScrollBar.prototype);var VScrollBar=function VScrollBar(parent,renderer){ScrollBar.call(this,parent);this.scrollTop=0;this.scrollHeight=0;renderer.$scrollbarWidth=this.width=dom.scrollbarWidth(parent.ownerDocument);this.inner.style.width=this.element.style.width=(this.width||15)+5+"px";};oop.inherits(VScrollBar,ScrollBar);(function(){this.classSuffix='-v';this.onScroll=function(){if(!this.skipEvent){this.scrollTop=this.element.scrollTop;if(this.coeff!=1){var h=this.element.clientHeight/this.scrollHeight;this.scrollTop=this.scrollTop*(1-h)/(this.coeff-h);}this._emit("scroll",{data:this.scrollTop});}this.skipEvent=false;};this.getWidth=function(){return this.isVisible?this.width:0;};this.setHeight=function(height){this.element.style.height=height+"px";};this.setInnerHeight=this.setScrollHeight=function(height){this.scrollHeight=height;if(height>MAX_SCROLL_H){this.coeff=MAX_SCROLL_H/height;height=MAX_SCROLL_H;}else if(this.coeff!=1){this.coeff=1;}this.inner.style.height=height+"px";};this.setScrollTop=function(scrollTop){if(this.scrollTop!=scrollTop){this.skipEvent=true;this.scrollTop=scrollTop;this.element.scrollTop=scrollTop*this.coeff;}};}).call(VScrollBar.prototype);var HScrollBar=function HScrollBar(parent,renderer){ScrollBar.call(this,parent);this.scrollLeft=0;this.height=renderer.$scrollbarWidth;this.inner.style.height=this.element.style.height=(this.height||15)+5+"px";};oop.inherits(HScrollBar,ScrollBar);(function(){this.classSuffix='-h';this.onScroll=function(){if(!this.skipEvent){this.scrollLeft=this.element.scrollLeft;this._emit("scroll",{data:this.scrollLeft});}this.skipEvent=false;};this.getHeight=function(){return this.isVisible?this.height:0;};this.setWidth=function(width){this.element.style.width=width+"px";};this.setInnerWidth=function(width){this.inner.style.width=width+"px";};this.setScrollWidth=function(width){this.inner.style.width=width+"px";};this.setScrollLeft=function(scrollLeft){if(this.scrollLeft!=scrollLeft){this.skipEvent=true;this.scrollLeft=this.element.scrollLeft=scrollLeft;}};}).call(HScrollBar.prototype);exports.ScrollBar=VScrollBar;// backward compatibility
exports.ScrollBarV=VScrollBar;// backward compatibility
exports.ScrollBarH=HScrollBar;// backward compatibility
exports.VScrollBar=VScrollBar;exports.HScrollBar=HScrollBar;});ace.define("ace/renderloop",["require","exports","module","ace/lib/event"],function(acequire,exports,module){"use strict";var event=acequire("./lib/event");var RenderLoop=function RenderLoop(onRender,win){this.onRender=onRender;this.pending=false;this.changes=0;this.window=win||window;};(function(){this.schedule=function(change){this.changes=this.changes|change;if(!this.pending&&this.changes){this.pending=true;var _self=this;event.nextFrame(function(){_self.pending=false;var changes;while(changes=_self.changes){_self.changes=0;_self.onRender(changes);}},this.window);}};}).call(RenderLoop.prototype);exports.RenderLoop=RenderLoop;});ace.define("ace/layer/font_metrics",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/lang","ace/lib/useragent","ace/lib/event_emitter"],function(acequire,exports,module){var oop=acequire("../lib/oop");var dom=acequire("../lib/dom");var lang=acequire("../lib/lang");var useragent=acequire("../lib/useragent");var EventEmitter=acequire("../lib/event_emitter").EventEmitter;var CHAR_COUNT=0;var FontMetrics=exports.FontMetrics=function(parentEl){this.el=dom.createElement("div");this.$setMeasureNodeStyles(this.el.style,true);this.$main=dom.createElement("div");this.$setMeasureNodeStyles(this.$main.style);this.$measureNode=dom.createElement("div");this.$setMeasureNodeStyles(this.$measureNode.style);this.el.appendChild(this.$main);this.el.appendChild(this.$measureNode);parentEl.appendChild(this.el);if(!CHAR_COUNT)this.$testFractionalRect();this.$measureNode.innerHTML=lang.stringRepeat("X",CHAR_COUNT);this.$characterSize={width:0,height:0};this.checkForSizeChanges();};(function(){oop.implement(this,EventEmitter);this.$characterSize={width:0,height:0};this.$testFractionalRect=function(){var el=dom.createElement("div");this.$setMeasureNodeStyles(el.style);el.style.width="0.2px";document.documentElement.appendChild(el);var w=el.getBoundingClientRect().width;if(w>0&&w<1)CHAR_COUNT=50;else CHAR_COUNT=100;el.parentNode.removeChild(el);};this.$setMeasureNodeStyles=function(style,isRoot){style.width=style.height="auto";style.left=style.top="0px";style.visibility="hidden";style.position="absolute";style.whiteSpace="pre";if(useragent.isIE<8){style["font-family"]="inherit";}else{style.font="inherit";}style.overflow=isRoot?"hidden":"visible";};this.checkForSizeChanges=function(){var size=this.$measureSizes();if(size&&(this.$characterSize.width!==size.width||this.$characterSize.height!==size.height)){this.$measureNode.style.fontWeight="bold";var boldSize=this.$measureSizes();this.$measureNode.style.fontWeight="";this.$characterSize=size;this.charSizes=Object.create(null);this.allowBoldFonts=boldSize&&boldSize.width===size.width&&boldSize.height===size.height;this._emit("changeCharacterSize",{data:size});}};this.$pollSizeChanges=function(){if(this.$pollSizeChangesTimer)return this.$pollSizeChangesTimer;var self=this;return this.$pollSizeChangesTimer=setInterval(function(){self.checkForSizeChanges();},500);};this.setPolling=function(val){if(val){this.$pollSizeChanges();}else if(this.$pollSizeChangesTimer){clearInterval(this.$pollSizeChangesTimer);this.$pollSizeChangesTimer=0;}};this.$measureSizes=function(){if(CHAR_COUNT===50){var rect=null;try{rect=this.$measureNode.getBoundingClientRect();}catch(e){rect={width:0,height:0};}var size={height:rect.height,width:rect.width/CHAR_COUNT};}else{var size={height:this.$measureNode.clientHeight,width:this.$measureNode.clientWidth/CHAR_COUNT};}if(size.width===0||size.height===0)return null;return size;};this.$measureCharWidth=function(ch){this.$main.innerHTML=lang.stringRepeat(ch,CHAR_COUNT);var rect=this.$main.getBoundingClientRect();return rect.width/CHAR_COUNT;};this.getCharacterWidth=function(ch){var w=this.charSizes[ch];if(w===undefined){w=this.charSizes[ch]=this.$measureCharWidth(ch)/this.$characterSize.width;}return w;};this.destroy=function(){clearInterval(this.$pollSizeChangesTimer);if(this.el&&this.el.parentNode)this.el.parentNode.removeChild(this.el);};}).call(FontMetrics.prototype);});ace.define("ace/virtual_renderer",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/config","ace/lib/useragent","ace/layer/gutter","ace/layer/marker","ace/layer/text","ace/layer/cursor","ace/scrollbar","ace/scrollbar","ace/renderloop","ace/layer/font_metrics","ace/lib/event_emitter"],function(acequire,exports,module){"use strict";var oop=acequire("./lib/oop");var dom=acequire("./lib/dom");var config=acequire("./config");var useragent=acequire("./lib/useragent");var GutterLayer=acequire("./layer/gutter").Gutter;var MarkerLayer=acequire("./layer/marker").Marker;var TextLayer=acequire("./layer/text").Text;var CursorLayer=acequire("./layer/cursor").Cursor;var HScrollBar=acequire("./scrollbar").HScrollBar;var VScrollBar=acequire("./scrollbar").VScrollBar;var RenderLoop=acequire("./renderloop").RenderLoop;var FontMetrics=acequire("./layer/font_metrics").FontMetrics;var EventEmitter=acequire("./lib/event_emitter").EventEmitter;var editorCss=".ace_editor {\
position: relative;\
overflow: hidden;\
font: 12px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;\
direction: ltr;\
text-align: left;\
}\
.ace_scroller {\
position: absolute;\
overflow: hidden;\
top: 0;\
bottom: 0;\
background-color: inherit;\
-ms-user-select: none;\
-moz-user-select: none;\
-webkit-user-select: none;\
user-select: none;\
cursor: text;\
}\
.ace_content {\
position: absolute;\
-moz-box-sizing: border-box;\
-webkit-box-sizing: border-box;\
box-sizing: border-box;\
min-width: 100%;\
}\
.ace_dragging .ace_scroller:before{\
position: absolute;\
top: 0;\
left: 0;\
right: 0;\
bottom: 0;\
content: '';\
background: rgba(250, 250, 250, 0.01);\
z-index: 1000;\
}\
.ace_dragging.ace_dark .ace_scroller:before{\
background: rgba(0, 0, 0, 0.01);\
}\
.ace_selecting, .ace_selecting * {\
cursor: text !important;\
}\
.ace_gutter {\
position: absolute;\
overflow : hidden;\
width: auto;\
top: 0;\
bottom: 0;\
left: 0;\
cursor: default;\
z-index: 4;\
-ms-user-select: none;\
-moz-user-select: none;\
-webkit-user-select: none;\
user-select: none;\
}\
.ace_gutter-active-line {\
position: absolute;\
left: 0;\
right: 0;\
}\
.ace_scroller.ace_scroll-left {\
box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;\
}\
.ace_gutter-cell {\
padding-left: 19px;\
padding-right: 6px;\
background-repeat: no-repeat;\
}\
.ace_gutter-cell.ace_error {\
background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==\");\
background-repeat: no-repeat;\
background-position: 2px center;\
}\
.ace_gutter-cell.ace_warning {\
background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==\");\
background-position: 2px center;\
}\
.ace_gutter-cell.ace_info {\
background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=\");\
background-position: 2px center;\
}\
.ace_dark .ace_gutter-cell.ace_info {\
background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC\");\
}\
.ace_scrollbar {\
position: absolute;\
right: 0;\
bottom: 0;\
z-index: 6;\
}\
.ace_scrollbar-inner {\
position: absolute;\
cursor: text;\
left: 0;\
top: 0;\
}\
.ace_scrollbar-v{\
overflow-x: hidden;\
overflow-y: scroll;\
top: 0;\
}\
.ace_scrollbar-h {\
overflow-x: scroll;\
overflow-y: hidden;\
left: 0;\
}\
.ace_print-margin {\
position: absolute;\
height: 100%;\
}\
.ace_text-input {\
position: absolute;\
z-index: 0;\
width: 0.5em;\
height: 1em;\
opacity: 0;\
background: transparent;\
-moz-appearance: none;\
appearance: none;\
border: none;\
resize: none;\
outline: none;\
overflow: hidden;\
font: inherit;\
padding: 0 1px;\
margin: 0 -1px;\
text-indent: -1em;\
-ms-user-select: text;\
-moz-user-select: text;\
-webkit-user-select: text;\
user-select: text;\
white-space: pre!important;\
}\
.ace_text-input.ace_composition {\
background: inherit;\
color: inherit;\
z-index: 1000;\
opacity: 1;\
text-indent: 0;\
}\
.ace_layer {\
z-index: 1;\
position: absolute;\
overflow: hidden;\
word-wrap: normal;\
white-space: pre;\
height: 100%;\
width: 100%;\
-moz-box-sizing: border-box;\
-webkit-box-sizing: border-box;\
box-sizing: border-box;\
pointer-events: none;\
}\
.ace_gutter-layer {\
position: relative;\
width: auto;\
text-align: right;\
pointer-events: auto;\
}\
.ace_text-layer {\
font: inherit !important;\
}\
.ace_cjk {\
display: inline-block;\
text-align: center;\
}\
.ace_cursor-layer {\
z-index: 4;\
}\
.ace_cursor {\
z-index: 4;\
position: absolute;\
-moz-box-sizing: border-box;\
-webkit-box-sizing: border-box;\
box-sizing: border-box;\
border-left: 2px solid;\
transform: translatez(0);\
}\
.ace_slim-cursors .ace_cursor {\
border-left-width: 1px;\
}\
.ace_overwrite-cursors .ace_cursor {\
border-left-width: 0;\
border-bottom: 1px solid;\
}\
.ace_hidden-cursors .ace_cursor {\
opacity: 0.2;\
}\
.ace_smooth-blinking .ace_cursor {\
-webkit-transition: opacity 0.18s;\
transition: opacity 0.18s;\
}\
.ace_editor.ace_multiselect .ace_cursor {\
border-left-width: 1px;\
}\
.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {\
position: absolute;\
z-index: 3;\
}\
.ace_marker-layer .ace_selection {\
position: absolute;\
z-index: 5;\
}\
.ace_marker-layer .ace_bracket {\
position: absolute;\
z-index: 6;\
}\
.ace_marker-layer .ace_active-line {\
position: absolute;\
z-index: 2;\
}\
.ace_marker-layer .ace_selected-word {\
position: absolute;\
z-index: 4;\
-moz-box-sizing: border-box;\
-webkit-box-sizing: border-box;\
box-sizing: border-box;\
}\
.ace_line .ace_fold {\
-moz-box-sizing: border-box;\
-webkit-box-sizing: border-box;\
box-sizing: border-box;\
display: inline-block;\
height: 11px;\
margin-top: -2px;\
vertical-align: middle;\
background-image:\
url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII=\"),\
url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=\");\
background-repeat: no-repeat, repeat-x;\
background-position: center center, top left;\
color: transparent;\
border: 1px solid black;\
border-radius: 2px;\
cursor: pointer;\
pointer-events: auto;\
}\
.ace_dark .ace_fold {\
}\
.ace_fold:hover{\
background-image:\
url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII=\"),\
url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC\");\
}\
.ace_tooltip {\
background-color: #FFF;\
background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.1));\
background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));\
border: 1px solid gray;\
border-radius: 1px;\
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\
color: black;\
max-width: 100%;\
padding: 3px 4px;\
position: fixed;\
z-index: 999999;\
-moz-box-sizing: border-box;\
-webkit-box-sizing: border-box;\
box-sizing: border-box;\
cursor: default;\
white-space: pre;\
word-wrap: break-word;\
line-height: normal;\
font-style: normal;\
font-weight: normal;\
letter-spacing: normal;\
pointer-events: none;\
}\
.ace_folding-enabled > .ace_gutter-cell {\
padding-right: 13px;\
}\
.ace_fold-widget {\
-moz-box-sizing: border-box;\
-webkit-box-sizing: border-box;\
box-sizing: border-box;\
margin: 0 -12px 0 1px;\
display: none;\
width: 11px;\
vertical-align: top;\
background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==\");\
background-repeat: no-repeat;\
background-position: center;\
border-radius: 3px;\
border: 1px solid transparent;\
cursor: pointer;\
}\
.ace_folding-enabled .ace_fold-widget {\
display: inline-block;   \
}\
.ace_fold-widget.ace_end {\
background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==\");\
}\
.ace_fold-widget.ace_closed {\
background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==\");\
}\
.ace_fold-widget:hover {\
border: 1px solid rgba(0, 0, 0, 0.3);\
background-color: rgba(255, 255, 255, 0.2);\
box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);\
}\
.ace_fold-widget:active {\
border: 1px solid rgba(0, 0, 0, 0.4);\
background-color: rgba(0, 0, 0, 0.05);\
box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);\
}\
.ace_dark .ace_fold-widget {\
background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC\");\
}\
.ace_dark .ace_fold-widget.ace_end {\
background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==\");\
}\
.ace_dark .ace_fold-widget.ace_closed {\
background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==\");\
}\
.ace_dark .ace_fold-widget:hover {\
box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);\
background-color: rgba(255, 255, 255, 0.1);\
}\
.ace_dark .ace_fold-widget:active {\
box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);\
}\
.ace_fold-widget.ace_invalid {\
background-color: #FFB4B4;\
border-color: #DE5555;\
}\
.ace_fade-fold-widgets .ace_fold-widget {\
-webkit-transition: opacity 0.4s ease 0.05s;\
transition: opacity 0.4s ease 0.05s;\
opacity: 0;\
}\
.ace_fade-fold-widgets:hover .ace_fold-widget {\
-webkit-transition: opacity 0.05s ease 0.05s;\
transition: opacity 0.05s ease 0.05s;\
opacity:1;\
}\
.ace_underline {\
text-decoration: underline;\
}\
.ace_bold {\
font-weight: bold;\
}\
.ace_nobold .ace_bold {\
font-weight: normal;\
}\
.ace_italic {\
font-style: italic;\
}\
.ace_error-marker {\
background-color: rgba(255, 0, 0,0.2);\
position: absolute;\
z-index: 9;\
}\
.ace_highlight-marker {\
background-color: rgba(255, 255, 0,0.2);\
position: absolute;\
z-index: 8;\
}\
.ace_br1 {border-top-left-radius    : 3px;}\
.ace_br2 {border-top-right-radius   : 3px;}\
.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}\
.ace_br4 {border-bottom-right-radius: 3px;}\
.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}\
.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}\
.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}\
.ace_br8 {border-bottom-left-radius : 3px;}\
.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}\
.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}\
.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}\
.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}\
.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}\
.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}\
.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}\
";dom.importCssString(editorCss,"ace_editor.css");var VirtualRenderer=function VirtualRenderer(container,theme){var _self=this;this.container=container||dom.createElement("div");this.$keepTextAreaAtCursor=!useragent.isOldIE;dom.addCssClass(this.container,"ace_editor");this.setTheme(theme);this.$gutter=dom.createElement("div");this.$gutter.className="ace_gutter";this.container.appendChild(this.$gutter);this.scroller=dom.createElement("div");this.scroller.className="ace_scroller";this.container.appendChild(this.scroller);this.content=dom.createElement("div");this.content.className="ace_content";this.scroller.appendChild(this.content);this.$gutterLayer=new GutterLayer(this.$gutter);this.$gutterLayer.on("changeGutterWidth",this.onGutterResize.bind(this));this.$markerBack=new MarkerLayer(this.content);var textLayer=this.$textLayer=new TextLayer(this.content);this.canvas=textLayer.element;this.$markerFront=new MarkerLayer(this.content);this.$cursorLayer=new CursorLayer(this.content);this.$horizScroll=false;this.$vScroll=false;this.scrollBar=this.scrollBarV=new VScrollBar(this.container,this);this.scrollBarH=new HScrollBar(this.container,this);this.scrollBarV.addEventListener("scroll",function(e){if(!_self.$scrollAnimation)_self.session.setScrollTop(e.data-_self.scrollMargin.top);});this.scrollBarH.addEventListener("scroll",function(e){if(!_self.$scrollAnimation)_self.session.setScrollLeft(e.data-_self.scrollMargin.left);});this.scrollTop=0;this.scrollLeft=0;this.cursorPos={row:0,column:0};this.$fontMetrics=new FontMetrics(this.container);this.$textLayer.$setFontMetrics(this.$fontMetrics);this.$textLayer.addEventListener("changeCharacterSize",function(e){_self.updateCharacterSize();_self.onResize(true,_self.gutterWidth,_self.$size.width,_self.$size.height);_self._signal("changeCharacterSize",e);});this.$size={width:0,height:0,scrollerHeight:0,scrollerWidth:0,$dirty:true};this.layerConfig={width:1,padding:0,firstRow:0,firstRowScreen:0,lastRow:0,lineHeight:0,characterWidth:0,minHeight:1,maxHeight:1,offset:0,height:1,gutterOffset:1};this.scrollMargin={left:0,right:0,top:0,bottom:0,v:0,h:0};this.$loop=new RenderLoop(this.$renderChanges.bind(this),this.container.ownerDocument.defaultView);this.$loop.schedule(this.CHANGE_FULL);this.updateCharacterSize();this.setPadding(4);config.resetOptions(this);config._emit("renderer",this);};(function(){this.CHANGE_CURSOR=1;this.CHANGE_MARKER=2;this.CHANGE_GUTTER=4;this.CHANGE_SCROLL=8;this.CHANGE_LINES=16;this.CHANGE_TEXT=32;this.CHANGE_SIZE=64;this.CHANGE_MARKER_BACK=128;this.CHANGE_MARKER_FRONT=256;this.CHANGE_FULL=512;this.CHANGE_H_SCROLL=1024;oop.implement(this,EventEmitter);this.updateCharacterSize=function(){if(this.$textLayer.allowBoldFonts!=this.$allowBoldFonts){this.$allowBoldFonts=this.$textLayer.allowBoldFonts;this.setStyle("ace_nobold",!this.$allowBoldFonts);}this.layerConfig.characterWidth=this.characterWidth=this.$textLayer.getCharacterWidth();this.layerConfig.lineHeight=this.lineHeight=this.$textLayer.getLineHeight();this.$updatePrintMargin();};this.setSession=function(session){if(this.session)this.session.doc.off("changeNewLineMode",this.onChangeNewLineMode);this.session=session;if(session&&this.scrollMargin.top&&session.getScrollTop()<=0)session.setScrollTop(-this.scrollMargin.top);this.$cursorLayer.setSession(session);this.$markerBack.setSession(session);this.$markerFront.setSession(session);this.$gutterLayer.setSession(session);this.$textLayer.setSession(session);if(!session)return;this.$loop.schedule(this.CHANGE_FULL);this.session.$setFontMetrics(this.$fontMetrics);this.scrollBarV.scrollLeft=this.scrollBarV.scrollTop=null;this.onChangeNewLineMode=this.onChangeNewLineMode.bind(this);this.onChangeNewLineMode();this.session.doc.on("changeNewLineMode",this.onChangeNewLineMode);};this.updateLines=function(firstRow,lastRow,force){if(lastRow===undefined)lastRow=Infinity;if(!this.$changedLines){this.$changedLines={firstRow:firstRow,lastRow:lastRow};}else{if(this.$changedLines.firstRow>firstRow)this.$changedLines.firstRow=firstRow;if(this.$changedLines.lastRow<lastRow)this.$changedLines.lastRow=lastRow;}if(this.$changedLines.lastRow<this.layerConfig.firstRow){if(force)this.$changedLines.lastRow=this.layerConfig.lastRow;else return;}if(this.$changedLines.firstRow>this.layerConfig.lastRow)return;this.$loop.schedule(this.CHANGE_LINES);};this.onChangeNewLineMode=function(){this.$loop.schedule(this.CHANGE_TEXT);this.$textLayer.$updateEolChar();};this.onChangeTabSize=function(){this.$loop.schedule(this.CHANGE_TEXT|this.CHANGE_MARKER);this.$textLayer.onChangeTabSize();};this.updateText=function(){this.$loop.schedule(this.CHANGE_TEXT);};this.updateFull=function(force){if(force)this.$renderChanges(this.CHANGE_FULL,true);else this.$loop.schedule(this.CHANGE_FULL);};this.updateFontSize=function(){this.$textLayer.checkForSizeChanges();};this.$changes=0;this.$updateSizeAsync=function(){if(this.$loop.pending)this.$size.$dirty=true;else this.onResize();};this.onResize=function(force,gutterWidth,width,height){if(this.resizing>2)return;else if(this.resizing>0)this.resizing++;else this.resizing=force?1:0;var el=this.container;if(!height)height=el.clientHeight||el.scrollHeight;if(!width)width=el.clientWidth||el.scrollWidth;var changes=this.$updateCachedSize(force,gutterWidth,width,height);if(!this.$size.scrollerHeight||!width&&!height)return this.resizing=0;if(force)this.$gutterLayer.$padding=null;if(force)this.$renderChanges(changes|this.$changes,true);else this.$loop.schedule(changes|this.$changes);if(this.resizing)this.resizing=0;this.scrollBarV.scrollLeft=this.scrollBarV.scrollTop=null;};this.$updateCachedSize=function(force,gutterWidth,width,height){height-=this.$extraHeight||0;var changes=0;var size=this.$size;var oldSize={width:size.width,height:size.height,scrollerHeight:size.scrollerHeight,scrollerWidth:size.scrollerWidth};if(height&&(force||size.height!=height)){size.height=height;changes|=this.CHANGE_SIZE;size.scrollerHeight=size.height;if(this.$horizScroll)size.scrollerHeight-=this.scrollBarH.getHeight();this.scrollBarV.element.style.bottom=this.scrollBarH.getHeight()+"px";changes=changes|this.CHANGE_SCROLL;}if(width&&(force||size.width!=width)){changes|=this.CHANGE_SIZE;size.width=width;if(gutterWidth==null)gutterWidth=this.$showGutter?this.$gutter.offsetWidth:0;this.gutterWidth=gutterWidth;this.scrollBarH.element.style.left=this.scroller.style.left=gutterWidth+"px";size.scrollerWidth=Math.max(0,width-gutterWidth-this.scrollBarV.getWidth());this.scrollBarH.element.style.right=this.scroller.style.right=this.scrollBarV.getWidth()+"px";this.scroller.style.bottom=this.scrollBarH.getHeight()+"px";if(this.session&&this.session.getUseWrapMode()&&this.adjustWrapLimit()||force)changes|=this.CHANGE_FULL;}size.$dirty=!width||!height;if(changes)this._signal("resize",oldSize);return changes;};this.onGutterResize=function(){var gutterWidth=this.$showGutter?this.$gutter.offsetWidth:0;if(gutterWidth!=this.gutterWidth)this.$changes|=this.$updateCachedSize(true,gutterWidth,this.$size.width,this.$size.height);if(this.session.getUseWrapMode()&&this.adjustWrapLimit()){this.$loop.schedule(this.CHANGE_FULL);}else if(this.$size.$dirty){this.$loop.schedule(this.CHANGE_FULL);}else{this.$computeLayerConfig();this.$loop.schedule(this.CHANGE_MARKER);}};this.adjustWrapLimit=function(){var availableWidth=this.$size.scrollerWidth-this.$padding*2;var limit=Math.floor(availableWidth/this.characterWidth);return this.session.adjustWrapLimit(limit,this.$showPrintMargin&&this.$printMarginColumn);};this.setAnimatedScroll=function(shouldAnimate){this.setOption("animatedScroll",shouldAnimate);};this.getAnimatedScroll=function(){return this.$animatedScroll;};this.setShowInvisibles=function(showInvisibles){this.setOption("showInvisibles",showInvisibles);};this.getShowInvisibles=function(){return this.getOption("showInvisibles");};this.getDisplayIndentGuides=function(){return this.getOption("displayIndentGuides");};this.setDisplayIndentGuides=function(display){this.setOption("displayIndentGuides",display);};this.setShowPrintMargin=function(showPrintMargin){this.setOption("showPrintMargin",showPrintMargin);};this.getShowPrintMargin=function(){return this.getOption("showPrintMargin");};this.setPrintMarginColumn=function(showPrintMargin){this.setOption("printMarginColumn",showPrintMargin);};this.getPrintMarginColumn=function(){return this.getOption("printMarginColumn");};this.getShowGutter=function(){return this.getOption("showGutter");};this.setShowGutter=function(show){return this.setOption("showGutter",show);};this.getFadeFoldWidgets=function(){return this.getOption("fadeFoldWidgets");};this.setFadeFoldWidgets=function(show){this.setOption("fadeFoldWidgets",show);};this.setHighlightGutterLine=function(shouldHighlight){this.setOption("highlightGutterLine",shouldHighlight);};this.getHighlightGutterLine=function(){return this.getOption("highlightGutterLine");};this.$updateGutterLineHighlight=function(){var pos=this.$cursorLayer.$pixelPos;var height=this.layerConfig.lineHeight;if(this.session.getUseWrapMode()){var cursor=this.session.selection.getCursor();cursor.column=0;pos=this.$cursorLayer.getPixelPosition(cursor,true);height*=this.session.getRowLength(cursor.row);}this.$gutterLineHighlight.style.top=pos.top-this.layerConfig.offset+"px";this.$gutterLineHighlight.style.height=height+"px";};this.$updatePrintMargin=function(){if(!this.$showPrintMargin&&!this.$printMarginEl)return;if(!this.$printMarginEl){var containerEl=dom.createElement("div");containerEl.className="ace_layer ace_print-margin-layer";this.$printMarginEl=dom.createElement("div");this.$printMarginEl.className="ace_print-margin";containerEl.appendChild(this.$printMarginEl);this.content.insertBefore(containerEl,this.content.firstChild);}var style=this.$printMarginEl.style;style.left=this.characterWidth*this.$printMarginColumn+this.$padding+"px";style.visibility=this.$showPrintMargin?"visible":"hidden";if(this.session&&this.session.$wrap==-1)this.adjustWrapLimit();};this.getContainerElement=function(){return this.container;};this.getMouseEventTarget=function(){return this.scroller;};this.getTextAreaContainer=function(){return this.container;};this.$moveTextAreaToCursor=function(){if(!this.$keepTextAreaAtCursor)return;var config=this.layerConfig;var posTop=this.$cursorLayer.$pixelPos.top;var posLeft=this.$cursorLayer.$pixelPos.left;posTop-=config.offset;var style=this.textarea.style;var h=this.lineHeight;if(posTop<0||posTop>config.height-h){style.top=style.left="0";return;}var w=this.characterWidth;if(this.$composition){var val=this.textarea.value.replace(/^\x01+/,"");w*=this.session.$getStringScreenWidth(val)[0]+2;h+=2;}posLeft-=this.scrollLeft;if(posLeft>this.$size.scrollerWidth-w)posLeft=this.$size.scrollerWidth-w;posLeft+=this.gutterWidth;style.height=h+"px";style.width=w+"px";style.left=Math.min(posLeft,this.$size.scrollerWidth-w)+"px";style.top=Math.min(posTop,this.$size.height-h)+"px";};this.getFirstVisibleRow=function(){return this.layerConfig.firstRow;};this.getFirstFullyVisibleRow=function(){return this.layerConfig.firstRow+(this.layerConfig.offset===0?0:1);};this.getLastFullyVisibleRow=function(){var config=this.layerConfig;var lastRow=config.lastRow;var top=this.session.documentToScreenRow(lastRow,0)*config.lineHeight;if(top-this.session.getScrollTop()>config.height-config.lineHeight)return lastRow-1;return lastRow;};this.getLastVisibleRow=function(){return this.layerConfig.lastRow;};this.$padding=null;this.setPadding=function(padding){this.$padding=padding;this.$textLayer.setPadding(padding);this.$cursorLayer.setPadding(padding);this.$markerFront.setPadding(padding);this.$markerBack.setPadding(padding);this.$loop.schedule(this.CHANGE_FULL);this.$updatePrintMargin();};this.setScrollMargin=function(top,bottom,left,right){var sm=this.scrollMargin;sm.top=top|0;sm.bottom=bottom|0;sm.right=right|0;sm.left=left|0;sm.v=sm.top+sm.bottom;sm.h=sm.left+sm.right;if(sm.top&&this.scrollTop<=0&&this.session)this.session.setScrollTop(-sm.top);this.updateFull();};this.getHScrollBarAlwaysVisible=function(){return this.$hScrollBarAlwaysVisible;};this.setHScrollBarAlwaysVisible=function(alwaysVisible){this.setOption("hScrollBarAlwaysVisible",alwaysVisible);};this.getVScrollBarAlwaysVisible=function(){return this.$vScrollBarAlwaysVisible;};this.setVScrollBarAlwaysVisible=function(alwaysVisible){this.setOption("vScrollBarAlwaysVisible",alwaysVisible);};this.$updateScrollBarV=function(){var scrollHeight=this.layerConfig.maxHeight;var scrollerHeight=this.$size.scrollerHeight;if(!this.$maxLines&&this.$scrollPastEnd){scrollHeight-=(scrollerHeight-this.lineHeight)*this.$scrollPastEnd;if(this.scrollTop>scrollHeight-scrollerHeight){scrollHeight=this.scrollTop+scrollerHeight;this.scrollBarV.scrollTop=null;}}this.scrollBarV.setScrollHeight(scrollHeight+this.scrollMargin.v);this.scrollBarV.setScrollTop(this.scrollTop+this.scrollMargin.top);};this.$updateScrollBarH=function(){this.scrollBarH.setScrollWidth(this.layerConfig.width+2*this.$padding+this.scrollMargin.h);this.scrollBarH.setScrollLeft(this.scrollLeft+this.scrollMargin.left);};this.$frozen=false;this.freeze=function(){this.$frozen=true;};this.unfreeze=function(){this.$frozen=false;};this.$renderChanges=function(changes,force){if(this.$changes){changes|=this.$changes;this.$changes=0;}if(!this.session||!this.container.offsetWidth||this.$frozen||!changes&&!force){this.$changes|=changes;return;}if(this.$size.$dirty){this.$changes|=changes;return this.onResize(true);}if(!this.lineHeight){this.$textLayer.checkForSizeChanges();}this._signal("beforeRender");var config=this.layerConfig;if(changes&this.CHANGE_FULL||changes&this.CHANGE_SIZE||changes&this.CHANGE_TEXT||changes&this.CHANGE_LINES||changes&this.CHANGE_SCROLL||changes&this.CHANGE_H_SCROLL){changes|=this.$computeLayerConfig();if(config.firstRow!=this.layerConfig.firstRow&&config.firstRowScreen==this.layerConfig.firstRowScreen){var st=this.scrollTop+(config.firstRow-this.layerConfig.firstRow)*this.lineHeight;if(st>0){this.scrollTop=st;changes=changes|this.CHANGE_SCROLL;changes|=this.$computeLayerConfig();}}config=this.layerConfig;this.$updateScrollBarV();if(changes&this.CHANGE_H_SCROLL)this.$updateScrollBarH();this.$gutterLayer.element.style.marginTop=-config.offset+"px";this.content.style.marginTop=-config.offset+"px";this.content.style.width=config.width+2*this.$padding+"px";this.content.style.height=config.minHeight+"px";}if(changes&this.CHANGE_H_SCROLL){this.content.style.marginLeft=-this.scrollLeft+"px";this.scroller.className=this.scrollLeft<=0?"ace_scroller":"ace_scroller ace_scroll-left";}if(changes&this.CHANGE_FULL){this.$textLayer.update(config);if(this.$showGutter)this.$gutterLayer.update(config);this.$markerBack.update(config);this.$markerFront.update(config);this.$cursorLayer.update(config);this.$moveTextAreaToCursor();this.$highlightGutterLine&&this.$updateGutterLineHighlight();this._signal("afterRender");return;}if(changes&this.CHANGE_SCROLL){if(changes&this.CHANGE_TEXT||changes&this.CHANGE_LINES)this.$textLayer.update(config);else this.$textLayer.scrollLines(config);if(this.$showGutter)this.$gutterLayer.update(config);this.$markerBack.update(config);this.$markerFront.update(config);this.$cursorLayer.update(config);this.$highlightGutterLine&&this.$updateGutterLineHighlight();this.$moveTextAreaToCursor();this._signal("afterRender");return;}if(changes&this.CHANGE_TEXT){this.$textLayer.update(config);if(this.$showGutter)this.$gutterLayer.update(config);}else if(changes&this.CHANGE_LINES){if(this.$updateLines()||changes&this.CHANGE_GUTTER&&this.$showGutter)this.$gutterLayer.update(config);}else if(changes&this.CHANGE_TEXT||changes&this.CHANGE_GUTTER){if(this.$showGutter)this.$gutterLayer.update(config);}if(changes&this.CHANGE_CURSOR){this.$cursorLayer.update(config);this.$moveTextAreaToCursor();this.$highlightGutterLine&&this.$updateGutterLineHighlight();}if(changes&(this.CHANGE_MARKER|this.CHANGE_MARKER_FRONT)){this.$markerFront.update(config);}if(changes&(this.CHANGE_MARKER|this.CHANGE_MARKER_BACK)){this.$markerBack.update(config);}this._signal("afterRender");};this.$autosize=function(){var height=this.session.getScreenLength()*this.lineHeight;var maxHeight=this.$maxLines*this.lineHeight;var desiredHeight=Math.min(maxHeight,Math.max((this.$minLines||1)*this.lineHeight,height))+this.scrollMargin.v+(this.$extraHeight||0);if(this.$horizScroll)desiredHeight+=this.scrollBarH.getHeight();if(this.$maxPixelHeight&&desiredHeight>this.$maxPixelHeight)desiredHeight=this.$maxPixelHeight;var vScroll=height>maxHeight;if(desiredHeight!=this.desiredHeight||this.$size.height!=this.desiredHeight||vScroll!=this.$vScroll){if(vScroll!=this.$vScroll){this.$vScroll=vScroll;this.scrollBarV.setVisible(vScroll);}var w=this.container.clientWidth;this.container.style.height=desiredHeight+"px";this.$updateCachedSize(true,this.$gutterWidth,w,desiredHeight);this.desiredHeight=desiredHeight;this._signal("autosize");}};this.$computeLayerConfig=function(){var session=this.session;var size=this.$size;var hideScrollbars=size.height<=2*this.lineHeight;var screenLines=this.session.getScreenLength();var maxHeight=screenLines*this.lineHeight;var longestLine=this.$getLongestLine();var horizScroll=!hideScrollbars&&(this.$hScrollBarAlwaysVisible||size.scrollerWidth-longestLine-2*this.$padding<0);var hScrollChanged=this.$horizScroll!==horizScroll;if(hScrollChanged){this.$horizScroll=horizScroll;this.scrollBarH.setVisible(horizScroll);}var vScrollBefore=this.$vScroll;// autosize can change vscroll value in which case we need to update longestLine
if(this.$maxLines&&this.lineHeight>1)this.$autosize();var offset=this.scrollTop%this.lineHeight;var minHeight=size.scrollerHeight+this.lineHeight;var scrollPastEnd=!this.$maxLines&&this.$scrollPastEnd?(size.scrollerHeight-this.lineHeight)*this.$scrollPastEnd:0;maxHeight+=scrollPastEnd;var sm=this.scrollMargin;this.session.setScrollTop(Math.max(-sm.top,Math.min(this.scrollTop,maxHeight-size.scrollerHeight+sm.bottom)));this.session.setScrollLeft(Math.max(-sm.left,Math.min(this.scrollLeft,longestLine+2*this.$padding-size.scrollerWidth+sm.right)));var vScroll=!hideScrollbars&&(this.$vScrollBarAlwaysVisible||size.scrollerHeight-maxHeight+scrollPastEnd<0||this.scrollTop>sm.top);var vScrollChanged=vScrollBefore!==vScroll;if(vScrollChanged){this.$vScroll=vScroll;this.scrollBarV.setVisible(vScroll);}var lineCount=Math.ceil(minHeight/this.lineHeight)-1;var firstRow=Math.max(0,Math.round((this.scrollTop-offset)/this.lineHeight));var lastRow=firstRow+lineCount;var firstRowScreen,firstRowHeight;var lineHeight=this.lineHeight;firstRow=session.screenToDocumentRow(firstRow,0);var foldLine=session.getFoldLine(firstRow);if(foldLine){firstRow=foldLine.start.row;}firstRowScreen=session.documentToScreenRow(firstRow,0);firstRowHeight=session.getRowLength(firstRow)*lineHeight;lastRow=Math.min(session.screenToDocumentRow(lastRow,0),session.getLength()-1);minHeight=size.scrollerHeight+session.getRowLength(lastRow)*lineHeight+firstRowHeight;offset=this.scrollTop-firstRowScreen*lineHeight;var changes=0;if(this.layerConfig.width!=longestLine)changes=this.CHANGE_H_SCROLL;if(hScrollChanged||vScrollChanged){changes=this.$updateCachedSize(true,this.gutterWidth,size.width,size.height);this._signal("scrollbarVisibilityChanged");if(vScrollChanged)longestLine=this.$getLongestLine();}this.layerConfig={width:longestLine,padding:this.$padding,firstRow:firstRow,firstRowScreen:firstRowScreen,lastRow:lastRow,lineHeight:lineHeight,characterWidth:this.characterWidth,minHeight:minHeight,maxHeight:maxHeight,offset:offset,gutterOffset:lineHeight?Math.max(0,Math.ceil((offset+size.height-size.scrollerHeight)/lineHeight)):0,height:this.$size.scrollerHeight};return changes;};this.$updateLines=function(){var firstRow=this.$changedLines.firstRow;var lastRow=this.$changedLines.lastRow;this.$changedLines=null;var layerConfig=this.layerConfig;if(firstRow>layerConfig.lastRow+1){return;}if(lastRow<layerConfig.firstRow){return;}if(lastRow===Infinity){if(this.$showGutter)this.$gutterLayer.update(layerConfig);this.$textLayer.update(layerConfig);return;}this.$textLayer.updateLines(layerConfig,firstRow,lastRow);return true;};this.$getLongestLine=function(){var charCount=this.session.getScreenWidth();if(this.showInvisibles&&!this.session.$useWrapMode)charCount+=1;return Math.max(this.$size.scrollerWidth-2*this.$padding,Math.round(charCount*this.characterWidth));};this.updateFrontMarkers=function(){this.$markerFront.setMarkers(this.session.getMarkers(true));this.$loop.schedule(this.CHANGE_MARKER_FRONT);};this.updateBackMarkers=function(){this.$markerBack.setMarkers(this.session.getMarkers());this.$loop.schedule(this.CHANGE_MARKER_BACK);};this.addGutterDecoration=function(row,className){this.$gutterLayer.addGutterDecoration(row,className);};this.removeGutterDecoration=function(row,className){this.$gutterLayer.removeGutterDecoration(row,className);};this.updateBreakpoints=function(rows){this.$loop.schedule(this.CHANGE_GUTTER);};this.setAnnotations=function(annotations){this.$gutterLayer.setAnnotations(annotations);this.$loop.schedule(this.CHANGE_GUTTER);};this.updateCursor=function(){this.$loop.schedule(this.CHANGE_CURSOR);};this.hideCursor=function(){this.$cursorLayer.hideCursor();};this.showCursor=function(){this.$cursorLayer.showCursor();};this.scrollSelectionIntoView=function(anchor,lead,offset){this.scrollCursorIntoView(anchor,offset);this.scrollCursorIntoView(lead,offset);};this.scrollCursorIntoView=function(cursor,offset,$viewMargin){if(this.$size.scrollerHeight===0)return;var pos=this.$cursorLayer.getPixelPosition(cursor);var left=pos.left;var top=pos.top;var topMargin=$viewMargin&&$viewMargin.top||0;var bottomMargin=$viewMargin&&$viewMargin.bottom||0;var scrollTop=this.$scrollAnimation?this.session.getScrollTop():this.scrollTop;if(scrollTop+topMargin>top){if(offset&&scrollTop+topMargin>top+this.lineHeight)top-=offset*this.$size.scrollerHeight;if(top===0)top=-this.scrollMargin.top;this.session.setScrollTop(top);}else if(scrollTop+this.$size.scrollerHeight-bottomMargin<top+this.lineHeight){if(offset&&scrollTop+this.$size.scrollerHeight-bottomMargin<top-this.lineHeight)top+=offset*this.$size.scrollerHeight;this.session.setScrollTop(top+this.lineHeight-this.$size.scrollerHeight);}var scrollLeft=this.scrollLeft;if(scrollLeft>left){if(left<this.$padding+2*this.layerConfig.characterWidth)left=-this.scrollMargin.left;this.session.setScrollLeft(left);}else if(scrollLeft+this.$size.scrollerWidth<left+this.characterWidth){this.session.setScrollLeft(Math.round(left+this.characterWidth-this.$size.scrollerWidth));}else if(scrollLeft<=this.$padding&&left-scrollLeft<this.characterWidth){this.session.setScrollLeft(0);}};this.getScrollTop=function(){return this.session.getScrollTop();};this.getScrollLeft=function(){return this.session.getScrollLeft();};this.getScrollTopRow=function(){return this.scrollTop/this.lineHeight;};this.getScrollBottomRow=function(){return Math.max(0,Math.floor((this.scrollTop+this.$size.scrollerHeight)/this.lineHeight)-1);};this.scrollToRow=function(row){this.session.setScrollTop(row*this.lineHeight);};this.alignCursor=function(cursor,alignment){if(typeof cursor=="number")cursor={row:cursor,column:0};var pos=this.$cursorLayer.getPixelPosition(cursor);var h=this.$size.scrollerHeight-this.lineHeight;var offset=pos.top-h*(alignment||0);this.session.setScrollTop(offset);return offset;};this.STEPS=8;this.$calcSteps=function(fromValue,toValue){var i=0;var l=this.STEPS;var steps=[];var func=function func(t,x_min,dx){return dx*(Math.pow(t-1,3)+1)+x_min;};for(i=0;i<l;++i){steps.push(func(i/this.STEPS,fromValue,toValue-fromValue));}return steps;};this.scrollToLine=function(line,center,animate,callback){var pos=this.$cursorLayer.getPixelPosition({row:line,column:0});var offset=pos.top;if(center)offset-=this.$size.scrollerHeight/2;var initialScroll=this.scrollTop;this.session.setScrollTop(offset);if(animate!==false)this.animateScrolling(initialScroll,callback);};this.animateScrolling=function(fromValue,callback){var toValue=this.scrollTop;if(!this.$animatedScroll)return;var _self=this;if(fromValue==toValue)return;if(this.$scrollAnimation){var oldSteps=this.$scrollAnimation.steps;if(oldSteps.length){fromValue=oldSteps[0];if(fromValue==toValue)return;}}var steps=_self.$calcSteps(fromValue,toValue);this.$scrollAnimation={from:fromValue,to:toValue,steps:steps};clearInterval(this.$timer);_self.session.setScrollTop(steps.shift());_self.session.$scrollTop=toValue;this.$timer=setInterval(function(){if(steps.length){_self.session.setScrollTop(steps.shift());_self.session.$scrollTop=toValue;}else if(toValue!=null){_self.session.$scrollTop=-1;_self.session.setScrollTop(toValue);toValue=null;}else{_self.$timer=clearInterval(_self.$timer);_self.$scrollAnimation=null;callback&&callback();}},10);};this.scrollToY=function(scrollTop){if(this.scrollTop!==scrollTop){this.$loop.schedule(this.CHANGE_SCROLL);this.scrollTop=scrollTop;}};this.scrollToX=function(scrollLeft){if(this.scrollLeft!==scrollLeft)this.scrollLeft=scrollLeft;this.$loop.schedule(this.CHANGE_H_SCROLL);};this.scrollTo=function(x,y){this.session.setScrollTop(y);this.session.setScrollLeft(y);};this.scrollBy=function(deltaX,deltaY){deltaY&&this.session.setScrollTop(this.session.getScrollTop()+deltaY);deltaX&&this.session.setScrollLeft(this.session.getScrollLeft()+deltaX);};this.isScrollableBy=function(deltaX,deltaY){if(deltaY<0&&this.session.getScrollTop()>=1-this.scrollMargin.top)return true;if(deltaY>0&&this.session.getScrollTop()+this.$size.scrollerHeight-this.layerConfig.maxHeight<-1+this.scrollMargin.bottom)return true;if(deltaX<0&&this.session.getScrollLeft()>=1-this.scrollMargin.left)return true;if(deltaX>0&&this.session.getScrollLeft()+this.$size.scrollerWidth-this.layerConfig.width<-1+this.scrollMargin.right)return true;};this.pixelToScreenCoordinates=function(x,y){var canvasPos=this.scroller.getBoundingClientRect();var offset=(x+this.scrollLeft-canvasPos.left-this.$padding)/this.characterWidth;var row=Math.floor((y+this.scrollTop-canvasPos.top)/this.lineHeight);var col=Math.round(offset);return{row:row,column:col,side:offset-col>0?1:-1};};this.screenToTextCoordinates=function(x,y){var canvasPos=this.scroller.getBoundingClientRect();var col=Math.round((x+this.scrollLeft-canvasPos.left-this.$padding)/this.characterWidth);var row=(y+this.scrollTop-canvasPos.top)/this.lineHeight;return this.session.screenToDocumentPosition(row,Math.max(col,0));};this.textToScreenCoordinates=function(row,column){var canvasPos=this.scroller.getBoundingClientRect();var pos=this.session.documentToScreenPosition(row,column);var x=this.$padding+Math.round(pos.column*this.characterWidth);var y=pos.row*this.lineHeight;return{pageX:canvasPos.left+x-this.scrollLeft,pageY:canvasPos.top+y-this.scrollTop};};this.visualizeFocus=function(){dom.addCssClass(this.container,"ace_focus");};this.visualizeBlur=function(){dom.removeCssClass(this.container,"ace_focus");};this.showComposition=function(position){if(!this.$composition)this.$composition={keepTextAreaAtCursor:this.$keepTextAreaAtCursor,cssText:this.textarea.style.cssText};this.$keepTextAreaAtCursor=true;dom.addCssClass(this.textarea,"ace_composition");this.textarea.style.cssText="";this.$moveTextAreaToCursor();};this.setCompositionText=function(text){this.$moveTextAreaToCursor();};this.hideComposition=function(){if(!this.$composition)return;dom.removeCssClass(this.textarea,"ace_composition");this.$keepTextAreaAtCursor=this.$composition.keepTextAreaAtCursor;this.textarea.style.cssText=this.$composition.cssText;this.$composition=null;};this.setTheme=function(theme,cb){var _self=this;this.$themeId=theme;_self._dispatchEvent('themeChange',{theme:theme});if(!theme||typeof theme=="string"){var moduleName=theme||this.$options.theme.initialValue;config.loadModule(["theme",moduleName],afterLoad);}else{afterLoad(theme);}function afterLoad(module){if(_self.$themeId!=theme)return cb&&cb();if(!module||!module.cssClass)throw new Error("couldn't load module "+theme+" or it didn't call define");dom.importCssString(module.cssText,module.cssClass,_self.container.ownerDocument);if(_self.theme)dom.removeCssClass(_self.container,_self.theme.cssClass);var padding="padding"in module?module.padding:"padding"in(_self.theme||{})?4:_self.$padding;if(_self.$padding&&padding!=_self.$padding)_self.setPadding(padding);_self.$theme=module.cssClass;_self.theme=module;dom.addCssClass(_self.container,module.cssClass);dom.setCssClass(_self.container,"ace_dark",module.isDark);if(_self.$size){_self.$size.width=0;_self.$updateSizeAsync();}_self._dispatchEvent('themeLoaded',{theme:module});cb&&cb();}};this.getTheme=function(){return this.$themeId;};this.setStyle=function(style,include){dom.setCssClass(this.container,style,include!==false);};this.unsetStyle=function(style){dom.removeCssClass(this.container,style);};this.setCursorStyle=function(style){if(this.scroller.style.cursor!=style)this.scroller.style.cursor=style;};this.setMouseCursor=function(cursorStyle){this.scroller.style.cursor=cursorStyle;};this.destroy=function(){this.$textLayer.destroy();this.$cursorLayer.destroy();};}).call(VirtualRenderer.prototype);config.defineOptions(VirtualRenderer.prototype,"renderer",{animatedScroll:{initialValue:false},showInvisibles:{set:function set(value){if(this.$textLayer.setShowInvisibles(value))this.$loop.schedule(this.CHANGE_TEXT);},initialValue:false},showPrintMargin:{set:function set(){this.$updatePrintMargin();},initialValue:true},printMarginColumn:{set:function set(){this.$updatePrintMargin();},initialValue:80},printMargin:{set:function set(val){if(typeof val=="number")this.$printMarginColumn=val;this.$showPrintMargin=!!val;this.$updatePrintMargin();},get:function get(){return this.$showPrintMargin&&this.$printMarginColumn;}},showGutter:{set:function set(show){this.$gutter.style.display=show?"block":"none";this.$loop.schedule(this.CHANGE_FULL);this.onGutterResize();},initialValue:true},fadeFoldWidgets:{set:function set(show){dom.setCssClass(this.$gutter,"ace_fade-fold-widgets",show);},initialValue:false},showFoldWidgets:{set:function set(show){this.$gutterLayer.setShowFoldWidgets(show);},initialValue:true},showLineNumbers:{set:function set(show){this.$gutterLayer.setShowLineNumbers(show);this.$loop.schedule(this.CHANGE_GUTTER);},initialValue:true},displayIndentGuides:{set:function set(show){if(this.$textLayer.setDisplayIndentGuides(show))this.$loop.schedule(this.CHANGE_TEXT);},initialValue:true},highlightGutterLine:{set:function set(shouldHighlight){if(!this.$gutterLineHighlight){this.$gutterLineHighlight=dom.createElement("div");this.$gutterLineHighlight.className="ace_gutter-active-line";this.$gutter.appendChild(this.$gutterLineHighlight);return;}this.$gutterLineHighlight.style.display=shouldHighlight?"":"none";if(this.$cursorLayer.$pixelPos)this.$updateGutterLineHighlight();},initialValue:false,value:true},hScrollBarAlwaysVisible:{set:function set(val){if(!this.$hScrollBarAlwaysVisible||!this.$horizScroll)this.$loop.schedule(this.CHANGE_SCROLL);},initialValue:false},vScrollBarAlwaysVisible:{set:function set(val){if(!this.$vScrollBarAlwaysVisible||!this.$vScroll)this.$loop.schedule(this.CHANGE_SCROLL);},initialValue:false},fontSize:{set:function set(size){if(typeof size=="number")size=size+"px";this.container.style.fontSize=size;this.updateFontSize();},initialValue:12},fontFamily:{set:function set(name){this.container.style.fontFamily=name;this.updateFontSize();}},maxLines:{set:function set(val){this.updateFull();}},minLines:{set:function set(val){this.updateFull();}},maxPixelHeight:{set:function set(val){this.updateFull();},initialValue:0},scrollPastEnd:{set:function set(val){val=+val||0;if(this.$scrollPastEnd==val)return;this.$scrollPastEnd=val;this.$loop.schedule(this.CHANGE_SCROLL);},initialValue:0,handlesSet:true},fixedWidthGutter:{set:function set(val){this.$gutterLayer.$fixedWidth=!!val;this.$loop.schedule(this.CHANGE_GUTTER);}},theme:{set:function set(val){this.setTheme(val);},get:function get(){return this.$themeId||this.theme;},initialValue:"./theme/textmate",handlesSet:true}});exports.VirtualRenderer=VirtualRenderer;});ace.define("ace/worker/worker_client",["require","exports","module","ace/lib/oop","ace/lib/net","ace/lib/event_emitter","ace/config"],function(acequire,exports,module){"use strict";var oop=acequire("../lib/oop");var net=acequire("../lib/net");var EventEmitter=acequire("../lib/event_emitter").EventEmitter;var config=acequire("../config");var WorkerClient=function WorkerClient(topLevelNamespaces,mod,classname,workerUrl){this.$sendDeltaQueue=this.$sendDeltaQueue.bind(this);this.changeListener=this.changeListener.bind(this);this.onMessage=this.onMessage.bind(this);if(acequire.nameToUrl&&!acequire.toUrl)acequire.toUrl=acequire.nameToUrl;if(config.get("packaged")||!acequire.toUrl){workerUrl=workerUrl||config.moduleUrl(mod.id,"worker");}else{var normalizePath=this.$normalizePath;workerUrl=workerUrl||normalizePath(acequire.toUrl("ace/worker/worker.js",null,"_"));var tlns={};topLevelNamespaces.forEach(function(ns){tlns[ns]=normalizePath(acequire.toUrl(ns,null,"_").replace(/(\.js)?(\?.*)?$/,""));});}try{var workerSrc=mod.src;var Blob=__webpack_require__(41);var blob=new Blob([workerSrc],{type:'application/javascript'});var blobUrl=(window.URL||window.webkitURL).createObjectURL(blob);this.$worker=new Worker(blobUrl);}catch(e){if(e instanceof window.DOMException){var blob=this.$workerBlob(workerUrl);var URL=window.URL||window.webkitURL;var blobURL=URL.createObjectURL(blob);this.$worker=new Worker(blobURL);URL.revokeObjectURL(blobURL);}else{throw e;}}this.$worker.postMessage({init:true,tlns:tlns,module:mod.id,classname:classname});this.callbackId=1;this.callbacks={};this.$worker.onmessage=this.onMessage;};(function(){oop.implement(this,EventEmitter);this.onMessage=function(e){var msg=e.data;switch(msg.type){case"event":this._signal(msg.name,{data:msg.data});break;case"call":var callback=this.callbacks[msg.id];if(callback){callback(msg.data);delete this.callbacks[msg.id];}break;case"error":this.reportError(msg.data);break;case"log":window.console&&console.log&&console.log.apply(console,msg.data);break;}};this.reportError=function(err){window.console&&console.error&&console.error(err);};this.$normalizePath=function(path){return net.qualifyURL(path);};this.terminate=function(){this._signal("terminate",{});this.deltaQueue=null;this.$worker.terminate();this.$worker=null;if(this.$doc)this.$doc.off("change",this.changeListener);this.$doc=null;};this.send=function(cmd,args){this.$worker.postMessage({command:cmd,args:args});};this.call=function(cmd,args,callback){if(callback){var id=this.callbackId++;this.callbacks[id]=callback;args.push(id);}this.send(cmd,args);};this.emit=function(event,data){try{this.$worker.postMessage({event:event,data:{data:data.data}});}catch(ex){console.error(ex.stack);}};this.attachToDocument=function(doc){if(this.$doc)this.terminate();this.$doc=doc;this.call("setValue",[doc.getValue()]);doc.on("change",this.changeListener);};this.changeListener=function(delta){if(!this.deltaQueue){this.deltaQueue=[];setTimeout(this.$sendDeltaQueue,0);}if(delta.action=="insert")this.deltaQueue.push(delta.start,delta.lines);else this.deltaQueue.push(delta.start,delta.end);};this.$sendDeltaQueue=function(){var q=this.deltaQueue;if(!q)return;this.deltaQueue=null;if(q.length>50&&q.length>this.$doc.getLength()>>1){this.call("setValue",[this.$doc.getValue()]);}else this.emit("change",{data:q});};this.$workerBlob=function(workerUrl){var script="importScripts('"+net.qualifyURL(workerUrl)+"');";try{return new Blob([script],{"type":"application/javascript"});}catch(e){// Backwards-compatibility
var BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder;var blobBuilder=new BlobBuilder();blobBuilder.append(script);return blobBuilder.getBlob("application/javascript");}};}).call(WorkerClient.prototype);var UIWorkerClient=function UIWorkerClient(topLevelNamespaces,mod,classname){this.$sendDeltaQueue=this.$sendDeltaQueue.bind(this);this.changeListener=this.changeListener.bind(this);this.callbackId=1;this.callbacks={};this.messageBuffer=[];var main=null;var emitSync=false;var sender=Object.create(EventEmitter);var _self=this;this.$worker={};this.$worker.terminate=function(){};this.$worker.postMessage=function(e){_self.messageBuffer.push(e);if(main){if(emitSync)setTimeout(processNext);else processNext();}};this.setEmitSync=function(val){emitSync=val;};var processNext=function processNext(){var msg=_self.messageBuffer.shift();if(msg.command)main[msg.command].apply(main,msg.args);else if(msg.event)sender._signal(msg.event,msg.data);};sender.postMessage=function(msg){_self.onMessage({data:msg});};sender.callback=function(data,callbackId){this.postMessage({type:"call",id:callbackId,data:data});};sender.emit=function(name,data){this.postMessage({type:"event",name:name,data:data});};config.loadModule(["worker",mod],function(Main){main=new Main[classname](sender);while(_self.messageBuffer.length){processNext();}});};UIWorkerClient.prototype=WorkerClient.prototype;exports.UIWorkerClient=UIWorkerClient;exports.WorkerClient=WorkerClient;});ace.define("ace/placeholder",["require","exports","module","ace/range","ace/lib/event_emitter","ace/lib/oop"],function(acequire,exports,module){"use strict";var Range=acequire("./range").Range;var EventEmitter=acequire("./lib/event_emitter").EventEmitter;var oop=acequire("./lib/oop");var PlaceHolder=function PlaceHolder(session,length,pos,others,mainClass,othersClass){var _self=this;this.length=length;this.session=session;this.doc=session.getDocument();this.mainClass=mainClass;this.othersClass=othersClass;this.$onUpdate=this.onUpdate.bind(this);this.doc.on("change",this.$onUpdate);this.$others=others;this.$onCursorChange=function(){setTimeout(function(){_self.onCursorChange();});};this.$pos=pos;var undoStack=session.getUndoManager().$undoStack||session.getUndoManager().$undostack||{length:-1};this.$undoStackDepth=undoStack.length;this.setup();session.selection.on("changeCursor",this.$onCursorChange);};(function(){oop.implement(this,EventEmitter);this.setup=function(){var _self=this;var doc=this.doc;var session=this.session;this.selectionBefore=session.selection.toJSON();if(session.selection.inMultiSelectMode)session.selection.toSingleRange();this.pos=doc.createAnchor(this.$pos.row,this.$pos.column);var pos=this.pos;pos.$insertRight=true;pos.detach();pos.markerId=session.addMarker(new Range(pos.row,pos.column,pos.row,pos.column+this.length),this.mainClass,null,false);this.others=[];this.$others.forEach(function(other){var anchor=doc.createAnchor(other.row,other.column);anchor.$insertRight=true;anchor.detach();_self.others.push(anchor);});session.setUndoSelect(false);};this.showOtherMarkers=function(){if(this.othersActive)return;var session=this.session;var _self=this;this.othersActive=true;this.others.forEach(function(anchor){anchor.markerId=session.addMarker(new Range(anchor.row,anchor.column,anchor.row,anchor.column+_self.length),_self.othersClass,null,false);});};this.hideOtherMarkers=function(){if(!this.othersActive)return;this.othersActive=false;for(var i=0;i<this.others.length;i++){this.session.removeMarker(this.others[i].markerId);}};this.onUpdate=function(delta){if(this.$updating)return this.updateAnchors(delta);var range=delta;if(range.start.row!==range.end.row)return;if(range.start.row!==this.pos.row)return;this.$updating=true;var lengthDiff=delta.action==="insert"?range.end.column-range.start.column:range.start.column-range.end.column;var inMainRange=range.start.column>=this.pos.column&&range.start.column<=this.pos.column+this.length+1;var distanceFromStart=range.start.column-this.pos.column;this.updateAnchors(delta);if(inMainRange)this.length+=lengthDiff;if(inMainRange&&!this.session.$fromUndo){if(delta.action==='insert'){for(var i=this.others.length-1;i>=0;i--){var otherPos=this.others[i];var newPos={row:otherPos.row,column:otherPos.column+distanceFromStart};this.doc.insertMergedLines(newPos,delta.lines);}}else if(delta.action==='remove'){for(var i=this.others.length-1;i>=0;i--){var otherPos=this.others[i];var newPos={row:otherPos.row,column:otherPos.column+distanceFromStart};this.doc.remove(new Range(newPos.row,newPos.column,newPos.row,newPos.column-lengthDiff));}}}this.$updating=false;this.updateMarkers();};this.updateAnchors=function(delta){this.pos.onChange(delta);for(var i=this.others.length;i--;){this.others[i].onChange(delta);}this.updateMarkers();};this.updateMarkers=function(){if(this.$updating)return;var _self=this;var session=this.session;var updateMarker=function updateMarker(pos,className){session.removeMarker(pos.markerId);pos.markerId=session.addMarker(new Range(pos.row,pos.column,pos.row,pos.column+_self.length),className,null,false);};updateMarker(this.pos,this.mainClass);for(var i=this.others.length;i--;){updateMarker(this.others[i],this.othersClass);}};this.onCursorChange=function(event){if(this.$updating||!this.session)return;var pos=this.session.selection.getCursor();if(pos.row===this.pos.row&&pos.column>=this.pos.column&&pos.column<=this.pos.column+this.length){this.showOtherMarkers();this._emit("cursorEnter",event);}else{this.hideOtherMarkers();this._emit("cursorLeave",event);}};this.detach=function(){this.session.removeMarker(this.pos&&this.pos.markerId);this.hideOtherMarkers();this.doc.removeEventListener("change",this.$onUpdate);this.session.selection.removeEventListener("changeCursor",this.$onCursorChange);this.session.setUndoSelect(true);this.session=null;};this.cancel=function(){if(this.$undoStackDepth===-1)return;var undoManager=this.session.getUndoManager();var undosRequired=(undoManager.$undoStack||undoManager.$undostack).length-this.$undoStackDepth;for(var i=0;i<undosRequired;i++){undoManager.undo(true);}if(this.selectionBefore)this.session.selection.fromJSON(this.selectionBefore);};}).call(PlaceHolder.prototype);exports.PlaceHolder=PlaceHolder;});ace.define("ace/mouse/multi_select_handler",["require","exports","module","ace/lib/event","ace/lib/useragent"],function(acequire,exports,module){var event=acequire("../lib/event");var useragent=acequire("../lib/useragent");function isSamePoint(p1,p2){return p1.row==p2.row&&p1.column==p2.column;}function onMouseDown(e){var ev=e.domEvent;var alt=ev.altKey;var shift=ev.shiftKey;var ctrl=ev.ctrlKey;var accel=e.getAccelKey();var button=e.getButton();if(ctrl&&useragent.isMac)button=ev.button;if(e.editor.inMultiSelectMode&&button==2){e.editor.textInput.onContextMenu(e.domEvent);return;}if(!ctrl&&!alt&&!accel){if(button===0&&e.editor.inMultiSelectMode)e.editor.exitMultiSelectMode();return;}if(button!==0)return;var editor=e.editor;var selection=editor.selection;var isMultiSelect=editor.inMultiSelectMode;var pos=e.getDocumentPosition();var cursor=selection.getCursor();var inSelection=e.inSelection()||selection.isEmpty()&&isSamePoint(pos,cursor);var mouseX=e.x,mouseY=e.y;var onMouseSelection=function onMouseSelection(e){mouseX=e.clientX;mouseY=e.clientY;};var session=editor.session;var screenAnchor=editor.renderer.pixelToScreenCoordinates(mouseX,mouseY);var screenCursor=screenAnchor;var selectionMode;if(editor.$mouseHandler.$enableJumpToDef){if(ctrl&&alt||accel&&alt)selectionMode=shift?"block":"add";else if(alt&&editor.$blockSelectEnabled)selectionMode="block";}else{if(accel&&!alt){selectionMode="add";if(!isMultiSelect&&shift)return;}else if(alt&&editor.$blockSelectEnabled){selectionMode="block";}}if(selectionMode&&useragent.isMac&&ev.ctrlKey){editor.$mouseHandler.cancelContextMenu();}if(selectionMode=="add"){if(!isMultiSelect&&inSelection)return;// dragging
if(!isMultiSelect){var range=selection.toOrientedRange();editor.addSelectionMarker(range);}var oldRange=selection.rangeList.rangeAtPoint(pos);editor.$blockScrolling++;editor.inVirtualSelectionMode=true;if(shift){oldRange=null;range=selection.ranges[0]||range;editor.removeSelectionMarker(range);}editor.once("mouseup",function(){var tmpSel=selection.toOrientedRange();if(oldRange&&tmpSel.isEmpty()&&isSamePoint(oldRange.cursor,tmpSel.cursor))selection.substractPoint(tmpSel.cursor);else{if(shift){selection.substractPoint(range.cursor);}else if(range){editor.removeSelectionMarker(range);selection.addRange(range);}selection.addRange(tmpSel);}editor.$blockScrolling--;editor.inVirtualSelectionMode=false;});}else if(selectionMode=="block"){e.stop();editor.inVirtualSelectionMode=true;var initialRange;var rectSel=[];var blockSelect=function blockSelect(){var newCursor=editor.renderer.pixelToScreenCoordinates(mouseX,mouseY);var cursor=session.screenToDocumentPosition(newCursor.row,newCursor.column);if(isSamePoint(screenCursor,newCursor)&&isSamePoint(cursor,selection.lead))return;screenCursor=newCursor;editor.$blockScrolling++;editor.selection.moveToPosition(cursor);editor.renderer.scrollCursorIntoView();editor.removeSelectionMarkers(rectSel);rectSel=selection.rectangularRangeBlock(screenCursor,screenAnchor);if(editor.$mouseHandler.$clickSelection&&rectSel.length==1&&rectSel[0].isEmpty())rectSel[0]=editor.$mouseHandler.$clickSelection.clone();rectSel.forEach(editor.addSelectionMarker,editor);editor.updateSelectionMarkers();editor.$blockScrolling--;};editor.$blockScrolling++;if(isMultiSelect&&!accel){selection.toSingleRange();}else if(!isMultiSelect&&accel){initialRange=selection.toOrientedRange();editor.addSelectionMarker(initialRange);}if(shift)screenAnchor=session.documentToScreenPosition(selection.lead);else selection.moveToPosition(pos);editor.$blockScrolling--;screenCursor={row:-1,column:-1};var onMouseSelectionEnd=function onMouseSelectionEnd(e){clearInterval(timerId);editor.removeSelectionMarkers(rectSel);if(!rectSel.length)rectSel=[selection.toOrientedRange()];editor.$blockScrolling++;if(initialRange){editor.removeSelectionMarker(initialRange);selection.toSingleRange(initialRange);}for(var i=0;i<rectSel.length;i++){selection.addRange(rectSel[i]);}editor.inVirtualSelectionMode=false;editor.$mouseHandler.$clickSelection=null;editor.$blockScrolling--;};var onSelectionInterval=blockSelect;event.capture(editor.container,onMouseSelection,onMouseSelectionEnd);var timerId=setInterval(function(){onSelectionInterval();},20);return e.preventDefault();}}exports.onMouseDown=onMouseDown;});ace.define("ace/commands/multi_select_commands",["require","exports","module","ace/keyboard/hash_handler"],function(acequire,exports,module){exports.defaultCommands=[{name:"addCursorAbove",exec:function exec(editor){editor.selectMoreLines(-1);},bindKey:{win:"Ctrl-Alt-Up",mac:"Ctrl-Alt-Up"},scrollIntoView:"cursor",readOnly:true},{name:"addCursorBelow",exec:function exec(editor){editor.selectMoreLines(1);},bindKey:{win:"Ctrl-Alt-Down",mac:"Ctrl-Alt-Down"},scrollIntoView:"cursor",readOnly:true},{name:"addCursorAboveSkipCurrent",exec:function exec(editor){editor.selectMoreLines(-1,true);},bindKey:{win:"Ctrl-Alt-Shift-Up",mac:"Ctrl-Alt-Shift-Up"},scrollIntoView:"cursor",readOnly:true},{name:"addCursorBelowSkipCurrent",exec:function exec(editor){editor.selectMoreLines(1,true);},bindKey:{win:"Ctrl-Alt-Shift-Down",mac:"Ctrl-Alt-Shift-Down"},scrollIntoView:"cursor",readOnly:true},{name:"selectMoreBefore",exec:function exec(editor){editor.selectMore(-1);},bindKey:{win:"Ctrl-Alt-Left",mac:"Ctrl-Alt-Left"},scrollIntoView:"cursor",readOnly:true},{name:"selectMoreAfter",exec:function exec(editor){editor.selectMore(1);},bindKey:{win:"Ctrl-Alt-Right",mac:"Ctrl-Alt-Right"},scrollIntoView:"cursor",readOnly:true},{name:"selectNextBefore",exec:function exec(editor){editor.selectMore(-1,true);},bindKey:{win:"Ctrl-Alt-Shift-Left",mac:"Ctrl-Alt-Shift-Left"},scrollIntoView:"cursor",readOnly:true},{name:"selectNextAfter",exec:function exec(editor){editor.selectMore(1,true);},bindKey:{win:"Ctrl-Alt-Shift-Right",mac:"Ctrl-Alt-Shift-Right"},scrollIntoView:"cursor",readOnly:true},{name:"splitIntoLines",exec:function exec(editor){editor.multiSelect.splitIntoLines();},bindKey:{win:"Ctrl-Alt-L",mac:"Ctrl-Alt-L"},readOnly:true},{name:"alignCursors",exec:function exec(editor){editor.alignCursors();},bindKey:{win:"Ctrl-Alt-A",mac:"Ctrl-Alt-A"},scrollIntoView:"cursor"},{name:"findAll",exec:function exec(editor){editor.findAll();},bindKey:{win:"Ctrl-Alt-K",mac:"Ctrl-Alt-G"},scrollIntoView:"cursor",readOnly:true}];exports.multiSelectCommands=[{name:"singleSelection",bindKey:"esc",exec:function exec(editor){editor.exitMultiSelectMode();},scrollIntoView:"cursor",readOnly:true,isAvailable:function isAvailable(editor){return editor&&editor.inMultiSelectMode;}}];var HashHandler=acequire("../keyboard/hash_handler").HashHandler;exports.keyboardHandler=new HashHandler(exports.multiSelectCommands);});ace.define("ace/multi_select",["require","exports","module","ace/range_list","ace/range","ace/selection","ace/mouse/multi_select_handler","ace/lib/event","ace/lib/lang","ace/commands/multi_select_commands","ace/search","ace/edit_session","ace/editor","ace/config"],function(acequire,exports,module){var RangeList=acequire("./range_list").RangeList;var Range=acequire("./range").Range;var Selection=acequire("./selection").Selection;var onMouseDown=acequire("./mouse/multi_select_handler").onMouseDown;var event=acequire("./lib/event");var lang=acequire("./lib/lang");var commands=acequire("./commands/multi_select_commands");exports.commands=commands.defaultCommands.concat(commands.multiSelectCommands);var Search=acequire("./search").Search;var search=new Search();function find(session,needle,dir){search.$options.wrap=true;search.$options.needle=needle;search.$options.backwards=dir==-1;return search.find(session);}var EditSession=acequire("./edit_session").EditSession;(function(){this.getSelectionMarkers=function(){return this.$selectionMarkers;};}).call(EditSession.prototype);(function(){this.ranges=null;this.rangeList=null;this.addRange=function(range,$blockChangeEvents){if(!range)return;if(!this.inMultiSelectMode&&this.rangeCount===0){var oldRange=this.toOrientedRange();this.rangeList.add(oldRange);this.rangeList.add(range);if(this.rangeList.ranges.length!=2){this.rangeList.removeAll();return $blockChangeEvents||this.fromOrientedRange(range);}this.rangeList.removeAll();this.rangeList.add(oldRange);this.$onAddRange(oldRange);}if(!range.cursor)range.cursor=range.end;var removed=this.rangeList.add(range);this.$onAddRange(range);if(removed.length)this.$onRemoveRange(removed);if(this.rangeCount>1&&!this.inMultiSelectMode){this._signal("multiSelect");this.inMultiSelectMode=true;this.session.$undoSelect=false;this.rangeList.attach(this.session);}return $blockChangeEvents||this.fromOrientedRange(range);};this.toSingleRange=function(range){range=range||this.ranges[0];var removed=this.rangeList.removeAll();if(removed.length)this.$onRemoveRange(removed);range&&this.fromOrientedRange(range);};this.substractPoint=function(pos){var removed=this.rangeList.substractPoint(pos);if(removed){this.$onRemoveRange(removed);return removed[0];}};this.mergeOverlappingRanges=function(){var removed=this.rangeList.merge();if(removed.length)this.$onRemoveRange(removed);else if(this.ranges[0])this.fromOrientedRange(this.ranges[0]);};this.$onAddRange=function(range){this.rangeCount=this.rangeList.ranges.length;this.ranges.unshift(range);this._signal("addRange",{range:range});};this.$onRemoveRange=function(removed){this.rangeCount=this.rangeList.ranges.length;if(this.rangeCount==1&&this.inMultiSelectMode){var lastRange=this.rangeList.ranges.pop();removed.push(lastRange);this.rangeCount=0;}for(var i=removed.length;i--;){var index=this.ranges.indexOf(removed[i]);this.ranges.splice(index,1);}this._signal("removeRange",{ranges:removed});if(this.rangeCount===0&&this.inMultiSelectMode){this.inMultiSelectMode=false;this._signal("singleSelect");this.session.$undoSelect=true;this.rangeList.detach(this.session);}lastRange=lastRange||this.ranges[0];if(lastRange&&!lastRange.isEqual(this.getRange()))this.fromOrientedRange(lastRange);};this.$initRangeList=function(){if(this.rangeList)return;this.rangeList=new RangeList();this.ranges=[];this.rangeCount=0;};this.getAllRanges=function(){return this.rangeCount?this.rangeList.ranges.concat():[this.getRange()];};this.splitIntoLines=function(){if(this.rangeCount>1){var ranges=this.rangeList.ranges;var lastRange=ranges[ranges.length-1];var range=Range.fromPoints(ranges[0].start,lastRange.end);this.toSingleRange();this.setSelectionRange(range,lastRange.cursor==lastRange.start);}else{var range=this.getRange();var isBackwards=this.isBackwards();var startRow=range.start.row;var endRow=range.end.row;if(startRow==endRow){if(isBackwards)var start=range.end,end=range.start;else var start=range.start,end=range.end;this.addRange(Range.fromPoints(end,end));this.addRange(Range.fromPoints(start,start));return;}var rectSel=[];var r=this.getLineRange(startRow,true);r.start.column=range.start.column;rectSel.push(r);for(var i=startRow+1;i<endRow;i++){rectSel.push(this.getLineRange(i,true));}r=this.getLineRange(endRow,true);r.end.column=range.end.column;rectSel.push(r);rectSel.forEach(this.addRange,this);}};this.toggleBlockSelection=function(){if(this.rangeCount>1){var ranges=this.rangeList.ranges;var lastRange=ranges[ranges.length-1];var range=Range.fromPoints(ranges[0].start,lastRange.end);this.toSingleRange();this.setSelectionRange(range,lastRange.cursor==lastRange.start);}else{var cursor=this.session.documentToScreenPosition(this.selectionLead);var anchor=this.session.documentToScreenPosition(this.selectionAnchor);var rectSel=this.rectangularRangeBlock(cursor,anchor);rectSel.forEach(this.addRange,this);}};this.rectangularRangeBlock=function(screenCursor,screenAnchor,includeEmptyLines){var rectSel=[];var xBackwards=screenCursor.column<screenAnchor.column;if(xBackwards){var startColumn=screenCursor.column;var endColumn=screenAnchor.column;}else{var startColumn=screenAnchor.column;var endColumn=screenCursor.column;}var yBackwards=screenCursor.row<screenAnchor.row;if(yBackwards){var startRow=screenCursor.row;var endRow=screenAnchor.row;}else{var startRow=screenAnchor.row;var endRow=screenCursor.row;}if(startColumn<0)startColumn=0;if(startRow<0)startRow=0;if(startRow==endRow)includeEmptyLines=true;for(var row=startRow;row<=endRow;row++){var range=Range.fromPoints(this.session.screenToDocumentPosition(row,startColumn),this.session.screenToDocumentPosition(row,endColumn));if(range.isEmpty()){if(docEnd&&isSamePoint(range.end,docEnd))break;var docEnd=range.end;}range.cursor=xBackwards?range.start:range.end;rectSel.push(range);}if(yBackwards)rectSel.reverse();if(!includeEmptyLines){var end=rectSel.length-1;while(rectSel[end].isEmpty()&&end>0){end--;}if(end>0){var start=0;while(rectSel[start].isEmpty()){start++;}}for(var i=end;i>=start;i--){if(rectSel[i].isEmpty())rectSel.splice(i,1);}}return rectSel;};}).call(Selection.prototype);var Editor=acequire("./editor").Editor;(function(){this.updateSelectionMarkers=function(){this.renderer.updateCursor();this.renderer.updateBackMarkers();};this.addSelectionMarker=function(orientedRange){if(!orientedRange.cursor)orientedRange.cursor=orientedRange.end;var style=this.getSelectionStyle();orientedRange.marker=this.session.addMarker(orientedRange,"ace_selection",style);this.session.$selectionMarkers.push(orientedRange);this.session.selectionMarkerCount=this.session.$selectionMarkers.length;return orientedRange;};this.removeSelectionMarker=function(range){if(!range.marker)return;this.session.removeMarker(range.marker);var index=this.session.$selectionMarkers.indexOf(range);if(index!=-1)this.session.$selectionMarkers.splice(index,1);this.session.selectionMarkerCount=this.session.$selectionMarkers.length;};this.removeSelectionMarkers=function(ranges){var markerList=this.session.$selectionMarkers;for(var i=ranges.length;i--;){var range=ranges[i];if(!range.marker)continue;this.session.removeMarker(range.marker);var index=markerList.indexOf(range);if(index!=-1)markerList.splice(index,1);}this.session.selectionMarkerCount=markerList.length;};this.$onAddRange=function(e){this.addSelectionMarker(e.range);this.renderer.updateCursor();this.renderer.updateBackMarkers();};this.$onRemoveRange=function(e){this.removeSelectionMarkers(e.ranges);this.renderer.updateCursor();this.renderer.updateBackMarkers();};this.$onMultiSelect=function(e){if(this.inMultiSelectMode)return;this.inMultiSelectMode=true;this.setStyle("ace_multiselect");this.keyBinding.addKeyboardHandler(commands.keyboardHandler);this.commands.setDefaultHandler("exec",this.$onMultiSelectExec);this.renderer.updateCursor();this.renderer.updateBackMarkers();};this.$onSingleSelect=function(e){if(this.session.multiSelect.inVirtualMode)return;this.inMultiSelectMode=false;this.unsetStyle("ace_multiselect");this.keyBinding.removeKeyboardHandler(commands.keyboardHandler);this.commands.removeDefaultHandler("exec",this.$onMultiSelectExec);this.renderer.updateCursor();this.renderer.updateBackMarkers();this._emit("changeSelection");};this.$onMultiSelectExec=function(e){var command=e.command;var editor=e.editor;if(!editor.multiSelect)return;if(!command.multiSelectAction){var result=command.exec(editor,e.args||{});editor.multiSelect.addRange(editor.multiSelect.toOrientedRange());editor.multiSelect.mergeOverlappingRanges();}else if(command.multiSelectAction=="forEach"){result=editor.forEachSelection(command,e.args);}else if(command.multiSelectAction=="forEachLine"){result=editor.forEachSelection(command,e.args,true);}else if(command.multiSelectAction=="single"){editor.exitMultiSelectMode();result=command.exec(editor,e.args||{});}else{result=command.multiSelectAction(editor,e.args||{});}return result;};this.forEachSelection=function(cmd,args,options){if(this.inVirtualSelectionMode)return;var keepOrder=options&&options.keepOrder;var $byLines=options==true||options&&options.$byLines;var session=this.session;var selection=this.selection;var rangeList=selection.rangeList;var ranges=(keepOrder?selection:rangeList).ranges;var result;if(!ranges.length)return cmd.exec?cmd.exec(this,args||{}):cmd(this,args||{});var reg=selection._eventRegistry;selection._eventRegistry={};var tmpSel=new Selection(session);this.inVirtualSelectionMode=true;for(var i=ranges.length;i--;){if($byLines){while(i>0&&ranges[i].start.row==ranges[i-1].end.row){i--;}}tmpSel.fromOrientedRange(ranges[i]);tmpSel.index=i;this.selection=session.selection=tmpSel;var cmdResult=cmd.exec?cmd.exec(this,args||{}):cmd(this,args||{});if(!result&&cmdResult!==undefined)result=cmdResult;tmpSel.toOrientedRange(ranges[i]);}tmpSel.detach();this.selection=session.selection=selection;this.inVirtualSelectionMode=false;selection._eventRegistry=reg;selection.mergeOverlappingRanges();var anim=this.renderer.$scrollAnimation;this.onCursorChange();this.onSelectionChange();if(anim&&anim.from==anim.to)this.renderer.animateScrolling(anim.from);return result;};this.exitMultiSelectMode=function(){if(!this.inMultiSelectMode||this.inVirtualSelectionMode)return;this.multiSelect.toSingleRange();};this.getSelectedText=function(){var text="";if(this.inMultiSelectMode&&!this.inVirtualSelectionMode){var ranges=this.multiSelect.rangeList.ranges;var buf=[];for(var i=0;i<ranges.length;i++){buf.push(this.session.getTextRange(ranges[i]));}var nl=this.session.getDocument().getNewLineCharacter();text=buf.join(nl);if(text.length==(buf.length-1)*nl.length)text="";}else if(!this.selection.isEmpty()){text=this.session.getTextRange(this.getSelectionRange());}return text;};this.$checkMultiselectChange=function(e,anchor){if(this.inMultiSelectMode&&!this.inVirtualSelectionMode){var range=this.multiSelect.ranges[0];if(this.multiSelect.isEmpty()&&anchor==this.multiSelect.anchor)return;var pos=anchor==this.multiSelect.anchor?range.cursor==range.start?range.end:range.start:range.cursor;if(pos.row!=anchor.row||this.session.$clipPositionToDocument(pos.row,pos.column).column!=anchor.column)this.multiSelect.toSingleRange(this.multiSelect.toOrientedRange());}};this.findAll=function(needle,options,additive){options=options||{};options.needle=needle||options.needle;if(options.needle==undefined){var range=this.selection.isEmpty()?this.selection.getWordRange():this.selection.getRange();options.needle=this.session.getTextRange(range);}this.$search.set(options);var ranges=this.$search.findAll(this.session);if(!ranges.length)return 0;this.$blockScrolling+=1;var selection=this.multiSelect;if(!additive)selection.toSingleRange(ranges[0]);for(var i=ranges.length;i--;){selection.addRange(ranges[i],true);}if(range&&selection.rangeList.rangeAtPoint(range.start))selection.addRange(range,true);this.$blockScrolling-=1;return ranges.length;};this.selectMoreLines=function(dir,skip){var range=this.selection.toOrientedRange();var isBackwards=range.cursor==range.end;var screenLead=this.session.documentToScreenPosition(range.cursor);if(this.selection.$desiredColumn)screenLead.column=this.selection.$desiredColumn;var lead=this.session.screenToDocumentPosition(screenLead.row+dir,screenLead.column);if(!range.isEmpty()){var screenAnchor=this.session.documentToScreenPosition(isBackwards?range.end:range.start);var anchor=this.session.screenToDocumentPosition(screenAnchor.row+dir,screenAnchor.column);}else{var anchor=lead;}if(isBackwards){var newRange=Range.fromPoints(lead,anchor);newRange.cursor=newRange.start;}else{var newRange=Range.fromPoints(anchor,lead);newRange.cursor=newRange.end;}newRange.desiredColumn=screenLead.column;if(!this.selection.inMultiSelectMode){this.selection.addRange(range);}else{if(skip)var toRemove=range.cursor;}this.selection.addRange(newRange);if(toRemove)this.selection.substractPoint(toRemove);};this.transposeSelections=function(dir){var session=this.session;var sel=session.multiSelect;var all=sel.ranges;for(var i=all.length;i--;){var range=all[i];if(range.isEmpty()){var tmp=session.getWordRange(range.start.row,range.start.column);range.start.row=tmp.start.row;range.start.column=tmp.start.column;range.end.row=tmp.end.row;range.end.column=tmp.end.column;}}sel.mergeOverlappingRanges();var words=[];for(var i=all.length;i--;){var range=all[i];words.unshift(session.getTextRange(range));}if(dir<0)words.unshift(words.pop());else words.push(words.shift());for(var i=all.length;i--;){var range=all[i];var tmp=range.clone();session.replace(range,words[i]);range.start.row=tmp.start.row;range.start.column=tmp.start.column;}};this.selectMore=function(dir,skip,stopAtFirst){var session=this.session;var sel=session.multiSelect;var range=sel.toOrientedRange();if(range.isEmpty()){range=session.getWordRange(range.start.row,range.start.column);range.cursor=dir==-1?range.start:range.end;this.multiSelect.addRange(range);if(stopAtFirst)return;}var needle=session.getTextRange(range);var newRange=find(session,needle,dir);if(newRange){newRange.cursor=dir==-1?newRange.start:newRange.end;this.$blockScrolling+=1;this.session.unfold(newRange);this.multiSelect.addRange(newRange);this.$blockScrolling-=1;this.renderer.scrollCursorIntoView(null,0.5);}if(skip)this.multiSelect.substractPoint(range.cursor);};this.alignCursors=function(){var session=this.session;var sel=session.multiSelect;var ranges=sel.ranges;var row=-1;var sameRowRanges=ranges.filter(function(r){if(r.cursor.row==row)return true;row=r.cursor.row;});if(!ranges.length||sameRowRanges.length==ranges.length-1){var range=this.selection.getRange();var fr=range.start.row,lr=range.end.row;var guessRange=fr==lr;if(guessRange){var max=this.session.getLength();var line;do{line=this.session.getLine(lr);}while(/[=:]/.test(line)&&++lr<max);do{line=this.session.getLine(fr);}while(/[=:]/.test(line)&&--fr>0);if(fr<0)fr=0;if(lr>=max)lr=max-1;}var lines=this.session.removeFullLines(fr,lr);lines=this.$reAlignText(lines,guessRange);this.session.insert({row:fr,column:0},lines.join("\n")+"\n");if(!guessRange){range.start.column=0;range.end.column=lines[lines.length-1].length;}this.selection.setRange(range);}else{sameRowRanges.forEach(function(r){sel.substractPoint(r.cursor);});var maxCol=0;var minSpace=Infinity;var spaceOffsets=ranges.map(function(r){var p=r.cursor;var line=session.getLine(p.row);var spaceOffset=line.substr(p.column).search(/\S/g);if(spaceOffset==-1)spaceOffset=0;if(p.column>maxCol)maxCol=p.column;if(spaceOffset<minSpace)minSpace=spaceOffset;return spaceOffset;});ranges.forEach(function(r,i){var p=r.cursor;var l=maxCol-p.column;var d=spaceOffsets[i]-minSpace;if(l>d)session.insert(p,lang.stringRepeat(" ",l-d));else session.remove(new Range(p.row,p.column,p.row,p.column-l+d));r.start.column=r.end.column=maxCol;r.start.row=r.end.row=p.row;r.cursor=r.end;});sel.fromOrientedRange(ranges[0]);this.renderer.updateCursor();this.renderer.updateBackMarkers();}};this.$reAlignText=function(lines,forceLeft){var isLeftAligned=true,isRightAligned=true;var startW,textW,endW;return lines.map(function(line){var m=line.match(/(\s*)(.*?)(\s*)([=:].*)/);if(!m)return[line];if(startW==null){startW=m[1].length;textW=m[2].length;endW=m[3].length;return m;}if(startW+textW+endW!=m[1].length+m[2].length+m[3].length)isRightAligned=false;if(startW!=m[1].length)isLeftAligned=false;if(startW>m[1].length)startW=m[1].length;if(textW<m[2].length)textW=m[2].length;if(endW>m[3].length)endW=m[3].length;return m;}).map(forceLeft?alignLeft:isLeftAligned?isRightAligned?alignRight:alignLeft:unAlign);function spaces(n){return lang.stringRepeat(" ",n);}function alignLeft(m){return!m[2]?m[0]:spaces(startW)+m[2]+spaces(textW-m[2].length+endW)+m[4].replace(/^([=:])\s+/,"$1 ");}function alignRight(m){return!m[2]?m[0]:spaces(startW+textW-m[2].length)+m[2]+spaces(endW," ")+m[4].replace(/^([=:])\s+/,"$1 ");}function unAlign(m){return!m[2]?m[0]:spaces(startW)+m[2]+spaces(endW)+m[4].replace(/^([=:])\s+/,"$1 ");}};}).call(Editor.prototype);function isSamePoint(p1,p2){return p1.row==p2.row&&p1.column==p2.column;}exports.onSessionChange=function(e){var session=e.session;if(session&&!session.multiSelect){session.$selectionMarkers=[];session.selection.$initRangeList();session.multiSelect=session.selection;}this.multiSelect=session&&session.multiSelect;var oldSession=e.oldSession;if(oldSession){oldSession.multiSelect.off("addRange",this.$onAddRange);oldSession.multiSelect.off("removeRange",this.$onRemoveRange);oldSession.multiSelect.off("multiSelect",this.$onMultiSelect);oldSession.multiSelect.off("singleSelect",this.$onSingleSelect);oldSession.multiSelect.lead.off("change",this.$checkMultiselectChange);oldSession.multiSelect.anchor.off("change",this.$checkMultiselectChange);}if(session){session.multiSelect.on("addRange",this.$onAddRange);session.multiSelect.on("removeRange",this.$onRemoveRange);session.multiSelect.on("multiSelect",this.$onMultiSelect);session.multiSelect.on("singleSelect",this.$onSingleSelect);session.multiSelect.lead.on("change",this.$checkMultiselectChange);session.multiSelect.anchor.on("change",this.$checkMultiselectChange);}if(session&&this.inMultiSelectMode!=session.selection.inMultiSelectMode){if(session.selection.inMultiSelectMode)this.$onMultiSelect();else this.$onSingleSelect();}};function MultiSelect(editor){if(editor.$multiselectOnSessionChange)return;editor.$onAddRange=editor.$onAddRange.bind(editor);editor.$onRemoveRange=editor.$onRemoveRange.bind(editor);editor.$onMultiSelect=editor.$onMultiSelect.bind(editor);editor.$onSingleSelect=editor.$onSingleSelect.bind(editor);editor.$multiselectOnSessionChange=exports.onSessionChange.bind(editor);editor.$checkMultiselectChange=editor.$checkMultiselectChange.bind(editor);editor.$multiselectOnSessionChange(editor);editor.on("changeSession",editor.$multiselectOnSessionChange);editor.on("mousedown",onMouseDown);editor.commands.addCommands(commands.defaultCommands);addAltCursorListeners(editor);}function addAltCursorListeners(editor){var el=editor.textInput.getElement();var altCursor=false;event.addListener(el,"keydown",function(e){var altDown=e.keyCode==18&&!(e.ctrlKey||e.shiftKey||e.metaKey);if(editor.$blockSelectEnabled&&altDown){if(!altCursor){editor.renderer.setMouseCursor("crosshair");altCursor=true;}}else if(altCursor){reset();}});event.addListener(el,"keyup",reset);event.addListener(el,"blur",reset);function reset(e){if(altCursor){editor.renderer.setMouseCursor("");altCursor=false;}}}exports.MultiSelect=MultiSelect;acequire("./config").defineOptions(Editor.prototype,"editor",{enableMultiselect:{set:function set(val){MultiSelect(this);if(val){this.on("changeSession",this.$multiselectOnSessionChange);this.on("mousedown",onMouseDown);}else{this.off("changeSession",this.$multiselectOnSessionChange);this.off("mousedown",onMouseDown);}},value:true},enableBlockSelect:{set:function set(val){this.$blockSelectEnabled=val;},value:true}});});ace.define("ace/mode/folding/fold_mode",["require","exports","module","ace/range"],function(acequire,exports,module){"use strict";var Range=acequire("../../range").Range;var FoldMode=exports.FoldMode=function(){};(function(){this.foldingStartMarker=null;this.foldingStopMarker=null;this.getFoldWidget=function(session,foldStyle,row){var line=session.getLine(row);if(this.foldingStartMarker.test(line))return"start";if(foldStyle=="markbeginend"&&this.foldingStopMarker&&this.foldingStopMarker.test(line))return"end";return"";};this.getFoldWidgetRange=function(session,foldStyle,row){return null;};this.indentationBlock=function(session,row,column){var re=/\S/;var line=session.getLine(row);var startLevel=line.search(re);if(startLevel==-1)return;var startColumn=column||line.length;var maxRow=session.getLength();var startRow=row;var endRow=row;while(++row<maxRow){var level=session.getLine(row).search(re);if(level==-1)continue;if(level<=startLevel)break;endRow=row;}if(endRow>startRow){var endColumn=session.getLine(endRow).length;return new Range(startRow,startColumn,endRow,endColumn);}};this.openingBracketBlock=function(session,bracket,row,column,typeRe){var start={row:row,column:column+1};var end=session.$findClosingBracket(bracket,start,typeRe);if(!end)return;var fw=session.foldWidgets[end.row];if(fw==null)fw=session.getFoldWidget(end.row);if(fw=="start"&&end.row>start.row){end.row--;end.column=session.getLine(end.row).length;}return Range.fromPoints(start,end);};this.closingBracketBlock=function(session,bracket,row,column,typeRe){var end={row:row,column:column};var start=session.$findOpeningBracket(bracket,end);if(!start)return;start.column++;end.column--;return Range.fromPoints(start,end);};}).call(FoldMode.prototype);});ace.define("ace/theme/textmate",["require","exports","module","ace/lib/dom"],function(acequire,exports,module){"use strict";exports.isDark=false;exports.cssClass="ace-tm";exports.cssText=".ace-tm .ace_gutter {\
background: #f0f0f0;\
color: #333;\
}\
.ace-tm .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-tm .ace_fold {\
background-color: #6B72E6;\
}\
.ace-tm {\
background-color: #FFFFFF;\
color: black;\
}\
.ace-tm .ace_cursor {\
color: black;\
}\
.ace-tm .ace_invisible {\
color: rgb(191, 191, 191);\
}\
.ace-tm .ace_storage,\
.ace-tm .ace_keyword {\
color: blue;\
}\
.ace-tm .ace_constant {\
color: rgb(197, 6, 11);\
}\
.ace-tm .ace_constant.ace_buildin {\
color: rgb(88, 72, 246);\
}\
.ace-tm .ace_constant.ace_language {\
color: rgb(88, 92, 246);\
}\
.ace-tm .ace_constant.ace_library {\
color: rgb(6, 150, 14);\
}\
.ace-tm .ace_invalid {\
background-color: rgba(255, 0, 0, 0.1);\
color: red;\
}\
.ace-tm .ace_support.ace_function {\
color: rgb(60, 76, 114);\
}\
.ace-tm .ace_support.ace_constant {\
color: rgb(6, 150, 14);\
}\
.ace-tm .ace_support.ace_type,\
.ace-tm .ace_support.ace_class {\
color: rgb(109, 121, 222);\
}\
.ace-tm .ace_keyword.ace_operator {\
color: rgb(104, 118, 135);\
}\
.ace-tm .ace_string {\
color: rgb(3, 106, 7);\
}\
.ace-tm .ace_comment {\
color: rgb(76, 136, 107);\
}\
.ace-tm .ace_comment.ace_doc {\
color: rgb(0, 102, 255);\
}\
.ace-tm .ace_comment.ace_doc.ace_tag {\
color: rgb(128, 159, 191);\
}\
.ace-tm .ace_constant.ace_numeric {\
color: rgb(0, 0, 205);\
}\
.ace-tm .ace_variable {\
color: rgb(49, 132, 149);\
}\
.ace-tm .ace_xml-pe {\
color: rgb(104, 104, 91);\
}\
.ace-tm .ace_entity.ace_name.ace_function {\
color: #0000A2;\
}\
.ace-tm .ace_heading {\
color: rgb(12, 7, 255);\
}\
.ace-tm .ace_list {\
color:rgb(185, 6, 144);\
}\
.ace-tm .ace_meta.ace_tag {\
color:rgb(0, 22, 142);\
}\
.ace-tm .ace_string.ace_regex {\
color: rgb(255, 0, 0)\
}\
.ace-tm .ace_marker-layer .ace_selection {\
background: rgb(181, 213, 255);\
}\
.ace-tm.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px white;\
}\
.ace-tm .ace_marker-layer .ace_step {\
background: rgb(252, 255, 0);\
}\
.ace-tm .ace_marker-layer .ace_stack {\
background: rgb(164, 229, 101);\
}\
.ace-tm .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid rgb(192, 192, 192);\
}\
.ace-tm .ace_marker-layer .ace_active-line {\
background: rgba(0, 0, 0, 0.07);\
}\
.ace-tm .ace_gutter-active-line {\
background-color : #dcdcdc;\
}\
.ace-tm .ace_marker-layer .ace_selected-word {\
background: rgb(250, 250, 255);\
border: 1px solid rgb(200, 200, 250);\
}\
.ace-tm .ace_indent-guide {\
background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y;\
}\
";var dom=acequire("../lib/dom");dom.importCssString(exports.cssText,exports.cssClass);});ace.define("ace/line_widgets",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/range"],function(acequire,exports,module){"use strict";var oop=acequire("./lib/oop");var dom=acequire("./lib/dom");var Range=acequire("./range").Range;function LineWidgets(session){this.session=session;this.session.widgetManager=this;this.session.getRowLength=this.getRowLength;this.session.$getWidgetScreenLength=this.$getWidgetScreenLength;this.updateOnChange=this.updateOnChange.bind(this);this.renderWidgets=this.renderWidgets.bind(this);this.measureWidgets=this.measureWidgets.bind(this);this.session._changedWidgets=[];this.$onChangeEditor=this.$onChangeEditor.bind(this);this.session.on("change",this.updateOnChange);this.session.on("changeFold",this.updateOnFold);this.session.on("changeEditor",this.$onChangeEditor);}(function(){this.getRowLength=function(row){var h;if(this.lineWidgets)h=this.lineWidgets[row]&&this.lineWidgets[row].rowCount||0;else h=0;if(!this.$useWrapMode||!this.$wrapData[row]){return 1+h;}else{return this.$wrapData[row].length+1+h;}};this.$getWidgetScreenLength=function(){var screenRows=0;this.lineWidgets.forEach(function(w){if(w&&w.rowCount&&!w.hidden)screenRows+=w.rowCount;});return screenRows;};this.$onChangeEditor=function(e){this.attach(e.editor);};this.attach=function(editor){if(editor&&editor.widgetManager&&editor.widgetManager!=this)editor.widgetManager.detach();if(this.editor==editor)return;this.detach();this.editor=editor;if(editor){editor.widgetManager=this;editor.renderer.on("beforeRender",this.measureWidgets);editor.renderer.on("afterRender",this.renderWidgets);}};this.detach=function(e){var editor=this.editor;if(!editor)return;this.editor=null;editor.widgetManager=null;editor.renderer.off("beforeRender",this.measureWidgets);editor.renderer.off("afterRender",this.renderWidgets);var lineWidgets=this.session.lineWidgets;lineWidgets&&lineWidgets.forEach(function(w){if(w&&w.el&&w.el.parentNode){w._inDocument=false;w.el.parentNode.removeChild(w.el);}});};this.updateOnFold=function(e,session){var lineWidgets=session.lineWidgets;if(!lineWidgets||!e.action)return;var fold=e.data;var start=fold.start.row;var end=fold.end.row;var hide=e.action=="add";for(var i=start+1;i<end;i++){if(lineWidgets[i])lineWidgets[i].hidden=hide;}if(lineWidgets[end]){if(hide){if(!lineWidgets[start])lineWidgets[start]=lineWidgets[end];else lineWidgets[end].hidden=hide;}else{if(lineWidgets[start]==lineWidgets[end])lineWidgets[start]=undefined;lineWidgets[end].hidden=hide;}}};this.updateOnChange=function(delta){var lineWidgets=this.session.lineWidgets;if(!lineWidgets)return;var startRow=delta.start.row;var len=delta.end.row-startRow;if(len===0){}else if(delta.action=='remove'){var removed=lineWidgets.splice(startRow+1,len);removed.forEach(function(w){w&&this.removeLineWidget(w);},this);this.$updateRows();}else{var args=new Array(len);args.unshift(startRow,0);lineWidgets.splice.apply(lineWidgets,args);this.$updateRows();}};this.$updateRows=function(){var lineWidgets=this.session.lineWidgets;if(!lineWidgets)return;var noWidgets=true;lineWidgets.forEach(function(w,i){if(w){noWidgets=false;w.row=i;while(w.$oldWidget){w.$oldWidget.row=i;w=w.$oldWidget;}}});if(noWidgets)this.session.lineWidgets=null;};this.addLineWidget=function(w){if(!this.session.lineWidgets)this.session.lineWidgets=new Array(this.session.getLength());var old=this.session.lineWidgets[w.row];if(old){w.$oldWidget=old;if(old.el&&old.el.parentNode){old.el.parentNode.removeChild(old.el);old._inDocument=false;}}this.session.lineWidgets[w.row]=w;w.session=this.session;var renderer=this.editor.renderer;if(w.html&&!w.el){w.el=dom.createElement("div");w.el.innerHTML=w.html;}if(w.el){dom.addCssClass(w.el,"ace_lineWidgetContainer");w.el.style.position="absolute";w.el.style.zIndex=5;renderer.container.appendChild(w.el);w._inDocument=true;}if(!w.coverGutter){w.el.style.zIndex=3;}if(w.pixelHeight==null){w.pixelHeight=w.el.offsetHeight;}if(w.rowCount==null){w.rowCount=w.pixelHeight/renderer.layerConfig.lineHeight;}var fold=this.session.getFoldAt(w.row,0);w.$fold=fold;if(fold){var lineWidgets=this.session.lineWidgets;if(w.row==fold.end.row&&!lineWidgets[fold.start.row])lineWidgets[fold.start.row]=w;else w.hidden=true;}this.session._emit("changeFold",{data:{start:{row:w.row}}});this.$updateRows();this.renderWidgets(null,renderer);this.onWidgetChanged(w);return w;};this.removeLineWidget=function(w){w._inDocument=false;w.session=null;if(w.el&&w.el.parentNode)w.el.parentNode.removeChild(w.el);if(w.editor&&w.editor.destroy)try{w.editor.destroy();}catch(e){}if(this.session.lineWidgets){var w1=this.session.lineWidgets[w.row];if(w1==w){this.session.lineWidgets[w.row]=w.$oldWidget;if(w.$oldWidget)this.onWidgetChanged(w.$oldWidget);}else{while(w1){if(w1.$oldWidget==w){w1.$oldWidget=w.$oldWidget;break;}w1=w1.$oldWidget;}}}this.session._emit("changeFold",{data:{start:{row:w.row}}});this.$updateRows();};this.getWidgetsAtRow=function(row){var lineWidgets=this.session.lineWidgets;var w=lineWidgets&&lineWidgets[row];var list=[];while(w){list.push(w);w=w.$oldWidget;}return list;};this.onWidgetChanged=function(w){this.session._changedWidgets.push(w);this.editor&&this.editor.renderer.updateFull();};this.measureWidgets=function(e,renderer){var changedWidgets=this.session._changedWidgets;var config=renderer.layerConfig;if(!changedWidgets||!changedWidgets.length)return;var min=Infinity;for(var i=0;i<changedWidgets.length;i++){var w=changedWidgets[i];if(!w||!w.el)continue;if(w.session!=this.session)continue;if(!w._inDocument){if(this.session.lineWidgets[w.row]!=w)continue;w._inDocument=true;renderer.container.appendChild(w.el);}w.h=w.el.offsetHeight;if(!w.fixedWidth){w.w=w.el.offsetWidth;w.screenWidth=Math.ceil(w.w/config.characterWidth);}var rowCount=w.h/config.lineHeight;if(w.coverLine){rowCount-=this.session.getRowLineCount(w.row);if(rowCount<0)rowCount=0;}if(w.rowCount!=rowCount){w.rowCount=rowCount;if(w.row<min)min=w.row;}}if(min!=Infinity){this.session._emit("changeFold",{data:{start:{row:min}}});this.session.lineWidgetWidth=null;}this.session._changedWidgets=[];};this.renderWidgets=function(e,renderer){var config=renderer.layerConfig;var lineWidgets=this.session.lineWidgets;if(!lineWidgets)return;var first=Math.min(this.firstRow,config.firstRow);var last=Math.max(this.lastRow,config.lastRow,lineWidgets.length);while(first>0&&!lineWidgets[first]){first--;}this.firstRow=config.firstRow;this.lastRow=config.lastRow;renderer.$cursorLayer.config=config;for(var i=first;i<=last;i++){var w=lineWidgets[i];if(!w||!w.el)continue;if(w.hidden){w.el.style.top=-100-(w.pixelHeight||0)+"px";continue;}if(!w._inDocument){w._inDocument=true;renderer.container.appendChild(w.el);}var top=renderer.$cursorLayer.getPixelPosition({row:i,column:0},true).top;if(!w.coverLine)top+=config.lineHeight*this.session.getRowLineCount(w.row);w.el.style.top=top-config.offset+"px";var left=w.coverGutter?0:renderer.gutterWidth;if(!w.fixedWidth)left-=renderer.scrollLeft;w.el.style.left=left+"px";if(w.fullWidth&&w.screenWidth){w.el.style.minWidth=config.width+2*config.padding+"px";}if(w.fixedWidth){w.el.style.right=renderer.scrollBar.getWidth()+"px";}else{w.el.style.right="";}}};}).call(LineWidgets.prototype);exports.LineWidgets=LineWidgets;});ace.define("ace/ext/error_marker",["require","exports","module","ace/line_widgets","ace/lib/dom","ace/range"],function(acequire,exports,module){"use strict";var LineWidgets=acequire("../line_widgets").LineWidgets;var dom=acequire("../lib/dom");var Range=acequire("../range").Range;function binarySearch(array,needle,comparator){var first=0;var last=array.length-1;while(first<=last){var mid=first+last>>1;var c=comparator(needle,array[mid]);if(c>0)first=mid+1;else if(c<0)last=mid-1;else return mid;}return-(first+1);}function findAnnotations(session,row,dir){var annotations=session.getAnnotations().sort(Range.comparePoints);if(!annotations.length)return;var i=binarySearch(annotations,{row:row,column:-1},Range.comparePoints);if(i<0)i=-i-1;if(i>=annotations.length)i=dir>0?0:annotations.length-1;else if(i===0&&dir<0)i=annotations.length-1;var annotation=annotations[i];if(!annotation||!dir)return;if(annotation.row===row){do{annotation=annotations[i+=dir];}while(annotation&&annotation.row===row);if(!annotation)return annotations.slice();}var matched=[];row=annotation.row;do{matched[dir<0?"unshift":"push"](annotation);annotation=annotations[i+=dir];}while(annotation&&annotation.row==row);return matched.length&&matched;}exports.showErrorMarker=function(editor,dir){var session=editor.session;if(!session.widgetManager){session.widgetManager=new LineWidgets(session);session.widgetManager.attach(editor);}var pos=editor.getCursorPosition();var row=pos.row;var oldWidget=session.widgetManager.getWidgetsAtRow(row).filter(function(w){return w.type=="errorMarker";})[0];if(oldWidget){oldWidget.destroy();}else{row-=dir;}var annotations=findAnnotations(session,row,dir);var gutterAnno;if(annotations){var annotation=annotations[0];pos.column=(annotation.pos&&typeof annotation.column!="number"?annotation.pos.sc:annotation.column)||0;pos.row=annotation.row;gutterAnno=editor.renderer.$gutterLayer.$annotations[pos.row];}else if(oldWidget){return;}else{gutterAnno={text:["Looks good!"],className:"ace_ok"};}editor.session.unfold(pos.row);editor.selection.moveToPosition(pos);var w={row:pos.row,fixedWidth:true,coverGutter:true,el:dom.createElement("div"),type:"errorMarker"};var el=w.el.appendChild(dom.createElement("div"));var arrow=w.el.appendChild(dom.createElement("div"));arrow.className="error_widget_arrow "+gutterAnno.className;var left=editor.renderer.$cursorLayer.getPixelPosition(pos).left;arrow.style.left=left+editor.renderer.gutterWidth-5+"px";w.el.className="error_widget_wrapper";el.className="error_widget "+gutterAnno.className;el.innerHTML=gutterAnno.text.join("<br>");el.appendChild(dom.createElement("div"));var kb=function kb(_,hashId,keyString){if(hashId===0&&(keyString==="esc"||keyString==="return")){w.destroy();return{command:"null"};}};w.destroy=function(){if(editor.$mouseHandler.isMousePressed)return;editor.keyBinding.removeKeyboardHandler(kb);session.widgetManager.removeLineWidget(w);editor.off("changeSelection",w.destroy);editor.off("changeSession",w.destroy);editor.off("mouseup",w.destroy);editor.off("change",w.destroy);};editor.keyBinding.addKeyboardHandler(kb);editor.on("changeSelection",w.destroy);editor.on("changeSession",w.destroy);editor.on("mouseup",w.destroy);editor.on("change",w.destroy);editor.session.widgetManager.addLineWidget(w);w.el.onmousedown=editor.focus.bind(editor);editor.renderer.scrollCursorIntoView(null,0.5,{bottom:w.el.offsetHeight});};dom.importCssString("\
    .error_widget_wrapper {\
        background: inherit;\
        color: inherit;\
        border:none\
    }\
    .error_widget {\
        border-top: solid 2px;\
        border-bottom: solid 2px;\
        margin: 5px 0;\
        padding: 10px 40px;\
        white-space: pre-wrap;\
    }\
    .error_widget.ace_error, .error_widget_arrow.ace_error{\
        border-color: #ff5a5a\
    }\
    .error_widget.ace_warning, .error_widget_arrow.ace_warning{\
        border-color: #F1D817\
    }\
    .error_widget.ace_info, .error_widget_arrow.ace_info{\
        border-color: #5a5a5a\
    }\
    .error_widget.ace_ok, .error_widget_arrow.ace_ok{\
        border-color: #5aaa5a\
    }\
    .error_widget_arrow {\
        position: absolute;\
        border: solid 5px;\
        border-top-color: transparent!important;\
        border-right-color: transparent!important;\
        border-left-color: transparent!important;\
        top: -5px;\
    }\
","");});ace.define("ace/ace",["require","exports","module","ace/lib/fixoldbrowsers","ace/lib/dom","ace/lib/event","ace/editor","ace/edit_session","ace/undomanager","ace/virtual_renderer","ace/worker/worker_client","ace/keyboard/hash_handler","ace/placeholder","ace/multi_select","ace/mode/folding/fold_mode","ace/theme/textmate","ace/ext/error_marker","ace/config"],function(acequire,exports,module){"use strict";acequire("./lib/fixoldbrowsers");var dom=acequire("./lib/dom");var event=acequire("./lib/event");var Editor=acequire("./editor").Editor;var EditSession=acequire("./edit_session").EditSession;var UndoManager=acequire("./undomanager").UndoManager;var Renderer=acequire("./virtual_renderer").VirtualRenderer;acequire("./worker/worker_client");acequire("./keyboard/hash_handler");acequire("./placeholder");acequire("./multi_select");acequire("./mode/folding/fold_mode");acequire("./theme/textmate");acequire("./ext/error_marker");exports.config=acequire("./config");exports.acequire=acequire;if(true)exports.define=__webpack_require__(20);exports.edit=function(el){if(typeof el=="string"){var _id=el;el=document.getElementById(_id);if(!el)throw new Error("ace.edit can't find div #"+_id);}if(el&&el.env&&el.env.editor instanceof Editor)return el.env.editor;var value="";if(el&&/input|textarea/i.test(el.tagName)){var oldNode=el;value=oldNode.value;el=dom.createElement("pre");oldNode.parentNode.replaceChild(el,oldNode);}else if(el){value=dom.getInnerText(el);el.innerHTML="";}var doc=exports.createEditSession(value);var editor=new Editor(new Renderer(el));editor.setSession(doc);var env={document:doc,editor:editor,onResize:editor.resize.bind(editor,null)};if(oldNode)env.textarea=oldNode;event.addListener(window,"resize",env.onResize);editor.on("destroy",function(){event.removeListener(window,"resize",env.onResize);env.editor.container.env=null;// prevent memory leak on old ie
});editor.container.env=editor.env=env;return editor;};exports.createEditSession=function(text,mode){var doc=new EditSession(text,mode);doc.setUndoManager(new UndoManager());return doc;};exports.EditSession=EditSession;exports.UndoManager=UndoManager;exports.version="1.2.6";});(function(){ace.acequire(["ace/ace"],function(a){if(a){a.config.init(true);a.define=ace.define;}if(!window.ace)window.ace=a;for(var key in a){if(a.hasOwnProperty(key))window.ace[key]=a[key];}});})();module.exports=window.ace.acequire("ace/ace");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

module.exports = get_blob();

function get_blob() {
  if (global.Blob) {
    try {
      new Blob(['asdf'], { type: 'text/plain' });
      return Blob;
    } catch (err) {}
  }

  var Builder = global.WebKitBlobBuilder || global.MozBlobBuilder || global.MSBlobBuilder;

  return function (parts, bag) {
    var builder = new Builder(),
        endings = bag.endings,
        type = bag.type;

    if (endings) for (var i = 0, len = parts.length; i < len; ++i) {
      builder.append(parts[i], endings);
    } else for (var i = 0, len = parts.length; i < len; ++i) {
      builder.append(parts[i]);
    }

    return type ? builder.getBlob(type) : builder.getBlob();
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


ace.define("ace/theme/chrome", ["require", "exports", "module", "ace/lib/dom"], function (acequire, exports, module) {

  exports.isDark = false;
  exports.cssClass = "ace-chrome";
  exports.cssText = ".ace-chrome .ace_gutter {\
background: #ebebeb;\
color: #333;\
overflow : hidden;\
}\
.ace-chrome .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-chrome {\
background-color: #FFFFFF;\
color: black;\
}\
.ace-chrome .ace_cursor {\
color: black;\
}\
.ace-chrome .ace_invisible {\
color: rgb(191, 191, 191);\
}\
.ace-chrome .ace_constant.ace_buildin {\
color: rgb(88, 72, 246);\
}\
.ace-chrome .ace_constant.ace_language {\
color: rgb(88, 92, 246);\
}\
.ace-chrome .ace_constant.ace_library {\
color: rgb(6, 150, 14);\
}\
.ace-chrome .ace_invalid {\
background-color: rgb(153, 0, 0);\
color: white;\
}\
.ace-chrome .ace_fold {\
}\
.ace-chrome .ace_support.ace_function {\
color: rgb(60, 76, 114);\
}\
.ace-chrome .ace_support.ace_constant {\
color: rgb(6, 150, 14);\
}\
.ace-chrome .ace_support.ace_type,\
.ace-chrome .ace_support.ace_class\
.ace-chrome .ace_support.ace_other {\
color: rgb(109, 121, 222);\
}\
.ace-chrome .ace_variable.ace_parameter {\
font-style:italic;\
color:#FD971F;\
}\
.ace-chrome .ace_keyword.ace_operator {\
color: rgb(104, 118, 135);\
}\
.ace-chrome .ace_comment {\
color: #236e24;\
}\
.ace-chrome .ace_comment.ace_doc {\
color: #236e24;\
}\
.ace-chrome .ace_comment.ace_doc.ace_tag {\
color: #236e24;\
}\
.ace-chrome .ace_constant.ace_numeric {\
color: rgb(0, 0, 205);\
}\
.ace-chrome .ace_variable {\
color: rgb(49, 132, 149);\
}\
.ace-chrome .ace_xml-pe {\
color: rgb(104, 104, 91);\
}\
.ace-chrome .ace_entity.ace_name.ace_function {\
color: #0000A2;\
}\
.ace-chrome .ace_heading {\
color: rgb(12, 7, 255);\
}\
.ace-chrome .ace_list {\
color:rgb(185, 6, 144);\
}\
.ace-chrome .ace_marker-layer .ace_selection {\
background: rgb(181, 213, 255);\
}\
.ace-chrome .ace_marker-layer .ace_step {\
background: rgb(252, 255, 0);\
}\
.ace-chrome .ace_marker-layer .ace_stack {\
background: rgb(164, 229, 101);\
}\
.ace-chrome .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid rgb(192, 192, 192);\
}\
.ace-chrome .ace_marker-layer .ace_active-line {\
background: rgba(0, 0, 0, 0.07);\
}\
.ace-chrome .ace_gutter-active-line {\
background-color : #dcdcdc;\
}\
.ace-chrome .ace_marker-layer .ace_selected-word {\
background: rgb(250, 250, 255);\
border: 1px solid rgb(200, 200, 250);\
}\
.ace-chrome .ace_storage,\
.ace-chrome .ace_keyword,\
.ace-chrome .ace_meta.ace_tag {\
color: rgb(147, 15, 128);\
}\
.ace-chrome .ace_string.ace_regex {\
color: rgb(255, 0, 0)\
}\
.ace-chrome .ace_string {\
color: #1A1AA6;\
}\
.ace-chrome .ace_entity.ace_other.ace_attribute-name {\
color: #994409;\
}\
.ace-chrome .ace_indent-guide {\
background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y;\
}\
";

  var dom = acequire("../lib/dom");
  dom.importCssString(exports.cssText, exports.cssClass);
});

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(22),
    now = __webpack_require__(44),
    toNumber = __webpack_require__(46);

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
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__(23);

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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(22),
    isSymbol = __webpack_require__(47);

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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var baseGetTag = __webpack_require__(48),
    isObjectLike = __webpack_require__(51);

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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__(24),
    getRawTag = __webpack_require__(49),
    objectToString = __webpack_require__(50);

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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__(24);

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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


ace.define('ace/mode/my-mode', ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/text_highlight_rules", "ace/worker/worker_client"], function (require, exports, module) {
    var oop = require("ace/lib/oop");
    var TextMode = require("ace/mode/text").Mode;
    var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;

    var MyHighlightRules = function MyHighlightRules() {
        var keywordMapper = this.createKeywordMapper({
            "keyword.control": "if|then|else",
            "keyword.operator": "and|or|not",
            "keyword.other": "class",
            "storage.type": "int|float|text",
            "storage.modifier": "private|public",
            "support.function": "print|sort",
            "constant.language": "true|false"
        }, "identifier");
        this.$rules = {
            "start": [{ token: "comment", regex: "//" }, { token: "string", regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]' }, { token: "constant.numeric", regex: "0[xX][0-9a-fA-F]+\\b" }, { token: "constant.numeric", regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b" }, { token: "keyword.operator", regex: "!|%|\\\\|/|\\*|\\-|\\+|~=|==|<>|!=|<=|>=|=|<|>|&&|\\|\\|" }, { token: "punctuation.operator", regex: "\\?|\\:|\\,|\\;|\\." }, { token: "paren.lparen", regex: "[[({]" }, { token: "paren.rparen", regex: "[\\])}]" }, { token: "text", regex: "\\s+" }, { token: keywordMapper, regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b" }]
        };
    };
    oop.inherits(MyHighlightRules, TextHighlightRules);

    var MyMode = function MyMode() {
        this.HighlightRules = MyHighlightRules;
    };
    oop.inherits(MyMode, TextMode);

    (function () {

        this.$id = "ace/mode/my-mode";
    }).call(MyMode.prototype);

    exports.Mode = MyMode;
});

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = validate;

var _InputStream = __webpack_require__(13);

var _CommonTokenStream = __webpack_require__(27);

var _ErrorListener2 = __webpack_require__(12);

var _tree = __webpack_require__(29);

var _ExprLexer = __webpack_require__(57);

var _ExprParser = __webpack_require__(70);

var _ExprListener2 = __webpack_require__(38);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyListener = function (_ExprListener) {
    _inherits(MyListener, _ExprListener);

    function MyListener() {
        _classCallCheck(this, MyListener);

        return _possibleConstructorReturn(this, (MyListener.__proto__ || Object.getPrototypeOf(MyListener)).apply(this, arguments));
    }

    _createClass(MyListener, [{
        key: 'exitProg',
        value: function exitProg(ctx) {
            console.log('exitProg', ctx.getText());
        }
    }]);

    return MyListener;
}(_ExprListener2.ExprListener);

var MyErrorListener = function (_ErrorListener) {
    _inherits(MyErrorListener, _ErrorListener);

    function MyErrorListener() {
        _classCallCheck(this, MyErrorListener);

        var _this2 = _possibleConstructorReturn(this, (MyErrorListener.__proto__ || Object.getPrototypeOf(MyErrorListener)).call(this));

        _this2.errors = [];
        return _this2;
    }

    _createClass(MyErrorListener, [{
        key: 'syntaxError',
        value: function syntaxError(recognizer, offendingSymbol, line, column, text, e) {
            var length = 1,
                col = column,
                start;
            if (e && e.ctx && e.ctx.start) {
                col = e.ctx.start.column;
                start = e.ctx.start.start;
                length = e.ctx.start.stop - start + 1;
                if (length < 1) {
                    length = 1;
                }
            }
            this.errors.push({
                line: line - 1,
                column: col,
                length: length,
                text: text
            });
        }
    }]);

    return MyErrorListener;
}(_ErrorListener2.ErrorListener);

function validate(input) {
    var listener = new MyErrorListener();

    var chars = new _InputStream.InputStream('' + input);
    var lexer = new _ExprLexer.ExprLexer(chars);
    lexer.removeErrorListeners();
    lexer.addErrorListener(listener);

    var tokens = new _CommonTokenStream.CommonTokenStream(lexer);

    var parser = new _ExprParser.ExprParser(tokens);
    parser.buildParseTrees = false;
    parser.removeErrorListeners();
    parser.addErrorListener(listener);

    var walker = new _tree.ParseTreeWalker();
    var loader = new MyListener();

    var tree = parser.prog();

    walker.walk(loader, tree);
    return listener.errors;
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

// This implementation of {@link TokenStream} loads tokens from a
// {@link TokenSource} on-demand, and places the tokens in a buffer to provide
// access to any previous token by index.
//
// <p>
// This token stream ignores the value of {@link Token//getChannel}. If your
// parser requires the token stream filter tokens to only those on a particular
// channel, such as {@link Token//DEFAULT_CHANNEL} or
// {@link Token//HIDDEN_CHANNEL}, use a filtering token stream such a
// {@link CommonTokenStream}.</p>

var Token = __webpack_require__(1).Token;
var Lexer = __webpack_require__(14).Lexer;
var Interval = __webpack_require__(2).Interval;

// this is just to keep meaningful parameter types to Parser
function TokenStream() {
	return this;
}

function BufferedTokenStream(tokenSource) {

	TokenStream.call(this);
	// The {@link TokenSource} from which tokens for this stream are fetched.
	this.tokenSource = tokenSource;

	// A collection of all tokens fetched from the token source. The list is
	// considered a complete view of the input once {@link //fetchedEOF} is set
	// to {@code true}.
	this.tokens = [];

	// The index into {@link //tokens} of the current token (next token to
	// {@link //consume}). {@link //tokens}{@code [}{@link //p}{@code ]} should
	// be
	// {@link //LT LT(1)}.
	//
	// <p>This field is set to -1 when the stream is first constructed or when
	// {@link //setTokenSource} is called, indicating that the first token has
	// not yet been fetched from the token source. For additional information,
	// see the documentation of {@link IntStream} for a description of
	// Initializing Methods.</p>
	this.index = -1;

	// Indicates whether the {@link Token//EOF} token has been fetched from
	// {@link //tokenSource} and added to {@link //tokens}. This field improves
	// performance for the following cases:
	//
	// <ul>
	// <li>{@link //consume}: The lookahead check in {@link //consume} to
	// prevent
	// consuming the EOF symbol is optimized by checking the values of
	// {@link //fetchedEOF} and {@link //p} instead of calling {@link
	// //LA}.</li>
	// <li>{@link //fetch}: The check to prevent adding multiple EOF symbols
	// into
	// {@link //tokens} is trivial with this field.</li>
	// <ul>
	this.fetchedEOF = false;
	return this;
}

BufferedTokenStream.prototype = Object.create(TokenStream.prototype);
BufferedTokenStream.prototype.constructor = BufferedTokenStream;

BufferedTokenStream.prototype.mark = function () {
	return 0;
};

BufferedTokenStream.prototype.release = function (marker) {
	// no resources to release
};

BufferedTokenStream.prototype.reset = function () {
	this.seek(0);
};

BufferedTokenStream.prototype.seek = function (index) {
	this.lazyInit();
	this.index = this.adjustSeekIndex(index);
};

BufferedTokenStream.prototype.get = function (index) {
	this.lazyInit();
	return this.tokens[index];
};

BufferedTokenStream.prototype.consume = function () {
	var skipEofCheck = false;
	if (this.index >= 0) {
		if (this.fetchedEOF) {
			// the last token in tokens is EOF. skip check if p indexes any
			// fetched token except the last.
			skipEofCheck = this.index < this.tokens.length - 1;
		} else {
			// no EOF token in tokens. skip check if p indexes a fetched token.
			skipEofCheck = this.index < this.tokens.length;
		}
	} else {
		// not yet initialized
		skipEofCheck = false;
	}
	if (!skipEofCheck && this.LA(1) === Token.EOF) {
		throw "cannot consume EOF";
	}
	if (this.sync(this.index + 1)) {
		this.index = this.adjustSeekIndex(this.index + 1);
	}
};

// Make sure index {@code i} in tokens has a token.
//
// @return {@code true} if a token is located at index {@code i}, otherwise
// {@code false}.
// @see //get(int i)
// /
BufferedTokenStream.prototype.sync = function (i) {
	var n = i - this.tokens.length + 1; // how many more elements we need?
	if (n > 0) {
		var fetched = this.fetch(n);
		return fetched >= n;
	}
	return true;
};

// Add {@code n} elements to buffer.
//
// @return The actual number of elements added to the buffer.
// /
BufferedTokenStream.prototype.fetch = function (n) {
	if (this.fetchedEOF) {
		return 0;
	}
	for (var i = 0; i < n; i++) {
		var t = this.tokenSource.nextToken();
		t.tokenIndex = this.tokens.length;
		this.tokens.push(t);
		if (t.type === Token.EOF) {
			this.fetchedEOF = true;
			return i + 1;
		}
	}
	return n;
};

// Get all tokens from start..stop inclusively///
BufferedTokenStream.prototype.getTokens = function (start, stop, types) {
	if (types === undefined) {
		types = null;
	}
	if (start < 0 || stop < 0) {
		return null;
	}
	this.lazyInit();
	var subset = [];
	if (stop >= this.tokens.length) {
		stop = this.tokens.length - 1;
	}
	for (var i = start; i < stop; i++) {
		var t = this.tokens[i];
		if (t.type === Token.EOF) {
			break;
		}
		if (types === null || types.contains(t.type)) {
			subset.push(t);
		}
	}
	return subset;
};

BufferedTokenStream.prototype.LA = function (i) {
	return this.LT(i).type;
};

BufferedTokenStream.prototype.LB = function (k) {
	if (this.index - k < 0) {
		return null;
	}
	return this.tokens[this.index - k];
};

BufferedTokenStream.prototype.LT = function (k) {
	this.lazyInit();
	if (k === 0) {
		return null;
	}
	if (k < 0) {
		return this.LB(-k);
	}
	var i = this.index + k - 1;
	this.sync(i);
	if (i >= this.tokens.length) {
		// return EOF token
		// EOF must be last token
		return this.tokens[this.tokens.length - 1];
	}
	return this.tokens[i];
};

// Allowed derived classes to modify the behavior of operations which change
// the current stream position by adjusting the target token index of a seek
// operation. The default implementation simply returns {@code i}. If an
// exception is thrown in this method, the current stream index should not be
// changed.
//
// <p>For example, {@link CommonTokenStream} overrides this method to ensure
// that
// the seek target is always an on-channel token.</p>
//
// @param i The target token index.
// @return The adjusted target token index.

BufferedTokenStream.prototype.adjustSeekIndex = function (i) {
	return i;
};

BufferedTokenStream.prototype.lazyInit = function () {
	if (this.index === -1) {
		this.setup();
	}
};

BufferedTokenStream.prototype.setup = function () {
	this.sync(0);
	this.index = this.adjustSeekIndex(0);
};

// Reset this token stream by setting its token source.///
BufferedTokenStream.prototype.setTokenSource = function (tokenSource) {
	this.tokenSource = tokenSource;
	this.tokens = [];
	this.index = -1;
	this.fetchedEOF = false;
};

// Given a starting index, return the index of the next token on channel.
// Return i if tokens[i] is on channel. Return -1 if there are no tokens
// on channel between i and EOF.
// /
BufferedTokenStream.prototype.nextTokenOnChannel = function (i, channel) {
	this.sync(i);
	if (i >= this.tokens.length) {
		return -1;
	}
	var token = this.tokens[i];
	while (token.channel !== this.channel) {
		if (token.type === Token.EOF) {
			return -1;
		}
		i += 1;
		this.sync(i);
		token = this.tokens[i];
	}
	return i;
};

// Given a starting index, return the index of the previous token on channel.
// Return i if tokens[i] is on channel. Return -1 if there are no tokens
// on channel between i and 0.
BufferedTokenStream.prototype.previousTokenOnChannel = function (i, channel) {
	while (i >= 0 && this.tokens[i].channel !== channel) {
		i -= 1;
	}
	return i;
};

// Collect all tokens on specified channel to the right of
// the current token up until we see a token on DEFAULT_TOKEN_CHANNEL or
// EOF. If channel is -1, find any non default channel token.
BufferedTokenStream.prototype.getHiddenTokensToRight = function (tokenIndex, channel) {
	if (channel === undefined) {
		channel = -1;
	}
	this.lazyInit();
	if (tokenIndex < 0 || tokenIndex >= this.tokens.length) {
		throw "" + tokenIndex + " not in 0.." + this.tokens.length - 1;
	}
	var nextOnChannel = this.nextTokenOnChannel(tokenIndex + 1, Lexer.DEFAULT_TOKEN_CHANNEL);
	var from_ = tokenIndex + 1;
	// if none onchannel to right, nextOnChannel=-1 so set to = last token
	var to = nextOnChannel === -1 ? this.tokens.length - 1 : nextOnChannel;
	return this.filterForChannel(from_, to, channel);
};

// Collect all tokens on specified channel to the left of
// the current token up until we see a token on DEFAULT_TOKEN_CHANNEL.
// If channel is -1, find any non default channel token.
BufferedTokenStream.prototype.getHiddenTokensToLeft = function (tokenIndex, channel) {
	if (channel === undefined) {
		channel = -1;
	}
	this.lazyInit();
	if (tokenIndex < 0 || tokenIndex >= this.tokens.length) {
		throw "" + tokenIndex + " not in 0.." + this.tokens.length - 1;
	}
	var prevOnChannel = this.previousTokenOnChannel(tokenIndex - 1, Lexer.DEFAULT_TOKEN_CHANNEL);
	if (prevOnChannel === tokenIndex - 1) {
		return null;
	}
	// if none on channel to left, prevOnChannel=-1 then from=0
	var from_ = prevOnChannel + 1;
	var to = tokenIndex - 1;
	return this.filterForChannel(from_, to, channel);
};

BufferedTokenStream.prototype.filterForChannel = function (left, right, channel) {
	var hidden = [];
	for (var i = left; i < right + 1; i++) {
		var t = this.tokens[i];
		if (channel === -1) {
			if (t.channel !== Lexer.DEFAULT_TOKEN_CHANNEL) {
				hidden.push(t);
			}
		} else if (t.channel === channel) {
			hidden.push(t);
		}
	}
	if (hidden.length === 0) {
		return null;
	}
	return hidden;
};

BufferedTokenStream.prototype.getSourceName = function () {
	return this.tokenSource.getSourceName();
};

// Get the text of all tokens in this buffer.///
BufferedTokenStream.prototype.getText = function (interval) {
	this.lazyInit();
	this.fill();
	if (interval === undefined || interval === null) {
		interval = new Interval(0, this.tokens.length - 1);
	}
	var start = interval.start;
	if (start instanceof Token) {
		start = start.tokenIndex;
	}
	var stop = interval.stop;
	if (stop instanceof Token) {
		stop = stop.tokenIndex;
	}
	if (start === null || stop === null || start < 0 || stop < 0) {
		return "";
	}
	if (stop >= this.tokens.length) {
		stop = this.tokens.length - 1;
	}
	var s = "";
	for (var i = start; i < stop + 1; i++) {
		var t = this.tokens[i];
		if (t.type === Token.EOF) {
			break;
		}
		s = s + t.text;
	}
	return s;
};

// Get all tokens from lexer until EOF///
BufferedTokenStream.prototype.fill = function () {
	this.lazyInit();
	while (this.fetch(1000) === 1000) {
		continue;
	}
};

exports.BufferedTokenStream = BufferedTokenStream;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
//

//
// This default implementation of {@link TokenFactory} creates
// {@link CommonToken} objects.
//

var CommonToken = __webpack_require__(1).CommonToken;

function TokenFactory() {
    return this;
}

function CommonTokenFactory(copyText) {
    TokenFactory.call(this);
    // Indicates whether {@link CommonToken//setText} should be called after
    // constructing tokens to explicitly set the text. This is useful for cases
    // where the input stream might not be able to provide arbitrary substrings
    // of text from the input after the lexer creates a token (e.g. the
    // implementation of {@link CharStream//getText} in
    // {@link UnbufferedCharStream} throws an
    // {@link UnsupportedOperationException}). Explicitly setting the token text
    // allows {@link Token//getText} to be called at any time regardless of the
    // input stream implementation.
    //
    // <p>
    // The default value is {@code false} to avoid the performance and memory
    // overhead of copying text for every token unless explicitly requested.</p>
    //
    this.copyText = copyText === undefined ? false : copyText;
    return this;
}

CommonTokenFactory.prototype = Object.create(TokenFactory.prototype);
CommonTokenFactory.prototype.constructor = CommonTokenFactory;

//
// The default {@link CommonTokenFactory} instance.
//
// <p>
// This token factory does not explicitly copy token text when constructing
// tokens.</p>
//
CommonTokenFactory.DEFAULT = new CommonTokenFactory();

CommonTokenFactory.prototype.create = function (source, type, text, channel, start, stop, line, column) {
    var t = new CommonToken(source, type, channel, start, stop);
    t.line = line;
    t.column = column;
    if (text !== null) {
        t.text = text;
    } else if (this.copyText && source[1] !== null) {
        t.text = source[1].getText(start, stop);
    }
    return t;
};

CommonTokenFactory.prototype.createThin = function (type, text) {
    var t = new CommonToken(null, type);
    t.text = text;
    return t;
};

exports.CommonTokenFactory = CommonTokenFactory;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
///

var Set = __webpack_require__(0).Set;
var BitSet = __webpack_require__(0).BitSet;
var Token = __webpack_require__(1).Token;
var ATNConfig = __webpack_require__(16).ATNConfig;
var Interval = __webpack_require__(2).Interval;
var IntervalSet = __webpack_require__(2).IntervalSet;
var RuleStopState = __webpack_require__(5).RuleStopState;
var RuleTransition = __webpack_require__(7).RuleTransition;
var NotSetTransition = __webpack_require__(7).NotSetTransition;
var WildcardTransition = __webpack_require__(7).WildcardTransition;
var AbstractPredicateTransition = __webpack_require__(7).AbstractPredicateTransition;

var pc = __webpack_require__(6);
var predictionContextFromRuleContext = pc.predictionContextFromRuleContext;
var PredictionContext = pc.PredictionContext;
var SingletonPredictionContext = pc.SingletonPredictionContext;

function LL1Analyzer(atn) {
    this.atn = atn;
}

//* Special value added to the lookahead sets to indicate that we hit
//  a predicate during analysis if {@code seeThruPreds==false}.
///
LL1Analyzer.HIT_PRED = Token.INVALID_TYPE;

//*
// Calculates the SLL(1) expected lookahead set for each outgoing transition
// of an {@link ATNState}. The returned array has one element for each
// outgoing transition in {@code s}. If the closure from transition
// <em>i</em> leads to a semantic predicate before matching a symbol, the
// element at index <em>i</em> of the result will be {@code null}.
//
// @param s the ATN state
// @return the expected symbols for each outgoing transition of {@code s}.
///
LL1Analyzer.prototype.getDecisionLookahead = function (s) {
    if (s === null) {
        return null;
    }
    var count = s.transitions.length;
    var look = [];
    for (var alt = 0; alt < count; alt++) {
        look[alt] = new IntervalSet();
        var lookBusy = new Set();
        var seeThruPreds = false; // fail to get lookahead upon pred
        this._LOOK(s.transition(alt).target, null, PredictionContext.EMPTY, look[alt], lookBusy, new BitSet(), seeThruPreds, false);
        // Wipe out lookahead for this alternative if we found nothing
        // or we had a predicate when we !seeThruPreds
        if (look[alt].length === 0 || look[alt].contains(LL1Analyzer.HIT_PRED)) {
            look[alt] = null;
        }
    }
    return look;
};

//*
// Compute set of tokens that can follow {@code s} in the ATN in the
// specified {@code ctx}.
//
// <p>If {@code ctx} is {@code null} and the end of the rule containing
// {@code s} is reached, {@link Token//EPSILON} is added to the result set.
// If {@code ctx} is not {@code null} and the end of the outermost rule is
// reached, {@link Token//EOF} is added to the result set.</p>
//
// @param s the ATN state
// @param stopState the ATN state to stop at. This can be a
// {@link BlockEndState} to detect epsilon paths through a closure.
// @param ctx the complete parser context, or {@code null} if the context
// should be ignored
//
// @return The set of tokens that can follow {@code s} in the ATN in the
// specified {@code ctx}.
///
LL1Analyzer.prototype.LOOK = function (s, stopState, ctx) {
    var r = new IntervalSet();
    var seeThruPreds = true; // ignore preds; get all lookahead
    ctx = ctx || null;
    var lookContext = ctx !== null ? predictionContextFromRuleContext(s.atn, ctx) : null;
    this._LOOK(s, stopState, lookContext, r, new Set(), new BitSet(), seeThruPreds, true);
    return r;
};

//*
// Compute set of tokens that can follow {@code s} in the ATN in the
// specified {@code ctx}.
//
// <p>If {@code ctx} is {@code null} and {@code stopState} or the end of the
// rule containing {@code s} is reached, {@link Token//EPSILON} is added to
// the result set. If {@code ctx} is not {@code null} and {@code addEOF} is
// {@code true} and {@code stopState} or the end of the outermost rule is
// reached, {@link Token//EOF} is added to the result set.</p>
//
// @param s the ATN state.
// @param stopState the ATN state to stop at. This can be a
// {@link BlockEndState} to detect epsilon paths through a closure.
// @param ctx The outer context, or {@code null} if the outer context should
// not be used.
// @param look The result lookahead set.
// @param lookBusy A set used for preventing epsilon closures in the ATN
// from causing a stack overflow. Outside code should pass
// {@code new Set<ATNConfig>} for this argument.
// @param calledRuleStack A set used for preventing left recursion in the
// ATN from causing a stack overflow. Outside code should pass
// {@code new BitSet()} for this argument.
// @param seeThruPreds {@code true} to true semantic predicates as
// implicitly {@code true} and "see through them", otherwise {@code false}
// to treat semantic predicates as opaque and add {@link //HIT_PRED} to the
// result if one is encountered.
// @param addEOF Add {@link Token//EOF} to the result if the end of the
// outermost context is reached. This parameter has no effect if {@code ctx}
// is {@code null}.
///
LL1Analyzer.prototype._LOOK = function (s, stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF) {
    var c = new ATNConfig({ state: s, alt: 0, context: ctx }, null);
    if (lookBusy.contains(c)) {
        return;
    }
    lookBusy.add(c);
    if (s === stopState) {
        if (ctx === null) {
            look.addOne(Token.EPSILON);
            return;
        } else if (ctx.isEmpty() && addEOF) {
            look.addOne(Token.EOF);
            return;
        }
    }
    if (s instanceof RuleStopState) {
        if (ctx === null) {
            look.addOne(Token.EPSILON);
            return;
        } else if (ctx.isEmpty() && addEOF) {
            look.addOne(Token.EOF);
            return;
        }
        if (ctx !== PredictionContext.EMPTY) {
            // run thru all possible stack tops in ctx
            for (var i = 0; i < ctx.length; i++) {
                var returnState = this.atn.states[ctx.getReturnState(i)];
                var removed = calledRuleStack.contains(returnState.ruleIndex);
                try {
                    calledRuleStack.remove(returnState.ruleIndex);
                    this._LOOK(returnState, stopState, ctx.getParent(i), look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
                } finally {
                    if (removed) {
                        calledRuleStack.add(returnState.ruleIndex);
                    }
                }
            }
            return;
        }
    }
    for (var j = 0; j < s.transitions.length; j++) {
        var t = s.transitions[j];
        if (t.constructor === RuleTransition) {
            if (calledRuleStack.contains(t.target.ruleIndex)) {
                continue;
            }
            var newContext = SingletonPredictionContext.create(ctx, t.followState.stateNumber);
            try {
                calledRuleStack.add(t.target.ruleIndex);
                this._LOOK(t.target, stopState, newContext, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
            } finally {
                calledRuleStack.remove(t.target.ruleIndex);
            }
        } else if (t instanceof AbstractPredicateTransition) {
            if (seeThruPreds) {
                this._LOOK(t.target, stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
            } else {
                look.addOne(LL1Analyzer.HIT_PRED);
            }
        } else if (t.isEpsilon) {
            this._LOOK(t.target, stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
        } else if (t.constructor === WildcardTransition) {
            look.addRange(Token.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType);
        } else {
            var set = t.label;
            if (set !== null) {
                if (t instanceof NotSetTransition) {
                    set = set.complement(Token.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType);
                }
                look.addSet(set);
            }
        }
    }
};

exports.LL1Analyzer = LL1Analyzer;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Generated from lib/Expr.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = __webpack_require__(17);

var serializedATN = ["\x03\u608B\uA72A\u8133\uB9ED\u417C\u3BE7\u7786\u5964", "\x02\x10\xD4\b\x01\x04\x02\t\x02\x04\x03\t\x03\x04", "\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t", "\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\x0B\t\x0B\x04", "\f\t\f\x04\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10", "\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04\x13\t\x13", "\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17", "\t\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A", "\x04\x1B\t\x1B\x04\x1C\t\x1C\x04\x1D\t\x1D\x04\x1E", "\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#", "\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04", "*\t*\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03", "\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03", "\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x07", "\th\n\t\f\t\x0E\tk\x0B\t\x03\n\x03\n\x03\n\x03\n\x03\x0B", "\x03\x0B\x03\x0B\x03\f\x03\f\x03\f\x03\r\x05\rx\n", "\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07", "\x0E\x80\n\x0E\f\x0E\x0E\x0E\x83\x0B\x0E\x03\x0E", "\x05\x0E\x86\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03", "\x0E\x03\x0E\x07\x0E\x8D\n\x0E\f\x0E\x0E\x0E\x90", "\x0B\x0E\x03\x0E\x03\x0E\x05\x0E\x94\n\x0E\x03", "\x0E\x03\x0E\x03\x0F\x06\x0F\x99\n\x0F\r\x0F\x0E", "\x0F\x9A\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11", "\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14", "\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17", "\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A", "\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D", "\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 ", "\x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03", "%\x03%\x03&\x03&\x03'\x03'\x03(\x03(\x03)\x03)\x03", "*\x03*\x03\x8E\x02+\x03\x03\x05\x04\x07\x05\t\x06", "\x0B\x07\r\b\x0F\t\x11\n\x13\x0B\x15\f\x17\r\x19\x0E", "\x1B\x0F\x1D\x10\x1F\x02!\x02#\x02%\x02'\x02)\x02", "+\x02-\x02/\x021\x023\x025\x027\x029\x02;\x02=\x02", "?\x02A\x02C\x02E\x02G\x02I\x02K\x02M\x02O\x02Q\x02", "S\x02\x03\x02!\x05\x02C\\aac|\x06\x022;C\\aac|\x04\x02", "\f\f\x0F\x0F\x04\x02\x0B\x0B\"\"\x03\x022;\x04\x02", "CCcc\x04\x02DDdd\x04\x02EEee\x04\x02FFff\x04\x02GGg", "g\x04\x02HHhh\x04\x02IIii\x04\x02JJjj\x04\x02KKkk\x04", "\x02LLll\x04\x02MMmm\x04\x02NNnn\x04\x02OOoo\x04\x02", "PPpp\x04\x02QQqq\x04\x02RRrr\x04\x02SSss\x04\x02TTt", "t\x04\x02UUuu\x04\x02VVvv\x04\x02WWww\x04\x02XXxx\x04", "\x02YYyy\x04\x02ZZzz\x04\x02[[{{\x04\x02\\\\||\x02\xBF", "\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02", "\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02", "\x02\x0B\x03\x02\x02\x02\x02\r\x03\x02\x02\x02", "\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02", "\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02", "\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02", "\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02", "\x03U\x03\x02\x02\x02\x05W\x03\x02\x02\x02\x07", "Z\x03\x02\x02\x02\t\\\x03\x02\x02\x02\x0B_\x03\x02", "\x02\x02\ra\x03\x02\x02\x02\x0Fc\x03\x02\x02\x02", "\x11e\x03\x02\x02\x02\x13l\x03\x02\x02\x02\x15", "p\x03\x02\x02\x02\x17s\x03\x02\x02\x02\x19w\x03", "\x02\x02\x02\x1B\x93\x03\x02\x02\x02\x1D\x98\x03", "\x02\x02\x02\x1F\x9E\x03\x02\x02\x02!\xA0\x03", "\x02\x02\x02#\xA2\x03\x02\x02\x02%\xA4\x03\x02", "\x02\x02'\xA6\x03\x02\x02\x02)\xA8\x03\x02\x02", "\x02+\xAA\x03\x02\x02\x02-\xAC\x03\x02\x02\x02", "/\xAE\x03\x02\x02\x021\xB0\x03\x02\x02\x023\xB2", "\x03\x02\x02\x025\xB4\x03\x02\x02\x027\xB6\x03", "\x02\x02\x029\xB8\x03\x02\x02\x02;\xBA\x03\x02", "\x02\x02=\xBC\x03\x02\x02\x02?\xBE\x03\x02\x02", "\x02A\xC0\x03\x02\x02\x02C\xC2\x03\x02\x02\x02", "E\xC4\x03\x02\x02\x02G\xC6\x03\x02\x02\x02I\xC8", "\x03\x02\x02\x02K\xCA\x03\x02\x02\x02M\xCC\x03", "\x02\x02\x02O\xCE\x03\x02\x02\x02Q\xD0\x03\x02", "\x02\x02S\xD2\x03\x02\x02\x02UV\x07>\x02\x02V\x04", "\x03\x02\x02\x02WX\x07>\x02\x02XY\x07?\x02\x02Y", "\x06\x03\x02\x02\x02Z[\x07@\x02\x02[\b\x03\x02\x02", "\x02\\]\x07@\x02\x02]^\x07?\x02\x02^\n\x03\x02\x02", "\x02_`\x07*\x02\x02`\f\x03\x02\x02\x02ab\x07+\x02", "\x02b\x0E\x03\x02\x02\x02cd\x07.\x02\x02d\x10\x03", "\x02\x02\x02ei\t\x02\x02\x02fh\t\x03\x02\x02gf\x03", "\x02\x02\x02hk\x03\x02\x02\x02ig\x03\x02\x02\x02", "ij\x03\x02\x02\x02j\x12\x03\x02\x02\x02ki\x03\x02", "\x02\x02lm\x05!\x11\x02mn\x05;\x1E\x02no\x05'\x14", "\x02o\x14\x03\x02\x02\x02pq\x05=\x1F\x02qr\x05C", "\"\x02r\x16\x03\x02\x02\x02st\x051\x19\x02tu\x05", "E#\x02u\x18\x03\x02\x02\x02vx\x07\x0F\x02\x02wv", "\x03\x02\x02\x02wx\x03\x02\x02\x02xy\x03\x02\x02", "\x02yz\x07\f\x02\x02z\x1A\x03\x02\x02\x02{|\x07", "1\x02\x02|}\x071\x02\x02}\x81\x03\x02\x02\x02~\x80", "\n\x04\x02\x02\x7F~\x03\x02\x02\x02\x80\x83\x03", "\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x82\x03", "\x02\x02\x02\x82\x85\x03\x02\x02\x02\x83\x81\x03", "\x02\x02\x02\x84\x86\x07\x0F\x02\x02\x85\x84\x03", "\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x87\x03", "\x02\x02\x02\x87\x94\x07\f\x02\x02\x88\x89\x07", "1\x02\x02\x89\x8A\x07,\x02\x02\x8A\x8E\x03\x02", "\x02\x02\x8B\x8D\x0B\x02\x02\x02\x8C\x8B\x03\x02", "\x02\x02\x8D\x90\x03\x02\x02\x02\x8E\x8F\x03\x02", "\x02\x02\x8E\x8C\x03\x02\x02\x02\x8F\x91\x03\x02", "\x02\x02\x90\x8E\x03\x02\x02\x02\x91\x92\x07,", "\x02\x02\x92\x94\x071\x02\x02\x93{\x03\x02\x02", "\x02\x93\x88\x03\x02\x02\x02\x94\x95\x03\x02\x02", "\x02\x95\x96\b\x0E\x02\x02\x96\x1C\x03\x02\x02", "\x02\x97\x99\t\x05\x02\x02\x98\x97\x03\x02\x02", "\x02\x99\x9A\x03\x02\x02\x02\x9A\x98\x03\x02\x02", "\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9C\x03\x02\x02", "\x02\x9C\x9D\b\x0F\x02\x02\x9D\x1E\x03\x02\x02", "\x02\x9E\x9F\t\x06\x02\x02\x9F \x03\x02\x02\x02", "\xA0\xA1\t\x07\x02\x02\xA1\"\x03\x02\x02\x02\xA2", "\xA3\t\b\x02\x02\xA3$\x03\x02\x02\x02\xA4\xA5\t", "\t\x02\x02\xA5&\x03\x02\x02\x02\xA6\xA7\t\n\x02", "\x02\xA7(\x03\x02\x02\x02\xA8\xA9\t\x0B\x02\x02", "\xA9*\x03\x02\x02\x02\xAA\xAB\t\f\x02\x02\xAB,\x03", "\x02\x02\x02\xAC\xAD\t\r\x02\x02\xAD.\x03\x02\x02", "\x02\xAE\xAF\t\x0E\x02\x02\xAF0\x03\x02\x02\x02", "\xB0\xB1\t\x0F\x02\x02\xB12\x03\x02\x02\x02\xB2", "\xB3\t\x10\x02\x02\xB34\x03\x02\x02\x02\xB4\xB5", "\t\x11\x02\x02\xB56\x03\x02\x02\x02\xB6\xB7\t\x12", "\x02\x02\xB78\x03\x02\x02\x02\xB8\xB9\t\x13\x02", "\x02\xB9:\x03\x02\x02\x02\xBA\xBB\t\x14\x02\x02", "\xBB<\x03\x02\x02\x02\xBC\xBD\t\x15\x02\x02\xBD", ">\x03\x02\x02\x02\xBE\xBF\t\x16\x02\x02\xBF@\x03", "\x02\x02\x02\xC0\xC1\t\x17\x02\x02\xC1B\x03\x02", "\x02\x02\xC2\xC3\t\x18\x02\x02\xC3D\x03\x02\x02", "\x02\xC4\xC5\t\x19\x02\x02\xC5F\x03\x02\x02\x02", "\xC6\xC7\t\x1A\x02\x02\xC7H\x03\x02\x02\x02\xC8", "\xC9\t\x1B\x02\x02\xC9J\x03\x02\x02\x02\xCA\xCB", "\t\x1C\x02\x02\xCBL\x03\x02\x02\x02\xCC\xCD\t\x1D", "\x02\x02\xCDN\x03\x02\x02\x02\xCE\xCF\t\x1E\x02", "\x02\xCFP\x03\x02\x02\x02\xD0\xD1\t\x1F\x02\x02", "\xD1R\x03\x02\x02\x02\xD2\xD3\t \x02\x02\xD3T\x03", "\x02\x02\x02\n\x02iw\x81\x85\x8E\x93\x9A\x03\b\x02", "\x02"].join("");

var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
    return new antlr4.dfa.DFA(ds, index);
});

function ExprLexer(input) {
    antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

ExprLexer.prototype = Object.create(antlr4.Lexer.prototype);
ExprLexer.prototype.constructor = ExprLexer;

ExprLexer.EOF = antlr4.Token.EOF;
ExprLexer.T__0 = 1;
ExprLexer.T__1 = 2;
ExprLexer.T__2 = 3;
ExprLexer.T__3 = 4;
ExprLexer.T__4 = 5;
ExprLexer.T__5 = 6;
ExprLexer.T__6 = 7;
ExprLexer.ID = 8;
ExprLexer.AND = 9;
ExprLexer.OR = 10;
ExprLexer.IS = 11;
ExprLexer.NEWLINE = 12;
ExprLexer.COMMENT = 13;
ExprLexer.WS = 14;

ExprLexer.prototype.channelNames = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"];

ExprLexer.prototype.modeNames = ["DEFAULT_MODE"];

ExprLexer.prototype.literalNames = [null, "'<'", "'<='", "'>'", "'>='", "'('", "')'", "','"];

ExprLexer.prototype.symbolicNames = [null, null, null, null, null, null, null, null, "ID", "AND", "OR", "IS", "NEWLINE", "COMMENT", "WS"];

ExprLexer.prototype.ruleNames = ["T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "ID", "AND", "OR", "IS", "NEWLINE", "COMMENT", "WS", "DIGIT", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

ExprLexer.prototype.grammarFileName = "Expr.g4";

exports.ExprLexer = ExprLexer;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

exports.ATN = __webpack_require__(8).ATN;
exports.ATNDeserializer = __webpack_require__(31).ATNDeserializer;
exports.LexerATNSimulator = __webpack_require__(60).LexerATNSimulator;
exports.ParserATNSimulator = __webpack_require__(62).ParserATNSimulator;
exports.PredictionMode = __webpack_require__(35).PredictionMode;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
///

// Represents the type of recognizer an ATN applies to.

function ATNType() {}

ATNType.LEXER = 0;
ATNType.PARSER = 1;

exports.ATNType = ATNType;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
///

// When we hit an accept state in either the DFA or the ATN, we
//  have to notify the character stream to start buffering characters
//  via {@link IntStream//mark} and record the current state. The current sim state
//  includes the current index into the input, the current line,
//  and current character position in that line. Note that the Lexer is
//  tracking the starting line and characterization of the token. These
//  variables track the "state" of the simulator when it hits an accept state.
//
//  <p>We track these variables separately for the DFA and ATN simulation
//  because the DFA simulation often has to fail over to the ATN
//  simulation. If the ATN simulation fails, we need the DFA to fall
//  back to its previously accepted state, if any. If the ATN succeeds,
//  then the ATN does the accept and the DFA simulator that invoked it
//  can simply return the predicted token type.</p>
///

var Token = __webpack_require__(1).Token;
var Lexer = __webpack_require__(14).Lexer;
var ATN = __webpack_require__(8).ATN;
var ATNSimulator = __webpack_require__(34).ATNSimulator;
var DFAState = __webpack_require__(11).DFAState;
var ATNConfigSet = __webpack_require__(9).ATNConfigSet;
var OrderedATNConfigSet = __webpack_require__(9).OrderedATNConfigSet;
var PredictionContext = __webpack_require__(6).PredictionContext;
var SingletonPredictionContext = __webpack_require__(6).SingletonPredictionContext;
var RuleStopState = __webpack_require__(5).RuleStopState;
var LexerATNConfig = __webpack_require__(16).LexerATNConfig;
var Transition = __webpack_require__(7).Transition;
var LexerActionExecutor = __webpack_require__(61).LexerActionExecutor;
var LexerNoViableAltException = __webpack_require__(3).LexerNoViableAltException;

function resetSimState(sim) {
	sim.index = -1;
	sim.line = 0;
	sim.column = -1;
	sim.dfaState = null;
}

function SimState() {
	resetSimState(this);
	return this;
}

SimState.prototype.reset = function () {
	resetSimState(this);
};

function LexerATNSimulator(recog, atn, decisionToDFA, sharedContextCache) {
	ATNSimulator.call(this, atn, sharedContextCache);
	this.decisionToDFA = decisionToDFA;
	this.recog = recog;
	// The current token's starting index into the character stream.
	// Shared across DFA to ATN simulation in case the ATN fails and the
	// DFA did not have a previous accept state. In this case, we use the
	// ATN-generated exception object.
	this.startIndex = -1;
	// line number 1..n within the input///
	this.line = 1;
	// The index of the character relative to the beginning of the line
	// 0..n-1///
	this.column = 0;
	this.mode = Lexer.DEFAULT_MODE;
	// Used during DFA/ATN exec to record the most recent accept configuration
	// info
	this.prevAccept = new SimState();
	// done
	return this;
}

LexerATNSimulator.prototype = Object.create(ATNSimulator.prototype);
LexerATNSimulator.prototype.constructor = LexerATNSimulator;

LexerATNSimulator.debug = false;
LexerATNSimulator.dfa_debug = false;

LexerATNSimulator.MIN_DFA_EDGE = 0;
LexerATNSimulator.MAX_DFA_EDGE = 127; // forces unicode to stay in ATN

LexerATNSimulator.match_calls = 0;

LexerATNSimulator.prototype.copyState = function (simulator) {
	this.column = simulator.column;
	this.line = simulator.line;
	this.mode = simulator.mode;
	this.startIndex = simulator.startIndex;
};

LexerATNSimulator.prototype.match = function (input, mode) {
	this.match_calls += 1;
	this.mode = mode;
	var mark = input.mark();
	try {
		this.startIndex = input.index;
		this.prevAccept.reset();
		var dfa = this.decisionToDFA[mode];
		if (dfa.s0 === null) {
			return this.matchATN(input);
		} else {
			return this.execATN(input, dfa.s0);
		}
	} finally {
		input.release(mark);
	}
};

LexerATNSimulator.prototype.reset = function () {
	this.prevAccept.reset();
	this.startIndex = -1;
	this.line = 1;
	this.column = 0;
	this.mode = Lexer.DEFAULT_MODE;
};

LexerATNSimulator.prototype.matchATN = function (input) {
	var startState = this.atn.modeToStartState[this.mode];

	if (LexerATNSimulator.debug) {
		console.log("matchATN mode " + this.mode + " start: " + startState);
	}
	var old_mode = this.mode;
	var s0_closure = this.computeStartState(input, startState);
	var suppressEdge = s0_closure.hasSemanticContext;
	s0_closure.hasSemanticContext = false;

	var next = this.addDFAState(s0_closure);
	if (!suppressEdge) {
		this.decisionToDFA[this.mode].s0 = next;
	}

	var predict = this.execATN(input, next);

	if (LexerATNSimulator.debug) {
		console.log("DFA after matchATN: " + this.decisionToDFA[old_mode].toLexerString());
	}
	return predict;
};

LexerATNSimulator.prototype.execATN = function (input, ds0) {
	if (LexerATNSimulator.debug) {
		console.log("start state closure=" + ds0.configs);
	}
	if (ds0.isAcceptState) {
		// allow zero-length tokens
		this.captureSimState(this.prevAccept, input, ds0);
	}
	var t = input.LA(1);
	var s = ds0; // s is current/from DFA state

	while (true) {
		// while more work
		if (LexerATNSimulator.debug) {
			console.log("execATN loop starting closure: " + s.configs);
		}

		// As we move src->trg, src->trg, we keep track of the previous trg to
		// avoid looking up the DFA state again, which is expensive.
		// If the previous target was already part of the DFA, we might
		// be able to avoid doing a reach operation upon t. If s!=null,
		// it means that semantic predicates didn't prevent us from
		// creating a DFA state. Once we know s!=null, we check to see if
		// the DFA state has an edge already for t. If so, we can just reuse
		// it's configuration set; there's no point in re-computing it.
		// This is kind of like doing DFA simulation within the ATN
		// simulation because DFA simulation is really just a way to avoid
		// computing reach/closure sets. Technically, once we know that
		// we have a previously added DFA state, we could jump over to
		// the DFA simulator. But, that would mean popping back and forth
		// a lot and making things more complicated algorithmically.
		// This optimization makes a lot of sense for loops within DFA.
		// A character will take us back to an existing DFA state
		// that already has lots of edges out of it. e.g., .* in comments.
		// print("Target for:" + str(s) + " and:" + str(t))
		var target = this.getExistingTargetState(s, t);
		// print("Existing:" + str(target))
		if (target === null) {
			target = this.computeTargetState(input, s, t);
			// print("Computed:" + str(target))
		}
		if (target === ATNSimulator.ERROR) {
			break;
		}
		// If this is a consumable input element, make sure to consume before
		// capturing the accept state so the input index, line, and char
		// position accurately reflect the state of the interpreter at the
		// end of the token.
		if (t !== Token.EOF) {
			this.consume(input);
		}
		if (target.isAcceptState) {
			this.captureSimState(this.prevAccept, input, target);
			if (t === Token.EOF) {
				break;
			}
		}
		t = input.LA(1);
		s = target; // flip; current DFA target becomes new src/from state
	}
	return this.failOrAccept(this.prevAccept, input, s.configs, t);
};

// Get an existing target state for an edge in the DFA. If the target state
// for the edge has not yet been computed or is otherwise not available,
// this method returns {@code null}.
//
// @param s The current DFA state
// @param t The next input symbol
// @return The existing target DFA state for the given input symbol
// {@code t}, or {@code null} if the target state for this edge is not
// already cached
LexerATNSimulator.prototype.getExistingTargetState = function (s, t) {
	if (s.edges === null || t < LexerATNSimulator.MIN_DFA_EDGE || t > LexerATNSimulator.MAX_DFA_EDGE) {
		return null;
	}

	var target = s.edges[t - LexerATNSimulator.MIN_DFA_EDGE];
	if (target === undefined) {
		target = null;
	}
	if (LexerATNSimulator.debug && target !== null) {
		console.log("reuse state " + s.stateNumber + " edge to " + target.stateNumber);
	}
	return target;
};

// Compute a target state for an edge in the DFA, and attempt to add the
// computed state and corresponding edge to the DFA.
//
// @param input The input stream
// @param s The current DFA state
// @param t The next input symbol
//
// @return The computed target DFA state for the given input symbol
// {@code t}. If {@code t} does not lead to a valid DFA state, this method
// returns {@link //ERROR}.
LexerATNSimulator.prototype.computeTargetState = function (input, s, t) {
	var reach = new OrderedATNConfigSet();
	// if we don't find an existing DFA state
	// Fill reach starting from closure, following t transitions
	this.getReachableConfigSet(input, s.configs, reach, t);

	if (reach.items.length === 0) {
		// we got nowhere on t from s
		if (!reach.hasSemanticContext) {
			// we got nowhere on t, don't throw out this knowledge; it'd
			// cause a failover from DFA later.
			this.addDFAEdge(s, t, ATNSimulator.ERROR);
		}
		// stop when we can't match any more char
		return ATNSimulator.ERROR;
	}
	// Add an edge from s to target DFA found/created for reach
	return this.addDFAEdge(s, t, null, reach);
};

LexerATNSimulator.prototype.failOrAccept = function (prevAccept, input, reach, t) {
	if (this.prevAccept.dfaState !== null) {
		var lexerActionExecutor = prevAccept.dfaState.lexerActionExecutor;
		this.accept(input, lexerActionExecutor, this.startIndex, prevAccept.index, prevAccept.line, prevAccept.column);
		return prevAccept.dfaState.prediction;
	} else {
		// if no accept and EOF is first char, return EOF
		if (t === Token.EOF && input.index === this.startIndex) {
			return Token.EOF;
		}
		throw new LexerNoViableAltException(this.recog, input, this.startIndex, reach);
	}
};

// Given a starting configuration set, figure out all ATN configurations
// we can reach upon input {@code t}. Parameter {@code reach} is a return
// parameter.
LexerATNSimulator.prototype.getReachableConfigSet = function (input, closure, reach, t) {
	// this is used to skip processing for configs which have a lower priority
	// than a config that already reached an accept state for the same rule
	var skipAlt = ATN.INVALID_ALT_NUMBER;
	for (var i = 0; i < closure.items.length; i++) {
		var cfg = closure.items[i];
		var currentAltReachedAcceptState = cfg.alt === skipAlt;
		if (currentAltReachedAcceptState && cfg.passedThroughNonGreedyDecision) {
			continue;
		}
		if (LexerATNSimulator.debug) {
			console.log("testing %s at %s\n", this.getTokenName(t), cfg.toString(this.recog, true));
		}
		for (var j = 0; j < cfg.state.transitions.length; j++) {
			var trans = cfg.state.transitions[j]; // for each transition
			var target = this.getReachableTarget(trans, t);
			if (target !== null) {
				var lexerActionExecutor = cfg.lexerActionExecutor;
				if (lexerActionExecutor !== null) {
					lexerActionExecutor = lexerActionExecutor.fixOffsetBeforeMatch(input.index - this.startIndex);
				}
				var treatEofAsEpsilon = t === Token.EOF;
				var config = new LexerATNConfig({ state: target, lexerActionExecutor: lexerActionExecutor }, cfg);
				if (this.closure(input, config, reach, currentAltReachedAcceptState, true, treatEofAsEpsilon)) {
					// any remaining configs for this alt have a lower priority
					// than the one that just reached an accept state.
					skipAlt = cfg.alt;
				}
			}
		}
	}
};

LexerATNSimulator.prototype.accept = function (input, lexerActionExecutor, startIndex, index, line, charPos) {
	if (LexerATNSimulator.debug) {
		console.log("ACTION %s\n", lexerActionExecutor);
	}
	// seek to after last char in token
	input.seek(index);
	this.line = line;
	this.column = charPos;
	if (lexerActionExecutor !== null && this.recog !== null) {
		lexerActionExecutor.execute(this.recog, input, startIndex);
	}
};

LexerATNSimulator.prototype.getReachableTarget = function (trans, t) {
	if (trans.matches(t, 0, Lexer.MAX_CHAR_VALUE)) {
		return trans.target;
	} else {
		return null;
	}
};

LexerATNSimulator.prototype.computeStartState = function (input, p) {
	var initialContext = PredictionContext.EMPTY;
	var configs = new OrderedATNConfigSet();
	for (var i = 0; i < p.transitions.length; i++) {
		var target = p.transitions[i].target;
		var cfg = new LexerATNConfig({ state: target, alt: i + 1, context: initialContext }, null);
		this.closure(input, cfg, configs, false, false, false);
	}
	return configs;
};

// Since the alternatives within any lexer decision are ordered by
// preference, this method stops pursuing the closure as soon as an accept
// state is reached. After the first accept state is reached by depth-first
// search from {@code config}, all other (potentially reachable) states for
// this rule would have a lower priority.
//
// @return {@code true} if an accept state is reached, otherwise
// {@code false}.
LexerATNSimulator.prototype.closure = function (input, config, configs, currentAltReachedAcceptState, speculative, treatEofAsEpsilon) {
	var cfg = null;
	if (LexerATNSimulator.debug) {
		console.log("closure(" + config.toString(this.recog, true) + ")");
	}
	if (config.state instanceof RuleStopState) {
		if (LexerATNSimulator.debug) {
			if (this.recog !== null) {
				console.log("closure at %s rule stop %s\n", this.recog.ruleNames[config.state.ruleIndex], config);
			} else {
				console.log("closure at rule stop %s\n", config);
			}
		}
		if (config.context === null || config.context.hasEmptyPath()) {
			if (config.context === null || config.context.isEmpty()) {
				configs.add(config);
				return true;
			} else {
				configs.add(new LexerATNConfig({ state: config.state, context: PredictionContext.EMPTY }, config));
				currentAltReachedAcceptState = true;
			}
		}
		if (config.context !== null && !config.context.isEmpty()) {
			for (var i = 0; i < config.context.length; i++) {
				if (config.context.getReturnState(i) !== PredictionContext.EMPTY_RETURN_STATE) {
					var newContext = config.context.getParent(i); // "pop" return state
					var returnState = this.atn.states[config.context.getReturnState(i)];
					cfg = new LexerATNConfig({ state: returnState, context: newContext }, config);
					currentAltReachedAcceptState = this.closure(input, cfg, configs, currentAltReachedAcceptState, speculative, treatEofAsEpsilon);
				}
			}
		}
		return currentAltReachedAcceptState;
	}
	// optimization
	if (!config.state.epsilonOnlyTransitions) {
		if (!currentAltReachedAcceptState || !config.passedThroughNonGreedyDecision) {
			configs.add(config);
		}
	}
	for (var j = 0; j < config.state.transitions.length; j++) {
		var trans = config.state.transitions[j];
		cfg = this.getEpsilonTarget(input, config, trans, configs, speculative, treatEofAsEpsilon);
		if (cfg !== null) {
			currentAltReachedAcceptState = this.closure(input, cfg, configs, currentAltReachedAcceptState, speculative, treatEofAsEpsilon);
		}
	}
	return currentAltReachedAcceptState;
};

// side-effect: can alter configs.hasSemanticContext
LexerATNSimulator.prototype.getEpsilonTarget = function (input, config, trans, configs, speculative, treatEofAsEpsilon) {
	var cfg = null;
	if (trans.serializationType === Transition.RULE) {
		var newContext = SingletonPredictionContext.create(config.context, trans.followState.stateNumber);
		cfg = new LexerATNConfig({ state: trans.target, context: newContext }, config);
	} else if (trans.serializationType === Transition.PRECEDENCE) {
		throw "Precedence predicates are not supported in lexers.";
	} else if (trans.serializationType === Transition.PREDICATE) {
		// Track traversing semantic predicates. If we traverse,
		// we cannot add a DFA state for this "reach" computation
		// because the DFA would not test the predicate again in the
		// future. Rather than creating collections of semantic predicates
		// like v3 and testing them on prediction, v4 will test them on the
		// fly all the time using the ATN not the DFA. This is slower but
		// semantically it's not used that often. One of the key elements to
		// this predicate mechanism is not adding DFA states that see
		// predicates immediately afterwards in the ATN. For example,

		// a : ID {p1}? | ID {p2}? ;

		// should create the start state for rule 'a' (to save start state
		// competition), but should not create target of ID state. The
		// collection of ATN states the following ID references includes
		// states reached by traversing predicates. Since this is when we
		// test them, we cannot cash the DFA state target of ID.

		if (LexerATNSimulator.debug) {
			console.log("EVAL rule " + trans.ruleIndex + ":" + trans.predIndex);
		}
		configs.hasSemanticContext = true;
		if (this.evaluatePredicate(input, trans.ruleIndex, trans.predIndex, speculative)) {
			cfg = new LexerATNConfig({ state: trans.target }, config);
		}
	} else if (trans.serializationType === Transition.ACTION) {
		if (config.context === null || config.context.hasEmptyPath()) {
			// execute actions anywhere in the start rule for a token.
			//
			// TODO: if the entry rule is invoked recursively, some
			// actions may be executed during the recursive call. The
			// problem can appear when hasEmptyPath() is true but
			// isEmpty() is false. In this case, the config needs to be
			// split into two contexts - one with just the empty path
			// and another with everything but the empty path.
			// Unfortunately, the current algorithm does not allow
			// getEpsilonTarget to return two configurations, so
			// additional modifications are needed before we can support
			// the split operation.
			var lexerActionExecutor = LexerActionExecutor.append(config.lexerActionExecutor, this.atn.lexerActions[trans.actionIndex]);
			cfg = new LexerATNConfig({ state: trans.target, lexerActionExecutor: lexerActionExecutor }, config);
		} else {
			// ignore actions in referenced rules
			cfg = new LexerATNConfig({ state: trans.target }, config);
		}
	} else if (trans.serializationType === Transition.EPSILON) {
		cfg = new LexerATNConfig({ state: trans.target }, config);
	} else if (trans.serializationType === Transition.ATOM || trans.serializationType === Transition.RANGE || trans.serializationType === Transition.SET) {
		if (treatEofAsEpsilon) {
			if (trans.matches(Token.EOF, 0, Lexer.MAX_CHAR_VALUE)) {
				cfg = new LexerATNConfig({ state: trans.target }, config);
			}
		}
	}
	return cfg;
};

// Evaluate a predicate specified in the lexer.
//
// <p>If {@code speculative} is {@code true}, this method was called before
// {@link //consume} for the matched character. This method should call
// {@link //consume} before evaluating the predicate to ensure position
// sensitive values, including {@link Lexer//getText}, {@link Lexer//getLine},
// and {@link Lexer//getcolumn}, properly reflect the current
// lexer state. This method should restore {@code input} and the simulator
// to the original state before returning (i.e. undo the actions made by the
// call to {@link //consume}.</p>
//
// @param input The input stream.
// @param ruleIndex The rule containing the predicate.
// @param predIndex The index of the predicate within the rule.
// @param speculative {@code true} if the current index in {@code input} is
// one character before the predicate's location.
//
// @return {@code true} if the specified predicate evaluates to
// {@code true}.
// /
LexerATNSimulator.prototype.evaluatePredicate = function (input, ruleIndex, predIndex, speculative) {
	// assume true if no recognizer was provided
	if (this.recog === null) {
		return true;
	}
	if (!speculative) {
		return this.recog.sempred(null, ruleIndex, predIndex);
	}
	var savedcolumn = this.column;
	var savedLine = this.line;
	var index = input.index;
	var marker = input.mark();
	try {
		this.consume(input);
		return this.recog.sempred(null, ruleIndex, predIndex);
	} finally {
		this.column = savedcolumn;
		this.line = savedLine;
		input.seek(index);
		input.release(marker);
	}
};

LexerATNSimulator.prototype.captureSimState = function (settings, input, dfaState) {
	settings.index = input.index;
	settings.line = this.line;
	settings.column = this.column;
	settings.dfaState = dfaState;
};

LexerATNSimulator.prototype.addDFAEdge = function (from_, tk, to, cfgs) {
	if (to === undefined) {
		to = null;
	}
	if (cfgs === undefined) {
		cfgs = null;
	}
	if (to === null && cfgs !== null) {
		// leading to this call, ATNConfigSet.hasSemanticContext is used as a
		// marker indicating dynamic predicate evaluation makes this edge
		// dependent on the specific input sequence, so the static edge in the
		// DFA should be omitted. The target DFAState is still created since
		// execATN has the ability to resynchronize with the DFA state cache
		// following the predicate evaluation step.
		//
		// TJP notes: next time through the DFA, we see a pred again and eval.
		// If that gets us to a previously created (but dangling) DFA
		// state, we can continue in pure DFA mode from there.
		// /
		var suppressEdge = cfgs.hasSemanticContext;
		cfgs.hasSemanticContext = false;

		to = this.addDFAState(cfgs);

		if (suppressEdge) {
			return to;
		}
	}
	// add the edge
	if (tk < LexerATNSimulator.MIN_DFA_EDGE || tk > LexerATNSimulator.MAX_DFA_EDGE) {
		// Only track edges within the DFA bounds
		return to;
	}
	if (LexerATNSimulator.debug) {
		console.log("EDGE " + from_ + " -> " + to + " upon " + tk);
	}
	if (from_.edges === null) {
		// make room for tokens 1..n and -1 masquerading as index 0
		from_.edges = [];
	}
	from_.edges[tk - LexerATNSimulator.MIN_DFA_EDGE] = to; // connect

	return to;
};

// Add a new DFA state if there isn't one with this set of
// configurations already. This method also detects the first
// configuration containing an ATN rule stop state. Later, when
// traversing the DFA, we will know which rule to accept.
LexerATNSimulator.prototype.addDFAState = function (configs) {
	var proposed = new DFAState(null, configs);
	var firstConfigWithRuleStopState = null;
	for (var i = 0; i < configs.items.length; i++) {
		var cfg = configs.items[i];
		if (cfg.state instanceof RuleStopState) {
			firstConfigWithRuleStopState = cfg;
			break;
		}
	}
	if (firstConfigWithRuleStopState !== null) {
		proposed.isAcceptState = true;
		proposed.lexerActionExecutor = firstConfigWithRuleStopState.lexerActionExecutor;
		proposed.prediction = this.atn.ruleToTokenType[firstConfigWithRuleStopState.state.ruleIndex];
	}
	var dfa = this.decisionToDFA[this.mode];
	var existing = dfa.states.get(proposed);
	if (existing !== null) {
		return existing;
	}
	var newState = proposed;
	newState.stateNumber = dfa.states.length;
	configs.setReadonly(true);
	newState.configs = configs;
	dfa.states.add(newState);
	return newState;
};

LexerATNSimulator.prototype.getDFA = function (mode) {
	return this.decisionToDFA[mode];
};

// Get the text matched so far for the current token.
LexerATNSimulator.prototype.getText = function (input) {
	// index is first lookahead char, don't include.
	return input.getText(this.startIndex, input.index - 1);
};

LexerATNSimulator.prototype.consume = function (input) {
	var curChar = input.LA(1);
	if (curChar === "\n".charCodeAt(0)) {
		this.line += 1;
		this.column = 0;
	} else {
		this.column += 1;
	}
	input.consume();
};

LexerATNSimulator.prototype.getTokenName = function (tt) {
	if (tt === -1) {
		return "EOF";
	} else {
		return "'" + String.fromCharCode(tt) + "'";
	}
};

exports.LexerATNSimulator = LexerATNSimulator;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
///

// Represents an executor for a sequence of lexer actions which traversed during
// the matching operation of a lexer rule (token).
//
// <p>The executor tracks position information for position-dependent lexer actions
// efficiently, ensuring that actions appearing only at the end of the rule do
// not cause bloating of the {@link DFA} created for the lexer.</p>

var hashStuff = __webpack_require__(0).hashStuff;
var LexerIndexedCustomAction = __webpack_require__(33).LexerIndexedCustomAction;

function LexerActionExecutor(lexerActions) {
	this.lexerActions = lexerActions === null ? [] : lexerActions;
	// Caches the result of {@link //hashCode} since the hash code is an element
	// of the performance-critical {@link LexerATNConfig//hashCode} operation.
	this.cachedHashCode = hashStuff(lexerActions); // "".join([str(la) for la in
	// lexerActions]))
	return this;
}

// Creates a {@link LexerActionExecutor} which executes the actions for
// the input {@code lexerActionExecutor} followed by a specified
// {@code lexerAction}.
//
// @param lexerActionExecutor The executor for actions already traversed by
// the lexer while matching a token within a particular
// {@link LexerATNConfig}. If this is {@code null}, the method behaves as
// though it were an empty executor.
// @param lexerAction The lexer action to execute after the actions
// specified in {@code lexerActionExecutor}.
//
// @return A {@link LexerActionExecutor} for executing the combine actions
// of {@code lexerActionExecutor} and {@code lexerAction}.
LexerActionExecutor.append = function (lexerActionExecutor, lexerAction) {
	if (lexerActionExecutor === null) {
		return new LexerActionExecutor([lexerAction]);
	}
	var lexerActions = lexerActionExecutor.lexerActions.concat([lexerAction]);
	return new LexerActionExecutor(lexerActions);
};

// Creates a {@link LexerActionExecutor} which encodes the current offset
// for position-dependent lexer actions.
//
// <p>Normally, when the executor encounters lexer actions where
// {@link LexerAction//isPositionDependent} returns {@code true}, it calls
// {@link IntStream//seek} on the input {@link CharStream} to set the input
// position to the <em>end</em> of the current token. This behavior provides
// for efficient DFA representation of lexer actions which appear at the end
// of a lexer rule, even when the lexer rule matches a variable number of
// characters.</p>
//
// <p>Prior to traversing a match transition in the ATN, the current offset
// from the token start index is assigned to all position-dependent lexer
// actions which have not already been assigned a fixed offset. By storing
// the offsets relative to the token start index, the DFA representation of
// lexer actions which appear in the middle of tokens remains efficient due
// to sharing among tokens of the same length, regardless of their absolute
// position in the input stream.</p>
//
// <p>If the current executor already has offsets assigned to all
// position-dependent lexer actions, the method returns {@code this}.</p>
//
// @param offset The current offset to assign to all position-dependent
// lexer actions which do not already have offsets assigned.
//
// @return A {@link LexerActionExecutor} which stores input stream offsets
// for all position-dependent lexer actions.
// /
LexerActionExecutor.prototype.fixOffsetBeforeMatch = function (offset) {
	var updatedLexerActions = null;
	for (var i = 0; i < this.lexerActions.length; i++) {
		if (this.lexerActions[i].isPositionDependent && !(this.lexerActions[i] instanceof LexerIndexedCustomAction)) {
			if (updatedLexerActions === null) {
				updatedLexerActions = this.lexerActions.concat([]);
			}
			updatedLexerActions[i] = new LexerIndexedCustomAction(offset, this.lexerActions[i]);
		}
	}
	if (updatedLexerActions === null) {
		return this;
	} else {
		return new LexerActionExecutor(updatedLexerActions);
	}
};

// Execute the actions encapsulated by this executor within the context of a
// particular {@link Lexer}.
//
// <p>This method calls {@link IntStream//seek} to set the position of the
// {@code input} {@link CharStream} prior to calling
// {@link LexerAction//execute} on a position-dependent action. Before the
// method returns, the input position will be restored to the same position
// it was in when the method was invoked.</p>
//
// @param lexer The lexer instance.
// @param input The input stream which is the source for the current token.
// When this method is called, the current {@link IntStream//index} for
// {@code input} should be the start of the following token, i.e. 1
// character past the end of the current token.
// @param startIndex The token start index. This value may be passed to
// {@link IntStream//seek} to set the {@code input} position to the beginning
// of the token.
// /
LexerActionExecutor.prototype.execute = function (lexer, input, startIndex) {
	var requiresSeek = false;
	var stopIndex = input.index;
	try {
		for (var i = 0; i < this.lexerActions.length; i++) {
			var lexerAction = this.lexerActions[i];
			if (lexerAction instanceof LexerIndexedCustomAction) {
				var offset = lexerAction.offset;
				input.seek(startIndex + offset);
				lexerAction = lexerAction.action;
				requiresSeek = startIndex + offset !== stopIndex;
			} else if (lexerAction.isPositionDependent) {
				input.seek(stopIndex);
				requiresSeek = false;
			}
			lexerAction.execute(lexer);
		}
	} finally {
		if (requiresSeek) {
			input.seek(stopIndex);
		}
	}
};

LexerActionExecutor.prototype.hashCode = function () {
	return this.cachedHashCode;
};

LexerActionExecutor.prototype.updateHashCode = function (hash) {
	hash.update(this.cachedHashCode);
};

LexerActionExecutor.prototype.equals = function (other) {
	if (this === other) {
		return true;
	} else if (!(other instanceof LexerActionExecutor)) {
		return false;
	} else if (this.cachedHashCode != other.cachedHashCode) {
		return false;
	} else if (this.lexerActions.length != other.lexerActions.length) {
		return false;
	} else {
		var numActions = this.lexerActions.length;
		for (var idx = 0; idx < numActions; ++idx) {
			if (!this.lexerActions[idx].equals(other.lexerActions[idx])) {
				return false;
			}
		}
		return true;
	}
};

exports.LexerActionExecutor = LexerActionExecutor;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
//

//
// The embodiment of the adaptive LL(*), ALL(*), parsing strategy.
//
// <p>
// The basic complexity of the adaptive strategy makes it harder to understand.
// We begin with ATN simulation to build paths in a DFA. Subsequent prediction
// requests go through the DFA first. If they reach a state without an edge for
// the current symbol, the algorithm fails over to the ATN simulation to
// complete the DFA path for the current input (until it finds a conflict state
// or uniquely predicting state).</p>
//
// <p>
// All of that is done without using the outer context because we want to create
// a DFA that is not dependent upon the rule invocation stack when we do a
// prediction. One DFA works in all contexts. We avoid using context not
// necessarily because it's slower, although it can be, but because of the DFA
// caching problem. The closure routine only considers the rule invocation stack
// created during prediction beginning in the decision rule. For example, if
// prediction occurs without invoking another rule's ATN, there are no context
// stacks in the configurations. When lack of context leads to a conflict, we
// don't know if it's an ambiguity or a weakness in the strong LL(*) parsing
// strategy (versus full LL(*)).</p>
//
// <p>
// When SLL yields a configuration set with conflict, we rewind the input and
// retry the ATN simulation, this time using full outer context without adding
// to the DFA. Configuration context stacks will be the full invocation stacks
// from the start rule. If we get a conflict using full context, then we can
// definitively say we have a true ambiguity for that input sequence. If we
// don't get a conflict, it implies that the decision is sensitive to the outer
// context. (It is not context-sensitive in the sense of context-sensitive
// grammars.)</p>
//
// <p>
// The next time we reach this DFA state with an SLL conflict, through DFA
// simulation, we will again retry the ATN simulation using full context mode.
// This is slow because we can't save the results and have to "interpret" the
// ATN each time we get that input.</p>
//
// <p>
// <strong>CACHING FULL CONTEXT PREDICTIONS</strong></p>
//
// <p>
// We could cache results from full context to predicted alternative easily and
// that saves a lot of time but doesn't work in presence of predicates. The set
// of visible predicates from the ATN start state changes depending on the
// context, because closure can fall off the end of a rule. I tried to cache
// tuples (stack context, semantic context, predicted alt) but it was slower
// than interpreting and much more complicated. Also required a huge amount of
// memory. The goal is not to create the world's fastest parser anyway. I'd like
// to keep this algorithm simple. By launching multiple threads, we can improve
// the speed of parsing across a large number of files.</p>
//
// <p>
// There is no strict ordering between the amount of input used by SLL vs LL,
// which makes it really hard to build a cache for full context. Let's say that
// we have input A B C that leads to an SLL conflict with full context X. That
// implies that using X we might only use A B but we could also use A B C D to
// resolve conflict. Input A B C D could predict alternative 1 in one position
// in the input and A B C E could predict alternative 2 in another position in
// input. The conflicting SLL configurations could still be non-unique in the
// full context prediction, which would lead us to requiring more input than the
// original A B C.	To make a	prediction cache work, we have to track	the exact
// input	used during the previous prediction. That amounts to a cache that maps
// X to a specific DFA for that context.</p>
//
// <p>
// Something should be done for left-recursive expression predictions. They are
// likely LL(1) + pred eval. Easier to do the whole SLL unless error and retry
// with full LL thing Sam does.</p>
//
// <p>
// <strong>AVOIDING FULL CONTEXT PREDICTION</strong></p>
//
// <p>
// We avoid doing full context retry when the outer context is empty, we did not
// dip into the outer context by falling off the end of the decision state rule,
// or when we force SLL mode.</p>
//
// <p>
// As an example of the not dip into outer context case, consider as super
// constructor calls versus function calls. One grammar might look like
// this:</p>
//
// <pre>
// ctorBody
//   : '{' superCall? stat* '}'
//   ;
// </pre>
//
// <p>
// Or, you might see something like</p>
//
// <pre>
// stat
//   : superCall ';'
//   | expression ';'
//   | ...
//   ;
// </pre>
//
// <p>
// In both cases I believe that no closure operations will dip into the outer
// context. In the first case ctorBody in the worst case will stop at the '}'.
// In the 2nd case it should stop at the ';'. Both cases should stay within the
// entry rule and not dip into the outer context.</p>
//
// <p>
// <strong>PREDICATES</strong></p>
//
// <p>
// Predicates are always evaluated if present in either SLL or LL both. SLL and
// LL simulation deals with predicates differently. SLL collects predicates as
// it performs closure operations like ANTLR v3 did. It delays predicate
// evaluation until it reaches and accept state. This allows us to cache the SLL
// ATN simulation whereas, if we had evaluated predicates on-the-fly during
// closure, the DFA state configuration sets would be different and we couldn't
// build up a suitable DFA.</p>
//
// <p>
// When building a DFA accept state during ATN simulation, we evaluate any
// predicates and return the sole semantically valid alternative. If there is
// more than 1 alternative, we report an ambiguity. If there are 0 alternatives,
// we throw an exception. Alternatives without predicates act like they have
// true predicates. The simple way to think about it is to strip away all
// alternatives with false predicates and choose the minimum alternative that
// remains.</p>
//
// <p>
// When we start in the DFA and reach an accept state that's predicated, we test
// those and return the minimum semantically viable alternative. If no
// alternatives are viable, we throw an exception.</p>
//
// <p>
// During full LL ATN simulation, closure always evaluates predicates and
// on-the-fly. This is crucial to reducing the configuration set size during
// closure. It hits a landmine when parsing with the Java grammar, for example,
// without this on-the-fly evaluation.</p>
//
// <p>
// <strong>SHARING DFA</strong></p>
//
// <p>
// All instances of the same parser share the same decision DFAs through a
// static field. Each instance gets its own ATN simulator but they share the
// same {@link //decisionToDFA} field. They also share a
// {@link PredictionContextCache} object that makes sure that all
// {@link PredictionContext} objects are shared among the DFA states. This makes
// a big size difference.</p>
//
// <p>
// <strong>THREAD SAFETY</strong></p>
//
// <p>
// The {@link ParserATNSimulator} locks on the {@link //decisionToDFA} field when
// it adds a new DFA object to that array. {@link //addDFAEdge}
// locks on the DFA for the current decision when setting the
// {@link DFAState//edges} field. {@link //addDFAState} locks on
// the DFA for the current decision when looking up a DFA state to see if it
// already exists. We must make sure that all requests to add DFA states that
// are equivalent result in the same shared DFA object. This is because lots of
// threads will be trying to update the DFA at once. The
// {@link //addDFAState} method also locks inside the DFA lock
// but this time on the shared context cache when it rebuilds the
// configurations' {@link PredictionContext} objects using cached
// subgraphs/nodes. No other locking occurs, even during DFA simulation. This is
// safe as long as we can guarantee that all threads referencing
// {@code s.edge[t]} get the same physical target {@link DFAState}, or
// {@code null}. Once into the DFA, the DFA simulation does not reference the
// {@link DFA//states} map. It follows the {@link DFAState//edges} field to new
// targets. The DFA simulator will either find {@link DFAState//edges} to be
// {@code null}, to be non-{@code null} and {@code dfa.edges[t]} null, or
// {@code dfa.edges[t]} to be non-null. The
// {@link //addDFAEdge} method could be racing to set the field
// but in either case the DFA simulator works; if {@code null}, and requests ATN
// simulation. It could also race trying to get {@code dfa.edges[t]}, but either
// way it will work because it's not doing a test and set operation.</p>
//
// <p>
// <strong>Starting with SLL then failing to combined SLL/LL (Two-Stage
// Parsing)</strong></p>
//
// <p>
// Sam pointed out that if SLL does not give a syntax error, then there is no
// point in doing full LL, which is slower. We only have to try LL if we get a
// syntax error. For maximum speed, Sam starts the parser set to pure SLL
// mode with the {@link BailErrorStrategy}:</p>
//
// <pre>
// parser.{@link Parser//getInterpreter() getInterpreter()}.{@link //setPredictionMode setPredictionMode}{@code (}{@link PredictionMode//SLL}{@code )};
// parser.{@link Parser//setErrorHandler setErrorHandler}(new {@link BailErrorStrategy}());
// </pre>
//
// <p>
// If it does not get a syntax error, then we're done. If it does get a syntax
// error, we need to retry with the combined SLL/LL strategy.</p>
//
// <p>
// The reason this works is as follows. If there are no SLL conflicts, then the
// grammar is SLL (at least for that input set). If there is an SLL conflict,
// the full LL analysis must yield a set of viable alternatives which is a
// subset of the alternatives reported by SLL. If the LL set is a singleton,
// then the grammar is LL but not SLL. If the LL set is the same size as the SLL
// set, the decision is SLL. If the LL set has size &gt; 1, then that decision
// is truly ambiguous on the current input. If the LL set is smaller, then the
// SLL conflict resolution might choose an alternative that the full LL would
// rule out as a possibility based upon better context information. If that's
// the case, then the SLL parse will definitely get an error because the full LL
// analysis says it's not viable. If SLL conflict resolution chooses an
// alternative within the LL set, them both SLL and LL would choose the same
// alternative because they both choose the minimum of multiple conflicting
// alternatives.</p>
//
// <p>
// Let's say we have a set of SLL conflicting alternatives {@code {1, 2, 3}} and
// a smaller LL set called <em>s</em>. If <em>s</em> is {@code {2, 3}}, then SLL
// parsing will get an error because SLL will pursue alternative 1. If
// <em>s</em> is {@code {1, 2}} or {@code {1, 3}} then both SLL and LL will
// choose the same alternative because alternative one is the minimum of either
// set. If <em>s</em> is {@code {2}} or {@code {3}} then SLL will get a syntax
// error. If <em>s</em> is {@code {1}} then SLL will succeed.</p>
//
// <p>
// Of course, if the input is invalid, then we will get an error for sure in
// both SLL and LL parsing. Erroneous input will therefore require 2 passes over
// the input.</p>
//

var Utils = __webpack_require__(0);
var Set = Utils.Set;
var BitSet = Utils.BitSet;
var DoubleDict = Utils.DoubleDict;
var ATN = __webpack_require__(8).ATN;
var ATNState = __webpack_require__(5).ATNState;
var ATNConfig = __webpack_require__(16).ATNConfig;
var ATNConfigSet = __webpack_require__(9).ATNConfigSet;
var Token = __webpack_require__(1).Token;
var DFAState = __webpack_require__(11).DFAState;
var PredPrediction = __webpack_require__(11).PredPrediction;
var ATNSimulator = __webpack_require__(34).ATNSimulator;
var PredictionMode = __webpack_require__(35).PredictionMode;
var RuleContext = __webpack_require__(15).RuleContext;
var ParserRuleContext = __webpack_require__(19).ParserRuleContext;
var SemanticContext = __webpack_require__(10).SemanticContext;
var StarLoopEntryState = __webpack_require__(5).StarLoopEntryState;
var RuleStopState = __webpack_require__(5).RuleStopState;
var PredictionContext = __webpack_require__(6).PredictionContext;
var Interval = __webpack_require__(2).Interval;
var Transitions = __webpack_require__(7);
var Transition = Transitions.Transition;
var SetTransition = Transitions.SetTransition;
var NotSetTransition = Transitions.NotSetTransition;
var RuleTransition = Transitions.RuleTransition;
var ActionTransition = Transitions.ActionTransition;
var NoViableAltException = __webpack_require__(3).NoViableAltException;

var SingletonPredictionContext = __webpack_require__(6).SingletonPredictionContext;
var predictionContextFromRuleContext = __webpack_require__(6).predictionContextFromRuleContext;

function ParserATNSimulator(parser, atn, decisionToDFA, sharedContextCache) {
    ATNSimulator.call(this, atn, sharedContextCache);
    this.parser = parser;
    this.decisionToDFA = decisionToDFA;
    // SLL, LL, or LL + exact ambig detection?//
    this.predictionMode = PredictionMode.LL;
    // LAME globals to avoid parameters!!!!! I need these down deep in predTransition
    this._input = null;
    this._startIndex = 0;
    this._outerContext = null;
    this._dfa = null;
    // Each prediction operation uses a cache for merge of prediction contexts.
    //  Don't keep around as it wastes huge amounts of memory. DoubleKeyMap
    //  isn't synchronized but we're ok since two threads shouldn't reuse same
    //  parser/atnsim object because it can only handle one input at a time.
    //  This maps graphs a and b to merged result c. (a,b)&rarr;c. We can avoid
    //  the merge if we ever see a and b again.  Note that (b,a)&rarr;c should
    //  also be examined during cache lookup.
    //
    this.mergeCache = null;
    return this;
}

ParserATNSimulator.prototype = Object.create(ATNSimulator.prototype);
ParserATNSimulator.prototype.constructor = ParserATNSimulator;

ParserATNSimulator.prototype.debug = false;
ParserATNSimulator.prototype.debug_closure = false;
ParserATNSimulator.prototype.debug_add = false;
ParserATNSimulator.prototype.debug_list_atn_decisions = false;
ParserATNSimulator.prototype.dfa_debug = false;
ParserATNSimulator.prototype.retry_debug = false;

ParserATNSimulator.prototype.reset = function () {};

ParserATNSimulator.prototype.adaptivePredict = function (input, decision, outerContext) {
    if (this.debug || this.debug_list_atn_decisions) {
        console.log("adaptivePredict decision " + decision + " exec LA(1)==" + this.getLookaheadName(input) + " line " + input.LT(1).line + ":" + input.LT(1).column);
    }
    this._input = input;
    this._startIndex = input.index;
    this._outerContext = outerContext;

    var dfa = this.decisionToDFA[decision];
    this._dfa = dfa;
    var m = input.mark();
    var index = input.index;

    // Now we are certain to have a specific decision's DFA
    // But, do we still need an initial state?
    try {
        var s0;
        if (dfa.precedenceDfa) {
            // the start state for a precedence DFA depends on the current
            // parser precedence, and is provided by a DFA method.
            s0 = dfa.getPrecedenceStartState(this.parser.getPrecedence());
        } else {
            // the start state for a "regular" DFA is just s0
            s0 = dfa.s0;
        }
        if (s0 === null) {
            if (outerContext === null) {
                outerContext = RuleContext.EMPTY;
            }
            if (this.debug || this.debug_list_atn_decisions) {
                console.log("predictATN decision " + dfa.decision + " exec LA(1)==" + this.getLookaheadName(input) + ", outerContext=" + outerContext.toString(this.parser.ruleNames));
            }

            var fullCtx = false;
            var s0_closure = this.computeStartState(dfa.atnStartState, RuleContext.EMPTY, fullCtx);

            if (dfa.precedenceDfa) {
                // If this is a precedence DFA, we use applyPrecedenceFilter
                // to convert the computed start state to a precedence start
                // state. We then use DFA.setPrecedenceStartState to set the
                // appropriate start state for the precedence level rather
                // than simply setting DFA.s0.
                //
                dfa.s0.configs = s0_closure; // not used for prediction but useful to know start configs anyway
                s0_closure = this.applyPrecedenceFilter(s0_closure);
                s0 = this.addDFAState(dfa, new DFAState(null, s0_closure));
                dfa.setPrecedenceStartState(this.parser.getPrecedence(), s0);
            } else {
                s0 = this.addDFAState(dfa, new DFAState(null, s0_closure));
                dfa.s0 = s0;
            }
        }
        var alt = this.execATN(dfa, s0, input, index, outerContext);
        if (this.debug) {
            console.log("DFA after predictATN: " + dfa.toString(this.parser.literalNames));
        }
        return alt;
    } finally {
        this._dfa = null;
        this.mergeCache = null; // wack cache after each prediction
        input.seek(index);
        input.release(m);
    }
};
// Performs ATN simulation to compute a predicted alternative based
//  upon the remaining input, but also updates the DFA cache to avoid
//  having to traverse the ATN again for the same input sequence.

// There are some key conditions we're looking for after computing a new
// set of ATN configs (proposed DFA state):
// if the set is empty, there is no viable alternative for current symbol
// does the state uniquely predict an alternative?
// does the state have a conflict that would prevent us from
//   putting it on the work list?

// We also have some key operations to do:
// add an edge from previous DFA state to potentially new DFA state, D,
//   upon current symbol but only if adding to work list, which means in all
//   cases except no viable alternative (and possibly non-greedy decisions?)
// collecting predicates and adding semantic context to DFA accept states
// adding rule context to context-sensitive DFA accept states
// consuming an input symbol
// reporting a conflict
// reporting an ambiguity
// reporting a context sensitivity
// reporting insufficient predicates

// cover these cases:
//    dead end
//    single alt
//    single alt + preds
//    conflict
//    conflict + preds
//
ParserATNSimulator.prototype.execATN = function (dfa, s0, input, startIndex, outerContext) {
    if (this.debug || this.debug_list_atn_decisions) {
        console.log("execATN decision " + dfa.decision + " exec LA(1)==" + this.getLookaheadName(input) + " line " + input.LT(1).line + ":" + input.LT(1).column);
    }
    var alt;
    var previousD = s0;

    if (this.debug) {
        console.log("s0 = " + s0);
    }
    var t = input.LA(1);
    while (true) {
        // while more work
        var D = this.getExistingTargetState(previousD, t);
        if (D === null) {
            D = this.computeTargetState(dfa, previousD, t);
        }
        if (D === ATNSimulator.ERROR) {
            // if any configs in previous dipped into outer context, that
            // means that input up to t actually finished entry rule
            // at least for SLL decision. Full LL doesn't dip into outer
            // so don't need special case.
            // We will get an error no matter what so delay until after
            // decision; better error message. Also, no reachable target
            // ATN states in SLL implies LL will also get nowhere.
            // If conflict in states that dip out, choose min since we
            // will get error no matter what.
            var e = this.noViableAlt(input, outerContext, previousD.configs, startIndex);
            input.seek(startIndex);
            alt = this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(previousD.configs, outerContext);
            if (alt !== ATN.INVALID_ALT_NUMBER) {
                return alt;
            } else {
                throw e;
            }
        }
        if (D.requiresFullContext && this.predictionMode !== PredictionMode.SLL) {
            // IF PREDS, MIGHT RESOLVE TO SINGLE ALT => SLL (or syntax error)
            var conflictingAlts = null;
            if (D.predicates !== null) {
                if (this.debug) {
                    console.log("DFA state has preds in DFA sim LL failover");
                }
                var conflictIndex = input.index;
                if (conflictIndex !== startIndex) {
                    input.seek(startIndex);
                }
                conflictingAlts = this.evalSemanticContext(D.predicates, outerContext, true);
                if (conflictingAlts.length === 1) {
                    if (this.debug) {
                        console.log("Full LL avoided");
                    }
                    return conflictingAlts.minValue();
                }
                if (conflictIndex !== startIndex) {
                    // restore the index so reporting the fallback to full
                    // context occurs with the index at the correct spot
                    input.seek(conflictIndex);
                }
            }
            if (this.dfa_debug) {
                console.log("ctx sensitive state " + outerContext + " in " + D);
            }
            var fullCtx = true;
            var s0_closure = this.computeStartState(dfa.atnStartState, outerContext, fullCtx);
            this.reportAttemptingFullContext(dfa, conflictingAlts, D.configs, startIndex, input.index);
            alt = this.execATNWithFullContext(dfa, D, s0_closure, input, startIndex, outerContext);
            return alt;
        }
        if (D.isAcceptState) {
            if (D.predicates === null) {
                return D.prediction;
            }
            var stopIndex = input.index;
            input.seek(startIndex);
            var alts = this.evalSemanticContext(D.predicates, outerContext, true);
            if (alts.length === 0) {
                throw this.noViableAlt(input, outerContext, D.configs, startIndex);
            } else if (alts.length === 1) {
                return alts.minValue();
            } else {
                // report ambiguity after predicate evaluation to make sure the correct set of ambig alts is reported.
                this.reportAmbiguity(dfa, D, startIndex, stopIndex, false, alts, D.configs);
                return alts.minValue();
            }
        }
        previousD = D;

        if (t !== Token.EOF) {
            input.consume();
            t = input.LA(1);
        }
    }
};
//
// Get an existing target state for an edge in the DFA. If the target state
// for the edge has not yet been computed or is otherwise not available,
// this method returns {@code null}.
//
// @param previousD The current DFA state
// @param t The next input symbol
// @return The existing target DFA state for the given input symbol
// {@code t}, or {@code null} if the target state for this edge is not
// already cached
//
ParserATNSimulator.prototype.getExistingTargetState = function (previousD, t) {
    var edges = previousD.edges;
    if (edges === null) {
        return null;
    } else {
        return edges[t + 1] || null;
    }
};
//
// Compute a target state for an edge in the DFA, and attempt to add the
// computed state and corresponding edge to the DFA.
//
// @param dfa The DFA
// @param previousD The current DFA state
// @param t The next input symbol
//
// @return The computed target DFA state for the given input symbol
// {@code t}. If {@code t} does not lead to a valid DFA state, this method
// returns {@link //ERROR}.
//
ParserATNSimulator.prototype.computeTargetState = function (dfa, previousD, t) {
    var reach = this.computeReachSet(previousD.configs, t, false);
    if (reach === null) {
        this.addDFAEdge(dfa, previousD, t, ATNSimulator.ERROR);
        return ATNSimulator.ERROR;
    }
    // create new target state; we'll add to DFA after it's complete
    var D = new DFAState(null, reach);

    var predictedAlt = this.getUniqueAlt(reach);

    if (this.debug) {
        var altSubSets = PredictionMode.getConflictingAltSubsets(reach);
        console.log("SLL altSubSets=" + Utils.arrayToString(altSubSets) + ", previous=" + previousD.configs + ", configs=" + reach + ", predict=" + predictedAlt + ", allSubsetsConflict=" + PredictionMode.allSubsetsConflict(altSubSets) + ", conflictingAlts=" + this.getConflictingAlts(reach));
    }
    if (predictedAlt !== ATN.INVALID_ALT_NUMBER) {
        // NO CONFLICT, UNIQUELY PREDICTED ALT
        D.isAcceptState = true;
        D.configs.uniqueAlt = predictedAlt;
        D.prediction = predictedAlt;
    } else if (PredictionMode.hasSLLConflictTerminatingPrediction(this.predictionMode, reach)) {
        // MORE THAN ONE VIABLE ALTERNATIVE
        D.configs.conflictingAlts = this.getConflictingAlts(reach);
        D.requiresFullContext = true;
        // in SLL-only mode, we will stop at this state and return the minimum alt
        D.isAcceptState = true;
        D.prediction = D.configs.conflictingAlts.minValue();
    }
    if (D.isAcceptState && D.configs.hasSemanticContext) {
        this.predicateDFAState(D, this.atn.getDecisionState(dfa.decision));
        if (D.predicates !== null) {
            D.prediction = ATN.INVALID_ALT_NUMBER;
        }
    }
    // all adds to dfa are done after we've created full D state
    D = this.addDFAEdge(dfa, previousD, t, D);
    return D;
};

ParserATNSimulator.prototype.predicateDFAState = function (dfaState, decisionState) {
    // We need to test all predicates, even in DFA states that
    // uniquely predict alternative.
    var nalts = decisionState.transitions.length;
    // Update DFA so reach becomes accept state with (predicate,alt)
    // pairs if preds found for conflicting alts
    var altsToCollectPredsFrom = this.getConflictingAltsOrUniqueAlt(dfaState.configs);
    var altToPred = this.getPredsForAmbigAlts(altsToCollectPredsFrom, dfaState.configs, nalts);
    if (altToPred !== null) {
        dfaState.predicates = this.getPredicatePredictions(altsToCollectPredsFrom, altToPred);
        dfaState.prediction = ATN.INVALID_ALT_NUMBER; // make sure we use preds
    } else {
        // There are preds in configs but they might go away
        // when OR'd together like {p}? || NONE == NONE. If neither
        // alt has preds, resolve to min alt
        dfaState.prediction = altsToCollectPredsFrom.minValue();
    }
};

// comes back with reach.uniqueAlt set to a valid alt
ParserATNSimulator.prototype.execATNWithFullContext = function (dfa, D, // how far we got before failing over
s0, input, startIndex, outerContext) {
    if (this.debug || this.debug_list_atn_decisions) {
        console.log("execATNWithFullContext " + s0);
    }
    var fullCtx = true;
    var foundExactAmbig = false;
    var reach = null;
    var previous = s0;
    input.seek(startIndex);
    var t = input.LA(1);
    var predictedAlt = -1;
    while (true) {
        // while more work
        reach = this.computeReachSet(previous, t, fullCtx);
        if (reach === null) {
            // if any configs in previous dipped into outer context, that
            // means that input up to t actually finished entry rule
            // at least for LL decision. Full LL doesn't dip into outer
            // so don't need special case.
            // We will get an error no matter what so delay until after
            // decision; better error message. Also, no reachable target
            // ATN states in SLL implies LL will also get nowhere.
            // If conflict in states that dip out, choose min since we
            // will get error no matter what.
            var e = this.noViableAlt(input, outerContext, previous, startIndex);
            input.seek(startIndex);
            var alt = this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(previous, outerContext);
            if (alt !== ATN.INVALID_ALT_NUMBER) {
                return alt;
            } else {
                throw e;
            }
        }
        var altSubSets = PredictionMode.getConflictingAltSubsets(reach);
        if (this.debug) {
            console.log("LL altSubSets=" + altSubSets + ", predict=" + PredictionMode.getUniqueAlt(altSubSets) + ", resolvesToJustOneViableAlt=" + PredictionMode.resolvesToJustOneViableAlt(altSubSets));
        }
        reach.uniqueAlt = this.getUniqueAlt(reach);
        // unique prediction?
        if (reach.uniqueAlt !== ATN.INVALID_ALT_NUMBER) {
            predictedAlt = reach.uniqueAlt;
            break;
        } else if (this.predictionMode !== PredictionMode.LL_EXACT_AMBIG_DETECTION) {
            predictedAlt = PredictionMode.resolvesToJustOneViableAlt(altSubSets);
            if (predictedAlt !== ATN.INVALID_ALT_NUMBER) {
                break;
            }
        } else {
            // In exact ambiguity mode, we never try to terminate early.
            // Just keeps scarfing until we know what the conflict is
            if (PredictionMode.allSubsetsConflict(altSubSets) && PredictionMode.allSubsetsEqual(altSubSets)) {
                foundExactAmbig = true;
                predictedAlt = PredictionMode.getSingleViableAlt(altSubSets);
                break;
            }
            // else there are multiple non-conflicting subsets or
            // we're not sure what the ambiguity is yet.
            // So, keep going.
        }
        previous = reach;
        if (t !== Token.EOF) {
            input.consume();
            t = input.LA(1);
        }
    }
    // If the configuration set uniquely predicts an alternative,
    // without conflict, then we know that it's a full LL decision
    // not SLL.
    if (reach.uniqueAlt !== ATN.INVALID_ALT_NUMBER) {
        this.reportContextSensitivity(dfa, predictedAlt, reach, startIndex, input.index);
        return predictedAlt;
    }
    // We do not check predicates here because we have checked them
    // on-the-fly when doing full context prediction.

    //
    // In non-exact ambiguity detection mode, we might	actually be able to
    // detect an exact ambiguity, but I'm not going to spend the cycles
    // needed to check. We only emit ambiguity warnings in exact ambiguity
    // mode.
    //
    // For example, we might know that we have conflicting configurations.
    // But, that does not mean that there is no way forward without a
    // conflict. It's possible to have nonconflicting alt subsets as in:

    // altSubSets=[{1, 2}, {1, 2}, {1}, {1, 2}]

    // from
    //
    //    [(17,1,[5 $]), (13,1,[5 10 $]), (21,1,[5 10 $]), (11,1,[$]),
    //     (13,2,[5 10 $]), (21,2,[5 10 $]), (11,2,[$])]
    //
    // In this case, (17,1,[5 $]) indicates there is some next sequence that
    // would resolve this without conflict to alternative 1. Any other viable
    // next sequence, however, is associated with a conflict.  We stop
    // looking for input because no amount of further lookahead will alter
    // the fact that we should predict alternative 1.  We just can't say for
    // sure that there is an ambiguity without looking further.

    this.reportAmbiguity(dfa, D, startIndex, input.index, foundExactAmbig, null, reach);

    return predictedAlt;
};

ParserATNSimulator.prototype.computeReachSet = function (closure, t, fullCtx) {
    if (this.debug) {
        console.log("in computeReachSet, starting closure: " + closure);
    }
    if (this.mergeCache === null) {
        this.mergeCache = new DoubleDict();
    }
    var intermediate = new ATNConfigSet(fullCtx);

    // Configurations already in a rule stop state indicate reaching the end
    // of the decision rule (local context) or end of the start rule (full
    // context). Once reached, these configurations are never updated by a
    // closure operation, so they are handled separately for the performance
    // advantage of having a smaller intermediate set when calling closure.
    //
    // For full-context reach operations, separate handling is required to
    // ensure that the alternative matching the longest overall sequence is
    // chosen when multiple such configurations can match the input.

    var skippedStopStates = null;

    // First figure out where we can reach on input t
    for (var i = 0; i < closure.items.length; i++) {
        var c = closure.items[i];
        if (this.debug_add) {
            console.log("testing " + this.getTokenName(t) + " at " + c);
        }
        if (c.state instanceof RuleStopState) {
            if (fullCtx || t === Token.EOF) {
                if (skippedStopStates === null) {
                    skippedStopStates = [];
                }
                skippedStopStates.push(c);
                if (this.debug_add) {
                    console.log("added " + c + " to skippedStopStates");
                }
            }
            continue;
        }
        for (var j = 0; j < c.state.transitions.length; j++) {
            var trans = c.state.transitions[j];
            var target = this.getReachableTarget(trans, t);
            if (target !== null) {
                var cfg = new ATNConfig({ state: target }, c);
                intermediate.add(cfg, this.mergeCache);
                if (this.debug_add) {
                    console.log("added " + cfg + " to intermediate");
                }
            }
        }
    }
    // Now figure out where the reach operation can take us...
    var reach = null;

    // This block optimizes the reach operation for intermediate sets which
    // trivially indicate a termination state for the overall
    // adaptivePredict operation.
    //
    // The conditions assume that intermediate
    // contains all configurations relevant to the reach set, but this
    // condition is not true when one or more configurations have been
    // withheld in skippedStopStates, or when the current symbol is EOF.
    //
    if (skippedStopStates === null && t !== Token.EOF) {
        if (intermediate.items.length === 1) {
            // Don't pursue the closure if there is just one state.
            // It can only have one alternative; just add to result
            // Also don't pursue the closure if there is unique alternative
            // among the configurations.
            reach = intermediate;
        } else if (this.getUniqueAlt(intermediate) !== ATN.INVALID_ALT_NUMBER) {
            // Also don't pursue the closure if there is unique alternative
            // among the configurations.
            reach = intermediate;
        }
    }
    // If the reach set could not be trivially determined, perform a closure
    // operation on the intermediate set to compute its initial value.
    //
    if (reach === null) {
        reach = new ATNConfigSet(fullCtx);
        var closureBusy = new Set();
        var treatEofAsEpsilon = t === Token.EOF;
        for (var k = 0; k < intermediate.items.length; k++) {
            this.closure(intermediate.items[k], reach, closureBusy, false, fullCtx, treatEofAsEpsilon);
        }
    }
    if (t === Token.EOF) {
        // After consuming EOF no additional input is possible, so we are
        // only interested in configurations which reached the end of the
        // decision rule (local context) or end of the start rule (full
        // context). Update reach to contain only these configurations. This
        // handles both explicit EOF transitions in the grammar and implicit
        // EOF transitions following the end of the decision or start rule.
        //
        // When reach==intermediate, no closure operation was performed. In
        // this case, removeAllConfigsNotInRuleStopState needs to check for
        // reachable rule stop states as well as configurations already in
        // a rule stop state.
        //
        // This is handled before the configurations in skippedStopStates,
        // because any configurations potentially added from that list are
        // already guaranteed to meet this condition whether or not it's
        // required.
        //
        reach = this.removeAllConfigsNotInRuleStopState(reach, reach === intermediate);
    }
    // If skippedStopStates!==null, then it contains at least one
    // configuration. For full-context reach operations, these
    // configurations reached the end of the start rule, in which case we
    // only add them back to reach if no configuration during the current
    // closure operation reached such a state. This ensures adaptivePredict
    // chooses an alternative matching the longest overall sequence when
    // multiple alternatives are viable.
    //
    if (skippedStopStates !== null && (!fullCtx || !PredictionMode.hasConfigInRuleStopState(reach))) {
        for (var l = 0; l < skippedStopStates.length; l++) {
            reach.add(skippedStopStates[l], this.mergeCache);
        }
    }
    if (reach.items.length === 0) {
        return null;
    } else {
        return reach;
    }
};
//
// Return a configuration set containing only the configurations from
// {@code configs} which are in a {@link RuleStopState}. If all
// configurations in {@code configs} are already in a rule stop state, this
// method simply returns {@code configs}.
//
// <p>When {@code lookToEndOfRule} is true, this method uses
// {@link ATN//nextTokens} for each configuration in {@code configs} which is
// not already in a rule stop state to see if a rule stop state is reachable
// from the configuration via epsilon-only transitions.</p>
//
// @param configs the configuration set to update
// @param lookToEndOfRule when true, this method checks for rule stop states
// reachable by epsilon-only transitions from each configuration in
// {@code configs}.
//
// @return {@code configs} if all configurations in {@code configs} are in a
// rule stop state, otherwise return a new configuration set containing only
// the configurations from {@code configs} which are in a rule stop state
//
ParserATNSimulator.prototype.removeAllConfigsNotInRuleStopState = function (configs, lookToEndOfRule) {
    if (PredictionMode.allConfigsInRuleStopStates(configs)) {
        return configs;
    }
    var result = new ATNConfigSet(configs.fullCtx);
    for (var i = 0; i < configs.items.length; i++) {
        var config = configs.items[i];
        if (config.state instanceof RuleStopState) {
            result.add(config, this.mergeCache);
            continue;
        }
        if (lookToEndOfRule && config.state.epsilonOnlyTransitions) {
            var nextTokens = this.atn.nextTokens(config.state);
            if (nextTokens.contains(Token.EPSILON)) {
                var endOfRuleState = this.atn.ruleToStopState[config.state.ruleIndex];
                result.add(new ATNConfig({ state: endOfRuleState }, config), this.mergeCache);
            }
        }
    }
    return result;
};

ParserATNSimulator.prototype.computeStartState = function (p, ctx, fullCtx) {
    // always at least the implicit call to start rule
    var initialContext = predictionContextFromRuleContext(this.atn, ctx);
    var configs = new ATNConfigSet(fullCtx);
    for (var i = 0; i < p.transitions.length; i++) {
        var target = p.transitions[i].target;
        var c = new ATNConfig({ state: target, alt: i + 1, context: initialContext }, null);
        var closureBusy = new Set();
        this.closure(c, configs, closureBusy, true, fullCtx, false);
    }
    return configs;
};

//
// This method transforms the start state computed by
// {@link //computeStartState} to the special start state used by a
// precedence DFA for a particular precedence value. The transformation
// process applies the following changes to the start state's configuration
// set.
//
// <ol>
// <li>Evaluate the precedence predicates for each configuration using
// {@link SemanticContext//evalPrecedence}.</li>
// <li>Remove all configurations which predict an alternative greater than
// 1, for which another configuration that predicts alternative 1 is in the
// same ATN state with the same prediction context. This transformation is
// valid for the following reasons:
// <ul>
// <li>The closure block cannot contain any epsilon transitions which bypass
// the body of the closure, so all states reachable via alternative 1 are
// part of the precedence alternatives of the transformed left-recursive
// rule.</li>
// <li>The "primary" portion of a left recursive rule cannot contain an
// epsilon transition, so the only way an alternative other than 1 can exist
// in a state that is also reachable via alternative 1 is by nesting calls
// to the left-recursive rule, with the outer calls not being at the
// preferred precedence level.</li>
// </ul>
// </li>
// </ol>
//
// <p>
// The prediction context must be considered by this filter to address
// situations like the following.
// </p>
// <code>
// <pre>
// grammar TA;
// prog: statement* EOF;
// statement: letterA | statement letterA 'b' ;
// letterA: 'a';
// </pre>
// </code>
// <p>
// If the above grammar, the ATN state immediately before the token
// reference {@code 'a'} in {@code letterA} is reachable from the left edge
// of both the primary and closure blocks of the left-recursive rule
// {@code statement}. The prediction context associated with each of these
// configurations distinguishes between them, and prevents the alternative
// which stepped out to {@code prog} (and then back in to {@code statement}
// from being eliminated by the filter.
// </p>
//
// @param configs The configuration set computed by
// {@link //computeStartState} as the start state for the DFA.
// @return The transformed configuration set representing the start state
// for a precedence DFA at a particular precedence level (determined by
// calling {@link Parser//getPrecedence}).
//
ParserATNSimulator.prototype.applyPrecedenceFilter = function (configs) {
    var config;
    var statesFromAlt1 = [];
    var configSet = new ATNConfigSet(configs.fullCtx);
    for (var i = 0; i < configs.items.length; i++) {
        config = configs.items[i];
        // handle alt 1 first
        if (config.alt !== 1) {
            continue;
        }
        var updatedContext = config.semanticContext.evalPrecedence(this.parser, this._outerContext);
        if (updatedContext === null) {
            // the configuration was eliminated
            continue;
        }
        statesFromAlt1[config.state.stateNumber] = config.context;
        if (updatedContext !== config.semanticContext) {
            configSet.add(new ATNConfig({ semanticContext: updatedContext }, config), this.mergeCache);
        } else {
            configSet.add(config, this.mergeCache);
        }
    }
    for (i = 0; i < configs.items.length; i++) {
        config = configs.items[i];
        if (config.alt === 1) {
            // already handled
            continue;
        }
        // In the future, this elimination step could be updated to also
        // filter the prediction context for alternatives predicting alt>1
        // (basically a graph subtraction algorithm).
        if (!config.precedenceFilterSuppressed) {
            var context = statesFromAlt1[config.state.stateNumber] || null;
            if (context !== null && context.equals(config.context)) {
                // eliminated
                continue;
            }
        }
        configSet.add(config, this.mergeCache);
    }
    return configSet;
};

ParserATNSimulator.prototype.getReachableTarget = function (trans, ttype) {
    if (trans.matches(ttype, 0, this.atn.maxTokenType)) {
        return trans.target;
    } else {
        return null;
    }
};

ParserATNSimulator.prototype.getPredsForAmbigAlts = function (ambigAlts, configs, nalts) {
    // REACH=[1|1|[]|0:0, 1|2|[]|0:1]
    // altToPred starts as an array of all null contexts. The entry at index i
    // corresponds to alternative i. altToPred[i] may have one of three values:
    //   1. null: no ATNConfig c is found such that c.alt==i
    //   2. SemanticContext.NONE: At least one ATNConfig c exists such that
    //      c.alt==i and c.semanticContext==SemanticContext.NONE. In other words,
    //      alt i has at least one unpredicated config.
    //   3. Non-NONE Semantic Context: There exists at least one, and for all
    //      ATNConfig c such that c.alt==i, c.semanticContext!=SemanticContext.NONE.
    //
    // From this, it is clear that NONE||anything==NONE.
    //
    var altToPred = [];
    for (var i = 0; i < configs.items.length; i++) {
        var c = configs.items[i];
        if (ambigAlts.contains(c.alt)) {
            altToPred[c.alt] = SemanticContext.orContext(altToPred[c.alt] || null, c.semanticContext);
        }
    }
    var nPredAlts = 0;
    for (i = 1; i < nalts + 1; i++) {
        var pred = altToPred[i] || null;
        if (pred === null) {
            altToPred[i] = SemanticContext.NONE;
        } else if (pred !== SemanticContext.NONE) {
            nPredAlts += 1;
        }
    }
    // nonambig alts are null in altToPred
    if (nPredAlts === 0) {
        altToPred = null;
    }
    if (this.debug) {
        console.log("getPredsForAmbigAlts result " + Utils.arrayToString(altToPred));
    }
    return altToPred;
};

ParserATNSimulator.prototype.getPredicatePredictions = function (ambigAlts, altToPred) {
    var pairs = [];
    var containsPredicate = false;
    for (var i = 1; i < altToPred.length; i++) {
        var pred = altToPred[i];
        // unpredicated is indicated by SemanticContext.NONE
        if (ambigAlts !== null && ambigAlts.contains(i)) {
            pairs.push(new PredPrediction(pred, i));
        }
        if (pred !== SemanticContext.NONE) {
            containsPredicate = true;
        }
    }
    if (!containsPredicate) {
        return null;
    }
    return pairs;
};

//
// This method is used to improve the localization of error messages by
// choosing an alternative rather than throwing a
// {@link NoViableAltException} in particular prediction scenarios where the
// {@link //ERROR} state was reached during ATN simulation.
//
// <p>
// The default implementation of this method uses the following
// algorithm to identify an ATN configuration which successfully parsed the
// decision entry rule. Choosing such an alternative ensures that the
// {@link ParserRuleContext} returned by the calling rule will be complete
// and valid, and the syntax error will be reported later at a more
// localized location.</p>
//
// <ul>
// <li>If a syntactically valid path or paths reach the end of the decision rule and
// they are semantically valid if predicated, return the min associated alt.</li>
// <li>Else, if a semantically invalid but syntactically valid path exist
// or paths exist, return the minimum associated alt.
// </li>
// <li>Otherwise, return {@link ATN//INVALID_ALT_NUMBER}.</li>
// </ul>
//
// <p>
// In some scenarios, the algorithm described above could predict an
// alternative which will result in a {@link FailedPredicateException} in
// the parser. Specifically, this could occur if the <em>only</em> configuration
// capable of successfully parsing to the end of the decision rule is
// blocked by a semantic predicate. By choosing this alternative within
// {@link //adaptivePredict} instead of throwing a
// {@link NoViableAltException}, the resulting
// {@link FailedPredicateException} in the parser will identify the specific
// predicate which is preventing the parser from successfully parsing the
// decision rule, which helps developers identify and correct logic errors
// in semantic predicates.
// </p>
//
// @param configs The ATN configurations which were valid immediately before
// the {@link //ERROR} state was reached
// @param outerContext The is the \gamma_0 initial parser context from the paper
// or the parser stack at the instant before prediction commences.
//
// @return The value to return from {@link //adaptivePredict}, or
// {@link ATN//INVALID_ALT_NUMBER} if a suitable alternative was not
// identified and {@link //adaptivePredict} should report an error instead.
//
ParserATNSimulator.prototype.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule = function (configs, outerContext) {
    var cfgs = this.splitAccordingToSemanticValidity(configs, outerContext);
    var semValidConfigs = cfgs[0];
    var semInvalidConfigs = cfgs[1];
    var alt = this.getAltThatFinishedDecisionEntryRule(semValidConfigs);
    if (alt !== ATN.INVALID_ALT_NUMBER) {
        // semantically/syntactically viable path exists
        return alt;
    }
    // Is there a syntactically valid path with a failed pred?
    if (semInvalidConfigs.items.length > 0) {
        alt = this.getAltThatFinishedDecisionEntryRule(semInvalidConfigs);
        if (alt !== ATN.INVALID_ALT_NUMBER) {
            // syntactically viable path exists
            return alt;
        }
    }
    return ATN.INVALID_ALT_NUMBER;
};

ParserATNSimulator.prototype.getAltThatFinishedDecisionEntryRule = function (configs) {
    var alts = [];
    for (var i = 0; i < configs.items.length; i++) {
        var c = configs.items[i];
        if (c.reachesIntoOuterContext > 0 || c.state instanceof RuleStopState && c.context.hasEmptyPath()) {
            if (alts.indexOf(c.alt) < 0) {
                alts.push(c.alt);
            }
        }
    }
    if (alts.length === 0) {
        return ATN.INVALID_ALT_NUMBER;
    } else {
        return Math.min.apply(null, alts);
    }
};
// Walk the list of configurations and split them according to
//  those that have preds evaluating to true/false.  If no pred, assume
//  true pred and include in succeeded set.  Returns Pair of sets.
//
//  Create a new set so as not to alter the incoming parameter.
//
//  Assumption: the input stream has been restored to the starting point
//  prediction, which is where predicates need to evaluate.
//
ParserATNSimulator.prototype.splitAccordingToSemanticValidity = function (configs, outerContext) {
    var succeeded = new ATNConfigSet(configs.fullCtx);
    var failed = new ATNConfigSet(configs.fullCtx);
    for (var i = 0; i < configs.items.length; i++) {
        var c = configs.items[i];
        if (c.semanticContext !== SemanticContext.NONE) {
            var predicateEvaluationResult = c.semanticContext.evaluate(this.parser, outerContext);
            if (predicateEvaluationResult) {
                succeeded.add(c);
            } else {
                failed.add(c);
            }
        } else {
            succeeded.add(c);
        }
    }
    return [succeeded, failed];
};

// Look through a list of predicate/alt pairs, returning alts for the
//  pairs that win. A {@code NONE} predicate indicates an alt containing an
//  unpredicated config which behaves as "always true." If !complete
//  then we stop at the first predicate that evaluates to true. This
//  includes pairs with null predicates.
//
ParserATNSimulator.prototype.evalSemanticContext = function (predPredictions, outerContext, complete) {
    var predictions = new BitSet();
    for (var i = 0; i < predPredictions.length; i++) {
        var pair = predPredictions[i];
        if (pair.pred === SemanticContext.NONE) {
            predictions.add(pair.alt);
            if (!complete) {
                break;
            }
            continue;
        }
        var predicateEvaluationResult = pair.pred.evaluate(this.parser, outerContext);
        if (this.debug || this.dfa_debug) {
            console.log("eval pred " + pair + "=" + predicateEvaluationResult);
        }
        if (predicateEvaluationResult) {
            if (this.debug || this.dfa_debug) {
                console.log("PREDICT " + pair.alt);
            }
            predictions.add(pair.alt);
            if (!complete) {
                break;
            }
        }
    }
    return predictions;
};

// TODO: If we are doing predicates, there is no point in pursuing
//     closure operations if we reach a DFA state that uniquely predicts
//     alternative. We will not be caching that DFA state and it is a
//     waste to pursue the closure. Might have to advance when we do
//     ambig detection thought :(
//

ParserATNSimulator.prototype.closure = function (config, configs, closureBusy, collectPredicates, fullCtx, treatEofAsEpsilon) {
    var initialDepth = 0;
    this.closureCheckingStopState(config, configs, closureBusy, collectPredicates, fullCtx, initialDepth, treatEofAsEpsilon);
};

ParserATNSimulator.prototype.closureCheckingStopState = function (config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon) {
    if (this.debug || this.debug_closure) {
        console.log("closure(" + config.toString(this.parser, true) + ")");
        // console.log("configs(" + configs.toString() + ")");
        if (config.reachesIntoOuterContext > 50) {
            throw "problem";
        }
    }
    if (config.state instanceof RuleStopState) {
        // We hit rule end. If we have context info, use it
        // run thru all possible stack tops in ctx
        if (!config.context.isEmpty()) {
            for (var i = 0; i < config.context.length; i++) {
                if (config.context.getReturnState(i) === PredictionContext.EMPTY_RETURN_STATE) {
                    if (fullCtx) {
                        configs.add(new ATNConfig({ state: config.state, context: PredictionContext.EMPTY }, config), this.mergeCache);
                        continue;
                    } else {
                        // we have no context info, just chase follow links (if greedy)
                        if (this.debug) {
                            console.log("FALLING off rule " + this.getRuleName(config.state.ruleIndex));
                        }
                        this.closure_(config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon);
                    }
                    continue;
                }
                var returnState = this.atn.states[config.context.getReturnState(i)];
                var newContext = config.context.getParent(i); // "pop" return state
                var parms = { state: returnState, alt: config.alt, context: newContext, semanticContext: config.semanticContext };
                var c = new ATNConfig(parms, null);
                // While we have context to pop back from, we may have
                // gotten that context AFTER having falling off a rule.
                // Make sure we track that we are now out of context.
                c.reachesIntoOuterContext = config.reachesIntoOuterContext;
                this.closureCheckingStopState(c, configs, closureBusy, collectPredicates, fullCtx, depth - 1, treatEofAsEpsilon);
            }
            return;
        } else if (fullCtx) {
            // reached end of start rule
            configs.add(config, this.mergeCache);
            return;
        } else {
            // else if we have no context info, just chase follow links (if greedy)
            if (this.debug) {
                console.log("FALLING off rule " + this.getRuleName(config.state.ruleIndex));
            }
        }
    }
    this.closure_(config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon);
};

// Do the actual work of walking epsilon edges//
ParserATNSimulator.prototype.closure_ = function (config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon) {
    var p = config.state;
    // optimization
    if (!p.epsilonOnlyTransitions) {
        configs.add(config, this.mergeCache);
        // make sure to not return here, because EOF transitions can act as
        // both epsilon transitions and non-epsilon transitions.
    }
    for (var i = 0; i < p.transitions.length; i++) {
        if (i == 0 && this.canDropLoopEntryEdgeInLeftRecursiveRule(config)) continue;

        var t = p.transitions[i];
        var continueCollecting = collectPredicates && !(t instanceof ActionTransition);
        var c = this.getEpsilonTarget(config, t, continueCollecting, depth === 0, fullCtx, treatEofAsEpsilon);
        if (c !== null) {
            if (!t.isEpsilon && closureBusy.add(c) !== c) {
                // avoid infinite recursion for EOF* and EOF+
                continue;
            }
            var newDepth = depth;
            if (config.state instanceof RuleStopState) {
                // target fell off end of rule; mark resulting c as having dipped into outer context
                // We can't get here if incoming config was rule stop and we had context
                // track how far we dip into outer context.  Might
                // come in handy and we avoid evaluating context dependent
                // preds if this is > 0.

                if (closureBusy.add(c) !== c) {
                    // avoid infinite recursion for right-recursive rules
                    continue;
                }

                if (this._dfa !== null && this._dfa.precedenceDfa) {
                    if (t.outermostPrecedenceReturn === this._dfa.atnStartState.ruleIndex) {
                        c.precedenceFilterSuppressed = true;
                    }
                }

                c.reachesIntoOuterContext += 1;
                configs.dipsIntoOuterContext = true; // TODO: can remove? only care when we add to set per middle of this method
                newDepth -= 1;
                if (this.debug) {
                    console.log("dips into outer ctx: " + c);
                }
            } else if (t instanceof RuleTransition) {
                // latch when newDepth goes negative - once we step out of the entry context we can't return
                if (newDepth >= 0) {
                    newDepth += 1;
                }
            }
            this.closureCheckingStopState(c, configs, closureBusy, continueCollecting, fullCtx, newDepth, treatEofAsEpsilon);
        }
    }
};

ParserATNSimulator.prototype.canDropLoopEntryEdgeInLeftRecursiveRule = function (config) {
    // return False
    var p = config.state;
    // First check to see if we are in StarLoopEntryState generated during
    // left-recursion elimination. For efficiency, also check if
    // the context has an empty stack case. If so, it would mean
    // global FOLLOW so we can't perform optimization
    // Are we the special loop entry/exit state? or SLL wildcard
    if (p.stateType != ATNState.STAR_LOOP_ENTRY) return false;
    if (p.stateType != ATNState.STAR_LOOP_ENTRY || !p.isPrecedenceDecision || config.context.isEmpty() || config.context.hasEmptyPath()) return false;

    // Require all return states to return back to the same rule that p is in.
    var numCtxs = config.context.length;
    for (var i = 0; i < numCtxs; i++) {
        // for each stack context
        var returnState = this.atn.states[config.context.getReturnState(i)];
        if (returnState.ruleIndex != p.ruleIndex) return false;
    }

    var decisionStartState = p.transitions[0].target;
    var blockEndStateNum = decisionStartState.endState.stateNumber;
    var blockEndState = this.atn.states[blockEndStateNum];

    // Verify that the top of each stack context leads to loop entry/exit
    // state through epsilon edges and w/o leaving rule.
    for (var i = 0; i < numCtxs; i++) {
        // for each stack context
        var returnStateNumber = config.context.getReturnState(i);
        var returnState = this.atn.states[returnStateNumber];
        // all states must have single outgoing epsilon edge
        if (returnState.transitions.length != 1 || !returnState.transitions[0].isEpsilon) return false;

        // Look for prefix op case like 'not expr', (' type ')' expr
        var returnStateTarget = returnState.transitions[0].target;
        if (returnState.stateType == ATNState.BLOCK_END && returnStateTarget == p) continue;

        // Look for 'expr op expr' or case where expr's return state is block end
        // of (...)* internal block; the block end points to loop back
        // which points to p but we don't need to check that
        if (returnState == blockEndState) continue;

        // Look for ternary expr ? expr : expr. The return state points at block end,
        // which points at loop entry state
        if (returnStateTarget == blockEndState) continue;

        // Look for complex prefix 'between expr and expr' case where 2nd expr's
        // return state points at block end state of (...)* internal block
        if (returnStateTarget.stateType == ATNState.BLOCK_END && returnStateTarget.transitions.length == 1 && returnStateTarget.transitions[0].isEpsilon && returnStateTarget.transitions[0].target == p) continue;

        // anything else ain't conforming
        return false;
    }
    return true;
};

ParserATNSimulator.prototype.getRuleName = function (index) {
    if (this.parser !== null && index >= 0) {
        return this.parser.ruleNames[index];
    } else {
        return "<rule " + index + ">";
    }
};

ParserATNSimulator.prototype.getEpsilonTarget = function (config, t, collectPredicates, inContext, fullCtx, treatEofAsEpsilon) {
    switch (t.serializationType) {
        case Transition.RULE:
            return this.ruleTransition(config, t);
        case Transition.PRECEDENCE:
            return this.precedenceTransition(config, t, collectPredicates, inContext, fullCtx);
        case Transition.PREDICATE:
            return this.predTransition(config, t, collectPredicates, inContext, fullCtx);
        case Transition.ACTION:
            return this.actionTransition(config, t);
        case Transition.EPSILON:
            return new ATNConfig({ state: t.target }, config);
        case Transition.ATOM:
        case Transition.RANGE:
        case Transition.SET:
            // EOF transitions act like epsilon transitions after the first EOF
            // transition is traversed
            if (treatEofAsEpsilon) {
                if (t.matches(Token.EOF, 0, 1)) {
                    return new ATNConfig({ state: t.target }, config);
                }
            }
            return null;
        default:
            return null;
    }
};

ParserATNSimulator.prototype.actionTransition = function (config, t) {
    if (this.debug) {
        var index = t.actionIndex == -1 ? 65535 : t.actionIndex;
        console.log("ACTION edge " + t.ruleIndex + ":" + index);
    }
    return new ATNConfig({ state: t.target }, config);
};

ParserATNSimulator.prototype.precedenceTransition = function (config, pt, collectPredicates, inContext, fullCtx) {
    if (this.debug) {
        console.log("PRED (collectPredicates=" + collectPredicates + ") " + pt.precedence + ">=_p, ctx dependent=true");
        if (this.parser !== null) {
            console.log("context surrounding pred is " + Utils.arrayToString(this.parser.getRuleInvocationStack()));
        }
    }
    var c = null;
    if (collectPredicates && inContext) {
        if (fullCtx) {
            // In full context mode, we can evaluate predicates on-the-fly
            // during closure, which dramatically reduces the size of
            // the config sets. It also obviates the need to test predicates
            // later during conflict resolution.
            var currentPosition = this._input.index;
            this._input.seek(this._startIndex);
            var predSucceeds = pt.getPredicate().evaluate(this.parser, this._outerContext);
            this._input.seek(currentPosition);
            if (predSucceeds) {
                c = new ATNConfig({ state: pt.target }, config); // no pred context
            }
        } else {
            var newSemCtx = SemanticContext.andContext(config.semanticContext, pt.getPredicate());
            c = new ATNConfig({ state: pt.target, semanticContext: newSemCtx }, config);
        }
    } else {
        c = new ATNConfig({ state: pt.target }, config);
    }
    if (this.debug) {
        console.log("config from pred transition=" + c);
    }
    return c;
};

ParserATNSimulator.prototype.predTransition = function (config, pt, collectPredicates, inContext, fullCtx) {
    if (this.debug) {
        console.log("PRED (collectPredicates=" + collectPredicates + ") " + pt.ruleIndex + ":" + pt.predIndex + ", ctx dependent=" + pt.isCtxDependent);
        if (this.parser !== null) {
            console.log("context surrounding pred is " + Utils.arrayToString(this.parser.getRuleInvocationStack()));
        }
    }
    var c = null;
    if (collectPredicates && (pt.isCtxDependent && inContext || !pt.isCtxDependent)) {
        if (fullCtx) {
            // In full context mode, we can evaluate predicates on-the-fly
            // during closure, which dramatically reduces the size of
            // the config sets. It also obviates the need to test predicates
            // later during conflict resolution.
            var currentPosition = this._input.index;
            this._input.seek(this._startIndex);
            var predSucceeds = pt.getPredicate().evaluate(this.parser, this._outerContext);
            this._input.seek(currentPosition);
            if (predSucceeds) {
                c = new ATNConfig({ state: pt.target }, config); // no pred context
            }
        } else {
            var newSemCtx = SemanticContext.andContext(config.semanticContext, pt.getPredicate());
            c = new ATNConfig({ state: pt.target, semanticContext: newSemCtx }, config);
        }
    } else {
        c = new ATNConfig({ state: pt.target }, config);
    }
    if (this.debug) {
        console.log("config from pred transition=" + c);
    }
    return c;
};

ParserATNSimulator.prototype.ruleTransition = function (config, t) {
    if (this.debug) {
        console.log("CALL rule " + this.getRuleName(t.target.ruleIndex) + ", ctx=" + config.context);
    }
    var returnState = t.followState;
    var newContext = SingletonPredictionContext.create(config.context, returnState.stateNumber);
    return new ATNConfig({ state: t.target, context: newContext }, config);
};

ParserATNSimulator.prototype.getConflictingAlts = function (configs) {
    var altsets = PredictionMode.getConflictingAltSubsets(configs);
    return PredictionMode.getAlts(altsets);
};

// Sam pointed out a problem with the previous definition, v3, of
// ambiguous states. If we have another state associated with conflicting
// alternatives, we should keep going. For example, the following grammar
//
// s : (ID | ID ID?) ';' ;
//
// When the ATN simulation reaches the state before ';', it has a DFA
// state that looks like: [12|1|[], 6|2|[], 12|2|[]]. Naturally
// 12|1|[] and 12|2|[] conflict, but we cannot stop processing this node
// because alternative to has another way to continue, via [6|2|[]].
// The key is that we have a single state that has config's only associated
// with a single alternative, 2, and crucially the state transitions
// among the configurations are all non-epsilon transitions. That means
// we don't consider any conflicts that include alternative 2. So, we
// ignore the conflict between alts 1 and 2. We ignore a set of
// conflicting alts when there is an intersection with an alternative
// associated with a single alt state in the state&rarr;config-list map.
//
// It's also the case that we might have two conflicting configurations but
// also a 3rd nonconflicting configuration for a different alternative:
// [1|1|[], 1|2|[], 8|3|[]]. This can come about from grammar:
//
// a : A | A | A B ;
//
// After matching input A, we reach the stop state for rule A, state 1.
// State 8 is the state right before B. Clearly alternatives 1 and 2
// conflict and no amount of further lookahead will separate the two.
// However, alternative 3 will be able to continue and so we do not
// stop working on this state. In the previous example, we're concerned
// with states associated with the conflicting alternatives. Here alt
// 3 is not associated with the conflicting configs, but since we can continue
// looking for input reasonably, I don't declare the state done. We
// ignore a set of conflicting alts when we have an alternative
// that we still need to pursue.
//

ParserATNSimulator.prototype.getConflictingAltsOrUniqueAlt = function (configs) {
    var conflictingAlts = null;
    if (configs.uniqueAlt !== ATN.INVALID_ALT_NUMBER) {
        conflictingAlts = new BitSet();
        conflictingAlts.add(configs.uniqueAlt);
    } else {
        conflictingAlts = configs.conflictingAlts;
    }
    return conflictingAlts;
};

ParserATNSimulator.prototype.getTokenName = function (t) {
    if (t === Token.EOF) {
        return "EOF";
    }
    if (this.parser !== null && this.parser.literalNames !== null) {
        if (t >= this.parser.literalNames.length && t >= this.parser.symbolicNames.length) {
            console.log("" + t + " ttype out of range: " + this.parser.literalNames);
            console.log("" + this.parser.getInputStream().getTokens());
        } else {
            var name = this.parser.literalNames[t] || this.parser.symbolicNames[t];
            return name + "<" + t + ">";
        }
    }
    return "" + t;
};

ParserATNSimulator.prototype.getLookaheadName = function (input) {
    return this.getTokenName(input.LA(1));
};

// Used for debugging in adaptivePredict around execATN but I cut
//  it out for clarity now that alg. works well. We can leave this
//  "dead" code for a bit.
//
ParserATNSimulator.prototype.dumpDeadEndConfigs = function (nvae) {
    console.log("dead end configs: ");
    var decs = nvae.getDeadEndConfigs();
    for (var i = 0; i < decs.length; i++) {
        var c = decs[i];
        var trans = "no edges";
        if (c.state.transitions.length > 0) {
            var t = c.state.transitions[0];
            if (t instanceof AtomTransition) {
                trans = "Atom " + this.getTokenName(t.label);
            } else if (t instanceof SetTransition) {
                var neg = t instanceof NotSetTransition;
                trans = (neg ? "~" : "") + "Set " + t.set;
            }
        }
        console.error(c.toString(this.parser, true) + ":" + trans);
    }
};

ParserATNSimulator.prototype.noViableAlt = function (input, outerContext, configs, startIndex) {
    return new NoViableAltException(this.parser, input, input.get(startIndex), input.LT(1), configs, outerContext);
};

ParserATNSimulator.prototype.getUniqueAlt = function (configs) {
    var alt = ATN.INVALID_ALT_NUMBER;
    for (var i = 0; i < configs.items.length; i++) {
        var c = configs.items[i];
        if (alt === ATN.INVALID_ALT_NUMBER) {
            alt = c.alt; // found first alt
        } else if (c.alt !== alt) {
            return ATN.INVALID_ALT_NUMBER;
        }
    }
    return alt;
};

//
// Add an edge to the DFA, if possible. This method calls
// {@link //addDFAState} to ensure the {@code to} state is present in the
// DFA. If {@code from} is {@code null}, or if {@code t} is outside the
// range of edges that can be represented in the DFA tables, this method
// returns without adding the edge to the DFA.
//
// <p>If {@code to} is {@code null}, this method returns {@code null}.
// Otherwise, this method returns the {@link DFAState} returned by calling
// {@link //addDFAState} for the {@code to} state.</p>
//
// @param dfa The DFA
// @param from The source state for the edge
// @param t The input symbol
// @param to The target state for the edge
//
// @return If {@code to} is {@code null}, this method returns {@code null};
// otherwise this method returns the result of calling {@link //addDFAState}
// on {@code to}
//
ParserATNSimulator.prototype.addDFAEdge = function (dfa, from_, t, to) {
    if (this.debug) {
        console.log("EDGE " + from_ + " -> " + to + " upon " + this.getTokenName(t));
    }
    if (to === null) {
        return null;
    }
    to = this.addDFAState(dfa, to); // used existing if possible not incoming
    if (from_ === null || t < -1 || t > this.atn.maxTokenType) {
        return to;
    }
    if (from_.edges === null) {
        from_.edges = [];
    }
    from_.edges[t + 1] = to; // connect

    if (this.debug) {
        var literalNames = this.parser === null ? null : this.parser.literalNames;
        var symbolicNames = this.parser === null ? null : this.parser.symbolicNames;
        console.log("DFA=\n" + dfa.toString(literalNames, symbolicNames));
    }
    return to;
};
//
// Add state {@code D} to the DFA if it is not already present, and return
// the actual instance stored in the DFA. If a state equivalent to {@code D}
// is already in the DFA, the existing state is returned. Otherwise this
// method returns {@code D} after adding it to the DFA.
//
// <p>If {@code D} is {@link //ERROR}, this method returns {@link //ERROR} and
// does not change the DFA.</p>
//
// @param dfa The dfa
// @param D The DFA state to add
// @return The state stored in the DFA. This will be either the existing
// state if {@code D} is already in the DFA, or {@code D} itself if the
// state was not already present.
//
ParserATNSimulator.prototype.addDFAState = function (dfa, D) {
    if (D == ATNSimulator.ERROR) {
        return D;
    }
    var existing = dfa.states.get(D);
    if (existing !== null) {
        return existing;
    }
    D.stateNumber = dfa.states.length;
    if (!D.configs.readOnly) {
        D.configs.optimizeConfigs(this);
        D.configs.setReadonly(true);
    }
    dfa.states.add(D);
    if (this.debug) {
        console.log("adding new DFA state: " + D);
    }
    return D;
};

ParserATNSimulator.prototype.reportAttemptingFullContext = function (dfa, conflictingAlts, configs, startIndex, stopIndex) {
    if (this.debug || this.retry_debug) {
        var interval = new Interval(startIndex, stopIndex + 1);
        console.log("reportAttemptingFullContext decision=" + dfa.decision + ":" + configs + ", input=" + this.parser.getTokenStream().getText(interval));
    }
    if (this.parser !== null) {
        this.parser.getErrorListenerDispatch().reportAttemptingFullContext(this.parser, dfa, startIndex, stopIndex, conflictingAlts, configs);
    }
};

ParserATNSimulator.prototype.reportContextSensitivity = function (dfa, prediction, configs, startIndex, stopIndex) {
    if (this.debug || this.retry_debug) {
        var interval = new Interval(startIndex, stopIndex + 1);
        console.log("reportContextSensitivity decision=" + dfa.decision + ":" + configs + ", input=" + this.parser.getTokenStream().getText(interval));
    }
    if (this.parser !== null) {
        this.parser.getErrorListenerDispatch().reportContextSensitivity(this.parser, dfa, startIndex, stopIndex, prediction, configs);
    }
};

// If context sensitive parsing, we know it's ambiguity not conflict//
ParserATNSimulator.prototype.reportAmbiguity = function (dfa, D, startIndex, stopIndex, exact, ambigAlts, configs) {
    if (this.debug || this.retry_debug) {
        var interval = new Interval(startIndex, stopIndex + 1);
        console.log("reportAmbiguity " + ambigAlts + ":" + configs + ", input=" + this.parser.getTokenStream().getText(interval));
    }
    if (this.parser !== null) {
        this.parser.getErrorListenerDispatch().reportAmbiguity(this.parser, dfa, startIndex, stopIndex, exact, ambigAlts, configs);
    }
};

exports.ParserATNSimulator = ParserATNSimulator;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

exports.DFA = __webpack_require__(64).DFA;
exports.DFASerializer = __webpack_require__(18).DFASerializer;
exports.LexerDFASerializer = __webpack_require__(18).LexerDFASerializer;
exports.PredPrediction = __webpack_require__(11).PredPrediction;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

var Set = __webpack_require__(0).Set;
var DFAState = __webpack_require__(11).DFAState;
var StarLoopEntryState = __webpack_require__(5).StarLoopEntryState;
var ATNConfigSet = __webpack_require__(9).ATNConfigSet;
var DFASerializer = __webpack_require__(18).DFASerializer;
var LexerDFASerializer = __webpack_require__(18).LexerDFASerializer;

function DFA(atnStartState, decision) {
	if (decision === undefined) {
		decision = 0;
	}
	// From which ATN state did we create this DFA?
	this.atnStartState = atnStartState;
	this.decision = decision;
	// A set of all DFA states. Use {@link Map} so we can get old state back
	// ({@link Set} only allows you to see if it's there).
	this._states = new Set();
	this.s0 = null;
	// {@code true} if this DFA is for a precedence decision; otherwise,
	// {@code false}. This is the backing field for {@link //isPrecedenceDfa},
	// {@link //setPrecedenceDfa}.
	this.precedenceDfa = false;
	if (atnStartState instanceof StarLoopEntryState) {
		if (atnStartState.isPrecedenceDecision) {
			this.precedenceDfa = true;
			var precedenceState = new DFAState(null, new ATNConfigSet());
			precedenceState.edges = [];
			precedenceState.isAcceptState = false;
			precedenceState.requiresFullContext = false;
			this.s0 = precedenceState;
		}
	}
	return this;
}

// Get the start state for a specific precedence value.
//
// @param precedence The current precedence.
// @return The start state corresponding to the specified precedence, or
// {@code null} if no start state exists for the specified precedence.
//
// @throws IllegalStateException if this is not a precedence DFA.
// @see //isPrecedenceDfa()

DFA.prototype.getPrecedenceStartState = function (precedence) {
	if (!this.precedenceDfa) {
		throw "Only precedence DFAs may contain a precedence start state.";
	}
	// s0.edges is never null for a precedence DFA
	if (precedence < 0 || precedence >= this.s0.edges.length) {
		return null;
	}
	return this.s0.edges[precedence] || null;
};

// Set the start state for a specific precedence value.
//
// @param precedence The current precedence.
// @param startState The start state corresponding to the specified
// precedence.
//
// @throws IllegalStateException if this is not a precedence DFA.
// @see //isPrecedenceDfa()
//
DFA.prototype.setPrecedenceStartState = function (precedence, startState) {
	if (!this.precedenceDfa) {
		throw "Only precedence DFAs may contain a precedence start state.";
	}
	if (precedence < 0) {
		return;
	}

	// synchronization on s0 here is ok. when the DFA is turned into a
	// precedence DFA, s0 will be initialized once and not updated again
	// s0.edges is never null for a precedence DFA
	this.s0.edges[precedence] = startState;
};

//
// Sets whether this is a precedence DFA. If the specified value differs
// from the current DFA configuration, the following actions are taken;
// otherwise no changes are made to the current DFA.
//
// <ul>
// <li>The {@link //states} map is cleared</li>
// <li>If {@code precedenceDfa} is {@code false}, the initial state
// {@link //s0} is set to {@code null}; otherwise, it is initialized to a new
// {@link DFAState} with an empty outgoing {@link DFAState//edges} array to
// store the start states for individual precedence values.</li>
// <li>The {@link //precedenceDfa} field is updated</li>
// </ul>
//
// @param precedenceDfa {@code true} if this is a precedence DFA; otherwise,
// {@code false}

DFA.prototype.setPrecedenceDfa = function (precedenceDfa) {
	if (this.precedenceDfa !== precedenceDfa) {
		this._states = new DFAStatesSet();
		if (precedenceDfa) {
			var precedenceState = new DFAState(null, new ATNConfigSet());
			precedenceState.edges = [];
			precedenceState.isAcceptState = false;
			precedenceState.requiresFullContext = false;
			this.s0 = precedenceState;
		} else {
			this.s0 = null;
		}
		this.precedenceDfa = precedenceDfa;
	}
};

Object.defineProperty(DFA.prototype, "states", {
	get: function get() {
		return this._states;
	}
});

// Return a list of all states in this DFA, ordered by state number.
DFA.prototype.sortedStates = function () {
	var list = this._states.values();
	return list.sort(function (a, b) {
		return a.stateNumber - b.stateNumber;
	});
};

DFA.prototype.toString = function (literalNames, symbolicNames) {
	literalNames = literalNames || null;
	symbolicNames = symbolicNames || null;
	if (this.s0 === null) {
		return "";
	}
	var serializer = new DFASerializer(this, literalNames, symbolicNames);
	return serializer.toString();
};

DFA.prototype.toLexerString = function () {
	if (this.s0 === null) {
		return "";
	}
	var serializer = new LexerDFASerializer(this);
	return serializer.toString();
};

exports.DFA = DFA;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

exports.RecognitionException = __webpack_require__(3).RecognitionException;
exports.NoViableAltException = __webpack_require__(3).NoViableAltException;
exports.LexerNoViableAltException = __webpack_require__(3).LexerNoViableAltException;
exports.InputMismatchException = __webpack_require__(3).InputMismatchException;
exports.FailedPredicateException = __webpack_require__(3).FailedPredicateException;
exports.DiagnosticErrorListener = __webpack_require__(66).DiagnosticErrorListener;
exports.BailErrorStrategy = __webpack_require__(36).BailErrorStrategy;
exports.ErrorListener = __webpack_require__(12).ErrorListener;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
//

//
// This implementation of {@link ANTLRErrorListener} can be used to identify
// certain potential correctness and performance problems in grammars. "Reports"
// are made by calling {@link Parser//notifyErrorListeners} with the appropriate
// message.
//
// <ul>
// <li><b>Ambiguities</b>: These are cases where more than one path through the
// grammar can match the input.</li>
// <li><b>Weak context sensitivity</b>: These are cases where full-context
// prediction resolved an SLL conflict to a unique alternative which equaled the
// minimum alternative of the SLL conflict.</li>
// <li><b>Strong (forced) context sensitivity</b>: These are cases where the
// full-context prediction resolved an SLL conflict to a unique alternative,
// <em>and</em> the minimum alternative of the SLL conflict was found to not be
// a truly viable alternative. Two-stage parsing cannot be used for inputs where
// this situation occurs.</li>
// </ul>

var BitSet = __webpack_require__(0).BitSet;
var ErrorListener = __webpack_require__(12).ErrorListener;
var Interval = __webpack_require__(2).Interval;

function DiagnosticErrorListener(exactOnly) {
	ErrorListener.call(this);
	exactOnly = exactOnly || true;
	// whether all ambiguities or only exact ambiguities are reported.
	this.exactOnly = exactOnly;
	return this;
}

DiagnosticErrorListener.prototype = Object.create(ErrorListener.prototype);
DiagnosticErrorListener.prototype.constructor = DiagnosticErrorListener;

DiagnosticErrorListener.prototype.reportAmbiguity = function (recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
	if (this.exactOnly && !exact) {
		return;
	}
	var msg = "reportAmbiguity d=" + this.getDecisionDescription(recognizer, dfa) + ": ambigAlts=" + this.getConflictingAlts(ambigAlts, configs) + ", input='" + recognizer.getTokenStream().getText(new Interval(startIndex, stopIndex)) + "'";
	recognizer.notifyErrorListeners(msg);
};

DiagnosticErrorListener.prototype.reportAttemptingFullContext = function (recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
	var msg = "reportAttemptingFullContext d=" + this.getDecisionDescription(recognizer, dfa) + ", input='" + recognizer.getTokenStream().getText(new Interval(startIndex, stopIndex)) + "'";
	recognizer.notifyErrorListeners(msg);
};

DiagnosticErrorListener.prototype.reportContextSensitivity = function (recognizer, dfa, startIndex, stopIndex, prediction, configs) {
	var msg = "reportContextSensitivity d=" + this.getDecisionDescription(recognizer, dfa) + ", input='" + recognizer.getTokenStream().getText(new Interval(startIndex, stopIndex)) + "'";
	recognizer.notifyErrorListeners(msg);
};

DiagnosticErrorListener.prototype.getDecisionDescription = function (recognizer, dfa) {
	var decision = dfa.decision;
	var ruleIndex = dfa.atnStartState.ruleIndex;

	var ruleNames = recognizer.ruleNames;
	if (ruleIndex < 0 || ruleIndex >= ruleNames.length) {
		return "" + decision;
	}
	var ruleName = ruleNames[ruleIndex] || null;
	if (ruleName === null || ruleName.length === 0) {
		return "" + decision;
	}
	return "" + decision + " (" + ruleName + ")";
};

//
// Computes the set of conflicting or ambiguous alternatives from a
// configuration set, if that information was not already provided by the
// parser.
//
// @param reportedAlts The set of conflicting or ambiguous alternatives, as
// reported by the parser.
// @param configs The conflicting or ambiguous configuration set.
// @return Returns {@code reportedAlts} if it is not {@code null}, otherwise
// returns the set of alternatives represented in {@code configs}.
//
DiagnosticErrorListener.prototype.getConflictingAlts = function (reportedAlts, configs) {
	if (reportedAlts !== null) {
		return reportedAlts;
	}
	var result = new BitSet();
	for (var i = 0; i < configs.items.length; i++) {
		result.add(configs.items[i].alt);
	}
	return "{" + result.values().join(", ") + "}";
};

exports.DiagnosticErrorListener = DiagnosticErrorListener;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
//

var InputStream = __webpack_require__(13).InputStream;

var isNodeJs = typeof window === 'undefined' && typeof importScripts === 'undefined';
var fs = isNodeJs ? __webpack_require__(37) : null;

// Utility functions to create InputStreams from various sources.
//
// All returned InputStreams support the full range of Unicode
// up to U+10FFFF (the default behavior of InputStream only supports
// code points up to U+FFFF).
var CharStreams = {
  // Creates an InputStream from a string.
  fromString: function fromString(str) {
    return InputStream(str, true);
  },

  // Asynchronously creates an InputStream from a blob given the
  // encoding of the bytes in that blob (defaults to 'utf8' if
  // encoding is null).
  //
  // Invokes onLoad(result) on success, onError(error) on
  // failure.
  fromBlob: function fromBlob(blob, encoding, onLoad, onError) {
    var reader = FileReader();
    reader.onload = function (e) {
      var is = InputStream(e.target.result, true);
      onLoad(is);
    };
    reader.onerror = onError;
    reader.readAsText(blob, encoding);
  },

  // Creates an InputStream from a Buffer given the
  // encoding of the bytes in that buffer (defaults to 'utf8' if
  // encoding is null).
  fromBuffer: function fromBuffer(buffer, encoding) {
    return InputStream(buffer.toString(encoding), true);
  },

  // Asynchronously creates an InputStream from a file on disk given
  // the encoding of the bytes in that file (defaults to 'utf8' if
  // encoding is null).
  //
  // Invokes callback(error, result) on completion.
  fromPath: function fromPath(path, encoding, callback) {
    fs.readFile(path, encoding, function (err, data) {
      var is = null;
      if (data !== null) {
        is = InputStream(data, true);
      }
      callback(err, is);
    });
  },

  // Synchronously creates an InputStream given a path to a file
  // on disk and the encoding of the bytes in that file (defaults to
  // 'utf8' if encoding is null).
  fromPathSync: function fromPathSync(path, encoding) {
    var data = fs.readFileSync(path, encoding);
    return InputStream(data, true);
  }
};

exports.CharStreams = CharStreams;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
//

//
//  This is an InputStream that is loaded from a file all at once
//  when you construct the object.
//
var InputStream = __webpack_require__(13).InputStream;
var isNodeJs = typeof window === 'undefined' && typeof importScripts === 'undefined';
var fs = isNodeJs ? __webpack_require__(37) : null;

function FileStream(fileName, decodeToUnicodeCodePoints) {
	var data = fs.readFileSync(fileName, "utf8");
	InputStream.call(this, data, decodeToUnicodeCodePoints);
	this.fileName = fileName;
	return this;
}

FileStream.prototype = Object.create(InputStream.prototype);
FileStream.prototype.constructor = FileStream;

exports.FileStream = FileStream;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

var Token = __webpack_require__(1).Token;
var ParseTreeListener = __webpack_require__(4).ParseTreeListener;
var Recognizer = __webpack_require__(28).Recognizer;
var DefaultErrorStrategy = __webpack_require__(36).DefaultErrorStrategy;
var ATNDeserializer = __webpack_require__(31).ATNDeserializer;
var ATNDeserializationOptions = __webpack_require__(32).ATNDeserializationOptions;
var TerminalNode = __webpack_require__(4).TerminalNode;
var ErrorNode = __webpack_require__(4).ErrorNode;

function TraceListener(parser) {
	ParseTreeListener.call(this);
	this.parser = parser;
	return this;
}

TraceListener.prototype = Object.create(ParseTreeListener.prototype);
TraceListener.prototype.constructor = TraceListener;

TraceListener.prototype.enterEveryRule = function (ctx) {
	console.log("enter   " + this.parser.ruleNames[ctx.ruleIndex] + ", LT(1)=" + this.parser._input.LT(1).text);
};

TraceListener.prototype.visitTerminal = function (node) {
	console.log("consume " + node.symbol + " rule " + this.parser.ruleNames[this.parser._ctx.ruleIndex]);
};

TraceListener.prototype.exitEveryRule = function (ctx) {
	console.log("exit    " + this.parser.ruleNames[ctx.ruleIndex] + ", LT(1)=" + this.parser._input.LT(1).text);
};

// this is all the parsing support code essentially; most of it is error
// recovery stuff.//
function Parser(input) {
	Recognizer.call(this);
	// The input stream.
	this._input = null;
	// The error handling strategy for the parser. The default value is a new
	// instance of {@link DefaultErrorStrategy}.
	this._errHandler = new DefaultErrorStrategy();
	this._precedenceStack = [];
	this._precedenceStack.push(0);
	// The {@link ParserRuleContext} object for the currently executing rule.
	// this is always non-null during the parsing process.
	this._ctx = null;
	// Specifies whether or not the parser should construct a parse tree during
	// the parsing process. The default value is {@code true}.
	this.buildParseTrees = true;
	// When {@link //setTrace}{@code (true)} is called, a reference to the
	// {@link TraceListener} is stored here so it can be easily removed in a
	// later call to {@link //setTrace}{@code (false)}. The listener itself is
	// implemented as a parser listener so this field is not directly used by
	// other parser methods.
	this._tracer = null;
	// The list of {@link ParseTreeListener} listeners registered to receive
	// events during the parse.
	this._parseListeners = null;
	// The number of syntax errors reported during parsing. this value is
	// incremented each time {@link //notifyErrorListeners} is called.
	this._syntaxErrors = 0;
	this.setInputStream(input);
	return this;
}

Parser.prototype = Object.create(Recognizer.prototype);
Parser.prototype.contructor = Parser;

// this field maps from the serialized ATN string to the deserialized {@link
// ATN} with
// bypass alternatives.
//
// @see ATNDeserializationOptions//isGenerateRuleBypassTransitions()
//
Parser.bypassAltsAtnCache = {};

// reset the parser's state//
Parser.prototype.reset = function () {
	if (this._input !== null) {
		this._input.seek(0);
	}
	this._errHandler.reset(this);
	this._ctx = null;
	this._syntaxErrors = 0;
	this.setTrace(false);
	this._precedenceStack = [];
	this._precedenceStack.push(0);
	if (this._interp !== null) {
		this._interp.reset();
	}
};

// Match current input symbol against {@code ttype}. If the symbol type
// matches, {@link ANTLRErrorStrategy//reportMatch} and {@link //consume} are
// called to complete the match process.
//
// <p>If the symbol type does not match,
// {@link ANTLRErrorStrategy//recoverInline} is called on the current error
// strategy to attempt recovery. If {@link //getBuildParseTree} is
// {@code true} and the token index of the symbol returned by
// {@link ANTLRErrorStrategy//recoverInline} is -1, the symbol is added to
// the parse tree by calling {@link ParserRuleContext//addErrorNode}.</p>
//
// @param ttype the token type to match
// @return the matched symbol
// @throws RecognitionException if the current input symbol did not match
// {@code ttype} and the error strategy could not recover from the
// mismatched symbol

Parser.prototype.match = function (ttype) {
	var t = this.getCurrentToken();
	if (t.type === ttype) {
		this._errHandler.reportMatch(this);
		this.consume();
	} else {
		t = this._errHandler.recoverInline(this);
		if (this.buildParseTrees && t.tokenIndex === -1) {
			// we must have conjured up a new token during single token
			// insertion
			// if it's not the current symbol
			this._ctx.addErrorNode(t);
		}
	}
	return t;
};
// Match current input symbol as a wildcard. If the symbol type matches
// (i.e. has a value greater than 0), {@link ANTLRErrorStrategy//reportMatch}
// and {@link //consume} are called to complete the match process.
//
// <p>If the symbol type does not match,
// {@link ANTLRErrorStrategy//recoverInline} is called on the current error
// strategy to attempt recovery. If {@link //getBuildParseTree} is
// {@code true} and the token index of the symbol returned by
// {@link ANTLRErrorStrategy//recoverInline} is -1, the symbol is added to
// the parse tree by calling {@link ParserRuleContext//addErrorNode}.</p>
//
// @return the matched symbol
// @throws RecognitionException if the current input symbol did not match
// a wildcard and the error strategy could not recover from the mismatched
// symbol

Parser.prototype.matchWildcard = function () {
	var t = this.getCurrentToken();
	if (t.type > 0) {
		this._errHandler.reportMatch(this);
		this.consume();
	} else {
		t = this._errHandler.recoverInline(this);
		if (this._buildParseTrees && t.tokenIndex === -1) {
			// we must have conjured up a new token during single token
			// insertion
			// if it's not the current symbol
			this._ctx.addErrorNode(t);
		}
	}
	return t;
};

Parser.prototype.getParseListeners = function () {
	return this._parseListeners || [];
};

// Registers {@code listener} to receive events during the parsing process.
//
// <p>To support output-preserving grammar transformations (including but not
// limited to left-recursion removal, automated left-factoring, and
// optimized code generation), calls to listener methods during the parse
// may differ substantially from calls made by
// {@link ParseTreeWalker//DEFAULT} used after the parse is complete. In
// particular, rule entry and exit events may occur in a different order
// during the parse than after the parser. In addition, calls to certain
// rule entry methods may be omitted.</p>
//
// <p>With the following specific exceptions, calls to listener events are
// <em>deterministic</em>, i.e. for identical input the calls to listener
// methods will be the same.</p>
//
// <ul>
// <li>Alterations to the grammar used to generate code may change the
// behavior of the listener calls.</li>
// <li>Alterations to the command line options passed to ANTLR 4 when
// generating the parser may change the behavior of the listener calls.</li>
// <li>Changing the version of the ANTLR Tool used to generate the parser
// may change the behavior of the listener calls.</li>
// </ul>
//
// @param listener the listener to add
//
// @throws NullPointerException if {@code} listener is {@code null}
//
Parser.prototype.addParseListener = function (listener) {
	if (listener === null) {
		throw "listener";
	}
	if (this._parseListeners === null) {
		this._parseListeners = [];
	}
	this._parseListeners.push(listener);
};

//
// Remove {@code listener} from the list of parse listeners.
//
// <p>If {@code listener} is {@code null} or has not been added as a parse
// listener, this method does nothing.</p>
// @param listener the listener to remove
//
Parser.prototype.removeParseListener = function (listener) {
	if (this._parseListeners !== null) {
		var idx = this._parseListeners.indexOf(listener);
		if (idx >= 0) {
			this._parseListeners.splice(idx, 1);
		}
		if (this._parseListeners.length === 0) {
			this._parseListeners = null;
		}
	}
};

// Remove all parse listeners.
Parser.prototype.removeParseListeners = function () {
	this._parseListeners = null;
};

// Notify any parse listeners of an enter rule event.
Parser.prototype.triggerEnterRuleEvent = function () {
	if (this._parseListeners !== null) {
		var ctx = this._ctx;
		this._parseListeners.map(function (listener) {
			listener.enterEveryRule(ctx);
			ctx.enterRule(listener);
		});
	}
};

//
// Notify any parse listeners of an exit rule event.
//
// @see //addParseListener
//
Parser.prototype.triggerExitRuleEvent = function () {
	if (this._parseListeners !== null) {
		// reverse order walk of listeners
		var ctx = this._ctx;
		this._parseListeners.slice(0).reverse().map(function (listener) {
			ctx.exitRule(listener);
			listener.exitEveryRule(ctx);
		});
	}
};

Parser.prototype.getTokenFactory = function () {
	return this._input.tokenSource._factory;
};

// Tell our token source and error strategy about a new way to create tokens.//
Parser.prototype.setTokenFactory = function (factory) {
	this._input.tokenSource._factory = factory;
};

// The ATN with bypass alternatives is expensive to create so we create it
// lazily.
//
// @throws UnsupportedOperationException if the current parser does not
// implement the {@link //getSerializedATN()} method.
//
Parser.prototype.getATNWithBypassAlts = function () {
	var serializedAtn = this.getSerializedATN();
	if (serializedAtn === null) {
		throw "The current parser does not support an ATN with bypass alternatives.";
	}
	var result = this.bypassAltsAtnCache[serializedAtn];
	if (result === null) {
		var deserializationOptions = new ATNDeserializationOptions();
		deserializationOptions.generateRuleBypassTransitions = true;
		result = new ATNDeserializer(deserializationOptions).deserialize(serializedAtn);
		this.bypassAltsAtnCache[serializedAtn] = result;
	}
	return result;
};

// The preferred method of getting a tree pattern. For example, here's a
// sample use:
//
// <pre>
// ParseTree t = parser.expr();
// ParseTreePattern p = parser.compileParseTreePattern("&lt;ID&gt;+0",
// MyParser.RULE_expr);
// ParseTreeMatch m = p.match(t);
// String id = m.get("ID");
// </pre>

var Lexer = __webpack_require__(14).Lexer;

Parser.prototype.compileParseTreePattern = function (pattern, patternRuleIndex, lexer) {
	lexer = lexer || null;
	if (lexer === null) {
		if (this.getTokenStream() !== null) {
			var tokenSource = this.getTokenStream().tokenSource;
			if (tokenSource instanceof Lexer) {
				lexer = tokenSource;
			}
		}
	}
	if (lexer === null) {
		throw "Parser can't discover a lexer to use";
	}
	var m = new ParseTreePatternMatcher(lexer, this);
	return m.compile(pattern, patternRuleIndex);
};

Parser.prototype.getInputStream = function () {
	return this.getTokenStream();
};

Parser.prototype.setInputStream = function (input) {
	this.setTokenStream(input);
};

Parser.prototype.getTokenStream = function () {
	return this._input;
};

// Set the token stream and reset the parser.//
Parser.prototype.setTokenStream = function (input) {
	this._input = null;
	this.reset();
	this._input = input;
};

// Match needs to return the current input symbol, which gets put
// into the label for the associated token ref; e.g., x=ID.
//
Parser.prototype.getCurrentToken = function () {
	return this._input.LT(1);
};

Parser.prototype.notifyErrorListeners = function (msg, offendingToken, err) {
	offendingToken = offendingToken || null;
	err = err || null;
	if (offendingToken === null) {
		offendingToken = this.getCurrentToken();
	}
	this._syntaxErrors += 1;
	var line = offendingToken.line;
	var column = offendingToken.column;
	var listener = this.getErrorListenerDispatch();
	listener.syntaxError(this, offendingToken, line, column, msg, err);
};

//
// Consume and return the {@linkplain //getCurrentToken current symbol}.
//
// <p>E.g., given the following input with {@code A} being the current
// lookahead symbol, this function moves the cursor to {@code B} and returns
// {@code A}.</p>
//
// <pre>
// A B
// ^
// </pre>
//
// If the parser is not in error recovery mode, the consumed symbol is added
// to the parse tree using {@link ParserRuleContext//addChild(Token)}, and
// {@link ParseTreeListener//visitTerminal} is called on any parse listeners.
// If the parser <em>is</em> in error recovery mode, the consumed symbol is
// added to the parse tree using
// {@link ParserRuleContext//addErrorNode(Token)}, and
// {@link ParseTreeListener//visitErrorNode} is called on any parse
// listeners.
//
Parser.prototype.consume = function () {
	var o = this.getCurrentToken();
	if (o.type !== Token.EOF) {
		this.getInputStream().consume();
	}
	var hasListener = this._parseListeners !== null && this._parseListeners.length > 0;
	if (this.buildParseTrees || hasListener) {
		var node;
		if (this._errHandler.inErrorRecoveryMode(this)) {
			node = this._ctx.addErrorNode(o);
		} else {
			node = this._ctx.addTokenNode(o);
		}
		node.invokingState = this.state;
		if (hasListener) {
			this._parseListeners.map(function (listener) {
				if (node instanceof ErrorNode || node.isErrorNode !== undefined && node.isErrorNode()) {
					listener.visitErrorNode(node);
				} else if (node instanceof TerminalNode) {
					listener.visitTerminal(node);
				}
			});
		}
	}
	return o;
};

Parser.prototype.addContextToParseTree = function () {
	// add current context to parent if we have a parent
	if (this._ctx.parentCtx !== null) {
		this._ctx.parentCtx.addChild(this._ctx);
	}
};

// Always called by generated parsers upon entry to a rule. Access field
// {@link //_ctx} get the current context.

Parser.prototype.enterRule = function (localctx, state, ruleIndex) {
	this.state = state;
	this._ctx = localctx;
	this._ctx.start = this._input.LT(1);
	if (this.buildParseTrees) {
		this.addContextToParseTree();
	}
	if (this._parseListeners !== null) {
		this.triggerEnterRuleEvent();
	}
};

Parser.prototype.exitRule = function () {
	this._ctx.stop = this._input.LT(-1);
	// trigger event on _ctx, before it reverts to parent
	if (this._parseListeners !== null) {
		this.triggerExitRuleEvent();
	}
	this.state = this._ctx.invokingState;
	this._ctx = this._ctx.parentCtx;
};

Parser.prototype.enterOuterAlt = function (localctx, altNum) {
	localctx.setAltNumber(altNum);
	// if we have new localctx, make sure we replace existing ctx
	// that is previous child of parse tree
	if (this.buildParseTrees && this._ctx !== localctx) {
		if (this._ctx.parentCtx !== null) {
			this._ctx.parentCtx.removeLastChild();
			this._ctx.parentCtx.addChild(localctx);
		}
	}
	this._ctx = localctx;
};

// Get the precedence level for the top-most precedence rule.
//
// @return The precedence level for the top-most precedence rule, or -1 if
// the parser context is not nested within a precedence rule.

Parser.prototype.getPrecedence = function () {
	if (this._precedenceStack.length === 0) {
		return -1;
	} else {
		return this._precedenceStack[this._precedenceStack.length - 1];
	}
};

Parser.prototype.enterRecursionRule = function (localctx, state, ruleIndex, precedence) {
	this.state = state;
	this._precedenceStack.push(precedence);
	this._ctx = localctx;
	this._ctx.start = this._input.LT(1);
	if (this._parseListeners !== null) {
		this.triggerEnterRuleEvent(); // simulates rule entry for
		// left-recursive rules
	}
};

//
// Like {@link //enterRule} but for recursive rules.

Parser.prototype.pushNewRecursionContext = function (localctx, state, ruleIndex) {
	var previous = this._ctx;
	previous.parentCtx = localctx;
	previous.invokingState = state;
	previous.stop = this._input.LT(-1);

	this._ctx = localctx;
	this._ctx.start = previous.start;
	if (this.buildParseTrees) {
		this._ctx.addChild(previous);
	}
	if (this._parseListeners !== null) {
		this.triggerEnterRuleEvent(); // simulates rule entry for
		// left-recursive rules
	}
};

Parser.prototype.unrollRecursionContexts = function (parentCtx) {
	this._precedenceStack.pop();
	this._ctx.stop = this._input.LT(-1);
	var retCtx = this._ctx; // save current ctx (return value)
	// unroll so _ctx is as it was before call to recursive method
	if (this._parseListeners !== null) {
		while (this._ctx !== parentCtx) {
			this.triggerExitRuleEvent();
			this._ctx = this._ctx.parentCtx;
		}
	} else {
		this._ctx = parentCtx;
	}
	// hook into tree
	retCtx.parentCtx = parentCtx;
	if (this.buildParseTrees && parentCtx !== null) {
		// add return ctx into invoking rule's tree
		parentCtx.addChild(retCtx);
	}
};

Parser.prototype.getInvokingContext = function (ruleIndex) {
	var ctx = this._ctx;
	while (ctx !== null) {
		if (ctx.ruleIndex === ruleIndex) {
			return ctx;
		}
		ctx = ctx.parentCtx;
	}
	return null;
};

Parser.prototype.precpred = function (localctx, precedence) {
	return precedence >= this._precedenceStack[this._precedenceStack.length - 1];
};

Parser.prototype.inContext = function (context) {
	// TODO: useful in parser?
	return false;
};

//
// Checks whether or not {@code symbol} can follow the current state in the
// ATN. The behavior of this method is equivalent to the following, but is
// implemented such that the complete context-sensitive follow set does not
// need to be explicitly constructed.
//
// <pre>
// return getExpectedTokens().contains(symbol);
// </pre>
//
// @param symbol the symbol type to check
// @return {@code true} if {@code symbol} can follow the current state in
// the ATN, otherwise {@code false}.

Parser.prototype.isExpectedToken = function (symbol) {
	var atn = this._interp.atn;
	var ctx = this._ctx;
	var s = atn.states[this.state];
	var following = atn.nextTokens(s);
	if (following.contains(symbol)) {
		return true;
	}
	if (!following.contains(Token.EPSILON)) {
		return false;
	}
	while (ctx !== null && ctx.invokingState >= 0 && following.contains(Token.EPSILON)) {
		var invokingState = atn.states[ctx.invokingState];
		var rt = invokingState.transitions[0];
		following = atn.nextTokens(rt.followState);
		if (following.contains(symbol)) {
			return true;
		}
		ctx = ctx.parentCtx;
	}
	if (following.contains(Token.EPSILON) && symbol === Token.EOF) {
		return true;
	} else {
		return false;
	}
};

// Computes the set of input symbols which could follow the current parser
// state and context, as given by {@link //getState} and {@link //getContext},
// respectively.
//
// @see ATN//getExpectedTokens(int, RuleContext)
//
Parser.prototype.getExpectedTokens = function () {
	return this._interp.atn.getExpectedTokens(this.state, this._ctx);
};

Parser.prototype.getExpectedTokensWithinCurrentRule = function () {
	var atn = this._interp.atn;
	var s = atn.states[this.state];
	return atn.nextTokens(s);
};

// Get a rule's index (i.e., {@code RULE_ruleName} field) or -1 if not found.//
Parser.prototype.getRuleIndex = function (ruleName) {
	var ruleIndex = this.getRuleIndexMap()[ruleName];
	if (ruleIndex !== null) {
		return ruleIndex;
	} else {
		return -1;
	}
};

// Return List&lt;String&gt; of the rule names in your parser instance
// leading up to a call to the current rule. You could override if
// you want more details such as the file/line info of where
// in the ATN a rule is invoked.
//
// this is very useful for error messages.
//
Parser.prototype.getRuleInvocationStack = function (p) {
	p = p || null;
	if (p === null) {
		p = this._ctx;
	}
	var stack = [];
	while (p !== null) {
		// compute what follows who invoked us
		var ruleIndex = p.ruleIndex;
		if (ruleIndex < 0) {
			stack.push("n/a");
		} else {
			stack.push(this.ruleNames[ruleIndex]);
		}
		p = p.parentCtx;
	}
	return stack;
};

// For debugging and other purposes.//
Parser.prototype.getDFAStrings = function () {
	return this._interp.decisionToDFA.toString();
};
// For debugging and other purposes.//
Parser.prototype.dumpDFA = function () {
	var seenOne = false;
	for (var i = 0; i < this._interp.decisionToDFA.length; i++) {
		var dfa = this._interp.decisionToDFA[i];
		if (dfa.states.length > 0) {
			if (seenOne) {
				console.log();
			}
			this.printer.println("Decision " + dfa.decision + ":");
			this.printer.print(dfa.toString(this.literalNames, this.symbolicNames));
			seenOne = true;
		}
	}
};

/*
"			printer = function() {\r\n" +
"				this.println = function(s) { document.getElementById('output') += s + '\\n'; }\r\n" +
"				this.print = function(s) { document.getElementById('output') += s; }\r\n" +
"			};\r\n" +
*/

Parser.prototype.getSourceName = function () {
	return this._input.sourceName;
};

// During a parse is sometimes useful to listen in on the rule entry and exit
// events as well as token matches. this is for quick and dirty debugging.
//
Parser.prototype.setTrace = function (trace) {
	if (!trace) {
		this.removeParseListener(this._tracer);
		this._tracer = null;
	} else {
		if (this._tracer !== null) {
			this.removeParseListener(this._tracer);
		}
		this._tracer = new TraceListener(this);
		this.addParseListener(this._tracer);
	}
};

exports.Parser = Parser;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Generated from lib/Expr.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = __webpack_require__(17);
var ExprListener = __webpack_require__(38).ExprListener;
var ExprVisitor = __webpack_require__(71).ExprVisitor;

var grammarFileName = "Expr.g4";

var serializedATN = ['\x03\u608B\uA72A\u8133\uB9ED\u417C\u3BE7\u7786\u5964', '\x03\x10,\x04\x02\t\x02\x04\x03\t\x03\x03\x02\x03', '\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03', '\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\x13', '\n\x03\f\x03\x0E\x03\x16\x0B\x03\x05\x03\x18\n\x03', '\x03\x03\x03\x03\x05\x03\x1C\n\x03\x03\x03\x03', '\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03', '\x03\x03\x03\x07\x03\'\n\x03\f\x03\x0E\x03*\x0B', '\x03\x03\x03\x02\x03\x04\x04\x02\x04\x02\x03\x03', '\x02\x03\x06\x020\x02\x06\x03\x02\x02\x02\x04', '\x1B\x03\x02\x02\x02\x06\x07\x05\x04\x03\x02\x07', '\x03\x03\x02\x02\x02\b\t\b\x03\x01\x02\t\n\x07\x07', '\x02\x02\n\x0B\x05\x04\x03\x02\x0B\f\x07\b\x02\x02', '\f\x1C\x03\x02\x02\x02\r\x0E\x07\n\x02\x02\x0E\x17', '\x07\x07\x02\x02\x0F\x14\x05\x04\x03\x02\x10\x11', '\x07\t\x02\x02\x11\x13\x05\x04\x03\x02\x12\x10', '\x03\x02\x02\x02\x13\x16\x03\x02\x02\x02\x14\x12', '\x03\x02\x02\x02\x14\x15\x03\x02\x02\x02\x15\x18', '\x03\x02\x02\x02\x16\x14\x03\x02\x02\x02\x17\x0F', '\x03\x02\x02\x02\x17\x18\x03\x02\x02\x02\x18\x19', '\x03\x02\x02\x02\x19\x1C\x07\b\x02\x02\x1A\x1C', '\x07\x0E\x02\x02\x1B\b\x03\x02\x02\x02\x1B\r\x03', '\x02\x02\x02\x1B\x1A\x03\x02\x02\x02\x1C(\x03', '\x02\x02\x02\x1D\x1E\f\b\x02\x02\x1E\x1F\x07\x0B', '\x02\x02\x1F\'\x05\x04\x03\t !\f\x07\x02\x02!"\x07', '\f\x02\x02"\'\x05\x04\x03\b#$\f\x06\x02\x02$%\t\x02', '\x02\x02%\'\x05\x04\x03\x07&\x1D\x03\x02\x02\x02', '& \x03\x02\x02\x02&#\x03\x02\x02\x02\'*\x03\x02', '\x02\x02(&\x03\x02\x02\x02()\x03\x02\x02\x02)\x05', '\x03\x02\x02\x02*(\x03\x02\x02\x02\x07\x14\x17', '\x1B&('].join("");

var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
    return new antlr4.dfa.DFA(ds, index);
});

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [null, "'<'", "'<='", "'>'", "'>='", "'('", "')'", "','"];

var symbolicNames = [null, null, null, null, null, null, null, null, "ID", "AND", "OR", "IS", "NEWLINE", "COMMENT", "WS"];

var ruleNames = ["prog", "expr"];

function ExprParser(input) {
    antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ExprParser.prototype = Object.create(antlr4.Parser.prototype);
ExprParser.prototype.constructor = ExprParser;

Object.defineProperty(ExprParser.prototype, "atn", {
    get: function get() {
        return atn;
    }
});

ExprParser.EOF = antlr4.Token.EOF;
ExprParser.T__0 = 1;
ExprParser.T__1 = 2;
ExprParser.T__2 = 3;
ExprParser.T__3 = 4;
ExprParser.T__4 = 5;
ExprParser.T__5 = 6;
ExprParser.T__6 = 7;
ExprParser.ID = 8;
ExprParser.AND = 9;
ExprParser.OR = 10;
ExprParser.IS = 11;
ExprParser.NEWLINE = 12;
ExprParser.COMMENT = 13;
ExprParser.WS = 14;

ExprParser.RULE_prog = 0;
ExprParser.RULE_expr = 1;

function ProgContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.expr = function () {
    return this.getTypedRuleContext(ExprContext, 0);
};

ProgContext.prototype.enterRule = function (listener) {
    if (listener instanceof ExprListener) {
        listener.enterProg(this);
    }
};

ProgContext.prototype.exitRule = function (listener) {
    if (listener instanceof ExprListener) {
        listener.exitProg(this);
    }
};

ProgContext.prototype.accept = function (visitor) {
    if (visitor instanceof ExprVisitor) {
        return visitor.visitProg(this);
    } else {
        return visitor.visitChildren(this);
    }
};

ExprParser.ProgContext = ProgContext;

ExprParser.prototype.prog = function () {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ExprParser.RULE_prog);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 4;
        this.expr(0);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.copyFrom = function (ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function ParenContext(parser, ctx) {
    ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenContext.prototype = Object.create(ExprContext.prototype);
ParenContext.prototype.constructor = ParenContext;

ExprParser.ParenContext = ParenContext;

ParenContext.prototype.expr = function () {
    return this.getTypedRuleContext(ExprContext, 0);
};
ParenContext.prototype.enterRule = function (listener) {
    if (listener instanceof ExprListener) {
        listener.enterParen(this);
    }
};

ParenContext.prototype.exitRule = function (listener) {
    if (listener instanceof ExprListener) {
        listener.exitParen(this);
    }
};

ParenContext.prototype.accept = function (visitor) {
    if (visitor instanceof ExprVisitor) {
        return visitor.visitParen(this);
    } else {
        return visitor.visitChildren(this);
    }
};

function CompareContext(parser, ctx) {
    ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CompareContext.prototype = Object.create(ExprContext.prototype);
CompareContext.prototype.constructor = CompareContext;

ExprParser.CompareContext = CompareContext;

CompareContext.prototype.expr = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext, i);
    }
};
CompareContext.prototype.enterRule = function (listener) {
    if (listener instanceof ExprListener) {
        listener.enterCompare(this);
    }
};

CompareContext.prototype.exitRule = function (listener) {
    if (listener instanceof ExprListener) {
        listener.exitCompare(this);
    }
};

CompareContext.prototype.accept = function (visitor) {
    if (visitor instanceof ExprVisitor) {
        return visitor.visitCompare(this);
    } else {
        return visitor.visitChildren(this);
    }
};

function BlankContext(parser, ctx) {
    ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BlankContext.prototype = Object.create(ExprContext.prototype);
BlankContext.prototype.constructor = BlankContext;

ExprParser.BlankContext = BlankContext;

BlankContext.prototype.NEWLINE = function () {
    return this.getToken(ExprParser.NEWLINE, 0);
};
BlankContext.prototype.enterRule = function (listener) {
    if (listener instanceof ExprListener) {
        listener.enterBlank(this);
    }
};

BlankContext.prototype.exitRule = function (listener) {
    if (listener instanceof ExprListener) {
        listener.exitBlank(this);
    }
};

BlankContext.prototype.accept = function (visitor) {
    if (visitor instanceof ExprVisitor) {
        return visitor.visitBlank(this);
    } else {
        return visitor.visitChildren(this);
    }
};

function OrContext(parser, ctx) {
    ExprContext.call(this, parser);
    this.left = null; // ExprContext;
    this.right = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OrContext.prototype = Object.create(ExprContext.prototype);
OrContext.prototype.constructor = OrContext;

ExprParser.OrContext = OrContext;

OrContext.prototype.OR = function () {
    return this.getToken(ExprParser.OR, 0);
};

OrContext.prototype.expr = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext, i);
    }
};
OrContext.prototype.enterRule = function (listener) {
    if (listener instanceof ExprListener) {
        listener.enterOr(this);
    }
};

OrContext.prototype.exitRule = function (listener) {
    if (listener instanceof ExprListener) {
        listener.exitOr(this);
    }
};

OrContext.prototype.accept = function (visitor) {
    if (visitor instanceof ExprVisitor) {
        return visitor.visitOr(this);
    } else {
        return visitor.visitChildren(this);
    }
};

function FuncContext(parser, ctx) {
    ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FuncContext.prototype = Object.create(ExprContext.prototype);
FuncContext.prototype.constructor = FuncContext;

ExprParser.FuncContext = FuncContext;

FuncContext.prototype.ID = function () {
    return this.getToken(ExprParser.ID, 0);
};

FuncContext.prototype.expr = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext, i);
    }
};
FuncContext.prototype.enterRule = function (listener) {
    if (listener instanceof ExprListener) {
        listener.enterFunc(this);
    }
};

FuncContext.prototype.exitRule = function (listener) {
    if (listener instanceof ExprListener) {
        listener.exitFunc(this);
    }
};

FuncContext.prototype.accept = function (visitor) {
    if (visitor instanceof ExprVisitor) {
        return visitor.visitFunc(this);
    } else {
        return visitor.visitChildren(this);
    }
};

function AndContext(parser, ctx) {
    ExprContext.call(this, parser);
    this.left = null; // ExprContext;
    this.right = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AndContext.prototype = Object.create(ExprContext.prototype);
AndContext.prototype.constructor = AndContext;

ExprParser.AndContext = AndContext;

AndContext.prototype.AND = function () {
    return this.getToken(ExprParser.AND, 0);
};

AndContext.prototype.expr = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext, i);
    }
};
AndContext.prototype.enterRule = function (listener) {
    if (listener instanceof ExprListener) {
        listener.enterAnd(this);
    }
};

AndContext.prototype.exitRule = function (listener) {
    if (listener instanceof ExprListener) {
        listener.exitAnd(this);
    }
};

AndContext.prototype.accept = function (visitor) {
    if (visitor instanceof ExprVisitor) {
        return visitor.visitAnd(this);
    } else {
        return visitor.visitChildren(this);
    }
};

ExprParser.prototype.expr = function (_p) {
    if (_p === undefined) {
        _p = 0;
    }
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, ExprParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 25;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case ExprParser.T__4:
                localctx = new ParenContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;

                this.state = 7;
                this.match(ExprParser.T__4);
                this.state = 8;
                this.expr(0);
                this.state = 9;
                this.match(ExprParser.T__5);
                break;
            case ExprParser.ID:
                localctx = new FuncContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 11;
                this.match(ExprParser.ID);
                this.state = 12;
                this.match(ExprParser.T__4);
                this.state = 21;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((_la & ~0x1f) == 0 && (1 << _la & (1 << ExprParser.T__4 | 1 << ExprParser.ID | 1 << ExprParser.NEWLINE)) !== 0) {
                    this.state = 13;
                    this.expr(0);
                    this.state = 18;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === ExprParser.T__6) {
                        this.state = 14;
                        this.match(ExprParser.T__6);
                        this.state = 15;
                        this.expr(0);
                        this.state = 20;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                }

                this.state = 23;
                this.match(ExprParser.T__5);
                break;
            case ExprParser.NEWLINE:
                localctx = new BlankContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 24;
                this.match(ExprParser.NEWLINE);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 38;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                if (this._parseListeners !== null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 36;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input, 3, this._ctx);
                switch (la_) {
                    case 1:
                        localctx = new AndContext(this, new ExprContext(this, _parentctx, _parentState));
                        localctx.left = _prevctx;
                        this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                        this.state = 27;
                        if (!this.precpred(this._ctx, 6)) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                        }
                        this.state = 28;
                        this.match(ExprParser.AND);
                        this.state = 29;
                        localctx.right = this.expr(7);
                        break;

                    case 2:
                        localctx = new OrContext(this, new ExprContext(this, _parentctx, _parentState));
                        localctx.left = _prevctx;
                        this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                        this.state = 30;
                        if (!this.precpred(this._ctx, 5)) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                        }
                        this.state = 31;
                        this.match(ExprParser.OR);
                        this.state = 32;
                        localctx.right = this.expr(6);
                        break;

                    case 3:
                        localctx = new CompareContext(this, new ExprContext(this, _parentctx, _parentState));
                        this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                        this.state = 33;
                        if (!this.precpred(this._ctx, 4)) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                        }
                        this.state = 34;
                        _la = this._input.LA(1);
                        if (!((_la & ~0x1f) == 0 && (1 << _la & (1 << ExprParser.T__0 | 1 << ExprParser.T__1 | 1 << ExprParser.T__2 | 1 << ExprParser.T__3)) !== 0)) {
                            this._errHandler.recoverInline(this);
                        } else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 35;
                        this.expr(5);
                        break;

                }
            }
            this.state = 40;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
        }
    } catch (error) {
        if (error instanceof antlr4.error.RecognitionException) {
            localctx.exception = error;
            this._errHandler.reportError(this, error);
            this._errHandler.recover(this, error);
        } else {
            throw error;
        }
    } finally {
        this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
};

ExprParser.prototype.sempred = function (localctx, ruleIndex, predIndex) {
    switch (ruleIndex) {
        case 1:
            return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
    }
};

ExprParser.prototype.expr_sempred = function (localctx, predIndex) {
    switch (predIndex) {
        case 0:
            return this.precpred(this._ctx, 6);
        case 1:
            return this.precpred(this._ctx, 5);
        case 2:
            return this.precpred(this._ctx, 4);
        default:
            throw "No predicate with index:" + predIndex;
    }
};

exports.ExprParser = ExprParser;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Generated from lib/Expr.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = __webpack_require__(17);

// This class defines a complete generic visitor for a parse tree produced by ExprParser.

function ExprVisitor() {
  antlr4.tree.ParseTreeVisitor.call(this);
  return this;
}

ExprVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
ExprVisitor.prototype.constructor = ExprVisitor;

// Visit a parse tree produced by ExprParser#prog.
ExprVisitor.prototype.visitProg = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by ExprParser#paren.
ExprVisitor.prototype.visitParen = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by ExprParser#compare.
ExprVisitor.prototype.visitCompare = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by ExprParser#blank.
ExprVisitor.prototype.visitBlank = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by ExprParser#or.
ExprVisitor.prototype.visitOr = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by ExprParser#func.
ExprVisitor.prototype.visitFunc = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by ExprParser#and.
ExprVisitor.prototype.visitAnd = function (ctx) {
  return this.visitChildren(ctx);
};

exports.ExprVisitor = ExprVisitor;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map