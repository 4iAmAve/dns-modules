"use strict";
// see https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
Object.defineProperty(exports, "__esModule", { value: true });
var forEach = function (list, callback, scope) {
    var iteration = 0;
    for (iteration; iteration < list.length; iteration += 1) {
        callback.call(scope, iteration, list[iteration]);
    }
};
exports.default = forEach;
