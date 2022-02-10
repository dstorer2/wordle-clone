import KeyRow from "../keyrow/KeyRow";

const Keyboard = ({handleClick, handleBackspace}) => {
    return(
        <div className="Keyboard">
            <KeyRow 
                key={0}
                letters = "qwertyuiop"
                bottomRow={false}
                handleClick={handleClick}
            />
            <KeyRow 
                key={1}
                letters = "asdfghjkl"
                bottomRow={false}
                handleClick={handleClick}
            />
            <KeyRow 
                key={2}
                letters = "zxcvbnm"
                bottomRow={true}
                handleClick={handleClick}
                handleBackspace={handleBackspace}
            />
        </div>
    )
}

export default Keyboard;