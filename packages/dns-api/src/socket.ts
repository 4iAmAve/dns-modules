// Open a connection
const socket = new WebSocket('ws://localhost:8081/');

// When a connection is made
socket.onopen = () => {
  console.log('Opened connection ');

  // send data to the server
  const json = JSON.stringify({ message: 'Hello ' });
  socket.send(json);
};

// When data is received
socket.onmessage = event => {
  console.log(event.data);
};

// A connection could not be made
socket.onerror = event => {
  console.log(event);
};

// // A connection was closed
// socket.onclose = (code: WebSocket, reason: CloseEvent): any => {
//   console.log(code, reason);
//   return;
// };

// Close the connection when the window is closed
window.addEventListener('beforeunload', function() {
  socket.close();
});

export default socket;
