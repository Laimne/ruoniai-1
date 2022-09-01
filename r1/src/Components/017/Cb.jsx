import { useState } from "react";
function Cb({setColor}) {

    const [cb, setCb] = useState(false);

    return (
        <div className="box">
            <input type="checkbox" checked={cb} onChange={() => setCb(cxx => !cxx)}></input>
            <button onClick={() => setColor(cb)}>Do Color</button>
        </div>
    );
}
export default Cb;