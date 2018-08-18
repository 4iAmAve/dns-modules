"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cleanObject = function (obj) {
    var cleansed = {};
    Object.keys(obj).forEach(function (key) {
        if (obj[key] !== null) {
            cleansed[key] = obj[key];
        }
    });
    return cleansed;
};
exports.default = cleanObject;
