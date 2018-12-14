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
var SelectDropdown_1 = require("../SelectDropdown/SelectDropdown");
var IconButton_1 = require("../IconButton/IconButton");
require("./Paginator.css");
var Paginator = (function (_super) {
    __extends(Paginator, _super);
    function Paginator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onChange = function (e) {
            _this.props.onOptionsChange(e);
        };
        _this.onPageChange = function (value) {
            _this.props.onPageChange({
                pageIndex: value,
                pageSize: _this.props.pageSize,
            });
        };
        return _this;
    }
    Paginator.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, pageSizeOptions = _a.pageSizeOptions, defaultValue = _a.defaultValue, pageIndex = _a.pageIndex, label = _a.label, _b = _a.totalItems, totalItems = _b === void 0 ? 0 : _b, pageSize = _a.pageSize;
        var from = pageSize * (pageIndex + 1) - pageSize + 1;
        var to = pageSize * (pageIndex + 1) < (totalItems || 0) ? pageSize * (pageIndex + 1) : totalItems;
        if (to === 0) {
            from = 0;
        }
        return (React.createElement("div", { className: "paginator " + (className ? className : '') },
            React.createElement("div", { className: "paginator_size" },
                label ? React.createElement("div", { className: "paginator_size-label" }, label) : null,
                React.createElement("div", { className: "paginator_size-select" },
                    React.createElement(SelectDropdown_1.SelectDropdown, { options: pageSizeOptions, selectedValue: defaultValue, resetLabel: false, onChange: this.onChange }))),
            React.createElement("div", { className: "paginator_range" },
                React.createElement("div", { className: "paginator_range-label" },
                    from,
                    " - ",
                    to,
                    " of ",
                    totalItems),
                React.createElement(IconButton_1.IconButton, { icon: "keyboard_arrow_left", type: "simple", onClick: function () { return _this.onPageChange(pageIndex - 1); }, disabled: pageIndex === 0 }),
                React.createElement(IconButton_1.IconButton, { icon: "keyboard_arrow_right", type: "simple", onClick: function () { return _this.onPageChange(pageIndex + 1); }, disabled: pageSize * (pageIndex + 1) >= (totalItems || 0) }))));
    };
    return Paginator;
}(React.Component));
exports.Paginator = Paginator;
