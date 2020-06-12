import React , {useState} from 'react';
import { withRouter } from 'react-router-dom'
import Routes from './config/routes'

import Header from './pages/Header'


import './App.css';
import UserModel from './models/user';

function App (props) {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('uid'))

  const storeUser = (userId) =>{
    setCurrentUser(userId)
    localStorage.setItem('uid', userId)
  }
  const logout  = (e) =>{
    e.preventDefault()

    localStorage.removeItem('uid')
    UserModel.logout()
    .then(res =>{
      setCurrentUser(null)
      props.history.push('/login')
    })
  }

  return (
    
 
    <div className="App">
    <Header
      currentUser = { currentUser }
      logout = { logout }
    />
      <Routes 
         currentUser = { currentUser }
         storeUser = { storeUser }
      />
   
    </div>
  );
}

export default  withRouter(App);
