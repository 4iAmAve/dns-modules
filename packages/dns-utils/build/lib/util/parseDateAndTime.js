"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parseDateAndTime = function (dateString, from) {
    var date = new Date(dateString);
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 1).toString();
    var day = date.getDate().toString();
    var hours = date.getHours().toString();
    var minutes = date.getMinutes().toString();
    var seconds = date.getSeconds().toString();
    if (year.length < 4) {
        return false;
    }
    if (month.length < 2) {
        month = "0" + month;
    }
    if (day.length < 2) {
        day = "0" + day;
    }
    if (hours.length < 2) {
        hours = "0" + hours;
    }
    if (minutes.length < 2) {
        minutes = "0" + minutes;
    }
    if (seconds.length < 2) {
        seconds = "0" + seconds;
    }
    return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
};
exports.default = parseDateAndTime;
