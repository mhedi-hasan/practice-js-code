console.log("DOM is the important");
// ------------> li <----------------
// Option 1-:getElementsByTagName
const liCollection=document.getElementsByTagName('li');
console.log(liCollection);
// -----------------------------------------------------------
// Option 1-:getElementsByTagName //aita dile kono 1 ta tag er name likle oi name joto tag ase oigulo ke output dekhabe.

// Option 2-:getElementById // aita holo specific value k return kore.
// Option 3-:getElementsByClassName // kono 1 ta class name onek jaygay use korle oi class name ke jodi call kora hoy tahole sob gulo ke output dekhabe.

// Option 4-:querySelector // will return the matched 1st One. 
// Option 5-:querySelectorAll // Node list dibe.
// -------------------------------------------------------------------
for(const lis of liCollection){
    console.log(lis.innerText);
}
// ------------> h1 <----------------
const h1Collection=document.getElementsByTagName('h1');
// console.log(h1Collection);
for(const h1s of h1Collection){
    console.log(h1s.innerText);
}

document.getElementById('dom-title');