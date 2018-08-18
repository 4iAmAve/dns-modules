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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./Expandable.css");
var Expandable = /** @class */ (function (_super) {
    __extends(Expandable, _super);
    function Expandable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Expandable.prototype.render = function () {
        var _a = this.props, children = _a.children, maxHeight = _a.maxHeight, open = _a.open;
        var styles = {
            maxHeight: open && maxHeight ? maxHeight : open ? '50vh' : 0,
        };
        return (React.createElement("div", { className: "\n          expandable\n          " + (open ? 'expandable_open' : '') + "\n        ", style: styles }, children));
    };
    return Expandable;
}(React.Component));
exports.Expandable = Expandable;
