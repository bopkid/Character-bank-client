import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import {Image} from 'react-bootstrap'

import '../CSS/ProfileCharacter.css'
class ProfileCharacters extends Component {

    deleteClickedCharacter = () =>this.props.deleteCharacter(this.props.character._id)


    render() {
        return (
            <div className =" ">
                <div key = {this.props.idx} className = "profileCharacters" >
                <div className ="pic-container">
                    <Image className ="profile-pic" src ={this.props.character.img} alt ={this.props.Name} fluid/>
                </div>
                    <Link to= {`/characters/${this.props.character._id}`}>{this.props.character.Name}</Link>

                    <div>
                        <button><Link to = {`/characters/${this.props.character._id}/edit`}>Edit</Link></button>
                        <button onClick = {this.deleteClickedCharacter}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileCharacters;
