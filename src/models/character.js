const REACT_APP_API_URL = `https://morning-fjord-30373.herokuapp.com/api`

class CharacterModel{
    static all = () => {
        return fetch(`${REACT_APP_API_URL}/characters`)
        .then(res => res.json())
    }
    static show = (characterId) =>{
        return fetch(`${REACT_APP_API_URL}/characters/${characterId}`)
        .then(res => res.json())
        
    }
    static create = (characterData) =>{
        return fetch(`${REACT_APP_API_URL}/characters`,{
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(characterData)
        })
        .then(res => res.json())

    }

    static edit =(characterId , characterData) =>{
        return fetch(`${REACT_APP_API_URL}/characters/${characterId}`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(characterData)
        })
    }
    static destory = (characterData) =>{
        return fetch(`${REACT_APP_API_URL}/characters/${characterData}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(res => res.json)
    }
    static find = (userId) =>{
     
        return fetch(`${REACT_APP_API_URL}/characters/user/${userId}`)
        .then(res =>res.json())
    }
}


export default CharacterModel