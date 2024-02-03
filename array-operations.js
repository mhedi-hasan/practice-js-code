/**
 * Objective: write a function to give me the sum numbers in an array
 * step-1:declare a function
 * step-2:call check whether the function is called properly
 * step-3:set a parameter(s)
 * step-4:pas the parameter(s), check whether parameter is passed in a proper format
 * step-5:
 */

function sumOfNumber(numbers) {
    // console.log(number);
    let sum=0;
    for(number of numbers){
        console.log(number)
        sum=sum+number;
    }
    return sum;
}
const numbs=[50,40,10,20,62]
const sum = sumOfNumber(numbs);
console.log("sum of number is", sum);
