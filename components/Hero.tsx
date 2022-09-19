import React from 'react'
import styles from '../styles/Hero.module.css'
import Typical from 'react-typical'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1, duration: 1.5 }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
};

const Hero = () => {
  return (
    <motion.div className="home container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
        <h1 className={styles.title}>
          Let&#39;s talk about <Typical wrapper="p" loop={1} steps={[
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
            "Software development",
            3000,
          ]}/>
        </h1>

        <p className={styles.description}>
        Scroll down to 
          <code className={styles.code}>see more.</code>
        </p>
        </motion.div>
  )
}

export default Hero
