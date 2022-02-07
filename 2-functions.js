// Functions

// Without return value - old format
function logMessage(message) {
  console.log(message);
}
logMessage("Potato");

// with default value - new arrow function format
const logMessage2 = (message = "default message") => console.log(message);
logMessage2();
logMessage2("Carrot");

// with return value - new arrow function format
const add = (a, b) => {
  return a + b;
};
