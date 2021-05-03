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
        <footer className="container-fluid" style={{backgroundColor: '#252525'}}>
            <div className="d-flex justify-content-between px-5 pb-5">
                <div>
                    <a target="_blank" href="https://www.linkedin.com/in/samssjubair/"><FontAwesomeIcon style={iconStyle} icon={faLinkedin} /></a>
                    <a target="_blank" href="https://github.com/samssjubair"><FontAwesomeIcon style={iconStyle} icon={faGithub} /></a>
                    <a target="_blank" href="https://www.facebook.com/"><FontAwesomeIcon style={iconStyle} icon={faFacebook} /></a>
                    
                   
                </div>
                <div>
                    Proudly powered by Samss Jubair @{new Date().getFullYear()}
                </div>
            </div>
        </footer>
    );
};

export default Footer;