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
var toolbox_1 = require("@dns/toolbox");
var PopoversStore_1 = require("./PopoversStore");
var Popover = (function (_super) {
    __extends(Popover, _super);
    function Popover(props) {
        var _this = _super.call(this, props) || this;
        _this.onUpdate = function (data) {
            _this.setState({ data: data });
        };
        _this.removePopover = function () {
            var removeAction = PopoversStore_1.getRemovePopover();
            if (_this.props.onClose) {
                _this.props.onClose();
            }
            return removeAction(_this.props.id);
        };
        _this.state = {
            data: null
        };
        return _this;
    }
    Popover.prototype.componentDidMount = function () {
        var subscribeAction = PopoversStore_1.getSubscribePopover();
        return subscribeAction({
            id: this.props.id,
            onUpdate: this.onUpdate
        });
    };
    Popover.prototype.render = function () {
        var data = this.state.data;
        return (React.createElement(React.Fragment, null, data ? React.createElement(toolbox_1.Popover, __assign({}, data, { onClosePopover: this.removePopover })) : null));
    };
    return Popover;
}(React.Component));
exports.Popover = Popover;
