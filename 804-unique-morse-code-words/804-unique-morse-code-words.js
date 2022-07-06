/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const alpha= {"a":".-",
                  "b":"-...",
                  "c": "-.-.",
                  "d":"-..",
                  'e':".",
                  'f':"..-.",
                  'g':"--.",
                  'h':"....",
                  'i':"..",
                  'j':".---",
                  'k':"-.-",
                  'l':".-..",
                  'm':"--",
                  'n':"-.",
                  'o':"---",
                  'p':".--.",
                  'q':"--.-",
                  'r':".-.",
                  's':"...",
                  't':"-",
                  'u':"..-",
                  'v':"...-",
                  'w':".--",
                  'x':"-..-",
                  'y':"-.--",
                  'z':"--.."};
    
    const convertedWords= new Set(words.map(word=>word.split('').map(letter=>alpha[letter]).join('')))
    
    
    return convertedWords.size;
};