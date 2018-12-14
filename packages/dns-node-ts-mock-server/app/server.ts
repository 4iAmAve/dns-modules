import * as debug from 'debug';
import * as fs from 'fs';
import * as http from 'http';
import * as https from 'https';

import app from './app';

const privateKey  = fs.readFileSync('./sslcert/server.key', 'utf8');
const certificate = fs.readFileSync('./sslcert/server.crt', 'utf8');
const credentials = {
  cert: certificate,
  key: privateKey,
  requestCert: true,
  rejectUnauthorized: false,
};
debug('ts-express:server');
const port = normalizePort(process.env.PORT || 1337);
const sslPort = normalizePort(process.env.SSL_PORT || 8443);
app.set('port', port);

const server = http.createServer(app);
server.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`Server is listening on ${port}`);
});
server.on('error', onError);
server.on('listening', onListening);

const httpsServer = https.createServer(credentials, app);
httpsServer.listen(sslPort, (err) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`HTTPS Server is listening on ${sslPort}`);
});
httpsServer.on('error', onError);
httpsServer.on('listening', onListening);

function normalizePort(val: number|string): number | string | boolean {
  let normalizedPort: number = (typeof val === 'string') ? parseInt(val, 10) : val;
  if (isNaN(normalizedPort)) {
    return val;
  } else if (normalizedPort >= 0) {
    return normalizedPort;
  } else {
    return false;
  }
}

function onError(error: NodeJS.ErrnoException): void {
  console.log(`onERROR ${error}`);
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

function onListening(): void {
  let addr = server.address();
  let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}
