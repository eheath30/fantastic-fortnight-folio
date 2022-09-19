import styled from "styled-components";

export const SkillsContainer = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
max-width: 1200px;
margin-bottom: 3rem;
padding-bottom: 3rem;
border-bottom:1px solid #222;
`;

export const SkillsCard = styled.div`
margin: 1rem;
padding: 1.5rem;
text-align: left;
color: #0C2D48;
text-decoration: none;
border: 1px solid #eaeaea;
border-radius: 10px;
background-color: #B1D4E0;
max-width: 300px;
min-width: 260px;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
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
border:0px solid #0C2144;
border-radius: 0.3rem;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;


export const SkillNameVariant = styled.span`
font-size: 1.5rem;
padding-right: 1rem;
`;

export const TitleContainer = styled.div`
  margin: 0 0 1rem 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 2rem;
  }
`;
