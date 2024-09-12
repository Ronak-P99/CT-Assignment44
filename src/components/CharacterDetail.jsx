import React, { useEffect, useState } from "react";
import axios from 'axios';

const CHARACTERS_ENDPOINT = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f57e7641fc5724286ba9dae90b8b6b78&hash=9dbb74cd1640d9530f04639993b455f0";

function CharacterDetail({character}) {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    return (
        <div className="detail-list">

            {character && (
                <div>
                    <h2>{character.name}</h2>
                    <p>{character.description ? character.description : "No description available"}</p>
                </div>
            )}
        </div>
    );
}

export default CharacterDetail;