function powerOfTwo(n) {
  if (n < 0) return null;      // handle negative powers (optional)
  if (n === 0) return 1;       // base case: 2^0 = 1
  return 2 * powerOfTwo(n - 1); // recursive step
}

// Example usage:
console.log(powerOfTwo(0)); // 1
console.log(powerOfTwo(3)); // 8
console.log(powerOfTwo(5)); // 32
