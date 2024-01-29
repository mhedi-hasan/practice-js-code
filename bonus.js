// ---------- 1st part ------------------
// switch use kore 7 days er name print korlam
// const dayOfWeek = 4;
// switch (dayOfWeek){
//     case 1:
//         console.log('Saturday')
//         break;
//     case 2:
//         console.log('Sunday')
//         break;
//     case 3:
//         console.log('Monday')
//         break;
//     case 4:
//         console.log('Tuesday')
//         break;
//     case 5:
//         console.log('Wednesday')
//         break;
//     case 6:
//         console.log('Thursday')
//         break;
//     case 7:
//         console.log('Friday')
//         break;
//     default:
//         console.log('Invalid day')
// }
// --------------------------------------------------
// const roll = [10,22,47,62,65]
// console.log(roll)
// console.log(typeof roll)
// console.log(roll.indexOf(65))
// console.log(roll.includes(10))
// console.log(roll.includes(50))
// ---------------------------------------------------
// ---------- 2nd part ------------------
function calcGrading(score) {
    let gradingScore;
    switch (true) {
    case score <= 100 && score >= 90:
        gradingScore = "A+";
        break;
    case score <= 89 && score >= 80:
        gradingScore = "A";
        break;
    case score <= 79 && score >= 70:
        gradingScore = "A-";
        break;
    case score <= 69 && score >= 60:
        gradingScore = "B";
        break;
    case score > 100 && score < 0:
        gradingScore = "Invalid Score";
        break;
    default:
        return "Invalid Score 😢";
    }
    return `You got ${gradingScore} Grade`;
}
// ------------ firstPerson ---------------
const firstPerson = calcGrading(87);
console.log(firstPerson);
// -----------------------------------------
// ----------- secondPerson ----------------
const secondPerson = calcGrading(60);
console.log(secondPerson)
// -----------------------------------------
// ------------- thardPerson -----------------
const thardPerson = calcGrading(101);
console.log(thardPerson);
// -------------------------------------------
// ------------ fourthPerson ---------------------
const  fourthPerson = calcGrading(90);
console.log(fourthPerson)
// --------------------------------------------------

