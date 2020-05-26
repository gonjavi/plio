import React, { Component } from 'react';
import todolist from '../img/todolist.png';
import facebook from '../img/facebook.png';
import resto from '../img/resto.png';
import weather from '../img/weather.png';
import medium1 from '../img/medium1.png';
import newsweek from '../img/newsweek.png';
import newyork from '../img/newyork.png';
import apple from '../img/apple.png';
import { Link } from 'react-router-dom';


class Projects extends Component {

  render() {
    return (
      <div className="container">
        <hr />
        <br />
        <div className="row">
          <div className="col-12 text-center selected"><p>SELECTED WORK</p></div>
        </div>

        <div className="row">
        
          <div className="col-md-6 col-sm-12 columnas">
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://gonjavi.github.io/JavascriptTodoList/">
                <img
                  alt='todolist'
                  width = '100%'
                  src={todolist}
                />
              </a>
            </div>

            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://bookfaces1.herokuapp.com/">
                <img
                  alt='facebookapp'
                  width = '100%'
                  src={facebook}
                  />
                </a>
            </div>
            <div className="">
              <a target="_blank" rel="noopener noreferrer" href="https://gonjavi.github.io/cssframework/">
                <img
                  alt='medium'
                  width = '100%'
                  src={medium1}
                  />
              </a>
            </div>
            <div className="">
              <a target="_blank" rel="noopener noreferrer" href="https://gonjavi.github.io/HTML5CSS3NewYorkTimes/">
                <img
                  alt='newyork'
                  width = '100%'
                  src={newyork}
                  />
              </a>
            </div>

          </div>
          <div className="col-md-6 col-sm-11 columnas">
            <div>
            <a target="_blank" rel="noopener noreferrer" href="https://gonjavi.github.io/JavascriptRestaurantPage/">
              <img
                alt='restaurant'
                width = '100%'
                src={resto}
                />
              </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://gonjavi.github.io/JavaScriptWeatherApp/">
                <img
                  alt='weatherapp'
                  width = '100%'
                  src={weather}
                  />
              </a>
            </div>
         
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://gonjavi.github.io/HTML5CSS3ApplePage/">
                <img
                  alt='apple'
                  width = '100%'
                  src={apple}
                  />
              </a>
            </div>
            
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://gonjavi.github.io/HMTL5BOOTSTRAPNewsweek/">
                <img
                  alt='newsweek'
                  width = '100%'
                  src={newsweek}
                  />
              </a>
            </div>
          </div>

        </div>
        
      </div>
    )
  }
}

export default Projects;
