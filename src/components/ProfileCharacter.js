import React from 'react';
import { Link } from 'react-router-dom'

const ProfileCharacter = (props) => {
    return (
      props.characters.map((e,idx) =>{
         return(
             <div key = {idx}>

                <Link >{e.Name}</Link>
             </div>
         )
      })
    );
}

export default ProfileCharacter;
