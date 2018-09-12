"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var serialize = function (obj, options) {
    if (obj === void 0) { obj = {}; }
    var functions = [];
    var regexps = [];
    var dates = [];
    var UUID = Math.floor(Math.random() * 0x10000000000).toString(24);
    var PLACE_HOLDER_REGEXP = new RegExp('"___(F|R|D)-' + UUID + '-(\\d+)___"', 'g');
    var IS_NATIVE_CODE_REGEXP = /\{\s*\[native code\]\s*\}/g;
    var UNSAFE_CHARS_REGEXP = /[<>\/\u2028\u2029]/g;
    var ESCAPED_CHARS = {
        '<': '\\u003C',
        '>': '\\u003E',
        '/': '\\u002F',
        '\u2028': '\\u2028',
        '\u2029': '\\u2029'
    };
    var escapeUnsafeChars = function (unsafeChar) {
        return ESCAPED_CHARS[unsafeChar];
    };
    var replacer = function (key, value) {
        if (!value) {
            return value;
        }
        var origValue = _this[key];
        var type = typeof origValue;
        if (type === 'object') {
            if (origValue instanceof RegExp) {
                return '___R-' + UUID + '-' + (regexps.push(origValue) - 1) + '___';
            }
            if (origValue instanceof Date) {
                return '___D-' + UUID + '-' + (dates.push(origValue) - 1) + '___';
            }
        }
        if (type === 'function') {
            return '___F-' + UUID + '-' + (functions.push(origValue) - 1) + '___';
        }
        return value;
    };
    var str;
    if (options.isJSON && !options.space) {
        str = JSON.stringify(obj);
    }
    else {
        str = JSON.stringify(obj, options.isJSON ? null : replacer, options.space);
    }
    if (typeof str !== 'string') {
        return String(str);
    }
    if (options.unsafe !== true) {
        str = str.replace(UNSAFE_CHARS_REGEXP, escapeUnsafeChars);
    }
    if (functions.length === 0 && regexps.length === 0 && dates.length === 0) {
        return str;
    }
    return str.replace(PLACE_HOLDER_REGEXP, function (match, type, valueIndex) {
        if (type === 'D') {
            return "new Date(\"" + dates[valueIndex].toISOString() + "\")";
        }
        if (type === 'R') {
            return regexps[valueIndex].toString();
        }
        var fn = functions[valueIndex];
        var serializedFn = fn.toString();
        if (IS_NATIVE_CODE_REGEXP.test(serializedFn)) {
            throw new TypeError('Serializing native function: ' + fn.name);
        }
        return serializedFn;
    });
};
exports.default = serialize;
