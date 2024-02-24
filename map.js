//map ==>loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array.
const number=[2,4,5,12,4,5]


function doubleIt(num){
    console.log('num now',num)
    return num*2;
}

const result=number.map(doubleIt);


const doubled=[]
    for(let num of number){
        const double=num*2;
        doubled.push(double)
    }
console.log(doubled)

const friend=['mehedi','hasan','jihad','shanto']
const lengths=friend.map(frnd=>frnd.length);
// console.log(lengths)

const firstLetter=friend.map(friend => friend[0])
// console.log(firstLetter)