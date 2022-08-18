import './App.css';
import Black from './Components/009/Black';
import White from './Components/009/White';
import rand from './Functions/rand';
// import Bebras from './Components/009/Bebras';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Bebras></Bebras> */}
        <h1>Labas</h1>
        {/* <Bebras></Bebras> */}
        {
          rand(0, 1) ? <Black/> : <White/>
        }
      </header>
    </div>
  );
}

export default App;