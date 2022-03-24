// let principle = 100000;
// let rate = 2.5;
// let year = 0;

// for (year ; year <= 10 ; year++) {
//     annualInterest = (principle*25)/1000;
//     principle += annualInterest;
//     console.log(annualInterest + " interest")
// }

// console.log(principle);

let savings = 100000;

for (let i = 0; i < 10; i++) {
    savings = (savings * 1.025).toFixed(2);
}
console.log(savings);