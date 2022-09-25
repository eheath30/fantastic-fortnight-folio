import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Footer from "../components/Layout/Footer";
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
  SpecialContact
} from "../styles/About.module.js";

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

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Elliot Heath Portfolio</title>
        <meta
          name="description"
          content="A portfolio site built using Nextjs, Reactjs, Typescript & Styled Components"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.h1
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
      <ContactMeHeader>Contact</ContactMeHeader>
      <p>elliot.heath@btinternet.com</p>
      </SpecialContact>
      </AboutMe>
      </AboutGridItem>
    </AboutContainer>
    <Footer/>
    </motion.h1>


      {/* <main className={styles.main}>

          Coming soon...

      </main> */}



    </div>
  );
};

export default About;
