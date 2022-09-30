import styled from "styled-components";

export const PageContainer = styled.div`
margin: auto;
font-size: 1.3rem;
`;

export const Main = styled.main`
  @media (min-width: 1200px) {
    padding: 2rem 0;

  }
  @media (max-width: 900px) {
    padding: 1rem 0;

  }
`;


export const PostGrid = styled.div`
  display: grid;
  grid-gap: 3rem;
  align-items: center;
  @media (min-width: 1200px) {
    padding: 1rem 0;
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    grid-gap: 0.5rem;
    padding: 0 0 2rem 0;
  }
`;

export const BlogTitle = styled.p`
  padding: 0 2rem;
  font-size: 3rem;
  text-align: center;
  font-style: italic;

`;

export const Svg = styled.svg`
  margin: 0.5rem;
  width: 6rem;

`;
