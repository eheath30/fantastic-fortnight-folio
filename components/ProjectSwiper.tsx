import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper";
import styles from "../styles/ProjectSwiper.module.css";
import {gamesgrotto1, gamesgrotto2, gamesgrotto3, gamesgrotto4, gamesgrotto5,
  habithole1, habithole2, habithole3, habithole4, habithole5,
  quizzlybears1, quizzlybears2, quizzlybears3, quizzlybears4, quizzlybears5,
  portfolio1, portfolio2, portfolio3} from "../assets";

interface INameProps {
  name: string;
}
// TODO: https://www.img2go.com/ 934:895
const ProjectSwiper = (name: INameProps) => {
  const ProjectImages = () => {
    if (name.name === "Games Grotto") {
      return (
        <>
          <SwiperSlide>
          <svg className={styles.swipeiconleftlight}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z"/></svg>
            <img
              className={styles.projectimg}
              src={gamesgrotto1.src}
              width={"100%"}
              height={"auto"}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.projectimg}
              src={gamesgrotto2.src}
              width={"100%"}
              height={"auto"}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.projectimg}
              src={gamesgrotto3.src}
              width={"100%"}
              height={"auto"}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.projectimg}
              src={gamesgrotto4.src}
              width={"100%"}
              height={"auto"}
            ></img>
          </SwiperSlide>
          <SwiperSlide>

            <img
              className={styles.projectimg}
              src={gamesgrotto5.src}
              width={"100%"}
              height={"auto"}
            ></img>
          </SwiperSlide>
        </>
      );
    } else if (name.name === "Quizzly Bears") {
      return (
        <>
          <SwiperSlide>

            <img
              className={styles.projectimg}
              src={quizzlybears1.src}
              width={"100%"}
              height={"auto"}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.projectimg}
              src={quizzlybears2.src}
              width={"100%"}
              height={"auto"}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.projectimg}
              src={quizzlybears3.src}
              width={"100%"}
              height={"auto"}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.projectimg}
              src={quizzlybears4.src}
              width={"100%"}
              height={"auto"}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.projectimg}
              src={quizzlybears5.src}
              width={"100%"}
              height={"auto"}
            ></img>
          </SwiperSlide>
        </>
      );
    } else if (name.name === "Habit Hole") {
      return (
        <>
          <SwiperSlide>

            <img
              className={styles.projectimg}
              src={habithole1.src}
              width={"100%"}
              height={"auto"}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.projectimg}
              src={habithole2.src}
              width={"100%"}
              height={"auto"}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.projectimg}
              src={habithole3.src}
              width={"100%"}
              height={"auto"}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.projectimg}
              src={habithole4.src}
              width={"100%"}
              height={"auto"}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.projectimg}
              src={habithole5.src}
              width={"100%"}
              height={"auto"}
            ></img>
          </SwiperSlide>
        </>
      );
    } else if (name.name === "Portfolio 2.0") {
      return (
        <>
          <SwiperSlide>

            <img
              className={styles.projectimg}
              src={portfolio1.src}
              alt={name.name}
              width={"100%"}
              height={"auto"}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.projectimg}
              src={portfolio2.src}
              alt={name.name}
              width={"100%"}
              height={"auto"}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.projectimg}
              src={portfolio3.src}
              alt={name.name}
              width={"100%"}
              height={"auto"}
            ></img>
          </SwiperSlide>
        </>
      );
    }
  };

  return (
    <Swiper
      grabCursor={true}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ["-125%", 0, -800],
          rotate: [0, 0, -90],
        },
        next: {
          shadow: true,
          translate: ["125%", 0, -800],
          rotate: [0, 0, 90],
        },
      }}
      modules={[EffectCreative]}
      className={styles.swiper}
    >
      {ProjectImages()}
    </Swiper>
  );
};

export default ProjectSwiper;
