/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let counter=0;
    let primary=0;
    let secondary=0;
    for(i=0;i<mat.length; i++){
    counter+=mat[i][i];
      counter+= mat[i][mat.length-1-i]  
   
        if(i===mat.length-1-i){
            counter-=mat[i][i];
        }   
    }
    return counter
};