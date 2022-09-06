import { useReducer } from 'react';
import { useState } from 'react';
import './App.scss';
import StarContext from './Components/019/StarContext';
import countReducer from './Reducers/countReducer';
// import Tevelis from './Components/019/Tevelis';

function App() {

    const [star, setStar] = useState('');
    const [plus, setPlus] = useState('');

    const [count, countDispach] = useReducer(countReducer, 10);


    const add1 = () => {
        const action = {
            type: 'add_one'
        }
        countDispach(action);
    }

    const rem1 = () => {
        const action = {
            type: 'remove_one'
        }
        countDispach(action);
    }

    return (
        <div className="App">
            <StarContext.Provider value={
                {
                    star: star,
                    plus: plus,
                    setPlus,
                    setStar
                }
            }>
            <header className="App-header">
                <h1>CONTEX + REDUCER {count}</h1>
                <div className="red-square">
                {/* <button onClick={() => setStar(s => s + '*')}>Make Star</button>
                <button onClick={() => setPlus(s => s + '+')}>Make Plus</button>
                <Tevelis/> */}
                <button onClick={add1}>+1</button>
                <button onClick={rem1}>-1</button>
                </div>
            </header>
            </StarContext.Provider>
        </div>
    );
}

export default App;