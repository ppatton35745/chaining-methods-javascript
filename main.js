// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then subtract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// const text2 = integers.sort((a, b) => b - a).filter(int => {return (int <= 19)}).forEach(function(value, index, array) {array[index] = ((value * 1.5) -1)}).reduce((accumlator, crrentValue) => accumlator + currentValue);

console.log(integers.sort((a, b) => b - a).filter(int => {return (int <= 19)}).map(value => {return ((value * 1.5) -1)}).reduce((accumlator, currentValue) => {return accumlator + currentValue}));

// console.log(text2);

// integers.sort((a,b) => b - a);

// console.log(integers);

// const newIntegers = integers.filter(int => {return (int <= 19)});

// console.log(newIntegers);

// newIntegers.forEach(function(value, index, array) {
//     array[index] = ((value * 1.5) -1);
// });

// console.log(newIntegers);

// const reducer = (accumlator, currentValue) => accumlator + currentValue;

// const test = newIntegers.reduce((accumlator, currentValue) => accumlator + currentValue);

// console.log(test);

// console.log(newIntegers);