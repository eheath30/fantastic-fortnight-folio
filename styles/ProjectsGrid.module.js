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
