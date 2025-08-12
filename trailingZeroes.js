/*  What makes a trailing zero?
A trailing zero means a number is divisible by 10.

10 = 2 × 5

In factorials, every time you multiply by an even number, you get a factor of 2.
So 2’s are plentiful.
The limiting factor for making 10’s is how many 5’s are in the factors of n!. */

function trailingZeroes(n) {
    let count = 0;

    // Keep dividing by 5, adding the quotient
    while (n > 0) {
        n = Math.floor(n / 5);
        count += n;
    }

    return count;
}

// Example usage:
console.log(trailingZeroes(3)); // 0
console.log(trailingZeroes(5)); // 1
console.log(trailingZeroes(0)); // 0
