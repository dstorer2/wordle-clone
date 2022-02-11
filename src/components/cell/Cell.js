import { useEffect, useState } from "react";
import "./Cell.css";

const Cell = ({color, letter}) => {
    const [display, setDisplay] = useState(color)
    useEffect(() => {
        setDisplay(color);
    }, [color])

    return(
        <div className={`Cell ${display}`}>
            <h1>{letter}</h1>
        </div>
    )
}

export default Cell;