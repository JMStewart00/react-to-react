import React, {useEffect, useState } from 'react';
import { getData } from '../utils/data';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

const Characters = () => {
    const ENDPOINT = 'characters';
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        let data = getLocalStorage(ENDPOINT);
        if(data.length > 0) {
            setCharacters(data);
        } else {
            getData('https://hp-api.herokuapp.com/api/', ENDPOINT)
              .then((data) => {
                  setCharacters(data);
                  setLocalStorage(ENDPOINT, data);
            })
        }
    }, []);


    return (
        <main style={{ padding: "1rem 0"}} className="container">
            <div className='row justify-content-center text-center gap-2'>
                <h2>Characters</h2>
                {characters.filter((character,i) => character.ancestry === "half-blood" && character.eyeColour === "green")
                    .map((character) => <Character key={character.id} character={character} />)
                }
            </div>
        </main>
    );
}

const Character = ({ character }) => {
    return (
        <div className='container'>
            <h2 className='row justify-content-left'>{character.name}</h2>
            <div><strong>Species:</strong> {character.species}</div>
            <div><strong>Gender:</strong> {character.gender}</div>
            <div><strong>House:</strong> {character.house}</div>
            <div><strong>DOB:</strong> {character.dateOfBirth}</div>
            <img src ={character.image}></img>
        </div>


    )
}


export default Characters;