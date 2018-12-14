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
require("./Tooltip.css");
var Tooltip = (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip(props) {
        var _this = _super.call(this, props) || this;
        _this.getElement = function () {
            var rootID = _this.props.rootID;
            var element = document.getElementById(rootID || 'root');
            if (element === null || element === undefined) {
                return false;
            }
            return element;
        };
        _this.handleMouseEnter = function (e) {
            var delay = _this.props.delay;
            e.persist();
            setTimeout(function () {
                var element = _this.getElement();
                if (element) {
                    element.addEventListener('click', _this.handleDocumentClick);
                }
                _this.calculatePosition(e.target.getBoundingClientRect());
            }, delay);
        };
        _this.handleMouseLeave = function () {
            var element = _this.getElement();
            if (element) {
                element.removeEventListener('click', _this.handleDocumentClick);
            }
            _this.setState({ isOpen: false });
        };
        _this.handleDocumentClick = function (evt) {
            var area = _this.tooltip;
            if (area && !area.contains(evt.target)) {
                _this.setState({ isOpen: false });
            }
        };
        _this.enhanceChild = function (child) {
            return React.cloneElement(child, {
                onTouchStart: _this.handleMouseEnter,
                onMouseEnter: _this.handleMouseEnter,
                onTouchEnd: _this.handleMouseLeave,
                onMouseLeave: _this.handleMouseLeave,
            });
        };
        _this.calculatePosition = function (targetBoundings) {
            var maxWidth = _this.props.maxWidth;
            var left = targetBoundings.left;
            var top = targetBoundings.top - 32;
            var rightBoundaryExceeded = targetBoundings.left + maxWidth > document.body.offsetWidth;
            if (rightBoundaryExceeded) {
                left = document.body.offsetWidth - maxWidth || targetBoundings.left;
            }
            if (left < 0) {
                left = targetBoundings.left;
            }
            if (top < 0) {
                top = targetBoundings.height + 16;
            }
            _this.setState({ isOpen: true, ttLeftValue: left, ttTopValue: top, });
        };
        _this.handleTtRef = function (ref) { return _this.tooltip = ref; };
        _this.state = {
            isOpen: false,
            ttTopValue: -32,
            ttLeftValue: -32,
        };
        return _this;
    }
    Tooltip.prototype.componentWillUnmount = function () {
        var element = this.getElement();
        if (element) {
            element.addEventListener('click', this.handleDocumentClick);
        }
    };
    Tooltip.prototype.render = function () {
        var _a = this.props, children = _a.children, label = _a.label, maxWidth = _a.maxWidth;
        var _b = this.state, isOpen = _b.isOpen, ttTopValue = _b.ttTopValue, ttLeftValue = _b.ttLeftValue;
        var ttStyle = {
            top: ttTopValue,
            left: ttLeftValue,
            maxWidth: maxWidth || '160'
        };
        var enhancedChildren = React.Children.map(children, this.enhanceChild);
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "\n            tooltip\n            " + (isOpen ? 'tooltip--open' : '') + "\n          ", style: ttStyle, ref: this.handleTtRef }, label),
            enhancedChildren));
    };
    Tooltip.defaultProps = {
        delay: 0,
        maxWidth: 160,
        rootID: 'root',
    };
    return Tooltip;
}(React.Component));
exports.Tooltip = Tooltip;
