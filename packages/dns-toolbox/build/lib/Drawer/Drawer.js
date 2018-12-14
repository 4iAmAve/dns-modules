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
var IconButton_1 = require("../IconButton/IconButton");
require("./Drawer.css");
var Drawer = (function (_super) {
    __extends(Drawer, _super);
    function Drawer(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this._visibilityTimeout = 100;
        _this._closeTimeout = 300;
        _this.makeVisible = function () {
            setTimeout(function () {
                _this.setState({ visible: true });
            }, _this._visibilityTimeout);
        };
        _this.onClose = function () {
            _this.setState({ visible: false }, function () {
                setTimeout(function () {
                    if (_this.props.onClose) {
                        _this.props.onClose(_this.props.id);
                    }
                }, _this._closeTimeout);
            });
        };
        _this.state = {
            loaded: false,
            visible: false,
        };
        _this.makeVisible();
        return _this;
    }
    Drawer.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.triggerClose && !prevProps.triggerClose) {
            this.onClose();
        }
    };
    Drawer.prototype.render = function () {
        var _a = this.props, className = _a.className, content = _a.content, fullWidth = _a.fullWidth, position = _a.position, title = _a.title, withoutCloseButton = _a.withoutCloseButton, disableCloseOnOutsideClick = _a.disableCloseOnOutsideClick;
        var visible = this.state.visible;
        return (React.createElement("div", { className: "drawer " + (visible ? 'drawer--open' : '') + " " + (className ? className : '') + " drawer--" + position },
            !disableCloseOnOutsideClick ?
                React.createElement("div", { className: "drawer_backdrop", onClick: this.onClose }) : null,
            React.createElement("div", { className: "\n            drawer_content\n            " + (fullWidth ? 'drawer_content--full-width' : '') + "\n          " },
                title ?
                    React.createElement("div", { className: "drawer_title" },
                        React.createElement("span", { className: "drawer_title" }, title),
                        React.createElement("hr", { className: "drawer_separator" })) : null,
                React.createElement("div", { className: "drawer_wrapper" }, this.state.visible && content ? content : null),
                !withoutCloseButton ?
                    React.createElement("div", { className: "drawer_close" },
                        React.createElement(IconButton_1.IconButton, { icon: 'close', type: "simple", onClick: this.onClose })) : null)));
    };
    Drawer.defaultProps = {
        disableCloseOnOutsideClick: false,
        fullWidth: false,
        id: 0,
        position: 'right',
        triggerClose: false,
        width: 'auto',
    };
    return Drawer;
}(React.Component));
exports.Drawer = Drawer;
