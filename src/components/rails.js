import React from 'react';
import { NavLink } from 'react-router-dom';
import dataProjects from '../dataProjects/data_rails';
import Project from './project';

const Rails = () => {
  const projectList = dataProjects.map(
    project => (
      <Project project={project} key={project.id} />
    ),
  );
  return (
    <div className="container">
      <hr />
      <br />
      <div className="row">
        <div className="col-12  text-center selected">To be updated soon</div>
        <div className="col-12 text-center selected"><p>SELECTED WORK</p></div>
      </div>
      <div className="row">
        <ul className="project-list">
          <li><NavLink to="/react" className="lista">React</NavLink></li>
          <li><NavLink to="/node" className="lista">Node</NavLink></li>
          <li><NavLink to="/rails" className="lista">Rails</NavLink></li>
          <li><NavLink to="/html-css" className="lista">HTML-CSS</NavLink></li>
          <li><NavLink to="/javascript" className="lista">Javascript</NavLink></li>
        </ul>
      </div>
      <div className="row contenedor">
        {projectList}
      </div>
    </div>
  );
};

export default Rails;
