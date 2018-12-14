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
var ActivityIndicatorBar_1 = require("../ActivityIndicatorBar/ActivityIndicatorBar");
var IconButton_1 = require("../IconButton/IconButton");
require("./CollectionLane.css");
var CollectionLane = (function (_super) {
    __extends(CollectionLane, _super);
    function CollectionLane(props) {
        var _this = _super.call(this, props) || this;
        _this.getDiff = function () {
            var imageSize = _this.state.imageSize;
            if (!imageSize) {
                imageSize = 300;
            }
            return Math.floor(_this.collectionLane.offsetWidth / imageSize);
        };
        _this.getOffset = function () {
            var imageSize = _this.state.imageSize;
            if (!imageSize) {
                imageSize = 300;
            }
            var diff = _this.getDiff();
            return (imageSize * diff) + 10;
        };
        _this.detectBorders = function (position) {
            var _a = _this.state, atBeginning = _a.atBeginning, atEnd = _a.atEnd;
            if (position <= 0 && !atBeginning) {
                _this.setState({ atBeginning: true });
            }
            else if (position > 0 && atBeginning) {
                _this.setState({ atBeginning: false });
            }
            var offset = _this.collectionContent.scrollWidth - _this.collectionContent.offsetWidth;
            if (position >= offset && !atEnd) {
                _this.setState({ atEnd: true });
            }
            if (position < offset && atEnd) {
                _this.setState({ atEnd: false });
            }
        };
        _this.scrollAnimator = function (dir) {
            var x = 0;
            var i = 8;
            var timer = function () {
                setTimeout(function () {
                    x++;
                    if (dir === 'next') {
                        _this.collectionContent.scrollLeft = _this.collectionContent.scrollLeft + i;
                    }
                    else if (dir === 'prev') {
                        _this.collectionContent.scrollLeft = _this.collectionContent.scrollLeft - i;
                    }
                    if (x < (_this.getOffset() / i)) {
                        timer();
                    }
                    else {
                        _this.detectBorders(_this.collectionContent.scrollLeft);
                    }
                }, 0);
            };
            timer();
        };
        _this.scrollHandler = function (e) {
            _this.detectBorders(e.target.scrollLeft);
        };
        _this.handleAddTableGroup = function () {
            console.log('handleAddTableGroup');
        };
        _this.handleCollectionContentRef = function (ref) { return _this.collectionContent = ref; };
        _this.handleCollectionLaneRef = function (ref) { return _this.collectionLane = ref; };
        _this.state = {
            atBeginning: true,
            atEnd: false,
            imageSize: 300,
        };
        return _this;
    }
    CollectionLane.prototype.render = function () {
        var label = this.props.label;
        return (React.createElement("div", { className: "collection-lane", ref: this.handleCollectionLaneRef },
            React.createElement("h3", { className: "collection-lane_title" }, label),
            React.createElement("div", { className: "collection-lane_action" },
                React.createElement(IconButton_1.IconButton, { icon: "search" }),
                React.createElement(IconButton_1.IconButton, { icon: "add" })),
            React.createElement(ActivityIndicatorBar_1.ActivityIndicatorBar, { loading: false }),
            React.createElement("div", { className: "collection-lane_wrapper" },
                React.createElement("div", { className: "collection-lane_content", ref: this.handleCollectionContentRef, onScroll: this.scrollHandler },
                    React.createElement("div", { className: "collection-lane_list" },
                        React.createElement("div", null, "Table 1"),
                        React.createElement("div", null, "Table 2"),
                        React.createElement("div", null, "Table 3"),
                        React.createElement("div", null, "Table 4"),
                        React.createElement("div", null, "Table 5"))),
                React.createElement("div", { className: "collection-lane_shadow" }))));
    };
    return CollectionLane;
}(React.Component));
exports.CollectionLane = CollectionLane;
