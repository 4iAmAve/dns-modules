"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const debug = require("debug");
const app_1 = require("./app");
debug('ts-express:server');
const port = normalizePort(process.env.PORT || 1337);
app_1.default.set('port', port);
const server = http.createServer(app_1.default);
server.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`Server is listening on ${port}`);
});
server.on('error', onError);
server.on('listening', onListening);
function normalizePort(val) {
    let normalizedPort = (typeof val === 'string') ? parseInt(val, 10) : val;
    if (isNaN(normalizedPort)) {
        return val;
    }
    else if (normalizedPort >= 0) {
        return normalizedPort;
    }
    else {
        return false;
    }
}
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    let addr = server.address();
    let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
}
//# sourceMappingURL=server.js.map