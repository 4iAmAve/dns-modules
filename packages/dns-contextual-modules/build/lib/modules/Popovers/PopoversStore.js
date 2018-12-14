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
var utils_1 = require("@dns/utils");
var PopoversStoreProvider_1 = require("./PopoversStoreProvider");
var actionProvider = {
    openPopover: utils_1.noop,
    removePopover: utils_1.noop,
    subscribePopover: utils_1.noop,
};
exports.getOpenPopover = function () { return actionProvider.openPopover; };
exports.getRemovePopover = function () { return actionProvider.removePopover; };
exports.getSubscribePopover = function () { return actionProvider.subscribePopover; };
var setOpenPopover = function (openPopover) { return actionProvider.openPopover = openPopover; };
var setRemovePopover = function (removePopover) { return actionProvider.removePopover = removePopover; };
var setSubscribePopover = function (subscribePopover) { return actionProvider.subscribePopover = subscribePopover; };
var PopoversStore = (function (_super) {
    __extends(PopoversStore, _super);
    function PopoversStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PopoversStore.prototype.render = function () {
        return (React.createElement(PopoversStoreProvider_1.default, null,
            React.createElement(PopoversStoreProvider_1.PopoversStoreContext.Consumer, null, function (_a) {
                var openPopover = _a.openPopover, removePopover = _a.removePopover, subscribePopover = _a.subscribePopover;
                setOpenPopover(openPopover);
                setRemovePopover(removePopover);
                setSubscribePopover(subscribePopover);
                return (React.createElement(React.Fragment, null));
            })));
    };
    return PopoversStore;
}(React.Component));
exports.PopoversStore = PopoversStore;
