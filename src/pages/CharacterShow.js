import React, { Component } from 'react';

import CharacterModel from '../models/character';

import SkillShow from '../components/SkillShow';
import FeatsShow from '../components/FeatsShow';


class CharacterShow extends Component {
    state= {
        character: {
            Skill:[{name:'', level: ''}],
            Feats:[{feats:''}],
            Inventory:[{inven:''}],
            Magic:[{magic:''}]
        },
        currentCharacer: this.props.match.params.id,
       
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
    //   console.log(this.state.character.Skill)
      const skill= this.state.character.Skill
      const feat = this.state.character.Feats
      console.log(feat)
        return (
            
            <div>
                <h2>{this.state.character.Name}</h2>
                <img src ={this.state.character.img} alt = {this.state.character.name}/>
                <p>Bio:{this.state.character.Bio}</p>
                <div className = "system">
                    <h2>System:</h2>
                    <p>{this.state.character.System}</p>
                   
                </div>
                <div className = "skill">
                    <h2>Skill</h2>
                    <SkillShow skill = {skill}/>
                </div>
                <div className = "feat">
                    <h2>Feats</h2>
                    <FeatsShow feat = {feat}/>
                </div>
            </div>
        );
    }
}

export default CharacterShow;
