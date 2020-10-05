import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../logos/Group 1329.png'
import   '../Header/Header.css'
const Header = () => {
    const history = useHistory() 
        const Registration = () => {
            history.push("/regi");
        }
    return (

        <div className="navbar">
        <div className="logo">
        <img src={logo} alt=""/>
        </div>
        <div className="manu">
         <a href="/">Home</a>
         <a href="/">Donation</a>
         <a href="/">Events</a>
         <a href="/">Blog</a>
         <button onClick={Registration}>Register</button>
         <button>Admin</button>
        </div>
        </div>      
    );
}

export default Header;