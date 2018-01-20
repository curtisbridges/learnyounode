const fs = require('fs');
const path = require('path');

module.exports = function (dir, extension, callback) {
  fs.readdir(dir, (err, files) => {
    if (err || files === null) {
      callback(err, null);
    } else {
      files = files.filter((file) => {
        return path.extname(file) === '.' + extension;
      });
      callback(null, files);
    }
  });
}
