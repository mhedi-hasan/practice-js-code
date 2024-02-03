/**
 * for a given string tell me whether it has been number of characters or not
 *
 */
function evenSize(str) {
  const size = str.length;
  if (size % 2 === 0) {
    console.log("even size", size);
  } else {
    console.log("odd size", size);
  }
  // console.log(str,size);
  // console.log(str,str.length);
}
evenSize("Dhaka");
evenSize("faka");
// -----------------------------------------
function doubleOrTriple(number, doDouble) {
    if (doDouble === true) {
    const result = number * 2;
    return result;
    } else {
    const result = number * 3;
    return result;
    }
}
console.log(doubleOrTriple(5,true))
console.log(doubleOrTriple(5,false))
