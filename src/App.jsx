import { useState } from 'react';
import './AppStyles.css';
import CharacterList from './components/BrowseCharacters';
import CharacterDetail from './components/CharacterDetail';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';




function App() {
  const [characterId, setCharacterId] = useState(null);

  function handleCharacterSelect(characterId) {
    setCharacterId(characterId)
  }
  

    return (
      <div className='app-container'>
        <NavigationBar />
        <Routes>
        <Route path='/' element={<Home />} />
          <CharacterList setCharacterId = {handleCharacterSelect}/>
          {
            characterId && (
              <CharacterDetail character = {characterId}/>
            )
          }
        </Routes>
      </div>
    );
  
}

export default App;
