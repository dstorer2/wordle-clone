import KeyRow from "../keyrow/KeyRow";

const Keyboard = ({handleClick, handleBackspace, handleEnter}) => {
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
                handleEnter={handleEnter}
            />
        </div>
    )
}

export default Keyboard;