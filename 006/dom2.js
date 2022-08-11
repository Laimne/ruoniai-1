const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const text = 'Labas';
const html = `
<i>
<span>
    Irgi labas
</span>
</i>
 `;

// h1.innerText = text;
// h1.innerHTML = html;

const i = document.createElement('i');
const span = document.createElement('span');
i.appendChild(span);
const labas = document.createTextNode('Irgi labas');
span.appendChild(labas);
h1.appendChild(i);

h2.appendChild(span);

h1.appendChild(span);

console.log(i);