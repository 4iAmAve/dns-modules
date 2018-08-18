"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typesafe_actions_1 = require("typesafe-actions");
var react_redux_typescript_1 = require("react-redux-typescript");
exports.notificationActions = {
    closeNotification: typesafe_actions_1.createAction('CLOSE_NOTIFICATION', function (id) {
        return {
            type: 'CLOSE_NOTIFICATION',
            id: id,
        };
    }),
    updateNotifications: typesafe_actions_1.createAction('UPDATE_NOTIFICATIONS', function (notifications) {
        return {
            type: 'UPDATE_NOTIFICATIONS',
            notifications: notifications,
        };
    }),
};
exports.returnOfActions = Object.values(exports.notificationActions).map(react_redux_typescript_1.getReturnOfExpression);
function addNotification(message, type, timeout) {
    if (timeout === void 0) { timeout = 5000; }
    return function (dispatch, getState) {
        var notifications = getState().notifications.items;
        notifications.push({
            id: notifications.length,
            message: message,
            type: type,
            timeout: timeout,
            timestamp: Date.now(),
        });
        dispatch(exports.notificationActions.updateNotifications(notifications));
    };
}
exports.addNotification = addNotification;
