"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typesafe_actions_1 = require("typesafe-actions");
var notifications_1 = require("../actions/notifications");
var initialState = {
    items: [],
};
function notifications(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case typesafe_actions_1.getType(notifications_1.notificationActions.updateNotifications):
            return {
                items: action.notifications,
            };
        case typesafe_actions_1.getType(notifications_1.notificationActions.closeNotification):
            return {
                items: state.items.filter(function (item) { return item.id !== action.id; }),
            };
        default:
            return state;
    }
}
exports.default = notifications;
