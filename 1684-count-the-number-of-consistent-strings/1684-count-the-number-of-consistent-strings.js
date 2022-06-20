/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let x=0;
    const re = new RegExp(`^[${allowed}]+$`);
    
    words.forEach(word=>{
        word.match(re) ? x+=1 : x;
    })
    return x
};