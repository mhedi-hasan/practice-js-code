const sections=document.querySelectorAll('section')
// console.log(sections);
for(const section of sections){
    // console.log(section);
    section.style.border='2px solid black';
    section.style.padding='28px';
    section.style.width='50%';
    section.style.margin='0 auto';
    section.style.marginTop='10px';
    section.style.borderRadius='15px';
    section.style.backgroundColor='lightblue'
}