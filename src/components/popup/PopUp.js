import { useState, useEffect } from "react";
import Cell from "../cell/Cell";
import "../cellrow/CellRow.css";
import "./PopUp.css";

const PopUp = ({closePopUp, rules, winner, loser}) => {
    const [heading, setHeading] = useState("");
    useEffect(() => {
        if(rules){
            setHeading("How to Play")
        }else if(winner){
            setHeading("You Won!")
        }else if(loser){
            setHeading("You Lose :(")
        }
    }, [rules, winner, loser])
    const instructions = 
        <div className="rules">
            <p>Guess the WORDLE in 6 tries.</p>
            <p>Each guess must be a valid five-letter word. Hit the enter button to submit.</p>
            <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
            <h5>Examples</h5>
            <div className="CellRow" ><Cell color="green" letter="W" /><Cell color="default" letter="E" /><Cell color="default" letter="A" /><Cell color="default" letter="R" /><Cell color="default" letter="Y" /></div>
            <p>The letter W is in the word and in the correct spot.</p>
            <div className="CellRow" ><Cell color="default" letter="P" /><Cell color="yellow" letter="I" /><Cell color="default" letter="L" /><Cell color="default" letter="L" /><Cell color="default" letter="S" /></div>
            <p>The letter I is in the word, but in the wrong spot</p>
            <div className="CellRow" ><Cell color="default" letter="V" /><Cell color="default" letter="A" /><Cell color="default" letter="G" /><Cell color="dark" letter="U" /><Cell color="default" letter="E" /></div>
            <p>The letter U is not in the word</p>
        </div>
    return(
        <div className="PopUp">
            <div className="header">
                <h3>{heading}</h3>
                <button onClick={closePopUp} className="close">X</button>
            </div>
            {rules ? instructions : null}
        </div>
    )
}

export default PopUp;