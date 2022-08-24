import { useState } from "react";
import randColor from '../../Functions/randColor';
import rand from '../../Functions/rand';

function Dog() {

    const [size, setSize] = useState(30);
    const [text, setText] = useState('small');
    const [color2, setColor2] = useState(randColor());
    const [sq, setSq] = useState([]);

    // let row = 0;

    const doIt = () => {
        // setSize(90);
        // setText('BIG');

        //EDITAI
        setSize(s => s === 30 ? 40 : 30);
        setText(t => t === 'small' ? 'BIG' : 'small');

        //INSERTAI
        setColor2(randColor());
    };

    const add = () => {
        setSq(s => [...s, {
            color: randColor(),
            number: rand(100, 999),
            row: s.length,
            show: true
        }]);
    }

    const doSort = () => {
        setSq(s => [...s].sort((a, b) => a.number - b.number));
    }

    const doSortReverse = () => {
        setSq(s => [...s].sort((a, b) => b.number - a.number));
    }

    const doSortDefault = () => {
        setSq(s => [...s].sort((a, b) => a.row - b.row));
    }

    const doFilterMore500 = () => {
        setSq(s => s.map(sq => sq.number > 500 ? {...sq, show: true} : {...sq, show: false}))
    }

    const showAll = () => {
        setSq(s => s.map(sq => ({...sq, show: true})))
    }

    return (
        <>
        <h2 style={{
            color: color2,
            fontSize: size + 'px'
        }}>Im {text} dog</h2>
        <button onClick={doIt}>Press this button, please</button>
        <div className="dog-bin">
            {
                sq.map((c, i) => c.show ? <div style={{backgroundColor: c.color}} className="dog sq" key={i}>{c.number}</div> : null)
            }
        </div>
        <button onClick={add}>[]</button>
        <button onClick={doSort}>sort AZ</button>
        <button onClick={doSortReverse}>sort ZA</button>
        <button onClick={doSortDefault}>sort Default</button>
        <button onClick={doFilterMore500}>show more 500</button>
        <button onClick={showAll}>show all</button>
        </>
    );


}

export default Dog;