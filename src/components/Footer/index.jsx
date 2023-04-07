import React from "react";
import { Link } from 'react-router-dom';
import ResearchMobLogo from "../../assets/researchmob-low-res-transparent.svg";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Linkedin from "../../assets/linkedin.svg";
import Instagram from "../../assets/instagram.svg";
import './footer.css'

function Footer(props){
    

    return(
        <div className="footerContainer">
                <section className="footerBody">
                <div className="logo">
                    <Link to="/">
                        <img src={ResearchMobLogo} className="logoImage" alt="researchMob Logo" />
                    </Link>
                    <p>Powering scientific progress, together!</p>
                </div>
                <section className="policy">
                    <a href="#">ABOUT US</a>
                    <a href="#">Be INVOLVED</a> 
                    <a href="#">Be a Reviwer</a>
                </section>
                <section className="policy">
                    <a href="#">TERMS AND CONDITIONS</a>
                    <a href="#">PRIVACY POLICY</a>
                </section>
                <section className="social">
                    <a href="#"><img src={Facebook} alt="Facebook" /></a>
                    <a href="#"><img src={Twitter} alt="Twitter" /></a>
                    <a href="#"><img src={Instagram} alt="Instagram" /></a>
                    <a href="#"><img src={Linkedin} alt="Linkedin" /></a>
                </section>
            </section>
                <span>ResearchMob PTY LTD Copywrite 2023. All Rights Reserved.</span>
            </div>
    )   
};

export default Footer;