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
exports.NotificationsBarContext = React.createContext({
    items: [],
    addNotification: function (notification) { return true; },
    closeNotification: function (id) { return true; }
});
var NotificationsBarProvider = (function (_super) {
    __extends(NotificationsBarProvider, _super);
    function NotificationsBarProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            items: [],
        };
        _this.addNotification = function (notification) {
            var items = Object.assign([], _this.state.items);
            items.push({
                id: items.length,
                message: notification.message,
                type: notification.type,
                timeout: notification.timeout || 5000,
                timestamp: Date.now(),
            });
            _this.setState({ items: items });
            return true;
        };
        _this.closeNotification = function (id) {
            _this.setState({
                items: _this.state.items.filter(function (item) { return item.id !== id; })
            });
            return true;
        };
        return _this;
    }
    NotificationsBarProvider.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement(exports.NotificationsBarContext.Provider, { value: __assign({}, this.state, { addNotification: this.addNotification, closeNotification: this.closeNotification }) }, children));
    };
    return NotificationsBarProvider;
}(React.Component));
exports.default = NotificationsBarProvider;
