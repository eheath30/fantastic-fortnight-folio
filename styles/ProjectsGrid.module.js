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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }
  max-width: 1400px;
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1200px) {
    margin: 1rem;
  }
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 700px;
  @media (prefers-color-scheme: light) {
    border: 1px inset RGBA(46, 139, 192, 1);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
  @media (prefers-color-scheme: dark) {
    border: 1px inset #b1d4e0;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

export const ProjectsSection = styled.div``;
