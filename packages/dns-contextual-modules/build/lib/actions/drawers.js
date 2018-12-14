"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modules_1 = require("../modules");
function addDrawer(drawer) {
    var action = modules_1.getAddDrawer();
    return action(drawer);
}
exports.addDrawer = addDrawer;
function closeDrawer(id) {
    var action = modules_1.getCloseDrawer();
    return action(id);
}
exports.closeDrawer = closeDrawer;
