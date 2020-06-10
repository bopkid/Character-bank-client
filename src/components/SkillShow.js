import React from 'react';

const SkillShow = (props) => {
    return (
        props.skill.map((e,idx) =>{
            return(
                <div key = {idx}>
              <p>{e.name} : {e.level}</p>
                </div>
            )
         
        })
    );
}

export default SkillShow;
