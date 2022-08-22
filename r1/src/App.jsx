import './App.css';
import Square from './Components/010/Square';

const squares = [
    {color: 'black', name:'Valio', size: 88, show: true},
    {color: 'white', name:'Hello', size: 144, show: true},
    {color: 'crimson', name:'Geras', size: 201, show: true},
    {color: 'skyblue', name:'Neblogas', size: 333, show: true},
];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Props</h1>
            
      </header>
    </div>
  );
}

export default App;