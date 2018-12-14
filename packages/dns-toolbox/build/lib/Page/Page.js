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
require("./Page.css");
var Page = (function (_super) {
    __extends(Page, _super);
    function Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Page.prototype.render = function () {
        var _a = this.props, children = _a.children, classNames = _a.classNames, title = _a.title, withoutOffset = _a.withoutOffset;
        return (React.createElement("div", { className: "page " + (classNames ? classNames : '') },
            title ?
                React.createElement("div", { className: "page_header" },
                    React.createElement("h1", { className: "page_title" }, title)) : null,
            React.createElement("div", { className: "\n            page_content\n            " + (!title ? 'page_content--full-height' : '') + "\n            " + (withoutOffset ? 'page_content--without-offset' : '') + "\n          " }, children)));
    };
    return Page;
}(React.Component));
exports.Page = Page;
