import './App.css';
import Grid from './components/grid/Grid';
import {useState} from "react";
import Keyboard from "./components/keyboard/Keyboard"

function App() {
  const [guess, setGuess] = useState("");
  const [activeRow, setActiveRow] = useState(0);
  const [previousGuesses, setPreviousGuesses] = useState([])

  const handleKeyClick = e => {
    e.preventDefault();
    if(guess.length < 5){
      setGuess(guess+e.target.value.toUpperCase())
    }else{
      return alert("Row full")
    }
  }

  const handleBackspace = e => {
    e.preventDefault();
    setGuess(guess.slice(0, guess.length - 1))
  }

  return (
    <div className="App">
      <h1>Wordle</h1>
      <Grid guess={guess} activeRow={activeRow} previousGuesses={previousGuesses}/>
      <Keyboard handleClick={handleKeyClick} handleBackspace={handleBackspace}/>
    </div>
  );
}

export default App;
