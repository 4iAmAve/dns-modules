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
exports.PopoversContext = React.createContext({
    items: {},
    openPopover: function (dialogue) { return true; },
    removePopover: function (id) { return true; }
});
var PopoversProvider = (function (_super) {
    __extends(PopoversProvider, _super);
    function PopoversProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            items: {},
        };
        _this.openPopover = function (popover) {
            var items = Object.assign({}, _this.state.items);
            items[popover.id] = __assign({}, popover);
            _this.setState({ items: items });
        };
        _this.removePopover = function (id) {
            var items = Object.assign({}, _this.state.items);
            items[id] = false;
            _this.setState({ items: items });
        };
        return _this;
    }
    PopoversProvider.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement(exports.PopoversContext.Provider, { value: __assign({}, this.state, { openPopover: this.openPopover, removePopover: this.removePopover }) }, children));
    };
    return PopoversProvider;
}(React.Component));
exports.default = PopoversProvider;
