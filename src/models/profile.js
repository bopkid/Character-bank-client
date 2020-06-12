const REACT_APP_API_URL = "https://morning-fjord-30373.herokuapp.com/api"


export default class ProfileModel{
    static show  = (profileId) =>{
        return fetch(`${REACT_APP_API_URL}/users/${profileId}`)
        .then(res => res.json())
    }
}