import React from 'react'
import { Switch , Route} from 'react-router-dom'

import Home from '../pages/Home'
import CharacterList from '../pages/CharacterList'
import CharacterShow from '../pages/CharacterShow'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import NewCharacter from '../pages/NewCharacter'
import About from '../components/About'

export default (props) =>(
    <Switch>
        <Route path = '/profile/:id/new' component = {NewCharacter} />  
        <Route path = '/profile/:id' component = { Profile}/>
        <Route path = '/register/' component = { Register} />
        <Route path="/login" render={ (routeComponentProps) => {
             return <Login 
               { ...routeComponentProps }
               currentUser={ props.currentUser }
               storeUser={ props.storeUser }
             />
    }} />
        <Route path ='/about' component ={About} />
        <Route exact path ='/' component = { Home } />
        <Route path = '/characters/:id' component = {CharacterShow} />
        <Route path = '/characters' component = { CharacterList} />
        
    </Switch>
)