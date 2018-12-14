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
require("./Notification.css");
var Notification = (function (_super) {
    __extends(Notification, _super);
    function Notification(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.makeVisible = function () {
            _this.showTimeout = setTimeout(function () {
                _this.setState({ visible: true });
                clearTimeout(_this.showTimeout);
            }, _this.props.visibilityTimeout);
        };
        _this.checkForDecay = function () {
            clearTimeout(_this.checkForDecayTimeout);
            _this.checkForDecayTimeout = setTimeout(function () {
                var timeNow = Date.now();
                var decayTime = _this.props.decayTime;
                if (decayTime === undefined) {
                    decayTime = 5000;
                }
                var decayed = _this.props.item.timestamp + decayTime;
                if (decayed < timeNow) {
                    _this.setState({ visible: false });
                    _this.closeNotification();
                }
                return _this.checkForDecay();
            }, _this.props.decayTimeout);
        };
        _this.closeNotification = function () {
            _this.setState({ visible: false });
            _this.closeTimeout = setTimeout(function () {
                _this.props.onCloseNotification(_this.props.item.id);
                clearTimeout(_this.closeTimeout);
            }, _this.props.closeTimeout);
            clearTimeout(_this.checkForDecayTimeout);
        };
        _this.state = {
            visible: false,
        };
        _this.makeVisible();
        _this.checkForDecay();
        return _this;
    }
    Notification.prototype.componentWillUnmount = function () {
        clearTimeout(this.checkForDecayTimeout);
        clearTimeout(this.closeTimeout);
        clearTimeout(this.showTimeout);
    };
    Notification.prototype.render = function () {
        var _a = this.props, item = _a.item, stacked = _a.stacked, position = _a.position;
        var message = item.message, type = item.type;
        var visible = this.state.visible;
        var modColor = type === 'success' ? 'notification--success' :
            type === 'error' ? 'notification--error' :
                type === 'warning' ? 'notification--warning' : '';
        return (React.createElement("div", { className: "\n          notification\n          " + modColor + "\n          " + (visible ? 'notification--visible' : '') + "\n          " + (stacked ? 'notification--stacked' : '') + "\n          " + (position ? "notification--" + position : '') + "\n        " },
            message,
            React.createElement("div", { className: "notification_close", onClick: this.closeNotification },
                React.createElement("i", { className: "material-icons" }, "close"))));
    };
    Notification.defaultProps = {
        visibilityTimeout: 300,
        decayTime: 5000,
        decayTimeout: 5000,
        closeTimeout: 300,
        stacked: false,
        position: 'tc',
    };
    return Notification;
}(React.Component));
exports.Notification = Notification;
