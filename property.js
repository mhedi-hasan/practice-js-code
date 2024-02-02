const person={
    name:'Mehedi Hasan',
    age:24,
    profession:'Web developer',
    salary:'200000Tk',
    isMuslim:true,
    isMarried:false
}

// // 1 ta object er variable er man k 3 vabe call kora jay jemon
// // evabe value k access kore value man o change o update kora jay.
// // ---------------------------------------------------
// 1/console.log(person.name) // 1st eivabe likha jay
// 2/let professonStastus=person.profession // 2nd eivabe likha jay
// console.log(professonStastus);
// 3/console.log(person['name']) // 3rd eivabe o likha jay
// -------------------------------------------------------

console.log(person)
console.log(person.name)
console.log(person['name'])
console.log(person.age)
console.log(person['age'])
// ----------------------------------------------------
console.log(person.profession) // variable er key ta k 3 vabe call kora jay 1st
const professonStastus=person.profession // variable er key ta k 3 vabe call kora jay 2nd
console.log(professonStastus);
// --------------------------------------------------
console.log(person.salary)// variable er key ta k 3 vabe call kora jay 1st
const income=person.salary// variable er key ta k 3 vabe call kora jay 2nd
console.log(income);
// --------------------------------------------------
console.log(person.isMuslim)// variable er key ta k 3 vabe call kora jay 1st
const releijon=person.isMuslim// variable er key ta k 3 vabe call kora jay 2nd
console.log(releijon);
// ------------------------------------------------
console.log(person.isMarried)// variable er key ta k 3 vabe call kora jay 1st
const mareiedStastus=person.isMarried// variable er key ta k 3 vabe call kora jay 2nd
console.log(mareiedStastus);
// -----------------------------------------------