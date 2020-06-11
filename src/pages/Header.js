import React from 'react';

import {Link} from 'react-router-dom';



import '../CSS/Header.css'

const Header = (props) => {
    console.log(props.currentUser)
    return (
        <header>

            <div className = 'logo'>
                <Link to = {'/'}>Character Bank!</Link>
            </div>

            <nav>
                <ul>

                    <li className = "nav-item"><Link to ={'/characters'}>All Character </Link></li>
                    <li className = "nav-item"><Link to ={'/about'}>About</Link></li>

                    {props.currentUser ?
                    <>
                    <li className = "nav-item"><Link to = {`/profile/${props.currentUser}`}>Profile</Link></li>
                    <li className = "nav-item"><a href = '/logout' onClick  = {props.logout}>Log out</a></li>
                    </>

                    :

                    <>
                    <li className = "nav-item"><Link to = {'/register'}>Register</Link></li>
                    <li className = "nav-item"><Link to = {'/login'}>Login</Link></li>
                    
                    </>
                    }
                </ul>
            </nav>
       

        </header>
    );
}

export default Header;
