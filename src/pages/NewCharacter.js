import React, { Component } from 'react';

import CharacterModel from '../models/character'

import SkillInput from '../components/SkillInput'
import FeatInput from '../components/FeatInput'
import InventoryInput from '../components/InventoryInput';
import MagicInput from '../components/MagicInput'

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
        else if (["magic"].includes(e.target.className)){
            console.log('magic')
            let magic = [...this.state.Magic]
            magic[e.target.dataset.id][e.target.className] = e.target.value
            this.setState({magic}, () =>console.log(this.state.Magic))
        }  
        else if (["inven"].includes(e.target.className)){
            console.log('inven')
            let inven  = [...this.state.Inventory]
            inven[e.target.dataset.id][e.target.className] = e.target.value
            this.setState({inven} ,() =>console.log(this.state.Inventory))
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

    newInven = (e) =>{
        console.log(this.state.Inventory)
        e.preventDefault()
        this.setState((prevstate) =>({
            Inventory: [...prevstate.Inventory, {inven: ""}]
        }))
    }
    
    newMagic = (e) =>{
        console.log(this.state.Magic)
        e.preventDefault()
        this.setState((prevstate) =>({
            Magic: [...prevstate.Magic, {magic: ""}]
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
                        <div className = "form-input">
                            <label htmlFor = "img">Img url:</label>
                            <input
                                type="text"
                                name ="img"
                                onChange = {this.handleChange}
                                value = {this.state.img}
                            />
                        </div>
                        <div className ="form-input bio">
                            <label htmlFor = "Bio">Bio</label>
                            <textarea
                                type ="text"
                                name = "Bio"
                                onChange ={this.handleChange}
                                value ={this.state.Bio}
                            />
                        </div>
                        <div className = "Skill form-input">
                            <h2 >Skill</h2>
                            <button onClick = {this.NewSkill}>add New Skill</button>
                            <SkillInput skill= {this.state.Skill} handleChange = {this.handleChange}/>
                        </div>
                        <div className  ="Feat form-input">
                            <h2>Feat</h2>
                            <button onClick = {this.NewFeat}> Add New Feat</button>
                            <FeatInput feat = {this.state.Feats} handleChange = {this.handleChange}/>

                        </div>
                        <div className = "Magic form-input">
                            <h2>Magic</h2>
                           <button onClick = {this.newMagic}>Add new magic</button>
                           <MagicInput magic = {this.state.Magic} handleChange = {this.handleChange} />
                        </div>
                        <div className = "Inventory form-input">
                            <h2>Inventory</h2>
                            <button onClick = {this.newInven}>Add new Item</button>
                            <InventoryInput inven = {this.state.Inventory} handleChange ={this.handleChange} />
                        </div>
                        
                        <input type = "submit" value = "Create New Character" />
        
                    </form>
            
        );
    }
}

export default NewCharacter;
