/**
 * LOOPING Technique
 * 1/ for loop.
 * 2/ while loop.
 * 3/ do while.----> ignore this 
 * 4/ for in.----> Object loop korar jonno use kora hoy.
 * 5/ for of.----> Array loop korar jonno use kora hoy.
 */
// const number=[10,20,30,40,50,60,70,80,90,12,99,51]
// for(let j=0;j<=number.length;j++){
//     console.log(j);
// }
// ----------------------------------------
// console.log(number);
// console.log(number.length);
// --------------------------------------
// for(let num of number)
// console.log(num)
// ------------------------------------------------
let numbers=[10,20,30,40,50,60,70,80,90,12,99,51]
let j=0;
while(j<numbers.length){
    console.log(j)
    console.log(numbers[j])
    j++;
}

