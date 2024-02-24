
const produce={
    count:5000,
    data:[
        {id:1, brand:'lenovo laptop',price:65000},
        {id:2, brand:'macbook',price:165000},
    ]
}
// 2nd laptop price access
// console.log(produce.data[1].id)

// -------------------------
const users={
    id:5001,
    name:'Mehedi Hasan',
    address:{
        street:{
            first:'54/1 uttor side',
            second:'poribag er goli',
            third:'no dorai'
        }
    }
}
console.log(users.address.street.second)

const users2={
    id:5002,
    name:'hasan ali',
    address:{
        city:'dhaka',
        country:"Bangladesh"
    }
}
console.log(users2.address.street?.second) // eikhane প্রশ্নবোধক এর মানে হলো যদি যে অবজেক্ট কে কল করা হবে ঐ অবজেক্ট এর মধ্যে যদি না থাকা সত্তেও কনো প্রপারটি ডাকা হয় তাহলে যাতা এরোর না আসে এই জন্য প্রশ্নবোধক চিহ্ন ব্যবহার করা হয়। এখানে ব্যবহার করা হয়েছে street er jonno kintu street aikhane nai tai jate error na asy ei jonno (?) eita bybhar kora hoy.