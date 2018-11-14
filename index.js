// const fs = require('fs');

// fs.writeFile('./test.txt', 'hello world', function(err) {
//   if (err) {
//     console.error(err);
//     return process.exit(1);
//   }
//   console.log('done');
// });

// console.log('not done');

const express = require('express');

const app = express();

app.get('/', function(req, res, next) {
  res.send('Hello Rithm');
});

app.get('/greet/:name', function(req, res, next) {
  var name = req.params.name;
  res.send('This is a greeting. Hi ' + name);
});

app.get('/add/:num1/:num2', function(req, res, next) {
  var firstNum = Number(req.params.num1);
  var secondNum = Number(req.params.num2);
  var sum = firstNum + secondNum;
  res.send('The sum is ' + sum);
});

app.listen(3000, function() {
  console.log('Express server listening on Port 3000');
});
