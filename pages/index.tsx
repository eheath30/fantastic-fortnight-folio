import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ProjectsGrid from "../components/ProjectsGrid";
import SkillsGrid from "../components/SkillsGrid";
import Hero from "../components/Hero";
import {motion} from 'framer-motion'


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
      style={{ height: "100%", borderBottom:"1px solid #222", width: "80%", marginBottom:"2rem"}}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
        <SkillsGrid />
        <ProjectsGrid />
        </motion.div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
