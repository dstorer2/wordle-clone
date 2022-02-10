import "./Key.css";

const Key = ({letter, handleClick}) => {
    return(
        <button className="Key" value={letter} onClick={handleClick}>{letter.toUpperCase()}</button>
    )
}

export default Key;