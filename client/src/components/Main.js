import React, {useState} from 'react'
import Card from './Card';



const Main = ({ backendData, setBackendData, deletePet, nextPet, pictureCounter, setPictureCounter, toggleInfo }) => {
 

  return (
    <main className="main">
      {(typeof backendData === 'undefined') ? (
            <p>Find your friend today</p>
        ): (
            <Card backendData={backendData} setBackendData={setBackendData} deletePet={deletePet} nextPet={nextPet} pictureCounter={pictureCounter} setPictureCounter={setPictureCounter} toggleInfo={toggleInfo}/>
        )
        }

  </main>
    )
}

export default Main