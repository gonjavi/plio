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
                        <p>Ruby on Rails</p>
                        <p>PRODUCT - FACEBOOKAPP</p>
                        <p>JavaScript</p>
                      </div>
                    </div>
                  </div>
                </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://gonjavi.github.io/HTML5CSS3ApplePage/">
              <div className="img img7">
                  <div class="background-gradient">
                    <div class="text-img">
                      <p>HTML - CSS3</p>
                      <p>PRODUCT - APPLE</p>
                      <p></p>
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
                      <p>JavaScript</p>
                      <p>PRODUCT - RESTAURANT</p>
                      <p></p>
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
                      <p>JavaScript</p>
                      <p>PRODUCT - WEATHERAPP</p>
                      <p></p>
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
