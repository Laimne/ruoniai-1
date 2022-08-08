let ka = 2;


// if (15 > 7 && 1000 > 100) {
//     ka = 'Jo';
// } else {
//     ka = 'Ne Jo';
// }




// 51 > 7 ? ka++ || ka++ : ka--;

// console.log(++ka / ++ka);

// if (12 > 1) {
//     ka = 'Jo';
// }
// if (8 > 16) {
//     ka = 'Liutas';
// } else {
//     ka = 'Ne Jo';
// }

// console.log(ka);

const kas = 'M'

// if (kas == 'S') {
//     console.log('Tikrinam S');
// }
// if (kas == 'S' || kas == 'M') {
//     console.log('Tikrinam M');
// }
// if (kas == 'S' || kas == 'M' || kas == 'L') {
//     console.log('Tikrinam L');
// }
// if (kas == 'S' || kas == 'M' || kas == 'L' || kas == 'XL') {
//     console.log('Tikrinam XL');
// }

switch (kas) {
    case 'S':
        console.log('Tikrinam S');
    case 'M':
        console.log('Tikrinam M');
    case 'L':
        console.log('Tikrinam L');
    case 'XL':
        console.log('Tikrinam XL');
}

// switch (kas) {
//     case 'A':
//         console.log('A');
//         break;
//     case 'B':
//         console.log('B');
//         break;
//     case 'C':
//         console.log('C');
//         break;
// }








//Global scope

let varas = 'Labas Globalas';
if (5 > 3) {
    let varas = 'Labas Globalas 2';
    if (15 > 3) {
        let varas = 'Labas Globalas 3';
    }
}

let rez = 1;

for (let i = 1; i < 6; i++) {

    rez = rez * i;

}



console.log('*', rez);