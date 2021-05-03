import React from 'react';
import './Blog.css'

const Blog = ({blog}) => {
    const {id,title,image,url}= blog;
    return (
        <div className="m-auto col-md-4 " style={{style: '18rem'}}>
            {/* <img className="card-img-top w-50" src={image} alt="Card image cap"></img>
            <div className="card-body  ">
                <p style={{textAlign: 'justify', width: '65%'}} className="card-text m-auto img-fluid">{title}</p>
            </div> */}
            
            <div class="grid ms-5">
          <figure class="effect-lily">
            <img src={image} alt="img12"/>
            <figcaption>
              <div>
                <h2>Blog: <span>{id}</span></h2>
                <p>{title}</p>
              </div>
              <a target="_blank" href={url}>Read full..</a>
            </figcaption>     
          </figure>
          </div>
            
           
        </div>
    );
};

export default Blog;