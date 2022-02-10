import Cell from "../cell/Cell";
import "./Row.css"

const Row = props => {
    const row = [];
    const color = "default"
    const letter = "";
    
    for(let i = 0; i < 5; i++){
        row.push(
            <Cell key={i} color={color} letter={letter}/>
        )
    }
    return(
        <div className="Row">
            {row}
        </div>
    )
}

export default Row;