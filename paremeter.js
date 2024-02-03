function person() {
  console.log("I am honest man");
  console.log("I am a developer");
  console.log("Bangladesh is nice");
}
// person();
// ----------------------------------------------------

//------- square kora----------
// 3 --->3*3 = 9
// 4 --->4*4 = 16
// 5 --->5*5 = 25
// 7 --->7*7 = 49

// function square(number) {
//     console.log("Value of the number parameter", number);
//     const num = number * number;
//     // console.log(num);
//     console.log("square of the given number is:", num);
// }
// square(5);
// console.log('-------------')
// square(3)
// square(2)
// square(13)
// square(6)
// square(8)
// square(10)
// --------------------------------------
function value(num1, num2) {
  const sum = num1 * num2;
  console.log(sum);
}
value(5, 20);
value(2, 20);
value(3, 20);
value(4, 20);
// ---------------------------------------
function addAll(a, b, c, d, e) {
    const total = a + b + c + d + e;
    console.log(a,b,c,d,e)
    console.log(total);
}
addAll(2,3,4,5);
addAll(9,3,6,5,7);
