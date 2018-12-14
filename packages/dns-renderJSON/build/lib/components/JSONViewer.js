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
var Array_1 = require("./Array");
var Boolean_1 = require("./Boolean");
var Date_1 = require("./Date");
var Number_1 = require("./Number");
var Object_1 = require("./Object");
var String_1 = require("./String");
var JSONViewer = (function (_super) {
    __extends(JSONViewer, _super);
    function JSONViewer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.determineTypes = function () {
            var data = _this.props.data;
            var nodes = [];
            Object.keys(data).forEach(function (key) {
                if (typeof data[key] === 'number') {
                    nodes.push(React.createElement(Number_1.Number, { name: key, data: data[key], key: key }));
                }
                else if (typeof data[key] === 'string') {
                    var date = new Date(data[key]).getTime();
                    if (!isNaN(date)) {
                        nodes.push(React.createElement(Date_1.DateType, { name: key, data: data[key], key: key }));
                    }
                    else {
                        nodes.push(React.createElement(String_1.String, { name: key, key: key, data: data[key], cutOff: !!_this.props.collapseStringsAfterLength || false, cutOffThreshold: _this.props.collapseStringsAfterLength || 0 }));
                    }
                }
                else if (typeof data[key] === 'boolean') {
                    nodes.push(React.createElement(Boolean_1.Boolean, { name: key, data: data[key], key: key }));
                }
                else if (data[key] instanceof Array && data[key] instanceof Object) {
                    nodes.push(React.createElement(Array_1.ArrayType, { name: key, data: data[key], key: key, collapsed: true }));
                }
                else if (!(data[key] instanceof Array) && data[key] instanceof Object) {
                    nodes.push(React.createElement(Object_1.ObjectType, { name: key, data: data[key], key: key, collapsed: true }));
                }
            });
            return nodes;
        };
        return _this;
    }
    JSONViewer.prototype.render = function () {
        return (React.createElement("div", { className: "render-json_viewer" }, this.determineTypes()));
    };
    JSONViewer.defaultProps = {
        data: {},
        collapsed: false,
        collapseStringsAfterLength: 0,
        shouldCollapse: false,
        indentWidth: 4,
    };
    return JSONViewer;
}(React.Component));
exports.JSONViewer = JSONViewer;
