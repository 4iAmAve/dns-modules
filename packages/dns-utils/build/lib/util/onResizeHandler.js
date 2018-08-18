"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton = (function () {
    var instance = false;
    function createInstance() {
        var onResizeHandler = function (width, height) {
            window.parent.postMessage({ action: 'setIframeHeight', height: height }, '*');
        };
        return onResizeHandler;
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();
exports.default = Singleton.getInstance();
