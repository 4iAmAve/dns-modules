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
var utils_1 = require("@dns/utils");
require("./Slider.css");
var constants = {
    orientation: {
        horizontal: {
            dimension: 'width',
            direction: 'left',
            reverseDirection: 'right',
            coordinate: 'x'
        },
        vertical: {
            dimension: 'height',
            direction: 'top',
            reverseDirection: 'bottom',
            coordinate: 'y'
        }
    }
};
var Slider = /** @class */ (function (_super) {
    __extends(Slider, _super);
    function Slider(props) {
        var _this = _super.call(this, props) || this;
        _this.clamp = function (value, min, max) {
            return Math.min(Math.max(value, min), max);
        };
        _this.handleFormat = function (value) {
            var format = _this.props.format;
            return format ? format(value) : value;
        };
        _this.handleUpdate = function () {
            if (!_this.slider) {
                // for shallow rendering
                return;
            }
            var orientation = _this.props.orientation;
            var dimension = utils_1.capitalize(constants.orientation[orientation || 'horizontal'].dimension);
            var sliderPos = _this.slider["offset" + dimension];
            var handlePos = _this.handle["offset" + dimension];
            _this.setState({
                limit: sliderPos - handlePos,
                grab: handlePos / 2
            });
        };
        _this.handleStart = function (e) {
            var _a = _this.props, disabled = _a.disabled, onChangeStart = _a.onChangeStart;
            if (disabled) {
                return;
            }
            document.addEventListener('mousemove', _this.handleDrag);
            document.addEventListener('mouseup', _this.handleEnd);
            _this.setState({
                active: true
            }, function () {
                if (onChangeStart) {
                    onChangeStart(_this.state.value);
                }
            });
        };
        _this.handleDrag = function (e) {
            e.stopPropagation();
            var _a = _this.props, disabled = _a.disabled, onChange = _a.onChange;
            if (disabled) {
                return;
            }
            var className = e.target.className;
            if (className === 'rangeslider__labels') {
                return;
            }
            var value = _this.position(e);
            _this.setState({ value: value });
            if (onChange) {
                onChange(_this.state.value);
            }
        };
        _this.handleEnd = function (e) {
            var _a = _this.props, disabled = _a.disabled, onChangeEnd = _a.onChangeEnd;
            if (disabled) {
                return;
            }
            _this.setState({
                active: false
            }, function () {
                if (onChangeEnd) {
                    onChangeEnd(_this.state.value);
                }
            });
            document.removeEventListener('mousemove', _this.handleDrag);
            document.removeEventListener('mouseup', _this.handleEnd);
        };
        _this.handleKeyDown = function (e) {
            e.preventDefault();
            var disabled = _this.props.disabled;
            if (disabled) {
                return;
            }
            var keyCode = e.keyCode;
            var _a = _this.props, value = _a.value, _b = _a.min, min = _b === void 0 ? 0 : _b, _c = _a.max, max = _c === void 0 ? 100 : _c, _d = _a.step, step = _d === void 0 ? 1 : _d, onChange = _a.onChange;
            var sliderValue;
            switch (keyCode) {
                case 38:
                case 39:
                    sliderValue = value + step > max ? max : value + step;
                    if (onChange) {
                        onChange(sliderValue, e);
                    }
                    break;
                case 37:
                case 40:
                    sliderValue = value - step < min ? min : value - step;
                    if (onChange) {
                        onChange(sliderValue, e);
                    }
                    break;
                default:
                    return;
            }
        };
        _this.getPositionFromValue = function (value) {
            var _a = _this.state.limit, limit = _a === void 0 ? 0 : _a;
            var _b = _this.props, _c = _b.min, min = _c === void 0 ? 0 : _c, _d = _b.max, max = _d === void 0 ? 100 : _d;
            var diffMaxMin = max - min;
            var diffValMin = value - min;
            var percentage = diffValMin / diffMaxMin;
            return Math.round(percentage * limit);
        };
        _this.getValueFromPosition = function (pos) {
            var _a = _this.state.limit, limit = _a === void 0 ? 0 : _a;
            var _b = _this.props, orientation = _b.orientation, _c = _b.min, min = _c === void 0 ? 0 : _c, _d = _b.max, max = _d === void 0 ? 100 : _d, _e = _b.step, step = _e === void 0 ? 1 : _e;
            var percentage = _this.clamp(pos, 0, limit) / (limit || 1);
            var baseVal = step * Math.round(percentage * (max - min) / step);
            var value = orientation === 'horizontal' ? baseVal + min : max - baseVal;
            return _this.clamp(value, min, max);
        };
        _this.position = function (e) {
            var grab = _this.state.grab;
            var _a = _this.props, _b = _a.orientation, orientation = _b === void 0 ? 'horizontal' : _b, reverseDirection = _a.reverseDirection;
            var node = _this.slider;
            var coordinateStyle = constants.orientation[orientation].coordinate;
            var directionStyle = reverseDirection
                ? constants.orientation[orientation].reverseDirection
                : constants.orientation[orientation].direction;
            var clientCoordinateStyle = "client" + utils_1.capitalize(coordinateStyle);
            var coordinate = !e.touches
                ? e[clientCoordinateStyle]
                : e.touches[0][clientCoordinateStyle];
            var direction = node.getBoundingClientRect()[directionStyle];
            var pos = reverseDirection
                ? direction - coordinate - grab
                : coordinate - direction - grab;
            return _this.getValueFromPosition(pos);
        };
        _this.coordinates = function (pos) {
            var _a = _this.state, limit = _a.limit, grab = _a.grab;
            var orientation = _this.props.orientation;
            var value = _this.getValueFromPosition(pos);
            var position = _this.getPositionFromValue(value);
            var handlePos = orientation === 'horizontal' ? position + grab : position;
            var fillPos = orientation === 'horizontal'
                ? handlePos
                : limit - handlePos;
            return {
                fill: fillPos,
                handle: handlePos,
                label: handlePos
            };
        };
        _this.handleSliderRef = function (ref) { return _this.slider = ref; };
        _this.handleDraggerRef = function (ref) { return _this.handle = ref; };
        _this.state = {
            value: props.value || 0,
            active: false,
            limit: 0,
            grab: 0
        };
        return _this;
    }
    Slider.prototype.componentDidMount = function () {
        this.handleUpdate();
    };
    Slider.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.value !== this.props.value) {
            this.setState({ value: this.props.value });
        }
    };
    Slider.prototype.render = function () {
        var _a = this.props, _b = _a.orientation, orientation = _b === void 0 ? 'horizontal' : _b, classNames = _a.classNames, 
        // reverseDirection,
        min = _a.min, _c = _a.max, max = _c === void 0 ? 100 : _c, 
        // handleLabel,
        labelBefore = _a.labelBefore, labelAfter = _a.labelAfter;
        var _d = this.state, active = _d.active, value = _d.value;
        // const dimension = constants.orientation[orientation].dimension;
        // const direction = reverseDirection
        //   ? constants.orientation[orientation].reverseDirection
        //   : constants.orientation[orientation].direction;
        // const position = this.getPositionFromValue(value);
        // const coords = this.coordinates(position);
        var position = (value / max) * 100;
        var draggerInlineStyle = {
            left: position + "%",
        };
        var draggedBarInlineStyle = {
            width: position + "%",
        };
        return (React.createElement("div", { className: "\n          slider\n          " + (classNames ? classNames : '') + "\n          " + (orientation ? "slider--" + orientation : 'slider--horizontal') + "\n          " + (labelBefore ? "slider--with-before-label" : '') + "\n          " + (labelAfter ? "slider--with-after-label" : '') + "\n        " },
            labelBefore ? React.createElement("div", { className: "slider_label-tag" }, labelBefore) : null,
            React.createElement("div", { className: "slider_container" },
                min ? React.createElement("div", { className: "slider_label slider_label_left" }, min) : null,
                React.createElement("div", { className: "slider-bar", onMouseDown: this.handleDrag, onMouseUp: this.handleEnd, onTouchStart: this.handleStart, onTouchEnd: this.handleEnd, ref: this.handleSliderRef },
                    React.createElement("div", { className: "slider_bar--default" }),
                    React.createElement("div", { className: "slider_bar--dragged", style: draggedBarInlineStyle }),
                    React.createElement("div", { className: "slider_bar_dragger " + (active ? 'slider_bar_dragger--active' : ''), style: draggerInlineStyle, onMouseDown: this.handleStart, onTouchMove: this.handleDrag, onTouchEnd: this.handleEnd, onKeyDown: this.handleKeyDown, ref: this.handleDraggerRef }),
                    React.createElement("div", { className: "slider_value" }, value)),
                max ? React.createElement("div", { className: "slider_label slider_label_right" }, max) : null),
            labelAfter ? React.createElement("div", { className: "slider_label-tag" }, labelAfter) : null));
    };
    Slider.defaultProps = {
        value: 0,
        orientation: 'horizontal',
        step: 1,
        reverseDirection: false,
        disabled: false,
    };
    return Slider;
}(React.Component));
exports.Slider = Slider;
