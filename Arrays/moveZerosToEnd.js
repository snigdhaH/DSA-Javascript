/* 
Given an array arr, move all 0s to the end of the array while maintaining the relative order of the non-zero elements.

You must do it in-place, i.e., without returning a new array. */

function moveZeroes(arr) {
    let pos = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[pos] = arr[i];
            pos++;
        }
    }
    while (pos < arr.length) {
        arr[pos] = 0;
        pos++;
    }
    return arr;
}
console.log(moveZeroes([0, 1, 0, 3, 12]));
