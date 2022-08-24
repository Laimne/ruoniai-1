import { useState } from "react";
import randColor from '../../Functions/randColor';
import rand from '../../Functions/rand';

function Dog() {

    const [size, setSize] = useState(30);
    const [text, setText] = useState('small');
    const [color2, setColor2] = useState(randColor());
    const [sq, setSq] = useState([]);

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
        setSq(s => [...s, {color: randColor(), number: rand(100, 999)}]);
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
                sq.map((c, i) => <div style={{backgroundColor: c.color}} className="dog sq" key={i}>{c.number}</div>)
            }
        </div>
        <button onClick={add}>[]</button>
        </>
    );


}

export default Dog;