import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="container">
        <div className="row">
          
            <h4 className="logo col-lg-7 col-md-6 col-sm-6">G. Javier</h4>
          
          
            <ul className="list-inline col-lg-5 col-md-6 col-sm-6 text-center">
              <Link to='/' className="list-inline-item menu">Home</Link>
              <Link to='/about' className="list-inline-item menu">About</Link>
              <Link to='/contact' className="list-inline-item menu">Contact</Link>
            </ul>
          
        </div>
       
      </nav>
    )
  }
}

export default NavBar;
