import { useContext } from "react";
import StarContext from "./StarContext";

function Anukelis() {

   const {star, plus, setPlus} = useContext(StarContext);

    return (
        <div className="red-square">
            <h2>{star}{plus}</h2>
            <button onClick={() => setPlus(s => s + '+')}>Make Plus</button>
        </div>
    )
}

export default Anukelis;