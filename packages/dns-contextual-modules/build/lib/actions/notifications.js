"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modules_1 = require("../modules");
function addNotification(notification) {
    var action = modules_1.getAddNotification();
    return action(notification);
}
exports.addNotification = addNotification;
function closeNotification(id) {
    var action = modules_1.getCloseNotification();
    return action(id);
}
exports.closeNotification = closeNotification;
