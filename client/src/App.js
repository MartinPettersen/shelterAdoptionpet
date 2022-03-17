import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}]);


  useEffect(() => {
    console.log('test');
    fetch("/api/animals").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
        console.log(data);

      }
    );
    // console.log(backendData);
  }, []); 
  // .urls.regular
  // <p key={i}>{test}</p>
  // <img key={i} src={test} alt="adopt me plx" />
  // 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {(typeof backendData.test === 'undefined') ? (
          <p>Find your friend today</p>
        ): (
          backendData.test.map((test, i) => (
            <img key={i} src={test.urls.regular} alt="adopt me plx" />
        )))}
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

export default App;
