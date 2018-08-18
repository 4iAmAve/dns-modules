"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateAttributes = function (node) {
    var attributes = node.attributes;
    var attributesString = '';
    if (attributes && attributes.length) {
        Object.keys(attributes).forEach(function (key) {
            return attributesString += attributes[key].name + "=\"" + attributes[key].nodeValue + "\" ";
        });
    }
    return attributesString.trim();
};
exports.default = generateAttributes;
