import './App.css';
import Grid from './components/grid/Grid';
import {useState} from "react";
import Keyboard from "./components/keyboard/Keyboard"
const axios = require("axios");

function App() {
  const [guess, setGuess] = useState("");
  const [activeRow, setActiveRow] = useState(0);
  const [previousGuesses, setPreviousGuesses] = useState([]);
  const solution = "pizza"

  const handleKeyClick = e => {
    e.preventDefault();
    if(guess.length < 5){
      setGuess(guess+e.target.value.toUpperCase());
    }else{
      return alert("Row full");
    }
  }

  const handleBackspace = e => {
    e.preventDefault();
    setGuess(guess.slice(0, guess.length - 1));
  }

  const validateGuess = word => {
    let isValid = true;
    for(let i = 0; i < 3; i++){
      if(word[i] == word[i+1] && word[i] === word[i+2]){
        isValid = false;
      }
    }
    if(isValid){
      console.log("passed the first check")
    }
    const invalidDoubles = "hjqvwxyiua"
    for(let j = 0; j < 4; j++){
      if(invalidDoubles.includes(word[j].toLowerCase()) && word[j] == word[j+1]){
        isValid = false;
      }
    }
    if(isValid){
      console.log("passed the second check")
    }
    const invalidDuplicates = ["qw", "qe", "qr", "qt", "qy", "qi", "qo", "qp", "qa", "qd", "qf", "qg", "qh", "qj", "qk", "ql", "qz", "qx", "qc", "qv", "qb", "qn", "qm", "wq", "wt", "wp", "ws", "wd", "wf", "wg", "wj", "wk", "wl", "wz", "wx", "wc", "wv", "wb", "wn", "wm", "ej", "rq", "rw", "rj", "rz", "rx", "tq", "td", "tf", "tg", "tj", "tz", "tx", "tc", "tb", "tm"]
    for(let k = 0; k < 4; k++){
      const pair = word.slice(k, k+2).toLowerCase();
      console.log("pair", pair)
      if(invalidDuplicates.includes(pair.toLowerCase())){
        isValid = false;
      }
    }
    return isValid
  }

  const checkDictionary = async word => {
    let isValid = false;
    await axios.get(`http://localhost:1234/api/${word}`)
      .then(res => res.data.valid ? isValid = true : null)
      .catch(err => console.log(err));
    return isValid;
  }

  const handleEnter = async e => {
    e.preventDefault();
    if(!validateGuess(guess) || !checkDictionary(guess)){
      return alert("Invalid attempt")
    }

    

    return alert("It passed!")
  }

  return (
    <div className="App">
      <h1>Wordle</h1>
      <Grid 
        guess={guess} 
        activeRow={activeRow} 
        previousGuesses={previousGuesses}
      />
      <Keyboard 
        handleClick={handleKeyClick} 
        handleBackspace={handleBackspace}
        handleEnter={handleEnter}
      />
    </div>
  );
}

export default App;
