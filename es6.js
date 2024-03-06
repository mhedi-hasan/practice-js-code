// ES6 er kichu important jinis 
const number=[10,20,30,40,50,60];
const student = {
  name: "Mehedi Hasan",
  age: 18,
  isMale: true,
  fatherName: "Nurer Nobi",
  books: ["Bangla", "English", "Math,Python"],
  favoriteBook: "English",
};
// No.1. Es6 template string
const about = `My name is ${student.name}.I am ${student.age} years old.My father name is ${student.fatherName}.My favorite book is ${student.favoriteBook}`;
// console.log(about);
// --------------------------------
// No.2. Arrow function
// Single line arrow function
const getFiftyFive = () => 55; // kono parameter na thakle bracket () dily hoy
const addSixtyFive = (num) => num + 65; // joid single parameter hoy tahole bracket () dity hoy na.
const isEven = x => x % 2 == 0;
const addThree = (x,y,z) => x+y+z;
// multi line arrow function
const doMath = (num1,num2) =>{
    const sum=num1+num2;
    return sum;
}
// --------------------------------
// No.3. Spread operator 
// const newNumber=[number]; // eita dile 2 ta array hoy jay tai number er agy 3 ta ... dity hoy jate shudu bitorer array ta k pay
const newNumber=[...number];


number.push(200);
console.log(number);
console.log(newNumber);
console.log(currentNumber);

