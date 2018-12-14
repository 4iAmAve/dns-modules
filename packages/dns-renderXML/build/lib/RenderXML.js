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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var components_1 = require("./components");
require("./styles/renderXML.css");
var RenderXML = (function (_super) {
    __extends(RenderXML, _super);
    function RenderXML(props) {
        var _this = _super.call(this, props) || this;
        _this.validateInput = function () {
            if (typeof _this.props.data !== 'string') {
                console.error('@dns/renderXML error:', 'src property must be a valid string');
                _this.setState({
                    name: 'ERROR',
                    data: {
                        message: 'src property must be a valid string'
                    }
                });
            }
        };
        _this.state = __assign({}, props);
        _this.validateInput();
        return _this;
    }
    RenderXML.prototype.render = function () {
        var theme = this.props.theme;
        return (React.createElement("div", { className: "render-xml " + (theme ? "render-xml--" + theme : '') },
            React.createElement(components_1.XMLViewer, __assign({}, this.props, { curDepth: 0 }))));
    };
    RenderXML.defaultProps = {
        data: {},
        name: 'root',
        theme: 'default',
        collapsed: false,
        collapseStringsAfterLength: 0,
        shouldCollapse: false,
        sortKeys: false,
        groupArraysAfterLength: 100,
        indentWidth: 4,
        enableClipboard: true,
        displayObjectSize: true,
        displayDataTypes: true,
        onEdit: false,
        onDelete: false,
        onAdd: false,
        onSelect: false,
        iconStyle: 'triangle',
        style: {},
        validationMessage: 'Validation Error'
    };
    return RenderXML;
}(React.Component));
exports.RenderXML = RenderXML;
