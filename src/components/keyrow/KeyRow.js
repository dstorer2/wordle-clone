import Key from "../keys/Key";
import "./KeyRow.css";
const KeyRow = ({letters}) => {
    const keys = [];
    for(let i = 0; i < letters.length; i++){
        keys.push(
            <Key key={i} letter={letters[i]} />
        )
    }
    return(
        <div className="KeyRow">
            {keys}
        </div>
    )
}

export default KeyRow;