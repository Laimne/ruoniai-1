import './App.css';
// import Black from './Components/009/Black';
// import White from './Components/009/White';
// import rand from './Functions/rand';
// import Bebras from './Components/009/Bebras';

const cats = [
  { name: 'Pilkis', color: 'gray' },
  { name: 'Ufo', color: 'yellow' },
  { name: 'Pūkis', color: 'white' },
  { name: 'Būlkius', color: 'skyblue' },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Bebras></Bebras> */}
        {/* <h1>Labas</h1> */}
        {/* <Bebras></Bebras> */}
        {/* {
          rand(0, 1) ? <Black/> : <White/>
        } */}
        {/* <div className="cat" style={{ backgroundColor: cats[0].color }}>
          <span>{cats[0].name}</span>
        </div>
        <div className="cat" style={{ backgroundColor: cats[1].color }}>
          <span>{cats[1].name}</span>
        </div>
        <div className="cat" style={{ backgroundColor: cats[2].color }}>
          <span>{cats[2].name}</span>
        </div> */}
        {
          cats.map((cat, i) =>  <div key={i} className="cat App-logo" style={{ backgroundColor: cat.color }}>
                                  <span className="App-logo2">{cat.name}</span>
                                </div>)
        }

      </header>
    </div>
  );
}

export default App;