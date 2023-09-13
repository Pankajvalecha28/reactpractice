// Experience.js

// components/Experience.js

import React from 'react';
import experienceData from '../Data/ExperienceData'

const Experience = () => {
  return (
    <div className="experience">
      <h2>Experience</h2>
      {experienceData.map((item) => (
        <div className="experience-item" key={item.id}>
          <h3>{item.position}</h3>
          <p className="experience-date">{item.date}</p>
          <p className="experience-description">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;

