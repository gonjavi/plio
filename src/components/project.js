import React from 'react';
import PropTypes from 'prop-types';

const Project = props => {
  const { project } = props;
  const { id, img } = project;
  return (
    <div className="img img2" key={id}>
      <img
        alt=""
        width="80%"
        height="80%"
        src={img}
      />
      <div className="background-gradient">
        <div className="text-img">
          <p>React, Redux, CSS, and Bootstrap</p>
          <p>BOOKSTORE APP - 
            <a target="_blank" rel="noopener noreferrer" href="https://bookstore-g.herokuapp.com/"> DEMO LINK -</a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/gonjavi/reactBookStore/"> GITHUB</a>
          </p>
          <p>A Book Store app </p>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default Project;
