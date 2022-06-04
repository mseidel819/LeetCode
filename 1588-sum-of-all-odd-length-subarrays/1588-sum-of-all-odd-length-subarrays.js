/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let counter=0;
    
    for(let i=0; i<arr.length;i++){
        
        for (let j=i+1; j<=arr.length ; j=j+2){
          let miniArr= arr.slice(i,j);
            console.log(miniArr)
            let initialValue=counter;
            
            counter = miniArr.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
        }
        
    }
    
    
    return counter;
};

// .slice(start, end not including this index)