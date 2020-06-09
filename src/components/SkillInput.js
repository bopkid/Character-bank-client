import React from 'react';

const SkillInput = (props) => {
    return (
      props.skill.map((val,idx) =>{
            let skillid = `skill-${idx}`,levelId = `level-${idx}`
                 return(
                    <div key = {idx}>
                         <label htmlFor = {skillid}>{`Skill #${idx+1}`}</label>
                         <input
                            type = "text"
                            name = {skillid}
                            data-id = {idx}
                            id = {skillid}
                            onChange = {props.handleChange}
                            className = "name"
                        />
                        <label htmlFor = {levelId}>{`level #${idx+1}`}</label>
                        <input
                            type = "text"
                            name = {levelId}
                             data-id = {idx}
                            id = {levelId}
                            onChange = {props.handleChange}
                            className = "level"
                         />
                    </div>
                 )
                 })
    )
}
export default SkillInput;
