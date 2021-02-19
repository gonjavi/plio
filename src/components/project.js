import React from 'react';
import PropTypes from 'prop-types';

const Project = props => {
  const { project } = props;
  const {
    id,
    titulo,
    technologies,
    description,
    demoLink,
    githubLink,
    img,
  } = project;

  return (
    <div className="img img2 project" key={id}>
      <img
        alt=""
        width="80%"
        height="80%"
        src={img}
      />
      <div className="background-gradient">
        <div className="text-img">
          <p>{technologies}</p>
          <p>
            {titulo}
            {' '}
            -
            <a target="_blank" rel="noopener noreferrer" href={demoLink}> DEMO LINK -</a>
            <a target="_blank" rel="noopener noreferrer" href={githubLink}> GITHUB</a>
          </p>
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Project;
