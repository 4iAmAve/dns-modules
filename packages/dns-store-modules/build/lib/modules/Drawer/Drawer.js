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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var toolbox_1 = require("@dns/toolbox");
var drawers_1 = require("../../actions/drawers");
require("./Drawer.css");
var Drawer = (function (_super) {
    __extends(Drawer, _super);
    function Drawer(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.onCloseClick = function () {
            var _a = _this.props, drawers = _a.drawers, id = _a.id;
            if (drawers[id] && drawers[id].onClose) {
                drawers[id].onClose();
            }
            _this.props.onCloseDrawer(_this.props.id);
        };
        _this.state = {
            loaded: false,
        };
        if (!(props.id in props.drawers)) {
            _this.props.onSubscribeToDrawerStore(_this.props.id);
        }
        return _this;
    }
    Drawer.prototype.render = function () {
        var _a = this.props, classNames = _a.classNames, drawers = _a.drawers, fullWidth = _a.fullWidth, id = _a.id, withoutCloseButton = _a.withoutCloseButton, _b = _a.disableCloseOnOutsideClick, disableCloseOnOutsideClick = _b === void 0 ? false : _b;
        return (React.createElement("div", { className: "\n          drawer\n          " + (drawers[id] && drawers[id].open ? 'drawer--open' : '') + "\n          " + (classNames ? classNames : '') + "\n        " },
            !disableCloseOnOutsideClick ?
                React.createElement("div", { className: "drawer_backdrop", onClick: this.onCloseClick }) : null,
            React.createElement("div", { className: "\n            drawer_content\n            " + (fullWidth ? 'drawer_content--full-width' : '') + "\n          " },
                drawers[id] && drawers[id].title &&
                    React.createElement("div", { className: "drawer_title" },
                        React.createElement("span", { className: "drawer_title" }, drawers[id].title),
                        React.createElement("hr", { className: "drawer_separator" })),
                React.createElement("div", { className: "drawer_wrapper" }, drawers[id] && drawers[id].open && drawers[id].content ? drawers[id].content : null),
                !withoutCloseButton ?
                    React.createElement("div", { className: "drawer_close" },
                        React.createElement(toolbox_1.IconButton, { icon: 'close', type: "simple", onClick: this.onCloseClick })) : null)));
    };
    Drawer.defaultProps = {
        width: 'auto',
        id: 0,
        fullWidth: false,
    };
    return Drawer;
}(React.Component));
var mapStateToProps = function (state) { return ({
    drawers: state.drawers,
}); };
var mapDispatchToProps = function (dispatch) { return ({
    onCloseDrawer: function (id) { return dispatch(drawers_1.drawerActions.closeDrawer(id)); },
    onSubscribeToDrawerStore: function (id) { return dispatch(drawers_1.drawerActions.subscribeToDrawerStore(id)); },
}); };
exports.connectedDrawer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Drawer);
