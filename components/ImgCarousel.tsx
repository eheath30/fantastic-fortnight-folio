import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../styles/ImgCarousel.module.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

import passwordgenerator from "../assets/ImgsCarousel/passwordgenerator.png";
import gamesgrotto from "../assets/ImgsCarousel/gamesgrotto.png";
import todotabs from "../assets/ImgsCarousel/todotabs.png";
import reecespieces from "../assets/ImgsCarousel/reecespieces.png";
import quizzlybears from "../assets/ImgsCarousel/quizzlybears.png";
import pandapost from "../assets/ImgsCarousel/pandapost.png";
import githut from "../assets/ImgsCarousel/githut.png";
import pizzalovers from "../assets/ImgsCarousel/pizzalovers.png";
import habithole from "../assets/ImgsCarousel/habithole.png";
import bionictext from "../assets/ImgsCarousel/bionictext.png";

import {
  SliderContainer,
  CarouselImg,
  Dot,
  RepoLink,
} from "../styles/ImgCarousel.module.js";



const ImgSlider = () => {
  return (
    <SliderContainer>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiperslide}>
          <Dot>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              width={"3rem"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </Dot>
          <CarouselImg src={quizzlybears.src} alt="quizzlybears" />
          <RepoLink
            href="https://github.com/eheath30/quizzly-bears-netlify"
            target="_blank"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          </RepoLink>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <CarouselImg src={todotabs.src} alt="todotabs" />
          <RepoLink
            href="https://github.com/eheath30/Todo-Tabs"
            target="_blank"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          </RepoLink>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <CarouselImg src={passwordgenerator.src} alt="passwordgenerator" />
          <RepoLink
            href="https://codepen.io/eheath30/pen/BaYyPJG"
            target="_blank"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codepen/codepen-plain.svg" />
          </RepoLink>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <CarouselImg src={githut.src} alt="githut" />
          <RepoLink href="https://github.com/eheath30/git-hut" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          </RepoLink>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <CarouselImg src={reecespieces.src} alt="reecespieces" />
          <RepoLink
            href="https://github.com/eheath30/music-card-site"
            target="_blank"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          </RepoLink>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <CarouselImg src={gamesgrotto.src} alt="gameshop" />
          <RepoLink
            href="https://github.com/Ismael76/GamesGrotto-Client"
            target="_blank"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          </RepoLink>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <CarouselImg src={pizzalovers.src} alt="pizzalovers" />
          <RepoLink
            href="https://github.com/eheath30/Fp_Day3_Frameworks"
            target="_blank"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          </RepoLink>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <CarouselImg src={pandapost.src} alt="pandapost" />
          <RepoLink
            href="https://github.com/eheath30/Telegraph-Clone-Panda-Post"
            target="_blank"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          </RepoLink>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <CarouselImg src={habithole.src} alt="habithole" />
          <RepoLink
            href="https://github.com/eheath30/habit-hole"
            target="_blank"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          </RepoLink>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <Dot>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              width={"3rem"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Dot>
          <CarouselImg src={bionictext.src} alt="bionictext" />
          <RepoLink
            href="https://codepen.io/eheath30/pen/qBxmMXo"
            target="_blank"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codepen/codepen-plain.svg" />
          </RepoLink>
        </SwiperSlide>
      </Swiper>
    </SliderContainer>
  );
};

export default ImgSlider
