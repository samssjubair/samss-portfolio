import React from 'react';
import './Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Project = ({project}) => {
    const {image,name,id,github,liveSite,usedTechnology,details} =project;
    return (
        <div data-aos="fade-right" className="row my-5 d-flex align-items-center justify-content-center">
            { id%2==1 &&
                <>
                    <div className="col-md-6 px-5">
                        <img  className="img-fluid my-3 shadow-md " style={{borderRadius: '10px', boxShadow: '5px 5px 30px grey'}} src={image} alt=""/>
                    </div>
                    <div style={{textAlign: 'justify'}} className="col-md-6 px-5">
                        <h1>{name}</h1>
                        <p className="text-secondary"><strong style={{color: 'white', fontWeight: '400'}}>Used Technology:</strong> {usedTechnology}</p>
                        <p  className="text-secondary"><strong style={{color: 'white', fontWeight: '400'}}>Project Description:</strong> {details}</p>
                        <a target="_blank" href={github}><FontAwesomeIcon style={{fontSize: '1.5rem',marginRight: '15px'}} icon={faGithub} /></a>
                        <a target="_blank" href={liveSite}><FontAwesomeIcon style={{fontSize: '1.5rem',marginRight: '15px'}} icon={faExternalLinkAlt} /></a>
                    </div>
                </>

            }
            { id%2==0 &&
                <div data-aos="fade-up" className="media-direction">
                    
                    <div style={{textAlign: 'justify'}} className="col-md-6 px-5">
                        <h1>{name}</h1>
                        <p className="text-secondary"><strong style={{color: 'white', fontWeight: '400'}}>Used Technology:</strong> {usedTechnology}</p>
                        <p  className="text-secondary"><strong style={{color: 'white', fontWeight: '400'}} >Project Description:</strong> {details}</p>
                        <a target="_blank" href={github}><FontAwesomeIcon style={{fontSize: '1.5rem',marginRight: '15px'}} icon={faGithub} /></a>
                        <a target="_blank" href={liveSite}><FontAwesomeIcon  style={{fontSize: '1.5rem',marginRight: '15px'}} icon={faExternalLinkAlt} /></a>
                    </div>
                    <div className="col-md-6  px-5">
                        <img  className="img-fluid my-3 shadow-md " style={{borderRadius: '10px', boxShadow: '5px 5px 30px grey'}} src={image} alt=""/>
                    </div>
                </div>

            }
            
        </div>
    );
};

export default Project;