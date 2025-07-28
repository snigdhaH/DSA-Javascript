/* 
Given two sorted arrays, nums1 and nums2, merge them into a single sorted array.
Do it in-place inside nums1, which has enough space to hold elements of both arrays.

nums1 = [1,2,3,0,0,0], m = 3  
nums2 = [2,5,6],       n = 3

After merging in-place:
nums1 = [1,2,2,3,5,6]
*/

function merge(nums1,m,nums2,n){
    let p1=m-1;
    let p2=n-1;
    let p=m+n-1;

    while(p2>=0){
        if(p1 >= 0 && nums1[p1]>nums2[p2]){
            nums1[p]= nums1[p1];
            p1--;
        }else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }
}

let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];
merge(nums1, 3, nums2, 3);
console.log(nums1); // [1,2,2,3,5,6]