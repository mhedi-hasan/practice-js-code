// 12 inch = 1 feet
//--------> convert inch to feet <-------
function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}
//--------> optional functions <------------
function inchToFeet2(inch) {
  const fraction = inch / 12;
  const feetNumber = parseInt(fraction);
  const inchRemening = inch % 12;
  const result = feetNumber + " feet " + inchRemening + " inch ";
  return result;
}

// -----------------------------------------
const hasanHeight = inchToFeet(75);
console.log(hasanHeight);
// -----------------------------------------
const hasanHeight2 = inchToFeet2(75);
console.log(hasanHeight2);
// -----------------------------------------
// <---->----<---->----<---->----<---->----<---->
// 1 mile = 1.60934 kilometer
// convert mile to kilometer
function mileToKilometer(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}
const oneMile = mileToKilometer(1);
console.log(oneMile);
// -----------------------------------------
// <---->----<---->----<---->----<---->----<---->
// 1 kilometer = 0.621371 kilometer
// convert kilometer  to  mile
function kilometerToMile(kilo) {
  const mile = kilo * 0.621371;
  return mile;
}
const onekilo = kilometerToMile(10);
console.log(onekilo);
// <---->----<---->----<---->----<---->----<---->