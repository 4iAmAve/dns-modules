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
var JSONViewer_1 = require("./JSONViewer");
var ObjectType = (function (_super) {
    __extends(ObjectType, _super);
    function ObjectType(props) {
        var _this = _super.call(this, props) || this;
        _this.validateInput = function () {
            var data = _this.props.data;
            if (!(data instanceof Object)) {
                _this.setState({ error: 'ERROR' });
            }
        };
        _this.generateObject = function (data) {
            return (React.createElement("div", { className: "pushed-content object-container" },
                React.createElement("div", { className: "object-content" },
                    React.createElement(JSONViewer_1.JSONViewer, { data: data, curDepth: 1 }))));
        };
        _this.getEllipsis = function () {
            var size = _this.state.size;
            if (size === 0) {
                return null;
            }
            else {
                return (React.createElement("div", { className: "render-json_node-ellipsis", onClick: _this.toggleCollapsed }, "..."));
            }
        };
        _this.toggleCollapsed = function () { return _this.setState({ collapsed: !_this.state.collapsed }); };
        _this.state = {
            error: false,
            collapsed: props.collapsed,
            size: 0,
        };
        _this.validateInput();
        return _this;
    }
    ObjectType.prototype.render = function () {
        var _a = this.props, name = _a.name, data = _a.data;
        var collapsed = this.state.collapsed;
        return (React.createElement("div", { className: "render-json--flex render-json_object" },
            React.createElement("div", { className: "render-json_label" },
                name,
                ": "),
            React.createElement("div", { className: "render-json_data" }, collapsed ?
                React.createElement("div", { className: "clickable", onClick: this.toggleCollapsed },
                    React.createElement("span", null, "{ ... }"),
                    React.createElement("span", { className: "render-json_array_count" }, Object.keys(data).length),
                    React.createElement("span", { className: "render-json_array_count" }, "items")) :
                React.createElement("div", { className: "render-json_array-content" },
                    React.createElement("div", { className: "clickable", onClick: this.toggleCollapsed },
                        React.createElement("span", null, "{"),
                        React.createElement("span", { className: "render-json_array_count" }, Object.keys(data).length),
                        React.createElement("span", { className: "render-json_array_count" }, "items")),
                    this.generateObject(data),
                    React.createElement("div", null, "}")))));
    };
    return ObjectType;
}(React.Component));
exports.ObjectType = ObjectType;
