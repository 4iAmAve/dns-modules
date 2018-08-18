"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var estimateBandWidth = function (src) {
    var imageAddr = src || "/images/image.jpg?n=" + Math.random();
    var startTime;
    var endTime;
    var downloadSize = 4995374;
    var download = new Image();
    var showResult = function () {
        var duration = Math.round((endTime - startTime) / 1000);
        var bitsLoaded = downloadSize * 8;
        var speedBps = Math.round(bitsLoaded / duration);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);
        console.log("\n      Your connection speed is: " + speedBps + "bps, " + speedKbps + "kbps and " + speedMbps + " Mbps\n    ");
    };
    download.onload = function () {
        endTime = (new Date()).getTime();
        showResult();
    };
    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = "" + imageAddr + cacheBuster;
};
exports.default = estimateBandWidth;
