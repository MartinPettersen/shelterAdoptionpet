import React from 'react'

const Main = ( {backendData }) => {
  return (
    <main className="main">
        {(typeof backendData.test === 'undefined') ? (
            <p>Find your friend today</p>
        ): (
        backendData.test.map((test, i) => (
        <img className="img" key={i} src={test.urls.regular} alt="adopt me plx" />
        )))}
  </main>
    )
}

export default Main