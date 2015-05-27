sum = 0;
nums = process.argv.slice(2);

nums.forEach(function(n) {
  sum += parseInt(n);
});

console.log(sum);
