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
var Chip_1 = require("../Chip/Chip");
var Chips = /** @class */ (function (_super) {
    __extends(Chips, _super);
    function Chips() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.deleteChip = function (chip, key) {
            _this.props.onDeleteChip(chip, key);
        };
        _this.renderChip = function (chip, key) {
            var classNames = _this.props.classNames;
            var onClick = chip.onClick || utils_1.noop;
            return (React.createElement(Chip_1.Chip, { classNames: classNames, deletable: chip.deletable, id: key, image: chip.image ? chip.image : null, key: key, payload: chip.payload, selectable: chip.selectable, title: chip.title, onClick: onClick, onDelete: function () { return _this.deleteChip(chip, key); } }));
        };
        return _this;
    }
    Chips.prototype.render = function () {
        var _this = this;
        var chips = this.props.chips;
        return (React.createElement(React.Fragment, null, chips.map(function (chip, key) { return (_this.renderChip(chip, key)); })));
    };
    Chips.defaultProps = {
        chips: [],
    };
    return Chips;
}(React.Component));
exports.Chips = Chips;
