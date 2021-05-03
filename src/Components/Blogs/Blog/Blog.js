import React from 'react';

const Blog = ({blog}) => {
    const {title,image,url}= blog;
    return (
        <div className="m-auto col-md-4" style={{style: '18rem'}}>
            <img className="card-img-top w-50" src={image} alt="Card image cap"></img>
            <div className="card-body  ">
                <p style={{textAlign: 'justify', width: '65%'}} className="card-text m-auto img-fluid">{title}</p>
            </div>
        </div>
    );
};

export default Blog;