import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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

import {
  SliderContainer,
  CarouselImg,
  Dot,
} from "../styles/ImgCarousel.module.js";

//  TODO: https://www.img2go.com/ 800:960
const ImgSlider = () => {
  return (
    <SliderContainer>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Dot>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1"
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
        </SwiperSlide>
        <SwiperSlide>
        <CarouselImg src={todotabs.src} alt="todotabs" />
        </SwiperSlide>
        <SwiperSlide>
        <CarouselImg src={passwordgenerator.src} alt="passwordgenerator" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImg src={githut.src} alt="githut" />
        </SwiperSlide>
        <SwiperSlide>
        <CarouselImg src={reecespieces.src} alt="reecespieces" />
        </SwiperSlide>
        <SwiperSlide>
        <CarouselImg src={gamesgrotto.src} alt="gameshop" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImg src={pizzalovers.src} alt="pizzalovers" />
        </SwiperSlide>
        <SwiperSlide>
        <CarouselImg src={pandapost.src} alt="pandapost" />
        </SwiperSlide>

        <SwiperSlide>
        <Dot>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1"
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
          <CarouselImg src={habithole.src} alt="habithole" />
        </SwiperSlide>
      </Swiper>
    </SliderContainer>
  );
};

export default ImgSlider;
