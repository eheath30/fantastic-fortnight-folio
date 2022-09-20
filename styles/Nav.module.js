import styled from "styled-components";

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-start;
  @media (min-width: 900px) {
    padding: 1.5rem 2rem 0 1.5rem;
  }
  padding: 0.5rem 2rem 0 1rem;
  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

export const RightContainer = styled.div`
flex: 70%;
display: flex;
justify-content: flex-end;
align-items: center;
padding-left: 5%;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled.a`
@media (prefers-color-scheme: dark) {
  color: #B1D4E0;
  }
  @media (prefers-color-scheme: light) {
    color: #0C2D48;
    }
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled.a`
@media (prefers-color-scheme: dark) {
  color: #B1D4E0;
  }
  @media (prefers-color-scheme: light) {
    color: #0C2D48;
    }
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  width: 4rem;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  @media (prefers-color-scheme: dark) {
    color: #B1D4E0;
    }
    @media (prefers-color-scheme: light) {
      color: #0C2D48;
      }
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;
