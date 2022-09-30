import styled from "styled-components";

export const TitleContainer = styled.div`
padding-bottom: 1rem;
  @media (min-width: 900px) {
    margin: 2rem 0 1.5rem 0;
  }
  margin: 1.2rem 0 1rem 0;
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
  @media (max-width: 1310px) {
    grid-template-columns: repeat(1, 1fr);
  }
  max-width: 1400px;
  @media (min-width: 1200px) {
    gap: 1rem;
  }
  @media (min-width: 1360px) {
    gap: 2rem;
  }
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  @media (max-width: 1200px) {
    margin-bottom: 1.5rem;
  }
  text-align: left;
  color: inherit;
  text-decoration: none;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 700px;
  @media (prefers-color-scheme: light) {
    background-color: #2E8BC0;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
  @media (prefers-color-scheme: dark) {
    background-color: #2E8BC0;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

export const ProjectsSection = styled.div`
width: 100%;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
`;

export const ProjectName = styled.h1`
width: 100%;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
font-size: 2rem;
padding-bottom: 1rem;
@media (prefers-color-scheme: dark) {
  color: #071125

}
`;

export const ProjectDescription = styled.div`
width: 100%;
margin: auto;
display: flex;
padding: 0.5rem 0 0.5rem 0;
font-size: 1.3rem;
@media (prefers-color-scheme: dark) {
  color: #071125

}
`;



export const ProjectLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0.3rem 0 0.3rem 0;
`;

export const LinkAnchor = styled.a`
  appearance: button;
  background-color: #0C2144;
  border: 1px solid #222;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-family: din-round,sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: .8px;
  line-height: 20px;
  margin: 0 1rem 0 1rem;
  outline: none;
  text-decoration: none;
  overflow: visible;
  padding: 13px 16px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter .2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: 100%;
  min-height: 3rem;
  @media (prefers-color-scheme: light) {
    border-left: solid #222;
    color: #B1D4E0;
    text-decoration: none;
    background-color: #2E8BC0;
    }
  &:after {
  background-clip: padding-box;
  background-color: #145DA0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}
&:hover {
  filter: brightness(1.2);
  transform: scale(1.01);
  -webkit-filter: brightness(1.1);
  color: #B1D4E0;
}

`;
