import React, { Component } from 'react';
import ProfileCharacter from '../components/ProfileCharacter';
import profileModel from '../models/profile';
import CharacterModel from '../models/character'

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
            profile: res.user
        }))
        .catch(err => console.log(err))
    }
 
    render() {
        return (
            <div>

                <h2>Welcome Back {this.state.profile.name} </h2>
                <div>
                    <ProfileCharacter />
                </div>
            </div>
        );
    }
}

export default Profile;
