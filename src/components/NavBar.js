import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="container">
    <div className="row">

      <h4 className="logo col-lg-3 col-md-3 col-sm-12">G. Javier</h4>

      <ul className="list-inline col-lg-9 col-md-9 col-sm-12 text-center menus-todos">
        <Link to="/" className="list-inline-item menu">Home</Link>
        <Link to="/about" className="list-inline-item menu">About</Link>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/gonjavi" className="list-inline-item menu">Github</a>
        <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@javiercaliescali" className="list-inline-item menu">Medium</a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/g-mancillla" className="list-inline-item menu">LinkedIn</a>
        <Link to="/contact" className="list-inline-item menu">Contact</Link>
      </ul>

    </div>

  </nav>
);

export default NavBar;
