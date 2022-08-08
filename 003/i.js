function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/*

<  ---  >=
>  ---  <=
== --- !=
|| --- &&


*/


let turiu = 500;

while (turiu <= 1000) {

    turiu = turiu + 100;

}




let saugiklis = 10000000000;

let kartai = 0;
let count = 0;

do {
    if (!(saugiklis--)) break;

    count++;
    let iskrito;
    iskrito = rand(0, 1) ? 'S' : 'H';
    if ('H' == iskrito) {
        kartai++;
    } else {
        kartai = 0;
    }
    // console.log(iskrito);

} while (kartai != 20);

console.log(count);









// console.log(rand(1, 5));