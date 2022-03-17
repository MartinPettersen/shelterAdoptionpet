import React from 'react'

const Main = ({ backendData }) => {
  const [pictureCounter, setPictureCounter] = useState(0);

  return (
    <main className="main">
      {(typeof backendData === 'undefined') ? (
            <p>Find your friend today</p>
        ): (
        
        backendData.map((test, i) => (
        <img className="img" key={i} src={test.url} alt="adopt me plx" />
        )))
        }

  </main>
    )
}

export default Main