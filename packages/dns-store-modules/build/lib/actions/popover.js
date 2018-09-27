"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typesafe_actions_1 = require("typesafe-actions");
var react_redux_typescript_1 = require("react-redux-typescript");
exports.popoverActions = {
    closePopover: typesafe_actions_1.createAction('CLOSE_POPOVER', function (resolve) {
        return function (id) { return resolve({ id: id }); };
    }),
    openPopover: typesafe_actions_1.createAction('OPEN_POPOVER', function (resolve) {
        return function (id) { return resolve({ id: id }); };
    }),
    subscribeToPopoverStore: typesafe_actions_1.createAction('SUBSCRIBE_TO_POPOVER_STORE', function (resolve) {
        return function (id) { return resolve({ id: id }); };
    })
};
exports.returnOfActions = Object.values(exports.popoverActions).map(react_redux_typescript_1.getReturnOfExpression);
