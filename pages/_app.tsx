import {Layout} from "../components";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
        <title>Elliot Heath Development Portfolio</title>
        <meta
          name="Description"
          content="A portfolio site showcasing various projects with links to live sites, online code-playgrounds and GitHub repos. Please feel free to contact me regarding work or collaboration."
        />
        <meta
          name="Author"
          content="EHDev"
        />
        <link rel="icon" href="/favicon.ico" />
        </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default MyApp;
