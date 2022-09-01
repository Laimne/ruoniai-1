import './App.scss';
import Text from './Components/017/Text';
import { useState } from "react";
import Show from './Components/017/Show';

function App() {

    const [showText, setShowText] = useState('');

    return (
        <div className="App">
            <header className="App-header">
                <h1>State Uplifting</h1>
                <Text setShowText={setShowText} />
                <Show showText={showText} />
            </header>
        </div>
    );
}

export default App;