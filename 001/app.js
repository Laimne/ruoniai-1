console.log('Taip tikrai as esu');


console.log([...Array(11)].map(_ => '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, 0)));