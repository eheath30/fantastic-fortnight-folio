import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper";
import styles from "../styles/ProjectSwiper.module.css";
import gamesgrotto1 from "../assets/ProjectsCarousel/gamesgrotto1.png";
import gamesgrotto2 from "../assets/ProjectsCarousel/gamesgrotto2.png";
import gamesgrotto3 from "../assets/ProjectsCarousel/gamesgrotto3.png";
import gamesgrotto4 from "../assets/ProjectsCarousel/gamesgrotto4.png";
import gamesgrotto5 from "../assets/ProjectsCarousel/gamesgrotto5.png";
import habithole1 from "../assets/ProjectsCarousel/habithole1.png";
import habithole2 from "../assets/ProjectsCarousel/habithole2.png";
import habithole3 from "../assets/ProjectsCarousel/habithole3.png";
import habithole4 from "../assets/ProjectsCarousel/habithole4.png";
import habithole5 from "../assets/ProjectsCarousel/habithole5.png";
import quizzlybears1 from "../assets/ProjectsCarousel/quizzlybears1.png";
import quizzlybears2 from "../assets/ProjectsCarousel/quizzlybears2.png";
import quizzlybears3 from "../assets/ProjectsCarousel/quizzlybears3.png";
import quizzlybears4 from "../assets/ProjectsCarousel/quizzlybears4.png";
import quizzlybears5 from "../assets/ProjectsCarousel/quizzlybears5.png";
import portfolio1 from "../assets/ProjectsCarousel/portfolio1.png";
import portfolio2 from "../assets/ProjectsCarousel/portfolio2.png";
import portfolio3 from "../assets/ProjectsCarousel/portfolio3.png";

interface INameProps {
  name: string
}

const ProjectSwiper = (name: INameProps) => {
  const ProjectImages = () => {
    if (name.name === "Games Grotto") {
      return (
        <>
          // TODO: https://www.img2go.com/ 934:895
          <SwiperSlide>
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
    }
    else if (name.name === "Quizzly Bears") {
      return (
<>
          // TODO: https://www.img2go.com/ 934:895
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
      )
    }
    else if (name.name === "Habit Hole") {
      return (
        <>
          // TODO: https://www.img2go.com/ 934:895
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
    }
    else if (name.name === "Portfolio 2.0") {
      return (
        <>
          // TODO: https://www.img2go.com/ 934:895
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
      )
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
