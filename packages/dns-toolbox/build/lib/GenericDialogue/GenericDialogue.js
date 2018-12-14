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
require("./GenericDialogue.css");
var GenericDialogue = (function (_super) {
    __extends(GenericDialogue, _super);
    function GenericDialogue(props) {
        var _this = _super.call(this, props) || this;
        _this._visibilityTimeout = 100;
        _this._closeTimeout = 300;
        _this.makeVisible = function () {
            setTimeout(function () {
                _this.setState({ visible: true });
            }, _this._visibilityTimeout);
        };
        _this.closeDialogue = function () {
            _this.setState({ visible: false }, function () {
                setTimeout(function () {
                    if (_this.props.onClose) {
                        _this.props.onClose();
                    }
                }, _this._closeTimeout);
            });
        };
        _this.state = {
            visible: false,
        };
        _this.makeVisible();
        return _this;
    }
    GenericDialogue.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.triggerClose && !prevProps.triggerClose) {
            this.closeDialogue();
        }
    };
    GenericDialogue.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, content = _a.content, footer = _a.footer, hero = _a.hero, title = _a.title, withoutOffset = _a.withoutOffset;
        var visible = this.state.visible;
        var heroInlineStyle = {};
        if (hero) {
            heroInlineStyle = {
                backgroundImage: "url(" + hero + ")"
            };
        }
        return (React.createElement("div", { className: "dialogue " + (visible ? 'dialogue--open' : '') + " " + (className ? className : '') },
            React.createElement("div", { className: "dialogue_back-drop", onClick: function () { return _this.closeDialogue(); } }),
            React.createElement("div", { className: "dialogue_container" },
                React.createElement("div", { className: "gd " + (withoutOffset ? 'gd--without-offset' : '') + " " + (hero ? 'gd--with-hero' : '') + "\n              " + (footer ? 'gd--wf' : '') + "\n            " },
                    hero ? React.createElement("div", { className: "gd_hero", style: heroInlineStyle }) : null,
                    title ? React.createElement("h1", null, title) : null,
                    React.createElement("div", { className: "gd_content " + (footer ? 'gd_content--wf' : '') }, content),
                    footer ? React.createElement("div", { className: "gd_footer" }, footer) : null))));
    };
    GenericDialogue.defaultProps = {
        title: null,
        width: '40em',
        height: 'auto',
        minHeight: '10%',
    };
    return GenericDialogue;
}(React.Component));
exports.GenericDialogue = GenericDialogue;
