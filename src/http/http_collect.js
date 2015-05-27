var http = require('http')

var url = process.argv[2];

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
    console.log(message.length);
    console.log(message);
  });

});
