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
var overlay_1 = require("../../actions/overlay");
require("./Overlay.css");
var Overlay = (function (_super) {
    __extends(Overlay, _super);
    function Overlay(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.getElement = function () {
            var rootID = _this.props.rootID;
            var element = document.getElementById(rootID || 'root');
            if (element === null || element === undefined) {
                return null;
            }
            return element;
        };
        _this.handleEventListeners = function (type) {
            var element = _this.getElement();
            if (element) {
                if (type === 'add') {
                    element.addEventListener('click', _this.handleDocumentClick);
                }
                else {
                    element.removeEventListener('click', _this.handleDocumentClick);
                }
            }
        };
        _this.onCloseClick = function () {
            _this.props.closeOverlay(_this.props.id);
        };
        _this.handleDocumentClick = function (evt) {
            var area = _this.node;
            var TIMEOUT = 5;
            if (area && !area.contains(evt.target)) {
                setTimeout(function () {
                    _this.props.closeOverlay(_this.props.id);
                }, TIMEOUT);
            }
        };
        _this.handleRef = function (ref) { return _this.node = ref; };
        if (!(props.id in props.overlay)) {
            _this.props.onSubscribeToOverlayStore(_this.props.id);
        }
        else {
            _this.handleEventListeners('add');
        }
        return _this;
    }
    Overlay.prototype.componentDidUpdate = function () {
        if (!(this.props.id in this.props.overlay)) {
            this.props.onSubscribeToOverlayStore(this.props.id);
        }
        if (this.props.overlay[this.props.id]) {
            this.handleEventListeners('add');
        }
        else {
            this.handleEventListeners();
        }
    };
    Overlay.prototype.componentWillUnmount = function () {
        this.handleEventListeners();
    };
    Overlay.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "\n          overlay\n          " + (this.props.overlay[this.props.id] ? 'overlay--open' : '') + "\n          " + (this.props.classNames ? this.props.classNames : '') + "\n        ", ref: this.handleRef },
            React.createElement(toolbox_1.Card, { withoutOffset: true },
                this.props.title &&
                    React.createElement("div", { className: "overlay_title" },
                        React.createElement("span", { className: "overlay_title" }, this.props.title),
                        React.createElement("hr", { className: "overlay_separator" })),
                React.createElement("div", { className: "overlay_wrapper" }, this.props.children),
                !this.props.withoutCloseButton ?
                    React.createElement("div", { className: "overlay_close" },
                        React.createElement("button", { className: "overlay_button", onClick: function () { return _this.onCloseClick(); } },
                            React.createElement("i", { className: "material-icons" }, "close"))) : null)));
    };
    Overlay.defaultProps = {
        rootID: 'root',
        overlay: {},
        width: 'auto',
        id: 0,
        title: null,
    };
    return Overlay;
}(React.Component));
var mapStateToProps = function (state) { return ({
    overlay: state.overlay,
}); };
var mapDispatchToProps = function (dispatch) { return ({
    closeOverlay: function (id) { return dispatch(overlay_1.overlayActions.closeOverlay(id)); },
    onSubscribeToOverlayStore: function (id) { return dispatch(overlay_1.overlayActions.subscribeToOverlayStore(id)); },
}); };
exports.connectedOverlay = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Overlay);
