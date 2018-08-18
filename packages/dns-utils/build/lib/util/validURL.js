"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validURL = function (str) {
    var exp = /(\b(http|https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return exp.test(str);
};
exports.default = validURL;
