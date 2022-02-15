const PopUp = ({closePopUp, rules}) => {
    return(
        <div className="PopUp">
            PopUp window
            <button onClick={closePopUp} >X</button>
        </div>
    )
}

export default PopUp;