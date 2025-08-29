// Import prompt-sync for taking input from the terminal
const prompt = require('prompt-sync')();

// Recursive function to calculate sum of all numbers in an array
function sumArray(arr) {
  // Base case 1: if the array is empty, sum is 0
  if (arr.length === 0) return 0;

  // Base case 2: if the array has only one element, return that element
  if (arr.length === 1) return arr[0];

  // Recursive case:
     //slice(start, end) → returns a shallow copy of part of an array, from index start up to (but not including) index end.
    //If you give only one argument (slice(1)), it means “take from index 1 to the end”.
  return arr[0] + sumArray(arr.slice(1));
}

// Take user input as a string (e.g., "2 4 6 8")
let input = prompt("Enter numbers separated by spaces: ");

// Convert input string into an array of numbers
let arr = input.split(" ").map(Number);

// Call the recursive function and display the result
console.log("Sum of array:", sumArray(arr));
