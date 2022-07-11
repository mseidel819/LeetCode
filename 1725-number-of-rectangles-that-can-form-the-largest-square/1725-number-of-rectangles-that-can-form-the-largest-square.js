/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    const squareArr=[];
    let counter=0;
    rectangles.forEach(rect=> squareArr.push(Math.min(rect[0], rect[1])));
    
   const sorted=squareArr.sort((a,b)=>{
       return b-a
   });
    sorted.forEach(num=>{
        if (num===sorted[0]){
            counter++;
        }
    })
    return counter
};