"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var generateAttributes_1 = require("../utils/generateAttributes");
var StringTag = function (props) {
    var curDepth = props.curDepth, data = props.data;
    var nodeStringStart = '';
    var nodeStringText = null;
    var inlineStyle = {
        marginLeft: curDepth + 1 + "em",
    };
    nodeStringStart += "<" + data.nodeName;
    var attributes = generateAttributes_1.default(data);
    if (attributes.length) {
        nodeStringStart += " " + attributes;
    }
    nodeStringStart += ">";
    if (data.childNodes && data.childNodes.length) {
        var text_1 = [];
        Object.keys(data.childNodes).forEach(function (element, id) {
            if (data.childNodes[element].nodeName === '#text') {
                text_1.push(React.createElement("span", { className: "rx_elem_text", key: "xml-text-" + curDepth + "-" + id }, " " + ("" + data.childNodes[element].nodeValue).trim() + " "));
            }
        });
        nodeStringText = text_1 && text_1.length ? text_1 : null;
    }
    return (React.createElement("div", { style: inlineStyle },
        React.createElement("span", { className: "rx_elem_tag" }, nodeStringStart),
        nodeStringText,
        React.createElement("span", { className: "rx_elem_tag" }, "</ " + data.nodeName + ">")));
};
exports.default = StringTag;
