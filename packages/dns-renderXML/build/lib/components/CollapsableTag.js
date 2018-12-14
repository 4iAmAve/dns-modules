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
var NodeElement_1 = require("./NodeElement");
var generateAttributes_1 = require("../utils/generateAttributes");
var CollapsableTag = (function (_super) {
    __extends(CollapsableTag, _super);
    function CollapsableTag(props) {
        var _this = _super.call(this, props) || this;
        _this.toggleCollapse = function () { return _this.setState({ collapsed: !_this.state.collapsed }); };
        _this.state = {
            collapsed: props.collapsed
        };
        return _this;
    }
    CollapsableTag.prototype.render = function () {
        var _a = this.props, curDepth = _a.curDepth, data = _a.data;
        var collapsed = this.state.collapsed;
        var nodeStringStart = '';
        var nodeStringElem = null;
        var inlineStyle = {
            marginLeft: curDepth + 1 + "em",
        };
        nodeStringStart += "<" + data.nodeName;
        var attributes = generateAttributes_1.default(data);
        if (attributes.length) {
            nodeStringStart += " " + attributes;
        }
        nodeStringStart += ">";
        if (data.children && data.children.length) {
            var element_1 = [];
            Object.keys(data.children).forEach(function (el, id) {
                return element_1.push(React.createElement("div", { key: "elem-" + curDepth + "-" + id },
                    React.createElement(NodeElement_1.default, { data: data.children[el], curDepth: curDepth + 1 })));
            });
            nodeStringElem = element_1;
        }
        return (React.createElement("div", { style: inlineStyle, key: "rx_elem-" + curDepth },
            React.createElement("span", null,
                React.createElement("i", { className: "material-icons rx_elem_toggle " + (!collapsed ? 'rx_elem_toggle--open' : ''), onClick: this.toggleCollapse }, "keyboard_arrow_down")),
            collapsed ?
                React.createElement("div", { className: "rx_elem_tag rx_elem_tag--selectable", onClick: this.toggleCollapse }, "<" + data.nodeName + " />") :
                React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "rx_elem_tag rx_elem_tag--selectable", onClick: this.toggleCollapse }, nodeStringStart),
                    React.createElement("div", { style: inlineStyle }, nodeStringElem),
                    React.createElement("div", { style: inlineStyle, className: "rx_elem_tag" }, "</" + data.nodeName + ">"))));
    };
    CollapsableTag.defaultProps = {
        data: {},
        collapsed: true,
        collapseStringsAfterLength: 0,
        shouldCollapse: false,
        indentWidth: 4,
    };
    return CollapsableTag;
}(React.Component));
exports.CollapsableTag = CollapsableTag;
exports.default = CollapsableTag;
