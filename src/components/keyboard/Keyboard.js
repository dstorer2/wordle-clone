import KeyRow from "../keyrow/KeyRow";

const Keyboard = ({handleClick, handleBackspace, handleEnter, lettersGuessed}) => {


    return(
        <div className="Keyboard">
            <KeyRow 
                lettersGuessed={lettersGuessed}
                key={0}
                letters = "qwertyuiop"
                bottomRow={false}
                handleClick={handleClick}
            />
            <KeyRow 
                lettersGuessed={lettersGuessed}
                key={1}
                letters = "asdfghjkl"
                bottomRow={false}
                handleClick={handleClick}
            />
            <KeyRow 
                lettersGuessed={lettersGuessed}
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