// NO.1. JSON

const student = {
  name: "Mehedi Hasan",
  age: 20,
  books: ["English", "Python", "Physics", "Math"],
};
console.log(student);
const studentJSON = JSON.stringify(student); // Object to convert string
console.log(studentJSON);
const studentParse = JSON.parse(studentJSON); // String to convert object
console.log(studentParse);
// ----------------------------------------

// NO.2. fetch
// fetch('url')
// .then(res => res.JSON())
// .then(data => console.log(data))

// NO.3. keys,values
const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys);
console.log(values);

// 4. for
const numbers = [10, 20, 20, 40, 49, 60, 44, 75];
numbers.forEach((num) => console.log(num));
numbers.map((num) => num * 2);

// 5. for of / use this array like object
// loop on / an object using for in

// 6. add or remove from an array
const products = [
  { name: "camera", price: 32000, brand: "lenovo", color: "golden" },
  { name: "laptop", price: 27000, brand: "dell", color: "pink" },
  { name: "Phone", price: 45000, brand: "samsung", color: "gray" },
  { name: "laptop", price: 50000, brand: "hp", color: "black" },
  { name: "tablet", price: 38000, brand: "apple", color: "silver" },
];
const newProduct = {
  name: "webcam",
  price: 1400,
  brand: "casio",
  color: "darker",
};
// products.push(newProduct);
// console.log(products);

// 7. copy products array then add newProducts
const newProducts = [...products, newProduct];
console.log(newProducts);

// 8. create a new array without one specific item
// removes phone means create a new array without the phone
const remaining = products.filter(product => product.name !== "Phone");
console.log(remaining);
