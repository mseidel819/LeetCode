/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let count=0;
    const newPref=pref.split("")
    words.forEach(word=>{
       let miniCount=0;
        newPref.forEach((letter, i)=>{
            if(letter===word[i]){
              miniCount++;  
            }
        })
        if(miniCount===pref.length) count++
    })
   
    return count
};