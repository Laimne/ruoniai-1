import { useContext } from "react";
import Anukelis from "./Anukelis";
import StarContext from "./StarContext";

function Tevelis() {

const {setStar} = useContext(StarContext);

    return (
        <div className="red-square">
            <Anukelis />
            <button onClick={() => setStar(s => s + '*')}>Make Star</button>
        </div>
    )
}

export default Tevelis;