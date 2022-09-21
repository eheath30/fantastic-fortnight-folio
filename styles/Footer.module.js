import styled from "styled-components";

export const FooterContainer = styled.section`
  padding: 2rem 0;
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  width: 100%;
  text-align: left;
  font: normal 16px sans-serif;
  padding: 45px 50px;
  border-top: 1px solid #222;
  @media (max-width: 700px) {
    float: none;
    margin: 0 auto 20px;
    text-align: center;
    line-height: 1.8;
  }
`;

export const FooterRight = styled.div`
  float: right;
  margin-top: 6px;
  max-width: 220px;
  @media (max-width: 700px) {
    text-align: center;
    float: none;
    margin: 0 auto 20px;
  }
`;

export const FooterLeft = styled.section`
  color: #8f9296;
  font-size: 14px;
  margin: 0;
  text-align: center;
  @media (max-width: 700px) {
    text-align: center;
    line-height: 1.8;
  }
`;

export const FooterSocialLink = styled.a`
  display: inline-block;
  width: 35px;
  height: 35px;
  border-radius: 2px;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 35px;
  margin-left: 0.5rem;
  transition: all 0.25s;
  &:hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
  }
`;

export const FooterTextLinks = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin: 0 0 10px;
  padding: 0
  color: #8f9296;
  font-size: 14px;
  margin: 0;
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  transition: ease 0.25s;
  &:after {
    content: "·";
    font-size: 20px;
    left: 0;
    color: #fff;
    display: inline-block;
    padding-right: 0.2rem;
    padding-left: 0.2rem;
  }
  @media (max-width: 700px) {
    line-height: 1.4;
  }
  @media (min-width: 700px) {
    padding: 0.6rem 0 0 0;
  }

`;

export const FooterTextLink = styled.a`
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin: 0 0 10px;
  padding: 0 0.2rem 0 0.2rem;
  display: inline-block;
  line-height: 1.8;
  transition: ease 0.25s;
  &:hover {
    text-decoration: underline;
  }
  &:before {
    content: "·";
    font-size: 20px;
    left: 0;
    color: #fff;
    display: inline-block;
    padding-right: 5px;
  }
`;
