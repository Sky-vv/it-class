// 1 
/*
let str = " aaa@bbb@ccc";
console.log(str.replace(/@/g, '!'));


// 1 Будет работать 
let str = " aaa@bbb@ccc";
let strReplace = () => {
    let a = str.replace(/@/g, '!',);
    console.log(a);
}
strReplace();

// 1 Универсальный метод, с использованием в дальнейшем.
let str = " aaa@bbb@ccc";
let strReplace = (arr) => {
    let a = arr.replace(/@/g, '!',);
    console.log(a);
}
strReplace(str);


// 2 Вырезать все bbb
let strB1 = 'aaa bbb ccc';
console.log(strB1.slice(4, 7));

let strB2 = 'aaa bbb ccc';
console.log(strB2.substr(4, 3));

let strB3 = 'aaa bbb ccc';
console.log(strB3.substring(4, 7));

// 3 Все большие буквы и все маленькие буквы
let strС1 = 'js';
console.log(strС1.toUpperCase);
console.log(strС1.toLowerCase);


// Reverse, splite, join получить 1 2 3 4 5 6 - 6 5 4 3 2 1 
let str = '1 2 3 4 5 6';
console.log(str.split('').reverse().join(''));



// 4 ! 
let str4 = 'index.html';
let checkHtml = (array) => {
    if  (array.substr(-4) == 'html') {
        console.log(true);
    } else {
        console.log(false);
    } 
}
checkHtml(str4)


let str1 = '1 2 3 4 5 6';
let strReverse = (array) => array.split('').reverse().join('');
console.log(strReverse(str1));

let str5 = 'index.html';
let checkHtml2 = (array) => array.substr(-4) == 'html'
console.log(checkHtml2(str5));

let cube = (array) => array * array * array
console.log(cube(2));



let isEven = (array) => array % 2 == 0;
console.log(isEven(8));
console.log(isEven(7));

// Обекты, вывод по свойству. ! 
let user = {
    name: 'Artem',
    isAdmin: true,
    age: 22
}
console.log(user.name);

// Обекты, удалить один из свойств. !
let user = {
    name: 'Artem',
    isAdmin: true,
    age: 22
}
delete user.age
console.log(user);


// Обекты, обращение к свойству. ! 
let user = {
    name: 'Artem',
    isAdmin: true,
    age: 22
}
console.log(user["age"]);


// Обекты, проверка существования свойства в объекте ! 
let user = {
    name: 'Artem',
    isAdmin: true,
    age: 22
}
console.log('isAdmin' in user);


// Обекты, цикл for in ! 
let user = {
    name: 'Artem',
    isAdmin: true,
    age: 22
}
for (key in user) {
    console.log(key);
    console.log(user[key]);
}


// !
let Car = {
    name: 'Honda',
    color: 'red',
    years: 2010
}
delete Car.years;
console.log(Car);
Car.color = 'green';
console.log(Car);

// Выводим
let Car = {
    name: 'Honda',
    color: 'red',
    years: 2010
}

console.log(Object.keys(Car));

// добавление свойств в Объект
let Car = {
    name: 'Honda',
    color: 'red',
    years: 2010
}
Car.price = '10';
console.log(Car);
*/

// 








