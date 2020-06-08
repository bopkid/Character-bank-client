const url = `http://localhost:3001/api`

class CharacterModel{
    static all = () => {
        return fetch(`${url}/characters`)
        .then(res => res.json())
    }
    static show = (characterId) =>{
        console.log(characterId)
        return fetch(`${url}/characters/${characterId}`)
        .then(res => res.json())
        
    }
}


export default CharacterModel