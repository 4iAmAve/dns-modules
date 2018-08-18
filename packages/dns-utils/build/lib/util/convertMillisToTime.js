"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var convertMillisToTime = function (millis) {
    if (!millis) {
        return false;
    }
    var hours = Math.floor(millis / (1000 * 60 * 60) % 60);
    var minutes = Math.floor(millis / (1000 * 60) % 60);
    var seconds = Math.floor(millis / 1000 % 60);
    var hoursString = (hours < 10 ? '0' + hours : hours);
    var minutesString = minutes < 10 ? '0' + minutes : minutes;
    var secondsString = seconds < 10 ? '0' + seconds : seconds;
    return {
        hours: hoursString,
        minutes: minutesString,
        seconds: secondsString,
    };
};
exports.default = convertMillisToTime;
