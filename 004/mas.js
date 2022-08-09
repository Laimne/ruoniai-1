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

//Esme
mas.forEach((g, aukstas) => console.log(++aukstas, g));


const mas2 = [];

mas2.push([5, 8, 12]);
mas2.push([45, 78, 112]);
mas2.push([50, 80, 102]);
// mas2.push(null);


// console.table(mas2);

// console.log(mas2[1][2]);


mas2.forEach(aukstas => aukstas.forEach(skaicius => console.log(skaicius)));