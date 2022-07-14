/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const answer=[];
    for(let i=0;i<boxes.length; i++){
        let miniCount=0;
        
        for(let j=0; j<boxes.length; j++){
            if (boxes[j]==1){
                miniCount+= Math.abs(i-j)
            }
            answer[i]=miniCount
        }
        
    }
    
    
    return answer;
};