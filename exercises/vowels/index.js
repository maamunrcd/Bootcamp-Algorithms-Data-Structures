// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0
}


// function vowels(str) {
//     let vowelsArray = ['a', 'e', 'i', 'o' ,'u'];
//     let strArray = str.toLowerCase().split("");
//     let result = 0;
//     for (const char of strArray) {
//         if(vowelsArray.includes(char)) {
//             result = result + 1
//         }
//     }
//     return result;
// }
module.exports = vowels;
