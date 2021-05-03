import React from 'react';
import './ContactBox.css'

const ContactBox = ({info}) => {
    const {detail,icon,title}= info;
    return (
        <div style={{textAlign: 'left', marginTop: '20px'}} className="media-justify row d-flex align-items-center ">
            <div className="col-md-2 ">
                <img style={{height: '3rem'}} src={icon} alt=""/>

            </div>
            <div className="col-md-10 mt-2 align-self-center">
                <h3 className="text-danger">{title}</h3>
                <p>{detail}</p>
            </div>
        </div>
    );
};

export default ContactBox;