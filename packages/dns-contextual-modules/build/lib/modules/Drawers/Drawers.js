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
var toolbox_1 = require("@dns/toolbox");
var utils_1 = require("@dns/utils");
var DrawersProvider_1 = require("./DrawersProvider");
require("./Drawers.css");
var actionProvider = {
    addDrawer: utils_1.noop,
    closeDrawer: utils_1.noop,
    removeDrawer: utils_1.noop,
};
exports.getAddDrawer = function () { return actionProvider.addDrawer; };
exports.getCloseDrawer = function () { return actionProvider.closeDrawer; };
exports.getRemoveDrawer = function () { return actionProvider.removeDrawer; };
var setAddDrawer = function (addDrawer) { return actionProvider.addDrawer = addDrawer; };
var setCloseDrawer = function (closeDrawer) { return actionProvider.closeDrawer = closeDrawer; };
var setRemoveDrawer = function (removeDrawer) { return actionProvider.removeDrawer = removeDrawer; };
var Drawers = (function (_super) {
    __extends(Drawers, _super);
    function Drawers() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.removeDrawer = function (id) {
            var removeAction = exports.getRemoveDrawer();
            removeAction(id);
        };
        return _this;
    }
    Drawers.prototype.render = function () {
        var _this = this;
        return (React.createElement(DrawersProvider_1.default, null,
            React.createElement(DrawersProvider_1.DrawersContext.Consumer, null, function (_a) {
                var addDrawer = _a.addDrawer, closeDrawer = _a.closeDrawer, items = _a.items, removeDrawer = _a.removeDrawer;
                setAddDrawer(addDrawer);
                setCloseDrawer(closeDrawer);
                setRemoveDrawer(removeDrawer);
                return (React.createElement(React.Fragment, null, items.map(function (item, key) { return (React.createElement(toolbox_1.Drawer, __assign({}, item, { key: "drawer_" + item.id + "_" + key, onClose: function () { return _this.removeDrawer(item.id); } }))); })));
            })));
    };
    return Drawers;
}(React.Component));
exports.Drawers = Drawers;
