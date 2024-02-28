const user={id:10,name:'Mehedi Hasan',job:'Actor'}
// console.log(user) // Normal js code
// const stringified= JSON.stringify(user); // JSON code
// console.log(stringified)

// { id: 10, name: 'Mehedi Hasan', job: 'Actor' } // Normal js code
// {"id":10,"name":"Mehedi Hasan","job":"Actor"}  // JSON code

const shop ={
    owner:'Mehdi',
    address:{
    city:'feni',
    street:'kocukhet',
    country:'Bangladesh'
    },
    products:['shope','laptop','mobile'],
    revenue:45555,
    isOpen:true,
    isNew:false
}
console.log(shop)
const jsons=JSON.stringify(shop)
console.log(jsons)