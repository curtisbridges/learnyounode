var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2], 'utf-8');
var lines = buffer.split('\n');

console.log(lines.length-1);
