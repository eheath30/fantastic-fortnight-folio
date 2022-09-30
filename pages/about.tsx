import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import {Footer} from "../components";
import ProfileImg from "../assets/profile.jpg"

import {
  AboutContainer,
  AboutGridItem,
  AboutGridImg,
  AboutMe,
  Contact,
  AboutMeHeader,
  AboutMeContent,
  ContactMeHeader,
  SpecialContact,
  SpecialContactMeHeader,
  PageContainer,
  Main
} from "../styles/About.module.js";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.3, duration: 0.5 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const About: NextPage = () => {
  return (
    <PageContainer>
      <motion.main
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
    <AboutContainer>
    <AboutGridItem>
      <AboutGridImg src={ProfileImg.src}></AboutGridImg>
      <Contact>
      <ContactMeHeader>Contact</ContactMeHeader>
      <p>elliot.heath@btinternet.com</p>
      </Contact>
    </AboutGridItem>
    <AboutGridItem>
      <AboutMe>
<AboutMeHeader>About Me</AboutMeHeader>
<AboutMeContent>Hi, I&apos;m Elliot, a programmer passionate about learning and teaching.<br /><br />
Before taking up programming full-time, I worked as a teacher and consultant with numerous companies and schools worldwide.<br /><br />
I&apos;ve decided to embark on a programming adventure and am currently studying software development full-time.  </AboutMeContent>
<SpecialContact>
      <SpecialContactMeHeader>Contact</SpecialContactMeHeader>
      <p>elliot.heath@btinternet.com</p>
      </SpecialContact>
      </AboutMe>
      </AboutGridItem>
    </AboutContainer>
    <Footer/>
    </motion.main>
    </PageContainer>
  );
};

export default About;
