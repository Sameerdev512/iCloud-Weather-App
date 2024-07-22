import React, { useState } from "react";
import '../../src/scss/style.css'

const Navbar = ({handleClick}) => {

  const [city,setCity]=useState("indore");

  const handleChange =(e)=>{
      setCity(e.target.value);
      //  e.preventDefault();
    }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
  <a className="navbar-brand pl-2" href="#">iCloud</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <div className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" onChange = {handleChange} type="search" placeholder="Search City" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0 bg-danger text-white" onClick={()=>handleClick(city) } >Search</button>
    </div>
  </div>
</nav>
    </>
  );
};

export default Navbar;
