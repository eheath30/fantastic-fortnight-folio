import type { NextPage } from "next";
import { motion } from "framer-motion";
import {Footer} from "../components";

import {
  PageContainer,
  Main
} from "../styles/About.module.js";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 1 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const About: NextPage = () => {
  return (
    <PageContainer>

      <Main>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          Coming soon...
          <br/>         <br/>
          <Footer/>
        </motion.div>

        </Main>


    </PageContainer>
  );
};

export default About;
