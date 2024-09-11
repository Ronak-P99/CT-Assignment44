import React, { useEffect, useState } from "react";
import axios from 'axios';

const CHARACTERS_ENDPOINT = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f57e7641fc5724286ba9dae90b8b6b78&hash=9dbb74cd1640d9530f04639993b455f0"

function CharacterDetail()  {
    const [characters, setCharacters] = useState([]);
    const [selectedChar, setSelectedChar] = useState(null);


    useEffect(() => {
        axios.get(CHARACTERS_ENDPOINT).then((response) => {
            console.log(response.data);
            setCharacters(response.data.data.results);
        });

    }, []);

    const handleItemClick = (itemId) => {
        // Fetch details for the clicked item
        axios.get(`https://gateway.marvel.com:443/v1/public/characters/${itemId}?apikey=f57e7641fc5724286ba9dae90b8b6b78&hash=9dbb74cd1640d9530f04639993b455f0`)
          .then(response => setSelectedChar(response.data.data.results))
      };

        return (
            <div className="detail-list">
                {characters.map(character => (
                    <div key={character.id} onClick={() => handleItemClick(character.id)}>
                        <img width="100 px" src={character.thumbnail.path+'.'+character.thumbnail.extension} />
                    </div>
                ))}
        
            {selectedChar && (
            <div>
                <h2>{selectedChar.name}</h2>
                <p>{selectedChar.description}</p>
            </div>
              )}
            </div>
             
        );
}

export default CharacterDetail;