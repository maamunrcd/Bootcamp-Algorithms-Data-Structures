// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // let splitStr = str.split('').reverse().join('');
    // console.log(splitStr);
    // return splitStr;

    //2
    // let splitStr = str.split('');
    // let reverseStr= [];
    // for(let i=1; i <= splitStr.length; i ++) {
    //     reverseStr.push(splitStr[splitStr.length - i])
    // }
    // return reverseStr.join('')

    // let reversed = '';
    // for(let character of str) {
    //     reversed = character + reversed
    // }  
    // return reversed


    return str.split('').reduce((reversed, character)=> character + reversed, '');

}
module.exports = reverse;
