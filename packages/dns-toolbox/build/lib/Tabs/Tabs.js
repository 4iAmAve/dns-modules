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
var react_swipeable_views_1 = require("react-swipeable-views");
var IconButton_1 = require("../IconButton/IconButton");
require("./Tabs.css");
var Tabs = (function (_super) {
    __extends(Tabs, _super);
    function Tabs(props) {
        var _this = _super.call(this, props) || this;
        _this.tabNodes = {};
        _this.callChange = function (tabIndex) {
            if (_this.props.onChange) {
                _this.props.onChange(tabIndex);
            }
        };
        _this.generateBorderStyle = function (target) {
            var left = target.offsetLeft;
            var width = target.offsetWidth;
            return {
                width: width,
                left: left,
            };
        };
        _this.onTabClick = function (e, id) {
            _this.setState({ selectedTab: id }, function () { return _this.callChange(id); });
        };
        _this.handleRef = function (key, tabRef) {
            if (tabRef && !(key in _this.tabNodes)) {
                _this.tabNodes[key] = tabRef;
            }
        };
        _this.handleChange = function (value) {
            _this.setState({ selectedTab: value }, function () { return _this.callChange(value); });
        };
        _this.onNavigationClick = function (dir) {
            var selectedTab = _this.state.selectedTab;
            var tabs = _this.props.tabs;
            var newTabState = selectedTab;
            if (dir === 'prev' && selectedTab > 0) {
                newTabState = selectedTab - 1;
            }
            else if (dir === 'next' && selectedTab < tabs.length - 1) {
                newTabState = selectedTab + 1;
            }
            _this.setState({ selectedTab: newTabState }, function () { return _this.callChange(newTabState); });
        };
        _this.determineBorderPosition = function () {
            var selectedTab = _this.state.selectedTab;
            var borderStyle = {
                left: 0,
                width: 0,
            };
            var target = _this.tabNodes[selectedTab];
            if (target) {
                borderStyle = _this.generateBorderStyle(target);
            }
            return borderStyle;
        };
        _this.state = {
            selectedTab: props.selectedTab ? props.selectedTab : 0,
        };
        return _this;
    }
    Tabs.prototype.componentDidMount = function () {
        var selectedTab = this.props.selectedTab ? this.props.selectedTab : 0;
        this.setState({ selectedTab: selectedTab });
    };
    Tabs.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.selectedTab !== prevProps.selectedTab) {
            var selectedTab = this.props.selectedTab ? this.props.selectedTab : 0;
            this.setState({ selectedTab: selectedTab });
        }
    };
    Tabs.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, children = _a.children, swipeable = _a.swipeable, tabs = _a.tabs, withNavigation = _a.withNavigation;
        var selectedTab = this.state.selectedTab;
        var borderStyle = this.determineBorderPosition();
        return (React.createElement("div", { className: "tabs " + (className ? className : '') },
            React.createElement("div", { className: "tabs_header" },
                React.createElement("div", { className: "tabs_border", style: borderStyle }),
                React.createElement("div", { className: "tabs_list " + (withNavigation ? 'tabs--with-navigation' : '') }, tabs.length ? tabs.map(function (tab, key) { return (React.createElement("button", { className: "tabs_tab " + (selectedTab === key ? 'tabs_tab--selected' : ''), key: key, onClick: function (e) { return _this.onTabClick(e, key); }, ref: function (tabRef) { return _this.handleRef(key, tabRef); } }, tab.title)); }) : null),
                withNavigation ?
                    React.createElement("div", { className: "tabs_tab-nav" },
                        React.createElement(IconButton_1.IconButton, { icon: "keyboard_arrow_left", type: "simple", disabled: selectedTab <= 0, color: 'accent', onClick: function () { return _this.onNavigationClick('prev'); } }),
                        React.createElement(IconButton_1.IconButton, { icon: "keyboard_arrow_right", type: "simple", color: 'accent', disabled: selectedTab >= tabs.length - 1, onClick: function () { return _this.onNavigationClick('next'); } })) : null),
            React.createElement("div", { className: "tabs_content" }, swipeable ?
                React.createElement(react_swipeable_views_1.default, { index: this.state.selectedTab, onChangeIndex: this.handleChange, animateHeight: true, enableMouseEvents: true }, children) :
                React.createElement("div", { className: "tabs_tab-content" }, tabs.length && selectedTab > -1 ?
                    tabs.filter(function (tab, key) { return key === selectedTab; })[0].content : null))));
    };
    Tabs.defaultProps = {
        tabs: [
            {
                title: 'Tab',
                content: 'Content',
                selected: true,
            }
        ],
    };
    return Tabs;
}(React.Component));
exports.Tabs = Tabs;
