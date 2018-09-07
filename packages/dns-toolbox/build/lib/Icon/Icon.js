"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var utils_1 = require("@dns/utils");
require("./Icon.css");
exports.Icon = function (props) {
    var classNames = props.classNames, icon = props.icon, type = props.type, onClick = props.onClick;
    var modifier = type === 'success' ? 'icon--success' :
        type === 'danger' ? 'icon--danger' :
            type === 'accent' ? 'icon--accent' :
                type === 'primary' ? 'icon--primary' :
                    type === 'warning' ? 'icon--warning' : '';
    return (React.createElement("i", { className: "\n        material-icons\n        icon\n        " + (classNames ? classNames : '') + "\n        " + (type ? modifier : '') + "\n      ", onClick: onClick ? onClick : utils_1.noop }, icon));
};
