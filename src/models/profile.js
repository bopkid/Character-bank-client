const REACT_APP_API_URL = "http://localhost:3001/api"


export default class ProfileModel{
    static show  = (profileId) =>{
        return fetch(`${REACT_APP_API_URL}/users/${profileId}`)
        .then(res => res.json())
    }
}