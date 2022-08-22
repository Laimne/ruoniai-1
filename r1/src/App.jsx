import './App.css';
import Square from './Components/010/Square';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Props</h1>
        <Square color="black" name="Pirmadienis" size={200}></Square>
        <Square color="crimson" name="Valio!" size={333}></Square>
      </header>
    </div>
  );
}

export default App;