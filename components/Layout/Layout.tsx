import React from 'react'
import styles from '../../styles/Layout.module.css'
import Nav from './Nav'
interface ILayoutProps {
	children?: React.ReactNode;
}


const Layout: React.FC<ILayoutProps> = ({children}) => {
  return (
    <div className={styles.container}>
      <Nav/>
      <section className={styles.section}>
        {children}
      </section>
    </div>
  )
}

export default Layout
