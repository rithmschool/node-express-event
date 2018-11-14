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
  if (name === 'whiskey') {
    return next(); // GET OUTTA HERE
  }
  res.send('This is a greeting. Hi ' + name);
});

app.get('/greet/whiskey', function(req, res, next) {
  var name = req.params.name;
  res.send('OH HELLO WHISKEY');
});

app.get('/:operation/:num1/:num2', function(req, res, next) {
  var op = req.params.operation;
  var num1 = Number(req.params.num1);

  if (isNaN(num1)) {
    var error = new Error('num1 has to be a proper number.');
    return next(error);
  }
  var num2 = Number(req.params.num2);
  if (isNaN(num2)) {
    var error = new Error('num2 has to be a proper number.');
    return next(error);
  }

  var result;

  if (op === 'add') {
    result = num1 + num2;
  } else if (op === 'subtract') {
    result = num1 - num2;
  } else if (op === 'divide') {
    result = num1 / num2;
  } else if (op === 'multiply') {
    result = num1 * num2;
  }

  res.send('The result is ' + result);
});

// ERROR HANDLER
app.use(function(error, req, res, next) {
  res.send('SOMETHING BAD HAPPENED: ' + error.message);
});

// app.get('/add/:num1/:num2', function(req, res, next) {
//   var firstNum = Number(req.params.num1);
//   var secondNum = Number(req.params.num2);
//   var sum = firstNum + secondNum;
//   res.send('The sum is ' + sum);
// });

// app.get('/subtract/:num1/:num2', function(req, res, next) {
//   var firstNum = Number(req.params.num1);
//   var secondNum = Number(req.params.num2);
//   var difference = firstNum - secondNum;
//   res.send('The difference is ' + difference);
// });

app.listen(3000, function() {
  console.log('Express server listening on Port 3000');
});
