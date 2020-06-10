import React from 'react';

const MagicShow = (props) => {
    return (
        props.magic.map((e,idx)=>{
         return(
             <div key = {idx}>
                 <p>{e.magic}</p>
             </div>
         )
        })
     );
}

export default MagicShow;
