var fs = require('fs');

var path = process.argv[2];
var ext = process.argv[3];

fs.readdir(path, function(error, files) {
  files.forEach(function(file) {
    if (file.indexOf('.' + ext) > -1) {
      console.log(file);
    }
  });
});
