import React from 'react';
import { Link } from 'react-router-dom'

const ProfileCharacter = (props) => {
    return (
      props.characters.map((e,idx) =>{
         return(
             <div key = {idx}>

                <Link to= {`/characters/${e._id}`}>{e.Name}</Link>
             </div>
         )
      })
    );
}

export default ProfileCharacter;
