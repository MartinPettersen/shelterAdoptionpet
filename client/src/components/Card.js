import React, {useState} from 'react'

const Card = ({ backendData, setBackendData, deletePet }) => {
    const [pictureCounter, setPictureCounter] = useState(0);

    const toggleInfo = (id) => {
      console.log(id);
      setBackendData(backendData.map((pet) => pet.id === id ? { ...pet, shown: !pet.shown } : pet))
    }
  
    const nextPet = () => {
      // deletePet(backendData[pictureCounter].id);
      setPictureCounter(pictureCounter + 1);
    } 
    console.log(backendData[pictureCounter].url);
  return (
    <div className="card">
                
                <img className="img"  onClick={
                    () => toggleInfo(backendData[pictureCounter].id)} key={pictureCounter} src={backendData[pictureCounter].url} alt="adopt me plx" />
                <br />
                <span>
                    <button onClick={nextPet}>Next</button>
                </span>
                <div className={`info${backendData[pictureCounter].shown ? ' shown' : ''}`}>
                    
                <p>Name: {backendData[pictureCounter].name}</p>
                <p>Age: {backendData[pictureCounter].age}</p>
                <p>Animal: {backendData[pictureCounter].animal}</p>
                <p>Life Motto: {backendData[pictureCounter].motto}</p>
                <p>Contact: {backendData[pictureCounter].contact}</p>


                </div>
            </div>
  )
}

export default Card