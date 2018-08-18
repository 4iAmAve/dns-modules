"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getSearchParameterByName = function (name) {
    var search = window.location.search;
    var searchArray = search.substring(1).split('&');
    var searchValue = null;
    searchArray.map(function (value) {
        if (value.indexOf(name + "=") === 0) {
            searchValue = value.replace(name + "=", '');
        }
    });
    return searchValue;
};
exports.default = getSearchParameterByName;
