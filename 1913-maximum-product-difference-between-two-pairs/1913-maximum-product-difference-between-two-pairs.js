/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    const sortNums=nums.sort((a,b)=>b-a);
    
    return (sortNums[0]*sortNums[1])-(sortNums[sortNums.length-1]*sortNums[sortNums.length-2])
};