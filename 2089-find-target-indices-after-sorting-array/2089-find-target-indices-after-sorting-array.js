/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    const answer=[];
    
    const sorted=nums.sort((a,b)=>{
        return a-b;
    })
    
    sorted.forEach((num,i)=>{
        if(num==target){
            answer.push(i)
        }
    })
    
    return answer
};