import React, { Component } from 'react';
import CharacterModel from '../models/character'
import SkillInput from '../components/SkillInput'


class NewCharacter extends Component {
    state = {
        Name: '',
        System: '',
        img:'',
        Bio: '',
        Feats: [{feats:''}] ,
        Inventory: [{inven:''}] ,
        Magic: [{magic:''}] ,
        Skill: [{name:'', level:''}] ,
        user: this.props.match.params.id
    }
    handleSubmit = (e) =>{
        e.preventDefault();

        CharacterModel.create(this.state)
        
        .then(data =>{
            console.log(data)
            this.props.history.push('/characters')
        })
    }

    handleChange = (e) =>{
       
        if (["name","level"].includes(e.target.className)){
            console.log('skill')
            let skill = [...this.state.Skill]
            skill[e.target.dataset.id][e.target.className] = e.target.value
            this.setState({skill} , ()=>console.log(this.state.skill))
        }
        else if (["feats"].includes(e.target.className)){
            console.log("feats")
            let feat = [...this.state.Feats]
            feat[e.target.dataset.id][e.target.className] = e.target.value
            this.setState({feat} , () =>console.log(this.state.feat))
        }
        else{
            console.log('here')
        this.setState({
            
            [e.target.name] : e.target.value
        })
    }
    }

    NewSkill = (e) =>{
       e.preventDefault()
       
        this.setState((prevstate) =>({
            
            Skill: [...prevstate.Skill,{name:"",level:""}]
        }))

    }
    
    NewFeat = (e) =>{
        console.log(this.state.Feats)
        e.preventDefault()
        this.setState((prevstate) =>({
            Feats: [...prevstate.Feats, {feats: ""}]
        }))
    }

    render() {

        console.log(this.state.Skill)
        return (
                    <form onSubmit = {this.handleSubmit}>
                        <div className = "form-input">
                            <label htmlFor = "Name">Name: </label>
                            <input 
                                type= "text"
                                name= "Name"
                                onChange = {this.handleChange}
                                value = {this.state.Name}
                            />
                        </div>
                        <div className = "form-input">
                            <label htmlFor = "System">System: </label>
                            <input 
                                type= "text"
                                name= "System"
                                onChange = {this.handleChange}
                                value = {this.state.System}
                            />
                        </div>
                        <div>
                            <label htmlFor = "img">Img url:</label>
                            <input
                                type="text"
                                name ="img"
                                onChange = {this.handleChange}
                                value = {this.state.img}
                            />
                        </div>
                        <div className = "Skill">
                            <h2 >Skill</h2>
                            <button onClick = {this.NewSkill}>add New Skill</button>
                            <SkillInput skill= {this.state.Skill} handleChange = {this.handleChange}/>
                        </div>
                        <div className  ="Feat">
                            <h2>Feat</h2>
                            <button onClick = {this.NewFeat}> Add New Feat</button>
                            {
                              this.state.Feats.map((val ,idx) =>{
                                  let featId = `feat-${idx}`
                                  return(
                                      <div key = {idx}>
                                        <label htmlFor = {featId}>{` Feat #${idx+1}`}</label>
                                        <input
                                            type ="text"
                                            name = {featId}
                                            data-id ={idx}
                                            id = {featId}
                                            onChange = {this.handleChange}
                                            className ="feats"
                                        />
                                      </div>
                                  )
                              })  
                            }

                        </div>
                        
                        <input type = "submit" value = "Create New Character" />
        
                    </form>
            
        );
    }
}

export default NewCharacter;
