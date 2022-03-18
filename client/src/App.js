import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';


function App() {

  const [backendData, setBackendData] = useState([{
    id: 0,
    animal: 'Perfect',
    url: `https://images.unsplash.com/photo-1491833485966-73cfb9ccea53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTA3NzR8MHwxfHNlYXJjaHw0fHxjYXQlN0R8ZW58MHwxfHx8MTY0NzUxOTMxMg&ixlib=rb-1.2.1&q=80&w=1080`,
    motto: 'Change lives by Adopting',
    shown: false,
    age: 0,
    name: 'Your Future Friend'
}]);
  const [counter, setCounter] = useState(0);
  const [animalCounter, setAnimalCounter] = useState(0);

  const deletePet = (petId) => {
    setBackendData(backendData.filter((pet) => {
      return pet.id != petId;
    }))
  }

  useEffect(async() => {
    setCounter(counter + 1);
    console.log(counter);
  }, [backendData]);

  useEffect(async() => {
    const animalList = ['cat', 'dog', 'bunny', 'duck', 'puppy', 'kitten'];

    if (animalCounter < animalList.length){
      await fetch("/api/animals/"+animalList[animalCounter]).then(
        response => response.json()
      ).then(
        data => {
          console.log(data);
          setBackendData([...backendData, ...data]);
          setAnimalCounter(animalCounter + 1);
        }
      );
    }
  }, [animalCounter]);

  useEffect(async() => {
    await fetch("/api/animals/cat").then(
      response => response.json()
    ).then(
      data => {
        setBackendData([...backendData,...data]);
        setAnimalCounter(animalCounter + 1);
      }
    );
  }, []); 

  return (
    <div className="App">
      <Header />
      <Main backendData={backendData} setBackendData={setBackendData} deletePet={deletePet}/>  
      <Footer />

    </div>
  );
}

export default App;
