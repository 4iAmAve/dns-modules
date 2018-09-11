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
var dialogues_1 = require("../../actions/dialogues");
require("./Dialogue.css");
var Dialogue = (function (_super) {
    __extends(Dialogue, _super);
    function Dialogue(props) {
        var _this = _super.call(this, props) || this;
        _this.handleEscapeClick = function (e) {
            if (e.keyCode === 27) {
                _this.onCloseClick();
            }
        };
        _this.onCloseClick = function () {
            _this.props.onCloseDialogue(_this.props.id);
            if (_this.props.onClose) {
                _this.props.onClose();
            }
        };
        if (!(props.id in props.dialogues)) {
            props.onSubscribeToDialoguesStore(props.id);
        }
        return _this;
    }
    Dialogue.prototype.componentDidUpdate = function (prevProps) {
        if (!(this.props.id in this.props.dialogues)) {
            this.props.onSubscribeToDialoguesStore(this.props.id);
        }
        else {
            if (!prevProps.dialogues[this.props.id] && this.props.dialogues[this.props.id]) {
                document.addEventListener('keyup', this.handleEscapeClick, false);
            }
            else if (prevProps.dialogues[this.props.id] && !this.props.dialogues[this.props.id]) {
                document.removeEventListener('keyup', this.handleEscapeClick, false);
            }
        }
    };
    Dialogue.prototype.render = function () {
        var _this = this;
        var _a = this.props, dialogues = _a.dialogues, id = _a.id, containerClassNames = _a.containerClassNames, content = _a.content, children = _a.children;
        return (React.createElement("div", { className: "\n          dialogue\n          " + (dialogues[id] ? 'dialogue_open' : '') + "\n          " + (containerClassNames ? containerClassNames : '') + "\n        " },
            React.createElement("div", { className: "dialogue-back-drop", onClick: function () { return _this.onCloseClick(); } }),
            React.createElement("div", { className: "dialogue-container" },
                React.createElement(toolbox_1.GenericDialogue, __assign({}, this.props, { content: content ? content : children, onClose: this.onCloseClick })))));
    };
    Dialogue.defaultProps = {
        width: 'auto',
        id: 0,
        title: null,
    };
    return Dialogue;
}(React.Component));
var mapStateToProps = function (state, ownProps) { return ({
    dialogues: state.dialogues,
}); };
var mapDispatchToProps = function (dispatch) { return ({
    onCloseDialogue: function (id) { return dispatch(dialogues_1.dialoguesActions.closeDialogue(id)); },
    onSubscribeToDialoguesStore: function (id) { return dispatch(dialogues_1.dialoguesActions.subscribeToDialoguesStore(id)); },
}); };
exports.connectedDialogue = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Dialogue);
