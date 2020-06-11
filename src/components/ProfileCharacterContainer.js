import React, { Component } from 'react';

import ProfileCharacters from './ProfileCharacters'


class ProfileCharacter extends Component {

    render() {

        return (
            this.props.characters.map((character,idx) =>{
                return(
                <ProfileCharacters 
                character ={character} 
                idx ={idx}
                deleteCharacter ={this.props.deleteCharacter}
                />
                )
            })
        );
    }
}

export default ProfileCharacter;
