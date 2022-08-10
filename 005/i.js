const x = '^-I-^ ^-I-^ ^-I-^ ^-I-^ ^-I-^'
const sp = [
    { id: 1, type: 'man', name: 'Lina', color: 'blue' },
    { id: 2, type: 'car', name: 'Opel', color: 'red' },
    { id: 3, type: 'animal', name: 'Vilkas', color: 'green' },
    { id: 4, type: 'fish', name: 'Ungurys', color: 'yellow' },
    { id: 5, type: 'man', name: 'Tomas', color: 'green' },
    { id: 6, type: 'animal', name: 'Bebras', color: 'red' },
    { id: 7, type: 'animal', name: 'Barsukas', color: 'green' },
    { id: 8, type: 'car', name: 'MB', color: 'blue' },
    { id: 9, type: 'car', name: 'ZIL', color: 'red' },
    { id: 10, type: 'man', name: 'Teta Toma', color: 'yellow' },
];

// sp.forEach(el => console.log(el.name, el.color));

// console.log(x);

const map = sp.map(el => ({...el, name: 'X ' + el.name, what: 'nu na' }));

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// const _ = '555';

// const ats = [...Array(10)].map(_ => rand(1, 100));

// console.log(ats);

// const filter = sp.filter(el => el.type == 'car')
//     .map(el => ({...el, name: 'ZIL' }));

const filter = sp.filter(el => el.name != 'Tomas');

console.log([...sp]);

// sp.sort((a, b) => {
//     if (a.name > b.name) {
//         return -1;
//     }
//     if (a.name < b.name) {
//         return 1;
//     }
//     return 0;
// });

// sp.sort((a, b) => b.id - a.id);


sp.sort((a, b) => b.name.localeCompare(a.name));

console.log([...sp]);

const array1 = [1];

console.log(array1.reduce((previousValue, currentValue) => previousValue + currentValue));


// const array2 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array2.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);