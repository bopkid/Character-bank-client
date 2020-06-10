import React from 'react';

const InventoryShow = (props) => {
    return (
       props.inven.map((e,idx)=>{
        return(
            <div key = {idx}>
                <p>{e.inven}</p>
            </div>
        )
       })
    );
}

export default InventoryShow;
