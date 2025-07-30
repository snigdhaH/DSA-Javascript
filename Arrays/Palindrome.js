/* Given an integer x, return true if x is a palindrome, and false otherwise.

An integer is a palindrome when it reads the same backward as forward.

 */

function palindrome(num){
    let p=num;
    let sum=0;

    while(num!==0){
        let d=num%10;
        sum = (sum*10) + d;
        num=Math.floor(num/10);
    }
    if(p===sum){
        console.log("IS A PALINDROME NUM.")
    }else{
        console.log("NOT PALINDROME.")
    }
}
palindrome(121);
palindrome(122);
palindrome(333);
