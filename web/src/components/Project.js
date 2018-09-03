import React from 'react';
import ResourceList from './ResourceList';

const Project = ({project: {id, name, resources}}) => {
  return (
    <div id={`project-id-${id}`} key={`project-id-${id}`}>
      {name}
      <br/>
      <ResourceList resources={resources} />
    </div>
  )
};

export default Project;
