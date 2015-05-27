var fs = require('fs');

path = process.argv[2];

var file = fs.readFileSync(path).toString();
var num = file.split('\n').length - 1;
console.log(num);
