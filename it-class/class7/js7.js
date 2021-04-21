/*
console.log(document.getElementById("form1"));
console.log(document.forms);

let form = document.forms['firstForm'];
console.log(form.elements);
console.log(form.elements['login']);

let form2 = document.forms['secondForm'];
console.log(form2.elements['password']); 

let form2el = document.getElementById('form2i1');
form2el.disabled = true;
form2el.value = '1';
form2el.type = 'submit';
form2el.name = '3';
console.log(form2el);


let  form3Reset = document.getElementById('form3');
document.getElementById('form3').reset();
let in1 = document.getElementById("form3i1");
let in2 = document.getElementById("form3i2");
let btn = document.getElementById("form3i3");
let check = () => btn.disabled =
in1.value.length < 1  ||  in2.value.length < 1;
in1.addEventListener('input', check);
in2.addEventListener('input', check);
check();

let  form3Reset = document.getElementById('form3');
document.getElementById('form3').reset();
let in1 = document.getElementById("form3i1");
let in2 = document.getElementById("form3i2");
let btn = document.getElementById("form3i3");
let check = () => btn.disabled =
in1.value.length < 1  ||  in2.value.length < 1;
in1.addEventListener('input', check);
in2.addEventListener('input', check);
check();
*/

/*
let  form3Res = document.getElementById('form3');

let sendDisabled = () => {
form3.disabled = true;
document.forms['form3'].reset();
}
addEventListener('click', sendDisabled);

document.getElementById('form3').reset();
let  = document.getElementById("form3i3").addEventListener('click', sendDisabled);



// Задание 6
let buttonChange6 = () => {
    let input6 = document.getElementById('input-change6');
    input6.value = 'Blue screen - error! =)';
  };
*/

function getCheckBoxes() {
    let selectedCheckBoxes = document.querySelector('form10');
    let checkedValues = Array.from(selectedCheckBoxes).map(cb => cb.value);
  
    console.log(checkedValues);
  
    return checkedValues;
  }







