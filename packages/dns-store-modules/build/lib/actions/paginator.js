"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typesafe_actions_1 = require("typesafe-actions");
var react_redux_typescript_1 = require("react-redux-typescript");
exports.paginatorActions = {
    resetPaginator: typesafe_actions_1.createAction('RESET_PAGINATOR', function (id) {
        return {
            type: 'RESET_PAGINATOR',
            id: id,
        };
    }),
    updatePaginator: typesafe_actions_1.createAction('UPDATE_PAGINATOR', function (id, settings) {
        return {
            type: 'UPDATE_PAGINATOR',
            id: id,
            settings: settings,
        };
    }),
    subscribeToPaginatorStore: typesafe_actions_1.createAction('SUBSCRIBE_TO_PAGINATOR_STORE', function (id, settings) {
        return {
            type: 'SUBSCRIBE_TO_PAGINATOR_STORE',
            id: id,
            settings: settings,
        };
    }),
};
exports.returnOfActions = Object.values(exports.paginatorActions).map(react_redux_typescript_1.getReturnOfExpression);
