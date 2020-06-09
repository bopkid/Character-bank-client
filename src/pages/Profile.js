import React, { Component } from 'react';
import ProfileCharacter from '../components/ProfileCharacter';

import profileModel from '../models/profile';


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
            profile: res.user
        }))
        .catch(err => console.log(err))
    }
 
    render() {
        return (
            <div>

                <h2>Welcome Back {this.state.profile.name} </h2>
                <div>
                <Link to ={`/profile/${this.state.profile._id}/new`} >Create New Character</Link>
                    <ProfileCharacter userId ={this.state.profile._id} />
                </div>
            </div>
        );
    }
}

export default Profile;
