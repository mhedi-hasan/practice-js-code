function imageData(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => allData(data))
}
function allData(data){
    const ul=document.getElementById('user-text');
    for(const user of data){
        console.log(user.title);
        const li=document.createElement('li');
        li.innerText=user.id;
        ul.appendChild(li);
    }
}