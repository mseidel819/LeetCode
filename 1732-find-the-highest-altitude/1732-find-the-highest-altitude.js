/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let max=0;
    let runner=0;
    gain.forEach(num=>{
       runner+=num;
        runner>max ? max=runner : runner;
    })
    return max
};