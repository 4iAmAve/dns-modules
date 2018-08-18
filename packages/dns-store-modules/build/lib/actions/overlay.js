"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typesafe_actions_1 = require("typesafe-actions");
var react_redux_typescript_1 = require("react-redux-typescript");
exports.overlayActions = {
    closeOverlay: typesafe_actions_1.createAction('CLOSE_OVERLAY', function (id) {
        return {
            type: 'CLOSE_OVERLAY',
            id: id,
        };
    }),
    openOverlay: typesafe_actions_1.createAction('OPEN_OVERLAY', function (id) {
        return {
            type: 'OPEN_OVERLAY',
            id: id,
        };
    }),
    subscribeToOverlayStore: typesafe_actions_1.createAction('SUBSCRIBE_TO_OVERLAY_STORE', function (id) {
        return {
            type: 'SUBSCRIBE_TO_OVERLAY_STORE',
            id: id,
        };
    }),
};
exports.returnOfActions = Object.values(exports.overlayActions).map(react_redux_typescript_1.getReturnOfExpression);
