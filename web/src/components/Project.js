import React from 'react';

const Project = ({project: {id, name}}) => {
  return (
    <div id={`project-id-${id}`} key={`project-id-${id}`}>
      {name}
    </div>
  )
};


export default Project;
