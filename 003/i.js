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


let iskrito;

do {


    iskrito = rand(0, 1) ? 'S' : 'H';
    console.log(iskrito);

} while (iskrito != 'H');






// console.log(rand(1, 5));