import React, { Component } from 'react';
import todolist from '../img/todolist.png';
import facebook from '../img/facebook.png';
import resto from '../img/resto.png';
import weather from '../img/weather.png';
import medium1 from '../img/medium1.png';
import newsweek from '../img/newsweek.png';
import newyork from '../img/newyork.png';
import apple from '../img/apple.png';


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
        
          <div className="col-md-6 col-sm-12">
          <img
            alt='todolist'
            width = '100%'
            src={todolist}
          />
          </div>
          <div className="col-md-6 col-sm-12 ">
          <img
            alt='todolist'
            width = '100%'
            src={resto}
            />
          </div>
          <div className="col-md-6 col-sm-12 ">
          <img
            alt='todolist'
            width = '100%'
            src={facebook}
            />
          </div>
          <div className="col-md-6 col-sm-12 ">
            <img
              alt='todolist'
              width = '100%'
              src={weather}
              />
          </div>
          <div className="col-md-6 col-sm-12 ">
            <img
              alt='medium'
              width = '100%'
              src={medium1}
              />
          </div>
          <div className="col-md-6 col-sm-12 mb-15">
            <img
              alt='apple'
              width = '100%'
              src={apple}
              />
          </div>
          <div className="col-md-6 col-sm-12">
            <img
              alt='newyork'
              width = '100%'
              src={newyork}
              />
          </div>
          <div className="col-md-6 col-sm-12 ">
            <img
              alt='newsweek'
              width = '100%'
              src={newsweek}
              />
          </div>

        </div>
        
      </div>
    )
  }
}

export default Projects;
