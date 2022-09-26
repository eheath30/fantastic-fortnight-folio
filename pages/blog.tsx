import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
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

const About: NextPage = () => {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          Coming soon...
        </motion.h1>
      </main>

      <Footer/>
    </div>
  );
};

export default About;
