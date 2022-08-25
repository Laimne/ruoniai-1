import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import Books from './Components/013/Books';
import axios from 'axios';

function App() {

    const [books, setBooks] = useState(null);

    // fetch('https://in3.dev/knygos/')
    // .then((response) => response.json())
    // .then((data) => setBooks(data))
    // .catch(_ => setBooks('ERROR'));

    useEffect(() => {
        axios.get('https://in3.dev/knygos/')
        .then(res => setBooks(res.data))
        .catch(_ => setBooks('ERROR'))
    }, []);
   

  return (
    <div className="App">
      <header className="App-header">
        <Books books={books} />
      </header>
    </div>
  );
}

export default App;