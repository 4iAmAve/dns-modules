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
var entry_nostyle_1 = require("react-calendar/dist/entry.nostyle");
var utils_1 = require("@dns/utils");
var Input_1 = require("../Input/Input");
var SelectDropdown_1 = require("../SelectDropdown/SelectDropdown");
require("./DatePicker.css");
var DatePicker = /** @class */ (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.getElement = function () {
            var rootID = _this.props.rootID;
            _this.root = document.getElementById(rootID || 'root');
            if (_this.root === null || _this.root === undefined) {
                return;
            }
            return _this.root;
        };
        _this.handleEventListeners = function (type) {
            var element = _this.getElement();
            if (element) {
                if (type === 'add') {
                    element.addEventListener('click', _this.handleDocumentClick);
                }
                else {
                    element.removeEventListener('click', _this.handleDocumentClick);
                }
            }
        };
        _this.handleDocumentClick = function (evt) {
            var area = _this.datePicker;
            if (area && !area.contains(evt.target)) {
                _this.setState({ calendarVisible: false });
            }
        };
        _this.handleOnBlur = function () {
            _this.setState({ calendarVisible: false });
        };
        _this.handleClear = function () {
            _this.setState({ value: null, rawValue: _this.today });
            if (_this.props.onChange) {
                _this.props.onChange(null);
            }
        };
        _this.handleCalendarChange = function (e) {
            var value = _this.buildDateTimeString(e, _this.state.hours, _this.state.minutes);
            _this.setState({
                value: value,
                rawValue: e,
                calendarVisible: false,
            });
            if (_this.props.onChange) {
                var dateTime = new Date(value);
                _this.props.onChange(dateTime);
            }
        };
        _this.onHoursSelection = function (e) {
            var value = _this.buildDateTimeString(_this.state.rawValue, e.label, _this.state.minutes);
            _this.setState({ hours: e.label, value: value });
            if (_this.props.onChange) {
                var dateTime = new Date(value);
                _this.props.onChange(dateTime);
            }
        };
        _this.onMinutesSelection = function (e) {
            var value = _this.buildDateTimeString(_this.state.rawValue, _this.state.hours, e.label);
            _this.setState({ minutes: e.label, value: value });
            if (_this.props.onChange) {
                var dateTime = new Date(value);
                _this.props.onChange(dateTime);
            }
        };
        _this.onChange = function (e) {
            _this.setState({
                value: e.target.value,
            });
        };
        _this.handleInputFocus = function (e) {
            var _a = e.target.getBoundingClientRect(), top = _a.top, height = _a.height;
            var left = _this.datePicker.getBoundingClientRect().left;
            var _b = _this.root.getBoundingClientRect(), width = _b.width, rootHeight = _b.height;
            if (left + 350 > width) {
                left = width - 366;
            }
            else if (left < 0) {
                left = 16;
            }
            if (top + 350 > rootHeight) {
                top = rootHeight - 350;
            }
            else if (top < 0) {
                top = 16;
            }
            _this.setState({
                cTop: top + height + 8,
                cLeft: left,
                calendarVisible: true,
            });
        };
        _this.generateOptions = function (limit) {
            var options = [];
            var i = 0;
            while (i < limit) {
                options.push({ key: i, label: "" + i, selected: i === 0 || false });
                i++;
            }
            return options;
        };
        _this.handleRef = function (ref) { return _this.datePicker = ref; };
        _this.buildDateTimeString = function (date, hours, minutes, seconds) {
            var withTimeSelection = _this.props.withTimeSelection;
            var value = utils_1.parseDate(date.toString());
            if (withTimeSelection) {
                var hoursString = hours.toString().length === 1 ? "0" + hours : hours;
                var minutesString = minutes.toString().length === 1 ? "0" + minutes : minutes;
                value = value + " " + hoursString + ":" + minutesString;
            }
            return value;
        };
        _this.today = new Date();
        var value = null;
        if (props.value) {
            value = _this.buildDateTimeString(props.value);
        }
        _this.state = {
            value: value,
            rawValue: props.value ? props.value : _this.today,
            cTop: 0,
            cLeft: 0,
            calendarVisible: false,
            hours: 0,
            minutes: 0
        };
        return _this;
    }
    DatePicker.prototype.componentDidMount = function () {
        this.handleEventListeners('add');
    };
    DatePicker.prototype.componentDidUpdate = function (prevProps) {
        var date = new Date(this.props.value).getTime();
        var prevDate = new Date(prevProps.value).getTime();
        if (date !== prevDate && !isNaN(date)) {
            var value = utils_1.parseDate(this.props.value.toString());
            if (this.props.withTimeSelection) {
                value = utils_1.parseDateAndTime(this.props.value.toString());
            }
            this.setState({ value: value });
        }
    };
    DatePicker.prototype.componentWillUnmount = function () {
        this.handleEventListeners();
    };
    DatePicker.prototype.render = function () {
        var _a = this.props, classNames = _a.classNames, onClick = _a.onClick, onKeyUp = _a.onKeyUp, label = _a.label, _b = _a.required, required = _b === void 0 ? false : _b, iconClass = _a.iconClass, icon = _a.icon, calendarProps = _a.calendarProps, calendarClassName = _a.calendarClassName, _c = _a.clearable, clearable = _c === void 0 ? true : _c, withTimeSelection = _a.withTimeSelection;
        var _d = this.state, value = _d.value, cTop = _d.cTop, cLeft = _d.cLeft, calendarVisible = _d.calendarVisible;
        var dateValue = value && value.toString().length ? value : this.today;
        var calendarValue = new Date(dateValue);
        var calendarInlineStyle = {
            top: cTop,
            left: cLeft,
        };
        var hourOptions = this.generateOptions(24);
        var minutesOptions = this.generateOptions(60);
        return (React.createElement("div", { className: "date-picker " + (classNames ? classNames : '') + " " + (clearable ? 'date-picker_clearable' : ''), ref: this.handleRef },
            React.createElement(Input_1.Input, { required: required, onKeyUp: onKeyUp, onClick: onClick, value: value || '', label: label, classNames: "dp_input", onFocus: this.handleInputFocus, onChange: this.onChange }),
            React.createElement("i", { className: "material-icons dp_icon dp_calendar-icon " + (iconClass ? iconClass : ''), onClick: this.handleInputFocus }, icon),
            clearable ?
                React.createElement("i", { className: "material-icons dp_icon", onClick: this.handleClear }, "close") : null,
            calendarVisible ?
                React.createElement("div", { className: "dp_calendar", style: calendarInlineStyle },
                    React.createElement(entry_nostyle_1.default, __assign({ className: calendarClassName, onChange: this.handleCalendarChange, value: calendarValue || null }, calendarProps)),
                    withTimeSelection ?
                        React.createElement("div", { className: "dp_time-selection" },
                            React.createElement(SelectDropdown_1.SelectDropdown, { selectedValue: 0, options: hourOptions, label: 'Hours', onChange: this.onHoursSelection, resetable: false }),
                            React.createElement(SelectDropdown_1.SelectDropdown, { selectedValue: 0, options: minutesOptions, label: 'Minutes', onChange: this.onMinutesSelection, resetable: false }))
                        : null) : null));
    };
    DatePicker.defaultProps = {
        deletable: true,
        icon: 'date_range',
        rootID: 'root',
        withTimeSelection: false
    };
    return DatePicker;
}(React.Component));
exports.DatePicker = DatePicker;
