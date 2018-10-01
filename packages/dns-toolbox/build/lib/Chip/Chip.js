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
require("./Chip.css");
var Chip = (function (_super) {
    __extends(Chip, _super);
    function Chip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chip.prototype.render = function () {
        var _a = this.props, classNames = _a.classNames, bgColor = _a.bgColor, deletable = _a.deletable, fullWidth = _a.fullWidth, image = _a.image, id = _a.id, onClick = _a.onClick, onDelete = _a.onDelete, selectable = _a.selectable, title = _a.title;
        var textToColour = bgColor ? bgColor.toString() : utils_1.stringToColour(title);
        var textColor = utils_1.getContrastYIQ(textToColour);
        var inlineStyle = {
            backgroundColor: textToColour,
            color: textColor,
        };
        var inlineCloseStyle = {
            color: textColor,
        };
        return (React.createElement("div", { className: "\n          chip\n          " + (classNames ? classNames : '') + "\n          " + (!deletable ? 'chip--free' : '') + "\n          " + (fullWidth ? 'chip--full-width' : '') + "\n          " + (selectable ? 'chip--selectable' : '') + "\n        ", style: inlineStyle, key: id, title: title },
            image ?
                React.createElement("img", { src: image }) : null,
            React.createElement("div", { className: "chip_value " + (onClick ? 'chip_value_clickable' : ''), onClick: onClick }, title),
            deletable ?
                React.createElement("div", { className: "chip_delete-icon", onClick: onDelete, style: inlineCloseStyle },
                    React.createElement("i", { className: "material-icons" }, "close")) : null));
    };
    Chip.defaultProps = {
        deletable: false,
        title: '',
    };
    return Chip;
}(React.Component));
exports.Chip = Chip;
