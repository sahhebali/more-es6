const myobject = { x: 1, y: 7, z: 5, a: 4, b: 6 }
const { x, b } = myobject;
// console.log('my object P', myobject?.p?.q);
const [first, second] = [20, 50];
// console.log(first, second);
const [firstName, secondName] = ['Md', 'saheb'];
// console.log(firstName, secondName);
const { sky, soile, money } = { sky: 'blue', soile: 'matti', color: 'red', money: 500 }


const company = {
    name: 'VI',
    ceo: { id: 1, name: 'Md saheb', food: 'jush' },
    web: {
        work: 'webdevolopment', employee: 22, famwork: 'react',
        tack: { first: 'html', second: 'css', third: 'javascript' }
    }

};
console.log(company.web.tack.third);
console.log(company?.back?.tack.third);
