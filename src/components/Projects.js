import React, { Component } from 'react';

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
                    <div class="background-gradient">
                      <div class="text-img">
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/gonjavi/railsfacebookapp">
                        <p>Ruby on Rails</p>
                        <p>PRODUCT - FACEBOOKAPP</p>
                        <p>JavaScript</p>
                      </a>
                      </div>
                    </div>
                  </div>
                </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://gonjavi.github.io/HMTL5BOOTSTRAPNewsweek/">
              <div className="img img8">
                  <div class="background-gradient">
                    <div class="text-img">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/gonjavi/HMTL5BOOTSTRAPNewsweek">
                      <p>HTML - CSS3</p>
                      <p>PRODUCT - NEWSWEEK</p>
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
               <div className="img img5">
                  <div class="background-gradient">
                    <div class="text-img">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/gonjavi/javascriptrestaurantpage">
                      <p>JavaScript</p>
                      <p>PRODUCT - RESTAURANT</p>
                      <p></p>
                    </a>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://gonjavi.github.io/JavaScriptWeatherApp/">
                <div className="img img6">
                  <div class="background-gradient">
                    <div class="text-img">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/gonjavi/javascriptweatherapp"> 
                      <p>JavaScript</p>
                      <p>PRODUCT - WEATHERAPP</p>
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
