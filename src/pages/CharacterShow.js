import React, { Component } from 'react';
import CharacterModel from '../models/character'
import SkillShow from '../components/SkillShow'


class CharacterShow extends Component {
    state= {
        character: {
            Skill:[{name:'', level: ''}],
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
      console.log(skill)
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
            </div>
        );
    }
}

export default CharacterShow;
