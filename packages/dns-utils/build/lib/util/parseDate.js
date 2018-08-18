"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parseDate = function (dateString) {
    var date = new Date(dateString);
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString();
    var day = date.getDate().toString();
    if (month.length < 2) {
        month = "0" + month;
    }
    if (day.length < 2) {
        day = "0" + day;
    }
    return year + "-" + month + "-" + day;
};
exports.default = parseDate;
