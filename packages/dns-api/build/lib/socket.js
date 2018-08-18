"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Open a connection
var socket = new WebSocket('ws://localhost:8081/');
// When a connection is made
socket.onopen = function () {
    console.log('Opened connection ');
    // send data to the server
    var json = JSON.stringify({ message: 'Hello ' });
    socket.send(json);
};
// When data is received
socket.onmessage = function (event) {
    console.log(event.data);
};
// A connection could not be made
socket.onerror = function (event) {
    console.log(event);
};
// // A connection was closed
// socket.onclose = (code: WebSocket, reason: CloseEvent): any => {
//   console.log(code, reason);
//   return;
// };
// Close the connection when the window is closed
window.addEventListener('beforeunload', function () {
    socket.close();
});
exports.default = socket;
