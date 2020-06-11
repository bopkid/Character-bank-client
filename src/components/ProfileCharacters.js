import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class ProfileCharacters extends Component {

    deleteClickedCharacter = () =>this.props.deleteCharacter(this.props.character._id)
    render() {
        return (
         <div key = {this.props.idx}>
            <Link to= {`/characters/${this.props.character._id}`}>{this.props.character.Name}</Link>
            <button>Edit</button>
            <button onClick = {this.deleteClickedCharacter}>Delete</button>
        </div>
        );
    }
}

export default ProfileCharacters;
