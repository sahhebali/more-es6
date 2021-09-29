const friends = ['rohim', 'korim', 'soliaman', 'mohammad jabbaruddin']
const flength = friends.map(friend => friend.length);
console.log(flength);

const products = [
    { name: 'water bottal', price: 100, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'blue' },
    { name: 'water glass', price: 2, color: 'white' },
]
// const productsNames = product.map(p => p.color);
// console.log(productsNames);
// products.map(product => console.log(product));
products.forEach(product => console.log(product));