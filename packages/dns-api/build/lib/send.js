"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var contextual_modules_1 = require("@datns/contextual-modules");
var store_configuration_1 = require("@datns/store-configuration");
var errorInterceptor = function (error) {
    var status = error && error.status ? error.status : -1;
    var responseURL = error && error.request && error.request.responseURL ? error.request.responseURL : '';
    var label = '';
    if (responseURL.indexOf('canPerform') > -1) {
        return;
    }
    if (!error) {
        label = 'Service appears to be unavailable';
        contextual_modules_1.addNotification({ message: label, type: 'error' });
        return;
    }
    if (error.data && error.data.message && error.data.message === 'locked') {
        store_configuration_1.history.push('/locked');
        return;
    }
    if ((window.location.pathname === '/login' || window.location.pathname === '') &&
        error.status === 403) {
        return;
    }
    switch (status) {
        case 400:
            label = 'Bad request';
            break;
        case 401:
            label = responseURL.indexOf('login') > -1 ? '' : 'Unauthorized';
            break;
        case 403:
            if (error.data.message === 'locked') {
                store_configuration_1.history.push('/locked');
            }
            else {
                label = 'Forbidden';
            }
            break;
        case 404:
            label = responseURL.indexOf('login') > -1 ? '' : 'Not found';
            break;
        case 409:
            label = 'Conflict';
            break;
        default:
            label = 'An error occurred';
    }
    if (label && label.length) {
        contextual_modules_1.addNotification({ message: label, type: 'error' });
    }
};
var send = function (call) {
    if (!navigator.onLine) {
        var notification = {
            message: 'You seem to be offline. Please re-connect to continue!',
            type: 'error'
        };
        contextual_modules_1.addNotification(notification);
    }
    var url = call.url;
    if (call.params) {
        var params = call.params;
        var i = 0;
        url = url + "?";
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                if (i > 0) {
                    url = url + "&";
                }
                url = "" + url + key + "=" + params[key];
                i++;
            }
        }
    }
    var options = {
        url: url,
        method: call.httpMethod || 'post',
        headers: __assign({}, call.headers, { 'Pragma': 'no-cache' }),
    };
    if (call.data) {
        options = __assign({}, options, { data: call.data });
    }
    axios_1.default(options)
        .then(function (response) {
        if (response.status === 200 && call.successCallback) {
            call.successCallback(response.data);
        }
        else if (response.status >= 400 && response.status < 600) {
            if (call.errorCallback) {
                call.errorCallback(response);
            }
        }
    })
        .catch(function (exception) {
        if (call.errorCallback) {
            call.errorCallback(exception.response);
        }
        if (!call.silent) {
            errorInterceptor(exception.response);
        }
    });
};
exports.default = send;
