import Row from "../row/Row";
import "./Grid.css";

const Grid = ({guess}) => {
    
    const grid = [];
    
    for(let i = 0; i < 6; i++){
        grid.push(<Row key={i}/>)
    }


    return(
        <div className="Grid">
            {grid}
        </div>
    )
}

export default Grid;