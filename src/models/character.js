const url = `http://localhost:3001/api`

class CharacterModel{
    static all = () => {
        return fetch(`${url}/characters`)
        .then(res => res.json())
    }
}


export default CharacterModel