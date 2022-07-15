/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const output=[];
    
    const smallArr=[];
    
    groupSizes.forEach((groupSi, i)=>{
        if (smallArr[groupSi]) smallArr[groupSi].push(i);
        else smallArr[groupSi] = [i];
        
        if (smallArr[groupSi].length === groupSi) {
            output.push(smallArr[groupSi]);
            smallArr[groupSi] = undefined;
        }
    })
    
    return output
};