print5();
console.log(print10);
print10();
for(let i = 0;i<5;i++){
    console.log(i);
}
console.log('Outside',i);

function print5(){
    console.log('Inside print5',5)
}
var print10=function(){
    console.log('Inside print',10);
}