/* count digits of a number  */

function countDigits(num) {
    num = Math.abs(num); // handle negative input
    if (num === 0) return 1;

    let count = 0;
    while (num !== 0) {
        count++;
        num = Math.floor(num / 10); // avoid floating point issues
    }
    return count;
}

console.log(countDigits(234)); // Output: 3
