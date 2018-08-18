"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var utils_1 = require("@dns/utils");
var Input_1 = require("../Input/Input");
require("./SelectDropdown.css");
var SelectDropdown = /** @class */ (function (_super) {
    __extends(SelectDropdown, _super);
    function SelectDropdown(props) {
        var _this = _super.call(this, props) || this;
        _this.handleDocumentClick = function (evt) {
            if (_this.mounted) {
                var area = _this.wrapper;
                var TIMEOUT = 5;
                if (area && !area.contains(evt.target)) {
                    // @TODO dirty workaround to avoid race condition -> get rid of it
                    setTimeout(function () {
                        _this.setState({
                            isOpen: false,
                        });
                    }, TIMEOUT);
                }
            }
        };
        _this.generateOptions = function () {
            var options = _this.props.options;
            var searchValue = _this.state.searchValue;
            var list = Object.assign([], options);
            return list.filter(function (option) { return option.label.indexOf(searchValue) > -1; });
        };
        _this.getSelectedPosition = function () {
            if (_this.selected && _this.scrollView) {
                var center = _this.scrollView.offsetHeight / 2;
                var offset = (_this.selected.offsetTop - center) - _this.scrollView.offsetTop;
                _this.scrollView.scrollTop = _this.scrollView.scrollTop + offset;
            }
        };
        _this.handleFilterChange = function (e) { return _this.setState({ searchValue: e.target.value }); };
        _this.handleWrapperRef = function (ref) { return _this.wrapper = ref; };
        _this.handleListRef = function (ref) { return _this.list = ref; };
        _this.handleScrollViewRef = function (ref) { return _this.scrollView = ref; };
        _this.handleSelectedRef = function (ref, key) {
            var isSelected = _this.state.isSelected;
            var selected = isSelected.toString();
            if (selected.length) {
                if (key === isSelected) {
                    _this.selected = ref;
                }
            }
            else {
                _this.selected = null;
            }
        };
        // find selected value by dataValue
        var selectedValueArray = props.options.filter(function (value) {
            return value.key === props.selectedValue;
        });
        var selectedValue = selectedValueArray[0];
        _this.state = {
            isOpen: false,
            listTopValue: 0,
            listWidthValue: 0,
            listLeftValue: 0,
            isSelected: selectedValue ? selectedValue.key : '',
            searchValue: '',
            selected: {
                key: selectedValue ? selectedValue.key : props.selectedValue,
                label: selectedValue ? selectedValue.label : props.label,
            },
        };
        _this.mounted = true;
        return _this;
    }
    SelectDropdown.prototype.componentDidMount = function () {
        document.addEventListener('click', this.handleDocumentClick, false);
        document.addEventListener('touchend', this.handleDocumentClick, false);
    };
    SelectDropdown.prototype.componentWillUnmount = function () {
        this.mounted = false;
        document.removeEventListener('click', this.handleDocumentClick, false);
        document.removeEventListener('touchend', this.handleDocumentClick, false);
    };
    SelectDropdown.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _this = this;
        if (this.list && prevState.isOpen !== this.state.isOpen) {
            this.countTopRmsList();
        }
        if (prevProps.selectedValue !== this.props.selectedValue) {
            // find selected value by dataValue
            var selectedValueArray = this.props.options.filter(function (value) {
                return value.key === _this.props.selectedValue;
            });
            var selectedValue = selectedValueArray[0];
            this.setState({
                isSelected: selectedValue ? selectedValue.key : '',
                selected: {
                    key: selectedValue ? selectedValue.key : this.props.selectedValue,
                    label: selectedValue ? selectedValue.label : this.props.label,
                },
            });
        }
        if (!utils_1.deepEqual(prevProps.options, this.props.options)) {
            var selectedValueArray = this.props.options.filter(function (value) {
                return value.key === _this.props.selectedValue;
            });
            var selectedValue = selectedValueArray[0];
            this.setState({
                isSelected: selectedValue ? selectedValue.key : '',
                selected: {
                    key: selectedValue ? selectedValue.key : this.props.selectedValue,
                    label: selectedValue ? selectedValue.label : this.props.label,
                },
            });
        }
    };
    // the simplest way to get selected value
    SelectDropdown.prototype.getValue = function () {
        return this.state.selected.label;
    };
    SelectDropdown.prototype.getLabel = function () {
        return this.state.selected.label;
    };
    SelectDropdown.prototype.handleToggleSelect = function () {
        var _a = this.wrapper.getBoundingClientRect(), left = _a.left, top = _a.top, width = _a.width;
        this.setState({
            isOpen: !this.state.isOpen,
            listLeftValue: left,
            listTopValue: top,
            listWidthValue: width,
        });
    };
    SelectDropdown.prototype.handleOptionClick = function (key, option) {
        this.changeState({
            isOpen: false,
            listTopValue: this.state.listTopValue,
            listLeftValue: this.state.listLeftValue,
            listWidthValue: this.state.listWidthValue,
            isSelected: option.key,
            searchValue: this.state.searchValue,
            selected: __assign({ key: option.key, label: option.label }, option),
        });
    };
    // change state with callback function
    SelectDropdown.prototype.changeState = function (newState) {
        this.fireChangeEvent(newState);
        this.setState(newState);
    };
    SelectDropdown.prototype.handleResetSelect = function () {
        this.changeState({
            isOpen: false,
            listTopValue: this.state.listTopValue,
            listLeftValue: this.state.listLeftValue,
            listWidthValue: this.state.listWidthValue,
            isSelected: '',
            searchValue: '',
            selected: {
                key: '',
                label: this.props.label || '',
            },
        });
    };
    // fire callback function
    SelectDropdown.prototype.fireChangeEvent = function (newState) {
        if (newState.selected.label !== this.state.selected.label && this.props.onChange) {
            this.props.onChange(newState.selected);
        }
    };
    SelectDropdown.prototype.countTopRmsList = function () {
        // const offsetHeightBottom = -this.list.offsetHeight / 2 + bottomMargin;
        var offsetListToWrapper = this.wrapper.getBoundingClientRect().top + this.list.getBoundingClientRect().height;
        var offsetHeightBottom = document.body.offsetHeight - this.list.getBoundingClientRect().height - 8;
        this.setState({
            listTopValue: offsetListToWrapper < document.body.offsetHeight ?
                this.state.listTopValue : offsetHeightBottom,
        });
    };
    SelectDropdown.prototype.render = function () {
        var _this = this;
        var _a = this.props, classNames = _a.classNames, filterable = _a.filterable, label = _a.label, resetLabel = _a.resetLabel, /*options,*/ _b = _a.resetable, /*options,*/ resetable = _b === void 0 ? true : _b;
        var listStyle = {
            left: this.state.listLeftValue,
            top: this.state.listTopValue,
            width: this.state.listWidthValue,
        };
        var _c = this.state, isOpen = _c.isOpen, isSelected = _c.isSelected, searchValue = _c.searchValue, selected = _c.selected;
        var selection = isSelected.toString();
        var optionsList = this.generateOptions();
        this.getSelectedPosition();
        return (React.createElement("div", { className: "\n          select-dropdown_wrapper\n          " + (classNames ? classNames : '') + "\n        ", ref: this.handleWrapperRef },
            React.createElement("div", { className: "select-dd_text " + (selection.length ? '' : 'select-dd_text--empty'), onClick: function () { return _this.handleToggleSelect(); } },
                React.createElement("span", null, selected.label ? selected.label : '')),
            React.createElement("label", { className: "\n            select-dd_label\n            " + (selection.length ? '' : 'select-dd_label--unselected-label') + "\n          " }, label),
            React.createElement("i", { onClick: function () { return _this.handleToggleSelect(); }, className: "material-icons select-dd_caret" }, "arrow_drop_down"),
            isOpen &&
                React.createElement("ul", { ref: this.handleListRef, className: "\n                select-dd_list " + (resetable ? 'select-dd_list--wrl' : '') + " " + (filterable ? 'select-dd_list--wf' : '') + "\n              ", style: listStyle },
                    filterable ?
                        React.createElement("li", { className: "select-dd_list-item select-dd_list-item--filterable" },
                            React.createElement(Input_1.Input, { label: searchValue.length ? '' : 'Search', onKeyUp: this.handleFilterChange, value: searchValue, autoFocus: true }),
                            React.createElement("i", { className: "material-icons" }, "search")) : null,
                    resetable && resetLabel &&
                        React.createElement("li", { className: "select-dd_list-item select-dd_list-item--reset", onMouseDown: function () { return _this.handleResetSelect(); }, onClick: function () { return _this.handleResetSelect(); } }, resetLabel),
                    optionsList && optionsList.length ?
                        React.createElement("div", { className: "select-dd_list_scrollable", ref: this.handleScrollViewRef }, optionsList.map(function (option, key) {
                            return (React.createElement("li", { key: 'dns-dd-select_' + option.key, className: "\n                            select-dd_list-item " + (option.key === isSelected ? 'select-dd_list-item--active' : '') + "\n                          ", value: key, onMouseDown: function () { return _this.handleOptionClick(key, option); }, onClick: function () { return _this.handleOptionClick(key, option); }, ref: function (ref) { return _this.handleSelectedRef(ref, option.key); } }, option.label));
                        })) : null)));
    };
    SelectDropdown.defaultProps = {
        defaultValue: 0,
        filterable: false,
        resetLabel: 'No value',
    };
    return SelectDropdown;
}(React.Component));
exports.SelectDropdown = SelectDropdown;
