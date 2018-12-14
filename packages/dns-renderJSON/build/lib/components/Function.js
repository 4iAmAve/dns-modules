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
var Function = (function (_super) {
    __extends(Function, _super);
    function Function(props) {
        var _this = _super.call(this, props) || this;
        _this.validateInput = function () {
            if (typeof _this.props.data !== 'function') {
                _this.setState({ error: 'ERROR' });
            }
        };
        _this.getFunctionDisplay = function (collapsed) {
            var data = _this.props.data;
            if (collapsed) {
                return (React.createElement("span", null,
                    data.toString().slice(9, -1).replace(/\{[\s\S]+/, ''),
                    React.createElement("span", { className: "function-collapsed", style: { fontWeight: 'bold' } },
                        React.createElement("span", null, '{'),
                        React.createElement("span", { className: 'render-json_function-dots' }, "..."),
                        React.createElement("span", null, '}'))));
            }
            else {
                return data.toString().slice(9, -1);
            }
        };
        _this.toggleCollapsed = function () { return _this.setState({ collapsed: !_this.state.collapsed }); };
        _this.state = __assign({ error: false, collapsed: props.collapsed }, props);
        _this.validateInput();
        return _this;
    }
    Function.prototype.render = function () {
        var name = this.props.name;
        var collapsed = this.state.collapsed;
        return (React.createElement("div", { className: "render-json--flex render-json_function" },
            React.createElement("div", { onClick: this.toggleCollapsed }),
            React.createElement("div", { className: "render-json_label" },
                name,
                ": "),
            React.createElement("div", { className: "render-json_type" }, "function"),
            React.createElement("div", null, this.getFunctionDisplay(collapsed))));
    };
    Function.defaultProps = {};
    return Function;
}(React.Component));
exports.Function = Function;
