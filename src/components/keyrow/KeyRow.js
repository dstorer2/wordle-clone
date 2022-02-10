import Key from "../keys/Key";
import "./KeyRow.css";

const KeyRow = ({letters, bottomRow, handleClick, handleBackspace}) => {
    const keys = [];
    if(!bottomRow){
        for(let i = 0; i < letters.length; i++){
            keys.push(
                <Key key={i} letter={letters[i]} handleClick={handleClick}/>
            )
        }
    }else{
        keys.push(<button className="BigButton">Enter</button>)
        for(let i = 0; i < letters.length; i++){
            keys.push(
                <Key key={i} letter={letters[i]} handleClick={handleClick} />
            )
        }
        keys.push(<button className="BigButton" onClick={handleBackspace}>BKSP</button>)
    }
    return(
        <div className="KeyRow">
            {keys}
        </div>
    )
}

export default KeyRow;