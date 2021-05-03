import React from "react";
import "./Blog.css";

const Blog = ({ blog }) => {
  const { id, title, image, url } = blog;
  return (
    
      <div className="m-auto col-md-4 " style={{ style: "18rem" }}>
        <div className="py-3" style={{boxShadow: '5px 5px 25px gray'}}>
        <img
          className="card-img-top w-50"
          src={image}
          alt="Card image cap"
        ></img>
        <div className="card-body">
          <p
            style={{ textAlign: "justify", fontWeight: "200", width: "55%" }}
            className="card-text mb-3 m-auto img-fluid"
          >
            <strong>Title:</strong> {title}
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
