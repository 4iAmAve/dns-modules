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
var Card_1 = require("../Card/Card");
var IconButton_1 = require("../IconButton/IconButton");
require("./Popover.css");
var Popover = (function (_super) {
    __extends(Popover, _super);
    function Popover(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this._closeTimeout = 300;
        _this._visibilityTimeout = 100;
        _this.makeVisible = function () {
            setTimeout(function () {
                _this.setState({ visible: true });
            }, _this._visibilityTimeout);
        };
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
            _this.setState({ visible: false }, function () {
                setTimeout(function () {
                    if (_this.props.onClosePopover) {
                        _this.props.onClosePopover(_this.props.id);
                    }
                }, _this._closeTimeout);
            });
        };
        _this.handleDocumentClick = function (evt) {
            var area = _this._node;
            var TIMEOUT = 5;
            if (area && !area.contains(evt.target)) {
                setTimeout(function () { return _this.onCloseClick(); }, TIMEOUT);
            }
        };
        _this.determineRefPosition = function () {
            if (_this._externalReference) {
                var left = _this._externalReference.getBoundingClientRect().left;
                return left;
            }
            return false;
        };
        _this.detectBorder = function () {
            if (_this.props.id) {
                var left = _this._node.getBoundingClientRect().left;
                var exceedsBoundary = (_this._node.offsetWidth + left) > document.body.offsetWidth;
                if (exceedsBoundary) {
                    _this.setState({ exceedsBoundary: exceedsBoundary });
                }
            }
        };
        _this.handleRef = function (ref) { return _this._node = ref; };
        _this.state = {
            exceedsBoundary: false,
            refPosition: {},
            visible: false,
        };
        _this._externalReference = props.reference || null;
        _this.makeVisible();
        return _this;
    }
    Popover.prototype.componentDidMount = function () {
        this.handleEventListeners('add');
        this.detectBorder();
    };
    Popover.prototype.componentWillUnmount = function () {
        this.handleEventListeners();
    };
    Popover.prototype.render = function () {
        var _a = this.props, className = _a.className, content = _a.content, title = _a.title, withoutCloseButton = _a.withoutCloseButton;
        var style = {};
        if (this.state.exceedsBoundary) {
            style = {
                right: 0
            };
        }
        else if (this._externalReference) {
            style = {
                left: this.determineRefPosition()
            };
        }
        return (React.createElement("div", { className: "popover " + (this.state.visible ? 'popover--open' : '') + " " + (className ? className : ''), style: style, ref: this.handleRef },
            React.createElement(Card_1.Card, { withoutOffset: true, classNames: "popover_card" },
                title &&
                    React.createElement("div", { className: "popover_title" },
                        title,
                        React.createElement("hr", { className: "popover_separator" })),
                React.createElement("div", { className: "popover_wrapper" }, content),
                !withoutCloseButton ?
                    React.createElement("div", { className: "popover_close" },
                        React.createElement(IconButton_1.IconButton, { classNames: "popover_button", type: 'simple', icon: 'close', onClick: this.onCloseClick })) : null)));
    };
    Popover.defaultProps = {
        rootID: 'root',
        width: 'auto',
        id: 0,
        title: null,
    };
    return Popover;
}(React.Component));
exports.Popover = Popover;
