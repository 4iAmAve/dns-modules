"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typesafe_actions_1 = require("typesafe-actions");
var react_redux_typescript_1 = require("react-redux-typescript");
exports.paginatorActions = {
    resetPaginator: typesafe_actions_1.createAction('RESET_PAGINATOR', function (resolve) {
        return function (id) { return resolve({ id: id }); };
    }),
    updatePaginator: typesafe_actions_1.createAction('UPDATE_PAGINATOR', function (resolve) {
        return function (id, settings) { return resolve({ id: id, settings: settings }); };
    }),
    subscribeToPaginatorStore: typesafe_actions_1.createAction('SUBSCRIBE_TO_PAGINATOR_STORE', function (resolve) {
        return function (id, settings) { return resolve({ id: id, settings: settings }); };
    }),
};
exports.returnOfActions = Object.values(exports.paginatorActions).map(react_redux_typescript_1.getReturnOfExpression);
