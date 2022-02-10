import Cell from "../cell/Cell";
import "./CellRow.css"

const CellRow = ({content}) => {
    const row = [];
    const color = "default";
    
    for(let i = 0; i < 5; i++){
        if(content[i] !== -1){
            row.push(
                <Cell key={i} color={color} letter={content[i]}/>
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