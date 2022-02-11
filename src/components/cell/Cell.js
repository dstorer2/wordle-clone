import { useEffect, useState } from "react";
import "./Cell.css";
// import {useState} from 'react';

const Cell = ({color, letter}) => {
    // const [content, setContent] = useState(letter);
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