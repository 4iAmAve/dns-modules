"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WHITE_SPACE_REGEX = /\s+/g;
exports.default = (function (str) { return str.trim().replace(WHITE_SPACE_REGEX, ' '); });
