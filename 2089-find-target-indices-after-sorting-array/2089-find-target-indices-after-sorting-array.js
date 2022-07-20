/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    const answer=[];
    
    nums.sort((a,b)=>{
        return a-b;
    }).forEach((num,i)=>{
        if(num==target){
            answer.push(i)
        }
    })
    
    return answer
};