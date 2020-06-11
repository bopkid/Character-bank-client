import React, { Component } from 'react';
import CharacterModel  from '../models/character'


import CharacterCard from '../components/CharacterCard';

import "../CSS/CharacterList.css"

import {CardGroup} from 'react-bootstrap'




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
                    <CharacterCard {...character} className ="card"/>
            )
        })
        return (
            <div className ="card-container">
                <div className = "card cards">
                    {this.state.characters ? characterList : 'Summoning...'}
                </div>
            </div>
        );
    }
}

export default CharacterList;
