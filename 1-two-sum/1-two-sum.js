/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  answer=[];
    
    for(let i=0; i<nums.length; i++){
      for(let j=i+1; j<nums.length; j++)
         
         nums[i]+nums[j]===target ? answer.push(nums[i],nums[j]) : answer;
  }
    const final=[];
    final.push(nums.indexOf(answer[0]));
   final.push(nums.lastIndexOf(answer[1]));
return final;
};