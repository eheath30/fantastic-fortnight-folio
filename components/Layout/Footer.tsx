import React, { useState } from "react";

import Image from "next/image";
import styles from "../../styles/Home.module.css";

import { FooterContainer } from "../../styles/Footer.module.js";

const Footer = () => {
  return (
    <FooterContainer>
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
    </FooterContainer>
  );
};

export default Footer;
