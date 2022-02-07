// Loops in javascript
// Use loops to get a new array that each element is doubled without mutating the original array
let numbers = [1, 4, 9, 16];
const double = (x) => x * 2;

// using a for loop
let numbers2 = [];
for (let number of numbers) {
  numbers2.push(double(number));
}
console.log(numbers2);

// using a for loop
let numbers3 = [];
for (let i = 0; i < numbers.length; i++) {
  numbers3.push(double(numbers[i]));
}
console.log(numbers3);

// using a while loop
let copyNumbers = [...numbers];
let numbers4 = [];
while (copyNumbers.length > 0) {
  numbers4.push(double(copyNumbers.shift()));
}
console.log(numbers4);

// using array.map
let numbers5 = numbers.map(double);
console.log(numbers5);
console.log(numbers);
