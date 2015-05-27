var fs = require('fs');

path = process.argv[2];

fs.readFile(path, function(error, data) {
  var num = data.toString().split('\n').length - 1;
  console.log(num);
});
