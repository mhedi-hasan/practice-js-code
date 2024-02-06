// 2 jon student er moddhe k hight marks paiche ta dekhano holo.

const mehedi=89;
const hasan=65;

if(hasan>mehedi){
    console.log("Hasan got the highest marks in the class.")
}else{
    console.log("Mehedi got the highest marks in the class.")
}

// function use kore k beshi marks peche ta check kora holo.

function gotMarks(num1,num2){
    if(num1>num2){
        console.log("Hasan got the highest marks in the class:",num1)
        // return num1;
    } else{
        console.log("Mehedi got the highest marks in the class:",num2)
        return num2;
    }
}

const highest=gotMarks(52,65);
console.log(highest);