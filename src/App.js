//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Parent from './Components/Parent';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
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
}*/

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <header className="App-header">
        <div className="text">
        <p>
          KATALOG LAPTOP
        </p>
        </div>
        </header>
        <Parent />
      </div>
    )
  }
}

export default App;
