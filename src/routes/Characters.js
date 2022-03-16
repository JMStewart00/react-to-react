import React, { useEffect, useState } from 'react';
import { getData } from '../utils/data';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
// import "/workspace/react-to-react/index.css"

export default function Characters() {
const ENDPOINT = 'api/characters'
const START = 'hp';

const [characters, setCharacter] = useState([]);

useEffect(() => {
    let data = getLocalStorage({ENDPOINT});
    if (data.length > 0) {
      setCharacter(data);
    } else {
      getData(START, ENDPOINT)
        .then((data) => {
          setCharacter(data);
          setLocalStorage(ENDPOINT, data);
        })
    }
  }, []);

return (
 <div>
<h1>Characters</h1> 
<table className="table table-hover" style={{ maxwidth: '600px' }}>
    <thead>
<tr>
<th> Name</th>
<th>Species</th> 
<th>House</th>
<th>Ancestry</th>
<th>Patronus</th>
<th> Image</th>
</tr>
</thead>
<tbody>
    {characters.map((character) => <Character key={"character.id"} character={character}/> )}
</tbody>
</table>
</div>
);
}

const Character = ({character}) => {
return (

    <tr>
        <td>{character.name}</td>
        <td>{character.species}</td>
        <td>{character.house}</td>
        <td>{character.ancestry}</td>
        <td>{character.patronus}</td>
        <td><img height='200px' width='200px' src={character.image}></img></td>
    </tr>
)



}
