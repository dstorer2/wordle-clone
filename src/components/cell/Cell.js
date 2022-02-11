import "./Cell.css";
import {useState} from 'react';

const Cell = ({color, letter}) => {
    const [content, setContent] = useState(letter);

    return(
        <div className={`Cell ${color}`}>
            <h1>{letter}</h1>
        </div>
    )
}

export default Cell;