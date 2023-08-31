import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/characters')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
  }, [])
  console.log(characters)
  return (
    <main style={{
     width: '100%',
     minHeight:'100vh',
     display: 'flex',
     flexWrap: 'wrap',
     justifyContent: 'space-between'
    }}>

      {
        characters?.map(char => {
          return(
            <div key={char.id}>
              <img src={char.image} alt={char.name} />
              <h2>{char.name}</h2>

            </div>
          )
        })
      }
      
    </main>
  )
}

export default App
