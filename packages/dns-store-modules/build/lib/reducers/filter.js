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
var actions_1 = require("../actions");
var initialState = {
    defaultState: {},
};
function filter(state, action) {
    if (state === void 0) { state = initialState; }
    var _a, _b, _c, _d;
    switch (action.type) {
        case typesafe_actions_1.getType(actions_1.filterActions.subscribeToFilterStore):
            return __assign({}, state, (_a = {}, _a[action.payload.id] = action.payload.settings, _a.defaultState = __assign({}, state.defaultState, (_b = {}, _b[action.payload.id] = action.payload.settings, _b)), _a));
        case typesafe_actions_1.getType(actions_1.filterActions.updateFilter):
            return __assign({}, state, (_c = {}, _c[action.payload.id] = action.payload.settings, _c));
        case typesafe_actions_1.getType(actions_1.filterActions.resetFilter):
            return __assign({}, state, (_d = {}, _d[action.payload.id] = state.defaultState[action.payload.id], _d));
        default:
            return state;
    }
}
exports.default = filter;
