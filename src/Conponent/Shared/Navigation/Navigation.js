import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"
const Navigation = () => {
  return (
    <div className = "bg-dark fixed-top"> 
      <nav class="navbar navbar-expand-lg container navbar-light d-flex">
        <div class="container-fluid">
          <Link class="navbar-brand text-light wonName" to="/home">
            <span className = "text-warning fs-2 "><span className ="text-danger fs-1 border-bottom">JE</span>WEL RANA</span>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse  navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
          
              <li className="nav-item border border-danger navBtn ">
                <Link to = "/home" class="nav-link text-danger" href="#">
                  Home
                </Link>
              </li>
              <li class="nav-item border border-danger navBtn">
                <Link to = "/about" class="nav-link text-danger" href="#">
                  ABOUT
                </Link>
              </li>
              <li class="nav-item border border-danger navBtn">
                <Link to ="/project" class="nav-link text-danger" href="#">
                  PROJECT
                </Link>
              </li>
              <li class="nav-item border border-danger navBtn">
                <Link
                  class="nav-link  text-danger"
                  to="/skill"
               
                >
                  SKILL
                </Link>
              </li>
              <li class="nav-item border border-danger navBtn">
                <Link
                  class="nav-link  text-danger"
                  to="/contact"
               
                >
                  CONTACT
                </Link>
              </li>
              
              <li class="nav-item text-danger navBtn active">mdjewelrana6487@gmail.com <br /> +88 017-08-64-87-28</li>
              
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
