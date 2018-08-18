"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateEmptyArray = function (length) {
    return Array.apply(null, { length: length }).map(function (value, index) {
        return index;
    });
};
exports.default = generateEmptyArray;
