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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./LoadMore.css");
var LoadMore = (function (_super) {
    __extends(LoadMore, _super);
    function LoadMore(props) {
        var _this = _super.call(this, props) || this;
        _this.onLoad = function () {
            _this.setState({ loading: true }, function () { return _this.props.onFetch(_this.props.data.length); });
        };
        _this.renderData = function () {
            var data = _this.props.data;
            var elems = [];
            if (data && data.length) {
                if (_this.props.onRenderElement) {
                    data.map(function (value, key) {
                        var elem = _this.props.onRenderElement(value, key) || null;
                        return elems.push((React.createElement(React.Fragment, { key: "lm_data_" + key }, elem)));
                    });
                }
                else {
                    throw 'Property "onRenderElement" is missing';
                }
            }
            return elems;
        };
        _this.state = {
            loading: false
        };
        return _this;
    }
    LoadMore.prototype.componentDidMount = function () {
        if (this.props.onLoaded) {
            this.props.onLoaded();
        }
    };
    LoadMore.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.dataLength !== this.props.dataLength) {
            this.setState({
                loading: false,
            });
        }
    };
    LoadMore.prototype.render = function () {
        var data = this.props.hasChildren ? this.props.children : this.renderData();
        var everythingLoaded = this.props.endMessage || "You've seen it all!";
        var loadingText = this.props.loading || 'loading ...';
        var className = this.props.className;
        var inlineStyle = {};
        console.log(this.props.hasMore);
        if (this.props.style) {
            inlineStyle = __assign({}, this.props.style);
        }
        if (this.props.maxHeight) {
            inlineStyle = __assign({}, inlineStyle, { maxHeight: this.props.maxHeight });
        }
        return (React.createElement("div", { className: "load-more " + (className ? className : ''), style: inlineStyle },
            React.createElement("div", { className: "lm_wrapper" }, data),
            React.createElement("div", { className: "lm_loader", onClick: this.onLoad }, !this.state.loading && this.props.hasMore ? this.props.loader :
                !this.props.hasMore ? everythingLoaded : loadingText)));
    };
    LoadMore.defaultProps = {
        data: [],
        handleInternally: false,
        hasMore: true,
        limit: 200
    };
    return LoadMore;
}(React.Component));
exports.LoadMore = LoadMore;
