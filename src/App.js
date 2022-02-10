import './App.css';
import Grid from './components/grid/Grid';

function App() {
  const test = "hi"
  const anotherTest = "hello again"
  return (
    <div className="App">
      <h1>Hi</h1>
      <Grid test={test} anotherTest={anotherTest}/>
    </div>
  );
}

export default App;
