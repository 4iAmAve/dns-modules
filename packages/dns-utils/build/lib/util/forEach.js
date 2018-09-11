"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forEach = function (list, callback, scope) {
    var iteration = 0;
    for (iteration; iteration < list.length; iteration += 1) {
        callback.call(scope, iteration, list[iteration]);
    }
};
exports.default = forEach;
