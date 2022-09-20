import React from "react";

import {
  TitleContainer,
  ProjectsContainer,
  ProjectCard,
  ProjectsSection
} from "../styles/ProjectsGrid.module.js";

const ProjectsGrid = () => {
  return (
    <ProjectsSection id="recent-projects">
      <TitleContainer>Projects</TitleContainer>
      <ProjectsContainer>
        <ProjectCard>
          <h2>header 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            corrupti temporibus vero repellendus quo ad, animi ullam reiciendis
            laborum aliquid ut sequi qui commodi.
          </p>
        </ProjectCard>

        <ProjectCard>
          <h2>header 2 second</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            corrupti temporibus vero repellendus quo ad, animi ullam reiciendis
            laborum aliquid ut sequi qui commodi.
          </p>
        </ProjectCard>

        <ProjectCard>
          <h2>header 2 third</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            corrupti temporibus vero repellendus quo ad, animi ullam reiciendis
            laborum aliquid ut sequi qui commodi.
          </p>
        </ProjectCard>

        <ProjectCard>
          <h2>header 2 fourth</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            corrupti temporibus vero repellendus quo ad, animi ullam reiciendis
            laborum aliquid ut sequi qui commodi.
          </p>
        </ProjectCard>

        <ProjectCard>
          <h2>header 2 fifth</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            corrupti temporibus vero repellendus quo ad, animi ullam reiciendis
            laborum aliquid ut sequi qui commodi.
          </p>
        </ProjectCard>

        <ProjectCard>
          <h2>header 2 sixth</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            corrupti temporibus vero repellendus quo ad, animi ullam reiciendis
            laborum aliquid ut sequi qui commodi.
          </p>
        </ProjectCard>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default ProjectsGrid;
