import React from "react";
import logo from "../../../Images/S.png"
const Navbar = () => {
  return (
    <div className="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
              <img style={{height: '50px',marginLeft: '10px', marginRight: '10px'}} src={logo} alt=""/>
            Samss Jubair
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <a class="nav-link active" aria-current="page" href="#">
                About Me
              </a>
              <a class="nav-link" href="#">
                Portfolio
              </a>
              <a class="nav-link" href="#">
                Resume
              </a>
              <a class="nav-link" href="#">
                Blogs
              </a>
              <a class="nav-link" href="#">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;