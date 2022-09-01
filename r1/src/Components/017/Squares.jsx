import { useEffect } from "react";
import { useState, useRef } from "react"

function Squares() {

    const number = useRef(0);
    const addButton = useRef();

    const [dogs, setDogs] = useState([]);

    const add = () => {
        setDogs(d => [...d, ++number.current]);
    }

    useEffect(() => {
        addButton.current.focus();
    }, []);

    return (
        <>
        <div className="dog-bin">
            {
                dogs.map((d, i) => <div className="dog" key={i}>{d}</div>)
            }
        </div>
        <button onClick={add} ref={addButton}>ADD</button>
        </>
    )

}

export default Squares;