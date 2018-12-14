"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modules_1 = require("../modules");
function openPopover(popover) {
    var action = modules_1.getOpenPopover();
    return action(popover);
}
exports.openPopover = openPopover;
