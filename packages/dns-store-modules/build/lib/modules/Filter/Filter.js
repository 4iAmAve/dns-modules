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
var react_redux_1 = require("react-redux");
var actions_1 = require("../../actions");
var FilterModule = (function (_super) {
    __extends(FilterModule, _super);
    function FilterModule(props) {
        var _this = _super.call(this, props) || this;
        if (!(props.id in props.filter)) {
            if (props.id && props.id.length) {
                props.onSubscribeToFilterStore(props.id, props.defaultSettings);
            }
        }
        return _this;
    }
    FilterModule.prototype.componentDidUpdate = function (prevProps) {
        if (!(this.props.id in this.props.filter)) {
            if (this.props.id.length) {
                this.props.onSubscribeToFilterStore(this.props.id, this.props.defaultSettings);
            }
        }
    };
    FilterModule.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children;
        return (React.createElement("div", { className: "filter " + (className ? className : '') }, children ? children : null));
    };
    return FilterModule;
}(React.Component));
var mapStateToProps = function (state) { return ({
    filter: state.filter,
}); };
var mapDispatchToProps = function (dispatch) { return ({
    onSubscribeToFilterStore: function (id, settings) {
        return dispatch(actions_1.filterActions.subscribeToFilterStore(id, settings));
    },
}); };
exports.connectedFilter = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(FilterModule);
