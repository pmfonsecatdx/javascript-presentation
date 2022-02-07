const numbers = [5, 12, 8, 130, 44];

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
console.log(numbers.map((x) => x * 2));

// The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
// If no values satisfy the testing function, undefined is returned.
console.log(numbers.find((x) => x > 10));

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// If no values satisfy the testing function, empty array is returned.
console.log(numbers.filter((x) => x > 10));

// The reduce() method executes a reducer” callback function on each element of the array,
// passing in the return value from the calculation on the preceding element.
// The final result is a single value.

// Converts to string and concatenates all elements in the array
console.log(
  numbers.reduce(
    (previousValue, currentValue) => `${previousValue} ${currentValue},`,
    ""
  )
);

// Sums all elements in the array
console.log(
  numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  )
);
