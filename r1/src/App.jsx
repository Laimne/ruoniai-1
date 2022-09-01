import './App.scss';
import Checkbox from './Components/016/Checkbox';
import Select from './Components/016/Select';

function App() {

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-7">
                    <Select />
                    <Checkbox />
                </div>
            </div>
        </div>
    );
}

export default App;