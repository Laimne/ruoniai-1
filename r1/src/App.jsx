import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';

function App() {




    const [count, setCount] = useState(1);

    const [read, setRead] = useState(null);

    const [text1, setText1] = useState('');

    const [color, setColor] = useState('#57ac30');

    const [bg, setBg] = useState('#57ac30');



    const save = () => {
        localStorage.setItem('number', count);
        const jobj = JSON.stringify({cat: 'big'});
        localStorage.setItem('obj', jobj);
        localStorage.setItem('text', text1);
        
    }

    const readNumber = () => {
        setRead(localStorage.getItem('number'));
        const obj = JSON.parse(localStorage.getItem('obj'));
        console.log(obj.cat);
    }

    useEffect(() => {
        setRead(localStorage.getItem('number'));
        const obj = JSON.parse(localStorage.getItem('obj'));
        if (null === obj) {
            console.log('Cat gone');
        } else {
            console.log(obj.cat);
        }
        
    }, []);

    // useEffect(() => {
    //     localStorage.setItem('text', text1);
    // }, [text1]);
    

    const changeText1 = e => {
        // console.log('bandau keist', e.target.value);
        setText1(e.target.value);
    }



    return (
        <div className="App">
            <header className="App-header" style={{backgroundColor: bg}}>
                <h1 contenteditable="true">Pirmadienis Nr: {count} Nuskaityta Nr: {read}</h1>
                <div className="dog-bin">
                <button onClick={() => setCount(c => c + 1)}>+1</button>
                <button onClick={save}>Save</button>
                <button onClick={readNumber}>Read</button>
                <button onClick={() => setBg(color)}>Do BG</button>
                </div>

                <input type="text" value={text1} onChange={changeText1}></input>

                <input type="color" value={color} onChange={e => setColor(e.target.value)}></input>

            </header>
        </div>
    );
}

export default App;