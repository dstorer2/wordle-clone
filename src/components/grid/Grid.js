import Row from "../row/Row";

const Grid = ({test, anotherTest}) => {
    
    const grid = [];
    
    for(let i = 0; i < 6; i++){
        grid.push(<Row />)
    }


    return(
        <div className="Grid">
            {grid}
        </div>
    )
}

export default Grid;