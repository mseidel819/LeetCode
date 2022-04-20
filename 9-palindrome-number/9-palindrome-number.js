/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const reverseArr= x.toString().split('').reverse().join('');
    
   return +reverseArr===x
};