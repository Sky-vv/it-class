//������� �1
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
/*
function myFunction1a(a, b) {
console.log(a === b);
}
 
myFunction1a(7, 7);
 
const myFunc2a = (a,b) => a === b
 
console.log(myFunc2a(21,21),"asdasdsafasfasf");
 
function myFunction1d(a, b) {
if (a === b) {
return "true";
}
return "false";
}
 
console.log(myFunction1d(5, 5));
 
//������� �2
// Write a function that takes two numbers, say a and b, as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
 
//������� �1
 
let str = '������';
console.log(str, typeof str);
 
let num = 123;
console.log(num, typeof num);
 
let flag = true;
console.log(flag, typeof flag);
 
let txt = "true";
console.log(txt, typeof txt);
 
//������� �2
 
let a1 = 5 + 3;
console.log(a1, '���������� �1');
 
let a2 = 5 - 3;
console.log(a2, '���������� �2');
 
let a3 = 5 * 3;
console.log(a3, '���������� �3');
 
let a4 = 5 / 3;
console.log(a4, '���������� �4');
 
let a5 = 5 + 3 + 3;
console.log(a5, '���������� �5 "����������"');
 
//������� �3
 
let a6 = 5 % 3;
console.log(a6, '���������� �6');
 
let a7 = 3 % 5;
console.log(a7, '���������� �7');
 
let a8 = 5 + '3';
console.log(a8, '���������� �8');
 
let a9 = '5' - 3;
console.log(a9, '���������� �9');
 
let a10 = 75 + '��';
console.log(a10, '���������� �10');
 
//������� �4
 
let height = 23;
let width = 10;
 
let s = height * width;
console.log(s, '������� ��������������');
 
let s1 = `${height * width} ��2`;
console.log(s1, '������� ��������������');
 
//������� �5
 
let heightC = 10;
let dC = 4;
let v = Math.round(Math.PI * Math.pow((dC / 2),2) * heightC);
console.log(v, '����� ��������');
 
//������� �6
 
let n = 3;
let m = 4;
let k = Math.sqrt((Math.pow(n,2)) + (Math.pow(m,2)));
console.log(k, '����������');
 
//* ��������� �������
 
function fib(n) {
let a = 1;
let b = 1;
for (let i = 3; i <= n; i++) {
let c = a + b;
a = b;
b = c;
}
return b;
}
console.log(fib(11), '����������� ������� ������������������ �������� ����������'); 
 
//* ������ ����� ���� ���!!!
 
function ipoteka(price, percent, years) {
let per = percent / 100 / 12;
let month = years * 12;
let r = price * ((per * Math.pow(1 + per, month)) / ( Math.pow(1 + per, month) - 1));
return r.toFixed(2);
}
 
let price = 2000000,
percent = 10,
years = 5;
let amount = ipoteka(price, percent, years) * (years * 12);
let perepl = (ipoteka(price, percent, years) * (years * 12)) - price;
 
console.log("����� ����� �������: " + price + " ���");
console.log("������: " + percent + " %");
console.log("���� �������: " + years + " ���");
console.log("����������� ������: " + ipoteka( price, percent, years) + " ���");
console.log("����� ����� ������: " + amount.toFixed(2) + " ���");
console.log("��������� �� �������:" + perepl.toFixed(2) + " ���");
 
let bool = false;
console.log(bool, typeof bool);
bool = String(bool);
console.log(bool, typeof bool);
 
let str = '464';
console.log(str, typeof str);
let num = Number(str);
console.log(num, typeof num);
 
let num1 = Number('\t \n' - 2 + true)
console.log(num1, typeof num1);
 
let bool1 = Boolean(' ');
console.log(bool1);
 
let a1 = [] + null + 1;
console.log(a1, "game_out");
 
console.log(null == undefined);
console.log(null === undefined);
 
let bool2 =!true;
console.log(bool2);
 
let answer = prompt('How old are you?');
 
if (answer < 18 || answer > 40) {
console.log('CHILD!!');
} else {
console.log('Oh yee!');
}
 
let login = 't9_team@mail.ru';
let password = '12345678';
let loginInput = prompt('Your Login?');
let passwordInput = prompt('Your password?');
if (loginInput == login && passwordInput == password) {
console.log('Very good!!');
} else {
console.log('error!');
}
 
let a2 = prompt('YES!');
if (a2 > 10) console.log('100%');
 
let arr = [1, 2, 3, 4, 5];
if (arr[0] > 3) console.log(true); else console.log(false);
if (arr[1] > 3) console.log(true);
if (arr[2] > 3) console.log(true);
if (arr[3] > 3) console.log(true);
if (arr[4] > 3) console.log(true);
 
let arr1 = [1, 2, 3, true, false, '6', 7, 8, 'hi', 'good bye'];
for (let i = 0; i <arr1.length; i++) {
console.log(arr1[i], "last");
}
 
for (let i = 10; i < 19; i++) {
for (let q = 12; q < 18; q++)
console.log(i, q);
} 
 
let w = 10;
while (w < 271) {
if ((w % 10) == 0)
console.log(w, '10-270 task')
w++
}
*/
/*
//������� �1
 
let a1 = true + false;
console.log(a1, "a1");
//�������������� "bool" � ����� (�������� +). true = 1, false = 0. 1+0=1
 
let a2 = 12 / "6";
console.log(a2, "a2");
//�������������� � "6" ����� (�������� /)
 
let a3 = "number" + 15 + 3;
console.log(a3, "a3");
//������� ������ � ������� ������������ ���������� + ����� 15 � ����������� ��� � ������.
//�� �� ��������� � "+" � 3.
 
let a4 = [1] > null;
console.log(a4, "a4");
//������ �������� ��������, � ��� ������ ��� "�����". ������.
 
let a5 = "foo" + +"bar";
console.log(a5, "a5");
// + ����������� ������ � �����, �� ����� ��� ��� - ������������� NaN.
// ������ foo + NaN = fooNaN
 
let a6 = "true" == true;
console.log(a6, "a6");
// == ����������� � �����. NaN = 1 - ����.
 
let a7 = false == "false";
console.log(a7, "a7");
// ���������� �6
 
let a8 = null == "";
console.log(a8, "a8");
//null ���������� ������������� � �����, false.
 
let a9 = !!"false" == !!"true";
console.log(a9, "a9");
// �������� !! ����������� ������ � bool. ��� �� ������, ������������ � true. true = true, ������.
 
let a10 = ["x"] == "x";
console.log(a10, "a10");
// == ����������� ������ ['x'] � 'x', ��� ����� 'x'. ������.
 
let a11 = [] + null + 1;
console.log(a11, "a11");
//[] ������������� � ������ ������, ����� �� �������� � ������� �3.
 
let a12 = 0 || ("0" && {});
console.log(a12, "a12");
 
0 || "0" && {} 
==> ������� ����� ����� (0 || "0") && {}. 0 = false, �� ������ ������ = true.
==> (false || true) && {} ���������� ��������
==> "0" && {}
==> true && true
==> {} 
(? ������ prettier ������� ������?)
*/
/*
let a13 = [1, 2, 3] == [1, 2, 3];
console.log(a13, "a13");
// ��� ������� �������� ����� ������� ����������� ���������, ���� � �������� ���������� �������� (?)
 
let a14 = 15 + 3 + "number";
console.log(a14, "a14");
//������� ����������� ��� ����� 15 + 3 (�������� ����� �������). ����� �� �������� � �������� 1-3
//���������� � ������ � �������������
 
//������� �2
// while (i) = while (i != 0). i-- = i-1. ������: ���� i �� ����� 0 �������� �� 1.
// 3, 2, 1 - ��� ���, ��������� ���������
 
//������� �3
let w = 40;
while (w < 92) {
console.log(w, "40-91 task");
w++;
}
 
//������� �4
let z = 11;
while (z < 341) {
if (z % 4 == 0) console.log(z, "11-340 task");
z++;
}
 
//������� �5
for (let y = 100; y > -6; y--) {
console.log(y, "100 - -5 task");
}
 
//������� �6
let arr = [1, 6, 8, 14, 0, 4];
for (let i = 0; i < arr.length; i++) {
if (arr[i] > 3 && arr[i] < 10) {
console.log(arr[i], "3<i<10");
}
}
 
//������� �7
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let x = "";
for (let i1 = 0; i1 < arr1.length; i1++) {
x += "-" + arr1[i1];
}
console.log(x + "-");
 
//������� �8
let arr2 = [
"sunday",
"monday",
"tuesday",
"wednesday",
"thursday",
"friday",
"saturday",
];
for (let i2 = 0; i2 < arr2.length; i2++) {
if (arr2[i2] === "sunday" || arr2[i2] === "saturday") {
console.log("%c%s", "font-weight: bold;", arr2[i2]);
} else {
console.log(arr2[i2]);
}
}
 
//������� �9
//������ �� ������� �8
 
let day = new Date();
let n = day.getDay();
console.log(arr2[n]);
for (let i3 = 0; i3 < arr2.length; i3++) {
if (i3 == n) {
console.log("%c%s", "font-style: italic;", arr2[i3]);
} else {
console.log(arr2[i3]);
}
}
 
//������� �10
for (let n1 = 1000, num = 1; ; n1 = n1 / 2, num++) {
console.log(n1, num);
if (n1 < 50) break;
}
 
*/

let arrPhoneNumber = ["1641585", "6104100", "3200483"];

for (let i = 0; i < arrPhoneNumber.length; i++) {
  switch (arrPhoneNumber[i]) {
    case "1641585":
      console.log("Artem namber");
      break;
    case "6104100":
      console.log("Dima number");
      break;
    case "3200483":
      console.log("Natasha number");
      break;
    default:
      console.log("error");
  }
}

let arr = [
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  "field",
  "home",
  "seven",
  true,
];
console.log(arr);

arr.push("ten");
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(11);
console.log(arr);

arr.reverse();
console.log(arr);

let str = "i, am, very, clever, persom, maybe, yes, maybe, no";
let arr2 = str.split(",");
console.log(arr2);

let arr3 = arr.join(",");
console.log(arr3);

let arr4 = arr.includes(18);
console.log(arr4);

arr.fill(0, 3, 5);
console.log(arr);

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
arr5.concat(arr6);
console.log(arr5);
let arr7 = arr5.concat(arr6);
console.log(arr7);

const Obj = { id: 111111, name: "pasha" };
console.log(Obj.id);
console.log(Obj.name);

const Obj2 = [
  { id: 1, name: "pavel" },
  { id: 2, name: "timur" },
  { id: 3, name: "oleg" },
  { id: 1, name: "tanja" },
];
//let x = Obj2.find(e1 => e1.id === 2);
//console.log(x);
let y = Obj2.findIndex((e1) => e1.id === 5);
console.log(y);

Obj2.forEach((e1) => console.log(e1));

let a = [[1, 2, 3], [4, 5, 6], [7, 8], 9];
let b = a.flat();
console.log(b);

let c = Obj2.filter((e1) => e1.id === 1);
console.log(c);

let d = Obj2.map((e1) => e1.name + "!");
console.log(d, "d");

//FD
function showConsole() {
  let e = Obj2.map((e1) => e1.name + "!!!");
  console.log(e, "e");
}
showConsole();
showConsole();
showConsole();

//FE
//let sum = function (params) {
//}

//Arrow function
let func = (a, b, c, d) => {
  let f = Obj2.map((e1) => e1.name + "!!!!!");
  console.log(f, "f");
};
func();