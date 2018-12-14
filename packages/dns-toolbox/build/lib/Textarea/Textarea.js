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
require("./Textarea.css");
var Textarea = (function (_super) {
    __extends(Textarea, _super);
    function Textarea(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (e) {
            var autoExpand = _this.props.autoExpand;
            var _a = _this.state, initialRowHeight = _a.initialRowHeight, initialRows = _a.initialRows;
            var taRows = e.target.value.split('\n').length;
            if (initialRows > taRows) {
                taRows = initialRows;
            }
            var height = _this.state.textareaHeight;
            if (autoExpand && initialRowHeight) {
                height = taRows * initialRowHeight;
            }
            _this.setState({
                value: e.target.value,
                textareaHeight: height
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
            initialRowHeight: null,
            initialRows: props.rows || 1,
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
        var _this = this;
        if (this.textarea) {
            var paddingOffset = 16;
            var scrollHeight = this.textarea.scrollHeight - paddingOffset;
            var rows = parseInt(this.textarea.getAttribute('rows') || '1', 10);
            this.setState({ initialRowHeight: scrollHeight / rows }, function () {
                if (_this.props.autoFocus) {
                    _this.textarea.focus();
                }
            });
        }
    };
    Textarea.prototype.render = function () {
        var _a = this.props, classNames = _a.classNames, onKeyUp = _a.onKeyUp, onClick = _a.onClick, onChange = _a.onChange, _b = _a.rows, rows = _b === void 0 ? 2 : _b, label = _a.label, _c = _a.required, required = _c === void 0 ? false : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.disableResize, disableResize = _e === void 0 ? false : _e, _f = _a.error, error = _f === void 0 ? null : _f, _g = _a.extraProps, extraProps = _g === void 0 ? {} : _g, _h = _a.style, style = _h === void 0 ? {} : _h, name = _a.name, _j = _a.maxHeight, maxHeight = _j === void 0 ? null : _j;
        var _k = this.state, textareaHeight = _k.textareaHeight, value = _k.value;
        var labelSmall = value && value.toString().length > 0;
        var inlineStyle = __assign({}, style, { maxHeight: maxHeight || null });
        if (textareaHeight) {
            inlineStyle = __assign({}, inlineStyle, { height: textareaHeight + "px" });
        }
        return (React.createElement("div", { className: "ta " + (classNames ? classNames : '') + " " + (disabled ? 'ta--disabled' : '') + "\n          " + (disableResize ? 'ta--resize-disabled' : '') + " " + (error ? 'ta--error' : '') + "\n        " },
            React.createElement("textarea", __assign({}, extraProps, { required: required, value: value, rows: rows, name: name ? name : label, onKeyUp: onKeyUp, onClick: onClick, onChange: onChange ? onChange : this.onChange, onFocus: this.handleFocus, onBlur: this.handleBlur, disabled: disabled, tabIndex: disabled ? -1 : 1, style: inlineStyle, ref: this.handleTextareaRef })),
            React.createElement("span", { className: "ta_bar--default" }),
            React.createElement("span", { className: "ta_bar" }),
            React.createElement("label", { className: "" + (labelSmall ? 'ta_label--small' : '') },
                label,
                required ? React.createElement("span", { className: "ta_required" }, "*") : null),
            error ? React.createElement("div", { className: "ta_error" }, error) : null));
    };
    return Textarea;
}(React.Component));
exports.Textarea = Textarea;
