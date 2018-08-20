"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./Expandable.css");
exports.Expandable = function (props) {
    var children = props.children, maxHeight = props.maxHeight, open = props.open, className = props.className;
    var styles = {
        maxHeight: open && maxHeight ? maxHeight : open ? '50vh' : 0,
    };
    return (React.createElement("div", { className: "expandable " + (open ? 'expandable_open' : '') + " " + (className ? className : ''), style: styles }, children));
};
