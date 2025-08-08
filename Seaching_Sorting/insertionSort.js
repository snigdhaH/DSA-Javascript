const prompt=require('prompt-sync')();
let input= prompt("Enter numbers separated by spaces.");
let arr=input.split(" ").map(Number);

function insertionSort(arr){
    let n=arr.length;

    for(let i = 1 ; i<n; i++) {
        let key=arr[i];
        let j= i-1;

        while(j>=0 && arr[j] > key){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key; 

    }
    return arr;
}
console.log("Sorted array: ", insertionSort(arr));