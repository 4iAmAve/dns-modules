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
var react_redux_1 = require("react-redux");
var toolbox_1 = require("@dns/toolbox");
var paginator_1 = require("../../actions/paginator");
var PaginatorModule = (function (_super) {
    __extends(PaginatorModule, _super);
    function PaginatorModule(props) {
        var _this = _super.call(this, props) || this;
        _this.defaultSettings = {
            defaultValue: 0,
            pageIndex: 0,
            pageSize: 0,
            pageSizeOptions: [],
            label: '',
            totalItems: 0,
        };
        _this.onOptionChange = function (e) {
            var _a = _this.props, id = _a.id, pageSizeOptions = _a.pageSizeOptions, paginator = _a.paginator, defaultValue = _a.defaultValue;
            var newDefaultValue = defaultValue;
            var newPageSizeOptions = pageSizeOptions.map(function (value, key) {
                if (value.key === e.key) {
                    newDefaultValue = key;
                }
                return __assign({}, value, { selected: value.key === e.key });
            });
            var settings = __assign({}, paginator[id], { defaultValue: newDefaultValue, pageSize: parseInt(e.label, 10), pageSizeOptions: newPageSizeOptions });
            _this.props.onUpdatePaginator(id, settings);
            _this.props.onChange(settings);
        };
        _this.onPageChange = function (e) {
            var _a = _this.props, id = _a.id, paginator = _a.paginator;
            var settings = __assign({}, paginator[id], { pageIndex: e.pageIndex });
            _this.props.onUpdatePaginator(id, settings);
            _this.props.onChange(settings);
        };
        if (!(props.id in props.paginator)) {
            var settings = {
                defaultValue: props.defaultValue,
                pageIndex: props.pageIndex,
                pageSize: props.pageSize,
                pageSizeOptions: props.pageSizeOptions,
                label: props.label,
                totalItems: props.totalItems,
            };
            if (props.id && props.id.length) {
                props.onSubscribeToPaginatorStore(props.id, settings);
            }
        }
        return _this;
    }
    PaginatorModule.prototype.componentDidUpdate = function (prevProps) {
        if (!(this.props.id in this.props.paginator)) {
            if (this.props.id.length) {
                var settings = {
                    defaultValue: this.props.defaultValue,
                    pageIndex: this.props.pageIndex,
                    pageSize: this.props.pageSize,
                    pageSizeOptions: this.props.pageSizeOptions,
                    label: this.props.label,
                    totalItems: this.props.totalItems,
                };
                this.props.onSubscribeToPaginatorStore(this.props.id, settings);
            }
        }
    };
    PaginatorModule.prototype.render = function () {
        var _a = this.props, id = _a.id, className = _a.className, paginator = _a.paginator, totalItems = _a.totalItems;
        var settings = paginator[id] || this.defaultSettings;
        var defaultValue = settings.defaultValue, pageIndex = settings.pageIndex, pageSize = settings.pageSize, pageSizeOptions = settings.pageSizeOptions, _b = settings.label, label = _b === void 0 ? '' : _b;
        return (React.createElement(toolbox_1.Paginator, { defaultValue: defaultValue, pageSize: pageSize, pageSizeOptions: pageSizeOptions, pageIndex: pageIndex, totalItems: totalItems, onOptionsChange: this.onOptionChange, onPageChange: this.onPageChange, label: label, className: className }));
    };
    return PaginatorModule;
}(React.Component));
var mapStateToProps = function (state) { return ({
    paginator: state.paginator,
}); };
var mapDispatchToProps = function (dispatch) { return ({
    onUpdatePaginator: function (id, settings) {
        return dispatch(paginator_1.paginatorActions.updatePaginator(id, settings));
    },
    onSubscribeToPaginatorStore: function (id, settings) {
        return dispatch(paginator_1.paginatorActions.subscribeToPaginatorStore(id, settings));
    },
}); };
exports.connectedPaginator = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(PaginatorModule);
