import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper";
import styles from "../styles/ProjectSwiper.module.css"
const ProjectSwiper = () => {
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
    <SwiperSlide><img src="https://cdn.vox-cdn.com/thumbor/3GvnfOvGZB3paInd57sdlY1Hvu8=/0x0:1006x1014/1200x0/filters:focal(0x0:1006x1014):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22438217/Screen_Shot_2021_04_12_at_8.16.17_AM.png" width={"100%"} height={"auto"}></img></SwiperSlide>
    <SwiperSlide><img src="https://cdn.vox-cdn.com/thumbor/3GvnfOvGZB3paInd57sdlY1Hvu8=/0x0:1006x1014/1200x0/filters:focal(0x0:1006x1014):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22438217/Screen_Shot_2021_04_12_at_8.16.17_AM.png" width={"100%"} height={"auto"}></img></SwiperSlide>
    <SwiperSlide><img src="https://cdn.vox-cdn.com/thumbor/3GvnfOvGZB3paInd57sdlY1Hvu8=/0x0:1006x1014/1200x0/filters:focal(0x0:1006x1014):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22438217/Screen_Shot_2021_04_12_at_8.16.17_AM.png" width={"100%"} height={"auto"}></img></SwiperSlide>
    <SwiperSlide><img src="https://cdn.vox-cdn.com/thumbor/3GvnfOvGZB3paInd57sdlY1Hvu8=/0x0:1006x1014/1200x0/filters:focal(0x0:1006x1014):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22438217/Screen_Shot_2021_04_12_at_8.16.17_AM.png" width={"100%"} height={"auto"}></img></SwiperSlide>
    <SwiperSlide>Slide 5</SwiperSlide>
    <SwiperSlide>Slide 6</SwiperSlide>
    <SwiperSlide>Slide 7</SwiperSlide>
    <SwiperSlide>Slide 8</SwiperSlide>
    <SwiperSlide>Slide 9</SwiperSlide>
  </Swiper>
  )
}

export default ProjectSwiper
