function linearSearch(arr, ele) {
    for(let i = 0; i <arr.length; i++){
        if(arr[i] === ele){
            return i;
        }
       
    }
    return "Not Found";
}
console.log(linearSearch([1,2,3,4,5], 11));
