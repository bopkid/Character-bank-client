const REACT_APP_API_URL = "https://morning-fjord-30373.herokuapp.com/api"


export default class UserModel {
    static create(data) {
        return fetch(`${REACT_APP_API_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
    }

    static login(credentials) {
        return fetch(`${REACT_APP_API_URL}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: 'include',
          body: JSON.stringify(credentials)
        }).then(res => res.json())
      }
    
    static logout(){
        console.log('loggin out')
        return fetch(`${REACT_APP_API_URL}/auth/logout`,{
            method: "DELETE",
            credentials: 'include'
        })
    }
}
