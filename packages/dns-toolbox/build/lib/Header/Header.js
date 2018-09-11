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
require("./Header.css");
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.onButtonClick = function () {
        if (this.props.onClick) {
            this.props.onClick();
        }
    };
    Header.prototype.render = function () {
        var _this = this;
        var _a = this.props, logo = _a.logo, label = _a.label;
        return (React.createElement("div", { className: "header", onClick: function () { return _this.onButtonClick(); } },
            logo,
            label));
    };
    return Header;
}(React.Component));
exports.Header = Header;
