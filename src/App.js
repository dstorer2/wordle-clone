import './App.css';
import Grid from './components/grid/Grid';
import {useState} from "react";
import Keyboard from "./components/keyboard/Keyboard"

function App() {
  const [guess, setGuess] = useState("");

  return (
    <div className="App">
      <h1>Wordle</h1>
      <Grid guess={guess}/>
      <Keyboard />
    </div>
  );
}

export default App;
