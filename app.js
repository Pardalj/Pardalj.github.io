let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let items = [];

function toggleItem(btn, itemId, price) {
    let item = items.find(i => i.id === itemId);
    if (!item) {
        let newItem = {
            id: itemId,
            price: price
        }
        items.push(newItem);
        btn.classList.toggle('added-to-cart');
        btn.innerText = 'Delete';
    } else {
        let index = items.indexOf(item);
        items.splice(index, 1);
        btn.classList.remove('added-to-cart');
        btn.innerText = 'Add';
    }
    updateTotal();
}

function updateTotal() {
    let total = calculateTotalPrice();
    if (total > 0) {
        tg.MainButton.setText('Total: ' + total);
        tg.MainButton.show();
    } else {
        tg.MainButton.hide();
    }
}

function calculateTotalPrice() {
    return items.reduce((acc, item) => acc + item.price, 0);
}

Telegram.WebApp.onEvent('mainButtonClicked', () => {
    let data = {
        items: items,
        totalPrice: calculateTotalPrice()
    }
    tg.sendData(JSON.stringify(data));
});

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');

btn1.addEventListener('click', () => {
    toggleItem(btn1, "item1", 1000);
})

btn2.addEventListener('click', () => {
    toggleItem(btn2, "item2", 2000);
})

btn3.addEventListener('click', () => {
    toggleItem(btn3, "item3", 3000);
})

btn4.addEventListener('click', () => {
    toggleItem(btn4, "item4", 4000);
})

btn5.addEventListener('click', () => {
    toggleItem(btn5, "item5", 5000);
})

btn6.addEventListener('click', () => {
    toggleItem(btn6, "item6", 6000);
})
