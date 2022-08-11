function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const size = rand(10, 30);

let add = 0;
for (let i = 0; i < size; i++) {
    let arr = [...Array(rand(10, 20))].map(_ => rand(0, 10));
    arr[arr.length - 1] = add;
    add = arr;
}

// console.log(add);


function run(n) {
    console.log('Enter:', n);
    if (n < 3) {
        run(n + 1);
    }
    console.log('Exit:', n)
}

run(1);