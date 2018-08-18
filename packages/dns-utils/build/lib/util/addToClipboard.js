"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addToClipboard = function (data) {
    var el = document.createElement('textarea');
    el.value = data;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};
exports.default = addToClipboard;
