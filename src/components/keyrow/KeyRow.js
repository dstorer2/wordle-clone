import Key from "../keys/Key";
import "./KeyRow.css";

const KeyRow = ({letters, bottomRow, handleClick, handleBackspace, handleEnter}) => {
    const keys = [];
    if(bottomRow){
        keys.push(<Key key="enter" content="Enter" handleClick={handleEnter}/>)
    }
    for(let i = 0; i < letters.length; i++){
        keys.push(
            <Key key={letters[i]} content={letters[i]} handleClick={handleClick}/>
        )
    }
    if(bottomRow){
        keys.push(
            <Key key="backspace" content="BKSP" handleClick={handleBackspace}/>
            // <button className="BigButton" onClick={handleBackspace}>BKSP</button>
        )
    }
    return(
        <div className="KeyRow">
            {keys}
        </div>
    )
}

export default KeyRow;