import styled from "styled-components";

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

  @media (min-width: 1310px) {
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
    padding-left: 1rem;
    font-size: 2.2rem;
  }
  @media (max-width: 1310px) {
    padding-bottom: 1rem;
    border-bottom: 1px solid #222;
    font-size: 1.8rem;
  }
`;

export const ContactMeHeader = styled.h2`
  @media (min-width: 1311px) {
    margin: 2rem 0 2rem 0;
    padding-left: 0.5rem;
    font-size: 1.8rem;
  }
  @media (max-width: 1310px) {
    padding: 3rem 0 1rem 0;
    border-bottom: 1px solid #222;
    width: 50%;
    font-size: 1.5rem;
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

export const SpecialContact = styled.p`
  max-width: 30rem;
  @media (min-width: 1311px) {
    display: none;
  }
  @media (max-width: 1310px) {
    font-size: smaller;
  }
`;
