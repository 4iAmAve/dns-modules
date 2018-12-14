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
require("./NativeSelect.css");
var NativeSelect = (function (_super) {
    __extends(NativeSelect, _super);
    function NativeSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleSelectionChange = function (e, type) {
            var _a = _this.props, _b = _a.label, label = _b === void 0 ? null : _b, _c = _a.id, id = _c === void 0 ? null : _c;
            _this.props.onChange({
                label: label,
                id: id,
                value: e.target.value
            });
        };
        _this.generateSelect = function (options, label) {
            var _a = _this.props, defaultSelected = _a.defaultSelected, required = _a.required, nullable = _a.nullable;
            var selectedValue = defaultSelected ? defaultSelected.toString() : '0';
            return (React.createElement("div", { className: "native-select-wrapper" },
                React.createElement("label", null, label),
                React.createElement("select", { onChange: function (e) { return _this.handleSelectionChange(e, label); }, required: required, value: parseInt(selectedValue, 10) },
                    nullable ? React.createElement("option", null, "none") : null,
                    options.map(function (item, key) {
                        return React.createElement("option", { key: key, value: key }, item);
                    })),
                React.createElement("i", { className: "material-icons" }, "arrow_drop_down")));
        };
        _this.generateEmptyArray = function (length) {
            return Array.apply(null, { length: length }).map(function (value, index) {
                return index;
            });
        };
        return _this;
    }
    NativeSelect.prototype.render = function () {
        var _a = this.props, selection = _a.selection, label = _a.label, classNames = _a.classNames, disabled = _a.disabled;
        return (React.createElement("div", { className: (classNames ? classNames : '') + " native-select " + (disabled ? 'native-select--disabled' : '') }, this.generateSelect(selection, label || '')));
    };
    NativeSelect.defaultProps = {
        required: false,
        disabled: false,
    };
    return NativeSelect;
}(React.Component));
exports.NativeSelect = NativeSelect;
