//import logo from './logo.svg';
import './App.css';
import MultiButton from './cgu_multiButton'
import HelloCGU from './cgu_hello'

/*const styleArgument = { fontSize: '100px', color: 'red'};*/


function App(){
  return(
    <div className="App">
      <div>
        {HelloCGU()}
      </div>
      <div>
      {MultiButton(10)}
      </div>
    </div>
  
  /*return(
    <div className="App">
      <h1 style = {styleArgument} onClick = {changeText}> hello CGU!! </h1>
    </div>*/
  
  /*return (
    <div className="App">
      <head
function App() {
  rer className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
