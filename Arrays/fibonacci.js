/* Problem:
Write a function to return the n-th Fibonacci number.
The Fibonacci sequence is: 0, 1, 1, 2, 3, 5, 8, 13...

Fib(0) = 0
Fib(1) = 1
Fib(n) = Fib(n-1) + Fib(n-2) for n ≥ 2

Examples:

fibonacci(5) → 5

fibonacci(7) → 13 */
function fibonacci(n) {
    if (n <= 0) return;
    let a = 0, b = 1;

    process.stdout.write(a + ' ');
    if (n > 1) process.stdout.write(b + ' '); // print it sideways 

    for (let i = 2; i < n; i++) {
        let next = a + b;
        process.stdout.write(next + ' ');
        a = b;
        b = next;
    }
}

fibonacci(10);  // Output: 0 1 1 2 3 5 8 13 21 34


