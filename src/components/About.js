import React, { Component } from 'react'
import us from '../img/us.jpg';

class About extends Component {
  render() {
    return (
      <div className="container">
        
        <div className="row">
          <h1 className="col-12 text-center">About</h1>

          <div className="col-md-6 picture1">
             <img 
             className = 'pictureabout'
              alt = 'contact'
              src = {us} 
             />
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12  texto">
          Software Engineer/Full-stack Developer
          Main stack: Ruby on Rails, JavaScript, React and Redux.
          Open to new full-stack development opportunities in global Tech.
          
        
       
        <div >
          A multi-skilled web developer who prioritizes commitment, responsibility, teamwork, writing/speaking skills, and a passion for development.

          </div>
          <div >
          I've developed knowledge in:
          <ul>
            <li>Full-stack development (Ruby on Rails, JavaScript, React)</li>
            <li> Bootstrap</li>
            <li>Materialize-CSS</li>
            <li>SCSS - SASS</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>Object-Oriented Programming</li>
          </ul>
            Passionate about solving problems and learning new things. Open to exploring exciting full-stack development opportunities. If you'd like to get in contact about potential job opportunities, please reach out!
          </div>
        </div>
        </div>
        
        </div>
    )
  }
}

export default About;
