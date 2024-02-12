// 1st Option 

{/* <button onclick="document.body.style.backgroundColor='yellow'">
Make Change
</button> */}
// -----------------------------------------------
// 2nd Option // important: we are use this
function makeRed(){
    document.body.style.backgroundColor='red'
}
// -----------------------------------------------
// 3rd Option 
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);

function makePink() {
    document.body.style.backgroundColor = "pink";
}
// -----------------------------------------------
// 4th Option
const makePurpleButton=document.getElementById('make-purple')
makePurpleButton.addEventListener('click',function makePurple(){
    document.body.style.backgroundColor='purple';
})
// -----------------------------------------------
// 5th Option // important: we are use this
document.getElementById('make-goldenRod').addEventListener('click',function(){
    document.body.style.backgroundColor='gold';
})