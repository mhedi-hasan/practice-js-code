const products=[ 
    {name:'laptop', brand:'lenovo', price:32000, isNew:true, color:'silver'},
    {name:'laptop', brand:'mac', price:92000, isNew:true, color:'white'},
    {name:'tablet', brand:'nokia', price:39000, isNew:true, color:'dark'},
    {name:'watch', brand:'casio', price:22000, isNew:true, color:'silver'},
    {name:'phone', brand:'samsung', price:62900, isNew:true, color:'golden'},
    {name:'monitor', brand:'dell', price:42900, isNew:true, color:'black'},
] 
// No.1. map is important
const brands=products.map(product =>product.brand);
const brandes=products.map(product =>product.price);
// console.log(brands);
// console.log(brandes);
// No.2. forEach is the short code of for of
// products.forEach(product=>console.log(product.color));
// products.forEach(product=>console.log(product.name));
products.forEach(product=>{

})
// No.3. filter
const cheap=products.filter(product=>product.price >50000);
// console.log(cheap);
const specificName=products.filter(product => product.name.includes('i'));
console.log(specificName);
const specificNames=products.find(product=>product.name.includes('o'))
console.log(specificNames);