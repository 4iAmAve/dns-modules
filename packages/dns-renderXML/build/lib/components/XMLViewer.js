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
var XMLViewer = (function (_super) {
    __extends(XMLViewer, _super);
    function XMLViewer(props) {
        var _this = _super.call(this, props) || this;
        _this.generateAttributes = function (node) {
            var attributes = node.attributes;
            var attributesString = '';
            if (attributes && attributes.length) {
                Object.keys(attributes).forEach(function (key) {
                    return attributesString += attributes[key].name + "=\"" + attributes[key].nodeValue + "\" ";
                });
            }
            return attributesString.trim();
        };
        _this.generateNode = function (node, key) {
            var collapsed = _this.state.collapsed;
            var nodeStringStart = '';
            var nodeStringText = null;
            var nodeStringElem = null;
            var inlineStyle = {
                marginLeft: key + "em",
            };
            nodeStringStart += "<" + node.nodeName;
            var attributes = _this.generateAttributes(node);
            if (attributes.length) {
                nodeStringStart += " " + attributes;
            }
            nodeStringStart += ">";
            if (node.childNodes && node.childNodes.length) {
                var text_1 = [];
                Object.keys(node.childNodes).forEach(function (element, id) {
                    if (node.childNodes[element].nodeName === '#text') {
                        text_1.push(React.createElement("span", { style: inlineStyle, className: "rx_elem_text", key: "xml-text-" + key + "-" + id }, ("" + node.childNodes[element].nodeValue).trim()));
                    }
                });
                nodeStringText = text_1 && text_1.length ? text_1 : null;
            }
            if (node.children && node.children.length) {
                var element_1 = [];
                Object.keys(node.children).forEach(function (el, id) {
                    return element_1.push(React.createElement("div", { key: "elem-" + key + "-" + id },
                        React.createElement(NodeElement_1.NodeElement, { data: node.children[el], curDepth: key })));
                });
                nodeStringElem = element_1;
            }
            return (React.createElement(React.Fragment, { key: "rx_elem-" + key }, collapsed ?
                React.createElement("div", { style: inlineStyle, className: "rx_elem_tag" }, "<" + node.nodeName + " />") :
                React.createElement(React.Fragment, null,
                    React.createElement("div", { style: inlineStyle, className: "rx_elem_tag" }, nodeStringStart),
                    nodeStringText ? React.createElement("span", { style: inlineStyle, className: "rx_elem_text" }, nodeStringText) : null,
                    React.createElement("div", { style: inlineStyle }, nodeStringElem),
                    React.createElement("div", { style: inlineStyle, className: "rx_elem_tag" }, "</" + node.nodeName + ">"))));
        };
        _this.parseXML = function () {
            var data = _this.props.data;
            var parsed = new DOMParser().parseFromString(data, 'application/xml');
            var value = null;
            Object.keys(parsed.children).forEach(function (element) {
                return value = _this.generateNode(parsed.children[element], 0);
            });
            return value;
        };
        _this.state = {
            collapsed: props.collapsed
        };
        return _this;
    }
    XMLViewer.prototype.render = function () {
        return (React.createElement("div", { className: "render-xml_viewer" }, this.parseXML()));
    };
    XMLViewer.defaultProps = {
        data: {},
        collapsed: true,
        collapseStringsAfterLength: 0,
        shouldCollapse: false,
        indentWidth: 4,
    };
    return XMLViewer;
}(React.Component));
exports.XMLViewer = XMLViewer;
