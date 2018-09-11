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
var utils_1 = require("@dns/utils");
var DateType = (function (_super) {
    __extends(DateType, _super);
    function DateType(props) {
        var _this = _super.call(this, props) || this;
        _this.validateInput = function () {
            var date = new Date(_this.props.data).getTime();
            if (isNaN(date)) {
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
        };
        _this.validateInput();
        return _this;
    }
    DateType.prototype.render = function () {
        var _this = this;
        var _a = this.props, data = _a.data, name = _a.name;
        var addToClipboardVisible = this.state.addToClipboardVisible;
        var display_options = {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        var date = new Date(data).toLocaleString('en-us', display_options);
        return (React.createElement("div", { className: "render-json--flex render-json_date" },
            React.createElement("div", { className: "render-json_label" },
                name,
                ": "),
            React.createElement("div", { className: "render-json_type" }, "date"),
            React.createElement("div", { className: "render-json_date-value", title: data, onClick: function () { return _this.handleAddToClipboard(data); } }, date),
            React.createElement("div", { className: "rj_added-to-clipboard " + (addToClipboardVisible ? 'rj_added-to-clipboard--open' : '') }, "Added value to Clipboard")));
    };
    return DateType;
}(React.Component));
exports.DateType = DateType;
