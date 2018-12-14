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
var toolbox_1 = require("@dns/toolbox");
var utils_1 = require("@dns/utils");
var NotificationsBarProvider_1 = require("./NotificationsBarProvider");
require("./NotificationsBar.css");
var actionProvider = {
    addNotification: utils_1.noop,
    closeNotification: utils_1.noop
};
exports.getAddNotification = function () { return actionProvider.addNotification; };
exports.getCloseNotification = function () { return actionProvider.closeNotification; };
var setAddNotification = function (addNotification) { return actionProvider.addNotification = addNotification; };
var setCloseNotification = function (closeNotification) { return actionProvider.closeNotification = closeNotification; };
var NotificationsBar = (function (_super) {
    __extends(NotificationsBar, _super);
    function NotificationsBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificationsBar.prototype.render = function () {
        var _a = this.props, stacked = _a.stacked, position = _a.position;
        return (React.createElement(NotificationsBarProvider_1.default, null,
            React.createElement(NotificationsBarProvider_1.NotificationsBarContext.Consumer, null, function (_a) {
                var addNotification = _a.addNotification, closeNotification = _a.closeNotification, items = _a.items;
                setAddNotification(addNotification);
                setCloseNotification(closeNotification);
                return (React.createElement("div", { className: "notification-bar " + (position ? "notification-bar--" + position : '') }, items.map(function (item) { return (React.createElement(toolbox_1.Notification, { key: item.timestamp, item: item, stacked: stacked, decayTime: item.timeout, onCloseNotification: closeNotification, position: position })); })));
            })));
    };
    NotificationsBar.defaultProps = {
        stacked: false,
        position: 'tc',
    };
    return NotificationsBar;
}(React.Component));
exports.NotificationsBar = NotificationsBar;
