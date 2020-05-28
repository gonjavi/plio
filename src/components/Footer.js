import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div className="container foot">
        <div className="row">
          <ul className="list-inline letrasup">
            <li className="list-inline-item">Hello at gjavier.co</li>
            <li className="list-inline-item">in</li>
            <li className="list-inline-item"> <a target="_blank" rel="noopener noreferrer" className="menu" href="https://github.com/gonjavi">Github</a></li>
            <li className="list-inline-item"> <a target="_blank" rel="noopener noreferrer" className="menu" href="https://medium.com/@javiercaliescali">Medium</a></li>
            <li className="list-inline-item"> <a target="_blank" rel="noopener noreferrer" className="menu" href="https://www.linkedin.com/in/g-mancillla">LinkedIn</a></li>
          </ul>
        </div>
        <div className="letras">Crafted using ReactJS, Bootstrap, and Visual Studio Code.</div>
        <div className="letras">G. Javier © 2019 - 2020</div>
        
      </div>
    )
  }
}

export default Footer;
