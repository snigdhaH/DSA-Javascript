// Print N to 1
function printNto1(n) {
    if (n === 0) return; // base case
    console.log(n);
    printNto1(n - 1); // recursive call with smaller number
}

// Print 1 to N
function print1toN(n) {
    if (n === 0) return; // base case
    print1toN(n - 1); // first recursive call to reach 1
    console.log(n);   // print after recursion unwinds
}

// Example usage:
console.log("N to 1:");
printNto1(5);

console.log("1 to N:");
print1toN(5);
