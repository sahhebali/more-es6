const fish = {
    id: 58, name: 'King Hilsha', price: 9000, phone: 5464542468489, adddres: 'chadpur', dress: 'silver'
};
// const phone = (fish.phone);
// const price = (fish.price);
// const dress = (fish.dress);
// const id = (fish.id);
const ab = { phone, price, dress, id } = fish;

// console.log(phone, price);
// console.log(phone);
// console.log(phone, dress);
// console.log(phone, price);
// console.log(phone, id);

const company = {
    name: 'VI',
    ceo: { id: 1, name: 'Md saheb', food: 'jush' },
    web: {
        work: 'webdevolopment', employee: 22, famwork: 'react',
        tack: { first: 'html', second: 'css', third: 'javascript' }
    }

};
// const work = company.web.work;
// const freamwork = company.web.famwork;
const { work, famwork } = company.web;
const { food } = company.ceo;
const { first, second } = company.web.tack;
console.log(work, famwork, food);