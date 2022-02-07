// Variables and Scopes

// The three keywords to create variables are:
// var - can have Global, Module and Function scope
// let - can have all scopes
// const - constant variable that cannot be overriden, can have all scopes

// The four scopes are:
// Global - visible by everything
// Module - visible within a module
// Function - visible within a function
// (and its sub-functions and blocks)
// Block - visible within a block
// (and its sub-blocks)

// Outside of the special cases of global and module scope, variables are declared using var (function scope), let (block scope), and const (block scope).

const doSomething = (a, b) => {
  if (typeof a !== "number") {
    var aNumber = Number(a);
    let bNumber = Number(b);
  }
  console.log(aNumber);
  //   console.log(bNumber);
  var sum = a + b;
  return sum;
};
console.log(doSomething("1", 2));
console.log(sum);
