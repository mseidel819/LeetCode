/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const sort=nums.sort((a,b)=>{
        return b-a
    });
    return (sort[0]-1)*(sort[1]-1)
};