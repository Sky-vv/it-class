/*
let mydiv1 = document.querySelector('div');
console.log(mydiv1);
mydiv1.classList.add('hero-slider');
console.log(mydiv1.classList.contains('mydiv1'));
console.log(mydiv1.classList.contains('mydiv4'));
mydiv1.classList.toggle('del');
console.log(mydiv1);
mydiv1.classList.toggle('hero-slider');
console.log(mydiv1);

let b2 = document.querySelector('.b2');
console.log(b2);
console.log(b2.id);
console.log(b2.className);
console.log(b2.title);
b2.className = 'newClass2';
b2.id = 'newID2';
b2.title = 'newTitle2';

console.log(b2.getAttribute('class'));
console.log(b2.getAttribute('id'));
console.log(b2.getAttribute('title'));

console.log(b2.getAttribute('myName'));


b2.setAttribute("class", "Test1");
console.log(b2);

b2.removeAttribute('id');
console.log(b2);


const div = document.createElement('addNewDiv');
div.id = 'newDiv33';
div.className = 'Hero';
document.body.innerHTML = "addNewDiv";


let btn = document.querySelector('.btn2');
console.log(btn);
btn.onclick = () => {
    btn.classList.toggle('button-green');
}


let btn5 = document.querySelector('.btn5');
console.log(btn5);

let btnClick = () => {
    let input = document.getElementById('npt');
    input.value = 'Sky';
}
btn5.addEventListener('click', btnClick)


let btn5 = document.querySelector('.btn5');
console.log(btn5);

let btnClick = () => {
    let input = document.getElementById('npt');
    let sqr = input.value * input.value; 
    console.log(sqr);
}
btn5.addEventListener('click', btnClick)

*/

let btn5 = document.querySelector('.btn5');
console.log(btn5);

let swapInput = () => {
    let input1 = document.getElementById('npt1');
    let input2 = document.getElementById('npt2');
    let npt1 = input1.value;
    input1.value = input2.value;
    input2.value = npt1;
}
btn5.addEventListener('click', swapInput) 
















