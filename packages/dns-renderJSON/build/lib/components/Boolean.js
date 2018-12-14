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
var Boolean = (function (_super) {
    __extends(Boolean, _super);
    function Boolean(props) {
        var _this = _super.call(this, props) || this;
        _this.validateInput = function () {
            if (typeof _this.props.data !== 'boolean') {
                _this.setState({ error: 'ERROR' });
            }
        };
        _this.state = {
            error: false,
        };
        _this.validateInput();
        return _this;
    }
    Boolean.prototype.render = function () {
        var _a = this.props, name = _a.name, data = _a.data;
        return (React.createElement("div", { className: "render-json--flex render-json_boolean" },
            React.createElement("span", { className: "render-json_label" },
                name,
                ": "),
            React.createElement("span", { className: "render-json_type" }, "boolean"),
            React.createElement("span", { className: "render-json_data" }, data ? 'true' : 'false')));
    };
    return Boolean;
}(React.Component));
exports.Boolean = Boolean;
