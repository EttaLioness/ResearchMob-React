import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ResearchMobLogo from "../../assets/researchmob-low-res-transparent.svg";
import './navbar.css'

function Nav(props){
    // const [isUserSignedIn, setIsUserSignedIn] = useState(false);
    // const token = window.localStorage.getItem('token');

    // useEffect(() => {
    //     if (token !== null) {
    //       setIsUserSignedIn(true);
    //     } else {
    //       setIsUserSignedIn(false);
    //     }
    //   }, [token]);
    
    //   const navigate = useNavigate();
      
    //   let logout = () => {
        
    //     setIsUserSignedIn(false);
    //     localStorage.clear();
    //     navigate('/login');
        
        
    //   };
    const { loggedIn, setLoggedIn } = props;

    const navigate = useNavigate();
    
    const handleClick = () => {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("username");
        setLoggedIn(false);
        navigate(`/`);
    
    };

    return(
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={ResearchMobLogo} className="logoImage" alt="researchMob Logo" />
                </Link>
                {/* height= {50} width = {80}  */}
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/createproject">Create Research Project</Link></li>
                <li><Link to='/register' className='nav-item'>Create Account</Link></li>
                {/* {isUserSignedIn ? (
                <li><button onClick={logout} className='loginButton'>Logout</button></li>
                    
                
                ) : (
                    <li>
                        <Link to='/login' className='loginButton'>Login</Link></li>
                  )} */}
                <li>
                    {!loggedIn && (
                    <Link className='loginButton' to="/login">
                    Login
                    </Link>)}
                    {loggedIn && (
                    <Link className='loginButton' onClick={handleClick}>
                    Logout
                    </Link>
                    )}         
                </li>
            </ul>
            
        </nav>
    )
}

export default Nav;