import React, { Component } from 'react';
import facebook from '../img/facebook.png';
import newsweek from '../img/newsweek.png';
import resto from '../img/resto.png';
import weather from '../img/weather.png';

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
              <a target="_blank" rel="noopener noreferrer" href="https://bookfaces1.herokuapp.com/">
                <div className="img img2">
                  <img    
                    alt='facebookapp'
                    width = '80%'
                    height = '80%'
                    src={facebook}
                  />
                    <div class="background-gradient">
                      <div class="text-img">
                     
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/gonjavi/railsfacebookapp">
                        <p>Ruby on Rails - JavaScript</p>
                        <p>PRODUCT - FACEBOOKAPP - GITHUB</p>
                      </a>
                      </div>
                    </div>
                  </div>
                </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://gonjavi.github.io/HMTL5BOOTSTRAPNewsweek/">
              <div className="img img2">
                <img    
                    alt='facebookapp'
                    width = '80%'
                    height = '80%'
                    src={newsweek}
                  />
                  <div class="background-gradient">
                    <div class="text-img">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/gonjavi/HMTL5BOOTSTRAPNewsweek">
                      <p>HTML - CSS3</p>
                      <p>PRODUCT - NEWSWEEK - GITHUB</p>
                      <p></p>
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            
          </div>
          <div className="col-md-6 col-sm-11 columnas">
            <div>
            <a target="_blank" rel="noopener noreferrer" href="https://gonjavi.github.io/JavascriptRestaurantPage/">
               <div className="img img2">
                 <img    
                    alt='facebookapp'
                    width = '80%'
                    height = '80%'
                    src={resto}
                  />
                  <div class="background-gradient">
                    <div class="text-img">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/gonjavi/javascriptrestaurantpage">
                      <p>JavaScript</p>
                      <p>PRODUCT - RESTAURANT - GITHUB</p>
                      <p></p>
                    </a>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://gonjavi.github.io/JavaScriptWeatherApp/">
                <div className="img img2">
                 <img    
                    alt='facebookapp'
                    width = '80%'
                    height = '80%'
                    src={weather}
                  />
                  <div class="background-gradient">
                    <div class="text-img">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/gonjavi/javascriptweatherapp"> 
                      <p>JavaScript</p>
                      <p>PRODUCT - WEATHERAPP - GITHUB</p>
                      <p></p>
                    </a>
                    </div>
                  </div>
                </div>
              </a>
            </div>
         
            
            
           
          </div>

        </div>
        
      </div>
    )
  }
}

export default Projects;
