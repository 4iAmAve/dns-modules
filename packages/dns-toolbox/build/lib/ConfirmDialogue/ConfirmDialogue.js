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
var Button_1 = require("../Button/Button");
require("./ConfirmDialogue.css");
var ConfirmDialogue = (function (_super) {
    __extends(ConfirmDialogue, _super);
    function ConfirmDialogue() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleKeyup = function (e) {
            e.stopPropagation();
            e.preventDefault();
            e.nativeEvent.stopImmediatePropagation();
            if (e.keyCode === 27) {
                _this.closeDialogue();
            }
            else if (e.keyCode === 13) {
                _this.confirmDialogue();
            }
        };
        _this.confirmDialogue = function () {
            _this.props.onConfirm(true);
            if (_this.props.onClose) {
                _this.props.onClose();
            }
        };
        _this.closeDialogue = function () {
            if (_this.props.onClose) {
                _this.props.onClose();
            }
        };
        _this.handleInputRef = function (ref) { return _this._inputRef = ref && ref.focus(); };
        return _this;
    }
    ConfirmDialogue.prototype.componentDidMount = function () {
        if (this._inputRef) {
            this._inputRef.focus();
        }
    };
    ConfirmDialogue.prototype.render = function () {
        var _this = this;
        var _a = this.props, width = _a.width, height = _a.height, minHeight = _a.minHeight, withoutOffset = _a.withoutOffset, className = _a.className, title = _a.title, content = _a.content;
        var inlineStyle = {
            width: width,
            height: height,
            minHeight: minHeight,
        };
        return (React.createElement("div", { className: "\n          confirm-dialogue\n          " + (withoutOffset ? 'without-offset' : '') + "\n          " + (className ? className : '') + "\n        ", style: inlineStyle },
            React.createElement("h2", null, title),
            React.createElement("div", null,
                content ? React.createElement("p", { className: "c-d_text" }, content) : null,
                React.createElement("p", null, "Are you sure you want to proceed?")),
            React.createElement("div", null,
                React.createElement(Button_1.Button, { onClick: function () { return _this.confirmDialogue(); }, label: "Yes" }),
                React.createElement(Button_1.Button, { onClick: function () { return _this.closeDialogue(); }, label: "No" }),
                React.createElement("input", { onKeyUp: this.handleKeyup, autoFocus: true, ref: this.handleInputRef, className: "confirm-dialogue_hidden-input" }))));
    };
    ConfirmDialogue.defaultProps = {
        title: 'Confirm',
        width: '40em',
        height: 'auto',
        minHeight: '10%',
    };
    return ConfirmDialogue;
}(React.Component));
exports.ConfirmDialogue = ConfirmDialogue;
