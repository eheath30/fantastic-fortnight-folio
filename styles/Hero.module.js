import styled from "styled-components";



export const PageContainer = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;

export const Main = styled.div`
  min-height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1200px) {
      padding: 6rem 0;
  }
  @media (max-width: 900px) {
      padding: 2rem 0;
  }
`;


export const TitleContainer = styled.div`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
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
    margin: 6vh 0;
  }
  @media (orientation: landscape) {
    margin: 12vh 0;
  }
`;

export const CodeContainer = styled.a`
  text-decoration: none;
  background: #2e8bc0;
  color: #b1d4e0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
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
  @media (prefers-color-scheme: light) {
    color: #0C2D48

  }
  &:hover {
    filter: brightness(1.1);
  }
`;
