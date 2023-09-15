import React from 'react';
import aboutMeData from '../Data/AboutmeData.js'; // Import the aboutMeData object
import myImage from '../Images/profile.jpg'; // Import your image
import '../Styles/Aboutme.css';

const Aboutme = () => {
  const { title, content } = aboutMeData;

  return (
    <div className="about-me">
      <div className="about-me-content">
        <h2>{title}</h2>
        <div className="about-me-text">
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="about-me-image">
        <img src={myImage} alt="Profile" />
      </div>
    </div>
  );
};

export default Aboutme;
