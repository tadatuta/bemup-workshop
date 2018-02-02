const headlines = ['Рекомендуем', 'Хит продаж', 'Товар недели', 'Скидки до -18%'];
const categories = ['VoIP-оборудование', 'Лампочки', 'Тюбинги', 'Ноутбуки'];
const titles = [
    'Apple MacBook Pro 13 with Retina display Early 2015',
    'VoIP-телефон Yealink SIP-T21 E2',
    'Лампа ASD E27 11Вт 4000K'
];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getPrice() {
    return 'от ' + getRandom(20, 50000) + ' ₽';
}

function getRandomFromArray(arr) {
    return arr[getRandom(0, arr.length)];
}

function getSnippet() {
    return {
        headline: getRandomFromArray(headlines),
        img: 'http://placeimg.com/180/180/tech',
        category: categories[getRandom(0, categories.length)],
        title: getRandomFromArray(titles),
        price: getPrice()
    };
}

function callFewTimes(times, item) {
    return Array(times).fill(0).map(() => typeof item === 'function' ? item() : item);
}

module.exports = {
    goods: callFewTimes(20, getSnippet)
};
