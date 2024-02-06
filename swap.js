let a = 6;
let b = 10;

console.log(a, b);

// a=b;
// b=a;

const temp = a;
a = b;
b = temp;
console.log(a, b);
// -----------------------------
x = 15;
y = 10;

console.log(x, y);
[x, y] = [y, x];
console.log(x, y);
console.log(x-y);
console.log(x+y);
