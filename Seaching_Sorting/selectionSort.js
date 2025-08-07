const prompt= require('prompt-sync')();
let input=prompt("Enter numbers separated by spaces---");
let arr=input.split(" ").map(Number); //conmvert input string to number array

function selectionSort(arr){
    let n = arr.length;

    for(let i = 0; i <n-1; i++){
        let minIndex = i ;

        for(let j=1+i;j <n; j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }
        if(minIndex!==i){
            let temp=arr[i];
            arr[i]=arr[minIndex];
            arr[minIndex]=temp;
        }
        }
        return arr;
    }

console.log("Sorted array--" , selectionSort(arr));
