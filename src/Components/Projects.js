// components/Projects.js

import React from 'react';
import projectsData from '../Data/ProjectsData.js'; // Import the project data
import Project from './Project.js'; // Import the Project component
import '../Styles/Projects.css'

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectsData.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
