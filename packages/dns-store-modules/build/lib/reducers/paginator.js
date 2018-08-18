"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var typesafe_actions_1 = require("typesafe-actions");
var paginator_1 = require("../actions/paginator");
var initialState = {
    defaultState: {},
};
function paginator(state, action) {
    if (state === void 0) { state = initialState; }
    var _a, _b, _c, _d;
    switch (action.type) {
        case typesafe_actions_1.getType(paginator_1.paginatorActions.subscribeToPaginatorStore):
            return __assign({}, state, (_a = {}, _a[action.id] = action.settings, _a.defaultState = __assign({}, state.defaultState, (_b = {}, _b[action.id] = action.settings, _b)), _a));
        case typesafe_actions_1.getType(paginator_1.paginatorActions.updatePaginator):
            return __assign({}, state, (_c = {}, _c[action.id] = action.settings, _c));
        case typesafe_actions_1.getType(paginator_1.paginatorActions.resetPaginator):
            return __assign({}, state, (_d = {}, _d[action.id] = state.defaultState[action.id], _d));
        default:
            return state;
    }
}
exports.default = paginator;
