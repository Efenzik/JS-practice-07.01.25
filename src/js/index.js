"use strict";
// Математичні оператрои
// console.log(3 ** 2); // Піднесення до степеня
// console.log(3 + 2); // Додавання
// console.log(3 - 2); // Віднімання
// console.log(3 * 2); // Множення
// console.log(3 / 2); // Ділення
// console.log(4 % 4); // Остача від ділення

// let num = 10;
// // console.log((num += 2));
// num += 2;
// console.log(num);

// Оператори порівняння
// console.log(1 > 2); //Більше
// console.log(1 < 2); //Мешне
// console.log(1 === 0); //Сувора рівність
// console.log(1 == 0); // рівність
// console.log(2 !== 1); //Сувора рівністб
// console.log(1 >= 0);//Більше рівне
// console.log(Number.parseInt("5.5px")); //Делает - целым
// console.log(Number.parseFloat("5.5px")); //Делает - дробью

// console.log(Number.isNaN(""));
// console.log(Math.PI);

// console.log(Math.pow(7, 2)); // Піднесення до степеня
// // Заокруглення
// console.log(Math.floor(3.7)); // Відкидає дробову частину
// console.log(Math.round(2.8)); // Математичне заокруглення
// console.log(Math.ceil(2.1)); // Заокруглення до більшого

// console.log(Math.min(312, 3214, 9423, 589));
// console.log(Math.max(312, 3214, 9423, 589));

// console.log(Math.random() * (10 - 5) + 5);

// function myRandom(min, max) {
//   return Math.round(Math.random() * (max - min) + min);
// }
// console.log(myRandom(10, 100));

// console.log(Math.round((0.1 + 0.2) * 10) / 10);

// Завдання / Практика
// 1 Задание =================

let a1 = 5 + 3;
let a2 = 5 - 3;
let a3 = 5 * 3;
let a4 = 5 / 3;

console.log("a1 = " + a1);
console.log("a2 = " + a2);
console.log("a3 = " + a3);
console.log("a4 = " + a4);

// 2 Задание =================

let a5 = 5 % 3;
let a6 = 3 % 5;
let a7 = 5 + "3";
let a8 = "5" - 3;
let a9 = 75 + "кг";

alert("a5 = " + a5);
alert("a6 = " + a6);
alert("a7 = " + a7);
alert("a8 = " + a8);
alert("a9 = " + a9);

// 3 Задание =================

const min = 1;
const max = 10;
const randomNumber = Math.random() * (max - min) + min;
console.log(randomNumber);

// 4 Задание =================

let numerFirst = parseFloat(prompt("Перше число:"));

let numerSecond = parseFloat(prompt("Друге число :"));

let sum = numerFirst + numerSecond;

alert("Сумма " + sum);

// 2.1 Задание =================

let k1 = parseInt("5px");
let k2 = parseInt("12djd334");
let k3 = parseInt("12.45asdwe12");
let k4 = parseInt("qwqweeewq");

console.log("k1 = ", k1);
console.log("k2 = ", k2);
console.log("k3 = ", k3);
console.log("k4 = ", k4);

// 2.2 Задание =================

let k5 = parseFloat("5px");
let k6 = parseFloat("12djd334");
let k7 = parseFloat("12.45asdwe12");
let k8 = parseFloat("qwqweeewq");

console.log("k5 = ", k1);
console.log("k6 = ", k2);
console.log("k7 = ", k3);
console.log("k8 = ", k4);

// 2.3 Задание =================

console.log("Найменше число :", Math.min(2, 34, 99, 3, 22, 36, 733, 18));
console.log("Найбільше число :", Math.max(2, 34, 99, 3, 22, 36, 733, 18));

// 2.4 Задание =================

let maxNumber = 19;
let minNumber = 3;

let randomNumberGambling = Math.floor(Math.random() * maxNumber) + minNumber;

console.log(randomNumberGambling);

// 3.1 Задание =================

let heightRectangle = 23;
let widthRectangle = 10;

let areaRectangle = heightRectangle * widthRectangle;

console.log("Площа прямокутника:", areaRectangle, "сантиметрів");

// 3.2 Задание =================

const heightCircus = 10;
const diametrCircus = 4;

const volumCircus = Math.PI * heightCircus * diametrCircus;
console.log("Обьєм цилінду :", volumCircus.toFixed(2), "метрів кубічних ");
