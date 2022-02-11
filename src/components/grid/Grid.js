import CellRow from "../cellrow/CellRow";
import "./Grid.css";

const Grid = ({guess, activeRow, previousGuesses}) => {
    
    const grid = [];
    
    for(let i = 0; i < 6; i++){
        if(i === activeRow){
            grid.push(
                <CellRow
                    key={i}
                    content={guess}
                />
            )
        }else if(i < previousGuesses.length){
            grid.push(
                <CellRow 
                    key={i}
                    content={previousGuesses[i]}
                />
            )
        }else{
            grid.push(
                <CellRow 
                    key={i}
                    content=""
                />
            )
        }
    }


    return(
        <div className="Grid">
            {grid}
        </div>
    )
}

export default Grid;