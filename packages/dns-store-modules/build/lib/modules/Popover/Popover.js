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
var popover_1 = require("../../actions/popover");
require("./Popover.css");
var Popover = (function (_super) {
    __extends(Popover, _super);
    function Popover(props, context) {
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
            _this.props.closePopover(_this.props.id);
        };
        _this.handleDocumentClick = function (evt) {
            var area = _this.node;
            var TIMEOUT = 5;
            if (area && !area.contains(evt.target)) {
                setTimeout(function () {
                    _this.props.closePopover(_this.props.id);
                }, TIMEOUT);
            }
        };
        _this.detectBorder = function () {
            if (_this.props.popover[_this.props.id]) {
                var left = _this.node.getBoundingClientRect().left;
                var exceedsBoundary = (_this.node.offsetWidth + left) > document.body.offsetWidth;
                if (exceedsBoundary) {
                    _this.setState({ exceedsBoundary: exceedsBoundary });
                }
            }
        };
        _this.handleRef = function (ref) { return _this.node = ref; };
        if (!(props.id in props.popover)) {
            _this.props.onSubscribeToPopoverStore(_this.props.id);
        }
        else {
            _this.handleEventListeners('add');
        }
        _this.state = {
            exceedsBoundary: false
        };
        return _this;
    }
    Popover.prototype.componentDidUpdate = function () {
        if (!(this.props.id in this.props.popover)) {
            this.props.onSubscribeToPopoverStore(this.props.id);
        }
        if (this.props.popover[this.props.id]) {
            this.handleEventListeners('add');
            this.detectBorder();
        }
        else {
            this.handleEventListeners();
        }
    };
    Popover.prototype.componentWillUnmount = function () {
        this.handleEventListeners();
    };
    Popover.prototype.render = function () {
        var style = {};
        if (this.state.exceedsBoundary) {
            style = {
                right: 0
            };
        }
        return (React.createElement("div", { className: "popover " + (this.props.popover[this.props.id] ? 'popover--open' : '') + "\n          " + (this.props.classNames ? this.props.classNames : '') + "\n        ", style: style, ref: this.handleRef },
            React.createElement(toolbox_1.Card, { withoutOffset: true, classNames: "popover_card" },
                this.props.title &&
                    React.createElement("div", { className: "popover_title" },
                        this.props.title,
                        React.createElement("hr", { className: "popover_separator" })),
                React.createElement("div", { className: "popover_wrapper" }, this.props.children),
                !this.props.withoutCloseButton ?
                    React.createElement("div", { className: "popover_close" },
                        React.createElement(toolbox_1.IconButton, { classNames: "popover_button", type: 'simple', icon: 'close', onClick: this.onCloseClick })) : null)));
    };
    Popover.defaultProps = {
        rootID: 'root',
        popover: {},
        width: 'auto',
        id: 0,
        title: null,
    };
    return Popover;
}(React.Component));
var mapStateToProps = function (state) { return ({
    popover: state.popover,
}); };
var mapDispatchToProps = function (dispatch) { return ({
    closePopover: function (id) { return dispatch(popover_1.popoverActions.closePopover(id)); },
    onSubscribeToPopoverStore: function (id) { return dispatch(popover_1.popoverActions.subscribeToPopoverStore(id)); },
}); };
exports.connectedPopover = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Popover);
