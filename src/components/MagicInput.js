import React from 'react';

const MagicInput = (props) => {
    return (
        props.magic.map((val ,idx) =>{
            let magicId = `feat-${idx}`
            return(
                <div key = {idx}>
                  <label htmlFor = {magicId}>{` Magic #${idx+1}`}</label>
                  <input
                      type ="text"
                      name = {magicId}
                      data-id ={idx}
                      id = {magicId}
                      onChange = {props.handleChange}
                      className ="magic"
                      value = {val.magic}
                  />
                </div>
            )
        })
    );
}

export default MagicInput;
