// console.log('START');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// setTimeout(() => {
//     for (let i = 0; i < 400000000; i++) {
//         String('kljsdfdjkjk');
//     }
// }, 5)

// console.log('END');


// const keb = document.querySelector('button');

// console.log(keb);

// keb.addEventListener('click', () => {
//     console.log('Valio');
//     keb.style.display = 'none';
//     setTimeout(() => {
//         keb.style.display = 'block';
//     }, 1000);
// });

// SPAGETI KODAS

const c = document.querySelector('.circle');
const h1 = document.querySelector('h1');
let count = 0;
let tid;
let balls = 10;
const start = () => {
    const timerId = setInterval(() => {
        c.style.top = rand(0, 90) + 'vh';
        c.style.left = rand(0, 90) + 'vw';
        balls--;
        if (!balls) {
            clearInterval(tid);
            c.style.display = 'none';
        }
        h1.innerText = 'Good: ' + count + ' Left:' + balls;
    }, 5000);
    return timerId
}
h1.innerText = 'Good: ' + count + ' Left:' + balls;

tid = start();

c.addEventListener('click', () => {
    clearInterval(tid);
    tid = start();
    c.style.top = rand(0, 90) + 'vh';
    c.style.left = rand(0, 90) + 'vw';
    balls--;
    if (!balls) {
        clearInterval(tid);
        c.style.display = 'none';
    }
    count++;
    h1.innerText = 'Good: ' + count + ' Left:' + balls;
    console.log(count);
})