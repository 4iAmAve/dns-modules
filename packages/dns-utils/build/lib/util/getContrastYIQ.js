"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getContrastYIQ = function (hexcolor) {
    var hex = hexcolor;
    if (hex.indexOf('#') === 0) {
        hex = hex.substring(1, hex.length);
    }
    var r = parseInt(hex.substr(0, 2), 16);
    var g = parseInt(hex.substr(2, 2), 16);
    var b = parseInt(hex.substr(4, 2), 16);
    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'rgba(0, 0, 0, .9)' : 'rgba(255, 255, 255, 0.9)';
};
exports.default = getContrastYIQ;
