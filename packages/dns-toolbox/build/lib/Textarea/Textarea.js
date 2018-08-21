"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./Textarea.css");
var Textarea = /** @class */ (function (_super) {
    __extends(Textarea, _super);
    function Textarea(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (e) {
            var autoExpand = _this.props.autoExpand;
            var scrollHeight = _this.textarea.scrollHeight;
            _this.setState({
                value: e.target.value,
                textareaHeight: autoExpand ? scrollHeight : _this.state.textareaHeight
            });
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
        _this.handleTextareaRef = function (ref) { return _this.textarea = ref; };
        _this.state = {
            value: props.value || '',
            labelSmall: !!props.value,
            textareaHeight: null
        };
        return _this;
    }
    Textarea.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.value !== this.props.value) {
            var value = this.props.value || '';
            this.setState({ value: value });
            if (value.toString().length > 0) {
                this.setState({ labelSmall: true });
            }
        }
    };
    Textarea.prototype.componentDidMount = function () {
        if (this.textarea && this.props.autoFocus) {
            this.textarea.focus();
        }
    };
    Textarea.prototype.render = function () {
        var _a = this.props, classNames = _a.classNames, onClick = _a.onClick, onKeyUp = _a.onKeyUp, onChange = _a.onChange, _b = _a.rows, rows = _b === void 0 ? 2 : _b, label = _a.label, _c = _a.required, required = _c === void 0 ? false : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.error, error = _e === void 0 ? null : _e, _f = _a.extraProps, extraProps = _f === void 0 ? {} : _f, _g = _a.style, style = _g === void 0 ? {} : _g, name = _a.name;
        var _h = this.state, /*labelSmall,*/ textareaHeight = _h.textareaHeight, value = _h.value;
        var labelSmall = value && value.toString().length > 0;
        var inlineStyle = __assign({}, style);
        if (textareaHeight) {
            inlineStyle = __assign({}, inlineStyle, { height: textareaHeight });
        }
        return (React.createElement("div", { className: "\n          input-group\n          " + (classNames ? classNames : '') + "\n          " + (disabled ? 'input--disabled' : '') + "\n          " + (error ? 'input--error' : '') + "\n        " },
            React.createElement("textarea", __assign({}, extraProps, { required: required, value: value, rows: rows, name: name ? name : label, onKeyUp: onKeyUp, onClick: onClick, onChange: onChange ? onChange : this.onChange, onFocus: this.handleFocus, onBlur: this.handleBlur, disabled: disabled, tabIndex: disabled ? -1 : 1, style: inlineStyle, ref: this.handleTextareaRef })),
            React.createElement("span", { className: "input_bar--default" }),
            React.createElement("span", { className: "input_bar" }),
            React.createElement("label", { className: "" + (labelSmall ? 'input_label--small' : '') },
                label,
                required ? React.createElement("span", { className: "input_required" }, "*") : null),
            error ? React.createElement("div", { className: "input_error" }, error) : null));
    };
    return Textarea;
}(React.Component));
exports.Textarea = Textarea;
