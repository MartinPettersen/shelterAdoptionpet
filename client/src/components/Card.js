import React, {useState} from 'react'

const Card = ({ backendData, setBackendData, deletePet, nextPet, pictureCounter, setPictureCounter, toggleInfo }) => {
    
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