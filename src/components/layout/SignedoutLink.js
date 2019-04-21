import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedoutLink = ()=>{
    return(
        <ul className="right">
            <li>
                <NavLink to = '/signup'>Sign Up</NavLink>
            </li>
            <li>
                <NavLink to = '/login'>LogIn</NavLink>
            </li>
        </ul>
    )
}

export default SignedoutLink