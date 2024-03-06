// React ব্যবহার করার জন্য এই জিনিস গুলো অবশ্যই জানতে হবে।না জানলে শিখে নিতে হবে।
// No.1.
// How to declare a variable using let and const
const fatherName='Nurer Nobi'; 
let age=55;
age=56;
// ------------------------
// No.2.
// 6 Basic conditions: 1.<,2.>,3.===,4.!==,5.<=,6.>=
// Multiples conditions: &&,||
if(fatherName==='nurer nobi'){
}
else if(fatherName ==='Nobi'){
}
else{
}
// ------------------------
// No.3. Array declare
// Array index number
// Array length
// Array push,pop,
const number=[10,20,30,40,50,60];
number[1]=100 // index diya value set kora jay
console.log(number.length); // .length likhe koyta number ta check kora jay
// ------------------------
// No.4. For Loop 
for(const num of number){
    // console.log(num);
};
// ------------------------
// No.5. Function declare
function multiply(num1,num2){
    const result = num1*num2;
    // console.log(result);
    return result
}
const output=multiply(10,20);
console.log(output);
// ------------------------
// No.6. Object declare
// 3 ways to access property by name
const phone={
    brand:'Samsung',
    price:2000,
    isNew:true,
    others:['cpu','camera','ram','battery life']
};
const myVariable='age'
console.log(phone.brand); // directly by property
console.log(phone['age']); // access via property name string
console.log(phone[myVariable]); // access via property in a variable