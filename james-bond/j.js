function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


class Nso {

    static antenna = 3;
    static allCount = 0;

    static addAllCount(c) {
        this.allCount = this.allCount + c;
    }

    static sayBu() {
        console.log('Būūūūū!');
        console.log(this.antenna);
    }

    constructor() {
        console.log('konstruojam');
        this.count = rand(2, 5);
        this.constructor.addAllCount(this.count);
    }

    sayBu2() {
        console.log('2 X Būūūūū!');
    }

    mars() {
        // console.log(`This UFO ship has ${this.count} ufonauts`);
        // console.log('Antennas:', this.constructor.antenna);
        // this.constructor.sayBu();
        this.sayBu2();
    }

    addCount(c) {
        this.count = this.count + c;
        this.constructor.addAllCount(c);
    }

}

class Ddo extends Nso {


    constructor() {
        super();
        console.log('konstruojam2');
    }


    sayBu2() {
        console.log('3 X Būūūūū!');
    }

    sayBu4() {
        console.log('4 X Būūūūū!');
    }

}

Nso.sayBu();

const ufo1 = new Nso();
const ufo2 = new Ddo();

console.log(ufo1);
console.log(ufo2);

ufo1.addCount(10);
ufo2.addCount(100);
ufo1.addCount(20);


console.log(ufo1);
console.log(ufo2);


console.log(Nso.allCount);
console.log(Ddo.allCount);





ufo1.mars();
ufo2.mars();

ufo2.sayBu4();

// Nso.antenna = 5;

// ufo1.mars();
// ufo2.mars();