'use strict';
// Придумать способ сохранять в переменную ответ пользователя после проверки на число именно как число при любом вводе. 
// (с пробелами и без в переменную заносилось именно число) На данный момент проверка isNumber пропустит такой вариант "   123   " 
// и именно это значение попадет в переменную. Необходимо это исправить. 
// Так же учитывайте что человек может нажать отмену и в проверку уйдет значение NULL

let title;
let screens;
let screenPrice;
let adaptive;

const isNumber = function (num) {
    if (num === null || num === undefined) {
        return false;
    }
    const trimmed = String(num).trim();
    if (trimmed === '') {
        return false;
    }
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function(){
    title = prompt("Как называется ваш проект?", " ");
    screens = prompt("Какие типы экранов нужно разработать?","Простые, Сложные, Интерактивные");
    do {
        screenPrice = prompt("Сколько будет стоить данная работа?","12000");
    } while (!isNumber(screenPrice));   
    screenPrice = parseFloat(screenPrice);
    adaptive = confirm("Нужен ли адаптив на сайте?");
}
asking();
console.log("Название проекта:", title || "(не указано)");
console.log("Типы экранов:", screens);
console.log("Стоимость работы:", screenPrice);
console.log("Адаптив нужен:", adaptive ? "Да" : "Нет");



// 1) Создать массив arr = [].Записать в него 7 любых многозначных чисел в виде строк
// Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)

const arr = ["1567", "2345", "5555", "4789", "56753", "33456", "42345"];
for (let i = 0; i < arr.length; i++) {
    const firstNumber = arr[i][0];
    if (firstNumber === "2" || firstNumber === "4") {
        console.log(arr[i]);
    }
}

// 2) Вывести в столбик все простые числа от 1 до 100 (сделать при помощи цикла). Рядом с каждым числом написать оба делителя данного числа
//     Например: “Делители этого числа: 1 и n”

for (let num = 2; num <= 100; num++) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${num} - Делители этого числа: 1 и ${num}`);
    }
}