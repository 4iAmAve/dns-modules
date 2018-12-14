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
require("./ActivityIndicatorSpinner.css");
var ActivityIndicatorSpinner = (function (_super) {
    __extends(ActivityIndicatorSpinner, _super);
    function ActivityIndicatorSpinner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActivityIndicatorSpinner.prototype.render = function () {
        var loading = this.props.loading;
        return (React.createElement(React.Fragment, null, loading ?
            React.createElement("div", { className: "activity-indicator_spinner" },
                React.createElement("svg", { className: "activity-indicator_spinner--circular", height: "50", width: "50" },
                    React.createElement("circle", { className: "activity-indicator_spinner-path", cx: "25", cy: "25.2", r: "19.9", fill: "none", strokeWidth: "6", strokeMiterlimit: "10" }))) : null));
    };
    return ActivityIndicatorSpinner;
}(React.Component));
exports.ActivityIndicatorSpinner = ActivityIndicatorSpinner;
