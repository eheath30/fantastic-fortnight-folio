import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ProjectsGrid from "../components/ProjectsGrid";
import SkillsGrid from "../components/SkillsGrid";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import Footer from "../components/Layout/Footer";

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
    <div className={styles.container}>
      <Head>
        <title>Elliot Heath Portfolio</title>
        <meta
          name="description"
          content="A portfolio site built using Nextjs, Reactjs, Typescript & Styled Components"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero />
        <motion.div
          style={{ height: "60vh", width: "80%", marginBottom: "2rem" }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={styles.motionmain}
        >
          <SkillsGrid />
          <ProjectsGrid />
          <Footer />
        </motion.div>
      </main>
    </div>
  );
};

export default Home;
