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
var react_redux_1 = require("react-redux");
var toolbox_1 = require("@dns/toolbox");
var notifications_1 = require("../../actions/notifications");
require("./NotificationBar.css");
var NotificationBar = /** @class */ (function (_super) {
    __extends(NotificationBar, _super);
    function NotificationBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificationBar.prototype.render = function () {
        var _a = this.props, notifications = _a.notifications, onCloseNotification = _a.onCloseNotification, stacked = _a.stacked, position = _a.position;
        var items = notifications && notifications.items ? notifications.items : [];
        return (React.createElement("div", { className: "notification-bar " + (position ? "notification-bar--" + position : '') }, items.map(function (item) { return (React.createElement(toolbox_1.Notification, { key: item.timestamp, item: item, stacked: stacked, decayTime: item.timeout, onCloseNotification: onCloseNotification, position: position })); })));
    };
    NotificationBar.defaultProps = {
        stacked: false,
        position: 'tc',
    };
    return NotificationBar;
}(React.Component));
var mapStateToProps = function (state) { return ({
    notifications: state.notifications,
}); };
var mapDispatchToProps = function (dispatch) { return ({
    onCloseNotification: function (id) { return dispatch(notifications_1.notificationActions.closeNotification(id)); },
}); };
exports.connectedNotficationBar = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(NotificationBar);
