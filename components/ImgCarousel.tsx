import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../styles/ImgCarousel.module.css";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCoverflow, Pagination } from "swiper";

import {passwordgenerator, gamesgrotto,todotabs,reecespieces,quizzlybears,pandapost,githut,pizzalovers,habithole,bionictext} from "../assets"
import {
  SliderContainer,
  CarouselImg,
  RepoLink,
  ArrowSVGLeft,
  ArrowSVGRight,
} from "../styles/ImgCarousel.module.js";

const ImgCarousel = () => {
  return (
    <SliderContainer>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiperslide}>
          <ArrowSVGLeft
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </ArrowSVGLeft>

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
          <ArrowSVGRight
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </ArrowSVGRight>
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

export default ImgCarousel;
