import './App.css';
import Grid from './components/grid/Grid';
import {useState} from "react";
import Keyboard from "./components/keyboard/Keyboard"
import PopUp from './components/popup/PopUp';
const config = require("./config/index");
const axios = require("axios");


function App() {
  const [rules, setRules] = useState(true)
  const [winner, setWinner] = useState(false);
  const [loser, setLoser] = useState(false);
  const [guess, setGuess] = useState("");
  const [lettersGuessed, setLettersGuessed] = useState({});
  const [cellContent, setCellContent] = useState([])
  const [activeRow, setActiveRow] = useState(0);
  const [previousGuesses, setPreviousGuesses] = useState([]);
  const solution = "HIRED";

  const closePopUp = e => {
    e.preventDefault();
    setRules(false);
    setWinner(false);
    setLoser(false);
  }

  const handleKeyClick = e => {
    e.preventDefault();
    if(guess.length < 5){
      setGuess(guess+e.target.value.toUpperCase());
      setCellContent([
        ...cellContent,
        {
          letter: e.target.value.toUpperCase(),
          color: "default"
        }
      ])
    }else{
      return alert("Row full");
    }
  }

  const handleBackspace = e => {
    e.preventDefault();
    setGuess(guess.slice(0, guess.length - 1));
    setCellContent(cellContent.splice(0, cellContent.length -1))
  }

  const validateGuess = word => {
    let isValid = true;
    for(let i = 0; i < 3; i++){
      if(word[i] === word[i+1] && word[i] === word[i+2]){
        isValid = false;
      }
    }
    const invalidDoubles = "hjqvwxyiua"
    for(let j = 0; j < 4; j++){
      if(invalidDoubles.includes(word[j].toLowerCase()) && word[j] === word[j+1]){
        isValid = false;
      }
    }
    const invalidDuplicates = ["qw", "qe", "qr", "qt", "qy", "qi", "qo", "qp", "qa", "qd", "qf", "qg", "qh", "qj", "qk", "ql", "qz", "qx", "qc", "qv", "qb", "qn", "qm", "wq", "wt", "wp", "ws", "wd", "wf", "wg", "wj", "wk", "wl", "wz", "wx", "wc", "wv", "wb", "wn", "wm", "ej", "rq", "rw", "rj", "rz", "rx", "tq", "td", "tf", "tg", "tj", "tz", "tx", "tc", "tb", "tm"]
    for(let k = 0; k < 4; k++){
      const pair = word.slice(k, k+2).toLowerCase();
      if(invalidDuplicates.includes(pair.toLowerCase())){
        isValid = false;
      }
    }
    return isValid
  }

  const checkDictionary = async word => {
    let isValid;
    await axios.get(`${config.api}/api/${word}`)
      .then(res => res.data.valid ? isValid = true : isValid = false)
      .catch(err => console.log(err));
    return isValid;
  }

  const checkLetters = () => {
    for(let i = 0; i < guess.length; i++){
      let color = "dark";
      if(solution.includes(cellContent[i].letter)){
        color = "yellow"
      }
      if(cellContent[i].letter === solution[i]){
        color = "green"
      }
      setCellContent([
        ...cellContent,
        cellContent[i].color = color
      ])
    }
  }

  const updateLetters = letterObjArray => {
    letterObjArray.forEach(letter => {
      if(lettersGuessed[letter.letter] !== undefined && lettersGuessed[letter.letter] === "green"){
        setLettersGuessed((prevState) => (
          {
            ...prevState
          }
        ))
      }else{
        setLettersGuessed((prevState) => (
          {
            ...prevState,
            [letter.letter]: letter.color
          }
        ))
      }
    })
  }

  const checkForOutcomes = () => {
    let isWinner = true;
    cellContent.forEach(cell => {
      if(cell.color !== "green"){
        isWinner = false
      }
    })
    if(isWinner){
      return setWinner(true)
    }
    if(activeRow+1 === 6){
      return setLoser(true)
    }
  }

  const handleEnter = async e => {
    e.preventDefault();
    if(guess.length < 5){
      return alert("Not enough letters")
    }
    if (!validateGuess(guess)) {
      return alert("Invalid attempt");
    }
    const dictCheck = await checkDictionary(guess);
    if(!dictCheck){
      return alert("Invalid guess")
    }

    checkLetters();

    updateLetters(cellContent);

    checkForOutcomes();


    setPreviousGuesses([
      ...previousGuesses,
      cellContent
    ]);
    setActiveRow(activeRow+1);
    setGuess("");
    setCellContent([]);
  }

  return (
    <div className="App">
      {rules || winner || loser ? <PopUp closePopUp={closePopUp} rules={rules} winner={winner} loser={loser}/> : null}
      <h1 className='title'>Wordle Clone</h1>
      <Grid 
        cellContent={cellContent} 
        activeRow={activeRow} 
        previousGuesses={previousGuesses}
      />
      <Keyboard 
        lettersGuessed={lettersGuessed}
        handleClick={handleKeyClick} 
        handleBackspace={handleBackspace}
        handleEnter={handleEnter}
      />
    </div>
  );
}

export default App;
