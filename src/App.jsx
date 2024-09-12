import { useState } from 'react'
import './AppStyles.css'
import CharacterList from './components/CharacterList'
import CharacterDetail from './components/CharacterDetail'


function App() {
  const [characterId, setCharacterId] = useState(null);

  function handleCharacterSelect(characterId) {
    setCharacterId(characterId)
  }
  

    return (
      <div className='app-container'>
        <h1>Our Characters</h1>
        <CharacterList setCharacterId = {handleCharacterSelect}/>
        {
          characterId && (
            <CharacterDetail character = {characterId}/>
          )
        }
      </div>
    );
  
}

export default App;
