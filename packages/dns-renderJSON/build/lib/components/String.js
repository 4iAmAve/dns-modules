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
var utils_1 = require("@datns/utils");
var String = (function (_super) {
    __extends(String, _super);
    function String(props) {
        var _this = _super.call(this, props) || this;
        _this.validateInput = function () {
            if (typeof _this.props.data !== 'string') {
                _this.setState({ error: 'ERROR' });
            }
        };
        _this.handleAddToClipboard = function (data) {
            _this.setState({ addToClipboardVisible: true }, function () {
                utils_1.addToClipboard(data);
                setTimeout(function () { return _this.setState({ addToClipboardVisible: false }); }, 1000);
            });
        };
        _this.state = {
            addToClipboardVisible: false,
            error: false,
            cutOff: props.cutOff,
        };
        _this.validateInput();
        return _this;
    }
    String.prototype.render = function () {
        var _this = this;
        var _a = this.props, name = _a.name, data = _a.data, cutOff = _a.cutOff, cutOffThreshold = _a.cutOffThreshold;
        var addToClipboardVisible = this.state.addToClipboardVisible;
        var value = cutOff && data.length >= cutOffThreshold ? data.substr(0, cutOffThreshold) + "..." : data;
        return (React.createElement("div", { className: "render-json--flex render-json_string" },
            React.createElement("div", { className: "render-json_label" },
                name,
                ": "),
            React.createElement("div", { className: "render-json_type" }, "string"),
            React.createElement("div", { className: "render-json_data " + data, title: data, onClick: function () { return _this.handleAddToClipboard(data); } }, "\"" + value + "\""),
            React.createElement("div", { className: "rj_added-to-clipboard " + (addToClipboardVisible ? 'rj_added-to-clipboard--open' : '') }, "Added value to Clipboard")));
    };
    return String;
}(React.Component));
exports.String = String;
