/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    var counter=0;
    
    const ruleObj={
        "type":0,
        "color":1,
        "name":2
    }
    
    for(let i=0; i<items.length; i++){
        if(items[i][ruleObj[ruleKey]]===ruleValue){
           counter++;
           }
    }
    
    return counter;
};