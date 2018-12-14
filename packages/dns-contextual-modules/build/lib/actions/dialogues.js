"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modules_1 = require("../modules");
function addDialogue(dialogue) {
    var action = modules_1.getAddDialogue();
    return action(dialogue);
}
exports.addDialogue = addDialogue;
function closeDialogue(id) {
    var action = modules_1.getCloseDialogue();
    return action(id);
}
exports.closeDialogue = closeDialogue;
