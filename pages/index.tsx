import type { NextPage } from "next";
import { ProjectsGrid, SkillsGrid, Hero, Footer } from "../components"
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

import {
  DescriptionContainer,
  CodeContainer,
  Main,
  PageContainer
} from "../styles/Hero.module.js";

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

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Main>
        <Hero />
        <motion.div
          style={{ height: "60vh", width: "80vw", marginBottom: "2rem" }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={styles.motionmain}
        >
          <SkillsGrid />
          <ProjectsGrid />
          <DescriptionContainer>
            Learn more 
            <CodeContainer href="/about" rel="noopener noreferrer">
              about me.
            </CodeContainer>
          </DescriptionContainer>
          <Footer />
        </motion.div>
      </Main>
    </PageContainer>
  );
};

export default Home;
