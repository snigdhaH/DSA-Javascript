/* Given an array of integers nums and an integer target,
return the indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice. */

// BRUTE FORCE IMMA USE NOT AND NOT HASHMAP !!

function twoSum(nums, target){
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j] === target){
                return [i , j];
            }
        }
    }
}
console.log(twoSum([2, 7, 11, 15], 18));
