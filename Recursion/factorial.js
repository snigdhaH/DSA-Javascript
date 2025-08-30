// Import prompt-sync for input
const prompt = require('prompt-sync')();

// Ask the user for a number
let n = Number(prompt("Enter a non-negative whole number: "));

// Recursive factorial function
function factorial(n) {
  // Check if input is a non-negative integer
  if (!Number.isInteger(n) || n < 0) return null;

  // Base cases: 0! = 1, 1! = 1
  if (n === 0 || n === 1) return 1;

  // Recursive case: n * factorial of (n-1)
  return n * factorial(n - 1);
}

// Call factorial function
let result = factorial(n);

// Print result or error message
if (result === null) {
  console.log("Please enter a non-negative whole number.");
} else {
  console.log(`Factorial of ${n} is: ${(result)}`);
}
