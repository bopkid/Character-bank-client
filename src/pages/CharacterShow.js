import React, { Component } from 'react';
import CharacterModel from '../models/character'


class CharacterShow extends Component {
    state= {
        character: {},
        currentCharacer: this.props.match.params.id
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = () =>{  
        CharacterModel.show(this.state.currentCharacer)
        .then(res =>this.setState({
            character: res.character
        }))
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <h2>{this.state.character.Name}</h2>
            </div>
        );
    }
}

export default CharacterShow;
