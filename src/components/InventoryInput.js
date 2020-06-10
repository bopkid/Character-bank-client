import React from 'react';

const InventoryInput = (props) => {
    return (
        props.inven.map((val ,idx) =>{
            let featId = `feat-${idx}`
            return(
                <div key = {idx}>
                  <label htmlFor = {featId}>{` Feat #${idx+1}`}</label>
                  <input
                      type ="text"
                      name = {featId}
                      data-id ={idx}
                      id = {featId}
                      onChange = {props.handleChange}
                      className ="inven"
                  />
                </div>
            )
        })
    );
}

export default InventoryInput;
