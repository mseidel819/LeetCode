/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let shortest=Infinity;
    let curTotal=undefined;
    
    
    const sorted=nums.sort((a,b)=>{
        return a-b
    })
    
    for(let i=0;i<nums.length-2; i++){
        let left=i+1;
        let right= nums.length-1;
        
        while (left<right){
              let miniSum = sorted[i]+sorted[left]+sorted[right];
            
           if ( Math.abs(miniSum - target) < shortest ){
               shortest = Math.abs(miniSum - target)
               curTotal = miniSum;
           }

           if (miniSum < target) left++
           else if (miniSum > target) right--
           else break
            
        }
        
    }
    
    
    return curTotal;
    
   
};