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
exports.PopoversStoreContext = React.createContext({
    openPopover: function (popover) { return true; },
    removePopover: function (id) { return true; },
    subscribePopover: function (popover) { return true; },
});
var PopoversStoreProvider = (function (_super) {
    __extends(PopoversStoreProvider, _super);
    function PopoversStoreProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._items = {};
        _this.subscribePopover = function (popover) {
            var _a;
            _this._items = __assign({}, _this._items, (_a = {}, _a[popover.id] = {
                id: popover.id,
                onUpdate: popover.onUpdate
            }, _a));
        };
        _this.openPopover = function (popover) {
            if (_this._items[popover.id]) {
                _this._items[popover.id].onUpdate(popover);
            }
        };
        _this.removePopover = function (id) {
            if (_this._items[id]) {
                _this._items[id].onUpdate(false);
            }
        };
        return _this;
    }
    PopoversStoreProvider.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement(exports.PopoversStoreContext.Provider, { value: __assign({}, this.state, { openPopover: this.openPopover, removePopover: this.removePopover, subscribePopover: this.subscribePopover }) }, children));
    };
    return PopoversStoreProvider;
}(React.Component));
exports.default = PopoversStoreProvider;
