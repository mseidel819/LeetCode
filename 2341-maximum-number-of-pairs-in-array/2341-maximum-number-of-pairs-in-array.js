/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let pairCount=0;
    const newArr=[];
    
    const sorted=nums.sort((a,b)=>{
        return b-a
    });
    
    let toggler=false;
    for( let i=0;i<sorted.length;i++){
//if we alreay counted as the second of a pair
        if (toggler===true){
            toggler=false;
        }else
//if its a pair
        if(sorted[i]===sorted[i+1]){
            toggler=true;
            pairCount+=1  
        }else
        
    newArr.push(sorted[i]);
        
    }
    
  return [pairCount, newArr.length]
};