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
var typesafe_actions_1 = require("typesafe-actions");
var overlay_1 = require("../actions/overlay");
var initialState = {};
var subscribedState = initialState || {};
function overlay(state, action) {
    if (state === void 0) { state = initialState; }
    var _a, _b, _c;
    switch (action.type) {
        case typesafe_actions_1.getType(overlay_1.overlayActions.subscribeToOverlayStore):
            subscribedState[action.id] = false;
            return __assign({}, state, (_a = {}, _a[action.id] = false, _a));
        case typesafe_actions_1.getType(overlay_1.overlayActions.openOverlay):
            return __assign({}, subscribedState, (_b = {}, _b[action.id] = true, _b));
        case typesafe_actions_1.getType(overlay_1.overlayActions.closeOverlay):
            return __assign({}, subscribedState, (_c = {}, _c[action.id] = false, _c));
        default:
            return state;
    }
}
exports.default = overlay;
