const person={name:'Mehedi Hasan',age:25,profession:'Painter',isMale:true}
// console.log(typeof person)
const personString=JSON.stringify(person);
// console.log(typeof personString)
const persons=JSON.parse(personString)
console.log(persons.name)