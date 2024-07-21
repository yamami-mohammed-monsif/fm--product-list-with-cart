
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
const quantityControlBtns = document.querySelectorAll('.control-quantity');
const quantity = document.querySelectorAll('.quantity');
const removed = document.querySelector('.removed');
const plusBtn = document.querySelectorAll('.plus-btn');
const minusBtn = document.querySelectorAll('.minus-btn');
const selectedPlates = document.querySelectorAll('.plate-selected');
const orderedPlatesNumber = document.querySelectorAll('.ordered-plates')
const totalPlatePrice = document.querySelectorAll('.total-plate-price');
const removeBtn = document.querySelectorAll('.remove');
const orderTotal = document.querySelector('.order-total');
const totalChec = document.querySelector('.total-price');
const carbonNeutral = document.querySelector('.carbon-neutral');
const confirmOrderBtn = document.querySelector('.confirm-order');
const confirmationCard = document.querySelector('.confirmation');
const plateBill = document.querySelectorAll('.plate-bill');
const overlay = document.querySelector('.overlay');
const newOrderBtn = document.querySelector('.start-new-order');
const orderedPlates2 = document.querySelectorAll('.ordered-plates2');
const totalPlatePrice2 = document.querySelectorAll('.total-plate-price2');
const totalChec2 = document.querySelector('.total-price2');
const desserts = document.querySelectorAll('.card');

var count = 0;
var sum = 0;

addToCartBtns.forEach((btn, index) => {

    btn.addEventListener('click', (e) => {
        desserts[index].children[0].classList.add('draw-borders')
        e.currentTarget.style.display = 'none';
        quantityControlBtns[index].style.display = 'flex';
        e.currentTarget.nextElementSibling.children[1].innerHTML = 1;
        selectedPlates[index].style.display = 'flex';
        removed.style.display = 'none';
        orderTotal.style.display = 'flex';
        carbonNeutral.style.display = 'flex';
        confirmOrderBtn.style.display = 'block';
        plateBill[index].style.display = 'flex'; 
        count++;

        var price = parseFloat(totalPlatePrice[index].innerHTML.replace('$', ''));
        sum += price;
        totalChec.innerHTML = '$' + sum;
    });
});

plusBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {

        var quant = quantity[index].innerHTML;
        quant++;
        quantity[index].innerHTML = quant;

        var number = parseInt(orderedPlatesNumber[index].innerHTML);
        number++;
        orderedPlatesNumber[index].innerHTML = number + 'x';
        orderedPlates2[index].innerHTML = number + 'x';

        const value = parseFloat(totalPlatePrice[index].previousElementSibling.innerHTML.replace(/[^0-9.]/g, ''));
        var price = parseFloat(totalPlatePrice[index].innerHTML.replace('$', ''));
        price += value;
        totalPlatePrice[index].innerHTML = '$' + price;
        totalPlatePrice2[index].innerHTML = '$' + price;

        sum += value;
        totalChec.innerHTML = '$' + sum;
        totalChec2.innerHTML = '$' + sum;
    });
});

minusBtn.forEach((btn, index) => {

    btn.addEventListener('click', () => {

        var quant = quantity[index].innerHTML;
        quant--;
        quantity[index].innerHTML = quant;

        var number = parseInt(orderedPlatesNumber[index].innerHTML);
        if(number > 1) {
            number--;
            orderedPlatesNumber[index].innerHTML = number + 'x';
            orderedPlates2[index].innerHTML = number + 'x';
        } 

        const value = parseFloat(totalPlatePrice[index].previousElementSibling.innerHTML.replace(/[^0-9.]/g, ''));
        var price = parseFloat(totalPlatePrice[index].innerHTML.replace('$', ''));
        if(price > value) {
            price -= value;
            totalPlatePrice[index].innerHTML = '$' + price;
            totalPlatePrice2[index].innerHTML = '$' + price;
        }


        if(quant < 1) {
            quantityControlBtns[index].style.display = 'none';
            quantityControlBtns[index].previousElementSibling.style.display = 'flex';
            selectedPlates[index].style.display = 'none';
            orderTotal.style.display = 'none';
            carbonNeutral.style.display = 'none';
        confirmOrderBtn.style.display = 'none';
            count--;
        }
        if(count === 0) {
            removed.style.display = 'block';
        }

        sum -= value;
        totalChec.innerHTML = '$' + sum;
        totalChec2.innerHTML = '$' + sum;
    });
});

removeBtn.forEach((btn, index) => {

    btn.addEventListener('click', () => {
        selectedPlates[index].style.display = 'none';
        quantityControlBtns[index].style.display = 'none';
        quantityControlBtns[index].previousElementSibling.style.display = 'flex';
        carbonNeutral.style.display = 'none';
        confirmOrderBtn.style.display = 'none';
        count--;

        if(count === 0) {
            removed.style.display = 'block';
            orderTotal.style.display = 'none';
        }

        const value = parseFloat(totalPlatePrice[index].previousElementSibling.innerHTML.replace(/[^0-9.]/g, ''));
        var price = parseFloat(totalPlatePrice[index].innerHTML.replace('$', ''));
        sum -= price;
        totalChec.innerHTML = '$' + sum;
        totalPlatePrice[index].innerHTML = value;
        orderedPlatesNumber[index].innerHTML = 1 + 'x';
    })
});

confirmOrderBtn.addEventListener('click', () => {
    confirmationCard.style.display = 'block';
    overlay.style.display = 'block';
    window.scrollTo({top: 0});
});

newOrderBtn.addEventListener('click', () => {
    confirmationCard.style.display = 'none';
    overlay.style.display = 'none';
    location.reload();
});