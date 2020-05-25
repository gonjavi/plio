import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Project = props => {
  const { picture } = props;
  return (
    <div>
      <img 
        alt= 'proyecto'
        src={picture}
      />
    </div>
  );
  
}

Project.propTypes = {
  picture: PropTypes.any.isRequired,
}

export default Project;
