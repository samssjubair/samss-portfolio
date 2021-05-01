import React from 'react';

const Project = ({project}) => {
    const {image,name,id,github,liveSite,usedTechnology,details} =project;
    return (
        <div className="row my-5 d-flex align-items-center justify-content-center">
            { id%2==1 &&
                <>
                    <div className="col px-5">
                        <img  className="img-fluid  shadow-md " style={{borderRadius: '10px', boxShadow: '5px 5px 30px grey'}} src={image} alt=""/>
                    </div>
                    <div style={{textAlign: 'justify'}} className="col px-5">
                        <h1>{name}</h1>
                        <p className="text-secondary"><strong style={{color: 'white', fontWeight: '400'}}>Used Technology:</strong> {usedTechnology}</p>
                        <p  className="text-secondary"><strong style={{color: 'white', fontWeight: '400'}}>Project Description:</strong> {details}</p>
                    </div>
                </>

            }
            { id%2==0 &&
                <>
                    
                    <div style={{textAlign: 'justify'}} className="col px-5">
                        <h1>{name}</h1>
                        <p className="text-secondary"><strong style={{color: 'white', fontWeight: '400'}}>Used Technology:</strong> {usedTechnology}</p>
                        <p  className="text-secondary"><strong style={{color: 'white', fontWeight: '400'}} >Project Description:</strong> {details}</p>
                    </div>
                    <div className="col px-5">
                        <img  className="img-fluid  shadow-md " style={{borderRadius: '10px', boxShadow: '5px 5px 30px grey'}} src={image} alt=""/>
                    </div>
                </>

            }
            
        </div>
    );
};

export default Project;