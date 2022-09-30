import React from "react";
import ProjectSwiper from "./ProjectSwiper";

import {
  TitleContainer,
  ProjectsContainer,
  ProjectCard,
  ProjectsSection,
  ProjectLinks,
  LinkAnchor,
  ProjectName,
  ProjectDescription
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
      "A full-stack online multiplayer quiz game. Built using ReactJS, Framer Motion, Bootstrap, SocketIO and Redux.",
    github: "https://github.com/eheath30/quizzly-bears-netlify",
    site: "https://quizzly-bears.netlify.app/",
  },
  {
    name: "Habit Hole",
    description:
      "A sleep tracker with secure auth and data graphing. Built using HTML, CSS, JavaScript, Docker, NodeJS, ExpressJS, postgreSQL and chartjs.",
    github: "https://github.com/eheath30/habit-hole",
    site: "https://habithole.netlify.app/",
  },
  {
    name: "Portfolio 2.0",
    description:
      "A full-stack portfolio site built using TypeScript, ReactJS, Styled Components, NextJS and Framer Motion.",
    github: "https://github.com/eheath30/fantastic-fortnight-folio",
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
          <ProjectName>{name}</ProjectName>
          <ProjectDescription>{description}</ProjectDescription>
          <ProjectSwiper name={name.toString()} />
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
