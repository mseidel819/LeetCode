/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
   return image.map(arr=>arr.reverse().map(num=>num===0 ? num=1 :num=0));
};