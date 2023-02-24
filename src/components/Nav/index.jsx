import React from "react";
import { Link } from 'react-router-dom';
import ResearchMobLogo from "../../assets/researchmob-low-res-transparent.svg";
import './navbar.css'

function Nav(){
    // const isLoggedIn = this.state.isLoggedIn;
    return(
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={ResearchMobLogo} height= {50} width = {80} alt="researchMob Logo" />
                </Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/createproject">Create Project</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            
        </nav>
    )
}

export default Nav;