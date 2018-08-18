"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parseDateAndTimeToFixed = function (dateString, from) {
    var date = new Date(dateString);
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 1).toString();
    var day = date.getDate().toString();
    var hours = from ? '00' : '23';
    var minutes = from ? '00' : '59';
    var seconds = from ? '00' : '59';
    if (year.length < 4) {
        return false;
    }
    if (month.length < 2) {
        month = "0" + month;
    }
    if (day.length < 2) {
        day = "0" + day;
    }
    return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
};
exports.default = parseDateAndTimeToFixed;
