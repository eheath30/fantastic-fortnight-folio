import Layout from "../components/Layout/Layout";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
        <title>Elliot Heath Portfolio</title>
        <meta
          name="description"
          content="A portfolio site built using Nextjs, Reactjs, Typescript & Styled Components"
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
