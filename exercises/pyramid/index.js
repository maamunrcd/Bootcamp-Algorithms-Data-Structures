// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row=0, level= '') {
   if(n === row) {
       return;
   } 

   if(level.length === n * 2 - 1) {
       console.log(level);
       return pyramid(n, row +1)
   }
   let add;
   let midPoint = Math.floor((n*2-1) / 2);
   if(midPoint - row <= level.length && midPoint + row >= level.length) {
       add = "#"
   } else {
        add = " "
   }

   pyramid(n, row, level + add)
}
// function pyramid(n) {
//     for (let row = 0; row < n; row++) {
//          let midPoint = Math.floor((2 * n -1) / 2);
//          let level = "";
//         for(let column = 0; column < n * 2 - 1; column++) {
//             if(midPoint - row <= column && midPoint + row >=column) {
//                 level +="#";
//             } else {
//                 level +=" "
//             }
//         }
//         console.log(level);
//     }
// }
module.exports = pyramid;
