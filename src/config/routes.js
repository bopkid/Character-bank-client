import React from 'react'
import { Switch , Route} from 'react-router-dom'

import Home from '../pages/Home'
import CharacterList from '../pages/CharacterList'

export default (props) =>(
    <Switch>
        <Route exact path ='/' component = { Home } />
        <Route path = '/characters' component = { CharacterList} />
    </Switch>
)