// This problem is the same as the previous problem (HTTP COLLECT) in that
// you need to use http.get(). However, this time you will be provided with
// three URLs as the first three command-line arguments.

// You must collect the complete content provided to you by each of the URLs
// and print it to the console (stdout). You don't need to print out the
// length, just the data as a String; one line per URL. The catch is that you
// must print them out in the same order as the URLs are provided to you as
// command-line arguments.

const http = require('http');

const urls = [process.argv[2], process.argv[3], process.argv[4]];


function fetch(url, callback) {
  // console.log(`fetching ${url}`);
  let content = '';
  http.get(url, (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
      content += data;
    });
    response.on('error', (error) => {
      console.error(error);
      callback(error, null);
    });
    response.on('end', () => {
      // console.log(`end ${url} = ${content}`);
      callback(null, content);
    });
  });
}

function fetchAll(urls, callback) {
  const results = {};

  urls.forEach((url) => {
    fetch(url, (err, result) => {
      if (err) {
        return callback(err, null);
      }

      results[url] = result;

      // console.log(`keys = ${Object.keys(results)}`);
      if (Object.keys(results).length === 3) {
        callback(null, results);
      }
    });
  });
}

fetchAll(urls, (err, data) => {
  if (err) {
    return console.log(error);
  }
  // console.log(`results: ${JSON.stringify(results)}`);
  urls.forEach((url) => {
    console.log(data[url]);
  });
});
