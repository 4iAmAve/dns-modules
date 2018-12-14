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
exports.DialoguesContext = React.createContext({
    items: [],
    addDialogue: function (dialogue) { return true; },
    closeDialogue: function (id) { return true; },
    removeDialogue: function (id) { return true; }
});
var DialoguesProvider = (function (_super) {
    __extends(DialoguesProvider, _super);
    function DialoguesProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            items: [],
        };
        _this.addDialogue = function (dialogue) {
            var items = Object.assign([], _this.state.items);
            items.push(__assign({}, dialogue, { id: dialogue.id, content: dialogue.content, triggerClose: false }));
            _this.setState({ items: items });
        };
        _this.closeDialogue = function (id) {
            var items = Object.assign([], _this.state.items);
            items = items.map(function (dialogue) {
                var data = dialogue;
                if (dialogue.id === id) {
                    data.triggerClose = true;
                }
                return data;
            });
            _this.setState({ items: items });
        };
        _this.removeDialogue = function (id) {
            _this.setState({
                items: _this.state.items.filter(function (dialogue) { return dialogue.id !== id; })
            });
        };
        return _this;
    }
    DialoguesProvider.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement(exports.DialoguesContext.Provider, { value: __assign({}, this.state, { addDialogue: this.addDialogue, closeDialogue: this.closeDialogue, removeDialogue: this.removeDialogue }) }, children));
    };
    return DialoguesProvider;
}(React.Component));
exports.default = DialoguesProvider;
