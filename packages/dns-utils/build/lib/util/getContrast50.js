"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getContrast50 = function (hexcolor) {
    var hex = hexcolor;
    if (hex.indexOf('#') === 0) {
        hex = hex.substring(1, hex.length);
    }
    return (parseInt(hex, 16) > 0xffffff / 2) ? 'rgba(0, 0, 0, .9)' : 'rgba(255, 255, 255, 0.9)';
};
exports.default = getContrast50;
