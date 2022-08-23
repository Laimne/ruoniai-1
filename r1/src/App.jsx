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
      </header>
    </div>
  );
}

export default App;