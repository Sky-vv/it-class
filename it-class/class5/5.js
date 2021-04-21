// Пример 1
/*
const str = 'Hello';
console.log(str);
if(true) {
    const man = 'Main'
    console.log (man);
    console.log(str);
    var a = 'two'
}
console.log(a);


// Пример 2
function run () {
    var message = 'hello'
    console.log(message)
}
run();
console.log (message);

// Пример 3

function foo1 () {
    let number 
}
*/

let a = document.title;
console.log(a);
document.title = 25;

let b = document.URL;
console.log(b);

let c = document.domain;
console.log(c);

let d = document.getElementById('mydiv');
console.log(d, 'primer d');

let e = document.querySelectorAll('div');
console.log(e, 'primer e');

let f = document.querySelector('div');
console.log(f, 'primer f');
f.style.color = 'red';  
f.textContent = '32';





