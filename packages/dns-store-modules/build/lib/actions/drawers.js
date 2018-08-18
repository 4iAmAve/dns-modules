"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typesafe_actions_1 = require("typesafe-actions");
var react_redux_typescript_1 = require("react-redux-typescript");
exports.drawerActions = {
    closeDrawer: typesafe_actions_1.createAction('CLOSE_DRAWER', function (id) {
        return {
            type: 'CLOSE_DRAWER',
            id: id,
        };
    }),
    openDrawer: typesafe_actions_1.createAction('OPEN_DRAWER', function (id, data) {
        return {
            type: 'OPEN_DRAWER',
            id: id,
            data: data,
        };
    }),
    subscribeToDrawerStore: typesafe_actions_1.createAction('SUBSCRIBE_TO_DRAWER_STORE', function (id) {
        return {
            type: 'SUBSCRIBE_TO_DRAWER_STORE',
            id: id,
        };
    }),
};
exports.returnOfActions = Object.values(exports.drawerActions).map(react_redux_typescript_1.getReturnOfExpression);
