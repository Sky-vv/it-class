//Пример Switch
let arrPhoneNumber = [1242424, 3464646, 7808080];
for (let i = 0; i < arrPhoneNumber.length; i++) {   

switch(arrPhoneNumber[i]) {
    case 1242424:
        console.log('Номер Маши')
        break;
    case 3464646:
        console.log('Номер Леши')
        break;
    case 7808080:
        console.log('Номер Димы')
        break;
    default:
        console.log('Номер  не найден')
}
}

//Пример Push добавляет в конец элемент.
let arr2 = [1, 2, 3, 4, 5, 'a', 'b', 'c'];
arr2.push (21);
console.log(arr2);

//Пример POP убирает в конце элемент.
let arr3 = [1, 2, 3, 4, 5, 'a', 'b', 'c'];
arr3.pop ('');
console.log(arr3);

//Пример Shift убирает вначале элемент.
let arr4 = [1, 2, 3, 4, 5, 'a', 'b', 'c'];
arr4.shift ('');
console.log(arr4);

//Пример Unshift добавляет вначало.
let arr5 = [1, 2, 3, 4, 5, 'a', 'b', 'c'];
arr5.unshift (21);
console.log(arr5);

//Пример reverse зеркально отображает.
let arr6 = [1, 2, 3, 4, 5, 'a', 'b', 'c'];
arr6.reverse ();
console.log(arr6);

//split делит строку на массив по элементу.
let str7 = 'i, am, in, the, class';
let arr7 = str7.split(',');
console.log(arr7);

//Join 
let arr8 = [1, 2, 3, 4, 5];
let arrZ8 = arr8.join("!");
console.log(arrZ8);

//Includes
let arr9 = [1, 2, 3, 4, 5];
let arrA9 = arr9.includes(4);
console.log(arrA9);

//Fill
let arr10 = [1, 2, 3, 4, 5];
let arrZ10 = arr10.fill(0, 1, 3);
console.log(arrZ10);

//Concat
let arr11 = [1, 2, 3, 4, 5];
let arr12 = [6, 7, 8, 9, 10];
let arr13 = [11, 12, 13, 14, 15];
let arrZ12 = arr11.concat(arr13).concat(arr12);
console.log(arrZ12);

//
const Obj = {id:1, name:'Dima'}
console.log(Obj.id);
console.log(Obj.name);

//
const arrObj2 = [ 
    {id:1, name: 'Dima'},
    {id:2, name: 'Lesha'},
    {id:3, name: 'Jenia'}
]
let x = arrObj2.find(e1 => e1.id === 2);
console.log(x);

//
const arrObj3 = [ 
    {id:1, name: 'Alisa'},
    {id:2, name: 'Masha'},
    {id:3, name: 'Olia'}
]
let x2 = arrObj3.forEach(e2 => console.log(e2));

//
let arrFlat = [[1,2],[3,4,],5];
let arr21 = arrFlat.flat();
console.log(arr21);



