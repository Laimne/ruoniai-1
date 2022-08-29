import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';

function App() {


    const [count, setCount] = useState(1);

    const [read, setRead] = useState(null)

    const save = () => {
        localStorage.setItem('number', count);
        const jobj = JSON.stringify({cat: 'big'});
        localStorage.setItem('obj', jobj);
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


    return (
        <div className="App">
            <header className="App-header">
                <h1>Pirmadienis Nr: {count}</h1>
                <h1>Nuskaityta Nr: {read}</h1>
                <button onClick={() => setCount(c => c + 1)}>+1</button>
                <button onClick={save}>Save</button>
                <button onClick={readNumber}>Read</button>
            </header>
        </div>
    );
}

export default App;