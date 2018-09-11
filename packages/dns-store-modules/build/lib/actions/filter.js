"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typesafe_actions_1 = require("typesafe-actions");
var react_redux_typescript_1 = require("react-redux-typescript");
exports.filterActions = {
    resetFilter: typesafe_actions_1.createAction('RESET_FILTER', function (resolve) {
        return function (id) { return resolve({ id: id }); };
    }),
    updateFilter: typesafe_actions_1.createAction('UPDATE_FILTER', function (resolve) {
        return function (id, settings) { return resolve({ id: id, settings: settings }); };
    }),
    subscribeToFilterStore: typesafe_actions_1.createAction('SUBSCRIBE_TO_FILTER_STORE', function (resolve) {
        return function (id, settings) { return resolve({ id: id, settings: settings }); };
    })
};
exports.returnOfActions = Object.values(exports.filterActions).map(react_redux_typescript_1.getReturnOfExpression);
