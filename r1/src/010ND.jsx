import './App.scss';

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Props</h1>
        <div className="dog-bin">
            {
                dogs.map((d, i) => <div key={i} className={'dog ' + (i % 2 ? 'sq' : 'cc')} >{d}</div>)
            }
        </div>
        <div className="dog-bin">
            {
                dogs.map((d, i) => (d[0] === d[0].toLocaleLowerCase()) ? <div key={i} className="dog sq">{d}</div> : null)
            }
        </div>
        <div className="dog-bin">
            {
                dogs.map((d, i) => <div style={{color: d.length > 6 ? 'greenyellow' : 'crimson'}} key={i} className="dog sq">{d.length}</div>)
            }
        </div>
      </header>
    </div>
  );
}

export default App;