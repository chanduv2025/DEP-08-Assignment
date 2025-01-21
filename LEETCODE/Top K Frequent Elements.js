//leetcode Q347

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freqMap=new Map();
    for(let num of nums){
        freqMap.set(num,(freqMap.get(num)|| 0)+1)
    }
    return [...freqMap.entries()]
    .sort((a,b)=>b[1]-a[1])
    .slice(0,k)
    .map(num=>num[0]);

};
