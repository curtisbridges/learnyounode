// Write an HTTP server that receives only POST requests and converts
// incoming POST body characters to upper-case and returns it to the client.

// Your server should listen on the port provided by the first argument to
// your program.

const http = require('http');

const port = process.argv[2] || 2400;

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    const map = require('through2-map')
    req.pipe(map((chunk) => {
      return chunk.toString().toUpperCase();
    })).pipe(res);
  }
});
server.listen(port);
