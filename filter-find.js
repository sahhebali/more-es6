const number = [12, 2, , 1, 33, 19, 22, 41, 39];
const bigNumber = number.filter(number => number > 20);
// console.log(bigNumber);


const products = [
    { name: 'water bottal', price: 100, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'blue' },
    { name: 'water glass', price: 2, color: 'white' },
]

const expensive = products.filter(product => product.price > 100);
// console.log(expensive);
const black = products.filter(product => product.color == 'blue');
// console.log(black);
const blackItem = products.find(product => product.color == 'black');
console.log(blackItem);