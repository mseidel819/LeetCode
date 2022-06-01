/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    const target=[];
    
    nums.map((num, i)=>{
        target.splice(index[i],0, num )
    })
    return target
};