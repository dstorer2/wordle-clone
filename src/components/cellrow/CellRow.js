import Cell from "../cell/Cell";
import "./CellRow.css"

const CellRow = ({content}) => {
    const row = [];
    const color = "default";
    
    for(let i = 0; i < 5; i++){
        if(content[i] !== undefined){
            row.push(
                <Cell key={i} color={content[i].color} letter={content[i].letter}/>
            )
        }else{
            row.push(
                <Cell key={i} color={color} letter=""/>
            )
        }
    }
    return(
        <div className="CellRow">
            {row}
        </div>
    )
}

export default CellRow;