var http = require('http')

var endCount = 0;

var urls = [
  process.argv[2],
  process.argv[3],
  process.argv[4]
];

var urlToData = {};
urlToData[urls[0]] = '';
urlToData[urls[1]] = '';
urlToData[urls[2]] = '';

var done = function() {
  Object.keys(urlToData).forEach(function(key) {
    console.log(urlToData[key]);
  });
};

urls.forEach(function(url) {

  http.get(url, function(response) {
    response.setEncoding('utf8');
    var message = '';

    response.on('data', function(data) {
      message += data;
    });

    response.on('error', function(error) {
      console.log('uh oh...there was an error.');
    });

    response.on('end', function() {
      urlToData[url] = message;
      endCount += 1;

      if (endCount === 3) {
        done();
      }
    });

  });

});
