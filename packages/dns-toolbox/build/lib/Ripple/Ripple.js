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
require("./Ripple.css");
var Ripple = (function (_super) {
    __extends(Ripple, _super);
    function Ripple(props) {
        var _this = _super.call(this, props) || this;
        _this.rippling = function (cursorPos, parent) {
            var $button = parent;
            var buttonPos = $button.getBoundingClientRect();
            var buttonWidth = $button.offsetWidth;
            var buttonHeight = $button.offsetHeight;
            var rippleWidthShouldBe = Math.max(buttonHeight, buttonWidth);
            var centerize = rippleWidthShouldBe / 2;
            _this.setState({
                animate: true,
                width: rippleWidthShouldBe,
                height: rippleWidthShouldBe,
                top: cursorPos.top - buttonPos.top - centerize,
                left: cursorPos.left - buttonPos.left - centerize
            });
        };
        _this.state = {
            animate: false,
            width: 0,
            height: 0,
            top: 0,
            left: 0
        };
        return _this;
    }
    Ripple.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        var cursorPos = prevProps.cursorPos;
        if (cursorPos.time !== this.props.cursorPos.time) {
            if (this.state.animate) {
                this.setState({ animate: false }, function () {
                    _this.rippling(_this.props.cursorPos, _this.props.parent);
                });
            }
            else {
                this.rippling(this.props.cursorPos, this.props.parent);
            }
        }
    };
    Ripple.prototype.render = function () {
        var _a = this.state, animate = _a.animate, height = _a.height, left = _a.left, top = _a.top, width = _a.width;
        var _b = this.props, classNames = _b.classNames, inlineStyle = _b.inlineStyle;
        var style = __assign({}, inlineStyle, { top: top + "px", left: left + "px", width: width + "px", height: height + "px" });
        return (React.createElement("div", { className: "ripple " + (animate ? 'ripple--animate' : '') + " " + (classNames ? classNames : ''), style: style }));
    };
    return Ripple;
}(React.Component));
exports.Ripple = Ripple;
