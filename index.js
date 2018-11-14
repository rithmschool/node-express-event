const fs = require('fs');

fs.writeFile('./test.txt', 'hello world', function(err) {
  if (err) {
    console.error(err);
    return process.exit(1);
  }
  console.log('done');
});

console.log('not done');
