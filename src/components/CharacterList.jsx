import React, { useEffect, useState } from "react";
import axios from 'axios';

const CHARACTERS_ENDPOINT = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f57e7641fc5724286ba9dae90b8b6b78&hash=9dbb74cd1640d9530f04639993b455f0"

function CharacterList({setCharacterId})  {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get(CHARACTERS_ENDPOINT).then((response) => {
            console.log(response.data);
            setCharacters(response.data.data.results);
        });

    }, []);
        return (
            <div className="character-list">
                <h3>characters</h3>
                <ul>

                {characters.map((character) => (
                <div key={character.id} onClick={() => setCharacterId(character)}>
                    <img width="100 px" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
                </div>
            ))}
                </ul>
            </div>
        );
}

export default CharacterList;

