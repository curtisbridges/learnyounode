var fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', function callback (err, data) {
    if (err) {
        console.error(error);
    } else {
        console.log(data.split('\n').length-1);
    }
});
