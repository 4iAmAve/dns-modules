"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var deepClone = function (obj) {
    var newObj = {};
    if (typeof obj === 'object') {
        for (var i in obj) {
            if (obj[i] != null && typeof (obj[i]) === 'object') {
                newObj[i] = deepClone(obj[i]);
            }
            else {
                newObj[i] = obj[i];
            }
        }
        return newObj;
    }
    else {
        return obj;
    }
};
exports.default = deepClone;
