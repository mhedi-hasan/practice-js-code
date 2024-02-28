function allData(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(res =>res.json())
.then(data => displayPost(data))
}

function displayPost(posts){
    const postContainer=document.getElementById('container-post');
    for(const post of posts){ 
        const postDiv=document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML=`
        <h4>UserId- ${post.id}</h4>
        <h5>Name : ${post.name}</h5>
        <h5>UserName : ${post.username}</h5>
        <h5>UserEmail : ${post.email}</h5>
        `;
        postContainer.appendChild(postDiv)
        console.log(post)
}
}
allData();

