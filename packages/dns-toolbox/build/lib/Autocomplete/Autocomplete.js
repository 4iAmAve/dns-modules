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
var Chips_1 = require("../Chips/Chips");
require("./Autocomplete.css");
var Autocomplete = (function (_super) {
    __extends(Autocomplete, _super);
    function Autocomplete(props) {
        var _this = _super.call(this, props) || this;
        _this.backSpaceClicked = false;
        _this.getElement = function () {
            var rootID = _this.props.rootID;
            var element = document.getElementById(rootID || 'root');
            if (element === null || element === undefined) {
                return false;
            }
            return element;
        };
        _this.getSelectionList = function () {
            var autocompleteSelection = _this.props.autocompleteSelection;
            var value = _this.state.value;
            var list = Object.assign([], autocompleteSelection);
            return list.filter(function (selection) {
                return selection.title.toLowerCase().indexOf(value.toLowerCase()) > -1;
            });
        };
        _this.getSelectedItemValue = function (id) {
            var selections = _this.getSelectionList();
            var value = null;
            if (selections.length) {
                selections.map(function (selection, key) {
                    if (key === id) {
                        value = selection;
                    }
                });
            }
            return value;
        };
        _this.handleEventListeners = function (type) {
            var element = _this.getElement();
            if (element) {
                if (type === 'add') {
                    element.addEventListener('click', _this.handleDocumentClick);
                }
                else {
                    element.removeEventListener('click', _this.handleDocumentClick);
                }
            }
        };
        _this.handleDocumentClick = function (evt) {
            var area = _this.autocomplete;
            if (area && !area.contains(evt.target)) {
                _this.setState({ autocompleteVisible: false });
            }
        };
        _this.handleChipDelete = function (chip, key) {
            if (_this.props.onDeleteChip) {
                _this.props.onDeleteChip(chip, key);
            }
        };
        _this.handleKeyUp = function (e) {
            e.preventDefault();
            e.stopPropagation();
            var _a = _this.state, selectedItem = _a.selectedItem, value = _a.value;
            if (_this.props.onKeyUp) {
                _this.props.onKeyUp(e);
            }
            if (e.keyCode === 8) {
                var chips = _this.props.chips;
                if (chips && chips.length && !value.length) {
                    if (_this.backSpaceClicked) {
                        _this.backSpaceClicked = false;
                        var lastChip = Object.assign({}, chips[chips.length - 1]);
                        _this.handleChipDelete(lastChip, chips.length - 1);
                    }
                    else {
                        _this.backSpaceClicked = true;
                    }
                }
            }
            else if (e.keyCode === 13) {
                var chips = _this.props.chips;
                var key = chips ? chips.length : 0;
                var content = e.target.value;
                if (selectedItem >= 0) {
                    content = _this.getSelectedItemValue(selectedItem);
                }
                _this.props.onSelection(key, content);
                _this.setState({ value: '', autocompleteVisible: false });
            }
            else if (e.keyCode === 40) {
                var selection = _this.state.selectedItem + 1;
                var selectionList = _this.getSelectionList();
                if (selection > selectionList.length - 1) {
                    selection = 0;
                }
                _this.setState({ selectedItem: selection });
            }
            else if (e.keyCode === 38) {
                var selection = _this.state.selectedItem - 1;
                if (selection < 0) {
                    selection = 0;
                }
                _this.setState({ selectedItem: selection });
            }
        };
        _this.handleChange = function (e) {
            _this.setState({ value: e.target.value });
        };
        _this.handleInputFocus = function (e) {
            var _a = e.target.getBoundingClientRect(), top = _a.top, height = _a.height;
            var left = _this.autocomplete.getBoundingClientRect().left;
            _this.setState({
                top: top + height + 16,
                left: left,
                width: _this.autocomplete.offsetWidth,
                autocompleteVisible: true,
            });
        };
        _this.handleBlur = function (e) {
            if (_this.props.onBlur) {
                _this.props.onBlur(e);
            }
        };
        _this.handleAutocompleteSelection = function (key, selection) {
            _this.setState({ autocompleteVisible: false, value: '' });
            _this.props.onSelection(key, selection);
        };
        _this.handleSelectionKeyUp = function (e) {
            console.log('handleSelectionKeyUp', e);
        };
        _this.calcTopValue = function (top, selectionList) {
            var topValue = top;
            if (_this.autocomplete && _this.input) {
                var _a = _this.autocomplete.getBoundingClientRect(), bottom = _a.bottom, aCHeight = _a.height;
                var iHeight = _this.input.getBoundingClientRect().height;
                var offsetHeightBottom = _this.input.clientHeight + _this.autocomplete.clientHeight + bottom + aCHeight;
                if (document.body.offsetHeight < offsetHeightBottom) {
                    topValue = top - (selectionList.length * 38) - (iHeight * 2);
                }
            }
            return topValue;
        };
        _this.handleAutocompleteRef = function (ref) { return _this.autocomplete = ref; };
        _this.handleInputRef = function (ref) { return _this.input = ref; };
        _this.state = {
            autocompleteVisible: false,
            left: 0,
            top: 0,
            selectedItem: -1,
            value: props.value || '',
            width: 0,
        };
        return _this;
    }
    Autocomplete.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.value !== this.props.value) {
            this.setState({ value: this.props.value || '' });
        }
    };
    Autocomplete.prototype.componentDidMount = function () {
        this.handleEventListeners('add');
    };
    Autocomplete.prototype.componentWillUnmount = function () {
        this.handleEventListeners();
    };
    Autocomplete.prototype.render = function () {
        var _this = this;
        var _a = this.props, chips = _a.chips, classNames = _a.classNames, disabled = _a.disabled, placeholder = _a.placeholder, required = _a.required, squared = _a.squared;
        var _b = this.state, autocompleteVisible = _b.autocompleteVisible, left = _b.left, selectedItem = _b.selectedItem, top = _b.top, value = _b.value, width = _b.width;
        var selectionList = this.getSelectionList();
        var topValue = this.calcTopValue(top, selectionList);
        var autocompleteInlineStyle = {
            top: topValue,
            left: left,
            width: width,
        };
        var smallLabel = !!(value && value.length);
        if (chips && chips.length) {
            smallLabel = true;
        }
        return (React.createElement("div", { className: "\n          auto-complete\n          " + (classNames ? classNames : '') + "\n          " + (disabled ? 'auto-complete--disabled' : '') + "\n          " + (chips && chips.length ? 'auto-complete--with-chips' : '') + "\n          " + (squared ? 'auto-complete--not-rounded' : '') + "\n        ", ref: this.handleAutocompleteRef },
            chips ?
                React.createElement(Chips_1.Chips, { chips: chips, onDeleteChip: this.handleChipDelete }) : null,
            React.createElement("label", { className: "" + (smallLabel ? 'input_label--small' : '') },
                placeholder,
                required ? React.createElement("span", { className: "input_required" }, "*") : null),
            React.createElement("div", { className: "auto-complete-input_wrapper" },
                React.createElement("input", { type: "text", className: "auto-complete-input", onFocus: this.handleInputFocus, onChange: this.handleChange, onKeyUp: this.handleKeyUp, onBlur: this.handleBlur, ref: this.handleInputRef, tabIndex: disabled ? -1 : 1, value: value })),
            autocompleteVisible && !disabled ?
                React.createElement("div", { className: "auto-complete-container", style: autocompleteInlineStyle },
                    React.createElement("ul", null, selectionList.map(function (selection, key) { return (React.createElement("li", { key: key, className: "" + (selectedItem === key ? 'acc_item--selected' : ''), onClick: function () { return _this.handleAutocompleteSelection(key, selection); }, onKeyUp: function (e) { return _this.handleSelectionKeyUp(e); } }, selection.title)); }))) : null));
    };
    Autocomplete.defaultProps = {
        rootID: 'root',
        placeholder: null,
    };
    return Autocomplete;
}(React.Component));
exports.Autocomplete = Autocomplete;
