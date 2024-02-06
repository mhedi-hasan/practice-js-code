/**
 * Simple Logic
 *Year will be a leap year if the year is dividable by 4.
 *
 */

function isLeapYear (year) {
    if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}
const isLipi= isLeapYear(2052);
console.log(isLipi);
/**
 * 1/ Those year that is not dividable by 100, if the year is dividable by 4: than it will be a leap year.
 * 
*/
function isLeapYear2(year){
    if(year % 100 !==0 && year%4===0){
        return true;
    }
    if(year % 100 ===0 && year %400 ===0){
        return true;
    }
    else{
        return false;
    }
}
const isLipi2=isLeapYear2(2100);
const isLipi3=isLeapYear2(2400);
const isLipi4=isLeapYear2(1900);
const isLipi5=isLeapYear2(2052);
console.log(isLipi2);
console.log(isLipi3);
console.log(isLipi4);
console.log(isLipi5);