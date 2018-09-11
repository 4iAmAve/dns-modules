"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var xmlToJson = function (xml) {
    var obj = {};
    if (xml.nodeType === 1) {
        if (xml.attributes.length > 0) {
            obj['@attributes'] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                if (attribute && attribute.nodeName) {
                    obj['@attributes'][attribute.nodeName] = attribute.nodeValue;
                }
            }
        }
    }
    else if (xml.nodeType === 3) {
        obj = xml.nodeValue;
    }
    if (xml.hasChildNodes() && xml.childNodes.length === 1 && xml.childNodes[0].nodeType === 3) {
        obj = xml.childNodes[0].nodeValue;
    }
    else if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof (obj[nodeName]) === 'undefined') {
                obj[nodeName] = xmlToJson(item);
            }
            else {
                if (typeof (obj[nodeName].push) === 'undefined') {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(xmlToJson(item));
            }
        }
    }
    return obj;
};
exports.default = xmlToJson;
