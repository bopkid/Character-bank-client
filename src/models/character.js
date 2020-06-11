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
    static create = (characterData) =>{
        return fetch(`${url}/characters`,{
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(characterData)
        })
        .then(res => res.json())

    }

    static edit =(characterId , characterData) =>{
        return fetch(`${url}/characters/${characterId}`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(characterData)
        })
    }
    static destory = (characterData) =>{
        return fetch(`${url}/characters/${characterData}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(res => res.json)
    }
    static find = (userId) =>{
        console.log('')
        return fetch(`${url}/characters/user/${userId}`)
        .then(res =>res.json())
    }
}


export default CharacterModel