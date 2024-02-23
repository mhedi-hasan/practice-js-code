// function declaration..

// function add(a,b){
// const result=a+b;
// return result;
// }
function add(a,b){
const result=a+b;
return result;
}
// function expression
const add2=function(a,b){
return a+b;
}
// const sum=add(4,50);
// console.log(sum)
// arrow function
const add3 = (a, b) => a + b;
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
const multiply = (num1, num2) => num1 * num2;

// const sum=add4(4,50,10,5);
const sum=multiply(4,50);
console.log(sum)

// ------- more arrow function explore -----------------
// noParameter
const getPI=()=> Math.PI;
console.log(getPI());

// large arrow function
 const doMath=(x,y,z)=>{
    const sum=x+y+z;
    const mul=x*y*z;
    const result=sum+mul;
 }