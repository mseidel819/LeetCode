/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start=-1;
    let end=-1;
    
    nums.forEach((num, i)=>{
        if(target===num && start===-1){
            start=i;
            end=i;
        }else if (target===num){
            end=i
        }
        
    })
    
    
    
    return [start, end]
};