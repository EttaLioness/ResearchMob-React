import React from "react";
import { Link } from 'react-router-dom';
import ResearchMobLogo from "../../assets/researchmob-low-res-transparent.svg";
import './footer.css'

function Footer(){
    // const isLoggedIn = this.state.isLoggedIn;
    return(
        <div className="footerContainer">
            <div className="logo">
                <Link to="/">
                    <img src={ResearchMobLogo} className="logoImage" alt="researchMob Logo" />
                </Link>
            </div>
            <section>
                <h6>ABOUT US</h6>
            </section>
            <section>
                <h6>Be INVOLVED</h6>
                <a href="#">Be a Reviwer</a>
            </section>
            <span>ResearchMob PTY LTD Copywrite 2023</span>
            <span>Terms</span><span>Privacy Policy</span><span>Cookie Policy</span>
        </div>
    )
}

export default Footer;