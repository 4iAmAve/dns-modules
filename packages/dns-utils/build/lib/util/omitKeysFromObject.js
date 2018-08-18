"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var omitKeysFromObject = function (object, omittables) {
    return Object.keys(object).reduce(function (result, key) {
        if (omittables.indexOf(key) < 0) {
            result[key] = object[key];
        }
        return result;
    }, {});
};
exports.default = omitKeysFromObject;
