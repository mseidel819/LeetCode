/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let answer=[];
     if(n===1){
            answer.push(0);
        } else if(n===2){
            answer.push(n);
            answer.push(-n);
        } else
    for (i=0;i<n;i++){
       
       if(i===n-1){
            const initialValue = 0;
const sumWithInitial = answer.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
            
            answer.push(-sumWithInitial)
        }else{
            answer.push(i);
        }
        
    }
    
    return answer;
};