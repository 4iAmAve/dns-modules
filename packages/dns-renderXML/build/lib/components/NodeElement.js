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
var StringTag_1 = require("./StringTag");
var CollapsableTag_1 = require("./CollapsableTag");
var NodeElement = (function (_super) {
    __extends(NodeElement, _super);
    function NodeElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.parseXML = function () {
            var _a = _this.props, curDepth = _a.curDepth, data = _a.data;
            var value = null;
            if (!data.children.length) {
                value = React.createElement(StringTag_1.default, { data: data, curDepth: curDepth });
            }
            else {
                value = React.createElement(CollapsableTag_1.default, { data: data, curDepth: curDepth });
            }
            return value;
        };
        return _this;
    }
    NodeElement.prototype.render = function () {
        return (React.createElement(React.Fragment, null, this.parseXML()));
    };
    NodeElement.defaultProps = {
        data: '',
        collapsed: true,
        collapseStringsAfterLength: 0,
        shouldCollapse: false,
        indentWidth: 4,
    };
    return NodeElement;
}(React.Component));
exports.NodeElement = NodeElement;
exports.default = NodeElement;
