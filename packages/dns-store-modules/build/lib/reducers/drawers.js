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
var drawers_1 = require("../actions/drawers");
var initialState = {};
function drawers(state, action) {
    if (state === void 0) { state = initialState; }
    var _a, _b, _c;
    switch (action.type) {
        case typesafe_actions_1.getType(drawers_1.drawerActions.subscribeToDrawerStore):
            return __assign({}, state, (_a = {}, _a[action.id] = {
                open: false,
            }, _a));
        case typesafe_actions_1.getType(drawers_1.drawerActions.openDrawer):
            return __assign({}, state, (_b = {}, _b[action.id] = __assign({ open: true }, action.data), _b));
        case typesafe_actions_1.getType(drawers_1.drawerActions.closeDrawer):
            return __assign({}, state, (_c = {}, _c[action.id] = {
                open: false,
            }, _c));
        default:
            return state;
    }
}
exports.default = drawers;
