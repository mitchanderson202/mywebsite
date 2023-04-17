import "./Projects.scss";
import projectData from "../../Data/Projects.json";

import { useState } from "react";
import Button from "../Buttons/Button";

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projectCount = projectData.length;

  const nextIndex = () => {
    setCurrentProjectIndex((currentProjectIndex + 1) % projectCount);
  };

  const previousIndex = () => {
    setCurrentProjectIndex(
      (currentProjectIndex - 1 + projectCount) % projectCount
    );
  };

  const currentProject = projectData[currentProjectIndex];

  return (
    <div className="projects-grid">
      <div className="projects">
        <h1>{currentProject.name}</h1>{" "}
        <img src={currentProject.image} alt={currentProject.name}></img>
        <div className="description">
          <p>
            {currentProject.description} <br />
            <a href={currentProject.ghLink} target="_blank" rel="noopener">
              GITHUB
            </a>
            {currentProject.liveLink && (
              <>
                {" "}
                |{" "}
                <a
                  href={currentProject.liveLink}
                  target="_blank"
                  rel="noopener"
                >
                  DEMO
                </a>
              </>
            )}
          </p>
          <h4>{currentProject.stack}</h4>
        </div>
        <div className="buttons">
          <Button onClick={previousIndex} text="<" />
          <Button onClick={nextIndex} text=">" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
