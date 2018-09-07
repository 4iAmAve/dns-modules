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
var Checkbox_1 = require("../Checkbox/Checkbox");
var Icon_1 = require("../Icon/Icon");
var IconButton_1 = require("../IconButton/IconButton");
var Chip_1 = require("../Chip/Chip");
require("./Table.css");
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sortDirection = {};
        _this.buildOperations = function (operations, data, rowKey) {
            var elements = [];
            if (operations) {
                operations.map(function (operation, id) { return (elements.push(React.createElement(IconButton_1.IconButton, { key: id, icon: operation.icon, color: operation.type, type: "simple", classNames: operation.classNames, onClick: function () { return operation.action(data, rowKey); } }))); });
            }
            return elements;
        };
        _this.handleOnSort = function (definition) {
            var curDir = _this.sortDirection[definition];
            var nextDir = null;
            if (curDir) {
                switch (curDir) {
                    case 'desc':
                        nextDir = 'asc';
                        break;
                    case 'asc':
                        nextDir = null;
                        break;
                    default:
                        nextDir = 'desc';
                        break;
                }
            }
            else {
                nextDir = 'desc';
            }
            _this.sortDirection[definition] = nextDir;
            return _this.props.onSortChange && _this.props.onSortChange(definition, nextDir);
        };
        _this.renderHeader = function (column, key) {
            var classNames = column.classNames, definition = column.definition, label = column.label, 
            /*action, */
            // render,
            small = column.small, sortable = column.sortable, type = column.type, withHeaderOperation = column.withHeaderOperation;
            var operationsClass = _this.props.operationsClass;
            var node = null;
            switch (type) {
                case 'select':
                    return (React.createElement("div", { className: "\n                column_select\n                " + (classNames ? classNames : '') + "\n              ", key: key },
                        React.createElement(Checkbox_1.Checkbox, { onChange: function () { return console.log('eeeeee'); }, id: "all" })));
                case 'expand':
                    return (React.createElement("div", { className: "\n                column_toggle\n                " + (classNames ? classNames : '') + "\n              ", key: key }, label));
                case 'operations':
                    node = _this.buildOperations(withHeaderOperation, 'header-operation');
                    return (React.createElement("div", { key: "operations-" + key, className: "\n                column_operation\n                " + (operationsClass ? operationsClass : '') + "\n                " + (classNames ? classNames : '') + "\n              " }, node));
                default:
                    node = _this.buildOperations(withHeaderOperation, 'header-operation');
                    return (React.createElement("div", { key: key, className: "\n              " + (small ? 'column--small' : '') + "\n              " + (classNames ? classNames : '') + "\n            " },
                        label,
                        node,
                        sortable ?
                            React.createElement("span", { className: "column_sort" },
                                React.createElement(Icon_1.Icon, { icon: 'sort_by_alpha', onClick: function () { return _this.handleOnSort(definition); } })) : null));
            }
        };
        _this.handleRowClick = function (data, key) {
            var onRowClick = _this.props.onRowClick;
            if (onRowClick) {
                onRowClick(data, key);
            }
        };
        _this.handleColumnClick = function (column, data, key, checked) {
            var onClick = column.onClick;
            if (onClick) {
                onClick(data, key, checked);
            }
        };
        _this.renderRow = function (data, rowKey) {
            var _a = _this.props, columns = _a.columns, operationsClass = _a.operationsClass, renderSubPanel = _a.renderSubPanel, selectedRow = _a.selectedRow;
            var element = [];
            Object.keys(columns).forEach(function (key) {
                var column = columns[key];
                switch (column.type) {
                    case 'select':
                        element.push(React.createElement("div", { className: "\n                column_select\n                " + (column.classNames ? column.classNames : '') + "\n              ", key: "select-" + key },
                            React.createElement(Checkbox_1.Checkbox, { onChange: function (e, checked) { return _this.handleColumnClick(column, data, rowKey, checked); }, id: "single" })));
                        break;
                    case 'expand':
                        element.push(React.createElement("div", { className: "\n                column_toggle\n                " + (column.classNames ? column.classNames : '') + "\n              ", key: "expand-" + key, onClick: function () { return _this.handleColumnClick(column, data, rowKey); } },
                            React.createElement("i", { className: "material-icons" }, "keyboard_arrow_down")));
                        break;
                    case 'operations':
                        var operations = _this.buildOperations(column.operations, data, rowKey);
                        element.push(React.createElement("div", { key: "operations-" + key, className: "\n                column_operation\n                " + (operationsClass ? operationsClass : '') + "\n                " + (column.classNames ? column.classNames : '') + "\n              " }, operations));
                        break;
                    case 'render':
                        var render = column.render(data, rowKey);
                        element.push(render);
                        break;
                    case 'chip':
                        var chip = (React.createElement("div", { key: "default-" + key, className: "\n                  column-chip\n                  " + (column.small ? 'column--small' : '') + "\n                  " + (column.classNames ? column.classNames : '') + "\n                " },
                            React.createElement(Chip_1.Chip, { title: data[column.definition], id: rowKey + "-" + key, deletable: false, fullWidth: column.fullWidth, selectable: column.selectable, onClick: function () { return _this.handleColumnClick(column, data, rowKey); } })));
                        element.push(chip);
                        break;
                    case 'date':
                        var date = data[column.definition];
                        date = column.formater(date);
                        element.push(React.createElement("div", { key: "default-" + key, className: "\n                  " + (column.small ? 'column--small' : '') + "\n                  " + (column.classNames ? column.classNames : '') + "\n                ", onClick: function () { return _this.handleColumnClick(column, data, rowKey); } }, date));
                        break;
                    case 'link':
                        var value = data[column.definition];
                        var elem = 'invalid link';
                        if (utils_1.validURL(value)) {
                            elem = React.createElement("a", { href: value, target: "_blank" }, "Link");
                        }
                        element.push(React.createElement("div", { key: "default-" + key, className: "\n                " + (column.small ? 'column--small' : '') + "\n                " + (column.classNames ? column.classNames : '') + "\n              " }, elem));
                        break;
                    default:
                        var content = data[column.definition];
                        if (column.validate) {
                            if (data[column.definition]) {
                                content = column.validate[0];
                            }
                            else {
                                content = column.validate[1];
                            }
                        }
                        var domElement = null;
                        domElement = (React.createElement("div", { key: "default-" + key, className: "\n                " + (column.small ? 'column--small' : '') + "\n                " + (column.classNames ? column.classNames : '') + "\n              ", onClick: function () { return _this.handleColumnClick(column, data, rowKey); } }, content));
                        element.push(domElement);
                        break;
                }
            });
            return (React.createElement(React.Fragment, { key: "t_fragment-" + rowKey },
                React.createElement("div", { className: "\n            table_content\n            " + (selectedRow === rowKey ? 'table_selected-row' : '') + "\n          ", onClick: function () { return _this.handleRowClick(data, rowKey); } }, element),
                renderSubPanel ?
                    React.createElement("div", { className: "table_row_sub-panel " + (selectedRow === rowKey ? 'table_selected-row' : '') }, renderSubPanel(data, rowKey)) : null));
        };
        _this.handleRef = function (ref) { return _this.table = ref; };
        return _this;
    }
    Table.prototype.render = function () {
        var _this = this;
        var _a = this.props, classNames = _a.classNames, columns = _a.columns, data = _a.data, detailContent = _a.detailContent, emptyLabel = _a.emptyLabel, stickyHeader = _a.stickyHeader, withoutHeader = _a.withoutHeader;
        return (React.createElement("div", { className: "\n          table_container\n          " + (classNames ? classNames : '') + "\n        ", ref: this.handleRef },
            React.createElement("div", { className: "table " + (detailContent ? 'table--with-detail-content' : '') + "\n            " + (stickyHeader ? 'table--with-sticky-header' : '') + " " + (withoutHeader ? 'table--without-header' : '') + "\n          " },
                withoutHeader ?
                    null :
                    React.createElement("div", { className: "table_header" }, columns.map(function (column, key) { return (_this.renderHeader(column, key)); })),
                React.createElement("div", { className: "table_content-wrapper" }, data && data.length ?
                    data.map(function (rowData, key) { return (_this.renderRow(rowData, key)); }) :
                    React.createElement("div", { className: "table--empty" }, emptyLabel))),
            detailContent ?
                React.createElement("div", { className: "table_detail-content" }, detailContent) : null));
    };
    Table.defaultProps = {
        columns: [],
        data: [],
        emptyLabel: 'no data available',
        selectedRow: -1,
        stickyHeader: true,
        withoutHeader: false
    };
    return Table;
}(React.Component));
exports.Table = Table;
