import React, { Component } from 'react';
import CharacterModel  from '../models/character'

import { Link } from 'react-router-dom'
import CharacterCard from '../components/CharacterCard';



class CharacterList extends Component {
    state ={
        characters: []
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = () =>{
        CharacterModel.all()
        .then(e => this.setState({characters: e.characters}))
        .catch(err => console.log(err))
    }

    render() {
        let characterList = this.state.characters.map((character,index) =>{
            return (
                <Link key = {index} to ={`/characters/${character._id}`}>
                    <CharacterCard {...character} />
                </Link>
            )
        })

        return (
            <div>
                {this.state.characters ? characterList : 'Summoning...'}
            </div>
        );
    }
}

export default CharacterList;
