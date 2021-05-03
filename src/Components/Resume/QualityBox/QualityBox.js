import React from 'react';
import './QualityBox.css'
const QualityBox = ({quality}) => {
    return (
        <div className="col-md-3 mb-3 hover-effect">
            <div style={{border: '1px solid #dc3545', borderRadius: '10px', height: '200px'}} className="p-3 ">
            <img style={{height: '92px',marginBottom: '5px'}} src={quality.url} alt=""/>
            <h4>{quality.title}</h4>
            </div>
        </div>
    );
};

export default QualityBox;