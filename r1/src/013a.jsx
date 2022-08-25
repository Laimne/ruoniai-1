import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';

function App() {

   

    const [count, setCount] = useState(null);

    const [bo, setBo] = useState(true);

    useEffect(() => {
        console.log('IM READY');
    }, []);

    useEffect(() => {
        if (count === null) {
            setCount(3);
        }
        console.log('COUNT CHANGE');
    }, [count]);

    useEffect(() => {
        // console.log('changed');
        console.log('PASPAUSTAS');
    }, [bo]);


    const mult5 = () => {
        setCount(c => c * 5);
    }

    const reset3 = () => {
        setCount(3);
    }

    const cha = () => {
        // console.log('pressed')
        setBo(b => !b);
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{color: bo ? 'crimson' : 'skyblue'}}>COUNT: {count ?? 'NERA'}</h1>
        <button onClick={mult5}>M1</button>
        <button onClick={reset3}>M2</button>
        <button onClick={cha}>CHA</button>
      </header>
    </div>
  );
}

export default App;