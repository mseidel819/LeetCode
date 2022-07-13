/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let max=0;
    let runner=0
    gain.forEach(num=>{
       runner+=num;
        if(runner>max)max=runner;
    })
    return max
};