/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x=0;
    operations.map(n=>{
        n==="X++" || n==="++X" ?  x+=1 :  x-=1;
    });
    return x;
};