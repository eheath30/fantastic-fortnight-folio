import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Elliot Heath Portfolio</title>
        <meta name="description" content="A portfolio site built using Nextjs, Reactjs, Typescript & Styled Components" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This is the Title
        </h1>

        <p className={styles.description}>
        This is a description
          <code className={styles.code}>and some code.</code>
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>header 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corrupti temporibus vero repellendus quo ad, animi ullam reiciendis laborum aliquid ut sequi qui commodi.</p>
          </div>

          <div className={styles.card}>
            <h2>header 2 second</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corrupti temporibus vero repellendus quo ad, animi ullam reiciendis laborum aliquid ut sequi qui commodi.</p>
          </div>

          <div
            className={styles.card}
          >
            <h2>header 2 third</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corrupti temporibus vero repellendus quo ad, animi ullam reiciendis laborum aliquid ut sequi qui commodi.</p>
          </div>

          <div
            className={styles.card}
          >
            <h2>header 2 fourth</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corrupti temporibus vero repellendus quo ad, animi ullam reiciendis laborum aliquid ut sequi qui commodi.
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
