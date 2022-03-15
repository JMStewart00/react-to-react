import React, { useEffect, useState } from 'react';
import { getData, getNewData } from '../utils/data';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export default function Characters () {
    // const ENDPOINT = 'Characters';
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        let data = getLocalStorage();
        if (data.length > 0) {
            setCharacters(data);
        } else {
            getNewData()
            .then((data) => {
                setCharacters(data);
                setLocalStorage(data);
            })
        }
    }, []);

    let characterList = characters.map((character) => {
        return <Characters key={character.name} character={character} />
    })

    return (
        <></>
    )
}