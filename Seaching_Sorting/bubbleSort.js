// to take user input , in js : npm install prompt-sync
const prompt = require('prompt-sync')();

// Take input from the user
let input = prompt("Enter numbers separated by spaces: ");
let arr = input.split(" ").map(Number); // Convert to array of numbers

function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

console.log("Sorted array:", bubbleSort(arr));
