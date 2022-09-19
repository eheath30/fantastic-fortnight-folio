import React from "react";
import Image from "next/image";

import {
  SkillsContainer,
  SkillsCard,
  SkillName,
  Skill,
  SkillNameVariant,
  TitleContainer,
} from "../styles/SkillsGrid.module.js";

const ProjectsGrid = () => {
  return (
    <>
      {" "}
      <TitleContainer>Skills</TitleContainer>
      <SkillsContainer>
        <SkillsCard>
          <Skill>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              style={{ height: "35px" }}
              alt="JavaScript"
            />
            <SkillName>JavaScript</SkillName>
          </Skill>
          <Skill>
            <SkillNameVariant>Python</SkillNameVariant>
            <Image
              alt="Python"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              style={{ height: "35px" }}
            />
          </Skill>
          <Skill>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
              style={{ height: "35px" }}
              alt="TypeScript"
            />
            <SkillName>TypeScript</SkillName>
          </Skill>
          <Skill>
            <SkillNameVariant>CSS</SkillNameVariant>
            <Image
              alt="CSS"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              style={{ height: "35px" }}
            />
          </Skill>
          <Skill>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              style={{ height: "35px" }}
              alt="HTML"
            />
            <SkillName>HTML</SkillName>
          </Skill>
        </SkillsCard>

        <SkillsCard>
          <Skill>
            <SkillNameVariant>Git</SkillNameVariant>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              style={{ height: "35px" }}
              alt="Git"
            />
          </Skill>
          <Skill>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              style={{ height: "35px", backgroundColor: "RGBA(0, 0, 0, 0.5)" }}
              alt="NodeJS"
            />
            <SkillName>NodeJS</SkillName>
          </Skill>
          <Skill>
            <SkillNameVariant>Express</SkillNameVariant>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              style={{ height: "35px" }}
              alt="Express"
            />
          </Skill>
          <Skill>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              style={{ height: "35px", backgroundColor: "RGBA(0, 0, 0, 0.9)" }}
              alt="React"
            />
            <SkillName>React</SkillName>
          </Skill>
          <Skill>
            <SkillNameVariant>Next</SkillNameVariant>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              style={{ height: "35px" }}
              alt="Next"
            />
          </Skill>
        </SkillsCard>

        <SkillsCard>
          <Skill>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
              style={{ height: "35px" }}
              alt="Flask"
            />
            <SkillName>Flask</SkillName>
          </Skill>
          <Skill>
            <SkillNameVariant>Redux</SkillNameVariant>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              style={{ height: "35px" }}
              alt="Redux"
            />
          </Skill>
          <Skill>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              style={{ height: "35px" }}
              alt="PostgreSQL"
            />
            <SkillName>PostgreSQL</SkillName>
          </Skill>
          <Skill>
            <SkillNameVariant>SQLAlchemy</SkillNameVariant>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg"
              style={{ height: "35px" }}
              alt="SQLAlchemy"
            />
          </Skill>
          <Skill>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              style={{ height: "35px" }}
              alt="MongoDB"
            />
            <SkillName>MongoDB</SkillName>
          </Skill>
        </SkillsCard>

        <SkillsCard>
          <Skill>
            <SkillNameVariant>Markdown</SkillNameVariant>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg"
              style={{ height: "35px" }}
              alt="Markdown"
            />

          </Skill>
          <Skill>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              style={{ height: "35px" }}
              alt="Bootstrap"
            />
            <SkillName>Bootstrap</SkillName>
          </Skill>
          <Skill>
            <SkillNameVariant>Docker</SkillNameVariant>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
              style={{ height: "35px" }}
              alt="Docker"
            />
          </Skill>
          <Skill>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg"
              style={{ height: "35px" }}
              alt="SocketIO"
            />
            <SkillName>SocketIO</SkillName>
          </Skill>
          <Skill>
            <SkillNameVariant>Blender</SkillNameVariant>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg"
              style={{ height: "35px" }}
              alt="Blender"
            />
          </Skill>
        </SkillsCard>
      </SkillsContainer>
    </>
  );
};

export default ProjectsGrid;
