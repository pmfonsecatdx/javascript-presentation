//String interpolation or Template literals are literals delimited with backticks (`), allowing embedded expressions called substitutions.

const number = 4;
const strings = 'strings';

console.log('There are several methods available to create strings');
console.log('Most common is to use the + sign to join ' + number + ' and ' + strings + ' as well!');
console.log('We can also use string contat to join strings and numbers: '.concat(number).concat(strings));
console.log(`A better and more modern alternative is to interpolate ${number} with ${strings} directly.`);
