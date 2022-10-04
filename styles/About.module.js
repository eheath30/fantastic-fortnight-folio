import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
}
`;

export const Main = styled.main`
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

export const AboutContainer = styled.section`
  display: grid;
  width: 100%;
  margin: 10% auto;
  padding-bottom: 2rem;
  @media (min-width: 1311px) {
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 1310px) {
    gap: 0.5rem;
    grid-template-columns: 1fr;
  }
  @media (prefers-color-scheme: light) {
  }
`;

export const AboutGridItem = styled.div`
  @media (min-width: 1311px) {
    margin: 0 0 0 5rem;
  }
`;

export const AboutGridImg = styled.img`
  width: 20rem;
  border-radius: 20px 5px 20px 5px;

  @media (min-width: 1311px) {
    margin: 0 5rem 2rem 0;
  }
`;

export const AboutMe = styled.div``;

export const Contact = styled.div`
  @media (max-width: 1310px) {
    display: none;
  }
  @media (min-width: 1311px) {
    margin: 0 5rem 7rem 0;
    padding-left: 1rem;
  }
`;

export const AboutMeHeader = styled.h2`
  @media (min-width: 1311px) {
    margin: 0 5rem 5rem 0;
    padding-left: 1.5rem;
    font-size: 2.1rem;
  }
  @media (max-width: 1310px) {
    padding-bottom: 1rem;
    border-bottom: 1px solid #222;
    font-size: 1.7rem;
  }
`;

export const ContactMeHeader = styled.h2`
  @media (min-width: 1311px) {
    margin: 2rem 0 2rem 0;
    padding-left: 0.4rem;
    font-size: 1.8rem;
  }
  @media (max-width: 1310px) {
    display: none;
  }
`;

export const AboutMeContent = styled.p`
  max-width: 30rem;
  @media (min-width: 1311px) {
    margin: 0 5rem 7rem 0;
    padding-left: 1rem;
  }
  @media (max-width: 1310px) {
    font-size: smaller;
  }
`;

export const SpecialContact = styled.div`
  max-width: 30rem;
  @media (min-width: 1311px) {
    display: none;
  }
  @media (max-width: 1310px) {
    font-size: smaller;
  }
`;

export const SpecialContactMeHeader = styled.p`
@media (min-width: 1311px) {
  display: none;
}
@media (max-width: 1310px) {
  padding: 3rem 0 1rem 0;
  border-bottom: 1px solid #222;
  width: 50%;
  font-size: 1.5rem;
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
  @media (min-width: 1311px) {
    display: none;
  }
  @media (prefers-color-scheme: light) {
    color: #0C2D48

  }
  &:hover {
    filter: brightness(1.1);
  }
`;
