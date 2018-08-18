"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validatePassword = function (password) {
    var strongRegex = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$/;
    var mediumRegex = /^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$/;
    var enoughRegex = /(?=.{6,}).*/;
    return {
        strong: strongRegex.test(password),
        medium: mediumRegex.test(password),
        enough: enoughRegex.test(password),
    };
};
exports.default = validatePassword;
