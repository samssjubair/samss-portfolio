import React from "react";
import "./Blog.css";

const Blog = ({ blog }) => {
  const { id, title, image, url } = blog;
  return (
    
      <div  className="m-auto col-md-4 py-5" >
        <div className="py-3 hover-shadow"  style={{ padding: '20px'}}>
        <img
          style={{height: '120px'}}
          className="card-img-top w-50"
          src={image}
          alt="Card image cap"
        ></img>
        <div className="card-body">
          <p
            style={{ textAlign: "center", fontWeight: "200", height: '70px' ,padding: '10px'}}
            className="card-text mb-3 m-auto img-fluid"
          >
            {title}
          </p>
          <a
            target="_blank"
            className="text-primary "
            style={{ textDecoration: "underline" }}
            href={url}
          >
            Read Full Article
          </a>
        </div>

        {/* <div class="grid container-fluid">
          <figure class="effect-lily  ms-4">
            <img src={image} alt="img12"/>
            <figcaption>
              <div>
                <h2>Blog: <span>{id}</span></h2>
                <p style={{color: 'white',fontWeight: '500',background: 'rgba(0,0,0,0.1)',padding: '2px'}}>{title}</p>
              </div>
              <a target="_blank" href={url}>Read full..</a>
            </figcaption>     
          </figure>
          </div> */}
      </div>
    </div>
  );
};

export default Blog;
