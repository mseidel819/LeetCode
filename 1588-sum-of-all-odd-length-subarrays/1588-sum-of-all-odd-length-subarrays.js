/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let counter=0;
    
    for(let i=0; i<arr.length;i++){
        for (let j=i+1; j<=arr.length ; j=j+2){ 
            counter = arr.slice(i,j).reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  counter
);
        }
        
    }
    
    return counter;
};