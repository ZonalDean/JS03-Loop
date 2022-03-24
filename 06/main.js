let layer = "";
let star = "* ";
let clear = "\n";
let print = "";

let p = 1;
// let s = 1;

for (p; p < 10 ; p++) {
  layer = "";
  for (s = 1; s <= p ; s++) {
    layer += star;
  }
  layer += clear;
  print += layer;
}

console.log(print);