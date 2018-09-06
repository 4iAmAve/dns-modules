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
require("./GenericDialogue.css");
var GenericDialogue = /** @class */ (function (_super) {
    __extends(GenericDialogue, _super);
    function GenericDialogue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GenericDialogue.prototype.render = function () {
        var _a = this.props, withoutOffset = _a.withoutOffset, classNames = _a.classNames, title = _a.title, footer = _a.footer, content = _a.content, hero = _a.hero;
        var heroInlineStyle = {};
        if (hero) {
            heroInlineStyle = {
                backgroundImage: "url(" + hero + ")"
            };
        }
        return (React.createElement("div", { className: (classNames ? classNames : '') + " gd\n          " + (withoutOffset ? 'gd--without-offset' : '') + " " + (hero ? 'gd--with-hero' : '') + "\n          " + (footer ? 'gd--wf' : '') + "\n        " },
            hero ? React.createElement("div", { className: "gd_hero", style: heroInlineStyle }) : null,
            title ? React.createElement("h1", null, title) : null,
            React.createElement("div", { className: "gd_content " + (footer ? 'gd_content--wf' : '') }, content),
            footer ? React.createElement("div", { className: "gd_footer" }, footer) : null));
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
