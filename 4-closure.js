// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state.
// So to put it simple, closures circumvents the scope rules to allow variables outside of their scope.
// Here’s an example:

const generateSecretCode = () => {
  const secretCode = "id" + Math.random().toString(16).slice(2);

  // secret code is accesible inside the function generateSecretCode
  console.log(secretCode);

  // Instead of returning the secret code directly, we can return a function that has a closure
  // This function will be able to be executed outside of generateSecretCode and still be able to access or change secretCode variable
  return (user) =>
    `Hello ${user}, let's do something with secret code: ${secretCode}`;
};

const functionWithScope = generateSecretCode();
console.log(functionWithScope("Pedro"));
