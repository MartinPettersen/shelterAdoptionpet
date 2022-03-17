import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';


function App() {

  const [backendData, setBackendData] = useState([{}]);
  const [counter, setCounter] = useState(0);

  useEffect(async() => {
    setCounter(counter + 1);
    console.log(counter);
  }, [backendData]);

  useEffect(async() => {
    console.log('test');
    await fetch("/api/animals").then(
      response => response.json()
    ).then(
      data => {
        //console.log(data);
        setBackendData([...data]);
        //setBackendData([...backendData, ...data]);
        //console.log(backendData);
        
        //console.log(data);
        //console.log(data[0].name);
      }
    );
    //console.log(backendData);
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
