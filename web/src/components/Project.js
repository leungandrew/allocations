import React from 'react';


const Project = ({project: {id, name, resources}}) => {
  return (
    <div id={`project-id-${id}`} key={`project-id-${id}`}>
      {name}
      {resources.map(resource =>
        <div>{resource.firstName} {resource.lastName} </div>
      )}
    </div>
  )
};


export default Project;
