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
require("./RadioButtons.css");
var RadioButtons = /** @class */ (function (_super) {
    __extends(RadioButtons, _super);
    function RadioButtons(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = function (key, button) {
            var disabled = _this.props.disabled;
            if (disabled) {
                return;
            }
            _this.setState({
                selectedButton: key,
            });
            _this.props.onClick(key, button);
        };
        _this.onChange = function () { return null; };
        _this.state = {
            selectedButton: props.selected,
        };
        return _this;
    }
    RadioButtons.prototype.componentDidUpdate = function (prevProps) {
        var prevSelected = prevProps.selected;
        var selected = this.props.selected;
        if (selected !== prevSelected) {
            this.setState({ selectedButton: selected });
        }
    };
    // @TODO add ripple to buttons
    RadioButtons.prototype.render = function () {
        var _this = this;
        var buttons = this.props.buttons;
        var selectedButton = this.state.selectedButton;
        return (React.createElement("div", { className: "radio-buttons" }, buttons.map(function (button, key) { return (React.createElement("label", { key: key, onClick: function () { return _this.onClick(key, button); } },
            React.createElement("input", { tabIndex: key + 1, type: "radio", checked: selectedButton === key, onChange: _this.onChange }),
            React.createElement("span", { className: "radio-buttons_label" }, button.label))); })));
    };
    return RadioButtons;
}(React.Component));
exports.RadioButtons = RadioButtons;
