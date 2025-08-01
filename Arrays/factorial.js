/* Problem:
Write a function that returns the factorial of a given non-negative integer n.

Factorial of n (written as n!) is the product of all positive integers ≤ n.

Examples:

factorial(5) → 120 (5 × 4 × 3 × 2 × 1)

factorial(0) → 1 */

function factorial(num){
    let fact=1;
    for( let i = 1 ; i <=num; i++){
         fact = i * fact ;
    }
    return fact;
}
console.log(factorial(5));