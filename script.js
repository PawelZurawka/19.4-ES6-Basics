//task 1
const x = 'Hello';
const y = 'World!';
const sayHello = `${x} ${y}`;
console.log(sayHello);

//task2
const multiply = (a, b = 1) => a * b;
console.log(multiply(2, 5));
console.log(multiply(13));

//task3
const average = (...args) =>
  console.log(args.reduce((total, arg) => total + arg) / args.length);

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

//task4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);
console.log(average(...grades));

//task5
const array = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstname, , lastname] = array;
console.log(firstname, lastname);
