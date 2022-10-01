import styled from "styled-components";

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-start;
  @media (min-width: 900px) {
    padding: 0rem 2rem 0 1.5rem;
  }
  @media (max-width: 900px) {
    padding: 1rem 0 0 1rem;
  }
  padding: 0 0 0 1rem;
  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

export const RightContainer = styled.div`
@media (min-width: 900px) {
  padding: 0.5rem 1rem 0 1.5rem;
}
@media (min-width: 701px) {
  padding: 1rem 0 0 1rem;
}
@media (max-width: 700px) {
  padding: none;
}
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
  align-items: center;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 0.5rem;


`;

export const NavbarLink = styled.a`
  @media (prefers-color-scheme: dark) {
    color: #b1d4e0;
  }
  @media (prefers-color-scheme: light) {
    color: #0c2d48;
  }
  &:hover {
    transform: scale(1.02);
  }
  font-size: 1.6rem;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 0.5rem;
  padding: 0.5rem;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled.a`
  @media (prefers-color-scheme: dark) {
    color: #b1d4e0;
  }
  @media (prefers-color-scheme: light) {
    color: #0c2d48;
  }
  font-size: 1.5rem;
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
  width: 80px;
  height: 50px;
  background: none;
  border: none;
  @media (prefers-color-scheme: dark) {
    color: #b1d4e0;
  }
  @media (prefers-color-scheme: light) {
    color: #0c2d48;
  }
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 701px) {
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
