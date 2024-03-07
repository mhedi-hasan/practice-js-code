// No.1.truthy value 'alams',5,true,{},[]
// No.1.falsy value '',0,false,null,undefined

let myVar=5;
// check any truthy
if(myVar){
    myVar=myVar*100;
}else{
    myVar=0
}

let myMoney=500;
// you check negative or falsy anything
if(!myMoney){
    myMoney=myMoney*22;
}

const money=800;
let food;
if(money >700){
    food='biriany'
}else if(money>500){
    food='bargar'
}else{
    food='tea and biskut'
}
// console.log(food)
// ternary operator e uporer code ta likha holo
const food1=money>500?'kacchi':'cha and biskut';
console.log(food1);

let drink=(money >100 && myVar>110 ? 'coke':'filter water');
// console.log(drink);

const num=33;
const numStr=num+''
console.log(numStr);

const isActive=false;
const showUser=()=>console.log('display user');
const hideUser=()=>console.log('hide user');

isActive ? showUser():hideUser()
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right will be executed
isActive || showUser();

// toggle boolean
isActive =!isActive;