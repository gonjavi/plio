import React, { Component } from 'react'
import adam from '../img/adam.jpg';

class Contact extends Component {
  render() {
    return (
      <div className="container contact">
        
        <div className="row contact">
          <h1 className="col-12 text-center">Contact</h1>

          <div className="col-md-6 picture">
             <img 
              alt = 'contact'
              width = '80%'
              height = '100%'
              src = {adam} 
             />
          </div>
          <div className="col-md-6">
            <ul className="datos">
              <li className="list"><h5 className="first">Email: gmancillapaz@yahoo.com</h5></li>
              <li className="list"><h5>Telephone: +573137739648</h5></li>
              <li className="list"><h5>LinkedIn: <a target="_blank" rel="noopener noreferrer" href="http://www.linkedin.com/in/g-mancillla/">g-javier-mancilla</a></h5></li>
            </ul>
          </div>

        </div>

        
      </div>
    )
  }
}

export default Contact;
