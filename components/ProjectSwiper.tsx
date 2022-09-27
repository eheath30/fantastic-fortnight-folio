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
          <svg className={styles.swipeiconleftlight} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M117.2 160.4L224 64.3V64c0-12.6-7.4-24.1-19-29.2s-25-3-34.4 5.4l-160 144C3.9 190.3 0 198.9 0 208s3.9 17.7 10.6 23.8l160 144c9.4 8.5 22.9 10.6 34.4 5.4s19-16.6 19-29.2v-.3L117.2 255.6C103.7 243.4 96 226.1 96 208s7.7-35.4 21.2-47.6zM352 64c0-12.6-7.4-24.1-19-29.2s-25-3-34.4 5.4l-160 144c-6.7 6.1-10.6 14.7-10.6 23.8s3.9 17.7 10.6 23.8l160 144c9.4 8.5 22.9 10.6 34.4 5.4s19-16.6 19-29.2V288h32c53 0 96 43 96 96c0 30.4-12.8 47.9-22.2 56.7c-5.5 5.1-9.8 12-9.8 19.5c0 10.9 8.8 19.7 19.7 19.7c2.8 0 5.6-.6 8.1-1.9C494.5 467.9 576 417.3 576 304c0-97.2-78.8-176-176-176H352V64z"/></svg>
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
