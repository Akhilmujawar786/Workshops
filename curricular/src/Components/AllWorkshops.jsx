// AllWorkshops.jsx
import React from 'react';
import Cards from './Cards';
import Upcoming from './Upcoming';

const AllWorkshops = ({ currentWorkshops, upcomingWorkshops, removecard }) => {
  return (
    <div>
      <h2>Current Workshops</h2>
      <Cards template={currentWorkshops} removecard={removecard} />
      <h2>Upcoming Workshops</h2>
      <Upcoming upcoming_template={upcomingWorkshops} />
    </div>
  );
};

export default AllWorkshops;
