function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data))
}
// --------------------------
function albumData(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => console.log(data))
}
const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name); 