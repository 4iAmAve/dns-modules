"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timeString2ms = function (a) {
    var time = a.split('.');
    var ms = time[1] * 1 || 0;
    time = time[0].split(':');
    var hms = time[0] * 3600 + time[1] * 60 + time[2] * 1;
    var hm = time[0] * 60 + time[1] * 1;
    return ms + (time[2] ? hms : time[1] ? hm : time[0] * 1) * 1e3;
};
exports.default = timeString2ms;
