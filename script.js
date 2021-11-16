// Задание 1

// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.
let ul = document.querySelector('ul');
document.querySelector('form').addEventListener('keyup', (event) => {
    let li = document.createElement('li');
    li.innerText = event.key;
    ul.appendChild(li);
})

// Задание 2

// Вставить в html теги input и div (просто предусмотреть в разметке).

// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля)
let div = document.querySelector('div');
const input = document.querySelector('input');

input.addEventListener('keyup', (event) => {
    div.innerText = `Клиент набирает: ${input.value}`;
})

// Задание 3

// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст. После отправки формы инпут должен быть очищен (проставить пустую строку в value).

let ul = document.querySelector('ul');
console.log(ul)
let input = document.querySelector('input');
let form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);
})


// Задание 4

// Калькулятор. 

// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Опции select - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму, над двумя числами выполняется действие, выбранное в select. Результат отображается в div.

let form = document.querySelector('form');

let select = document.querySelector('select');
let div = document.querySelector('div');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputFirst = document.querySelector('#first');
    let inputSecond = document.querySelector('#second');
    let optionStatus = document.querySelector('select').value;
    let result;
    console.log(inputFirst, inputSecond, optionStatus);
    if (optionStatus === '-'){
        result = inputFirst.value - inputSecond.value;

    } else if(optionStatus === '+'){
        result = inputFirst.value + inputSecond.value;

    } else if(optionStatus === '/'){
        result = inputFirst.value / inputSecond.value;

    } else if(optionStatus === '*'){
        result = inputFirst.value * inputSecond.value;

    }

2) решить с помощью evel (https://developer.mozilla.org/...)
    result = eval(`${inputFirst.value} ${optionStatus} ${inputSecond.value}`);


    div.innerText = result;
    inputSecond.value = '';
    inputFirst.value = '';
})



// Задание 5

// Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки, поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    }

let rgb = `rgb(${getRandomInteger(0,255)}, ${getRandomInteger(0,255)}, ${getRandomInteger(0,255)})`;
console.log(rgb);


function randomColor(){
    let rgb = `rgb(${getRandomInteger(0,255)}, ${getRandomInteger(0,255)}, ${getRandomInteger(0,255)})`;
    console.log(rgb);   
    return rgb;
}
function randomDeg(){
    let randomDegree = `rotate(${getRandomInteger(-180, 180)}deg)`;
    return randomDegree;
}


let button = document.querySelector('#btnn');
button.style.padding = '20% 50%';
button.addEventListener('mouseenter', (event) => {
    button.style.backgroundColor = randomColor();
    button.style.transform = randomDeg();
})