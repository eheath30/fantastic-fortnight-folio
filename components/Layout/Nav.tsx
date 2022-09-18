import React, { useState } from "react";
import styled from "styled-components";
import {
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../../styles/Nav.module.js"
import LogoImg from "../../assets/cat.jpg"

interface INav {
  expandNavbar: boolean;
}


export const NavbarContainer = styled.nav<INav>`
  width: 100%;
  height: ${({expandNavbar}) => (expandNavbar ? "100vh" : "80px")};
  background-color: black;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 80px;
  }
`;


const Nav = () => {
    const [expandNavbar, setExpandNavbar] = useState<boolean>(false);

    return (
      <NavbarContainer expandNavbar={expandNavbar}>
        <NavbarInnerContainer>
          <LeftContainer>
          <Logo src={LogoImg.src}></Logo>

          </LeftContainer>
          <RightContainer>
            <NavbarLinkContainer>
              <NavbarLink href="/"> Home</NavbarLink>
              {/* <NavbarLink href="/products"> Products</NavbarLink>
              <NavbarLink href="/contact"> Contact Us</NavbarLink> */}
              <NavbarLink href="/about"> About </NavbarLink>
              <OpenLinksButton
                onClick={() => {
                  setExpandNavbar((prevState) => !prevState);
                }}
              >
                {expandNavbar ? <>&#10005;</> : <> &#8801;</>}
              </OpenLinksButton>
            </NavbarLinkContainer>
          </RightContainer>
        </NavbarInnerContainer>
        {expandNavbar && (
          <NavbarExtendedContainer>
            <NavbarLinkExtended href="/"> Home</NavbarLinkExtended>
            {/* <NavbarLinkExtended href="/products"> Products</NavbarLinkExtended>
            <NavbarLinkExtended href="/contact"> Contact Us</NavbarLinkExtended> */}
            <NavbarLinkExtended href="/about"> About </NavbarLinkExtended>
          </NavbarExtendedContainer>
        )}
      </NavbarContainer>
    );
}

export default Nav
