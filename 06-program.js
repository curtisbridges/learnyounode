// 1. Export a single function that takes exactly the arguments described.
// 2. Call the callback exactly once with an error or some data as described.
// 3. Don't change anything else, like global variables or stdout.
// 4. Handle all the errors that may occur and pass them to the callback.

var mymodule = require('./06-module.js')

const dir = process.argv[2] || '.';
const extension = process.argv[3] || '';

mymodule(dir, extension, (err, files) => {
  if (err) {
    console.error(err);
  } else {
    files.forEach(file => {
      console.log(file);
    });
  }
});