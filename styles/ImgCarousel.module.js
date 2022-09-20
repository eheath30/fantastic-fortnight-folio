import styled from "styled-components";

export const SliderContainer = styled.div`
  height: 14rem;
`;

export const CarouselImg = styled.img`
  width: 11rem;
`;

export const Dot = styled.div`
  align-self: center;
  font-size: 0rem;
  color: #0c2d48;
`;

export const RepoLink = styled.a`
  position: absolute;
  bottom: 0;
  left: 0.4rem;
  width: 40px;
  &:hover {
    transform: scale(1.05);
  }
`;
