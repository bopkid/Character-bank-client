import React from 'react';

const InventoryInput = (props) => {
    return (
        props.inven.map((val ,idx) =>{
            let invenId = `feat-${idx}`
            return(
                <div key = {idx}>
                  <label htmlFor = {invenId}>{` Feat #${idx+1}`}</label>
                  <input
                      type ="text"
                      name = {invenId}
                      data-id ={idx}
                      id = {invenId}
                      onChange = {props.handleChange}
                      className ="inven"
                  />
                </div>
            )
        })
    );
}

export default InventoryInput;
