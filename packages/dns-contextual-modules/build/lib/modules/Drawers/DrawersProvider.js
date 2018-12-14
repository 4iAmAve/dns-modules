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
exports.DrawersContext = React.createContext({
    items: [],
    addDrawer: function (drawer) { return true; },
    closeDrawer: function (id) { return true; },
    removeDrawer: function (id) { return true; }
});
var DrawersProvider = (function (_super) {
    __extends(DrawersProvider, _super);
    function DrawersProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            items: [],
        };
        _this.addDrawer = function (drawer) {
            var items = Object.assign([], _this.state.items);
            items.push(__assign({}, drawer, { content: drawer.content, id: drawer.id, triggerClose: false }));
            _this.setState({ items: items });
        };
        _this.closeDrawer = function (id) {
            var items = Object.assign([], _this.state.items);
            items = items.map(function (drawer) {
                var data = drawer;
                if (drawer.id === id) {
                    data.triggerClose = true;
                }
                return data;
            });
            _this.setState({ items: items });
        };
        _this.removeDrawer = function (id) {
            _this.setState({
                items: _this.state.items.filter(function (drawer) { return drawer.id !== id; })
            });
        };
        return _this;
    }
    DrawersProvider.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement(exports.DrawersContext.Provider, { value: __assign({}, this.state, { addDrawer: this.addDrawer, closeDrawer: this.closeDrawer, removeDrawer: this.removeDrawer }) }, children));
    };
    return DrawersProvider;
}(React.Component));
exports.default = DrawersProvider;
