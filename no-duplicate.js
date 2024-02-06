/**
 * array has some duplicate elements
 * []
 */

const beriyaniKhor = ["hasan","sakib","rakib","hasan","mehedi","jihad",
    "mehedi","imtiaz"
];
const number = [10, 20, 50, 41, 52, 10, 50, 55, 41];

function noDuplicate(array) {
  // console.log(array);
  const unique=[];
  for(const item of array){
    if(unique.includes(item)===false){
      unique.push(item);
    }
  }
  return unique;
}
const uniqueArray = noDuplicate(beriyaniKhor);
console.log(uniqueArray);
