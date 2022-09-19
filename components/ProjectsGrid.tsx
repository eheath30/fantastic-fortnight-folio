import React from "react";
import styles from "../styles/ProjectsGrid.module.css";

import {
  TitleContainer,
  ProjectsContainer
} from "../styles/ProjectsGrid.module.js";



const ProjectsGrid = () => {
  return (
    <>
    <TitleContainer>Projects</TitleContainer>
    <ProjectsContainer id="recent-projects" >

      <div className={styles.card}>
        <h2>header 2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          corrupti temporibus vero repellendus quo ad, animi ullam reiciendis
          laborum aliquid ut sequi qui commodi.
        </p>
      </div>

      <div className={styles.card}>
        <h2>header 2 second</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          corrupti temporibus vero repellendus quo ad, animi ullam reiciendis
          laborum aliquid ut sequi qui commodi.
        </p>
      </div>

      <div className={styles.card}>
        <h2>header 2 third</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          corrupti temporibus vero repellendus quo ad, animi ullam reiciendis
          laborum aliquid ut sequi qui commodi.
        </p>
      </div>

      <div className={styles.card}>
        <h2>header 2 fourth</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          corrupti temporibus vero repellendus quo ad, animi ullam reiciendis
          laborum aliquid ut sequi qui commodi.
        </p>
      </div>

      <div className={styles.card}>
        <h2>header 2 fifth</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          corrupti temporibus vero repellendus quo ad, animi ullam reiciendis
          laborum aliquid ut sequi qui commodi.
        </p>
      </div>

      <div className={styles.card}>
        <h2>header 2 sixth</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          corrupti temporibus vero repellendus quo ad, animi ullam reiciendis
          laborum aliquid ut sequi qui commodi.
        </p>
      </div>
    </ProjectsContainer>
    </>
  );
};

export default ProjectsGrid;
