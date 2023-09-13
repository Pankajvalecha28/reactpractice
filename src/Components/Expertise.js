// components/Expertise.js

import React from 'react';
import expertiseData from '../Data/ExpertiseData.js' // Import the expertise data
import '../Styles/Expertise.css'

const Expertise = () => {
  return (
    <div className="expertise">
      <h2>Expertise</h2>
      <ul className="expertise-list">
        {expertiseData.map((item) => (
          <li key={item.id} className="expertise-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expertise;

