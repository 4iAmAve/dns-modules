"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var toolbox_1 = require("@dns/toolbox");
var utils_1 = require("@dns/utils");
var DialoguesProvider_1 = require("./DialoguesProvider");
require("./Dialogues.css");
var actionProvider = {
    addDialogue: utils_1.noop,
    closeDialogue: utils_1.noop,
    removeDialogue: utils_1.noop
};
exports.getAddDialogue = function () { return actionProvider.addDialogue; };
exports.getCloseDialogue = function () { return actionProvider.closeDialogue; };
var setAddDialogue = function (addDialogue) { return actionProvider.addDialogue = addDialogue; };
var setCloseDialogue = function (closeDialogue) { return actionProvider.closeDialogue = closeDialogue; };
var Dialogues = (function (_super) {
    __extends(Dialogues, _super);
    function Dialogues() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dialogues.prototype.render = function () {
        return (React.createElement(DialoguesProvider_1.default, null,
            React.createElement(DialoguesProvider_1.DialoguesContext.Consumer, null, function (_a) {
                var addDialogue = _a.addDialogue, closeDialogue = _a.closeDialogue, items = _a.items, removeDialogue = _a.removeDialogue;
                setAddDialogue(addDialogue);
                setCloseDialogue(closeDialogue);
                return (React.createElement(React.Fragment, null, items.map(function (item, key) { return (React.createElement(toolbox_1.GenericDialogue, __assign({}, item, { key: "gd__" + key, onClose: function () { return removeDialogue(item.id); } }))); })));
            })));
    };
    return Dialogues;
}(React.Component));
exports.Dialogues = Dialogues;
