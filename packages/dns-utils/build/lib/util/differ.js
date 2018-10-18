"use strict";
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
var keepUnchanged = true;
var entireObj = false;
function determineAdded(newObj, oldObj, cur) {
    var result = Object.assign({}, cur);
    var toCompare = Object.assign({}, newObj);
    Object.keys(toCompare).forEach(function (value) {
        var _a;
        if (!(value in oldObj)) {
            if (entireObj) {
                result[value] = {
                    type: 'added',
                    key: value,
                    value: toCompare[value]
                };
            }
            else {
                result['__added'] = __assign({}, result['__added'], (_a = {}, _a[value] = newObj[value], _a));
            }
            delete toCompare[value];
        }
        else if (toCompare[value] instanceof Object || toCompare[value] instanceof Array) {
            var newResult = determineDiff(toCompare[value], oldObj[value]);
            result[value] = __assign({}, newResult);
        }
    });
    return { result: result, alteredNewObj: toCompare };
}
function determineRemoved(newObj, oldObj, cur) {
    var result = Object.assign({}, cur);
    var toCompare = Object.assign({}, oldObj);
    Object.keys(toCompare).forEach(function (value) {
        var _a;
        if (!(value in newObj)) {
            if (entireObj) {
                result[value] = {
                    type: 'removed',
                    key: value,
                    value: toCompare[value]
                };
            }
            else {
                result['__removed'] = __assign({}, result['__removed'], (_a = {}, _a[value] = toCompare[value], _a));
            }
            delete toCompare[value];
        }
        else if (toCompare[value] instanceof Object || toCompare[value] instanceof Array) {
            var newResult = determineDiff(newObj[value], toCompare[value]);
            result[value] = __assign({}, newResult);
        }
    });
    return { result: result, alteredOldObj: toCompare };
}
function determineChanged(newObj, oldObj, cur) {
    var result = Object.assign({}, cur);
    var comparor = Object.assign({}, newObj);
    var comparee = Object.assign({}, oldObj);
    Object.keys(comparor).forEach(function (value) {
        var _a;
        if (value in comparee) {
            if (comparor[value] instanceof Object || comparor[value] instanceof Array) {
                var newResult = determineDiff(comparor[value], comparee[value]);
                result[value] = __assign({}, newResult);
            }
            else if (comparor[value] !== comparee[value]) {
                if (entireObj) {
                    result[value] = {
                        type: 'changed',
                        key: value,
                        from: comparee[value],
                        to: comparor[value]
                    };
                }
                else {
                    result['__changed'] = __assign({}, result['__changed'], (_a = {}, _a[value] = {
                        from: oldObj[value],
                        to: newObj[value]
                    }, _a));
                }
                delete comparor[value];
                delete comparee[value];
            }
        }
    });
    return { result: result, alteredOldObj: comparee, alteredNewObj: comparor };
}
function determineUnchanged(newObj, oldObj, cur) {
    var result = Object.assign({}, cur);
    if (!keepUnchanged) {
        return result;
    }
    Object.keys(newObj).forEach(function (value) {
        var _a;
        if (value in oldObj) {
            if (newObj[value] instanceof Object || newObj[value] instanceof Array) {
                var newResult = determineDiff(newObj[value], oldObj[value]);
                result[value] = __assign({}, newResult);
            }
            else if (newObj[value] === oldObj[value]) {
                if (entireObj) {
                    result[value] = {
                        type: 'unchanged',
                        key: value,
                        value: newObj[value]
                    };
                }
                else {
                    result['__unchanged'] = __assign({}, result['__unchanged'], (_a = {}, _a[value] = newObj[value], _a));
                }
                delete newObj[value];
            }
        }
    });
    return result;
}
function determineDiff(newObj, oldObj) {
    var cNew = Object.assign({}, newObj);
    var cOld = Object.assign({}, oldObj);
    var cur = {};
    var _a = determineAdded(cNew, cOld, cur), rNew = _a.result, alteredNewObj = _a.alteredNewObj;
    cNew = alteredNewObj;
    cur = rNew;
    var _b = determineRemoved(cNew, cOld, cur), rOld = _b.result, alteredOldObj = _b.alteredOldObj;
    cOld = alteredOldObj;
    cur = rOld;
    var _c = determineChanged(cNew, cOld, cur), resultChanged = _c.result, aOO = _c.alteredOldObj, aNO = _c.alteredNewObj;
    cNew = aNO;
    cOld = aOO;
    cur = resultChanged;
    return determineUnchanged(cNew, cOld, cur);
}
function differ(diffObj) {
    var oldObj = diffObj.oldObj, newObj = diffObj.newObj, excludeUnchanged = diffObj.excludeUnchanged, returnEntireObj = diffObj.returnEntireObj;
    keepUnchanged = !excludeUnchanged;
    entireObj = returnEntireObj ? returnEntireObj : false;
    if (!oldObj || !newObj) {
        throw 'The old or new object to compare with is missing.';
    }
    if ((!(oldObj instanceof Object) || !(oldObj instanceof Array)) &&
        (!(newObj instanceof Object) || !(newObj instanceof Object))) {
        throw 'The old or new object is not an instance of Object.';
    }
    var newClone = Object.assign({}, newObj);
    var oldClone = Object.assign({}, oldObj);
    return determineDiff(newClone, oldClone);
}
exports.differ = differ;
