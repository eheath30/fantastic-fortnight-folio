import React from "react";
import Typical from "react-typical";
import { motion } from "framer-motion";
import {
  TitleContainer,
  TypicalContainer,
  DescriptionContainer,
  CodeContainer,
} from "../styles/Hero.module.js";
import ImgSlider from "./ImgCarousel";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 1.5 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const Hero = () => {
  return (
    <motion.div
      style={{ height: "80%", borderBottom:"1px solid #222", width: "80%", marginBottom:"2rem"}}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <TitleContainer>
        Let&#39;s talk about
        <TypicalContainer>
          <Typical
            wrapper="p"
            loop={1}
            steps={[
              "JavaScript",
              3000,
              "TypeScript",
              3000,
              "ReactJS",
              3000,
              "HTML & CSS",
              3000,
              "Node & Express",
              3000,
              "Flask & Django",
              3000,
              "Databases",
              3000,
              "UI & UX Design",
              3000,
              "Technology.",
              3000,
            ]}
          />
        </TypicalContainer>
      </TitleContainer>

      <ImgSlider />

      <DescriptionContainer>
        Scroll down to 
        <CodeContainer href="#recent-projects" rel="noopener noreferrer">see more.</CodeContainer>
      </DescriptionContainer>
    </motion.div>
  );
};

export default Hero;
