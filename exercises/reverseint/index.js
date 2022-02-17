// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
   // return Math.sign(n) * parseInt(n.toString().split('').reverse().join(''));
   
   // let reversed = '';
   // for (let character of n.toString()) {
   //    reversed = character + reversed;
   // }
   // return parseInt(reversed) * Math.sign(n);

   let reversed = n.toString().split('').reduce((reversed, character)=> reversed = character+ reversed, '');
   return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
