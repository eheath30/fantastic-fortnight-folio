import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ProjectsGrid from "../components/ProjectsGrid";
import SkillsGrid from "../components/SkillsGrid";
import Hero from "../components/Hero";

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
        <SkillsGrid />
        <ProjectsGrid />
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
