"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var toolbox_1 = require("@dns/toolbox");
var utils_1 = require("@dns/utils");
var confirmDialogue_1 = require("../../actions/confirmDialogue");
require("./ConfirmDialogue.css");
var ConfirmDialogue = /** @class */ (function (_super) {
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
        _this.onCloseClick = function () {
            _this.props.onCloseDialogue();
        };
        _this.onConfirmClick = function () {
            _this.props.confirmDialogue.onConfirm();
            _this.props.onCloseDialogue();
        };
        _this.handleInputRef = function (ref) { return _this.inputRef = ref && ref.focus(); };
        return _this;
    }
    ConfirmDialogue.prototype.render = function () {
        var _this = this;
        var _a = this.props, confirmDialogue = _a.confirmDialogue, classNames = _a.classNames;
        var open = confirmDialogue.open, title = confirmDialogue.title, text = confirmDialogue.text;
        return (React.createElement("div", { className: "\n          dialogue\n          " + (open ? 'dialogue_open' : '') + "\n          " + (classNames ? classNames : '') + "\n        " },
            React.createElement("div", { className: "dialogue-back-drop", onClick: function () { return _this.onCloseClick(); } }),
            React.createElement("div", { className: "dialogue-container confirm" },
                React.createElement("div", { className: "dialogue-container_content" },
                    React.createElement("h2", null, title),
                    React.createElement("div", null,
                        text ? React.createElement("p", { className: "c-d_text" }, text) : null,
                        React.createElement("p", null, "Are you sure you want to proceed?")),
                    React.createElement("div", null,
                        React.createElement(toolbox_1.Button, { onClick: this.onConfirmClick, label: "Yes", color: "primary", classNames: "_confirm-dialogue_confirm-btn" }),
                        React.createElement(toolbox_1.Button, { onClick: this.onCloseClick, label: "No", color: "danger", classNames: "_confirm-dialogue_cancel-btn" }),
                        open ?
                            React.createElement("input", { onKeyUp: this.handleKeyup, autoFocus: true, ref: this.handleInputRef, className: "dialogue_hidden-input" }) : null)))));
    };
    ConfirmDialogue.defaultProps = {
        confirmDialogue: {
            title: null,
            text: null,
            open: false,
            onConfirm: utils_1.noop,
        },
    };
    return ConfirmDialogue;
}(React.Component));
var mapStateToProps = function (state) { return ({
    confirmDialogue: state.confirmDialogue,
}); };
var mapDispatchToProps = function (dispatch) { return ({
    onCloseDialogue: function () { return dispatch(confirmDialogue_1.confirmDialogueActions.closeDialogue()); },
}); };
exports.connectedConfirmDialogue = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ConfirmDialogue);
