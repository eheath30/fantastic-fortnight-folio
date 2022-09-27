import React from "react";
import styles from "../../styles/Layout.module.css";
import {Nav} from "../index";
interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div>
      <Nav />
      <section className={styles.section}>{children}</section>
    </div>
  );
};

export default Layout;
