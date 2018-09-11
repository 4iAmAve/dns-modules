"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IS_PROD = process.env.IS_PROD;
var dnsLogger = function (message, level) {
    if (level === void 0) { level = 'log'; }
    if (IS_PROD) {
        return null;
    }
    console[level]("%c " + message + " ", 'background: #faf870; font-style: italic; text-shadow: 0 1px #fff; color: #212121');
    return null;
};
exports.default = dnsLogger;
