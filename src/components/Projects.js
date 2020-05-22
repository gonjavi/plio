import React, { Component } from 'react';
import Project from './projects/Project';

class Projects extends Component {
  render() {
    return (
      <div className="container">
        <div className="col l12 s6">
          <Project />
        </div>
        
      </div>
    )
  }
}

export default Projects
