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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var toolbox_1 = require("@dns/toolbox");
var utils_1 = require("@dns/utils");
var ConfirmDialogueProvider_1 = require("./ConfirmDialogueProvider");
require("./ConfirmDialogue.css");
var actionProvider = {
    onConfirm: utils_1.noop,
    openConfirmDialogue: utils_1.noop,
    closeConfirmDialogue: utils_1.noop,
    removeConfirmDialogue: utils_1.noop,
};
var getOnConfirm = function () { return actionProvider.onConfirm; };
exports.getOpenConfirmDialogue = function () { return actionProvider.openConfirmDialogue; };
var getCloseConfirmDialogue = function () { return actionProvider.closeConfirmDialogue; };
var getRemoveConfirmDialogue = function () { return actionProvider.removeConfirmDialogue; };
var setOnConfirm = function (onConfirm) { return actionProvider.onConfirm = onConfirm; };
var setOpenConfirmDialogue = function (openConfirmDialogue) { return actionProvider.openConfirmDialogue = openConfirmDialogue; };
var setCloseConfirmDialogue = function (closeConfirmDialogue) { return actionProvider.closeConfirmDialogue = closeConfirmDialogue; };
var setRemoveConfirmDialogue = function (removeConfirmDialogue) { return actionProvider.removeConfirmDialogue = removeConfirmDialogue; };
var ConfirmDialogue = (function (_super) {
    __extends(ConfirmDialogue, _super);
    function ConfirmDialogue() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleKeyup = function (e) {
            e.stopPropagation();
            e.preventDefault();
            e.nativeEvent.stopImmediatePropagation();
            if (e.keyCode === 27) {
                _this.onCloseClick();
            }
            else if (e.keyCode === 13) {
                _this.onConfirmClick();
            }
        };
        _this.onConfirmClick = function () {
            var confirmAction = getOnConfirm();
            confirmAction();
            _this.onCloseClick();
        };
        _this.onCloseClick = function () {
            var closeAction = getCloseConfirmDialogue();
            var removeAction = getRemoveConfirmDialogue();
            closeAction();
            setTimeout(function () { return removeAction(); }, 300);
        };
        _this.getFooterButtons = function () {
            return (React.createElement(React.Fragment, null,
                React.createElement(toolbox_1.Button, { onClick: _this.onConfirmClick, label: "Yes", color: "primary", classNames: "_confirm-dialogue_confirm-btn" }),
                React.createElement(toolbox_1.Button, { onClick: _this.onCloseClick, label: "No", color: "danger", classNames: "_confirm-dialogue_cancel-btn" }),
                open ?
                    React.createElement("input", { onKeyUp: _this.handleKeyup, autoFocus: true, ref: _this.handleInputRef, className: "dialogue_hidden-input" }) : null));
        };
        _this.getContent = function (content) {
            return (React.createElement("div", null,
                content ? React.createElement("div", { className: "cd_content" }, content) : null,
                React.createElement("p", null, "Are you sure you want to proceed?")));
        };
        _this.handleInputRef = function (ref) { return _this._inputRef = ref && ref.focus(); };
        return _this;
    }
    ConfirmDialogue.prototype.setFocusToHiddenInput = function () {
        if (this._inputRef) {
            this._inputRef.focus();
        }
    };
    ConfirmDialogue.prototype.render = function () {
        var _this = this;
        var footer = this.getFooterButtons();
        return (React.createElement(ConfirmDialogueProvider_1.default, null,
            React.createElement(ConfirmDialogueProvider_1.ConfirmDialogueContext.Consumer, null, function (_a) {
                var closeConfirmDialogue = _a.closeConfirmDialogue, data = _a.data, openConfirmDialogue = _a.openConfirmDialogue, removeConfirmDialogue = _a.removeConfirmDialogue, triggerClose = _a.triggerClose;
                setOpenConfirmDialogue(openConfirmDialogue);
                setCloseConfirmDialogue(closeConfirmDialogue);
                setRemoveConfirmDialogue(removeConfirmDialogue);
                var content = null;
                if (data) {
                    setOnConfirm(data.onConfirm);
                    _this.setFocusToHiddenInput();
                    content = _this.getContent(data.content);
                }
                return (React.createElement(React.Fragment, null, data ?
                    React.createElement(toolbox_1.GenericDialogue, { className: 'confirm-dialogue', content: content, footer: footer, title: data.title, triggerClose: triggerClose, onClose: _this.onCloseClick }) : null));
            })));
    };
    return ConfirmDialogue;
}(React.Component));
exports.ConfirmDialogue = ConfirmDialogue;
