import styled from "styled-components";

export const SliderContainer = styled.div`
  height: 14rem;
`;

export const CarouselImg = styled.img`
  width: 11rem;
`;

export const ArrowSVGLeft = styled.svg`
  position: absolute;
  width: 20%;
  filter: invert(100%);
  top: 0.1rem;
  left: 0.1rem;
`;

export const ArrowSVGRight = styled.svg`
  position: absolute;
  width: 20%;
  filter: invert(100%);
  top: 0.1rem;
  right: 0.1rem;
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
