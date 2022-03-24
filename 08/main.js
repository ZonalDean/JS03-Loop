// let inputNew = prompt("put in a number");
// let inputTimes;
// let inputTotal;
// let avg;

// // when (input > 0 && 
// //     input !== null &&
// //     input !== NaN &&
// //     input !== " ") {

// //     }

// for (inputTimes = 1 ; 
//     inputNew > 0 &&
//     inputNew !== null &&
//     inputNew !== NaN &&
//     inputNew !== " " ;
//     inputTimes++
//     ) {
//         inputNew = 0;
//         inputNew = prompt("put in a number");
//         inputTotal += inputNew;
//     }

// avg = inputTotal/inputTimes;

// console.log(avg);

let input;
let total = 0;
let count = 0;
let avg;

do {

  input = +prompt("input a number");
  console.log(input);

  if (input !== 0 &&
    Math.sign(input) !== -1 && // input > 0
    input !== "" &&
    input !== null &&
    Number.isNaN(input) === false) {
    total += input;
    count++; 
  }
} while (input !== 0 &&
    Math.sign(input) !== -1 &&
    input !== "" &&
    input !== null &&
    Number.isNaN(input) === false);

avg = total / count;

console.log(total);
console.log(avg);