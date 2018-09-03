import React from 'react';

const Resource = ({resource}) => {
  return (
    <div>
      {resource.firstName} {resource.lastName}
    </div>
  )
};

export default Resource;
