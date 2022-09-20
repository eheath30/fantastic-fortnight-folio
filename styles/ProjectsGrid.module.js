import styled from "styled-components";


export const TitleContainer = styled.div`
  margin: 2rem 0 1rem 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 2rem;
  }
`;

export const ProjectsContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
max-width: 1200px;
`;

export const ProjectCard = styled.div`
margin: 1rem;
padding: 1.5rem;
text-align: left;
color: inherit;
text-decoration: none;
border: 1px solid #eaeaea;
border-radius: 10px;
transition: color 0.15s ease, border-color 0.15s ease;
max-width: 300px;
`;

export const ProjectsSection = styled.div`
`;
