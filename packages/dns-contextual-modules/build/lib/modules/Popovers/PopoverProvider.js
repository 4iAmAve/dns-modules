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
exports.PopoverContext = React.createContext({
    data: null,
    id: 0,
    initPopover: function (id) { return true; },
    updatePopover: function (dialogue) { return true; },
});
var PopoverProvider = (function (_super) {
    __extends(PopoverProvider, _super);
    function PopoverProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            data: null,
            id: 0
        };
        _this.initPopover = function (id) {
            _this.setState({ id: id });
        };
        _this.updatePopover = function (data) {
            if (data && (data.id === _this.state.id)) {
                _this.setState({ data: data });
            }
        };
        return _this;
    }
    PopoverProvider.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement(exports.PopoverContext.Provider, { value: __assign({}, this.state, { initPopover: this.initPopover, updatePopover: this.updatePopover }) }, children));
    };
    return PopoverProvider;
}(React.Component));
exports.default = PopoverProvider;
