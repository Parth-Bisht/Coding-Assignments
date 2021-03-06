import React from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import {Link, useNavigate} from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const gotoLogin = ()=>{
    navigate("/login")
  }
  const gotoCart = ()=>{
    navigate("/cart")
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="aboutus">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="faq">FAQ</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contactus">Contact Us</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="men">Men</Link></li>
            <li><Link className="dropdown-item" to="women">Women</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="kids">Kids</Link></li>
          </ul>
        </li>
      </ul>
      <div>
      <FaShoppingCart onClick={gotoCart} cursor="pointer" color="white"/>
      <button onClick={gotoLogin} type="button" className="btn btn-outline-success mx-2">Login</button>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar
