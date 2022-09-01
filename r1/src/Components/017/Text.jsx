import { useState } from "react";

function Text({setShowText}) {


    const [text, setText] = useState('');
    

    return (
        <div className="box">
            <input type="text" value={text} onChange={e => setText(e.target.value)}></input>
            <button onClick={() => setShowText(text)}>Show Text</button>
        </div>
    );
}
export default Text;