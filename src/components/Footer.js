import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="container foot">
    <div className="row">
      <ul className="list-inline letrasup col-lg-6 col-md-9 col-sm-12">
        <li className="list-inline-item">Hello at gjavier.com</li>
        <li className="list-inline-item menu">
          {' '}
          <a target="_blank" rel="noopener noreferrer" className="lista text-center" href="https://github.com/gonjavi">Github</a>
        </li>
        <li className="list-inline-item menu">
          {' '}
          <a target="_blank" rel="noopener noreferrer" className="lista" href="https://medium.com/@javiercaliescali">Medium</a>
        </li>
        <li className="list-inline-item menu">
          {' '}
          <a target="_blank" rel="noopener noreferrer" className="lista" href="https://www.linkedin.com/in/g-mancillla">LinkedIn</a>
        </li>
        <li className="list-inline-item menu">
          <Link to="/contact" className="list-inline-item lista">Contact</Link>
        </li>
      </ul>
    </div>
    <div className="letras">Crafted using ReactJS, Bootstrap, and Visual Studio Code.</div>
    <div className="letras">G. Javier © 2019 - {new Date().getFullYear()}</div>

  </div>
);

export default Footer;
