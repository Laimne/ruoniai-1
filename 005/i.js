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

const filter = sp.filter(el => el.type == 'car')
    .map(el => ({...el, name: 'ZIL' }));

console.log(filter);