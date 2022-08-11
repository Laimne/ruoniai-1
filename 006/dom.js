console.log('START');



// setTimeout(() => {
//     for (let i = 0; i < 400000000; i++) {
//         String('kljsdfdjkjk');
//     }
// }, 5)

// console.log('END');


const keb = document.querySelector('button');

console.log(keb);

keb.addEventListener('click', () => {
    console.log('Valio');
    keb.style.display = 'none';
    setTimeout(() => {
        keb.style.display = 'block';
    }, 1000);
});