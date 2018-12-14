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
require("./MasterDetail.css");
var MasterDetail = (function (_super) {
    __extends(MasterDetail, _super);
    function MasterDetail() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.calculateMasterDetailMaxHeightDimensions = function () {
            if (_this.masterRef && _this.detailRef) {
                var availableDocHeight = document.body.offsetHeight - (_this.props.offsetTop || 0);
                if (_this.props.detailOpen) {
                    var master = _this.masterRef.getBoundingClientRect();
                    return {
                        master: availableDocHeight / 2,
                        detail: availableDocHeight - master.height,
                    };
                }
                else {
                    return {
                        master: _this.props.masterMaxHeight || availableDocHeight,
                        detail: 0,
                    };
                }
            }
            else {
                return {
                    master: _this.props.masterMaxHeight || '100vh',
                    detail: 0,
                };
            }
        };
        _this.calculateMasterDetailMaxWidthDimensions = function () {
            if (_this.masterRef && _this.detailRef) {
                var availableDocWidth = document.body.offsetWidth - (_this.props.offsetWidth || 0);
                if (_this.props.detailOpen) {
                    var master = _this.masterRef.getBoundingClientRect();
                    return {
                        master: availableDocWidth / 2,
                        detail: availableDocWidth - master.width,
                    };
                }
                else {
                    return {
                        master: _this.props.masterMaxWidth || availableDocWidth,
                        detail: 0,
                    };
                }
            }
            else {
                return {
                    master: _this.props.masterMaxWidth || '100vw',
                    detail: 0,
                };
            }
        };
        _this.handleMasterRef = function (ref) { return _this.masterRef = ref; };
        _this.handleDetailRef = function (ref) { return _this.detailRef = ref; };
        return _this;
    }
    MasterDetail.prototype.render = function () {
        var _a = this.props, className = _a.className, detail = _a.detail, detailOpen = _a.detailOpen, master = _a.master, masterMaxHeight = _a.masterMaxHeight, masterMaxWidth = _a.masterMaxWidth, detailMaxHeight = _a.detailMaxHeight, detailMaxWidth = _a.detailMaxWidth, orientation = _a.orientation;
        var masterInlineStyle = {};
        var detailInlineStyle = {};
        if (orientation === 'horizontal') {
            var _b = this.calculateMasterDetailMaxWidthDimensions(), masterMW = _b.master, detailMW = _b.detail;
            masterInlineStyle = {
                maxWidth: masterMaxWidth ? masterMaxWidth : (masterMW || 0)
            };
            detailInlineStyle = {
                maxWidth: detailMaxWidth ? detailMaxWidth : (detailMW || 0)
            };
        }
        else if (orientation === 'vertical') {
            var _c = this.calculateMasterDetailMaxHeightDimensions(), masterMH = _c.master, detailMH = _c.detail;
            masterInlineStyle = {
                maxHeight: masterMaxHeight ? masterMaxHeight : (masterMH || 0)
            };
            detailInlineStyle = {
                maxHeight: detailMaxHeight ? detailMaxHeight : (detailMH || 0)
            };
        }
        return (React.createElement("div", { className: "\n          master-detail\n          master-detail--" + orientation + "\n          " + (className ? className : '') + "\n          " + (detailOpen ? 'master-detail--open' : '') + "\n        " },
            React.createElement("div", { className: "master", style: masterInlineStyle, ref: this.handleMasterRef }, master),
            React.createElement("div", { className: "detail", style: detailInlineStyle, ref: this.handleDetailRef }, detail)));
    };
    MasterDetail.defaultProps = {
        master: null,
        detail: null,
        detailOpen: false,
        offsetTop: 0,
        offsetWidth: 0,
        orientation: 'horizontal',
    };
    return MasterDetail;
}(React.Component));
exports.MasterDetail = MasterDetail;
