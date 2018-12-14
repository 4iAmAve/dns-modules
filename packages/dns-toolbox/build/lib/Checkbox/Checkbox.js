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
require("./Checkbox.css");
var Checkbox = (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.toggleChecked = function () {
            _this.setState({
                checked: !_this.state.checked,
            }, function () { return _this.props.onChange(_this.props.id, _this.state.checked); });
        };
        _this.state = {
            checked: _this.props.checked || false,
        };
        return _this;
    }
    Checkbox.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.checked !== prevProps.checked) {
            this.setState({ checked: this.props.checked || false });
        }
    };
    Checkbox.prototype.render = function () {
        var _this = this;
        var _a = this.props, classNames = _a.classNames, labelBefore = _a.labelBefore, labelAfter = _a.labelAfter, disabled = _a.disabled;
        return (React.createElement("div", { className: "\n          " + (classNames ? classNames : '') + " checkbox\n          " + (disabled ? 'checkbox--disabled' : '') + "\n        ", onClick: function () { return _this.toggleChecked(); } },
            labelBefore ? labelBefore : null,
            React.createElement("input", { type: "checkbox", checked: this.state.checked, onChange: function () { return null; } }),
            labelAfter ? labelAfter : null));
    };
    return Checkbox;
}(React.Component));
exports.Checkbox = Checkbox;
