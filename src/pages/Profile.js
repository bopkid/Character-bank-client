import React, { Component } from 'react';
import ProfileCharacter from '../components/ProfileCharacter';

import profileModel from '../models/profile';
import CharacterModel from '../models/character'


import { Link } from 'react-router-dom'


class Profile extends Component {
    state = {
        profile:{},
        currentUser: this.props.match.params.id,
        characters: []
    }
    componentDidMount(){
        this.fetchData()
    }
    fetchData =() =>{
        profileModel.show(this.state.currentUser)
        .then(res =>this.setState({
            profile: res.user,
        }))
        .catch(err => console.log(err))
        
        CharacterModel.find(this.state.currentUser)
        .then(e=>this.setState({
            characters: e.characters
        }))
    }
 
    render() {
        console.log(this.state.characters)
        return (
            <div>

                <h2>Welcome Back {this.state.profile.name} </h2>
                <div>
                    <Link to ={`/profile/${this.state.profile._id}/new`} >Create New Character</Link>
                    <div className ="characters">
                        <ProfileCharacter characters = {this.state.characters} />
                    </div>
                   
                </div>
            </div>
        );
    }
}

export default Profile;
