/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
   
    const newArr=num.toString().split('').sort((a,b)=>a-b);
    const numOne= newArr[0]+newArr[3];
    const numTwo= newArr[1]+newArr[2];
 
    return (+numOne)+ (+numTwo)
};