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
var Ripple_1 = require("../Ripple/Ripple");
require("./Button.css");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function (e) {
            var cursorPos = {
                top: e.clientY,
                left: e.clientX,
                time: Date.now()
            };
            var parent = e.target;
            _this.setState({ cursorPos: cursorPos, parent: parent });
            if (_this.props.onClick) {
                _this.props.onClick();
            }
        };
        _this.state = {
            cursorPos: {
                top: 0,
                left: 0,
                time: Date.now(),
            },
            parent: null,
        };
        return _this;
    }
    Button.prototype.render = function () {
        var _a = this.props, classNames = _a.classNames, color = _a.color, disabled = _a.disabled, filled = _a.filled, label = _a.label, iconBefore = _a.iconBefore, iconAfter = _a.iconAfter, raised = _a.raised, rounded = _a.rounded, style = _a.style, _b = _a.children, children = _b === void 0 ? null : _b;
        var _c = this.state, cursorPos = _c.cursorPos, parent = _c.parent;
        var buttonType = color === 'danger' ? 'button--danger' :
            color === 'warning' ? 'button--warning' :
                color === 'success' ? 'button--success' :
                    color === 'accent' ? 'button--accent' :
                        color === 'primary' ? 'button--primary' : 'button--default';
        var inlineStyle = {};
        if (style) {
            inlineStyle = __assign({}, style);
        }
        return (React.createElement("button", { className: "button " + (classNames ? classNames : '') + "\n          " + (color ? buttonType : '') + "\n          " + (raised ? 'button--raised' : '') + "\n          " + (iconBefore ? 'button--wib' : '') + "\n          " + (iconAfter ? 'button--wia' : '') + "\n          " + (rounded ? "button--rounded" : '') + "\n          " + (filled ? "button--filled" : '') + "\n        ", style: inlineStyle, disabled: disabled, onClick: this.handleClick },
            iconBefore ? React.createElement("i", { className: "material-icons" }, iconBefore) : null,
            label ? React.createElement("span", null, label) : null,
            children,
            iconAfter ? React.createElement("i", { className: "material-icons" }, iconAfter) : null,
            React.createElement(Ripple_1.Ripple, { cursorPos: cursorPos, parent: parent, classNames: "button_ripple" })));
    };
    Button.defaultProps = {
        disabled: false,
        color: 'default',
    };
    return Button;
}(React.Component));
exports.Button = Button;
