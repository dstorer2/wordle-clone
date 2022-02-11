import "./Key.css";

const Key = ({content, handleClick}) => {
    return(
        <button className="Key" value={content} onClick={handleClick}>{content.toUpperCase()}</button>
    )
}

export default Key;