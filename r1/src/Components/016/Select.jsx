import { useState } from "react";

function Select() {

    const [select, setSelect] = useState(2);

    return (
        <div className="card m-5">
            <div className="card-body">
                <h5 className="card-title">SELECT</h5>
                <select value={select} onChange={e => setSelect(e.target.value)} className="form-control">
                    <option value="1">Krokodilai</option>
                    <option value="2">Begemotai</option>
                    <option value="3">Bebrai</option>
                    <option value="4">Kiti Bebrai</option>
                    <option value="5">Raganosiai</option>
                </select>
            </div>
        </div>
    );
}

export default Select;