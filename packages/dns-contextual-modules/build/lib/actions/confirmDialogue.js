"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modules_1 = require("../modules");
function openConfirmDialogue(data) {
    var action = modules_1.getOpenConfirmDialogue();
    return action(data);
}
exports.openConfirmDialogue = openConfirmDialogue;
