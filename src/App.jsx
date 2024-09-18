import { useState } from 'react';
import './AppStyles.css';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetail from './components/CharacterDetail';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  const [characterId, setCharacterId] = useState(null);

  function handleCharacterSelect(characterId) {
    setCharacterId(characterId);
  }

  return (
    <BrowserRouter>
      <div className='app-container'>
        {/* Navigation links */}
        <NavigationBar />
        
        {/* Defining routes */}
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />
          
          {/* Character List Route */}
          <Route path="/characters" element={<BrowseCharacters setCharacterId={handleCharacterSelect} />} />

          {/* Character Detail Route with dynamic ID */}
          <Route path="/characters/:id" element={<CharacterDetail characterId={characterId} />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;