/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentSum= 0;
    let max= nums[0];
    
    for(let i =0 ; i<nums.length; i++){
        currentSum= Math.max(nums[i], currentSum+nums[i])
    
    if (currentSum>max){
        max=currentSum;
    }
    }
    
    return max;
    
    
};