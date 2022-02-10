import Cell from "../cell/Cell";

const Row = props => {
    const row = [];
    for(let i = 0; i < 5; i++){
        row.push(
            <Cell />
        )
    }
    return(
        <div>
            {row}
        </div>
    )
}

export default Row;