// 1-> Where to add.
const domsList=document.getElementById('dom-list')
// 2-> What to be added.
const li=document.createElement('li')
li.innerText='Our country name is bangladesh.';

// 3-> Add the child.
domsList.appendChild(li);

// --------------------------------------------
// Use js to create a section and added to html webpages.
//1-> Where to add.
const mainContainer=document.getElementById('main-container')

// 2-> What to be added.
const section=document.createElement('section')
const h1 = document.createElement('h1')
h1.innerText='Some special book name';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1= document.createElement('li');
li1.innerText=('Bangla')
ul.appendChild(li1);

const li2= document.createElement('li');
li2.innerText=('English')
ul.appendChild(li2);

const li3= document.createElement('li');
li3.innerText=('Python')
ul.appendChild(li3);

section.append(ul);

mainContainer.appendChild(section);

    
// Set innerHtml directly.
const sectionDress=document.createElement('section')
sectionDress.innerHTML=`
    <h1>My Dress section</h1>
    <ul>
        <li>T-shirt</li>
        <li>Lungi</li>
        <li>Panjabi</li>
    </ul>
`
mainContainer.appendChild(sectionDress);