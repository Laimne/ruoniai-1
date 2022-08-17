const m = new Map();

// m.set('animal', 'Bebras');
// m.set('girl', 'Birutė');
// m.set({ labas: 'hello' }, { kaTu: 'nieko' });

m.set(5, { p: 'pienas', q: 5 });
m.set(18, { p: 'kefyras', q: 20 });
m.set(15, { p: 'sviestas', q: 3 });

if (m.has(18)) {
    m.set(18, { p: 'kefyras', q: m.get(18).q + 10 })
} else {
    m.set(18, { p: 'kefyras', q: 10 })
}

const ar = [...m];

ar.sort((a, b) => a[1].q - b[1].q);

const m2 = new Map(ar);

console.log(m2);

// console.log('pienas', m.has(5));
// console.log('kefyras', m.has(18));

console.log(m);


class Stikline {

    constructor(turis) {
        this.turis = turis;
        this.kiekis = 0;
    }

    ipilti(kiekis) {
        this.kiekis = Math.min(this.turis, this.kiekis + kiekis);
        return this;
    }


    ispilti() {
        const kiekis = this.kiekis;
        this.kiekis = 0;
        return kiekis;
    }

    stiklinejeYra() {
        console.log(`Stiklinėje ${this.turis}ml yra ${this.kiekis}ml skyčio`);
    }

}

const s1 = new Stikline(100);
const s2 = new Stikline(150);
const s3 = new Stikline(200);

s1.ipilti(s2.ipilti(s3.ipilti(1000).ispilti()).ispilti());

s1.stiklinejeYra();
s2.stiklinejeYra();
s3.stiklinejeYra();