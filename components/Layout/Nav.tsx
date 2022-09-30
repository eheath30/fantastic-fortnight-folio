import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../../styles/Nav.module.js";


interface INav {
  expandNavbar: boolean;
}

export const NavbarContainer = styled.nav<INav>`
  width: 100%;
  height: ${({ expandNavbar }) => (expandNavbar ? "100vh" : "80px")};
  background-color: transparent;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 80px;
  }
`;

const Nav = () => {
  const [expandNavbar, setExpandNavbar] = useState<boolean>(false);


  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <NavbarContainer expandNavbar={expandNavbar}>
        <NavbarInnerContainer>
          <LeftContainer>
            Elliot Heath
          </LeftContainer>
          <RightContainer>
            <NavbarLinkContainer>
              <NavbarLink href="/"> Home</NavbarLink>
              <NavbarLink href="/blog"> Blog</NavbarLink>
              {/* <NavbarLink href="/contact"> Contact</NavbarLink> */}
              <NavbarLink href="/about"> About </NavbarLink>
              <OpenLinksButton
                onClick={() => {
                  setExpandNavbar((prevState) => !prevState);
                }}
              >
                {expandNavbar ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </>
                )}
              </OpenLinksButton>
            </NavbarLinkContainer>
          </RightContainer>
        </NavbarInnerContainer>
        {expandNavbar && (
          <NavbarExtendedContainer>
            <NavbarLinkExtended href="/"> Home</NavbarLinkExtended>
            <NavbarLinkExtended href="/blog"> Blog</NavbarLinkExtended>
            {/* <NavbarLinkExtended href="/contact"> Contact</NavbarLinkExtended> */}
            <NavbarLinkExtended href="/about"> About </NavbarLinkExtended>
          </NavbarExtendedContainer>
        )}
      </NavbarContainer>
    </motion.div>
  );
};

export default Nav;
