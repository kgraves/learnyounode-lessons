var fs = require('fs');

module.exports = function(path, ext, callback) {
  fs.readdir(path, function(error, files) {
    if (error) {
      callback(error, null);
    } else {
      var lines = [];

      files.forEach(function(file) {
        if (file.indexOf('.' + ext) > -1) {
          lines.push(file);
        }
      });

      callback(null, lines);
    }
  });
};
