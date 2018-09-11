"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socket = new WebSocket('ws://localhost:8081/');
socket.onopen = function () {
    console.log('Opened connection ');
    var json = JSON.stringify({ message: 'Hello ' });
    socket.send(json);
};
socket.onmessage = function (event) {
    console.log(event.data);
};
socket.onerror = function (event) {
    console.log(event);
};
window.addEventListener('beforeunload', function () {
    socket.close();
});
exports.default = socket;
