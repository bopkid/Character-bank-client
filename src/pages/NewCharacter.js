import React, { Component } from 'react';
import CharacterModel from '../models/character'


class NewCharacter extends Component {
    state = {
        Name: '',
        System: '',
        img:'',
        Bio: '',
        Feats: [{Feat:''}] ,
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
            console.log('here')
            let skill = [...this.state.Skill]
            skill[e.target.dataset.id][e.target.className] = e.target.value
            this.setState({skill} , ()=>console.log(this.state.skill))
        }else{
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
                        <button onClick = {this.NewSkill}>add new skill</button>
                        {
                            this.state.Skill.map((val,idx) =>{
                                let skillid = `skill-${idx}`,levelId = `level-${idx}`
                                return(
                                    <div key = {idx}>
                                    <label htmlFor = {skillid}>{`Skill #${idx+1}`}</label>
                                    <input
                                        type = "text"
                                        name = {skillid}
                                        data-id = {idx}
                                        id = {skillid}
                                        onChange = {this.handleChange}
                                        className = "name"
                                    />
                                 <label htmlFor = {levelId}>{`level #${idx+1}`}</label>
                                    <input
                                        type = "text"
                                        name = {levelId}
                                        data-id = {idx}
                                        id = {levelId}
                                        onChange = {this.handleChange}
                                        className = "level"
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
