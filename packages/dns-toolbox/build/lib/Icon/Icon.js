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
require("./Icon.css");
var Icon = /** @class */ (function (_super) {
    __extends(Icon, _super);
    function Icon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Icon.prototype.render = function () {
        var _a = this.props, classNames = _a.classNames, icon = _a.icon, type = _a.type;
        var modifier = type === 'success' ? 'icon--success' :
            type === 'danger' ? 'icon--danger' :
                type === 'accent' ? 'icon--accent' :
                    type === 'primary' ? 'icon--primary' :
                        type === 'warning' ? 'icon--warning' : '';
        return (React.createElement("i", { className: "\n          material-icons\n          icon\n          " + (classNames ? classNames : '') + "\n          " + (type ? modifier : '') + "\n        " }, icon));
    };
    Icon.defaultProps = {
        type: 'accent',
    };
    return Icon;
}(React.Component));
exports.Icon = Icon;
