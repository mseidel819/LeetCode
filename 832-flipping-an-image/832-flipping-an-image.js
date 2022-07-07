/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
   const flip=image.map(arr=>arr.reverse());
    
    const invert=flip.map(arr=>arr.map(num=>num===0 ? num=1 :num=0))
    
    return invert
};