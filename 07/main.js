let multi = 2;
let base = "2 x ";
let end = " = "

let layer = "";
let clear = "\n";
let print = "";

let p = 1;

for (p ; p < 13 ; p++) {
    layer = "";
    layer += base + p + end + (p*2);
    layer += clear;
    print += layer;
}

console.log(print);