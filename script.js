//Создать переменную num со значением 266219
const num = 2666219;
console.log(typeof num);

// Вывести в консоль произведение цифр этого числа
const digits = String(num).split('');
let product = 1;
for (const digit of digits) {
    product *= Number(digit);
}
console.log(product);

//Полученный результат возвести в степень 3, используя только 1 оператор
const result = product ** 3;
console.log(result);

//Вывести в консоль первые 2 цифры полученного числа
const resultStr = String(result);
const firstTwoDigits = resultStr.slice(0, 2);
console.log(firstTwoDigits);