import "./Key.css";
import {useState, useEffect} from "react";

const Key = ({content, handleClick, color}) => {
    const [display, setDisplay] = useState(color)

    useEffect(() => {
        setDisplay(color);
    }, [color])

    return(
        <button className={`Key ${display}`} value={content} onClick={handleClick}>{content.toUpperCase()}</button>
    )
}

export default Key;