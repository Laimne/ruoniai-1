import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import rand from './Functions/rand';

function App() {

    const [animals, setAnimals] = useState(null);

    useEffect(() => {
        if (animals === null) {
            const a = localStorage.getItem('cowsAndSheeps');
            if (null === a) {
                setAnimals([]);
            } else {
                setAnimals(JSON.parse(a));
            }
        } else {
            localStorage.setItem('cowsAndSheeps', JSON.stringify(animals));
        }


    }, [animals]);

    const start = () => {
        // setAnimals(a => [...a ?? [], ...[...Array(rand(5, 20))].map(() => ({
        //     type: rand(0, 1) ? 'cow' : 'sheep',
        //     number: (''+ rand(0, 999999)).padStart(7, 0)
        // })).map(a => ({...a,
        //      number: a.type === 'cow' ? 'K' + a.number : 'A' + a.number,
        //      side: a.type === 'cow' ? 'left' : 'right'
        //     }))]);

        
        const count = rand(5, 20);
        const newAnimals = [];
        for (let i = 0; i < count; i++) {
            const type = rand(0, 1) ? 'cow' : 'sheep';
            let number = (''+ rand(0, 999999)).padStart(7, 0);
            number = type === 'cow' ? 'K' + number : 'A' + number;
            const side = type === 'cow' ? 'left' : 'right';
            const an = {type, number, side: side};
            newAnimals.push(an);
        }
        setAnimals(a => [...a, ...newAnimals]);
    }

    const run = number => {
        setAnimals(s => 
            s.map(a => a.number !== number ? {...a} : {...a, side: a.side === 'left' ? 'right' : 'left'})
            .sort((a, b) => {
                if (a.number === number) {
                    return 1;
                }
                if (b.number === number) {
                    return -1;
                }
                return 0;
            }
        ))
    }


    return (
        <div className="App">
            <header className="App-header">
               
                <div className="field">
                    <h1><span>GANYKLA</span>
                        <button onClick={start}>Į Ganyklą</button>
                    </h1>
                    <div className="left">
                        {
                            animals?.map(a => a.side === 'left' ? <div onClick={() => run(a.number)} key={a.number} className={a.type}>{a.number}</div> : null)
                        }
                    </div>
                    <div className="right">
                    {
                            animals?.map(a => a.side === 'right' ? <div onClick={() => run(a.number)} key={a.number} className={a.type}>{a.number}</div> : null)
                        }
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;