import React, {useState} from 'react'
import Card from './Card';



const Main = ({ backendData, setBackendData, deletePet }) => {
 

  return (
    <main className="main">
      {(typeof backendData === 'undefined') ? (
            <p>Find your friend today</p>
        ): (
            <Card backendData={backendData} setBackendData={setBackendData} deletePet={deletePet}/>
        )
        }

  </main>
    )
}

export default Main