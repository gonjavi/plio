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
              <li className="list"><p className="first"><b>Email:</b>gmancillapaz@yahoo.com</p></li>
              <li className="list"><p><b>Telephone:</b> +573137739648</p></li>
              <li className="list"><p><b>LinkedIn:</b> <a target="_blank" rel="noopener noreferrer" className="linke" href="http://www.linkedin.com/in/g-mancillla/">g-javier-mancilla</a></p></li>
            </ul>
          </div>

        </div>

        
      </div>
    )
  }
}

export default Contact;
