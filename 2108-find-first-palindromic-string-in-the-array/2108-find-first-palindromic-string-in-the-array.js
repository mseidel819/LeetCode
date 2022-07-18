/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
   let answer=""
    
    words.forEach(word=>{
        const string=word.split("").reverse().join("");
        if (answer)return;
        if(word==string){
            answer=word
        }
    });
    
    return answer
};