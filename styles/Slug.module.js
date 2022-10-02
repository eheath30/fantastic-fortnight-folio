import styled from "styled-components";

export const BackButton = styled.a`
font-size: 1.4rem;
text-decoration: underline;
padding-left: 1rem;
opacity: 0.98;
&:hover {
font-size: 1.42rem;
opacity: 1;
  cursor: pointer;
}
`;

export const BackButtonEnd = styled.a`
font-size: 1.4rem;
text-decoration: underline;
margin: 0 0 0 2rem;
opacity: 0.98;
&:hover {
font-size: 1.42rem;
opacity: 1;
  cursor: pointer;
}
`;

export const PostDiv = styled.div`
font-size: larger;
max-width: 50rem;
margin: 0 1rem 0 1rem;
padding-top: 1rem;
overflow: hidden;

`;

export const GreaterPostDiv = styled.div`
@media (min-width: 800px) {
  display: flex;
  flex-direction: column;
  align-items: center;
}
`;

export const SlugContainer = styled.div`
@media (max-width: 800px) {
    width: 95%;
  }
`;

export const SlugHeaderContainer = styled.div`
padding: 2rem 0 0 0;
border-bottom: 1px solid #222;
margin: auto;
width: 100%;
max-width: 50rem;
cursor: default;
`;

export const SlugHeaderText = styled.div`
display: flex;
justify-content: space-between;
padding: 1rem 0 1rem 0;
`;

export const SlugHeaderImg = styled.img`
width: 100%;
border-radius: 7px 7px 0 0;
`;


export const SlugAuthor = styled.div`
display: flex;
`;

export const SlugAuthorAvatar = styled.img`
height: 2rem;
margin: auto 0.5rem;
border-radius: 50px;
&:hover {
  transform: scale(1.1)
}
`;

export const SlugAuthorName = styled.div`
font-size: 1.2rem;
margin: auto 0;
@media (max-width: 500px) {
  font-size: 1rem;
}
`;

export const SlugDate = styled.div`
font-size: 1.2rem;
margin: auto 1rem auto 0;
padding-bottom: 3px;
@media (max-width: 500px) {
  font-size: 1rem;
}
`;

export const SlugCategory = styled.div`
font-size: 1.2rem;
margin: 0;
padding-bottom: 3px;
text-decoration: underline;
@media (max-width: 500px) {
  font-size: 1rem;
}
`;



export const FooterContainer = styled.div`
@media (min-width: 900px) {
  padding-top: 3rem;
}
@media (max-width: 900px) {
  padding-top: 2rem;
}

`;
