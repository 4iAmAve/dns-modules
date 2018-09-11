"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var humps_1 = require("humps");
var PROTECTED_KEY = /^[A-Z,0-9_]/;
var customCamelizeKeys = function (key, convert) {
    return (PROTECTED_KEY.test(key) ? key : convert(key));
};
var camelizeKeys = function (json) { return humps_1.camelizeKeys(json, customCamelizeKeys); };
exports.camelizeKeys = camelizeKeys;
var camelize = function (text) { return (PROTECTED_KEY.test(text) ? text : humps_1.camelize(text)); };
exports.camelize = camelize;
