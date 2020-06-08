import React from 'react';

import {Link} from 'react-router-dom'

const Header = (props) => {
    console.log(props.currentUser)
    return (
        <header>

            <div className = 'logo'>
                <Link to = {'/'}>Character Bank!</Link>
            </div>

            <div>
                <ul>

                    <li><Link to ={'/characters'}>All Character </Link></li>
                    <li><Link to ={'/about'}>About</Link></li>

                    {props.currentUser ?
                    <>
                    <li><Link to = {'/profile'}>Profile</Link></li>
                    <li><a href = '/logout' onClick  = {props.logout}>Log out</a></li>
                    </>

                    :

                    <>
                    <li><Link to = {'/register'}>Register</Link></li>
                    <li><Link to = {'/login'}>Login</Link></li>
                    
                    </>
                    }
                </ul>
            </div>

        </header>
    );
}

export default Header;
