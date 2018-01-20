// Write an HTTP server that serves the same text file for each request it
// receives.

// Your server should listen on the port provided by the first argument to
// your program.

// You will be provided with the location of the file to serve as the second
// command-line argument. You must use the fs.createReadStream() method to
// stream the file contents to the response.

const http = require('http');
const fs = require('fs');

const port = process.argv[2] || 2400;
const file = process.argv[3] || process.argv[1]; // self-serve if no param!

const server = http.createServer((req, res) => {
  source = fs.createReadStream(file);
  source.pipe(res);
});
server.listen(port);

