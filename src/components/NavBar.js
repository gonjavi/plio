import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="container">
        <div className="row">
          <h4 className="logo col-6">G. Javier</h4>
          <div className="col-6">
            <ul className="list-inline">
              <Link to='/' className="list-inline-item"> Home</Link>
              <Link to='/about' className="list-inline-item">About</Link>
              <li className="list-inline-item"></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar;
