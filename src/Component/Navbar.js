import React from 'react';
import "./Navbar.css";
import{ Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='text'>
      <ul className='Nav-ul'>
        <li>
          <Link to = "/Product">Product</Link>
          </li>
          <li>
          <Link to = "/Addproduct">Add Product</Link>
          </li>
          <li>
          <Link to = "/UpdateProduct">Update Product</Link>
          </li>
          <li>
          <Link to = "/logoutProduct">Logout Product</Link>
          </li>
          <li>
          <Link to = "/Profileproduct">Profile Product</Link>
          </li>
          <li>
          <Link to = "/Home">Home</Link>
          </li>
          
        
      </ul>
    </div>
  )
}

export default Navbar;