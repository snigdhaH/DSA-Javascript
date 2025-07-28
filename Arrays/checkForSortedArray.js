/*  Problem:
Check if an array is sorted in non-decreasing order. */

function check(arr){
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] > arr[i+1]) return false;
    }
    return true;
}

console.log(check([1, 2, 2, 4, 5]));    // true
console.log(check([1, 3, 2]));         // false
console.log(check([5]));               // true (1 element is trivially sorted)
console.log(check([]));               //true 
/* mpty array has no elements, so there's nothing "out of order".

Conventionally considered sorted.

 So, returns true.

 */
