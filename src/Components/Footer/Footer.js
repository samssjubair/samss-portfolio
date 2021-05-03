import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

const Footer = () => {
    const iconStyle={
        fontSize: '2rem',
        marginRight: '1rem'
    }
    return (
        <footer className="container-fluid w-75" style={{backgroundColor: '#252525'}}>
            <div className=" row  pb-5">
                <div className="col-md-6">
                    <a target="_blank" href="https://www.linkedin.com/in/samssjubair/"><FontAwesomeIcon style={iconStyle} icon={faLinkedin} /></a>
                    <a target="_blank" href="https://github.com/samssjubair"><FontAwesomeIcon style={iconStyle} icon={faGithub} /></a>
                    <a target="_blank" href="https://www.facebook.com/"><FontAwesomeIcon style={iconStyle} icon={faFacebook} /></a>
                    
                   
                </div>
                <div className="col-md-6">
                    Proudly powered by Samss Jubair @{new Date().getFullYear()}
                </div>
            </div>
        </footer>
    );
};

export default Footer;