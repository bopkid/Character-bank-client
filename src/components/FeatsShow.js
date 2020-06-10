import React from 'react';

const FeatsShow = (props) => {
    return (
        props.feat.map((e,idx) =>{
            return(
                <div key = {idx}>
              <p>{e.feats}</p>
                </div>
            )
         
        })
    );
}

export default FeatsShow;
