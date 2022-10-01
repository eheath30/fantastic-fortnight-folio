import styled from "styled-components";

export const PostCardDiv = styled.div`
width: 360px;
@media (max-width: 370px) {
  width: 320px;
  }
margin-bottom: 2rem;
border-radius: 0.5rem;
justify-self: center;
overflow: hidden;
background-color: #2E8BC0;
box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 2px 4px;
margin: 0 3rem 1rem 3rem;
`;

export const ImgContainer = styled.div`
position: relative;
width: auto;
height: 14rem;
&&:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;



export const Title = styled.h3`
text-align: center;
max-width: 250px;
padding: 0.5rem 0.5rem;
margin: 0;
`;

export const Author = styled.div`
display: flex;
flex-direction: row;
padding: 0 4rem 0 0;
`;
export const AuthorAvatar = styled.img`
height: 2rem;
margin: auto 0.5rem;
border-radius: 50px;
`;

export const AuthorName = styled.p`
@media (max-width: 500px) {
font-size: 1rem;
}
max-width: 80px;
overflow:hidden;
text-overflow: ellipsis;
`;

export const DateDiv = styled.p`
margin: auto 1rem auto 0;
display: flex;
text-align: flex-end;
@media (max-width: 500px) {
  font-size: 1rem;
  }
`;

export const Tab = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 0 0 0.2rem 0;

`;

export const GreaterTab = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;

`;
