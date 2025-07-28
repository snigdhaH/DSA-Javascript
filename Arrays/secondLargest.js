/* Find the second largest number in an array.
If it doesn't exist (e.g. all same), return -1.
 */

function secondLargest(arr){
    if(arr.length<2){
        return -1;
    }
    let max=-Infinity;
    let secondMax=-Infinity;

    for(let i = 0 ; i< arr.length; i++){
        if(arr[i]> max){
            secondMax=max;
            max=arr[i];
        }else if(arr[i] > secondMax && arr[i]!=max){
            secondMax=arr[i];
        }
    }
    return secondMax === -Infinity ?  -1 : secondMax;
}

console.log(secondLargest([10, 5, 20, 8]));     // 10
console.log(secondLargest([3, 3, 3]));          // -1
console.log(secondLargest([1]));               // -1
console.log(secondLargest([5, 1, 2, 3, 4])); 