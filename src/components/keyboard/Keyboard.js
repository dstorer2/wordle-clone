import KeyRow from "../keyrow/KeyRow";

const Keyboard = props => {
    return(
        <div className="Keyboard">
            <KeyRow 
                letters = "qwertyuiop"
            />
            <KeyRow 
                letters = "asdfghjkl"
            />
            <KeyRow 
                letters = "zxcvbnm"
            />
        </div>
    )
}

export default Keyboard;