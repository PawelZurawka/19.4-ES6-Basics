'use strict';

//task 1
var x = 'Hello';
var y = 'World!';
var sayHello = x + ' ' + y;
console.log(sayHello);

//task2
var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};
console.log(multiply(2, 5));
console.log(multiply(13));

//task3
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return console.log(args.reduce(function (total, arg) {
    return total + arg;
  }) / args.length);
};

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

//task4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average.apply(undefined, grades);
console.log(average.apply(undefined, grades));

//task5
var array = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = array[2],
    lastname = array[4];

console.log(firstname, lastname);
