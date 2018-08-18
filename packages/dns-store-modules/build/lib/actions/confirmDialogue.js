"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typesafe_actions_1 = require("typesafe-actions");
var react_redux_typescript_1 = require("react-redux-typescript");
exports.confirmDialogueActions = {
    closeDialogue: typesafe_actions_1.createAction('CLOSE_CONFIRM_DIALOGUE', function () {
        return {
            type: 'CLOSE_CONFIRM_DIALOGUE',
        };
    }),
    openDialogue: typesafe_actions_1.createAction('OPEN_CONFIRM_DIALOGUE', function (data) {
        return {
            type: 'OPEN_CONFIRM_DIALOGUE',
            data: data,
        };
    }),
};
exports.returnOfActions = Object.values(exports.confirmDialogueActions).map(react_redux_typescript_1.getReturnOfExpression);
