const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
//const port = 3000;

const port = fs.readFileSync( "./files/port-number");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port.readUIntBE(), hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});