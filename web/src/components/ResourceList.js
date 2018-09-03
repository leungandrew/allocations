import React from 'react';
import Resource from './Resource';

const ResourceList = ({resources}) => {
  return (
    <div>
      {
        resources.map( resource => {
          return <Resource id={resource.id} key={resource.id} resource={resource} />
        })
      }
    </div>
  )
};

export default ResourceList;
