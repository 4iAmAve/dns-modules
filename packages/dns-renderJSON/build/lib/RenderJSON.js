"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
require("./styles/renderJSON.css");
var RenderJSON = /** @class */ (function (_super) {
    __extends(RenderJSON, _super);
    function RenderJSON(props) {
        var _this = _super.call(this, props) || this;
        // make sure props are passed in as expected
        _this.validateInput = function () {
            // make sure `src` prop is valid
            if (!(_this.state.data instanceof Object) && !(_this.state.data instanceof Array)) {
                console.error('@dns/renderJSON error:', 'src property must be a valid json object');
                _this.setState({
                    name: 'ERROR',
                    data: {
                        message: 'src property must be a valid json object'
                    }
                });
            }
        };
        _this.state = __assign({}, props);
        _this.validateInput();
        return _this;
    }
    RenderJSON.prototype.render = function () {
        var theme = this.props.theme;
        return (React.createElement("div", { className: "render-json " + (theme ? "render-json--" + theme : '') },
            React.createElement(components_1.JSONViewer, __assign({}, this.props, { curDepth: 0 }))));
    };
    RenderJSON.defaultProps = {
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
    return RenderJSON;
}(React.Component));
exports.RenderJSON = RenderJSON;
