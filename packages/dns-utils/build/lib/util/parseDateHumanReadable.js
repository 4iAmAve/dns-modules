"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parseDateHumanReadable = function (obj) {
    var date = obj.date, withTime = obj.withTime, withoutOffset = obj.withoutOffset;
    var dateObject = new Date(Date.parse(date));
    var now = new Date(Date.now());
    var parsedFullYear = dateObject.getFullYear();
    var curYear = now.getFullYear();
    if (parsedFullYear > curYear) {
        return false;
    }
    var readableDate = dateObject.toDateString();
    if (readableDate.indexOf('Invalid') >= 0) {
        return false;
    }
    var readableTime = '';
    if (withoutOffset) {
        var dateTimeString = dateObject.toUTCString();
        return "" + dateTimeString;
    }
    if (withTime && !withoutOffset) {
        readableTime = dateObject.toLocaleTimeString();
        return readableDate + " " + readableTime;
    }
    return "" + readableDate;
};
exports.default = parseDateHumanReadable;
