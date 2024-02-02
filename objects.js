// primitive er mane holo basic data type.
// basic,primary data type.
const bottles='fresh'
const bottlePrice='50'
const bottleColor='Black'
const bottleWater='100'
const bottleSize='Large'
// 1 ta object k uporer moto na likhe 1 ta fixed variable er modde rekhe {} braket use  kore likle valo vabe declaration kora jay.
// object data type
// Non-primitive data type
const bottle = {
    price: 100,  
    size: "large",
    color: "black",
    weight: 250,
    isClean: true,
    isCleans: false,
};
// console.log(bottle);
console.log(typeof bottle);
console.log(bottle.weight);
console.log(typeof bottle.weight);
console.log(bottle.price);
console.log(typeof bottle.price);
console.log(bottle.color);
console.log(typeof bottle.color);
console.log(bottle.size);
console.log(typeof bottle.size);
console.log(bottle.isClean);
console.log(typeof bottle.isClean);
console.log(bottle.isCleans);
console.log(typeof bottle.isCleans);

// ----- onno 1 ta variable er modde o declar kore output ber kora jay
// const life=bottle;
// console.log(life);
// --------------------------------------------------
// -------------- agin object -------------------
const subject={
    name:'Python',
    subCode:25867,
    teacher:'sharif uddin',
    isGood:true,
    class:'2nd',
}
console.log(subject);
const bisoy=subject;
console.log(bisoy)