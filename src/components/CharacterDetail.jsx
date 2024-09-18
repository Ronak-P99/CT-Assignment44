import React, { useEffect, useState } from "react";
import axios from 'axios';

const CHARACTERS_ENDPOINT = "http://gateway.marvel.com/v1/public/characters";
const params = "?ts=1&apikey=f57e7641fc5724286ba9dae90b8b6b78&hash=9dbb74cd1640d9530f04639993b455f0"
// "http://gateway.marvel.com/v1/public/characters/1011198?ts=1&apikey=f57e7641fc5724286ba9dae90b8b6b78&hash=9dbb74cd1640d9530f04639993b455f0"
function CharacterDetail({characterId}) {
    const [character, setCharacter] = useState([]);
    console.log(characterId);
    useEffect(() => {
        axios.get(`${CHARACTERS_ENDPOINT}/${characterId.id}${params}`).then((response) => {
            console.log(response.data);
            setCharacter(response.data.data.results[0]);
        });

    }, [characterId.id]);
    return (
        <div className="detail-list">

            {character ? (
                <div>
                    <h2>{character.name}</h2>
                    <p>{character.description ? character.description : "No description available"}</p>
                </div>
            ):(
                <h2>Loading...</h2>
            )}
        </div>
    );
}

export default CharacterDetail;