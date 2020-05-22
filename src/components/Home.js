import React, { Component } from 'react'
import Intro from './Intro';
import Projects from './Projects';

class Home extends Component {
  render() {
    return (
      <div>
        <Intro />
        <Projects />
      </div>
    )
  }
}

export default Home;
