const mas = [];


mas.push('Petras');

mas.push('Ona');

mas.push('Bebras', 'Kengūra', 'Raganosis');

mas[1] = 'Barsukas';


mas.unshift('Kažkas');

console.log([...mas]);

// mas.pop();
// mas.shift();

console.log(mas.length);

// for (let i = 0; i < mas.length; i++) {
//     console.log('Dabar:', i, mas[i]);
// }

// const ka = function(vienasGyventojas, aukstas) {
//     console.log('Dabar Fancy:', aukstas, vienasGyventojas);
// }


mas.forEach((g, aukstas) => console.log(++aukstas, g));