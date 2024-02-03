const person = ["mehedi", "hasan", "jihad", "rokib", "Sakib"];
console.log(person);
const sortedPerson = person.sort();
console.log(sortedPerson);
// --------------------------------------------------
// for(const per of person){
//     console.log(per);
// }
// --------------------------------------------------
// --------> sort <--------------
// const number = [7, 5, 4, 6, 5, 0, 3, 2, 1];
// console.log(number);
// -----------------------------------------------------
// const number = [1,3,2,4,5,8,7,6,9,0]
// Ascending ------> Smaller to Larger ---->[0,1,2,3,4,5,6,7,8]
// Descending -----> Larger to Smaller ---->[8,7,6,5,4,3,2,1,0]
// -----------------------------------------------------
const number = [7, 5, 35, 6, 5, 0, 4, 12, 1];
const number_ase=number.sort(); // not working
// const number_ase = [...number].sort(function (a, b) {return a - b});
// const number_dse = [...number].sort(function (a, b) {return b - a});

console.log(number_ase);
console.log(number_dse);
