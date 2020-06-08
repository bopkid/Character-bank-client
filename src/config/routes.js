import React from 'react'
import { Switch , Route} from 'react-router-dom'

import Home from '../pages/Home'
import CharacterList from '../pages/CharacterList'
import CharacterShow from '../pages/CharacterShow'

export default (props) =>(
    <Switch>
        <Route exact path ='/' component = { Home } />
        <Route path = '/characters/:id' component = {CharacterShow} />
        <Route path = '/characters' component = { CharacterList} />
        
    </Switch>
)