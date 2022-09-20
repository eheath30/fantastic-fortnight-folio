import styled from "styled-components";

export const TitleContainer = styled.div`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 2rem;
  }
`;

export const TypicalContainer = styled.div`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 2rem;
  }
`;

export const DescriptionContainer = styled.div`
  text-align: center;
  margin: 10vh 0;
  line-height: 1.5;
  font-size: 1.5rem;
  @media (max-width: 700px) {
    font-size: 1rem;

  }
  @media (orientation : landscape) {
    margin: 12vh 0;
  }
`;

export const CodeContainer = styled.a`
  background: #2e8bc0;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
  @media (prefers-color-scheme: dark) {
    background: #145da0;
  }
  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;
