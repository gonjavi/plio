import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="container foot">
    <div className="row">
      <ul className="list-inline letrasup col-lg-6 col-md-9 col-sm-12">
        <li className="list-inline-item">Hello at gjavier.co</li>
        <li className="list-inline-item menu">
          {' '}
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/gonjavi">Github</a>
        </li>
        <li className="list-inline-item menu">
          {' '}
          <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@javiercaliescali">Medium</a>
        </li>
        <li className="list-inline-item menu">
          {' '}
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/g-mancillla">LinkedIn</a>
        </li>
        <Link to="/contact" className="list-inline-item">Contact</Link>
      </ul>
    </div>
    <div className="letras">Crafted using ReactJS, Bootstrap, and Visual Studio Code.</div>
    <div className="letras">G. Javier © 2019 - 2021</div>

  </div>
);

export default Footer;
