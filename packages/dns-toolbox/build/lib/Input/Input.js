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
require("./Input.css");
var Input = (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (e) {
            var curCurPosEnd = e.target.selectionStart;
            var event = e;
            _this.setState({
                value: e.target.value
            });
            _this.input.selectionStart = curCurPosEnd;
            if (_this.props.onChange) {
                _this.props.onChange(event);
            }
        };
        _this.handleFocus = function (e) {
            if (!_this.state.labelSmall) {
                _this.setState({ labelSmall: true });
            }
            if (_this.props.onFocus) {
                _this.props.onFocus(e);
            }
        };
        _this.handleBlur = function (e) {
            var _a = _this.state, labelSmall = _a.labelSmall, value = _a.value;
            if (labelSmall && value.toString().length <= 0) {
                _this.setState({ labelSmall: false });
            }
            if (_this.props.onBlur) {
                _this.props.onBlur(e);
            }
        };
        _this.handleInputRef = function (ref) {
            _this.input = ref;
            if (_this.props.onGetRef) {
                _this.props.onGetRef(ref);
            }
        };
        _this.state = {
            value: props.value || '',
            labelSmall: !!props.value,
        };
        return _this;
    }
    Input.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.value !== this.props.value) {
            var value = this.props.value || '';
            this.setState({ value: value });
            if (value.toString().length > 0) {
                this.setState({ labelSmall: true });
            }
        }
    };
    Input.prototype.componentDidMount = function () {
        if (this.input && this.props.autoFocus) {
            this.input.focus();
        }
    };
    Input.prototype.render = function () {
        var _this = this;
        var _a = this.props, classNames = _a.classNames, onClick = _a.onClick, onKeyUp = _a.onKeyUp, _b = _a.type, type = _b === void 0 ? 'text' : _b, label = _a.label, _c = _a.required, required = _c === void 0 ? false : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.squared, squared = _e === void 0 ? false : _e, _f = _a.error, error = _f === void 0 ? null : _f, _g = _a.extraProps, extraProps = _g === void 0 ? {} : _g, name = _a.name;
        var value = this.state.value;
        var labelSmall = value && value.toString().length > 0;
        return (React.createElement("div", { className: "\n          input-group\n          " + (classNames ? classNames : '') + "\n          " + (disabled ? 'input--disabled' : '') + "\n          " + (error ? 'input--error' : '') + "\n          " + (squared ? 'input--not-rounded' : '') + "\n        " },
            React.createElement("input", __assign({}, extraProps, { type: type, required: required, value: value, name: name ? name : label, onKeyUp: onKeyUp, onClick: onClick, onChange: function (e) { return _this.onChange(e); }, onFocus: this.handleFocus, onBlur: this.handleBlur, disabled: disabled, tabIndex: disabled ? -1 : 1, ref: this.handleInputRef })),
            React.createElement("span", { className: "input_bar--default" }),
            React.createElement("span", { className: "input_bar" }),
            React.createElement("label", { className: "" + (labelSmall ? 'input_label--small' : '') },
                label,
                required ? React.createElement("span", { className: "input_required" }, "*") : null),
            error ? React.createElement("div", { className: "input_error" }, error) : null));
    };
    return Input;
}(React.Component));
exports.Input = Input;
