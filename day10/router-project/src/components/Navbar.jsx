import React from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="home">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="home">Home</Link>
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
      <FaShoppingCart color="white"/>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar
