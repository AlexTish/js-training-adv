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

// Переменная lang может принимать 2 значения: 'ru' 'en'. Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке.
// Решение через if
let lang = 'ru';  // можно изменить на 'en'
if (lang === 'ru') {
    console.log(['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']);
} else if (lang === 'en') {
    console.log(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);
} else {
    console.log('Invalid language code');
}
// Решение через switch
switch (lang) {
    case 'ru':
        console.log(['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']);
        break;
    case 'en':
        console.log(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);
        break;
    default:
        console.log('Invalid language code');
}
//Решение через многомерный массив без if и switch
const days = {
    'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    'en':['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
};
console.log(days[lang] ||'Invalid language code');

// Решить задачу с помощью нескольких тернарных операторов. У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”.
let namePerson = 'Артем' 
    ? console.log('директор')
    :namePerson === 'Александр' 
        ? console.log('преподаватель')
        : console.log('студент');
