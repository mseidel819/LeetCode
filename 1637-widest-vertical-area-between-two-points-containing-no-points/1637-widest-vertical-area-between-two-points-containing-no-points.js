/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    const answerArray=[];
    let maxSize=0;
    
    points.forEach(point=>{
        answerArray.push(point[0])
    })
    const sorted=answerArray.sort((a,b)=>{
        return a-b
    });
    
    sorted.forEach((num,i)=>{
        if(sorted[i+1]-num> maxSize){
            maxSize=sorted[i+1]-num;
        }
    })
    
    return maxSize;
};