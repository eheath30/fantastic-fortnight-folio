import React from "react";
import ProjectSwiper from "./ProjectSwiper";

import {
  TitleContainer,
  ProjectsContainer,
  ProjectCard,
  ProjectsSection,
  ProjectLinks,
  LinkAnchor
} from "../styles/ProjectsGrid.module.js";

let projectdata = [
  {
    name: "Games Grotto",
    description:
      "The culmination of a full-stack training course. Built using JavaScript, ReactJS, Flask, PostgreSQL, Tiled, Bootstrap and custom CSS libraries.",
    github: "https://github.com/eheath30/GamesGrotto-Client",
    site: "https://games-grotto.netlify.app/",
  },
  {
    name: "Quizzly Bears",
    description:
      "A full-stack online multiplayer quiz game. Built using reactjs, framermotion, bootstrap, socketio and redux",
    github: "https://github.com/eheath30/quizzly-bears-netlify",
    site: "https://quizzly-bears.netlify.app/",
  },
  {
    name: "Habit Hole",
    description:
      "A sleep tracker with secure auth and data graphing. Built using html, css, javascript, docker, nodejs, expressjs, postgreSQL and chartjs",
    github: "https://github.com/eheath30/GamesGrotto-Client",
    site: "https://games-grotto.netlify.app/",
  },
  {
    name: "Portfolio 2.0",
    description:
      "A full-stack portfolio site built using typescript, reactjs, styled components, nextjs and framer motion.",
    github: "https://github.com/eheath30/GamesGrotto-Client",
    site: "https://ehdev.netlify.app/",
  },
];

export interface ListData {
  name: string;
  description: string;
  github: string;
  site: string;
}

const ProjectsGrid = () => {
  const Projects = () => {
    return projectdata.map(({ name, description, github, site }: ListData) => {
      return (
        <ProjectCard key={name}>
          <h2>{name}</h2>
          <p>{description}</p>
          <ProjectSwiper name={name.toString()}/>
          <ProjectLinks>
            <LinkAnchor href={github}>Github</LinkAnchor>
            <LinkAnchor href={site}>Live</LinkAnchor>
          </ProjectLinks>
        </ProjectCard>
      );
    });
  };

  return (
    <ProjectsSection id="recent-projects">
      <TitleContainer>Projects</TitleContainer>

      <ProjectsContainer>{Projects()}</ProjectsContainer>
    </ProjectsSection>
  );
};

export default ProjectsGrid;
