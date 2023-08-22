document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("nav").classList.toggle("open");
        document.querySelector("body").classList.toggle("lock")
    })
});

document.addEventListener('DOMContentLoaded', () => {
    const menuBtns = document.querySelectorAll('.menu__button');
    menuBtns.forEach(el => {
        el.addEventListener('click', (e) => {
            let currentBth = e.currentTarget;   
            let drop = currentBth.closest('.menu__item').querySelector('.menu__dropdown');

            drop.classList.toggle('menu__dropdown--active');
        })
    })
});

const list = document.querySelector('.dropdown__list'),
        items = document.querySelectorAll('.card__container-list')

function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        console.log(targetId)

        switch(targetId){
            case 'all' :
                getItems(targetId)
                break
            case 'acid' :
                getItems(targetId)
                break
             case 'oxide' :
                getItems(targetId)
                break
            case 'hydroxide' :
                getItems(targetId)
                break
            case 'solt' :
                getItems(targetId)
                break
            case 'other' :
                getItems(targetId)
                break
        }
    })
}
filter()

function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
};

const showMore = document.querySelector('.scroll__button');
const productsLength = document.querySelectorAll('.card__container-list');
let unit = 8;

showMore.addEventListener('click', () => {
    unit += 4;
    const array = Array.from(document.querySelector('.main__container').children);
    const visItems = array.slice(0, unit);

    visItems.forEach(el => el.classList.add('card__container-list--acrtive'));

});
function alerted() {
    var scrollText = document.querySelector('.scroll__text');
    var currentText = scrollText.innerHTML;

    if (currentText === 'Показано 8 з 16 товарів') {
        scrollText.innerHTML = 'Показано 12 з 16 товарів';
    } else if (currentText === 'Показано 12 з 16 товарів') {
        scrollText.innerHTML = 'Показано 16 з 16 товарів';
    };
};
let darkBlockWidth = 50; // начальная ширина блока в процентах

function alerted() {
    const scrollText = document.querySelector('.scroll__text');
    const darkBlock = document.querySelector('.scroll__landing_dark');

    if (scrollText.innerHTML === 'Показано 8 з 16 товарів') {
        scrollText.innerHTML = 'Показано 12 з 16 товарів';
    } else if (scrollText.innerHTML === 'Показано 12 з 16 товарів') {
        scrollText.innerHTML = 'Показано 16 з 16 товарів';
    }
    darkBlockWidth += 25; // увеличиваем ширину блока на 25%

    if (darkBlockWidth > 100) {
        darkBlockWidth = 100; // если ширина превысила 100%, возвращаем ее к начальной
    }

    darkBlock.style.width = darkBlockWidth + '%'; // применяем новую ширину блока
};
