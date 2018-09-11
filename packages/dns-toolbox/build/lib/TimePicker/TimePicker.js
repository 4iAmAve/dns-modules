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
var utils_1 = require("@dns/utils");
require("./TimePicker.css");
var TimePicker = (function (_super) {
    __extends(TimePicker, _super);
    function TimePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.convertTime = function (props) {
            var hours = props.hours, minutes = props.minutes, seconds = props.seconds, timeString = props.timeString, timeInMs = props.timeInMs;
            var time = {
                hours: '',
                minutes: '',
                seconds: ''
            };
            if (timeInMs) {
                time = utils_1.convertMillisToTime(timeInMs);
            }
            else {
                if (hours && minutes) {
                    time = {
                        hours: hours,
                        minutes: minutes,
                        seconds: seconds,
                    };
                }
                else if (timeString) {
                    var timeArray = timeString.split(':');
                    time = {
                        hours: timeArray[0] ? timeArray[0] : false,
                        minutes: timeArray[1] ? timeArray[1] : false,
                        seconds: timeArray[2] ? timeArray[2] : false,
                    };
                }
            }
            return time;
        };
        _this.handleSelectionChange = function (e, type) {
            if (type === 'hours') {
                _this.setState({ hours: e.target.value }, function () { return _this.props.onChange(_this.state); });
            }
            else if (type === 'minutes') {
                _this.setState({ minutes: e.target.value }, function () { return _this.props.onChange(_this.state); });
            }
            else if (type === 'seconds') {
                _this.setState({ seconds: e.target.value }, function () { return _this.props.onChange(_this.state); });
            }
        };
        _this.generateSelect = function (options, selected, label) {
            var _a = _this.props, required = _a.required, nullable = _a.nullable;
            var selectedValue = parseInt(selected, 10).toString();
            return (React.createElement("div", { className: "time-picker_wrapper" },
                React.createElement("label", null, label),
                React.createElement("select", { onChange: function (e) { return _this.handleSelectionChange(e, label); }, required: required, value: selectedValue },
                    nullable ? React.createElement("option", null, "none") : null,
                    options.map(function (item, key) {
                        return React.createElement("option", { key: key }, item);
                    })),
                React.createElement("i", { className: "material-icons" }, "arrow_drop_down")));
        };
        _this.generateEmptyArray = function (length) {
            return Array.apply(null, { length: length }).map(function (value, index) {
                return index;
            });
        };
        var time = _this.convertTime(props);
        _this.state = {
            hours: time.hours,
            minutes: time.minutes,
            seconds: time.seconds,
        };
        return _this;
    }
    TimePicker.prototype.componentDidUpdate = function (prevProps) {
        var time = this.convertTime(this.props);
        var prevTime = this.convertTime(prevProps);
        if (time.hours !== prevTime.hours ||
            time.minutes !== prevTime.minutes ||
            time.seconds !== prevTime.seconds) {
            this.setState({
                hours: time.hours,
                minutes: time.minutes,
                seconds: time.seconds,
            });
        }
    };
    TimePicker.prototype.render = function () {
        var _a = this.props, classNames = _a.classNames, withoutSeconds = _a.withoutSeconds, disabled = _a.disabled;
        var _b = this.state, hours = _b.hours, minutes = _b.minutes, seconds = _b.seconds;
        var array24 = this.generateEmptyArray(24);
        var array60 = this.generateEmptyArray(60);
        return (React.createElement("div", { className: (classNames ? classNames : '') + " time-picker " + (disabled ? 'time-picker--disabled' : '') },
            hours ? this.generateSelect(array24, hours, 'hours') : null,
            minutes ? this.generateSelect(array60, minutes, 'minutes') : null,
            seconds && !withoutSeconds ? this.generateSelect(array60, seconds, 'seconds') : null));
    };
    TimePicker.defaultProps = {
        withoutSeconds: false,
        required: false,
        disabled: false,
    };
    return TimePicker;
}(React.Component));
exports.TimePicker = TimePicker;
