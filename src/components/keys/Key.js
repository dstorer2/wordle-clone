import "./Key.css";
import {useState, useEffect} from "react";

const Key = ({content, handleClick, color}) => {
    const [display, setDisplay] = useState(`Key ${color}`)

    useEffect(() => {
        if(content !== "BKSP" && content !== "Enter"){
            setDisplay(`Key ${color}`);
        }else{
            setDisplay("BigButton")
        }
    }, [color, content])

    

    return(
        <button className={display} value={content} onClick={handleClick}>{content.toUpperCase()}</button>
    )
}

export default Key;