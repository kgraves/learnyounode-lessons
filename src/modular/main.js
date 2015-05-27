var mymodule = require('./mymodule');

var path = process.argv[2];
var ext = process.argv[3];
var callback = function(error, lines) {
  if (error) {
    console.log('error reading files');
  } else {
    lines.forEach(function(line) {
      console.log(line);
    });
  }
};

mymodule(path, ext, callback);
