import styled from "styled-components";

export const SkillsContainer = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;
  max-width: 1400px;
  margin-bottom: 1rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid #222;
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1310px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const SkillsCard = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: #0c2d48;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  background-color: #b1d4e0;
  max-width: 300px;
  min-width: 275px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  box-shadow: rgba(50, 50, 93, 0.2) 0px 10px 20px -6px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  @media (prefers-color-scheme: light) {
    border: 0.5rem inset RGBA(12, 45, 72, 0.9);
  }
  @media (prefers-color-scheme: dark) {
    border: 0.5rem inset RGBA(46, 139, 192, 1);
  }
`;

export const SkillName = styled.span`
  font-size: 1.5rem;
  padding-left: 1rem;
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 0.3rem;
  margin: 0.5rem 0.3rem;
  border: 0px solid #0c2144;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const SkillNameVariant = styled.span`
  font-size: 1.5rem;
  padding-right: 1rem;
`;

export const TitleContainer = styled.div`
  margin: 1rem 0 1rem 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 2rem;
  }
`;
