/**
 * @param {number[]} nums
 * @return {number[]}
 */

// T.C ->O(N), S.C ->O(N)
// var productExceptSelf = function(nums) {
//     let prefix=[]
//     let suffix=[]
//     let n=nums.length
//     prefix[0]=1
//     suffix[n-1]=1
//     for(let i=1;i<n;i++){
//         prefix[i]=nums[i-1]*prefix[i-1];
//         suffix[n-i-1]=nums[n-i]*suffix[n-i];
//     }
//     let ans=[]
    
//     for(let i=0;i<n;i++){
//         ans[i]=prefix[i]*suffix[i]
//     }
//     return ans;
// };


// SPACE OPTIMIZED
//T.C-> O(N) , S.C -> O(1) { Not considering output array in S.C}
var productExceptSelf = function(nums) {
    let ans=[]
    let n=nums.length
    ans[0]=1
    for(let i=1;i<n;i++){
        ans[i]=nums[i-1]*ans[i-1];
    }
    let prevSuffix=1;
    for(let i=n-2;i>=0;i--){
        prevSuffix*=nums[i+1];
        ans[i]*=prevSuffix
    }
    return ans;
};
