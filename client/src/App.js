import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';


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
      <Header />
      <Main backendData={backendData}/>  
      <Footer />
    </div>
  );
}

export default App;
