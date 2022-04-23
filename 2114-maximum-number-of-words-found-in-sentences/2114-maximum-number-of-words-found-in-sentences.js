/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    const r= sentences.map(str=> str.split(' ').length);
   r.sort(function(a,b){
       return b-a;
   })
    return r[0];
};

