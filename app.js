let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF'; 
tg.MainButton.color = '#2cab37';

let item = "";

let btn1 = document.getElementById('btn1'); 
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');

btn1.addEventListener('click', () => {
    if (MainButton.isVisible) {
        MainButton.hide();
    }
    else {
        MainButton.setText('Button1');
        item = "1";
        MainButton.show();
    }
})

btn2.addEventListener('click', () => {
    if (MainButton.isVisible) {
        MainButton.hide();
    }
    else {
        MainButton.setText('Button2');
        item = "2";
        MainButton.show();
    }
})

btn3.addEventListener('click', () => {
    if (MainButton.isVisible) {
        MainButton.hide();
    }
    else {
        MainButton.setText('Button3');
        item = "3";
        MainButton.show();
    }
})

btn4.addEventListener('click', () => {
    if (MainButton.isVisible) {
        MainButton.hide();
    }
    else {
        MainButton.setText('Button4');
        item = "4";
        MainButton.show();
    }
})

btn5.addEventListener('click', () => {
    if (MainButton.isVisible) {
        MainButton.hide();
    }
    else {
        MainButton.setText('Button5');
        item = "5";
        MainButton.show();
    }
})

btn6.addEventListener('click', () => {
    if (MainButton.isVisible) {
        MainButton.hide();
    }
    else {
        MainButton.setText('Button6');
        item = "6";
        MainButton.show();
    }
})

Telegram.WebApp.onEvent('mainButtonClicked', () => {
    tg.sendData(item);
})

let usercard = document.getElementById('usercard');

let p = document.createElement('p');

p.innerText = `${tg.initDataUnsafe.first_name} ${tg.initDataUnsafe.last_name}`;

usercard.appendChild(p);
