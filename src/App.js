import React , {useState} from 'react';
import { withRouter } from 'react-router-dom'
import Routes from './config/routes'

import Header from './pages/Header'
import Footer  from './pages/Footer'

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('uid'))

  const storeUser = (userId) =>{
    setCurrentUser(userId)
    localStorage.setItem('uid', userId)
  }
  return (
 
    <div className="App">
    <Header
      currentUser = { currentUser }
      
    />
      <Routes 
         currentUser = { currentUser }
         storeUser = { storeUser }
      />
    <Footer />
    </div>
  );
}

export default  withRouter(App);
