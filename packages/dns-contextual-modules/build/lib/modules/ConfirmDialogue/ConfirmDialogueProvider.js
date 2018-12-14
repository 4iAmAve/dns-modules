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
exports.ConfirmDialogueContext = React.createContext({
    data: null,
    triggerClose: false,
    openConfirmDialogue: function (data) { return true; },
    closeConfirmDialogue: function () { return true; },
    removeConfirmDialogue: function () { return true; },
});
var ConfirmDialogueProvider = (function (_super) {
    __extends(ConfirmDialogueProvider, _super);
    function ConfirmDialogueProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            data: null,
            triggerClose: false,
        };
        _this.openConfirmDialogue = function (data) {
            var dialogueData = {
                title: data.title || 'Confirm',
                content: data.content || null,
                onConfirm: data.onConfirm
            };
            _this.setState({ data: dialogueData, triggerClose: false });
        };
        _this.closeConfirmDialogue = function () {
            _this.setState({ triggerClose: true });
        };
        _this.removeConfirmDialogue = function () {
            _this.setState({ data: null, triggerClose: false });
        };
        return _this;
    }
    ConfirmDialogueProvider.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement(exports.ConfirmDialogueContext.Provider, { value: __assign({}, this.state, { openConfirmDialogue: this.openConfirmDialogue, closeConfirmDialogue: this.closeConfirmDialogue, removeConfirmDialogue: this.removeConfirmDialogue }) }, children));
    };
    return ConfirmDialogueProvider;
}(React.Component));
exports.default = ConfirmDialogueProvider;
