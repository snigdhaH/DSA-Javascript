// Program to find the max and min elements from an array

function maxMinArray(arr) {
    let max = arr[0];
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    console.log("Max: " + max);
    console.log("Min: " + min);
}

maxMinArray([1, 2, 3, 4, 5]);
