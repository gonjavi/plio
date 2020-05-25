import React, { Component } from 'react';
import todolist from '../img/todolist.png';
import facebook from '../img/facebook.png';
import resto from '../img/resto.png';
import weather from '../img/weather.png';

class Projects extends Component {

  render() {
    return (
      <div className="container">
        <hr />
        <br />
        <div className="row">
          <div className="col-12 text-center"><p>SELECTED WORK</p></div>
        </div>

        <div className="row">
        
          <div className="col-6 ">
          <img
            alt='todolist'
            width = '100%'
            src={todolist}
          />
          </div>
          <div className="col-6">
          <img
            alt='todolist'
            width = '100%'
            src={resto}
            />
          </div>
          <div className="col-6">
          <img
            alt='todolist'
            width = '100%'
            src={facebook}
            />
          </div>
          <div className="col-6">
          <img
            alt='todolist'
            width = '100%'
            src={weather}
            />
          </div>

        </div>
        
      </div>
    )
  }
}

export default Projects;
