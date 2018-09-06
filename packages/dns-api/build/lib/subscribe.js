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
var send_1 = require("./send");
var defaultTimeout = 5000;
var queue = [];
var intermediateQueue = [];
var running = false;
var startTimer;
var endQueue = function () {
    return function (dispatch) {
        if (running) {
            running = false;
            queue = [];
            intermediateQueue = [];
            clearTimeout(startTimer);
        }
    };
};
exports.endQueue = endQueue;
var endCallForId = function (id) {
    return function (dispatch) {
        var callId = null;
        queue.filter(function (subscription, key) {
            if (subscription.id === id) {
                callId = key;
            }
        });
        intermediateQueue = intermediateQueue.filter(function (sub) { return sub !== id; });
        queue.splice(callId, 1);
        if (!queue.length) {
            dispatch(endQueue());
        }
    };
};
exports.endCallForId = endCallForId;
var run = function () {
    return function (dispatch) {
        if (running) {
            queue.map(function (subscription, key) {
                var now = new Date().getTime();
                var lastRun = subscription.call.lastRun || now;
                var timeout = subscription.timeout || defaultTimeout;
                var callCount = subscription.call.callCount || 0;
                if ((now - lastRun > timeout) || (now - lastRun === 0)) {
                    var alreadyRunning = intermediateQueue.filter(function (sub) { return sub === subscription.id; });
                    if (!alreadyRunning.length) {
                        var call = __assign({}, subscription.call, { successCallback: function (res) {
                                if (subscription.call.successCallback) {
                                    subscription.call.successCallback(res);
                                }
                                intermediateQueue = intermediateQueue.filter(function (sub) { return subscription.id !== sub; });
                            } });
                        dispatch(send_1.default(call));
                        intermediateQueue.push(subscription.id);
                        queue.splice(key, 1);
                        queue.push(__assign({}, subscription, { call: __assign({}, subscription.call, { lastRun: now, callCount: callCount + 1 }) }));
                    }
                }
            });
            setTimeout(function () {
                if (!queue.length) {
                    dispatch(endQueue());
                }
                else {
                    dispatch(run());
                }
            }, 1000);
        }
    };
};
var startQueue = function () {
    return function (dispatch) {
        if (!running) {
            running = true;
            dispatch(run());
        }
    };
};
exports.startQueue = startQueue;
var subscribe = function (id, call, timeout) {
    return function (dispatch) {
        var callTimeout = timeout || defaultTimeout;
        queue.push({
            id: id,
            call: call,
            timeout: callTimeout,
        });
        dispatch(startQueue());
    };
};
exports.subscribe = subscribe;
