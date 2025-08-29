const prompt = require('prompt-sync')();


function sumOfFirstN(n) {
    if (n>0) {
        return n + sumOfFirstN(n-1);
    }
    else {
        return n;
    }

}
let n = parseInt(prompt("Enter a positive integer: "));

const result = sumOfFirstN(n);

console.log(`The sum is ${result}`);
