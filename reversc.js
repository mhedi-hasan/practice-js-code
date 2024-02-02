//------------ reverse er use dekhano holo ---------------
// reverse er mane holo kono 1 ta word ba line ke uptay likh.mane son okkhor k ultay dibe jodi reverse use kora hoy.
//------ reverse onek vabe kora jay --------
const sentence = "I love my country.";
let reverse = "";
for (letter of sentence) {
  //   console.log(letter);
  reverse = letter + reverse;
}
// console.log(reverse);
//------------------- for diya reverse kora holo ------------------
// const word = 'I am a Fullstack Web Developer';
// for(let i=0;i<word.length;i++){
//     console.log(i)
// }
// ------------------ 2nd -----------------------
// const country = "Our Country Name Is Bangladesh.";
let rev = "";
for (let i = 0; i < sentence.length; i++) {
  // console.log(j);
  // console.log(country[j]);
  const letter = sentence[i];
  rev = letter + rev;
}
console.log(rev);

// ----------------------------
// const fullName = sentence.split();
// const fullName = sentence.split(' ').reverse().join();
const fullName = sentence.split('').reverse().join('');
console.log(fullName);
