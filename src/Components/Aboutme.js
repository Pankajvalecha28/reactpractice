// components/About.js

import React from 'react';

import aboutMeData from '../Data/AboutmeData.js';
import '../Styles/Aboutme.css'

const Aboutme = () => {
  return (
    <div className="about-me">
      <div className="about-me-content">
        <h2>{aboutMeData.title}</h2>
        {aboutMeData.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default Aboutme;
