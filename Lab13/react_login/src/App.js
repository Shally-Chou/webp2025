import React from 'react';
import CGU_Login from './cgu_login'; // 如果放在同一層資料夾就這樣寫

function App() {
  return (
    <div className="App">
      {CGU_Login() }
    </div>
  );
}

export default App;

  
  /*return(
    <div className="App">
      <h1 style = {styleArgument} onClick = {changeText}> hello CGU!! </h1>
    </div>

    <div>
        {HelloCGU()}
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
    </div>
  );
}

export default App;*/
