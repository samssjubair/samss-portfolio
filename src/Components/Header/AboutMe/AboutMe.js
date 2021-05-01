import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import picture from "../../../Images/dp1.png";
import './AboutMe.css'
const AboutMe = () => {
    
    
    return (
        <div style={{textAlign: 'left'}} className="row container-fluid p-5">
            <div className="col-6 d-flex justify-content-end">
                <img src={picture} className="img-fluid w-75 py-5 pe-5" alt=""/>
            </div>
            <div className="col-6 d-flex align-items-center">
                <div>
                    <h2>Hi</h2>
                    <h1 style={{fontSize: '3rem',fontWeight: '300'}}>This is <span style={{fontWeight: '600'}} className="text-danger">Samss Jubair</span></h1>
                    <p style={{textAlign: 'justify', width: '80%'}} className="text-secondary ">
                    4th-year university CSE student and a Web Developer. My focus is on MERN stack programming. Love problem solving, debugging, and learning new technologies. Always enjoy being challenged and engaging with

                    </p>
                    <div className="w-50   justify-content-between">
                        
                        <button  className="btn btn-outline-light me-3" >
                            <a className="nostyle" target="_blank" href="https://drive.google.com/u/0/uc?id=1aBhXQrSpAB42AUpnMCStKTl7Tt8xxrT7&export=download">Download CV</a>
                        </button>
                        
                        <button className="btn btn-outline-danger">Contact Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;