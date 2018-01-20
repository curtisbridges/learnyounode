const fs = require('fs');

const dir = process.argv[2] || '.';
const filter = process.argv[3] || '';

fs.readdir(dir, (err, list) => {
  if (err || list === null) {
    console.log(`Error list files from directory ${dir}: ${err}`);
  } else {
    list.forEach((file) => {
      if (file.endsWith('.' + filter)) {
        console.log(file);
      }
    });
  }
});
