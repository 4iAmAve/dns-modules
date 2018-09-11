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
    onConfirm: null,
    open: false,
    title: '',
    text: null,
};
function confirmDialogue(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case typesafe_actions_1.getType(actions_1.confirmDialogueActions.closeDialogue):
            return __assign({}, initialState, { open: false });
        case typesafe_actions_1.getType(actions_1.confirmDialogueActions.openDialogue):
            return __assign({}, state, action.payload.data, { open: true });
        default:
            return state;
    }
}
exports.default = confirmDialogue;
